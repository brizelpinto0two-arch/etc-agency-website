import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const descriptors = ["copywriter", "art director", "designer", "strategist"];
const marqueeText = "COPY / ART DIRECTION / DESIGN / STRATEGY / BRANDING / BRIZEL KIZZY PINTO /";

export function HeroDarkroom() {
  const [currentDescriptor, setCurrentDescriptor] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDescriptor((prev) => (prev + 1) % descriptors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full bg-[#050505] overflow-hidden">
      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Atmospheric bloom */}
      <motion.div
        className="absolute w-[800px] h-[800px]"
        style={{
          background: "radial-gradient(circle, rgba(131, 56, 236, 0.08) 0%, transparent 70%)",
          filter: "blur(120px)",
          right: "20%",
          top: "30%",
        }}
        animate={{
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-center">
          {/* LEFT: Typography with outlined system */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, delay: 0.3 }}
            className="relative"
          >
            {/* Tiny metadata cluster - top left */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 2, delay: 1 }}
              className="absolute -top-12 left-0 text-white/50 text-[0.6rem] tracking-[0.15em] uppercase space-y-1"
            >
              <p>PORTFOLIO — ACTIVE</p>
              <p>COPY / ART DIRECTION / DESIGN / STRATEGY</p>
            </motion.div>

            {/* Main statement */}
            <h1
              className="text-white leading-[0.88] tracking-tight mb-8 relative"
              style={{
                fontFamily: "'Archivo Narrow', sans-serif",
                fontSize: "clamp(3.2rem, 8.5vw, 7.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              i dream about
              <br />
              <span
                style={{
                  WebkitTextFillColor: "transparent",
                  WebkitTextStroke: "1.5px rgba(255,255,255,0.7)",
                }}
              >
                futures that
              </span>
              <br />
              do not exist
            </h1>

            {/* Name signature */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              transition={{ duration: 2, delay: 0.9 }}
              className="text-white text-[0.7rem] tracking-[0.3em] uppercase mb-8"
            >
              Brizel Kizzy Pinto
            </motion.p>

            {/* Rotating descriptor with pill */}
            <div className="relative h-16 overflow-hidden mb-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDescriptor}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 1 }}
                  className="absolute flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-[#00ff41]" />
                  <p className="text-white/70 tracking-[0.3em] uppercase text-sm">
                    {descriptors[currentDescriptor]}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Discipline tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {["copy", "art direction", "design", "strategy"].map((label, i) => (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 0.6, scale: 1 }}
                  transition={{ delay: 1.7 + i * 0.1 }}
                  className="px-3 py-1 border border-white/20 text-white/60 text-[0.65rem] tracking-wider uppercase"
                  style={{ backdropFilter: "blur(10px)" }}
                >
                  {label}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Image with interface overlays */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.6 }}
            className="relative aspect-[4/5] max-w-lg ml-auto"
          >
            {/* Blurred image */}
            <div className="relative w-full h-full overflow-hidden">
              <motion.img
                src="https://images.unsplash.com/photo-1759223293145-017da2722112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Visual fragment"
                className="w-full h-full object-cover"
                style={{
                  filter: "blur(15px) saturate(0.8)",
                }}
                whileHover={{
                  filter: "blur(5px) saturate(1)",
                }}
                transition={{ duration: 1.2 }}
              />

              {/* Outlined typography overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.9 }}
                  transition={{ duration: 2, delay: 1 }}
                  className="text-white text-[clamp(3rem,6vw,5rem)] leading-[0.9] tracking-tighter text-center"
                  style={{
                    fontFamily: "'Archivo Narrow', sans-serif",
                    fontWeight: 700,
                    WebkitTextFillColor: "transparent",
                    WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.8)",
                  }}
                >
                  FUTURE
                  <br />
                  THINGS
                </motion.h2>
              </div>

              {/* Metadata boxes */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 1.5, delay: 1.3 }}
                className="absolute top-4 right-4 px-3 py-2 border border-white/30 bg-black/20"
                style={{ backdropFilter: "blur(10px)" }}
              >
                <p className="text-white/70 text-[0.6rem] tracking-wider uppercase">2023—2026</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 1.5, delay: 1.5 }}
                className="absolute bottom-4 left-4 px-3 py-2 border border-white/30 bg-black/20"
                style={{ backdropFilter: "blur(10px)" }}
              >
                <p className="text-white/70 text-[0.6rem] tracking-wider uppercase">FRAGMENT_01</p>
              </motion.div>

              {/* Circular indicator */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 1.8 }}
                className="absolute top-4 left-4 w-8 h-8 rounded-full border-2 border-[#00ff41] flex items-center justify-center"
              >
                <div className="w-2 h-2 rounded-full bg-[#00ff41]" />
              </motion.div>

              {/* Bloom & grain */}
              <div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(circle, rgba(199, 125, 255, 0.15) 0%, transparent 70%)",
                  mixBlendMode: "screen",
                  filter: "blur(40px)",
                }}
              />
              <div
                className="absolute inset-0 opacity-50 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/20 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap py-3"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="text-white/40 text-xs tracking-[0.2em] uppercase mx-8"
            >
              {marqueeText}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
