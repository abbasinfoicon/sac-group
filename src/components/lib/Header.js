import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <div className="top-head">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="navbarCustom">
                                <nav className="navbar navbar-default">
                                    <div className="navbar-header">
                                        <button className="navbar-toggle" data-target="#myNavbarHeader" data-toggle="collapse"
                                            type="button">
                                            <i className="fa fa-bars"></i>
                                        </button>
                                        <Link to='/' className="navbar-brand"><img alt="" className="img-responsive img-header-logo" src="assets/img/logo.png" /></Link>
                                    </div>

                                    <Navbar />

                                    <div className="flag_lang">
                                        <ul>
                                            <li className="active"><Link to='/' ><img src="assets/img/uk-flag.png" alt="UK" /></Link></li>
                                            <li><Link to='/' ><img src="assets/img/gr-flag.png" alt="GR" /></Link></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header