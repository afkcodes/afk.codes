// Status configuration for the header
export interface Status {
	id: string;
	text: string;
	icon?: string;
	color?: string;
	priority: number; // Higher priority = shown first
}

export const statusOptions: Status[] = [
	{
		id: "not-looking",
		text: "Not looking for opportunities",
		icon: "🎯",
		color: "text-red-400",
		priority: 10,
	},
	{
		id: "listening",
		text: "Listening to music",
		icon: "🎧",
		color: "text-purple-400",
		priority: 5,
	},
	{
		id: "looking-roles",
		text: "Looking for roles",
		icon: "💼",
		color: "text-blue-400",
		priority: 8,
	},
	{
		id: "freelance",
		text: "Available for freelance",
		icon: "⚡",
		color: "text-yellow-400",
		priority: 7,
	},
	{
		id: "building",
		text: "Building something cool",
		icon: "🛠️",
		color: "text-orange-400",
		priority: 6,
	},
	{
		id: "learning",
		text: "Learning new tech",
		icon: "🧠",
		color: "text-indigo-400",
		priority: 4,
	},
	{
		id: "coding",
		text: "Coding late night",
		icon: "🌙",
		color: "text-cyan-400",
		priority: 3,
	},
	{
		id: "coffee",
		text: "Fueled by coffee",
		icon: "☕",
		color: "text-amber-400",
		priority: 2,
	},
	{
		id: "focus",
		text: "In deep focus mode",
		icon: "🧘",
		color: "text-emerald-400",
		priority: 1,
	},
];

// Get current active status (for now, just return the highest priority one)
// You can make this dynamic based on time, music API, calendar, etc.
export function getCurrentStatus(): Status {
	// For now, return "not looking for opportunities"
	return statusOptions.find(status => status.id === "not-looking") || statusOptions[0];
}

// Optional: Get status based on time of day
export function getStatusByTime(): Status {
	const hour = new Date().getHours();
	
	if (hour >= 23 || hour <= 6) {
		return statusOptions.find(status => status.id === "coding") || statusOptions[0];
	}
	
	if (hour >= 9 && hour <= 17) {
		return statusOptions.find(status => status.id === "building") || statusOptions[0];
	}
	
	return getCurrentStatus();
}
