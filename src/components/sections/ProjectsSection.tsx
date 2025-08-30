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
			className="group space-y-4 p-5 hover:bg-zinc-950/30 rounded-xl transition-all duration-300 border border-transparent hover:border-zinc-800/50"
			style={{
				animationDelay: `${index * 0.1}s`,
			}}
		>
			<div className="flex justify-between items-start">
				<div className="space-y-2">
					<h3 className="font-semibold text-white group-hover:text-zinc-50 text-base tracking-tight font-['Geist']">
						{project.name}
					</h3>
					<p className="text-sm text-zinc-400 leading-relaxed tracking-tight font-['Geist'] max-w-md">
						{project.desc}
					</p>
				</div>
				<div className="flex items-center gap-2 shrink-0">
					<a
						href={project.github}
						className="text-zinc-500 hover:text-white transition-all duration-300 hover:scale-110 transform group/link p-2 rounded-lg hover:bg-zinc-900/50"
						title="View on GitHub"
					>
						<Github
							size={16}
							className="group-hover/link:rotate-12 transition-transform duration-300"
						/>
					</a>
					{project.deployed && (
						<a
							href={project.deployed}
							className="text-zinc-500 hover:text-white transition-all duration-300 hover:scale-110 transform group/link p-2 rounded-lg hover:bg-zinc-900/50"
							title="View project"
						>
							<ExternalLink
								size={16}
								className="group-hover/link:rotate-12 transition-transform duration-300"
							/>
						</a>
					)}
				</div>
			</div>

			<div className="flex gap-2 flex-wrap">
				{project.tech.map((tech) => (
					<span
						key={tech}
						className="text-xs px-3 py-1.5 bg-zinc-900/60 text-zinc-300 rounded-lg border border-zinc-800/40 hover:border-zinc-700 hover:bg-zinc-800/60 transition-all duration-200 font-medium tracking-tight font-['Geist_Mono']"
					>
						{tech}
					</span>
				))}
			</div>

			<div className="flex items-center justify-between">
				<span className="text-xs text-zinc-500 bg-zinc-900/50 px-2.5 py-1 rounded-lg border border-zinc-800 font-medium tracking-tight font-['Geist_Mono']">
					{project.status}
				</span>
				{project.impact && (
					<span className="text-xs text-zinc-400 font-medium tracking-tight font-['Geist']">
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
			className="px-6 py-16 max-w-3xl xl:max-w-5xl 2xl:max-w-6xl mx-auto border-t border-zinc-800/50"
		>
			<div className="space-y-8">
				<div className="flex items-center gap-4">
					<Code size={20} className="text-zinc-300" />
					<h2 className="text-xl font-medium text-zinc-50 tracking-tight font-['Geist']">
						Projects
					</h2>
				</div>

				<div className="space-y-6">
					{projects.map((project, index) => (
						<ProjectCard key={project.name} project={project} index={index} />
					))}

					{/* GitHub Activity - Simplified */}
					<div className="mt-12 pt-8 border-t border-zinc-800/50">
						<div className="space-y-4">
							<h3 className="text-xl font-medium text-zinc-50 tracking-tight font-['Geist'] flex items-center gap-3">
								<Github size={20} className="text-zinc-300" />
								GitHub Activity
							</h3>

							{/* GitHub Contribution Chart */}
							<div className="bg-zinc-900/30 rounded-lg p-4 border border-zinc-800/40 overflow-hidden">
								<img
									src={`https://ghchart.rshah.org/409c43/${githubStats.username}`}
									alt="GitHub Contribution Chart"
									className="w-full h-auto rounded"
									style={{
										filter: "brightness(0.9) contrast(1.1)",
									}}
								/>
							</div>

							<a
								href={`https://github.com/${githubStats.username}`}
								className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors duration-200 font-medium tracking-tight font-['Geist']"
							>
								<Github size={16} />
								View GitHub Profile
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
