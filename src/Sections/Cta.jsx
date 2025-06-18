
import CtaImage from '../assets/images/cta-iamge.png';
import CtaImageMob from '../assets/images/cta-iamge-mob.png';
const Cta = () => {
    return (
        <section>
            <div className="container">

                <div className="cta_wrapper">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="cta_content_wrapper">
                                <p className="cta_head">
                                    Flexible Payments for Every Homeowner
                                </p>
                                <p className="cta_sub">
                                    Get solar with easy EMI plans or one time payment
                                </p>
                                <p className="cta_para">
                                    Installation, subsidy, warranty — all handled by Mierae Solar.
                                </p>

                                <button className="btn orange_button cta_button">
                                    Check My plan
                                </button>
                            </div>

                        </div>
                        <div className="col-md-4 cta_image_wrapper">
                            <img src={CtaImage} alt="cta image" className="cta_img cta-img-desktop" />
                            <img src={CtaImageMob} alt="cta image" className="cta_img cta-img-mobile" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Cta;