# 🎨 UNIFIED COLOR SYSTEM - TESTING GUIDE

## ✅ FILES CREATED (Ready for local testing):

### 1. **css/colors.css** (New Global Stylesheet)
- Contains all color variables and reusable styles
- Defines unified color palette:
  - **Orange (#ff6600)**: All donate buttons, CTAs, active states
  - **Blue (#303f9f)**: All page titles, headers, links
  - **Purple (#7c4dff)**: Small accents only
  - **White (#ffffff)**: All content boxes and cards
  - **Light Gray (#fafafa)**: Page backgrounds

### 2. **get-involved_new.html**
- ✅ Removed purple gradient header → White with blue title
- ✅ Changed three pink cards → White cards with shadows
- ✅ All buttons now use orange gradient
- ✅ Consistent with unified palette

### 3. **about_new.html**
- ✅ Changed ALL pink boxes → White boxes with shadows
- ✅ Blue titles throughout
- ✅ "Root-cause therapy" badge: Subtle blue (not flashy)
- ✅ Mission statement: Warm background with orange border
- ✅ Consistent with unified palette

### 4. **faq_new.html** (Updated)
- ✅ Added colors.css link
- ✅ Already using orange "All" button
- ✅ Category pills: Gray outline, orange when active
- ✅ Blue titles, white background

### 5. **contact_new.html** (Updated)
- ✅ Added colors.css link
- ✅ Already using unified colors perfectly
- ✅ Orange submit button, white form box, blue titles

---

## 🧪 TESTING CHECKLIST:

### **Open each page and verify:**

#### **1. Get Involved Page** (`localhost:8000/get-involved_new.html`)
- [ ] Header is WHITE (not purple gradient)
- [ ] Page title is BLUE (#303f9f)
- [ ] Three cards are WHITE with shadows (not pink)
- [ ] All buttons are ORANGE gradient
- [ ] Hover effects work smoothly

#### **2. About Page** (`localhost:8000/about_new.html`)
- [ ] All team cards are WHITE (not pink)
- [ ] All titles are BLUE
- [ ] "How the therapy works" cards are WHITE
- [ ] Mission statement has warm background + orange left border
- [ ] Badge is subtle blue (not prominent)

#### **3. FAQ Page** (`localhost:8000/faq_new.html`)
- [ ] "All" button is ORANGE
- [ ] Other category pills are GRAY outline
- [ ] Category pills turn ORANGE when clicked
- [ ] Questions are BLUE when collapsed
- [ ] White background throughout

#### **4. Contact Page** (`localhost:8000/contact_new.html`)
- [ ] Form is centered with WHITE background
- [ ] Submit button is ORANGE gradient
- [ ] Three cards below have blue titles
- [ ] Email/FAQ/Donate cards work on click

#### **5. Homepage** (`localhost:8000/index.html`)
- [ ] "Donate Now" button is ORANGE
- [ ] Hero section looks good
- [ ] Purple "Latest Win" box (this is intentional for emphasis)
- [ ] All other buttons are ORANGE

---

## 🎯 COLOR CONSISTENCY CHECK:

### **All Pages Should Have:**
✅ **Orange buttons** for all CTAs (Donate, Submit, Sign Up, etc.)  
✅ **Blue titles** (#303f9f) for h1, h2, h3  
✅ **White cards** with subtle shadows (not pink)  
✅ **Light gray background** (#fafafa) for pages  
✅ **No purple gradients** (except homepage Latest Win box)

### **What Changed:**
❌ ~~Purple gradient header~~ → ✅ White header with blue title  
❌ ~~Pink boxes~~ → ✅ White boxes with shadows  
❌ ~~Blue outline category pills~~ → ✅ Gray outline (orange when active)  
❌ ~~Inconsistent button colors~~ → ✅ All orange gradient  

---

## 🚀 NEXT STEPS:

1. **Test locally**: Open each _new.html file in browser
2. **Verify consistency**: All pages should look cohesive
3. **Check mobile**: Test responsive design on small screens
4. **Compare side-by-side**: Open old vs new versions
5. **Report issues**: Let me know what needs adjustment

---

## 📝 TO GO LIVE (After approval):

```bash
# Replace old files with new versions
mv get-involved_new.html get-involved.html
mv about_new.html about.html
mv faq_new.html faq.html
mv contact_new.html contact.html

# Commit changes
git add css/colors.css get-involved.html about.html faq.html contact.html
git commit -m "Implement unified color system across all pages

- Created css/colors.css with global color variables
- Updated Get Involved: white header, white cards, orange buttons
- Updated About: white cards instead of pink, blue titles
- Updated FAQ: added colors.css link
- Updated Contact: added colors.css link
- Consistent orange CTAs, blue titles, white cards throughout"

git push origin master
```

---

## 🎨 COLOR REFERENCE:

| Color | Hex | Usage |
|-------|-----|-------|
| **Primary Orange** | `#ff6600` | Donate, Submit, all CTAs |
| **Primary Blue** | `#303f9f` | Titles, headers, trust |
| **Accent Purple** | `#7c4dff` | Small accents only |
| **White** | `#ffffff` | Cards, content boxes |
| **Light Gray** | `#fafafa` | Page backgrounds |
| **Text Gray** | `#666666` | Body text |
| **Border Gray** | `#e0e0e0` | Input borders, dividers |

---

## ✨ Benefits of Unified System:

1. **Professional**: Consistent branding across all pages
2. **Trust**: Medical blue for credibility
3. **Action**: Orange stands out for donations
4. **Clean**: White cards, no visual clutter
5. **Maintainable**: Single colors.css file to update

Test everything and let me know what you think! 🚀
