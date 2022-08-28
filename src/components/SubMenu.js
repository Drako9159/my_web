import Links from "./Links";
import Portafolio from "./Portafolio";
import React from "react";
import styles from "./Links.module.css";
import "./Links.module.css";

class SubMenu extends React.Component {
  state = {
    name: "Welcome",
    btn0: false,
    btn1: false,
    btn2: false,
    btnStyle0: styles.btn0,
    btnStyle1: styles.btn1,
    btnStyle2: styles.btn2,
  };

  setTitle = (title) => {
    this.setState({
      name: title,
    });
  };

  renderBtn0 = () => {
    if(this.state.btn0){
      return 
    }
    this.setState({
      btn0: !this.state.btn0,
      btn1: false,
      btn2: false,
      btnStyle0: styles.btnCheck,
      btnStyle1: styles.btn1,
      btnStyle2: styles.btn2,
    });
  };
  renderBtn1 = () => {
    if(this.state.btn1){
      return 
    }
    this.setState({
      btn1: !this.state.btn1,
      btn0: false,
      btn2: false,
      btnStyle1: styles.btnCheck,
      btnStyle2: styles.btn2,
      btnStyle0: styles.btn0,
    });
  };
  renderBtn2 = () => {
    if(this.state.btn2){
      return 
    }
    this.setState({
      btn2: !this.state.btn2,
      btn1: false,
      btn0: false,
      btnStyle2: styles.btnCheck,
      btnStyle1: styles.btn1,
      btnStyle0: styles.btn0,
    });
  };

  render() {
    return (
      <div>
        <Links
          setTitle={this.setTitle}
          renderBtn0={this.renderBtn0}
          renderBtn1={this.renderBtn1}
          renderBtn2={this.renderBtn2}
          btnStyle0={this.state.btnStyle0}
          btnStyle1={this.state.btnStyle1}
          btnStyle2={this.state.btnStyle2}
        />
        <Portafolio
          name={this.state.name}
          btn0={this.state.btn0}
          btn1={this.state.btn1}
          btn2={this.state.btn2}
        />
      </div>
    );
  }
}
export default SubMenu;
