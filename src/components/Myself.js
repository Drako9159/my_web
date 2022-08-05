import React from "react";
import "./Myself.css";
import myselfImg from "../assets/img/myself.jpg";

class Myself extends React.Component {
  render() {
    return (
      <div id="myself">
        <section id="description">
          <div>
            <img src={myselfImg} alt="img-myself"></img>
          </div>
          <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>
        <section id="links-social">
          <div>
            <img src="../assets/icons/github-black.png" alt="github"></img>
          </div>
          <div>
            <img src="#" alt="mail"></img>
          </div>
          <div>
            <img src="#" alt="twitter"></img>
          </div>
          <div>
            <img src="#" alt="whatsapp"></img>
          </div>
        </section>
        <section id="habilitis"></section>
      </div>
    );
  }
}
export default Myself;
