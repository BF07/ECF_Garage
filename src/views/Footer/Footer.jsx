import Schedule from "../../components/Schedule/Schedule"
import "../Footer/footer.css"
import { useState } from "react"

import parrotLogo from "../../assets/Images/logo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import {faFacebookF, faInstagram, faXTwitter} from "@fortawesome/free-brands-svg-icons"


export default function Footer () {

    const [userAddFirstName, setUserAddFirstName] = useState("")
    const [userAddLastName, setUserAddLastName] = useState("")
    const [userAddMessage, setUserAddMessage] = useState("")
    const [userAddNote, setUserAddNote] = useState("")


    return (
      <>
        <footer>
          <div className="footer-top-wrapper">
            <div className="avis-btn-mobile">
              <button href="">Un avis ?</button>
            </div>
            <div className="avis-form-container">
              <h3 className="title-avis-form">Donner un avis</h3>
              <form className="form-container" onSubmit={() => {}}>
                <div className="form-user-name">
                  <input
                    type="text"
                    placeholder="Nom"
                    value={userAddFirstName}
                    onChange={(e) => setUserAddFirstName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Prénom"
                    value={userAddLastName}
                    onChange={(e) => setUserAddLastName(e.target.value)}
                  />
                </div>
                <textarea
                  placeholder="Votre message..."
                  value={userAddMessage}
                  onChange={(e) => setUserAddMessage(e.target.value)}
                />
                <input
                  className="form-user-note"
                  type="number"
                  placeholder="Note"
                  value={userAddNote}
                  onChange={(e) => setUserAddNote(e.target.value)}
                />
                <button type="submit" className="form-button">
                  Envoyer
                </button>
              </form>
            </div>

            {/* <div className="contact-container">
                <h3 className="title-contact">Contacter-nous</h3>
                <div className="contact">
                    <p className="adress">Adresse : Route du Nord, 31000, Toulouse</p>
                    <p className="tel">Téléphone : 0606060606</p>
                    <a href="" className="form-contact">Envoyez-nous un message</a>
                </div>
            </div> */}

            <div className="opening-days">
              <h3 className="schedule">Venez nous voir</h3>
              <table>
                <thead>
                  <tr>
                    <th>Jours</th>
                    <th>Matin</th>
                    <th>Après-midi</th>
                  </tr>
                </thead>
                <Schedule />
              </table>
            </div>
          </div>
          <div className="info-footer">
            <div className="footer-logo-wrapper">
              <div className="logo-footer">
                <a href="">
                  <img
                    className="logo"
                    src={parrotLogo}
                    alt="Logo of Vincent Parrot"
                  />
                </a>
              </div>
            </div>

            <div className="footer-bottom-wrapper">
              <div className="footer-contact">
                <a href="" className="footer-contact-element">
                  <p className="adress">
                  <FontAwesomeIcon className="icon" icon={faLocationDot} />Adresse : Route du Nord, 31000, Toulouse
                  </p>
                </a>
                <a href="" className="footer-contact-element">
                  <p className="tel"><FontAwesomeIcon className="icon" icon={faPhone} />Téléphone : 0606060606</p>
                </a>
                <div className="footer-social-wrapper">
                  <a href="">
                    <FontAwesomeIcon className="icon" icon={faFacebookF} />
                  </a>
                  <a href="">
                    <FontAwesomeIcon className="icon" icon={faInstagram} />
                  </a>
                  <a href="">
                    <FontAwesomeIcon className="icon" icon={faXTwitter} />
                  </a>
                </div>
              </div>
              <div className="footer-links">
                <div className="footer-services-wrapper">
                  <h4>Services</h4>
                  <a href="" className="footer-services">Occasions</a>
                  <a href="" className="footer-services">Entretiens</a>
                  <a href="" className="footer-services">Mécanique</a>
                  <a href="" className="footer-services">Carrosserie</a>
                </div>
              </div>
              <div className="footer-company-wrapper">
                <h4>Entreprise</h4>
                <a href="" className="footer-company">À Propos</a>
                <a href="" className="footer-company">Nos Services</a>
                <a href="" className="footer-company">Nous contacter</a>
                <a href="" className="footer-company">Mentions légales</a>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
}