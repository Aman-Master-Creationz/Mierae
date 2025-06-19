import { useRef, useEffect, useState } from "react";
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
    const scrollRef = useRef(null);
    const [showStickyButton, setShowStickyButton] = useState(false);

    useEffect(() => {
        const scrollEl = scrollRef.current;

        const handleScroll = () => {
            if (scrollEl.scrollTop > 100) {
                setShowStickyButton(true);
            } else {
                setShowStickyButton(false);
            }
        };

        if (scrollEl) {
            scrollEl.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (scrollEl) scrollEl.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return isMobile ? (
        <>
            <div
                ref={scrollRef}
                className="scroll-snap-container"
                style={{
                    height: "100vh",
                    overflowY: "scroll",
                    scrollSnapType: "y mandatory",
                }}
            >
                <div className={isMobile ? "scroll-snap-section auto-height" : ""}>
                    <Navbar />
                </div>
                <section className="scroll-snap-section"><HeroSection showSticky={showStickyButton} /></section>
                <section className="scroll-snap-section"><WhyMierae /></section>
                <section className="scroll-snap-section"><HowItWorks /></section>
                <section className="scroll-snap-section"><SolarSavingsCalculator /></section>
                <section className="scroll-snap-section"><Cta /></section>
                <section className="scroll-snap-section"><Testimonial /></section>
                <section className="scroll-snap-section"><Faq /></section>
                <section className="scroll-snap-section scroll_footer"><Footer /></section>
            </div>
        </>
    ) : (
        <div>
            <Navbar />
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


