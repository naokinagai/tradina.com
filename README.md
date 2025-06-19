# TRADINA Corporation Website

A beautiful, modern, and bilingual static website for TRADINA Corporation, designed for GitHub Pages hosting.

## 🌟 Features

### ✨ Visual Design
- **Modern & Professional**: Clean, contemporary design with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Visual Heavy**: High-quality stock photography from Unsplash
- **Beautiful Typography**: Inter & Noto Sans JP fonts for excellent readability

### 🌐 Bilingual Support
- **English/Japanese**: Complete bilingual functionality
- **Easy Language Switching**: Toggle button in navigation
- **Persistent Preference**: Language choice saved in localStorage
- **Accurate Translations**: Professional translations for all content

### 🚀 Modern Web Technologies
- **CSS Grid & Flexbox**: Modern layout techniques
- **CSS Custom Properties**: Consistent theming and easy customization
- **Smooth Animations**: CSS transitions and scroll-triggered animations
- **Optimized Performance**: Image preloading and lazy loading

### 📱 User Experience
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Contact Form**: Functional contact form with validation
- **Accessibility**: Keyboard navigation and screen reader friendly

## 🚀 Quick Setup for GitHub Pages

### Option 1: Direct Upload
1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Your site will be available at `https://yourusername.github.io/repositoryname`

### Option 2: Fork & Customize
1. Fork this repository
2. Rename it to `yourusername.github.io` for user pages, or keep any name for project pages
3. Customize the content in `index.html`
4. Push changes - your site will automatically deploy

## 📁 Project Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS stylesheet
├── script.js           # JavaScript functionality
├── README.md           # Documentation
└── .gitignore         # Git ignore file
```

## 🎨 Customization Guide

### Colors & Branding
Edit the CSS custom properties in `styles.css`:

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #f59e0b;    /* Accent color */
    --text-dark: #1f2937;          /* Dark text */
    --text-light: #6b7280;         /* Light text */
    /* ... more variables */
}
```

### Content Updates
1. **Company Information**: Edit text content in `index.html`
2. **Images**: Replace Unsplash URLs with your own images
3. **Contact Details**: Update contact information in the contact section
4. **Services**: Modify service descriptions and add/remove services

### Translations
Update the `data-en` and `data-jp` attributes in HTML elements:

```html
<h1 data-en="English Text" data-jp="日本語テキスト">English Text</h1>
```

## 📸 Image Guidelines

### Current Stock Images
- Hero: Tokyo cityscape (Unsplash)
- About: Business meeting, Japanese culture, Tokyo office
- Services: Various business and technology images

### Replacing Images
1. Use high-quality images (minimum 1200px width)
2. Optimize for web (compress images)
3. Maintain consistent aspect ratios
4. Consider loading times

### Recommended Image Sources
- [Unsplash](https://unsplash.com) - Free high-quality photos
- [Pexels](https://pexels.com) - Free stock photography
- [Pixabay](https://pixabay.com) - Free images and vectors

## 🔧 Technical Features

### Performance Optimizations
- **Image Preloading**: Critical images loaded early
- **Lazy Loading**: Service images loaded on scroll
- **Efficient CSS**: Minimal CSS with smart use of custom properties
- **Optimized JavaScript**: Modern ES6+ features with fallbacks

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Accessibility Features
- **Semantic HTML**: Proper heading structure and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels and descriptions
- **Color Contrast**: WCAG AA compliant color combinations

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 767px and below
- **Small Mobile**: 480px and below

## 🎯 SEO Optimization

### Built-in SEO Features
- **Meta Tags**: Proper title, description, and viewport tags
- **Semantic HTML**: Structured content for search engines
- **Performance**: Fast loading times
- **Mobile-Friendly**: Responsive design

### Additional SEO Tips
1. Add a favicon (`favicon.ico`)
2. Create a `sitemap.xml`
3. Add Google Analytics
4. Implement structured data (JSON-LD)

## 🚀 Deployment Options

### GitHub Pages (Recommended)
- **Free hosting**
- **Custom domain support**
- **HTTPS included**
- **Automatic deployment**

### Alternative Hosting
- **Netlify**: Drag & drop deployment
- **Vercel**: Git-based deployment
- **AWS S3**: Static website hosting
- **Firebase Hosting**: Google's hosting solution

## 🔄 Updates & Maintenance

### Regular Updates
1. **Content**: Keep company information current
2. **Images**: Update with fresh, relevant photos
3. **Contact Info**: Ensure contact details are accurate
4. **Dependencies**: Update Font Awesome and Google Fonts if needed

### Monitoring
- **Google Analytics**: Track visitor behavior
- **Google Search Console**: Monitor search performance
- **Page Speed Insights**: Check performance regularly

## 📞 Contact Form Setup

The contact form is currently set up with frontend validation and simulation. To make it functional:

### Option 1: Formspree
1. Sign up at [Formspree](https://formspree.io)
2. Replace the form action with your Formspree endpoint
3. Update the JavaScript form handling

### Option 2: Netlify Forms
1. Add `netlify` attribute to the form
2. Deploy on Netlify
3. Forms will be automatically handled

### Option 3: EmailJS
1. Set up EmailJS account
2. Add EmailJS script
3. Configure email templates

## 📄 License

This website template is open source and available under the MIT License. Feel free to use it for your company website.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or issues:
- Create an issue in the GitHub repository
- Check the documentation
- Review the code comments

---

**Built with ❤️ for TRADINA Corporation**

*Connecting Japan to the World since 2007* 