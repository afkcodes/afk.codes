import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function Header() {
	const [activeSection, setActiveSection] = useState("about");

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;

			// Get all sections
			const experienceEl = document.getElementById("experience");
			const projectsEl = document.getElementById("projects");
			const contactEl = document.getElementById("contact");

			// If we're near the bottom of the page, always show contact
			if (scrollY + windowHeight >= documentHeight - 100) {
				setActiveSection("contact");
				return;
			}

			// Otherwise, check which section we're closest to
			if (contactEl) {
				const contactTop = contactEl.offsetTop;
				if (scrollY >= contactTop - 200) {
					setActiveSection("contact");
					return;
				}
			}

			if (projectsEl) {
				const projectsTop = projectsEl.offsetTop;
				if (scrollY >= projectsTop - 200) {
					setActiveSection("projects");
					return;
				}
			}

			if (experienceEl) {
				const experienceTop = experienceEl.offsetTop;
				if (scrollY >= experienceTop - 200) {
					setActiveSection("experience");
					return;
				}
			}

			// Default to about
			setActiveSection("about");
		};

		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const getLinkClassName = (section: string) => {
		const baseClasses =
			"transition-all duration-200 px-3 py-1.5 rounded-full font-medium tracking-tight backdrop-blur-sm border";
		return activeSection === section
			? `${baseClasses} text-white bg-white/15 border-white/20`
			: `${baseClasses} text-white/70 hover:text-white hover:bg-white/10 border-transparent`;
	};

	return (
		<div className="sticky top-0 left-0 right-0 z-50 flex justify-center px-6 pt-8 pb-4">
			<header className="w-full max-w-3xl xl:max-w-5xl 2xl:max-w-6xl">
				<div className="bg-black/20 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-3 shadow-2xl shadow-black/40 hover:shadow-black/60 transition-all duration-300 mx-auto w-fit hover:bg-black/30 hover:border-white/20">
					<div className="flex items-center gap-8">
						<div className="flex items-center gap-3">
							<span className="text-sm font-medium text-white/90 font-['JetBrains_Mono'] italic tracking-tight drop-shadow-sm">
								afk.codes
							</span>
						</div>
						<nav className="flex items-center gap-6 text-sm">
							<a href="#about" className={getLinkClassName("about")}>
								About
							</a>
							<a href="#experience" className={getLinkClassName("experience")}>
								Experience
							</a>
							<a href="#projects" className={getLinkClassName("projects")}>
								Projects
							</a>
							<Link
								to="/uses"
								className="text-white/70 hover:text-white transition-all duration-200 px-3 py-1.5 rounded-full hover:bg-white/10 font-medium tracking-tight backdrop-blur-sm"
							>
								Uses
							</Link>
							<a href="#contact" className={getLinkClassName("contact")}>
								Contact
							</a>
						</nav>
					</div>
				</div>
			</header>
		</div>
	);
}
