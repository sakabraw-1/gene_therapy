# CDKL5 Website - Visual System Overview

## 🏗️ Website Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    CDKL5 WEBSITE                        │
│              (GitHub Pages Hosting - FREE)               │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
        ┌───────────────────────────────────────┐
        │         10 HTML PAGES                  │
        ├───────────────────────────────────────┤
        │  1. Home (index.html)                  │
        │  2. About (about.html)                 │
        │  3. Get Involved (get-involved.html)   │
        │  4. Parents & Caregivers               │
        │  5. Contact (contact.html)             │
        │  6. Donate (donate.html) ⭐            │
        │  7. Registry (registry.html)           │
        │  8. Volunteer (volunteer.html)         │
        │  9. Plan Event (plan-event.html)       │
        │ 10. Event Details (event-details.html) │
        │ 11. Admin Panel (admin-update.html) 🔧 │
        └───────────────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
        ▼                   ▼                   ▼
    ┌──────┐          ┌──────┐          ┌──────┐
    │ CSS  │          │  JS  │          │Images│
    │Style │          │Logic │          │Photos│
    └──────┘          └──────┘          └──────┘
```

---

## 💸 Donation Flow Diagram

```
USER JOURNEY:
┌─────────────┐
│   Visitor   │
│  on Website │
└──────┬──────┘
       │
       ▼
┌─────────────────┐
│ Clicks "Donate" │ ← Navigation button
└──────┬──────────┘
       │
       ▼
┌──────────────────┐
│  donate.html     │
│  Opens           │
└──────┬───────────┘
       │
       ▼
┌──────────────────────┐
│ Select Amount:       │
│ ☐ $1,000            │
│ ☐ $2,500            │
│ ☐ $5,000            │ ← User clicks one
│ ☐ $10,000           │
│ ☐ Custom Amount     │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│ Choose Frequency:    │
│ ● One Time          │ ← User chooses
│ ○ Monthly           │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│ Payment Method:      │
│ [Credit Card] $2,500 │ ← Button shows amount!
│ [PayPal]            │
│ [Venmo]             │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│ System Stores:       │
│ • Amount: $2,500    │
│ • Type: One-time    │
│ • Timestamp         │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│ Opens Payment        │
│ Gateway:             │
│ • Square Checkout   │
│ • PayPal Page       │ ← External site
│ • Venmo App         │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│ User Completes       │
│ Payment              │ ← Money sent
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│ Returns to Website   │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│ System Detects:      │
│ "Pending donation    │
│  within 10 min"      │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│ AUTOMATIC UPDATES:   │
│ ✓ Add $2,500 to     │
│   total raised       │
│ ✓ Update all        │
│   progress bars      │
│ ✓ Save new total    │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│ Show "Thank You"     │
│ Modal with Hearts ❤️ │
│ and Celebration      │
└──────────────────────┘
       │
       ▼
┌──────────────────────┐
│ Progress now shows:  │
│ $202,500 / $3.5M    │ ← Updated everywhere!
│ [████████░░░░] 5.8% │
└──────────────────────┘
```

---

## 📊 Progress Bar System

```
HOW PROGRESS UPDATES:

┌─────────────────────────────────────┐
│      STARTING STATE                  │
│  Raised: $200,000                   │
│  Stored in: localStorage            │
└─────────────────────────────────────┘
              │
              ▼
    ┌─────────────────────┐
    │  Donation Happens    │
    │  Amount: $5,000     │
    └─────────────────────┘
              │
              ▼
┌─────────────────────────────────────┐
│  System Calculates:                  │
│  $200,000 + $5,000 = $205,000       │
└─────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────┐
│  Updates localStorage:               │
│  cdkl5_raised_amount = 205000       │
│  cdkl5_last_update = timestamp      │
└─────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────┐
│  All Pages Read New Value:           │
│                                      │
│  index.html    → $205,000           │
│  about.html    → $205,000           │
│  donate.html   → $205,000           │
│  (every page)  → $205,000           │
└─────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────┐
│  Progress Bars Animate:              │
│                                      │
│  BEFORE: [████░░░░░░░] 5.7%        │
│  AFTER:  [████░░░░░░░] 5.9%        │
└─────────────────────────────────────┘
```

---

## 📝 Form Submission Flow

```
USER FILLS FORM (Contact/Registry/Volunteer):

┌─────────────┐
│ User types  │
│ in form     │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Clicks      │
│ Submit      │
└──────┬──────┘
       │
       ▼
┌──────────────────┐
│ Netlify Forms    │ ← Service catches it
│ Receives Data    │
└──────┬───────────┘
       │
       ├─────────────────┬─────────────────┐
       ▼                 ▼                 ▼
