import React from "react";
import {connect} from "react-redux";
import "./input.css";

const mapState = (state) => {
    return state;
}
const mapDispatch = (dispatch) =>({
    change(content, author, img){
        dispatch({
            type: "CHANGE_CONTENT",
            content: content,
            author: author,
            photo: img
          })
    }
})



const Input = connect(mapState, mapDispatch)((props) => {
    let message = props.content;
    let aut = props.name;
    let img = props.photo;
    const saveContent = (e) => {
        message = e.target.value     
    }
    const saveAuthor = (e) =>{
        aut = e.target.value;
    }
    const saveImg = (e) =>{
        img = e.target.value;
    }
    const change = () => {
    props.change(message, aut, img)
    };


return(
    <div className="inputs-cont">
        <label className="input-cont">Post content: <input type="text" className="inpt" onChange={saveContent}></input></label>
        <label className="input-cont">Post image: <input type="text" className="inpt" onChange={saveImg}></input></label>
        <select onChange={saveAuthor} className="name-input">
            <option selected disabled>Choose the author</option>
            <option >Anakin Skywalker</option>
            <option>Tonny Montana</option>
            <option>James Bond</option>
            <option>Tom Smith</option>
        </select>
        <button onClick={change} className="save-btn">Save</button>
        
    </div>
)
});
export default Input;