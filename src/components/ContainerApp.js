import styles from "./ContainerApp.module.css";
import MySelft from "./Myself";
import "./Myself.module.css";
import SubMenu from "./SubMenu";
import Footer from "./Footer"

export default function ContainerApp() {
  return (
    <div className={styles.containerApp}>
      <div className={styles.strap}>
        <MySelft />
        <SubMenu />
        
      </div>
      <Footer />
    </div>
  );
}
