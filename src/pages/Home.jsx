import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import CTASection from "../components/CTASection";
import About from "../components/About";
import Footer from "../components/Footer";

function Home() {
  return (
    <main className="overflow-x-hidden bg-slate-950">
      <Hero />
      <Features />
      <HowItWorks />
      <CTASection />
      <About />
      <Footer />
    </main>
  );
}

export default Home;