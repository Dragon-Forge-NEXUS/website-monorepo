import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.dragonforgenexus.xyz',
  prefetch: {
    prefetchAll: true
  },
  integrations: [sitemap(), tailwind(), mdx()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});