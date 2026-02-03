# Project Structure

## 📁 **Clean Portfolio Structure**

```
hemashree-portfolio/
├── 📁 app/                    # Next.js App Router
│   ├── globals.css           # Global styles & Tailwind
│   ├── layout.tsx            # Root layout & metadata
│   └── page.tsx              # Home page
├── 📁 components/            # React components
│   ├── About.tsx             # About section
│   ├── Certifications.tsx    # Certifications section
│   ├── Contact.tsx           # Contact section
│   ├── Experience.tsx        # Work experience
│   ├── Footer.tsx            # Site footer
│   ├── Hero.tsx              # Landing section
│   ├── Navigation.tsx        # Header navigation
│   ├── Projects.tsx          # Projects showcase
│   ├── Skills.tsx            # Technical skills
│   └── ThemeProvider.tsx     # Dark/light theme
├── 📁 public/                # Static assets
│   ├── .nojekyll             # GitHub Pages config
│   ├── resume.pdf            # Your resume
│   └── profile-photo.jpg     # Your photo (add this)
├── 📁 docs/                  # Documentation
│   ├── CUSTOMIZATION_GUIDE.md
│   ├── DEPLOY_NOW.md
│   ├── DEPLOYMENT.md
│   ├── PROJECT_STRUCTURE.md
│   └── TROUBLESHOOTING.md
├── 📁 .github/workflows/     # GitHub Actions
│   └── deploy.yml            # Deployment workflow
├── 📄 Configuration Files
│   ├── .gitignore            # Git ignore rules
│   ├── next.config.js        # Next.js configuration
│   ├── package.json          # Dependencies
│   ├── tailwind.config.js    # Tailwind CSS config
│   ├── tsconfig.json         # TypeScript config
│   └── postcss.config.js     # PostCSS config
└── 📄 README.md              # Project documentation
```

## 🎯 **Key Directories**

### **`/app`** - Next.js Application
- `layout.tsx` - Root layout with metadata and providers
- `page.tsx` - Main page importing all components
- `globals.css` - Global styles and Tailwind imports

### **`/components`** - React Components
- Each section is a separate component
- Clean, modular structure
- TypeScript with proper typing

### **`/public`** - Static Assets
- Resume PDF
- Profile photo (add yours)
- GitHub Pages configuration

### **`/docs`** - Documentation
- All guides and documentation
- Keeps root directory clean
- Easy reference for customization

## 🚫 **Excluded from Git**

The following are automatically ignored:
- `/node_modules` - Dependencies
- `/.next` - Next.js build cache
- `/out` - Generated static files
- `/scripts` - Automation scripts
- `.DS_Store` - macOS system files
- IDE configuration files

## 🔧 **Configuration Files**

- **`next.config.js`** - GitHub Pages optimization
- **`tailwind.config.js`** - Custom design system
- **`tsconfig.json`** - TypeScript configuration
- **`package.json`** - Project dependencies

## 📝 **Best Practices Applied**

✅ **Clean Structure**: Logical folder organization
✅ **Separation of Concerns**: Components, styles, docs separated
✅ **TypeScript**: Full type safety
✅ **Modern Stack**: Next.js 14, Tailwind CSS, Framer Motion
✅ **Git Hygiene**: Proper .gitignore rules
✅ **Documentation**: Comprehensive guides
✅ **Professional**: Industry-standard structure

This structure follows Next.js and React best practices for maintainable, scalable applications.