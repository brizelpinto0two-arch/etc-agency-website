import { motion } from "motion/react";

export function DottedTypography() {
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
      <div className="absolute left-[8%] top-0 bottom-0 w-px bg-white/15" />
      <div className="absolute left-[25%] top-0 bottom-0 w-px bg-white/8" />
      <div className="absolute right-[15%] top-0 bottom-0 w-px bg-white/15" />
      <div className="absolute top-[20%] left-0 right-0 h-px bg-white/8" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-12 gap-8 items-center min-h-screen">
        {/* LEFT: Sharp botanical image with circular badges */}
        <div className="col-span-12 lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative aspect-[3/4]"
          >
            <img
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Alpine botanical"
              className="w-full h-full object-cover"
            />

            {/* Circular letter badges */}
            {[
              { letter: "A", top: "10%", left: "15%", delay: 0.6 },
              { letter: "L", top: "25%", right: "12%", delay: 0.7 },
              { letter: "P", top: "48%", left: "8%", delay: 0.8 },
              { letter: "I", top: "62%", right: "18%", delay: 0.9 },
              { letter: "N", top: "78%", left: "20%", delay: 1.0 },
              { letter: "E", bottom: "12%", right: "25%", delay: 1.1 },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: item.delay, type: "spring" }}
                viewport={{ once: true }}
                className="absolute w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg"
                style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom }}
              >
                <span className="text-black text-xl" style={{ fontFamily: "monospace", fontWeight: 700 }}>
                  {item.letter}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: Mixed typography */}
        <div className="col-span-12 lg:col-span-6 space-y-10">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Pixelated/dotted style heading */}
            <h2
              className="text-white mb-3"
              style={{
                fontFamily: "monospace",
                fontSize: "clamp(3.5rem, 9vw, 7rem)",
                fontWeight: 700,
                letterSpacing: "0.3rem",
                lineHeight: 0.9,
                textShadow: `
                  3px 3px 0 rgba(255,255,255,0.15),
                  6px 6px 0 rgba(255,255,255,0.1)
                `,
              }}
            >
              ALPINE
            </h2>

            {/* Serif subtitle */}
            <h3
              className="text-white/70 mb-8"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontStyle: "italic",
                fontWeight: 300,
              }}
            >
              Bio Collection
            </h3>

            {/* Script-style accent text */}
            <p
              className="text-white/50 mb-10"
              style={{
                fontFamily: "cursive",
                fontSize: "clamp(1rem, 2vw, 1.5rem)",
              }}
            >
              Botanical Studies
            </p>

            {/* Body copy with mixed fonts */}
            <div className="space-y-4 max-w-md">
              <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: "sans-serif" }}>
                Exploring botanical systems through detailed observation and digital documentation.
              </p>
              <p className="text-white/40 text-xs" style={{ fontFamily: "monospace" }}>
                TYPE: BOTANICAL / YEAR: 2026 / STATUS: ONGOING
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
