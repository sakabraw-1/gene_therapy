# How to Manage Family Photos (For Non-Technical Users)

## 📸 Adding New Photos

### Method 1: Using GitHub Website (Easiest - No Coding Required)

1. **Go to GitHub**
   - Visit: https://github.com/sakabraw-1/gene_therapy
   - Click "Sign in" (use your credentials)

2. **Navigate to Images Folder**
   - Click on the `images` folder
   - Click "Add file" → "Upload files"

3. **Upload New Photos**
   - Drag and drop your photos OR click "choose your files"
   - **Important**: Name them as `image 53.jpg`, `image 54.jpg`, etc. (continue the numbering)
   - All lowercase, space between "image" and number
   - Must be `.jpg` format

4. **Commit Changes**
   - Scroll down
   - Type a message like: "Added 2 new family photos"
   - Click "Commit changes"

5. **Update the Code** (Need to do this ONCE per batch of photos)
   - Go to the `js` folder
   - Click on `script.js`
   - Click the pencil icon (Edit this file)
   - Find line 498 that says `const galleryImages = [`
   - Add new entries at the end (before the `];`):
   ```javascript
   { file: 'image 53.jpg', quote: 'Your inspirational quote here' },
   { file: 'image 54.jpg', quote: 'Another inspiring message' }
   ```
   - Find line 131 that says `const imageFiles = [`
   - Add the new image names at the end (before `];`):
   ```javascript
   'image 53.jpg', 'image 54.jpg'
   ```
   - Find line 138 in `index.html` and update the number (e.g., "View All 51 Families")
   - Click "Commit changes"

6. **Deploy to Live Site**
   - Go to repository main page
   - Click "Actions" tab
   - Wait for the green checkmark
   - Your site updates in 2-3 minutes!

### Method 2: Using GitHub Desktop (Slightly More Control)

1. **Install GitHub Desktop** (one-time setup)
   - Download from: https://desktop.github.com/
   - Sign in with your GitHub account
   - Clone the repository

2. **Add Photos**
   - Open the `C:\GENE_THERAPY\images` folder on your computer
   - Copy your new photos there
   - Name them: `image 53.jpg`, `image 54.jpg`, etc.

3. **Update the Code**
   - Open `js\script.js` in Notepad
   - Add entries as described above
   - Save the file

4. **Push Changes**
   - Open GitHub Desktop
   - You'll see your changes listed
   - Add a description: "Added 3 new family photos"
   - Click "Commit to master"
   - Click "Push origin"

## 🗑️ Deleting Photos

**Warning**: Only delete if absolutely necessary (privacy concerns, etc.)

1. **Using GitHub Website**
   - Go to the images folder
   - Click on the image file
   - Click the trash can icon
   - Commit the deletion

2. **Remove from Code**
   - Edit `js/script.js`
   - Remove the line with that image from both:
     - `galleryImages` array (line 498+)
     - `imageFiles` array (line 131+)
   - Update the count in `index.html`

## 🔄 Replacing a Photo

1. Delete the old photo (follow steps above)
2. Upload new photo with the **same filename**
3. No code changes needed!
4. Wait for deployment

## 💡 Tips

- **Always use lowercase**: `image 53.jpg` not `IMAGE 53.jpg`
- **Keep numbering sequential**: Makes management easier
- **Inspirational quotes**: Keep them short (5-7 words)
- **Test on the live site**: Wait 2-3 minutes after pushing changes
- **Ask for help**: If stuck, share your screen with someone familiar with the process

## 🚨 Common Mistakes to Avoid

❌ Don't name files: `IMG_1234.jpg` or `photo.jpg`  
✅ Use: `image 53.jpg`

❌ Don't use uppercase: `IMAGE 53.JPG`  
✅ Use lowercase: `image 53.jpg`

❌ Don't skip numbers randomly  
✅ Continue from the last number (currently 52)

## 📞 Need Help?

If you get stuck:
1. Take a screenshot of the error
2. Contact the tech volunteer who set this up
3. Or post in the CDKL5 support community

---

**Last Updated**: October 2025  
**Current Photo Count**: 49 photos (image 1 - image 52, missing 25, 28, 30)  
**Next Photo Number**: image 53.jpg
