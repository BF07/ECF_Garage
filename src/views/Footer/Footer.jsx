import Schedule from "../../components/Schedule/Schedule"
import "../Footer/footer.css"
import { useState } from "react"


export default function Footer () {

    const [userAddFirstName, setUserAddFirstName] = useState("")
    const [userAddLastName, setUserAddLastName] = useState("")
    const [userAddMessage, setUserAddMessage] = useState("")
    const [userAddNote, setUserAddNote] = useState("")


    return (
      <>
        <footer>
          <div className="footer-wrapper">
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

            <div className="contact-container">
                <h3 className="title-contact">Contacter-nous</h3>
                <div className="contact">
                    <p className="adress">Adresse : Route du Nord, 31000, Toulouse</p>
                    <p className="tel">Téléphone : 0606060606</p>
                    <a href="" className="form-contact">Envoyez-nous un message</a>
                </div>
            </div>

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
        </footer>
      </>
    );
}