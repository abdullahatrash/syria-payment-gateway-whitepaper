import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://abdullahatrash.github.io',
  base: '/syria-payment-gateway-whitepaper',
  integrations: [mdx()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    routing: {
      prefixDefaultLocale: true
    }
  }
}); 
