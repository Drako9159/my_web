import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <ul>
        <li>By Antonio Jaramillo</li>
        <li>build with <a href="https://es.reactjs.org/" targe="_blank">React</a></li>
      </ul>
      <ul className={styles.date}>
        <li>2022</li>
      </ul>
      <ul>
        <li> All Rights Reserved</li>
      </ul>
    </div>
  );
}
