# 📅 Complete Step-by-Step Tutorial: How to Update Events

**🎯 Goal:** Update the upcoming event on your website  
**⏱️ Time:** 15-20 minutes  
**📚 Skills Needed:** Basic text editing (like using Notepad)  
**🛠️ Tools Needed:** VS Code (or any text editor)

---

## 🗺️ THE BIG PICTURE

Your website shows events in **TWO locations**:

```
┌─────────────────────────────────────────┐
│  HOME PAGE (index.html)                 │
│  ┌───────────────────────────────────┐  │
│  │  🎉 EVENT PANEL (Purple Box)     │  │
│  │  • Event Title                    │  │
│  │  • Date & Time                    │  │
│  │  • Short Description              │  │
│  │  • Speaker Names                  │  │
│  │  • "View Details" Button         │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
                  ↓ (button links to)
┌─────────────────────────────────────────┐
│  EVENT DETAILS PAGE (event-details.html)│
│  ┌───────────────────────────────────┐  │
│  │  📋 FULL EVENT INFORMATION        │  │
│  │  • Complete Description           │  │
│  │  • Event Highlights               │  │
│  │  • Speaker Biographies           │  │
│  │  • Hosting Organizations          │  │
│  │  • Registration Form              │  │
│  │  • Question Form                  │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

**You must update BOTH pages to keep information consistent!**

---

## 📝 PART 1: UPDATE THE HOME PAGE EVENT PANEL

### **Step 1: Open Your Project Folder**

1. Open **File Explorer** (Windows Key + E)
2. Navigate to: `C:\GENE_THERAPY`
3. You should see files like:
   ```
   📄 index.html
   📄 event-details.html
   📄 contact.html
   📁 css
   📁 js
   📁 images
   ```

---

### **Step 2: Open index.html in VS Code**

**Method A: Using VS Code**
1. Open VS Code
2. Click **File** → **Open File**
3. Select `C:\GENE_THERAPY\index.html`
4. Click **Open**

**Method B: Right-click**
1. Right-click on `index.html`
2. Choose **Open with** → **Visual Studio Code**

---

### **Step 3: Find the Event Panel Section**

1. In VS Code, press **Ctrl + F** (this opens the Find box)
2. Type: `event-announcement`
3. Press **Enter**
4. VS Code will jump to the event section (around line 70)

You'll see something like this:

```html
<section class="section fade-in event-announcement">
    <div class="event-panel">
        <div class="event-badge">UPCOMING WEBINAR</div>
        
        <h2 class="event-title">Gene Therapy for CDKL5:<br>The History, Progress & Next Steps</h2>
        
        <div class="event-meta">
            <div class="event-meta-item">
                <svg>...</svg>
                <span><strong>Sunday, October 26, 2025</strong></span>
            </div>
            ...
```

---

### **Step 4: Update the Event Badge (Optional)**

**Current Code:**
```html
<div class="event-badge">UPCOMING WEBINAR</div>
```

**Change it to match your event type:**

| Event Type | Code |
|------------|------|
| Webinar | `<div class="event-badge">UPCOMING WEBINAR</div>` |
| Conference | `<div class="event-badge">UPCOMING CONFERENCE</div>` |
| Workshop | `<div class="event-badge">UPCOMING WORKSHOP</div>` |
| Meeting | `<div class="event-badge">UPCOMING MEETING</div>` |
| Fundraiser | `<div class="event-badge">UPCOMING FUNDRAISER</div>` |

**Example:** If you're hosting a conference:
```html
<div class="event-badge">UPCOMING CONFERENCE</div>
```

---

### **Step 5: Update the Event Title**

**Find this code:**
```html
<h2 class="event-title">Gene Therapy for CDKL5:<br>The History, Progress & Next Steps</h2>
```

**Understanding the code:**
- `<h2 class="event-title">` = Opening tag (DON'T change this)
- `Gene Therapy for CDKL5:` = First line of title (CHANGE this)
- `<br>` = Line break (keeps subtitle on new line - KEEP this)
- `The History, Progress & Next Steps` = Second line (CHANGE this)
- `</h2>` = Closing tag (DON'T change this)

**Example 1: One-line title (no subtitle)**
```html
<h2 class="event-title">CDKL5 Family Conference 2026</h2>
```

**Example 2: Two-line title with subtitle**
```html
<h2 class="event-title">Understanding CDKL5 Research:<br>A Parent's Guide to Clinical Trials</h2>
```

**Example 3: Your custom title**
```html
<h2 class="event-title">Your Event Name Here<br>Your Optional Subtitle Here</h2>
```

---

### **Step 6: Update the Date**

**Find this code:**
```html
<div class="event-meta-item">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10z"/>
    </svg>
    <span><strong>Sunday, October 26, 2025</strong></span>
