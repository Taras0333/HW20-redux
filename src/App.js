import React from "react";
import "./App.css";
import Post from "./post/post";
import {Provider} from "react-redux"
import store from "./store/store";
import Input from "./input/input";



function App() {
  return (
   <Provider store={store}>
     <Post />
     <Input/>
   </Provider>
      
   
  
  )
}

export default App;
