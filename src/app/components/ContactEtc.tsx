import { motion } from "motion/react";
import { MagneticButton } from "./MagneticButton";
import { TextReveal } from "./TextReveal";

export function ContactEtc() {
  return (
    <section
      id="contact"
      className="relative py-32 px-8 md:px-16 lg:px-20 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #7050a8 0%, #4a2878 30%, #2a1550 60%, #180d38 100%)" }}
    >
      <div className="relative z-10 max-w-5xl">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" style={{ boxShadow: "0 0 6px #CCFF00" }} />
          <span className="text-white/50 text-[0.6rem] tracking-[0.25em] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>LET'S TALK</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.1, delay: 0.2 }}
          className="text-white leading-[0.88] mb-12"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3.5rem, 10vw, 8rem)", fontWeight: 800, letterSpacing: "-0.02em" }}
        >
          <TextReveal text="Less small talk." delay={0.3} />
          <br />
          <span className="text-[#CCFF00] italic"><TextReveal text="More big thoughts." delay={0.7} /></span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.55 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-white leading-relaxed max-w-sm mb-16"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(0.9rem, 1.3vw, 1.1rem)", fontWeight: 300 }}
        >
          We'll keep it simple. We'd love to create something wild and crazy with you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <MagneticButton as="a" href="mailto:Ecetera@etc.designlabs.com">
            <div className="group flex items-center gap-4 px-6 py-4 border border-white/20 hover:border-[#CCFF00]/60 rounded-full transition-all duration-300 cursor-pointer">
              <span className="text-white/40 text-[0.55rem] tracking-[0.2em] uppercase group-hover:text-[#CCFF00]/70 transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>EMAIL</span>
              <span className="text-white/75 text-xs tracking-wide" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Ecetera@etc.designlabs.com</span>
            </div>
          </MagneticButton>

          <MagneticButton as="a" href="tel:+917219889670">
            <div className="group flex items-center gap-4 px-6 py-4 border border-white/20 hover:border-white/50 rounded-full transition-all duration-300 cursor-pointer">
              <span className="text-white/40 text-[0.55rem] tracking-[0.2em] uppercase group-hover:text-white/70 transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>MOBILE</span>
              <span className="text-white/75 text-xs tracking-wide" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>+91 72198 89670</span>
            </div>
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="relative z-10 mt-32 pt-8 border-t border-white/10 flex items-end justify-between flex-wrap gap-4"
      >
        <p
          className="text-white/8 leading-none"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(4rem, 12vw, 10rem)", fontWeight: 800, lineHeight: 0.85 }}
        >
          etc.™
        </p>
        <div className="text-right pb-2 space-y-1">
          <p className="text-white/20 text-[0.6rem] tracking-[0.2em] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>We can't list it all.</p>
          <p className="text-white/15 text-[0.55rem] tracking-[0.15em] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>ETCETERA DESIGN LABS — {new Date().getFullYear()}</p>
        </div>
      </motion.div>
    </section>
  );
}