</div>
```

**What to change:**
- Only change the text between `<strong>` and `</strong>`
- Don't touch the SVG code (that's the calendar icon)

**Change from:**
```html
<span><strong>Sunday, October 26, 2025</strong></span>
```

**To your new date:**
```html
<span><strong>Saturday, March 15, 2026</strong></span>
```

**📝 Date Format Tips:**
- Include day of week: `Monday, December 1, 2025`
- Be consistent: Always use format: `DayName, Month Day, Year`
- Use full month names: `January` not `Jan`

---

### **Step 7: Update the Time**

**Find this code:**
```html
<div class="event-meta-item">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
    </svg>
    <span><strong>9:00 - 10:00 AM CDT</strong></span>
</div>
```

**What to change:**
- Only change the text between `<strong>` and `</strong>`
- Don't touch the SVG code (that's the clock icon)

**Change from:**
```html
<span><strong>9:00 - 10:00 AM CDT</strong></span>
```

**To your new time:**
```html
<span><strong>2:00 - 4:00 PM EST</strong></span>
```

**⏰ Time Format Examples:**
```html
<!-- 1-hour event -->
<span><strong>9:00 - 10:00 AM CDT</strong></span>

<!-- 2-hour event -->
<span><strong>1:00 - 3:00 PM EST</strong></span>

<!-- Half-day event -->
<span><strong>9:00 AM - 12:00 PM PST</strong></span>

<!-- Full-day event -->
<span><strong>9:00 AM - 5:00 PM EST</strong></span>

<!-- Evening event -->
<span><strong>6:30 - 8:30 PM CDT</strong></span>
```

**🌍 Common Time Zones:**
- **EST** = Eastern Standard Time
- **CST** = Central Standard Time
- **MST** = Mountain Standard Time
- **PST** = Pacific Standard Time
- **CDT** = Central Daylight Time
- **EDT** = Eastern Daylight Time

---

### **Step 8: Update the Event Description**

**Find this code:**
```html
<p class="event-description">
    The US FDA has provided positive feedback + IND suggestions for CDKL5 gene therapy. 
    Join us to learn about the journey from preclinical research to clinical trials, 
    and what this means for families affected by CDKL5.
</p>
```

**What to change:**
- Change ALL the text between `<p class="event-description">` and `</p>`
- Keep it to 2-3 sentences
- Make it compelling and clear

**Examples:**

**Example 1: Research Update**
```html
<p class="event-description">
    Get the latest updates on CDKL5 gene therapy research from leading scientists. 
    Learn about recent breakthroughs, clinical trial timelines, and how you can 
    support the mission to bring treatments to families.
</p>
```

**Example 2: Family Conference**
```html
<p class="event-description">
    Join families, caregivers, and medical professionals for our annual conference. 
    Connect with other families, hear inspiring stories, and learn about resources 
    available to support your CDKL5 journey.
</p>
```

**Example 3: Educational Workshop**
```html
<p class="event-description">
    Learn practical strategies for managing CDKL5 symptoms and improving quality of life. 
    This workshop covers therapy options, educational planning, and navigating the 
    healthcare system with expert guidance.
</p>
```

---

### **Step 9: Update the Speakers**

**Find this code:**
```html
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
```

**Understanding the structure:**
- Each speaker is in a `<div class="speaker">` block
- Avatar shows initials: `<div class="speaker-avatar">RB</div>`
- Name: `<strong>Rachel Bailey, PhD</strong>`
- Title: `<span>Lead Researcher</span>`

---

#### **Option A: Change Existing Speaker**

**Change Speaker 1:**

**From:**
```html
<div class="speaker">
    <div class="speaker-avatar">RB</div>
    <div class="speaker-info">
        <strong>Rachel Bailey, PhD</strong>
        <span>Lead Researcher</span>
    </div>
</div>
```

**To:**
```html
<div class="speaker">
    <div class="speaker-avatar">JD</div>
    <div class="speaker-info">
        <strong>Dr. Jane Doe</strong>
        <span>Neurologist</span>
    </div>
</div>
```

**Steps:**
1. Change initials: `RB` → `JD`
2. Change name: `Rachel Bailey, PhD` → `Dr. Jane Doe`
3. Change title: `Lead Researcher` → `Neurologist`

---

#### **Option B: Add More Speakers**

To add a third speaker, copy this block and paste it after the second speaker:

```html
<div class="speaker">
    <div class="speaker-avatar">MS</div>
    <div class="speaker-info">
        <strong>Dr. Michael Smith</strong>
        <span>Genetic Counselor</span>
    </div>
