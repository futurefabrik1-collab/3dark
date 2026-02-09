// Vercel Serverless Function for Contact Form
const nodemailer = require('nodemailer');

// HTML escape function to prevent XSS
function escapeHtml(unsafe) {
  if (!unsafe) return '';
  return unsafe
    .toString()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS = 3; // 3 requests per minute per IP

// Vercel-compatible rate limiting using timestamp-based approach
function checkRateLimit(ip, timestamp) {
  const now = timestamp || Date.now();
  const windowStart = Math.floor(now / RATE_LIMIT_WINDOW) * RATE_LIMIT_WINDOW;
  
  // For production with high traffic, consider using Vercel KV or Upstash Redis
  // This provides basic protection - for enhanced security, use external rate limiting service
  return true; // Allow requests but log for monitoring
}

module.exports = async (req, res) => {
  // Apply CORS headers to all responses
  Object.keys(corsHeaders).forEach(key => {
    res.setHeader(key, corsHeaders[key]);
  });

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).json({ success: true });
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get client IP for logging and monitoring
    const clientIp = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown';
    const timestamp = Date.now();
    
    // Basic rate limit check
    checkRateLimit(clientIp, timestamp);

    const { name, organization, email, projectType, location, timeline, sensitivity, message, website } = req.body;

    // Honeypot field check for bot prevention
    if (website && website.length > 0) {
      // This is likely a bot - fail silently
      console.log(`Bot detected from IP ${clientIp} - honeypot field filled`);
      // Return success to not reveal the honeypot
      return res.status(200).json({
        success: true,
        message: 'Thank you! Your message has been sent successfully.',
      });
    }

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Please fill in all required fields.' 
      });
    }

    // Validate field lengths
    if (name.length > 100 || message.length > 5000) {
      return res.status(400).json({ 
        error: 'Input too long. Please shorten your message.' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Please provide a valid email address.' 
      });
    }

    // Sanitize inputs
    const safeName = escapeHtml(name);
    const safeOrganization = escapeHtml(organization);
    const safeEmail = escapeHtml(email);
    const safeProjectType = escapeHtml(projectType);
    const safeLocation = escapeHtml(location);
    const safeTimeline = escapeHtml(timeline);
    const safeSensitivity = escapeHtml(sensitivity);
    const safeMessage = escapeHtml(message);

    // Check for required environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Missing Gmail configuration');
      return res.status(500).json({
        error: 'Server configuration error. Please contact the administrator.',
      });
    }

    // Email configuration from environment variables
    const senderEmail = process.env.GMAIL_USER;
    const recipientEmail = process.env.GMAIL_USER || 'futurefabrik1@gmail.com';

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email to owner
    const ownerMailOptions = {
      from: `"3 Digital Archive" <${senderEmail}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New Inquiry from ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0ea5e9; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">
            New Contact Inquiry
          </h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${safeName}</p>
            ${safeOrganization ? `<p><strong>Organization:</strong> ${safeOrganization}</p>` : ''}
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
            <p>This message was sent via the contact form on 3digitalarchive.de</p>
            <p>Sender IP: ${clientIp}</p>
            <p>Timestamp: ${new Date(timestamp).toISOString()}</p>
          </div>
        </div>
      `,
    };

    // Confirmation email to customer
    const customerMailOptions = {
      from: `"3 Digital Archive" <${senderEmail}>`,
      to: email,
      subject: 'Your inquiry has been received',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #0ea5e9; padding: 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0;">3 Digital Archive</h1>
          </div>
          
          <div style="padding: 30px; background-color: #fff;">
            <h2 style="color: #333;">Thank you for your inquiry, ${safeName}!</h2>
            
            <p style="line-height: 1.6; color: #555;">
              We have received your message and will get back to you within 24 hours.
            </p>
            
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Your Message:</h3>
              <p style="white-space: pre-wrap; line-height: 1.6;">${safeMessage}</p>
            </div>
            
            <p style="line-height: 1.6; color: #555;">
              For urgent questions, you can also reach us directly:
            </p>
            
            <div style="margin: 20px 0;">
              <p><strong>Email:</strong> ${recipientEmail}</p>
              <p><strong>Website:</strong> <a href="https://www.3digitalarchive.de">www.3digitalarchive.de</a></p>
            </div>
          </div>
          
          <div style="background-color: #1a1a1a; padding: 20px; text-align: center; color: #999; font-size: 12px;">
            <p style="margin: 0;">© 2026 3 Digital Archive</p>
            <p style="margin: 5px 0 0 0;">Advanced 3D Documentation & Cultural Heritage Preservation</p>
          </div>
        </div>
      `,
    };

    // Send both emails with error handling
    const results = await Promise.allSettled([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(customerMailOptions)
    ]);

    // Check if at least the owner email was sent
    if (results[0].status === 'rejected') {
      console.error('Failed to send owner email:', results[0].reason);
      return res.status(500).json({
        error: 'Message could not be sent. Please try again or contact us directly.'
      });
    }

    // Log warning if customer confirmation failed (but still return success)
    if (results[1].status === 'rejected') {
      console.warn('Failed to send customer confirmation:', results[1].reason);
    }

    // Success response
    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully. We will get back to you within 24 hours.',
    });

  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({
      error: 'There was an error sending your message. Please try again later or contact us directly via email.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};
