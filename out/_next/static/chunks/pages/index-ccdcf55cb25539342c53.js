(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{21113:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return je}});var r=s(67294),n=s(2804),a=s(63569),l=s(40364),i=s(30266),c=s(80318),o=s(65523),d=s(809),x=s.n(d),u=s(9669),h=s.n(u),m=s(92809),p=s(8193),f=s(47516),g=s(89583),j=s(43196),b=s(83789),y=s(94649),v=s(86733),N=s(88943),w=s(85893),F=function(e){var t=e.handleClose,s=e.balance,r=e.up,l=void 0===r||r,i=(0,n.sJ)(a.KL),o=(0,n.FV)(a.D2),d=(0,c.Z)(o,2),x=(d[0],d[1]);return(0,w.jsxs)(N.A,{handleClose:t,children:[(0,w.jsx)("h1",{className:"text-xl mb-2",children:l?"Lock LARYNX for Governance Ops":"Unlock Governance Tokens"}),(0,w.jsx)(y.J9,{initialValues:{amount:s},validate:function(e){var t={};return e.amount>s&&(t.amount="Not enough ".concat(l?"LARYNX":"GOV")),t},onSubmit:function(e,s){var r=e.amount,n=s.setSubmitting;i&&(0,j.pP)(r,i.name,l).then((function(e){e&&e.success&&x((function(t){return[].concat((0,b.Z)(t),[e])}))})),n(!1),t()},children:function(e){var t=e.values,r=e.errors,n=e.touched,a=e.handleChange,i=e.handleBlur,c=e.handleSubmit;return(0,w.jsxs)("form",{onSubmit:c,children:[(0,w.jsxs)("div",{className:"mt-2 relative",children:[(0,w.jsx)(v.y,{title:"Amount (".concat(s||"0.000"," ").concat(l?"LARYNX":"GOV",")"),name:"amount",type:"number",errors:r.amount,handleBlur:i,handleChange:a,touched:n.amount,value:t.amount}),(0,w.jsx)("div",{className:"absolute top-8 right-9",children:(0,w.jsx)("img",{src:"https://www.dlux.io/img/dlux-hive-logo-alpha.svg",width:25,height:25,alt:"logo"})})]}),(0,w.jsx)("button",{type:"submit",className:"px-2 py-1 mx-auto mt-5 flex items-center gap-3 rounded-lg border-2 text-white bg-gradient-to-b from-red-500 to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600",children:l?(0,w.jsxs)("h1",{className:"flex gap-4 items-center",children:["Lock LARYNX ",(0,w.jsx)(g.kUi,{})]}):(0,w.jsxs)("h1",{className:"flex gap-4 items-center",children:["Unlock GOV ",(0,w.jsx)(g.D5B,{})]})})]})}})]})},k=function(e){var t=e.handleClose,s=e.balance,r=e.currency,l=(0,n.sJ)(a.KL),i=(0,n.FV)(a.D2),o=(0,c.Z)(i,2),d=(o[0],o[1]);return(0,w.jsxs)(N.A,{handleClose:t,children:[(0,w.jsxs)("h1",{className:"text-xl mb-2",children:["Send ",r]}),(0,w.jsx)(y.J9,{initialValues:{to:"",amount:s,memo:""},validate:function(e){var t=e.to,n=e.amount,a={};return t||(a.to="Required"),n>s&&(a.amount="Not enough ".concat(r)),a},onSubmit:function(e,s){var n=s.setSubmitting;l&&("LARYNX"===r?(0,j._D)(e,l.name).then((function(e){e&&e.success&&d((function(t){return[].concat((0,b.Z)(t),[e])}))})):(0,j.wM)(e,l.name).then((function(e){e&&e.success&&d((function(t){return[].concat((0,b.Z)(t),[e])}))}))),n(!1),t()},children:function(e){var t=e.values,n=e.errors,a=e.touched,l=e.handleChange,i=e.handleBlur,c=e.handleSubmit;return(0,w.jsxs)("form",{onSubmit:c,children:[(0,w.jsx)(v.y,{name:"to",errors:n.to,handleBlur:i,handleChange:l,touched:a.to,value:t.to}),(0,w.jsxs)("div",{className:"mt-2 relative",children:[(0,w.jsx)(v.y,{title:"Amount (".concat(s||"0.000"," ").concat(r,")"),name:"amount",type:"number",errors:n.amount,handleBlur:i,handleChange:l,touched:a.amount,value:t.amount}),(0,w.jsx)("div",{className:"absolute top-8 right-9",children:(0,w.jsx)("img",{src:"LARYNX"===r?"https://spk.network/static/media/SPK.4d91f7a0.png":"https://www.dlux.io/img/hextacular.svg",width:20,height:20,alt:"logo"})})]}),(0,w.jsx)("div",{className:"mt-2",children:(0,w.jsx)(v.y,{name:"memo",errors:n.memo,handleBlur:i,handleChange:l,touched:a.memo,value:t.memo})}),(0,w.jsxs)("button",{type:"submit",className:"px-2 py-1 mx-auto mt-5 flex items-center gap-3 rounded-lg border-2 text-white bg-gradient-to-b ".concat("LARYNX"===r?"from-red-500 to-blue-500":"from-white to-red-500"," focus:outline-none focus:ring-2 focus:ring-blue-600"),children:["Send",(0,w.jsx)(f.VLC,{size:"1.5rem"})]})]})}})]})};function S(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function L(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?S(Object(s),!0).forEach((function(t){(0,m.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):S(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var E=function(e){var t=e.balance,s=(0,n.sJ)(a.KL),l=(0,n.sJ)(a.H3),i=(0,r.useState)(!1),c=i[0],o=i[1],d=(0,r.useState)(!1),x=d[0],u=d[1],m=(0,r.useState)({show:!1,up:!1}),b=m[0],y=m[1],v=(0,r.useState)(!1),N=v[0],S=v[1],E=(0,r.useState)({availiblePerMonth:0,lastClaim:"Feburary",totalClaims:""}),O=E[0],C=E[1];return(0,r.useEffect)((function(){h().get("".concat(l,"@").concat(s.name)).then((function(e){var t=e.data,s=(0,j.Mu)(t.drop);C({availiblePerMonth:t.drop.availible.amount/Math.pow(10,t.drop.availible.precision),lastClaim:s.slice(-1)[0],totalClaims:s.join(", ")})})),h().get("".concat(l,"markets")).then((function(e){var t=e.data;Object.keys(t.markets.node).includes(s.name)&&u(!0)}))}),[]),(0,w.jsxs)("div",{className:"flex flex-col mt-3 pt-3 border-t-2 border-gray-300",children:[c&&(0,w.jsx)(k,{currency:"LARYNX",balance:t.LARYNX/1e3,handleClose:function(){return o(!1)}}),b.show&&(0,w.jsx)(F,{balance:b.up?t.LARYNX/1e3:t.GOV,handleClose:function(){return y(L(L({},b),{},{show:!1}))},up:b.up}),(0,w.jsxs)("div",{className:"flex flex-col sm:flex-row justify-between gap-5",children:[(0,w.jsxs)("div",{children:[(0,w.jsxs)("h1",{children:["LARYNX Token (",t.LARYNX?t.LARYNX/1e3:"0.000"," ","Bal)"]}),(0,w.jsx)("h1",{className:"pl-2 text-gray-600",children:"Miner token for SPK Network."})]}),(0,w.jsx)("div",{className:"flex items-center",children:(0,w.jsxs)("button",{onClick:function(){return o(!0)},className:"px-4 py-3 flex items-center gap-3 rounded-lg border-2 text-white bg-gradient-to-b from-red-500 to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600",children:["Send",(0,w.jsx)(f.VLC,{size:"1.5rem"})]})})]}),x&&(0,w.jsxs)("div",{className:"flex flex-col sm:flex-row justify-between gap-10 border-t-2 border-gray-300 mt-2 pt-2",children:[(0,w.jsxs)("div",{children:[(0,w.jsxs)("h1",{children:["LARYNXG (",t.GOV?t.GOV/1e3:"0.000"," Bal)"]}),(0,w.jsxs)("h1",{className:"text-gray-600 pl-2",children:["Stake and run SCC node for DEX rewards.",(0,w.jsxs)("ul",{className:"list-disc ml-8",children:[(0,w.jsx)("li",{children:"Increased rewards from DEX"}),(0,w.jsx)("li",{children:"Instant Power Up"}),(0,w.jsx)("li",{children:"4 Week Power Down"}),(0,w.jsx)("li",{children:"1 Week Convert"})]})]})]}),(0,w.jsxs)("div",{className:"flex relative flex-col items-center lg:items-end",children:[(0,w.jsxs)("button",{onClick:function(){return S(!N)},className:"px-3 py-3 flex items-center gap-3 rounded-lg border-2 text-white bg-transparent border-gray-700 bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",children:["Actions"," ",N?(0,w.jsx)(p.N9e,{}):(0,w.jsx)(p.w4J,{})]}),N&&(0,w.jsxs)("div",{className:"bg-gray-600 rounded-xl p-3 absolute top-14",children:[(0,w.jsxs)("button",{onClick:function(){return y({show:!0,up:!0})},className:"flex justify-between items-center whitespace-nowrap gap-2 bg-gray-500 w-full px-2 py-1 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-700",children:["Lock LARYNXG ",(0,w.jsx)(g.kUi,{})]}),(0,w.jsxs)("button",{onClick:function(){return y({show:!0,up:!1})},className:"flex mt-2 items-center whitespace-nowrap gap-2 bg-gray-500 w-full px-2 py-1 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-700",children:["Unlock LARYNXG ",(0,w.jsx)(g.D5B,{})]})]})]})]}),(0,w.jsxs)("div",{className:"flex-col sm:flex-row justify-between gap-10 border-t-2 border-gray-300 mt-2 pt-2",children:[(0,w.jsx)("h1",{className:"mt-1 text-md",children:"Claim info:"}),(0,w.jsxs)("ul",{className:"text-gray-600 ml-3",children:[(0,w.jsx)("li",{children:"When can you claim: At the start of every month"}),(0,w.jsxs)("li",{children:["Available per month: ",O.availiblePerMonth," LARYNX"]}),(0,w.jsxs)("li",{children:["Last claim: ",O.lastClaim]}),(0,w.jsxs)("li",{children:["Total claims: ",O.totalClaims]})]})]})]})},O=function(e){var t=e.balance,s=(0,r.useState)(!1),l=s[0],i=s[1],o=(0,n.FV)(a.c9),d=(0,c.Z)(o,2),x=(d[0],d[1]);return(0,w.jsxs)("div",{className:"flex flex-col mt-3 pt-3 border-t-2 border-gray-300",children:[l&&(0,w.jsx)(k,{currency:"HIVE",balance:t,handleClose:function(){return i(!1)}}),(0,w.jsxs)("div",{className:"flex justify-between gap-5",children:[(0,w.jsxs)("div",{children:[(0,w.jsxs)("h1",{children:["HIVE Token (",t.toFixed(2)," Bal)"]}),(0,w.jsx)("h1",{className:"text-gray-600 pt-2",children:"HIVE is a DPoS blockchain with free transactions and a method to post and rate content."})]}),(0,w.jsx)("div",{className:"flex items-center",children:(0,w.jsxs)("button",{onClick:function(){return i(!0)},className:"px-4 py-3 flex items-center gap-3 rounded-lg border-2 text-white bg-gradient-to-b from-white to-red-500 focus:outline-none focus:ring-2 focus:ring-red-600",children:["Send",(0,w.jsx)(f.VLC,{size:"1.5rem"})]})})]}),(0,w.jsx)("div",{className:"mx-auto mb-3 mt-7",children:(0,w.jsxs)("button",{onClick:function(){return x("dex")},className:"px-4 py-3 flex items-center gap-3 rounded-lg border-2 text-white bg-gradient-to-b from-white to-red-500 focus:outline-none focus:ring-2 focus:ring-red-600",children:["Trade",(0,w.jsx)("img",{src:"https://www.dlux.io/img/dlux-hive-logo-alpha.svg",alt:"dlux_logo",width:30})]})})]})},C=function(e){var t=e.currency,s=e.balance;return(0,w.jsxs)("div",{className:"max-w-4xl mx-auto bg-gray-400 w-full px-5 py-3 text-white  rounded-xl border-2 border-gray-100",children:[(0,w.jsxs)("div",{className:"flex items-center justify-between",children:["DLUX"===t&&(0,w.jsx)("img",{src:"https://spk.network/static/media/SPK.4d91f7a0.png",width:45,height:45,alt:"logo"}),"HIVE"===t&&(0,w.jsx)("img",{src:"https://cryptologos.cc/logos/hive-blockchain-hive-logo.png",width:45,height:45,alt:"logo"}),(0,w.jsxs)("h1",{className:"text-xl mr-3",children:["HIVE"===t?s:s.LARYNX/1e3," ","DLUX"===t?"LARYNX":t]})]}),"DLUX"===t&&(0,w.jsx)(E,{balance:s}),"HIVE"===t&&(0,w.jsx)(O,{balance:s})]})},A=s(37039),V=function(e){(0,o.Z)(e);var t=(0,r.useState)({LARYNX:0,GOV:0}),s=t[0],l=t[1],d=(0,r.useState)(0),u=(d[0],d[1]),m=(0,n.FV)(a.Yt),p=(0,c.Z)(m,2),f=(p[0],p[1]),g=(0,n.sJ)(a.KL),j=(0,n.sJ)(a.H3),b=(0,A.$G)().t;return(0,r.useEffect)((function(){(0,i.Z)(x().mark((function e(){var t,s,r,n,a;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(g?parseFloat(null===g||void 0===g||null===(t=g.balance)||void 0===t?void 0:t.split(" ")[0]):0),e.next=3,h().get("".concat(j,"@").concat(g.name));case 3:n=e.sent,a=n.data,l({LARYNX:parseFloat(a.balance),GOV:parseFloat(a.gov)}),f({LARYNX:parseFloat(a.balance)/1e3,HIVE:g?parseFloat(null===g||void 0===g||null===(s=g.balance)||void 0===s?void 0:s.split(" ")[0]):0,HBD:g?parseFloat(null===g||void 0===g||null===(r=g.hbd_balance)||void 0===r?void 0:r.split(" ")[0]):0});case 7:case"end":return e.stop()}}),e)})))()}),[g]),(0,w.jsxs)("div",{className:"w-full",children:[(0,w.jsx)("h1",{className:"text-white text-xl mx-10 my-2 text-center",children:b("balances")}),(0,w.jsx)("div",{className:"grid grid-cols-1 gap-5 px-10",children:(0,w.jsx)(C,{currency:"DLUX",balance:s})})]})},X=s(63750);function D(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function H(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?D(Object(s),!0).forEach((function(t){(0,m.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):D(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var P=function(){var e=(0,r.useState)([]),t=e[0],s=e[1],l=(0,n.sJ)(a.KL),c=(0,A.$G)().t,o=(0,n.sJ)(a.uo),d=(0,n.sJ)(a.H3);(0,r.useEffect)((function(){(0,i.Z)(x().mark((function e(){var t,r;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h().get("".concat(d,"@").concat(l.name));case 2:t=e.sent,(r=t.data).contracts.length&&(console.log(r.contracts),s(r.contracts.map((function(e){var t=0;if(e.partials){var s=e.partials.reduce((function(e,t){return e+t.coin}),0);t=s/(e.hive?e.hive:e.hbd+s)}return H(H({},e),{},{type:e.type.split(":")[1],fillPercent:t})}))));case 5:case"end":return e.stop()}}),e)})))()}),[]);var u=function(){var e=(0,i.Z)(x().mark((function e(t){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,j.wH)(l.name,t,o);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,w.jsx)("div",{className:"mx-10 my-2",children:t.length?t.map((function(e,t){var s=e.amount,r=e.hive,n=e.hbd,a=e.rate,l=e.fee,i=e.txid,c=e.type,o=e.fillPercent;return(0,w.jsxs)("div",{className:"".concat(t%2!==0?"bg-transparent":"bg-gray-400"," p-2 px-4 flex justify-between align-center text-white"),children:[(0,w.jsxs)("div",{className:"items-center flex gap-4",children:[(0,w.jsx)("h1",{className:"sell"===c?"text-red-500":"text-green-500",children:"sell"===c?"SELL":"BUY"}),(0,w.jsxs)("h1",{children:[r?"HIVE":"HBD",":"," ",(0,w.jsx)("b",{children:r?parseFloat(parseFloat((+r/Math.pow(10,3)).toString()).toFixed(3)).toFixed(2):parseFloat(parseFloat((+n/Math.pow(10,3)).toString()).toFixed(3)).toFixed(2)})]}),(0,w.jsxs)("h1",{children:["LARYNX:"," ",(0,w.jsx)("b",{children:parseFloat(parseFloat((+s/Math.pow(10,3)).toString()).toFixed(3)).toFixed(2)})]}),(0,w.jsxs)("h1",{children:["PRICE:"," ",(0,w.jsxs)("b",{children:[a," ",r?"HIVE":"HBD"]})]}),(0,w.jsxs)("h1",{children:["FEE: ",(0,w.jsxs)("b",{children:[l," LARYNX"]})]}),(0,w.jsxs)("h1",{children:["FILLED: ",(0,w.jsxs)("b",{children:[o,"%"]})]})]}),(0,w.jsx)("button",{onClick:function(){return u(i)},className:"px-4 py-2 rounded-lg border-2 text-white bg-red-500 border-red-600 focus:outline-none focus:ring-2 focus:ring-red-700",children:(0,w.jsx)(X.dnY,{})})]})})):(0,w.jsx)("h1",{className:"text-xl text-center text-white",children:c("no_open_orders")})})},Y=function(e){var t=e.type,s=e.coin,l=(0,r.useState)("limit"),i=l[0],c=l[1],o=(0,r.useState)(0),d=o[0],x=o[1],u=(0,r.useState)(0),h=u[0],m=u[1],p=(0,n.sJ)(a.KL),f=(0,n.sJ)(a.uo),g=(0,n.sJ)(a.db),b=(0,A.$G)().t,y=(0,n.sJ)(a.Yt);return(0,w.jsxs)("div",{className:"flex flex-col md:w-20 flex-grow bg-gray-500 border-2 border-gray-300 p-3 rounded-md",children:[(0,w.jsxs)("div",{className:"text-white text-xl flex gap-3",children:[(0,w.jsx)("h1",{className:"sell"===t?"text-red-500":"text-green-500",children:b(t)}),(0,w.jsx)("h1",{children:"LARYNX"})]}),(0,w.jsxs)("div",{className:"flex flex-col sm:flex-row items-center  mr-5 justify-between mt-2 text-white font-light",children:[(0,w.jsx)("h1",{children:b("orderType")}),(0,w.jsxs)("div",{className:"flex justify-center",children:[(0,w.jsx)("button",{onClick:function(){return c("limit")},className:"p-2 ".concat("limit"===i&&"bg-gray-600"," rounded-l-full bg-gray-300 text-gray-400 transition-all"),children:b("limit")}),(0,w.jsx)("button",{onClick:function(){return c("market")},className:"p-2 ".concat("market"===i&&"bg-gray-600"," rounded-r-full bg-gray-300 text-gray-400 transition-all"),children:b("market")})]})]}),(0,w.jsxs)("div",{className:"flex text-white gap-3 flex-col mr-3 mt-5",children:["limit"===i&&(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between",children:[(0,w.jsxs)("div",{className:"flex flex-col mr-5",children:[(0,w.jsx)("h1",{children:b("qty")}),(0,w.jsx)("h1",{className:"font-light text-sm",children:"LARYNX"})]}),(0,w.jsx)("input",{min:0,step:.001,max:y.LARYNX,className:"rounded-xl outline-none w-1/2 px-3 py-1 bg-gray-300 text-gray-500",type:"number",value:d.toString().replace(/^0+/,""),onChange:function(e){return x(+e.target.value)}})]})}),"market"===i&&"sell"===t&&(0,w.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between",children:[(0,w.jsxs)("div",{className:"flex flex-col mr-5",children:[(0,w.jsx)("h1",{children:b("qty")}),(0,w.jsx)("h1",{className:"font-light text-sm",children:"LARYNX"})]}),(0,w.jsx)("input",{min:0,step:.001,max:y.LARYNX,className:"rounded-xl outline-none px-3 py-1 w-1/2 bg-gray-300 text-gray-500",type:"number",value:d.toString().replace(/^0+/,""),onChange:function(e){return x(+e.target.value)}})]}),"limit"===i&&"sell"===t&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between",children:[(0,w.jsxs)("div",{className:"flex flex-col mr-5",children:[(0,w.jsx)("h1",{children:b("total")}),(0,w.jsx)("h1",{className:"font-light text-sm",children:s})]}),(0,w.jsx)("input",{min:0,step:.001,max:y.HIVE,className:"rounded-xl outline-none px-3 py-1 w-1/2  bg-gray-300 text-gray-500",type:"number",value:h.toString().replace(/^0+/,""),onChange:function(e){return m(+e.target.value)}})]}),(0,w.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between",children:[(0,w.jsxs)("div",{className:"flex flex-col mr-5",children:[(0,w.jsx)("h1",{children:b("price")}),(0,w.jsx)("h1",{className:"font-light text-sm",children:s})]}),(0,w.jsx)("h1",{className:"rounded-xl outline-none px-3 py-1 w-1/2  bg-gray-300 text-gray-500",children:h&&d?(h/d).toFixed(3):0})]})]}),"buy"===t&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between",children:[(0,w.jsxs)("div",{className:"flex flex-col mr-5",children:[(0,w.jsx)("h1",{children:b("total")}),(0,w.jsx)("h1",{className:"font-light text-sm",children:s})]}),(0,w.jsx)("input",{step:.001,max:y.HIVE,className:"rounded-xl outline-none px-3 py-1 w-1/2 bg-gray-300 text-gray-500",type:"number",value:h.toString().replace(/^0+/,""),onChange:function(e){return m(+e.target.value)}})]}),(0,w.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between",children:[(0,w.jsxs)("div",{className:"flex flex-col mr-5",children:[(0,w.jsx)("h1",{children:b("price")}),(0,w.jsx)("h1",{className:"font-light text-sm",children:s})]}),(0,w.jsx)("h1",{className:"rounded-xl outline-none px-3 py-1 w-1/2  bg-gray-300 text-gray-500",children:h&&d?(h/d).toFixed(3):0})]})]})]}),(0,w.jsxs)("div",{className:"flex align-center px-4 justify-end",children:[(0,w.jsxs)("h1",{className:"text-white w-auto text-center",children:["Available:"," ",(0,w.jsx)("b",{children:"sell"===t?"".concat(y.LARYNX," LARYNX"):"".concat("HIVE"===s?y.HIVE.toFixed(2):y.HBD.toFixed(2)," ").concat(s)})]}),(0,w.jsx)("h1",{onClick:function(){return"sell"===t?x(y.LARYNX):m("HIVE"===s?y.HIVE:y.HBD)},className:"pl-2 text-white hover:text-gray-400 cursor-pointer transition-all",children:"(MAX)"})]}),(0,w.jsx)("div",{className:"flex justify-end",children:(0,w.jsx)("button",{onClick:function(){"sell"===t&&"market"===i?(0,j.SN)({larynx:1e3*d,hive:0},p.name,f):"sell"===t&&"limit"===i?"HIVE"===s?(0,j.SN)({larynx:1e3*d,hive:1e3*h},p.name,f):(0,j.SN)({larynx:1e3*d,hbd:1e3*h},p.name,f):"buy"===t&&"market"===i?(0,j.u4)({coin:s,amount:1e3*h,buyData:{hours:720}},p.name,g):"buy"===t&&"limit"===i&&(0,j.u4)({coin:s,amount:1e3*h,buyData:{rate:parseFloat((h/d).toFixed(6)),hours:720}},p.name,g)},className:"".concat("sell"===t?"bg-red-500 focus:ring-red-600":"bg-green-500 focus:ring-green-600"," text-white mx-4 mt-2 px-4 py-2 rounded-xl focus:ring-2 "),children:b(t)})})]})},R=function(e){var t=e.coin,s=(0,r.useState)(0),l=s[0],c=s[1],o=(0,r.useState)(0),d=o[0],u=o[1],m=(0,r.useState)({dollars:0,larynx:0}),p=m[0],f=m[1],j=(0,r.useState)({dollars:0,larynx:0}),b=j[0],y=j[1],v=(0,r.useState)({dollars:0,larynx:0}),N=v[0],F=v[1],k=(0,r.useState)({dollars:0,larynx:0}),S=k[0],L=k[1],E=(0,A.$G)().t,O=(0,n.sJ)(a.H3);return(0,r.useEffect)((function(){(0,i.Z)(x().mark((function e(){var t,s,r,n;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h().get("https://api.coingecko.com/api/v3/coins/hive",{headers:{accept:"application/json"}});case 2:return t=e.sent,s=t.data,e.next=6,h().get("https://api.coingecko.com/api/v3/coins/hive_dollar",{headers:{accept:"application/json"}});case 6:r=e.sent,n=r.data,c(s.market_data.current_price.usd),u(n.market_data.current_price.usd);case 10:case"end":return e.stop()}}),e)})))()}),[]),(0,r.useEffect)((function(){h().get("".concat(O,"dex")).then((function(e){var s=e.data;"HIVE"===t?(s.markets.hive.sells.length&&s.markets.hive.buys.length?(f({larynx:parseFloat(s.markets.hive.buys[s.markets.hive.buys.length-1].rate),dollars:l*s.markets.hive.buys[s.markets.hive.buys.length-1].rate}),y({larynx:parseFloat(s.markets.hive.sells[0].rate),dollars:l*s.markets.hive.sells[0].rate})):(f({larynx:0,dollars:0}),y({larynx:0,dollars:0})),F({larynx:s.markets.hive.tick,dollars:parseFloat(s.markets.hive.tick)*l})):"HBD"===t&&(s.markets.hbd.sells.length&&s.markets.hbd.buys.length?(f({larynx:parseFloat(s.markets.hbd.buys[s.markets.hbd.buys.length-1].rate),dollars:d*s.markets.hbd.buys[s.markets.hbd.buys.length-1].rate}),y({larynx:parseFloat(s.markets.hbd.sells[0].rate),dollars:d*s.markets.hbd.sells[0].rate})):(f({larynx:0,dollars:0}),y({larynx:0,dollars:0})),F({larynx:s.markets.hbd.tick,dollars:parseFloat(s.markets.hbd.tick)*l}))})),h().get("".concat(O,"api/recent/").concat(t,"_LARYNX?limit=1000%27")).then((function(e){var s=e.data,r=(new Date).getTime()-864e5,n=s.recent_trades.reduce((function(e,t){return t.trade_timestamp>r?e+Math.ceil(1e3*parseFloat(t.target_volume))/1e3:e}),0);L({larynx:n,dollars:n*("HIVE"===t?l:d)})}))}),[t,l,d]),(0,w.jsxs)("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 text-white text-xl",children:[(0,w.jsxs)("div",{className:"mx-3 flex flex-col justify-center items-center gap-3",children:[(0,w.jsx)("h1",{className:"px-5 py-2 bg-gray-500 rounded-xl",children:E("bid")}),(0,w.jsxs)("div",{className:"flex flex-col justify-center items-center text-md",children:[(0,w.jsxs)("h1",{className:"flex items-center gap-1",children:[(0,w.jsx)(g.egV,{})," ",p.larynx.toFixed(6)]}),(0,w.jsxs)("h1",{children:["$ ",p.dollars.toFixed(6)]})]})]}),(0,w.jsxs)("div",{className:"mx-3 flex flex-col justify-center items-center gap-3",children:[(0,w.jsx)("h1",{className:"px-5 py-2 bg-gray-500 rounded-xl",children:E("ask")}),(0,w.jsxs)("div",{className:"flex flex-col justify-center items-center text-md",children:[(0,w.jsxs)("h1",{className:"flex items-center gap-1",children:[(0,w.jsx)(g.egV,{})," ",b.larynx.toFixed(6)]})," ",(0,w.jsxs)("h1",{children:["$ ",b.dollars.toFixed(6)]})]})]}),(0,w.jsxs)("div",{className:"mx-3 flex flex-col justify-center items-center gap-3",children:[(0,w.jsx)("h1",{className:"px-5 py-2 bg-gray-500 rounded-xl",children:E("last")}),(0,w.jsxs)("div",{className:"flex flex-col justify-center items-center text-md",children:[(0,w.jsxs)("h1",{className:"flex items-center gap-1",children:[(0,w.jsx)(g.egV,{})," ",N.larynx]}),(0,w.jsxs)("h1",{children:["$ ",N.dollars.toFixed(6)]})]})]}),(0,w.jsxs)("div",{className:"mx-3 flex flex-col justify-center items-center gap-3",children:[(0,w.jsx)("h1",{className:"px-5 py-2 bg-gray-500 rounded-xl",children:E("hourVolume")}),(0,w.jsxs)("div",{className:"flex flex-col justify-center items-center text-md",children:[(0,w.jsxs)("h1",{className:"flex items-center gap-1",children:[(0,w.jsx)(g.egV,{})," ",S.larynx.toFixed(2)]}),(0,w.jsxs)("h1",{children:["$ ",S.dollars.toFixed(2)]})]})]})]})},_=function(e){var t=e.order,s=e.i,n=e.orders,a=t.type.split(":")[0].toUpperCase(),l=t.type.split(":")[1],i=(0,r.useState)(""),c=i[0],o=i[1];return console.log(t),(0,r.useEffect)((function(){var e=0;n.forEach((function(t,r){r<=s&&(e+="HIVE"===a?parseFloat(parseFloat((+t.hivenai.amount/Math.pow(10,t.hivenai.precision)).toString()).toFixed(t.hivenai.precision)):parseFloat(parseFloat((+t.hbdnai.amount/Math.pow(10,t.hbdnai.precision)).toString()).toFixed(t.hbdnai.precision)))})),o(e.toFixed(2))}),[a]),"sell"===l?(0,w.jsxs)("div",{className:"".concat(s%2===0?"bg-gray-500":""," grid grid-cols-4 gap-5 my-1 px-2 py-1"),children:[(0,w.jsx)("h1",{children:parseFloat(t.rate).toFixed(6)}),(0,w.jsx)("h1",{children:parseFloat(parseFloat((+t.amountnai.amount/Math.pow(10,t.amountnai.precision)).toString()).toFixed(t.amountnai.precision)).toFixed(2)}),(0,w.jsx)("h1",{children:"HIVE"===a?parseFloat(parseFloat((+t.hivenai.amount/Math.pow(10,t.hivenai.precision)).toString()).toFixed(t.hivenai.precision)).toFixed(2):parseFloat(parseFloat((+t.hbdnai.amount/Math.pow(10,t.hbdnai.precision)).toString()).toFixed(t.hbdnai.precision)).toFixed(2)}),(0,w.jsx)("h1",{children:c})]}):(0,w.jsxs)("div",{className:"".concat(s%2===0?"bg-gray-500":""," grid grid-cols-4 gap-5 my-1 px-2 py-1"),children:[(0,w.jsx)("h1",{children:c}),(0,w.jsx)("h1",{children:"HIVE"===a?parseFloat(parseFloat((+t.hivenai.amount/Math.pow(10,t.hivenai.precision)).toString()).toFixed(t.hivenai.precision)).toFixed(2):parseFloat(parseFloat((+t.hbdnai.amount/Math.pow(10,t.hbdnai.precision)).toString()).toFixed(t.hbdnai.precision)).toFixed(2)}),(0,w.jsx)("h1",{children:parseFloat(parseFloat((+t.amountnai.amount/Math.pow(10,t.amountnai.precision)).toString()).toFixed(t.amountnai.precision)).toFixed(2)}),(0,w.jsx)("h1",{children:parseFloat(t.rate).toFixed(6)})]})},I=function(e){var t=e.type,s=e.coin,l=(0,r.useState)([]),i=l[0],c=l[1],o=(0,n.sJ)(a.H3),d=(0,A.$G)().t;return(0,r.useEffect)((function(){h().get("".concat(o,"dex")).then((function(e){var r=e.data.markets;r&&r.hive&&r.hbd&&c("HIVE"===s?"buy"===t?r.hive.buys.length<=1?r.hive.buys.sort((function(e,t){return parseFloat(e.rate)<parseFloat(t.rate)?-1:1})):r.hive.buys.sort((function(e,t){return parseFloat(e.rate)>parseFloat(t.rate)?-1:1})):(r.hive.sells.length,r.hive.sells.sort((function(e,t){return parseFloat(e.rate)<parseFloat(t.rate)?-1:1}))):"sell"===t?(r.hbd.sells.length,r.hbd.sells.sort((function(e,t){return parseFloat(e.rate)<parseFloat(t.rate)?-1:1}))):r.hbd.buys.length<=1?r.hbd.buys.sort((function(e,t){return parseFloat(e.rate)<parseFloat(t.rate)?-1:1})):r.hbd.buys.sort((function(e,t){return parseFloat(e.rate)>parseFloat(t.rate)?-1:1})))}))}),[s]),(0,w.jsxs)("div",{className:"text-white text-xl w-full",children:[(0,w.jsxs)("div",{className:"flex gap-3",children:[(0,w.jsx)("h1",{className:"sell"===t?"text-red-500":"text-green-500",children:d(t)}),(0,w.jsx)("h1",{children:d("orders")})]}),(0,w.jsx)("div",{className:"grid grid-cols-4 gap-5 mt-3",children:"sell"===t?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("h1",{children:[d("ask").toUpperCase()," (",s,")"]}),(0,w.jsx)("h1",{children:"LARYNX"}),(0,w.jsxs)("h1",{children:[d("total").toUpperCase()," (",s,")"]}),(0,w.jsxs)("h1",{children:[d("depth").toUpperCase()," (",s,")"]})]}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("h1",{children:[d("depth").toUpperCase()," (",s,")"]}),(0,w.jsxs)("h1",{children:[d("total").toUpperCase()," (",s,")"]}),(0,w.jsx)("h1",{children:"LARYNX"}),(0,w.jsxs)("h1",{children:[d("bid").toUpperCase()," (",s,")"]})]})}),(0,w.jsx)("div",{className:"mt-2",children:i&&i.map((function(e,t){return(0,w.jsx)(_,{i:t,order:e,orders:i})}))})]})},M=s(53817),U=function(e){var t=e.transaction,s=e.i,r=(0,M.aM)().isMobile;return(0,w.jsxs)("div",{className:"".concat(s%2===0?"bg-gray-500":""," text-xl px-2 py-1 grid grid-cols-4 sm:grid-cols-5"),children:[!r&&(0,w.jsx)("h1",{className:"w-2/3",children:new Date(t.trade_timestamp).toUTCString()}),(0,w.jsx)("h1",{className:"buy"===t.type?"text-green-500":"text-red-500",children:t.type.toUpperCase()}),(0,w.jsx)("h1",{children:Number(parseFloat(t.base_volume).toFixed(5))}),(0,w.jsx)("h1",{children:Number(parseFloat(t.price).toFixed(5))}),(0,w.jsx)("h1",{children:(parseFloat(t.base_volume)*parseFloat(t.price)).toFixed(3)})]})},B=function(e){var t=e.coin,s=(0,M.aM)().isMobile,l=(0,r.useState)("HIVE_DLUX"),i=l[0],c=l[1],o=(0,r.useState)([]),d=o[0],x=o[1],u=(0,n.sJ)(a.H3),m=(0,A.$G)().t;return(0,r.useEffect)((function(){h().get("".concat(u,"api/pairs")).then((function(e){var s=e.data;c("HIVE"===t?s[0].ticker_id:s[1].ticker_id)}))}),[]),(0,r.useEffect)((function(){i&&h().get("".concat(u,"api/historical/").concat(i,"?depth=200")).then((function(e){var t=e.data;if(t.buy){var s=t.buy.concat(t.sell).sort((function(e,t){return t.trade_timestamp-e.trade_timestamp}));x(s)}}))}),[i]),(0,w.jsxs)("div",{className:"flex flex-col text-white",children:[(0,w.jsx)("h1",{className:"text-xl",children:m("tradeHistory")}),(0,w.jsxs)("div",{className:"grid mt-2 mb-1 text-xl grid-cols-4 sm:grid-cols-5",children:[!s&&(0,w.jsx)("h1",{children:m("date").toUpperCase()}),(0,w.jsx)("h1",{children:m("type").toUpperCase()}),(0,w.jsx)("h1",{children:"LARYNX"}),(0,w.jsx)("h1",{children:t}),(0,w.jsxs)("h1",{children:[m("total").toUpperCase()," (",t,")"]})]}),d.map((function(e,t){return(0,w.jsx)(U,{transaction:e,i:t})}))]})},J=s(71734),G=s(86371),Z=s(24313),T=s(79842),K=s(48296),$=s(62818),W=s(30797),z=s(53678),q=s(37079),Q=s(88709),ee=s(84417),te=s(52153),se=s(75006),re=s(21703),ne=s(54464),ae=s(20212),le=s(42891),ie=s(77846),ce=s(87253),oe=s(99176);function de(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function xe(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?de(Object(s),!0).forEach((function(t){(0,m.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):de(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var ue=[{value:"60000",label:"1m"},{value:"300000",label:"5m"},{value:"900000",label:"15m"},{value:"3600000",label:"1h"},{value:"14400000",label:"4h"},{value:"86400000",label:"1d"}],he=function(e){var t=e.coin,s=(0,r.useState)(),l=s[0],i=s[1],c=(0,r.useState)("60000"),o=c[0],d=c[1],x=(0,n.sJ)(a.H3),u=(0,M.aM)(),h=u.isTablet,m=u.isSmDesktop,p=u.isDesktop,f=u.isDesktopLg;(0,r.useEffect)((function(){(0,j.wN)(t.toLowerCase(),o,x).then((function(e){i(e)}))}),[t,o]);var g=(0,Z.S)().inputDateAccessor((function(e){return new Date(e.date)})),b=h?490:m?700:p?900:f?1500:1250,y={left:0,right:48,top:0,bottom:24},v=(0,T.Z)(),N=g(null!==l&&void 0!==l?l:[]),F=N.data,k=N.xScale,S=N.xAccessor,L=N.displayXAccessor,E=(0,J.WU)(".2f"),O=S(F[F.length-1]),C=[S(F[Math.max(0,F.length-100)]),O+5],A=700-y.top-y.bottom,V=100,X=A/4,D=A-V,H=(0,G.i$)("%d %b"),P=function(e){return e.close>e.open?"#26a69a":"#ef5350"};return F.length?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{className:"flex my-5 justify-center w-full",children:(0,w.jsx)("div",{className:"bg-gray-500 p-5 rounded-xl",children:(0,w.jsxs)(K.U,{height:700,ratio:3,width:b,margin:y,data:F,displayXAccessor:L,seriesName:"Data",xScale:k,xAccessor:S,xExtents:C,zoomAnchor:$.af,children:[(0,w.jsx)(W.k,{id:2,height:X,origin:function(e,t){return[0,t-X-V]},yExtents:function(e){return e.volume},children:(0,w.jsx)(z.Q,{fillStyle:function(e){return e.close>e.open?"rgba(38, 166, 154, 0.3)":"rgba(239, 83, 80, 0.3)"},yAccessor:function(e){return e.volume}})}),(0,w.jsxs)(W.k,{id:3,height:D,yExtents:function(e){return[e.high,e.low]},children:[(0,w.jsx)(q.K,{showGridLines:!0,showTickLabel:!1}),(0,w.jsx)(Q.B,{showGridLines:!0,tickFormat:E}),(0,w.jsx)(ee.$,{}),(0,w.jsx)(te.i,{rectWidth:y.right,displayFormat:E}),(0,w.jsx)(se.x,{itemType:"last",rectWidth:y.right,fill:P,lineStroke:P,displayFormat:E,yAccessor:function(e){return e.close}}),(0,w.jsx)(re.M,xe({},{fill:"#383E55",fillOpacity:.75,strokeWidth:0,textFill:"#9EAAC7"})),(0,w.jsx)(ne.X,{textFill:P,origin:[8,16]})]}),(0,w.jsxs)(W.k,{id:4,height:V,yExtents:[0,v.accessor()],origin:function(e,t){return[0,t-V]},padding:{top:8,bottom:8},children:[(0,w.jsx)(q.K,{showGridLines:!0,gridLinesStrokeStyle:"#e0e3eb"}),(0,w.jsx)(Q.B,{ticks:4,tickFormat:E}),(0,w.jsx)(ae._,{displayFormat:H}),(0,w.jsx)(te.i,{rectWidth:y.right,displayFormat:E}),(0,w.jsx)(le.r,{yAccessor:v.accessor()}),(0,w.jsx)(ie.Z,{yAccessor:v.accessor(),yLabel:"Elder Ray",yDisplayFormat:function(e){return"".concat(E(e.bullPower),", ").concat(E(e.bearPower))},origin:[8,16]})]}),(0,w.jsx)(ce.M,{})]})})}),(0,w.jsx)("div",{className:"mx-auto max-w-sm",children:(0,w.jsx)(oe.ZP,{defaultValue:ue[0],onChange:function(e){var t;d(null!==(t=null===e||void 0===e?void 0:e.value)&&void 0!==t?t:ue[0].value)},options:ue})})]}):(0,w.jsx)("div",{children:(0,w.jsx)("h1",{children:"Loading"})})},me=function(){var e=(0,M.aM)().isMobile,t=(0,r.useState)("HIVE"),s=t[0],l=t[1],i=(0,n.FV)(a.db),o=(0,c.Z)(i,2),d=(o[0],o[1]),x=(0,n.sJ)(a.H3);return(0,r.useEffect)((function(){h().get("".concat(x,"api/protocol")).then((function(e){var t=e.data;d(t.multisig)}))}),[]),(0,w.jsx)("div",{className:"flex w-full justify-center",children:(0,w.jsxs)("div",{className:"flex flex-col  justify-center items-center gap-9",children:[(0,w.jsxs)("div",{className:"flex justify-center",children:[(0,w.jsx)("button",{onClick:function(){return l("HIVE")},className:"p-2 ".concat("HIVE"===s&&"bg-gray-500"," rounded-l-full bg-gray-400 text-white transition-all"),children:"HIVE"}),(0,w.jsx)("button",{onClick:function(){return l("HBD")},className:"p-2 ".concat("HBD"===s&&"bg-gray-500"," rounded-r-full bg-gray-400 text-gray-200 transition-all"),children:"HBD"})]}),(0,w.jsxs)("div",{className:"flex flex-col sm:mx-10 bg-gray-400 mb-3 border-2 rounded-xl border-gray-200 p-5 justify-center",children:[(0,w.jsx)("div",{className:"flex flex-wrap justify-center",children:(0,w.jsx)(R,{coin:s})}),!e&&(0,w.jsx)(he,{coin:s}),(0,w.jsxs)("div",{className:"flex flex-col my-5 gap-2 md:flex-row md:justify-between md:gap-10",children:[(0,w.jsx)(Y,{coin:s,type:"buy"}),(0,w.jsx)(Y,{coin:s,type:"sell"})]}),(0,w.jsxs)("div",{className:"flex flex-col gap-2 xl:flex-row xl:gap-10 w-full mb-4",children:[(0,w.jsx)(I,{coin:s,type:"buy"}),(0,w.jsx)(I,{coin:s,type:"sell"})]}),(0,w.jsx)("div",{className:"mt-5",children:(0,w.jsx)(B,{coin:s})})]})]})})},pe=s(5152),fe=s(76467),ge=function(){var e=(0,n.sJ)(a.KL),t=(0,n.sJ)(a.c9);return(0,w.jsxs)("div",{children:[(0,w.jsx)("title",{children:e?"Inv-".concat(e.name):"Inventory"}),e&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(l.LP,{}),(0,w.jsxs)("div",{className:"",children:["tokens"===t&&(0,w.jsx)(V,{}),"open_orders"===t&&(0,w.jsx)(P,{}),"dex"===t&&(0,w.jsx)(fe.default,{children:(0,w.jsx)(me,{})})]})]})]})},je=(0,pe.default)((function(){return Promise.resolve(ge)}),{ssr:!1})},45301:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(21113)}])}},function(e){e.O(0,[774,13,617,874,712,888,179],(function(){return t=45301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);