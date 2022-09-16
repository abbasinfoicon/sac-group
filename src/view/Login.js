import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/lib/Banner'

const Login = () => {
    return (
        <>
            <Banner title="Login" banner="banner1.jpg" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
            <section className="login">
                <div className="container">
                    <div className="row main-content bg-success">
                        <div className="col-md-4 company__info">
                            <span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
                            <h4 className="company_title">STAHL<span>Automotive consulting</span></h4>
                        </div>

                        <div className="col-md-8">
                            <div className="login_form">
                                <h2>Log In</h2>
                                
                                <form className="form">
                                    <div className="form-group">
                                        <span className="fa fa-envelope"></span>
                                        <input type="email" name="email" id="email" className="form__input" placeholder="Email" />
                                    </div>

                                    <div className="form-group">
                                        <span className="fa fa-lock"></span>
                                        <input type="password" name="password" id="password" className="form__input" placeholder="Password" />
                                    </div>

                                    <div className="form-group ">
                                        <input type="checkbox" name="remember_me" id="remember_me" className="" />
                                        <label htmlFor="remember_me">Remember Me!</label>
                                    </div>

                                    <div className="form-group text-center">
                                        <input type="submit" value="Submit" className="btn" />
                                    </div>
                                </form>

                                <div className="form-group">
                                    <p>Don't have an account? <Link to="/register">Register Here</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
