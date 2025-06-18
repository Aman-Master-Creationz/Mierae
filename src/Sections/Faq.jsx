import React, { useState } from "react";

const faqData = [
    {
        question: "Who can apply under PM Surya Ghar Yojana?",
        answer:
            "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
    {
        question: "What is the installation time?",
        answer: "",
    },
    {
        question: "Is subsidy direct to the consumer?",
        answer: "",
    },
    {
        question: "How much space is needed?",
        answer: "",
    },
   
];

const Faq = () => {

    const [activeIndex, setActiveIndex] = useState(0); // first one open by default

    const toggleIndex = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="faq_section" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="faq_image_wrapper">
                            <div className="faq_left_content_wrapper">
                                <p>The Answers You
                                    Need For A Solar
                                    Rooftop System</p>
                            </div>

                            <div className="faq_contact_wrapper">
                                <p className="faq_contact_head">Still have a Question? </p>
                                <p className="faq_contact_sub">
                                    dont worry were free for consultation, just click button below.
                                </p>

                                <button className="btn white_button">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <h2 className="head_black faq_head">Your Questions, Answered</h2>
                        <div className="accordion" id="faqAccordion">
                            {faqData.map((faq, index) => {
                                const isActive = index === activeIndex;

                                return (
                                    <div
                                        key={index}
                                        className={`accordion-item mb-3 border-0 custom-rounded ${isActive ? "bg-green text-white" : "bg-light"
                                            }`}
                                    >
                                        <h2 className="accordion-header">
                                            <button
                                                className={`accordion-button shadow-none ${!isActive ? "collapsed text-dark" : "text-white"
                                                    }`}
                                                type="button"
                                                onClick={() => toggleIndex(index)}
                                            >
                                                {faq.question}
                                                {/* <span className="ms-auto fw-bold">
                                                    {isActive ? "−" : "+"}
                                                </span> */}
                                            </button>
                                        </h2>
                                        <div
                                            className={`accordion-collapse collapse ${isActive ? "show" : ""
                                                }`}
                                        >
                                            <div className="accordion-body">{faq.answer}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;