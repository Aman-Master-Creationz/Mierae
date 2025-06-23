import React, { useState } from "react";

const faqData = [
    {
        question: "Who can apply for the rooftop solar subsidy?",
        answer:
            "Any Indian homeowner with a valid electricity connection and rooftop space can apply under the PM Surya Ghar Yojana.",
    },
    {
        question: "How much subsidy do I get for a 3kW system?",
        answer: "You can get up to ₹78,000 in government subsidy for a 3kW rooftop solar installation.",
    },
    {
        question: "What documents are needed to apply?",
        answer: "Basic KYC like Aadhaar and electricity bill is enough. The process is fully digital with zero documentation charges.",
    },
    {
        question: "How long does installation take?",
        answer: "Installation is usually completed within 7 to 14 days after approval.",
    },

    {
        question: "What warranty do I get with the system?",
        answer: "You get a 10-year product warranty, 25-year energy output guarantee, and 5 years of free maintenance.",
    },
    {
        question: "Is financing or EMI available for the solar system?",
        answer: "Yes, Mierae offers easy financing options with zero down payment and zero processing fees to make your switch to solar hassle-free.",
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
                                <a href="#footer">
                                    <button className="btn white_button">
                                        Contact Us
                                    </button>
                                </a>

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