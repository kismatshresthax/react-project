import React, { Component } from 'react'

export default class ClassComponentDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  increasing() {
    this.setState({ count: this.state.count + 1 });
  }
  decreasing() {
   
      this.setState({ count: this.state.count - 1 });
     }
  render() {
    return (
        <>
      <p>{this.state.count}</p>
        <button  onClick={this.decreasing.bind(this)}>
          -
        </button>
        <button onClick={this.increasing.bind(this)}>
          +
        </button>
      </>
    )
   
  }
}
