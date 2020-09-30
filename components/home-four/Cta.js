import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

class Cta extends Component {
    render() {
        return (
            <section className="repair-cta-area bg-0f054b">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="cta-repair-content">
                                <h3>We'll help your business get online</h3>
                                <p>Speak with an expert today about your sites specific needs, style, and timeline. We would be glad to assist you in providing both any information you need to get started with Internext today.</p>
                                <Link href="#">
                                    <a className="btn btn-primary">Request a Free Consultation</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6">
                        <div className="cta-repair-img">
								<ReactWOW delay='0.6s' animation='fadeInDown'>
                                    <img 
                                        src={require("../../static/images/services-right-image/service-right-main-pic.png")} 
                                        className="wow fadeInDown" 
                                        data-wow-delay="0.6s" 
                                        alt="main-pic"
                                    />
                                </ReactWOW>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="circle-box"><img src={require('../../static/images/circle.png')} alt="image" /></div>
                <div className="cta-shape"><img src={require('../../static/images/cta-shape.png')} alt="image" /></div>
            </section>
        );
    }
}

export default Cta;
