import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { MagneticButton } from "./MagneticButton";
import { TextReveal } from "./TextReveal";
import { grain } from "./brandGradients";

import heroImg1 from "@/imports/etc-work/img-028.jpg";
import heroImg2 from "@/imports/etc-work/img-060.jpg";
import heroImg3 from "@/imports/etc-work/img-150.jpg";

const services = ["Brand Identity", "Art Direction", "Social & Digital", "Motion Graphics", "Packaging", "Strategy"];

export function EtcHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % services.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen w-full bg-[#030303] overflow-hidden flex flex-col justify-between">

      {/* Grain */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none z-10" style={{ backgroundImage: grain }} />

      {/* Subtle warm bloom — top left */}
      <div className="absolute w-[700px] h-[700px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,80,20,0.07) 0%, transparent 65%)", filter: "blur(120px)", left: "-10%", top: "-10%" }} />

      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-20 flex items-center justify-between px-8 md:px-16 lg:px-20 pt-8"
      >
        <p className="text-white text-[0.65rem] tracking-[0.3em] uppercase opacity-70" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}>etc.™</p>
        <div className="flex items-center gap-8">
          {["Work", "About", "Contact"].map((item) => (
            <MagneticButton key={item} as="a" href={`#${item.toLowerCase()}`}>
              <span className="text-white/50 text-[0.65rem] tracking-[0.2em] uppercase hover:text-white/90 transition-colors duration-300 block" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {item}
              </span>
            </MagneticButton>
          ))}
        </div>
      </motion.nav>

      {/* Main — split layout */}
      <div className="relative z-20 flex-1 flex items-center px-8 md:px-16 lg:px-20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_500px] gap-12 items-center max-w-7xl">

          {/* Left — text */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 2, delay: 0.8 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
              <span className="text-white/50 text-[0.6rem] tracking-[0.25em] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>CREATIVE DESIGN AGENCY — EST. BANGALORE</span>
            </motion.div>

            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="leading-[0.82] tracking-tighter select-none text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(6rem, 18vw, 14rem)", fontWeight: 700, lineHeight: 0.85 }}
              >
                etc.
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.9 }}
              className="mb-10 flex items-end gap-6 flex-wrap"
            >
              <h2 className="text-white leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.4rem, 3.5vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                <TextReveal text="We can't list it all." delay={0.9} />
              </h2>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300 }}>
                A creative design agency built for everything that matters, and more.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="flex items-center gap-4"
            >
              <div className="w-2 h-2 rounded-full bg-[#CCFF00] flex-shrink-0" />
              <div className="relative h-6 overflow-hidden w-52">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={current}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    className="absolute text-white/60 text-xs tracking-[0.2em] uppercase"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {services[current]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Right — work images collage (desktop only) */}
          <div className="hidden lg:block relative h-[460px] xl:h-[520px]">

            {/* Image 1 — large, left-center */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute overflow-hidden rounded-xl shadow-2xl"
              style={{ width: 220, height: 290, left: "0%", top: "8%" }}
            >
              <img src={heroImg1} alt="" className="w-full h-full object-cover" />
            </motion.div>

            {/* Image 2 — top right */}
            <motion.div
              initial={{ opacity: 0, y: 60, rotate: 3 }}
              animate={{ opacity: 1, y: 0, rotate: 3 }}
              transition={{ duration: 1.4, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="absolute overflow-hidden rounded-xl shadow-2xl"
              style={{ width: 185, height: 230, right: "0%", top: "0%" }}
            >
              <img src={heroImg2} alt="" className="w-full h-full object-cover" />
            </motion.div>

            {/* Image 3 — bottom right */}
            <motion.div
              initial={{ opacity: 0, y: 80, rotate: -1 }}
              animate={{ opacity: 1, y: 0, rotate: -1 }}
              transition={{ duration: 1.4, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute overflow-hidden rounded-xl shadow-2xl"
              style={{ width: 200, height: 240, right: "8%", bottom: "0%" }}
            >
              <img src={heroImg3} alt="" className="w-full h-full object-cover" />
            </motion.div>

            {/* Floating label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 1 }}
              className="absolute px-3 py-1.5 bg-[#CCFF00] rounded-full"
              style={{ bottom: "32%", left: "38%" }}
            >
              <span className="text-[#030303] text-[0.5rem] tracking-[0.2em] uppercase font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Selected Work</span>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom marquee */}
      <div className="relative z-20 border-t border-white/8 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap py-3"
          animate={{ x: [0, -1200] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="text-white/20 text-[0.6rem] tracking-[0.22em] uppercase mx-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              MADE BY ETC. ™ &nbsp;/&nbsp; WE CAN'T LIST IT ALL &nbsp;/&nbsp; BRAND &nbsp;/&nbsp; MOTION &nbsp;/&nbsp; STRATEGY &nbsp;/&nbsp; PRINT &nbsp;/&nbsp; DIGITAL
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
