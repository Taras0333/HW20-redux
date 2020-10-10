import React from "react";
import {connect} from "react-redux";

const mapState = (state) =>{
  return state;
}




const Render = connect(mapState, null)((props) => {
  
  return( 
  <div className="top-bar">
    <div className="img-cont"></div>
    <div className="content-wrap">
      <div className="user-info">
        <span className="user">{props.name}</span>
        <div className="check"></div>
        <span className="nick">{props.nick}</span>
        <span className="date">{props.date}</span>
        <div className="header-arrow"></div>
      </div>
      <span className="parag">{props.content}</span>
    </div>
  </div>
  )
});
export default Render;
