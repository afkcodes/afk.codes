import { createFileRoute } from "@tanstack/react-router";
import {
	ContactSection,
	ExperienceSection,
	Header,
	Hero,
	ProjectsSection,
} from "../components/sections";

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
			<ExperienceSection />
			<ProjectsSection />
			<ContactSection />
		</div>
	);
}
