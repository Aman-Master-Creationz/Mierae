import React, { useState, useRef } from 'react';
import SolarImage from '../assets/images/solar_image.png';
import RupeeIcon from '../assets/images/rupee_icon.svg';
import locationIcon from '../assets/images/location_icon.svg';

const SolarSavingsCalculator = () => {
    const [billAmount, setBillAmount] = useState('');
    const [state, setState] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const detailsRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (billAmount && state && state !== "Select State") {
            setSubmitted(true);

            setTimeout(() => {
                const target = detailsRef.current;

                if (window.innerWidth <= 767 && target) {
                    const container = document.querySelector('.scroll-snap-container');

                    if (container) {
                        const containerTop = container.getBoundingClientRect().top;
                        const targetTop = target.getBoundingClientRect().top;
                        const scrollOffset = targetTop - containerTop;

                        container.scrollTo({
                            top: container.scrollTop + scrollOffset,
                            behavior: 'smooth',
                        });
                    } else {
                        // Fallback if container is not used
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }, 100);
        } else {
            setSubmitted(false);
        }
    };

    return (
        <section className='calculator' id='calculator1'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className="head_black solar_head">
                            Estimate Your <span className="text-success">Solar Savings</span>
                        </h2>
                        <img
                            src={SolarImage}
                            alt="solar panels"
                            className="img-fluid solar_image mt-3 mt-lg-4"
                        />
                    </div>

                    <div className="col-lg-6 d-flex flex-column justify-content-center padding_mobile">
                        <p className="para_common">
                            <b>Instantly discover your ideal solar setup.</b> Just enter your average electricity bill
                            and state — we’ll calculate your recommended system size, space required,
                            estimated monthly energy generation, yearly savings, and the government subsidy
                            you’re eligible for.
                        </p>
                        <ul className="list-unstyled solor_list">
                            <li>• No sign-up required</li>
                            <li>• Get clarity in seconds</li>
                        </ul>

                        <form className="mt-0 md-mt-3 mt-lg-2" onSubmit={handleSubmit}>
                            <div className="mb-3 d-flex solar_icon_wrapper">
                                <img src={RupeeIcon} alt='logo' />
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Monthly Electricity Bill Amount"
                                    min="0"
                                    value={billAmount}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        if (value === '' || /^\d+$/.test(value)) {
                                            setBillAmount(value);
                                        }
                                    }}
                                    onKeyDown={(e) => {
                                        if (['-', 'e', '+', '.'].includes(e.key)) {
                                            e.preventDefault();
                                        }
                                    }}
                                />
                            </div>

                            <div className="mb-3 d-flex solar_icon_wrapper">
                                <img src={locationIcon} alt='logo' />
                                <select
                                    className="form-select"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                >
                                    <option>Select State</option>
                                    <option>Andhra Pradesh</option>
                                    <option>Odisha</option>
                                </select>
                            </div>

                            <button type="submit" className="btn orange_button custom_pad">
                                Calculate Savings
                            </button>
                        </form>
                    </div>
                </div>

                {/* Results Section */}
                {submitted && (
                    <div
                        ref={detailsRef}
                        className={`results-wrapper mt-5 ${submitted ? 'show' : ''}`}
                    >
                        <div className="row details">
                            <div className="col-md-4 col-6 mb-4 align-content-center">
                                <p className="solar_content">
                                    Based on your details, here’s a quick overview of your ideal solar rooftop system
                                    setup, savings & Govt. Subsidy
                                </p>
                            </div>

                            <div className="col-md-4 col-6 mb-2 md-mb-4">
                                <div className="card solar_card">
                                    <p className='solar_card_head'>3kw</p>
                                    <p className='solar_card_sub'>Best-fit solar capacity based on your energy needs.</p>
                                </div>
                            </div>

                            <div className="col-md-4 col-6 mb-2 md-mb-4">
                                <div className="card solar_card">
                                    <p className='solar_card_head'>180sft</p>
                                    <p className='solar_card_sub'>Estimated rooftop area needed for installation.</p>
                                </div>
                            </div>

                            <div className="col-md-4 col-6 mb-2 md-mb-4">
                                <div className="card solar_card">
                                    <p className='solar_card_head'>360units</p>
                                    <p className='solar_card_sub'>Expected solar energy generated every month.</p>
                                </div>
                            </div>

                            <div className="col-md-4 col-6 mb-2 md-mb-4">
                                <div className="card solar_card">
                                    <p className='solar_card_head'>₹43,200</p>
                                    <p className='solar_card_sub'>Your yearly electricity bill savings after installation.</p>
                                </div>
                            </div>

                            <div className="col-md-4 col-6 mb-2 md-mb-4">
                                <div className="card solar_card">
                                    <p className='solar_card_head'>₹78,000</p>
                                    <p className='solar_card_sub'>Subsidy you can receive based on your State.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default SolarSavingsCalculator;
