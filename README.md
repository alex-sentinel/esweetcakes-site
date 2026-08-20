# E's Sweet Cakes
Marketing site for Esperanza Perez, a home based custom cake baker in Faribault, MN. Built with Astro and CSS, deployed on Cloudflare Pages.

## Running locally
```
npm install
npm run dev      # local preview
npm run build    # static output to ./dist
```

## Order form
Submits to an n8n webhook — set the real URL in .env once n8n is live (see .env.example).

## Content
Cake photos, pricing, and flavors live in src/data/ — edit those files directly, no code changes needed.

## Deploy
Push to main — Cloudflare Pages builds and deploys automatically.
