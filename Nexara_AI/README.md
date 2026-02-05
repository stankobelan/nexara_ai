# Nexara AI - Portfolio SPA

Production-ready Angular 20+ portfolio application with AI, Web, and Voice project showcase. Built with the "Lime Dark" design system, featuring Firebase Firestore integration for contact form submissions.

## 🚀 Features

### Core Technologies
- **Angular 20+** with standalone components
- **NoZone.js** (zoneless change detection)
- **Signals** for reactive state management
- **TypeScript** with strict mode
- **SCSS** with CSS custom properties
- **Firebase Web SDK** for Firestore
- **Lazy-loaded routes** for optimal performance

### Design System ("Lime Dark")
- Dark charcoal background (#0b0f0d)
- Lime accent (#b6ff3b) with glow effects
- Modern cards with subtle borders
- Premium, professional feel
- Fully responsive design
- Accessibility-first approach

### Pages & Features
- **Home** - Hero, Featured Projects, Services, Tech Stack, Contact CTA
- **Projects** - Filterable project list with Signals (All/AI/Web/Voice)
- **Project Detail** - Individual project pages with related projects
- **Contact** - Reactive form with validation, honeypot spam protection, Firebase integration

### Accessibility (A11y)
- Keyboard navigation support
- Visible focus rings (lime color)
- ARIA labels and live regions
- Skip to main content link
- Semantic HTML
- Form validation with error messages

### Performance
- Route-based code splitting
- Lazy-loaded images (ready)
- Optimized bundle sizes
- Firebase Hosting with CDN
- Cache headers configured

## 📋 Prerequisites

- Node.js 18+ 
- npm 9+
- Firebase account (for deployment)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/stankobelan/nexara_ai.git
cd nexara_ai/Nexara_AI
```

2. Install dependencies:
```bash
npm install
```

3. Configure Firebase (see [FIREBASE_DEPLOY.md](./FIREBASE_DEPLOY.md)):
   - Update `src/environments/environment.ts`
   - Update `src/environments/environment.prod.ts`
   - Replace placeholder values with your Firebase credentials

## 🔧 Development

Start the development server:
```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload when you change source files.

## 🏗️ Build

Build for production:
```bash
npm run build
```

The build artifacts will be stored in `dist/Nexara_AI/browser/`.

## 🚢 Deployment

See detailed deployment instructions in [FIREBASE_DEPLOY.md](./FIREBASE_DEPLOY.md).

Quick deploy to Firebase:
```bash
# Build the app
npm run build

# Deploy to Firebase
firebase deploy
```

## 📁 Project Structure

```
Nexara_AI/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   └── services/          # Firebase service
│   │   ├── pages/
│   │   │   ├── home/              # Home page with sections
│   │   │   ├── projects/          # Projects list with filters
│   │   │   ├── project-detail/    # Individual project page
│   │   │   └── contact/           # Contact form
│   │   ├── shared/
│   │   │   ├── components/        # Reusable UI components
│   │   │   ├── models/            # TypeScript interfaces
│   │   │   └── data/              # Static project data
│   │   ├── app.ts                 # Root component
│   │   ├── app.routes.ts          # Route configuration
│   │   └── app.config.ts          # App config (zoneless)
│   ├── environments/              # Environment configs
│   ├── styles.scss                # Global styles
│   └── index.html                 # HTML entry point
├── firebase.json                  # Firebase hosting config
├── firestore.rules                # Firestore security rules
└── FIREBASE_DEPLOY.md             # Deployment guide
```

## 🎨 Design System

### Colors
```scss
--bg: #0b0f0d           // Background
--surface: #101815      // Card backgrounds
--border: #1e2a23       // Borders
--text: #e8f0ec         // Primary text
--muted: #9fb0a8        // Secondary text
--lime: #b6ff3b         // Primary accent
--lime2: #7dff4a        // Hover accent
--danger: #ff4d4d       // Error states
--success: #35d07f      // Success states
```

### Components
- **Button** - Primary (filled lime) and Secondary (outline lime)
- **Card** - Rounded corners, subtle border, hoverable variant
- **Chip** - Tag-style component for filters and categories
- **Toast** - Success/Error/Info notifications with auto-dismiss

## 🔒 Security

### Firestore Rules
The contact form uses strict Firestore security rules:
- **Create only** - No read, update, or delete operations
- **Field validation** - Length and type checks enforced
- **Server timestamp** - Prevents time manipulation
- **Honeypot protection** - Client-side spam filter

### Best Practices
- No sensitive data in client code
- Environment variables for Firebase config
- HTTPS enforced on Firebase Hosting
- Input validation on client and server

## 📱 Responsive Design

- Mobile-first approach
- Breakpoint: 768px for tablet/desktop
- Flexible grid layouts
- Touch-friendly tap targets

## 🧪 Testing

Run unit tests:
```bash
npm test
```

## 🌍 Localization

Currently in Slovak (SK). All UI strings are in Slovak language.

## 📄 License

This project is private.

## 👤 Author

**Nexara AI**
- Portfolio: [nexara-ai.web.app](https://nexara-ai.web.app)

## 🤝 Contributing

This is a portfolio project. Not accepting contributions.

## 📞 Support

For issues or questions, use the contact form on the deployed site.

