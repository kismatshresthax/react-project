import React, { Component } from 'react'

export default class Child extends Component {
    componentWillUnmount(){
        alert("this component named child is about to be unmounted.")
    }
  render() {
    return (
<h1>hello js</h1>    )
  }
}
