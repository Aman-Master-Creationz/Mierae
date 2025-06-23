import Cta from '../assets/images/footer_cta.png';

import Footer1 from '../assets/images/footericon1.png';
import Footer2 from '../assets/images/footericon2.png';
import Footer3 from '../assets/images/footericon3.png';

import Star from '../assets/images/stars.png';
const Mobilefooter = () => {

    const message = encodeURIComponent("Hello Mierae Team, I'm interested in solar subsidy.");
    const phone = "919070607050";
    return (
        <section className="mobile_footer_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">

                        <div className="footer_cta">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-12">
                                            <p className='footer_cta_head'>Your</p>
                                            <div className="heading_wrapper">
                                                <h2 className="footer_cta_head1">Solar Plan</h2>
                                                <img src={Star} alt="Icon" className="corner_icon" />
                                            </div>
                                            <p className='footer_cta_head text-end'>is Ready</p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            <div className="footer_cta_content d-flex">
                                                <div className="footer_cta_inner">
                                                    <img src={Footer1} alt="cta" />
                                                    <p>Book a free home inspection today</p>
                                                </div>

                                                <div className="footer_cta_inner">
                                                    <img src={Footer2} alt="cta" />
                                                    <p>Compare EMI vs full payment options</p>
                                                </div>

                                                <div className="footer_cta_inner">
                                                    <img src={Footer3} alt="cta" />
                                                    <p>Fast-track your subsidy & installation</p>
                                                </div>
                                            </div>

                                            <a href={`https://wa.me/${phone}?text=${message}`} target="_blank" rel="noopener noreferrer">
                                                <button className="btn orange_button green_button">
                                                    Book Now
                                                </button></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-5 align-self-end">
                                    <img src={Cta} alt="cta" className="cta_img" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mobilefooter;