import Logo from '../assets/images/footer_logo.svg';
import location from '../assets/images/location_white.svg';
import Phone from '../assets/images/phone.svg';
import Mail from '../assets/images/mail.svg';
import Insta from '../assets/images/insta.svg';
import Fb from '../assets/images/facebook.svg';
import Link from '../assets/images/link.svg';
import Youtube from '../assets/images/youtube.svg';
import Mirae from '../assets/images/mierae_footer.svg';
import Cta from '../assets/images/footer_cta.png';

import Footer1 from '../assets/images/footericon1.png';
import Footer2 from '../assets/images/footericon2.png';
import Footer3 from '../assets/images/footericon3.png';

import Star from '../assets/images/stars.png';

const Footer = () => {
    return (
        <section className="footer_section" id='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">

                        <div className="footer_cta d-none d-md-block">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="row">
                                        <div className="col-10">
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

                                            <button className="btn orange_button green_button">
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-5 align-self-end">
                                    <img src={Cta} alt="cta" className="cta_img" />
                                </div>
                            </div>

                        </div>


                        <div className="footer_content_wrapper">
                            <img src={Logo} alt="logo" className="footer_logo" />
                            <p className='footer_sub mt-2 footer-mob'>At <b>Mierae Solar</b>, we provide top-quality rooftop solar systems backed by solid warranties and free maintenance. Proudly serving <b>Andhra Pradesh</b> and <b>Odisha</b>—including Major cities Visakhapatnam, Vijayawada, Bhubaneswar, Cuttack and across all districts — we make switching to clean, affordable solar energy simple and worry-free for every homeowner.</p>

                            <div className='d-flex mt-4 footer_info_wrapper'>
                                <div className='footer_info'>
                                    <p className='footer_head'>Mierae Solar Energy Private Limited </p>
                                    <p className='footer_sub'> <img src={location} />  HD-065, Eldeco Centre, Malviya Nagar, Delhi - 17</p>
                                </div>

                                <div className='footer_info'>
                                    <p className='footer_head'>Contact Number </p>
                                    <p className='footer_sub'><img src={Phone} className='footer_icon' />  9070607050</p>
                                </div>

                                <div className='footer_info'>
                                    <p className='footer_head'>Email Id</p>
                                    <p className='footer_sub'><img src={Mail} className='footer_icon' /> solar@mierae.com</p>
                                </div>

                                <div className='footer_info'>
                                    <p className='footer_head'>Get in Touch</p>
                                    <div className='d-flex gap-3'>
                                        <a href="#" target="_blank" rel="noopener noreferrer"><img src={Insta} alt='insta' /> </a>

                                        <a href="#" target="_blank" rel="noopener noreferrer"><img src={Fb} /></a>

                                        <a href="https://www.linkedin.com/company/mierae-solar/" target="_blank" rel="noopener noreferrer">
                                            <img src={Link} alt='insta' />
                                        </a>
                                        <img src={Youtube} /> </div>
                                </div>

                            </div>

                            <div className='copyright_wrapper'>
                                <div className='inside_wrapper'>
                                    <div className='copyright'>
                                        <p>2025 Mierae Solar. All rights reserved.</p>
                                    </div>

                                    <div className="policy_wrapper">

                                        <p>Terms OF Service</p>
                                        <p>Privacy Policy</p>
                                        <p>Cancel & Refund Policy</p>
                                        <p>Accessibility Policy</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mirae">
                                <img src={Mirae} alt="logo" className="mirae_logo" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;