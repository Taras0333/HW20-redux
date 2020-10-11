import photo from "../img/star-wars-girl-power-6fca5925.jpg"
import mes from "../img/134932.svg";
import share from "../img/1251845.svg";
import heart from "../img/929417.svg";

const initialStore = {
    name: "Anakin Skywalker",
    photo: `${photo}`,
    nickname: "dart_vader",
    content: "WTF? Who is RAY? Why she is Skywalker? Luke...?",
    date: "•26 February",
    mes: `${mes}`,
    share: `${share}`,
    heart: `${heart}`,
    messagesCount: 545,
    sharesCount: 141,
    likesCount: 414,
    
}


const reducer = (store = initialStore, action) => {
switch(action.type){
    case "CHANGE_CONTENT": {
        return{
            ...store,
            content: action.content,
            name: action.author,
            photo: action.photo
        }
    }
    default:{
        return store
    } 
}
}

export default reducer;