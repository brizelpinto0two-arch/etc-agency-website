import { motion } from "motion/react";

const services = [
  { num: "01", name: "Brand Identity Design",  desc: "Logos, systems, and visual languages that outlive your campaign." },
  { num: "02", name: "Brand Strategy",          desc: "The thinking behind the making. Positioning, voice, direction." },
  { num: "03", name: "Art Direction",           desc: "We decide what it looks like. And why it has to look that way." },
  { num: "04", name: "Social & Digital Design", desc: "Content that earns attention. Creatives built for real platforms." },
  { num: "05", name: "Product Packaging",       desc: "Design that sells before anyone opens the box." },
  { num: "06", name: "Print & Outdoor",         desc: "Work made for the real world — walls, billboards, and beyond." },
  { num: "07", name: "Motion Graphics",         desc: "Brands that move. Ideas that breathe." },
  { num: "08", name: "Video Editing",           desc: "Sequences that feel right. Every cut with intention." },
];

// Number texture — scattered digits like Baby Adult reference
const NUMBER_TEXTURE = Array.from({ length: 80 }, (_, i) => ({
  value: String(Math.floor(Math.abs(Math.sin(i * 7.3)) * 9) + 1),
  top:   `${(Math.abs(Math.sin(i * 3.1)) * 90 + 5).toFixed(1)}%`,
  left:  `${(Math.abs(Math.cos(i * 2.7)) * 94 + 3).toFixed(1)}%`,
  opacity: 0.06 + Math.abs(Math.sin(i * 1.4)) * 0.08,
}));

// Pixel terrain path — stepped blocks dividing white top from black bottom
// Each entry: [x% start, height in pixels]
const TERRAIN_STEPS = [
  [0,0],[3,8],[6,0],[9,16],[12,8],[15,24],[18,8],[21,16],[24,0],[27,8],
  [30,24],[33,16],[36,8],[39,32],[42,16],[45,8],[48,24],[51,16],[54,8],
  [57,0],[60,8],[63,16],[66,24],[69,8],[72,16],[75,8],[78,24],[81,16],
  [84,8],[87,0],[90,8],[93,16],[96,24],[99,8],[100,0],
];

function PixelTerrain() {
  const PIXEL = 8;
  // Build SVG path for stepped terrain
  const W = 1440;
  const H = 80;
  let d = `M0,${H} `;
  TERRAIN_STEPS.forEach(([xPct, yOff]) => {
    const x = Math.round((xPct / 100) * W / PIXEL) * PIXEL;
    const y = H - yOff;
    d += `L${x},${y} `;
  });
  d += `L${W},${H} Z`;

  return (
    <div className="w-full overflow-hidden" style={{ height: H, marginBottom: -1 }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        width="100%"
        height={H}
        className="block"
      >
        <path d={d} fill="#0a0a0a" />
      </svg>
    </div>
  );
}

export function ServicesSection() {
  return (
    <div>
      {/* ── WHITE TOP ── */}
      <section
        className="relative w-full bg-[#f0f0ee] pt-28 pb-0 px-8 md:px-16 lg:px-20 overflow-hidden"
      >
        {/* Number texture */}
        {NUMBER_TEXTURE.map((n, i) => (
          <span
            key={i}
            className="absolute text-[#1a1a1a] select-none pointer-events-none text-xs"
            style={{ top: n.top, left: n.left, opacity: n.opacity, fontFamily: "'Space Mono', monospace", fontSize: "10px" }}
          >
            {n.value}
          </span>
        ))}

        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-black/40 text-[0.6rem] tracking-[0.3em] mb-4" style={{ fontFamily: "'Space Mono', monospace" }}>
            — 04 / SERVICES
          </p>
          <h2
            className="text-black leading-none mb-16"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(5rem, 14vw, 11rem)", letterSpacing: "0.02em" }}
          >
            WHAT<br />WE DO.
          </h2>

          {/* Service list */}
          <div className="divide-y divide-black/10">
            {services.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center gap-6 py-5 cursor-default"
              >
                <span className="text-black/20 text-[0.55rem] tracking-[0.2em] w-6 flex-shrink-0" style={{ fontFamily: "'Space Mono', monospace" }}>{s.num}</span>
                <div className="flex-1 flex items-baseline justify-between gap-8">
                  <h3
                    className="text-black/75 group-hover:text-black transition-colors duration-200 flex-shrink-0"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", letterSpacing: "0.03em" }}
                  >
                    {s.name}
                  </h3>
                  <p className="text-black/30 group-hover:text-black/55 text-[0.65rem] leading-relaxed text-right max-w-[240px] transition-colors duration-200 hidden md:block" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {s.desc}
                  </p>
                </div>
                <div className="w-2 h-2 bg-[#CCFF00] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Extra padding before terrain */}
        <div className="h-20" />
      </section>

      {/* ── PIXEL TERRAIN EDGE ── */}
      <PixelTerrain />

      {/* ── BLACK BOTTOM BAR ── */}
      <div className="bg-[#0a0a0a] px-8 md:px-16 lg:px-20 py-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <p className="text-white/15 text-[0.55rem] tracking-[0.3em]" style={{ fontFamily: "'Space Mono', monospace" }}>
            WE MAKE BRANDS MAKE SENSE — ETC.™
          </p>
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-[#CCFF00]" />
            <div className="w-2 h-2 bg-white/15" />
            <div className="w-2 h-2 bg-white/8" />
          </div>
        </div>
      </div>
    </div>
  );
}
