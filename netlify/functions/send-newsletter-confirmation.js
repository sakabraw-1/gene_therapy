// Netlify Function to send newsletter confirmation email
// This function is triggered when someone subscribes to the newsletter

const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  console.log('Function invoked - Method:', event.httpMethod);
  console.log('Environment check - SMTP_HOST:', process.env.SMTP_HOST ? 'Set' : 'NOT SET');
  console.log('Environment check - SMTP_USER:', process.env.SMTP_USER ? 'Set' : 'NOT SET');
  console.log('Environment check - SMTP_PASS:', process.env.SMTP_PASS ? 'Set' : 'NOT SET');
  
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    // Parse the request body
    const data = JSON.parse(event.body);
    const { firstName, lastName, email } = data;
    console.log('Processing request for:', firstName, lastName, email);

    // Validate required fields
    if (!firstName || !lastName || !email) {
      console.error('Missing required fields');
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Email configuration (using environment variables)
    console.log('Creating transporter...');
    const smtpPort = parseInt(process.env.SMTP_PORT) || 587;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtppro.zoho.eu',
      port: smtpPort,
      secure: smtpPort === 465, // true for 465 (SSL), false for 587 (STARTTLS)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    // Email HTML template (Template 3 from EMAIL_TEMPLATES.md)
    const emailHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f4f4f4; padding: 20px 0;">
    <tr>
      <td align="center">
        <table cellpadding="0" cellspacing="0" border="0" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #2c3e92 0%, #1a237e 100%); padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px;">CDKL5 Gene Therapy</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="font-size: 18px; color: #333; margin: 0 0 20px 0;">Hi ${firstName},</p>
              
              <p style="font-size: 16px; color: #555; line-height: 1.6; margin: 0 0 20px 0;">
                Thank you for subscribing to CDKL5 Gene Therapy updates!
              </p>
              
              <div style="background-color: #e8f5e9; border-left: 4px solid #4caf50; padding: 15px; margin: 20px 0;">
                <p style="margin: 0; color: #2e7d32; font-weight: 600; font-size: 16px;">✅ You're now connected with our community.</p>
              </div>
              
              <p style="font-size: 16px; color: #555; line-height: 1.6; margin: 20px 0;">
                You'll receive updates about:
              </p>
              
              <ul style="font-size: 16px; color: #555; line-height: 1.8; padding-left: 20px;">
                <li>Community events and opportunities to get involved</li>
                <li>Ways to support our mission</li>
                <li>Important announcements from our team</li>
              </ul>
              
              <div style="margin: 30px 0; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
                <h3 style="color: #2c3e92; margin: 0 0 15px 0; font-size: 18px;">🤝 Get More Involved:</h3>
                <ul style="list-style: none; padding: 0; margin: 0;">
                  <li style="margin-bottom: 10px;">
                    <a href="https://cdkl5genetherapy.com/donate.html" style="color: #ff6600; text-decoration: none; font-weight: 600;">Make a donation →</a>
                  </li>
                  <li style="margin-bottom: 10px;">
                    <a href="https://cdkl5genetherapy.com/community-events.html" style="color: #ff6600; text-decoration: none; font-weight: 600;">Attend our events →</a>
                  </li>
                  <li style="margin-bottom: 10px;">
                    <a href="https://cdkl5genetherapy.com/about.html" style="color: #ff6600; text-decoration: none; font-weight: 600;">Learn about our mission →</a>
                  </li>
                  <li style="margin-bottom: 10px;">
                    <a href="https://cdkl5genetherapy.com/registry.html" style="color: #ff6600; text-decoration: none; font-weight: 600;">Register in our Family Registry →</a>
                  </li>
                </ul>
              </div>
              
              <p style="font-size: 16px; color: #555; line-height: 1.6; margin: 20px 0 0 0;">
                Thank you for standing with CDKL5 families.
              </p>
              
              <p style="font-size: 16px; color: #555; line-height: 1.6; margin: 10px 0 0 0;">
                The CDKL5 Gene Therapy Team
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9f9f9; padding: 20px 30px; border-top: 1px solid #eeeeee;">
              <p style="font-size: 14px; color: #777; text-align: center; margin: 0 0 10px 0;">
                CDKL5 Gene Therapy<br>
                <a href="https://cdkl5genetherapy.com" style="color: #2c3e92; text-decoration: none;">www.cdkl5genetherapy.com</a><br>
                <a href="mailto:support@cdkl5genetherapy.com" style="color: #2c3e92; text-decoration: none;">support@cdkl5genetherapy.com</a>
              </p>
              <p style="font-size: 12px; color: #999; text-align: center; margin: 10px 0 0 0;">
                You received this email because you subscribed to updates from CDKL5 Gene Therapy.
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Email plain text version
    const emailText = `
Hi ${firstName},

Thank you for subscribing to CDKL5 Gene Therapy updates!

✅ You're now connected with our community.

You'll receive updates about:
• Community events and opportunities to get involved
• Ways to support our mission
• Important announcements from our team

🤝 Get More Involved:
• Make a donation: www.cdkl5genetherapy.com/donate.html
• Attend our events: www.cdkl5genetherapy.com/community-events.html
• Learn about our mission: www.cdkl5genetherapy.com/about.html
• Register in our Family Registry: www.cdkl5genetherapy.com/registry.html

Thank you for standing with CDKL5 families.

The CDKL5 Gene Therapy Team

---
CDKL5 Gene Therapy
www.cdkl5genetherapy.com
support@cdkl5genetherapy.com
    `;

    // Send email
    console.log('Attempting to send email to:', email);
    
    // Use support@cdkl5genetherapy.com as FROM address (via Zoho Mail SMTP)
    const info = await transporter.sendMail({
      from: '"CDKL5 Gene Therapy" <support@cdkl5genetherapy.com>',
      to: email,
      subject: 'Welcome to CDKL5 Gene Therapy Updates',
      text: emailText,
      html: emailHTML
    });

    console.log('Email sent successfully! Message ID:', info.messageId);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Confirmation email sent successfully'
      })
    };

  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      code: error.code
    });
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to send confirmation email',
        details: error.message,
        type: error.constructor.name
      })
    };
  }
};
