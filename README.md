# Jay Munagala - Portfolio Website

A modern, responsive portfolio website showcasing my experience as a Software Engineer, Data Analyst, Student Assistant, and Web Developer.

## 🚀 Live Demo

Visit my portfolio: [https://jayreddymunagala.github.io/jay-portfolio/](https://jayreddymunagala.github.io/jay-portfolio/)

## 🛠️ Built With

- **React 18** - Modern React with TypeScript
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, customizable icons
- **GitHub Pages** - Automated deployment

## 🎯 Features

- **Responsive Design** - Optimized for all devices and screen sizes
- **Smooth Animations** - Engaging user experience with Framer Motion
- **Modern UI/UX** - Clean, professional design with glassmorphism effects
- **Performance Optimized** - Fast loading with Vite bundling
- **SEO Friendly** - Proper meta tags and semantic HTML

## 📱 Sections

- **Hero** - Introduction with animated typing effect
- **About** - Career journey and professional story
- **Experience** - Detailed work experience and achievements
- **Skills** - Interactive skills showcase with animations
- **Projects** - Featured projects with GitHub links
- **Education** - Academic background and achievements
- **Contact** - Contact form and social links

## 🚀 Deployment

This portfolio is automatically deployed to GitHub Pages using GitHub Actions:

1. **Push to main branch** triggers the deployment workflow
2. **Build process** runs `npm run build` to create production bundle
3. **Deploy** automatically publishes to GitHub Pages

### Manual Deployment

If you want to deploy manually:

```bash
# Build the project
npm run build

# Deploy to GitHub Pages (requires gh-pages package)
npm run deploy
```

## 🛠️ Local Development

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/JayReddyMunagala/jay-portfolio.git
cd jay-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Project Structure

```
jay-portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ParticleBackground.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
└── package.json
```

## 🔧 Configuration

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to **Pages** section
3. Set source to **GitHub Actions**
4. The workflow will automatically deploy on push to main

### Base Path Configuration

The `vite.config.ts` is configured to handle GitHub Pages base path:

```typescript
base: process.env.NODE_ENV === 'production' ? '/jay-portfolio/' : '/'
```

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Connect With Me

- **LinkedIn**: [Jaya Prakash Reddy Munagala](https://www.linkedin.com/in/jaya-prakash-reddy-munagala-90a39626b/)
- **GitHub**: [JayReddyMunagala](https://github.com/JayReddyMunagala)
- **Email**: munagala.jayaprakash@gmail.com

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Jay Munagala**  
*Software Engineer • Data Analyst • Student Assistant • Web Developer*