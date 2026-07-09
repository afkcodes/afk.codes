export const profile = {
	name: "Ashish Kumar",
	alias: "afkcodes",
	role: "Senior Frontend Engineer",
	specialty: "Design Systems",
	company: "Allica Bank",
	companyUrl: "https://www.allica.bank",
	location: "Bokaro, Jharkhand, India",
	timezone: "Asia/Kolkata",
	email: "mail.ashish.kmr@protonmail.com",
	startedYear: 2019,
	tagline:
		"Senior Frontend Engineer building design systems, component libraries and fast, accessible interfaces on the web.",
	bio: [
		"I'm a developer, an explorer, a music buff and a home cook. Currently I build and maintain the design system that powers every frontend team at Allica Bank — one component library, many products.",
		"I started out in 2019 writing JavaScript games, spent three years at Rakuten building the Rakuten Music web app and its component library, and have been obsessed with the space between design and engineering ever since.",
		"When I'm away from the keyboard, I'm probably grooving to 90s Bollywood or perfecting a recipe in the kitchen.",
	],
	social: {
		github: "https://github.com/afkcodes",
		linkedin: "https://www.linkedin.com/in/ashish-kumar-afk/",
	},
	resume: "/ashish_resume.pdf",
	avatar: "/ashish.webp",
	ogImage: "/og.png",
};

export interface Experience {
	from: string;
	to: string;
	role: string;
	company: string;
	tech: string[];
	description: string;
}

export const experiences: Experience[] = [
	{
		from: "2025",
		to: "NOW",
		role: "Senior Frontend Engineer — Design Systems",
		company: "Allica Bank",
		tech: ["React", "TypeScript", "Chakra UI", "Radix", "Ark UI"],
		description:
			"Building the component library used by every Allica frontend team, and leading development of its v2 on the latest tooling.",
	},
	{
		from: "2022",
		to: "2025",
		role: "Senior Software Engineer — Frontend",
		company: "Rakuten India",
		tech: [
			"TypeScript",
			"Next.js",
			"React Router",
			"TailwindCSS",
			"Vite",
			"Node.js",
		],
		description:
			"Built Rakuten Music web v2 from the ground up, led component library development and mentored engineers across the frontend guild.",
	},
	{
		from: "2021",
		to: "2022",
		role: "Frontend Engineer",
		company: "Learnq.ai",
		tech: ["TypeScript", "Next.js", "Redux", "Chakra UI", "React Native"],
		description:
			"Took the platform from concept to MVP, managed a team of four and shipped a 70% performance improvement along the way.",
	},
	{
		from: "2019",
		to: "2021",
		role: "Software Engineer — JavaScript Games",
		company: "HashCube",
		tech: ["JavaScript", "Game Closure", "Cocos2D JS", "Firebase"],
		description:
			"Rewrote games for 64-bit compatibility, built AdMob integrations and helped titles reach 10k daily downloads.",
	},
];

export interface Project {
	name: string;
	desc: string;
	tech: string[];
	github: string;
	deployed: string | null;
	status: "open source" | "live" | "maintained" | "wip" | "archived";
	featured: boolean;
}

export const projects: Project[] = [
	{
		name: "audio_x",
		desc: "A JavaScript audio library that speaks most popular formats. Queue, equalizer, media-session — batteries included.",
		tech: ["TypeScript", "Web Audio"],
		github: "https://github.com/afkcodes/audio_x",
		deployed: null,
		status: "open source",
		featured: true,
	},
	{
		name: "sunoh",
		desc: "A music and podcast player built with React Native, powered by audio_x.",
		tech: ["React Native", "TypeScript"],
		github: "https://github.com/afkcodes/sunoh",
		deployed: "https://sunoh.online",
		status: "live",
		featured: true,
	},
	{
		name: "flutter_phosphor_icons",
		desc: "Phosphor Icons wrapped for Flutter — thousands of crisp icons, one import away on pub.dev.",
		tech: ["Dart", "Flutter"],
		github: "https://github.com/afkcodes/flutter_phosphor_icons",
		deployed: "https://pub.dev/packages/flutter_phosphor_icons",
		status: "maintained",
		featured: true,
	},
	{
		name: "katha",
		desc: "An app for watching Indian mythological shows and videos.",
		tech: ["React Native", "Video"],
		github: "https://github.com/afkcodes/katha",
		deployed: null,
		status: "wip",
		featured: true,
	},
	{
		name: "free-dictionary-api",
		desc: "A free, open dictionary API for the web.",
		tech: ["Node.js", "API"],
		github: "https://github.com/afkcodes/free-dictionary-api",
		deployed: null,
		status: "wip",
		featured: false,
	},
	{
		name: "calendar",
		desc: "A clean calendar component built with React and TailwindCSS.",
		tech: ["React", "TailwindCSS"],
		github: "https://github.com/afkcodes/calendar",
		deployed: null,
		status: "archived",
		featured: false,
	},
];

export const skills: string[] = [
	"TypeScript",
	"React",
	"Design Systems",
	"Next.js",
	"Astro",
	"TailwindCSS",
	"Node.js",
	"React Native",
	"Radix",
	"Chakra UI",
	"Ark UI",
	"Vite",
	"Vitest",
	"GSAP",
	"Web Audio",
	"Flutter",
];

export const stats = [
	{ value: 7, suffix: "+", label: "years_shipping" },
	{ value: 4, suffix: "", label: "companies" },
	{ value: 250, suffix: "+", label: "github_stars" },
	{ value: 100, suffix: "%", label: "ds_adoption_at_allica" },
];
