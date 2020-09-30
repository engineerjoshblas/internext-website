import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

class Team extends React.Component {
    render() {
        return (
            <section className="team-area repair-team-area ptb-80 bg-f9f6f6">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Amazing Team</h2>
                        <div className="bar"></div>
                        <p>Internext Solutions has a wonderful team and a great support network. We are able to handle the needs of your online business both large and small. </p>
                    </div>
                

                    <div className="row">


                        <div className="col-lg-4 col-md-4">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src={require('../../static/images/repair-team-image/repair-team2.jpg')} alt="image" />
                                </div>

                                <div className="team-content">
                                    <div className="team-info">
                                        <h3>Christopher Canin</h3>
                                        <span>CEO & Founder</span>
                                    </div>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a><Icon.Facebook /></a>
                                            </Link>
                                            
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><Icon.Twitter /></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><Icon.Linkedin /></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><Icon.Gitlab /></a>
                                            </Link>
                                        </li>
                                    </ul>

                                    <p>Christopher is a software developer, with a passion for mobile apps and B2B solutions. </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src={require('../../static/images/repair-team-image/repair-team3.jpg')} alt="image" />
                                </div>

                                <div className="team-content">
                                    <div className="team-info">
                                        <h3>Josh Blas</h3>
                                        <span>Developer and Designer</span>
                                    </div>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a><Icon.Facebook /></a>
                                            </Link>
                                            
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><Icon.Twitter /></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><Icon.Linkedin /></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><Icon.Gitlab /></a>
                                            </Link>
                                        </li>
                                    </ul>

                                    <p>Josh Blas is a software developer and graphic designer here at Internext Solutions </p>
                                </div>
                            </div>
                        </div>

						<div className="col-lg-4 col-md-4">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src={require('../../static/images/repair-team-image/repair-team2.jpg')} alt="image" />
                                </div>

                                <div className="team-content">
                                    <div className="team-info">
                                        <h3>Ivy Moran</h3>
                                        <span>Project Managment</span>
                                    </div>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a><Icon.Facebook /></a>
                                            </Link>
                                            
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><Icon.Twitter /></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><Icon.Linkedin /></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><Icon.Gitlab /></a>
                                            </Link>
                                        </li>
                                    </ul>

                                    <p>Ivy Moran is the project and client manager here at Internext Solutions. </p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-md-6">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src={require('../../static/images/repair-team-image/repair-team4.jpg')} alt="image" />
                                </div>

                                <div className="team-content">
                                    <div className="team-info">
                                        <h3>Jason Statham</h3>
                                        <span>CEO & Founder</span>
                                    </div>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a><Icon.Facebook /></a>
                                            </Link>
                                            
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><Icon.Twitter /></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><Icon.Linkedin /></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><Icon.Gitlab /></a>
                                            </Link>
                                        </li>
                                    </ul>

                                    <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </section>
        )
    }
}

export default Team