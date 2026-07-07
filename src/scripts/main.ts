import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { initAsciiField } from "./ascii-field";
import { initScreensaver } from "./screensaver";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia(
	"(prefers-reduced-motion: reduce)",
).matches;

/* ---------------------------------- clock ---------------------------------- */
const clocks = document.querySelectorAll<HTMLElement>(".js-clock");
if (clocks.length) {
	const formatter = new Intl.DateTimeFormat("en-GB", {
		timeZone: "Asia/Kolkata",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: false,
	});
	const tick = () => {
		const now = formatter.format(new Date());
		for (const clock of clocks) clock.textContent = now;
	};
	tick();
	setInterval(tick, 1000);
}

/* ------------------------------- nav on scroll ------------------------------ */
const nav = document.getElementById("site-nav");
const syncNav = () => {
	if (!nav) return;
	if (window.scrollY > 24) nav.setAttribute("data-scrolled", "");
	else nav.removeAttribute("data-scrolled");
};
window.addEventListener("scroll", syncNav, { passive: true });
syncNav();

if (prefersReducedMotion) {
	// Static experience: no smooth scroll, no reveals — content is already visible via CSS.
	document.documentElement.classList.remove("js");
} else {
	/* ------------------------------ smooth scroll ------------------------------ */
	const lenis = new Lenis({ lerp: 0.12 });
	lenis.on("scroll", ScrollTrigger.update);
	gsap.ticker.add((time) => {
		lenis.raf(time * 1000);
	});
	gsap.ticker.lagSmoothing(0);

	// Anchor links through Lenis
	for (const anchor of document.querySelectorAll<HTMLAnchorElement>(
		'a[href^="#"]',
	)) {
		anchor.addEventListener("click", (e) => {
			const id = anchor.getAttribute("href");
			if (!id || id === "#") return;
			const target = document.querySelector(id);
			if (!target) return;
			e.preventDefault();
			lenis.scrollTo(target as HTMLElement, { offset: -64 });
		});
	}

	/* ----------------------------- hero char reveal ----------------------------- */
	for (const el of document.querySelectorAll<HTMLElement>("[data-split]")) {
		const text = el.textContent ?? "";
		el.setAttribute("aria-label", text);
		el.textContent = "";
		const frag = document.createDocumentFragment();
		for (const char of text) {
			const span = document.createElement("span");
			span.setAttribute("data-char", "");
			span.setAttribute("aria-hidden", "true");
			span.className = "inline-block will-change-transform";
			span.textContent = char === " " ? " " : char;
			frag.appendChild(span);
		}
		el.appendChild(frag);
	}

	const intro = gsap.timeline({ defaults: { ease: "power4.out" } });
	intro
		.to("[data-char]", {
			opacity: 1,
			y: 0,
			rotate: 0,
			duration: 1,
			stagger: 0.035,
			delay: 0.15,
		})
		.to(
			"#top [data-reveal]",
			{ opacity: 1, y: 0, duration: 0.9, stagger: 0.12 },
			"-=0.6",
		);

	const portrait = document.getElementById("hero-portrait");
	if (portrait) {
		intro.to(portrait, { opacity: 1, duration: 0.4 }, 0.35).to(
			"#hero-portrait-img",
			{
				clipPath: "inset(0% 0 0 0)",
				duration: 1.2,
				ease: "power4.inOut",
			},
			0.35,
		);
		// slow drift as the hero scrolls away
		gsap.to(portrait, {
			yPercent: -14,
			ease: "none",
			scrollTrigger: {
				trigger: "#top",
				start: "top top",
				end: "bottom top",
				scrub: true,
			},
		});
	}

	/* ------------------------------ scroll reveals ------------------------------ */
	for (const el of document.querySelectorAll<HTMLElement>(
		"[data-reveal]:not(#top [data-reveal])",
	)) {
		gsap.to(el, {
			opacity: 1,
			y: 0,
			duration: 0.9,
			ease: "power3.out",
			scrollTrigger: { trigger: el, start: "top 88%" },
		});
	}

	/* ------------------------- living ascii field + afk mode ------------------------- */
	initAsciiField();
	initScreensaver();

	/* ------------------------------ scroll progress ------------------------------ */
	const progress = document.getElementById("scroll-progress");
	if (progress) {
		gsap.to(progress, {
			scaleX: 1,
			ease: "none",
			scrollTrigger: {
				trigger: document.body,
				start: "top top",
				end: "bottom bottom",
				scrub: 0.3,
			},
		});
	}

	/* --------------------------------- counters --------------------------------- */
	for (const el of document.querySelectorAll<HTMLElement>("[data-count]")) {
		const target = Number(el.dataset.count ?? "0");
		const counter = { value: 0 };
		gsap.to(counter, {
			value: target,
			duration: 1.6,
			ease: "power2.out",
			scrollTrigger: { trigger: el, start: "top 90%" },
			onUpdate: () => {
				el.textContent = String(Math.round(counter.value));
			},
		});
	}

	/* ----------------------------- magnetic elements ----------------------------- */
	if (window.matchMedia("(pointer: fine)").matches) {
		for (const el of document.querySelectorAll<HTMLElement>(
			"[data-magnetic]",
		)) {
			const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" });
			const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });
			el.addEventListener("mousemove", (e) => {
				const rect = el.getBoundingClientRect();
				xTo((e.clientX - rect.left - rect.width / 2) * 0.35);
				yTo((e.clientY - rect.top - rect.height / 2) * 0.35);
			});
			el.addEventListener("mouseleave", () => {
				xTo(0);
				yTo(0);
			});
		}

		/* -------------------------------- custom cursor -------------------------------- */
		const dot = document.querySelector<HTMLElement>(".cursor-dot");
		const ring = document.querySelector<HTMLElement>(".cursor-ring");
		if (dot && ring) {
			const dotX = gsap.quickTo(dot, "x", {
				duration: 0.08,
				ease: "power2.out",
			});
			const dotY = gsap.quickTo(dot, "y", {
				duration: 0.08,
				ease: "power2.out",
			});
			const ringX = gsap.quickTo(ring, "x", {
				duration: 0.35,
				ease: "power2.out",
			});
			const ringY = gsap.quickTo(ring, "y", {
				duration: 0.35,
				ease: "power2.out",
			});
			gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

			window.addEventListener(
				"mousemove",
				(e) => {
					gsap.to([dot, ring], {
						opacity: 1,
						duration: 0.2,
						overwrite: "auto",
					});
					dotX(e.clientX);
					dotY(e.clientY);
					ringX(e.clientX);
					ringY(e.clientY);
				},
				{ passive: true },
			);
			document.documentElement.addEventListener("mouseleave", () => {
				gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
			});
			for (const el of document.querySelectorAll(
				"a, button, [data-magnetic]",
			)) {
				el.addEventListener("mouseenter", () =>
					ring.classList.add("is-hovering"),
				);
				el.addEventListener("mouseleave", () =>
					ring.classList.remove("is-hovering"),
				);
			}
		}
	}
}
