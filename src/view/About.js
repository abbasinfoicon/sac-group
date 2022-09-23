import React from 'react'
import Banner from '../components/lib/Banner'
import OwlCarousel from 'react-owl-carousel';

const options = {
  loop: true,
  rewind: true,
  autoplay: false,
  margin: 0,
  nav: false,
  dots: false,
  smartSpeed: 600,
  items: 1
}

const options2 = {
  loop: true,
  rewind: true,
  autoplay: true,
  margin: 0,
  nav: true,
  dots: false,
  smartSpeed: 600,
  items: 1
}

const options3 = {
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

const About = () => {
  return (
    <>
      <Banner title="About us" banner="banner3.jpg" desc="Als Branchenexperten inspirieren wir weltweit Führungskräfte" />

      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h3>Warum ist SAC Ihr Partner für den strategischen Transformationsprozess?</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="boxSec">
                <div className="img-section">
                  <a href="#">
                    <img src="assets/img/about1.png" alt="" className="img-fluid" />
                    <h4>Ausgeprägter Sachverstand & tiefe Expertise</h4>
                  </a>
                </div>

                <div className="content-section">
                  <p>In der Begleitung von inhaltlich getrie-benen Transformationsprozessen in der
                    Automobilindustrie hat SAC eine sehr tiefe Expertise – Bei OEMs, Zulieferern und vielen
                    angrenzenden Branchen</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="boxSec">
                <div className="img-section">
                  <a href="#">
                    <img src="assets/img/about2.png" alt="" className="img-fluid" />
                    <h4>Langfristige & vertrauens-volle Partner-schaften</h4>
                  </a>
                </div>

                <div className="content-section">
                  <p>Zusammen mit dem Management seiner Klienten schafft SAC dauerhafte und substanzielle
                    Verbesserungen –Vertrauensvoll, partnerschaftlich und verlässlich</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="boxSec">
                <div className="img-section">
                  <a href="#">
                    <img src="assets/img/about3.png" alt="" className="img-fluid" />
                    <h4>Hohe Qualitäts-standards & professio-nelle Werte</h4>
                  </a>
                </div>

                <div className="content-section">
                  <p>Einem strengen Kodex professioneller Werte und Qualitätstandards folgend kombiniert SAC
                    analytische Sorgfalt mit gesundem Pragmatismus – Gleichzeitige Lieferung von
                    analytischer Genauigkeit und Umsetzbarkeit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonail-about">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <OwlCarousel className="client_carousel2" id="client_carousel2" {...options}>
                <div className="clinet-feedback">
                  <img src="assets/img/coma.png" alt="" className="img-fluid" />
                  <p>Die einzige Daseinsberechtigung von SAC ist die hohe Qualität, um Klienten durch jede
                    Aktion
                    einen dauerhaften und substanziellen Mehrwert zu stiften </p>
                  <h5>Dr. Martin Stahl, SAC Gründer</h5>
                </div>

                <div className="clinet-feedback">
                  <img src="assets/img/coma.png" alt="" className="img-fluid" />
                  <p>Die einzige Daseinsberechtigung von SAC ist die hohe Qualität, um Klienten durch jede
                    Aktion
                    einen dauerhaften und substanziellen Mehrwert zu stiften </p>
                  <h5>Dr. Martin Stahl, SAC Gründer</h5>
                </div>

                <div className="clinet-feedback">
                  <img src="assets/img/coma.png" alt="" className="img-fluid" />
                  <p>Die einzige Daseinsberechtigung von SAC ist die hohe Qualität, um Klienten durch jede
                    Aktion
                    einen dauerhaften und substanziellen Mehrwert zu stiften </p>
                  <h5>Dr. Martin Stahl, SAC Gründer</h5>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>

      <section className="marketplace-section mb-50">
        <div className="container-fluid no-padding">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="title-text">
                <h3>Erfahrung und Fachwissen</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h3>Erfahrung und Fachwissen Treffen auf Leidenschaft für Automobil und Mobilität</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <OwlCarousel className="client_carousel" id="client_carousel" {...options2}>
                <div className="card-details">
                  <div className="media">
                    <div className="media-left">
                      <img src="assets/img/p1.png" alt="" className="media-object" />
                    </div>

                    <div className="media-body">
                      <div className="client_say">
                        <h3>Dr. Martin Stahl & das „Why“ von SAC </h3>
                        <img src="assets/img/coma.png" alt="" className="img-fluid start-coma" />
                        <p>Durch meine lange BMW-Historie als promovierter Automobilingenieur
                          vereine
                          ich tiefgehende und breite Automobilexertise mit ebenso breiter
                          Wirtschafts-
                          und Beratungsexpertise durch meine langjährige McKinsey-Vergangenheit.
                        </p>
                        <p>Als McKinsey-Berater habe ich SAC 2013 gegründet mit dem Anspruch,
                          unseren
                          Klienten in tatsächlich jeder Aktion einen substanziellen und
                          langfristigen
                          Mehrwert durch maximal hohe Qualität zu stiften. SAC sollte mehr sein
                          als
                          “noch eine Beratung”.</p>
                        <p>Ich bin dankbar, dass ich es in den letzten 9 Jahren geschafft habe,
                          durch
                          meine automobile Leidenschaft und die hohe SAC-Qualität kontinuierlich
                          neue
                          namhafte Klienten zu gewinnen, SAC auf dem Beratungsmarkt zu etablieren
                          und
                          den Transformationsprozess der Automobil- und Mobilitätsindustrie mit zu
                          gestalten.</p>
                        <img src="assets/img/coma.png" alt="" className="img-fluid end-coma" />

                        <h5><small>Dr. Martin Stahl, SAC Gründer </small></h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-details">
                  <div className="media">
                    <div className="media-left">
                      <img src="assets/img/p1.png" alt="" className="media-object" />
                    </div>

                    <div className="media-body">
                      <div className="client_say">
                        <h3>Dr. Martin Stahl & das „Why“ von SAC </h3>
                        <img src="assets/img/coma.png" alt="" className="img-fluid start-coma" />
                        <p>Durch meine lange BMW-Historie als promovierter Automobilingenieur
                          vereine
                          ich tiefgehende und breite Automobilexertise mit ebenso breiter
                          Wirtschafts-
                          und Beratungsexpertise durch meine langjährige McKinsey-Vergangenheit.
                        </p>
                        <p>Als McKinsey-Berater habe ich SAC 2013 gegründet mit dem Anspruch,
                          unseren
                          Klienten in tatsächlich jeder Aktion einen substanziellen und
                          langfristigen
                          Mehrwert durch maximal hohe Qualität zu stiften. SAC sollte mehr sein
                          als
                          “noch eine Beratung”.</p>
                        <p>Ich bin dankbar, dass ich es in den letzten 9 Jahren geschafft habe,
                          durch
                          meine automobile Leidenschaft und die hohe SAC-Qualität kontinuierlich
                          neue
                          namhafte Klienten zu gewinnen, SAC auf dem Beratungsmarkt zu etablieren
                          und
                          den Transformationsprozess der Automobil- und Mobilitätsindustrie mit zu
                          gestalten.</p>
                        <img src="assets/img/coma.png" alt="" className="img-fluid end-coma" />

                        <h5><small>Dr. Martin Stahl, SAC Gründer </small></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>

        <div className="container-fluid no-padding">
          <div className="row">
            <div className="col-md-4">
              <div className="main-heading-title bg-partenaires">
                <h3>Die 5 Säulen unseres Erfolgs</h3>
              </div>
            </div>
          </div>
        </div>


        <div className="die-saulem">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="h-toop">
                  <h3>Die 5 Säulen unseres Erfolgs</h3>
                </div>

                <div className="border-20"></div>

                <div className="owl-carousel boxinline-saulen">
                  <div className="erfolgs">
                    <div className="img-style">
                      <img src="assets/img/1.png" alt="" className="img-fluid" />
                    </div>
                    <h3>State-of-the-art Beratungs-methodik</h3>
                  </div>

                  <div className="erfolgs">
                    <div className="img-style">
                      <img src="assets/img/2.png" alt="" className="img-fluid" />
                    </div>
                    <h3>Umfassende Automobil-expertise</h3>
                  </div>

                  <div className="erfolgs">
                    <div className="img-style">
                      <img src="assets/img/3.png" alt="" className="img-fluid" />
                    </div>
                    <h3>Kompetentes und erfahrenes globales Experten-netzwerk</h3>
                  </div>

                  <div className="erfolgs">
                    <div className="img-style">
                      <img src="assets/img/4.png" alt="" className="img-fluid" />
                    </div>
                    <h3>Ein starkes Team – für die Extrameile beim Klienten</h3>
                  </div>

                  <div className="erfolgs">
                    <div className="img-style">
                      <img src="assets/img/5.png" alt="" className="img-fluid" />
                    </div>
                    <h3>Ein Think-Tank mit dem Motto „Staying ahead of the problem“</h3>
                  </div>
                </div>

                <div className="border-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marketplace-section">
        <div className="container-fluid no-padding">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="title-text">
                <h3>Meet the SAC Team</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="team-section">
          <div className="container">
            <OwlCarousel className="row_custom" {...options3} id="row_custom">
              <div className="col-custom-1">
                <div className="service_flip">
                  <div className="service-inner">
                    <div className="service-front">
                      <img alt="" className="img-responsive" src="assets/img/Markus-Seeberger.jpg" />
                      <h2>Dr. Markus Seeberger</h2>
                    </div>

                    <div className="service-back">
                      <div className="content-sec">
                        <h3>Dr. Markus Seeberger</h3>
                        <p>This project included developing a
                          positioning strategy for a new brand, identifying a suitable target group,
                          and
                          specifying detailed product attributes. </p>

                        <div className="line"></div>

                        <p>Finally, we identified several additional
                          business models around the vehicle and developed a transparent business case
                          that
                          can be used as a management tool for financial planning and project steering. To
                          start a vehicle project from scratch and the high degree of engagement made this
                          project special. In other projects I analyzed the automotive smart charging
                          market
                          and entry strategies in the automotive operating system market for an IT
                          supplier.
                        </p>

                        <p>In other projects, I got to work on the product strategy of a Chinese EV
                          newcomer,
                          several EV battery recycling projects, as well as the elaboration of product
                          strategies for several companies – from startup to established OEM. Being part
                          of a
                          firm with a such diversified portfolio has in fact never stopped to be thrilling
                          and
                          puts SAC in a unique position, combining German automotive passion with a
                          forward-thinking international mindset.</p>

                        <p>I hold a master’s degree in power engineering from the Technical University of
                          Dresden and have prior experience in the field of new energies, particularly
                          hydrogen. Ever since I have started my position at SAC, I have had manifold
                          opportunities to put my past knowledge into practice. I keep looking forward to
                          projects to participate in and new colleagues to work with!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-custom-1">
                <div className="service_flip">
                  <div className="service-inner">
                    <div className="service-front">
                      <img alt="" className="img-responsive" src="assets/img/Karam-Chehade.jpg" />
                      <h2>Karam Chehade</h2>
                    </div>

                    <div className="service-back">
                      <div className="content-sec">
                        <h3>Karam Chehade</h3>
                        <p>One of my first projects at SAC was with an OEM startup who intended to
                          launch a
                          battery electric vehicle in Europe and China. </p>


                        <div className="line"></div>

                        <p>When I started my position as a consultant at SAC, I was immediately posted on a
                          project with an international recycling company looking to expand its activities
                          into the EV recycling business. SAC quickly astounded me with the level of
                          professionalism, depth of analysis but also automotive expertise which were
                          played
                          essential roles in the projects. From day one, there was a culture of welcoming
                          proactive attitudes and rewarding involvement.</p>

                        <p>A focus on international projects, most current topics, a broad automotive
                          expertise,
                          the passion of all employees for automobiles, and an amazing team spirit make
                          working at SAC an unique experience. I also would like to mention the active
                          company
                          culture with fantastic regular events (e.g. summer camp).</p>

                        <p>I hold a master’s degree in business administration from the Friedrich–Alexander
                          University Erlangen–Nürnberg and a PhD from the University of St. Gallen. In my
                          doctoral thesis, I studied the transformation of the automotive industry toward
                          electric mobility. In my spare time I like to hike in the mountains, play the
                          guitar, and watch soccer.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-custom-1">
                <div className="service_flip">
                  <div className="service-inner">
                    <div className="service-front">
                      <img alt="" className="img-responsive" src="assets/img/Tobias-Blucher.jpg" />
                      <h2>Tobias Blücher</h2>
                    </div>

                    <div className="service-back">
                      <div className="content-sec">
                        <h3>Tobias Blücher</h3>
                        <p>Soon after joining SAC, I was able to gain my first experiences as a
                          consultant
                          with SAC.</p>


                        <div className="line"></div>

                        <p>
                          In my first project we advised a Chinese OEM on the development of a brand and
                          portfolio
                          strategy. This was the perfect opportunity to bring in my automotive industry
                          expertise
                          in brand and product strategy. On this project, I was able to manage and execute
                          my own
                          workflows, which I think is the perfect way for a steep learning curve. Most
                          exciting
                          part of the project was to present the findings and strategy recommendations to
                          the
                          client’s top management.</p>
                        <p>The team is truly committed to SAC’s motto of “Inspiring Leaders”, which leads
                          the drive
                          to achieve excellence in our daily work tasks. This creates a working
                          environment that
                          allows me to bring out the best of myself and that encourages my personal growth
                          and
                          ambition. In addition to the top consulting methods and the automotive expertise
                          in the
                          company, what I appreciate most about SAC is the team spirit, where we always
                          help each
                          other. This team spirit is not only embraced in the daily work routine, but also
                          at the
                          company’s team events such as the summer camp or at the Wiesn.</p>
                        <p>I hold a master’s degree in economics from the Humboldt University of Berlin and
                          a
                          bachelor’s degree in economics from the University of Freiburg. Prior to joining
                          SAC, I
                          was able to gain professional experience in venture capital and investment
                          banking. In
                          my free time, I like to go on road bike trips through the Munich countryside or
                          visit
                          Munich’s numerous “Biergärten” and “Wirtshäuser” to enjoy a few beers and
                          delicious
                          local food. In addition to that I am a huge sports fan and my favorite sports to
                          watch
                          are soccer and American football.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-custom-1">
                <div className="service_flip">
                  <div className="service-inner">
                    <div className="service-front">
                      <img alt="" className="img-responsive" src="assets/img/Torsten-T-Resack.jpg" />
                      <h2>Torsten T. Resack</h2>
                    </div>

                    <div className="service-back">
                      <div className="content-sec">
                        <h3>Torsten T. Resack</h3>
                        <p>My start at SAC before 15 months was what I would wish for any new
                          consultant:</p>


                        <div className="line"></div>

                        <p> after a
                          very warm welcome by my new boss, switching from “Sie” to “Du”, receiving my new
                          mobile
                          device and company laptop, and a short introduction to SAC, 2 hours after
                          entering the
                          SAC office I was already in my first client call. A start like a sports car.
                          Great fit
                          to an automotive consultancy! Sure, a few days later a comprehensive on-boarding
                          followed but from the very first moment I was part of the project team and
                          worked for my
                          first SAC project.</p>
                        <p>And while this project was automotive related it was not a “pure” automotive
                          project: the
                          project’s goal was an evaluation of the German EV-battery recycling market for a
                          recycling company and an analysis of the EV-battery recycling strategy of the
                          German
                          OEMs. This project represents SAC’s project landscape: the projects are not
                          “only” for
                          automotive manufacturers, but always have an automotive connection. My second
                          project
                          was centered around the mobility services market in China, and afterwards I
                          worked for
                          an Asian telecommunications company that wanted to enter the market for
                          automotive
                          applications to a greater extent. Only the fourth project was for a “real” car
                          manufacturer.</p>
                        <p>That’s what I like about SAC. It’s all about cars, and yet the variety of
                          projects is
                          extremely large. The fact that 2/3 of our customers come from abroad makes the
                          work here
                          very exciting for me. We have a great atmosphere amongst our team and I am very
                          thankful
                          for what I learned in my short time being here from my colleagues and from my
                          automotive
                          enthusiastic boss Martin.</p>
                        <p>I am currently working on a general MBA, that I will finish in December 2022.
                          Before
                          moving to Munich and my start at SAC I worked for another consultancy boutique
                          for 3
                          years and lived in Frankfurt. Before being a consultant I worked as protestant
                          pastor,
                          most recently in Jerusalem. In my spare time I love mountaineering in summer as
                          in
                          winter, free-riding and poetry slam.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  )
}

export default About