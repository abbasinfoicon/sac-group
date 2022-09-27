import React from 'react'
import Banner from '../components/lib/Banner'
import OwlCarousel from 'react-owl-carousel';
import Modal from '../components/templates/Modal';
import { useGetAllSersQuery } from '../services/ServiceApi';
import { useEffect } from 'react';
import { useState } from 'react';

const options = {
  loop: true,
  rewind: true,
  autoplay: false,
  autoplayTimeout: 10000,
  autoplayHoverPause: true,
  margin: 10,
  center: true,
  nav: true,
  dots: false,
  smartSpeed: 600,
  responsive: {
    0: {
      items: 1
    },
    992: {
      items: 3
    }
  }
}

const Clients = () => {
  const { data, error, isLoading, isSuccess } = useGetAllSersQuery();

  return (
    <>
      <Banner title="Clients" banner="banner2.jpg" desc="Klienten aus der Automobilindustrie und angrenzenden Branchen sind mit SAC gut beraten" />

      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h3>Die Transformation der Automobilindustrie erzeugt neue Vernetzungen. Wir ge-ben unseren
                  Klienten den Kompass an die Hand, um von diesen zu profitieren.</h3>
              </div>
            </div>
          </div>

          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-6 custom_md_6">

              {error ? (
                <>Oh no, there was an error</>
              ) : isLoading ? (
                <div className="loading">
                  <img src="assets/img/loading.gif" alt="" className="img-fluid" />
                </div>
              ) : isSuccess ? (

                <div className="rightSec-circle">
                  <div className="client_circle">

                    {

                      data.data.map((item, i, cont = 0) => (
                        (item.category) === 'Client' ? (
                          console.log("Count- ", cont),

                          <div className={`img${i} circle_img`} key={i}>
                            <a href="#" data-toggle="modal" data-target="#popSelection">
                              <img src={item.img} alt="" className="img-fluid" />
                              <p>{item.title}</p>
                            </a>
                          </div>

                        ) : null
                      ))
                    }

                  </div>
                </div>

              ) : null}

            </div>
          </div>
        </div>
      </section>

      <section className="marketplace-section pb-50">
        <div className="container-fluid no-padding">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="title-text">
                <h3>Automobilindustrie</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          {error ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <div className="loading">
              <img src="assets/img/loading.gif" alt="" className="img-fluid" />
            </div>
          ) : isSuccess ? (

            <OwlCarousel className="row_custom" id="row_custom" {...options}>
              {
                data.data.map((item, i) => (
                  (item.category) === 'Client' ? (

                    <div className="col-custom-1" key={i}>
                      <div className="service_flip">
                        <div className="service-inner">
                          <div className="service-front">
                            <img alt={item.title} className="img-responsive" src={item.img} />
                            <h2>{item.title}</h2>
                          </div>

                          <div className="service-back">
                            <div className="content-sec">
                              <h3>{item.title}</h3>
                              <p>{item.desc}</p>

                              <div className="line"></div>

                              <p>{item.content}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  ) : null
                ))
              }
            </OwlCarousel>

          ) : null}
        </div>
      </section>

      <Modal />
    </>
  )
}

export default Clients