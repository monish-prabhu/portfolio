import { useEffect, useRef } from 'react';

function MatrixRain() {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const resizeTimeoutRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });

    const state = {
      width: 0,
      height: 0,
      columns: 0,
      fontSize: 16,
      drops: [],
      lastFrame: 0,
      targetFps: 30,
    };

    const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポ0123456789';

    function setup() {
      state.width = window.innerWidth;
      state.height = window.innerHeight;
      canvas.width = state.width;
      canvas.height = state.height;

      state.fontSize = Math.max(14, Math.min(20, Math.floor(state.width / 80)));
      state.columns = Math.floor(state.width / state.fontSize);
      state.drops = Array.from({ length: state.columns }, () => Math.floor(Math.random() * -50));

      ctx.font = `${state.fontSize}px Consolas, monospace`;
    }

    function draw(timestamp) {
      const now = timestamp || performance.now();
      const elapsed = now - state.lastFrame;
      const frameInterval = 1000 / state.targetFps;
      if (elapsed < frameInterval) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }
      state.lastFrame = now;

      // Slightly reduce fade to keep trails brighter
      ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
      ctx.fillRect(0, 0, state.width, state.height);

      for (let i = 0; i < state.columns; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        const x = i * state.fontSize;
        const y = state.drops[i] * state.fontSize;

        // Modestly increase glyph brightness
        ctx.fillStyle = 'rgba(0, 255, 65, 0.92)';
        ctx.fillText(text, x, y);

        if (y > state.height && Math.random() > 0.975) {
          state.drops[i] = Math.floor(Math.random() * -30);
        }
        state.drops[i] += 1;
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    setup();
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    rafRef.current = requestAnimationFrame(draw);

    function handleResize() {
      if (resizeTimeoutRef.current) window.clearTimeout(resizeTimeoutRef.current);
      resizeTimeoutRef.current = window.setTimeout(() => {
        setup();
      }, 150);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="bg-canvas"
      aria-hidden="true"
    />
  );
}

export default MatrixRain;


