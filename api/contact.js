// Vercel Serverless Function for the 3DARK contact form.
//
// NOTE: package.json sets "type": "module", so this file must be ESM and must
// provide a default export. It previously used require()/module.exports, which
// left the handler undefined and made every request fail with
// FUNCTION_INVOCATION_FAILED.
import nodemailer from 'nodemailer';

const SITE_NAME = '3DARK';
const SITE_URL = 'https://www.3dark.de';

// Origins allowed to POST the form from a browser.
const ALLOWED_ORIGINS = [
  'https://www.3dark.de',
  'https://3dark.de',
  'http://localhost:4301',
];

// HTML escape to prevent injection into the notification emails
function escapeHtml(unsafe) {
  if (unsafe === undefined || unsafe === null) return '';
  return unsafe
    .toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Best-effort rate limiting. Serverless instances are recycled and run in
// parallel, so this only throttles bursts that land on the same warm instance.
// Move to Vercel KV / Upstash if abuse becomes a real problem.
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const MAX_REQUESTS = 3;
const recentRequests = new Map();

function isRateLimited(ip) {
  if (!ip || ip === 'unknown') return false;
  const now = Date.now();
  const hits = (recentRequests.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW);
  hits.push(now);
  recentRequests.set(ip, hits);

  // Keep the map from growing unbounded on a long-lived instance
  if (recentRequests.size > 500) {
    for (const [key, times] of recentRequests) {
      if (!times.some((t) => now - t < RATE_LIMIT_WINDOW)) recentRequests.delete(key);
    }
  }

  return hits.length > MAX_REQUESTS;
}

function applyCors(req, res) {
  const origin = req.headers.origin;
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGINS.includes(origin) ? origin : SITE_URL);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

// Vercel normally parses JSON bodies, but be defensive about string payloads.
function parseBody(body) {
  if (!body) return {};
  if (typeof body === 'string') {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }
  return body;
}

export default async function handler(req, res) {
  applyCors(req, res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Browsers always send Origin on cross-site POSTs; refuse other websites.
  const origin = req.headers.origin;
  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  try {
    const clientIp = (req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown')
      .toString()
      .split(',')[0]
      .trim();
    const timestamp = Date.now();

    if (isRateLimited(clientIp)) {
      return res.status(429).json({
        error: 'Too many messages in a short time. Please wait a minute and try again.',
      });
    }

    const {
      name,
      organization,
      email,
      projectType,
      location,
      timeline,
      sensitivity,
      message,
      hp_x7, // honeypot (current form)
      website, // honeypot (forms cached before 2026-09-21)
      lang: rawLang,
    } = parseBody(req.body);
    const lang = rawLang === 'de' ? 'de' : 'en';

    // Honeypot: real users never see this field, so a filled value means a bot.
    // Return success so the bot does not learn the field is a trap.
    const trap = [hp_x7, website].find((v) => typeof v === 'string' && v.length > 0);
    if (trap) {
      console.log('Contact form: honeypot filled, request dropped');
      return res.status(200).json({
        success: true,
        message: 'Thank you! Your message has been sent successfully.',
      });
    }

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please fill in all required fields.' });
    }

    if (name.length > 100 || message.length > 5000) {
      return res.status(400).json({ error: 'Input too long. Please shorten your message.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    const safeName = escapeHtml(name);
    const safeOrganization = escapeHtml(organization);
    const safeEmail = escapeHtml(email);
    const safeProjectType = escapeHtml(projectType);
    const safeLocation = escapeHtml(location);
    const safeTimeline = escapeHtml(timeline);
    const safeSensitivity = escapeHtml(sensitivity);
    const safeMessage = escapeHtml(message);

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Missing Gmail configuration (GMAIL_USER / GMAIL_APP_PASSWORD)');
      return res.status(500).json({
        error: 'Server configuration error. Please email us directly at contact@futurefabrik.com.',
      });
    }

    const senderEmail = process.env.GMAIL_USER;
    // Set CONTACT_RECIPIENT in Vercel to route enquiries elsewhere.
    const recipientEmail = process.env.CONTACT_RECIPIENT || process.env.GMAIL_USER;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const ownerMailOptions = {
      from: `"${SITE_NAME} Website" <${senderEmail}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New 3DARK enquiry from ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ae3769; border-bottom: 2px solid #ae3769; padding-bottom: 10px;">
            New Contact Enquiry
          </h2>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${safeName}</p>
            ${safeOrganization ? `<p><strong>Organisation:</strong> ${safeOrganization}</p>` : ''}
            <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            ${safeProjectType ? `<p><strong>Project Type:</strong> ${safeProjectType}</p>` : ''}
            ${safeLocation ? `<p><strong>Location:</strong> ${safeLocation}</p>` : ''}
            ${safeTimeline ? `<p><strong>Timeline:</strong> ${safeTimeline}</p>` : ''}
            ${safeSensitivity ? `<p><strong>Data Sensitivity:</strong> ${safeSensitivity}</p>` : ''}
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${safeMessage}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>Sent via the contact form on 3dark.de (${lang.toUpperCase()})</p>
            <p>Timestamp: ${new Date(timestamp).toISOString()}</p>
          </div>
        </div>
      `,
    };

    // Confirmation to the visitor. It deliberately contains NO visitor-supplied
    // text (not the message, not even the name): echoing it to a visitor-chosen
    // address would let anyone send 3DARK-branded mail with their own content.
    const reply = {
      en: {
        subject: 'We received your enquiry — 3DARK',
        heading: 'Thank you for your enquiry!',
        body: 'We have received your message and will get back to you as soon as possible, usually within one working day.',
        direct: 'You can also reach us directly:',
      },
      de: {
        subject: 'Ihre Anfrage ist bei uns eingegangen — 3DARK',
        heading: 'Vielen Dank für Ihre Anfrage!',
        body: 'Wir haben Ihre Nachricht erhalten und melden uns so schnell wie möglich, in der Regel innerhalb eines Werktags.',
        direct: 'Sie erreichen uns auch direkt:',
      },
    }[lang];

    const customerMailOptions = {
      from: `"${SITE_NAME}" <${senderEmail}>`,
      to: email,
      replyTo: 'contact@futurefabrik.com',
      subject: reply.subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #ae3769; padding: 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; letter-spacing: 0.15em;">3DARK</h1>
          </div>

          <div style="padding: 30px; background-color: #fff;">
            <h2 style="color: #333;">${reply.heading}</h2>
            <p style="line-height: 1.6; color: #555;">${reply.body}</p>
            <p style="line-height: 1.6; color: #555;">${reply.direct}</p>
            <div style="margin: 20px 0;">
              <p><strong>E-Mail:</strong> <a href="mailto:contact@futurefabrik.com">contact@futurefabrik.com</a></p>
              <p><strong>Web:</strong> <a href="${SITE_URL}">www.3dark.de</a></p>
            </div>
          </div>

          <div style="background-color: #1a1a1a; padding: 20px; text-align: center; color: #999; font-size: 12px;">
            <p style="margin: 0;">© ${new Date().getFullYear()} 3DARK — a service by Future Fabrik</p>
            <p style="margin: 5px 0 0 0;">Burnett &amp; Manhardt GbR · Klingenstraße 22 · 04229 Leipzig</p>
          </div>
        </div>
      `,
    };

    const results = await Promise.allSettled([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(customerMailOptions),
    ]);

    // The owner notification is the one that must not be lost.
    if (results[0].status === 'rejected') {
      console.error('Failed to send owner email:', results[0].reason);
      return res.status(500).json({
        error: 'Message could not be sent. Please email us directly at contact@futurefabrik.com.',
      });
    }

    if (results[1].status === 'rejected') {
      console.warn('Failed to send customer confirmation:', results[1].reason);
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      error: 'There was an error sending your message. Please try again later or email contact@futurefabrik.com.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}
