import React from 'react'
import Banner from '../components/lib/Banner'

const Contact = () => {
  return (
    <>
    <Banner title="Contact us" banner="banner3.jpg" desc="Wir haben Ihr Interesse geweckt? – Kontaktieren Sie uns!" />

      <section className="contact-section">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8">
              <div className="media">
                <div className="media-left">
                  <img src="assets/img/address.png" alt="" className="media-object" />
                </div>

                <div className="media-body">
                  <p>Stahl Automotive Consulting GmbH & Co. KG <br />
                    Otto-Heilmann-Str. 5 D-82031 Grünwald</p>
                </div>
              </div>

              <div className="media">
                <div className="media-left">
                  <img src="assets/img/email.png" alt="" className="media-object" />
                </div>

                <div className="media-body">
                  <p><a href="mailto:info@sac-group.eu">info@sac-group.eu</a></p>
                </div>
              </div>

              <div className="media">
                <div className="media-left">
                  <img src="assets/img/phone.png" alt="" className="media-object" />
                </div>

                <div className="media-body">
                  <p><a href="tel:+49-(89)-3500 9966">+49-(89)-3500 9966</a></p>
                </div>
              </div>

              <div className="media">
                <div className="media-left">
                  <img src="assets/img/social.png" alt="" className="media-object" />
                </div>

                <div className="media-body">
                  <p><a href="https://www.linkedin.com/" target="_blank"><i className="fa fa-arrow-right"></i>
                    LinkedIn</a></p>
                  <p><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-arrow-right"></i>
                    Facebook</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2667.698813708869!2d11.53733131583201!3d48.03884356601117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddc3f41c0a585%3A0x14aa8c67a141d760!2sStahl%20Automotive%20Consulting%20GmbH%20%26%20Co.%20KG!5e0!3m2!1sen!2sin!4v1661519495633!5m2!1sen!2sin"
          width="100%" height="450" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </>
  )
}

export default Contact