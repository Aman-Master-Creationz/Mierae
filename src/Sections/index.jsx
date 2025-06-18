import Navbar from "../components/Navbar";
import HeroSection from "./Hero";
import WhyMierae from "./Why Mierae";
import HowItWorks from "./How It Works";
import SolarSavingsCalculator from "./Calculator";
import Cta from "./Cta";
import Testimonial from "./Testimonial";
import Blog from "./Blogs";
import Faq from "./Faq";
import Footer from "../components/Footer";

const Allsection = () => {
  const isMobile = window.innerWidth <= 767;

  return (
    <>
    
      {isMobile ? (
        <div className="scroll-snap-container">
            <div className={isMobile ? "scroll-snap-section auto-height" : ""}>
        <Navbar />
      </div>
          <section className="scroll-snap-section"><HeroSection /></section>
          <section className="scroll-snap-section"><WhyMierae /></section>
          <section className="scroll-snap-section"><HowItWorks /></section>
          <section className="scroll-snap-section"><SolarSavingsCalculator /></section>
          <section className="scroll-snap-section"><Cta /></section>
          <section className="scroll-snap-section"><Testimonial /></section>
          <section className="scroll-snap-section"><Faq /></section>
          <section className="scroll-snap-section"><Footer /></section>
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
      )}
    </>
  );
};

export default Allsection;
