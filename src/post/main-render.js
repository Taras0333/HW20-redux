import React, {useState} from "react";
import {connect} from "react-redux";
import { changeCount  } from './actions';

const mapState = (state) => {
  return state;
}
const mapDispatch = {
    changeCount,
    
}

const RenderMain = connect(mapState, mapDispatch)((props) => {
  
    const changeMess = () => {
      if(props.messagesActive){
        props.changeCount(props.messagesCount + 1, !props.messagesActive, props.sharesCount, props.sharesActive, props.likesCount, props.likesActive)
      }else{
        props.changeCount(props.messagesCount - 1, !props.messagesActive, props.sharesCount, props.sharesActive, props.likesCount, props.likesActive)
      }
      
    };
    const changeShares = () => {
      if(props.sharesActive){
        props.changeCount(props.messagesCount, props.messagesActive, props.sharesCount + 1, !props.sharesActive, props.likesCount, props.likesActive)
      }else{
        props.changeCount(props.messagesCount, props.messagesActive, props.sharesCount - 1, !props.sharesActive, props.likesCount, props.likesActive)
      }
      
    };
    const changeLikes = () => {
      if(props.likesActive){
        props.changeCount(props.messagesCount, props.messagesActive, props.sharesCount, props.sharesActive, props.likesCount + 1, !props.likesActive)
      }else{
        props.changeCount(props.messagesCount, props.messagesActive, props.sharesCount, props.sharesActive, props.likesCount - 1, !props.likesActive)
      }
      
    };
   
return(
  <div className="bottom-container">
    <div className="top-wrap">
      <img className="main-img" src={props.photo} alt="girl" />
         
      
    </div>
    <div className="bot-wrap">
      <div className="bot-items" onClick={changeMess}>
        <img className="logo" src={props.mes} />
<span>{props.messagesCount}</span>
      </div>
      <div className="bot-items" onClick={changeShares}>
        <img className="logo" src={props.share} />
        <span>{props.sharesCount}</span>
      </div>
      <div className="bot-items" onClick={changeLikes}>
        <img className="logo" src={props.heart} />
        <span>{props.likesCount}</span>
      </div>
      <div className="bot-items">
        <img className="logo" src={props.post} />
      </div>
    </div>
  </div>
)});
export default RenderMain;
