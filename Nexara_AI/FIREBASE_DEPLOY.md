# Firebase Deployment Instructions

This project is configured for deployment to Firebase Hosting with Firestore for contact form submissions.

## Prerequisites

1. Node.js 18+ installed
2. Firebase CLI installed globally:
   ```bash
   npm install -g firebase-tools
   ```

## Setup Steps

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Name your project (e.g., "nexara-ai")
4. Follow the setup wizard

### 2. Enable Firestore

1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose production mode
4. Select a region (preferably closest to your users)

### 3. Get Firebase Configuration

1. In Firebase Console, go to Project Settings
2. Scroll to "Your apps" and click the web icon (</>)
3. Register your app (name it "Nexara AI Web")
4. Copy the configuration object
5. Update `src/environments/environment.ts` and `src/environments/environment.prod.ts` with your credentials:

```typescript
export const environment = {
  production: true, // or false for development
  firebase: {
    apiKey: 'YOUR_ACTUAL_API_KEY',
    authDomain: 'your-project.firebaseapp.com',
    projectId: 'your-project-id',
    storageBucket: 'your-project.appspot.com',
    messagingSenderId: 'YOUR_SENDER_ID',
    appId: 'YOUR_APP_ID'
  }
};
```

### 4. Login to Firebase CLI

```bash
firebase login
```

### 5. Initialize Firebase in Project

```bash
firebase init
```

Select:
- Firestore
- Hosting

When prompted:
- **Use existing project**: Select your Firebase project
- **Firestore rules file**: `firestore.rules` (already configured)
- **Firestore indexes file**: `firestore.indexes.json` (default)
- **Public directory**: `dist/Nexara_AI/browser`
- **Configure as single-page app**: Yes
- **Set up automatic builds with GitHub**: Optional
- **Overwrite files**: No (our files are already configured)

### 6. Build the Application

```bash
npm run build
```

### 7. Deploy to Firebase

Deploy both Firestore rules and Hosting:

```bash
firebase deploy
```

Or deploy individually:

```bash
# Deploy Firestore rules only
firebase deploy --only firestore:rules

# Deploy Hosting only
firebase deploy --only hosting
```

### 8. Verify Deployment

After deployment, Firebase CLI will show the hosting URL:
```
✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/YOUR_PROJECT/overview
Hosting URL: https://YOUR_PROJECT.web.app
```

Visit the URL to verify your site is live.

## Testing Contact Form

1. Fill out and submit the contact form
2. In Firebase Console, go to Firestore Database
3. Check the `contact_messages` collection for the new document
4. Verify all fields are present and correctly formatted

## Security

The Firestore security rules (`firestore.rules`) ensure:
- Only **create** operations are allowed (no read/update/delete)
- All field validations are enforced (length, format, required fields)
- Server timestamp is used for `createdAt`
- Honeypot protection is handled client-side

## Troubleshooting

### Build fails
- Check Node.js version (18+ required)
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors: `npm run build`

### Deployment fails
- Verify Firebase CLI is logged in: `firebase login`
- Check that Firebase project is selected: `firebase use --add`
- Ensure build was successful before deploying

### Contact form doesn't save
- Check browser console for Firebase errors
- Verify Firebase configuration in environment files
- Check Firestore rules are deployed: `firebase deploy --only firestore:rules`
- Ensure Firestore is enabled in Firebase Console

### 403 Permission Denied errors
- Verify Firestore rules allow create operations
- Check that all required fields are being sent
- Ensure field lengths and formats match validation rules

## Continuous Deployment (Optional)

You can set up automatic deployments using GitHub Actions:

1. Generate Firebase token:
   ```bash
   firebase login:ci
   ```
2. Add the token to GitHub Secrets as `FIREBASE_TOKEN`
3. Create `.github/workflows/deploy.yml` for automatic deployments on push to main branch

## Environment Variables

For local development, you can use different Firebase projects:
- Development: `src/environments/environment.ts`
- Production: `src/environments/environment.prod.ts`

Build for production:
```bash
npm run build -- --configuration=production
```

## Support

For issues:
1. Check Firebase Console logs
2. Review Firestore security rules
3. Check browser console for client-side errors
4. Verify all environment variables are set correctly
