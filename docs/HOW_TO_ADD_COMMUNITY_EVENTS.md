# How to Add Approved Events to Community Events Page

## 📝 Quick Reference

After approving an event submission in Netlify, follow these steps to add it to the Community Events page.

---

## 🚀 Step-by-Step Instructions

### Step 1: Access the File

1. Go to GitHub: https://github.com/sakabraw-1/gene_therapy
2. Sign in
3. Click on `community-events.html`
4. Click the pencil icon (✏️ Edit this file)

### Step 2: Find the Right Section

**For UPCOMING events**, scroll to line ~95 and look for:
```html
<div class="community-events-grid">
    <!-- Event Card Example 1 - You'll add these manually after approving submissions -->
```

**For PAST events** (after event completes), scroll to line ~160 and look for:
```html
<div class="past-events-grid">
    <!-- Past Event Example - You'll add these after events complete -->
```

### Step 3: Copy the Template

#### UPCOMING EVENT TEMPLATE

Copy this entire block and paste it BEFORE the `<!-- NO EVENTS PLACEHOLDER -->` comment:

```html
<div class="community-event-card">
    <div class="event-organizer-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <span>Organized by ORGANIZER NAME</span>
    </div>
    <h3 class="event-title">EVENT TITLE HERE</h3>
    <div class="event-meta">
        <div class="event-meta-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>DATE HERE (e.g., November 15, 2025)</span>
        </div>
        <div class="event-meta-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>LOCATION HERE (e.g., Central Park, New York, NY)</span>
        </div>
    </div>
    <p class="event-description">EVENT DESCRIPTION HERE - What the event is about, who can participate, what's included, etc.</p>
    <div class="event-footer">
        <a href="mailto:ORGANIZER@EMAIL.COM" class="btn btn-event">Contact Organizer</a>
        <span class="event-type">In-Person Event</span>
    </div>
</div>
```

#### PAST EVENT TEMPLATE

Copy this for completed events:

```html
<div class="past-event-card">
    <div class="past-event-success">
        <div class="success-amount">$X,XXX</div>
        <div class="success-label">Raised</div>
    </div>
    <div class="past-event-info">
        <h3>EVENT TITLE HERE</h3>
        <div class="past-event-meta">
            <span class="past-event-organizer">ORGANIZER NAME</span>
            <span class="past-event-date">MONTH YEAR (e.g., August 2025)</span>
            <span class="past-event-location">CITY, STATE</span>
        </div>
        <p>"QUOTE FROM ORGANIZER OR SUCCESS STORY HERE"</p>
    </div>
</div>
```

### Step 4: Customize the Template

Replace these placeholders with real event info:

**From the Netlify submission, copy:**
- `ORGANIZER NAME` → firstName + lastName from form
- `EVENT TITLE` → Create descriptive title
- `DATE HERE` → eventDate from form
- `LOCATION HERE` → location from form
- `EVENT DESCRIPTION` → eventDetails from form (edit for clarity if needed)
- `ORGANIZER@EMAIL.COM` → email from form
- `In-Person Event` → Change to "Virtual Event" if online

**For event type, choose:**
- `In-Person Event`
- `Virtual Event`
- `Hybrid Event`

### Step 5: Remove "No Events" Placeholder (First Time Only)

The first time you add an event, DELETE this block:

```html
<!-- NO EVENTS PLACEHOLDER - Remove when you add first event -->
<div class="no-events-message">
    ...entire message...
</div>
```

### Step 6: Save & Publish

1. Scroll to bottom
2. Type commit message: "Added [Event Name] to community events"
3. Click "Commit changes"
4. Wait 2-3 minutes
5. Visit live site to verify: https://sakabraw-1.github.io/gene_therapy/community-events.html

---

## 📋 Real Example

### From Netlify Form:
```
firstName: Sarah
lastName: Johnson
email: sarah.johnson@example.com
location: Central Park, New York, NY
eventDate: 2025-11-15
eventDetails: Join us for a family-friendly 5K run/walk to raise 
funds for CDKL5 gene therapy research. All ages welcome! 
Registration includes event t-shirt and refreshments.
```

### Becomes This HTML:
```html
<div class="community-event-card">
    <div class="event-organizer-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <span>Organized by Sarah Johnson</span>
    </div>
    <h3 class="event-title">5K Fun Run for CDKL5</h3>
    <div class="event-meta">
        <div class="event-meta-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>November 15, 2025</span>
        </div>
        <div class="event-meta-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>Central Park, New York, NY</span>
        </div>
    </div>
    <p class="event-description">Join us for a family-friendly 5K run/walk to raise funds for CDKL5 gene therapy research. All ages welcome! Registration includes event t-shirt and refreshments.</p>
    <div class="event-footer">
        <a href="mailto:sarah.johnson@example.com" class="btn btn-event">Contact Organizer</a>
        <span class="event-type">In-Person Event</span>
    </div>
</div>
```

