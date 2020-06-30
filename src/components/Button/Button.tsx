import React, { Component } from 'react';

class Button extends Component {

  handleClick() {
    window.open('http://localhost:6060')
  }
  componentDidMount() {
      console.log("component did mount")
    import('lodash').then(({ default: DefaultExport})=> {
        console.log(DefaultExport.ceil(4,1))
      })
  }
  render() {
  
    return (
      <button onClick={this.handleClick}
       
      >
        {"Documentation"}
      </button>
    );
  }
}

export default Button;
