import { motion } from "motion/react";
import { useState } from "react";

interface ArchiveItem {
  id: number;
  title: string;
  metadata: string;
  image: string;
  year: string;
  status: string;
  code: string;
}

const archiveItems: ArchiveItem[] = [
  {
    id: 1,
    title: "INFRARED",
    metadata: "campaign",
    image: "https://images.unsplash.com/photo-1759223293145-017da2722112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    year: "2026",
    status: "ACTIVE",
    code: "ARC_01",
  },
  {
    id: 2,
    title: "SYNTHETIC",
    metadata: "art direction",
    image: "https://images.unsplash.com/photo-1762144688858-2dc13e00f9a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    year: "2026",
    status: "LIVE",
    code: "ARC_02",
  },
  {
    id: 3,
    title: "ULTRAVIOLET",
    metadata: "editorial",
    image: "https://images.unsplash.com/photo-1687673230293-bf166bc22d18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    year: "2025",
    status: "ARCHIVED",
    code: "ARC_03",
  },
  {
    id: 4,
    title: "WASHED",
    metadata: "installation",
    image: "https://images.unsplash.com/photo-1673073529863-9d210d7c10c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    year: "2025",
    status: "LIVE",
    code: "ARC_04",
  },
  {
    id: 5,
    title: "TOXIC",
    metadata: "brand identity",
    image: "https://images.unsplash.com/photo-1717128491459-ea4ed6bce359?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    year: "2025",
    status: "ACTIVE",
    code: "ARC_05",
  },
  {
    id: 6,
    title: "CYAN",
    metadata: "spatial design",
    image: "https://images.unsplash.com/photo-1775338562178-b8c56bc9e5f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    year: "2024",
    status: "ARCHIVED",
    code: "ARC_06",
  },
];

export function ArchiveGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen w-full bg-[#050505] py-32 px-8 md:px-16 lg:px-20">
      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Atmospheric bloom */}
      <motion.div
        className="absolute w-[600px] h-[600px]"
        style={{
          background: "radial-gradient(circle, rgba(255, 0, 110, 0.06) 0%, transparent 70%)",
          filter: "blur(140px)",
          left: "10%",
          top: "20%",
        }}
        animate={{
          opacity: [0.06, 0.1, 0.06],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Section title with outlined text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="mb-24 relative"
      >
        <div className="flex items-start justify-between">
          <div>
            <h2
              className="text-white/90 leading-[0.85] tracking-tighter mb-4"
              style={{
                fontFamily: "'Archivo Narrow', sans-serif",
                fontSize: "clamp(3.5rem, 8vw, 6rem)",
                fontWeight: 700,
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)",
              }}
            >
              SELECTED WORK
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#00ff41]" />
              <p className="text-white/30 text-xs tracking-[0.25em] uppercase">
                emotional visual fragments
              </p>
            </div>
          </div>

          {/* Info cluster */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="hidden md:block text-right text-white/40 text-[0.6rem] tracking-wider uppercase space-y-1"
          >
            <p>TOTAL: 06</p>
            <p>SYSTEM: V2.0</p>
            <p>UPDATE: 2026</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Modular project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl">
        {archiveItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: index * 0.1,
            }}
            viewport={{ once: true, margin: "-50px" }}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group cursor-pointer relative"
          >
            {/* Image container with interface overlays */}
            <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-black/40 border border-white/5">
              {/* Blurred image */}
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                style={{
                  filter: hoveredId === item.id
                    ? "blur(4px) saturate(1.1)"
                    : "blur(20px) saturate(0.7)",
                }}
                animate={{
                  scale: hoveredId === item.id ? 1.05 : 1,
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
                    fontSize: "clamp(2rem, 3.5vw, 3rem)",
                    fontWeight: 700,
                    WebkitTextFillColor: "transparent",
                    WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.7)",
                  }}
                  animate={{
                    WebkitTextStroke: hoveredId === item.id
                      ? "1.5px rgba(255, 255, 255, 0.9)"
                      : "1.5px rgba(255, 255, 255, 0.7)",
                  }}
                  transition={{ duration: 0.8 }}
                >
                  {item.title}
                </motion.h3>
              </div>

              {/* Top left metadata box */}
              <motion.div
                className="absolute top-3 left-3 px-2 py-1 border border-white/20 bg-black/30 text-[0.55rem] tracking-wider uppercase"
                style={{ backdropFilter: "blur(10px)" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.7 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <span className="text-white/70">{item.code}</span>
              </motion.div>

              {/* Top right status indicator */}
              <motion.div
                className="absolute top-3 right-3 flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${item.status === "ACTIVE" ? "bg-[#00ff41]" : item.status === "LIVE" ? "bg-[#00d4ff]" : "bg-white/30"}`} />
                <span className="text-white/60 text-[0.55rem] tracking-wider uppercase">{item.status}</span>
              </motion.div>

              {/* Bottom left label */}
              <motion.div
                className="absolute bottom-3 left-3 px-2 py-1 border border-white/20 bg-black/30"
                style={{ backdropFilter: "blur(10px)" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.7 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <span className="text-white/70 text-[0.55rem] tracking-wider uppercase">{item.year}</span>
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
                  background: "radial-gradient(circle, rgba(131, 56, 236, 0.2) 0%, transparent 70%)",
                  mixBlendMode: "screen",
                }}
                animate={{
                  opacity: hoveredId === item.id ? 0.3 : 0.5,
                  filter: hoveredId === item.id ? "blur(30px)" : "blur(50px)",
                }}
                transition={{ duration: 1 }}
              />
              <motion.div
                className="absolute inset-0 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
                animate={{
                  opacity: hoveredId === item.id ? 0.3 : 0.5,
                }}
                transition={{ duration: 0.8 }}
              />
            </div>

            {/* Metadata cluster below */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/40 text-[0.65rem] tracking-[0.2em] uppercase mb-1">
                  {item.metadata}
                </p>
                <motion.div
                  className="flex items-center gap-2"
                  animate={{
                    opacity: hoveredId === item.id ? 1 : 0.6,
                  }}
                >
                  <div className="w-1 h-1 rounded-full bg-white/40" />
                  <span className="text-white/60 text-[0.6rem] tracking-wider">VISUAL ARCHIVE</span>
                </motion.div>
              </div>

              {/* Arrow indicator on hover */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: hoveredId === item.id ? 0.7 : 0,
                  x: hoveredId === item.id ? 0 : -10,
                }}
                transition={{ duration: 0.6 }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="white" strokeWidth="1.5" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom system note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-32 text-white/30 text-[0.65rem] tracking-[0.2em] uppercase"
      >
        <p>HOVER TO REVEAL / CLICK TO EXPLORE</p>
      </motion.div>
    </section>
  );
}
