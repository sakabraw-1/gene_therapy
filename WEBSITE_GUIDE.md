# CDKL5 Gene Therapy Website - Complete Guide
## Simple Explanation for Anyone

---

## 🌐 What is This Website?

This is a **fundraising and information website** for CDKL5 Gene Therapy research. It helps:
- **Raise money** for clinical trials (goal: $3.5 million)
- **Educate families** about CDKL5 gene therapy
- **Register patients** for the trial
- **Organize events** like webinars
- **Connect volunteers** who want to help

**Live Website**: https://sakabraw-1.github.io/gene_therapy/

---

## 📄 What Pages Does It Have?

### 10 Main Pages:

1. **index.html** - Home page
   - Hero section with main message
   - Donation progress bar
   - Upcoming event announcement
   - Photo carousel of families
   - Call-to-action buttons

2. **about.html** - About the project
   - Leadership team (18 members with photos)
   - Scientific evidence
   - Newsletter signup

3. **get-involved.html** - Ways to help
   - Three main options: Donate, Volunteer, Register
   - Simple layout with big buttons

4. **parents-caregivers.html** - Resources for families
   - Information about CDKL5
   - Patient registry link
   - Centers of Excellence
   - Social media links

5. **contact.html** - Contact form
   - Beautiful pink form to send messages
   - Newsletter signup

6. **donate.html** - Donation page ⭐
   - Choose amount ($1,000 to $10,000)
   - One-time or monthly options
   - Pay via Credit Card, PayPal, or Venmo
   - Progress tracker

7. **registry.html** - Patient registry
   - Form to register patients
   - 18 fields to collect information
   - Submits via Netlify Forms

8. **volunteer.html** - Volunteer signup
   - Form to join as volunteer
   - Different ways to help

9. **plan-event.html** - Plan your own event
   - Form to organize fundraising events
   - Get support from the team

10. **event-details.html** - Upcoming webinar info
    - October 26, 2025 event
    - Registration form
    - Speaker details

---

## 💰 How Does Fundraising Work?

### Current Goal:
- **Target**: $3.5 Million
- **Raised**: $200,000 (starting point)
- **Progress**: 6%

### Donation Flow:
1. **User visits donate.html**
2. **Selects amount** (or enters custom amount)
3. **Chooses payment method:**
   - Credit Card (via Square)
   - PayPal
   - Venmo
4. **Completes payment** on payment gateway
5. **Returns to website**
6. **System automatically:**
   - ✅ Updates progress bar
   - ✅ Adds amount to total
   - ✅ Shows "Thank You" popup with hearts ❤️

### Progress Bars:
- **Appear on every page**
- **Update automatically** when donations come in
- **Show percentage** and dollar amounts
- **Animate smoothly** when updated

---

## 🎯 Special Features

### 1. **Live Progress Tracking** ⭐
- Progress bars update automatically
- Works across all 10 pages
- Stores data in browser
- Admin can manually update

### 2. **Thank You Modal** 💝
- Beautiful popup after donation
- Animated hearts floating
- Checkmark animation
- Shows appreciation message

### 3. **Event System** 📅
- Purple panel on home page
- Shows upcoming webinar (Oct 26, 2025)
- Countdown timer to trial date (June 30, 2026)
- Easy to update for new events

### 4. **Forms Integration** 📝
- All forms use Netlify Forms
- Submissions go to your email
- No backend server needed
- 13 total forms across the site

### 5. **Photo Carousel** 🖼️
- 47 family photos
- Auto-scrolls every 5 seconds
- Dots to navigate
- Shows stories of families

---

## 🛠️ How to Update Things

### ✏️ **Update Donation Progress**

**Easy Way - Use Admin Panel:**
1. Go to: https://sakabraw-1.github.io/gene_therapy/admin-update.html
2. See current total
3. Add new donation OR set exact total
4. Click button - Done! ✅

**What It Does:**
- Updates progress on all pages
- Changes dollar amount
- Updates percentage
- Animates progress bar

**When to Use:**
- After receiving donations
- Weekly to sync with accounting
- When someone sends a check
- Monthly updates

---

### 📅 **Update Event Information**

