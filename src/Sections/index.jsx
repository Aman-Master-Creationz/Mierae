import Footer from "../components/Footer";
import Blog from "./Blogs";
import SolarSavingsCalculator from "./Calculator";
import Cta from "./Cta";
import Faq from "./Faq";
import HeroSection from "./Hero";
import HowItWorks from "./How It Works";
import Testimonial from "./Testimonial";
import WhyMierae from "./Why Mierae";

import ReactFullpage from "@fullpage/react-fullpage";

// Allsection.jsx
const Allsection = () => {
  const isMobile = window.innerWidth <= 767;

  return isMobile ? (
    <div id="scroll-container">
      <section className="scroll-section"><HeroSection /></section>
      <section className="scroll-section"><WhyMierae /></section>
      <section className="scroll-section"><HowItWorks /></section>
      <section className="scroll-section"><SolarSavingsCalculator /></section>
      <section className="scroll-section"><Cta /></section>
      <section className="scroll-section"><Testimonial /></section>
      <section className="scroll-section"><Blog /></section>
      <section className="scroll-section"><Faq /></section>
      <section className="scroll-section"><Footer /></section>
    </div>
  ) : (
    <div>
      <HeroSection />
      <WhyMierae />
      <HowItWorks />
      <SolarSavingsCalculator />
      <Cta />
      <Testimonial />
      <Blog />
      <Faq />
      <Footer />
    </div>
  );
};

export default Allsection;