---

## 🔄 Moving Events to Past Events

### After Event Completes:

1. **Remove from Upcoming Section**
   - Edit `community-events.html`
   - Find the event card
   - Delete the entire `<div class="community-event-card">...</div>` block

2. **Add to Past Events Section**
   - Get the final fundraising amount from organizer
   - Get a quote/testimonial
   - Use Past Event Template (see above)
   - Add to past-events-grid section

3. **Remove Past Events Placeholder** (first time)
   - Delete the "Success Stories Coming Soon!" message

---

## 💡 Tips & Best Practices

### Writing Event Descriptions:
- ✅ Keep it concise (2-3 sentences)
- ✅ Include who can participate
- ✅ Mention what's included (t-shirt, food, etc.)
- ✅ Add any special requirements (registration, fees)
- ✅ Make it exciting and inviting!

### Event Titles:
- ✅ Be specific: "5K Fun Run for CDKL5" not just "Fun Run"
- ✅ Include the cause when possible
- ✅ Keep it under 60 characters
- ✅ Make it memorable!

### Contact Info:
- ✅ Use organizer's email (they approved public listing)
- ✅ Or create event-specific email: sarah-5k@yourdomain.com
- ✅ Could also link to registration page if they have one

### Location Format:
- ✅ In-person: "Central Park, New York, NY"
- ✅ Virtual: "Online via Zoom"
- ✅ Hybrid: "In-person + Virtual"
- ✅ TBD: "Location to be announced"

### Date Format:
- ✅ "November 15, 2025" (full date)
- ✅ "Nov 15, 2025 at 9:00 AM EST" (with time)
- ✅ "November 15-17, 2025" (multi-day)

---

## ⚠️ Common Mistakes to Avoid

❌ **Don't** include personal phone numbers (privacy)  
✅ **Do** use email or event registration link

❌ **Don't** copy/paste with extra spaces/formatting  
✅ **Do** clean up text before adding

❌ **Don't** forget to update both title AND description  
✅ **Do** double-check all placeholders are replaced

❌ **Don't** leave the "No Events" message when you have events  
✅ **Do** remove placeholder on first event

---

## 🎯 Quick Checklist

Before committing changes, verify:

- [ ] Organizer name is correct
- [ ] Event title is descriptive
- [ ] Date is properly formatted
- [ ] Location is clear
- [ ] Description is complete
- [ ] Email link works (test it!)
- [ ] Event type is correct (In-Person/Virtual)
- [ ] No placeholder text remains (ORGANIZER NAME, etc.)
- [ ] "No Events" message removed (if applicable)
- [ ] Preview looks good before committing

---

## 📧 Email Template: Approval Notice to Organizer

After adding their event to the website, send them this email:

```
Subject: Your Event is Live on Our Website! 🎉

Hi [Organizer Name],

Great news! Your event "[Event Name]" has been approved and is now featured on our Community Events page:

https://sakabraw-1.github.io/gene_therapy/community-events.html

WHAT'S NEXT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Review your event listing (link above)
2. Download your Event Organizer Toolkit (attached)
3. Share the event page on social media
4. Use the hashtag #CDKL5Community

YOUR TOOLKIT INCLUDES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• CDKL5 logo files (various formats)
• Social media graphics
• Donation page template
• Fundraising best practices guide
• Sample promotional posts
• Tax information for donors

HOW WE'LL SUPPORT YOU:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Feature your event in our newsletter
✓ Share on our social media channels
✓ Connect you with local CDKL5 families
✓ Provide ongoing support and guidance

AFTER YOUR EVENT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Please send us:
• Total amount raised
• Photos from the event
• Your testimonial/experience
• Number of attendees

We'll feature your success story on our website and social media!

QUESTIONS?
Reply to this email or call [your phone number]

Thank you for taking action to support CDKL5 research. Your efforts are making a real difference!

With gratitude,
[Your Name]
CDKL5 Gene Therapy Research Team

P.S. Tag us on social media @CDKL5Research (we'd love to share your posts!)
```

---

**Time to Add One Event**: 5-10 minutes  
**Difficulty**: Easy (copy/paste + replace text)  
**Frequency**: As needed (when events are approved)

**Need Help?** See `docs/COMPLETE_PARENT_GUIDE.md` for general website management.
