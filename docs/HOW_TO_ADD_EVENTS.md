# 📅 How to Add/Update Upcoming Events - Step-by-Step Guide

**For:** Website administrators who want to manage events
**Skill Level:** Basic HTML editing (no coding experience needed!)
**Time Required:** 10-15 minutes per event

---

## 🎯 QUICK OVERVIEW

Your website has **TWO places** where events appear:

1. **Home Page** → Event Panel (shows current upcoming event)
2. **Event Details Page** → Full event information + registration forms

To add a new event, you need to update BOTH locations.

---

## 📍 LOCATION 1: HOME PAGE EVENT PANEL

### **File:** `index.html`
### **Location:** Lines 70-120 (approximately)

### **What to Change:**

```html
<!-- Find this section in index.html -->
<section class="section fade-in event-announcement">
    <div class="event-panel">
        <div class="event-badge">UPCOMING WEBINAR</div>
        
        <!-- CHANGE THIS: Event Title -->
        <h2 class="event-title">Gene Therapy for CDKL5:<br>The History, Progress & Next Steps</h2>
        
        <div class="event-meta">
            <!-- CHANGE THIS: Date -->
            <div class="event-meta-item">
                <svg>...</svg>
                <span><strong>Sunday, October 26, 2025</strong></span>
            </div>
            
            <!-- CHANGE THIS: Time -->
            <div class="event-meta-item">
                <svg>...</svg>
                <span><strong>9:00 - 10:00 AM CDT</strong></span>
            </div>
        </div>
        
        <!-- CHANGE THIS: Description -->
        <p class="event-description">The US FDA has provided positive feedback + IND suggestions...</p>
        
        <!-- CHANGE THIS: Speakers -->
        <div class="event-speakers">
            <div class="speaker">
                <div class="speaker-avatar">RB</div>
                <div class="speaker-info">
                    <strong>Rachel Bailey, PhD</strong>
                    <span>Lead Researcher</span>
                </div>
            </div>
            <div class="speaker">
                <div class="speaker-avatar">JJ</div>
                <div class="speaker-info">
                    <strong>Jainu Jogani</strong>
                    <span>Parent Advocate</span>
                </div>
            </div>
        </div>

        <div class="event-footer">
            <!-- CHANGE THIS: Organizations -->
            <p class="event-organizations">
                <strong>Hosted by:</strong> American Society of Gene + Cell Therapy & Child's Cure Genetic Research
            </p>
            <a href="event-details.html" class="btn btn-event">View Details & Register</a>
        </div>
    </div>
</section>
```

---

## 📝 STEP-BY-STEP: EDITING HOME PAGE

### **Step 1: Open the File**
1. Navigate to: `C:\GENE_THERAPY\index.html`
2. Open in VS Code (or any text editor)
3. Press `Ctrl + F` to search
4. Search for: `event-announcement`

### **Step 2: Update Event Title**
Find:
```html
<h2 class="event-title">Gene Therapy for CDKL5:<br>The History, Progress & Next Steps</h2>
```

Change to:
```html
<h2 class="event-title">Your New Event Title Here<br>Optional Subtitle</h2>
```

**Example:**
```html
<h2 class="event-title">CDKL5 Family Conference 2025<br>Building Community & Hope</h2>
```

### **Step 3: Update Date**
Find:
```html
<span><strong>Sunday, October 26, 2025</strong></span>
```

Change to:
```html
<span><strong>Saturday, December 14, 2025</strong></span>
```

### **Step 4: Update Time**
Find:
```html
<span><strong>9:00 - 10:00 AM CDT</strong></span>
```

Change to:
```html
<span><strong>2:00 - 4:00 PM EST</strong></span>
```

### **Step 5: Update Description**
Find:
```html
<p class="event-description">The US FDA has provided positive feedback...</p>
```

Change to your event description:
```html
<p class="event-description">Join families, researchers, and advocates for our annual conference featuring the latest research updates, family stories, and networking opportunities!</p>
```

### **Step 6: Update Speakers**

**To Change Speaker 1:**
```html
<div class="speaker">
    <div class="speaker-avatar">RB</div> <!-- Change initials -->
    <div class="speaker-info">
        <strong>Rachel Bailey, PhD</strong> <!-- Change name -->
        <span>Lead Researcher</span> <!-- Change title -->
    </div>
</div>
```

