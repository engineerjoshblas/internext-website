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
                                <span className="sub-title">About SuperApps</span>
                                <h2>iPhone and Android Apps using React Native</h2>
                                <p>Using SuperApps custom framework we are able to fully accommodate our customers by providing a fresh and customized application.</p>

                                <ul>
                                    <li><span><Icon.Check /> Responsive Interface</span></li>
                                    <li><span><Icon.Check /> Customizable Logic</span></li>
                                    <li><span><Icon.Check /> User Experience Design</span></li>
                                    <li><span><Icon.Check /> Clean Scalable Code</span></li>
                                    <li><span><Icon.Check /> Readable Documentation</span></li>
                                    <li><span><Icon.Check /> Software Support</span></li>
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
