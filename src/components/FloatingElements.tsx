import { useEffect, useRef, useCallback } from 'react';

// Pure CSS/canvas particle trail — zero React re-renders, zero lag
export default function FloatingElements() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<{ x: number; y: number; size: number; color: string; life: number; maxLife: number; vx: number; vy: number }[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);
  const lastSpawn = useRef(0);

  const colors = ['#FF69B4', '#2E8B7B', '#FFB6D9', '#3CB4A0', '#DB2777'];

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw
    for (let i = particles.current.length - 1; i >= 0; i--) {
      const p = particles.current[i];
      p.life--;
      p.x += p.vx;
      p.y += p.vy;
      p.vy -= 0.02; // float up

      const alpha = Math.max(0, p.life / p.maxLife);
      const size = p.size * alpha;

      ctx.beginPath();
      ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
      ctx.fillStyle = p.color + Math.floor(alpha * 99).toString(16).padStart(2, '0');
      ctx.fill();

      // Glow
      ctx.beginPath();
      ctx.arc(p.x, p.y, size * 2, 0, Math.PI * 2);
      ctx.fillStyle = p.color + Math.floor(alpha * 20).toString(16).padStart(2, '0');
      ctx.fill();

      if (p.life <= 0) particles.current.splice(i, 1);
    }

    raf.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      const now = Date.now();
      if (now - lastSpawn.current < 50) return;
      lastSpawn.current = now;

      particles.current.push({
        x: e.clientX + (Math.random() - 0.5) * 8,
        y: e.clientY + (Math.random() - 0.5) * 8,
        size: 1.5 + Math.random() * 2.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 30 + Math.random() * 20,
        maxLife: 50,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -(Math.random() * 0.5 + 0.3),
      });

      // Cap particles
      if (particles.current.length > 40) particles.current.splice(0, particles.current.length - 40);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(raf.current);
    };
  }, [animate]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[60]"
      style={{ width: '100%', height: '100%' }}
    />
  );
}
