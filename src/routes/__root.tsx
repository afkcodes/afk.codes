import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { ReactLenis } from "lenis/react";

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
				title: "Ashish Kumar - Senior Frontend Engineer",
			},
			{
				name: "description",
				content:
					"Senior Frontend Engineer specializing in React, TypeScript, and modern web technologies. Building scalable applications at Rakuten India.",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),

	shellComponent: RootDocument,

	notFoundComponent: () => (
		<div className="min-h-screen bg-black text-white font-['JetBrains_Mono'] flex items-center justify-center">
			<div className="text-center space-y-6 max-w-md mx-auto px-6">
				<div className="space-y-2">
					<h1 className="text-6xl font-bold text-zinc-300">404</h1>
					<h2 className="text-xl font-medium text-zinc-200 tracking-tight font-['Geist']">
						Page Not Found
					</h2>
				</div>
				<p className="text-zinc-400 leading-relaxed font-['Geist'] tracking-tight">
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
			</head>
			<body>
				<ReactLenis
					root
					options={{
						duration: 1.2,
						autoRaf: true,
						anchors: true,
					}}
				>
					{children}
				</ReactLenis>

				<Scripts />
			</body>
		</html>
	);
}
