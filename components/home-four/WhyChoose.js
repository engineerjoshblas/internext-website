import React, { Component } from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

class WhyChoose extends Component {
    render() {
        return (
            <section className="repair-why-choose-us ptb-80 pb-0">
                <div className="container">
                    <div className="section-title">
                        <h2>Why We Are the Best Choice</h2>
                        <div className="bar"></div>
                        <p>Internext Solutions is the best agency to choose for the design and managment of your online business. We are commited to working with you every step of the way and making your sites vision a reality.  </p>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-box">
                                <div className="icon">
                                    <i className="flaticon-handshake"></i>
                                </div>
                                <h3>Simple and Understanding</h3>
                                <p>Getting your business online can be a difficult process if it is not something you have done before. We are here to work with you, and inform you every step of the way.</p>

                                <Link href="#">
                                    <a>
                                        <Icon.ArrowRight />
                                    </a>
                                </Link>

                                <div className="back-icon">
                                    <i className="flaticon-handshake"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-box">
                                <div className="icon">
                                    <i className="flaticon-repair"></i>
                                </div>
                                <h3>Reliable Delivery</h3>
                                <p>At Internext Solutions we take pride in the prompt delivery of our service and reliable schedule of our work. Getting your site online, functioning, and working for you is our first priority.  </p>

                                <Link href="#">
                                    <a>
                                        <Icon.ArrowRight />
                                    </a>
                                </Link>

                                <div className="back-icon">
                                    <i className="flaticon-repair"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-repair-box">
                                <div className="icon">
                                    <i className="flaticon-delivery-truck"></i>
                                </div>
                                <h3>Dependable Communication</h3>
                                <p>Communication with our clients is paramount. Always available and ready to work with you, it is our committment to communicate promptly. We are always on time. </p>
                                
                                <Link href="#">
                                    <a>
                                        <Icon.ArrowRight />
                                    </a>
                                </Link>

                                <div className="back-icon">
                                    <i className="flaticon-delivery-truck"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhyChoose;
