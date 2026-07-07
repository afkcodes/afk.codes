// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	site: "https://afk.codes",
	output: "static",
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
	build: {
		inlineStylesheets: "auto",
	},
	compressHTML: true,
});
