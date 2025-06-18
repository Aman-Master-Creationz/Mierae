import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import HeroSection from './Sections/Hero';
import LogoCarousel from './Sections/Logocrousal';
import WhyMierae from './Sections/Why Mierae';
import HowItWorks from './Sections/How It Works';
import SolarSavingsCalculator from './Sections/Calculator';
import Cta from './Sections/Cta';
import Blog from './Sections/Blogs';
import Faq from './Sections/Faq';
import Footer from './components/Footer';
import Testimonial from './Sections/Testimonial';
import Allsection from './Sections';

function App() {

  return (
    <>
      {/* <Navbar />
      <HeroSection />
      <WhyMierae />
      <HowItWorks />
      <SolarSavingsCalculator />
      <Cta />
      <Testimonial />
      <Blog />
      <Faq />
      <Footer /> */}
      <Allsection />
    </>
  )
}

export default App
