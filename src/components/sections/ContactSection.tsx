import { Github, Mail } from "lucide-react";
import { githubStats } from "../../data/portfolio";

export function ContactSection() {
	return (
		<footer
			id="contact"
			className="max-w-3xl px-4 sm:px-6 py-12 sm:py-16 mx-auto border-t xl:max-w-5xl 2xl:max-w-6xl border-zinc-800/50"
		>
			<div className="space-y-5 sm:space-y-6 text-center">
				<div className="space-y-2 sm:space-y-3">
					<h3 className="text-xl sm:text-2xl font-medium text-zinc-50 mb-3 sm:mb-4 tracking-tight font-['Geist']">
						Let's Build Something Amazing
					</h3>
					<p className="text-zinc-300 text-sm sm:text-base mb-2 tracking-tight font-['Geist'] max-w-md mx-auto px-4 sm:px-0">
						I'm always excited to work on new challenges and innovative projects
					</p>
					<p className="text-xs sm:text-sm tracking-tight text-zinc-300">
						Available for freelance • Open to full-time opportunities
					</p>
				</div>

				{/* Enhanced Contact Buttons - More Compact */}
				<div className="flex flex-col justify-center gap-3 pt-3 sm:pt-4 sm:flex-row px-4 sm:px-0">
					<a
						href="mailto:mail.ashish.kmr@protonmail.com"
						className="inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-zinc-100 transition-all duration-300 hover:scale-105 transform px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium tracking-tight font-['Geist'] hover:shadow-lg hover:shadow-white/20 text-sm"
					>
						<Mail size={14} className="sm:w-4 sm:h-4" />
						Send me an email
					</a>
					<a
						href={`https://github.com/${githubStats.username}`}
						className="inline-flex items-center justify-center gap-2 text-white hover:text-zinc-100 transition-all duration-300 hover:scale-105 transform border border-zinc-700 hover:border-zinc-600 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-zinc-900/50 font-medium tracking-tight font-['Geist'] hover:shadow-lg hover:shadow-black/20 text-sm"
					>
						<Github size={14} className="sm:w-4 sm:h-4" />
						Check my GitHub
					</a>
				</div>

				{/* Simple Footer */}
				<div className="pt-6 sm:pt-8 border-t border-zinc-900/60">
					<p className="text-zinc-400 text-xs sm:text-sm tracking-tight font-['Geist_Mono'] px-4 sm:px-0">
						© 2025 Ashish Kumar • Built with{" "}
						<span className="font-medium text-zinc-300">TanStack Start</span> &{" "}
						<span className="font-medium text-zinc-300">Tailwind CSS</span>
					</p>
				</div>
			</div>
		</footer>
	);
}
