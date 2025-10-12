# CDKL5 Gene Therapy Website

A minimalist, accessible static website to raise awareness and funds for CDKL5 AAV9 gene therapy development.

## 🎯 Goal
Help reach $3.5M to fund Phase I/II clinical trials for CDKL5 Deficiency Disorder (CDD) gene therapy.

## 🌐 Live Site
Deployed on Netlify: [Coming Soon]

## ✨ Features
- **5 Complete Pages**: Home, About, Get Involved, Parents & Caregivers, Contact
- **Interactive Carousel**: Auto-rotating gallery of 47 community photos
- **Real-time Countdown**: Days until Q2 2026 trial launch
- **Progress Tracking**: Visual $200K/$3.5M fundraising progress bar
- **Responsive Design**: Mobile-first, accessible (WCAG-compliant)
- **Donation Integration**: Square & PayPal buttons throughout
- **Email Signups**: Formspree-powered newsletter subscription
- **Scientific Citations**: Linked references to PubMed, Ultragenyx, CDKL5.com

## 🛠️ Tech Stack
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Flexbox, Grid
- **Vanilla JavaScript** - No frameworks
- **Google Fonts** - Open Sans
- **Google Analytics** - Metrics tracking (placeholder)
- **Netlify** - Free hosting & deployment

## 📁 Structure
```
/
├── index.html              # Home page with hero & carousel
├── about.html              # Team (18 members) & preclinical data
├── get-involved.html       # Donation, events, volunteer forms
├── parents-caregivers.html # Resources & Centers of Excellence
├── contact.html            # Contact form & legal disclaimers
├── css/
│   └── style.css          # Shared styles
├── js/
│   └── script.js          # Carousel, countdown, progress bar
├── images/                 # 47 community photos
├── netlify.toml           # Deployment config
└── README.md
```

## 🚀 Deployment

### Option 1: Netlify Drag & Drop
1. Zip the entire project folder
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop the zip file
4. Site is live instantly!

### Option 2: Netlify + GitHub (Recommended)
1. Connect this repo to Netlify
2. Build command: (none needed - static site)
3. Publish directory: `/`
4. Auto-deploys on every push to `master`

## 🎨 Design
- **Color Palette**: Navy (#303F9F), Red (#E57373), Peach (#FFB6A2), Pink (#FFE5E5), White, Black
- **Inspired By**: water.org, Squarespace health foundations
- **Typography**: Open Sans (Google Fonts)
- **Animations**: Subtle fade-ins via Intersection Observer

## 📊 Key Metrics
- **Fundraising Goal**: $3.5 Million
- **Current Progress**: $200,000 raised
- **Trial Timeline**: Q2 2026 (June 30, 2026)
- **Community**: 500+ families in 45+ countries

## 👥 Team
18 world-class leaders in gene therapy, clinical development, and rare disease advocacy:
- Dr. Gai Ayalon (Drug Development Advisor)
- Dr. Nalin Gupta, Dr. Adam Numis, Dr. Heather Olson (Clinical Team)
- And 14 more experts in regulatory, operations, translational medicine

## 📚 Scientific References
1. [PubMed 39033321](https://pubmed.ncbi.nlm.nih.gov/39033321/) - Molecular Therapy study
2. [Ultragenyx UX055](https://www.ultragenyx.com/our-research/pipeline/ux055-for-cdd/) - Preclinical data
3. [CDKL5.com](https://www.cdkl5.com/) - Connect CDKL5 community
4. [CGTLive](https://www.cgtlive.com/view/cdkl5-gene-therapy) - Parent-led efforts
5. [Cell.com](https://www.cell.com/molecular-therapy-family/molecular-therapy/fulltext/S1525-0016(24)00467-2) - Full research article

## 🔧 Local Development
```bash
# Clone the repository
git clone https://github.com/sakabraw-1/gene_therapy.git
cd gene_therapy

# Start a local server (Python 3)
python -m http.server 8000

# Or with Node.js
npx serve

# Open browser to http://localhost:8000
```

## 📝 To-Do Before Launch
- [ ] Replace Google Analytics ID (`UA-XXXXXXX-X`)
- [ ] Replace Formspree form IDs (`your-form-id`)
- [ ] Optimize images (compress for faster load)
- [ ] Add favicon
- [ ] Test all forms end-to-end
- [ ] SEO audit
- [ ] Accessibility audit (WCAG AA)

## 🤝 Contributing
This is a parent-led initiative. For questions or contributions:
- Email: [Add contact email]
- Issues: Use GitHub Issues tab

## 📄 License
© 2024-2025 CDKL5 Gene Therapy Coalition. Content for educational and fundraising purposes.

## ❤️ Acknowledgments
Built with love by the CDKL5 community. Every line of code brings us closer to a cure.

---
**Donate Now**: [Square](https://checkout.square.site/merchant/ML47GBM1M9YW9/checkout/7O336ARIT4X5SQTAEX5RDSR3?src=qr) | [PayPal](https://www.paypal.com/us/fundraiser/charity/3700987)
