import CtaImage from '../assets/images/cta-iamge.png';
import CtaImageMob from '../assets/images/cta-iamge-mob.png';
import arrowImage from '../assets/images/arrow-under-zero.png'; // example image

import electricityIcon from '../assets/images/electricity.png';
import downPaymentIcon from '../assets/images/down-payment.png';
import processingFeeIcon from '../assets/images/processing-fee.png';
import documentationIcon from '../assets/images/documentation.png';
import maintenanceIcon from '../assets/images/maintenance.png';
import zero_mobile from '../assets/images/zero_mobile.svg';


const Cta = () => {
    return (
        <section className='cta_section'>
            <div className="container">
                <div className="cta_wrapper">
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <div className="cta_content_wrapper">
                                <p className="cta_head">
                                    Go Solar with{" "}
                                    <span className="zero">
                                        <span className="zero_word">
                                            ZERO Worries!
                                            <img
                                                src={arrowImage}
                                                alt="underline arrow"
                                                className="zero_underline"
                                            />
                                        </span>

                                    </span>
                                </p>

                                <div className="cta_icon_row mt-3">
                                    <div className="cta_icon_item">
                                        <img src={electricityIcon} alt="Electricity Bill" />
                                        <span>Electricity Bill</span>
                                    </div>
                                    <div className="cta_icon_item">
                                        <img src={downPaymentIcon} alt="Down Payment" />
                                        <span>Down Payment</span>
                                    </div>
                                    <div className="cta_icon_item">
                                        <img src={processingFeeIcon} alt="Processing Fee" />
                                        <span>Processing Fee</span>
                                    </div>
                                    <div className="cta_icon_item">
                                        <img src={documentationIcon} alt="Documentation Charges" />
                                        <span>Documentation Charges</span>
                                    </div>
                                    <div className="cta_icon_item">
                                        <img src={maintenanceIcon} alt="Maintenance Hassles" />
                                        <span>Maintenance Hassles</span>
                                    </div>
                                </div>



                                <button className="btn orange_button cta_button">
                                    Apply Today!
                                </button>

                                <img src={zero_mobile}  className='zero_image'/>
                            </div>
                        </div>

                        <div className="col-md-4 cta_image_wrapper">
                            {/* Optional: CtaImage or CtaImageMob if needed */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;
