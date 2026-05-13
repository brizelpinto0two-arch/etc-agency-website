import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useState } from "react";

import missingPiecePackaging from "@/imports/etc-work/img-028.jpg";
import missingPieceCards from "@/imports/etc-work/img-024.jpg";
import missingPieceBillboard from "@/imports/etc-work/img-026.jpg";
import boldBeyondIdentity from "@/imports/etc-work/img-014.jpg";
import boldBeyondSocial from "@/imports/etc-work/img-022.jpg";
import spiceBasket from "@/imports/etc-work/img-060.jpg";
import beansOfBodhi from "@/imports/etc-work/img-080.jpg";
import vistaraOutdoor from "@/imports/etc-work/img-090.jpg";
import unbar from "@/imports/etc-work/img-110.jpg";
import sanchez from "@/imports/etc-work/img-130.jpg";
import monPetitFrere from "@/imports/etc-work/img-150.jpg";
import dramBell from "@/imports/etc-work/img-160.jpg";
import vakra from "@/imports/etc-work/img-170.jpg";

const grain = `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

type Category = "all" | "brand" | "print" | "social";

const projects = [
  { id: 1,  category: "brand"  as Category, client: "The Missing Piece",  service: "BRAND IDENTITY",    label: "FROM CHAOS TO CLARITY",       code: "WRK_01", img: missingPiecePackaging },
  { id: 2,  category: "brand"  as Category, client: "The Missing Piece",  service: "BRAND SYSTEM",      label: "PAUSE BREATHE PUZZLE",         code: "WRK_02", img: missingPieceCards },
  { id: 3,  category: "social" as Category, client: "Dram Bell",          service: "SOCIAL MEDIA",      label: "OVERTHINKING OCEAN",           code: "WRK_03", img: dramBell },
  { id: 4,  category: "print"  as Category, client: "The Missing Piece",  service: "OUTDOOR",           label: "PUZZLES THAT SPARK JOY",       code: "WRK_04", img: missingPieceBillboard },
  { id: 5,  category: "brand"  as Category, client: "Bold & Beyond",      service: "VISUAL IDENTITY",   label: "BOLD & BEYOND",                code: "WRK_05", img: boldBeyondIdentity },
  { id: 6,  category: "social" as Category, client: "Mon Petit Frère",    service: "SOCIAL MEDIA",      label: "COME MESS IT UP",              code: "WRK_06", img: monPetitFrere },
  { id: 7,  category: "brand"  as Category, client: "Spice Basket",       service: "PACKAGING",         label: "ART OF SPICE",                 code: "WRK_07", img: spiceBasket },
  { id: 8,  category: "print"  as Category, client: "Vistara Airways",    service: "OUTDOOR CAMPAIGN",  label: "NEW SKIES",                    code: "WRK_08", img: vistaraOutdoor },
  { id: 9,  category: "social" as Category, client: "Vakra",              service: "SOCIAL MEDIA",      label: "NEWS THAT DOESN'T FLINCH",     code: "WRK_09", img: vakra },
  { id: 10, category: "brand"  as Category, client: "Beans of Bodhi",     service: "BRAND REFRESH",     label: "WESTERN GHATS SELECT",         code: "WRK_10", img: beansOfBodhi },
  { id: 11, category: "print"  as Category, client: "UNBAR",              service: "OUTDOOR DESIGN",    label: "A SNACK THAT ORBITS YOU",      code: "WRK_11", img: unbar },
  { id: 12, category: "social" as Category, client: "Sanchez",            service: "SOCIAL + PRINT",    label: "FRIDAY FIESTA",                code: "WRK_12", img: sanchez },
  { id: 13, category: "brand"  as Category, client: "Bold & Beyond",      service: "SOCIAL CAMPAIGN",   label: "BOLD MINDS BEYOND HORIZONS",   code: "WRK_13", img: boldBeyondSocial },
];

const tabs: { label: string; value: Category }[] = [
  { label: "All Work",         value: "all"    },
  { label: "Brand Identity",   value: "brand"  },
  { label: "Print & Outdoor",  value: "print"  },
  { label: "Social & Digital", value: "social" },
];

// ─── 3D tilt card ─────────────────────────────────────────────────────────────
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 30 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
    >
      {children}
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export function WorkShowcase() {
  const [active, setActive] = useState<Category>("all");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const visible = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="relative min-h-screen w-full bg-[#050505] py-32 px-8 md:px-16 lg:px-20">

      {/* Grain */}
      <div className="absolute inset-0 opacity-35 mix-blend-overlay pointer-events-none" style={{ backgroundImage: grain }} />

      {/* Bloom */}
      <motion.div
        className="absolute w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(204,255,0,0.04) 0%, transparent 70%)", filter: "blur(140px)", left: "10%", top: "20%" }}
        animate={{ opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="mb-14"
        >
          <div className="flex items-start justify-between flex-wrap gap-6 mb-6">
            <h2
              className="text-white leading-[0.85] tracking-tighter"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(4rem, 10vw, 8rem)", fontWeight: 700, letterSpacing: "-0.03em" }}
            >
              SELECTED WORK
            </h2>
            <div className="hidden md:block text-right text-white/35 text-[0.6rem] tracking-wider uppercase space-y-1 pt-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <p>TOTAL: {String(visible.length).padStart(2, "0")}</p>
              <p>SYSTEM: V1.0</p>
              <p>UPDATE: 2025</p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-10">
            <div className="w-2 h-2 rounded-full bg-[#CCFF00]" />
            <p className="text-white/35 text-[0.6rem] tracking-[0.25em] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              ETC. CREATIVE ARCHIVE — DESIGN THAT MOVES. DESIGN THAT STICKS.
            </p>
          </div>

          {/* Filter tabs — rounded */}
          <div className="flex gap-2 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActive(tab.value)}
                className={`px-5 py-2 text-[0.65rem] tracking-[0.15em] uppercase transition-all duration-300 border rounded-full ${
                  active === tab.value
                    ? "border-white/60 text-white bg-white/8"
                    : "border-white/15 text-white/40 hover:border-white/35 hover:text-white/70"
                }`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.2, delay: index * 0.08 }}
              >
                <TiltCard className="group cursor-pointer">
                  <div
                    onMouseEnter={() => setHoveredId(project.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Image card — square */}
                    <div className="relative aspect-square overflow-hidden mb-4 bg-black/60 rounded-xl border border-white/8">

                      <motion.img
                        src={project.img}
                        alt={project.client}
                        className="w-full h-full object-cover"
                        style={{ filter: hoveredId === project.id ? "blur(3px) saturate(1.1)" : "blur(14px) saturate(0.55)" }}
                        animate={{ scale: hoveredId === project.id ? 1.06 : 1 }}
                        transition={{ duration: 1.2 }}
                      />

                      {/* Label */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <motion.h3
                          className="text-white text-center px-6 leading-tight"
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "clamp(1.2rem, 2.2vw, 1.8rem)",
                            fontWeight: 700,
                            letterSpacing: "-0.02em",
                          }}
                          animate={{ opacity: hoveredId === project.id ? 0.95 : 0.7 }}
                          transition={{ duration: 0.4 }}
                        >
                          {project.label}
                        </motion.h3>
                      </div>

                      {/* Code badge — rounded */}
                      <div
                        className="absolute top-3 left-3 px-2.5 py-1 border border-white/20 bg-black/50 rounded-full"
                        style={{ backdropFilter: "blur(10px)" }}
                      >
                        <span className="text-white/70 text-[0.5rem] tracking-wider uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{project.code}</span>
                      </div>

                      {/* Live badge — rounded, on hover */}
                      <motion.div
                        className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 border border-white/15 bg-black/40 rounded-full"
                        style={{ backdropFilter: "blur(10px)" }}
                        animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
                        <span className="text-white/70 text-[0.5rem] tracking-wider uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>LIVE</span>
                      </motion.div>

                      {/* Year badge — rounded */}
                      <div
                        className="absolute bottom-3 left-3 px-2.5 py-1 border border-white/20 bg-black/50 rounded-full"
                        style={{ backdropFilter: "blur(10px)" }}
                      >
                        <span className="text-white/60 text-[0.5rem] tracking-wider uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>2025</span>
                      </div>

                      {/* Grain on card */}
                      <div className="absolute inset-0 mix-blend-overlay opacity-30 pointer-events-none rounded-xl" style={{ backgroundImage: grain }} />
                    </div>

                    {/* Metadata below */}
                    <div className="flex items-start justify-between gap-4 px-1">
                      <div>
                        <p className="text-white/35 text-[0.58rem] tracking-[0.22em] uppercase mb-1.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{project.service}</p>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-white/35" />
                          <span className="text-white/60 text-[0.65rem] tracking-wider uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>{project.client}</span>
                        </div>
                      </div>
                      <motion.div
                        animate={{ opacity: hoveredId === project.id ? 0.8 : 0, x: hoveredId === project.id ? 0 : -8 }}
                        transition={{ duration: 0.4 }}
                        className="pt-1 flex-shrink-0"
                      >
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                          <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="white" strokeWidth="1.5" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-24 text-white/30 text-[0.6rem] tracking-[0.2em] uppercase"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          HOVER TO REVEAL / WE CAN'T LIST IT ALL — ETC.™
        </motion.div>
      </div>
    </section>
  );
}
