(this.webpackJsonpdnd=this.webpackJsonpdnd||[]).push([[0],{36:function(e,a,t){e.exports=t(77)},41:function(e,a,t){e.exports=t.p+"static/media/diceSound.afd53a36.mp3"},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){var n={"./cat.png":45,"./dragon.png":46,"./dragon_old.png":47,"./midget.png":48,"./necromancer.png":49};function r(e){var a=l(e);return t(a)}function l(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=44},45:function(e,a,t){e.exports=t.p+"static/media/cat.c59c7773.png"},46:function(e,a,t){e.exports=t.p+"static/media/dragon.75e1e25b.png"},47:function(e,a,t){e.exports=t.p+"static/media/dragon_old.19c2bc27.png"},48:function(e,a,t){e.exports=t.p+"static/media/midget.e93a16f5.png"},49:function(e,a,t){e.exports=t.p+"static/media/necromancer.ae6ce689.png"},50:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},77:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(25),o=t.n(l),c=[4,6,8,10,20],i=["danger","warning","success","primary","info"];function s(e){var a=new Audio(t(41));return r.a.createElement("div",null,c.map((function(t,n){return r.a.createElement("button",{className:"btn btn-".concat(i[n]," mr-1 ml-1"),onClick:function(){a.play().then((function(e){console.log("rolled")})),e.random(t,e.user)},value:t},t)})))}t(42);function u(e){return r.a.createElement("div",null,r.a.createElement("form",{action:"/action_page.php",method:"get"},r.a.createElement("label",{for:"strength"},r.a.createElement("input",{type:"radio",name:"radio",value:"".concat(e.user,":str"),onChange:e.handleChange})," ","Str"),r.a.createElement("label",{for:"dexterity"},r.a.createElement("input",{type:"radio",name:"radio",value:"".concat(e.user,":dex"),onChange:e.handleChange})," ","Dex"),r.a.createElement("label",{for:"constitution"},r.a.createElement("input",{type:"radio",name:"radio",value:"".concat(e.user,":con"),onChange:e.handleChange})," ","Con"),r.a.createElement("label",{for:"intelligence"},r.a.createElement("input",{type:"radio",name:"radio",value:"".concat(e.user,":int"),onChange:e.handleChange})," ","Int"),r.a.createElement("label",{for:"wisdom"},r.a.createElement("input",{type:"radio",name:"radio",value:"".concat(e.user,":wis"),onChange:e.handleChange})," ","Wis"),r.a.createElement("label",{for:"charisma"},r.a.createElement("input",{type:"radio",name:"radio",value:"".concat(e.user,":char"),onChange:e.handleChange}),"Char"),r.a.createElement("label",{for:"none"},r.a.createElement("input",{type:"radio",name:"radio",value:"".concat(e.user,":0"),onChange:e.handleChange}),"None")))}t(43);function d(e){var a=[];e.updatingHealth,e.updatingHealth;return e.data.map((function(t){if(e.user===t.roller){var n=t.roller,r=t.val,l=t.maxRoll,o=t.modifierValue,c=t.modifierClass,i=t.createdAt;null!==o?a.push({roller:n,val:r,maxRoll:l,modifierValue:o,modifierClass:c,createdAt:i}):a.push({roller:n,val:r,maxRoll:l,modifierValue:0,modifierClass:"no mod",createdAt:i})}})),r.a.createElement("div",null,r.a.createElement("p",null,e.user),r.a.createElement(s,{className:"user-group",user:e.user,random:e.random}),r.a.createElement(u,{user:e.user,handleChange:e.handleChange}),r.a.createElement("div",{class:"input-group mb-3"}),r.a.createElement("img",{alt:"user-pic",id:"parent-user-group",src:t(44)("./".concat(e.image,".png"))}),a.map((function(e){return r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("p",{className:"col-md-12",id:"roll-history"},r.a.createElement("p",{id:"rollRoller"}," ",r.a.createElement("span",null,e.val," / ",e.maxRoll," ",e.modifierClass," +"," ",e.modifierValue," =",e.val+e.modifierValue))))})))}t(50);var m=t(33),p=t(12),h=t.n(p),f=t(26),v=t(27),g=t(28),E=t(34),C=t(35);t(52),t(53);function N(e){var a=e.update?"updateText":"";return r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h2",{className:"lead"},"Most Recent Roll"),r.a.createElement("div",{id:"flex"},r.a.createElement("h1",null,"Previous Nat 1 : ",e.previousNat1),r.a.createElement("p",{id:a,className:"display-4"},e.recentRoll.roller," rolled a ",e.recentRoll.val),r.a.createElement("h1",null,"Previous Nat 20 : ",e.previousNat20))))}var b=t(9),y=t.n(b),x=[{userName:"01000111 01100001 01101101 01100101 01110010 00100000 01000110 01110101 01100101 01101100",picture:"dragon",stats:{str:2,dex:1,con:4,wis:1,int:1,char:3}},{userName:"Rone Dahl",picture:"necromancer",stats:{str:0,dex:3,con:2,wis:2,int:4,char:2}},{userName:"IWILLNUT",picture:"midget"},{userName:"HercuLATS",picture:"cat",stats:{str:5,dex:3,con:4,wis:3,int:2,char:2}}],R=function(e){Object(C.a)(t,e);var a=Object(E.a)(t);function t(e){var n;return Object(v.a)(this,t),(n=a.call(this,e)).handleData=function(e,a){for(var t,r,l=[],o=e.data.length-1;o>=0;o--){var c=e.data[o],i=c.roller,s=c.val,u=c.maxRoll,d=c.modifierValue,m={roller:i,val:s,maxRoll:u,modifierClass:c.modifierClass,modifierValue:d,createdAt:c.createdAt};l.push(m)}for(var p=0;p<e.data.length;p++){var h=e.data[p],f=h.roller,v=h.val,g=h.maxRoll;1===v&&20===g?r=f:20===v&&(t=f)}console.log(r,t);var E=l[0],C={roller:E.roller,val:E.val,createdAt:E.createdAt};C.createdAt===n.state.recentRoll.createdAt?n.setState({updateRoller:!1}):n.setState({updateRoller:!0}),a?n.setState((function(e){return{rollDataArray:l,recentRoll:C,previousNat1:r,previousNat20:t}})):n.setState((function(e){return{rollDataArray:l,previousNat1:r,previousNat20:t}}))},n.refreshFeed=function(){y.a.post("https://dnd-server-api.herokuapp.com/refreshData").then((function(e){n.handleData(e,!0)}))},n.getRandom=function(){var e=Object(f.a)(h.a.mark((function e(a,t){var r,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=a,l=Math.floor(Math.random()*a)+1,y.a.post("https://dnd-server-api.herokuapp.com/sendData",{val:l,roller:t,maxRoll:r,modifierValue:n.state.currentModValue,modifierClass:n.state.currentModClass}).then((function(e){n.handleData(e,!1)}));case 3:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var a=e.target.value.split(":"),t=Object(m.a)(a,2),r=t[0],l=t[1];x.map((function(e){if(e.userName===r)if(0===l)n.setState({currentModValue:0,currentModClass:"none"});else{var a=e.stats[l];n.setState({currentModValue:a,currentModClass:l})}})),console.log(n.state.currentModClass,n.state.currentModValue)},n.updateHealth=function(e){console.log(e.target.value),n.state.updatingHealth?n.setState({updatingHealth:!1}):n.setState({updatingHealth:!0})},n.state={rollDataArray:[],valArray:[],rollerArray:[],recentRoll:{},updateRoller:!0,currentModValue:0,currentModClass:"",previousNat20:"",previousNat1:"",updatingHealth:!1},n}return Object(g.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.refreshFeed(),setInterval((function(){e.refreshFeed()}),200)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(N,{previousNat1:this.state.previousNat1,previousNat20:this.state.previousNat20,update:this.state.updateRoller,recentRoll:this.state.recentRoll}),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row",id:"contains-users"},x.map((function(a){return r.a.createElement("div",{className:"col-md-3"},r.a.createElement(d,{handleChange:e.handleChange,data:e.state.rollDataArray,random:e.getRandom,image:a.picture,user:a.userName,updatingHealth:e.state.updatingHealth,updateHealth:e.updateHealth}))})))))}}]),t}(r.a.Component),A=t(29);t.n(A).a.config();var k=["demon","devil","boss"];function w(){return r.a.createElement("div",null,k.map((function(e){return r.a.createElement("button",{onClick:function(){!function(e){y.a.post("https://dnd-server-api.herokuapp.com/sendEnemy",{enemy:e}).then((function(e){console.log(e.data)}))}(e)},className:"btn btn-danger"},"spawn ",e)})))}var M=t(30),V=t(6);function D(){return r.a.createElement(M.a,{basename:"/dnd"},r.a.createElement(V.c,null,r.a.createElement(V.a,{exact:!0,path:"/",component:R}),r.a.createElement(V.a,{path:"/admin",component:w})))}o.a.render(r.a.createElement("div",null,r.a.createElement("link",{href:"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",crossorigin:"anonymous"}),r.a.createElement(D,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.edcf822e.chunk.js.map