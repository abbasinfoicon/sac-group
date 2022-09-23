import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { useGetAllSliderQuery } from '../../services/ServiceApi';

const options = {
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    margin: 0,
    nav: true,
    dots: false,
    smartSpeed: 600,
    items: 1
}

const Slider = () => {

    const { data, error, isLoading, isSuccess } = useGetAllSliderQuery()
    console.log("data - ", data);

    return (
        <div className="banner-slider">
            <div className="main-bg-color ">
                {error ? (
                    <>Oh no, there was an error</>
                ) : isLoading ? (
                    <div className="loading">
                        <img src="assets/img/loading.gif" alt="" className="img-fluid" />
                    </div>
                ) : isSuccess ? (

                    <OwlCarousel className="owl-theme main_carousel" {...options} id="main_carousel">
                        {
                            data.data.map((item) => (
                                <div className="item" key={item.id}>
                                    <div className="bg-video-wrap">
                                        <video loop muted autoPlay>
                                            <source src={item.video} type="video/mp4" />
                                        </video>

                                        <div className="caption-slider">
                                            <h3>{item.title}</h3>
                                            <h2>{item.subtitle}</h2>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </OwlCarousel>

                ) : null}
            </div>
        </div>
    )
}

export default Slider