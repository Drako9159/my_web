import React from "react";
import styles from "./Links.module.css";
import "./Links.module.css";

class Links extends React.Component {
  handlerName = (e) => {
    let title = e.target.value;
    e.preventDefault();
    this.props.setTitle(title);
    if (title === "Portafolio") {
      this.props.renderBtn0();
    }
    if (title === "Curriculum") {
      this.props.renderBtn1();
    }
    if (title === "Vlog") {
      this.props.renderBtn2();
    }
  };

  render() {
    return (
      <div className={styles.container}>
        <button
          className={this.props.btnStyle0}
          onClick={this.handlerName}
          value="Portafolio"
        >
          Portafolio
        </button>
        <button
          className={this.props.btnStyle1}
          onClick={this.handlerName}
          value="Curriculum"
        >
          Curriculum
        </button>
        <button
          className={this.props.btnStyle2}
          onClick={this.handlerName}
          value="Vlog"
        >
          Vlog
        </button>
      </div>
    );
  }
}
export default Links;
