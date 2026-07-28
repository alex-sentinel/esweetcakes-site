import { defineConfig } from 'astro/config';

// Static build. Output goes to ./dist and can be uploaded as-is to S3 + CloudFront.
// TODO: set `site` to the real domain once it exists, e.g. 'https://essweetcakes.com'
export default defineConfig({
  output: 'static',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  build: {
    // Keep asset paths relative-friendly for S3/CloudFront hosting.
    assets: '_assets',
  },
  image: {
    // Sharp is the default image service; declared here for clarity.
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
