# Complete Website Management Guide for Non-Technical Parents

## 🎯 You Can Do This! (Really!)

This website was built so that **parents with no coding experience** can manage it. Think of it like using Facebook or Instagram - you just need to know which buttons to click.

## 📚 Table of Contents

1. [Getting Started](#getting-started)
2. [Daily Tasks](#daily-tasks)
3. [Weekly Tasks](#weekly-tasks)
4. [Monthly Tasks](#monthly-tasks)
5. [Emergency Contacts](#emergency-contacts)
6. [Detailed Guides](#detailed-guides)

---

## 🚀 Getting Started

### Step 1: Create Your Accounts (One-Time Setup)

You need 2 accounts to manage everything:

#### A) GitHub Account (For Website Files)
1. Go to: https://github.com/
2. Click "Sign up"
3. Choose username, email, password
4. Verify your email
5. **Write down** your username and password!

**What is GitHub?**
Think of it as Google Drive for website files. Your website lives here.

#### B) Netlify Account (For Forms & Hosting)
1. Go to: https://www.netlify.com/
2. Click "Sign up"
3. **Sign up with your GitHub account** (easiest option)
4. This automatically connects everything!

**What is Netlify?**
Think of it as the "on/off switch" for your website. It takes your GitHub files and makes them live on the internet.

### Step 2: Bookmark These Pages

Save these links in your browser:

📌 **Website Homepage**: https://sakabraw-1.github.io/gene_therapy/  
📌 **GitHub Repository**: https://github.com/sakabraw-1/gene_therapy  
📌 **Netlify Dashboard**: https://app.netlify.com/sites/YOUR-SITE-NAME  
📌 **This Documentation**: (save the link to this file)

### Step 3: Take a Quick Tour (10 Minutes)

**Watch what happens when you make a change:**

1. Go to GitHub repository
2. Click on `index.html`
3. Click the pencil icon (edit)
4. Find line 51 (the heading "Our Mission")
5. Change one word (like "Mission" to "Goal")
6. Scroll down, click "Commit changes"
7. Wait 2 minutes
8. Refresh your live website
9. **See your change appear!**
10. Change it back if you want

**Congratulations!** You just edited your website! Everything else is the same process.

---

## 📋 Daily Tasks (5 Minutes)

### Monday-Friday Checklist

#### Morning Routine (2 minutes)
- [ ] Check email for form submissions
- [ ] Check Netlify dashboard for issues
- [ ] Quick glance at website (make sure it's loading)

#### As Needed
- [ ] Respond to contact form messages (Netlify → Forms)
- [ ] Check event registrations (Netlify → Forms → Event Registration)

**That's it for daily! Nothing else required.**

---

## 📅 Weekly Tasks (30 Minutes)

### Every Sunday or Monday

#### 1. Update Fundraising Total (10 minutes)

**Gather donation totals from:**
- Square dashboard
- PayPal dashboard
- Any checks received
- Wire transfers

**Update website:**
1. Go to GitHub → `js` folder → `script.js`
2. Click pencil icon
3. Find line 4: `const INITIAL_RAISED_AMOUNT = 200000;`
4. Change to new total (e.g., `245000` for $245K)
5. Commit changes
6. Done!

**See detailed guide**: `FUNDRAISING_MANAGEMENT.md`

#### 2. Check Event Registrations (5 minutes)

1. Go to Netlify dashboard
2. Click "Forms"
3. Click "Event Registration"
4. Export list if needed
5. Send any follow-up emails

**See detailed guide**: `EVENT_MANAGEMENT_FOR_PARENTS.md`

#### 3. Review Messages (10 minutes)

Check all form submissions:
- Contact form
- Newsletter signups
- Event registrations
- Plan-an-event requests

Respond to any urgent ones.

#### 4. Quick Quality Check (5 minutes)

Visit your website and click around:
- [ ] Homepage loads
- [ ] Donate buttons work
- [ ] Event registration works
- [ ] Photos display correctly
- [ ] Contact form submits

---

## 🗓️ Monthly Tasks (2 Hours)

### First Weekend of Each Month

#### 1. Add New Photos (30 minutes)

**If families send you photos:**

1. Save photos to your computer
2. Rename them: `image 53.jpg`, `image 54.jpg`, etc.
3. Go to GitHub → `images` folder
4. Click "Upload files"
5. Drag photos in
6. Commit changes
7. Update the code (see `HOW_TO_MANAGE_PHOTOS.md`)

**See detailed guide**: `HOW_TO_MANAGE_PHOTOS.md`

#### 2. Update Events (30 minutes)

**If current event passed:**
1. Edit `index.html`
2. Update event information
3. Update `event-details.html`
4. Commit changes

**If no new event:**
1. Consider removing event panel temporarily
2. Or keep with "Coming Soon" message

**See detailed guide**: `EVENT_MANAGEMENT_FOR_PARENTS.md`

#### 3. Write Monthly Update (45 minutes)

**Create content for:**
- Newsletter (via Mailchimp/email service)
- Social media posts (Facebook/Instagram)
- Website blog/updates section (if you add one)

**Topics to cover:**
- Fundraising progress
- Recent events/webinars
- Family stories
- Research updates
- Thank you to donors

#### 4. Review Analytics (15 minutes)

**Optional but recommended:**

1. Check Netlify Analytics (if enabled)
2. See how many visitors
3. Most popular pages
4. Where visitors come from

**Use insights to:**
- Know what content resonates
- Improve popular pages
- Share data with community

---

## 🆘 Emergency Contacts

### When Something Goes Wrong

#### Website is Down
1. Check https://www.githubstatus.com/
2. Check Netlify status
3. Check your email for error notifications
4. Contact: [Tech volunteer contact]

#### Can't Log In
- GitHub: https://github.com/password_reset
- Netlify: https://app.netlify.com/password-reset

#### Made a Mistake in Edit
1. Don't panic!
2. Go to GitHub → Your repository
3. Click "Commits" (near the top)
4. Find the last good version
5. Click "..." → "Revert commit"
6. Or contact tech volunteer for help

#### Form Not Working
1. Check Netlify Forms dashboard
2. Verify form quota not exceeded
3. Check spam folder for notifications
4. Test with different email
5. Contact Netlify support (they're very helpful!)

---

## 📖 Detailed Guides (Reference When Needed)

### In the `docs` Folder

You have these detailed guides:

1. **HOW_TO_MANAGE_PHOTOS.md**
   - Adding family photos
   - Updating images
   - Deleting photos
   - Writing inspirational quotes

2. **EVENT_MANAGEMENT_FOR_PARENTS.md**
   - Creating new events
   - Viewing registrations
   - Managing past events
   - Event templates

3. **FUNDRAISING_MANAGEMENT.md**
   - Updating goals
   - Changing deadlines
   - New campaigns
   - Donation tracking

4. **HOW_TO_ADD_EVENTS.md** (Technical)
   - Detailed event system
   - For reference if needed

5. **WEBSITE_GUIDE.md** (Technical)
   - Complete website structure
   - File organization
   - For reference if needed

---

## 🎓 Learning Resources

### Free Courses (Optional)

If you want to learn more:

**GitHub Basics (1 hour)**:
- https://lab.github.com/githubtraining/introduction-to-github

**HTML Basics (2 hours)**:
- https://www.freecodecamp.org/learn (HTML section)

**Markdown (30 minutes)**:
- https://www.markdownguide.org/getting-started/

### YouTube Tutorials

Search for:
- "GitHub for beginners"
- "How to edit website on GitHub"
- "Netlify forms tutorial"

---

## 💡 Pro Tips for Parents

### 1. Create a Cheat Sheet

On paper or in a document, write:
- Your login credentials (keep secure!)
- Steps for common tasks
- Contact info for tech help
- Important file locations

### 2. Take Screenshots

When you learn a new task:
- Take screenshots of each step
- Save in a folder
- Share with other parents
- Creates your own visual guide

### 3. Practice in a Safe Space

**Make a test repository:**
1. In GitHub, click "New repository"
2. Name it "website-practice"
3. Practice editing there
4. No risk of breaking live site!

### 4. Team Up With Another Parent

**Buddy system:**
- Each learn different aspects
- Cover for each other
- Share tips and tricks
- Less pressure on one person

### 5. Set Up Google Calendar Reminders

**Weekly reminder**: "Update fundraising total"  
**Monthly reminder**: "Check website and add photos"  
**Quarterly reminder**: "Plan new event"

### 6. Keep a Log

**Simple text file tracking:**
- Date
- What you updated
- Why
- Any issues encountered

**Helpful for:**
- Remembering what you did
- Training next person
- Troubleshooting problems

---

## 🔐 Security Best Practices

### Protecting Your Accounts

#### Strong Passwords
- Use 12+ characters
- Mix letters, numbers, symbols
- Use a password manager (LastPass, 1Password)
- **Never share passwords publicly**

#### Two-Factor Authentication (2FA)
1. Enable on GitHub (Settings → Security)
2. Enable on Netlify (Settings → Security)
3. Use phone app (Google Authenticator, Authy)
4. **Keeps hackers out even if they get your password**

#### Who Has Access?

**Keep a list of people with admin access:**
- Your name + email
- Tech volunteer name + email
- Backup person name + email

**Review every 6 months** - Remove people who no longer need access.

---

## 🎯 Common Questions

### "What if I break something?"

**You can't really break it!** GitHub saves every version. You can always:
- Revert to a previous version
- Ask tech volunteer to fix it
- Start over if needed

### "How much time will this take?"

**Realistically:**
- Daily: 5 minutes (checking emails)
- Weekly: 30 minutes (updates)
- Monthly: 2 hours (content creation)
- **Total: ~3 hours/month**

### "Do I need to know coding?"

**No!** You're just:
- Typing text (like in Microsoft Word)
- Uploading photos (like on Facebook)
- Clicking buttons (like any website)

The "code" is just text in a file. You're editing the words, not writing new code.

### "What if I don't have time?"

**Solutions:**
1. Share responsibilities with other parents
2. Hire a virtual assistant (even part-time)
3. Recruit tech-savvy volunteers from community
4. Set up monthly "website update parties" with other parents

### "Can I hire someone to do this?"

**Yes!** You can:
- Hire a freelancer on Upwork/Fiverr ($10-30/hour)
- Ask college student to volunteer
- Partner with local coding bootcamp for volunteer help
- Budget $100-300/month for ongoing management

### "What if technology isn't my thing?"

**That's okay!** Consider:
1. **Find a parent who's better with tech** - Many families want to help!
2. **Watch video tutorials** - Easier than reading guides
3. **Start with just one task** - Master one thing at a time
4. **Ask for help** - CDKL5 community is supportive
5. **Use simpler alternatives** - Some platforms are more user-friendly

---

## 📞 Getting Help

### Internal Resources

**First line of support:**
1. Read the relevant guide in `docs` folder
2. Check this troubleshooting section
3. Search GitHub Discussions for similar issues

**Second line:**
1. Email the tech volunteer who built this
2. Post in CDKL5 parent forum/Facebook group
3. Ask another parent who's done it before

### External Resources

**Free help:**
- GitHub Community Forum: https://github.community/
- Netlify Community Forum: https://answers.netlify.com/
- Stack Overflow: https://stackoverflow.com/ (for code questions)

**Paid help** (if budget allows):
- Upwork: https://www.upwork.com/ (hire freelancer)
- Fiverr: https://www.fiverr.com/ (quick tasks)
- CodeMentor: https://www.codementor.io/ (live help)

### Emergency Tech Support

**If website is completely broken:**
1. Email: [tech volunteer email]
2. Phone: [tech volunteer phone]
3. Backup contact: [backup person]

**Include in your message:**
- What you were trying to do
- What happened
- Screenshot of error
- Your contact info

---

## ✅ Success Checklist

After reading this guide, you should be able to:

- [ ] Log into GitHub and Netlify
- [ ] Find and edit a file on GitHub
- [ ] Update the fundraising total
- [ ] Add new photos to the gallery
- [ ] Change event information
- [ ] View form submissions
- [ ] Export registration lists
- [ ] Know where to get help

**Not there yet?** That's okay! Start with one task at a time.

---

## 🎉 You've Got This!

Remember:
- ✅ **You don't need to be technical** - This is designed for parents
- ✅ **You can't break it** - Everything can be undone
- ✅ **Help is available** - Community and tech volunteers
- ✅ **Start small** - Master one task before moving to next
- ✅ **It gets easier** - After a few times, it becomes routine

### Your Next Steps

**Today:**
1. Create GitHub and Netlify accounts (if you haven't)
2. Bookmark the important pages
3. Make one small test edit

**This Week:**
1. Read the photo management guide
2. Read the event management guide
3. Try updating the fundraising total

**This Month:**
1. Complete all weekly tasks yourself
2. Add a new photo to the gallery
3. Check event registrations

**After 3 Months:**
You'll be managing the website confidently! Consider training a backup person.

---

## 📸 Video Tutorials (Recommended)

### Record Your Own!

**As you learn, record:**
1. Screen recording of you doing tasks
2. Voiceover explaining each step
3. Upload to YouTube (unlisted if private)
4. Share with other parents

**Tools:**
- Windows: Built-in Game Bar (Win+G)
- Mac: QuickTime Player
- Free: OBS Studio
- Paid: Camtasia, ScreenFlow

**5 videos to create:**
1. "How to update fundraising total" (5 min)
2. "How to add new photos" (7 min)
3. "How to change event information" (6 min)
4. "How to check registrations" (4 min)
5. "How to fix common mistakes" (8 min)

---

**Created**: October 2025  
**For**: CDKL5 Gene Therapy Website Management  
**Target Audience**: Parents with no coding experience  
**Estimated Learning Time**: 2-3 hours  
**Ongoing Time Commitment**: 3 hours/month

**You're making a difference for CDKL5 families! Thank you for stepping up to manage this important resource.** 💜
