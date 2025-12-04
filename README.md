# DryAndWashRent - Washer & Dryer Rental Service Website

A fast, SEO-optimized, mobile-responsive website for washer and dryer rental services in St. George, UT and Mesquite, NV. Built with pure HTML, CSS, and JavaScript for maximum performance.

🌐 **Live Site**: [dryandwashrent.com](https://dryandwashrent.com)

## Business Information

- **Service Area**: St. George, UT and Mesquite, NV
- **Phone**: (435) 767-7225
- **Installation Fee**: $39.99 (one-time)
- **Monthly Rental**: $60/month (includes both washer and dryer)

## Features

✅ **Lightning Fast**: Pure HTML/CSS/JS with minified assets (63% size reduction)
✅ **SEO Optimized**: Complete meta tags, Open Graph images, structured data, sitemap
✅ **Mobile Responsive**: Fully responsive design that works on all devices
✅ **Modern Design**: Clean teal & gray color scheme with smooth animations
✅ **Form Validation**: Real-time client-side validation with phone formatting
✅ **Form Integration**: Connected to Formspree for submissions
✅ **Analytics**: Google Analytics tracking enabled (G-X7EHVWHZM9)
✅ **Security**: Security headers and best practices implemented
✅ **Accessibility**: WCAG AA compliant with semantic HTML
✅ **Privacy Policy**: Included privacy.html page

## Project Structure

```
dryandwashrent/
├── index.html              # Main website page
├── privacy.html            # Privacy policy page
├── styles.min.css          # Minified CSS (production)
├── script.min.js           # Minified JavaScript (production)
├── styles.css              # Original CSS (for editing)
├── script.js               # Original JavaScript (for editing)
├── favicon.svg             # Site icon
├── whirlpool.webp          # Hero background image
├── washerDryer.jpg         # Open Graph social media image (1200x630)
├── robots.txt              # Search engine instructions
├── sitemap.xml             # XML sitemap for SEO
└── README.md               # This file
```

## Quick Start

### View Locally

1. Clone or download this repository
2. Open `index.html` in a web browser
3. No build process required!

Or use a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# Then visit http://localhost:8000
```

## Deployment

Currently deployed on **GitHub Pages** at [dryandwashrent.com](https://dryandwashrent.com)

### Updating the Live Site

1. Make changes to your local files
2. Commit and push to GitHub:
```bash
git add .
git commit -m "Your change description"
git push
```
3. Changes will be live in 1-2 minutes

## Making Changes

### Edit Content

All content is in `index.html` - search for the text you want to change and update it directly.

### Edit Styles

1. **Edit** `styles.css` (not styles.min.css)
2. **Minify** using an online tool like [CSS Minifier](https://cssminifier.com/)
3. **Replace** contents of `styles.min.css` with minified version

### Edit JavaScript

1. **Edit** `script.js` (not script.min.js)
2. **Minify** using an online tool like [JavaScript Minifier](https://javascript-minifier.com/)
3. **Replace** contents of `script.min.js` with minified version

### Change Colors

Update these CSS variables in `styles.css`:

```css
:root {
    --primary: #14b8a6;        /* Teal - main brand color */
    --primary-dark: #0d9488;   /* Darker teal for hovers */
    --primary-light: #2dd4bf;  /* Lighter teal accents */
    --secondary: #64748b;       /* Gray */
    --secondary-dark: #475569;  /* Darker gray */
}
```

Then re-minify and update `styles.min.css`.

## Features Detail

### Contact Form
- Integrated with **Formspree** (form ID: xyzrjqbl)
- Real-time validation with error messages
- Phone number auto-formatting
- Celebration animation on successful submission
- Name and phone required, email optional

### Call & Text Buttons
Mobile users can:
- Call directly: `tel:+14357677225`
- Send SMS: `sms:+14357677225`

### SEO & Social Media
- **Structured Data**: LocalBusiness schema for Google
- **Open Graph**: Beautiful previews on Facebook/LinkedIn
- **Twitter Cards**: Optimized for Twitter sharing
- **Social Image**: Custom `washerDryer.jpg` (1200x630px)

### Performance
- **CSS**: 18KB → 7KB (61% reduction)
- **JS**: 12KB → 4KB (67% reduction)
- **Total**: 63% smaller than original
- **Load Time**: Under 1 second on fast connections

### Security
- X-Content-Type-Options header
- X-Frame-Options header (prevents clickjacking)
- Referrer-Policy for privacy
- Form validation to prevent bad submissions

## Analytics & Tracking

**Google Analytics** is already configured with tracking ID: `G-X7EHVWHZM9`

View your analytics at: [analytics.google.com](https://analytics.google.com)

## Testing

### Test Social Media Previews
- **Facebook**: https://developers.facebook.com/tools/debug/
- **Twitter**: https://cards-dev.twitter.com/validator
- **LinkedIn**: Share the URL and view preview

### Test Performance
- **Google PageSpeed**: https://pagespeed.web.dev/
- **GTmetrix**: https://gtmetrix.com/

### Test SEO
- **Google Search Console**: Already set up
- **Bing Webmaster**: https://www.bing.com/webmasters

## Browser Support

✅ Chrome (last 2 versions)
✅ Firefox (last 2 versions)
✅ Safari (last 2 versions)
✅ Edge (last 2 versions)
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Privacy & Legal

Privacy policy is available at:
- **URL**: https://dryandwashrent.com/privacy.html
- **File**: `privacy.html`

Covers:
- Data collection (name, phone, email, address)
- Third-party services (Google Analytics, Formspree)
- User rights (access, correction, deletion)
- Contact information

## Maintenance

### Regular Tasks
- ✅ Check form submissions in Formspree
- ✅ Review analytics monthly
- ✅ Test website on different devices
- ✅ Keep content up to date

### Occasional Tasks
- Update privacy policy if you add new tracking
- Test social media previews after changes
- Optimize images if you add new ones
- Submit updated sitemap if you add pages

## Support

For technical questions:
1. Check the code comments
2. Review this README
3. Search online for HTML/CSS/JS help

For business questions:
- Contact: (435) 767-7225

## Credits

- **Design & Development**: Custom built
- **Fonts**: Inter (Google Fonts)
- **Icons**: Inline SVG
- **Form Backend**: Formspree
- **Analytics**: Google Analytics
- **Hosting**: GitHub Pages

---

**Last Updated**: December 2024
**Version**: 2.0 (Optimized & Production-Ready)