**To Change Upcoming Event:**

**Step 1**: Open `index.html` (home page)

**Step 2**: Find this section (around line 70):
```html
<div class="event-panel">
    <div class="event-badge">UPCOMING WEBINAR</div>
    <h2 class="event-title">Gene Therapy for CDKL5:<br>The History, Progress & Next Steps</h2>
```

**Step 3**: Change:
- Event title
- Date/time
- Description
- Registration link

**Full Tutorial**: See `docs/HOW_TO_ADD_EVENTS.md`

---

### 👥 **Update Leadership Team**

**Location**: `about.html`

**Step 1**: Find the "Leadership Team" section (around line 60)

**Step 2**: Each team member looks like this:
```html
<div class="team-member">
    <img src="images/team/john-doe.jpg" alt="John Doe">
    <h3>John Doe, PhD</h3>
    <p>Chief Scientific Officer</p>
</div>
```

**Step 3**: To add someone:
1. Copy one member's entire code
2. Paste below
3. Change name, title, and photo
4. Save file

**Step 4**: Add their photo to `images/team/` folder

---

### 🖼️ **Update Carousel Photos**

**Location**: `js/script.js` (line 100-150)

**Step 1**: Find the `imageFiles` array:
```javascript
const imageFiles = [
    'image 41.jpg', 
    'image 42.jpg', 
    // ... more photos
];
```

**Step 2**: Add your photo:
1. Put photo in `images/` folder
2. Name it like `image 88.jpg`
3. Add to the list: `'image 88.jpg',`

**Step 3**: Save and reload

---

### 💳 **Update Payment Links**

**Location**: `donate.html`

**Find these buttons** (around line 135):
```html
<!-- Credit Card (Square) -->
<a href="https://checkout.square.site/..." class="btn-give">

<!-- PayPal -->
<a href="https://www.paypal.com/..." class="btn-give">

<!-- Venmo -->
<a href="https://account.venmo.com/..." class="btn-give">
```

**Replace the `href` with your actual payment URLs**

---

### 🎨 **Change Colors**

**Location**: `css/style.css`

**Main Colors Used:**
```css
/* Navy Blue - Primary */
#303F9F

/* Orange - Donate Button */
#ff6600

/* Red - Accents */
#E57373

/* Purple - Event Panel */
#5e35b1 to #9c27b0

/* Pink - Forms */
#fce4ec to #ef9a9a
```

**To Change a Color:**
1. Open `css/style.css`
2. Search for the color code (e.g., `#303F9F`)
3. Replace with new color
4. Save and refresh

---

### ✉️ **Change Email Where Forms Go**

**Location**: Each form page (contact.html, registry.html, etc.)

**Find this**:
```html
<form name="contact" method="POST" data-netlify="true">
```

**In Netlify Dashboard:**
1. Login to Netlify
2. Go to Forms
3. Set notification email
4. Forms will go there

---

## 📱 How to Test Locally

**Step 1**: Open PowerShell in website folder

**Step 2**: Run this command:
```powershell
python -m http.server 8000
```

**Step 3**: Open browser to:
```
http://localhost:8000
```

**Step 4**: Test everything:
- Click all links
- Try donation flow
- Submit forms
- Check progress bars

---

## 🚀 How to Publish Changes

### Every Time You Make Changes:

**Step 1**: Save all files

**Step 2**: Open PowerShell in website folder

**Step 3**: Run these commands:
```powershell
git add .
git commit -m "Describe what you changed"
git push
```

**Step 4**: Wait 2-3 minutes

**Step 5**: Check live site:
https://sakabraw-1.github.io/gene_therapy/

**That's it!** Changes are live! ✅

---

## 📂 File Structure Explained