**To Add More Speakers:**
Copy and paste the entire speaker block:
```html
<div class="speaker">
    <div class="speaker-avatar">JD</div>
    <div class="speaker-info">
        <strong>Dr. Jane Doe</strong>
        <span>Neurologist</span>
    </div>
</div>
```

**To Remove a Speaker:**
Delete the entire `<div class="speaker">...</div>` block

### **Step 7: Update Hosting Organizations**
Find:
```html
<p class="event-organizations">
    <strong>Hosted by:</strong> American Society of Gene + Cell Therapy & Child's Cure Genetic Research
</p>
```

Change to:
```html
<p class="event-organizations">
    <strong>Hosted by:</strong> Your Organization Name Here
</p>
```

### **Step 8: Save the File**
- Press `Ctrl + S` to save
- Refresh your browser to see changes

---

## 📍 LOCATION 2: EVENT DETAILS PAGE

### **File:** `event-details.html`
### **Location:** Throughout the entire file

### **What to Change:**

1. **Page Title** (in `<head>`)
2. **Event Hero Section** (top)
3. **About This Webinar** (main content)
4. **Event Highlights** (bulleted list)
5. **Speaker Profiles** (detailed bios)
6. **Hosting Organizations** (detailed info)
7. **Important Information Box**
8. **Hidden Form Fields** (for tracking)

---

## 📝 STEP-BY-STEP: EDITING EVENT DETAILS PAGE

### **Step 1: Open the File**
1. Navigate to: `C:\GENE_THERAPY\event-details.html`
2. Open in VS Code

### **Step 2: Update Page Title (Line ~6)**
Find:
```html
<title>Upcoming Webinar | CDKL5 Gene Therapy Coalition</title>
```

Change to:
```html
<title>Your Event Name | CDKL5 Gene Therapy Coalition</title>
```

### **Step 3: Update Event Hero (Lines ~60-90)**

**Badge:**
```html
<div class="event-hero-badge">UPCOMING WEBINAR</div>
```
Change to:
```html
<div class="event-hero-badge">UPCOMING CONFERENCE</div>
```

**Title:**
```html
<h1 class="event-hero-title">Gene Therapy for CDKL5:<br>The History, Progress & Next Steps</h1>
```
Change to:
```html
<h1 class="event-hero-title">Your Event Title Here</h1>
```

**Date, Time, Format:**
```html
<div class="event-hero-meta-item">
    <svg>...</svg>
    <span>Sunday, October 26, 2025</span>
</div>
<div class="event-hero-meta-item">
    <svg>...</svg>
    <span>9:00 - 10:00 AM CDT</span>
</div>
<div class="event-hero-meta-item">
    <svg>...</svg>
    <span>Virtual Event (Webinar)</span>
</div>
```

### **Step 4: Update "About This Event" Section**

Find:
```html
<h2>About This Webinar</h2>
<p class="event-lead-text">The US FDA has provided positive feedback...</p>
```

Change to your event description:
```html
<h2>About This Conference</h2>
<p class="event-lead-text">Join us for our biggest event of the year!</p>
```

### **Step 5: Update Event Highlights**

Find the list:
```html
<ul class="event-highlights">
    <li>
        <svg>...</svg>
        FDA feedback and IND pathway for CDKL5 gene therapy
    </li>
    <!-- More items... -->
</ul>
```

**To Add a New Highlight:**
```html
<li>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>
    Your new highlight text here
</li>
```

**To Remove a Highlight:**
Delete the entire `<li>...</li>` block

### **Step 6: Update Speaker Profiles**

Find:
```html
<div class="speaker-profile-card">
    <div class="speaker-profile-header">
        <div class="speaker-profile-avatar">RB</div>
        <div>
            <h4>Rachel Bailey, PhD</h4>
            <p class="speaker-title">Lead Researcher</p>
        </div>
    </div>
    <p>Dr. Bailey is a leading expert...</p>
</div>
```

Change all details:
- Avatar initials
- Name
- Title
- Biography paragraph

