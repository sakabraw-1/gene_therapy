# How to Add SMTP Settings in Netlify

## Step-by-Step Guide with Screenshots

### Step 1: Log into Netlify

1. Go to: **https://app.netlify.com/**
2. Log in with your account

---

### Step 2: Select Your Site

1. Click on your site: **cdkl5genetherapy** (or whatever name shows)
2. You'll see your site dashboard

---

### Step 3: Go to Site Settings

1. Click on **"Site settings"** button (top navigation)
2. OR click **"Site configuration"** in the left sidebar

---

### Step 4: Navigate to Environment Variables

1. In the left sidebar, scroll down to find **"Environment variables"**
2. Click on **"Environment variables"**
3. You'll see a page that says "Environment variables" at the top

---

### Step 5: Add New Variable

Click the **"Add a variable"** button (or "Add environment variable")

You'll see a form with:
- **Key** (variable name)
- **Value** (the setting)
- **Scopes** (which deployments to use it on)

---

### Step 6: Add SMTP Variables (One at a Time)

You need to add **4 variables**. Click "Add a variable" for each one:

#### Variable 1: SMTP_HOST
```
Key:   SMTP_HOST
Value: smtp.gmail.com
Scopes: Check "All scopes" or just "Production"
```
Click **"Create variable"** or **"Add"**

#### Variable 2: SMTP_PORT
```
Key:   SMTP_PORT
Value: 587
Scopes: Check "All scopes" or just "Production"
```
Click **"Create variable"** or **"Add"**

#### Variable 3: SMTP_USER
```
Key:   SMTP_USER
Value: your-email@gmail.com
Scopes: Check "All scopes" or just "Production"
```
Click **"Create variable"** or **"Add"**

#### Variable 4: SMTP_PASS
```
Key:   SMTP_PASS
Value: your-app-password-here
Scopes: Check "All scopes" or just "Production"
```
Click **"Create variable"** or **"Add"**

---

## 📧 How to Get Gmail App Password

If you're using Gmail, you MUST use an "App Password" (not your regular Gmail password):

### Step 1: Enable 2-Step Verification
1. Go to: **https://myaccount.google.com/security**
2. Find **"2-Step Verification"**
3. Click **"Get Started"** and follow the setup
4. Verify your phone number

### Step 2: Generate App Password
1. Go to: **https://myaccount.google.com/apppasswords**
2. Or search "App Passwords" in Google Account settings
3. You might need to sign in again
4. Under "Select app" choose: **Mail**
5. Under "Select device" choose: **Other (Custom name)**
6. Type name: **Netlify CDKL5**
7. Click **"Generate"**
8. You'll see a 16-character password like: `abcd efgh ijkl mnop`
9. **COPY THIS PASSWORD** (remove spaces)
10. Use this as your `SMTP_PASS` value

---

## 🔧 Alternative: Using Professional Email

If you have a professional email (like from your domain provider):

### Contact Your Email Provider

Ask them for:
- **SMTP Host** (e.g., mail.yourdomain.com)
- **SMTP Port** (usually 587 or 465)
- **Username** (usually your full email)
- **Password** (your email password)

### Common SMTP Settings:

**GoDaddy:**
```
SMTP_HOST: smtpout.secureserver.net
SMTP_PORT: 587
SMTP_USER: support@cdkl5genetherapy.com
SMTP_PASS: your-email-password
```

**Namecheap:**
```
SMTP_HOST: mail.privateemail.com
SMTP_PORT: 587
SMTP_USER: support@cdkl5genetherapy.com
SMTP_PASS: your-email-password
```

**Office 365:**
```
SMTP_HOST: smtp.office365.com
SMTP_PORT: 587
SMTP_USER: support@cdkl5genetherapy.com
SMTP_PASS: your-email-password
```

---

## ✅ After Adding Variables

### Step 7: Verify Variables Are Added

You should see all 4 variables listed:
- ✅ SMTP_HOST
- ✅ SMTP_PORT
- ✅ SMTP_USER
- ✅ SMTP_PASS

### Step 8: Trigger New Deployment

1. Go to **"Deploys"** tab
2. Click **"Trigger deploy"** → **"Deploy site"**
3. Wait for deployment to finish (1-2 minutes)
4. Green checkmark means deployment succeeded

---

## 🧪 Test the Email System

