import { motion } from "motion/react";

export function BoxedOutlines() {
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
      <div className="absolute left-[15%] top-0 bottom-0 w-px bg-white/15" />
      <div className="absolute right-[15%] top-0 bottom-0 w-px bg-white/15" />
      <div className="absolute top-[25%] left-0 right-0 h-px bg-white/10" />
      <div className="absolute bottom-[25%] left-0 right-0 h-px bg-white/10" />

      {/* Background organic blurred image */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Organic abstract"
          className="w-full max-w-5xl h-auto object-cover"
          style={{
            filter: "blur(25px) saturate(0.7)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-screen">
        {/* Boxed outlined typography - center */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
          viewport={{ once: true }}
          className="relative text-center mb-20"
        >
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Archivo Narrow', sans-serif",
              fontSize: "clamp(5rem, 12vw, 10rem)",
              fontWeight: 900,
              lineHeight: 0.85,
              letterSpacing: "0.05em",
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "2.5px rgba(255, 255, 255, 0.9)",
            }}
          >
            TRACTIS
          </h2>

          {/* Serif subtitle */}
          <h3
            className="text-white/60"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            Organic Systems Research
          </h3>
        </motion.div>

        {/* Scattered label text (no boxes) */}
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          viewport={{ once: true }}
          className="absolute top-[18%] left-[12%] text-white/50 text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "monospace" }}
        >
          ABSTRACT SYSTEMS
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 1.2 }}
          viewport={{ once: true }}
          className="absolute top-[22%] right-[15%] text-white/40 text-xs tracking-wider"
          style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
        >
          Organic Forms
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1.2 }}
          viewport={{ once: true }}
          className="absolute bottom-[28%] left-[18%] text-white/50 text-xs tracking-[0.25em] uppercase"
          style={{ fontFamily: "monospace" }}
        >
          VISUAL EXPLORATION
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1.2 }}
          viewport={{ once: true }}
          className="absolute bottom-[32%] right-[14%] text-white/40 text-xs"
          style={{ fontFamily: "sans-serif" }}
        >
          2026 Series
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1.2 }}
          viewport={{ once: true }}
          className="absolute top-[45%] left-[10%] text-white/50 text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "monospace" }}
        >
          FLUID DYNAMICS
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.2 }}
          viewport={{ once: true }}
          className="absolute top-[48%] right-[12%] text-white/30 text-sm"
          style={{ fontFamily: "cursive" }}
        >
          research project
        </motion.p>
      </div>
    </section>
  );
}
