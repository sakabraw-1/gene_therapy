# Event Management Guide (For Non-Technical Parents)

## 🎯 Overview

Your website has a built-in event system that automatically:
- ✅ Shows upcoming events on the homepage
- ✅ Accepts registrations through forms
- ✅ Moves events to "Past Events" after they finish
- ✅ Sends you email notifications of new registrations

## 📅 How Events Work

### Current System Status

**Event Display**: Events appear on:
1. Homepage (main event panel)
2. Event Details page (`event-details.html`)
3. Automatically archive when date passes

**Registration**: When someone registers:
1. Form submits to Netlify Forms
2. You receive email notification
3. Data stored in Netlify dashboard
4. Can export to Excel/CSV anytime

## 🆕 Adding a New Event

### Option 1: Using GitHub Website (No Coding Knowledge Needed)

1. **Go to GitHub**
   - Visit: https://github.com/sakabraw-1/gene_therapy
   - Sign in with your credentials

2. **Edit the Homepage**
   - Click on `index.html`
   - Click the pencil icon (✏️ Edit)

3. **Find the Event Panel** (around line 71-120)
   Look for this section:
   ```html
   <div class="event-panel">
       <div class="event-badge">UPCOMING WEBINAR</div>
       <h2 class="event-title">Gene Therapy for CDKL5:...</h2>
   ```

4. **Update Event Information**
   
   **Change the Badge** (line 72):
   ```html
   <div class="event-badge">UPCOMING WEBINAR</div>
   ```
   Options: `UPCOMING WEBINAR`, `FUNDRAISER EVENT`, `COMMUNITY MEETUP`, `AWARENESS CAMPAIGN`

   **Change the Title** (line 73):
   ```html
   <h2 class="event-title">Your New Event Title Here</h2>
   ```

   **Change the Date** (line 82):
   ```html
   <span><strong>Sunday, November 15, 2025</strong></span>
   ```

   **Change the Time** (line 90):
   ```html
   <span><strong>9:00 - 10:00 AM CDT</strong></span>
   ```

   **Change the Description** (line 94):
   ```html
   <p class="event-description">Your event description here...</p>
   ```

   **Update Speakers** (lines 96-112):
   ```html
   <div class="speaker">
       <div class="speaker-avatar">JD</div>
       <div class="speaker-info">
           <strong>John Doe</strong>
           <span>Role/Title</span>
       </div>
   </div>
   ```

5. **Update Event Details Page**
   - Click back to repository
   - Click on `event-details.html`
   - Click the pencil icon
   - Update the same information (date, time, description, speakers)

6. **Commit Changes**
   - Scroll down
   - Type: "Updated event information for [Event Name]"
   - Click "Commit changes"

7. **Wait 2-3 Minutes**
   - Changes automatically deploy to live site
   - Check your website to confirm

### Option 2: Quick Event Template (Copy & Paste)

Here's a template you can use:

```html
<div class="event-panel">
    <div class="event-badge">UPCOMING WEBINAR</div>
    <h2 class="event-title">Event Title Goes Here</h2>
    <div class="event-meta">
        <div class="event-meta-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span><strong>Monday, January 15, 2026</strong></span>
        </div>
        <div class="event-meta-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span><strong>7:00 - 8:00 PM EST</strong></span>
        </div>
    </div>
    <p class="event-description">Brief description of your event. What attendees will learn or experience.</p>
    
    <div class="event-speakers">
        <div class="speaker">
            <div class="speaker-avatar">AB</div>
            <div class="speaker-info">
                <strong>Speaker Name</strong>
                <span>Their Role</span>
            </div>
        </div>
    </div>

    <div class="event-footer">
        <p class="event-organizations">
            <strong>Hosted by:</strong> Your Organization Name
        </p>
        <a href="event-details.html" class="btn btn-event">View Details & Register</a>
    </div>
</div>
```

## ✅ Viewing Event Registrations

### Step 1: Access Netlify Dashboard

1. Go to: https://app.netlify.com/
2. Sign in with your Netlify account
3. Click on your site: `gene_therapy`

### Step 2: View Form Submissions

1. Click "Forms" in the left sidebar
2. Click "Event Registration" form
3. See all registrations with:
   - Name
   - Email
   - Phone
   - Accessibility needs
   - Submission date/time

### Step 3: Export Registrations

1. Click "Export" button (top right)
2. Choose format: CSV or Excel
3. Download file
4. Open in Excel/Google Sheets
5. Use for:
   - Sending event reminders
   - Creating attendee lists
   - Follow-up emails

### Step 4: Email Notifications

