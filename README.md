# Hemashree Balraj - Portfolio Website

A modern, professional portfolio website for Cloud & AI/ML Engineer Hemashree Balraj, built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional aesthetic optimized for recruiters and hiring managers
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Static Export**: GitHub Pages ready with static site generation
- **Smooth Animations**: Subtle animations using Framer Motion
- **Performance**: Fast loading with optimized assets and code splitting

## 🛠 Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: React Icons (Feather Icons)
- **Theme**: next-themes for dark/light mode
- **Deployment**: Static export for GitHub Pages

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page with all sections
├── components/
│   ├── About.tsx            # About section with highlights
│   ├── Certifications.tsx   # AWS certifications
│   ├── Contact.tsx          # Contact information and CTA
│   ├── Experience.tsx       # Work experience timeline
│   ├── Footer.tsx           # Site footer
│   ├── Hero.tsx             # Landing section with CTA
│   ├── Navigation.tsx       # Header navigation with theme toggle
│   ├── Projects.tsx         # Featured projects with impact metrics
│   ├── Skills.tsx           # Technical skills categorized
│   └── ThemeProvider.tsx    # Theme context provider
├── public/
│   └── resume.pdf           # Resume download (add your resume here)
└── Configuration files...
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hemashree-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Building for Production

1. **Build the site**
   ```bash
   npm run build
   ```

2. **Export static files**
   ```bash
   npm run export
   ```

The static files will be generated in the `out/` directory, ready for deployment.

## 🌐 Deployment

### GitHub Pages

1. **Push to GitHub repository**
2. **Enable GitHub Pages** in repository settings
3. **Set source** to GitHub Actions
4. **Create workflow file** `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### Other Platforms

- **Vercel**: Connect GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `out/` folder or connect GitHub
- **AWS S3**: Upload `out/` contents to S3 bucket with static hosting

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`components/Hero.tsx`):
   - Name, title, description
   - Contact links (email, LinkedIn, GitHub)

2. **About Section** (`components/About.tsx`):
   - Professional bio and highlights
   - Core expertise and achievements

3. **Experience** (`components/Experience.tsx`):
   - Work history, achievements, technologies

4. **Projects** (`components/Projects.tsx`):
   - Project details, tech stacks, impact metrics

5. **Contact** (`components/Contact.tsx`):
   - Contact information and preferences

### Styling

- **Colors**: Modify `tailwind.config.js` for brand colors
- **Fonts**: Update font imports in `app/globals.css`
- **Components**: Customize component styles in respective files

### Content

- **Resume**: Add your resume PDF to `public/resume.pdf`
- **Metadata**: Update SEO information in `app/layout.tsx`

## 📊 Key Sections

### Hero
- Professional headline and value proposition
- Clear call-to-action buttons
- Social media links

### About
- Professional summary with impact focus
- Key expertise areas with icons
- Quantified achievements

### Skills
- Categorized technical skills
- Visual skill tags
- Key metrics and strengths

### Experience
- Timeline-style work history
- Achievement-focused descriptions
- Technology stacks used

### Projects
- Detailed project showcases
- Problem-solution-impact format
- Live demo and GitHub links

### Certifications
- AWS certifications with details
- Credential IDs and dates
- Continuous learning commitment

### Contact
- Multiple contact methods
- Role preferences and interests
- Professional call-to-action

## 🔧 Performance Features

- **Static Generation**: Pre-rendered pages for fast loading
- **Image Optimization**: Responsive images with lazy loading
- **Code Splitting**: Automatic code splitting by Next.js
- **CSS Optimization**: Tailwind CSS purging unused styles
- **SEO**: Meta tags, structured data, sitemap

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Adapted layouts for tablets
- **Desktop Enhanced**: Rich desktop experience
- **Touch Friendly**: Large touch targets and gestures

## 🎯 Target Audience

This portfolio is specifically designed for:

- **Hiring Managers**: Quick assessment of skills and experience
- **Technical Recruiters**: Easy-to-scan technical competencies
- **Engineering Teams**: Detailed project information and impact
- **HR Professionals**: Professional presentation and contact info

## 📈 SEO & Analytics

- **Meta Tags**: Comprehensive meta information
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Schema markup for search engines
- **Performance**: Lighthouse score optimization
- **Analytics Ready**: Easy Google Analytics integration

## 🤝 Contributing

This is a personal portfolio template. Feel free to:

1. Fork the repository
2. Customize for your own use
3. Submit issues for bugs or improvements
4. Share feedback and suggestions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for the cloud engineering community**