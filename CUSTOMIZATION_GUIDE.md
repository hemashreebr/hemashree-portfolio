# Portfolio Customization Guide

## 📝 **How to Edit Your Portfolio Content**

### 🖼️ **1. Adding Your Photo**

**Step 1**: Add your photo to the `public` folder
- Save your professional headshot as `profile-photo.jpg` in the `public/` directory
- Recommended size: 400x400 pixels (square format)
- Supported formats: JPG, PNG, WebP

**Step 2**: The photo is already configured in `components/Hero.tsx`
- It will appear as a circular profile image above your name
- The image is responsive and looks great on all devices

### 📧 **2. Contact Information**

**File to edit**: `components/Contact.tsx`

**Lines 7-28**: Update the `contactInfo` array:

```typescript
const contactInfo = [
  {
    icon: <FiMail className="w-6 h-6" />,
    label: "Email",
    value: "your-email@example.com",        // 👈 CHANGE THIS
    href: "mailto:your-email@example.com"   // 👈 CHANGE THIS
  },
  {
    icon: <FiLinkedin className="w-6 h-6" />,
    label: "LinkedIn",
    value: "linkedin.com/in/your-profile",  // 👈 CHANGE THIS
    href: "https://linkedin.com/in/your-profile" // 👈 CHANGE THIS
  },
  {
    icon: <FiGithub className="w-6 h-6" />,
    label: "GitHub",
    value: "github.com/your-username",      // 👈 CHANGE THIS
    href: "https://github.com/your-username" // 👈 CHANGE THIS
  },
  {
    icon: <FiMapPin className="w-6 h-6" />,
    label: "Location",
    value: "Your City, State/Country",      // 👈 CHANGE THIS
    href: null
  }
]
```

**Also update**: `components/Hero.tsx` (lines 47-65) for the social media icons in the hero section.

### 🏠 **3. Location & Personal Details**

**Files to update**:

1. **Contact Section**: `components/Contact.tsx` (line 25)
2. **Experience Section**: `components/Experience.tsx` (lines 25, 52) - Update work locations
3. **About Section**: `components/About.tsx` - Update bio and achievements

### 📄 **4. Professional Summary**

**File**: `components/Hero.tsx` (lines 21-25)
**File**: `components/About.tsx` (lines 35-40)

Update your professional summary and bio to reflect your experience.

### 💼 **5. Work Experience**

**File**: `components/Experience.tsx`

Update the `experiences` array (lines 7-60) with your actual work history:

```typescript
const experiences = [
  {
    company: "Your Company",
    role: "Your Role",
    period: "Start - End Date",
    location: "City, State",
    description: "Brief description of your role",
    achievements: [
      "Your achievement 1",
      "Your achievement 2",
      // Add more achievements
    ],
    technologies: ["Tech1", "Tech2", "Tech3"]
  }
]
```

### 🚀 **6. Projects**

**File**: `components/Projects.tsx`

Update the `projects` array (lines 7-80) with your actual projects:

```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Project description",
    problem: "What problem it solved",
    architecture: "Technical architecture",
    techStack: ["Tech1", "Tech2"],
    impact: [
      "Impact metric 1",
      "Impact metric 2"
    ],
    github: "https://github.com/your-username/project",
    demo: "https://your-project-demo.com",
    icon: <FiCode className="w-6 h-6" />
  }
]
```

### 🎓 **7. Certifications**

**File**: `components/Certifications.tsx`

Update the `certifications` array (lines 6-25) with your actual certifications.

### 🎨 **8. Colors & Styling**

**File**: `tailwind.config.js`

Change the primary color scheme by updating the `primary` colors (lines 11-19):

```javascript
primary: {
  50: '#your-color-50',
  100: '#your-color-100',
  // ... update all shades
}
```

### 📱 **9. SEO & Metadata**

**File**: `app/layout.tsx`

Update the metadata (lines 8-16):

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Your Title',
  description: 'Your professional description',
  keywords: 'Your, Keywords, Here',
  // ... other metadata
}
```

## 🔄 **After Making Changes**

1. **Save all files**
2. **Restart the development server**:
   ```bash
   npm run dev
   ```
3. **Check your changes** at `http://localhost:3000`
4. **Build for production**:
   ```bash
   npm run build
   ```

## 📁 **Quick Reference - Files to Edit**

| What to Change | File Location |
|----------------|---------------|
| Profile Photo | `public/profile-photo.jpg` |
| Contact Info | `components/Contact.tsx` |
| Social Links | `components/Hero.tsx` |
| Location | `components/Contact.tsx` |
| Bio/Summary | `components/About.tsx` |
| Work Experience | `components/Experience.tsx` |
| Projects | `components/Projects.tsx` |
| Skills | `components/Skills.tsx` |
| Certifications | `components/Certifications.tsx` |
| Colors | `tailwind.config.js` |
| SEO/Title | `app/layout.tsx` |

## 💡 **Tips**

- Always test changes locally before deploying
- Keep backup copies of original files
- Use consistent formatting and professional language
- Optimize images for web (compress before adding)
- Update all instances of contact information consistently

Your portfolio is now ready for customization! 🎉