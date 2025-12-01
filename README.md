# VIP Curtains & Furniture

## Project info

VIP Curtains & Furniture - Premium curtains, blinds, and upholstery services in Dubai.

## How can I edit this code?

There are several ways of editing your application.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Netlify Deployment (Recommended)

This project is configured for Netlify deployment with proper routing support.

**Option 1: Deploy via Netlify UI**
1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Netlify will auto-detect the build settings from `netlify.toml`
6. Click "Deploy site"

**Option 2: Deploy via Netlify CLI**
```sh
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

**Build Configuration:**
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18

The `_redirects` file ensures all routes are handled by React Router for proper client-side routing.

### Other Hosting Services

Build the project using `npm run build` and deploy the `dist` folder to your preferred hosting service. Make sure to configure redirects for client-side routing (all routes should redirect to `index.html`).

## Developer

Developed by [Ian Katana](https://iankatana.com)
