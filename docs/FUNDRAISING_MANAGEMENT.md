# Fundraising Goal Management Guide

## 💰 How the Fundraising System Works

### Current Setup
- **Goal Amount**: $3,500,000
- **Current Raised**: $200,000 (updates automatically)
- **Trial Date**: June 30, 2026
- **Progress Bars**: Appear on every page

### Where Data is Stored
All fundraising data is stored in **browser localStorage** + the JavaScript file:
- File: `js/script.js`
- Lines: 3-6 (configuration)
- Updates persist across sessions

## 🔄 Updating the Fundraising Goal

### Option 1: Change Goal Amount (GitHub Website)

1. **Go to GitHub**
   - Visit: https://github.com/sakabraw-1/gene_therapy
   - Sign in

2. **Edit JavaScript File**
   - Click on `js` folder
   - Click on `script.js`
   - Click pencil icon (Edit)

3. **Find Goal Configuration** (Line 3-6)
   ```javascript
   const GOAL_AMOUNT = 3500000;
   const INITIAL_RAISED_AMOUNT = 200000;
   const TRIAL_DATE = new Date('2026-06-30T23:59:59Z');
   const CAROUSEL_INTERVAL_MS = 5000;
   ```

4. **Update Values**
   
   **Change Goal**:
   ```javascript
   const GOAL_AMOUNT = 5000000;  // New $5M goal
   ```

   **Update Raised Amount**:
   ```javascript
   const INITIAL_RAISED_AMOUNT = 350000;  // Current total
   ```

   **Extend Deadline**:
   ```javascript
   const TRIAL_DATE = new Date('2027-12-31T23:59:59Z');  // New deadline
   ```

5. **Commit Changes**
   - Scroll down
   - Type: "Updated fundraising goal to $5M"
   - Click "Commit changes"

6. **Verify**
   - Wait 2-3 minutes
   - Refresh your website
   - Progress bars update automatically

### Option 2: Use for Different Campaign

**Scenario**: You reached the gene therapy goal and want to fundraise for something else.

1. **Update Goal Name in HTML**
   
   Edit `index.html` (around line 51-66):
   ```html
   <h2>Our Mission</h2>
   <p>Description of NEW fundraising goal here...</p>
   ```

2. **Reset Progress**
   ```javascript
   const GOAL_AMOUNT = 1000000;  // New campaign goal
   const INITIAL_RAISED_AMOUNT = 0;  // Start from zero
   const TRIAL_DATE = new Date('2027-06-30T23:59:59Z');  // New deadline
   ```

3. **Update All Page Text**
   - Edit homepage messaging
   - Update donate page (`donate.html`)
   - Change About page (`about.html`) if needed

