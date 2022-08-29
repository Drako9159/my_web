import styles from "./ContainerApp.module.css";
import stylesMyself from "./Myself.module.css";
import MySelft from "./Myself";
import "./Myself.module.css";
import SubMenu from "./SubMenu";
import Footer from "./Footer";
import React from "react";

class ContainerApp extends React.Component {
  state = {
    styleComponent: styles.container,
    stylesHabilitis: stylesMyself.habilitis,
    stylesRound: stylesMyself.roundColor
  };
  setStyle = (e) => {
    this.setState({
      styleComponent: e,
    });
  };
  setHabilitis = (e) => {
    this.setState({
      stylesHabilitis: e,
    });
  };
  setRound = (e) => {
    this.setState({
      stylesRound: e

    })
  }
  render() {
    return (
      <div className={this.state.styleComponent}>
        <div className={styles.panoramic}></div>
        <div className={styles.menu}>
          <MySelft stylesHabilitis={this.state.stylesHabilitis} stylesRound={this.state.stylesRound}/>
          <SubMenu setStyle={this.setStyle} setHabilitis={this.setHabilitis} setRound={this.setRound}/>
        </div>
        <Footer />
      </div>
    );
  }
}
export default ContainerApp;
/*
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
}*/
