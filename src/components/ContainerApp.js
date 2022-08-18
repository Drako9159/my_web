import styles from "./ContainerApp.module.css";
import MySelft from "./Myself";
import "./Myself.module.css";
import SubMenu from "./SubMenu";
import { useEffect } from "react";

export default function ContainerApp() {
  
  useEffect(() => {
    
    function handleScroll(e) {
      
     
      
    
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
    
    };
  }, []);

  return (
    <div className={styles.containerApp}>
      <MySelft />
      <SubMenu />
    </div>
  );
}
