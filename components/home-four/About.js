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
                                <span className="sub-title">About Internext Solutions</span>
                                <h2>Responsive Web Design and Freelance services.</h2>
                                <p>At Internext Solutions we provide charming web designs and a number of freelance services.</p>

                                <ul>
                                    <li><span><Icon.Check /> Mobile app development</span></li>
                                    <li><span><Icon.Check /> Ecommerce</span></li>
                                    <li><span><Icon.Check /> Logo creations</span></li>
                                    <li><span><Icon.Check /> Article Writing </span></li>
                                    <li><span><Icon.Check /> Resume builder</span></li>
                                    <li><span><Icon.Check /> Photography</span></li>
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
