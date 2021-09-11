import React, { Component } from "react";

import "./Modal.css";

class Modal extends Component {
  render() {
    console.log(this.props.show);
    return (
<div>
        {this.props.show && (
          <div className="modal">
            <h1>{this.props.name}</h1>
            <button onClick={this.props.onHide}>Close Modal</button>
          </div>
        )}
 </div>
    );
  }
}

export default Modal;