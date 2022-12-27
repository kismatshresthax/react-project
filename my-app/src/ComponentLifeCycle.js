import React, { Component } from 'react'
import Child from './Child';

export default class ComponentLifeCycle extends Component {
  constructor(props) {
    super(props)
        this.state = {
          show: 'true'
        };}
        delChild =() => {
          this.setState({show:false});
        }
        
      
      // static getDerivedStateFromProps(props,state) {
      //   return {
      //     name: props.name1
      //   }

      // }
      // componentDidMount(){
      //   setTimeout(() => {
      //     this.setState({name: 'jacade'})
      //   },1000);
      // }
      // shouldComponentUpdate(){
      //   return true
      //   ;

      // }
      // changeName =() => {

      //   this.setState({
      //     name: 'setName'
      //   })
      // }
      // getSnapshotBeforeUpdate(prevProps, prevState){
      //   document.getElementById("div1").innerHTML = "before"+ prevState.name
      // }
      // componentDidUpdate(){
      //   document.getElementById("div2").innerHTML =  "after" + this.state.name
      // }

  
  render() {
  let childElem;
if(this.state.show) {
  childElem = <Child/>
}

    return (
      <>
      <div>
      {childElem}
      <button onClick={this.delChilid}>Delete header</button>
      </div>
      {/* <div>{this.state.name}</div>
      <button onClick={this.changeName}>changeName</button>
      <div1 id="div1" ></div1>
      <div2 id="div2"></div2> */}
</>
      
    )
  }
}
