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
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden relative">
      <LiquifyCursor />
      <EtcHero />
      <WorkShowcase />
      <Suspense fallback={<div className="h-[60vh] bg-[#030303]" />}>
        <ShowreelSection />
      </Suspense>
      <ServicesSection />
      <ManifestoSection />
      <ContactEtc />
    </div>
  );
}
