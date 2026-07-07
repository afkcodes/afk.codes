/**
 * Living ASCII field — a flowing pseudo-terminal backdrop.
 * fbm value-noise drives glyph brightness; the cursor stirs the field
 * and clicks send out ripples. Glyphs are blitted from a prerendered
 * atlas so the whole field costs one drawImage per visible cell.
 */

const RAMP = " ·:;=+*xX#%@";
const ACCENT = "#ff5c1f";
const PAPER = "#ededea";

function makeNoise(seed: number) {
	const perm = new Uint8Array(512);
	const base = Array.from({ length: 256 }, (_, i) => i);
	let s = seed;
	const rnd = () => {
		s = (s * 16807) % 2147483647;
		return s / 2147483647;
	};
	for (let i = 255; i > 0; i--) {
		const j = Math.floor(rnd() * (i + 1));
		[base[i], base[j]] = [base[j], base[i]];
	}
	for (let i = 0; i < 512; i++) perm[i] = base[i & 255] as number;

	const fade = (t: number) => t * t * (3 - 2 * t);
	const n2 = (x: number, y: number) => {
		const X = Math.floor(x) & 255;
		const Y = Math.floor(y) & 255;
		const xf = x - Math.floor(x);
		const yf = y - Math.floor(y);
		const tl = perm[(perm[X] as number) + Y] as number;
		const tr = perm[(perm[X + 1] as number) + Y] as number;
		const bl = perm[(perm[X] as number) + Y + 1] as number;
		const br = perm[(perm[X + 1] as number) + Y + 1] as number;
		const u = fade(xf);
		const v = fade(yf);
		return (
			((tl * (1 - u) + tr * u) * (1 - v) + (bl * (1 - u) + br * u) * v) / 255
		);
	};

	// 3-octave fbm, drifting through time
	return (x: number, y: number, t: number) => {
		let v = 0;
		let amp = 0.54;
		let f = 1;
		for (let o = 0; o < 3; o++) {
			v +=
				amp *
				n2(x * f + t * 0.35 * (o + 1), y * f - t * 0.18 * (o + 1) + o * 13.7);
			amp *= 0.5;
			f *= 2.1;
		}
		return v;
	};
}

