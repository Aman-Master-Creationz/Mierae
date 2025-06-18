
import RightArrow from "../assets/images/arrow2.svg";
import Blog2 from "../assets/images/blog_2.png";
import Blog3 from "../assets/images/blog_3.png";
const Blog = () => {
    return (
        <section className="section blog_section ">
            <div className="container">
                <div className="blog_wrapper">
                    <div className="row">
                        <div className="head_wrapper">
                            <h2 className="head_black" data-text="Still curious about going solar?">Explore Solar <span>Insights & Updates</span></h2>
                            <p className="head_sub">Simple answers to real questions — discover how Mierae makes solar work for you.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="blog_content_wrapper">
                                <div className="left_blog_image_wrapper">

                                </div>
                                <div className="blog_content">
                                    <p className="blog_head blog_head_big">Government Incentives & Policies: What’s New in Solar Energy Support</p>
                                    <p className="blog_sub blog_sub_big">Policy changes can make or break solar adoption rates across regions.This post breaks down recent government incentives, tax credits, and regulations you should know.</p>
                                    <button className=" blog_button"> Read More <img src={RightArrow} alt="right arrow" /></button>
                                </div>
                            </div>


                        </div>

                        <div className="col-md-6">

                            <div className="blog_content_wrapper d-flex mb-4">
                                <div className="right_blog_image_wrapper">
                                    <img src={Blog2} className="right_blog_image" alt="" />
                                </div>
                                <div className="blog_content2">
                                    <p className="blog_head">The Rise of Residential Solar: Why More Homeowners Are Going Off-Grid</p>
                                    <p className="blog_sub">With rising energy costs and improved solar efficiency, homeowners are increasingly turning to solar solutions.</p>
                                    <button className=" blog_button2"> Read More <img src={RightArrow} alt="right arrow" /></button>
                                </div>
                            </div>

                            <div className="blog_content_wrapper d-flex">
                                <div className="right_blog_image_wrapper">
                                    <img src={Blog3} className="right_blog_image" alt="" />
                                </div>
                                <div className="blog_content2">
                                    <p className="blog_head">Solar Tech 2025: Innovations Powering the Next Energy Revolution</p>
                                    <p className="blog_sub">From solar shingles to AI-powered grids, cutting-edge tech is transforming how we harness the sun. Get up to speed with the newest innovations.</p>
                                    <button className=" blog_button2"> Read More <img src={RightArrow} alt="right arrow" /></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;