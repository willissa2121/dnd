(this.webpackJsonpdnd=this.webpackJsonpdnd||[]).push([[0],{36:function(e,a,t){e.exports=t(79)},41:function(e,a,t){e.exports=t.p+"static/media/diceSound.afd53a36.mp3"},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){var n={"./cat.png":45,"./cat__.png":46,"./dragon.png":47,"./dragon___.png":48,"./midget.png":49,"./necromancer.png":50,"./necromancer___.png":51};function r(e){var a=l(e);return t(a)}function l(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=44},45:function(e,a,t){e.exports=t.p+"static/media/cat.0ab1b491.png"},46:function(e,a,t){e.exports=t.p+"static/media/cat__.c59c7773.png"},47:function(e,a,t){e.exports=t.p+"static/media/dragon.75c86b10.png"},48:function(e,a,t){e.exports=t.p+"static/media/dragon___.36ff729b.png"},49:function(e,a,t){e.exports=t.p+"static/media/midget.e93a16f5.png"},50:function(e,a,t){e.exports=t.p+"static/media/necromancer.1fec9581.png"},51:function(e,a,t){e.exports=t.p+"static/media/necromancer___.ae6ce689.png"},52:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(26),o=t.n(l),c=[4,6,8,10,12,20],s=["danger","warning","success","primary","dark","info"];function u(e){var a=new Audio(t(41));return r.a.createElement("div",null,c.map((function(t,n){return r.a.createElement("button",{className:"btn btn-".concat(s[n]," mr-1 ml-1"),onClick:function(){a.play().then((function(e){})),e.random(t,e.user)},value:t},t)})))}t(42);function i(e){return r.a.createElement("div",{className:"mt-2"},r.a.createElement("form",{action:"/action_page.php",method:"get"},r.a.createElement("label",{for:"strength"},r.a.createElement("input",{type:"radio",name:"radio",value:"".concat(e.user,":prof"),onChange:e.handleChange})," ","Prof"),r.a.createElement("label",{for:"strength"},r.a.createElement("input",{type:"radio",name:"radio",value:"".concat(e.user,":none"),onChange:e.handleChange})," ","None")))}t(43);var m=["STR","DEX","CON","WIS","INT","CHAR"];function d(e){return r.a.createElement("div",null,r.a.createElement("form",{class:"form-inline"},r.a.createElement("select",{onClick:e.handleModChange,class:"custom-select my-1 mr-sm-2",id:"inlineFormCustomSelectPref"},r.a.createElement("option",{value:"".concat(e.user,":none"),selected:!0},"None"),m.map((function(a){return r.a.createElement("option",{value:"".concat(e.user,":").concat(a)},a)})))))}function p(e){return r.a.createElement("div",{class:"input-group mb-3 col-md-6"},r.a.createElement("input",{type:"number",class:"form-control",placeholder:e.playerHealth["".concat(e.user)],"aria-label":"Recipient's username","aria-describedby":"basic-addon2",name:"".concat(e.user),onChange:e.handleHealthChange}),r.a.createElement("div",{class:"input-group-append"},r.a.createElement("button",{"aria-describedby":"basic-addon2",name:"".concat(e.user),onClick:e.submitHealth,value:e.playerHealth["".concat(e.user)],class:"btn btn-outline-success",type:"button"},"Set")))}function h(e){var a=[],n="01000111 01100001 01101101 01100101 01110010 00100000 01000110 01110101 01100101 01101100"==e.user?{fontSize:"6px"}:{};return e.data.map((function(t){if(e.user===t.roller){var n=t.roller,r=t.val,l=t.maxRoll,o=t.profValue,c=t.modValue,s=t.modClass,u=t.createdAt;null!==o?a.push({roller:n,val:r,maxRoll:l,profValue:o,createdAt:u,modValue:c,modClass:s}):a.push({roller:n,val:r,maxRoll:l,profValue:o,modValue:c,modClass:s,createdAt:u})}})),r.a.createElement("div",null,r.a.createElement("p",{style:n},e.user),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(p,{submitHealth:e.submitHealth,playerHealth:e.playerHealth,handleHealthChange:e.handleHealthChange,user:e.user})),r.a.createElement(u,{className:"user-group",user:e.user,random:e.random}),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(d,{handleModChange:e.handleModChange,user:e.user}),r.a.createElement(i,{user:e.user,handleChange:e.handleChange})),r.a.createElement("div",{class:"input-group mb-3"}),r.a.createElement("img",{alt:"user-pic",id:"parent-user-group",src:t(44)("./".concat(e.image,".png"))}),a.map((function(e){return r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("p",{className:"col-md-12",id:"roll-history"},r.a.createElement("p",{id:"rollRoller"}," ",r.a.createElement("span",{style:{fontSize:"12px"}},e.val," / ",e.maxRoll," + ",e.profValue," prof +"," ",e.modValue," ",e.modClass," =",e.val+e.profValue+e.modValue))))})))}t(52);var f=t(15),v=t(12),g=t.n(v),E=t(27),N=t(28),y=t(29),C=t(34),b=t(35);t(54),t(55);function H(e){var a=e.update?"updateText":"",t="01000111 01100001 01101101 01100101 01110010 00100000 01000110 01110101 01100101 01101100"==e.recentRoll.roller?{fontSize:"6px"}:{};return r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h2",{className:"lead"},"Most Recent Roll"),r.a.createElement("div",{id:"flex"},r.a.createElement("h1",null,"Previous Nat 1 : ",e.previousNat1),r.a.createElement("p",{style:t,id:a,className:"display-4"},e.recentRoll.roller," rolled a ",e.recentRoll.val),r.a.createElement("h1",null,"Previous Nat 20 : ",e.previousNat20))))}var R=t(7),x=t.n(R),S=[{userName:"BOYBERRY",picture:"dragon",stats:{prof:2,none:0},mods:{STR:0,DEX:1,CON:3,INT:0,WIS:3,CHAR:1,none:0}},{userName:"BJORN",picture:"necromancer",stats:{prof:2,none:0},mods:{STR:1,DEX:2,CON:2,INT:0,WIS:4,CHAR:1,none:0}},{userName:"IWILLNUT",picture:"midget",stats:{prof:3,none:0},mods:{STR:3,DEX:1,CON:4,INT:1,WIS:1,CHAR:3,none:0}},{userName:"HerMak",picture:"cat",stats:{prof:2,none:0},mods:{STR:0,DEX:3,CON:2,INT:0,WIS:2,CHAR:4,none:0}}],V=function(e){Object(b.a)(t,e);var a=Object(C.a)(t);function t(e){var n;return Object(N.a)(this,t),(n=a.call(this,e)).handleHealthChange=function(e){var a=n.state.playerHealth;a[e.target.name]=Number(e.target.value),console.log(a),n.setState({playerHealth:a}),console.log(n.state.playerHealth)},n.submitHealth=function(e){console.log(e.target.name,n.state.playerHealth[e.target.name]),x.a.post("https://dnd-server-api.herokuapp.com/sendHealth",{char:e.target.name,health:n.state.playerHealth[e.target.name]}).then((function(e){for(var a=n.state.playerHealth,t=0;t<e.data.length;t++)a[e.data[t]]=e.data[t].health;n.setState({playerHealth:a})}))},n.refreshHealth=function(){x.a.post("https://dnd-server-api.herokuapp.com/refreshHealth").then((function(e){var a=n.state.playerHealth;console.log(e.data);for(var t=0;t<e.data.length;t++)a[e.data[t].char]=e.data[t].health;n.setState({playerHealth:a})}))},n.handleData=function(e,a){for(var t,r,l=[],o=e.data.length-1;o>=0;o--){var c=e.data[o],s={roller:c.roller,val:c.val,maxRoll:c.maxRoll,profValue:c.profValue,modValue:c.modValue,modClass:c.modClass,createdAt:c.createdAt};l.push(s)}for(var u=0;u<e.data.length;u++){var i=e.data[u],m=i.roller,d=i.val,p=i.maxRoll;1===d&&20===p?r=m:20===d&&(t=m)}var h=l[0],f={roller:h.roller,val:h.val,createdAt:h.createdAt};f.createdAt===n.state.recentRoll.createdAt?n.setState({updateRoller:!1}):n.setState({updateRoller:!0}),a?n.setState((function(e){return{rollDataArray:l,recentRoll:f,previousNat1:r,previousNat20:t}})):n.setState((function(e){return{rollDataArray:l,previousNat1:r,previousNat20:t}}))},n.refreshFeed=function(){x.a.post("https://dnd-server-api.herokuapp.com/refreshData").then((function(e){n.handleData(e,!0)}))},n.getRandom=function(){var e=Object(E.a)(g.a.mark((function e(a,t){var r,l;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=a,l=Math.floor(Math.random()*a)+1,x.a.post("https://dnd-server-api.herokuapp.com/sendData",{val:l,roller:t,maxRoll:r,profValue:n.state.currentProfValue,modValue:n.state.modValue,modClass:n.state.modClass}).then((function(e){n.handleData(e,!1)}));case 3:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var a=e.target.value.split(":"),t=Object(f.a)(a,2),r=t[0],l=t[1];S.map((function(e){if(e.userName===r){var a=e.stats[l];n.setState({currentProfValue:a})}}))},n.handleModChange=function(e){var a=e.target.value.split(":"),t=Object(f.a)(a,2),r=t[0],l=t[1];S.map((function(e){r===e.userName&&n.setState({modValue:e.mods[l],modClass:l})}))},n.state={rollDataArray:[],valArray:[],rollerArray:[],recentRoll:{},updateRoller:!0,currentProfValue:0,modValue:0,modClass:"none",previousNat20:"",previousNat1:"",playerHealth:{BOYBERRY:26,BJORN:25,IWILLNUT:50,HerMak:24},updatingHealth:!1},n}return Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.refreshFeed(),setInterval((function(){e.refreshFeed()}),200),setInterval((function(){e.refreshHealth()}),3500)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(H,{previousNat1:this.state.previousNat1,previousNat20:this.state.previousNat20,update:this.state.updateRoller,recentRoll:this.state.recentRoll}),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row",id:"contains-users"},S.map((function(a){return r.a.createElement("div",{className:"col-md-3"},r.a.createElement(h,{submitHealth:e.submitHealth,playerHealth:e.state.playerHealth,handleHealthChange:e.handleHealthChange,handleModChange:e.handleModChange,handleChange:e.handleChange,data:e.state.rollDataArray,random:e.getRandom,image:a.picture,user:a.userName,updatingHealth:e.state.updatingHealth,updateHealth:e.updateHealth}))})))))}}]),t}(r.a.Component),k=t(30);t.n(k).a.config();var O=["demon","devil","boss"];function A(){return r.a.createElement("div",null,O.map((function(e){return r.a.createElement("button",{onClick:function(){!function(e){x.a.post("https://dnd-server-api.herokuapp.com/sendEnemy",{enemy:e}).then((function(e){}))}(e)},className:"btn btn-danger"},"spawn ",e)})))}var _=t(31),I=t(6);function D(){return r.a.createElement(_.a,{basename:"/dnd"},r.a.createElement(I.c,null,r.a.createElement(I.a,{exact:!0,path:"/",component:V}),r.a.createElement(I.a,{path:"/admin",component:A})))}o.a.render(r.a.createElement("div",null,r.a.createElement("link",{href:"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",crossorigin:"anonymous"}),r.a.createElement(D,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.9cf6450f.chunk.js.map