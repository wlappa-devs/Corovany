(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{27:function(e,t,a){e.exports=a(43)},32:function(e,t,a){},33:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),c=a(12),i=a.n(c),o=(a(32),a(33),a(11)),m=a(3),s=function(e){return e.Logs.commands},u=function(e){return e.Logs.spellLog},d=function(e){return e.GameState.queue},h=function(e){return e.GameState.currentUnit},p=function(e){return e.GameState.units},g=function(e){return e.GameState.players[0]},E=function(e){return e.GameState.characters},f=function(e){return{state:e.GameState.state,won:e.GameState.won}},y=function(e){return e.Control.selectedPerk},C=function(e){return e.GameState.turnCounter};!function(e){e[e.ExecuteCommand=0]="ExecuteCommand",e[e.AddCommand=1]="AddCommand",e[e.SelectPerk=2]="SelectPerk"}(n||(n={}));var x,b=function(e){return{type:n.ExecuteCommand,payload:e}},v={uninitialized:"\u041d\u0435 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e",stateReady:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043a \u0431\u043e\u044e",combatReady:"\u0411\u043e\u0439 \u0438\u0434\u0435\u0442",finished:"\u0411\u043e\u0439 \u043e\u043a\u043e\u043d\u0447\u0435\u043d"},w=["\u0410\u043a\u0442\u0438\u0432\u0435\u043d","\u0421\u0431\u0435\u0436\u0430\u043b","\u041c\u0435\u0440\u0442\u0432"];function k(e){var t=Object(m.c)(g),a=Object(m.c)(f),n=Object(m.c)(E),r=Object(m.c)(p),c=Object(m.c)(d),i=Object(m.c)(h);return l.a.createElement("div",{style:{backgroundColor:"rgb(245, 245, 245)",overflowY:"scroll",height:"600px",width:"100%"}},l.a.createElement("p",null,"\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435:"),l.a.createElement("div",{style:{marginLeft:"15px"}},l.a.createElement("p",null,'\u0418\u0433\u0440\u0430 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0438 "',v[a.state],'".',"finished"===a.state&&"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0431\u043e\u044f: ".concat(a.won?"\u041f\u043e\u0431\u0435\u0434\u0430":"\u0411\u0438\u043b\u043b\u0438 \u0411\u043e\u043d\u0441 \u0443\u043c\u0435\u0440...")),t&&l.a.createElement("p",null,"\u0418\u0433\u0440\u043e\u043a ",t.Name," \u0441 ID ",t.Id)),("stateReady"===a.state||"combatReady"===a.state||"finished"===a.state)&&l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0438:"),l.a.createElement("div",{style:{marginLeft:"15px"}},n.filter((function(e){return null!==e})).map((function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("p",null,"\u0418\u043c\u044f: ",e.Name),l.a.createElement("div",{style:{marginLeft:"15px"}},l.a.createElement("p",null,"\u041a\u043b\u0430\u0441\u0441: ",e.CharClass.Name),l.a.createElement("p",null,"\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435: ",e.HealthPoints),l.a.createElement("p",null,"\u0418\u043d\u0438\u0446\u0438\u0430\u0442\u0438\u0432\u0430: ",e.Initiative),l.a.createElement("p",null,"\u041c\u043e\u0440\u0430\u043b\u044c: ",e.MoralePoints),l.a.createElement("p",null,"\u041e\u0447\u043a\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0435\u0439: ",e.SpecialPoints)))})))),("combatReady"===a.state||"finished"===a.state)&&i&&l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u044e\u043d\u0438\u0442: ",i.Character.Name),l.a.createElement("p",null,"\u0421\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438:"),l.a.createElement("div",{style:{marginLeft:"15px"}},i.Character.CharClass.Perks.map((function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("p",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ",e.Name),l.a.createElement("div",{style:{marginLeft:"15px"}},l.a.createElement("p",null,"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",e.Cost),l.a.createElement("p",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: ",e.Description)))})))),("combatReady"===a.state||"finished"===a.state)&&l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"\u042e\u043d\u0438\u0442\u044b:"),l.a.createElement("div",{style:{marginLeft:"15px"}},r.map((function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("p",null,"\u0418\u043c\u044f: ",e.Character.Name),l.a.createElement("div",{style:{marginLeft:"15px"}},l.a.createElement("p",null,"\u041a\u043b\u0430\u0441\u0441: ",e.Character.CharClass.Name),l.a.createElement("p",null,"\u0422\u0435\u043a\u0443\u0449\u0435\u0435 \u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435: ",e.HealthPoints),l.a.createElement("p",null,"\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u0442\u0438\u0432\u0430: ",e.Initiative),l.a.createElement("p",null,"\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u043c\u043e\u0440\u0430\u043b\u044c: ",e.MoralePoints),l.a.createElement("p",null,"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u043e\u0447\u043a\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0435\u0439: ",e.SpecialPoints),l.a.createElement("p",null,"\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435: ",w[e.State])))})))),("combatReady"===a.state||"finished"===a.state)&&l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"\u041e\u0447\u0435\u0440\u0435\u0434\u044c:"),l.a.createElement("div",{style:{marginLeft:"15px"}},c.map((function(e,t){return l.a.createElement("span",{key:t},e.Character.Name,", ")})))))}function O(e){var t=Object(m.c)(g),a=Object(m.c)(f),c=Object(m.c)(p),i=Object(m.c)(d),o=Object(m.c)(h),s=Object(m.c)(y),E=Object(m.c)(u),x=Object(m.c)(C),v=Object(m.b)();Object(r.useEffect)((function(){v(b({Type:"ReceiveFullDataStateCommand",Args:[]}))}),[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("svg",{height:720,width:800},l.a.createElement("image",{xlinkHref:"Resources/Panels/top_panel.png"}),l.a.createElement("image",{y:50,xlinkHref:"Resources/Stages/desert_map.png"}),l.a.createElement("image",{transform:"scale(1, 0.6)",y:1e3,xlinkHref:"Resources/Panels/bottom_panel.png"}),"uninitialized"===a.state&&l.a.createElement(l.a.Fragment,null,l.a.createElement("g",{onClick:function(){var e=prompt("Your name?");e?v(b({Type:"AddPlayerCommand",Args:["0",e]})):alert("Need name")}},l.a.createElement("rect",{y:320,x:300,width:200,height:80,fill:"white",stroke:"black"}),l.a.createElement("text",{y:365,x:335,fontSize:30},"Start game"))),t&&l.a.createElement(l.a.Fragment,null,l.a.createElement("text",{textAnchor:"end",x:785,y:20,fill:"white"},"Player name: ",t.Name),l.a.createElement("text",{textAnchor:"end",x:785,y:40,fill:"lightgray"},"ID: ",t.Id)),("combatReady"===a.state||"finished"===a.state)&&o&&l.a.createElement(l.a.Fragment,null,c.filter((function(e){return null!==e.Character.OwnerId})).map((function(e,t){return l.a.createElement(S,{unit:e,key:t,index:t})})),c.filter((function(e){return null===e.Character.OwnerId})).map((function(e,t){return l.a.createElement(S,{unit:e,key:t,index:t})})),l.a.createElement("svg",{y:600},l.a.createElement("image",{width:128,height:128,xlinkHref:"Resources/Characters/".concat(o.Character.CharClass.Name,"/prev.png")}),l.a.createElement("text",{fill:"white",x:115,y:25},o.Character.Name),l.a.createElement("text",{fill:"white",x:115,y:45},o.Character.CharClass.Name),l.a.createElement("text",{fill:"pink",x:115,y:65},o.HealthPoints,"/",o.Character.HealthPoints),l.a.createElement("text",{fill:"yellow",x:115,y:85},o.MoralePoints,"/",o.Character.MoralePoints),l.a.createElement("text",{fill:"cyan",x:115,y:105},o.SpecialPoints,"/",o.Character.SpecialPoints)),o.Character.CharClass.Perks.map((function(e,t){return l.a.createElement("svg",{className:"hover-target",onClick:function(){return v(function(e,t){return{type:n.SelectPerk,payload:{perk:e,unit:t}}}(e,o))},key:t,y:590,x:200+150*t},l.a.createElement("image",{width:120,height:120,xlinkHref:"Resources/Skills/".concat(e.SkillFile,".png")}),l.a.createElement("text",{textAnchor:"middle",y:120,x:60,fill:"white"},e.Name),e===s&&l.a.createElement("image",{width:120,height:120,xlinkHref:"Resources/Stars/good_guy_star.png"}),l.a.createElement("text",{y:100,x:80,fill:e.Cost<=o.SpecialPoints?"cyan":"red"},e.Cost),o.Cooldown[e.Name]>0&&l.a.createElement("text",{y:82,x:40,fill:"white",stroke:"black",fontSize:75},o.Cooldown[e.Name]),l.a.createElement("foreignObject",{y:0,x:0,width:120,height:120},l.a.createElement("p",{className:"hover-text"},e.Description)))})),new Array(4-o.Character.CharClass.Perks.length).fill(0).map((function(e,t){return l.a.createElement("svg",{key:t,y:590,x:200+150*(o.Character.CharClass.Perks.length+t)},l.a.createElement("image",{width:120,height:120,xlinkHref:"Resources/Skills/locked_skill.png"}))})),l.a.createElement("rect",{width:50,height:50,fill:"none",stroke:"black"}),l.a.createElement(j,{unit:o,index:0}),i.map((function(e,t){return l.a.createElement(j,{unit:e,index:t+1,key:t})}))),"finished"===a.state&&l.a.createElement(l.a.Fragment,null,l.a.createElement("g",null,l.a.createElement("rect",{y:320,x:300,width:200,height:80,fill:"white",stroke:"black"}),l.a.createElement("text",{y:365,x:350,fontSize:30},a.won?"You won":"You lost")),l.a.createElement("g",{onClick:function(){v(b({Type:"InitializeGameStateResetCommand",Args:[]}))}},l.a.createElement("rect",{y:400,x:300,width:200,height:80,fill:"white",stroke:"black"}),l.a.createElement("text",{y:445,x:335,fontSize:30},"Play again?"))),l.a.createElement("text",{x:400,y:100,fontSize:60,textAnchor:"middle"},"TURN ",x)),l.a.createElement("div",{style:{height:"200px",overflowY:"scroll",backgroundColor:"lightgray"}},E.map((function(e,t){return l.a.createElement("p",{key:t},e.CurrentUnit.Character.Name," used ability ",e.Perk.Name," to ",e.Target.Character.Name," (",e.Perk.Description,")")})),"combatReady"===a.state&&l.a.createElement("audio",{controls:!0,loop:!0,autoPlay:!0,src:"Resources/Audio/bgm.webm"})))}function S(e){var t=e.unit,a=e.index,n=null===t.Character.OwnerId,r=Object(m.c)(y),c=Object(m.c)(h),i=Object(m.c)(f),o=Object(m.b)(),s=window.location.hash.includes("7754321");return l.a.createElement("svg",{onClick:function(){r&&i&&c&&(null!==c.Character.OwnerId||s)&&o(b({Type:"NextTurnCommand",Args:[r.Name,t.Character.Name]}))},y:270+105*a,x:(n?500:220)-20*a*(n?-1:1),className:"hover-target"},t.State===x.Fine&&l.a.createElement(l.a.Fragment,null,l.a.createElement(N,{x:24,y:2,color:"rgb(49, 191, 19)",value:t.HealthPoints/t.Character.HealthPoints}),l.a.createElement(N,{x:24,y:8,color:"rgb(255, 179, 11)",value:t.MoralePoints/t.Character.MoralePoints}),l.a.createElement(N,{x:24,y:14,color:"rgb(109, 195, 235)",value:t.SpecialPoints/t.Character.SpecialPoints})),c&&t.Character.Name===c.Character.Name&&l.a.createElement("rect",{x:22,y:0,width:68,height:20,fill:"none",stroke:"rgb(1, 22, 39)"}),t.State!==x.Runaway&&l.a.createElement("image",{style:{imageRendering:"pixelated"},width:96,height:96,x:n&&t.State!==x.Dead?-96:0,transform:(n?"scale(-1, 1)":"")+(t.State===x.Dead&&n?"translate(-96, 0) rotate(-90, 48, 48)":"")+(t.State!==x.Dead||n?"":"rotate(-90, 48, 48)"),y:16,xlinkHref:"Resources/Characters/".concat(t.Character.CharClass.Name,"/char.png")}),t.State===x.Runaway&&l.a.createElement("image",{width:96,height:96,xlinkHref:"Resources/Characters/retreated_character.png"}),l.a.createElement("foreignObject",{y:50,x:0,width:210,height:120},l.a.createElement("div",{className:"hover-text"},t.Character.Name," (",t.HealthPoints,"/",t.Character.HealthPoints,") (",t.MoralePoints,"/",t.Character.MoralePoints,")")))}function N(e){var t=e.x,a=e.y,n=e.color,r=e.value;return l.a.createElement(l.a.Fragment,null,l.a.createElement("rect",{stroke:"black",height:5,width:64,x:t,y:a,fill:"rgb(102, 102, 102)"}),l.a.createElement("rect",{height:5,width:64*(r>=0?r:0),x:t,y:a,fill:n}))}function j(e){var t=e.unit,a=e.index,n=null===t.Character.OwnerId;return l.a.createElement("svg",{className:"hover-target",x:54*a-4},l.a.createElement("image",{y:-4,width:60,height:60,transform:n?"scale(-1, 1)":"",x:n?-60:0,xlinkHref:"Resources/Characters/".concat(t.Character.CharClass.Name,"/prev.png")}),l.a.createElement("image",{y:-4,width:60,height:60,transform:n?"scale(-1, 1)":"",x:n?-60:0,xlinkHref:n?"Resources/Stars/bad_guy_star.png":"Resources/Stars/good_guy_star.png"}),l.a.createElement("foreignObject",{y:50,x:0,width:120,height:120},l.a.createElement("p",{className:"hover-text"},t.Character.Name)))}function P(e){Object(m.c)(u);var t=Object(m.c)(s),a=Object(m.b)(),n=Object(r.useState)(""),c=Object(o.a)(n,2),i=c[0],d=c[1],h=Object(r.useState)(""),p=Object(o.a)(h,2),g=p[0],E=p[1],f=Object(r.useState)(""),y=Object(o.a)(f,2),C=y[0],x=y[1],v=Object(r.useState)(""),w=Object(o.a)(v,2),S=w[0],N=w[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{float:"left"}},l.a.createElement("div",{style:{backgroundColor:"rgb(250, 250, 250)",width:"40vw"}},l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){a(b({Type:"AddPlayerCommand",Args:[i,g]}))}},"Execute add player"),l.a.createElement("input",{placeholder:"id",onChange:function(e){return d(e.target.value)}}),l.a.createElement("input",{placeholder:"name",onChange:function(e){return E(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){a(b({Type:"InitializeGameCommand",Args:[]}))}},"Execute init state")),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){a(b({Type:"InitializeCombatSystemCommand",Args:[]}))}},"Execute initialize combat system")),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){a(b({Type:"NextTurnCommand",Args:[C,S]}))}},"Execute next turn command"),l.a.createElement("input",{placeholder:"perkKey",onChange:function(e){return x(e.target.value)}}),l.a.createElement("input",{placeholder:"targetKey",onChange:function(e){return N(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){a(b({Type:"InitializeGameStateResetCommand",Args:[]}))}},"Execute reset command")),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){a(b({Type:"ReceiveFullDataStateCommand",Args:[]}))}},"Execute receive full data state command"))),l.a.createElement("div",null,l.a.createElement(k,null)),l.a.createElement("div",{style:{height:"200px",width:"40vw",overflow:"scroll",backgroundColor:"rgb(235, 235, 235)"}},l.a.createElement("p",null,"\u041a\u043e\u043c\u0430\u043d\u0434\u044b:"),l.a.createElement("div",{style:{marginLeft:"15px"}},t.map((function(e,t){return l.a.createElement("pre",{key:t},e)}))))),l.a.createElement("div",{style:{float:"left"}},l.a.createElement(O,null)))}!function(e){e[e.Fine=0]="Fine",e[e.Runaway=1]="Runaway",e[e.Dead=2]="Dead"}(x||(x={}));var R=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(9),F=a(6),T=a(18),H=a.n(T),I=a(23),z=(new(a(26).a)).withUrl("/hub").build();z.on("newCommand",(function(e,t){B.dispatch(function(e,t){return{type:n.AddCommand,payload:{commandName:t,newCommand:e}}}(t,e))}));var L=z.start().catch((function(e){return console.log(e)}));function G(e){return D.apply(this,arguments)}function D(){return(D=Object(I.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L;case 2:return e.next=4,z.send("NewCommand",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _={state:"uninitialized",players:[],characters:[],currentUnit:null,units:[],queue:[],won:!1,turnCounter:0},M=a(14),U={commands:[],spellLog:[]},J={selectedPerk:null},Y=Object(A.b)({GameState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.ExecuteCommand:return G(JSON.stringify(t.payload)),e;case n.AddCommand:var a=JSON.parse(t.payload.newCommand);switch(t.payload.commandName){case"PlayerAdded":return a.length>0&&"uninitialized"===e.state&&G(JSON.stringify({Type:"InitializeGameCommand",Args:[]})),Object(F.a)({},e,{players:a});case"GameInitialized":return"uninitialized"===e.state&&G(JSON.stringify({Type:"InitializeCombatSystemCommand",Args:[]})),Object(F.a)({},e,{state:"stateReady",characters:a});case"BattleFieldUpdated":return Object(F.a)({},e,{state:"finished"!==e.state?"combatReady":"finished",currentUnit:a.CurrentUnit,units:a.Units,queue:a.Queue,turnCounter:a.TurnCounter});case"BattleEnd":return Object(F.a)({},e,{state:"finished",won:a});case"FrontendError":return e;case"Reset":return _;default:return e}default:return e}},Logs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.ExecuteCommand:return Object(F.a)({},e,{commands:[].concat(Object(M.a)(e.commands),["To server: ".concat(JSON.stringify(t.payload))])});case n.AddCommand:return"Reset"===t.payload.commandName?U:Object(F.a)({},e,{commands:[].concat(Object(M.a)(e.commands),["From server(".concat(t.payload.commandName,")")]),spellLog:"FrontendSpellLog"===t.payload.commandName?[].concat(Object(M.a)(e.spellLog),[JSON.parse(t.payload.newCommand)]):e.spellLog});default:return e}},Control:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.SelectPerk:var a=t.payload.perk,r=t.payload.unit;return a.Cost>r.SpecialPoints||0!==r.Cooldown[a.Name]?e:Object(F.a)({},e,{selectedPerk:a});case n.ExecuteCommand:return"NextTurnCommand"===t.payload.Type?Object(F.a)({},e,{selectedPerk:null}):e;default:return e}}}),B=Object(A.c)(Y);i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m.a,{store:B},l.a.createElement(R,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.bc78b8e5.chunk.js.map