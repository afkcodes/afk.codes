import { Code, ExternalLink, Github } from "lucide-react";
import type { Project } from "../../data/portfolio";
import { githubStats, projects } from "../../data/portfolio";

interface ProjectCardProps {
	project: Project;
	index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
	return (
		<div
			className="group space-y-3 sm:space-y-4 p-4 sm:p-5 hover:bg-zinc-950/30 rounded-xl transition-all duration-300 border border-transparent hover:border-zinc-800/50"
			style={{
				animationDelay: `${index * 0.1}s`,
			}}
		>
			<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-0">
				<div className="space-y-2">
					<h3 className="font-semibold text-white group-hover:text-zinc-50 text-sm sm:text-base tracking-tight font-['Geist']">
						{project.name}
					</h3>
					<p className="text-xs sm:text-sm text-zinc-300 leading-relaxed tracking-tight font-['Geist'] max-w-md">
						{project.desc}
					</p>
				</div>
				<div className="flex items-center gap-2 shrink-0 self-start">
					<a
						href={project.github}
						className="text-zinc-300 hover:text-white transition-all duration-300 hover:scale-110 transform group/link p-1.5 sm:p-2 rounded-lg hover:bg-zinc-900/50"
						title="View on GitHub"
					>
						<Github
							size={14}
							className="group-hover/link:rotate-12 transition-transform duration-300 sm:w-4 sm:h-4"
						/>
					</a>
					{project.deployed && (
						<a
							href={project.deployed}
							className="text-zinc-300 hover:text-white transition-all duration-300 hover:scale-110 transform group/link p-1.5 sm:p-2 rounded-lg hover:bg-zinc-900/50"
							title="View project"
						>
							<ExternalLink
								size={14}
								className="group-hover/link:rotate-12 transition-transform duration-300 sm:w-4 sm:h-4"
							/>
						</a>
					)}
				</div>
			</div>

			<div className="flex gap-1.5 sm:gap-2 flex-wrap">
				{project.tech.map((tech) => (
					<span
						key={tech}
						className="text-xs px-2 sm:px-3 py-1 sm:py-1.5 bg-zinc-900/60 text-zinc-200 rounded-lg border border-zinc-800/40 hover:border-zinc-700 hover:bg-zinc-800/60 transition-all duration-200 font-medium tracking-tight font-['Geist_Mono']"
					>
						{tech}
					</span>
				))}
			</div>

			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
				<span className="text-xs text-zinc-300 bg-zinc-900/50 px-2 sm:px-2.5 py-1 rounded-lg border border-zinc-800 font-medium tracking-tight font-['Geist_Mono'] self-start">
					{project.status}
				</span>
				{project.impact && (
					<span className="text-xs text-zinc-300 font-medium tracking-tight font-['Geist']">
						{project.impact}
					</span>
				)}
			</div>
		</div>
	);
}

export function ProjectsSection() {
	return (
		<section
			id="projects"
			className="px-4 sm:px-6 py-12 sm:py-16 max-w-3xl xl:max-w-5xl 2xl:max-w-6xl mx-auto border-t border-zinc-800/50"
		>
			<div className="space-y-6 sm:space-y-8">
				<div className="flex items-center gap-3 sm:gap-4">
					<Code size={18} className="text-zinc-300 sm:w-5 sm:h-5" />
					<h2 className="text-lg sm:text-xl font-medium text-zinc-50 tracking-tight font-['Geist']">
						Projects
					</h2>
				</div>

				<div className="space-y-4 sm:space-y-6">
					{projects.map((project, index) => (
						<ProjectCard key={project.name} project={project} index={index} />
					))}

					{/* GitHub Activity - Simplified */}
					<div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-zinc-800/50">
						<div className="space-y-3 sm:space-y-4">
							<h3 className="text-lg sm:text-xl font-medium text-zinc-50 tracking-tight font-['Geist'] flex items-center gap-2 sm:gap-3">
								<Github size={18} className="text-zinc-300 sm:w-5 sm:h-5" />
								GitHub Activity
							</h3>

							{/* GitHub Contribution Chart */}
							<div className="bg-zinc-900/30 rounded-lg p-3 sm:p-4 border border-zinc-800/40 overflow-hidden">
								<img
									src={`https://ghchart.rshah.org/409c43/${githubStats.username}`}
									alt="GitHub Contribution Chart"
									width="722"
									height="112"
									className="w-full h-auto rounded"
									style={{
										filter: "brightness(0.9) contrast(1.1)",
									}}
									loading="lazy"
									decoding="async"
								/>
							</div>

							<a
								href={`https://github.com/${githubStats.username}`}
								className="inline-flex items-center gap-2 text-xs sm:text-sm text-zinc-300 hover:text-white transition-colors duration-200 font-medium tracking-tight font-['Geist']"
							>
								<Github size={14} className="sm:w-4 sm:h-4" />
								View GitHub Profile
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