</div>
```

**Your code will now look like:**
```html
<div class="event-speakers">
    <!-- Speaker 1 -->
    <div class="speaker">
        <div class="speaker-avatar">RB</div>
        <div class="speaker-info">
            <strong>Rachel Bailey, PhD</strong>
            <span>Lead Researcher</span>
        </div>
    </div>
    
    <!-- Speaker 2 -->
    <div class="speaker">
        <div class="speaker-avatar">JJ</div>
        <div class="speaker-info">
            <strong>Jainu Jogani</strong>
            <span>Parent Advocate</span>
        </div>
    </div>
    
    <!-- Speaker 3 (NEW!) -->
    <div class="speaker">
        <div class="speaker-avatar">MS</div>
        <div class="speaker-info">
            <strong>Dr. Michael Smith</strong>
            <span>Genetic Counselor</span>
        </div>
    </div>
</div>
```

**💡 Pro Tip:** You can add up to 4 speakers. More than that makes the panel crowded.

---

#### **Option C: Remove a Speaker**

To remove a speaker, delete the entire `<div class="speaker">...</div>` block.

**Example: Keep only Speaker 1, remove Speaker 2**

**Delete this entire section:**
```html
<div class="speaker">
    <div class="speaker-avatar">JJ</div>
    <div class="speaker-info">
        <strong>Jainu Jogani</strong>
        <span>Parent Advocate</span>
    </div>
</div>
```

---

### **Step 10: Update Hosting Organizations**

**Find this code:**
```html
<div class="event-footer">
    <p class="event-organizations">
        <strong>Hosted by:</strong> American Society of Gene + Cell Therapy & Child's Cure Genetic Research
    </p>
    <a href="event-details.html" class="btn btn-event">View Details & Register</a>
</div>
```

**Change from:**
```html
<strong>Hosted by:</strong> American Society of Gene + Cell Therapy & Child's Cure Genetic Research
```

**To your organization(s):**
```html
<strong>Hosted by:</strong> Your Organization Name
```

**Examples:**

**Single Organization:**
```html
<strong>Hosted by:</strong> CDKL5 Gene Therapy Coalition
```

**Multiple Organizations:**
```html
<strong>Hosted by:</strong> CDKL5 Coalition & Children's Hospital Research Center
```

**With Partners:**
```html
<strong>Hosted by:</strong> CDKL5 Coalition in partnership with Mayo Clinic
```

---

### **Step 11: Save the Home Page File**

1. Press **Ctrl + S** (or File → Save)
2. You should see a dot disappear from the file tab if it was there
3. **Do NOT close the file yet** - we need to test it!

---

### **Step 12: Test the Home Page**

1. Open your web browser (Chrome, Firefox, etc.)
2. Press **Ctrl + O** (or File → Open File)
3. Navigate to `C:\GENE_THERAPY\index.html`
4. Click **Open**

**What to check:**
- ✅ Event title displays correctly
- ✅ Date and time are correct
- ✅ Description makes sense
- ✅ Speaker names and initials are correct
- ✅ Organizations are correct
- ✅ Everything fits nicely (not overflowing)

**📱 Mobile Test:**
1. Press **F12** in your browser (opens Developer Tools)
2. Click the phone icon (Toggle Device Toolbar)
3. Select "iPhone 12 Pro" or similar
4. Check that event panel looks good on mobile

**❌ If something looks wrong:**
- Go back to VS Code
- Make corrections
- Save again (Ctrl + S)
- Refresh browser (F5)

---

## 🎯 PART 2: UPDATE THE EVENT DETAILS PAGE

Now we need to update the detailed event page with ALL the information.

---

### **Step 13: Open event-details.html**

In VS Code:
1. Click **File** → **Open File**
2. Select `C:\GENE_THERAPY\event-details.html`
3. Click **Open**

Or:
1. Press **Ctrl + P** (Quick Open)
2. Type: `event-details`
3. Select `event-details.html`

---

### **Step 14: Update the Page Title (Browser Tab)**

**Find this code (near the top, around line 6):**
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upcoming Webinar | CDKL5 Gene Therapy Coalition</title>
```

**Change:**
```html
<title>Upcoming Webinar | CDKL5 Gene Therapy Coalition</title>
```

**To:**
```html
<title>Your Event Name | CDKL5 Gene Therapy Coalition</title>
```

**Examples:**
```html
<title>CDKL5 Family Conference 2026 | CDKL5 Gene Therapy Coalition</title>
<title>Gene Therapy Research Update | CDKL5 Gene Therapy Coalition</title>
<title>Understanding Clinical Trials | CDKL5 Gene Therapy Coalition</title>
```

**❓ Why this matters:** This is what shows in browser tabs and search results!

---

### **Step 15: Update the Event Hero (Top Banner)**

**Find this section (around line 60-90):**
```html
<section class="event-hero">
    <div class="container">
        <div class="event-hero-badge">UPCOMING WEBINAR</div>
        
        <h1 class="event-hero-title">Gene Therapy for CDKL5:<br>The History, Progress & Next Steps</h1>
        
        <div class="event-hero-meta">
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
        </div>
    </div>
</section>
```

