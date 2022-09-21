import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/lib/Banner'
import { useGetAllSersQuery } from '../services/ServiceApi'

const Insights = () => {
  const { data, isError, isLoading } = useGetAllSersQuery()
  console.log("InsightData - ", data);





  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>An error occured {data.error.error}</div>

  return (
    <>
      <Banner title="Insights" banner="banner1.jpg" desc="Vorausschauen und Vorausdenken: Den gesellschaftlichen Diskurs bereichern – SAC Whitepapers" />

      <section className="insights">
        <div className="container">
          <div className="row d-flex flex-warp justify-content-center">

            {
              data.data.map((item, index) => (
                <div className="col-md-4" key={item.id} data-toggle="tab" href={`#home${index}`} >
                  <div className="insights_box">
                    <a href="#tabs">
                      <h3>{item.title}</h3>
                      <div className="img-style">
                        <img src={item.img} alt="" className="img-fluid" />
                      </div>
                    </a>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </section>

      <div className="marketplace-section pb-50" id="tabs">
        <div className="container-fluid no-padding">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="title-text">
                <h3>Insights Details</h3>
              </div>
            </div>
          </div>
        </div>

        {
          data.data.map((item, index) => (
            <div id={`home${index}`} className={`tab-pane fade ${index === 0 ? "in active" : ""}`}>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="title">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="row d-flex flex-warp justify-content-center">
                  <div className="col-md-4">
                    <div className="insights_box">
                      <div className="img-style">
                        <img src={item.img} alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-8">
                    <div className="insights_box">
                      <h2>Überblick über die Studie</h2>

                      <div className="media-sec">
                        <h2>Kernfragen</h2>

                        <ul>
                          <li>Wie wirkt sich der <strong>Wandel zur E-Mobilität</strong> auf die
                            <strong>CO2-Emis-sionen</strong> und <strong>gesellschaftlichen Kosten</strong>
                            in
                            Deutschland aus?
                          </li>
                          <li>Welche <strong>Alternativen</strong> gibt es, um <strong>CO2-Emissionen</strong>
                            im
                            <strong>Mobilitätssektor</strong> zu <strong>reduzieren</strong>?
                          </li>
                        </ul>
                      </div>

                      <div className="media-sec">
                        <h2>Insights</h2>

                        <ul>
                          <li><strong>E-Fahrzeuge</strong> sind eine <strong>sehr teure Maßnahme</strong> zur
                            <strong>Reduktion</strong> von <strong>CO2-Emissionen</strong>
                          </li>
                          <li><strong>Entscheidung</strong> über den <strong>Klima-optimalen
                            Antriebsstrang</strong> sollte dem <strong>Markt überlassen</strong> werden
                          </li>
                        </ul>
                      </div>

                      <div className="media-sec">
                        <h2>Referenzen</h2>

                        <ul className="client_img">
                          <li><img src="assets/img/client-logo-1.png" alt="" className="img-fluid" /></li>
                          <li><img src="assets/img/client-logo-2.png" alt="" className="img-fluid" /></li>
                          <li><img src="assets/img/client-logo-3.png" alt="" className="img-fluid" /></li>
                          <li><img src="assets/img/client-logo-4.png" alt="" className="img-fluid" /></li>
                          <li><img src="assets/img/client-logo-5.png" alt="" className="img-fluid" /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Insights