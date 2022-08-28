import React from "react";
import Curriculum from "./Curriculum";
import styles from "./Portafolio.module.css";
import Projects from "./Projects";

const projects = [
  {
    name: "Rick & Morty",
  },
  {
    name: "Customer Service",
  },
];
/*
<h2>{this.props.name}</h2>
        <div>
          {projects.map((e) => {
            return (
              <article key={e.name}>
                <h1>{e.name}</h1>
              </article>
            );
          })}
        </div>*/
class Portafolio extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h2>{this.props.name}</h2>
        <div className={styles.links}>
          
        </div>
      </div>
    );
  }
}
export default Portafolio;
