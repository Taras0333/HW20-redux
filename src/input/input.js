import React, {useState} from "react";
import {connect} from "react-redux";
import "./input.css";
import { change } from './actions';

const mapState = (state) => {
    return state;
}
const mapDispatch ={
    change,
}



const Input = connect(mapState, mapDispatch)((props) => {
    const [message, setMessage] = useState(props.content);
    const [author, setAuthor] = useState(props.name);
    const [img, setImg] = useState(props.photo);
    const saveContent = (e) => {
        setMessage(e.target.value);      
    }
    const saveAuthor = (e) =>{
        setAuthor(e.target.value); 
    }
    const saveImg = (e) =>{
        setImg(e.target.value);  
    }
    const change = () => {
    props.change(message, author, img)
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