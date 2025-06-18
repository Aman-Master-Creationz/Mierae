import { motion } from "framer-motion";
import familyImage from "../assets/images/family.png";
import user1 from "../assets/images/author.svg";
import NameBadge from "../components/Namebadge";

// Parent animation with stagger
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Fade + rise animation for text
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// Fade + zoom animation for image
const imageFadeIn = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut", delay: 0.3 },
  },
};

const HeroSection = () => {
  return (
    <section className="her0_section" id="home">
      <div className="container">
        <div className="row align-items-end hero_wrapper">
          {/* Left Text Content */}
          <div className="col-lg-6">
            <motion.div
              className="banner_left_wrapper"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={containerVariants}
            >
              <NameBadge />


              <motion.h1 className="banner_head" variants={fadeUp}>
                Got Subsidy Of ₹78,000 <br />
                With Mierae Solar.
              </motion.h1>

              <motion.p
                className="mt-2 mt-md-3 banner_subhead"
                variants={fadeUp}
              >
                You Can Also Get A Govt. Subsidy & Save ₹4,000/Month Too!
              </motion.p>

              <motion.div
                className="d-flex gap-3 mt-3 mt-lg-4"
                variants={fadeUp}
              >
                <div className="button_wrap">
                <a href="#calculator1" className="btn navbar_button d-flex align-items-center">
                  <span className="me-2 nav_text1">Check Eligibility</span>
                  <span className="bg-white fw-bold rounded small nav_text2">IT’S FREE</span>
                </a>
                </div>

                <button className="btn orange_button not_mobile">Check Eligibility</button>
                <a href="#calculator1" className="btn white_button not_mobile">Calculate Savings</a>
              </motion.div>

              <motion.div className="mt-4 mt-md-5 single-row" variants={fadeUp}>
                <div className="d-flex align-items-center gap-0 gap-md-3">
                  <div>
                    <img src={user1} className="user_image" alt="user1" />
                  </div>
                  <div>
                    <h6 className="mb-0 text_200">200+</h6>
                  </div>
                </div>
                <small className="banner_last_text">Families Prefer Us!</small>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            className="col-lg-6 text-center pe-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={imageFadeIn}
          >
            <img
              src={familyImage}
              alt="Family with solar home"
              className="img-fluid"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
