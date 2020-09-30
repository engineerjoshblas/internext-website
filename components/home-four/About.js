import React, { Component } from 'react';
import * as Icon from 'react-feather';

class About extends Component {
    render() {
        return (
            <section className="repair-about-area ptb-80">
                <div className="container">
                    <div className="row">
						<div className="col-lg-2" />
                        <div className="col-lg-8">
                            <div className="repair-about-content">
                                <span className="sub-title">About Internext</span>
                                <h2>Responsive websites for small and large scale projects.</h2>
                                <p>Using SuperApps custom framework we are able to fully accommodate our customers by providing a fresh and customized application.</p>

                                <ul>
                                    <li><span><Icon.Check /> Responsive Interface</span></li>
                                    <li><span><Icon.Check /> Customizable Content</span></li>
                                    <li><span><Icon.Check /> User Experience Design</span></li>
                                    <li><span><Icon.Check /> Clean & Documented Code</span></li>
                                    <li><span><Icon.Check /> Reliable Communication</span></li>
                                    <li><span><Icon.Check /> Long Term Support</span></li>
                                </ul>
                            </div>
                        </div>
						<div className="col-lg-2" />
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
