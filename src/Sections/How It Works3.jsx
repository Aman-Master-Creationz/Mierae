import React, { useState } from 'react';
import { CheckCircleFill } from 'react-bootstrap-icons';
import tabImg1 from '../assets/images/tab_cont1.png';
import tabIcon1 from '../assets/images/tab_icon1.png';
import tabIcon2 from '../assets/images/tab_icon2.png';
import tabIcon3 from '../assets/images/tab_icon3.png';

const tabs = [

    {
        id: 3,
        label: 'Subsidy & System Activation',
        para: 'We manage approvals and start your solar savings.',
        image: tabImg1,
        icon: tabIcon3,
    },
];

const HowItWorks3 = () => {
    const [activeTab, setActiveTab] = useState(3);

    return (
        <section className='how_it_work' id='how'>
            <div className="container">
                <div className="tab_wrapper">
                    <div className="row">
                        <div className="head_wrapper how_it_work_margin">
                            <h2 className="head_black" data-text="What Mierae Handles Next?">Smooth and Simple Rooftop <span>Solar Process</span></h2>
                            <p className="head_sub">From onboarding to subsidy, we handle everything for you.</p>
                        </div>
                    </div>
                    <div className="row overflow-hidden">
                        {/* Left Tabs */}
                        <div className="col-lg-6 cud-pad">
                            {tabs.map((tab) => {
                                const isActive = tab.id === activeTab;
                                return (
                                    <div
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`d-flex flex-column mb-3 mb-lg-0 rounded`}
                                        style={{ cursor: 'pointer', transition: '0.3s ease' }}
                                    >
                                        <div className="d-flex justify-content-start gap-3 gap-md-4 marg">
                                            {/* Tab Number and Line */}
                                            <div className='number_wrapper'>
                                                <div className={`${isActive ? 'tab_num_active' : 'tab_num'}`}>
                                                    0{tab.id}
                                                </div>
                                                <div className='d-none d-lg-block'
                                                    style={{
                                                        height: '100%',
                                                        width: '2px',
                                                        marginTop: '4px',
                                                        backgroundColor: isActive ? '#198754' : '#C4C4C4',
                                                        borderRadius: '1px',
                                                    }}
                                                ></div>
                                            </div>

                                            {/* Tab Heading and Text */}
                                            <div style={{ width: '90%' }} className={`${isActive ? 'tab_head_wrapper_active' : 'tab_head_wrapper'}`}>

                                                {isActive &&
                                                    <img
                                                        src={tab.icon}
                                                        alt="Tab Content"
                                                        className="img-fluid"
                                                        style={{ maxHeight: '400px', objectFit: 'cover' }}
                                                    />}

                                                <div className='d-flex flex-column gap-2'>
                                                    <p className={`${isActive ? 'tab_head_cont1_active' : 'tab_head_cont1'}`}>{tab.label}</p>
                                                    <p className={`${isActive ? 'tab_head_cont2_active' : 'tab_head_cont2'}`}>{tab.para}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Tab Content Below for Small Screens */}
                                        <div className="d-flex d-lg-none tab_content_wrapper">
                                            {isActive && (
                                                <img
                                                    src={tab.image}
                                                    alt="Tab Content"
                                                    className="img-fluid"
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>


                        {/* Right Content */}
                        {/* Right Content for md and larger only */}
                        <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-end">
                            <img
                                src={tabs.find((tab) => tab.id === activeTab).image}
                                alt="Tab Content"
                                className="img-fluid"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default HowItWorks3;
