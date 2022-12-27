import React, { Component } from 'react'

export default class CounterApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
          intervalId:null
        };
      }
    
      handleIncrement = () => {
        this.setState({
          count: this.state.count + 1
        });
      }
    
      handleDecrement = () => {
        this.setState({
          count: this.state.count - 1
        });
      }
    
      startcounting = () => {
        const intervalId = setInterval(() => {
          this.handleIncrement();
        }, 2000);
        this.setState({ intervalId });
      }
    
      stopcounting = () => {
        clearInterval(this.state.intervalId);
        this.setState({ intervalId: null });
      }
  render() {
    return (
      <>
      <p>{this.state.count}</p>
      <button onClick={this.startcounting}>start</button>
      <button onClick={this.stopcounting}>stop</button>
      <button onClick={this.handleDecrement}>-</button>


            </>
      
      
    
    )
  }
}
