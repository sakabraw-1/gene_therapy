# Newsletter / Stay Connected Setup Guide

## Overview
This guide explains how to set up automatic confirmation emails for newsletter signups through the "Stay Connected" form in the footer, including duplicate checking and custom messages.

---

## ✅ What's Been Set Up

### 1. **New Email Template Created**
- **Template 3:** Newsletter Signup Confirmation Email
- Location: `docs/EMAIL_TEMPLATES.md`
- Sent immediately when someone subscribes via "Stay Connected" form
- Subject: "Welcome to CDKL5 Gene Therapy Updates"

### 2. **JavaScript Form Handler**
- File: `js/newsletter-form.js`
- Handles form submission
- Shows custom messages based on result
- Prevents duplicate submissions

### 3. **Updated Footer Form**
- File: `inc/footer.html`
- Form field names updated to match Mailchimp standard (FNAME, LNAME, EMAIL)
- Added message container for feedback
- Ready for Mailchimp integration

### 4. **Script Added to Pages**
- Added `newsletter-form.js` to `index.html`
- Needs to be added to other pages that use the footer

---

## 🔧 Setup Instructions

### Step 1: Get Your Mailchimp Form URL

1. Log into your Mailchimp account
2. Go to **Audience** → **Signup forms** → **Embedded forms**
3. Look for the form `action` URL, it will look like:
   ```
   https://YOUR_USERNAME.us1.list-manage.com/subscribe/post?u=XXXXX&id=XXXXX
   ```
4. Copy this URL

### Step 2: Update Footer Form

1. Open `inc/footer.html`
2. Find line with: `action="https://YOUR_MAILCHIMP_URL_HERE"`
3. Replace with your actual Mailchimp URL from Step 1
4. Save the file

### Step 3: Set Up Mailchimp Automation

1. In Mailchimp, go to **Automations** → **Create** → **Custom**
2. Set trigger: "When someone subscribes to audience"
3. Add email: Use Template 3 content from `EMAIL_TEMPLATES.md`
4. Subject: `Welcome to CDKL5 Gene Therapy Updates`
5. From: `CDKL5 Gene Therapy <support@cdkl5genetherapy.com>`
6. Enable the automation

**OR**

Use Zapier (Zap 5 from EMAIL_TEMPLATES.md):
- Trigger: New subscriber in Mailchimp
- Action: Send email (Template 3)

### Step 4: Add Script to All Pages

Add this line to all HTML pages that include the footer (before closing `</body>` tag):

```html
<script src="js/newsletter-form.js" defer></script>
```

Pages that need updating:
- ✅ `index.html` (already done)
- ⬜ `about.html`
- ⬜ `donate.html`
- ⬜ `get-involved.html`
- ⬜ `community-events.html`
- ⬜ `faq.html`
- ⬜ `contact.html`
- ⬜ `registry.html`
- ⬜ Any other pages with footer

### Step 5: Test the Setup

1. Open your website
2. Scroll to footer "Stay Connected" section
3. Enter test email and name
4. Click **Subscribe**
5. You should see: "Thank you, [Name]! You're now connected with us. Check your email for confirmation."
6. Check email for confirmation (Template 3)

**Test Duplicate Submission:**
1. Try subscribing with the same email again
2. Mailchimp will detect duplicate
3. You should see: "You're already connected with us! Thank you for your continued support. 💙"

---

## 📧 Message Types Users Will See

### ✅ Success (First Time Signup)
> Thank you, [Name]! You're now connected with us. Check your email for confirmation.

**Styling:** Green background, checkmark

### ℹ️ Info (Already Subscribed)
> You're already connected with us! Thank you for your continued support. 💙

**Styling:** Blue background, info icon

### ❌ Error (Missing Info)
> Please enter your email address.

**Styling:** Red background, warning

---

## 🔄 How It Works

1. **User fills out form** in footer (First Name, Last Name, Email)
2. **JavaScript intercepts submission** (`newsletter-form.js`)
3. **Form submits to both:**
   - Netlify Forms (backup/spam filtering)
   - Mailchimp (main email list)
4. **Mailchimp checks** if email already exists
5. **JavaScript shows message:**
   - If new subscriber → Success message
   - If already subscribed → Info message  
   - If error → Error message
6. **Mailchimp automation sends** Template 3 confirmation email
7. **Message auto-disappears** after 10 seconds

---

## 🎨 Customization

### Change Message Text

Edit `js/newsletter-form.js`, find these lines:

```javascript
// Line ~50: Success message
showMessage(messageDiv, `Thank you${firstName ? ', ' + firstName : ''}! You're now connected with us. Check your email for confirmation.`, 'success');

// Line ~52: Already subscribed message
showMessage(messageDiv, `You're already connected with us! Thank you for your continued support. 💙`, 'info');
```

### Change Message Duration

Edit `js/newsletter-form.js`, line ~140:

```javascript
}, 10000); // Change 10000 to desired milliseconds (10000 = 10 seconds)
```

### Change Message Colors

Edit `js/newsletter-form.js`, lines ~110-128:

```javascript
if (type === 'success') {
    messageDiv.style.backgroundColor = 'rgba(212, 237, 218, 0.95)'; // Change color
    messageDiv.style.color = '#155724'; // Change text color
    messageDiv.style.border = '2px solid #c3e6cb'; // Change border
}
```

---

## ✅ Checklist

- [ ] Copy Mailchimp form URL from your account
- [ ] Update `inc/footer.html` with your Mailchimp URL (replace `YOUR_MAILCHIMP_URL_HERE`)
- [ ] Set up Mailchimp automation with Template 3 email content
- [ ] Add `newsletter-form.js` script to all HTML pages
- [ ] Test signup with new email
- [ ] Test signup with duplicate email
- [ ] Verify confirmation email received (Template 3)
- [ ] Test on mobile devices
- [ ] Commit changes to git

---

## 🐛 Troubleshooting

### Form doesn't show success message
- Check browser console (F12) for JavaScript errors
- Verify `newsletter-form.js` is loaded (check Network tab)
- Confirm Mailchimp URL is correct in `footer.html`

### Confirmation email not received
- Check Mailchimp automation is enabled
- Verify email template is configured correctly
- Check spam folder
- Confirm "From" email is verified in Mailchimp

### "Already subscribed" message not showing
- Mailchimp returns this via JSONP callback
- Check Mailchimp URL format is correct
- Verify subscriber actually exists in Mailchimp audience

### Form submits but redirects to Netlify page
- Check that `data-netlify-ajax="false"` is in form tag
- Verify JavaScript is loading and running (check console)

---

## 📝 Notes

- **Mailchimp automatically prevents duplicates** - if someone tries to subscribe with an existing email, Mailchimp returns "already subscribed" message
- **Netlify Forms** is used as backup - you'll still get notifications through Netlify even if Mailchimp fails
- **JSONP is used** for Mailchimp because their API doesn't support CORS
- **Messages auto-disappear** after 10 seconds to avoid cluttering the footer

---

**Questions?** Contact: support@cdkl5genetherapy.com
