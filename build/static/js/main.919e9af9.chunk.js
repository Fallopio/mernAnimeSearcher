(this["webpackJsonpanime-searcher"]=this["webpackJsonpanime-searcher"]||[]).push([[0],{29:function(e,t,n){e.exports=n(56)},34:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),c=n.n(o);n(34),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(12),s=n(3),l=n.n(s),u=n(8),m="https://kitsu.io/api/edge/anime?",d="&filter[text]=",p="&filter[id]=",f="&sort=ratingRank",g="&sort=popularityRank",h="&filter[status]=current&sort=popularityRank",E=12,v="&page[offset]=",b="https://kitsu.io/api/edge/categories?sort=-totalMediaCount&page[limit]=60&page[offset]=0",y="&fields[anime]=id,posterImage,titles,canonicalTitle,averageRating,popularityRank,ageRating,episodeCount,status,synopsis",_="filter[categories]=",k=",youtubeVideoId",w="https://simple-anime-searcher.herokuapp.com/",N="&page[limit]="+E+y,O={method:"GET",headers:{Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json"}},T=function(e,t){var n;return function(){var a=this,r=arguments;clearTimeout(n),n=setTimeout((function(){return e.apply(a,r)}),t)}},S=function(e,t){fetch(w+"saveFavs",{method:"POST",mode:"cors",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({favs:t})})},x=function(e){var t=m+e+N;return function(){var e=Object(u.a)(l.a.mark((function e(n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"GET_ANIME",payload:{data:[],url:"",pending:!0}}),e.prev=1,e.next=4,fetch(t,O);case 4:return a=e.sent,e.next=7,a.json();case 7:r=e.sent,n({type:"GET_ANIME",payload:{data:r.data,url:t,pending:!1,offset:E}}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()},j=function(e,t,n){var a=n;return n.find((function(t){return t.id===e.id}))?(S(t,a.filter((function(t){return t.id!==e.id}))),{type:"TOGGLE_FAVORITE",payload:a.filter((function(t){return t.id!==e.id}))}):(a.push(e),S(t,a),{type:"TOGGLE_FAVORITE",payload:a})},C=function(e){return function(){var t=Object(u.a)(l.a.mark((function t(n){var a,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"GET_TITLE",payload:{id:e,pending:!0,data:{}}}),t.prev=1,t.next=4,fetch(m+p+e+y+k,O);case 4:return a=t.sent,t.next=7,a.json();case 7:r=t.sent,n({type:"GET_TITLE",payload:{id:e,pending:!1,data:r.data[0]}}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(new Error(t.t0));case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()},A={url:"",loadedData:[],pending:!0,pendingMore:!1,offset:0},R=function(e){return{type:"GET_TOKEN",payload:e}},G=function(e){return function(){var t=Object(u.a)(l.a.mark((function t(n){var a,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(w+"loginByToken",{method:"GET",mode:"cors",headers:{Accept:"application/json",Authorization:"Bearer ".concat(e)}});case 3:return a=t.sent,t.next=6,a.json();case 6:r=t.sent,n({type:"GET_USER_NAME",payload:r.userName}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(new Error(t.t0));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},F=function(e){return function(){var t=Object(u.a)(l.a.mark((function t(n){var a,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(w+"getComments/"+e,{method:"GET",headers:{Accept:"application/json"}});case 3:return a=t.sent,t.next=6,a.json();case 6:r=t.sent,n({type:"GET_COMMENTS",payload:r.comments}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(new Error(t.t0));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},B=function(e){return{type:"GET_ERROR",payload:e}},L=[],M=[],I={title:{},pending:!0,id:""},P=[],D=Object(i.c)({results:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ANIME":return{url:t.payload.url,loadedData:t.payload.data,pending:t.payload.pending,offset:t.payload.offset};case"GET_MORE":return{url:t.payload.url,loadedData:e.loadedData.concat(t.payload.data),pendingMore:t.payload.pendingMore,offset:t.payload.offset};default:return e}},favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_FAVORITE":case"GET_FAVORITES":return t.payload;default:return e}},categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CATEGORIES":return t.payload;default:return e}},title:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TITLE":return{id:t.payload.id,pending:t.payload.pending,title:t.payload.data};default:return e}},token:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TOKEN":return t.payload;default:return e}},userName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER_NAME":return t.payload;default:return e}},comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_COMMENTS":return t.payload;default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERROR":return t.payload;default:return e}}}),W=n(2),U=n(27),J=n.n(U),V=n(28),q=n(6),z=n(5),H=n(4);n(40);var K=Object(W.b)(null,(function(e){return{getPop:function(){return e(x(g))},getTop:function(){return e(x(f))},getAir:function(){return e(x(h))},getByName:function(t){return e(x(t))}}}))((function(e){var t=Object(a.useRef)(null);return r.a.createElement("div",{className:"ButtonBar",id:"btnBar"},r.a.createElement("input",{type:"text",className:"ButtonBar__input",ref:t,placeholder:"anime search",onChange:T((function(){t.current.value.length>0?e.getByName(d+t.current.value):e.getPop()}),1e3)}),r.a.createElement("button",{className:"ButtonBar__button",style:{cursor:"pointer"},onClick:e.getPop},"Most Popular"),r.a.createElement("button",{className:"ButtonBar__button",style:{cursor:"pointer"},onClick:e.getTop},"Top Rated"),r.a.createElement("button",{className:"ButtonBar__button",style:{cursor:"pointer"},onClick:e.getAir},"Top Airing"))})),Y=n(13);n(41);function $(e){return r.a.createElement("div",{className:"AnimeCard"},e.children)}n(42);var Q=Object(W.b)((function(e){return{results:Object(Y.a)(e.results.loadedData),url:e.results.url,favs:Object(Y.a)(e.favorites),pending:e.results.pending,more:e.results.pendingMore,offset:e.results.offset,token:e.token}}),(function(e){return{getMoreRes:function(t,n){return e(function(e,t){return function(){var n=Object(u.a)(l.a.mark((function n(a){var r,o;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:"GET_MORE",payload:{data:[],url:"",pendingMore:!0}}),n.prev=1,n.next=4,fetch(e+v+t,O);case 4:return r=n.sent,n.next=7,r.json();case 7:o=n.sent,a({type:"GET_MORE",payload:{data:o.data,url:e,pendingMore:!1,offset:t+E}}),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),console.error(n.t0);case 14:case 15:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))},addFav:function(t,n,a){return e(j(t,n,a))},getTit:function(t){return e(C(t))},getComments:function(t){return e(F(t))},getError:function(t){return e(B(t))}}}))((function(e){return r.a.createElement("div",{style:{backgroundColor:"#001f3f"}},r.a.createElement("div",{className:"AnimeList"},e.pending?r.a.createElement("div",{className:"loader",style:{margin:"auto",marginTop:"150px"}}):e.results.map((function(t){return r.a.createElement($,{key:t.id,id:t.id},r.a.createElement("h3",{className:"AnimeCard__h3"},void 0===e.favs.find((function(e){return e.id===t.id}))?r.a.createElement("i",{className:"far fa-star",style:{color:"yellow",cursor:"pointer",position:"absolute",top:"5px",right:"5px"},onClick:function(){0===e.token.length?e.getError("Login to manage favourites"):e.addFav(t,e.token,e.favs)}}):r.a.createElement("i",{className:"fas fa-star",style:{color:"yellow",cursor:"pointer",position:"absolute",top:"5px",right:"5px"},onClick:function(){e.addFav(t,e.token,e.favs)}}),r.a.createElement(z.b,{to:"/SimpleAnimeSearch/"+t.id,style:{textDecoration:"none",color:"white"},onClick:function(){e.getTit(t.id),e.getComments(t.id)}},t.attributes.canonicalTitle)),r.a.createElement(z.b,{to:"/SimpleAnimeSearch/"+t.id},r.a.createElement("img",{className:"img",onClick:function(){e.getTit(t.id),e.getComments(t.id)},src:t.attributes.posterImage.medium,alt:""})))}))),e.more?r.a.createElement("div",{className:"loader",style:{margin:"auto"}}):r.a.createElement("button",{className:"AnimeList__btn",style:{marginTop:"150px"},onClick:function(){e.getMoreRes(e.url,e.offset)}},"Show More"))}));n(44);var X=Object(W.b)((function(e){return{favorites:Object(Y.a)(e.favorites),token:e.token}}),(function(e){return{addFav:function(t,n,a){return e(j(t,n,a))},getTit:function(t){return e(C(t))},getComments:function(t){return e(F(t))}}}))((function(e){return r.a.createElement("div",{className:"Favs"},e.token.length>0?r.a.createElement("table",{style:{borderCollapse:"collapse",border:"solid 1px white"}},r.a.createElement("tbody",null,r.a.createElement("tr",{style:{border:"solid 1px white"}},r.a.createElement("td",{style:{border:"solid 1px white"}},"Remove"),r.a.createElement("td",{style:{border:"solid 1px white"}},"Title"),r.a.createElement("td",{style:{border:"solid 1px white"}},"Rating")),e.favorites.map((function(t){return r.a.createElement("tr",{key:t.id,style:{border:"solid 1px white"}},r.a.createElement("td",{style:{border:"solid 1px white",width:"5vw"}},r.a.createElement("i",{className:"fas fa-star",style:{color:"yellow",cursor:"pointer"},onClick:function(){e.addFav(t,e.token,e.favorites)}})),r.a.createElement("td",{style:{border:"solid 1px white",width:"50vw"}},r.a.createElement(z.b,{className:"Favs__card__link",to:"/SimpleAnimeSearch/"+t.id},r.a.createElement("h3",{className:"cardH",onClick:function(){e.getTit(t.id),e.getComments(t.id)}},t.attributes.canonicalTitle))),r.a.createElement("td",{style:{border:"solid 1px white",width:"5vw"}},t.attributes.averageRating))})))):r.a.createElement("h3",{style:{color:"red"}},"You must login to use favorites section"))}));n(45),n(46);var Z=function(){return r.a.createElement("div",{className:"dropDown"},r.a.createElement("button",{className:"dropDown__btn",onClick:function(){document.cookie="token=; Expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/SimpleAnimeSearch;",window.location.reload()}},"Logout"))};var ee=Object(W.b)((function(e){return{name:e.userName}}),(function(e){return{getPop:function(){return e(x(g))},getLcStr:function(){return e({type:"GET_LOCAL_STR",payload:{favs:JSON.parse(localStorage.getItem("favs"))}})},getCat:function(){return e(function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(b,O);case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,t({type:"GET_CATEGORIES",payload:a.data}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=Object(a.useState)(!1),n=Object(q.a)(t,2),o=n[0],c=n[1];Object(a.useEffect)((function(){e.getPop(),e.getCat()}),[e]);var i=Object(a.useRef)(null);return r.a.createElement("div",{className:"header"},r.a.createElement("h3",{className:"header__h3"},"Simple Anime Search",r.a.createElement("i",{className:"fas fa-bars",id:"bars",onClick:function(){"header__nav"===i.current.className?i.current.className="header__nav--responsive":"header__nav--responsive"===i.current.className&&(i.current.className="header__nav")}}),0===e.name.length?r.a.createElement(z.b,{to:"/SimpleAnimeSearch/login",className:"header__Link"},r.a.createElement("span",{className:"heder__Link__txt"},"Login")):r.a.createElement("button",{className:"header__Link",onClick:function(){c(!o)}},r.a.createElement("span",{className:"heder__Link__txt"},e.name),r.a.createElement("i",{className:"fas fa-angle-down",style:{margin:"5px"}}),o?r.a.createElement(Z,null):void 0)),r.a.createElement("nav",{className:"header__nav",id:"nav",ref:i},r.a.createElement(z.b,{className:"header__nav__Link",to:"/SimpleAnimeSearch"},"Discover Anime"),r.a.createElement(z.b,{className:"header__nav__Link",to:"/SimpleAnimeSearch/categories"},"Browse popular categories"),r.a.createElement(z.b,{className:"header__nav__Link",to:"/SimpleAnimeSearch/favorites"},"Favorites")))}));n(47);var te=Object(W.b)((function(e){return{categ:e.categories}}),(function(e){return{search:function(t){return e(x(t))}}}))((function(e){return r.a.createElement("div",{className:"Cats"},e.categ.map((function(t){return r.a.createElement(z.b,{className:"Cats__link",key:t.id,to:"/SimpleAnimeSearch",title:t.attributes.description,onClick:function(){return e.search(_+t.attributes.title+g)}},t.attributes.title)})))}));n(48),n(49);var ne=function(e){return r.a.createElement("div",{className:"comment"},r.a.createElement("div",{className:"comment__from"},e.from),r.a.createElement("div",{className:"comment__body"},e.body),r.a.createElement("hr",{style:{color:"white",width:"100%"}}))};n(50),n(51);var ae=Object(W.b)((function(e){return{token:e.token,id:e.title.id,name:e.userName}}),(function(e){return{getComments:function(t){return e(F(t))},getError:function(t){return e(B(t))}}}))((function(e){var t=Object(a.useState)(""),n=Object(q.a)(t,2),o=n[0],c=n[1];return r.a.createElement("div",null,r.a.createElement("form",{className:"PostForm",onSubmit:function(t){if(t.preventDefault(),e.token.length>0&&e.name.length>0)try{fetch(w+"comment",{method:"POST",mode:"cors",headers:{Authorization:"Bearer ".concat(e.token),"Content-Type":"application/json"},body:JSON.stringify({id:e.id,comment:o,from:e.name})}).then((function(){e.getComments(e.id),c("")}))}catch(n){console.log(new Error(n))}else e.getError("Login to post comments")}},r.a.createElement("textarea",{className:"PostForm__txt",name:"",id:"",cols:"80",rows:"5",value:o,placeholder:"write a comment...",onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{className:"PostForm__btn",type:"submit"},"Post a comment")))}));var re=Object(W.b)((function(e){return{comments:e.comments}}),null)((function(e){var t=e.comments,n=Object(a.useState)(5),o=Object(q.a)(n,2),c=o[0],i=o[1],s=Object(a.useState)([]),l=Object(q.a)(s,2),u=l[0],m=l[1];return Object(a.useEffect)((function(){m(t.reverse())}),[t]),r.a.createElement("div",{className:"commenstSec"},e.comments.length>0?u.slice(0,c).map((function(e){return r.a.createElement(ne,{key:e._id,from:e.from,body:e.comment})})):void 0,u.length<=5||c>=u.length?void 0:r.a.createElement("button",{className:"commentsSec__btn",onClick:function(){c<e.comments.length&&i(c+5)}},"Show more comments"),r.a.createElement(ae,null))}));var oe=Object(W.b)((function(e){return{title:e.title.title,favorites:Object(Y.a)(e.favorites),pending:e.title.pending,titleId:e.title.id,comments:e.comments,token:e.token}}),(function(e){return{addFav:function(t,n,a){return e(j(t,n,a))},getTit:function(t){return e(C(t))},getComments:function(t){return e(F(t))},getError:function(t){return e(B(t))}}}))((function(e){var t=Object(a.useState)(!1),n=Object(q.a)(t,2),o=n[0],c=n[1];return Object(a.useEffect)((function(){if(!e.titleId){var t=window.location.pathname.split("/").pop();e.getTit(t),e.getComments(t)}}),[e]),r.a.createElement("div",{className:"TitleBox"},e.pending?r.a.createElement("div",{className:"loader",style:{margin:"auto",marginTop:"150px"}}):r.a.createElement("div",{className:"TitleBox__info"},r.a.createElement("img",{className:"TitleBox__info__img",src:e.title.attributes.posterImage.medium,alt:""}),r.a.createElement("div",{className:"TitleBox__info__text"},r.a.createElement("h3",{className:"cardH"},void 0===e.favorites.find((function(t){return t.id===e.title.id}))?r.a.createElement("i",{className:"far fa-star",style:{color:"yellow",cursor:"pointer"},onClick:function(){0===e.token.length?e.getError("Login to manage favorites"):e.addFav(e.title,e.token,e.favorites)}}):r.a.createElement("i",{className:"fas fa-star",style:{color:"yellow",cursor:"pointer"},onClick:function(){e.addFav(e.title,e.token,e.favorites)}}),e.title.attributes.canonicalTitle),r.a.createElement("p",null,"Avrage Rating: ",e.title.attributes.averageRating),r.a.createElement("p",null,"Popularity rank: ",e.title.attributes.popularityRank),r.a.createElement("p",null,"Age rating: ",e.title.attributes.ageRating),r.a.createElement("p",null,"Number of episodes: ",e.title.attributes.episodeCount),r.a.createElement("p",null,"Status: ",e.title.attributes.status),r.a.createElement("p",{className:"descHide",id:e.title.id+"desc"},"Synopsis:"),r.a.createElement("p",null,e.title.attributes.synopsis),r.a.createElement("button",{className:"TitleBox__vidBtn",onClick:function(){c(!0)}},"Watch trailer")),o?r.a.createElement("div",{id:"watchBox",className:"TitleBox__vidContainer--watch",onClick:function(){c(!1)}},r.a.createElement("iframe",{title:"trailer",src:"https://www.youtube.com/embed/"+e.title.attributes.youtubeVideoId}),r.a.createElement("i",{className:"fas fa-times"})):r.a.createElement("div",null)),r.a.createElement(re,null))}));n(52),n(53);var ce=Object(W.b)(null,(function(e){return{getToken:function(t){return e(R(t))},getError:function(t){return e(B(t))},getUserName:function(t){return e(G(t))}}}))((function(e){var t=Object(a.useState)(""),n=Object(q.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(""),s=Object(q.a)(i,2),m=s[0],d=s[1],p=Object(a.useState)(""),f=Object(q.a)(p,2),g=f[0],h=f[1],E=Object(H.f)(),v=function(){var t=Object(u.a)(l.a.mark((function t(n){var a,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!(o.length>0&&m.length>0&&m===g)){t.next=17;break}return t.prev=2,t.next=5,fetch(w+"createUser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:o,pw:g})});case 5:return a=t.sent,t.next=8,a.json();case 8:(r=t.sent).token?(e.getToken(r.token),e.getUserName(r.token),document.cookie="token=".concat(r.token,"; path=/SimpleAnimeSearch"),E.push("/SimpleAnimeSearch")):e.getError(r.message),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),console.log(new Error(t.t0));case 15:t.next=18;break;case 17:m!==g&&e.getError("password entries should match");case 18:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"RegWindow"},r.a.createElement("form",{onSubmit:v,className:"RegForm"},r.a.createElement("label",{htmlFor:"nickname"},"Enter your nickname"),r.a.createElement("input",{className:"RegWindow__input",type:"text",placeholder:"nickname...",id:"nickname",onChange:function(e){return c(e.target.value)},required:!0}),r.a.createElement("label",{htmlFor:"password"},"Enter your password"),r.a.createElement("input",{className:"RegWindow__input",type:"password",placeholder:"password...",id:"password",onChange:function(e){return d(e.target.value)},required:!0}),r.a.createElement("label",{htmlFor:"password2"},"Repeat your password"),r.a.createElement("input",{className:"RegWindow__input",type:"password",placeholder:"repeat password...",id:"password2",onChange:function(e){return h(e.target.value)},required:!0}),r.a.createElement("button",{className:"RegWindow__button",type:"submit"},"Submit"),r.a.createElement(z.b,{to:"/SimpleAnimeSearch/login",className:"RegWindow__button"},"Back")))}));n(54);var ie=Object(W.b)(null,(function(e){return{getToken:function(t){return e(R(t))},getUserName:function(t){return e(G(t))},getError:function(t){return e(B(t))}}}))((function(e){var t=Object(a.useState)(""),n=Object(q.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(""),s=Object(q.a)(i,2),m=s[0],d=s[1],p=Object(H.f)(),f=function(){var t=Object(u.a)(l.a.mark((function t(n){var a,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,fetch(w+"loginByCred",{method:"POST",headers:{"Content-type":"application/json",Accept:"application/json"},body:JSON.stringify({user:o,pw:m})});case 4:return a=t.sent,t.next=7,a.json();case 7:(r=t.sent).token?(e.getToken(r.token),e.getUserName(r.token),document.cookie="token=".concat(r.token,"; path=/SimpleAnimeSearch"),p.push("/SimpleAnimeSearch")):e.getError(r.message),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(new Error(t.t0));case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"LoginWindow"},r.a.createElement("form",{onSubmit:f,className:"LogForm"},r.a.createElement("label",{htmlFor:"loginName"},"Enter your nickname"),r.a.createElement("input",{className:"LogForm__input",type:"text",id:"loginName",placeholder:"nickname...",onChange:function(e){return c(e.target.value)},required:!0}),r.a.createElement("label",{htmlFor:"loginPw"},"Enter your password"),r.a.createElement("input",{className:"LogForm__input",type:"password",id:"loginPw",placeholder:"password...",onChange:function(e){return d(e.target.value)},required:!0}),r.a.createElement("button",{type:"submit",className:"LogForm__btn"},"Login"),r.a.createElement(z.b,{to:"/SimpleAnimeSearch/registration",className:"LogForm__btn"}," Create account")))}));n(55);var se=Object(W.b)((function(e){return{error:e.error}}),(function(e){return{setError:function(t){return e(B(t))}}}))((function(e){return r.a.createElement("div",{className:"frame",onClick:function(){return e.setError("")}},r.a.createElement("div",{className:"messageModal"},r.a.createElement("span",{className:"messageModal__body"},"ERROR: ",e.error),r.a.createElement("button",{className:"messageModal__btn",onClick:function(){return e.setError("")}},"Ok")))}));var le=Object(W.b)((function(e){return{titleId:e.title.id,name:e.userName,favs:e.favorites,token:e.token,error:e.error}}),(function(e){return{getToken:function(t){return e(R(t))},getUserName:function(t){return e(G(t))},getFavs:function(t){return e(function(e){return function(){var t=Object(u.a)(l.a.mark((function t(n){var a,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(w+"getMyFavs",{method:"GET",headers:{Authorization:"Bearer ".concat(e)}});case 3:return a=t.sent,t.next=6,a.json();case 6:r=t.sent,n({type:"GET_FAVORITES",payload:r.favs}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(new Error(t.t0));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=e.getToken,n=e.getUserName,o=e.getFavs,c=e.token,i=e.error,s=Object(a.useState)(!1),l=Object(q.a)(s,2),u=l[0],m=l[1];return Object(a.useEffect)((function(){var e=document.cookie.split("=");"token"===e[0]&&e[1].length>0&&(t(e[1]),n(e[1]))}),[t,n]),Object(a.useEffect)((function(){c.length>0&&o(c)}),[c,o]),Object(a.useEffect)((function(){i.length>0?m(!0):m(!1)}),[i]),r.a.createElement("div",{className:"main"},r.a.createElement(z.a,null,r.a.createElement(ee,null),u?r.a.createElement(se,null):void 0,r.a.createElement(H.c,null,r.a.createElement(H.a,{exact:!0,path:"/SimpleAnimeSearch"},r.a.createElement(K,null),r.a.createElement(Q,null)),r.a.createElement(H.a,{exact:!0,path:"/SimpleAnimeSearch/favorites"},r.a.createElement(X,null)),r.a.createElement(H.a,{exact:!0,path:"/SimpleAnimeSearch/categories"},r.a.createElement(te,null)),r.a.createElement(H.a,{exact:!0,path:"/SimpleAnimeSearch/registration"},r.a.createElement(ce,null)),r.a.createElement(H.a,{exact:!0,path:"/SimpleAnimeSearch/login"},r.a.createElement(ie,null)),r.a.createElement(H.a,{path:"/SimpleAnimeSearch/"+e.titleId},r.a.createElement(oe,null)))))})),ue=Object(i.d)(D,Object(i.a)(J.a,V.a));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W.a,{store:ue},r.a.createElement(le,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.919e9af9.chunk.js.map