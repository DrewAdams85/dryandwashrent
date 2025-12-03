# DryAndWashRent - Washer & Dryer Rental Service Website

A fast, SEO-optimized, mobile-responsive website for washer and dryer rental services. Built with pure HTML, CSS, and JavaScript for maximum performance and simplicity.

## Features

- **Lightning Fast**: Pure HTML/CSS/JS with no build process or framework overhead
- **SEO Optimized**: Complete meta tags, structured data, sitemap, and robots.txt
- **Mobile Responsive**: Fully responsive design that works on all devices
- **Modern Design**: Clean teal & gray color scheme with smooth animations
- **Form Validation**: Client-side validation with real-time feedback
- **Accessible**: Semantic HTML and ARIA attributes for accessibility

## Pricing Information

- **Installation Fee**: $29.99 (one-time)
- **Monthly Rental**: $60/month (includes both washer and dryer)

## Quick Start

### Local Development

1. Clone or download this repository
2. Open `index.html` in a web browser
3. That's it! No build process required.

For local development with live reload, you can use any simple HTTP server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Deployment

### Option 1: Static Hosting Services (Recommended)

Deploy to any static hosting service:

**Netlify:**
1. Drag and drop your folder to netlify.com/drop
2. Or connect your Git repository for automatic deployments

**Vercel:**
```bash
npm i -g vercel
vercel
```

**GitHub Pages:**
1. Push to GitHub
2. Go to Settings → Pages
3. Select your branch and root folder

**Cloudflare Pages:**
1. Connect your Git repository
2. Deploy automatically

### Option 2: Traditional Web Hosting

1. Upload all files via FTP/SFTP to your web host
2. Make sure `index.html` is in the root directory
3. Update the domain in `sitemap.xml`

## Form Integration

The contact form currently logs submissions to the browser console. To make it functional, you need to integrate it with a backend service.

### Easy Integration Options

#### 1. Formspree (Easiest)
```html
<!-- Replace the form tag with: -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

#### 2. Netlify Forms
```html
<!-- Add to form tag: -->
<form name="contact" netlify>
```

#### 3. Web3Forms
```html
<!-- Add hidden input: -->
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
<!-- Update form action: -->
<form action="https://api.web3forms.com/submit" method="POST">
```

#### 4. Custom Backend (Advanced)

Update the `submitForm()` function in `script.js`:

```javascript
function submitForm(name, phone, email) {
    fetch('https://your-api.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, email })
    })
    .then(response => response.json())
    .then(data => {
        form.style.display = 'none';
        successMessage.style.display = 'block';
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error submitting form. Please try again.');
    });
}
```

## SEO Checklist

Before going live, update these items:

### 1. Update Domain References
- [ ] Update `og:url` in `index.html` (line 13)
- [ ] Update `Sitemap` URL in `robots.txt`
- [ ] Update `<loc>` in `sitemap.xml`

### 2. Add Your Business Information
- [ ] Add business address to structured data (if applicable)
- [ ] Add phone number to structured data
- [ ] Add business hours

### 3. Social Media Images
- [ ] Create and add Open Graph image (1200x630px)
- [ ] Update `og:image` and `twitter:image` meta tags

### 4. Analytics & Tracking
Add tracking scripts before closing `</head>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 5. Submit to Search Engines
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify ownership of your domain

## Performance Optimizations

The website is already optimized for performance:

- **Minimal JavaScript**: Only ~4KB of JavaScript
- **Optimized CSS**: Single CSS file with efficient selectors
- **Font Loading**: Preconnect to Google Fonts
- **No External Dependencies**: Everything is self-contained
- **Lazy Loading**: Images and animations load on scroll

### Further Optimizations

1. **Add Favicon**: Create and add favicon files
2. **Compress Images**: If you add images, use WebP format
3. **Enable Compression**: Enable Gzip/Brotli on your server
4. **Add Cache Headers**: Set long cache times for static assets
5. **CDN**: Use a CDN for faster global delivery

## Customization

### Colors
Update CSS variables in `styles.css` (lines 21-27):
```css
--primary: #14b8a6;        /* Main teal color */
--primary-dark: #0d9488;   /* Darker teal */
--primary-light: #2dd4bf;  /* Lighter teal */
```

### Pricing
Update pricing in `index.html`:
- Installation fee: Line 157
- Monthly rental: Line 161

### Business Name
Search and replace "DryAndWashRent" throughout the files.

### Content
Edit text directly in `index.html` - all content is clearly structured.

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

The website follows accessibility best practices:
- Semantic HTML5 elements
- Proper heading hierarchy
- Form labels and ARIA attributes
- Keyboard navigation support
- Color contrast ratios meet WCAG AA standards
- Reduced motion support for users with motion sensitivity

## License

This website template is provided as-is for use by DryAndWashRent.

## Support

For questions or issues:
1. Check the comments in the code
2. Review this README
3. Search for solutions online
4. Consult web development documentation

## Next Steps

1. **Test the website** on multiple devices and browsers
2. **Integrate the form** with your preferred backend service
3. **Update SEO content** with your actual domain
4. **Add analytics** to track visitor behavior
5. **Deploy to production** using one of the hosting options above
6. **Submit to search engines** to get indexed
7. **Consider adding** a blog section for content marketing
8. **Set up** automated email notifications for form submissions

Good luck with your washer and dryer rental business!
# dryandwashrent
