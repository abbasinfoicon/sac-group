import React from 'react'

const Banner = (props) => {
    return (
        <div className="banner-inner">
            <img src={'assets/img/' + props.banner} alt="" className="img-fluid" />

            <div className="container">
                <div className="content-text">
                    <h3>{props.title}</h3>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Banner