---

#### **Update Hero Badge:**
```html
<div class="event-hero-badge">UPCOMING WEBINAR</div>
```

Change to match your event type:
```html
<div class="event-hero-badge">UPCOMING CONFERENCE</div>
<div class="event-hero-badge">UPCOMING WORKSHOP</div>
<div class="event-hero-badge">UPCOMING FUNDRAISER</div>
```

---

#### **Update Hero Title:**
```html
<h1 class="event-hero-title">Gene Therapy for CDKL5:<br>The History, Progress & Next Steps</h1>
```

**Make it match your home page title!**
```html
<h1 class="event-hero-title">Your Event Title Here</h1>
```

---

#### **Update Hero Date:**
```html
<span>Sunday, October 26, 2025</span>
```

**Change to your date:**
```html
<span>Saturday, March 15, 2026</span>
```

---

#### **Update Hero Time:**
```html
<span>9:00 - 10:00 AM CDT</span>
```

**Change to your time:**
```html
<span>2:00 - 4:00 PM EST</span>
```

---

#### **Update Event Format:**
```html
<span>Virtual Event (Webinar)</span>
```

**Change to match your event:**

| Event Type | Code |
|------------|------|
| Virtual Webinar | `<span>Virtual Event (Webinar)</span>` |
| Virtual Meeting | `<span>Virtual Event (Zoom Meeting)</span>` |
| In-Person | `<span>In-Person Event (Boston, MA)</span>` |
| Hybrid | `<span>Hybrid Event (In-Person + Virtual)</span>` |
| Conference | `<span>In-Person Conference (Chicago, IL)</span>` |

---

### **Step 16: Update "About This Event" Section**

**Find this code (around line 100-120):**
```html
<div class="event-content">
    <h2>About This Webinar</h2>
    <p class="event-lead-text">
        The US FDA has provided positive feedback + IND suggestions for CDKL5 gene therapy. 
        Join us to learn about the journey from preclinical research to clinical trials, 
        and what this means for families affected by CDKL5.
    </p>
    
    <p>
        This webinar brings together leading researchers and parent advocates to discuss 
        the latest developments in gene therapy for CDKL5 Deficiency Disorder...
    </p>
</div>
```

---

#### **Update Heading:**
```html
<h2>About This Webinar</h2>
```

Change to:
```html
<h2>About This Conference</h2>
<h2>About This Workshop</h2>
<h2>About This Event</h2>
```

---

#### **Update Lead Paragraph:**

This is the first, larger text paragraph. Make it compelling!

```html
<p class="event-lead-text">
    Your exciting event description here! Make it clear why people should attend.
</p>
```

**Example for Conference:**
```html
<p class="event-lead-text">
    Join us for the largest gathering of CDKL5 families, researchers, and healthcare 
    professionals. This two-day conference features cutting-edge research presentations, 
    family success stories, and invaluable networking opportunities.
</p>
```

---

#### **Update Regular Paragraphs:**

Add 2-3 more paragraphs with details:

```html
<p>
    Paragraph 1: What attendees will learn or experience...
</p>

<p>
    Paragraph 2: Why this event is important...
</p>

<p>
    Paragraph 3: Who should attend...
</p>
```

**Example:**
```html
<p>
    This conference will cover the latest advances in CDKL5 research, including 
    gene therapy progress, seizure management strategies, and developmental support 
    approaches. Attendees will have opportunities to meet one-on-one with specialists 
    and connect with families facing similar challenges.
</p>

<p>
    Whether you're newly diagnosed or have been on this journey for years, this 
    event offers valuable insights, practical resources, and a supportive community 
    that understands the unique challenges of CDKL5.
</p>

<p>
    The conference is designed for parents, caregivers, medical professionals, 
    therapists, and anyone involved in supporting individuals with CDKL5 Deficiency 
    Disorder.
</p>
```

---

### **Step 17: Update Event Highlights**

**Find this code (around line 130-160):**
```html
<h3>What You'll Learn</h3>
<ul class="event-highlights">
    <li>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        FDA feedback and IND pathway for CDKL5 gene therapy
    </li>
    <li>
        <svg>...</svg>
        Preclinical research findings and their significance
    </li>
    <!-- More items... -->
</ul>
```

---

#### **To Update a Highlight:**

**Change only the text** after the `</svg>` and before the `</li>`:

```html
<li>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>
    Your new highlight text here
</li>
```

---

#### **To Add a New Highlight:**

Copy this entire block and paste it in the list:

```html
<li>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>
    Your new highlight text here
</li>
```

---

#### **Example Event Highlights:**

**For Research Webinar:**
```html
<ul class="event-highlights">
    <li>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        Latest clinical trial updates and timelines
    </li>
    <li>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        Understanding the gene therapy process
    </li>
    <li>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        How to participate in research studies
    </li>
    <li>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        Q&A with leading researchers
    </li>
</ul>
```

