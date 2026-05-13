import { motion } from "motion/react";
import { gradPinkNavy, grain } from "./brandGradients";

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

export function ServicesSection() {
  return (
    <section className="relative min-h-screen w-full bg-[#080808] py-32 px-8 md:px-16 lg:px-20 border-t border-white/5 overflow-hidden">

      {/* Brand gradient tint — CSS, instant */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: gradPinkNavy }} />

      {/* Grain */}
      <div className="absolute inset-0 opacity-35 mix-blend-overlay pointer-events-none" style={{ backgroundImage: grain }} />

      {/* Bloom */}
      <motion.div
        className="absolute w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(204,255,0,0.05) 0%, transparent 70%)", filter: "blur(130px)", right: "15%", top: "30%" }}
        animate={{ opacity: [0.05, 0.09, 0.05], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-5xl">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.3 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#4040FF]" />
          <span className="text-white/50 text-[0.6rem] tracking-[0.25em] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>WHAT WE DO</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-white leading-[0.85] tracking-tighter mb-16"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 700, letterSpacing: "-0.03em" }}
        >
          We make people feel
          <br />
          something when they see you.
        </motion.h2>

        <div className="divide-y divide-white/8">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-center gap-8 py-7 cursor-default"
            >
              <span className="text-white/20 text-[0.6rem] tracking-[0.2em] w-6 flex-shrink-0" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{s.num}</span>
              <div className="flex-1 flex items-baseline justify-between gap-12">
                <h3
                  className="text-white/80 group-hover:text-white transition-colors duration-300 flex-shrink-0"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.1rem, 2vw, 1.5rem)", fontWeight: 600, letterSpacing: "-0.01em" }}
                >
                  {s.name}
                </h3>
                <p className="text-white/30 group-hover:text-white/55 text-xs leading-relaxed text-right max-w-[280px] transition-colors duration-300 hidden md:block" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {s.desc}
                </p>
              </div>
              {/* Laser lemon accent on hover */}
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] flex-shrink-0"
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.5 }}
          className="text-center mt-20 text-white/30 text-[0.6rem] tracking-[0.2em] uppercase"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          WE MAKE BRANDS MAKE SENSE — ETC.™
        </motion.div>
      </div>
    </section>
  );
}
