(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{28467:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return ve}});var n=s(67294),r=s(2804),a=s(63569),l=s(40364),i=s(30266),o=s(80318),c=s(65523),d=s(809),u=s.n(d),x=s(9669),h=s.n(x),m=s(92809),f=s(8193),p=s(53854),g=s(47516),j=s(89583),b=s(43196),y=s(83789),v=s(94649),N=s(86733),w=s(88943),F=s(85893),k=function(e){var t=e.handleClose,s=e.balance,n=e.up,l=void 0===n||n,i=(0,r.sJ)(a.KL),c=(0,r.FV)(a.D2),d=(0,o.Z)(c,2),u=(d[0],d[1]);return(0,F.jsxs)(w.A,{handleClose:t,children:[(0,F.jsx)("h1",{className:"text-xl mb-2",children:l?"Lock LARYNX for Governance Ops":"Unlock Governance Tokens"}),(0,F.jsx)(v.J9,{initialValues:{amount:s},validate:function(e){var t={};return e.amount>s&&(t.amount="Not enough ".concat(l?"LARYNX":"GOV")),t},onSubmit:function(e,s){var n=e.amount,r=s.setSubmitting;i&&(0,b.pP)(n,i.name,l).then((function(e){e&&e.success&&u((function(t){return[].concat((0,y.Z)(t),[e])}))})),r(!1),t()},children:function(e){var t=e.values,n=e.errors,r=e.touched,a=e.handleChange,i=e.handleBlur,o=e.handleSubmit;return(0,F.jsxs)("form",{onSubmit:o,children:[(0,F.jsxs)("div",{className:"mt-2 relative",children:[(0,F.jsx)(N.y,{title:"Amount (".concat(s||"0.000"," ").concat(l?"LARYNX":"GOV",")"),name:"amount",type:"number",errors:n.amount,handleBlur:i,handleChange:a,touched:r.amount,value:t.amount}),(0,F.jsx)("div",{className:"absolute top-8 right-9",children:(0,F.jsx)("img",{src:"https://www.dlux.io/img/dlux-hive-logo-alpha.svg",width:25,height:25,alt:"logo"})})]}),(0,F.jsx)("button",{type:"submit",className:"px-2 py-1 mx-auto mt-5 flex items-center gap-3 rounded-lg border-2 text-white bg-gradient-to-b from-red-500 to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600",children:l?(0,F.jsxs)("h1",{className:"flex gap-4 items-center",children:["Lock LARYNX ",(0,F.jsx)(j.kUi,{})]}):(0,F.jsxs)("h1",{className:"flex gap-4 items-center",children:["Unlock GOV ",(0,F.jsx)(j.D5B,{})]})})]})}})]})},S=function(e){var t=e.handleClose,s=e.balance,n=e.currency,l=(0,r.sJ)(a.KL),i=(0,r.FV)(a.D2),c=(0,o.Z)(i,2),d=(c[0],c[1]);return(0,F.jsxs)(w.A,{handleClose:t,children:[(0,F.jsxs)("h1",{className:"text-xl mb-2",children:["Send ",n]}),(0,F.jsx)(v.J9,{initialValues:{to:"",amount:s,memo:""},validate:function(e){var t=e.to,r=e.amount,a={};return t||(a.to="Required"),r>s&&(a.amount="Not enough ".concat(n)),a},onSubmit:function(e,s){var r=s.setSubmitting;l&&("LARYNX"===n?(0,b._D)(e,l.name).then((function(e){e&&e.success&&d((function(t){return[].concat((0,y.Z)(t),[e])}))})):(0,b.wM)(e,l.name).then((function(e){e&&e.success&&d((function(t){return[].concat((0,y.Z)(t),[e])}))}))),r(!1),t()},children:function(e){var t=e.values,r=e.errors,a=e.touched,l=e.handleChange,i=e.handleBlur,o=e.handleSubmit;return(0,F.jsxs)("form",{onSubmit:o,children:[(0,F.jsx)(N.y,{name:"to",errors:r.to,handleBlur:i,handleChange:l,touched:a.to,value:t.to}),(0,F.jsxs)("div",{className:"mt-2 relative",children:[(0,F.jsx)(N.y,{title:"Amount (".concat(s||"0.000"," ").concat(n,")"),name:"amount",type:"number",errors:r.amount,handleBlur:i,handleChange:l,touched:a.amount,value:t.amount}),(0,F.jsx)("div",{className:"absolute top-8 right-9",children:(0,F.jsx)("img",{src:"LARYNX"===n?"https://spk.network/static/media/SPK.4d91f7a0.png":"https://www.dlux.io/img/hextacular.svg",width:20,height:20,alt:"logo"})})]}),(0,F.jsx)("div",{className:"mt-2",children:(0,F.jsx)(N.y,{name:"memo",errors:r.memo,handleBlur:i,handleChange:l,touched:a.memo,value:t.memo})}),(0,F.jsxs)("button",{type:"submit",className:"px-2 py-1 mx-auto mt-5 flex items-center gap-3 rounded-lg border-2 text-white bg-gradient-to-b ".concat("LARYNX"===n?"from-red-500 to-blue-500":"from-white to-red-500"," focus:outline-none focus:ring-2 focus:ring-blue-600"),children:["Send",(0,F.jsx)(g.VLC,{size:"1.5rem"})]})]})}})]})},L=s(99176),C=s(45051),E=function(e){var t=e.handleClose,s=e.balance,l=(0,r.sJ)(a.H3),i=(0,r.sJ)(a.uo),o=(0,r.sJ)(a.KL),c=(0,n.useState)(""),d=c[0],u=c[1],x=(0,n.useState)([]),m=x[0],f=x[1];return(0,n.useEffect)((function(){h().get("".concat(l,"markets")).then((function(e){var t=e.data;console.log(t.markets.node),f(Object.keys(t.markets.node).map((function(e){return{label:e,value:e}})))}))}),[]),(0,F.jsxs)(w.A,{handleClose:t,children:[(0,F.jsx)("h1",{className:"text-2xl mb-5",children:"Delegate LARYNXG"}),(0,F.jsx)(v.J9,{initialValues:{amount:0},validate:function(e){var t=e.amount,n={};return(!t||t>s)&&(n.amount="Not enough funds!"),n},onSubmit:function(e){var t=e.amount;(0,b.cl)(o.name,d,t,i).then((function(e){console.log(e)}))},children:function(e){var t=e.values,n=e.errors,r=e.touched,a=e.handleChange,l=e.handleBlur,i=e.handleSubmit;return(0,F.jsxs)("form",{className:"flex flex-col",onSubmit:i,children:[(0,F.jsx)("label",{className:"text-left mb-1 text-md",htmlFor:"start",children:"To"}),(0,F.jsx)(L.ZP,{styles:C.XR,defaultValue:m[0],options:m,onChange:function(e){return(null===e||void 0===e?void 0:e.value)&&u(e.value)},className:"mb-2"}),(0,F.jsx)(N.y,{type:"number",name:"amount",title:"Amount (".concat(s," LARYNXG)"),errors:n.amount,handleBlur:l,handleChange:a,touched:r.amount,value:t.amount,min:0}),(0,F.jsx)("button",{type:"submit",className:"rounded-lg mt-4 border border-white py-1 w-2/3 px-2 bg-gray-500 focus:ring-4 mx-auto focus:outline-none focus:ring-gray-700",children:"Delegate"})]})}})]})};function O(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function A(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?O(Object(s),!0).forEach((function(t){(0,m.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):O(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var V=function(e){var t=e.balance,s=(0,r.sJ)(a.KL),l=(0,r.sJ)(a.H3),i=(0,n.useState)(!1),o=i[0],c=i[1],d=(0,n.useState)(!1),u=d[0],x=d[1],m=(0,n.useState)({show:!1,up:!1}),y=m[0],v=m[1],N=(0,n.useState)(!1),w=N[0],L=N[1],C=(0,n.useState)(!1),O=C[0],V=C[1],D=(0,n.useState)({availiblePerMonth:0,lastClaim:"Feburary",totalClaims:""}),X=D[0],H=D[1];return(0,n.useEffect)((function(){h().get("".concat(l,"@").concat(s.name)).then((function(e){var t=e.data,s=(0,b.Mu)(t.drop);H({availiblePerMonth:t.drop.availible.amount/Math.pow(10,t.drop.availible.precision),lastClaim:s.slice(-1)[0],totalClaims:s.join(", ")})})),h().get("".concat(l,"markets")).then((function(e){var t=e.data;Object.keys(t.markets.node).includes(s.name)&&x(!0)}))}),[]),(0,F.jsxs)("div",{className:"flex flex-col mt-3 pt-3 border-t-2 border-gray-300",children:[w&&(0,F.jsx)(E,{balance:t.GOV,handleClose:function(){return L(!1)}}),o&&(0,F.jsx)(S,{currency:"LARYNX",balance:t.LARYNX/1e3,handleClose:function(){return c(!1)}}),y.show&&(0,F.jsx)(k,{balance:y.up?t.LARYNX/1e3:t.GOV,handleClose:function(){return v(A(A({},y),{},{show:!1}))},up:y.up}),(0,F.jsxs)("div",{className:"flex flex-col sm:flex-row justify-between gap-5",children:[(0,F.jsxs)("div",{children:[(0,F.jsxs)("h1",{children:["LARYNX Token (",t.LARYNX?t.LARYNX/1e3:"0.000"," ","Bal)"]}),(0,F.jsx)("h1",{className:"pl-2 text-gray-600",children:"Miner token for SPK Network."})]}),(0,F.jsx)("div",{className:"flex items-center",children:(0,F.jsxs)("button",{onClick:function(){return c(!0)},className:"px-4 py-3 flex items-center gap-3 rounded-lg border-2 text-white bg-gradient-to-b from-red-500 to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600",children:["Send",(0,F.jsx)(g.VLC,{size:"1.5rem"})]})})]}),!u&&(0,F.jsxs)("div",{className:"flex flex-col sm:flex-row justify-between gap-10 border-t-2 border-gray-300 mt-2 pt-2",children:[(0,F.jsxs)("div",{children:[(0,F.jsxs)("h1",{children:["LARYNXG (",t.GOV?t.GOV/1e3:"0.000"," Bal)"]}),(0,F.jsxs)("h1",{className:"text-gray-600 pl-2",children:["Stake and run SCC node for DEX rewards.",(0,F.jsxs)("ul",{className:"list-disc ml-8",children:[(0,F.jsx)("li",{children:"Increased rewards from DEX"}),(0,F.jsx)("li",{children:"Instant Power Up"}),(0,F.jsx)("li",{children:"4 Week Power Down"}),(0,F.jsx)("li",{children:"1 Week Convert"})]})]})]}),(0,F.jsxs)("div",{className:"flex relative flex-col items-center lg:items-end",children:[(0,F.jsxs)("button",{onClick:function(){return V(!O)},className:"px-3 py-3 flex items-center gap-3 rounded-lg border-2 text-white bg-transparent border-gray-700 bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",children:["Actions"," ",O?(0,F.jsx)(f.N9e,{}):(0,F.jsx)(f.w4J,{})]}),O&&(0,F.jsxs)("div",{className:"bg-gray-600 rounded-xl p-3 absolute top-14",children:[(0,F.jsxs)("button",{onClick:function(){return v({show:!0,up:!0})},className:"flex justify-between items-center whitespace-nowrap bg-gray-500 w-full px-2 py-1 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-700",children:["Lock ",(0,F.jsx)(j.kUi,{})]}),(0,F.jsxs)("button",{onClick:function(){return v({show:!0,up:!1})},className:"flex mt-2 items-center whitespace-nowrap justify-between bg-gray-500 w-full px-2 py-1 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-700",children:["Unlock ",(0,F.jsx)(j.D5B,{})]}),(0,F.jsxs)("button",{onClick:function(){return L(!0)},className:"flex mt-2 items-center whitespace-nowrap justify-between gap-2 bg-gray-500 w-full px-2 py-1 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-700",children:["Delegate ",(0,F.jsx)(p.TSD,{})]})]})]})]}),(0,F.jsxs)("div",{className:"flex-col sm:flex-row justify-between gap-10 border-t-2 border-gray-300 mt-2 pt-2",children:[(0,F.jsx)("h1",{className:"mt-1 text-md",children:"Claim info:"}),(0,F.jsxs)("ul",{className:"text-gray-600 ml-3",children:[(0,F.jsx)("li",{children:"When can you claim: At the start of every month"}),(0,F.jsxs)("li",{children:["Available per month: ",X.availiblePerMonth," LARYNX"]}),(0,F.jsxs)("li",{children:["Last claim: ",X.lastClaim]}),(0,F.jsxs)("li",{children:["Total claims: ",X.totalClaims]})]})]})]})},D=function(e){var t=e.balance,s=(0,n.useState)(!1),l=s[0],i=s[1],c=(0,r.FV)(a.c9),d=(0,o.Z)(c,2),u=(d[0],d[1]);return(0,F.jsxs)("div",{className:"flex flex-col mt-3 pt-3 border-t-2 border-gray-300",children:[l&&(0,F.jsx)(S,{currency:"HIVE",balance:t,handleClose:function(){return i(!1)}}),(0,F.jsxs)("div",{className:"flex justify-between gap-5",children:[(0,F.jsxs)("div",{children:[(0,F.jsxs)("h1",{children:["HIVE Token (",t.toFixed(2)," Bal)"]}),(0,F.jsx)("h1",{className:"text-gray-600 pt-2",children:"HIVE is a DPoS blockchain with free transactions and a method to post and rate content."})]}),(0,F.jsx)("div",{className:"flex items-center",children:(0,F.jsxs)("button",{onClick:function(){return i(!0)},className:"px-4 py-3 flex items-center gap-3 rounded-lg border-2 text-white bg-gradient-to-b from-white to-red-500 focus:outline-none focus:ring-2 focus:ring-red-600",children:["Send",(0,F.jsx)(g.VLC,{size:"1.5rem"})]})})]}),(0,F.jsx)("div",{className:"mx-auto mb-3 mt-7",children:(0,F.jsxs)("button",{onClick:function(){return u("dex")},className:"px-4 py-3 flex items-center gap-3 rounded-lg border-2 text-white bg-gradient-to-b from-white to-red-500 focus:outline-none focus:ring-2 focus:ring-red-600",children:["Trade",(0,F.jsx)("img",{src:"https://www.dlux.io/img/dlux-hive-logo-alpha.svg",alt:"dlux_logo",width:30})]})})]})},X=function(e){var t=e.currency,s=e.balance;return(0,F.jsxs)("div",{className:"max-w-4xl mx-auto bg-gray-400 w-full px-5 py-3 text-white  rounded-xl border-2 border-gray-100",children:[(0,F.jsxs)("div",{className:"flex items-center justify-between",children:["DLUX"===t&&(0,F.jsx)("img",{src:"https://spk.network/static/media/SPK.4d91f7a0.png",width:45,height:45,alt:"logo"}),"HIVE"===t&&(0,F.jsx)("img",{src:"https://cryptologos.cc/logos/hive-blockchain-hive-logo.png",width:45,height:45,alt:"logo"}),(0,F.jsxs)("h1",{className:"text-xl mr-3",children:["HIVE"===t?s:s.LARYNX/1e3," ","DLUX"===t?"LARYNX":t]})]}),"DLUX"===t&&(0,F.jsx)(V,{balance:s}),"HIVE"===t&&(0,F.jsx)(D,{balance:s})]})},H=s(37039),P=function(e){(0,c.Z)(e);var t=(0,n.useState)({LARYNX:0,GOV:0}),s=t[0],l=t[1],d=(0,n.useState)(0),x=(d[0],d[1]),m=(0,r.FV)(a.Yt),f=(0,o.Z)(m,2),p=(f[0],f[1]),g=(0,r.sJ)(a.KL),j=(0,r.sJ)(a.H3),b=(0,H.$G)().t;return(0,n.useEffect)((function(){(0,i.Z)(u().mark((function e(){var t,s,n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(g?parseFloat(null===g||void 0===g||null===(t=g.balance)||void 0===t?void 0:t.split(" ")[0]):0),e.next=3,h().get("".concat(j,"@").concat(g.name));case 3:r=e.sent,a=r.data,l({LARYNX:parseFloat(a.balance),GOV:parseFloat(a.gov)}),p({LARYNX:parseFloat(a.balance)/1e3,HIVE:g?parseFloat(null===g||void 0===g||null===(s=g.balance)||void 0===s?void 0:s.split(" ")[0]):0,HBD:g?parseFloat(null===g||void 0===g||null===(n=g.hbd_balance)||void 0===n?void 0:n.split(" ")[0]):0});case 7:case"end":return e.stop()}}),e)})))()}),[g]),(0,F.jsxs)("div",{className:"w-full",children:[(0,F.jsx)("h1",{className:"text-white text-xl mx-10 my-2 text-center",children:b("balances")}),(0,F.jsx)("div",{className:"grid grid-cols-1 gap-5 px-10",children:(0,F.jsx)(X,{currency:"DLUX",balance:s})})]})},R=s(63750);function Y(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function _(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(s),!0).forEach((function(t){(0,m.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):Y(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var I=function(){var e=(0,n.useState)([]),t=e[0],s=e[1],l=(0,r.sJ)(a.KL),o=(0,H.$G)().t,c=(0,r.sJ)(a.uo),d=(0,r.sJ)(a.H3);(0,n.useEffect)((function(){(0,i.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h().get("".concat(d,"@").concat(l.name));case 2:t=e.sent,(n=t.data).contracts.length&&(console.log(n.contracts),s(n.contracts.map((function(e){var t=0;if(e.partials){var s=e.partials.reduce((function(e,t){return e+t.coin}),0);t=s/(e.hive?e.hive:e.hbd+s)}return _(_({},e),{},{type:e.type.split(":")[1],fillPercent:t})}))));case 5:case"end":return e.stop()}}),e)})))()}),[]);var x=function(){var e=(0,i.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.wH)(l.name,t,c);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,F.jsx)("div",{className:"mx-10 my-2",children:t.length?t.map((function(e,t){var s=e.amount,n=e.hive,r=e.hbd,a=e.rate,l=e.fee,i=e.txid,o=e.type,c=e.fillPercent;return(0,F.jsxs)("div",{className:"".concat(t%2!==0?"bg-transparent":"bg-gray-400"," p-2 px-4 flex justify-between align-center text-white"),children:[(0,F.jsxs)("div",{className:"items-center flex gap-4",children:[(0,F.jsx)("h1",{className:"sell"===o?"text-red-500":"text-green-500",children:"sell"===o?"SELL":"BUY"}),(0,F.jsxs)("h1",{children:[n?"HIVE":"HBD",":"," ",(0,F.jsx)("b",{children:n?parseFloat(parseFloat((+n/Math.pow(10,3)).toString()).toFixed(3)).toFixed(2):parseFloat(parseFloat((+r/Math.pow(10,3)).toString()).toFixed(3)).toFixed(2)})]}),(0,F.jsxs)("h1",{children:["LARYNX:"," ",(0,F.jsx)("b",{children:parseFloat(parseFloat((+s/Math.pow(10,3)).toString()).toFixed(3)).toFixed(2)})]}),(0,F.jsxs)("h1",{children:["PRICE:"," ",(0,F.jsxs)("b",{children:[a," ",n?"HIVE":"HBD"]})]}),(0,F.jsxs)("h1",{children:["FEE:"," ",(0,F.jsxs)("b",{children:[parseFloat(parseFloat((+l/Math.pow(10,3)).toString()).toFixed(3)).toFixed(2)," ","LARYNX"]})]}),(0,F.jsxs)("h1",{children:["FILLED: ",(0,F.jsxs)("b",{children:[c,"%"]})]})]}),(0,F.jsx)("button",{onClick:function(){return x(i)},className:"px-4 py-2 rounded-lg border-2 text-white bg-red-500 border-red-600 focus:outline-none focus:ring-2 focus:ring-red-700",children:(0,F.jsx)(R.dnY,{})})]})})):(0,F.jsx)("h1",{className:"text-xl text-center text-white",children:o("no_open_orders")})})},M=function(e){var t=e.type,s=e.coin,l=(0,n.useState)("limit"),i=l[0],o=l[1],c=(0,n.useState)(0),d=c[0],u=c[1],x=(0,n.useState)(0),h=x[0],m=x[1],f=(0,r.sJ)(a.KL),p=(0,r.sJ)(a.uo),g=(0,r.sJ)(a.db),j=(0,H.$G)().t,y=(0,r.sJ)(a.Yt);return(0,F.jsxs)("div",{className:"flex flex-col md:w-20 flex-grow bg-gray-500 border-2 border-gray-300 p-3 rounded-md",children:[(0,F.jsxs)("div",{className:"text-white text-xl flex gap-3",children:[(0,F.jsx)("h1",{className:"sell"===t?"text-red-500":"text-green-500",children:j(t)}),(0,F.jsx)("h1",{children:"LARYNX"})]}),(0,F.jsxs)("div",{className:"flex flex-col sm:flex-row items-center  mr-5 justify-between mt-2 text-white font-light",children:[(0,F.jsx)("h1",{children:j("orderType")}),(0,F.jsxs)("div",{className:"flex justify-center",children:[(0,F.jsx)("button",{onClick:function(){return o("limit")},className:"p-2 ".concat("limit"===i&&"bg-gray-600"," rounded-l-full bg-gray-300 text-gray-400 transition-all"),children:j("limit")}),(0,F.jsx)("button",{onClick:function(){return o("market")},className:"p-2 ".concat("market"===i&&"bg-gray-600"," rounded-r-full bg-gray-300 text-gray-400 transition-all"),children:j("market")})]})]}),(0,F.jsxs)("div",{className:"flex text-white gap-3 flex-col mr-3 mt-5",children:["limit"===i&&(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between",children:[(0,F.jsxs)("div",{className:"flex flex-col mr-5",children:[(0,F.jsx)("h1",{children:j("qty")}),(0,F.jsx)("h1",{className:"font-light text-sm",children:"LARYNX"})]}),(0,F.jsx)("input",{min:0,step:.001,max:y.LARYNX,className:"rounded-xl outline-none w-1/2 px-3 py-1 bg-gray-300 text-gray-500",type:"number",value:d.toString().replace(/^0+/,""),onChange:function(e){return u(+e.target.value)}})]})}),"market"===i&&"sell"===t&&(0,F.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between",children:[(0,F.jsxs)("div",{className:"flex flex-col mr-5",children:[(0,F.jsx)("h1",{children:j("qty")}),(0,F.jsx)("h1",{className:"font-light text-sm",children:"LARYNX"})]}),(0,F.jsx)("input",{min:0,step:.001,max:y.LARYNX,className:"rounded-xl outline-none px-3 py-1 w-1/2 bg-gray-300 text-gray-500",type:"number",value:d.toString().replace(/^0+/,""),onChange:function(e){return u(+e.target.value)}})]}),"limit"===i&&"sell"===t&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between",children:[(0,F.jsxs)("div",{className:"flex flex-col mr-5",children:[(0,F.jsx)("h1",{children:j("total")}),(0,F.jsx)("h1",{className:"font-light text-sm",children:s})]}),(0,F.jsx)("input",{min:0,step:.001,max:y.HIVE,className:"rounded-xl outline-none px-3 py-1 w-1/2  bg-gray-300 text-gray-500",type:"number",value:h.toString().replace(/^0+/,""),onChange:function(e){return m(+e.target.value)}})]}),(0,F.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between",children:[(0,F.jsxs)("div",{className:"flex flex-col mr-5",children:[(0,F.jsx)("h1",{children:j("price")}),(0,F.jsx)("h1",{className:"font-light text-sm",children:s})]}),(0,F.jsx)("h1",{className:"rounded-xl outline-none px-3 py-1 w-1/2  bg-gray-300 text-gray-500",children:h&&d?(h/d).toFixed(3):0})]})]}),"buy"===t&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between",children:[(0,F.jsxs)("div",{className:"flex flex-col mr-5",children:[(0,F.jsx)("h1",{children:j("total")}),(0,F.jsx)("h1",{className:"font-light text-sm",children:s})]}),(0,F.jsx)("input",{step:.001,max:y.HIVE,className:"rounded-xl outline-none px-3 py-1 w-1/2 bg-gray-300 text-gray-500",type:"number",value:h.toString().replace(/^0+/,""),onChange:function(e){return m(+e.target.value)}})]}),(0,F.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between",children:[(0,F.jsxs)("div",{className:"flex flex-col mr-5",children:[(0,F.jsx)("h1",{children:j("price")}),(0,F.jsx)("h1",{className:"font-light text-sm",children:s})]}),(0,F.jsx)("h1",{className:"rounded-xl outline-none px-3 py-1 w-1/2  bg-gray-300 text-gray-500",children:h&&d?(h/d).toFixed(3):0})]})]})]}),(0,F.jsxs)("div",{className:"flex align-center px-4 justify-end",children:[(0,F.jsxs)("h1",{className:"text-white w-auto text-center",children:["Available:"," ",(0,F.jsx)("b",{children:"sell"===t?"".concat(y.LARYNX," LARYNX"):"".concat("HIVE"===s?y.HIVE.toFixed(2):y.HBD.toFixed(2)," ").concat(s)})]}),(0,F.jsx)("h1",{onClick:function(){return"sell"===t?u(y.LARYNX):m("HIVE"===s?y.HIVE:y.HBD)},className:"pl-2 text-white hover:text-gray-400 cursor-pointer transition-all",children:"(MAX)"})]}),(0,F.jsx)("div",{className:"flex justify-end",children:(0,F.jsx)("button",{onClick:function(){"sell"===t&&"market"===i?(0,b.SN)({larynx:1e3*d,hive:0},f.name,p):"sell"===t&&"limit"===i?"HIVE"===s?(0,b.SN)({larynx:1e3*d,hive:1e3*h},f.name,p):(0,b.SN)({larynx:1e3*d,hbd:1e3*h},f.name,p):"buy"===t&&"market"===i?(0,b.u4)({coin:s,amount:1e3*h,buyData:{hours:720}},f.name,g):"buy"===t&&"limit"===i&&(0,b.u4)({coin:s,amount:1e3*h,buyData:{rate:parseFloat((h/d).toFixed(6)),hours:720}},f.name,g)},className:"".concat("sell"===t?"bg-red-500 focus:ring-red-600":"bg-green-500 focus:ring-green-600"," text-white mx-4 mt-2 px-4 py-2 rounded-xl focus:ring-2 "),children:j(t)})})]})},J=function(e){var t=e.coin,s=(0,n.useState)(0),l=s[0],o=s[1],c=(0,n.useState)(0),d=c[0],x=c[1],m=(0,n.useState)({dollars:0,larynx:0}),f=m[0],p=m[1],g=(0,n.useState)({dollars:0,larynx:0}),b=g[0],y=g[1],v=(0,n.useState)({dollars:0,larynx:0}),N=v[0],w=v[1],k=(0,n.useState)({dollars:0,larynx:0}),S=k[0],L=k[1],C=(0,H.$G)().t,E=(0,r.sJ)(a.H3);return(0,n.useEffect)((function(){(0,i.Z)(u().mark((function e(){var t,s,n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h().get("https://api.coingecko.com/api/v3/coins/hive",{headers:{accept:"application/json"}});case 2:return t=e.sent,s=t.data,e.next=6,h().get("https://api.coingecko.com/api/v3/coins/hive_dollar",{headers:{accept:"application/json"}});case 6:n=e.sent,r=n.data,o(s.market_data.current_price.usd),x(r.market_data.current_price.usd);case 10:case"end":return e.stop()}}),e)})))()}),[]),(0,n.useEffect)((function(){h().get("".concat(E,"dex")).then((function(e){var s=e.data;"HIVE"===t?(s.markets.hive.sells.length&&s.markets.hive.buys.length?(p({larynx:parseFloat(s.markets.hive.buys[s.markets.hive.buys.length-1].rate),dollars:l*s.markets.hive.buys[s.markets.hive.buys.length-1].rate}),y({larynx:parseFloat(s.markets.hive.sells[0].rate),dollars:l*s.markets.hive.sells[0].rate})):(p({larynx:0,dollars:0}),y({larynx:0,dollars:0})),w({larynx:s.markets.hive.tick,dollars:parseFloat(s.markets.hive.tick)*l})):"HBD"===t&&(s.markets.hbd.sells.length&&s.markets.hbd.buys.length?(p({larynx:parseFloat(s.markets.hbd.buys[s.markets.hbd.buys.length-1].rate),dollars:d*s.markets.hbd.buys[s.markets.hbd.buys.length-1].rate}),y({larynx:parseFloat(s.markets.hbd.sells[0].rate),dollars:d*s.markets.hbd.sells[0].rate})):(p({larynx:0,dollars:0}),y({larynx:0,dollars:0})),w({larynx:s.markets.hbd.tick,dollars:parseFloat(s.markets.hbd.tick)*l}))})),h().get("".concat(E,"api/recent/").concat(t,"_LARYNX?limit=1000%27")).then((function(e){var s=e.data,n=(new Date).getTime()-864e5,r=s.recent_trades.reduce((function(e,t){return t.trade_timestamp>n?e+Math.ceil(1e3*parseFloat(t.target_volume))/1e3:e}),0);L({larynx:r,dollars:r*("HIVE"===t?l:d)})}))}),[t,l,d]),(0,F.jsxs)("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 text-white text-xl",children:[(0,F.jsxs)("div",{className:"mx-3 flex flex-col justify-center items-center gap-3",children:[(0,F.jsx)("h1",{className:"px-5 py-2 bg-gray-500 rounded-xl",children:C("bid")}),(0,F.jsxs)("div",{className:"flex flex-col justify-center items-center text-md",children:[(0,F.jsxs)("h1",{className:"flex items-center gap-1",children:[(0,F.jsx)(j.egV,{})," ",f.larynx.toFixed(6)]}),(0,F.jsxs)("h1",{children:["$ ",f.dollars.toFixed(6)]})]})]}),(0,F.jsxs)("div",{className:"mx-3 flex flex-col justify-center items-center gap-3",children:[(0,F.jsx)("h1",{className:"px-5 py-2 bg-gray-500 rounded-xl",children:C("ask")}),(0,F.jsxs)("div",{className:"flex flex-col justify-center items-center text-md",children:[(0,F.jsxs)("h1",{className:"flex items-center gap-1",children:[(0,F.jsx)(j.egV,{})," ",b.larynx.toFixed(6)]})," ",(0,F.jsxs)("h1",{children:["$ ",b.dollars.toFixed(6)]})]})]}),(0,F.jsxs)("div",{className:"mx-3 flex flex-col justify-center items-center gap-3",children:[(0,F.jsx)("h1",{className:"px-5 py-2 bg-gray-500 rounded-xl",children:C("last")}),(0,F.jsxs)("div",{className:"flex flex-col justify-center items-center text-md",children:[(0,F.jsxs)("h1",{className:"flex items-center gap-1",children:[(0,F.jsx)(j.egV,{})," ",N.larynx]}),(0,F.jsxs)("h1",{children:["$ ",N.dollars.toFixed(6)]})]})]}),(0,F.jsxs)("div",{className:"mx-3 flex flex-col justify-center items-center gap-3",children:[(0,F.jsx)("h1",{className:"px-5 py-2 bg-gray-500 rounded-xl",children:C("hourVolume")}),(0,F.jsxs)("div",{className:"flex flex-col justify-center items-center text-md",children:[(0,F.jsxs)("h1",{className:"flex items-center gap-1",children:[(0,F.jsx)(j.egV,{})," ",S.larynx.toFixed(2)]}),(0,F.jsxs)("h1",{children:["$ ",S.dollars.toFixed(2)]})]})]})]})},U=function(e){var t=e.order,s=e.i,r=e.orders,a=t.type.split(":")[0].toUpperCase(),l=t.type.split(":")[1],i=(0,n.useState)(""),o=i[0],c=i[1];return console.log(t),(0,n.useEffect)((function(){var e=0;r.forEach((function(t,n){n<=s&&(e+="HIVE"===a?parseFloat(parseFloat((+t.hivenai.amount/Math.pow(10,t.hivenai.precision)).toString()).toFixed(t.hivenai.precision)):parseFloat(parseFloat((+t.hbdnai.amount/Math.pow(10,t.hbdnai.precision)).toString()).toFixed(t.hbdnai.precision)))})),c(e.toFixed(2))}),[a]),"sell"===l?(0,F.jsxs)("div",{className:"".concat(s%2===0?"bg-gray-500":""," grid grid-cols-4 gap-5 my-1 px-2 py-1"),children:[(0,F.jsx)("h1",{children:parseFloat(t.rate).toFixed(6)}),(0,F.jsx)("h1",{children:parseFloat(parseFloat((+t.amountnai.amount/Math.pow(10,t.amountnai.precision)).toString()).toFixed(t.amountnai.precision)).toFixed(2)}),(0,F.jsx)("h1",{children:"HIVE"===a?parseFloat(parseFloat((+t.hivenai.amount/Math.pow(10,t.hivenai.precision)).toString()).toFixed(t.hivenai.precision)).toFixed(2):parseFloat(parseFloat((+t.hbdnai.amount/Math.pow(10,t.hbdnai.precision)).toString()).toFixed(t.hbdnai.precision)).toFixed(2)}),(0,F.jsx)("h1",{children:o})]}):(0,F.jsxs)("div",{className:"".concat(s%2===0?"bg-gray-500":""," grid grid-cols-4 gap-5 my-1 px-2 py-1"),children:[(0,F.jsx)("h1",{children:o}),(0,F.jsx)("h1",{children:"HIVE"===a?parseFloat(parseFloat((+t.hivenai.amount/Math.pow(10,t.hivenai.precision)).toString()).toFixed(t.hivenai.precision)).toFixed(2):parseFloat(parseFloat((+t.hbdnai.amount/Math.pow(10,t.hbdnai.precision)).toString()).toFixed(t.hbdnai.precision)).toFixed(2)}),(0,F.jsx)("h1",{children:parseFloat(parseFloat((+t.amountnai.amount/Math.pow(10,t.amountnai.precision)).toString()).toFixed(t.amountnai.precision)).toFixed(2)}),(0,F.jsx)("h1",{children:parseFloat(t.rate).toFixed(6)})]})},B=function(e){var t=e.type,s=e.coin,l=(0,n.useState)([]),i=l[0],o=l[1],c=(0,r.sJ)(a.H3),d=(0,H.$G)().t;return(0,n.useEffect)((function(){h().get("".concat(c,"dex")).then((function(e){var n=e.data.markets;n&&n.hive&&n.hbd&&o("HIVE"===s?"buy"===t?n.hive.buys.length<=1?n.hive.buys.sort((function(e,t){return parseFloat(e.rate)<parseFloat(t.rate)?-1:1})):n.hive.buys.sort((function(e,t){return parseFloat(e.rate)>parseFloat(t.rate)?-1:1})):(n.hive.sells.length,n.hive.sells.sort((function(e,t){return parseFloat(e.rate)<parseFloat(t.rate)?-1:1}))):"sell"===t?(n.hbd.sells.length,n.hbd.sells.sort((function(e,t){return parseFloat(e.rate)<parseFloat(t.rate)?-1:1}))):n.hbd.buys.length<=1?n.hbd.buys.sort((function(e,t){return parseFloat(e.rate)<parseFloat(t.rate)?-1:1})):n.hbd.buys.sort((function(e,t){return parseFloat(e.rate)>parseFloat(t.rate)?-1:1})))}))}),[s]),(0,F.jsxs)("div",{className:"text-white text-xl w-full",children:[(0,F.jsxs)("div",{className:"flex gap-3",children:[(0,F.jsx)("h1",{className:"sell"===t?"text-red-500":"text-green-500",children:d(t)}),(0,F.jsx)("h1",{children:d("orders")})]}),(0,F.jsx)("div",{className:"grid grid-cols-4 gap-5 mt-3",children:"sell"===t?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)("h1",{children:[d("ask").toUpperCase()," (",s,")"]}),(0,F.jsx)("h1",{children:"LARYNX"}),(0,F.jsxs)("h1",{children:[d("total").toUpperCase()," (",s,")"]}),(0,F.jsxs)("h1",{children:[d("depth").toUpperCase()," (",s,")"]})]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)("h1",{children:[d("depth").toUpperCase()," (",s,")"]}),(0,F.jsxs)("h1",{children:[d("total").toUpperCase()," (",s,")"]}),(0,F.jsx)("h1",{children:"LARYNX"}),(0,F.jsxs)("h1",{children:[d("bid").toUpperCase()," (",s,")"]})]})}),(0,F.jsx)("div",{className:"mt-2",children:i&&i.map((function(e,t){return(0,F.jsx)(U,{i:t,order:e,orders:i})}))})]})},G=s(53817),Z=function(e){var t=e.transaction,s=e.i,n=(0,G.aM)().isMobile;return(0,F.jsxs)("div",{className:"".concat(s%2===0?"bg-gray-500":""," text-xl px-2 py-1 grid grid-cols-4 sm:grid-cols-5"),children:[!n&&(0,F.jsx)("h1",{className:"w-2/3",children:new Date(t.trade_timestamp).toUTCString()}),(0,F.jsx)("h1",{className:"buy"===t.type?"text-green-500":"text-red-500",children:t.type.toUpperCase()}),(0,F.jsx)("h1",{children:Number(parseFloat(t.base_volume).toFixed(5))}),(0,F.jsx)("h1",{children:Number(parseFloat(t.price).toFixed(5))}),(0,F.jsx)("h1",{children:(parseFloat(t.base_volume)*parseFloat(t.price)).toFixed(3)})]})},T=function(e){var t=e.coin,s=(0,G.aM)().isMobile,l=(0,n.useState)("HIVE_DLUX"),i=l[0],o=l[1],c=(0,n.useState)([]),d=c[0],u=c[1],x=(0,r.sJ)(a.H3),m=(0,H.$G)().t;return(0,n.useEffect)((function(){h().get("".concat(x,"api/pairs")).then((function(e){var s=e.data;o("HIVE"===t?s[0].ticker_id:s[1].ticker_id)}))}),[]),(0,n.useEffect)((function(){i&&h().get("".concat(x,"api/historical/").concat(i,"?depth=200")).then((function(e){var t=e.data;if(t.buy){var s=t.buy.concat(t.sell).sort((function(e,t){return t.trade_timestamp-e.trade_timestamp}));u(s)}}))}),[i]),(0,F.jsxs)("div",{className:"flex flex-col text-white",children:[(0,F.jsx)("h1",{className:"text-xl",children:m("tradeHistory")}),(0,F.jsxs)("div",{className:"grid mt-2 mb-1 text-xl grid-cols-4 sm:grid-cols-5",children:[!s&&(0,F.jsx)("h1",{children:m("date").toUpperCase()}),(0,F.jsx)("h1",{children:m("type").toUpperCase()}),(0,F.jsx)("h1",{children:"LARYNX"}),(0,F.jsx)("h1",{children:t}),(0,F.jsxs)("h1",{children:[m("total").toUpperCase()," (",t,")"]})]}),d.map((function(e,t){return(0,F.jsx)(Z,{transaction:e,i:t})}))]})},K=s(71734),$=s(86371),W=s(24313),z=s(79842),q=s(48296),Q=s(62818),ee=s(30797),te=s(53678),se=s(37079),ne=s(88709),re=s(84417),ae=s(52153),le=s(75006),ie=s(21703),oe=s(54464),ce=s(20212),de=s(42891),ue=s(77846),xe=s(87253);function he(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function me(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?he(Object(s),!0).forEach((function(t){(0,m.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):he(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var fe=[{value:"60000",label:"1m"},{value:"300000",label:"5m"},{value:"900000",label:"15m"},{value:"3600000",label:"1h"},{value:"14400000",label:"4h"},{value:"86400000",label:"1d"}],pe=function(e){var t=e.coin,s=(0,n.useState)(),l=s[0],i=s[1],o=(0,n.useState)("60000"),c=o[0],d=o[1],u=(0,r.sJ)(a.H3),x=(0,G.aM)(),h=x.isTablet,m=x.isSmDesktop,f=x.isDesktop,p=x.isDesktopLg;(0,n.useEffect)((function(){(0,b.wN)(t.toLowerCase(),c,u).then((function(e){i(e)}))}),[t,c]);var g=(0,W.S)().inputDateAccessor((function(e){return new Date(e.date)})),j=h?490:m?700:f?900:p?1500:1250,y={left:0,right:48,top:0,bottom:24},v=(0,z.Z)(),N=g(null!==l&&void 0!==l?l:[]),w=N.data,k=N.xScale,S=N.xAccessor,C=N.displayXAccessor,E=(0,K.WU)(".2f"),O=S(w[w.length-1]),A=[S(w[Math.max(0,w.length-100)]),O+5],V=700-y.top-y.bottom,D=100,X=V/4,H=V-D,P=(0,$.i$)("%d %b"),R=function(e){return e.close>e.open?"#26a69a":"#ef5350"};return w.length?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("div",{className:"flex my-5 justify-center w-full",children:(0,F.jsx)("div",{className:"bg-gray-500 p-5 rounded-xl",children:(0,F.jsxs)(q.U,{height:700,ratio:3,width:j,margin:y,data:w,displayXAccessor:C,seriesName:"Data",xScale:k,xAccessor:S,xExtents:A,zoomAnchor:Q.af,children:[(0,F.jsx)(ee.k,{id:2,height:X,origin:function(e,t){return[0,t-X-D]},yExtents:function(e){return e.volume},children:(0,F.jsx)(te.Q,{fillStyle:function(e){return e.close>e.open?"rgba(38, 166, 154, 0.3)":"rgba(239, 83, 80, 0.3)"},yAccessor:function(e){return e.volume}})}),(0,F.jsxs)(ee.k,{id:3,height:H,yExtents:function(e){return[e.high,e.low]},children:[(0,F.jsx)(se.K,{showGridLines:!0,showTickLabel:!1}),(0,F.jsx)(ne.B,{showGridLines:!0,tickFormat:E}),(0,F.jsx)(re.$,{}),(0,F.jsx)(ae.i,{rectWidth:y.right,displayFormat:E}),(0,F.jsx)(le.x,{itemType:"last",rectWidth:y.right,fill:R,lineStroke:R,displayFormat:E,yAccessor:function(e){return e.close}}),(0,F.jsx)(ie.M,me({},{fill:"#383E55",fillOpacity:.75,strokeWidth:0,textFill:"#9EAAC7"})),(0,F.jsx)(oe.X,{textFill:R,origin:[8,16]})]}),(0,F.jsxs)(ee.k,{id:4,height:D,yExtents:[0,v.accessor()],origin:function(e,t){return[0,t-D]},padding:{top:8,bottom:8},children:[(0,F.jsx)(se.K,{showGridLines:!0,gridLinesStrokeStyle:"#e0e3eb"}),(0,F.jsx)(ne.B,{ticks:4,tickFormat:E}),(0,F.jsx)(ce._,{displayFormat:P}),(0,F.jsx)(ae.i,{rectWidth:y.right,displayFormat:E}),(0,F.jsx)(de.r,{yAccessor:v.accessor()}),(0,F.jsx)(ue.Z,{yAccessor:v.accessor(),yLabel:"Elder Ray",yDisplayFormat:function(e){return"".concat(E(e.bullPower),", ").concat(E(e.bearPower))},origin:[8,16]})]}),(0,F.jsx)(xe.M,{})]})})}),(0,F.jsx)("div",{className:"mx-auto max-w-sm",children:(0,F.jsx)(L.ZP,{defaultValue:fe[0],onChange:function(e){var t;d(null!==(t=null===e||void 0===e?void 0:e.value)&&void 0!==t?t:fe[0].value)},options:fe})})]}):(0,F.jsx)("div",{children:(0,F.jsx)("h1",{children:"Loading"})})},ge=function(){var e=(0,G.aM)().isMobile,t=(0,n.useState)("HIVE"),s=t[0],l=t[1],i=(0,r.FV)(a.db),c=(0,o.Z)(i,2),d=(c[0],c[1]),u=(0,r.sJ)(a.H3);return(0,n.useEffect)((function(){h().get("".concat(u,"api/protocol")).then((function(e){var t=e.data;d(t.multisig)}))}),[]),(0,F.jsx)("div",{className:"flex w-full justify-center",children:(0,F.jsxs)("div",{className:"flex flex-col  justify-center items-center gap-9",children:[(0,F.jsxs)("div",{className:"flex justify-center",children:[(0,F.jsx)("button",{onClick:function(){return l("HIVE")},className:"p-2 ".concat("HIVE"===s&&"bg-gray-500"," rounded-l-full bg-gray-400 text-white transition-all"),children:"HIVE"}),(0,F.jsx)("button",{onClick:function(){return l("HBD")},className:"p-2 ".concat("HBD"===s&&"bg-gray-500"," rounded-r-full bg-gray-400 text-gray-200 transition-all"),children:"HBD"})]}),(0,F.jsxs)("div",{className:"flex flex-col sm:mx-10 bg-gray-400 mb-3 border-2 rounded-xl border-gray-200 p-5 justify-center",children:[(0,F.jsx)("div",{className:"flex flex-wrap justify-center",children:(0,F.jsx)(J,{coin:s})}),!e&&(0,F.jsx)(pe,{coin:s}),(0,F.jsxs)("div",{className:"flex flex-col my-5 gap-2 md:flex-row md:justify-between md:gap-10",children:[(0,F.jsx)(M,{coin:s,type:"buy"}),(0,F.jsx)(M,{coin:s,type:"sell"})]}),(0,F.jsxs)("div",{className:"flex flex-col gap-2 xl:flex-row xl:gap-10 w-full mb-4",children:[(0,F.jsx)(B,{coin:s,type:"buy"}),(0,F.jsx)(B,{coin:s,type:"sell"})]}),(0,F.jsx)("div",{className:"mt-5",children:(0,F.jsx)(T,{coin:s})})]})]})})},je=s(5152),be=s(76467),ye=function(){var e=(0,r.sJ)(a.KL),t=(0,r.sJ)(a.c9);return(0,F.jsxs)("div",{children:[(0,F.jsx)("title",{children:e?"Inv-".concat(e.name):"Inventory"}),e&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(l.LP,{}),(0,F.jsxs)("div",{className:"",children:["tokens"===t&&(0,F.jsx)(P,{}),"open_orders"===t&&(0,F.jsx)(I,{}),"dex"===t&&(0,F.jsx)(be.default,{children:(0,F.jsx)(ge,{})})]})]})]})},ve=(0,je.default)((function(){return Promise.resolve(ye)}),{ssr:!1})},45301:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(28467)}])}},function(e){e.O(0,[774,13,617,556,874,712,888,179],(function(){return t=45301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);