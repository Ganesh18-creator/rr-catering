# RR Catering - Premium Catering Services Website

A modern, SEO-optimized Next.js website for RR Catering, built with App Router and Tailwind CSS.

## 🚀 Features

- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **SEO Optimized** with metadata, Open Graph tags, sitemap, and robots.txt
- **Responsive Design** - Mobile-first approach
- **Performance Optimized** - Fast loading and Core Web Vitals optimized
- **Conversion Focused** - Clear CTAs and booking flow
- **WhatsApp Integration** - Floating WhatsApp button
- **Dynamic Menu Filtering** - Interactive menu categories
- **Testimonials Slider** - Client reviews carousel
- **Contact Forms** - Booking and contact forms with validation

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── MenuHighlights.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Gallery.jsx
│   │   ├── CTASection.jsx
│   │   └── WhatsAppButton.jsx
│   ├── about/page.jsx
│   ├── menu/page.jsx
│   ├── booking/page.jsx
│   ├── contact/page.jsx
│   ├── gallery/page.jsx
│   ├── layout.jsx
│   ├── page.jsx
│   ├── globals.css
│   ├── sitemap.js
│   └── robots.js
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Design System

### Colors
- **Primary**: #7B1E3A (Maroon)
- **Secondary**: #F5E6CA (Cream)
- **Accent**: #D4AF37 (Gold)

### Typography
- **Headings**: Playfair Display (Serif)
- **Body**: Inter (Sans-serif)

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Start production server:
```bash
npm start
```

## 📄 Pages

- **Home** (`/`) - Hero, services, menu highlights, testimonials, gallery
- **About** (`/about`) - Company story, mission, vision, team
- **Menu** (`/menu`) - Full menu with filtering
- **Booking** (`/booking`) - Event booking form
- **Contact** (`/contact`) - Contact form and information
- **Gallery** (`/gallery`) - Event photos gallery

## 🔍 SEO Features

- Dynamic metadata for each page
- Open Graph tags for social sharing
- Structured data (JSON-LD) ready
- Sitemap.xml generation
- Robots.txt configuration
- Semantic HTML structure
- Optimized for keywords:
  - "Catering service Chennai"
  - "Wedding catering"
  - "Best catering near me"
  - "Corporate catering"

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Conversion Optimization

- Clear CTAs throughout the site
- Sticky navigation with "Book Now" button
- WhatsApp floating button
- Simple booking form (minimal friction)
- Trust signals (testimonials, stats)
- Professional imagery placeholders

## 🔧 Customization

### Update Contact Information
Edit `src/app/components/Footer.jsx` and `src/app/contact/page.jsx`

### Update Menu Items
Edit `src/app/menu/page.jsx` - modify the `menuData` array

### Update Services
Edit `src/app/components/Services.jsx` - modify the `services` array

### Update Testimonials
Edit `src/app/components/Testimonials.jsx` - modify the `testimonials` array

## 📞 WhatsApp Integration

Update the phone number in:
- `src/app/components/WhatsAppButton.jsx`
- `src/app/components/Footer.jsx`
- `src/app/contact/page.jsx`

Replace `919876543210` with your actual WhatsApp number.

## 🌐 Deployment

This project is ready to deploy on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

## 📝 License

© 2026 RR Catering. All rights reserved.
# rr-catering
