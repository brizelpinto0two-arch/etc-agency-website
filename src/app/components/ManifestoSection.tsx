import { motion } from "motion/react";
import { gradOrangeBlue, gradDarkCopper, grain } from "./brandGradients";
import { TextReveal } from "./TextReveal";

const steps = [
  { label: "We talk.",  sub: "We listen harder." },
  { label: "We think.", sub: "We question everything." },
  { label: "We make.",  sub: "We make it real." },
  { label: "We fix.",   sub: "Until it feels right." },
  { label: "Etc.",      sub: "Until you can't imagine it any other way." },
];

export function ManifestoSection() {
  return (
    <section id="about" className="relative min-h-screen w-full bg-[#050505] py-40 px-8 md:px-16 lg:px-20 overflow-hidden border-t border-white/5">

      {/* Brand gradients — CSS, instant */}
      <div className="absolute inset-0 opacity-12 pointer-events-none" style={{ background: gradOrangeBlue }} />
      <div className="absolute top-0 right-0 w-1/2 h-3/5 opacity-8 pointer-events-none" style={{ background: gradDarkCopper }} />

      {/* Grain */}
      <div className="absolute inset-0 opacity-35 mix-blend-overlay pointer-events-none" style={{ backgroundImage: grain }} />

      {/* Bloom */}
      <motion.div
        className="absolute w-[700px] h-[700px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(64,64,255,0.07) 0%, transparent 70%)", filter: "blur(130px)", right: "5%", top: "25%" }}
        animate={{ opacity: [0.07, 0.12, 0.07], scale: [1, 1.15, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left — story */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.3 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#4040FF]" />
              <span className="text-white/50 text-[0.6rem] tracking-[0.25em] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>WHY WE EXIST</span>
            </motion.div>

            <h2
              className="text-white leading-[0.85] tracking-tighter mb-12"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 700, letterSpacing: "-0.03em" }}
            >
              <TextReveal text="Because we saw more than just" delay={0.2} />
              <br />
              <span className="text-[#CCFF00]"><TextReveal text='"good enough."' delay={0.7} /></span>
            </h2>

            <div className="space-y-8 mb-16">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="text-white/60 leading-relaxed max-w-lg"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1rem, 1.6vw, 1.25rem)", fontWeight: 300 }}
              >
                We didn't fit the 9 to 5 box. We knew we had more to give and more to make.
                We wanted a place that felt like ours — a place to build what we believe in.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.7 }}
                className="text-white/40 leading-relaxed max-w-md"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(0.9rem, 1.3vw, 1.1rem)", fontWeight: 300, marginLeft: "8%" }}
              >
                Because we saw more and knew we could make it real.
              </motion.p>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "LOCATION",   value: "BANGALORE, IN"  },
                { label: "DISCIPLINE", value: "CREATIVE DESIGN" },
                { label: "FOCUS",      value: "BRAND + STRATEGY" },
                { label: "STATUS",     value: "ACTIVE"           },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  className="border border-white/10 bg-white/5 p-4 rounded-xl"
                  style={{ backdropFilter: "blur(10px)" }}
                >
                  <p className="text-white/40 text-[0.55rem] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.label}</p>
                  <p className="text-white/80 text-xs tracking-wider" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — process + why us */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay: 0.3 }}
            className="lg:pt-16"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
              <span className="text-white/50 text-[0.6rem] tracking-[0.25em] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>HOW WE WORK</span>
            </motion.div>

            <div className="divide-y divide-white/8 mb-16">
              {steps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="py-5 flex items-baseline justify-between gap-4 group"
                >
                  <span
                    className="text-white group-hover:text-[#CCFF00] transition-colors duration-300"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.02em" }}
                  >
                    {step.label}
                  </span>
                  <span className="text-white/30 text-xs tracking-wide text-right max-w-[140px] leading-snug" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{step.sub}</span>
                </motion.div>
              ))}
            </div>

            {/* Why work with us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="border border-white/10 bg-white/5 p-6 rounded-xl"
              style={{ backdropFilter: "blur(10px)" }}
            >
              <p className="text-white/40 text-[0.55rem] tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>WHY WORK WITH US</p>
              <p
                className="text-white/75 leading-relaxed"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)", fontWeight: 300 }}
              >
                We don't chase trends. We create work people want to talk about.
                We leave space for the unexpected. We build design that outlives your campaign.
                <span className="text-[#CCFF00]"> Etc.</span>
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1.5 }}
          className="text-center mt-32 text-white/30 text-[0.6rem] tracking-[0.2em] uppercase"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          ETCETERA — CREATIVE DESIGN AGENCY / WE CAN'T LIST IT ALL
        </motion.div>
      </div>
    </section>
  );
}
