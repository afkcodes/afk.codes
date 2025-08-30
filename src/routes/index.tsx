import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import {
	Header,
	Hero,
} from "../components/sections";

// Lazy load all sections below the fold for optimal initial loading
const ExperienceSection = lazy(() => 
	import("../components/sections/ExperienceSection").then(module => ({ 
		default: module.ExperienceSection 
	}))
);

const ProjectsSection = lazy(() => 
	import("../components/sections/ProjectsSection").then(module => ({ 
		default: module.ProjectsSection 
	}))
);

const ContactSection = lazy(() => 
	import("../components/sections/ContactSection").then(module => ({ 
		default: module.ContactSection 
	}))
);

export const Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{
				title:
					"Ashish Kumar - Senior Frontend Engineer | React TypeScript Expert",
			},
			{
				name: "description",
				content:
					"Senior Frontend Engineer with 5+ years of experience in React, TypeScript, and modern web technologies. Currently building design systems at Allica Bank. Expert in scalable frontend architectures.",
			},
			{
				name: "keywords",
				content:
					"Ashish Kumar, Frontend Engineer, React Developer, TypeScript Expert, Design Systems, Component Libraries, Next.js, TanStack, Web Development, Senior Engineer, Allica Bank, Rakuten India",
			},
			{
				property: "og:title",
				content: "Ashish Kumar - Senior Frontend Engineer Portfolio",
			},
			{
				property: "og:description",
				content:
					"Experienced Frontend Engineer specializing in React, TypeScript, and design systems. View my projects, experience, and technical expertise.",
			},
			{
				property: "og:url",
				content: "https://afk.codes",
			},
			{
				name: "twitter:title",
				content: "Ashish Kumar - Senior Frontend Engineer",
			},
			{
				name: "twitter:description",
				content:
					"Senior Frontend Engineer building scalable React applications and design systems. Expert in TypeScript, Next.js, and modern web technologies.",
			},
		],
		links: [
			{
				rel: "canonical",
				href: "https://afk.codes",
			},
		],
	}),
	component: Portfolio,
});

function Portfolio() {
	return (
		<div className="min-h-screen bg-black text-white font-['JetBrains_Mono']">
			<Header />
			<Hero />
			<Suspense fallback={
				<div className="flex items-center justify-center py-20">
					<div className="text-zinc-400 text-sm">Loading experience...</div>
				</div>
			}>
				<ExperienceSection />
			</Suspense>
			<Suspense fallback={
				<div className="flex items-center justify-center py-20">
					<div className="text-zinc-400 text-sm">Loading projects...</div>
				</div>
			}>
				<ProjectsSection />
			</Suspense>
			<Suspense fallback={
				<div className="flex items-center justify-center py-20">
					<div className="text-zinc-400 text-sm">Loading contact section...</div>
				</div>
			}>
				<ContactSection />
			</Suspense>
		</div>
	);
}
