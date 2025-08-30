import { Briefcase } from "lucide-react";
import type { Experience } from "../../data/portfolio";
import { experiences } from "../../data/portfolio";

interface ExperienceCardProps {
	experience: Experience;
	index: number;
}

function ExperienceCard({ experience, index }: ExperienceCardProps) {
	return (
		<div
			className="group hover:bg-zinc-950/50 rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-black/10 border border-transparent hover:border-zinc-800/50 space-y-4"
			style={{
				animationDelay: `${index * 0.1}s`,
			}}
		>
			<div className="flex justify-between items-start">
				<div className="space-y-1">
					<h3 className="font-semibold text-white group-hover:text-zinc-50 text-base tracking-tight font-['Geist']">
						{experience.role}
					</h3>
					<p className="text-zinc-300 group-hover:text-zinc-200 font-medium tracking-tight text-sm">
						{experience.company}
					</p>
				</div>
				<span className="text-sm text-zinc-500 shrink-0 font-['Geist_Mono'] font-medium tracking-wider bg-zinc-900/50 px-3 py-1.5 rounded-lg border border-zinc-800">
					{experience.year}
				</span>
			</div>

			<p className="text-sm text-zinc-400 leading-relaxed tracking-tight font-['Geist'] max-w-lg">
				{experience.description}
			</p>

			<div className="flex gap-2 flex-wrap">
				{experience.tech.map((tech) => (
					<span
						key={tech}
						className="text-xs px-3 py-1.5 bg-zinc-900/80 text-zinc-300 rounded-lg border border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-800/80 transition-all duration-200 font-medium tracking-tight font-['Geist_Mono']"
					>
						{tech}
					</span>
				))}
			</div>
		</div>
	);
}

export function ExperienceSection() {
	return (
		<section
			id="experience"
			className="px-6 py-16 max-w-3xl xl:max-w-5xl 2xl:max-w-6xl mx-auto border-t border-zinc-800/50"
		>
			<div className="space-y-8">
				<div className="flex items-center gap-4">
					<Briefcase size={20} className="text-zinc-300" />
					<h2 className="text-xl font-medium text-zinc-50 tracking-tight font-['Geist']">
						Experience
					</h2>
				</div>

				<div className="space-y-6">
					{experiences.map((exp, index) => (
						<ExperienceCard key={exp.company} experience={exp} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}
