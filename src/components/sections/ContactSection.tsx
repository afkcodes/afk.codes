import { Github, Mail } from "lucide-react";
import { githubStats } from "../../data/portfolio";

export function ContactSection() {
	return (
		<footer
			id="contact"
			className="px-6 py-16 max-w-3xl xl:max-w-5xl 2xl:max-w-6xl mx-auto border-t border-zinc-800/50"
		>
			<div className="text-center space-y-6">
				<div className="space-y-3">
					<h3 className="text-2xl font-medium text-zinc-50 mb-4 tracking-tight font-['Geist']">
						Let's Build Something Amazing
					</h3>
					<p className="text-zinc-300 text-base mb-2 tracking-tight font-['Geist'] max-w-md mx-auto">
						I'm always excited to work on new challenges and innovative projects
					</p>
					<p className="text-zinc-500 text-sm tracking-tight">
						Available for freelance • Open to full-time opportunities
					</p>
				</div>

				{/* Enhanced Contact Buttons - More Compact */}
				<div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
					<a
						href="mailto:mail.ashish.tech@gmail.com"
						className="inline-flex items-center gap-2 bg-white text-black hover:bg-zinc-100 transition-all duration-300 hover:scale-105 transform px-6 py-3 rounded-lg font-medium tracking-tight font-['Geist'] hover:shadow-lg hover:shadow-white/20 text-sm"
					>
						<Mail size={16} />
						Send me an email
					</a>
					<a
						href={`https://github.com/${githubStats.username}`}
						className="inline-flex items-center gap-2 text-white hover:text-zinc-100 transition-all duration-300 hover:scale-105 transform border border-zinc-700 hover:border-zinc-600 px-6 py-3 rounded-lg hover:bg-zinc-900/50 font-medium tracking-tight font-['Geist'] hover:shadow-lg hover:shadow-black/20 text-sm"
					>
						<Github size={16} />
						Check my GitHub
					</a>
				</div>

				{/* Simple Footer */}
				<div className="pt-8 border-t border-zinc-900/60">
					<p className="text-zinc-600 text-sm tracking-tight font-['Geist_Mono']">
						© 2025 Ashish Kumar • Built with{" "}
						<span className="text-zinc-500 font-medium">TanStack Start</span> &{" "}
						<span className="text-zinc-500 font-medium">Tailwind CSS</span>
					</p>
				</div>
			</div>
		</footer>
	);
}
