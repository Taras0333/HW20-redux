import React from "react";
import {connect} from "react-redux";
import "./input.css";

const mapState = (state) => {
    return state;
}
const mapDispatch = (dispatch) =>({
    change(content, author){
        dispatch({
            type: "CHANGE_CONTENT",
            content: content,
            author: author
          })
    }
})



const Input = connect(mapState, mapDispatch)((props) => {
    let message = props.content;
    let aut = "";
    const saveContent = (e) => {
        message = e.target.value     
    }
    const saveAuthor = (e) =>{
        aut = e.target.value;
    }
    const change = () => {
    props.change(message, aut)
    };


return(
    <div className="inputs-cont">
        <label className="input-cont">Post content: <input type="text" className="inpt" onChange={saveContent}></input></label>
        <select onChange={saveAuthor} className="name-input">
            <option selected disabled>Choose the author</option>
            <option>Anakin Skywalker</option>
            <option>Tonny Montana</option>
            <option>James Bond</option>
            <option>Tom Smith</option>
        </select>
        <button onClick={change} className="save-btn">Save</button>
        
    </div>
)
});
export default Input;