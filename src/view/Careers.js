import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import Banner from '../components/lib/Banner'

const Careers = () => {
  return (
    <>
      <Banner title="Careers" banner="banner3.jpg" desc="Werde Teil eines großartigen Teams - bringe dich, uns und die Automobilwelt gemeinsam voran! " />

      <section className="carrer">
        <div className="container">
          <div className="row d-flex align-items-center flex-warp justify-content-center">
            <div className="col w-20p">
              <Link to="/about">
                <div className="carrer-sec">
                  <div className="img-style">
                    <img src="assets/img/warum-sac.png" alt="" className="img-fluid" />
                    <h4>Warum SAC?</h4>
                  </div>

                  <div className="content-style">
                    <h3>Gründe für SAC:</h3>
                    <ul>
                      <li>Klarer Karrierepfad</li>
                      <li>Steile Lernkurve</li>
                      <li>Gute Entwicklungs-möglichkeiten</li>
                      <li>Automobilwelt der Zukunft mitgestalten</li>
                      <li>Echten Teamspirit erleben</li>
                    </ul>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col w-20p">
              <a href="#career_opportunities">
                <div className="carrer-sec">
                  <div className="img-style">
                    <img src="assets/img/career-opportunities.png" alt="" className="img-fluid" />
                    <h4>Career opportunities</h4>
                  </div>

                  <div className="content-style">
                    <h3>Karriere bei SAC</h3>
                    <ul>
                      <li>Unser Karriere-Modell basiert auf der klassischen Berater-Tenure-Level-Pyramide
                      </li>
                      <li>Einstieg auf jeder Stufe möglich</li>
                    </ul>
                  </div>
                </div>
              </a>
            </div>

            <div className="col w-20p">
              <HashLink to="/about#team_section" smooth>
                <div className="carrer-sec">
                  <div className="img-style">
                    <img src="assets/img/team.png" alt="" className="img-fluid" />
                    <h4>Team</h4>
                  </div>

                  <div className="content-style">
                    <h3>Team</h3>
                    <ul>
                      <li>Werde Teil eines Teams mit gutem Teamspirit</li>
                      <li>Erlebe kurze Wege zwischen allen Hierarchien</li>
                      <li>Erlebe außergewöhnliche Teamevents</li>
                    </ul>
                  </div>
                </div>
                </HashLink>
            </div>

            <div className="col w-20p">
              <Link to="/about">
                <div className="carrer-sec">
                  <div className="img-style">
                    <img src="assets/img/1-day-sac.png" alt="" className="img-fluid" />
                    <h4>1 Day @ SAC</h4>
                  </div>

                  <div className="content-style">
                    <h3>1 Day @ SAC</h3>
                    <ul>
                      <li>SACs berichten aus ihrem Arbeitsalltag</li>
                      <li>Schaue, wie ein gewöhnlicher ungewöhnlicher Tag bei SAC abläuft</li>
                    </ul>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col w-20p">
              <Link to="/careers" id="cmd">
                <div className="carrer-sec">
                  <div className="img-style">
                    <img src="assets/img/open-position.png" alt="" className="img-fluid" />
                    <h4>Open Positions</h4>
                  </div>

                  <div className="content-style" id="content">
                    <h3>Open Positions</h3>
                    <ul>
                      <li>Wir suchen agile Berater, die Lust haben, mit uns die Zukunft der Automobil- und
                        Mobilitätswelt zu gestalten</li>
                      <li>Ob erfahrener oder junger Berater, Quereinsteiger mit Berufserfahrung aus
                        anderer
                        Industrie oder Absolvent: wenn du außergewöhnliche Studienleistungen hattest,
                        ist
                        für dich immer ein Platz für dich. Bewirb dich!</li>
                    </ul>
                  </div>
                  <div id="editor"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="carrer carrer_dt" id="career_opportunities">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h3>SAC bietet einen klaren Karrierepfad entlang der Tenure-Level-Pyramide</h3>
              </div>
            </div>
          </div>

          <div className="row d-flex align-items-center">
            <div className="col-md-3">
              <div className="carrer-sec">
                <div className="img-style">
                  <img src="assets/img/career-opportunities.png" alt="" className="img-fluid" />
                  <h4>Career Opportunities</h4>
                </div>

                <div className="content-style">
                  <h3>Gründe für SAC:</h3>
                  <ul>
                    <li>Klarer Karrierepfad</li>
                    <li>Steile Lernkurve</li>
                    <li>Gute Entwicklungs-möglichkeiten</li>
                    <li>Automobilwelt der Zukunft mitgestalten</li>
                    <li>Echten Teamspirit erleben</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <div className="tenure-level-pyramide">

                <div className="pyramid-container">

                  <div id="pyramid-level-1">
                    <div className="content">
                      <h3>PARTNER</h3>

                      <div className="hover">
                        <div className="line-img">
                          <img src="assets/img/line.png" alt="" className="img-fluid img1" />
                          <img src="assets/img/breaket.png" alt="" className="img-fluid img2" />
                        </div>

                        <p>Leitet Klientenprojekte und ist für das Ergebnis verantwortlich</p>
                        <p>Verantwortlich für die Akquise neuer Klienten</p>
                      </div>
                    </div>
                  </div>

                  <div id="pyramid-level-2">
                    <div className="content">
                      <h3>PRINCIPAL</h3>
                      <p>Unterstützt den Partner bei der <br /> Leitung von Klientenprojekten</p>
                    </div>
                  </div>

                  <div id="pyramid-level-3">
                    <div className="content">
                      <h3>ENGAGEMENT MANAGER </h3>
                      <p>Schlüsselperson beim Klienten, die Prozesse steuert und <br />
                        Hauptansprechpartner des Klienten ist. <br />
                        Führt und entwickelt Beratungsteams</p>
                    </div>
                  </div>

                  <div id="pyramid-level-4">
                    <div className="content">
                      <h3>SENIOR CONSULTANT</h3>
                      <p>Übernimmt EM-Verantwortung für ausgewählte Bereiche <br />
                        Leitet eigenständig eigene Workstreams</p>
                    </div>
                  </div>

                  <div id="pyramid-level-5">
                    <div className="content">
                      <h3>CONSULTANT</h3>
                      <p>Steuert eigene Workstreams selbständig <br />
                        Erstellt klientengerechte Analysen und Präsentationen</p>
                    </div>
                  </div>

                  <div id="pyramid-level-6">
                    <div className="content">
                      <h3>JUNIOR CONSULTANT</h3>
                      <p>Führt Analysen durch und bereitet Präsentationen vor <br />
                        Wirkt bei der Erstellung von Klientendokumenten mit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Careers