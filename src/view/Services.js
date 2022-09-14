import React, { useEffect } from 'react'
import Banner from '../components/lib/Banner'
import OwlCarousel from 'react-owl-carousel';
import CircleType from 'circletype'
import Modal from '../components/templates/Modal';

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

const Services = () => {
  useEffect(() => {
    new CircleType(document.getElementById('demo1')).radius(320);
    new CircleType(document.getElementById('demo2')).dir(-1).radius(320);
  }, []);


  return (
    <>
      <Banner title="Services" banner="banner3.jpg" desc="Fundierte Beratung im Bereich Automotive und darüberhinaus" />

      <section className="about-section">
        <div className="container">

          <div className="row d-flex align-items-center custom_row">
            <div className="col-md-6">
              <div className="leftSec-content">
                <div className="box">
                  <h3>Versierter Partner bei Transformationsprozessen in der Mobilitätsindustrie</h3>
                </div>

                <div className="box">
                  <h3>Breites Spektum funktionaler Expertise entlang der automobilen Wertschöpfungskette</h3>
                </div>

                <div className="box">
                  <h3>Tiefgreifende Erfahrung im Management von State-of-the-art Technologien</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="rightSec-img">
                <div className="menumain">
                  <div className="bg_green1"></div>
                  <div className="bg_green2"></div>
                  <div className="overflow_circle">
                    <div class='hidden' id="menu1">
                      <i className="fa fa-trophy"></i>
                      <h3>Markenentwicklung</h3>
                    </div>
                    <div class='hidden' id="menu2">
                      <i className="fa fa-car"></i>
                      <h3>Produktstrategie & Entwicklung</h3>
                    </div>
                    <div class='hidden' id="menu3">
                      <i className="fa fa-cubes"></i>
                      <h3>Organisation wandel</h3>
                    </div>
                    <div class='hidden' id="menu4">
                      <i className="fa fa-truck"></i>
                      <h3>Beschaffungsoptimierung</h3>
                    </div>
                    <div class='hidden' id="menu5">
                      <i className="fa fa-users"></i>
                      <h3>Vertrieb & After-Sales</h3>
                    </div>
                    <div class='hidden' id="menu6">
                      <i className="fa fa-cloud"></i>
                      <h3>Konzern-ESG Compliance (Fokus Dekarbonisierung)</h3>
                    </div>
                    <div class='hidden' id="menu7">
                      <i className="fa fa-meetup"></i>
                      <h3>Additive Fertigung</h3>
                    </div>
                    <div class='hidden' id="menu8">
                      <i className="fa fa-bullhorn"></i>
                      <h3>Alternative Vebrenner kraftstoffe (Synfuels)</h3>
                    </div>
                    <div class='hidden' id="menu9">
                      <i className="fa fa-cogs"></i>
                      <h3>Ev-Batterie Recycling</h3>
                    </div>
                    <div class='hidden' id="menu10">
                      <i className="fa fa-deaf"></i>
                      <h3>Elektrifizierung Antriebsstrang</h3>
                    </div>
                    <div class='hidden' id="menu11">
                      <i className="fa fa-sitemap"></i>
                      <h3>Fahrzeuge E/E Architektur</h3>
                    </div>
                    <div class='hidden' id="menu12">
                      <i className="fa fa-gavel"></i>
                      <h3>Mobilitat der zukunft & Digitalisierung</h3>
                    </div>
                    <div class='hidden' id="menu13">
                      <i className="fa fa-line-chart"></i>
                      <h3>Konzem und Wachstumsstrategie (inkl. M&A)</h3>
                    </div>
                    <div class='visible' id="menu14">
                      <h2>SAC's Kernkompetenz Gebiete</h2>
                    </div>
                  </div>

                  <div className="circle_txt up" id="demo1">Funktionale Automobilthemen entlang der
                    Wertschöpfungskette</div>

                  <nav className="menunav">
                    <ul class='circle'>
                      <li class='one slice' data-toggle="modal" data-target="#popSelection">
                        <label for='one' class='circle over' id="1">Marken<br />entwicklung
                          <i className="fa fa-trophy"></i></label>
                      </li>
                      <li class='two slice' data-toggle="modal" data-target="#popSelection">
                        <label for='two' class='circle over' id="2">Produkt<br />strategie &<br />
                          Entwicklung
                          <i className="fa fa-car"></i></label>
                      </li>
                      <li class='three slice' data-toggle="modal" data-target="#popSelection">
                        <label for='three' class='circle over' id="3">Organisations<br /> wandel
                          <i className="fa fa-cubes"></i></label>
                      </li>
                      <li class='four slice' data-toggle="modal" data-target="#popSelection">
                        <label for='four' class='circle over' id="4">Beschaffungs<br />optimierung
                          <i className="fa fa-truck"></i></label>
                      </li>
                      <li class='five slice' data-toggle="modal" data-target="#popSelection">
                        <label for='five' class='circle over' id="5">Vertrieb &<br />
                          After-Sales
                          <i className="fa fa-users"></i></label>
                      </li>
                      <li class='six slice' data-toggle="modal" data-target="#popSelection">
                        <label for='six' class='circle over' id="6">Konzern-ESG<br /> Compliance<br />
                          (Fokus Dekar<br />bonisierung)
                          <i className="fa fa-cloud"></i></label>
                      </li>
                      <li class='seven slice' data-toggle="modal" data-target="#popSelection">
                        <label for='seven' class='circle over' id="7">Additive<br />
                          Fertigung
                          <i className="fa fa-meetup"></i></label>
                      </li>
                      <li class='eight slice' data-toggle="modal" data-target="#popSelection">
                        <label for='eight' class='circle over' id="8">Alternative<br />
                          Vebrenner<br /> kraftstoffe<br /> (Synfuels)
                          <i className="fa fa-bullhorn"></i></label>
                      </li>
                      <li class='nine slice' data-toggle="modal" data-target="#popSelection">
                        <label for='nine' class='circle over' id="9">Ev-Batterie<br />
                          Recycling
                          <i className="fa fa-cogs"></i></label>
                      </li>
                      <li class='ten slice' data-toggle="modal" data-target="#popSelection">
                        <label for='ten' class='circle over' id="10">Elektrifi<br />zierung<br />
                          Antriebs<br />strang
                          <i className="fa fa-deaf"></i></label>
                      </li>
                      <li class='eleven slice' data-toggle="modal" data-target="#popSelection">
                        <label for='eleven' class='circle over' id="11">Fahrzeuge E/E<br />
                          Architektur
                          <i className="fa fa-sitemap"></i></label>
                      </li>
                      <li class='twelve slice' data-toggle="modal" data-target="#popSelection">
                        <label for='twelve' class='circle over' id="12">Mobilitat der<br />
                          zukunft
                          & <br />Digitalisierung
                          <i className="fa fa-gavel"></i></label>
                      </li>
                      <li class='thirteen slice' data-toggle="modal" data-target="#popSelection">
                        <label for='thirteen' class='circle over' id="13">Konzem und<br />
                          Wachstums<br />strategie (inkl.<br /> M&A)
                          <i className="fa fa-line-chart"></i></label>
                      </li>
                    </ul>
                  </nav>

                  <div className="circle_txt down" id="demo2">Gegenwärtige und zukünftige branchenpragende Themen
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="marketplace-section pb-50">
        <div className="container-fluid no-padding">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="title-text">
                <h3>Qualitätsanspruch</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <OwlCarousel className="row_custom" id="row_custom" {...options}>
            <div className="col-custom-1">
              <div className="service_flip">
                <div className="service-inner">
                  <div className="service-front">
                    <img alt="" className="img-responsive" src="assets/img/ser1.png" />
                    <h2>Produktstrategie und -entwicklung</h2>
                  </div>

                  <div className="service-back">
                    <div className="content-sec">
                      <h3>Produktstrategie und -entwicklung</h3>
                      <p>In der dynamischen Lage der Industrie bringen sowohl etablierte OEM als auch
                        neue
                        Player hochinnovative Fahrzeugmodelle auf den Markt.
                        SAC unterstützt bei Portfolioerweiterungen nicht nur hinsichtlich
                        strategischer
                        Positionierung sondern auch bei der operativen Zieldefinition der Fahrzeuge.
                      </p>

                      <div className="line"></div>

                      <h3>Projektbeispiel</h3>
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

            <div className="col-custom-1">
              <div className="service_flip">
                <div className="service-inner">
                  <div className="service-front">
                    <img alt="" className="img-responsive" src="assets/img/ser2.png" />
                    <h2>Organisationswandel</h2>
                  </div>

                  <div className="service-back">
                    <div className="content-sec">
                      <h3>Organisationswandel</h3>
                      <p>Neue Anforderungen benötigen häufig neue, agile Organisationsstrukturen.
                        SAC unterstützt Unternehmen darin, sich an neue Gegebenheiten anzupassen und
                        begleitet organisatorische Transformationen.</p>


                      <div className="line"></div>

                      <h3>Projektbeispiel</h3>
                      <ul>
                        <li>Klient: Engineering Dienstleister</li>
                        <li>Änderung der Purchasing Organisation, um Einkaufseffizienz zu erhöhen
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-custom-1">
              <div className="service_flip">
                <div className="service-inner">
                  <div className="service-front">
                    <img alt="" className="img-responsive" src="assets/img/ser3.png" />
                    <h2>M&A und Venture Building</h2>
                  </div>

                  <div className="service-back">
                    <div className="content-sec">
                      <h3>M&A und Venture Building</h3>
                      <p>Durch die radikale Transformation der Automobil- und Mobilitätsindustrie
                        finden auch eine Vielzahl von Start-up Gründungen und Übernahmen von
                        vielversprechenden Start-Ups statt.
                        SAC hilft Investoren, geeignete Investitionsobjekte zu finden, bringt
                        Branchenexpertise in Due Dilligences ein und begleitet den M&A Prozess bis
                        zum erfolgreichen Closing.</p>


                      <div className="line"></div>

                      <h3>Projektbeispiel</h3>
                      <ul>
                        <li>Klient: Private Equity Unternehmen aus dem nahen Osten</li>
                        <li>Durchführung der Due Dilligence für den Aufkauf eines Herstellers von
                          Blei-Säure-Autobatterien</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-custom-1">
              <div className="service_flip">
                <div className="service-inner">
                  <div className="service-front">
                    <img alt="" className="img-responsive" src="assets/img/ser4.png" />
                    <h2>Vertrieb & After-Sales</h2>
                  </div>

                  <div className="service-back">
                    <div className="content-sec">
                      <h3>Vertrieb & After-Sales</h3>
                      <p>In Emerging Markets (z.B. China und Indien) entstehen viele neue Marken, die
                        auch nach dem Aufbau eines Vertriebs- und Servicenetzwerks verlangen.
                        Gleichzeitig drängen zunehmend mehr Marken aus Emerging Markets nach Europa
                        und den USA.
                        In beiden Fällen baut SAC das Vertriebs- und Servicenetzwerk für den
                        jeweiligen Markt passend zu den Anforderungen und Zielen der Marke auf. </p>


                      <div className="line"></div>

                      <h3>Projektbeispiel</h3>
                      <ul>
                        <li>Klient: Im asiatischen Herkuntsland etablierter OEM</li>
                        <li>Entwicklung innovatives & rein digitales Saleskonzept und Salesnetwork in
                          Asien</li>
                        <li>Evaluation verschiedene Saleskonzepte</li>
                        <li>Kostenassessment der Konzepte</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>

      <Modal />
    </>
  )
}

export default Services