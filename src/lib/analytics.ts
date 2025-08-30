// Google Analytics utility functions
declare global {
	interface Window {
		gtag?: (...args: unknown[]) => void;
	}
}

// Track page views
export function trackPageView(url: string, title?: string) {
	if (typeof window !== "undefined" && window.gtag) {
		window.gtag("config", "G-00ZDLV4JQ0", {
			page_location: url,
			page_title: title || document.title,
		});
	}
}

// Track custom events
export function trackEvent(
	action: string,
	category?: string,
	label?: string,
	value?: number,
) {
	if (typeof window !== "undefined" && window.gtag) {
		window.gtag("event", action, {
			event_category: category,
			event_label: label,
			value: value,
		});
	}
}

// Track CV downloads
export function trackCVDownload() {
	trackEvent("download", "engagement", "CV Download");
}

// Track project clicks
export function trackProjectClick(projectName: string) {
	trackEvent("click", "projects", projectName);
}

// Track external link clicks
export function trackExternalClick(url: string, linkText?: string) {
	trackEvent("click", "external_link", linkText || url);
}

export default {
	trackPageView,
	trackEvent,
	trackCVDownload,
	trackProjectClick,
	trackExternalClick,
};
