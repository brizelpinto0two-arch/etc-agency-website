import { motion } from "motion/react";

interface Props {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  stagger?: number;
  splitBy?: "word" | "char";
}

export function TextReveal({ text, className = "", style, delay = 0, stagger = 0.04, splitBy = "word" }: Props) {
  const units = splitBy === "word" ? text.split(" ") : text.split("");

  return (
    <span className={`inline-flex flex-wrap ${splitBy === "word" ? "gap-x-[0.25em]" : ""}`} style={style}>
      {units.map((unit, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.75,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {unit}
            {splitBy === "word" && i < units.length - 1 ? "" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
