import React, { Component } from "react";

import "./Modal.css";

class Modal extends Component {
  render() {
    console.log(this.props);
    return (
<div>
    hgjbk
    <div className="black"></div>
        {/* {this.props (
          <div className="modal">
            <h1>{this.props.name}</h1>
            <button onClick={this.props}>Close Modal</button>
          </div>
        )} */}
 </div>
    );
  }
}

export default Modal;