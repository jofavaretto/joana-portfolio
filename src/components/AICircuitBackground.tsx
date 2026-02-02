import { useEffect, useRef } from "react";

type Props = { className?: string };

type Node = { x: number; y: number };
type Path = { a: Node; b: Node; hue: number; w: number };
type Pulse = {
  pathIndex: number;
  t: number;
  speed: number;
  hue: number;
  size: number;
};

export default function AICircuitBackground({ className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = 1;

    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    const fit = () => {
      w = Math.max(1, canvas.clientWidth);
      h = Math.max(1, canvas.clientHeight);
      dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    fit();
    const onResize = () => {
      fit();
      build();
    };
    window.addEventListener("resize", onResize);

    // Paleta (roxo/verde IA)
    const PURPLE = 275;
    const GREEN = 140;

    // Rede de nós em grade (circuit board)
    let nodes: Node[] = [];
    let paths: Path[] = [];
    let pulses: Pulse[] = [];

    const build = () => {
      nodes = [];
      paths = [];
      pulses = [];

      const spacing = clamp(Math.min(w, h) / 10, 70, 120);
      const cols = Math.max(8, Math.floor(w / spacing));
      const rows = Math.max(6, Math.floor(h / spacing));

      // cria nós com leve jitter
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const x = (c / cols) * w + rand(-10, 10);
          const y = (r / rows) * h + rand(-10, 10);
          nodes.push({ x, y });
        }
      }

      // conecta nós com “trilhos” horizontais/verticais e alguns diagonais leves
      const idx = (r: number, c: number) => r * (cols + 1) + c;

      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const a = nodes[idx(r, c)];

          // direita
          if (c < cols && Math.random() < 0.85) {
            const b = nodes[idx(r, c + 1)];
            const hue = Math.random() < 0.65 ? PURPLE : GREEN;
            paths.push({ a, b, hue, w: Math.random() < 0.2 ? 2 : 1 });
          }

          // baixo
          if (r < rows && Math.random() < 0.85) {
            const b = nodes[idx(r + 1, c)];
            const hue = Math.random() < 0.65 ? PURPLE : GREEN;
            paths.push({ a, b, hue, w: Math.random() < 0.2 ? 2 : 1 });
          }

          // diagonal rarinha
          if (r < rows && c < cols && Math.random() < 0.10) {
            const b = nodes[idx(r + 1, c + 1)];
            const hue = Math.random() < 0.65 ? PURPLE : GREEN;
            paths.push({ a, b, hue, w: 1 });
          }
        }
      }

      // cria pulsos que “trafegam” nos trilhos (data flow)
      const pulseCount = clamp(Math.floor((w * h) / 90000), 10, 26);
      for (let i = 0; i < pulseCount; i++) {
        const pathIndex = Math.floor(rand(0, paths.length));
        const hue = Math.random() < 0.65 ? PURPLE : GREEN;
        pulses.push({
          pathIndex,
          t: rand(0, 1),
          speed: rand(0.0025, 0.010),
          hue,
          size: rand(1.5, 2.6),
        });
      }
    };

    build();

    const clear = () => {
      // fundo escuro com rastro (efeito “IA pensando”)
      ctx.fillStyle = "rgba(2, 3, 10, 0.22)";
      ctx.fillRect(0, 0, w, h);
    };

    const drawGridGlow = () => {
      // glow de base (bem sutil) para dar profundidade
      const g1 = ctx.createRadialGradient(w * 0.2, h * 0.15, 0, w * 0.2, h * 0.15, Math.max(w, h));
      g1.addColorStop(0, "rgba(124, 58, 237, 0.10)");
      g1.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, w, h);

      const g2 = ctx.createRadialGradient(w * 0.85, h * 0.25, 0, w * 0.85, h * 0.25, Math.max(w, h));
      g2.addColorStop(0, "rgba(34, 197, 94, 0.07)");
      g2.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, w, h);
    };

    const draw = (time: number) => {
      const t = time * 0.001;

      if (prefersReduced) {
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = "rgba(2, 3, 10, 1)";
        ctx.fillRect(0, 0, w, h);
      } else {
        clear();
      }

      drawGridGlow();

      // trilhos (circuit traces)
      for (const p of paths) {
        const alpha = p.w === 2 ? 0.18 : 0.12;
        ctx.strokeStyle = `hsla(${p.hue}, 95%, 65%, ${alpha})`;
        ctx.lineWidth = p.w;
        ctx.beginPath();
        ctx.moveTo(p.a.x, p.a.y);
        ctx.lineTo(p.b.x, p.b.y);
        ctx.stroke();
      }

      // nós (pads)
      for (const n of nodes) {
        const pulse = 0.55 + 0.45 * Math.sin(t * 1.4 + (n.x + n.y) * 0.005);
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${0.03 + pulse * 0.02})`;
        ctx.arc(n.x, n.y, 1.6 + pulse * 0.8, 0, Math.PI * 2);
        ctx.fill();
      }

      // pulsos (dados correndo)
      for (const s of pulses) {
        const p = paths[s.pathIndex];
        if (!p) continue;

        const dx = p.b.x - p.a.x;
        const dy = p.b.y - p.a.y;

        if (!prefersReduced) {
          s.t += s.speed;
          if (s.t >= 1) {
            s.t = 0;
            s.pathIndex = Math.floor(rand(0, paths.length));
          }
        }

        const x = p.a.x + dx * s.t;
        const y = p.a.y + dy * s.t;

        // brilho
        ctx.beginPath();
        ctx.fillStyle = `hsla(${s.hue}, 95%, 72%, 0.90)`;
        ctx.arc(x, y, s.size, 0, Math.PI * 2);
        ctx.fill();

        // aura
        ctx.beginPath();
        ctx.fillStyle = `hsla(${s.hue}, 95%, 72%, 0.14)`;
        ctx.arc(x, y, s.size * 5, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReduced) raf = requestAnimationFrame(draw);
    };

    // init
    ctx.fillStyle = "rgba(2, 3, 10, 1)";
    ctx.fillRect(0, 0, w, h);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
