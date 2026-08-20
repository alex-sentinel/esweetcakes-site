# E's Sweet Cakes

Single-page marketing site for Esperanza Perez, a home-based custom cake baker in
Faribault, Minnesota. Built with Astro, plain CSS, and one small vanilla-JS script
for the order form. Builds to static files for S3 + CloudFront.

## Running it

Node was installed into `~/.local/node` (this machine had none). Every command
below needs that on your PATH. Either prefix each command:

```sh
export PATH="$HOME/.local/node/bin:$PATH"
```

…or add that line to `~/.zshrc` once so it's always there.

```sh
npm install              # first time only
npm run gen:placeholders # regenerate placeholder photos (only needed if missing)
npm run dev              # local preview at http://localhost:4321
npm run build            # static output to ./dist
npm run preview          # serve the built ./dist locally
```

## The order form

Copy `.env.example` to `.env` and set the n8n webhook URL:

```
PUBLIC_WEBHOOK_URL=https://your-n8n-host/webhook/...
```

The form POSTs the request as JSON to that URL. Until it's set, submitting shows a
"not connected yet" message with Esperanza's email as the fallback. Rebuild after
changing `.env` — the value is baked in at build time.

## Deploying to S3 + CloudFront

1. `npm run build`
2. Upload the **contents** of `dist/` to your S3 bucket.
3. Point CloudFront at the bucket; set the default root object to `index.html`.
4. Invalidate the CloudFront cache (`/*`) after each deploy.

## What still needs real facts

Everything you need to supply is marked with a `TODO:` comment. Find them all:

```sh
grep -rn "TODO" src scripts astro.config.mjs .env.example
```

The short list:
- **Photos** — replace `src/assets/cakes/cake-01.jpg … cake-08.jpg` with real phone
  photos (keep the filenames), then rewrite each `alt` in `src/data/cakes.json` to
  describe the actual cake.
- **Sheet-cake prices** — two are `"TODO"` in `src/data/pricing.json`. Round prices
  are set (6″ $50, 8″ $70, 10″ $85). Confirm the servings numbers too.
- **Business email** — currently the personal Gmail in `src/components/Footer.astro`
  and `src/components/OrderForm.astro`. Swap when a business address exists.
- **Webhook URL** — see above.
- **Domain** — set `site` in `astro.config.mjs`.

## Data files

Content is data-driven so it can be edited without touching layout:
- `src/data/cakes.json` — gallery entries
- `src/data/flavors.json` — cake / filling / frosting lists (feed the form too)
- `src/data/pricing.json` — the pricing table
