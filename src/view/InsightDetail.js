import React from 'react'
import Banner from '../components/lib/Banner'

const InsightDetail = () => {
    return (
        <>
            <Banner title="Insights Details" banner="banner1.jpg" desc="Vorausschauen und Vorausdenken: Den gesellschaftlichen Diskurs bereichern – SAC Whitepapers" />

            <section className="insights">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title">
                                <h3>Der Weg hin zu einer CO2-armen Mobilität – Neue Perspektiven zur Verkehrs- und Energiewende
                                    in Deutschland </h3>
                            </div>
                        </div>
                    </div>


                    <div className="row d-flex flex-warp justify-content-center">
                        <div className="col-md-4">
                            <div className="insights_box">
                                <div className="img-style">
                                    <img src="assets/img/insights1.png" alt="" className="img-fluid" />
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
                                            <strong>CO2-Emis-sionen</strong> und <strong>gesellschaftlichen Kosten</strong> in
                                            Deutschland aus?
                                        </li>
                                        <li>Welche <strong>Alternativen</strong> gibt es, um <strong>CO2-Emissionen</strong> im
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
            </section>
        </>
    )
}

export default InsightDetail