// Google Analytics utility functions with Partytown support
declare global {
	interface Window {
		gtag?: (...args: unknown[]) => void;
		dataLayer?: unknown[];
	}
}

// Simplified helper for Partytown
function safeGtag(...args: unknown[]) {
	if (typeof window !== "undefined" && window.gtag) {
		try {
			window.gtag(...args);
		} catch (error) {
			console.warn("Analytics error:", error);
		}
	}
}

// Track page views
export function trackPageView(url: string, title?: string) {
	safeGtag("config", "G-00ZDLV4JQ0", {
		page_location: url,
		page_title: title || document.title,
	});
}

// Track custom events
export function trackEvent(
	action: string,
	category?: string,
	label?: string,
	value?: number,
) {
	safeGtag("event", action, {
		event_category: category,
		event_label: label,
		value: value,
	});
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
