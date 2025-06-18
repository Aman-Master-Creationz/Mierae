import { motion } from "framer-motion";
import Image1 from "../assets/images/service1.svg";
import Image2 from "../assets/images/service2.svg";
import Image3 from "../assets/images/service3.svg";
import Image4 from "../assets/images/service4.svg";
import Image5 from "../assets/images/service5.svg";
import Image6 from "../assets/images/service6.svg";

// Heading animation
const headingVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

// Subheading animation
const subheadingVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut", delay: 0.2 },
  },
};

// Cards wrapper with stagger
const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

// Card animation
const cardVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const cardData = [
  {
    img: Image1,
    mobile_img: Image4,
    title: "30+ Years Energy Guarantee",
    desc: "Assured solar output for decades of clean energy savings.",
  },
  {
    img: Image2,
    mobile_img: Image5,
    title: "12-Year Product Warranty",
    desc: "High-quality panels built to last with trusted protection.",
  },
  {
    img: Image3,
    mobile_img: Image6,
    title: "5-Year Free Maintenance",
    desc: "Free expert service ensures smooth and efficient operation.",
  },
];

const WhyMierae = () => {
  return (
    <section className="why_mierae section" id="why">
      <div className="container">
        <div className="row">
          {/* Heading + Subheading */}
          <motion.div
            className="head_wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.h2 className="head_black" data-text="Why Choose Mierae Solar?" variants={headingVariant}>
              We Make Solar <span>Easy, Reliable & Affordable</span>
            </motion.h2>
            <motion.p className="head_sub" variants={subheadingVariant}>
              Premium solar systems built for performance, savings, and trust.
            </motion.p>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="card_wrapper"
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="row">
              {cardData.map((card, i) => (
                <motion.div
                  className="col-md-4"
                  key={i}
                  variants={cardVariant}
                >
                  <div className="card flex-direction">
                    <img src={card.img} alt={card.title} className="card_img" />
                    <img src={card.mobile_img} alt={card.title} className="card_img_mobile" />
                    <div className="together">
                      <h3 className="card_head">{card.title}</h3>
                      <p className="card_sub">{card.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyMierae;