┌─────────────┐  ┌──────────────┐  ┌──────────────┐
│Stores in    │  │Sends Email   │  │Shows "Thank  │
│Netlify      │  │Notification  │  │You" Page     │
│Dashboard    │  │to Admin      │  │to User       │
└─────────────┘  └──────────────┘  └──────────────┘
```

---

## 🎪 Event System

```
CURRENT EVENT (October 26, 2025):

┌──────────────────────────────────────┐
│         HOME PAGE                     │
│  ┌──────────────────────────────┐   │
│  │    PURPLE EVENT PANEL         │   │
│  │  "UPCOMING WEBINAR"           │   │
│  │  Title: Gene Therapy for...   │   │
│  │  Date: Oct 26, 2025           │   │
│  │  Time: 9-10 AM CDT           │   │
│  │  [Register Now →]             │   │
│  └──────────────────────────────┘   │
└──────────────────────────────────────┘
              │ Click "Learn More"
              ▼
┌──────────────────────────────────────┐
│      EVENT-DETAILS.HTML              │
│  • Full description                  │
│  • Speaker info                      │
│  • Registration form                 │
│  • Contact info                      │
└──────────────────────────────────────┘
```

**To Update Event:**
1. Change text in `index.html` panel
2. Update `event-details.html` page
3. Change date/time/description

**Documentation**: `docs/HOW_TO_ADD_EVENTS.md`

---

## 🎨 Design System

```
COLOR PALETTE:

┌──────────────┐
│   #303F9F    │ ← Navy (Primary)
│   ██████     │   Headers, Buttons, Footer
└──────────────┘

┌──────────────┐
│   #ff6600    │ ← Orange (Donate)
│   ██████     │   Donate Buttons
└──────────────┘

┌──────────────┐
│   #E57373    │ ← Red (Accent)
│   ██████     │   Important Info
└──────────────┘

┌──────────────┐
│   #5e35b1    │ ← Purple (Events)
│   ██████     │   Event Panels, Gradients
└──────────────┘

┌──────────────┐
│   #fce4ec    │ ← Pink (Forms)
│   ██████     │   Form Backgrounds
└──────────────┘
```

---

## 📱 Responsive Design

```
DESKTOP (1200px+):
┌────────────────────────────────────┐
│  Header   [Nav Menu]      [Donate] │
│                                    │
│  [Hero Image]    [Content]         │
│                                    │
│  [3 Columns]  [3 Columns]          │
└────────────────────────────────────┘

TABLET (768px - 1199px):
┌────────────────────────┐
│  Header      [≡ Menu]  │
│                        │
│  [Hero Image]          │
│  [Content]             │
│                        │
│  [2 Columns]           │
└────────────────────────┘

MOBILE (< 768px):
┌──────────────┐
│ Header [≡]   │
│              │
│ [Hero]       │
│ [Content]    │
│              │
│ [1 Column]   │
│ [Stack]      │
└──────────────┘
```

---

## 🔄 Git Workflow

```
YOUR COMPUTER                    GITHUB

┌──────────────┐               ┌──────────────┐
│  Edit Files  │               │   master     │
│  in VS Code  │               │   branch     │
└──────┬───────┘               └──────────────┘
       │                              ▲
       │ git add .                    │
       │ git commit                   │
       ▼                              │
┌──────────────┐                     │
│ Local Repo   │    git push         │
│ (on PC)      │─────────────────────┘
└──────────────┘
                                      │
                                      │ GitHub Pages
                                      │ builds site
                                      ▼
                               ┌──────────────┐
                               │  gh-pages    │
                               │  branch      │
                               └──────┬───────┘
                                      │
                                      │ Publishes
                                      ▼
                               ┌──────────────┐
                               │ LIVE WEBSITE │
                               │ on Internet  │
                               └──────────────┘