4. **Clear Old Data** (Technical)
   
   Add this to `script.js` temporarily to reset everyone's browser:
   ```javascript
   // Add at line 12, after getCurrentRaisedAmount function
   function resetCampaign() {
       localStorage.removeItem('cdkl5_raised_amount');
       localStorage.removeItem('cdkl5_last_update');
   }
   // Call once on page load
   resetCampaign();
   ```

   After 1 week, remove this code (everyone's cache will be cleared).

## ⏰ What If You Don't Reach Goal on Time?

### Strategy 1: Extend the Deadline

**Simple Update**:
```javascript
const TRIAL_DATE = new Date('2027-06-30T23:59:59Z');  // Extended 1 year
```

**Update Countdown Text** in `index.html`:
```html
<p>We've extended our campaign to reach our crucial $3.5M goal...</p>
```

**Communication Plan**:
1. Homepage banner: "Campaign Extended - Help Us Reach Our Goal"
2. Email to supporters explaining why
3. Social media posts with updated timeline
4. Thank donors for support so far

### Strategy 2: Adjust Goal Amount

**If close to goal, round down**:
```javascript
const GOAL_AMOUNT = 3000000;  // Adjusted from 3.5M
```

**Be transparent**:
```html
<p>We've adjusted our initial goal based on updated manufacturing costs. Every dollar still makes a difference!</p>
```

### Strategy 3: Multi-Phase Campaign

**Keep original goal visible**:
```html
<div class="campaign-phases">
    <h3>Campaign Progress</h3>
    <div class="phase">
        <strong>Phase 1 (Complete):</strong> Safety Studies - $500K
    </div>
    <div class="phase active">
        <strong>Phase 2 (Current):</strong> Manufacturing - $2M
    </div>
    <div class="phase">
        <strong>Phase 3:</strong> Clinical Trials - $1M
    </div>
</div>
```

**Update goal for current phase only**:
```javascript
const GOAL_AMOUNT = 2000000;  // Phase 2 goal only
const INITIAL_RAISED_AMOUNT = 500000;  // Phase 1 complete
```

### Strategy 4: Create New Campaign Page

**Archive current campaign**:
1. Rename `index.html` to `index-2025-campaign.html`
2. Create new `index.html` with new campaign
3. Add link: "View 2025 Campaign Results"

**Show both campaigns**:
```html
<div class="past-campaigns">
    <h3>Our Campaigns</h3>
    <a href="index-2025-campaign.html">2025 Gene Therapy Campaign - $2.8M Raised</a>
    <a href="index.html" class="active">2026 Clinical Trial Campaign - Active</a>
</div>
```

## 📊 Tracking Manual Donations

### When Donations Come From Outside Website

**Square/PayPal donations, checks, wire transfers, etc.**

1. **Keep a Spreadsheet**
   - Date
   - Amount
   - Source (Square/PayPal/Check)
   - Donor Name (if permitted)

2. **Weekly Update Total**
   - Add up all donations
   - Edit `script.js`:
   ```javascript
   const INITIAL_RAISED_AMOUNT = 285000;  // Updated weekly
   ```

3. **Or Create Admin Panel** (Advanced)
   
   I can create a simple password-protected page where you can:
   - Enter donation amounts
   - Auto-updates the total
   - Shows donation history

   Let me know if you want this feature!

## 🔐 Admin Features You Might Want

### Password-Protected Admin Dashboard

**Features to add**:
- ✅ Update raised amount without coding
- ✅ View all donations in one place
- ✅ Export donation reports
- ✅ Manage events from browser
- ✅ Upload photos with drag-and-drop

**Implementation**: 
This would require adding a backend service (like Netlify Functions or Firebase). 
Cost: Free tier available
Time: 2-3 hours to set up

Would you like me to create this?

## 📈 Reporting & Transparency

### Monthly Update Template

Create a "Updates" page showing:

```html
<div class="fundraising-update">
    <h3>October 2025 Update</h3>
    <p><strong>Total Raised This Month:</strong> $45,000</p>
    <p><strong>Campaign Total:</strong> $245,000 / $3,500,000</p>
    <p><strong>Progress:</strong> 7% Complete</p>
    
    <h4>Where Your Money Goes:</h4>
    <ul>
        <li>Manufacturing setup: $150,000</li>
        <li>Safety testing: $75,000</li>
        <li>Administrative costs: $20,000</li>
    </ul>
    
    <h4>Next Steps:</h4>
    <p>With your support, we're preparing for Phase 2 trials...</p>
</div>
```

### Annual Report

Create `annual-report.html` with:
- Total raised
- How funds were used
- Success stories
- Future plans
- Donor thank-you section

## 🎯 Best Practices

### Keep Supporters Engaged

**If Not Meeting Goal**:
1. ✅ **Be honest**: Share challenges transparently
2. ✅ **Show impact**: Even partial funding helps
3. ✅ **Celebrate milestones**: Every $100K is progress
4. ✅ **Share stories**: Family testimonials
5. ✅ **Offer alternatives**: Volunteering, awareness campaigns

**Communication Frequency**:
- Monthly newsletter with progress
- Quarterly detailed reports
- Major milestone announcements
- Year-end thank-you message

### Alternative Fundraising Ideas

**If online donations slow down**:
- Host fundraising events (gala, 5K run)
- Partner with local businesses
- Grant applications
- Matching gift campaigns
- Legacy/planned giving program
- Corporate sponsorships

**Update website with these initiatives**!

## 🔧 Technical Maintenance

### Automatic Features Already Built-In

Your website automatically:
- ✅ Saves donation progress in browser
- ✅ Updates progress bars across all pages
- ✅ Counts down to trial date
- ✅ Formats currency properly ($2.5M not $2500000)
- ✅ Handles partial progress (shows correct percentage)

### Manual Maintenance Needed

**Weekly** (5 minutes):
- [ ] Update raised amount from Square/PayPal reports
- [ ] Check event registrations
- [ ] Respond to contact form submissions

**Monthly** (30 minutes):
- [ ] Post new photos to gallery
- [ ] Update progress in `script.js`
- [ ] Write newsletter update
- [ ] Review/respond to GitHub issues

**Quarterly** (2 hours):
- [ ] Major content updates
- [ ] New event setup
- [ ] Review analytics
- [ ] Plan next campaign phase

## 📞 Need Help?

### Scenarios Where You Need Technical Support

1. **Backend admin panel** - Requires developer
2. **Payment gateway integration** - Requires developer
3. **Custom reporting** - Requires developer
4. **Database for tracking** - Requires developer

### Scenarios You Can Handle Yourself

1. ✅ Updating goal amount - Edit script.js
2. ✅ Changing deadline - Edit script.js
3. ✅ Updating raised total - Edit script.js
4. ✅ Adding progress updates - Edit HTML pages
5. ✅ Creating new campaign - Follow this guide

## 💡 Recommended: Future Enhancements

### Priority 1: Admin Dashboard
- Update donations without coding
- Estimated cost: $0 (using free Netlify Functions)
- Estimated time: 3-4 hours development

### Priority 2: Automatic Payment Integration
- Connect Square/PayPal directly
- Auto-update progress bar
- Estimated cost: $0-29/month
- Estimated time: 5-6 hours development

### Priority 3: Donor Management System
- Track individual donors
- Send automated thank-you emails
- Export tax receipts
- Estimated cost: $0-19/month
- Estimated time: 8-10 hours development

**Want any of these?** Let me know and I can build them!

---

**Last Updated**: October 2025  
**Current Goal**: $3,500,000  
**Current Raised**: $200,000  
**Deadline**: June 30, 2026  
**Progress**: 5.7%
