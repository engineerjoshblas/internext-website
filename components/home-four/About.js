import React, { Component } from 'react';
import * as Icon from 'react-feather';
import ReactWOW from 'react-wow'

class About extends Component {
    render() {
        return (
            <section className="repair-about-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1"/>
                        <div className="col-lg-6">
                            <div className="repair-about-content">
                                <span className="sub-title">About Us</span>
                                <h2>We have 35 years of experience in repair services</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <ul>
                                    <li><span><Icon.Check /> Experienced Professionals</span></li>
                                    <li><span><Icon.Check /> Expert Technical Skills</span></li>
                                    <li><span><Icon.Check /> Excellent Reputation</span></li>
                                    <li><span><Icon.Check /> Friendly Service</span></li>
                                    <li><span><Icon.Check /> Trustworthy See Reviews</span></li>
                                    <li><span><Icon.Check /> Affordable Diagnosis</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-1"/>
                        <div className="col-lg-4">
                            <div className="repair-about-image">
                                <ReactWOW delay='0.6s' animation='fadeInUp'>
                                    <img 
                                        src={require("../../static/images/services-right-image/service-right-main-pic.png")} 
                                        className="wow fadeInUp" 
                                        data-wow-delay="0.6s" 
                                        alt="main-pic"
                                    />
                                </ReactWOW>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
