import { useEffect } from "react";
import type { Metric } from "web-vitals";

declare global {
	interface Window {
		gtag?: (...args: unknown[]) => void;
		dataLayer?: unknown[];
	}
}

export function WebVitals() {
	useEffect(() => {
		// Only load web-vitals dynamically via import
		import("web-vitals").then(
			({ onCLS, onFID, onFCP, onLCP, onTTFB, onINP }) => {
				function sendToGoogleAnalytics(metric: Metric) {
					// Send to Google Analytics G-00ZDLV4JQ0 via Partytown
					try {
						if (window.gtag) {
							window.gtag("event", metric.name, {
								metric_id: metric.id,
								metric_value: metric.value,
								metric_delta: metric.delta,
								metric_rating: metric.rating,
								custom_map: {
									metric_id: "custom_parameter_1",
									metric_value: "custom_parameter_2",
									metric_delta: "custom_parameter_3",
									metric_rating: "custom_parameter_4",
								},
							});
						}
					} catch (error) {
						console.warn("Web Vitals analytics error:", error);
					}
				}

				// Measure Core Web Vitals
				onCLS(sendToGoogleAnalytics);
				onFID(sendToGoogleAnalytics);
				onFCP(sendToGoogleAnalytics);
				onLCP(sendToGoogleAnalytics);
				onTTFB(sendToGoogleAnalytics);
				onINP(sendToGoogleAnalytics);
			},
		).catch((error) => {
			console.error("Failed to load web-vitals:", error);
		});
	}, []);

	return null;
}

export default WebVitals;
