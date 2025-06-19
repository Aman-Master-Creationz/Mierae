import React, { useState } from "react";
import Slider from "react-slick";

import solar1 from "../assets/images/person1.png";
import solar2 from "../assets/images/person2.png";
import solar3 from "../assets/images/person3.png";

const people = [
  {
    image: solar1,
    name: "Mr. Ravi Kumar",
    title: "Sompeta, Srikakaulam, AP",
    content: "I was worried about paperwork and government approvals, but Mierae took care of it all. The team was quick, polite, and very transparent throughout the process.",
  },
  {
    image: solar2,
    name: "Mr. Ravi Kumar",
    title: "Sompeta, Srikakaulam, AP",
    content: "I was worried about paperwork and government approvals, but Mierae took care of it all. The team was quick, polite, and very transparent throughout the process.",
  },
  {
    image: solar3,
    name: "Mr. Ravi Kumar",
    title: "Sompeta, Srikakaulam, AP",
    content: "I was worried about paperwork and government approvals, but Mierae took care of it all. The team was quick, polite, and very transparent throughout the process.",
  },
];

const FlipCardCarousel = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const toggleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
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
      <Slider {...settings}>
        {people.map((person, index) => (
          <div key={index} className="flip-card" onClick={() => toggleFlip(index)}>
            <div className={`flip-card-inner ${flippedIndex === index ? "flipped" : ""}`}>
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
