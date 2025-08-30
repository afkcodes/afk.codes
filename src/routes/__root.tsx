import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { ReactLenis } from "lenis/react";
import { Partytown } from "@qwik.dev/partytown/react";
import { WebVitals } from "../components/WebVitals";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title:
					"Ashish Kumar - Senior Frontend Engineer | React TypeScript Expert",
			},
			{
				name: "description",
				content:
					"Senior Frontend Engineer specializing in React, TypeScript, and modern web technologies. Building scalable design systems and applications. Expert in Next.js, TanStack, and component libraries.",
			},
			// Open Graph tags
			{
				property: "og:title",
				content:
					"Ashish Kumar - Senior Frontend Engineer | React TypeScript Expert",
			},
			{
				property: "og:description",
				content:
					"Senior Frontend Engineer specializing in React, TypeScript, and modern web technologies. Building scalable design systems and applications.",
			},
			{
				property: "og:type",
				content: "website",
			},
			{
				property: "og:url",
				content: "https://afk.codes",
			},
			{
				property: "og:image",
				content:
					"https://ik.imagekit.io/1uvbazlmc/IMG_8564-1.webp?tr=w-1200,h-630",
			},
			{
				property: "og:image:width",
				content: "1200",
			},
			{
				property: "og:image:height",
				content: "630",
			},
			{
				property: "og:site_name",
				content: "AFK Codes",
			},
			// Twitter Card tags
			{
				name: "twitter:card",
				content: "summary_large_image",
			},
			{
				name: "twitter:creator",
				content: "@afkcodes",
			},
			{
				name: "twitter:title",
				content: "Ashish Kumar - Senior Frontend Engineer",
			},
			{
				name: "twitter:description",
				content:
					"Senior Frontend Engineer specializing in React, TypeScript, and modern web technologies.",
			},
			{
				name: "twitter:image",
				content:
					"https://ik.imagekit.io/1uvbazlmc/IMG_8564-1.webp?tr=w-1200,h-630",
			},
			// Additional SEO tags
			{
				name: "keywords",
				content:
					"Frontend Engineer, React Developer, TypeScript, JavaScript, Next.js, TanStack, Design Systems, Component Libraries, Web Development, Senior Engineer, Allica Bank, Rakuten",
			},
			{
				name: "author",
				content: "Ashish Kumar",
			},
			{
				name: "robots",
				content: "index, follow",
			},
			{
				name: "googlebot",
				content:
					"index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1",
			},
			// Theme and mobile optimization
			{
				name: "theme-color",
				content: "#000000",
			},
			{
				name: "msapplication-TileColor",
				content: "#000000",
			},
			{
				name: "mobile-web-app-capable",
				content: "yes",
			},
			{
				name: "apple-mobile-web-app-status-bar-style",
				content: "black-translucent",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com",
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous",
			},
			{
				rel: "dns-prefetch",
				href: "https://ik.imagekit.io",
			},
			{
				rel: "dns-prefetch",
				href: "https://ghchart.rshah.org",
			},
			{
				rel: "preload",
				href: "https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap",
				as: "style",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap",
			},
			{
				rel: "canonical",
				href: "https://afk.codes",
			},
			{
				rel: "icon",
				type: "image/x-icon",
				href: "/favicon.svg",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/favicon.svg",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/favicon.svg",
			},
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/favicon.svg",
			},
			{
				rel: "dns-prefetch",
				href: "https://github.com",
			},
			{
				rel: "dns-prefetch",
				href: "https://api.github.com",
			},
		],
	}),

	shellComponent: RootDocument,

	notFoundComponent: () => (
		<div className="min-h-screen bg-black text-white font-['JetBrains_Mono'] flex items-center justify-center">
			<div className="max-w-md px-6 mx-auto space-y-6 text-center">
				<div className="space-y-2">
					<h1 className="text-6xl font-bold text-zinc-300">404</h1>
					<h2 className="text-xl font-medium text-zinc-200 tracking-tight font-['Geist']">
						Page Not Found
					</h2>
				</div>
				<p className="text-zinc-300 leading-relaxed font-['Geist'] tracking-tight">
					The page you're looking for doesn't exist. It might have been moved or
					deleted.
				</p>
				<a
					href="/"
					className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-zinc-100 transition-all duration-300 hover:scale-105 transform hover:shadow-lg hover:shadow-white/20 tracking-tight font-['Geist'] text-sm"
				>
					← Back to Home
				</a>
			</div>
		</div>
	),
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
				<Partytown 
					debug={true}
					forward={["dataLayer.push", "gtag", "gtag.config", "gtag.event"]}
				/>
				<script
					type="text/partytown"
					src="https://www.googletagmanager.com/gtag/js?id=G-00ZDLV4JQ0"
				/>
				<script
					type="text/partytown"
					src="/gtag.js"
				/>
				<link rel="preload" href={appCss} as="style" />
			</head>
			<body>
				<ReactLenis
					root
					options={{
						duration: 1.2,
						autoRaf: true,
						anchors: true,
						smoothWheel: true,
						syncTouch: true,
						touchMultiplier: 2,
					}}
				>
					{children}
				</ReactLenis>
				<WebVitals />
				<Scripts />
			</body>
		</html>
	);
}
