import React, { useState } from "react";
import Style from "./Footer.module.scss";
import logoBeadvize from "../../assets/Footer/logoBeadvize.svg";
import linkdin from "../../assets/Footer/linkedin.svg";
import facebook from "../../assets/Footer/facebook.svg";
import Cross from "../../assets/Auth/Cross.svg";
import { newsletter } from "../../Utilities/request";

const Footer = () => {
  const [showMention, setShwoMention] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const noScroll = () => {
    let body = document.body;
    body.style.height = "100vh";
    body.style.overflowY = "hidden";
  };
  const goScroll = () => {
    let body = document.body;
    body.style.height = "";
    body.style.overflowY = "";
  };

  const [form, setFrom] = useState({
    email: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFrom({
      ...form,
      email: value,
    });
  };

  const submitNewsletter = () => {
    setShowConfirmationModal(true);
    /*   const data = newsletter(form)
        data.then(res => {
          setShowConfirmationModal(true)
        })
        .catch(err => {
            console.log(err)
        })  */
  };

  return (
    <footer className={Style.footer}>
      <div className={Style.container}>
        <div className={Style.containAll}>
          <div className={Style.logo}>
            <img src={logoBeadvize} alt="Logo de l'entreprise beadvize" />
          </div>
          <div className={Style.col1}>
            <p className={Style.bold}>Liens</p>
            <a className={Style.small} href="/concept">
              Concept
            </a>
            <p className={Style.small}>Offres</p>
            <a className={Style.small} href="http://blog.beadvize.fr">
              Blog
            </a>
            <a className={Style.small} href="/WhoWeAre">
              Qui sommes-nous ?
            </a>
            <a className={Style.small} href="/FAQ">
              FAQ
            </a>
            <button
              onClick={() => {
                setShwoMention(true);
                noScroll();
              }}
              className={Style.small}
            >
              Mentions légales
            </button>
          </div>
          <div className={Style.col2}>
            <p className={Style.bold}>Newsletter</p>
            <div className={Style.mobile}>
              <p className={Style.small}>
                Inscrivez-vous à notre newsletter pour recevoir les dernières
                missions, et les actualités du freelancing
              </p>
              <div className={Style.nwsection}>
                <input
                  className={Style.nwinput}
                  name="email"
                  type="email"
                  placeholder="Votre mail"
                  onChange={handleChange}
                ></input>
                <a onClick={submitNewsletter} className={Style.inputbtn}>
                  Envoyer
                </a>
              </div>
            </div>
          </div>
          <div className={Style.col3}>
            <a className={Style.bold} href="/contactUs">
              Contact
            </a>
            <p className={Style.small}>
              76 rue blomet <br /> 75015, Paris
            </p>
            <p className={Style.small}>contact@beadvize.fr</p>
            <p className={Style.small}>
              06 64 50 22 27
              <br />
              06 62 36 56 10
            </p>
            <div>
              <a
                className={Style.bold}
                href="https://www.linkedin.com/company/beadvize"
              >
                <img
                  src={linkdin}
                  style={{ width: "24px" }}
                  alt="logo linkedin"
                />
              </a>
              <a
                className={Style.bold}
                href="https://www.facebook.com/Beadvize/"
              >
                {" "}
                <img
                  src={facebook}
                  style={{ width: "14px", marginLeft: "5px" }}
                  alt="logo facebook"
                  className={Style.fb}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {showMention ? (
        <div className={Style.vh} id="mention">
          <div className={Style.Block}>
            <div className={Style.containTitle}>
              <h1>Mentions Légals</h1>
              <img
                src={Cross}
                alt="bouton pour quitter la modale"
                onClick={() => {
                  setShwoMention(false);
                  goScroll();
                }}
              />
            </div>
            <div className={Style.containPata}>
              <div>
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div>
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div>
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div>
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div>
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div>
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div>
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div>
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div>
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {showConfirmationModal === true ? (
        <div className={Style.modalBlock}>
          <div className={Style.section}>
            <div
              style={{ width: "50%", padding: "10px" }}
              className={Style.container}
            >
              <div
                className={Style.cross}
                onClick={(e) => {
                  setShowConfirmationModal(false);
                }}
              >
                <img src={Cross} alt="croix" />
              </div>
              <h1 className={Style.title}>Merci</h1>
              <div className={Style.barre}></div>

              <button className={Style.notRegister}>
                Pas encore membre BeAdvize ? <span>Inscrivez-vous</span>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </footer>
  );
};

export default Footer;