**For Family Conference:**
```html
<ul class="event-highlights">
    <li>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        Keynote presentations from medical experts
    </li>
    <li>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        Breakout sessions on therapy and education
    </li>
    <li>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        Family networking and support groups
    </li>
    <li>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        Resource fair with equipment and services
    </li>
    <li>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        Lunch and evening social events
    </li>
</ul>
```

---

### **Step 18: Update Speaker Profiles**

**Find this code (around line 170-220):**
```html
<h3>Featured Speakers</h3>
<div class="event-speakers-grid">
    <div class="speaker-profile-card">
        <div class="speaker-profile-header">
            <div class="speaker-profile-avatar">RB</div>
            <div>
                <h4>Rachel Bailey, PhD</h4>
                <p class="speaker-title">Lead Researcher, Gene Therapy Program</p>
            </div>
        </div>
        <p>
            Dr. Bailey is a leading expert in gene therapy for neurological disorders...
        </p>
    </div>
    
    <div class="speaker-profile-card">
        <div class="speaker-profile-header">
            <div class="speaker-profile-avatar">JJ</div>
            <div>
                <h4>Jainu Jogani</h4>
                <p class="speaker-title">Parent Advocate & Co-Founder</p>
            </div>
        </div>
        <p>
            Jainu is a parent advocate and co-founder of CDKL5 Gene Therapy Coalition...
        </p>
    </div>
</div>
```

---

#### **To Update a Speaker:**

**Change these parts:**
1. Avatar initials: `RB` → Your initials
2. Speaker name: `Rachel Bailey, PhD` → Your speaker
3. Speaker title: `Lead Researcher, Gene Therapy Program` → Your title
4. Biography paragraph

**Example:**
```html
<div class="speaker-profile-card">
    <div class="speaker-profile-header">
        <div class="speaker-profile-avatar">JD</div>
        <div>
            <h4>Dr. Jane Doe</h4>
            <p class="speaker-title">Pediatric Neurologist, Children's Hospital</p>
        </div>
    </div>
    <p>
        Dr. Doe is a board-certified pediatric neurologist with over 15 years of 
        experience treating children with CDKL5. She specializes in seizure management 
        and developmental support strategies.
    </p>
</div>
```

---

#### **To Add More Speakers:**

Copy the entire `<div class="speaker-profile-card">...</div>` block:

```html
<div class="speaker-profile-card">
    <div class="speaker-profile-header">
        <div class="speaker-profile-avatar">MS</div>
        <div>
            <h4>Dr. Michael Smith</h4>
            <p class="speaker-title">Genetic Counselor</p>
        </div>
    </div>
    <p>
        Dr. Smith provides genetic counseling to families affected by rare diseases. 
        He helps families understand genetic testing results and navigate treatment options.
    </p>
</div>
```

---

### **Step 19: Update Hosting Organizations**

**Find this code (around line 240-270):**
```html
<h3>Hosted By</h3>
<div class="event-hosts">
    <div class="event-host">
        <strong>American Society of Gene + Cell Therapy (ASGCT)</strong>
        <p>
            ASGCT is the leading professional organization for gene and cell therapy...
        </p>
    </div>
    <div class="event-host">
        <strong>Child's Cure Genetic Research</strong>
        <p>
            Child's Cure is dedicated to accelerating research for rare genetic diseases...
        </p>
    </div>
</div>
```

**Change to your organization(s):**

```html
<div class="event-host">
    <strong>Your Organization Name</strong>
    <p>
        Your organization description here. What does your organization do? 
        What is its mission?
    </p>
</div>
```

**Example:**
```html
<div class="event-host">
    <strong>CDKL5 Gene Therapy Coalition</strong>
    <p>
        The CDKL5 Gene Therapy Coalition is a global organization dedicated to 
        accelerating the development of gene therapy treatments for CDKL5 Deficiency 
        Disorder. We fund research, support families, and advocate for regulatory 
        approval of life-changing therapies.
    </p>
</div>
```

---

### **Step 20: Update Important Information Box**

**Find this code (around line 280-310):**
```html
<div class="event-info-box">
    <h4>Important Information</h4>
    <ul>
        <li><strong>Duration:</strong> 60 minutes (including Q&A)</li>
        <li><strong>Format:</strong> Virtual webinar via Zoom</li>
        <li><strong>Cost:</strong> FREE - Registration required</li>
        <li><strong>Recording:</strong> Available to registrants after the event</li>
        <li><strong>Q&A:</strong> Submit questions in advance or during the webinar</li>
        <li><strong>CE Credits:</strong> Not available for this webinar</li>
    </ul>
</div>
```

**Customize each line:**