export function initAsciiField() {
	const canvas = document.getElementById(
		"ascii-field",
	) as HTMLCanvasElement | null;
	if (!canvas) return;
	const ctx = canvas.getContext("2d", { alpha: true });
	if (!ctx) return;

	const coarse = window.matchMedia("(pointer: coarse)").matches;
	const CELL = coarse ? 20 : 16;
	const FIELD_SCALE = 0.09;
	const noise = makeNoise(20260707);

	let cols = 0;
	let rows = 0;
	let width = 0;
	let height = 0;
	let dpr = 1;

	// glyph atlas: RAMP glyphs × 12 alpha steps (paper) + 12 accent steps
	const STEPS = 12;
	let atlas: HTMLCanvasElement | null = null;

	const buildAtlas = () => {
		atlas = document.createElement("canvas");
		atlas.width = Math.ceil(RAMP.length * CELL * dpr);
		atlas.height = Math.ceil(2 * STEPS * CELL * dpr);
		const a = atlas.getContext("2d");
		if (!a) return;
		a.scale(dpr, dpr);
		a.font = `${CELL * 0.78}px "JetBrains Mono Variable", ui-monospace, monospace`;
		a.textAlign = "center";
		a.textBaseline = "middle";
		for (let step = 0; step < STEPS; step++) {
			for (let g = 0; g < RAMP.length; g++) {
				a.globalAlpha = ((step + 1) / STEPS) * 0.55;
				a.fillStyle = PAPER;
				a.fillText(
					RAMP[g] as string,
					g * CELL + CELL / 2,
					step * CELL + CELL / 2,
				);
				a.globalAlpha = ((step + 1) / STEPS) * 0.9;
				a.fillStyle = ACCENT;
				a.fillText(
					RAMP[g] as string,
					g * CELL + CELL / 2,
					(STEPS + step) * CELL + CELL / 2,
				);
			}
		}
		a.globalAlpha = 1;
	};

	const resize = () => {
		const rect = canvas.getBoundingClientRect();
		width = rect.width;
		height = rect.height;
		dpr = Math.min(window.devicePixelRatio || 1, 1.5);
		canvas.width = Math.ceil(width * dpr);
		canvas.height = Math.ceil(height * dpr);
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		cols = Math.ceil(width / CELL);
		rows = Math.ceil(height / CELL);
		buildAtlas();
	};
	resize();
	window.addEventListener("resize", resize);
	document.fonts?.ready.then(buildAtlas);

	// cursor stirs the field
	let mx = -9999;
	let my = -9999;
	if (!coarse) {
		window.addEventListener(
			"pointermove",
			(e) => {
				const rect = canvas.getBoundingClientRect();
				mx = e.clientX - rect.left;
				my = e.clientY - rect.top;
			},
			{ passive: true },
		);
	}

	// clicks ripple outward
	const ripples: { x: number; y: number; born: number }[] = [];
	window.addEventListener("pointerdown", (e) => {
		const rect = canvas.getBoundingClientRect();
		if (e.clientY - rect.top > rect.height) return;
		ripples.push({
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
			born: performance.now(),
		});
		if (ripples.length > 6) ripples.shift();
	});

	let running = false;
	let rafId = 0;
	let last = 0;
	const FRAME = 1000 / 30; // ambient — 30fps is plenty

	const draw = (now: number) => {
		rafId = requestAnimationFrame(draw);
		if (now - last < FRAME) return;
		last = now;
		if (!atlas) return;
		const t = now / 1000;
		ctx.clearRect(0, 0, width, height);

		const cursorR = CELL * 9;
		const cellPx = CELL * dpr;

		for (let r = 0; r < rows; r++) {
			const y = r * CELL + CELL / 2;
			for (let c = 0; c < cols; c++) {
				const x = c * CELL + CELL / 2;
				let v = noise(c * FIELD_SCALE, r * FIELD_SCALE, t);

				// cursor bump — the field glows and swells around the pointer
				const dxm = x - mx;
				const dym = y - my;
				const dm2 = dxm * dxm + dym * dym;
				let nearCursor = false;
				if (dm2 < cursorR * cursorR) {
					const g = Math.exp(-dm2 / (cursorR * cursorR * 0.35));
					v += g * (0.38 + 0.12 * Math.sin(t * 4));
					nearCursor = g > 0.45;
				}

				// ripples — expanding rings from clicks
				for (const rp of ripples) {
					const age = (now - rp.born) / 1000;
					if (age > 1.4) continue;
					const dxr = x - rp.x;
					const dyr = y - rp.y;
					const dist = Math.sqrt(dxr * dxr + dyr * dyr);
					const ring = dist - age * 420;
					v += Math.exp(-(ring * ring) / 1800) * (1 - age / 1.4) * 0.5;
				}

				// calm eye in the middle so the headline stays readable
				const ex = (x - width * 0.45) / (width * 0.55);
				const ey = (y - height * 0.5) / (height * 0.55);
				const center = Math.max(0, 1 - (ex * ex + ey * ey));
				v *= 0.35 + 0.65 * (1 - center * 0.85);

				// fade out under the nav so the header stays clean
				v *= Math.min(1, y / 160);

				if (v < 0.34) continue;
				const bright = Math.min(1, (v - 0.34) / 0.5);
				const glyph = Math.min(
					RAMP.length - 1,
					1 + Math.floor(bright * (RAMP.length - 2)),
				);
				const step = Math.min(STEPS - 1, Math.floor(bright * STEPS));
				const accentRow = nearCursor || bright > 0.93 ? STEPS : 0;

				ctx.drawImage(
					atlas,
					glyph * cellPx,
					(accentRow + step) * cellPx,
					cellPx,
					cellPx,
					x - CELL / 2,
					y - CELL / 2,
					CELL,
					CELL,
				);
			}
		}

		for (let i = ripples.length - 1; i >= 0; i--) {
			if (now - (ripples[i] as { born: number }).born > 1400)
				ripples.splice(i, 1);
		}
	};

	const start = () => {
		if (running) return;
		running = true;
		last = 0;
		rafId = requestAnimationFrame(draw);
	};
	const stop = () => {
		running = false;
		cancelAnimationFrame(rafId);
	};

	// only burn cycles while the hero is on screen and the tab is visible
	const io = new IntersectionObserver(([entry]) => {
		if (entry?.isIntersecting && !document.hidden) start();
		else stop();
	});
	io.observe(canvas);
	document.addEventListener("visibilitychange", () => {
		if (document.hidden) stop();
		else if (canvas.getBoundingClientRect().bottom > 0) start();
	});
}
