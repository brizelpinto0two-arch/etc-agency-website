import { motion } from "motion/react";

export function NeonSidebar() {
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

      {/* Vertical design lines */}
      <div className="absolute left-[20%] top-0 bottom-0 w-px bg-red-500/20" />
      <div className="absolute left-[22%] top-0 bottom-0 w-px bg-white/10" />
      <div className="absolute right-[30%] top-0 bottom-0 w-px bg-white/15" />
      <div className="absolute top-[30%] left-0 right-0 h-px bg-white/8" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8 min-h-screen items-center">
          {/* LEFT: Red sidebar with modular feature boxes */}
          <div className="col-span-12 lg:col-span-3 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                { icon: "◆", label: "CONCEPT", value: "SONIC" },
                { icon: "●", label: "MEDIUM", value: "DIGITAL" },
                { icon: "■", label: "SERIES", value: "2026" },
                { icon: "▲", label: "STATUS", value: "LIVE" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-6"
                >
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 text-red-500 text-sm">{item.icon}</div>
                  <p className="text-red-400/60 text-[0.65rem] tracking-[0.2em] uppercase mb-1" style={{ fontFamily: "monospace" }}>
                    {item.label}
                  </p>
                  <p className="text-red-400 tracking-wider" style={{ fontFamily: "sans-serif", fontSize: "0.9rem" }}>
                    {item.value}
                  </p>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                viewport={{ once: true }}
                className="pt-6 mt-6 border-t border-red-500/20"
              >
                <p className="text-red-400/60 text-[0.6rem] tracking-wider uppercase mb-2" style={{ fontFamily: "monospace" }}>
                  Next Release
                </p>
                <p className="text-red-400 text-2xl font-mono">SOON</p>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT: Neon outlined typography with mixed fonts */}
          <div className="col-span-12 lg:col-span-9 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Neon outlined massive title */}
              <h2
                className="mb-8"
                style={{
                  fontFamily: "'Archivo Narrow', sans-serif",
                  fontSize: "clamp(4rem, 10vw, 9rem)",
                  fontWeight: 900,
                  lineHeight: 0.85,
                  letterSpacing: "-0.02em",
                  WebkitTextFillColor: "transparent",
                  WebkitTextStroke: "2.5px #fff",
                  textShadow: `
                    0 0 30px rgba(255, 255, 255, 0.4),
                    0 0 60px rgba(255, 255, 255, 0.2)
                  `,
                }}
              >
                SOUND&FLOW
              </h2>

              {/* Serif subheading */}
              <h3
                className="text-white/70 mb-6"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
                  fontStyle: "italic",
                  fontWeight: 300,
                }}
              >
                An experimental sonic interface
              </h3>

              {/* Body copy */}
              <p className="text-white/60 text-sm leading-relaxed max-w-2xl mb-10" style={{ fontFamily: "sans-serif" }}>
                Exploring the visual representation of sonic patterns. Audio frequencies transform into
                cascading visual elements, creating a synaesthetic experience.
              </p>

              {/* Stats with mixed typography */}
              <div className="grid grid-cols-3 gap-8">
                {[
                  { label: "Frequency Range", value: "20Hz - 20kHz" },
                  { label: "Visual Patterns", value: "∞" },
                  { label: "Frame Rate", value: "60fps" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-white/30 text-[0.65rem] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "monospace" }}>
                      {item.label}
                    </p>
                    <p className="text-white text-lg font-mono tracking-wider">
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