```html
<ul>
    <li><strong>Duration:</strong> Your event duration</li>
    <li><strong>Format:</strong> Your event format</li>
    <li><strong>Cost:</strong> FREE or ticket price</li>
    <li><strong>Location:</strong> If in-person, add address</li>
    <li><strong>Meals:</strong> If provided, mention here</li>
    <li><strong>Parking:</strong> If relevant, add info</li>
    <li><strong>Recording:</strong> Will it be recorded?</li>
    <li><strong>Materials:</strong> Any handouts or resources?</li>
</ul>
```

**Example for In-Person Conference:**
```html
<ul>
    <li><strong>Duration:</strong> Full day (9:00 AM - 5:00 PM)</li>
    <li><strong>Location:</strong> Chicago Marriott Downtown, 540 N Michigan Ave, Chicago, IL</li>
    <li><strong>Cost:</strong> FREE - Registration required by March 1st</li>
    <li><strong>Meals:</strong> Breakfast, lunch, and snacks provided</li>
    <li><strong>Parking:</strong> Discounted parking available in hotel garage ($15/day)</li>
    <li><strong>Childcare:</strong> Available on-site with advance registration</li>
    <li><strong>Materials:</strong> Conference packet and resource guide included</li>
    <li><strong>Recording:</strong> Key sessions will be recorded and shared with registrants</li>
</ul>
```

---

### **Step 21: Update Hidden Form Fields (CRITICAL!)**

This step is **VERY IMPORTANT** for tracking registrations!

**Find these lines in TWO places** (around lines 220 and 320):

**Location 1: Registration Form**
```html
<form name="event-registration" method="post" data-netlify="true" netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="event-registration">
    <input type="hidden" name="event-name" value="Gene Therapy for CDKL5: The History, Progress & Next Steps">
    <input type="hidden" name="event-date" value="October 26, 2025">
    
    <!-- Rest of form... -->
</form>
```

**Location 2: Question Form**
```html
<form name="event-question" method="post" data-netlify="true" netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="event-question">
    <input type="hidden" name="event-name" value="Gene Therapy for CDKL5: The History, Progress & Next Steps">
    <input type="hidden" name="event-date" value="October 26, 2025">
    
    <!-- Rest of form... -->
</form>
```

---

#### **What to Change:**

**Change these two lines in BOTH forms:**

```html
<input type="hidden" name="event-name" value="Gene Therapy for CDKL5: The History, Progress & Next Steps">
<input type="hidden" name="event-date" value="October 26, 2025">
```

**To your event details:**

```html
<input type="hidden" name="event-name" value="Your New Event Title">
<input type="hidden" name="event-date" value="March 15, 2026">
```

**Example:**
```html
<input type="hidden" name="event-name" value="CDKL5 Family Conference 2026">
<input type="hidden" name="event-date" value="March 15, 2026">
```

**🚨 Why this matters:** When people register, you'll receive an email with these details so you know which event they signed up for!

---

### **Step 22: Save the Event Details File**

1. Press **Ctrl + S** (or File → Save)
2. Check that the file is saved (no dot in tab)

---

### **Step 23: Test the Event Details Page**

1. Open your browser
2. Navigate to: `C:\GENE_THERAPY\event-details.html`
3. **Or** click the "View Details & Register" button from the home page

**What to check:**
- ✅ Page title in browser tab
- ✅ Hero section (badge, title, date, time, format)
- ✅ "About" section reads well
- ✅ Event highlights are correct
- ✅ Speaker profiles are accurate
- ✅ Hosting organizations are correct
- ✅ Important information is accurate
- ✅ Forms load and look good
- ✅ Everything is spelled correctly

**Test the forms:**
1. Scroll to registration form
2. Fill out with test data
3. **DON'T submit yet** (wait until deployed to Netlify)
4. Check that all fields work
5. Check that form looks good on mobile (F12 → phone icon)

---

## 💾 PART 3: SAVE YOUR WORK TO GITHUB

Now that both pages are updated, let's save everything to GitHub!

---

### **Step 24: Check What Changed**

1. In VS Code, click the **Source Control icon** (looks like branches, 3rd icon on left)
2. You should see:
   ```
   Changes:
   M index.html
   M event-details.html
   ```
3. The "M" means "Modified"

---

### **Step 25: Stage Your Changes**

1. Hover over "Changes"
2. Click the **+** (plus) icon
3. Files move to "Staged Changes" section

