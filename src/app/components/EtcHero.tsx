import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { TextReveal } from "./TextReveal";
import heroVideo from "@/imports/hero-video.mp4";

const services = ["Brand Identity", "Art Direction", "Social & Digital", "Motion Graphics", "Packaging", "Strategy"];

export function EtcHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % services.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col">

      {/* Full-screen background video */}
      <video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center center" }}
      />

      {/* Subtle bottom fade so content below reads cleanly */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#d8c8f0]/80 to-transparent pointer-events-none" />

      {/* ── NEON GREEN NAV BAND ── */}
      <div className="relative z-30 w-full bg-[#CCFF00] flex items-center justify-between px-8 md:px-16 lg:px-20 py-2.5">
        <p className="text-black text-[0.65rem] tracking-[0.3em] uppercase font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>etc.™</p>
        <nav className="flex items-center gap-8">
          {["Work", "About Us", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="text-black text-[0.65rem] tracking-[0.2em] uppercase font-semibold hover:opacity-60 transition-opacity duration-200"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Main content — bottom-left, over image */}
      <div className="relative z-20 flex-1 flex items-end px-8 md:px-16 lg:px-20 pb-16">
        <div className="w-full max-w-2xl">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" style={{ boxShadow: "0 0 8px #CCFF00" }} />
            <span className="text-white/70 text-[0.6rem] tracking-[0.25em] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              CREATIVE DESIGN AGENCY — EST. BANGALORE
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <h2 className="text-white leading-tight drop-shadow-lg" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 4vw, 3.2rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              <TextReveal text="We can't list it all." delay={0.5} />
            </h2>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mt-3" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300 }}>
              A creative design agency built for everything that matters, and more.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex items-center gap-4"
          >
            <div className="w-2 h-2 rounded-full bg-[#CCFF00] flex-shrink-0" style={{ boxShadow: "0 0 8px #CCFF00" }} />
            <div className="relative h-5 overflow-hidden w-48">
              <AnimatePresence mode="wait">
                <motion.p
                  key={current}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5 }}
                  className="absolute text-white/65 text-[0.65rem] tracking-[0.2em] uppercase"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {services[current]}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
