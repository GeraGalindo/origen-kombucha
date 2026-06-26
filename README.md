# ORIGEN KOMBUCHA

A premium static website for Origen Kombucha — naturally fermented kombucha crafted in the Netherlands.

## About

Origen Kombucha is a small-batch kombucha brand born in Mexico in 2016 and refined through ten years of fermentation expertise. This website showcases our artisanal approach, featuring elegant monochromatic design inspired by traditional Delft pottery aesthetics.

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablets and desktops
- **11 Flavor Varieties**: Clickable label cards with full nutrition facts in modal overlays
- **Smooth Animations**: Scroll-triggered reveals, parallax effects, and staggered transitions
- **Workshop Information**: Details about hands-on fermentation experiences in Eindhoven
- **Accessibility**: Semantic HTML5, ARIA labels, keyboard navigation support
- **Performance**: Vanilla JavaScript (no frameworks), optimized CSS, lazy loading

## Technology Stack

- **HTML5**: Semantic markup for accessibility
- **CSS3**: Modern CSS with custom properties (CSS variables)
- **Vanilla JavaScript (ES6)**: Modular code with imports/exports
- **No dependencies**: No frameworks, no build tools needed

## File Structure

```
origen-kombucha/
├── index.html              # Main HTML file
├── favicon.svg             # Site icon
├── css/
│   ├── main.css           # Primary styles & layout
│   ├── typography.css     # Font system & text styles
│   └── animations.css     # Scroll animations & transitions
├── js/
│   ├── main.js            # Module initialization
│   ├── animations.js      # Scroll reveals & parallax
│   ├── navigation.js      # Menu & smooth scrolling
│   └── modal.js           # Flavor label popup
└── img/
    ├── bottle.png         # Hero & workshop images
    ├── bottle2.png
    └── flavors/           # 11 flavor label designs
        ├── AmberBloom.png
        ├── GoldenSpice.jpg
        ├── GingerLemon.jpg
        ├── Pineapple.jpg
        ├── SunburstPineapple.jpg
        ├── Mango.jpg
        ├── MangoSplash.jpg
        ├── BlackCurrant.jpg
        ├── ForestFruits.jpg
        ├── Strawberry.jpg
        └── Pineapple-MadameJeanette.jpg
```

## Development

### Local Development Server

**Python 3:**
```bash
cd origen-kombucha
python3 -m http.server 8080
```

Then open http://localhost:8080 in your browser.

**Node.js:**
```bash
npx serve origen-kombucha -p 8080
```

### Browser Support

- Modern browsers with ES6 module support
- Chrome/Edge 61+
- Firefox 60+
- Safari 11+

## Design System

### Colors

- **Primary**: Black (#000000), White (#FFFFFF)
- **Grays**: #F5F5F0, #E5E5E5, #D4D4D4, #A3A3A3, #525252, #333333
- **Usage**: Monochromatic palette for elegant, premium aesthetic

### Typography

- **Headings**: Georgia (serif) - elegant, refined
- **Body**: Helvetica Neue (sans-serif) - clean, readable
- **Fluid scaling**: Using clamp() for responsive typography

### Spacing Scale

4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px

### Breakpoints

- Mobile: < 480px
- Tablet: 768px
- Desktop: 1024px
- Large Desktop: 1440px

## Content Sections

1. **Hero** - Full viewport with parallax bottle image
2. **Story** - Brand journey and fermentation philosophy
3. **Flavours** - 11 clickable flavor cards (modal with full nutrition facts)
4. **Process** - 3-step fermentation timeline
5. **Benefits** - 10 health & wellness benefits
6. **Workshops** - Eindhoven workshop information
7. **Contact** - Instagram, email, website links
8. **Footer** - Copyright and social links

## Contact

- **Email**: info@origenkombucha.nl
- **Instagram**: [@origen.kombucha](https://instagram.com/origen.kombucha)
- **Website**: origenkombucha.nl
- **Location**: Eindhoven, Netherlands

## Deployment

This is a static website with no build process. Simply upload all files to any web hosting service:

1. Upload entire `origen-kombucha` folder to your web server
2. Ensure proper MIME types for `.js` modules
3. Enable HTTPS for security
4. Configure caching headers for performance

### Recommended Hosting

- **Netlify**: Drag & drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Free hosting for open source
- **Traditional hosting**: Any Apache/Nginx server

## License

© 2026 Origen Kombucha. All rights reserved.

---

**Crafted in the Netherlands. Inspired by a decade of fermentation.**
