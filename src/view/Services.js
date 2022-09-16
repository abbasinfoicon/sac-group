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
                  <div className="bg_green1"></div>
                  <div className="bg_green2"></div>
                  <div className="overflow_circle">
                    <div className='hidden' id="menu1">
                      <i className="fa fa-trophy"></i>
                      <h3>Markenentwicklung</h3>
                    </div>
                    <div className='hidden' id="menu2">
                      <i className="fa fa-car"></i>
                      <h3>Produktstrategie & Entwicklung</h3>
                    </div>
                    <div className='hidden' id="menu3">
                      <i className="fa fa-cubes"></i>
                      <h3>Organisation wandel</h3>
                    </div>
                    <div className='hidden' id="menu4">
                      <i className="fa fa-truck"></i>
                      <h3>Beschaffungsoptimierung</h3>
                    </div>
                    <div className='hidden' id="menu5">
                      <i className="fa fa-users"></i>
                      <h3>Vertrieb & After-Sales</h3>
                    </div>
                    <div className='hidden' id="menu6">
                      <i className="fa fa-cloud"></i>
                      <h3>Konzern-ESG Compliance (Fokus Dekarbonisierung)</h3>
                    </div>
                    <div className='hidden' id="menu7">
                      <i className="fa fa-meetup"></i>
                      <h3>Additive Fertigung</h3>
                    </div>
                    <div className='hidden' id="menu8">
                      <i className="fa fa-bullhorn"></i>
                      <h3>Alternative Vebrenner kraftstoffe (Synfuels)</h3>
                    </div>
                    <div className='hidden' id="menu9">
                      <i className="fa fa-cogs"></i>
                      <h3>Ev-Batterie Recycling</h3>
                    </div>
                    <div className='hidden' id="menu10">
                      <i className="fa fa-deaf"></i>
                      <h3>Elektrifizierung Antriebsstrang</h3>
                    </div>
                    <div className='hidden' id="menu11">
                      <i className="fa fa-sitemap"></i>
                      <h3>Fahrzeuge E/E Architektur</h3>
                    </div>
                    <div className='hidden' id="menu12">
                      <i className="fa fa-gavel"></i>
                      <h3>Mobilitat der zukunft & Digitalisierung</h3>
                    </div>
                    <div className='hidden' id="menu13">
                      <i className="fa fa-line-chart"></i>
                      <h3>Konzem und Wachstumsstrategie (inkl. M&A)</h3>
                    </div>
                    <div className='visible' id="menu14">
                      <h2>SAC's Kernkompetenz Gebiete</h2>
                    </div>
                  </div>

                  <div className="circle_txt up" id="demo1">Funktionale Automobilthemen entlang der
                    Wertschöpfungskette</div>

                  <nav className="menunav">
                    <ul className='circle'>
                      <li className='one slice' data-toggle="modal" data-target="#popSelection">
                        <label htmlFor='one' className='circle over' id="1">Marken<br />entwicklung
                          <i className="fa fa-trophy"></i></label>
                      </li>
                      <li className='two slice' data-toggle="modal" data-target="#popSelection">
                        <label htmlFor='two' className='circle over' id="2">Produkt<br />strategie &<br />
                          Entwicklung
                          <i className="fa fa-car"></i></label>
                      </li>
                      <li className='three slice' data-toggle="modal" data-target="#popSelection">
                        <label htmlFor='three' className='circle over' id="3">Organisations<br /> wandel
                          <i className="fa fa-cubes"></i></label>
                      </li>
                      <li className='four slice' data-toggle="modal" data-target="#popSelection">
                        <label htmlFor='four' className='circle over' id="4">Beschaffungs<br />optimierung
                          <i className="fa fa-truck"></i></label>
                      </li>
                      <li className='five slice' data-toggle="modal" data-target="#popSelection">
                        <label htmlFor='five' className='circle over' id="5">Vertrieb &<br />
                          After-Sales
                          <i className="fa fa-users"></i></label>
                      </li>
                      <li className='six slice' data-toggle="modal" data-target="#popSelection">
                        <label htmlFor='six' className='circle over' id="6">Konzern-ESG<br /> Compliance<br />
                          (Fokus Dekar<br />bonisierung)
                          <i className="fa fa-cloud"></i></label>
                      </li>
                      <li className='seven slice' data-toggle="modal" data-target="#popSelection">
                        <label htmlFor='seven' className='circle over' id="7">Additive<br />
                          Fertigung
                          <i className="fa fa-meetup"></i></label>
                      </li>
                      <li className='eight slice' data-toggle="modal" data-target="#popSelection">
                        <label htmlFor='eight' className='circle over' id="8">Alternative<br />
                          Vebrenner<br /> kraftstoffe<br /> (Synfuels)
                          <i className="fa fa-bullhorn"></i></label>
                      </li>
                      <li className='nine slice' data-toggle="modal" data-target="#popSelection">
                        <label htmlFor='nine' className='circle over' id="9">Ev-Batterie<br />
                          Recycling
                          <i className="fa fa-cogs"></i></label>
                      </li>
                      <li className='ten slice' data-toggle="modal" data-target="#popSelection">
                        <label htmlFor='ten' className='circle over' id="10">Elektrifi<br />zierung<br />
                          Antriebs<br />strang
                          <i className="fa fa-deaf"></i></label>
                      </li>
                      <li className='eleven slice' data-toggle="modal" data-target="#popSelection">
                        <label htmlFor='eleven' className='circle over' id="11">Fahrzeuge E/E<br />
                          Architektur
                          <i className="fa fa-sitemap"></i></label>
                      </li>
                      <li className='twelve slice' data-toggle="modal" data-target="#popSelection">
                        <label htmlFor='twelve' className='circle over' id="12">Mobilitat der<br />
                          zukunft
                          & <br />Digitalisierung
                          <i className="fa fa-gavel"></i></label>
                      </li>
                      <li className='thirteen slice' data-toggle="modal" data-target="#popSelection">
                        <label htmlFor='thirteen' className='circle over' id="13">Konzem und<br />
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

            {error ? (
              <>Oh no, there was an error</>
            ) : isLoading ? (
              <>Loading...</>
            ) : isSuccess ? (
              <>
                {
                  data.products.map((item) => (
                    <div className="col-custom-1" key={item.id}>
                      <div className="service_flip">
                        <div className="service-inner">
                          <div className="service-front">
                            <img alt={item.brand} className="img-responsive" src={item.thumbnail} />
                            <h2>{item.title}</h2>
                          </div>

                          <div className="service-back">
                            <div className="content-sec">
                              <h3>{item.title}</h3>
                              <p>{item.description}</p>

                              <div className="line"></div>

                              <h3>{item.brand}</h3>
                              <ul>

                                {
                                  item.images.map((img) => (
                                    <li>{img}</li>
                                  ))
                                }


                              </ul>
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