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
import HowItWorks2 from "./How It Works2";
import HowItWorks3 from "./How It Works3";
import HowItWorksPc from "./How It Works Pc";
import FlipCardCarousel from "./FlipCardCarousel";

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

    useEffect(() => {
        const setVh = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        setVh();
        window.addEventListener('resize', setVh);
        return () => window.removeEventListener('resize', setVh);
    }, []);


    return isMobile ? (
        <>
            <div
                ref={scrollRef}
                className="scroll-snap-container"
                style={{
                    height: "calc(var(--vh, 1vh) * 100)",
                    overflowY: "scroll",
                    scrollSnapType: "y mandatory",
                    paddingTop: "env(safe-area-inset-top)",
                    paddingBottom: "env(safe-area-inset-bottom)",
                }}
            >
                <div className={isMobile ? "scroll-snap-section auto-height" : ""}>
                    <Navbar />
                </div>
                <section className="scroll-snap-section"><HeroSection showSticky={showStickyButton} /></section>
                <section className="scroll-snap-section"><WhyMierae /></section>
                <section className="scroll-snap-section" ><HowItWorks /></section>
                <section className="scroll-snap-section" ><HowItWorks2 /></section>
                <section className="scroll-snap-section" ><HowItWorks3 /></section>
                <section className="scroll-snap-section"><SolarSavingsCalculator /></section>
                <section className="scroll-snap-section"><Cta /></section>
                <section className="scroll-snap-section"><Testimonial /></section>
                <section className="scroll-snap-section faq_snap_height"><Faq /></section>
                <section className="scroll-snap-section scroll_footer"><Footer /></section>
            </div>
        </>
    ) : (
        <div>
            <Navbar />
            <HeroSection />
            <WhyMierae />
            <HowItWorksPc />
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


