import React, { Component } from "react";
import {connect} from 'react-redux'
import NavBar from './NavBar'
import * as actionType from '../store/actions/index'
class Layout extends Component {
  componentDidMount(){
    this.props.initCall()
  }
  render(){
    this.props.isBlack ? document.getElementById("myBody").setAttribute("class","isBlack"):document.getElementById("myBody").setAttribute("class","")
    return (
      <div className={this.props.isBlack?"isBlack":""}>
          <NavBar isBlack={this.props.isBlack} isFahren={this.props.isFahren} toggleColorHandler={this.props.toggleColorHandler} toggleWeatherHandler={this.props.toggleWeatherHandler}/>
      <div className="container">
        {this.props.children}
      </div>
       
           
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
      isBlack:state.app.isBlack,
      isFahren:state.app.isFahren
  }
}

const mapDispatchToProps=(disatch)=>{
  return{
    toggleColorHandler:()=>disatch(actionType.toggleColorHandler()),
    toggleWeatherHandler:()=>disatch(actionType.toggleWeatherHandler()),
    initCall:()=>disatch(actionType.initCall())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout)