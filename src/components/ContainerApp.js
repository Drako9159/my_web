import styles from "./ContainerApp.module.css";
import MySelft from "./Myself";
import "./Myself.module.css";
import SubMenu from "./SubMenu";
import Footer from "./Footer";

export default function ContainerApp() {
  return (
    <div className={styles.container}>
      <div className={styles.panoramic}></div>
      <div className={styles.menu}>
        <MySelft />

        <SubMenu />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
