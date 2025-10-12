# Live Donation Progress System

## Overview
The CDKL5 Gene Therapy website now features a **live donation progress tracking system** that automatically updates the fundraising progress across all pages when donations are received.

## How It Works

### 1. **Automatic Updates from Donations**
When someone completes a donation through the donate page:
1. User selects an amount (e.g., $2,500)
2. Clicks a payment button (Square/PayPal/Venmo)
3. Completes payment on the payment gateway
4. Returns to the website
5. **The system automatically:**
   - Adds their donation to the total raised
   - Updates all progress bars across all pages
   - Shows a thank you modal
   - Stores the new total in browser storage

### 2. **Data Storage**
The system uses `localStorage` to store:
- **Current raised amount**: `cdkl5_raised_amount`
- **Last update timestamp**: `cdkl5_last_update`
- **Pending donations**: `pendingDonation` (temporary, cleared after processing)

This ensures that the progress persists:
- ✅ Across all pages of the website
- ✅ When users refresh the page
- ✅ In the same browser (per device)

### 3. **Progress Bar Updates**
Every page with a progress panel automatically:
- Reads the current total from localStorage
- Displays the updated amount
- Animates the progress bar to the new percentage
- Shows the goal ($3.5M) and percentage complete

## Admin Panel

### Accessing the Admin Panel
Open: **https://sakabraw-1.github.io/gene_therapy/admin-update.html**

Or locally: **http://localhost:8000/admin-update.html**

### Admin Features

#### 1. Current Statistics Dashboard
View real-time stats:
- **Current Raised**: Total amount collected so far
- **Goal Amount**: $3,500,000 target
- **Percentage**: Progress toward goal
- **Last Updated**: Timestamp of most recent update

#### 2. Add New Donation
Use this when you receive a donation through other channels (checks, wire transfers, etc.):
1. Enter the donation amount
2. Click "Add Donation"
3. The amount is added to the current total
4. All progress bars update instantly

**Example:** If current total is $200,000 and you add $5,000, new total becomes $205,000.

#### 3. Set Total Amount
Use this to set an exact total (useful for syncing with your accounting system):
1. Enter the exact total raised
2. Click "Update Total"
3. This replaces the current amount with your exact number

**Example:** Set to $250,000 to match your accounting records.

#### 4. Reset to Default
Resets the total back to $200,000 (the initial amount).

## Manual Updates via Browser Console

For developers or advanced users, you can also update the progress programmatically:

### Add a donation:
```javascript
CDKL5.addDonation(5000); // Adds $5,000 to current total
```

### Set exact total:
```javascript
CDKL5.updateRaisedAmount(250000); // Sets total to $250,000
```

### Get current total:
```javascript
CDKL5.getCurrentRaisedAmount(); // Returns current amount
```

### Refresh all progress bars:
```javascript
CDKL5.refreshProgress(); // Updates all progress bars on the page
```

## Pages with Progress Panels

The following pages display the live progress bar:
1. **index.html** - Home page (2 panels: hero and bottom)
2. **about.html** - About page
3. **get-involved.html** - Get Involved page
4. **parents-caregivers.html** - Parents & Caregivers page
5. **contact.html** - Contact page
6. **donate.html** - Donation page
7. **volunteer.html** - Volunteer page
8. **plan-event.html** - Plan Event page
9. **event-details.html** - Event Details page
10. **registry.html** - Patient Registry page

All progress bars automatically sync and display the same total.

## Testing the System

### Test Automatic Donation Flow:
1. Go to the donate page: **donate.html**
2. Select an amount (e.g., $1,000)
3. Click a payment button
4. Note: For testing, you can close the payment window and return immediately
5. The system detects the "pending donation" (within 10 minutes)
6. Adds the amount to the total
7. Shows the thank you modal
8. Updates all progress bars

### Test Manual Update:
1. Note the current total on any page
2. Open **admin-update.html**
3. Add a test donation (e.g., $100)
4. Return to any page with a progress panel
5. The progress bar should show the updated amount

## Important Notes

### Browser Storage Limitations
- Data is stored **per browser/device** using localStorage
- Different browsers/devices will see different totals unless synced manually
- To maintain consistency across all users, you should:
  - Use the admin panel to manually sync with your actual fundraising total
  - Update regularly (daily or weekly)

### Production Recommendation
For a production environment with thousands of users, consider:
1. **Backend Database**: Store the total on a server
2. **API Integration**: Fetch the current total via API
3. **Payment Gateway Webhooks**: Automatically update when payments complete
4. **Real-time Updates**: Use WebSockets or polling to sync across all users

### Current Setup (Client-side Only)
The current implementation is **client-side only** which means:
- ✅ **Pros**: Simple, no server needed, works on GitHub Pages
- ⚠️ **Limitation**: Each user sees their own version unless manually synced
- 💡 **Solution**: Use the admin panel to periodically update the "official" total

## Maintenance

### Regular Updates
1. Check your fundraising platform (Square, PayPal, bank) for total donations
2. Open the admin panel
3. Set the total to match your actual fundraising total
4. This becomes the new baseline for all users

### Monthly Sync Recommended
Update the total at least once per month to keep it accurate.

## Future Enhancements

Consider adding:
- **Backend API**: Connect to a database for global sync
- **Webhook Integration**: Auto-update from Square/PayPal webhooks
- **Admin Authentication**: Password-protect the admin panel
- **Donation History**: Track individual donations
- **Export Reports**: Generate fundraising reports
- **Email Notifications**: Alert admins of new donations

## Support

For questions or issues:
1. Check browser console for error messages (F12)
2. Verify localStorage is enabled in browser settings
3. Clear browser cache if progress bar doesn't update
4. Use the admin panel to manually reset if needed

## Technical Details

### Code Location
- **Main Logic**: `js/script.js` (lines 1-70)
- **Functions**:
  - `getCurrentRaisedAmount()` - Retrieves current total
  - `updateRaisedAmount(amount)` - Sets new total
  - `addDonation(amount)` - Adds to current total
  - `initProgressBars()` - Updates all progress bars
  - `checkForCompletedDonation()` - Processes pending donations

### Data Format
```javascript
localStorage.setItem('cdkl5_raised_amount', '250000');
localStorage.setItem('cdkl5_last_update', '2025-10-12T10:30:00.000Z');
localStorage.setItem('pendingDonation', JSON.stringify({
    amount: 2500,
    isMonthly: false,
    timestamp: 1697107800000
}));
```

---

**Last Updated**: October 12, 2025
**System Version**: 1.0
**Status**: Active and Operational ✅
