import styles from "./Projects.module.css";

import src0 from "../assets/img/rickAndMorty.png";
import src1 from "../assets/img/container.astro.png";
import src2 from "../assets/img/dr-web.png";
import src3 from "../assets/img/traduction.png";

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
    name: "Astro",
    description: "Best market",
    url: "https://containers-pied.vercel.app/",
    src: src1,
  },
  {
    id: 3,
    name: "Web traslate",
    description: "website complete",
    url: "none",
    src: src3,
  },
  {
    id: 4,
    name: "Dr-web",
    description: "Complete webiste for a pediatrician",
    url: "https://dr-web.vercel.app/",
    src: src2,
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
