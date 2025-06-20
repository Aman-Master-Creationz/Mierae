import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import circle from '../assets/images/circle.svg';
import TestimonialSlider from '../components/Testimonialslider';
import FlipCardCarousel from './FlipCardCarousel';

const testimonials = [
    {
        text: `I Was Worried About Paperwork And Government Approvals, But Mierae Took Care Of It All. The Team Was Quick, Polite, And Very Transparent Throughout The Process.`,
        author: 'Mr. Ravi Kumar',
        location: 'Sompeta, Srikakulam, AP',
        tag: '3KW',
    },
    {
        text: `I Was Worried About Paperwork And Government Approvals, But Mierae Took Care Of It All. The Team Was Quick, Polite, And Very Transparent Throughout The Process.`,
        author: 'Mr. Ravi Kumar',
        location: 'Sompeta, Srikakulam, AP',
        tag: '8KW',
    },
    {
        text: `I Was Worried About Paperwork And Government Approvals, But Mierae Took Care Of It All. The Team Was Quick, Polite, And Very Transparent Throughout The Process.`,
        author: 'Mr. Ravi Kumar',
        location: 'Sompeta, Srikakulam, AP',
        tag: '6KW',
    },
];

const Testimonial = () => {
    return (
        <>
        <section className='testimonial_section_wrapper'>
            <div className='testimonail_head'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={circle} alt="person" className='circle' />
                        </div>
                        <div className="col-md-9 align-self-center">
                            <h2 className='head_black' data-text="Testimonials">Trusted by Homeowners <span>Across India</span></h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonial_section">
                <div className="container d-none d-md-block">
                    <div className="row position-relative">
                        <div className="top-left-curve2">
                            <svg viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                <path d="M0,0 C40,0 40,80 80,80 C120,80 120,0 160,0 L160,80 L0,80 Z" fill="#e3f2e9" />
                            </svg>
                        </div>

                        <div className="testimonial position-relative w-100" style={{ maxWidth: '100%', margin: '0 auto' }}>
                            <Swiper
                                modules={[Pagination, Navigation, Autoplay]}
                                pagination={{ clickable: true }}
                                navigation={true}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                loop={true}
                                spaceBetween={30}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    768: { slidesPerView: 1 },
                                }}
                                className="mySwiper"
                            >
                                {testimonials.map((testimonial, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="testimonial-card rounded-4 text-center position-relative">
                                            <div className="test_wrapper">
                                                <div className="top-left-curve">
                                                    <svg viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                                        <path d="M0,0 C40,0 40,80 80,80 C120,80 120,0 160,0 L160,80 L0,80 Z" fill="#fff" />
                                                    </svg>
                                                </div>
                                                <div className="testimonial-badge text-white position-absolute start-50 translate-middle">
                                                    {testimonial.tag}
                                                </div>
                                                <p className="testimonial-text mb-4">"{testimonial.text}"</p>
                                                <h5 className="fw-bold mb-1">{testimonial.author}</h5>
                                                <small className="text-secondary">{testimonial.location}</small>
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className="photo_crousal mt-5">
                            <TestimonialSlider />
                        </div>
                    </div>
                </div>

                <div className="container d-block d-md-none">
                    <div className="row">
                        <FlipCardCarousel />
                    </div>
                </div>
            </div>
        </section>
            
        </>
    );
};

export default Testimonial;
