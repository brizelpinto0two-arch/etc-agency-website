import { motion } from "motion/react";

const raw = import.meta.glob("../../imports/etc-work/img-*.jpg", { eager: true }) as Record<string, { default: string }>;

const allImages: string[] = Object.entries(raw)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, mod]) => mod.default)
  .slice(1);

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

// Neon circles — like the Korean poster reference
const CIRCLES = [
  { top: "8%",  right: "6%",  size: 52 },
  { top: "14%", right: "14%", size: 22 },
  { top: "5%",  left: "38%",  size: 16 },
];

// Scattered pixel squares
const PIXELS = [
  { top: "22%", left: "3%",  size: 10 },
  { top: "18%", right: "3%", size: 8  },
  { top: "70%", left: "2%",  size: 12 },
  { top: "75%", right: "5%", size: 8  },
];

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
        className="flex gap-2 items-stretch"
        style={{ width: "max-content" }}
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((src, i) => {
          const size = sizes[(i + sizeOffset) % sizes.length];
          const w = getWidth(size);
          return (
            <div key={i} className="relative flex-shrink-0 overflow-hidden group" style={{ width: w, height }}>
              <img src={src} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none" />
              {/* Pixel corner */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-[#CCFF00]" />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export function ShowreelSection() {
  return (
    <section className="relative w-full bg-[#050505] overflow-hidden">

      {/* Fine grid overlay — like the Korean poster */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Neon green circles */}
      {CIRCLES.map((c, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[#CCFF00] pointer-events-none z-10"
          style={{ top: c.top, ...(c.right ? { right: c.right } : { left: c.left }), width: c.size, height: c.size }}
        />
      ))}

      {/* Pixel squares */}
      {PIXELS.map((p, i) => (
        <div
          key={i}
          className="absolute bg-[#CCFF00] pointer-events-none z-10 opacity-70"
          style={{ top: p.top, ...(p.right ? { right: p.right } : { left: p.left }), width: p.size, height: p.size }}
        />
      ))}

      {/* ── HEADER ── */}
      <div className="relative z-20 px-8 md:px-16 lg:px-20 pt-24 pb-10 max-w-7xl mx-auto">

        {/* Dashed top rule */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-2 h-2 bg-[#CCFF00]" />
          <div className="flex-1 border-t border-dashed border-white/20" />
          <p className="text-white/40 text-[0.55rem] tracking-[0.3em]" style={{ fontFamily: "'Space Mono', monospace" }}>ETC. ARCHIVE</p>
          <div className="flex-1 border-t border-dashed border-white/20" />
          <div className="w-2 h-2 bg-[#CCFF00]" />
        </div>

        <div className="flex items-end justify-between gap-6 flex-wrap mb-2">
          <div>
            <p className="text-[#CCFF00] text-[0.6rem] tracking-[0.3em] mb-2" style={{ fontFamily: "'Space Mono', monospace" }}>
              — 03 / SHOWREEL
            </p>
            <h2
              className="text-white leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(5rem, 14vw, 11rem)", letterSpacing: "0.02em" }}
            >
              FULL
              <br />
              ARCHIVE.
            </h2>
          </div>

          <div className="pb-4 hidden md:block">
            <p className="text-white/20 text-[0.55rem] tracking-[0.2em] leading-relaxed text-right" style={{ fontFamily: "'Space Mono', monospace" }}>
              PLACEHOLDER — {allImages.length} WORKS<br />
              BRAND / SOCIAL / PRINT<br />
              MOTION / PACKAGING
            </p>
          </div>
        </div>

        {/* Dashed separator */}
        <div className="border-t border-dashed border-white/15 mb-8" />
      </div>

      {/* ── CINEMA ROWS ── */}
      <div className="relative z-20 space-y-2 pb-2">
        <CinemaRow images={row1} reverse={false} duration={100} height={400} sizeOffset={0} />
        <CinemaRow images={row2} reverse={true}  duration={120} height={340} sizeOffset={3} />
      </div>

      {/* Footer */}
      <div className="relative z-20 px-8 md:px-16 lg:px-20 py-10 max-w-7xl mx-auto">
        {/* Dashed rule */}
        <div className="flex items-center gap-3 mt-4">
          <div className="flex-1 border-t border-dashed border-white/15" />
          <p className="text-white/25 text-[0.55rem] tracking-[0.3em]" style={{ fontFamily: "'Space Mono', monospace" }}>
            ETCETERA — EVERYTHING WE'VE MADE. AND MORE. — WE CAN'T LIST IT ALL
          </p>
          <div className="flex-1 border-t border-dashed border-white/15" />
        </div>
      </div>
    </section>
  );
}