**To Add More Speakers:**
Copy entire `<div class="speaker-profile-card">...</div>` block

### **Step 7: Update Hosting Organizations**

Find:
```html
<div class="event-hosts">
    <div class="event-host">
        <strong>American Society of Gene + Cell Therapy (ASGCT)</strong>
        <p>ASGCT is the leading professional organization...</p>
    </div>
    <div class="event-host">
        <strong>Child's Cure Genetic Research</strong>
        <p>Child's Cure is dedicated to...</p>
    </div>
</div>
```

Update or add new organizations

### **Step 8: Update Important Information Box**

Find:
```html
<div class="event-info-box">
    <h4>Important Information</h4>
    <ul>
        <li><strong>Duration:</strong> 60 minutes (including Q&A)</li>
        <li><strong>Format:</strong> Virtual webinar via Zoom</li>
        <li><strong>Cost:</strong> FREE - Registration required</li>
        <!-- More items... -->
    </ul>
</div>
```

Update all details to match your new event

### **Step 9: Update Hidden Form Fields (IMPORTANT!)**

This ensures Netlify tracks which event people registered for.

Find in BOTH forms:
```html
<input type="hidden" name="event-name" value="Gene Therapy for CDKL5: The History, Progress & Next Steps">
<input type="hidden" name="event-date" value="October 26, 2025">
```

Change to:
```html
<input type="hidden" name="event-name" value="Your New Event Name">
<input type="hidden" name="event-date" value="December 14, 2025">
```

**Important:** Update this in BOTH forms:
1. Registration form (line ~220)
2. Question form (line ~320)

### **Step 10: Save the File**
- Press `Ctrl + S`
- Test in browser

---

## 🎨 OPTIONAL: CHANGE COLORS

### **To Change Event Panel Color (Home Page)**

The purple gradient is defined in `css/style.css` around line 2530:

Find:
```css
.event-panel {
    background: linear-gradient(135deg, #5e35b1 0%, #673ab7 50%, #9c27b0 100%);
}
```

**Color Options:**

**Blue Theme:**
```css
background: linear-gradient(135deg, #1976d2 0%, #2196f3 50%, #64b5f6 100%);
```

**Green Theme:**
```css
background: linear-gradient(135deg, #388e3c 0%, #4caf50 50%, #81c784 100%);
```

**Orange Theme:**
```css
background: linear-gradient(135deg, #e64a19 0%, #ff5722 50%, #ff8a65 100%);
```

**Teal Theme:**
```css
background: linear-gradient(135deg, #00796b 0%, #009688 50%, #4db6ac 100%);
```

---

## 📋 QUICK CHECKLIST

### **Before Publishing New Event:**

- [ ] Updated event title on home page
- [ ] Updated event title on details page
- [ ] Updated date and time (both pages)
- [ ] Updated event description
- [ ] Updated speaker names and initials
- [ ] Updated speaker bios (details page)
- [ ] Updated event highlights/agenda
- [ ] Updated hosting organizations
- [ ] Updated important information box
- [ ] **Updated hidden form fields (event-name, event-date)**
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Saved both files
- [ ] Committed to Git
- [ ] Pushed to GitHub
- [ ] Deployed to Netlify

---

## 🔄 MULTIPLE EVENTS

### **Option 1: Replace Current Event**
- Simply update the existing event panel and details page
- Old event information is overwritten

### **Option 2: Archive Old Event**
1. Rename `event-details.html` → `event-2025-october.html`
2. Create new `event-details.html` for new event
3. Keep link in home page pointing to `event-details.html`
4. Optionally create "Past Events" page linking to archives

### **Option 3: Multiple Event Panels on Home Page**

**Add a second event panel:**

Copy the entire event panel section:
```html
<!-- Event 1 -->
<section class="section fade-in event-announcement">
    <div class="event-panel">
        <!-- First event details -->
    </div>
</section>

<!-- Event 2 -->
<section class="section fade-in event-announcement">
    <div class="event-panel">
        <!-- Second event details -->
    </div>
</section>
```

Update the "View Details" button link:
```html
<a href="event-details-conference.html" class="btn btn-event">View Details & Register</a>
```

---

## 💡 PRO TIPS

