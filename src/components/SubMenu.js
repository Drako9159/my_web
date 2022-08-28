import Links from "./Links";
import Portafolio from "./Portafolio";
import Curriculum from "./Curriculum";
import React from "react";
import styles from "./Links.module.css";
const sbtn0 = styles.btn0;
const sbtn1 = styles.btn1;
const sbtn2 = styles.btn2;

class SubMenu extends React.Component {
  state = {
    name: "Welcome",
    btn0: false,
    btn1: false,
    btn2: false,
  };

  setTitle = (title) => {
    this.setState({
      name: title,
    });
  };
  renderBtn0 = () => {
    this.setState({
      btn0: !this.state.btn0,
      btn1: false,
      btn2: false,
    });
  };
  renderBtn1 = () => {
    this.setState({
      btn1: !this.state.btn1,
      btn0: false,
      btn2: false,
    });
  };
  renderBtn2 = () => {
    this.setState({
      btn2: !this.state.btn2,
      btn1: false,
      btn0: false,
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
