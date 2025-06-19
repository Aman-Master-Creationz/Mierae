import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

import solar1 from "../assets/images/person1.png";
import solar2 from "../assets/images/person2.png";
import solar3 from "../assets/images/person3.png";

const people = [
  {
    image: solar1,
    name: "Aman Singh",
    title: "Creative Director",
    content: "Aman leads the creative strategy with 10+ years of experience.",
  },
  {
    image: solar2,
    name: "Sarah Lee",
    title: "Product Designer",
    content: "Sarah designs interfaces that users love.",
  },
  {
    image: solar3,
    name: "John Doe",
    title: "Developer",
    content: "John builds fast, accessible websites and apps.",
  },
];

const FlipCardCarousel = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    const detectMobile = () => setIsMobile(window.innerWidth < 768);
    detectMobile();
    window.addEventListener("resize", detectMobile);
    return () => window.removeEventListener("resize", detectMobile);
  }, []);

  const handleCardClick = (index) => {
    if (isMobile) {
      const newIndex = flippedIndex === index ? null : index;
      setFlippedIndex(newIndex);

      if (swiperRef.current?.autoplay) {
        newIndex !== null ? swiperRef.current.autoplay.stop() : swiperRef.current.autoplay.start();
      }
    }
  };

  return (
    <div className="flip-carousel-wrapper">
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{ 768: { slidesPerView: 3 } }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Autoplay, Pagination]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {people.map((person, index) => (
          <SwiperSlide key={index}>
            <div
              className={`flip-card ${isMobile && flippedIndex === index ? "flipped" : ""}`}
              onClick={() => handleCardClick(index)}
            >
              <motion.div
                className="flip-card-inner"
                animate={{ rotateY: isMobile
                  ? flippedIndex === index ? 180 : 0
                  : 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flip-card-front">
                  <img src={person.image} alt={person.name} />
                  <div className="info">
                    <h4>{person.name}</h4>
                    <p>{person.title}</p>
                  </div>
                </div>
                <div className="flip-card-back">
                  <p>{person.content}</p>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FlipCardCarousel;
