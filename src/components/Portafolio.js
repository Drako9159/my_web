import React from "react";
import Curriculum from "./Curriculum";
import styles from "./Portafolio.module.css";
import Projects from "./Projects";

class Portafolio extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>{this.props.name}</h1>
        <div className={styles.main}>
          <div>{this.props.btn0 ? <Projects /> : false}</div>
          <div>{this.props.btn1 ? <Curriculum /> : false}</div>
        </div>
        
      </div>
    );
  }
}
export default Portafolio;
