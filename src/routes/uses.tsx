import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/uses")({
	head: () => ({
		meta: [
			{
				title: "Uses - Tools & Technologies | Ashish Kumar",
			},
			{
				name: "description",
				content:
					"Complete list of tools, technologies, and gear I use as a Senior Frontend Engineer. Including development tools, hardware, browser extensions, and productivity apps.",
			},
			{
				name: "keywords",
				content:
					"Developer Tools, Frontend Development Tools, VSCode, React Tools, TypeScript Tools, MacBook Pro, Development Setup, Programming Gear, Browser Extensions",
			},
			{
				property: "og:title",
				content: "Uses - Tools & Technologies | Ashish Kumar",
			},
			{
				property: "og:description",
				content:
					"Discover the tools, technologies, and gear used by a Senior Frontend Engineer for React and TypeScript development.",
			},
			{
				property: "og:url",
				content: "https://afk.codes/uses",
			},
			{
				name: "twitter:title",
				content: "Developer Tools & Setup | Ashish Kumar",
			},
			{
				name: "twitter:description",
				content:
					"Complete setup and tools used for React, TypeScript, and frontend development by a Senior Engineer.",
			},
		],
		links: [
			{
				rel: "canonical",
				href: "https://afk.codes/uses",
			},
		],
	}),
	component: RouteComponent,
});

export type Gear = Array<{
	header: string;
	items: Array<{
		name: string;
		url: string;
	}>;
}>;

const gearsMap: Gear = [
	{
		header: "Gears",
		items: [
			{
				name: "Acer Aspire 5s (Linux)",
				url: "https://www.flipkart.com/acer-aspire-5s-core-i5-8th-gen-8-gb-1-tb-hdd-windows-10-home-a515-52-laptop/p/itmfdvfhnbbxbqpt",
			},
			{
				name: "Macbook Pro M4 PRO",
				url: "https://www.apple.com/in/shop/buy-mac/macbook-pro",
			},
			{
				name: "Garmin Venu SQ 2",
				url: "https://www.amazon.in/Garmin-Venu-Sq-Shadow-Slate/dp/B0BD57PMSX/ref=sr_1_1_sspa?adgrpid=68068634520&ext_vrnc=hi&gclid=EAIaIQobChMI-fnF29iJgwMVJyx7Bx3X1wmAEAAYASAAEgJLK_D_BwE&hvadid=590712392375&hvdev=c&hvlocphy=9062029&hvnetw=g&hvqmt=e&hvrand=17987340753503320124&hvtargid=kwd-1137383909038&hydadcr=24567_2265462&keywords=garmin+venu+sq+2&qid=1702377055&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
			},
		],
	},
	{
		header: "Desktop Apps",
		items: [
			{
				name: "Visual Studio Code",
				url: "https://code.visualstudio.com/",
			},
			{
				name: "Zed",
				url: "https://zed.dev/",
			},
			{
				name: "Google Chrome",
				url: "https://www.google.com/chrome/",
			},
			{
				name: "Firefox",
				url: "https://www.mozilla.org/en-US/firefox/developer/",
			},
			{
				name: "Postman",
				url: "https://www.postman.com/",
			},
			{
				name: "Figma",
				url: "https://www.figma.com/",
			},
			{
				name: "Slack",
				url: "https://slack.com/intl/en-in",
			},
			{
				name: "Spotify",
				url: "https://open.spotify.com",
			},
			{
				name: "Proton VPN",
				url: "https://protonvpn.com/download",
			},
		],
	},
	{
		header: "Mobile Apps",
		items: [
			{
				name: "Cromite - Privacy enabled chrome",
				url: "https://github.com/uazo/cromite",
			},
			{
				name: "Discord",
				url: "https://play.google.com/store/apps/details?id=com.discord&hl=en&gl=US",
			},
			{
				name: "Reddit",
				url: "https://play.google.com/store/apps/details?id=com.reddit.frontpage&hl=en&gl=US",
			},
			{
				name: "Adobe Scan",
				url: "https://play.google.com/store/apps/details?id=com.adobe.scan.android&hl=en&gl=US",
			},
			{
				name: "Proton VPN",
				url: "https://protonvpn.com/download",
			},
			{
				name: "Proton Mail",
				url: "https://proton.me/mail",
			},
			{
				name: "Apple Music",
				url: "https://play.google.com/store/apps/details?id=com.apple.android.music&hl=en-IN",
			},
			{
				name: "Sunoh Music",
				url: "https://sunoh.online/",
			},
			{
				name: "Stremio",
				url: "https://www.stremio.com/",
			},

			{
				name: "Strava",
				url: "https://play.google.com/store/apps/details?id=com.strava&hl=en-IN",
			},
		],
	},
	{
		header: "Learning",
		items: [
			{
				name: "Frontend Masters",
				url: "https://frontendmasters.com",
			},
		],
	},
	{
		header: "Entertainment",
		items: [
			{
				name: "Soundcore Q35",
				url: "https://www.flipkart.com/soundcore-anker-life-q35-targeted-active-noise-cancellation-enabled-bluetooth-headset/p/itm2edc39c53f8c9",
			},
			{
				name: "Motorola Buds Plus",
				url: "https://www.flipkart.com/moto-buds-sound-bose-dual-dynamic-drivers-48db-anc-dolby-head-tracking-bluetooth/p/itm5ea1bc405eee3?pid=ACCHY2KFK4EXGTYN&lid=LSTACCHY2KFK4EXGTYNDGCVUG&marketplace=FLIPKART&q=moto+buds%2B&store=0pm%2Ffcn%2F821%2Fa7x%2F2si&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_2_7_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_2_7_na_na_ps&fm=search-autosuggest&iid=f1ba0143-fecf-4530-a9c4-a6631e8f8fc9.ACCHY2KFK4EXGTYN.SEARCH&ppt=sp&ppn=sp&ssid=qme0p1miao0000001756534772770&qH=07cb771f95706da4",
			},
			{
				name: "Soundcore Liberty Air 2 Pro",
				url: "https://www.flipkart.com/soundcore-anker-liberty-air-2-pro-active-noise-cancellation-bluetooth-headset/p/itm998fdbaa17aa1?q=soundcore&qH=331d0cee01a203f8",
			},
			{
				name: "Soundcore Motion X600",
				url: "https://us.soundcore.com/products/motion-x600-a3130011",
			},
			{
				name: "Soundcore Motion 300",
				url: "https://us.soundcore.com/products/motion-300-speaker-a3135011",
			},
			{
				name: "Mi Smart Speaker",
				url: "https://www.flipkart.com/mi-smart-speaker-google-assistant/p/itmc7434534b8b84",
			},
			{
				name: "KZ - ZEX",
				url: "https://www.headphonezone.in/products/kz-zex?_pos=1&_sid=a59a207c5&_ss=r&variant=40942009909436",
			},
			{
				name: "KZ - Ling Long",
				url: "https://www.headphonezone.in/products/kz-ling-long",
			},
		],
	},
];

