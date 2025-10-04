# Deployment Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```

### 3. Build for Production
```bash
npm run build
```

## Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Netlify
1. Connect GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Configure environment variables

### Manual Deployment
1. Run `npm run build`
2. Upload `build` folder to your hosting provider
3. Configure server to serve `index.html` for all routes

## Environment Variables

Set these in your deployment platform:

```bash
# Email Configuration
SENDGRID_API_KEY=your_sendgrid_key
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587

# CRM Integration
HUBSPOT_API_KEY=your_hubspot_key
SALESFORCE_CLIENT_ID=your_salesforce_id

# Analytics
GA_MEASUREMENT_ID=G-XXXXXXXXXX
GTM_ID=GTM-XXXXXXX

# Dashboard Authentication
DASHBOARD_SECRET_KEY=your_secret_key
```

## Post-Deployment Checklist

- [ ] Update contact form endpoint
- [ ] Configure SMTP settings
- [ ] Set up CRM integrations
- [ ] Add analytics tracking
- [ ] Test all form submissions
- [ ] Verify mobile responsiveness
- [ ] Check page load speeds
- [ ] Test dashboard access
- [ ] Update social media links
- [ ] Configure domain and SSL

## Custom Domain Setup

1. Add custom domain in hosting platform
2. Configure DNS records
3. Enable SSL certificate
4. Update any hardcoded URLs in code
5. Test all functionality with new domain

## Performance Optimization

- Enable gzip compression
- Configure CDN (Cloudflare recommended)
- Optimize images (WebP format)
- Enable browser caching
- Minify CSS/JS files
- Use lazy loading for images

## Security Checklist

- [ ] Enable HTTPS
- [ ] Configure CORS properly
- [ ] Set up rate limiting
- [ ] Validate all form inputs
- [ ] Secure API endpoints
- [ ] Use environment variables for secrets
- [ ] Regular security updates
