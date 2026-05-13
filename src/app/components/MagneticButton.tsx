import { useRef, useState } from "react";
import { motion } from "motion/react";

interface Props {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  as?: "div" | "a" | "button";
  href?: string;
  onClick?: () => void;
}

export function MagneticButton({ children, className = "", strength = 0.35, as = "div", href, onClick }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setPos({ x: (e.clientX - cx) * strength, y: (e.clientY - cy) * strength });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 250, damping: 18, mass: 0.5 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (as === "a" && href) {
    return <a href={href} className="inline-block">{inner}</a>;
  }
  return inner;
}
