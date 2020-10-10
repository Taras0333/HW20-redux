import React from "react";
import {connect} from "react-redux";

const mapState = (state) => {
  return state;
}


const RenderMain = connect(mapState, null)((props) => (
  <div className="bottom-container">
    <div className="top-wrap">
      <img className="main-img" src={props.photo} alt="girl" />
         
      
    </div>
    <div className="bot-wrap">
      <div className="bot-items">
        <img className="logo" src={props.mes} />
<span>{props.messagesCount}</span>
      </div>
      <div className="bot-items">
        <img className="logo" src={props.share} />
        <span>{props.sharesCount}</span>
      </div>
      <div className="bot-items">
        <img className="logo" src={props.heart} />
        <span>{props.likesCount}</span>
      </div>
      <div className="bot-items">
        <img className="logo" src={props.post} />
      </div>
    </div>
  </div>
));
export default RenderMain;
