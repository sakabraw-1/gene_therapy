# Quick Reference - CDKL5 Website Cheat Sheet

## 🚀 Most Common Tasks

### 1️⃣ Update Donation Progress
```
1. Go to: admin-update.html
2. Enter amount
3. Click "Add Donation"
Done! ✅
```

### 2️⃣ Publish Changes to Website
```powershell
git add .
git commit -m "what you changed"
git push
```
Wait 2 minutes → Live! ✅

### 3️⃣ Test Locally First
```powershell
python -m http.server 8000
```
Then open: http://localhost:8000

---

## 📄 Page Files

| File | What It Does |
|------|--------------|
| `index.html` | Home page with hero & carousel |
| `donate.html` | Donation page ⭐ |
| `about.html` | Team & info |
| `contact.html` | Contact form |
| `admin-update.html` | Update progress 🔧 |

---

## 🎨 Where to Change Things

### Change Text/Content
→ Edit the `.html` file

### Change Colors/Design  
→ Edit `css/style.css`

### Change Functionality
→ Edit `js/script.js`

### Change Photos
→ Add to `images/` folder

---

## 💰 Payment Links

**File**: `donate.html` (line ~135)

```html
Square: checkout.square.site/...
PayPal: paypal.com/...
Venmo: venmo.com/...
```

---

## 🎯 Important Colors

```css
Navy:   #303F9F  ← Main color
Orange: #ff6600  ← Donate button
Red:    #E57373  ← Accents
Purple: #5e35b1  ← Events
Pink:   #fce4ec  ← Forms
```

---

## 📅 Update Event Info

**File**: `index.html` (line ~70)

Change:
- Event title
- Date & time
- Description

**Full guide**: `docs/HOW_TO_ADD_EVENTS.md`

---

## 🆘 Fix Common Problems

**Progress not updating?**
```
Clear cache: Ctrl + Shift + Del
Hard refresh: Ctrl + F5
```

**Changes not live?**
```
Did you: git push?
Wait: 2-3 minutes
Hard refresh: Ctrl + F5
```

**Form not working?**
```
Check Netlify dashboard
Test submission again
```

---

## 🛠️ Admin Panel

**URL**: `admin-update.html`

Use to:
- ✅ Add donations
- ✅ Set exact total  
- ✅ View current progress
- ✅ Reset if needed

---

## 📊 Current Stats

- **Goal**: $3.5M
- **Starting**: $200K
- **Trial Date**: June 30, 2026
- **Event**: Oct 26, 2025

---

## 🔗 Important Links

**Live Site**: https://sakabraw-1.github.io/gene_therapy/

**Admin**: https://sakabraw-1.github.io/gene_therapy/admin-update.html

**GitHub**: https://github.com/sakabraw-1/gene_therapy

---

## 💡 Golden Rules

1. ✅ Test locally first
2. ✅ Commit small changes
3. ✅ Clear commit messages
4. ✅ Check mobile view
5. ✅ Update progress weekly

---

## 🎓 Learn More

**Full Guide**: `WEBSITE_GUIDE.md`
**Events**: `docs/HOW_TO_ADD_EVENTS.md`
**Progress**: `docs/LIVE_PROGRESS_SYSTEM.md`

---

**Need Help?**
1. Check WEBSITE_GUIDE.md
2. Press F12 for errors
3. Google error message
4. Check docs/ folder
