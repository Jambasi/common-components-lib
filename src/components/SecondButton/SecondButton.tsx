import React, { Component } from 'react';

class SecondButton extends Component {
  /**
   * @type {Function}
   * @returns {void}
   */
  handleClick() {
    window.open('http://localhost:3000')
  }
  /**
   * @type {Function}
   * @returns {JSX.Element}
   */
  render() {
    const clickFunction = this.handleClick
    return (
      <button onClick={clickFunction}
       
      >
        {"Documentation"}
      </button>
    );
  }
}

export default SecondButton;
