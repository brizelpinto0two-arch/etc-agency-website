import { motion } from "motion/react";

import missingPiecePackaging from "@/imports/etc-work/img-028.jpg";
import spiceBasket from "@/imports/etc-work/img-060.jpg";
import beansOfBodhi from "@/imports/etc-work/img-080.jpg";
import monPetitFrere from "@/imports/etc-work/img-150.jpg";

const featured = [
  { client: "The Missing Piece", service: "Brand Identity", img: missingPiecePackaging },
  { client: "Spice Basket",      service: "Packaging",      img: spiceBasket           },
  { client: "Beans of Bodhi",    service: "Brand Refresh",  img: beansOfBodhi          },
  { client: "Mon Petit Frère",   service: "Social & Print", img: monPetitFrere         },
];

export function WorkShowcase() {
  return (
    <section
      id="work"
      className="relative w-full py-24 px-8 md:px-16 lg:px-20"
      style={{ background: "linear-gradient(160deg, #f0e8ff 0%, #f8f3ff 50%, #ede6ff 100%)" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" style={{ boxShadow: "0 0 6px #CCFF00" }} />
            <span className="text-black/45 text-[0.6rem] tracking-[0.25em] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>SELECTED WORK</span>
          </div>
          <h2
            className="text-black leading-[0.88]"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3.5rem, 8vw, 7rem)", fontWeight: 800, letterSpacing: "-0.02em" }}
          >
            What We've
            <br />
            <span className="italic opacity-30">Made.</span>
          </h2>
        </motion.div>

        {/* Collage */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-3 md:gap-4">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-2xl group"
            style={{ aspectRatio: "4/5" }}
          >
            <img src={featured[0].img} alt={featured[0].client} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-6">
              <p className="text-white/50 text-[0.55rem] tracking-[0.2em] uppercase mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{featured[0].service}</p>
              <p className="text-white font-semibold" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1rem, 1.8vw, 1.4rem)" }}>{featured[0].client}</p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-3 md:gap-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-2xl group flex-1"
              style={{ minHeight: 0 }}
            >
              <img src={featured[1].img} alt={featured[1].client} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" style={{ minHeight: "180px" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5">
                <p className="text-white/50 text-[0.5rem] tracking-[0.2em] uppercase mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{featured[1].service}</p>
                <p className="text-white font-semibold text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>{featured[1].client}</p>
              </div>
            </motion.div>

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
                  <img src={item.img} alt={item.client} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-4">
                    <p className="text-white/45 text-[0.45rem] tracking-[0.2em] uppercase mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.service}</p>
                    <p className="text-white font-semibold text-xs leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>{item.client}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="flex items-center justify-between mt-10 pt-8 border-t border-black/10"
        >
          <p className="text-black/25 text-[0.55rem] tracking-[0.22em] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>04 FEATURED PROJECTS — ETC.™</p>
          <p className="text-black/20 text-[0.55rem] tracking-[0.22em] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>BANGALORE, IN — 2025</p>
        </motion.div>
      </div>
    </section>
  );
}
