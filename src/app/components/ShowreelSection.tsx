import { motion } from "motion/react";
import { grain } from "./brandGradients";

const raw = import.meta.glob("../../imports/etc-work/img-*.jpg", { eager: true }) as Record<string, { default: string }>;

const allImages: string[] = Object.entries(raw)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, mod]) => mod.default)
  .slice(1); // skip img-000

// Distribute images across rows and assign a width class to each card
type CardSize = "wide" | "portrait" | "square" | "hero";

const sizes: CardSize[] = ["wide", "square", "hero", "portrait", "square", "wide", "portrait", "hero", "square", "wide"];

function getWidth(size: CardSize): number {
  switch (size) {
    case "hero":     return 520;
    case "wide":     return 400;
    case "square":   return 320;
    case "portrait": return 260;
  }
}

function splitRows(arr: string[], n: number): string[][] {
  const size = Math.ceil(arr.length / n);
  return Array.from({ length: n }, (_, i) => arr.slice(i * size, (i + 1) * size));
}

const [row1, row2] = splitRows(allImages, 2);

interface RowProps {
  images: string[];
  reverse?: boolean;
  duration?: number;
  height?: number;
  sizeOffset?: number;
}

function CinemaRow({ images, reverse = false, duration = 80, height = 420, sizeOffset = 0 }: RowProps) {
  const doubled = [...images, ...images];

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-3 items-stretch"
        style={{ width: "max-content" }}
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((src, i) => {
          const size = sizes[(i + sizeOffset) % sizes.length];
          const w = getWidth(size);
          return (
            <div
              key={i}
              className="relative flex-shrink-0 overflow-hidden rounded-2xl group"
              style={{ width: w, height }}
            >
              {/* Full-bleed cover image */}
              <img
                src={src}
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Subtle vignette on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500 pointer-events-none" />

              {/* Grain overlay */}
              <div
                className="absolute inset-0 mix-blend-overlay opacity-20 pointer-events-none"
                style={{ backgroundImage: grain }}
              />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export function ShowreelSection() {
  return (
    <section className="relative w-full bg-[#030303] border-t border-white/5 overflow-hidden">

      {/* Global grain */}
      <div className="absolute inset-0 opacity-35 mix-blend-overlay pointer-events-none z-10" style={{ backgroundImage: grain }} />

      {/* Bloom */}
      <motion.div
        className="absolute w-[1000px] h-[1000px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(64,64,255,0.07) 0%, transparent 70%)", filter: "blur(150px)", left: "20%", top: "5%" }}
        animate={{ opacity: [0.07, 0.13, 0.07], scale: [1, 1.1, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── HEADER ── */}
      <div className="relative z-20 px-8 md:px-16 lg:px-20 pt-28 pb-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#4040FF]" />
          <span className="text-white/50 text-[0.6rem] tracking-[0.25em] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            ETC. ARCHIVE — FULL CATALOGUE
          </span>
        </motion.div>

        <div className="flex items-end justify-between gap-6 flex-wrap">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-white leading-[0.85] tracking-tighter"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(4.5rem, 11vw, 9rem)", fontWeight: 700, letterSpacing: "-0.03em" }}
          >
            SHOW
            <br />
            REEL
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="hidden md:flex flex-col items-end gap-1 pb-3"
          >
            <p className="text-white/25 text-[0.6rem] tracking-[0.2em] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{allImages.length} PIECES</p>
            <p className="text-white/20 text-[0.55rem] tracking-[0.2em] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>BRAND / SOCIAL / PRINT / MOTION</p>
            <p className="text-white/15 text-[0.55rem] tracking-[0.2em] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>BANGALORE, IN — 2025</p>
          </motion.div>
        </div>
      </div>

      {/* ── CINEMA ROWS — 2 rows, cinematic heights ── */}
      <div className="relative z-20 space-y-3 pb-3">
        <CinemaRow images={row1} reverse={false} duration={100} height={440} sizeOffset={0} />
        <CinemaRow images={row2} reverse={true}  duration={120} height={380} sizeOffset={3} />
      </div>

      {/* Top + bottom vignette */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#030303] to-transparent z-30 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#030303] to-transparent z-30 pointer-events-none" />

      {/* Footer row */}
      <div className="relative z-20 px-8 md:px-16 lg:px-20 pb-20 pt-10 max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.25 }}
          viewport={{ once: true }}
          className="text-white/25 text-[0.6rem] tracking-[0.25em] uppercase"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          ETCETERA — EVERYTHING WE'VE MADE. AND MORE.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-white/20 text-[0.55rem] tracking-[0.2em] uppercase"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          WE CAN'T LIST IT ALL — ETC.™
        </motion.p>
      </div>
    </section>
  );
}
