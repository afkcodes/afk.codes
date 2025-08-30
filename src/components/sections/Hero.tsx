import { MapPin } from "lucide-react";
import { skills } from "../../data/portfolio";

export function Hero() {
	return (
		<section id="about" className="px-6 pt-16 pb-10 max-w-3xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
			<div className="space-y-8">
				<div className="inline-flex items-center gap-3 text-sm text-zinc-400 group cursor-default">
					<div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
					<span className="group-hover:text-zinc-200 transition-colors duration-300 font-medium tracking-tight">
						Available for opportunities
					</span>
				</div>

				{/* Professional Photo & Intro Section */}
				<div className="flex flex-col sm:flex-row items-start gap-8">
					<div className="flex-1 space-y-6">
						<div className="space-y-3">
							<h1 className="text-3xl sm:text-4xl font-light tracking-tighter bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent leading-[1.1] font-['JetBrains_Mono']">
								Ashish Kumar
							</h1>
							<p className="text-lg sm:text-xl text-zinc-300 font-light tracking-tight">
								Senior Frontend Engineer - Design Systems
							</p>
						</div>

						<p className="text-base text-zinc-400 leading-relaxed max-w-xl font-['Geist'] tracking-tight">
							Hey 👋 I'm a developer, an explorer, a music buff, and a home
							cook. Currently building design systems at&nbsp;
							<span className="text-zinc-300 font-medium">Allica Bank</span>.
							Started in 2019 with JavaScript games.
							<br />
							<br />
							When not coding, I'm grooving to 90s Bollywood or cooking.
							<span className="flex items-center gap-2 mt-3 text-sm text-zinc-500">
								<MapPin size={16} className="text-zinc-400" />
								Bokaro, Jharkhand, India
							</span>
						</p>
					</div>

					{/* Professional Photo */}
					<div className="flex-shrink-0">
						<div className="relative group">
							<div className="w-32 h-32 sm:w-40 sm:h-40 rounded-lg overflow-hidden shadow-lg shadow-black/20 group-hover:shadow-xl group-hover:shadow-black/30 transition-all duration-300">
								<img
									src="https://ik.imagekit.io/1uvbazlmc/IMG_8564-1.webp?tr=w-320,h-320"
									alt="Ashish Kumar - Senior Frontend Engineer"
									className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
								/>
							</div>
						</div>
					</div>
				</div>

				{/* CTA Buttons - More Compact */}
				<div className="flex flex-wrap gap-3">
					<a
						href="#contact"
						className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg font-medium hover:bg-zinc-100 transition-all duration-300 hover:scale-105 transform hover:shadow-lg hover:shadow-white/20 tracking-tight font-['Geist'] text-sm"
					>
						Let's Work Together
					</a>
					<a
						href="#projects"
						className="inline-flex items-center gap-2 border border-zinc-700 text-white px-5 py-2.5 rounded-lg font-medium hover:border-zinc-600 hover:bg-zinc-900/50 transition-all duration-300 tracking-tight font-['Geist'] text-sm"
					>
						View My Work
					</a>
					<a
						href="/resume.pdf"
						className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-all duration-300 px-4 py-2.5 rounded-lg hover:bg-zinc-900/50 font-medium tracking-tight font-['Geist'] text-sm"
					>
						Download CV
					</a>
				</div>

				{/* Quick Skills Preview */}
				<div className="border-t border-zinc-800/50 pt-6">
					<p className="text-sm text-zinc-500 tracking-tight font-['Geist'] mb-3">
						Specialized in
					</p>
					<div className="flex flex-wrap gap-2">
						{skills.map((skillGroup) =>
							skillGroup.items.map((skill) => (
								<span
									key={skill}
									className="text-xs px-3 py-1.5 bg-zinc-900/60 text-zinc-300 rounded-lg border border-zinc-800/40 font-medium tracking-tight font-['Geist_Mono']"
								>
									{skill}
								</span>
							)),
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