### **1. Use Find & Replace**
- Press `Ctrl + H` in VS Code
- Find: `October 26, 2025`
- Replace: `December 14, 2025`
- Click "Replace All"

### **2. Test Locally First**
Always test changes at `http://localhost:8000` before deploying

### **3. Keep Event Templates**
Save a copy of `event-details-TEMPLATE.html` with placeholders:
```html
<h1>[EVENT TITLE]</h1>
<span>[EVENT DATE]</span>
<span>[EVENT TIME]</span>
```

### **4. Update README**
Add event details to `README.md` for future reference

### **5. Git Commit Messages**
Use clear messages:
```bash
git commit -m "Update event: Replace October webinar with December conference"
```

### **6. Set Reminders**
- Remove/archive event AFTER it happens
- Update "upcoming" to "past" event
- Remove registration forms after event date

---

## 🚨 COMMON MISTAKES TO AVOID

### **❌ DON'T:**
1. Forget to update hidden form fields
2. Leave old speaker information
3. Keep old dates in form tracking
4. Test only on desktop
5. Forget to update page title in `<head>`
6. Mix up date formats (be consistent)
7. Leave broken links

### **✅ DO:**
1. Update ALL occurrences of event name
2. Test all forms
3. Check mobile view
4. Verify links work
5. Update both home panel AND details page
6. Keep consistent date/time format
7. Test in different browsers

---

## 📞 NEED HELP?

### **Quick Reference Locations:**

| What to Update | File | Approx Line | Search For |
|----------------|------|-------------|------------|
| Home page title | `index.html` | 75 | `event-title` |
| Home page date | `index.html` | 80 | `October 26` |
| Home page time | `index.html` | 85 | `9:00 - 10:00` |
| Details page title | `event-details.html` | 65 | `event-hero-title` |
| Details page content | `event-details.html` | 100+ | `About This Webinar` |
| Form tracking | `event-details.html` | 220, 320 | `event-name` |
| Event colors | `css/style.css` | 2530 | `.event-panel` |

---

## 🎓 EXAMPLE: COMPLETE EVENT UPDATE

### **Scenario:** Change webinar to in-person conference

**Step 1: Home Page (`index.html`)**
```html
<!-- OLD -->
<h2 class="event-title">Gene Therapy for CDKL5:<br>The History, Progress & Next Steps</h2>
<span><strong>Sunday, October 26, 2025</strong></span>
<span><strong>9:00 - 10:00 AM CDT</strong></span>

<!-- NEW -->
<h2 class="event-title">CDKL5 Family Conference 2025<br>Hope, Research & Community</h2>
<span><strong>Saturday, March 15, 2026</strong></span>
<span><strong>9:00 AM - 5:00 PM EST</strong></span>
```

**Step 2: Event Details (`event-details.html`)**
```html
<!-- Update hero -->
<div class="event-hero-badge">UPCOMING CONFERENCE</div>
<h1 class="event-hero-title">CDKL5 Family Conference 2025</h1>
<span>Saturday, March 15, 2026</span>
<span>9:00 AM - 5:00 PM EST</span>
<span>In-Person Event (Boston, MA)</span>

<!-- Update content -->
<h2>About This Conference</h2>
<p>Join families, researchers, and clinicians for a full day...</p>

<!-- Update hidden fields -->
<input type="hidden" name="event-name" value="CDKL5 Family Conference 2025">
<input type="hidden" name="event-date" value="March 15, 2026">
```

**Step 3: Save, Test, Commit, Deploy**
```bash
git add index.html event-details.html
git commit -m "Update event: March 2026 Family Conference"
git push
```

---

## ✅ FINAL CHECKLIST

After making changes:

1. [ ] Home page displays correctly
2. [ ] Event details page loads
3. [ ] "View Details & Register" button works
4. [ ] Date and time are correct everywhere
5. [ ] Speaker information is accurate
6. [ ] Forms have correct tracking fields
7. [ ] Tested on mobile device
8. [ ] No broken links
9. [ ] Committed to Git
10. [ ] Deployed and live

---

**You're ready to manage events like a pro!** 🎉

If you need help with specific changes, just ask and I can make them for you!
