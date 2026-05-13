import { motion } from "motion/react";
import { useState } from "react";

export function ContactDarkroom() {
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

      {/* Soft atmospheric bloom */}
      <motion.div
        className="absolute w-[650px] h-[650px]"
        style={{
          background: "radial-gradient(circle, rgba(255, 0, 110, 0.08) 0%, transparent 70%)",
          filter: "blur(130px)",
          left: "20%",
          top: "30%",
        }}
        animate={{
          opacity: [0.08, 0.12, 0.08],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[600px] h-[600px]"
        style={{
          background: "radial-gradient(circle, rgba(131, 56, 236, 0.07) 0%, transparent 70%)",
          filter: "blur(120px)",
          right: "25%",
          bottom: "20%",
        }}
        animate={{
          opacity: [0.07, 0.11, 0.07],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT: Contact information with layered interface */}
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
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff006e]" />
              <span className="text-white/50 text-[0.6rem] tracking-[0.25em] uppercase">SECTION_04 / CONTACT</span>
            </motion.div>

            {/* Outlined headline */}
            <h2
              className="text-white/90 leading-[0.85] tracking-tighter mb-16"
              style={{
                fontFamily: "'Archivo Narrow', sans-serif",
                fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
                fontWeight: 700,
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)",
              }}
            >
              CONNECT
            </h2>

            {/* Email with enhanced styling */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-white/40 text-[0.6rem] tracking-[0.2em] uppercase mb-3">PRIMARY EMAIL</p>
              <motion.a
                href="mailto:hello@brizelkizzy.com"
                className="inline-block text-white/70 pb-2"
                style={{
                  fontSize: "clamp(1.3rem, 2.3vw, 1.9rem)",
                  fontWeight: 300,
                  borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
                }}
                whileHover={{
                  color: "rgba(255, 255, 255, 0.9)",
                  borderBottomColor: "rgba(255, 255, 255, 0.4)",
                }}
                transition={{ duration: 0.8 }}
              >
                hello@brizelkizzy.com
              </motion.a>
            </motion.div>

            {/* Status boxes grid */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              {[
                { label: "AVAILABILITY", value: "OPEN", color: "#00ff41" },
                { label: "RESPONSE TIME", value: "24-48H", color: "#00d4ff" },
                { label: "LOCATION", value: "GLOBAL", color: "#ff006e" },
                { label: "TIMEZONE", value: "FLEXIBLE", color: "#8338ec" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-white/10 bg-white/5 p-4"
                  style={{ backdropFilter: "blur(10px)" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <p className="text-white/40 text-[0.55rem] tracking-[0.2em] uppercase">
                      {item.label}
                    </p>
                  </div>
                  <p className="text-white/80 text-xs tracking-wider">{item.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Social links as navigation pills */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-white/40 text-[0.6rem] tracking-[0.2em] uppercase mb-4">PLATFORMS</p>
              <div className="flex flex-wrap gap-2">
                {["Instagram", "Behance", "Are.na", "LinkedIn"].map((platform, i) => (
                  <motion.a
                    key={platform}
                    href="#"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 0.7, scale: 1 }}
                    transition={{ delay: 1.2 + i * 0.05 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 border border-white/20 text-white/60 text-[0.65rem] tracking-wider uppercase hover:border-white/40 hover:text-white/80 transition-all duration-500"
                  >
                    {platform}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Closing note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              transition={{ duration: 2, delay: 1.5 }}
              viewport={{ once: true }}
              className="text-white/40 text-sm italic max-w-md border-l-2 border-white/10 pl-4"
            >
              for projects that value atmosphere over efficiency
            </motion.p>
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
                src="https://images.unsplash.com/photo-1673073529863-9d210d7c10c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Get in touch"
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
                  className="text-white text-center px-6"
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
                  LET'S
                  <br />
                  COLLABORATE
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
                <p className="text-white/80 text-[0.6rem] tracking-wider uppercase">STATUS: OPEN</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.7 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute bottom-4 right-4 px-3 py-2 border border-white/30 bg-black/40 text-right"
                style={{ backdropFilter: "blur(15px)" }}
              >
                <p className="text-white/70 text-[0.6rem] tracking-wider uppercase">© 2026</p>
              </motion.div>

              {/* Circular indicators */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                viewport={{ once: true }}
                className="absolute top-1/2 right-6 w-12 h-12 rounded-full border-2 border-[#ff006e] flex items-center justify-center"
              >
                <div className="w-2 h-2 rounded-full bg-[#ff006e]" />
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                viewport={{ once: true }}
                className="absolute bottom-1/3 left-6 w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center"
              >
                <div className="text-white/70 text-[0.6rem] font-mono">04</div>
              </motion.div>

              {/* Corner markers */}
              <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-white/20" />
              <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-white/20" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-white/20" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-white/20" />

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
              <motion.div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(circle, rgba(255, 0, 110, 0.2) 0%, transparent 70%)",
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
              className="absolute -left-20 bottom-1/4"
              width="100"
              height="100"
              viewBox="0 0 100 100"
            >
              <path
                d="M 100 50 Q 50 0, 0 50"
                fill="none"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            </motion.svg>
          </motion.div>
        </div>

        {/* System footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 1.7 }}
          viewport={{ once: true }}
          className="text-center mt-32 text-white/30 text-[0.6rem] tracking-[0.2em] uppercase font-mono"
        >
          <p>PORTFOLIO SITE / BRIZEL KIZZY PINTO / VISUAL ARCHIVE SYSTEM V2.0</p>
        </motion.div>
      </div>
    </section>
  );
}
