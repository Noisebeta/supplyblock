import { useEffect } from "react";
import DashboardSection from "./components/DashboardSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import FutureScopeSection from "./components/FutureScopeSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import ProblemSection from "./components/ProblemSection";
import SmartSupportSection from "./components/SmartSupportSection";
import SolutionSection from "./components/SolutionSection";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        }
      },
      { threshold: 0.1 },
    );
    for (const el of document.querySelectorAll(".reveal-on-scroll")) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <HowItWorksSection />
        <SmartSupportSection />
        <DashboardSection />
        <FutureScopeSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
