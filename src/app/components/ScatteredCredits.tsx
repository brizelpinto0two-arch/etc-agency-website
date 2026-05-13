import { motion } from "motion/react";

export function ScatteredCredits() {
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
      <div className="absolute left-[12%] top-0 bottom-0 w-px bg-white/15" />
      <div className="absolute right-[18%] top-0 bottom-0 w-px bg-white/12" />
      <div className="absolute top-[20%] left-0 right-0 h-px bg-white/10" />
      <div className="absolute bottom-[30%] left-0 right-0 h-px bg-white/8" />

      {/* Background landscape image */}
      <div className="absolute inset-0 flex items-center justify-center opacity-25">
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 0.25, scale: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Desert landscape"
          className="w-full h-full object-cover"
          style={{
            filter: "blur(12px) saturate(0.6)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Massive scattered outlined typography */}
        <div className="relative min-h-screen flex items-center justify-center">
          <div className="relative">
            {/* First word - pixelated/outlined */}
            <motion.h2
              initial={{ opacity: 0, x: -100, rotate: -4 }}
              whileInView={{ opacity: 1, x: 0, rotate: -2 }}
              transition={{ duration: 1.8 }}
              viewport={{ once: true }}
              className="absolute top-[-15%] left-[-25%]"
              style={{
                fontFamily: "monospace",
                fontSize: "clamp(5rem, 14vw, 11rem)",
                fontWeight: 900,
                letterSpacing: "0.2em",
                lineHeight: 0.8,
                WebkitTextFillColor: "transparent",
                WebkitTextStroke: "2.5px rgba(255, 255, 255, 0.75)",
                textShadow: `
                  4px 4px 0 rgba(255,255,255,0.1),
                  8px 8px 0 rgba(255,255,255,0.05)
                `,
              }}
            >
              SURFACE
            </motion.h2>

            {/* Second word - serif outlined */}
            <motion.h2
              initial={{ opacity: 0, x: 100, rotate: 3 }}
              whileInView={{ opacity: 1, x: 0, rotate: 1 }}
              transition={{ duration: 1.8, delay: 0.3 }}
              viewport={{ once: true }}
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(5rem, 14vw, 11rem)",
                fontWeight: 700,
                fontStyle: "italic",
                lineHeight: 0.8,
                WebkitTextFillColor: "transparent",
                WebkitTextStroke: "2.5px rgba(255, 255, 255, 0.8)",
              }}
            >
              TENSION
            </motion.h2>

            {/* Scattered credit labels - no boxes, just text */}
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1.2 }}
              viewport={{ once: true }}
              className="absolute top-[-18%] right-[-12%] text-white/50 text-xs tracking-[0.25em] uppercase"
              style={{ fontFamily: "monospace" }}
            >
              CREATIVE: B. PINTO
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1.2 }}
              viewport={{ once: true }}
              className="absolute top-[22%] left-[-30%] text-white/40 text-xs"
              style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
            >
              Series: Mountain Hardwear
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 1.2 }}
              viewport={{ once: true }}
              className="absolute bottom-[-12%] right-[3%] text-white/50 text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "monospace" }}
            >
              YEAR: 2026
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 1.2 }}
              viewport={{ once: true }}
              className="absolute top-[58%] right-[-25%] text-white/40 text-xs"
              style={{ fontFamily: "sans-serif" }}
            >
              Category: Outdoor
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 1.2 }}
              viewport={{ once: true }}
              className="absolute top-[35%] left-[-22%] text-white/30 text-sm"
              style={{ fontFamily: "cursive" }}
            >
              exploration series
            </motion.p>

            {/* Sparkle/star elements */}
            {[
              { top: "3%", left: "8%", delay: 1.5 },
              { top: "42%", right: "5%", delay: 1.7 },
              { bottom: "18%", left: "12%", delay: 1.9 },
              { top: "68%", right: "18%", delay: 2.1 },
            ].map((pos, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: pos.delay, type: "spring" }}
                viewport={{ once: true }}
                className="absolute text-white/40 text-2xl"
                style={pos}
              >
                ✦
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
