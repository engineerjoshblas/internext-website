import React, { Component } from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

class Services extends Component {
    render() {
        return (
            <section className="repair-services-area ptb-80 bg-f7fafd">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Focus on Your App</h2>
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

                                <h3>Common Code Base</h3>
                                <p>Sourcecode is common between Web, Android, and iOS applications. All are delivered in unison.</p>
                                
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
                                <p>We can provide long-term support and maintenance for your codebase and application updates.</p>
                                
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
                                <p>Multi platform development practicing accessibility with attention to detail. All platforms in sync and ready for use.</p>
                                
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
