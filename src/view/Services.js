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
                      <h2>SACs Kernkompeten<br />zgebiete</h2>
                    </div>
                  </div>

                  <div className="circle_txt up" id="demo1">Funktionale Automobilthemen entlang der
                    Wertschöpfungskette</div>

                  <nav className="menunav">
                    <ul className='circle'>
                      {error ? (
                        <>Oh no, there was an error</>
                      ) : isLoading ? (
                        <>Loading...</>
                      ) : isSuccess ? (
                        <>
                          {
                            data.data.slice(0, 13).map((item, index) => (
                              <li className={`slice${index + 1} slice`} data-toggle="modal" data-target="#popSelection" key={item.id}>
                                <label htmlFor={`slice${index + 1}`} className='circle over' id={index + 1}>
                                  <span>
                                    <div>{item.title}</div>
                                    <i className={`fa fa-${item.icon}`}></i>
                                  </span>
                                </label>
                              </li>
                            ))
                          }
                        </>
                      ) : null}
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
          {error ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <div className="loading">
              <img src="assets/img/loading.gif" alt="" className="img-fluid" />
            </div>
          ) : isSuccess ? (

            <OwlCarousel className="row_custom" id="row_custom" {...options}>
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

                            <p>{item.content}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </OwlCarousel>

          ) : null}
        </div>
      </div>

      <Modal />
    </>
  )
}

export default Services