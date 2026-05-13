import { motion } from "motion/react";
import { useState } from "react";

export function AboutDarkroom() {
  const [hoveredImage, setHoveredImage] = useState(false);

  return (
    <section className="relative min-h-screen w-full bg-[#050505] py-40 px-8 md:px-16 lg:px-20 overflow-hidden">
      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ultra-soft bloom gradient */}
      <motion.div
        className="absolute w-[700px] h-[700px]"
        style={{
          background: "radial-gradient(circle, rgba(0, 245, 255, 0.06) 0%, transparent 70%)",
          filter: "blur(130px)",
          right: "15%",
          top: "25%",
        }}
        animate={{
          opacity: [0.06, 0.1, 0.06],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* LEFT: Layered text content with interface elements */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Metadata cluster - top */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              transition={{ duration: 2, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]" />
              <span className="text-white/50 text-[0.6rem] tracking-[0.25em] uppercase">SECTION_03</span>
            </motion.div>

            {/* Outlined headline */}
            <h2
              className="text-white/90 leading-[0.85] tracking-tighter mb-12"
              style={{
                fontFamily: "'Archivo Narrow', sans-serif",
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                fontWeight: 700,
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)",
              }}
            >
              APPROACH
            </h2>

            {/* Copy with enhanced spacing */}
            <div className="space-y-10 mb-16">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-white/60 leading-relaxed max-w-lg"
                style={{
                  fontSize: "clamp(1.1rem, 1.7vw, 1.35rem)",
                  fontWeight: 300,
                }}
              >
                Creating visual systems that behave like emotional
                climates rather than functional interfaces.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-white/50 leading-relaxed max-w-md"
                style={{
                  fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)",
                  fontWeight: 300,
                  marginLeft: "10%",
                }}
              >
                Work exists at the intersection of atmosphere,
                memory, and sensory internet artifacts.
              </motion.p>
            </div>

            {/* Info boxes grid */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              {[
                { label: "DISCIPLINE", value: "VISUAL DESIGN" },
                { label: "FOCUS", value: "SYSTEMS" },
                { label: "METHOD", value: "RESEARCH" },
                { label: "LOCATION", value: "GLOBAL" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
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
              transition={{ delay: 1.3 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {["Atmosphere", "Memory", "Interface", "Archive"].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 0.7, scale: 1 }}
                  transition={{ delay: 1.4 + i * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 border border-white/20 text-white/60 text-[0.65rem] tracking-wider uppercase hover:border-white/40 hover:text-white/80 transition-all duration-500"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Blurred image with interface overlays */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] max-w-lg ml-auto"
          >
            <div
              className="relative w-full h-full overflow-hidden border border-white/10"
              onMouseEnter={() => setHoveredImage(true)}
              onMouseLeave={() => setHoveredImage(false)}
            >
              {/* Blurred image */}
              <motion.img
                src="https://images.unsplash.com/photo-1687673230293-bf166bc22d18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Visual approach"
                className="w-full h-full object-cover"
                style={{
                  filter: hoveredImage
                    ? "blur(4px) saturate(1.1)"
                    : "blur(20px) saturate(0.7)",
                }}
                animate={{
                  scale: hoveredImage ? 1.05 : 1,
                }}
                transition={{
                  duration: 1.2,
                }}
              />

              {/* Outlined typography overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.h3
                  className="text-white text-center px-6 rotate-[-2deg]"
                  style={{
                    fontFamily: "'Archivo Narrow', sans-serif",
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    fontWeight: 700,
                    WebkitTextFillColor: "transparent",
                    WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.75)",
                    lineHeight: 0.9,
                  }}
                  animate={{
                    WebkitTextStroke: hoveredImage
                      ? "1.5px rgba(255, 255, 255, 0.9)"
                      : "1.5px rgba(255, 255, 255, 0.75)",
                  }}
                  transition={{ duration: 0.8 }}
                >
                  EMOTIONAL
                  <br />
                  SYSTEMS
                </motion.h3>
              </div>

              {/* Metadata boxes */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.7 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute top-4 left-4 px-3 py-2 border border-white/30 bg-black/40"
                style={{ backdropFilter: "blur(15px)" }}
              >
                <p className="text-white/70 text-[0.6rem] tracking-wider uppercase">PHILOSOPHY</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.7 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute bottom-4 right-4 px-3 py-2 border border-white/30 bg-black/40 text-right"
                style={{ backdropFilter: "blur(15px)" }}
              >
                <p className="text-white/70 text-[0.6rem] tracking-wider uppercase">2023—NOW</p>
              </motion.div>

              {/* Circular indicators */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                viewport={{ once: true }}
                className="absolute top-1/3 right-6 w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center"
              >
                <div className="text-white/70 text-[0.6rem] font-mono">03</div>
              </motion.div>

              {/* Corner markers */}
              <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-white/20" />
              <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-white/20" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-white/20" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-white/20" />

              {/* Bloom & grain */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(circle, rgba(0, 212, 255, 0.2) 0%, transparent 70%)",
                  mixBlendMode: "screen",
                }}
                animate={{
                  opacity: hoveredImage ? 0.3 : 0.5,
                  filter: hoveredImage ? "blur(30px)" : "blur(50px)",
                }}
                transition={{ duration: 1 }}
              />
              <motion.div
                className="absolute inset-0 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
                animate={{
                  opacity: hoveredImage ? 0.3 : 0.5,
                }}
                transition={{ duration: 0.8 }}
              />
            </div>

            {/* Curved connector line */}
            <motion.svg
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.2 }}
              viewport={{ once: true }}
              className="absolute -left-20 top-1/3"
              width="100"
              height="100"
              viewBox="0 0 100 100"
            >
              <path
                d="M 100 50 Q 50 100, 0 50"
                fill="none"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            </motion.svg>
          </motion.div>
        </div>

        {/* System indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 1.5 }}
          viewport={{ once: true }}
          className="text-center mt-32 text-white/30 text-[0.6rem] tracking-[0.2em] uppercase font-mono"
        >
          <p>VISUAL PRACTICE / BASED IN DIGITAL SPACE / WORKING GLOBALLY</p>
        </motion.div>
      </div>
    </section>
  );
}
