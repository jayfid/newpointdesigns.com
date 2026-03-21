import { promises as fs } from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";
import { defineConfig } from "vite";

const inlineCssPlugin = (): Plugin => {
  return {
    name: "inline-css-into-html",
    apply: "build",
    async closeBundle() {
      const distDir = path.resolve("dist");
      const htmlPath = path.join(distDir, "index.html");
      const html = await fs.readFile(htmlPath, "utf8");
      const cssMatch = html.match(
        /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/,
      );

      if (!cssMatch) {
        return;
      }

      const cssHref = cssMatch[1];
      const cssPath = path.join(distDir, cssHref.replace(/^\//, ""));
      const css = await fs.readFile(cssPath, "utf8");
      const updatedHtml = html
        .replace(cssMatch[0], "")
        .replace("</head>", `  <style>${css.trim()}</style>\n  </head>`);

      await fs.writeFile(htmlPath, updatedHtml);
      await fs.unlink(cssPath);
    },
  };
};

export default defineConfig({
  plugins: [inlineCssPlugin()],
});
