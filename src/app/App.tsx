import { Suspense, lazy } from "react";
import { LiquifyCursor } from "./components/LiquifyCursor";
import { EtcHero } from "./components/EtcHero";
import { WorkShowcase } from "./components/WorkShowcase";
import { ServicesSection } from "./components/ServicesSection";

const ShowreelSection = lazy(() =>
  import("./components/ShowreelSection").then((m) => ({ default: m.ShowreelSection }))
);

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden relative bg-[#080808]">
      <LiquifyCursor />
      <EtcHero />
      <WorkShowcase />
      <Suspense fallback={<div className="h-[60vh] bg-[#050505]" />}>
        <ShowreelSection />
      </Suspense>
      <ServicesSection />
    </div>
  );
}