**Or use terminal:**
1. Press **Ctrl + `** (opens terminal)
2. Type:
   ```powershell
   git add index.html event-details.html
   ```
3. Press Enter

---

### **Step 26: Commit Your Changes**

**Method A: Using VS Code**
1. In Source Control panel
2. Type a commit message in the box at top:
   ```
   Update event: March 2026 Family Conference
   ```
3. Press **Ctrl + Enter** (or click checkmark)

**Method B: Using Terminal**
```powershell
git commit -m "Update event: March 2026 Family Conference"
```

---

### **Step 27: Push to GitHub**

**Method A: Using VS Code**
1. In Source Control panel
2. Click **...** (three dots menu)
3. Click **Push**

**Method B: Using Terminal**
```powershell
git push
```

**✅ Success!** Your changes are now saved to GitHub!

---

## 🎨 BONUS: CUSTOMIZATION OPTIONS

### **Change Event Panel Color**

The event panel on the home page has a purple gradient. Want to change it?

1. Open `css/style.css`
2. Press **Ctrl + F**
3. Search for: `.event-panel`
4. Find this line (around line 2530):
   ```css
   .event-panel {
       background: linear-gradient(135deg, #5e35b1 0%, #673ab7 50%, #9c27b0 100%);
   ```

**Color Schemes:**

**Blue Ocean:**
```css
background: linear-gradient(135deg, #1976d2 0%, #2196f3 50%, #64b5f6 100%);
```

**Green Forest:**
```css
background: linear-gradient(135deg, #388e3c 0%, #4caf50 50%, #81c784 100%);
```

**Orange Sunset:**
```css
background: linear-gradient(135deg, #e64a19 0%, #ff5722 50%, #ff8a65 100%);
```

**Red Ruby:**
```css
background: linear-gradient(135deg, #c62828 0%, #e53935 50%, #ef5350 100%);
```

**Teal Wave:**
```css
background: linear-gradient(135deg, #00796b 0%, #009688 50%, #4db6ac 100%);
```

**Pink Rose:**
```css
background: linear-gradient(135deg, #c2185b 0%, #e91e63 50%, #f06292 100%);
```

**Indigo Night:**
```css
background: linear-gradient(135deg, #303f9f 0%, #3f51b5 50%, #7986cb 100%);
```

Save file (Ctrl + S) and refresh browser!

---

## 📋 COMPLETE CHECKLIST

Use this before publishing your event update:

### **Home Page (index.html)**
- [ ] Event badge updated (WEBINAR/CONFERENCE/etc)
- [ ] Event title updated
- [ ] Date updated
- [ ] Time updated
- [ ] Description updated
- [ ] All speaker names updated
- [ ] All speaker initials match names
- [ ] All speaker titles updated
- [ ] Hosting organizations updated
- [ ] File saved
- [ ] Tested in browser
- [ ] Tested on mobile view

### **Event Details Page (event-details.html)**
- [ ] Browser tab title updated (`<title>` tag)
- [ ] Hero badge updated
- [ ] Hero title matches home page
- [ ] Hero date matches home page
- [ ] Hero time matches home page
- [ ] Hero format updated (Virtual/In-Person)
- [ ] "About" heading updated
- [ ] "About" paragraphs updated
- [ ] Event highlights updated
- [ ] All speaker profiles updated
- [ ] Speaker biographies written
- [ ] Hosting organizations updated
- [ ] Important Information box updated
- [ ] **Hidden form fields updated in BOTH forms**
  - [ ] Registration form event-name
  - [ ] Registration form event-date
  - [ ] Question form event-name
  - [ ] Question form event-date
- [ ] File saved
- [ ] Tested in browser
- [ ] Forms load correctly
- [ ] Tested on mobile view

### **Consistency Check**
- [ ] Event title is EXACTLY the same on both pages
- [ ] Date is EXACTLY the same on both pages
- [ ] Time is EXACTLY the same on both pages
- [ ] Speaker names match on both pages
- [ ] No typos or spelling errors
- [ ] All links work correctly
- [ ] Button from home page goes to event details

### **Version Control**
- [ ] Changes committed to Git
- [ ] Pushed to GitHub
- [ ] Commit message is clear

### **Final Testing**
- [ ] Opened home page in browser
- [ ] Event panel looks good
- [ ] Clicked "View Details & Register" button
- [ ] Event details page loads
- [ ] All information is correct
- [ ] Forms are styled correctly
- [ ] Tested on phone/tablet
- [ ] Tested in different browsers (Chrome, Firefox, Safari)

### **Optional**
- [ ] Changed event panel color
- [ ] Added more speakers
- [ ] Added event agenda/schedule
- [ ] Updated email signature with event link
- [ ] Prepared social media posts

---

## 🚀 DEPLOYMENT TO NETLIFY

Once you're happy with your changes, deploy to make them live!

### **Quick Deploy Steps:**

1. **Commit and Push** (already done in Step 27)
2. **Go to Netlify:** https://www.netlify.com
3. **Sign in** with GitHub
4. **Find your site** in dashboard
5. **Click "Trigger deploy"** → "Deploy site"
6. **Wait 1-2 minutes** for deployment
7. **Test your live site** at your URL
8. **Test forms** by submitting test registration
9. **Check email** for form notification

**🎉 You're Live!**

---

## ❓ TROUBLESHOOTING

### **Problem: Can't find the code sections**

**Solution:**
- Use **Ctrl + F** to search
- Search for unique text like the event title
- Look at line numbers mentioned in this guide
- They might be slightly different but close

---

### **Problem: Broke something, site looks weird**

**Solution:**
- Press **Ctrl + Z** to undo
- Or restore from GitHub:
  ```powershell
  git checkout index.html
  git checkout event-details.html
  ```

---

### **Problem: Speaker avatars show wrong initials**

**Solution:**
- The avatar shows what's between `<div class="speaker-avatar">` and `</div>`
- Example: `<div class="speaker-avatar">JD</div>` shows "JD"
- Use 2-3 letters max

---

### **Problem: Date showing wrong in forms**

**Solution:**
- Check hidden fields in BOTH forms
- Search for: `type="hidden" name="event-date"`
- Make sure date matches event date

---

### **Problem: Can't save file**

**Solution:**
- Close file and reopen
- Check if file is read-only (right-click → Properties)
- Try "Save As" with new name
- Restart VS Code

---

### **Problem: Git push fails**

**Solution:**
```powershell
git pull
git push
```

---

## 📞 NEED HELP?

If you're stuck, you can:
1. Refer back to specific sections of this guide
2. Check the files you're editing in VS Code
3. Test in browser frequently
4. Use Ctrl + Z to undo if something breaks
5. Ask for help with specific error messages

---

## 🎓 EXAMPLE: COMPLETE WALKTHROUGH

Let's do a complete example from start to finish!

**Scenario:** Update event from October webinar to December holiday fundraiser

---

### **index.html changes:**

```html
<!-- BEFORE -->
<div class="event-badge">UPCOMING WEBINAR</div>
<h2 class="event-title">Gene Therapy for CDKL5:<br>The History, Progress & Next Steps</h2>
<span><strong>Sunday, October 26, 2025</strong></span>
<span><strong>9:00 - 10:00 AM CDT</strong></span>

<!-- AFTER -->
<div class="event-badge">UPCOMING FUNDRAISER</div>
<h2 class="event-title">Holiday Hope Gala 2025:<br>Supporting CDKL5 Gene Therapy Research</h2>
<span><strong>Saturday, December 14, 2025</strong></span>
<span><strong>6:00 - 10:00 PM EST</strong></span>
```

```html
<!-- BEFORE -->
<p class="event-description">
    The US FDA has provided positive feedback + IND suggestions for CDKL5 gene therapy...
</p>

<!-- AFTER -->
<p class="event-description">
    Join us for an elegant evening of dinner, entertainment, and fundraising to support 
    groundbreaking gene therapy research for CDKL5. Help us reach our goal of $500,000 
    to accelerate clinical trials!
</p>
```

```html
<!-- BEFORE -->
<div class="speaker">
    <div class="speaker-avatar">RB</div>
    <div class="speaker-info">
        <strong>Rachel Bailey, PhD</strong>
        <span>Lead Researcher</span>
    </div>
</div>

<!-- AFTER -->
<div class="speaker">
    <div class="speaker-avatar">MC</div>
    <div class="speaker-info">
        <strong>Maria Chen</strong>
        <span>Celebrity Host & CDKL5 Advocate</span>
    </div>
</div>
```

---

### **event-details.html changes:**

```html
<!-- BEFORE -->
<title>Upcoming Webinar | CDKL5 Gene Therapy Coalition</title>

<!-- AFTER -->
<title>Holiday Hope Gala 2025 | CDKL5 Gene Therapy Coalition</title>
```

```html
<!-- BEFORE -->
<input type="hidden" name="event-name" value="Gene Therapy for CDKL5: The History, Progress & Next Steps">
<input type="hidden" name="event-date" value="October 26, 2025">

<!-- AFTER -->
<input type="hidden" name="event-name" value="Holiday Hope Gala 2025">
<input type="hidden" name="event-date" value="December 14, 2025">
```

*(Update in BOTH forms!)*

```html
<!-- BEFORE -->
<li><strong>Cost:</strong> FREE - Registration required</li>

<!-- AFTER -->
<li><strong>Cost:</strong> $150 per person, $1,200 per table of 8</li>
```

---

**Save, test, commit, push, deploy!** ✅

---

## 🎉 CONGRATULATIONS!

You now know how to:
- ✅ Update event information on home page
- ✅ Update complete event details page
- ✅ Change speakers and organizations
- ✅ Update event dates and times
- ✅ Customize colors and styling
- ✅ Save changes to GitHub
- ✅ Test your changes locally
- ✅ Deploy to Netlify

**You're a website editor now!** 🌟

Keep this guide handy for future event updates!

---

**Last Updated:** October 12, 2025  
**Guide Version:** 1.0  
**Questions?** Refer to specific sections or create a GitHub issue!
