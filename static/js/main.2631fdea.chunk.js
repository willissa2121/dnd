(this.webpackJsonpdnd=this.webpackJsonpdnd||[]).push([[0],{35:function(e,t,a){e.exports=a(76)},40:function(e,t,a){e.exports=a.p+"static/media/diceSound.afd53a36.mp3"},41:function(e,t,a){},42:function(e,t,a){var n={"./cat.png":43,"./cat_old.png":44,"./dragon.png":45,"./midget.png":46,"./necromancer.png":47,"./necromancer_old.png":48};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=42},43:function(e,t,a){e.exports=a.p+"static/media/cat.46703135.png"},44:function(e,t,a){e.exports=a.p+"static/media/cat_old.46703135.png"},45:function(e,t,a){e.exports=a.p+"static/media/dragon.19c2bc27.png"},46:function(e,t,a){e.exports=a.p+"static/media/midget.e93a16f5.png"},47:function(e,t,a){e.exports=a.p+"static/media/necromancer.ae6ce689.png"},48:function(e,t,a){e.exports=a.p+"static/media/necromancer_old.ae6ce689.png"},49:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(25),c=a.n(o),l=[4,6,8,10,20],i=["danger","warning","success","primary","info"];function s(e){var t=new Audio(a(40));return r.a.createElement("div",null,l.map((function(a,n){return r.a.createElement("button",{className:"btn btn-".concat(i[n]," mr-1 ml-1"),onClick:function(){t.play().then((function(e){console.log("rolled")})),e.random(a,e.user)},value:a},a)})))}a(41);function u(e){var t=[];return e.data.map((function(a){if(e.user===a.roller){var n=a.roller,r=a.val,o=a.createdAt;t.push({roller:n,val:r,createdAt:o})}})),r.a.createElement("div",null,r.a.createElement("p",null,e.user),r.a.createElement(s,{className:"user-group",user:e.user,random:e.random}),r.a.createElement("img",{alt:"user-pic",id:"parent-user-group",src:a(42)("./".concat(e.image,".png"))}),t.map((function(e){return r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("p",{className:"col-md-12",id:"roll-history"},r.a.createElement("p",{id:"rollVal"},e.roller,": "),r.a.createElement("p",{id:"rollRoller"}," ",e.val)))})))}a(49);var d=a(12),m=a.n(d),p=a(26),f=a(27),v=a(28),h=a(33),g=a(34);a(51),a(52);function E(e){var t=e.update?"updateText":"";return r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h2",{className:"lead"},"Most Recent Roll"),r.a.createElement("p",{id:t,className:"display-4"},e.recentRoll.roller," rolled a ",e.recentRoll.val)))}var y=a(9),N=a.n(y),b=a(29);a.n(b).a.config();var A={local:"http://localhost:3001",prod:"https://dnd-server-api.herokuapp.com"},R=[{userName:"Leeshin Liskyn",picture:"dragon"},{userName:"Rone Dahl",picture:"necromancer"},{userName:"IWILLNUT",picture:"midget"},{userName:"HercuLATS",picture:"cat"}],k=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).handleData=function(e,t){for(var a=[],r=e.data.length-1;r>=0;r--){var o=e.data[r],c={roller:o.roller,val:o.val,createdAt:o.createdAt};a.push(c)}var l=a[0],i={roller:l.roller,val:l.val,createdAt:l.createdAt};i.createdAt===n.state.recentRoll.createdAt?n.setState({updateRoller:!1}):n.setState({updateRoller:!0}),t?n.setState((function(e){return{rollDataArray:a,recentRoll:i}})):n.setState((function(e){return{rollDataArray:a}}))},n.refreshFeed=function(){N.a.post("".concat(A.prod,"/refreshData")).then((function(e){n.handleData(e,!0)}))},n.getRandom=function(){var e=Object(p.a)(m.a.mark((function e(t,a){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=Math.floor(Math.random()*t)+1,N.a.post("".concat(A.prod,"/sendData"),{val:r,roller:a}).then((function(e){n.handleData(e,!1)}));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),n.state={rollDataArray:[],valArray:[],rollerArray:[],recentRoll:{},updateRoller:!0},n}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.refreshFeed()}),250)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(E,{update:this.state.updateRoller,recentRoll:this.state.recentRoll}),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row",id:"contains-users"},R.map((function(t){return r.a.createElement("div",{className:"col-md-3"},r.a.createElement(u,{data:e.state.rollDataArray,random:e.getRandom,image:t.picture,user:t.userName}))})))))}}]),a}(r.a.Component),x=["demon","devil","boss"];function D(){return r.a.createElement("div",null,x.map((function(e){return r.a.createElement("button",{onClick:function(){!function(e){N.a.post("".concat(A.prod,"/sendEnemy"),{enemy:e}).then((function(e){console.log(e.data)}))}(e)},className:"btn btn-danger"},"spawn ",e)})))}var O=a(30),w=a(6);function j(){return r.a.createElement(O.a,null,r.a.createElement("div",null,r.a.createElement(w.a,{exact:!0,path:"/",component:k}),r.a.createElement(w.a,{exact:!0,path:"/admin",component:D})))}c.a.render(r.a.createElement("div",null,r.a.createElement("link",{href:"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",crossorigin:"anonymous"}),r.a.createElement(j,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.2631fdea.chunk.js.map