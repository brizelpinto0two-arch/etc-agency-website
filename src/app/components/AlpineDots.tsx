import { motion } from "motion/react";

export function AlpineDots() {
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
      <div className="absolute left-[18%] top-0 bottom-0 w-px bg-white/15" />
      <div className="absolute right-[22%] top-0 bottom-0 w-px bg-white/12" />
      <div className="absolute top-[28%] left-0 right-0 h-px bg-white/10" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-12 gap-8 items-center min-h-screen">
        {/* LEFT: Editorial image */}
        <div className="col-span-12 lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5]"
          >
            <img
              src="https://images.unsplash.com/photo-1758339265066-fcb44a7c9497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Editorial portrait"
              className="w-full h-full object-cover"
            />

            {/* Scattered text labels - no boxes */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute top-6 left-6 text-white/70 text-xs tracking-[0.25em] uppercase"
              style={{ fontFamily: "monospace" }}
            >
              VISUAL_01
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute bottom-6 right-6 text-white/50 text-xs"
              style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
            >
              2026
            </motion.p>
          </motion.div>
        </div>

        {/* RIGHT: Mixed typography */}
        <div className="col-span-12 lg:col-span-6 space-y-10">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Condensed sans heading */}
            <h2
              className="text-white mb-4"
              style={{
                fontFamily: "'Archivo Narrow', sans-serif",
                fontSize: "clamp(3.5rem, 8vw, 6rem)",
                fontWeight: 700,
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
              }}
            >
              EDITORIAL
            </h2>

            {/* Serif subtitle */}
            <h3
              className="text-white/70 mb-8"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                fontStyle: "italic",
                fontWeight: 300,
              }}
            >
              Narratives
            </h3>

            {/* Script accent */}
            <p
              className="text-white/50 mb-10"
              style={{
                fontFamily: "cursive",
                fontSize: "clamp(1rem, 2vw, 1.5rem)",
              }}
            >
              Visual Systems
            </p>

            {/* Body copy */}
            <p className="text-white/60 text-sm leading-relaxed max-w-md" style={{ fontFamily: "sans-serif" }}>
              Creating visual systems that merge editorial precision with atmospheric storytelling.
              Each element designed to evoke feeling before function.
            </p>

            {/* Metadata - mixed fonts, no boxes */}
            <div className="space-y-2 mt-12">
              <p className="text-white/30 text-xs tracking-[0.25em]" style={{ fontFamily: "monospace" }}>
                APPROACH: EDITORIAL
              </p>
              <p className="text-white/30 text-xs" style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}>
                Medium: Digital
              </p>
              <p className="text-white/30 text-xs" style={{ fontFamily: "sans-serif" }}>
                Year: 2026 / Status: Active
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
