import React, { useEffect } from 'react'
import Banner from '../components/lib/Banner'
import OwlCarousel from 'react-owl-carousel';
import CircleType from 'circletype'
import Modal from '../components/templates/Modal';
import { useGetAllSersQuery } from '../services/ServiceApi';


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

  const { data, error, isLoading, isSuccess } = useGetAllSersQuery()
  console.log("data - ", data);


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
                  <div className="main_bg">
                    <div className="bg_green1"></div>
                    <div className="bg_green2"></div>
                  </div>
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
                      <h2>SACs Kernkompeten<br />zgebiete</h2>
                    </div>
                  </div>

                  <div className="circle_txt up" id="demo1">Funktionale Automobilthemen entlang der
                    Wertschöpfungskette</div>

                  <nav className="menunav">
                    <ul class='circle'>
                      <li class='one slice' data-toggle="modal" data-target="#popSelection">
                        <label for='one' class='circle over' id="1">
                          <span>
                            <div>Konzem und<br />
                              Wachstums<br />strategie (inkl.<br /> M&A)</div>
                            <i className="fa fa-line-chart"></i>
                          </span>
                        </label>
                      </li>
                      <li class='two slice' data-toggle="modal" data-target="#popSelection">
                        <label for='two' class='circle over' id="2">
                          <span>
                            <div>Marken<br />entwicklung</div> <i className="fa fa-trophy"></i>
                          </span>
                        </label>
                      </li>
                      <li class='three slice' data-toggle="modal" data-target="#popSelection">
                        <label for='three' class='circle over' id="3"><span>
                          <div>Produkt<br />strategie &<br /> Entwicklung </div><i
                            className="fa fa-car"></i>
                        </span></label>
                      </li>
                      <li class='four slice' data-toggle="modal" data-target="#popSelection">
                        <label for='four' class='circle over' id="4"><span>
                          <div>Organisations<br /> wandel</div>
                          <i className="fa fa-cubes"></i>
                        </span></label>
                      </li>
                      <li class='five slice' data-toggle="modal" data-target="#popSelection">
                        <label for='five' class='circle over' id="5"><span>
                          <div>Beschaffungs<br />optimierung</div>
                          <i className="fa fa-truck"></i>
                        </span></label>
                      </li>
                      <li class='six slice' data-toggle="modal" data-target="#popSelection">
                        <label for='six' class='circle over' id="6"><span>
                          <div>Vertrieb &<br />
                            After-Sales</div>
                          <i className="fa fa-users"></i>
                        </span></label>
                      </li>
                      <li class='seven slice gray_color' data-toggle="modal" data-target="#popSelection">
                        <label for='seven' class='circle over' id="7"><span>
                          <div>Konzern-ESG<br /> Compliance<br />
                            (Fokus Dekar<br />bonisierung)</div>
                          <i className="fa fa-cloud"></i>
                        </span></label>
                      </li>
                      <li class='eight slice gray_color' data-toggle="modal" data-target="#popSelection">
                        <label for='eight' class='circle over' id="8"><span>
                          <div>Additive<br />
                            Fertigung</div>
                          <i className="fa fa-meetup"></i>
                        </span></label>
                      </li>
                      <li class='nine slice gray_color' data-toggle="modal" data-target="#popSelection">
                        <label for='nine' class='circle over' id="9"><span>
                          <div>Alternative<br />
                            Vebrenner<br /> kraftstoffe<br /> (Synfuels)</div>
                          <i className="fa fa-bullhorn"></i>
                        </span></label>
                      </li>
                      <li class='ten slice gray_color' data-toggle="modal" data-target="#popSelection">
                        <label for='ten' class='circle over' id="10"><span>
                          <div>Ev-Batterie<br />
                            Recycling</div>
                          <i className="fa fa-cogs"></i>
                        </span></label>
                      </li>
                      <li class='eleven slice gray_color' data-toggle="modal" data-target="#popSelection">
                        <label for='eleven' class='circle over' id="11"><span>
                          <div>Elektrifi<br />zierung<br />
                            Antriebs<br />strang</div>
                          <i className="fa fa-deaf"></i>
                        </span></label>
                      </li>
                      <li class='twelve slice gray_color' data-toggle="modal" data-target="#popSelection">
                        <label for='twelve' class='circle over' id="12"><span>
                          <div>Fahrzeuge E/E<br />
                            Architektur</div>
                          <i className="fa fa-sitemap"></i>
                        </span></label>
                      </li>
                      <li class='thirteen slice gray_color' data-toggle="modal" data-target="#popSelection">
                        <label for='thirteen' class='circle over' id="13"><span>
                          <div>Mobilitat der<br />
                            zukunft
                            & <br />Digitalisierung</div>
                          <i className="fa fa-gavel"></i>
                        </span></label>
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

            {error ? (
              <>Oh no, there was an error</>
            ) : isLoading ? (
              <>Loading...</>
            ) : isSuccess ? (
              <>
                {
                  data.data.map((item) => (
                    <div className="col-custom-1" key={item.id}>
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

                              <p>{item.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </>
            ) : null}
          </OwlCarousel>
        </div>
      </div>

      <Modal />
    </>
  )
}

export default Services