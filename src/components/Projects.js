import styles from "./Projects.module.css";

import src0 from "../assets/img/rickAndMorty.png";
import src1 from "../assets/img/container.astro.png";

const projects = [
  {
    id: 1,
    name: "Rick & Morty",
    description: "This project consult rest API ",
    url: "https://web-page-rick-and-morty.vercel.app/",
    src: src0,
  },
  {
    id: 2,
    name: "Astro Container",
    description: "Best market",
    url: "https://containers-pied.vercel.app/",
    src: src1,
  },
  {
    id: 3,
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
          <article key={e.id} className={styles.container}>
            <img src={e.src} alt={e.name} />
            <h2>{e.name}</h2>
          </article>
        );
      })}
    </div>
  );
}
