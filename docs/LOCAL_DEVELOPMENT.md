# 🛠 Local Development Guide

## 🚀 Running Locally

### **Start Development Server**
```bash
npm run dev
```

**Open:** `http://localhost:3000`

## 🔧 Configuration Fix

The Next.js configuration is now set to:
- **Local Development**: No basePath (works at `localhost:3000`)
- **Production Build**: Adds basePath for GitHub Pages

## 📱 Testing Your Portfolio

### **What You Should See:**
✅ **Hero Section**: Your name with gradient text and beautiful background
✅ **Navigation**: Clean header with theme toggle
✅ **All Sections**: About, Skills, Experience, Projects, Certifications, Contact
✅ **Styling**: Full Tailwind CSS styling with colors and animations
✅ **Responsive**: Works on all screen sizes

### **Test Features:**
1. **Theme Toggle**: Click sun/moon icon in navigation
2. **Navigation**: Click menu items to scroll smoothly
3. **Hover Effects**: Hover over cards and buttons
4. **Resume Download**: Click "Download Resume" button
5. **Contact Links**: Click email and social media icons

### **Mobile Testing:**
- Press `F12` to open developer tools
- Click device icon to simulate mobile/tablet
- Test different screen sizes

## 🐛 Troubleshooting

### **If you still see 404:**
1. **Stop the server**: `Ctrl+C` in terminal
2. **Clear Next.js cache**: `rm -rf .next`
3. **Restart**: `npm run dev`

### **If styling is missing:**
1. Check if Tailwind CSS is loading
2. Verify all components are importing correctly
3. Check browser console for errors

## 🌐 Production vs Development

- **Development** (`npm run dev`): No basePath, works at `localhost:3000`
- **Production** (`npm run build`): Adds basePath for GitHub Pages deployment

This ensures your portfolio works perfectly in both environments!

## 📝 Next Steps

Once local development looks good:
1. Test all features and sections
2. Add your profile photo to `public/profile-photo.jpg`
3. Update contact information if needed
4. Ready for deployment to GitHub Pages!