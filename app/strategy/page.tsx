import CaseStudiesSection from "@/components/strategy/CaseStudiesSection";
import { TrustedBySlider } from "@/components/strategy/TrustedBySlider";
import { FrameworkSection } from "@/components/strategy/FrameworkSection";
import { HeroSection } from "@/components/strategy/HeroSection";
import Navbar from "@/components/strategy/Navbar";
import { ProgramsSection } from "@/components/strategy/ProgramSection";
//import ProjectsStudiesSection from "@/components/stratergy/projects";
import TermToolsPage from "@/components/strategy/TermToolsSection";
import Image from "next/image";
import { ToolStackSection } from "@/components/strategy/ExecutionSection";
import MarketingGrowthEngine from "@/components/strategy/Digital";
import Design2 from "@/components/strategy/Design2";
import DigitalMarketingFuture from "@/components/strategy/why";
import TacFooterLight from "@/components/strategy/footer";



export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProgramsSection />
      <FrameworkSection />
      <TrustedBySlider />
      <CaseStudiesSection />
      <TermToolsPage />
      <ToolStackSection />
      <MarketingGrowthEngine />
      <Design2 />
      <DigitalMarketingFuture />
      <TacFooterLight />
    </>
  );
}