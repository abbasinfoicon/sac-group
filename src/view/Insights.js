import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/lib/Banner'

const Insights = () => {
  return (
    <>
      <Banner title="Insights" banner="banner1.jpg" desc="Vorausschauen und Vorausdenken: Den gesellschaftlichen Diskurs bereichern – SAC Whitepapers" />

      <section className="insights">
        <div className="container">
          <div className="row d-flex flex-warp justify-content-center">
            <div className="col-md-4">
              <div className="insights_box">
                <Link to="/insight-detail">
                  <h3>Der Weg hin zu einer CO2-armen Mobilität</h3>
                  <div className="img-style">
                    <img src="assets/img/insights1.png" alt="" className="img-fluid" />
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-md-4">
              <div className="insights_box">
                <Link to="/insight-detail">
                  <h3>Der Wertschöpfungsbeitrag der EDL-Branche in der global trans-formierten
                    Automobilindustrie</h3>
                  <div className="img-style">
                    <img src="assets/img/insights2.png" alt="" className="img-fluid" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Insights