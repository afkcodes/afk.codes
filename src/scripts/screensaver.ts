/**
 * The site goes AFK when you do.
 * After 40s of no input, a DVD-style screensaver takes over:
 * the AFK mark drifts and bounces off the edges until any input wakes it.
 */

const IDLE_MS = 40_000;

export function initScreensaver() {
	const overlay = document.getElementById("screensaver");
	const mark = document.getElementById("ss-bounce");
	if (!overlay || !mark) return;

	let idleTimer = 0;
	let rafId = 0;
	let active = false;
	let x = 0;
	let y = 0;
	let vx = 0;
	let vy = 0;
	let lastTs = 0;

	const tick = (ts: number) => {
		rafId = requestAnimationFrame(tick);
		if (!lastTs) {
			lastTs = ts;
			return;
		}
		const dt = Math.min((ts - lastTs) / (1000 / 60), 3);
		lastTs = ts;
		const bw = mark.offsetWidth;
		const bh = mark.offsetHeight;
		x += vx * dt;
		y += vy * dt;
		let bounced = false;
		if (x <= 0 || x + bw >= window.innerWidth) {
			vx *= -1;
			x = Math.max(0, Math.min(x, window.innerWidth - bw));
			bounced = true;
		}
		if (y <= 0 || y + bh >= window.innerHeight) {
			vy *= -1;
			y = Math.max(0, Math.min(y, window.innerHeight - bh));
			bounced = true;
		}
		if (bounced) overlay.classList.toggle("ss-alt");
		mark.style.transform = `translate(${x}px, ${y}px)`;
	};

	const show = () => {
		if (active) return;
		active = true;
		x = Math.random() * Math.max(1, window.innerWidth - 300);
		y = Math.random() * Math.max(1, window.innerHeight - 160);
		vx = 2.4 * (Math.random() > 0.5 ? 1 : -1);
		vy = 2.0 * (Math.random() > 0.5 ? 1 : -1);
		lastTs = 0;
		overlay.classList.remove("hidden");
		rafId = requestAnimationFrame(tick);
	};

	const hide = () => {
		if (!active) return;
		active = false;
		overlay.classList.add("hidden");
		cancelAnimationFrame(rafId);
	};

	const reset = () => {
		hide();
		clearTimeout(idleTimer);
		idleTimer = window.setTimeout(show, IDLE_MS);
	};

	for (const ev of [
		"pointermove",
		"pointerdown",
		"keydown",
		"wheel",
		"touchstart",
		"scroll",
	]) {
		window.addEventListener(ev, reset, { passive: true });
	}
	reset();
}
