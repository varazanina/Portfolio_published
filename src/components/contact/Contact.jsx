import "./contact.css"
import Mail from "../../assets/mail_icon.png";
import Messenger from "../../assets/messenger_icon.png";

import React from 'react'

export const Contact = () => {
  return (
    <>
    <h1>Contact</h1>
    <div id='contact' className="contactContainer">
        <div className="mail contactItem">
            <h3>E-mail</h3>
            <img src={Mail} alt="E-mail" />
            <p>ninazavodska33@gmail.com</p>
            <a href="mailto:ninazavodska33@gmail.com">
                <button id="pinkB" className="pinkButton">Send Email</button>
            </a>
        </div>
        <div className="messenger contactItem">
            <h3>Messenger</h3>
            <img src={Messenger} alt="Messenger" />
            <p>ninaz</p>
            <a href="https://www.messenger.com/t/profile.php?id=100009856172614">
                <button id="blackB" className="blackButton">Send Message</button>
            </a>
        </div>
    </div>
    </>
  )
}
