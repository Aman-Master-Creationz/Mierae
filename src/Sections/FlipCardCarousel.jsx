import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const sliderRef = useRef(null);

  // Detect mobile devices
  useEffect(() => {
    const detectMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    detectMobile();
    window.addEventListener("resize", detectMobile);
    return () => window.removeEventListener("resize", detectMobile);
  }, []);

  // Toggle flip on mobile and control autoplay
  const toggleFlip = (index) => {
    if (isMobile) {
      const isFlipping = flippedIndex !== index;
      const newIndex = isFlipping ? index : null;
      setFlippedIndex(newIndex);

      // Pause if card is being flipped open, resume if flipped back
      setTimeout(() => {
        if (sliderRef.current) {
          if (isFlipping) {
            sliderRef.current.slickPause(); // stop autoplay
          } else {
            sliderRef.current.slickPlay(); // resume autoplay
          }
        }
      }, 300); // small delay to avoid conflict with animation
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="flip-carousel-wrapper">
      <Slider {...settings} ref={sliderRef}>
        {people.map((person, index) => (
          <div
            key={index}
            className="flip-card"
            onClick={() => toggleFlip(index)}
          >
            <div
              className={`flip-card-inner ${
                isMobile && flippedIndex === index ? "flipped" : ""
              }`}
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
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FlipCardCarousel;
