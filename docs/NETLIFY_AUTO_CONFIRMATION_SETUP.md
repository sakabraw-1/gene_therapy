# Auto-Confirmation Email Setup for Event Submissions

## 🎯 Purpose
When someone submits the "Plan an Event" form, they'll immediately receive a confirmation email letting them know you'll review their submission.

## 📧 Setup Instructions

### Step 1: Access Netlify Dashboard
1. Go to: https://app.netlify.com/
2. Sign in with your account
3. Click on your site: `gene_therapy`

### Step 2: Navigate to Forms
1. Click **"Forms"** in the left sidebar
2. You should see your forms listed:
   - Contact
   - Newsletter
   - Event Registration
   - **event-form** (Plan an Event) ← This one!

### Step 3: Set Up Form Notification
1. Click on **"event-form"**
2. Click the **"Settings & usage"** tab
3. Scroll down to **"Form notifications"**
4. Click **"Add notification"**

### Step 4: Configure Email to Submitters
1. Select notification type: **"Email notification"**
2. Event to notify: **"New form submission"**
3. Email to notify: **Leave blank** (we'll configure below)
4. **Check the box**: "Send notification email to form submitter"
5. **Custom subject line**: `Thank You for Your Event Submission - CDKL5 Gene Therapy`

### Step 5: Email Template

**Paste this as the email body:**

```
Hi {{firstName}},

Thank you for your interest in hosting a fundraising event to support CDKL5 gene therapy research!

We've received your submission and our team will review it within the next 48 hours. Someone from our organization will reach out to you at {{email}} with next steps.

EVENT DETAILS YOU SUBMITTED:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: {{firstName}} {{lastName}}
Email: {{email}}
Phone: {{phoneCountry}} {{phone}}
Location: {{location}}
Event Date: {{eventDate}}
Event Details: {{eventDetails}}

WHAT HAPPENS NEXT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Our team reviews your event proposal (24-48 hours)
2. If approved, we'll send you an event organizer toolkit with:
   • Logo files and graphics
   • Fundraising best practices
   • Social media templates
   • Donation page setup
   • Legal and tax information

3. We'll work with you to promote your event through:
   • Our website
   • Social media channels
   • Email newsletter
   • Local family connections

WHY HOST AN EVENT?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Raise crucial funds for gene therapy research
• Increase awareness of CDKL5 disorder
• Connect with families in your community
• Make a tangible difference in children's lives

QUESTIONS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
If you have any immediate questions, reply to this email or visit our website at https://sakabraw-1.github.io/gene_therapy/

Together, we're making a difference for CDKL5 families!

With gratitude,
CDKL5 Gene Therapy Research Team

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This is an automated confirmation. You'll receive a personal response from our team within 48 hours.
```

### Step 6: Set Up Admin Notification (For You)

While you're there, set up a notification for yourself too:

1. Click **"Add notification"** again
2. Select: **"Email notification"**
3. Event: **"New form submission"**
4. **Email to notify**: Your admin email address
5. Subject: `New Community Event Submission`

**Email body for admin:**
```
NEW EVENT SUBMISSION RECEIVED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ORGANIZER INFORMATION:
Name: {{firstName}} {{lastName}}
Email: {{email}}
Phone: {{phoneCountry}} {{phone}}
Location: {{location}}
Newsletter: {{newsletter}}

EVENT DETAILS:
Approximate Date: {{eventDate}}
Description: {{eventDetails}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ACTION REQUIRED:
1. Review submission within 48 hours
2. Check for legitimacy and feasibility
3. Respond to organizer with approval/more info needed
4. If approved, send organizer toolkit

View full submission in Netlify Dashboard:
https://app.netlify.com/sites/YOUR-SITE-NAME/forms

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submission time: {{submittedAt}}
```

### Step 7: Save & Test

1. Click **"Save"**
2. Test the form:
   - Go to your website
   - Fill out the Plan an Event form
   - Submit with your email
   - Check if you receive confirmation email
   - Check if admin email arrives

### Step 8: Verify Email Deliverability

**Important**: Check spam folders!
- Ask a friend to test submit
- Verify emails arrive in inbox (not spam)
- If going to spam, adjust email content or contact Netlify support

## ✅ Checklist

- [ ] Accessed Netlify Forms dashboard
- [ ] Found "event-form" 
- [ ] Added confirmation email to submitter
- [ ] Added notification email to admin
- [ ] Tested form submission
- [ ] Received confirmation email
- [ ] Received admin notification
- [ ] Emails not in spam folder

## 🎉 What Users Will Experience

**Before Setup:**
- Submit form → Nothing (just a thank you page)
- Wonder if it worked
- No follow-up information

**After Setup:**
- Submit form → Instant confirmation email
- Clear expectations (48-hour review)
- Professional experience
- Excitement about next steps!

## 📞 Troubleshooting

**Problem**: Emails not sending
- Check Netlify form quota (free tier: 100/month)
- Verify form name matches: "event-form"
- Check spam folder
- Contact Netlify support

**Problem**: Variables not populating (shows {{firstName}})
- Ensure form field names match exactly
- Form fields must be: firstName, lastName, email, phone, etc.
- Case-sensitive!

**Problem**: Too many emails
- Adjust notification settings
- Can turn off certain notifications
- Set up filters in email client

## 💡 Pro Tips

**Customize the Message:**
- Add your personal phone number
- Include links to FAQ
- Add social media links
- Make it warm and welcoming!

**Response Time:**
- Try to review within 24 hours (faster = better)
- Set up calendar reminder to check Netlify daily
- Have template approval/decline emails ready

**Follow-Up:**
- Save submitter emails for future event promotions
- Send occasional "We need community events!" reminders
- Thank organizers publicly on social media

---

**Setup Time**: 15-20 minutes  
**Ongoing Maintenance**: Check Netlify dashboard daily (2 minutes)  
**User Experience**: Professional and reassuring! ✨
