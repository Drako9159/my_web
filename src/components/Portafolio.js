import React from "react";

import "./Portafolio.css";

class Portafolio extends React.Component {
  
  render() {
   
    return (
      <div id="portafolio">
        <h2>{this.props.titles}</h2>
        
        <div>
          <article></article>
          <article></article>
          <article></article>
          <article></article>
          <article></article>
          <article></article>
        </div>
      </div>
    );
  }
}
export default Portafolio;
