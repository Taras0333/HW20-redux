import React, { Component } from "react";
import Render from "./header-render";
import Main from "./main-render";


class Post extends Component {
  state = {
    info: [
      {
        name: "Anakin Skywalker",
        photo: "",
        nickname: "dart_vader",
        content: "WTF? Who is RAY? Why she is Skywalker? Luke...?",
        date: "•26 February",
      },
    ],
  };
  render() {
    return (
      <div className="cont">
        <Render
          name={this.state.info[0].name}
          nick={this.state.info[0].nickname}
          date={this.state.info[0].date}
          parag={this.state.info[0].content}
        />

        <Main   />
      </div>
    );
  }
}
export default Post;
