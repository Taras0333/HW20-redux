(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/star-wars-girl-power-6fca5925.bbe4080b.jpg"},function(e,t,a){e.exports=a.p+"static/media/134932.c6972b98.svg"},function(e,t,a){e.exports=a.p+"static/media/1251845.99243e5a.svg"},function(e,t,a){e.exports=a.p+"static/media/929417.01b91a1b.svg"},function(e,t,a){e.exports=a.p+"static/media/454545.f5766427.svg"},,,function(e,t,a){e.exports=a(34)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(3),o=a.n(s),r=(a(25),a(26),a(10)),i=a(11),l=a(19),m=a(18),u=a(1),h=Object(u.b)((function(e){return e}),null)((function(e){return c.a.createElement("div",{className:"top-bar"},c.a.createElement("div",{className:"img-cont"}),c.a.createElement("div",{className:"content-wrap"},c.a.createElement("div",{className:"user-info"},c.a.createElement("span",{className:"user"},e.name),c.a.createElement("div",{className:"check"}),c.a.createElement("span",{className:"nick"},e.nick),c.a.createElement("span",{className:"date"},e.date),c.a.createElement("div",{className:"header-arrow"})),c.a.createElement("span",{className:"parag"},e.content)))})),p=Object(u.b)((function(e){return e}),(function(e){return{changeCount:function(t,a,n,c,s,o){e({type:"CHANGE_COUNT",likes:t,messagesActive:a,sharesCount:n,sharesActive:c,likesCount:s,likesActive:o})}}}))((function(e){var t=e.messagesCount,a=e.messagesActive,n=e.sharesCount,s=e.sharesActive,o=e.likesCount,r=e.likesActive;return c.a.createElement("div",{className:"bottom-container"},c.a.createElement("div",{className:"top-wrap"},c.a.createElement("img",{className:"main-img",src:e.photo,alt:"girl"})),c.a.createElement("div",{className:"bot-wrap"},c.a.createElement("div",{className:"bot-items",onClick:function(){a?e.changeCount(t+1,!a,n,s,o,r):e.changeCount(t-1,!a,n,s,o,r)}},c.a.createElement("img",{className:"logo",src:e.mes}),c.a.createElement("span",null,e.messagesCount)),c.a.createElement("div",{className:"bot-items",onClick:function(){s?e.changeCount(t,a,n+1,!s,o,r):e.changeCount(t,a,n-1,!s,o,r)}},c.a.createElement("img",{className:"logo",src:e.share}),c.a.createElement("span",null,e.sharesCount)),c.a.createElement("div",{className:"bot-items",onClick:function(){r?e.changeCount(t,a,n,s,o+1,!r):e.changeCount(t,a,n,s,o-1,!r)}},c.a.createElement("img",{className:"logo",src:e.heart}),c.a.createElement("span",null,e.likesCount)),c.a.createElement("div",{className:"bot-items"},c.a.createElement("img",{className:"logo",src:e.post}))))})),v=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={info:[{name:"Anakin Skywalker",photo:"",nickname:"dart_vader",content:"WTF? Who is RAY? Why she is Skywalker? Luke...?",date:"\u202226 February"}]},e}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"cont"},c.a.createElement(h,{name:this.state.info[0].name,nick:this.state.info[0].nickname,date:this.state.info[0].date,parag:this.state.info[0].content}),c.a.createElement(p,null))}}]),a}(n.Component),g=a(4),E=a(2),d=a(13),b=a.n(d),k=a(14),f=a.n(k),C=a(15),N=a.n(C),A=a(16),y=a.n(A),O=a(17),w=a.n(O),j={name:"Anakin Skywalker",photo:"".concat(b.a),nickname:"dart_vader",content:"WTF? Who is RAY? Why she is Skywalker? Luke...?",date:"\u202226 February",mes:"".concat(f.a),share:"".concat(N.a),heart:"".concat(y.a),post:"".concat(w.a),messagesCount:545,messagesActive:!0,sharesCount:141,sharesActive:!0,likesCount:414,likesActive:!0},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_CONTENT":return Object(E.a)(Object(E.a)({},e),{},{content:t.content,name:t.author,photo:t.photo});case"CHANGE_COUNT":return Object(E.a)(Object(E.a)({},e),{},{messagesCount:t.likes,messagesActive:t.messagesActive,sharesCount:t.sharesCount,sharesActive:t.sharesActive,likesCount:t.likesCount,likesActive:t.likesActive});default:return e}},T=Object(g.b)(S),x=a(5),W=(a(33),{change:function(e,t,a){return{type:"CHANGE_CONTENT",content:e,author:t,photo:a}}}),_=Object(u.b)((function(e){return e}),W)((function(e){var t=Object(n.useState)(e.content),a=Object(x.a)(t,2),s=a[0],o=a[1],r=Object(n.useState)(e.name),i=Object(x.a)(r,2),l=i[0],m=i[1],u=Object(n.useState)(e.photo),h=Object(x.a)(u,2),p=h[0],v=h[1];return c.a.createElement("div",{className:"inputs-cont"},c.a.createElement("label",{className:"input-cont"},"Post content: ",c.a.createElement("input",{type:"text",className:"inpt",onChange:function(e){o(e.target.value)}})),c.a.createElement("label",{className:"input-cont"},"Post image: ",c.a.createElement("input",{type:"text",className:"inpt",onChange:function(e){v(e.target.value)}})),c.a.createElement("select",{onChange:function(e){m(e.target.value)},className:"name-input"},c.a.createElement("option",{selected:!0,disabled:!0},"Choose the author"),c.a.createElement("option",null,"Anakin Skywalker"),c.a.createElement("option",null,"Tonny Montana"),c.a.createElement("option",null,"James Bond"),c.a.createElement("option",null,"Tom Smith")),c.a.createElement("button",{onClick:function(){e.change(s,l,p)},className:"save-btn"},"Save"))}));var F=function(){return c.a.createElement(u.a,{store:T},c.a.createElement(v,null),c.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.bbaaec4e.chunk.js.map