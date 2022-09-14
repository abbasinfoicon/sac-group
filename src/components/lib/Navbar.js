import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="collapse navbar-collapse" id="myNavbarHeader">
            <ul className="nav navbar-nav">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/clients">Clients</NavLink></li>
                <li><NavLink to="/insights">Insights</NavLink></li>
                <li><NavLink to="/careers">Careers</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar