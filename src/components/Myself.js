import React from "react";
import styles from "./Myself.module.css";
import myselfImg from "../assets/img/myself.jpg";

import githubBlack from "../assets/icons/github-black.png";
import mailBlack from "../assets/icons/mail-black.png";
import twitterBlack from "../assets/icons/twitter-black.png";
import whatsappBlack from "../assets/icons/whatsapp-black.png";

class Myself extends React.Component {
  

  render() {
    return (
      <div className={styles.container}>
        <section className={styles.description}>
          <div>
            <img src={myselfImg} alt="img-myself"></img>
          </div>
          <p>
            Desarrollador de softare e ingerieron en sistemas computacionales
          </p>
        </section>
        <section className={styles.linksSocial}>
          <div>
            <img src={githubBlack} alt="github"></img>
          </div>
          <div>
            <img src={mailBlack} alt="mail"></img>
          </div>
          <div>
            <img src={twitterBlack} alt="twitter"></img>
          </div>
          <div>
            <img src={whatsappBlack} alt="whatsapp"></img>
          </div>
        </section>
        <section className={styles.habilitis}>
          <p>Diseñador</p>
          <p>Testing</p>
          <p>CSS</p>
          <p>HTML</p>
          <p>JAVA</p>
          <p>JavaScrip</p>
          <p>MySQL</p>
        </section>
      </div>
    );
  }
}
export default Myself;
