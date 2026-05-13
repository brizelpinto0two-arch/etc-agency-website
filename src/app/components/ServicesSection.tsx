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

export function ServicesSection() {
  return (
    <section className="relative min-h-screen w-full bg-[#F9F8F5] py-32 px-8 md:px-16 lg:px-20 border-t border-[#4F4169]/10">

      <div className="relative z-10 max-w-5xl">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.3 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#3E7438]" />
          <span className="text-[#4F4169]/50 text-[0.6rem] tracking-[0.25em] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>WHAT WE DO</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-[#4F4169] leading-[0.9] mb-16"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 800, letterSpacing: "-0.02em" }}
        >
          We make people feel
          <br />
          <span className="italic">something</span> when they see you.
        </motion.h2>

        <div className="divide-y divide-[#4F4169]/12">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-center gap-8 py-7 cursor-default"
            >
              <span className="text-[#4F4169]/25 text-[0.6rem] tracking-[0.2em] w-6 flex-shrink-0" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{s.num}</span>
              <div className="flex-1 flex items-baseline justify-between gap-12">
                <h3
                  className="text-[#4F4169]/75 group-hover:text-[#4F4169] transition-colors duration-300 flex-shrink-0"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.1rem, 2vw, 1.5rem)", fontWeight: 600 }}
                >
                  {s.name}
                </h3>
                <p className="text-[#4F4169]/35 group-hover:text-[#4F4169]/60 text-xs leading-relaxed text-right max-w-[280px] transition-colors duration-300 hidden md:block" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {s.desc}
                </p>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ boxShadow: "0 0 6px #CCFF00" }} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.5 }}
          className="text-center mt-20 text-[#4F4169]/30 text-[0.6rem] tracking-[0.2em] uppercase"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          WE MAKE BRANDS MAKE SENSE — ETC.™
        </motion.div>
      </div>
    </section>
  );
}
