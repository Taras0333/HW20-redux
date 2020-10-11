import photo from "../img/star-wars-girl-power-6fca5925.jpg"
import mes from "../img/134932.svg";
import share from "../img/1251845.svg";
import heart from "../img/929417.svg";
import post from "../img/454545.svg";

const initialStore = {
    name: "Anakin Skywalker",
    photo: `${photo}`,
    nickname: "dart_vader",
    content: "WTF? Who is RAY? Why she is Skywalker? Luke...?",
    date: "•26 February",
    mes: `${mes}`,
    share: `${share}`,
    heart: `${heart}`,
    post: `${post}`,
    messagesCount: 545,
    messagesActive: true,
    sharesCount: 141,
    sharesActive: true,
    likesCount: 414,
    likesActive: true
    
}


const reducer = (store = initialStore, action) => {
switch(action.type){
    case "CHANGE_CONTENT": {
        return{
            ...store,
            content: action.content,
            name: action.author,
            photo: action.photo,
            
        }
    }
    case "CHANGE_COUNT":{
        return{
            ...store,
            messagesCount: action.likes,
            messagesActive: action.messagesActive,
            sharesCount: action.sharesCount,
            sharesActive: action.sharesActive,
            likesCount: action.likesCount,
            likesActive: action.likesActive
           
        }
    }
    default:{
        return store
    } 
}
}

export default reducer;