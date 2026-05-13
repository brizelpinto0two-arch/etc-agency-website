import { useEffect, useRef } from "react";

export function LiquifyCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let targetX = mouseX;
    let targetY = mouseY;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      // Ultra-smooth interpolation
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Soft chromatic glow
      const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 250);
      gradient.addColorStop(0, "rgba(199, 125, 255, 0.08)");
      gradient.addColorStop(0.3, "rgba(131, 56, 236, 0.04)");
      gradient.addColorStop(0.6, "rgba(255, 0, 110, 0.02)");
      gradient.addColorStop(1, "transparent");

      ctx.fillStyle = gradient;
      ctx.filter = "blur(60px)";
      ctx.fillRect(mouseX - 250, mouseY - 250, 500, 500);

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 opacity-20"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
