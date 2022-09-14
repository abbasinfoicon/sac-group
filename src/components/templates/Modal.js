import React from 'react'

const Modal = () => {
    return (
        <div className="modal fade" id="popSelection" role="dialog">
            <div className="modal-dialog modal-popDialog">

                <div className="modal-content modal-popSelection">
                    <button className="close" data-dismiss="modal" type="button">&times;</button>
                    <h3>Produktstrategie und -entwicklung</h3>


                    <div className="modal-body">
                        <div className="service-back_popup">
                            <div className="content-sec">
                                <div className="img-height">
                                    <img src="assets/img/produktstrategie.png" alt="" className="img-fluid" />
                                </div>
                                <p>In der dynamischen Lage der Industrie bringen sowohl etablierte OEM als auch
                                    neue
                                    Player hochinnovative Fahrzeugmodelle auf den Markt.
                                    SAC unterstützt bei Portfolioerweiterungen nicht nur hinsichtlich
                                    strategischer
                                    Positionierung sondern auch bei der operativen Zieldefinition der Fahrzeuge.
                                </p>

                                <div className="line"></div>

                                <h4>Projektbeispiel</h4>
                                <ul>
                                    <li>Klient: US-Tochter eines globalen OEMs</li>
                                    <li>Validierung der Kundenzielgruppe</li>
                                    <li>Verfeinerung der Modell-Positionierung für einen Pick-up-Truck</li>
                                    <li>Definition der Fahrzeugziele in der frühen Phase</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Modal