import React, { Component } from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

class Services extends Component {
    render() {
        return (
            <section className="repair-services-area ptb-80 bg-f7fafd">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Focus on Your Website</h2>
                        <div className="bar"></div>
                        
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-services bg1">
                                <div className="icon">
                                    <i className="flaticon-monitor"></i>
                                </div>

                                <h3>User Experience</h3>
                                <p>Attention to detail is enhanced with our dynamic data-driven elements. Clean and concise.</p>
                                
                                {/* <Link href="#">
                                    <a><Icon.ArrowRight /></a>
                                </Link> */}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-services bg2">
                                <div className="icon">
                                    <i className="flaticon-idea"></i>
                                </div>

                                <h3>Customizable</h3>
                                <p>Our framework allows a high-degree of customization with fast and efficient development.</p>
                                
                                {/* <Link href="#">
                                    <a><Icon.ArrowRight /></a>
                                </Link> */}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-services bg3">
                                <div className="icon">
                                    <i className="flaticon-layout"></i>
                                </div>

                                <h3>Multi-Device Support</h3>
                                <p>Sourcecode is common for desktop and mobile platforms, seamlessly integrated.</p>
                                
                                {/* <Link href="#">
                                    <a><Icon.ArrowRight /></a>
                                </Link> */}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-services bg4">
                                <div className="icon">
                                    <i className="flaticon-update-arrows"></i>
                                </div>

                                <h3>Software Support</h3>
                                <p>We can provide long-term support and maintenance for your site and work with you on future updates.</p>
                                
                                {/* <Link href="#">
                                    <a><Icon.ArrowRight /></a>
                                </Link> */}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-services bg5">
                                <div className="icon">
                                    <i className="flaticon-smartphone"></i>
                                </div>

                                <h3>Accessible</h3>
                                <p>Developing with best practices for accessibility. Attention to detail is not only important, but paramount.</p>
                                
                                {/* <Link href="#">
                                    <a><Icon.ArrowRight /></a>
                                </Link> */}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-services bg6">
                                <div className="icon">
                                    <i className="flaticon-hard-disk"></i>
                                </div>

                                <h3>Backup & Documentation</h3>
                                <p>All applications and their data are backed up on the cloud and come thoroughly documented.</p>
                                
                                {/* <Link href="#">
                                    <a><Icon.ArrowRight /></a>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;
