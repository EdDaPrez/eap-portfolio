# Eduardo A. Pereyra - Portfolio

A modern portfolio website highlighting problem-solving, research, design, and impact-driven work across energy, health, and technical innovation.

## 🌐 Live Site

[View Portfolio](https://yourusername.github.io/portfolio/)

> **Note:** Replace `yourusername` with your actual GitHub username when deployed.

## 🚀 Features

- **Responsive Design**: Clean, modern layout that works across devices
- **Impact-focused Storytelling**: Emphasizes curiosity, problem solving, and meaningful work
- **Project Showcase**: Visual collection of research, prototyping, and engineering work
- **About Page**: Personal introduction with interests, background, and expandable experience/education details
- **Skills Dashboard**: Organized by themes including design, analysis, communication, and research
- **Dark Theme**: High-contrast, polished visual style with subtle accent colors
- **Fast Performance**: Built with React and Vite for strong performance
- **GitHub Pages Ready**: Ready for deployment on GitHub Pages

## 📋 Sections

1. **Hero** - Introductory page with a broad, problem-solving narrative
2. **About** - Personal background, interests, and deeper experience/education details
3. **Projects** - Featured work spanning energy, sensing, research, and design
4. **Skills** - Organized by capability, not just job title
5. **Contact** - LinkedIn-focused connection point

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 with CSS variables
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **Node**: v18+ required

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

## 🏗️ Build & Deployment

### Development Build
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Deploy to GitHub Pages

1. **Update `package.json`**: Update the `homepage` field:
   ```json
   "homepage": "https://yourusername.github.io/portfolio/"
   ```

2. **Deploy**:
   ```bash
   npm run deploy
   ```

   Or manually:
   ```bash
   npm run build
   gh-pages -d dist
   ```

## 🎨 Customization

### Colors & Theme

Edit the CSS variables in `src/index.css`.

### Content

- **Hero**: `src/components/Hero.tsx`
- **About**: `src/components/About.tsx`
- **Projects**: `src/components/Projects.tsx`
- **Skills**: `src/components/Skills.tsx`
- **Contact**: `src/components/Contact.tsx`

### Social Links

Update the LinkedIn profile in `src/components/Contact.tsx` and `src/components/Hero.tsx`.

## 📱 Responsive Breakpoints

- **Desktop**: 1400px and above
- **Tablet**: 768px - 1024px
- **Mobile**: Below 768px

## 🔧 Development

### Project Structure
```
src/
├── components/
│   ├── About.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── Contact.tsx
├── styles/
│   ├── About.css
│   ├── Header.css
│   ├── Hero.css
│   ├── Projects.css
│   ├── Skills.css
│   └── Contact.css
├── App.tsx
├── App.css
├── main.tsx
├── index.css
└── vite-env.d.ts
```

## 📄 License

This portfolio is personal work. Feel free to use it as a template while keeping attribution.

## 🤝 Support

For questions or issues, please reach out on LinkedIn.

---

Built with ❤️ by Eduardo A. Pereyra
