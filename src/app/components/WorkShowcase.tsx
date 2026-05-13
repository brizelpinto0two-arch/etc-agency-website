import { motion } from "motion/react";

import missingPiecePackaging from "@/imports/etc-work/img-028.jpg";
import spiceBasket from "@/imports/etc-work/img-060.jpg";
import beansOfBodhi from "@/imports/etc-work/img-080.jpg";

// Scattered pixel squares — deterministic positions
const PIXELS = [
  { top: "8%",  left: "4%",   size: 12, opacity: 0.9 },
  { top: "15%", left: "91%",  size: 8,  opacity: 0.6 },
  { top: "28%", left: "2%",   size: 6,  opacity: 0.5 },
  { top: "45%", left: "96%",  size: 14, opacity: 0.8 },
  { top: "62%", left: "5%",   size: 10, opacity: 0.7 },
  { top: "73%", left: "88%",  size: 6,  opacity: 0.5 },
  { top: "85%", left: "10%",  size: 8,  opacity: 0.6 },
  { top: "20%", left: "48%",  size: 6,  opacity: 0.3 },
  { top: "55%", left: "52%",  size: 4,  opacity: 0.25 },
  { top: "90%", left: "93%",  size: 10, opacity: 0.7 },
  { top: "5%",  left: "55%",  size: 14, opacity: 0.9 },
  { top: "38%", left: "76%",  size: 6,  opacity: 0.4 },
];

const projects = [
  {
    img: missingPiecePackaging,
    label: "THE MISSING\nPIECE",
    service: "Brand Identity",
    year: "2024",
    accent: "#CCFF00",
    rotate: "-2deg",
  },
  {
    img: spiceBasket,
    label: "SPICE\nBASKET",
    service: "Packaging",
    year: "2024",
    accent: "#c4b5d8",
    rotate: "0.5deg",
  },
  {
    img: beansOfBodhi,
    label: "BEANS OF\nBODHI",
    service: "Brand Refresh",
    year: "2023",
    accent: "#7dd6c8",
    rotate: "2deg",
  },
];

// Corner letters — like LABS in the reference
const CORNERS = [
  { char: "W", top: "3%",  left: "2%"  },
  { char: "O", top: "3%",  left: "91%" },
  { char: "R", top: "88%", left: "2%"  },
  { char: "K", top: "88%", left: "91%" },
];

export function WorkShowcase() {
  return (
    <section
      id="work"
      className="relative w-full min-h-screen bg-[#080808] py-24 px-8 md:px-16 lg:px-20 overflow-hidden"
    >
      {/* Pixel scatter */}
      {PIXELS.map((p, i) => (
        <div
          key={i}
          className="absolute bg-[#CCFF00] pointer-events-none"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size, opacity: p.opacity }}
        />
      ))}

      {/* Corner letters */}
      {CORNERS.map((c) => (
        <span
          key={c.char}
          className="absolute text-white/8 select-none pointer-events-none"
          style={{ top: c.top, left: c.left, fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 1 }}
        >
          {c.char}
        </span>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14 flex items-end justify-between">
          <div>
            <p className="text-[#CCFF00] text-[0.6rem] tracking-[0.3em] mb-3" style={{ fontFamily: "'Space Mono', monospace" }}>
              — 02 / SELECTED WORK
            </p>
            <h2
              className="text-white leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(5rem, 14vw, 11rem)", letterSpacing: "0.02em" }}
            >
              OUR WORK.
            </h2>
          </div>
          <p className="text-white/20 text-xs leading-relaxed text-right max-w-[200px] mb-4 hidden md:block" style={{ fontFamily: "'Space Mono', monospace" }}>
            PLACEHOLDER — A selection of brand, packaging and digital work.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden cursor-pointer"
              style={{ transform: `rotate(${p.rotate})`, transformOrigin: "center bottom" }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img
                  src={p.img}
                  alt={p.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              </div>

              {/* Bottom band — accent color */}
              <div className="absolute bottom-0 inset-x-0" style={{ backgroundColor: p.accent }}>
                <div className="px-4 py-3 flex items-center justify-between">
                  <div>
                    <p
                      className="text-black leading-tight whitespace-pre-line"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.4rem, 3vw, 1.9rem)", letterSpacing: "0.03em" }}
                    >
                      {p.label}
                    </p>
                    <p className="text-black/60 text-[0.5rem] tracking-[0.2em] mt-0.5" style={{ fontFamily: "'Space Mono', monospace" }}>
                      {p.service} — {p.year}
                    </p>
                  </div>
                  {/* Arrow */}
                  <span className="text-black text-lg opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" style={{ fontFamily: "'Space Mono', monospace" }}>→</span>
                </div>
              </div>

              {/* Pixel corner accent */}
              <div className="absolute top-3 right-3 w-3 h-3" style={{ backgroundColor: p.accent }} />
              <div className="absolute top-3 left-3 w-2 h-2 bg-white/20" />
            </motion.div>
          ))}
        </div>

        {/* Footer line */}
        <div className="mt-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/8" />
          <p className="text-white/20 text-[0.55rem] tracking-[0.3em]" style={{ fontFamily: "'Space Mono', monospace" }}>
            ETCETERA — BANGALORE — 2025
          </p>
          <div className="h-px flex-1 bg-white/8" />
        </div>

      </div>
    </section>
  );
}
