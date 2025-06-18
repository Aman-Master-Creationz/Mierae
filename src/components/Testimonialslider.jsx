import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import solar1 from '../assets/images/person1.png';
import solar2 from '../assets/images/person2.png';
import solar3 from '../assets/images/person3.png';

const images = [solar1, solar2, solar3, solar1, solar2, solar3];

const TestimonialSlider = () => {
    return (
        <div className="container">
            <div className="row test_slider">
                <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Autoplay]}
                    className="mySwiper"
                    style={{ paddingBottom: '20px' }}
                >
                    {images.map((img, i) => (
                        <SwiperSlide
                            key={i}
                            style={{
                                width: '300px',
                                height: '100%',
                                borderRadius: '10px',
                                overflow: 'hidden',
                                background: '#111',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <img
                                src={img}
                                alt={`Slide ${i + 1}`}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    );
};

export default TestimonialSlider;