### Option 1: Test on Live Site

1. Go to: **https://cdkl5genetherapy.com**
2. Scroll to footer "Stay Connected"
3. Enter your test email
4. Click **"Subscribe"**
5. Check for:
   - ✅ Green success message appears
   - ✅ Email arrives in your inbox (check spam folder)

### Option 2: Check Function Logs

1. In Netlify dashboard, go to **"Functions"** tab
2. Click on **"send-newsletter-confirmation"**
3. Click **"Function log"** or **"Logs"**
4. You'll see execution logs when someone subscribes
5. Look for: "Email sent: <message-id>" (means success)
6. Or errors if SMTP failed

---

## 🐛 Troubleshooting

### If Email Doesn't Send:

**Error: "Invalid login"**
- ✅ Check SMTP_USER is correct email
- ✅ Check SMTP_PASS is App Password (not regular password)
- ✅ Make sure 2-Step Verification is enabled on Gmail

**Error: "Connection timeout"**
- ✅ Check SMTP_HOST is correct
- ✅ Check SMTP_PORT is 587 (not 465 or 25)
- ✅ Try deploying again

**Error: "Authentication failed"**
- ✅ Regenerate Gmail App Password
- ✅ Copy password WITHOUT spaces
- ✅ Update SMTP_PASS variable

**Email in Spam Folder:**
- This is normal for first few emails
- Recipients should mark as "Not Spam"
- Consider using professional email (support@cdkl5genetherapy.com)

### If Success Message Doesn't Show:

1. Open browser console (F12)
2. Look for errors
3. Check that `newsletter-form.js` is loaded
4. Clear browser cache (Ctrl+Shift+Delete)

---

## 📸 Visual Guide (What You'll See)

### Netlify Environment Variables Page:

```
╔════════════════════════════════════════════════════════╗
║  Environment variables                                  ║
╠════════════════════════════════════════════════════════╣
║                                                         ║
║  [Add a variable]                                       ║
║                                                         ║
║  Key                    Value                Scopes     ║
║  ─────────────────────────────────────────────────────  ║
║  SMTP_HOST              smtp.gmail.com       All        ║
║  SMTP_PORT              587                  All        ║
║  SMTP_USER              your@gmail.com       All        ║
║  SMTP_PASS              ●●●●●●●●●●●●●●       All        ║
║                                                         ║
╚════════════════════════════════════════════════════════╝
```

### Add Variable Form:

```
╔════════════════════════════════════════╗
║  Add environment variable               ║
╠════════════════════════════════════════╣
║                                         ║
║  Key:   [SMTP_HOST________________]     ║
║                                         ║
║  Value: [smtp.gmail.com___________]     ║
║                                         ║
║  Scopes:                                ║
║  ☑ All scopes                           ║
║  ☐ Production                           ║
║  ☐ Deploy previews                      ║
║  ☐ Branch deploys                       ║
║                                         ║
║  [Cancel]  [Create variable]            ║
║                                         ║
╚════════════════════════════════════════╝
```

---

## ⏱️ Timeline

- **Adding variables:** 2 minutes
- **Getting Gmail App Password:** 5 minutes
- **Netlify deployment:** 1-2 minutes
- **Testing:** 2 minutes

**Total time: ~10 minutes** ⏰

---

## 🎯 Quick Checklist

- [ ] Log into Netlify
- [ ] Go to Site Settings → Environment Variables
- [ ] Add SMTP_HOST = smtp.gmail.com
- [ ] Add SMTP_PORT = 587
- [ ] Add SMTP_USER = your email
- [ ] Add SMTP_PASS = app password (get from Google)
- [ ] Trigger new deployment
- [ ] Wait for deployment to complete
- [ ] Test on live site
- [ ] Check email inbox
- [ ] Verify success message shows

---

## 📞 Need Help?

If you get stuck:

1. **Check Netlify Function Logs:**
   - Netlify Dashboard → Functions → send-newsletter-confirmation → Logs

2. **Check Browser Console:**
   - F12 → Console tab → Look for errors

3. **Common Gmail Issues:**
   - Use App Password, not regular password
   - Enable 2-Step Verification first
   - Remove spaces from App Password

---

**Once SMTP is configured, the newsletter signup will be FULLY automated!** 🎉

Subscribers will receive the beautiful Template 3 confirmation email immediately after signing up.