**Set up automatic emails:**
1. In Netlify dashboard → Forms
2. Click "Form notifications"
3. Click "Add notification"
4. Select "Email notification"
5. Enter your email address
6. Choose events: "New form submission"
7. Save

Now you'll get an email immediately when someone registers!

## 📆 Past Events Management

### Automatic Archiving

Events automatically become "past events" based on the date you set. 

### Manual Archive (If Needed)

**Option A: Remove from Homepage**
1. Edit `index.html`
2. Find the event panel
3. Delete the entire `<div class="event-panel">...</div>` section
4. Commit changes

**Option B: Create Past Events Page** (Recommended)

I can create a dedicated past events page where old events are archived. Let me know if you want this!

## 🔧 Common Event Updates

### Changing Event Date
1. Edit `index.html` (line ~82)
2. Update: `<span><strong>NEW DATE HERE</strong></span>`
3. Also update in `event-details.html`
4. Commit both changes

### Changing Event Time
1. Edit `index.html` (line ~90)
2. Update: `<span><strong>NEW TIME HERE</strong></span>`
3. Also update in `event-details.html`
4. Commit changes

### Adding More Speakers
Copy this block and paste it in the `event-speakers` div:
```html
<div class="speaker">
    <div class="speaker-avatar">XY</div>
    <div class="speaker-info">
        <strong>New Speaker Name</strong>
        <span>Their Role</span>
    </div>
</div>
```

### Changing Registration Link
Currently links to `event-details.html`. To link to external registration:
```html
<a href="https://your-zoom-link.com" class="btn btn-event" target="_blank">Register on Zoom</a>
```

## 📧 Managing Registrations

### Weekly Checklist
- [ ] Check Netlify Forms dashboard
- [ ] Export new registrations
- [ ] Send confirmation emails to registrants
- [ ] Update attendee count (if needed)
- [ ] 1 week before: Send reminder emails
- [ ] 1 day before: Send final reminder with Zoom link

### Sample Confirmation Email
```
Subject: You're Registered for [Event Name]!

Dear [Name],

Thank you for registering for [Event Name] on [Date] at [Time].

Event Details:
📅 Date: [Date]
🕐 Time: [Time] 
💻 Platform: Zoom (link will be sent 24 hours before)

What to Expect:
[Brief description]

We're excited to have you join us!

Questions? Reply to this email.

Best regards,
CDKL5 Gene Therapy Team
```

## 🎓 Step-by-Step Tutorial Videos

### Creating Tutorial Videos (Recommended)

Record a quick 5-minute video showing:
1. How to edit event info on GitHub
2. How to check registrations in Netlify
3. How to export registrations

Share with other parents/administrators!

## ⚠️ Important Notes

### Do NOT Delete These Files:
- `netlify.toml` (form configuration)
- Event form HTML structure
- CSS event styling

### Always Update Both:
- `index.html` (homepage event panel)
- `event-details.html` (full event page)

### Test After Changes:
- Wait 2-3 minutes for deployment
- Visit live site
- Try submitting a test registration
- Check Netlify dashboard

## 🆘 Troubleshooting

### Problem: Changes Don't Appear
**Solution**: 
- Wait 3-5 minutes (deployment takes time)
- Clear browser cache (Ctrl+F5)
- Check GitHub Actions for errors

### Problem: Forms Not Submitting
**Solution**:
- Check Netlify account is active
- Verify `netlify.toml` file exists
- Test form with different email

### Problem: Not Receiving Email Notifications
**Solution**:
- Check spam folder
- Verify email notification is set up in Netlify
- Test with another email address

## 📞 Getting Help

### Internal Team Support
1. Check this documentation first
2. Search GitHub issues/discussions
3. Contact the tech volunteer who set this up
4. Post in CDKL5 community forum

### External Resources
- Netlify Forms Documentation: https://docs.netlify.com/forms/setup/
- GitHub Editing Guide: https://docs.github.com/en/repositories/working-with-files
- Markdown Tutorial: https://www.markdownguide.org/

## 🎯 Quick Reference

| Task | File to Edit | Line Number |
|------|-------------|-------------|
| Update event title | index.html | ~73 |
| Change event date | index.html | ~82 |
| Change event time | index.html | ~90 |
| Update description | index.html | ~94 |
| Add/remove speakers | index.html | ~96-112 |
| View registrations | Netlify Dashboard | Forms section |
| Export attendee list | Netlify Dashboard | Export button |

---

**Last Updated**: October 2025  
**Current Event**: Gene Therapy Webinar - October 26, 2025  
**Next Review Date**: After current event completes
