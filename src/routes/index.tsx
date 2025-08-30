import { createFileRoute } from "@tanstack/react-router";
import {
	ContactSection,
	ExperienceSection,
	Header,
	Hero,
	ProjectsSection,
} from "../components/sections";

export const Route = createFileRoute("/")({
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
