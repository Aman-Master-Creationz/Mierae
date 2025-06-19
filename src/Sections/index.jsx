import Navbar from "../components/Navbar";
import HeroSection from "./Hero";
import WhyMierae from "./Why Mierae";
import HowItWorks from "./How It Works";
import HowItWorks2 from "./How It Works2";
import HowItWorks3 from "./How It Works3";
import SolarSavingsCalculator from "./Calculator";
import Cta from "./Cta";
import Testimonial from "./Testimonial";
import Blog from "./Blogs";
import Faq from "./Faq";
import Footer from "../components/Footer";
import HowItWorksPc from "./How It Works Pc";
import FlipCardCarousel from "./FlipCardCarousel";

const Allsection = () => {
  return (
    <>
      <Navbar />
      <section className="snap-section"><HeroSection showSticky={true} /></section>
      <section className="snap-section"><WhyMierae /></section>
      <section className="snap-section"><HowItWorks /></section>
      <section className="snap-section"><HowItWorks2 /></section>
      <section className="snap-section"><HowItWorks3 /></section>
      <section className="snap-section"><SolarSavingsCalculator /></section>
      <section className="snap-section"><Cta /></section>
      <section className="snap-section"><Testimonial /></section>
      <section className="snap-section"><Faq /></section>
      <section className="snap-section"><Footer /></section>
    </>
  );
};

export default Allsection;