function RouteComponent() {
	return (
		<div className="min-h-screen bg-black text-white font-['JetBrains_Mono']">
			<div className="px-6 py-16 max-w-3xl mx-auto">
				<div className="space-y-12">
					{/* Header */}
					<div className="space-y-4">
						<h1 className="text-3xl sm:text-4xl font-light tracking-tighter bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent leading-[1.1] font-['JetBrains_Mono']">
							Uses
						</h1>
						<p className="text-base text-zinc-400 leading-relaxed max-w-xl font-['Geist'] tracking-tight">
							Here's a list of tools, apps, and gear I use daily to build
							software and stay productive.
						</p>
					</div>

					{/* Gear Sections */}
					<div className="space-y-12">
						{gearsMap.map((section) => (
							<div key={section.header} className="space-y-6">
								<h2 className="text-xl font-medium text-zinc-50 tracking-tight font-['Geist']">
									{section.header}
								</h2>
								<div className="space-y-2">
									{section.items.map((item) => (
										<a
											key={item.name}
											href={item.url}
											target="_blank"
											rel="noopener noreferrer"
											className="group flex items-center justify-between py-3 hover:text-zinc-300 transition-colors duration-200"
										>
											<span className="text-sm text-zinc-400 group-hover:text-zinc-200 font-['Geist']">
												{item.name}
											</span>
											<ExternalLink
												size={14}
												className="text-zinc-600 group-hover:text-zinc-400 transition-colors duration-200"
											/>
										</a>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