```
GENE_THERAPY/
│
├── index.html              ← Home page
├── about.html              ← About page
├── donate.html             ← Donation page ⭐
├── contact.html            ← Contact form
├── get-involved.html       ← Get involved page
├── parents-caregivers.html ← Resources
├── registry.html           ← Patient registry
├── volunteer.html          ← Volunteer signup
├── plan-event.html         ← Event planning
├── event-details.html      ← Event info
├── admin-update.html       ← Admin panel 🔧
│
├── css/
│   └── style.css           ← All styling
│
├── js/
│   └── script.js           ← All functionality
│
├── images/                 ← All photos
│   ├── image 41.jpg
│   ├── image 42.jpg
│   └── team/               ← Team photos
│
├── docs/                   ← Documentation
│   ├── HOW_TO_ADD_EVENTS.md
│   ├── EVENT_UPDATE_TUTORIAL.md
│   └── LIVE_PROGRESS_SYSTEM.md
│
└── README.md               ← Project info
```

---

## 🔧 Common Tasks - Quick Reference

### Task 1: Add $5,000 Donation
1. Go to admin-update.html
2. Enter `5000` in "Add New Donation"
3. Click "Add Donation"
4. Done! ✅

### Task 2: Update Event Date
1. Open `index.html`
2. Find event panel (line ~70)
3. Change date text
4. Save and push to GitHub

### Task 3: Add Team Member
1. Open `about.html`
2. Copy existing team member code
3. Paste and change details
4. Add photo to `images/team/`
5. Save and push

### Task 4: Change Donate Button Color
1. Open `css/style.css`
2. Search for `.btn-donate-hero`
3. Change `background: #ff6600;`
4. Save and push

### Task 5: Test Before Publishing
1. Run: `python -m http.server 8000`
2. Open: http://localhost:8000
3. Test everything
4. If good, push to GitHub

---

## 🎓 Learning Resources

### New to This? Learn Here:

**HTML Basics** (Structure):
- HTML is the content and structure
- Tags like `<h1>` = heading, `<p>` = paragraph
- Example: `<h1>Hello</h1>` shows "Hello" as big text

**CSS Basics** (Styling):
- CSS makes things look pretty
- Controls colors, sizes, spacing
- Example: `color: blue;` makes text blue

**JavaScript Basics** (Functionality):
- Makes things interactive
- Handles clicks, animations, calculations
- Example: Clicking donate button

**Git/GitHub** (Version Control):
- Saves history of all changes
- Lets you undo mistakes
- Publishes site to internet

---

## 🆘 Troubleshooting

### Problem: "Progress bar not updating"
**Solution:**
1. Clear browser cache (Ctrl + Shift + Delete)
2. Refresh page (Ctrl + F5)
3. Check admin panel shows correct number

### Problem: "Changes not showing on live site"
**Solution:**
1. Did you push to GitHub? (`git push`)
2. Wait 2-3 minutes for GitHub Pages
3. Hard refresh browser (Ctrl + F5)
4. Check if you're on gh-pages branch

### Problem: "Forms not working"
**Solution:**
1. Check Netlify is connected
2. Verify form has `data-netlify="true"`
3. Test with real submission
4. Check Netlify dashboard for submissions

### Problem: "Photos not loading"
**Solution:**
1. Check photo is in `images/` folder
2. Check filename matches exactly (case-sensitive)
3. Check file format (jpg, png, gif)
4. Try smaller file size if too big

### Problem: "Donation amount not showing on button"
**Solution:**
1. Check browser console (F12) for errors
2. Clear localStorage: `localStorage.clear()`
3. Refresh page
4. Try selecting amount again

---

## 📊 Important Numbers

### Website Stats:
- **10 pages** total
- **13 forms** for user input
- **47 carousel photos**
- **18 leadership team members**
- **3 payment gateways** (Square, PayPal, Venmo)

### Fundraising:
- **Goal**: $3,500,000
- **Starting amount**: $200,000
- **Trial date**: June 30, 2026
- **Event date**: October 26, 2025

### Technical:
- **Hosted on**: GitHub Pages (free)
- **Forms via**: Netlify Forms
- **No backend**: Pure frontend (HTML/CSS/JS)
- **Mobile friendly**: Responsive design

---

## 🎯 Best Practices

### DO:
✅ Test locally before pushing
✅ Update progress bar weekly
✅ Back up before major changes
✅ Use descriptive commit messages
✅ Keep photos under 500KB
✅ Check on mobile devices

### DON'T:
❌ Delete files without backup
❌ Change code you don't understand
❌ Push without testing
❌ Use huge image files (slows site)
❌ Forget to commit changes
❌ Change payment URLs unless verified

