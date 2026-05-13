// CSS approximations of the brand gradient photography from the Etc. PDF.
// These replace the 3–4 MB image imports and render instantly.

export const gradOrangeBlue =
  "radial-gradient(ellipse 80% 60% at 15% 85%, rgba(255,96,40,0.92) 0%, transparent 50%), " +
  "radial-gradient(ellipse 70% 70% at 78% 18%, rgba(35,35,210,0.88) 0%, transparent 52%), " +
  "radial-gradient(ellipse 60% 55% at 50% 45%, rgba(90,30,190,0.65) 0%, transparent 55%), " +
  "#0a0518";

export const gradPinkNavy =
  "radial-gradient(ellipse 70% 60% at 52% 68%, rgba(255,0,110,0.92) 0%, transparent 52%), " +
  "radial-gradient(ellipse 80% 70% at 18% 22%, rgba(18,18,140,0.90) 0%, transparent 55%), " +
  "radial-gradient(ellipse 55% 55% at 82% 18%, rgba(28,28,160,0.80) 0%, transparent 48%), " +
  "#05050f";

export const gradDarkCopper =
  "radial-gradient(ellipse 60% 60% at 25% 72%, rgba(38,56,230,0.82) 0%, transparent 48%), " +
  "radial-gradient(ellipse 58% 50% at 72% 28%, rgba(130,58,10,0.80) 0%, transparent 48%), " +
  "#050205";

// Grain SVG — shared across all sections
export const grain =
  `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;
