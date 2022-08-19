import React from "react";

import styles from "./Portafolio.module.css";

class Portafolio extends React.Component {
  
  render() {
   
    return (
      <div className={styles.container}>
        <h2>{this.props.titles}</h2>
        
        <div>
          <article></article>
          <article></article>
          <article></article>
          <article></article>
          <article></article>
          <article></article>
        </div>
      </div>
    );
  }
}
export default Portafolio;
