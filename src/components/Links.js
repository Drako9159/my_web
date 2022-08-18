import React from "react";
import styles from "./Links.module.css";
import { Link } from "react-router-dom";


class Links extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <button className={styles.buttonTo} to="/">
          Portafolio
        </button>
        <button className={styles.buttonTo}>
          Curriculum
        </button>
        <button className={styles.buttonTo}>
          Vlog
        </button>
      </div>
    );
  }
}
export default Links;
