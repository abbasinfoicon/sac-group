import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="footer-textCenter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="footerBigLinks">
                                <li><Link to='/clients'>Client services</Link></li>
                                <li><Link to='/careers'> Join us</Link></li>
                                <li><Link to='/about'>Company</Link></li>
                                <li><Link to='/press'>Press</Link></li>
                                <li><Link to='/legal-notice'>Legal notice</Link></li>
                                <li><Link to='/contact'>Contact us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="social-icon">
                                <ul>
                                    <li><a href="https://www.facebook.com/" target="_blank"><i
                                        className="fa fa-facebook"></i></a></li>
                                    <li><a href="https://www.linkedin.com/" target="_blank"><i
                                        className="fa fa-linkedin"></i></a></li>
                                    <li><a href="https://twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a>
                                    </li>
                                    <li><a href="https://www.instagram.com/" target="_blank"><i
                                        className="fa fa-instagram"></i></a></li>
                                    <li><a href="https://www.youtube.com/" target="_blank"><i className="fa fa-play"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="footer-logo">
                                <a href="index.html">
                                    <img alt="" className="img-responsive" src="assets/img/logo.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-copright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="copyright-down">
                                <p>© Copyright Stahl Automotive Consulting GmbH & Co. KG 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer