import { useEffect } from "react";
import type { Metric } from "web-vitals";

declare global {
	interface Window {
		gtag?: (...args: unknown[]) => void;
	}
}

export function WebVitals() {
	useEffect(() => {
		const script = document.createElement("script");
		script.src =
			"https://unpkg.com/web-vitals@4/dist/web-vitals.attribution.js";
		script.async = true;
		document.head.appendChild(script);

		script.onload = () => {
			import("web-vitals").then(
				({ onCLS, onFID, onFCP, onLCP, onTTFB, onINP }) => {
					function sendToGoogleAnalytics(metric: Metric) {
						// Send to Google Analytics G-00ZDLV4JQ0
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

						// Log to console for development
						console.log("Web Vital:", metric);
					}

					// Measure Core Web Vitals
					onCLS(sendToGoogleAnalytics);
					onFID(sendToGoogleAnalytics);
					onFCP(sendToGoogleAnalytics);
					onLCP(sendToGoogleAnalytics);
					onTTFB(sendToGoogleAnalytics);
					onINP(sendToGoogleAnalytics);
				},
			);
		};

		return () => {
			document.head.removeChild(script);
		};
	}, []);

	return null;
}

export default WebVitals;
