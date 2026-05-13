import { motion } from "motion/react";

import missingPiecePackaging from "@/imports/etc-work/img-028.jpg";
import spiceBasket from "@/imports/etc-work/img-060.jpg";
import beansOfBodhi from "@/imports/etc-work/img-080.jpg";
import monPetitFrere from "@/imports/etc-work/img-150.jpg";

const featured = [
  { client: "The Missing Piece",  service: "Brand Identity",  img: missingPiecePackaging, label: "FROM CHAOS TO CLARITY" },
  { client: "Spice Basket",       service: "Packaging",       img: spiceBasket,           label: "ART OF SPICE" },
  { client: "Beans of Bodhi",     service: "Brand Refresh",   img: beansOfBodhi,          label: "WESTERN GHATS SELECT" },
  { client: "Mon Petit Frère",    service: "Social & Print",  img: monPetitFrere,         label: "COME MESS IT UP" },
];

export function WorkShowcase() {
  return (
    <section id="work" className="relative w-full bg-[#F8EFD2] py-24 px-8 md:px-16 lg:px-20 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C1D736]" />
            <span className="text-[#4F4169]/50 text-[0.6rem] tracking-[0.25em] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>SELECTED WORK</span>
          </div>
          <h2
            className="text-[#4F4169] leading-[0.85] tracking-tighter"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(3.5rem, 8vw, 7rem)", fontWeight: 700, letterSpacing: "-0.03em" }}
          >
            WHAT WE'VE
            <br />
            <span className="text-[#4F4169]/30">MADE.</span>
          </h2>
        </motion.div>

        {/* Collage — large hero left + stack right */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-3 md:gap-4">

          {/* Hero image — tall, left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-2xl group"
            style={{ aspectRatio: "4/5" }}
          >
            <img
              src={featured[0].img}
              alt={featured[0].client}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-6">
              <p className="text-white/50 text-[0.55rem] tracking-[0.2em] uppercase mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{featured[0].service}</p>
              <p className="text-white font-semibold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1rem, 1.8vw, 1.4rem)" }}>{featured[0].client}</p>
            </div>
          </motion.div>

          {/* Right column — 3 images stacked */}
          <div className="flex flex-col gap-3 md:gap-4">

            {/* Top right — landscape */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-2xl group flex-1"
              style={{ minHeight: 0 }}
            >
              <img
                src={featured[1].img}
                alt={featured[1].client}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                style={{ minHeight: "180px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5">
                <p className="text-white/50 text-[0.5rem] tracking-[0.2em] uppercase mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{featured[1].service}</p>
                <p className="text-white font-semibold text-sm tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{featured[1].client}</p>
              </div>
            </motion.div>

            {/* Bottom two — side by side */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {featured.slice(2).map((item, i) => (
                <motion.div
                  key={item.client}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: 0.25 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative overflow-hidden rounded-2xl group aspect-square"
                >
                  <img
                    src={item.img}
                    alt={item.client}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-4">
                    <p className="text-white/45 text-[0.45rem] tracking-[0.2em] uppercase mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.service}</p>
                    <p className="text-white font-semibold text-xs tracking-tight leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.client}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* Footer line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="flex items-center justify-between mt-10 pt-8 border-t border-[#4F4169]/15"
        >
          <p className="text-[#4F4169]/30 text-[0.55rem] tracking-[0.22em] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            04 FEATURED PROJECTS — ETC.™
          </p>
          <p className="text-[#4F4169]/20 text-[0.55rem] tracking-[0.22em] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            BANGALORE, IN — 2025
          </p>
        </motion.div>

      </div>
    </section>
  );
}
