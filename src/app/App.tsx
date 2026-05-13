import { Suspense, lazy } from "react";
import { LiquifyCursor } from "./components/LiquifyCursor";
import { EtcHero } from "./components/EtcHero";
import { WorkShowcase } from "./components/WorkShowcase";
import { ServicesSection } from "./components/ServicesSection";
import { ManifestoSection } from "./components/ManifestoSection";
import { ContactEtc } from "./components/ContactEtc";

// Showreel deferred — it pulls 175 image refs, load after above-fold content
const ShowreelSection = lazy(() =>
  import("./components/ShowreelSection").then((m) => ({ default: m.ShowreelSection }))
);

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden relative" style={{ background: "linear-gradient(180deg, #d8c8f0 0%, #ede4f8 15%, #f5eeff 30%)" }}>
      <LiquifyCursor />
      <EtcHero />
      <WorkShowcase />
      <Suspense fallback={<div className="h-[60vh]" style={{ background: "linear-gradient(150deg, #5a3080 0%, #3d1f65 100%)" }} />}>
        <ShowreelSection />
      </Suspense>
      <ServicesSection />
      <ManifestoSection />
      <ContactEtc />
    </div>
  );
}
