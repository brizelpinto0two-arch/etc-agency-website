import { motion } from "motion/react";

export function EditorialExperiment() {
  return (
    <section className="relative min-h-screen w-full bg-[#050505] py-40 px-8 md:px-16 lg:px-20 overflow-hidden">
      {/* Grain */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Atmospheric bloom */}
      <motion.div
        className="absolute w-[700px] h-[700px]"
        style={{
          background: "radial-gradient(circle, rgba(0, 255, 65, 0.06) 0%, transparent 70%)",
          filter: "blur(130px)",
          right: "20%",
          top: "30%",
        }}
        animate={{
          opacity: [0.06, 0.1, 0.06],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Experimental poster-style composition */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT: Large blurred image with layered typography */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8 }}
            viewport={{ once: true }}
            className="relative aspect-[3/4] max-w-xl"
          >
            {/* Base blurred image */}
            <div className="relative w-full h-full overflow-hidden border border-white/10">
              <motion.img
                src="https://images.unsplash.com/photo-1762144688858-2dc13e00f9a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Editorial"
                className="w-full h-full object-cover"
                style={{
                  filter: "blur(18px) saturate(0.8)",
                }}
                whileHover={{
                  filter: "blur(8px) saturate(1)",
                }}
                transition={{ duration: 1.2 }}
              />

              {/* Massive outlined typography crossing the image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.h2
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-white leading-[0.8] tracking-tighter rotate-[-2deg]"
                  style={{
                    fontFamily: "'Archivo Narrow', sans-serif",
                    fontSize: "clamp(3.5rem, 8vw, 6rem)",
                    fontWeight: 700,
                    WebkitTextFillColor: "transparent",
                    WebkitTextStroke: "2px rgba(255, 255, 255, 0.85)",
                  }}
                >
                  DESIGN
                  <br />
                  RESEARCH
                </motion.h2>
              </div>

              {/* Floating metadata boxes */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 0.8, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute top-6 left-6 px-3 py-2 border border-white/30 bg-black/40"
                style={{ backdropFilter: "blur(15px)" }}
              >
                <p className="text-white/80 text-[0.6rem] tracking-[0.15em] uppercase">Agenda for</p>
                <p className="text-white text-xs tracking-wider">TRACTIS</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.8, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute bottom-6 right-6 px-3 py-2 border border-white/30 bg-black/40 text-right"
                style={{ backdropFilter: "blur(15px)" }}
              >
                <p className="text-white/70 text-[0.55rem] tracking-wider uppercase">Technology</p>
                <p className="text-white text-[0.65rem]">Studies</p>
              </motion.div>

              {/* Circular indicators */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                viewport={{ once: true }}
                className="absolute top-1/2 right-8 w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center"
              >
                <div className="text-white/70 text-[0.6rem] font-mono">2Ø</div>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                viewport={{ once: true }}
                className="absolute bottom-1/3 left-8 w-10 h-10 rounded-full border-2 border-[#00ff41]/60 flex items-center justify-center"
              >
                <div className="w-2 h-2 rounded-full bg-[#00ff41]" />
              </motion.div>

              {/* Corner crosses */}
              {[
                { top: "1rem", right: "1rem" },
                { bottom: "1rem", left: "1rem" },
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.5 }}
                  transition={{ delay: 1.4 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="absolute text-white/50"
                  style={{ ...pos }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path d="M6 0v12M0 6h12" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </motion.div>
              ))}

              {/* Bloom & grain */}
              <div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(circle, rgba(0, 212, 255, 0.12) 0%, transparent 70%)",
                  mixBlendMode: "screen",
                  filter: "blur(60px)",
                }}
              />
              <div
                className="absolute inset-0 opacity-50 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
              />
            </div>

            {/* Curved connector line */}
            <motion.svg
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
              viewport={{ once: true }}
              className="absolute -right-20 top-1/2"
              width="100"
              height="100"
              viewBox="0 0 100 100"
            >
              <path
                d="M 0 50 Q 50 0, 100 50"
                fill="none"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            </motion.svg>
          </motion.div>

          {/* RIGHT: Modular information clusters */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Title cluster */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.5, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#00ff41]" />
                <span className="text-white/50 text-[0.6rem] tracking-[0.25em] uppercase">SYSTEM_02</span>
              </motion.div>

              <h3
                className="text-white leading-[0.9] tracking-tighter mb-6"
                style={{
                  fontFamily: "'Archivo Narrow', sans-serif",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 700,
                }}
              >
                APPROACH TO
                <br />
                VISUAL SYSTEMS
              </h3>

              <p className="text-white/60 text-sm leading-relaxed max-w-md">
                Combining emotional atmosphere with brutal editorial
                typography. Creating modular interface systems that feel
                designed, researched, and intentional.
              </p>
            </div>

            {/* Info boxes grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "METHODOLOGY", value: "EXPERIMENTAL" },
                { label: "APPROACH", value: "LAYERED" },
                { label: "OUTPUT", value: "DIGITAL" },
                { label: "STATUS", value: "ONGOING" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-white/10 bg-white/5 p-4"
                  style={{ backdropFilter: "blur(10px)" }}
                >
                  <p className="text-white/40 text-[0.55rem] tracking-[0.2em] uppercase mb-2">
                    {item.label}
                  </p>
                  <p className="text-white/80 text-xs tracking-wider">{item.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Navigation pills */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {["Interface", "Typography", "Motion", "Archive"].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 0.7, scale: 1 }}
                  transition={{ delay: 1.3 + i * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 border border-white/20 text-white/60 text-[0.65rem] tracking-wider uppercase hover:border-white/40 hover:text-white/80 transition-all duration-500"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* System indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              transition={{ delay: 1.5 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-white/10 text-white/40 text-[0.6rem] tracking-wider uppercase font-mono"
            >
              <p>CATALOGUE.CO.,LTD / SYSTEM V2.0 / 2023-2026</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
