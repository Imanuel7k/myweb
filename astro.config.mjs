import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  site: "https://aleph1.top",
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap()],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
      smartypants: false,
      remarkRehype: {
        footnoteLabel: "脚注",
        footnoteBackLabel: "返回正文",
      },
    }),
    shikiConfig: {
      theme: "github-dark-default",
      wrap: true,
    },
  },
});
