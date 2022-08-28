import styles from "./Projects.module.css";

import src0 from "../assets/img/rickAndMorty.png";

const projects = [
  {
    name: "Rick & Morty",
    description: "This project consult rest API ",
    url: "https://web-page-rick-and-morty.vercel.app/",
    src: src0,
  },
  {
    name: "Ecomerce",
    description: "Best market",
    url: "None",
    src: src0,
  },
  {
    name: "Timer",
    description: "consult your climate",
    url: "none",
    src: src0,
  },
  {
    name: "Timer",
    description: "consult your climate",
    url: "none",
    src: src0,
  },
  {
    name: "Timer",
    description: "consult your climate",
    url: "none",
    src: src0,
  },
  {
    name: "Timer",
    description: "consult your climate",
    url: "none",
    src: src0,
  },
];
const test = projects[0].src;
export default function Projects() {
  return (
    <div>
      {projects.map((e) => {
        return (
          <article key={e.name} className={styles.container}>
            <img src={e.src} alt={e.name} />
            <h2>{e.name}</h2>
          </article>
        );
      })}
    </div>
  );
}
