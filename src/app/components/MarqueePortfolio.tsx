import { motion } from "motion/react";

export function MarqueePortfolio() {
  return (
    <section className="relative min-h-screen w-full bg-[#050505] py-20 px-8 md:px-16 lg:px-20 overflow-hidden">
      {/* Grid system */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Design lines */}
      <div className="absolute left-[10%] top-0 bottom-0 w-px bg-white/15" />
      <div className="absolute right-[25%] top-0 bottom-0 w-px bg-white/10" />
      <div className="absolute top-[15%] left-0 right-0 h-px bg-white/8" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Scrolling marquee */}
        <div className="mb-16 overflow-hidden">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{
              x: [0, -1200],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-12 items-center">
                <span
                  className="text-white/15"
                  style={{
                    fontFamily: "'Archivo Narrow', sans-serif",
                    fontSize: "clamp(3rem, 7vw, 5rem)",
                    fontWeight: 900,
                    letterSpacing: "-0.02em",
                  }}
                >
                  PORTFOLIO 2025
                </span>
                <span className="text-white/10 text-5xl">•</span>
                <span
                  className="text-white/15"
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(2.5rem, 6vw, 4rem)",
                    fontStyle: "italic",
                  }}
                >
                  Design Works
                </span>
                <span className="text-white/10 text-5xl">•</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-12 gap-12 items-center">
          {/* LEFT: Pixelated typography with colorful scattered badges */}
          <div className="col-span-12 lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              {/* Pixelated heading */}
              <h2
                className="text-white relative"
                style={{
                  fontFamily: "monospace",
                  fontSize: "clamp(3.5rem, 8vw, 6rem)",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  lineHeight: 0.9,
                  textShadow: `
                    4px 4px 0 rgba(255,255,255,0.1),
                    8px 8px 0 rgba(255,255,255,0.05)
                  `,
                }}
              >
                CREATIVE
                <br />
                CHAOS
              </h2>

              {/* Scattered colorful badges */}
              <motion.div
                initial={{ scale: 0, rotate: -15 }}
                whileInView={{ scale: 1, rotate: -5 }}
                transition={{ delay: 0.5, type: "spring" }}
                viewport={{ once: true }}
                className="absolute top-[15%] right-[8%] px-3 py-1 bg-red-500 shadow-lg"
              >
                <span className="text-white text-[0.7rem] tracking-wider uppercase font-bold">NEW</span>
              </motion.div>

              <motion.div
                initial={{ scale: 0, rotate: 12 }}
                whileInView={{ scale: 1, rotate: 8 }}
                transition={{ delay: 0.7, type: "spring" }}
                viewport={{ once: true }}
                className="absolute top-[35%] right-[5%] px-3 py-1 bg-blue-500 shadow-lg"
              >
                <span className="text-white text-[0.7rem] tracking-wider uppercase font-bold">2025</span>
              </motion.div>

              <motion.div
                initial={{ scale: 0, rotate: -8 }}
                whileInView={{ scale: 1, rotate: -3 }}
                transition={{ delay: 0.9, type: "spring" }}
                viewport={{ once: true }}
                className="absolute top-[55%] right-[12%] px-3 py-1 bg-yellow-500 shadow-lg"
              >
                <span className="text-black text-[0.7rem] tracking-wider uppercase font-bold">LIVE</span>
              </motion.div>

              <motion.div
                initial={{ scale: 0, rotate: 10 }}
                whileInView={{ scale: 1, rotate: 5 }}
                transition={{ delay: 1.1, type: "spring" }}
                viewport={{ once: true }}
                className="absolute top-[72%] right-[18%] px-3 py-1 bg-purple-500 shadow-lg"
              >
                <span className="text-white text-[0.7rem] tracking-wider uppercase font-bold">HOT</span>
              </motion.div>

              {/* Serif subtitle */}
              <p
                className="text-white/60 max-w-md"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(0.9rem, 1.8vw, 1.2rem)",
                  fontStyle: "italic",
                  lineHeight: 1.6,
                }}
              >
                A curated collection of experimental work spanning branding, packaging, and illustration.
              </p>

              {/* Barcode style element */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                viewport={{ once: true }}
                className="flex gap-1 items-end"
              >
                {[6, 3, 8, 3, 6, 3, 10, 3, 6, 3, 4].map((height, i) => (
                  <div
                    key={i}
                    className="bg-white/70"
                    style={{ width: "4px", height: `${height * 4}px` }}
                  />
                ))}
              </motion.div>

              {/* Monospace metadata */}
              <p className="text-white/30 text-xs tracking-[0.2em]" style={{ fontFamily: "monospace" }}>
                PORTFOLIO / 2025 / MULTI-DISCIPLINARY
              </p>
            </motion.div>
          </div>

          {/* RIGHT: Image with gear icons */}
          <div className="col-span-12 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5]"
            >
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Creative work"
                className="w-full h-full object-cover"
              />

              {/* Rotating gear icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[18%] right-[12%] text-white/50 text-4xl"
              >
                ⚙
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[28%] left-[8%] text-white/40 text-3xl"
              >
                ⚙
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-[45%] right-[8%] text-white/30 text-2xl"
              >
                ⚙
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