```

---

## 🗂️ File Structure Tree

```
GENE_THERAPY/
│
├── 📄 HTML FILES (Pages)
│   ├── index.html              ← Home
│   ├── about.html              ← About
│   ├── donate.html             ← Donation ⭐
│   ├── contact.html            ← Contact
│   ├── get-involved.html       ← Get Involved
│   ├── parents-caregivers.html ← Resources
│   ├── registry.html           ← Registry
│   ├── volunteer.html          ← Volunteer
│   ├── plan-event.html         ← Plan Event
│   ├── event-details.html      ← Event Info
│   └── admin-update.html       ← Admin 🔧
│
├── 📁 css/
│   └── style.css               ← All styling
│
├── 📁 js/
│   └── script.js               ← All functionality
│
├── 📁 images/
│   ├── image 41.jpg            ← Carousel photo 1
│   ├── image 42.jpg            ← Carousel photo 2
│   ├── ...                     ← More photos (47 total)
│   └── team/                   ← Team photos
│       ├── member1.jpg
│       └── member2.jpg
│
├── 📁 docs/
│   ├── WEBSITE_GUIDE.md        ← Full guide
│   ├── QUICK_REFERENCE.md      ← Cheat sheet
│   ├── HOW_TO_ADD_EVENTS.md    ← Event guide
│   ├── EVENT_UPDATE_TUTORIAL.md
│   └── LIVE_PROGRESS_SYSTEM.md
│
└── 📄 README.md                ← Project info
```

---

## ⚙️ How Components Connect

```
┌─────────────────────────────────────────────┐
│              USER'S BROWSER                  │
├─────────────────────────────────────────────┤
│                                              │
│  HTML                CSS               JS    │
│  (Structure)         (Design)         (Logic)│
│      │                  │                │   │
│      │                  │                │   │
│      └──────────┬───────┴────────────────┘   │
│                 │                             │
│                 ▼                             │
│      ┌─────────────────────┐                 │
│      │  Rendered Website    │                 │
│      │  • Text & Images     │                 │
│      │  • Colors & Layout   │                 │
│      │  • Interactive Parts │                 │
│      └─────────────────────┘                 │
│                 │                             │
└─────────────────┼─────────────────────────────┘
                  │
                  ├──────────┬──────────┐
                  │          │          │
                  ▼          ▼          ▼
          ┌──────────┐ ┌─────────┐ ┌──────────┐
          │localStorage│ │ Netlify │ │ Payment  │
          │  (Data)    │ │ (Forms) │ │ Gateways │
          └──────────┘ └─────────┘ └──────────┘
```

---

## 🎯 Data Flow

```
DONATION DATA FLOW:

User Action → JavaScript → localStorage → All Pages

Example:
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│ Click    │ → │ JS adds  │ → │ Saves to │ → │ Updates  │
│ $2,500   │    │ $2,500   │    │ storage  │    │ all bars │
└──────────┘    └──────────┘    └──────────┘    └──────────┘
```

---

## 🔒 Security & Privacy

```
✅ SAFE:
• No passwords stored
• No credit cards on site
• Payment via trusted gateways
• Forms encrypted (HTTPS)
• No sensitive data in code

⚠️ NOTE:
• Admin panel has no password
• Anyone can access it
• Consider adding auth for production
```

---

## 📈 Performance

```
LOAD TIMES:
┌─────────────────────────┐
│ HTML Files:    < 50 KB  │ ✅ Fast
│ CSS File:      ~30 KB   │ ✅ Fast
│ JS File:       ~15 KB   │ ✅ Fast
│ Images:        Variable  │ ⚠️ Optimize
└─────────────────────────┘

TIPS:
• Keep photos under 500KB
• Use JPG for photos
• Compress images before upload
• Test on slow connections
```

---

## 🎓 Learning Path

```
IF YOU'RE NEW:

Level 1: Basic Updates
├─ Change text in HTML
├─ Use admin panel
└─ Push to GitHub

Level 2: Design Changes
├─ Modify CSS colors
├─ Adjust spacing
└─ Add new images

Level 3: Content Updates
├─ Add team members
├─ Update events
└─ Change photos

Level 4: Advanced
├─ Modify JavaScript
├─ Add new features
└─ Debug issues
```

---

## 🎨 Brand Guidelines

```
TYPOGRAPHY:
• Font: "Open Sans" (Google Fonts)
• Headings: Bold
• Body: Regular (400)
• Links: Semibold (600)

BUTTON STYLES:
• Primary: Navy background (#303F9F)
• Donate: Orange background (#ff6600)
• Secondary: Transparent with border

SPACING:
• Sections: 60px padding
• Elements: 20px margin
• Mobile: Reduce by 50%
```

---

## 📱 Testing Checklist

```
✅ BEFORE PUBLISHING:

Desktop:
[ ] All pages load
[ ] Links work
[ ] Forms submit
[ ] Donation flow works
[ ] Progress bars show

Mobile:
[ ] Menu opens
[ ] Text readable
[ ] Buttons tap-able
[ ] Images fit screen
[ ] Forms usable

Browsers:
[ ] Chrome ✓
[ ] Safari ✓
[ ] Firefox ✓
[ ] Edge ✓

Final:
[ ] No console errors
[ ] Fast loading
[ ] Looks professional
[ ] Content accurate
```

---

## 🎁 Feature Summary

```
✨ WHAT THIS WEBSITE CAN DO:

Accept Donations:
├─ Multiple payment methods
├─ One-time or monthly
├─ Custom amounts
└─ Thank you popup

Track Progress:
├─ Live updating
├─ All pages synced
├─ Admin panel
└─ Animated bars

Collect Data:
├─ Contact forms
├─ Patient registry
├─ Volunteer signups
└─ Event planning

Promote Events:
├─ Webinar panel
├─ Registration forms
├─ Countdown timer
└─ Detailed info

Engage Visitors:
├─ Photo carousel
├─ Newsletter signup
├─ Social media links
└─ Resource pages
```

---

**This visual guide helps you understand how everything connects!**

**For step-by-step instructions, see: `WEBSITE_GUIDE.md`**
