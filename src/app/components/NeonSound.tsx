import { motion } from "motion/react";

export function NeonSound() {
  return (
    <section className="relative min-h-screen w-full bg-[#050505] py-40 px-8 md:px-16 lg:px-20 overflow-hidden">
      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Green atmospheric bloom */}
      <motion.div
        className="absolute w-[700px] h-[700px]"
        style={{
          background: "radial-gradient(circle, rgba(0, 255, 65, 0.12) 0%, transparent 70%)",
          filter: "blur(130px)",
          right: "15%",
          top: "25%",
        }}
        animate={{
          opacity: [0.12, 0.18, 0.12],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT: Typography and info */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Metadata cluster */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00ff41]" />
            <span className="text-white/50 text-[0.6rem] tracking-[0.25em] uppercase">ARCHITECTURAL STUDY</span>
          </div>

          {/* Title */}
          <h3
            className="leading-[0.85] tracking-tighter mb-6"
            style={{
              fontFamily: "'Archivo Narrow', sans-serif",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              fontWeight: 700,
            }}
          >
            <span className="text-white">BRUTALIST</span>
            <br />
            <span className="text-[#00ff41]">STRUCTURES</span>
          </h3>

          <p className="text-white/60 text-sm leading-relaxed max-w-md">
            Exploring the intersection of raw architectural forms and
            digital expression. Concrete meets pixel in this visual
            exploration of structural beauty.
          </p>

          {/* Info boxes grid with green accents */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "STYLE", value: "BRUTALIST", accent: true },
              { label: "FOCUS", value: "STRUCTURE", accent: false },
              { label: "PERIOD", value: "2026", accent: false },
              { label: "TYPE", value: "RESEARCH", accent: true },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                viewport={{ once: true }}
                className={`border ${item.accent ? 'border-[#00ff41]/20 bg-[#00ff41]/5' : 'border-white/10 bg-white/5'} p-4`}
                style={{ backdropFilter: "blur(10px)" }}
              >
                <p className="text-white/40 text-[0.55rem] tracking-[0.2em] uppercase mb-2">
                  {item.label}
                </p>
                <p className={`text-xs tracking-wider ${item.accent ? 'text-[#00ff41]/90' : 'text-white/80'}`}>
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Navigation pills */}
          <div className="flex flex-wrap gap-2">
            {["Architecture", "Form", "Material", "Space"].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 0.7, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 border border-[#00ff41]/20 text-white/60 text-[0.65rem] tracking-wider uppercase hover:border-[#00ff41]/40 hover:text-[#00ff41]/80 transition-all duration-500"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT: Clean editorial image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] max-w-xl ml-auto"
        >
          <div className="relative w-full h-full overflow-hidden border border-white/10">
            <motion.img
              src="https://images.unsplash.com/photo-1776514222617-cd3d0139c926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Brutalist architecture"
              className="w-full h-full object-cover"
              style={{
                filter: "blur(3px) saturate(0.9)",
              }}
              whileHover={{
                filter: "blur(0px) saturate(1)",
              }}
              transition={{ duration: 1.2 }}
            />

            {/* Metadata boxes */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute top-4 left-4 px-3 py-2 border border-[#00ff41]/40 bg-black/40"
              style={{ backdropFilter: "blur(15px)" }}
            >
              <p className="text-[#00ff41]/90 text-[0.6rem] tracking-wider uppercase">ARCH_02</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute bottom-4 right-4 px-3 py-2 border border-white/30 bg-black/40"
              style={{ backdropFilter: "blur(15px)" }}
            >
              <p className="text-white/70 text-[0.6rem] tracking-wider uppercase">CONCRETE</p>
            </motion.div>

            {/* Circular indicator */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              viewport={{ once: true }}
              className="absolute top-1/3 left-6 w-12 h-12 rounded-full border-2 border-[#00ff41] flex items-center justify-center"
            >
              <div className="text-[#00ff41] text-[0.6rem] font-mono">02</div>
            </motion.div>

            {/* Corner markers with green */}
            <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-[#00ff41]/30" />
            <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-[#00ff41]/30" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-[#00ff41]/30" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-[#00ff41]/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