---

## 🎁 Special Features Explained

### 1. LocalStorage System
**What**: Browser storage that remembers data
**Used for**: 
- Donation progress total
- Pending donations
- Last update time

**Access in browser console:**
```javascript
// See all stored data
console.log(localStorage);

// Get donation total
CDKL5.getCurrentRaisedAmount();
```

### 2. Netlify Forms
**What**: Form submission service
**How it works**:
1. User fills form
2. Clicks submit
3. Netlify receives data
4. Sends email notification
5. Stores in Netlify dashboard

**No server needed!**

### 3. GitHub Pages Hosting
**What**: Free website hosting from GitHub
**How it works**:
1. You push code to GitHub
2. GitHub builds the site
3. Publishes to web automatically
4. Updates in 2-3 minutes

**Cost**: FREE! ✨

### 4. Smooth Animations
**What**: Pretty transitions and movements
**Where**:
- Progress bar filling
- Heart animations on thank you
- Carousel sliding
- Button hover effects
- Form field focus

**Technology**: CSS animations + JavaScript

---

## 💡 Pro Tips

### Tip 1: Use Browser DevTools
Press **F12** to open developer tools:
- **Console**: See JavaScript errors
- **Elements**: Inspect HTML/CSS live
- **Network**: Check if files load
- **Application**: See localStorage data

### Tip 2: Test on Multiple Devices
Check your site on:
- Desktop computer
- Laptop
- Phone (iPhone & Android)
- Tablet
- Different browsers (Chrome, Safari, Firefox)

### Tip 3: Keep Documentation Updated
When you change something:
1. Update the relevant docs file
2. Add date and description
3. Helps you remember later

### Tip 4: Version Control is Your Friend
- Commit often (every small change)
- Write clear messages
- Can always undo mistakes
- History shows who changed what

### Tip 5: Make Small Changes
- Change one thing at a time
- Test after each change
- Easier to find bugs
- Less stressful

---

## 📞 Quick Help Commands

### Check Current Branch:
```powershell
git branch
```

### See What Changed:
```powershell
git status
```

### View Recent Commits:
```powershell
git log --oneline -10
```

### Undo Last Commit (keep changes):
```powershell
git reset --soft HEAD~1
```

### Discard All Local Changes:
```powershell
git checkout .
```
⚠️ **Warning**: This deletes unsaved work!

### Pull Latest from GitHub:
```powershell
git pull
```

---

## 🌟 Success Checklist

Before launching changes, verify:

- [ ] Tested locally (http://localhost:8000)
- [ ] All links work
- [ ] Forms submit successfully
- [ ] Donation flow works end-to-end
- [ ] Progress bars show correctly
- [ ] Photos load fast
- [ ] Mobile looks good
- [ ] No console errors (F12)
- [ ] Spelling checked
- [ ] Committed to Git
- [ ] Pushed to GitHub
- [ ] Checked live site
- [ ] Told team about update

---

## 📚 Additional Documentation

For more detailed information:

1. **Event Management**: `docs/HOW_TO_ADD_EVENTS.md`
2. **Progress System**: `docs/LIVE_PROGRESS_SYSTEM.md`
3. **Event Tutorial**: `docs/EVENT_UPDATE_TUTORIAL.md`
4. **Website Review**: `WEBSITE_REVIEW.md`

---

## 🎉 You're Ready!

You now know:
- ✅ What the website does
- ✅ How it works
- ✅ How to update content
- ✅ How to change design
- ✅ How to publish changes
- ✅ How to troubleshoot
- ✅ Where everything is

**Remember**: 
- Start small
- Test often
- Commit frequently
- Ask for help when stuck
- You can always undo mistakes!

---

## 📧 Support

If you need help:
1. Check this guide first
2. Look at specific docs in `docs/` folder
3. Check browser console for errors (F12)
4. Google the error message
5. Check GitHub Issues

---

**Last Updated**: October 12, 2025
**Website**: https://sakabraw-1.github.io/gene_therapy/
**Repository**: https://github.com/sakabraw-1/gene_therapy

**Happy website managing! 🚀**
