import React from "react";
import styles from "./Myself.module.css";
import "./Myself.module.css"
import myselfImg from "../assets/img/myself.jpg";
import githubBlack from "../assets/icons/github-black.png";
import mailBlack from "../assets/icons/mail-black.png";
import twitterBlack from "../assets/icons/twitter-black.png";
import whatsappBlack from "../assets/icons/whatsapp-black.png";
import SendWhatsapp from "./SendWhatsapp";
import { useEffect } from "react";


const drako = {
  name: "Antonio Jaramillo",
  age: 26,
  github: "https://github.com/Drako9159",
  twitter: "https://twitter.com/Drako9159",
  num: "525532317335",
  whatsapp: "whatsapp://send/?phone=52553231733",
  email: "drako9159@gmail.com",
  description: "Systems Enginner & Software Developer",
};

function handleScroll(e) {
  e.preventDefault();
  let val0 = document.querySelector("#container")
  val0.className = styles.changePosition
  console.log("lol")
}
window.addEventListener("mouseUp", handleScroll);

//window.scroll({top: -100, left: 100, behavior: "smooth"})






class Myself extends React.Component {
  render() {
    return (
      <div id="container" className={styles.container}>
        <section className={styles.description}>
          <div>
            <img src={myselfImg} alt="img-myself"></img>
          </div>
          <section>
            <h3>{drako.name}</h3>
            <h4>{drako.description}</h4>
          </section>
        </section>
        <section className={styles.linksSocial}>
          <a href={drako.github} target="_blank">
            <div>
              <img src={githubBlack} alt="github"></img>
            </div>
          </a>
          <a href={`mailto:${drako.email}`}>
            <div>
              <img src={mailBlack} alt="mail"></img>
            </div>
          </a>
          <a href={drako.twitter} target="_blank">
            <div>
              <img src={twitterBlack} alt="twitter"></img>
            </div>
          </a>
          <a href={`whatsapp://send/?phone=${drako.num}`} target="_blank">
            <div>
              <img src={whatsappBlack} alt="whatsapp"></img>
            </div>
          </a>
        </section>

        <section className={styles.habilitis}>
          <p>PostgresSQL</p>
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
