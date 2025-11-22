# Email Notification Setup

This project uses [Resend](https://resend.com) to send email notifications when users submit forms.

## Setup Instructions

### 1. Create a Resend Account

1. Go to [resend.com](https://resend.com) and sign up
2. Verify your email address

### 2. Add and Verify Your Domain

1. In the Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `kobamsagro.com`)
4. Add the DNS records provided by Resend to your domain's DNS settings
5. Wait for verification (usually takes a few minutes)

### 3. Get Your API Key

1. In the Resend dashboard, go to **API Keys**
2. Click **Create API Key**
3. Give it a name (e.g., "Production")
4. Copy the API key

### 4. Configure Environment Variables

Add these variables to your `.env` file:

```bash
# Resend API Key
RESEND_API_KEY=re_your_api_key_here

# Admin email to receive notifications
ADMIN_EMAIL=admin@kobamsagro.com

# From email (must use your verified domain)
FROM_EMAIL=notifications@kobamsagro.com
```

**Important:** The `FROM_EMAIL` must use your verified domain. For example:
- ✅ `notifications@kobamsagro.com`
- ✅ `noreply@kobamsagro.com`
- ❌ `admin@gmail.com` (won't work unless gmail.com is verified)

### 5. Test the Setup

1. Restart your development server
2. Submit a test form on your website
3. Check your admin email for the notification

## Email Notifications

The following forms trigger email notifications:

### Contact Form
- **Trigger:** User submits contact form
- **Subject:** "New Contact Form Submission: [Subject]"
- **Contains:** Name, email, phone, subject, message

### Quote Request
- **Trigger:** User requests a product quote
- **Subject:** "New Quote Request: [Product Name]"
- **Contains:** Product, quantity, customer details, message

### Product Inquiry
- **Trigger:** User makes a product inquiry
- **Subject:** "New Product Inquiry: [Product Name]"
- **Contains:** Product, customer details, country, message

## Troubleshooting

### Emails Not Sending

1. **Check API Key:** Ensure `RESEND_API_KEY` is set correctly
2. **Verify Domain:** Make sure your domain is verified in Resend
3. **Check FROM_EMAIL:** Must use your verified domain
4. **Check Logs:** Look for errors in your server console
5. **Resend Dashboard:** Check the Resend dashboard for failed emails

### Testing in Development

For development/testing, you can use Resend's test mode:
- Resend allows sending to any email in test mode
- Emails will appear in your Resend dashboard
- No domain verification needed for testing

### Rate Limits

Resend free tier includes:
- 100 emails/day
- 3,000 emails/month

For production, consider upgrading to a paid plan.

## Email Templates

Email templates are defined in `src/lib/email.ts`. You can customize:
- Email subject lines
- HTML content
- Styling
- Additional information

## Support

- Resend Documentation: https://resend.com/docs
- Resend Support: support@resend.com
