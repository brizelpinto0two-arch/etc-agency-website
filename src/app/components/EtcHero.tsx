import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { MagneticButton } from "./MagneticButton";
import { TextReveal } from "./TextReveal";
import heroBg from "@/imports/hero-bg.png";

const services = ["Brand Identity", "Art Direction", "Social & Digital", "Motion Graphics", "Packaging", "Strategy"];

export function EtcHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % services.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-between" style={{ backgroundColor: "#0a0614" }}>

      {/* Full-screen background image */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center 40%" }}
      />

      {/* Overlay — left dark for legibility, right more transparent */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(105deg, rgba(10,6,20,0.82) 0%, rgba(10,6,20,0.55) 45%, rgba(10,6,20,0.12) 100%)" }}
      />

      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-20 flex items-center justify-between px-8 md:px-16 lg:px-20 pt-8"
      >
        <p className="text-white text-[0.65rem] tracking-[0.3em] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}>etc.™</p>
        <div className="flex items-center gap-8">
          {["Work", "About", "Contact"].map((item) => (
            <MagneticButton key={item} as="a" href={`#${item.toLowerCase()}`}>
              <span className="text-white/60 text-[0.65rem] tracking-[0.2em] uppercase hover:text-white transition-colors duration-300 block" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {item}
              </span>
            </MagneticButton>
          ))}
        </div>
      </motion.nav>

      {/* Main content */}
      <div className="relative z-20 flex-1 flex items-center px-8 md:px-16 lg:px-20">
        <div className="w-full max-w-3xl">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#C1D736]" />
            <span className="text-white/70 text-[0.6rem] tracking-[0.25em] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>CREATIVE DESIGN AGENCY — EST. BANGALORE</span>
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
            <p className="text-white/55 text-sm leading-relaxed max-w-xs mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300 }}>
              A creative design agency built for everything that matters, and more.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex items-center gap-4"
          >
            <div className="w-2 h-2 rounded-full bg-[#C1D736] flex-shrink-0" />
            <div className="relative h-6 overflow-hidden w-52">
              <AnimatePresence mode="wait">
                <motion.p
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="absolute text-white/70 text-xs tracking-[0.2em] uppercase"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {services[current]}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom marquee — solid, no blur */}
      <div className="relative z-20 border-t border-white/10 overflow-hidden" style={{ backgroundColor: "rgba(10,6,20,0.85)" }}>
        <motion.div
          className="flex whitespace-nowrap py-3"
          animate={{ x: [0, -1200] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="text-white/35 text-[0.6rem] tracking-[0.22em] uppercase mx-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              MADE BY ETC. ™ &nbsp;/&nbsp; WE CAN'T LIST IT ALL &nbsp;/&nbsp; BRAND &nbsp;/&nbsp; MOTION &nbsp;/&nbsp; STRATEGY &nbsp;/&nbsp; PRINT &nbsp;/&nbsp; DIGITAL
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
