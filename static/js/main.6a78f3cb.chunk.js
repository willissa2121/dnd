(this.webpackJsonpdnd=this.webpackJsonpdnd||[]).push([[0],{19:function(e,t,a){e.exports=a(46)},24:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),l=a.n(o),c=(a(24),a(2)),s=a.n(c),i=a(13),u=a(14),m=a(15),d=a(17),h=a(18),p=[4,6,8,10,20];function v(e){return r.a.createElement("div",null,p.map((function(t){return r.a.createElement("button",{className:"btn btn-outline-success",onClick:function(){e.random(t,e.user)},value:t},t)})))}a(26);function f(e){return r.a.createElement("div",{id:"parent-user-group"},r.a.createElement("p",null,e.user),r.a.createElement(v,{className:"user-group",user:e.user,random:e.random}))}a(27),a(28);function E(){return r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",{className:"display-4"},"DNDizzle shit tier dice roller"),r.a.createElement("p",{className:"lead"},"Ben Shapiro"),r.a.createElement("p",{className:"lead"},r.a.createElement("a",{target:"_blank",className:"btn btn-primary btn-lg",href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",role:"button"},"Learn more"))))}var g=a(16),b=a.n(g),y=["Leeshin Liskyn","Rone Dahl","IWILLNUT","HercuLATS"],w=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).getRandom=Object(i.a)(s.a.mark((function e(){var t,a,r,o=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=o.length>0&&void 0!==o[0]?o[0]:0,a=o.length>1&&void 0!==o[1]?o[1]:"seeding",r=Math.floor(Math.random()*t)+1,{roller:a,randomVal:r},b.a.post("https://pure-mountain-12737.herokuapp.com/sendData",{val:t,roller:a}).then((function(e){for(var t=[],a=[],r=e.data.length-1;r>=0;r--)t.push(e.data[r].roller),a.push(e.data[r].val);console.log(a,t),n.setState((function(e){return{valArray:a,rollerArray:t}}))}));case 5:case"end":return e.stop()}}),e)}))),n.state={valArray:[],rollerArray:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getRandom()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{id:"contains-users"},y.map((function(t){return r.a.createElement(f,{random:e.getRandom,user:t})}))),r.a.createElement("div",null,this.state.rollerArray.map((function(t,a){return r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("p",{className:"col-md-12",id:"roll-history"},r.a.createElement("p",{id:"rollVal"},t,": "),r.a.createElement("p",{id:"rollRoller"}," ",e.state.valArray[a])))})))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("link",{href:"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",crossorigin:"anonymous"}),r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.6a78f3cb.chunk.js.map