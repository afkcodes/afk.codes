export interface Experience {
	year: string;
	role: string;
	company: string;
	tech: string[];
	description: string;
}

export interface Project {
	name: string;
	desc: string;
	tech: string[];
	github: string;
	deployed: string | null;
	status: string;
	impact?: string;
	featured: boolean;
}

export interface SkillGroup {
	category: string;
	items: string[];
	level: number;
}

export interface GitHubStats {
	totalStars: number;
	totalForks: number;
	followers: number;
	contributions: number;
	username: string;
}

export const experiences: Experience[] = [
	{
		year: "January 2025 – Present",
		role: "Senior Frontend Engineer - Design Systems",
		company: "Allica Bank",
		tech: ["React", "TypeScript", "Chakra UI", "Radix", "ARK", "v0"],
		description:
			"Building component library for entire Allica frontend teams, developing v2 with latest tooling.",
	},
	{
		year: "April 2022 – January 2025",
		role: "Senior Software Engineer - Frontend",
		company: "Rakuten India",
		tech: [
			"TypeScript",
			"Next.js",
			"React-Router",
			"TailwindCSS",
			"Vite",
			"Node.JS",
		],
		description:
			"Built Rakuten Music web app v2, led component library development, and mentored developers.",
	},
	{
		year: "March 2021 – March 2022",
		role: "Frontend Engineer",
		company: "Learnq.ai",
		tech: [
			"TypeScript",
			"Next.js",
			"Redux",
			"Chakra UI",
			"Node.JS",
			"React Native",
		],
		description:
			"Led platform development from concept to MVP, managed 4 developers, achieved 70% performance boost.",
	},
	{
		year: "March 2019 – March 2021",
		role: "Software Engineer - JavaScript Games",
		company: "HashCube",
		tech: [
			"JavaScript",
			"Game Closure",
			"Cocos2D JS",
			"Firebase",
			"React",
			"ASO",
		],
		description:
			"Rewrote games for 64-bit compatibility, developed AdMob integration, achieved 10k daily downloads.",
	},
];

export const projects: Project[] = [
	{
		name: "Audio_x",
		desc: "A JavaScript Audio library that supports most popular formats.",
		tech: ["JavaScript", "Web Audio", "TypeScript"],
		github: "https://github.com/afkcodes/audio_x",
		deployed: "https://github.com/afkcodes/audio_x",
		status: "Open Source",
		impact: "Check on Github",
		featured: true,
	},
	{
		name: "Sunoh",
		desc: "A music and podcast player built with React Native.",
		tech: ["React Native", "JavaScript", "Audio"],
		github: "https://github.com/afkcodes/sunoh",
		deployed: "https://sunoh.online",
		status: "Completed",
		featured: true,
	},
	{
		name: "Katha",
		desc: "An app for watching Indian Mythological Shows and Videos.",
		tech: ["React Native", "JavaScript", "Video"],
		github: "https://github.com/afkcodes/katha",
		deployed: null,
		status: "Coming Soon",
		featured: false,
	},
	{
		name: "Calendar",
		desc: "A Clean Calendar component built with React and TailwindCSS.",
		tech: ["React", "TypeScript", "TailwindCSS"],
		github: "https://github.com/afkcodes/calendar",
		deployed: "N/A",
		status: "Abandoned",
		featured: true,
	},
	{
		name: "Flutter Phosphor Icons",
		desc: "A Icon library on top of Phosphor Icons for flutter.",
		tech: ["Dart", "Flutter", "SVG"],
		github: "https://github.com/afkcodes/flutter_phosphor_icons",
		deployed: "https://pub.dev/packages/flutter_phosphor_icons",
		status: "Maintained",
		featured: true,
	},
	{
		name: "Free Dictionary API",
		desc: "A free dictionary api for the web.",
		tech: ["Node.js", "API", "Dictionary"],
		github: "https://github.com/afkcodes/free-dictionary-api",
		deployed: null,
		status: "Coming Soon",
		impact: "Coming Soon",
		featured: false,
	},
];

export const skills: SkillGroup[] = [
	{
		category: "Frontend",
		items: [
			"HTML",
			"CSS",
			"JavaScript",
			"TypeScript",
			"React",
			"Next.js",
			"TanStack Start",
			"TailwindCSS",
			"PandaCSS",
		],
		level: 95,
	},
	{
		category: "Backend & Tools",
		items: ["Node.js", "Vite", "Vitest", "Fastify", "Redux", "React Query"],
		level: 85,
	},
	{
		category: "UI Libraries",
		items: ["Shadcn", "Radix", "Chakra UI"],
		level: 90,
	},
	{
		category: "Development Tools",
		items: ["ESLint", "Prettier", "Firebase", "Flutter"],
		level: 90,
	},
	{
		category: "Mobile",
		items: ["React Native"],
		level: 80,
	},
];

export const githubStats: GitHubStats = {
	totalStars: 247,
	totalForks: 89,
	followers: 156,
	contributions: 1247,
	username: "afkcodes",
};
