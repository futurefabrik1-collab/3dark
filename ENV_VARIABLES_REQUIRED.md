# Environment Variables Required

This document outlines the environment variables needed for the contact form functionality.

## Required Variables

### 1. GMAIL_USER
- **Description**: The Gmail address that will send contact form submissions
- **Value**: `futurefabrik1@gmail.com`
- **Usage**: Used as the sender email address in the Nodemailer configuration

### 2. GMAIL_APP_PASSWORD
- **Description**: Gmail App Password for authentication
- **Value**: [16-character app password - stored in Vercel]
- **Usage**: Used for authenticating with Gmail's SMTP server

## How to Set Up Gmail App Password

1. Go to your Google Account settings
2. Navigate to Security → 2-Step Verification
3. Scroll down to "App passwords"
4. Generate a new app password for "Mail"
5. Copy the 16-character password
6. Add it to Vercel environment variables

## Setting Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add the following variables:
   - `GMAIL_USER`: `futurefabrik1@gmail.com`
   - `GMAIL_APP_PASSWORD`: [your 16-character app password]
4. Make sure to add them for all environments (Production, Preview, Development)

## Contact Form Flow

1. User fills out the contact form on the website
2. Form data is sent to `/api/contact` endpoint
3. Vercel serverless function processes the request
4. Email is sent via Gmail SMTP using the configured credentials
5. User receives confirmation toast notification

## Security Notes

- Never commit environment variables to Git
- Environment variables are stored securely in Vercel
- The `.env` file is already in `.gitignore`
- App passwords are safer than using your actual Gmail password
