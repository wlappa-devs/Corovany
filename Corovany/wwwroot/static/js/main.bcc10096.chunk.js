(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{27:function(e,t,a){e.exports=a(43)},32:function(e,t,a){},33:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),l=a(13),m=a.n(l),o=(a(32),a(33),a(12)),i=a(4),u=function(e){return e.CommandsList.commands},s=function(e){return e.CommandsList.queue},d=function(e){return e.CommandsList.currentUnit},p=function(e){return e.CommandsList.units},E=function(e){return e.CommandsList.players[0]},f=function(e){return e.CommandsList.characters},y=function(e){return{state:e.CommandsList.state,won:e.CommandsList.won}};!function(e){e[e.ExecuteCommand=0]="ExecuteCommand",e[e.AddCommand=1]="AddCommand"}(n||(n={}));var C=function(e){return{type:n.ExecuteCommand,payload:e}},b={uninitialized:"\u041d\u0435 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e",stateReady:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043a \u0431\u043e\u044e",combatReady:"\u0411\u043e\u0439 \u0438\u0434\u0435\u0442",finished:"\u0411\u043e\u0439 \u043e\u043a\u043e\u043d\u0447\u0435\u043d"},v=["\u0410\u043a\u0442\u0438\u0432\u0435\u043d","\u0421\u0431\u0435\u0436\u0430\u043b","\u041c\u0435\u0440\u0442\u0432"];function h(e){var t=Object(i.c)(E),a=Object(i.c)(y),n=Object(i.c)(f),r=Object(i.c)(p),l=Object(i.c)(s),m=Object(i.c)(d);return c.a.createElement("div",{style:{backgroundColor:"rgb(245, 245, 245)",overflowY:"scroll",height:"400px"}},c.a.createElement("p",null,"\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435:"),c.a.createElement("div",{style:{marginLeft:"15px"}},c.a.createElement("p",null,'\u0418\u0433\u0440\u0430 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0438 "',b[a.state],'".',"finished"===a.state&&"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0431\u043e\u044f: ".concat(a.won?"\u041f\u043e\u0431\u0435\u0434\u0430":"\u0411\u0438\u043b\u043b\u0438 \u0411\u043e\u043d\u0441 \u0443\u043c\u0435\u0440...")),t&&c.a.createElement("p",null,"\u0418\u0433\u0440\u043e\u043a ",t.Name," \u0441 ID ",t.Id)),("stateReady"===a.state||"combatReady"===a.state||"finished"===a.state)&&c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0438:"),c.a.createElement("div",{style:{marginLeft:"15px"}},n.filter((function(e){return null!==e})).map((function(e,t){return c.a.createElement("div",{key:t},c.a.createElement("p",null,"\u0418\u043c\u044f: ",e.Name),c.a.createElement("div",{style:{marginLeft:"15px"}},c.a.createElement("p",null,"\u041a\u043b\u0430\u0441\u0441: ",e.CharClass.Name),c.a.createElement("p",null,"\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435: ",e.HealthPoints),c.a.createElement("p",null,"\u0418\u043d\u0438\u0446\u0438\u0430\u0442\u0438\u0432\u0430: ",e.Initiative),c.a.createElement("p",null,"\u041c\u043e\u0440\u0430\u043b\u044c: ",e.MoralePoints),c.a.createElement("p",null,"\u041e\u0447\u043a\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0435\u0439: ",e.SpecialPoints)))})))),("combatReady"===a.state||"finished"===a.state)&&m&&c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u044e\u043d\u0438\u0442: ",m.Character.Name),c.a.createElement("p",null,"\u0421\u043f\u043e\u0441\u0431\u043d\u043e\u0441\u0442\u0438:"),c.a.createElement("div",{style:{marginLeft:"15px"}},m.Character.CharClass.Perks.map((function(e,t){return c.a.createElement("div",{key:t},c.a.createElement("p",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ",e.Name),c.a.createElement("div",{style:{marginLeft:"15px"}},c.a.createElement("p",null,"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",e.Cost)))})))),("combatReady"===a.state||"finished"===a.state)&&c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u042e\u043d\u0438\u0442\u044b:"),c.a.createElement("div",{style:{marginLeft:"15px"}},r.map((function(e,t){return c.a.createElement("div",{key:t},c.a.createElement("p",null,"\u0418\u043c\u044f: ",e.Character.Name),c.a.createElement("div",{style:{marginLeft:"15px"}},c.a.createElement("p",null,"\u041a\u043b\u0430\u0441\u0441: ",e.Character.CharClass.Name),c.a.createElement("p",null,"\u0422\u0435\u043a\u0443\u0449\u0435\u0435 \u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435: ",e.HealthPoints),c.a.createElement("p",null,"\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u0442\u0438\u0432\u0430: ",e.Initiative),c.a.createElement("p",null,"\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u043c\u043e\u0440\u0430\u043b\u044c: ",e.MoralePoints),c.a.createElement("p",null,"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u043e\u0447\u043a\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0435\u0439: ",e.SpecialPoints),c.a.createElement("p",null,"\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435: ",v[e.State])))})))),("combatReady"===a.state||"finished"===a.state)&&c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u041e\u0447\u0435\u0440\u0435\u0434\u044c:"),c.a.createElement("div",{style:{marginLeft:"15px"}},l.map((function(e,t){return c.a.createElement("span",{key:t},e.Character.Name,", ")})))))}function g(e){var t=Object(i.c)(u),a=Object(i.b)(),n=Object(r.useState)(""),l=Object(o.a)(n,2),m=l[0],s=l[1],d=Object(r.useState)(""),p=Object(o.a)(d,2),E=p[0],f=p[1],y=Object(r.useState)(""),b=Object(o.a)(y,2),v=b[0],g=b[1],O=Object(r.useState)(""),j=Object(o.a)(O,2),w=j[0],N=j[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:{backgroundColor:"rgb(250, 250, 250)"}},c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){a(C({Type:"AddPlayerCommand",Args:[m,E]}))}},"Execute add player"),c.a.createElement("input",{placeholder:"id",onChange:function(e){return s(e.target.value)}}),c.a.createElement("input",{placeholder:"name",onChange:function(e){return f(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){a(C({Type:"InitializeGameCommand",Args:[]}))}},"Execute init state")),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){a(C({Type:"InitializeCombatSystemCommand",Args:[]}))}},"Execute initialize combat system")),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){a(C({Type:"NextTurnCommand",Args:[v,w]}))}},"Execute next turn command"),c.a.createElement("input",{placeholder:"perkKey",onChange:function(e){return g(e.target.value)}}),c.a.createElement("input",{placeholder:"targetKey",onChange:function(e){return N(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){a(C({Type:"InitializeGameStateResetCommand",Args:[]}))}},"Execute reset command")),c.a.createElement("div",null,c.a.createElement(h,null))),c.a.createElement("div",{style:{height:"400px",overflowY:"scroll",backgroundColor:"rgb(235, 235, 235)"}},c.a.createElement("p",null,"\u041a\u043e\u043c\u0430\u043d\u0434\u044b:"),c.a.createElement("div",{style:{marginLeft:"15px"}},t.map((function(e,t){return c.a.createElement("pre",{key:t},e)})))))}var O=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=a(9),w=a(10),N=a(8),x=a(18),S=a.n(x),k=a(23),L=(new(a(26).a)).withUrl("/hub").build();L.on("newCommand",(function(e,t){z.dispatch(function(e,t){return{type:n.AddCommand,payload:{commandName:t,newCommand:e}}}(t,e))}));var A=L.start().catch((function(e){return console.log(e)}));function J(e){return F.apply(this,arguments)}function F(){return(F=Object(k.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A;case 2:return e.next=4,L.send("NewCommand",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R,I={state:"uninitialized",commands:[],players:[],characters:[],currentUnit:null,units:[],queue:[],won:!1};!function(e){e[e.Fine=0]="Fine",e[e.Alive=1]="Alive",e[e.Dead=2]="Dead"}(R||(R={}));var P=Object(j.b)({CommandsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.ExecuteCommand:return J(JSON.stringify(t.payload)),Object(N.a)({},e,{commands:[].concat(Object(w.a)(e.commands),["To server: ".concat(JSON.stringify(t.payload))])});case n.AddCommand:var a=JSON.parse(t.payload.newCommand);switch(t.payload.commandName){case"PlayerAdded":return Object(N.a)({},e,{commands:[].concat(Object(w.a)(e.commands),["From server(".concat(t.payload.commandName,"): ").concat(JSON.stringify(JSON.parse(t.payload.newCommand),null,4))]),players:a});case"GameInitialized":return Object(N.a)({},e,{state:"stateReady",commands:[].concat(Object(w.a)(e.commands),["From server(".concat(t.payload.commandName,"): ").concat(JSON.stringify(JSON.parse(t.payload.newCommand),null,4))]),characters:a});case"BattleFieldUpdated":return Object(N.a)({},e,{state:"combatReady",commands:[].concat(Object(w.a)(e.commands),["From server(".concat(t.payload.commandName,"): ").concat(JSON.stringify(JSON.parse(t.payload.newCommand),null,4))]),currentUnit:a.CurrentUnit,units:a.Units,queue:a.Queue});case"BattleEnd":return Object(N.a)({},e,{state:"finished",won:a});case"Reset":return I;default:return Object(N.a)({},e,{commands:[].concat(Object(w.a)(e.commands),["From server(".concat(t.payload.commandName,"): ").concat(JSON.stringify(JSON.parse(t.payload.newCommand),null,4))])})}default:return e}}}),z=Object(j.c)(P);m.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,{store:z},c.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.bcc10096.chunk.js.map