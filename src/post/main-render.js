import React from "react";
import {connect} from "react-redux";

const mapState = (state) => {
  return state;
}
const mapDispatch = (dispatch) =>({
    changeCount(messagesCount, messagesActive, sharesCount, sharesActive, likesCount, likesActive){
      dispatch({
        type: "CHANGE_COUNT",
        likes: messagesCount,
        messagesActive: messagesActive,
        sharesCount: sharesCount,
        sharesActive: sharesActive,
        likesCount: likesCount,
        likesActive: likesActive
        
      })
    }
})

const RenderMain = connect(mapState, mapDispatch)((props) => {
  let mess = props.messagesCount;
  let messAct = props.messagesActive;
  let shar = props.sharesCount;
  let sharAct = props.sharesActive;
  let like = props.likesCount;
  let likeAct = props.likesActive;
    const changeMess = () => {
      if(messAct){
        props.changeCount(mess + 1, !messAct, shar, sharAct, like, likeAct)
      }else{
        props.changeCount(mess - 1, !messAct, shar, sharAct, like, likeAct)
      }
      
    };
    const changeShares = () => {
      if(sharAct){
        props.changeCount(mess, messAct, shar + 1, !sharAct, like, likeAct)
      }else{
        props.changeCount(mess, messAct, shar - 1, !sharAct, like, likeAct)
      }
      
    };
    const changeLikes = () => {
      if(likeAct){
        props.changeCount(mess, messAct, shar, sharAct, like + 1, !likeAct)
      }else{
        props.changeCount(mess, messAct, shar, sharAct, like - 1, !likeAct)
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
