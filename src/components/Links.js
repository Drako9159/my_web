import React from "react";
import "./Links.css";
import { Link } from "react-router-dom";
class Links extends React.Component {
  


  render() {
    return <div id="links">
      <Link className="button-to" to="/" name="Portafolio"
      onCLick={this.props.changeTitle()}>Portafolio</Link>
      <Link className="button-to" to="/" name="Curriculum">Curriculum</Link>
      <Link className="button-to" to="/" >Vlog</Link>
    </div>;
  }
}
export default Links;
