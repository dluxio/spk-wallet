(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[157],{52962:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{H:function(){return TokenCard}});var _Users_noclue_ps_Desktop_Programavimas_Workspaces_spk_wallet_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(83789),_Users_noclue_ps_Desktop_Programavimas_Workspaces_spk_wallet_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(30266),_Users_noclue_ps_Desktop_Programavimas_Workspaces_spk_wallet_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(80318),_Users_noclue_ps_Desktop_Programavimas_Workspaces_spk_wallet_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(809),_Users_noclue_ps_Desktop_Programavimas_Workspaces_spk_wallet_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_Users_noclue_ps_Desktop_Programavimas_Workspaces_spk_wallet_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67294),react_icons_im__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(53990),react_icons_fa__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(89583),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(43196),_Modals_AirdropForm__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(50708),axios__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9669),axios__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__),_Modals_AuctionForm__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(23504),_Modals_SellForm__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(18851),___WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(43837),recoil__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(2804),_atoms__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(63569),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(85893),TokenCard=function TokenCard(_ref){var token=_ref.token,set=token.set,script=token.script,qty=token.qty,uid=token.uid,_useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),colors=_useState[0],setColors=_useState[1],_useState2=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),isSelling=_useState2[0],setIsSelling=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),auction=_useState3[0],setAuction=_useState3[1],_useState4=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),airdrop=_useState4[0],setAirdrop=_useState4[1],_useState5=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),isTransfering=_useState5[0],setIsTransfering=_useState5[1],id="_"+Math.random().toString(36).substr(2,9),_useState6=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("=="),randomUID=_useState6[0],setRandomUID=_useState6[1],_useState7=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),isFlipped=_useState7[0],setIsFlipped=_useState7[1],_useRecoilState=(0,recoil__WEBPACK_IMPORTED_MODULE_8__.FV)(_atoms__WEBPACK_IMPORTED_MODULE_9__.D2),_useRecoilState2=(0,_Users_noclue_ps_Desktop_Programavimas_Workspaces_spk_wallet_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_11__.Z)(_useRecoilState,2),_broadcasts=_useRecoilState2[0],setBroadcasts=_useRecoilState2[1],user=(0,recoil__WEBPACK_IMPORTED_MODULE_8__.sJ)(_atoms__WEBPACK_IMPORTED_MODULE_9__.KL),prefix=(0,recoil__WEBPACK_IMPORTED_MODULE_8__.sJ)(_atoms__WEBPACK_IMPORTED_MODULE_9__.uo),apiLink=(0,recoil__WEBPACK_IMPORTED_MODULE_8__.sJ)(_atoms__WEBPACK_IMPORTED_MODULE_9__.H3),randomUIDGen=function(e){var t=Math.round(Math.random()*(e.max-(e.min||0))),s=(0,_utils__WEBPACK_IMPORTED_MODULE_2__.s3)(t);setRandomUID(s)},handleOpen=function(){var e=(0,_Users_noclue_ps_Desktop_Programavimas_Workspaces_spk_wallet_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__.Z)(_Users_noclue_ps_Desktop_Programavimas_Workspaces_spk_wallet_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark((function e(){return _Users_noclue_ps_Desktop_Programavimas_Workspaces_spk_wallet_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,_utils__WEBPACK_IMPORTED_MODULE_2__._y)(user.name,set,prefix).then((function(e){e&&e.success&&setBroadcasts((function(t){return[].concat((0,_Users_noclue_ps_Desktop_Programavimas_Workspaces_spk_wallet_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_13__.Z)(t),[e])}))}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){axios__WEBPACK_IMPORTED_MODULE_4___default().get("".concat(apiLink,"api/set/").concat(set)).then((function(e){var t=e.data;setInterval((function(){randomUIDGen(t.set)}),1e3)}))}),[]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){axios__WEBPACK_IMPORTED_MODULE_4___default().get("https://ipfs.io/ipfs/".concat(script,"?").concat(randomUID)).then((function(_ref4){var data=_ref4.data,code="(//".concat(data,'\n)("').concat(randomUID,'")'),SVG=eval(code);document.getElementById("image-".concat(set,"-").concat(id))&&(document.getElementById("image-".concat(set,"-").concat(id)).innerHTML=SVG.HTML)}))}),[randomUID]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){axios__WEBPACK_IMPORTED_MODULE_4___default().get("https://ipfs.io/ipfs/".concat(script,"?").concat(randomUID)).then((function(_ref5){var data=_ref5.data,code="(//".concat(data,'\n)("').concat(randomUID,'")'),SVG=eval(code);setColors([SVG.set.Color1,SVG.set.Color2])}))}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div",{className:"border shadow-xl h-auto border-transparent bg-gray-700 rounded-xl  text-white relative",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h1",{className:"text-center w-full rounded-t-xl font-black py-2 text-xl",style:{background:"linear-gradient(to bottom,  ".concat(colors[0]," 0%,").concat(colors[1]," 100%)")},children:set}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{className:"py-5",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div",{className:"relative",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{className:"z-30 bg-gray-700 absolute top-0 w-full h-full bg-opacity-70 flex justify-center items-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_14__.g_g,{size:60,color:"#fff"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{id:"image-".concat(set,"-").concat(id),className:"w-1/2 mx-auto"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div",{className:"px-5 py-4 w-full flex justify-between items-center z-50",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("p",{children:["Qty: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("strong",{children:token.qty})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button",{className:"px-6 py-2 rounded-xl flex items-center gap-2",style:{backgroundColor:colors[1]},onClick:function(){return setIsFlipped(!0)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_icons_im__WEBPACK_IMPORTED_MODULE_15__.OJV,{size:20,color:"#fff"})})]}),isFlipped&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div",{className:"z-40 absolute top-0 left-0 h-full w-full bg-gray-700 bg-opacity-50 rounded-xl flex justify-center items-center translate-y-1/2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div",{className:"grid grid-cols-1 gap-5",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button",{onClick:handleOpen,className:"bg-gray-700 px-2 rounded-lg border-2 text-purple-500 bg-transparent border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-700",children:"Open"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button",{onClick:function(){return setIsTransfering(!0)},className:"bg-gray-700 px-2 rounded-lg border-2 text-green-500 bg-transparent border-green-500 focus:outline-none focus:ring-2 focus:ring-green-700",children:"Give"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button",{onClick:function(){return setIsSelling(!0)},className:"bg-gray-700 px-2 rounded-lg border-2 text-yellow-500 bg-transparent border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-700",children:"List for sale"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button",{onClick:function(){return setAuction(!0)},className:"bg-gray-700 rounded-lg border-2 text-blue-500 bg-transparent border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-700",children:"Auction"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button",{onClick:function(){return setAirdrop(!0)},className:"bg-gray-700 rounded-lg border-2 text-red-500 bg-transparent border-red-500 focus:outline-none focus:ring-2 focus:ring-red-700",children:"Airdrop"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button",{className:"absolute top-0 left-0 p-3",onClick:function(){return setIsFlipped(!1)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_icons_im__WEBPACK_IMPORTED_MODULE_15__.sQZ,{color:"#fff"})})]}),isTransfering&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(___WEBPACK_IMPORTED_MODULE_7__.oQ,{set:set,handleClose:function(){return setIsTransfering(!1)}}),airdrop&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Modals_AirdropForm__WEBPACK_IMPORTED_MODULE_3__.E,{set:set,handleClose:function(){return setAirdrop(!1)}}),auction&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Modals_AuctionForm__WEBPACK_IMPORTED_MODULE_5__.f,{kind:"ft",uid:uid,set:set,handleClose:function(){return setAuction(!1)}}),isSelling&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Modals_SellForm__WEBPACK_IMPORTED_MODULE_6__.M,{availible:qty,set:set,handleClose:function(){return setIsSelling(!1)}})]})}},50708:function(e,t,s){"use strict";s.d(t,{E:function(){return x}});var r=s(83789),n=s(80318),a=s(94649),l=s(67294),i=s(86733),o=s(2804),c=s(63569),_=s(43196),u=s(88943),d=s(85893),x=function(e){var t=e.handleClose,s=e.set,x=(0,o.sJ)(c.uo),m=(0,o.sJ)(c.KL),h=(0,o.FV)(c.D2),f=(0,n.Z)(h,2),p=(f[0],f[1]),g=(0,l.useState)(),j=g[0],b=g[1];return(0,l.useEffect)((function(){j&&(0,_.fz)(m.name,j,x).then((function(e){e&&e.success&&p((function(t){return[].concat((0,r.Z)(t),[e])}))}))}),[j]),(0,d.jsxs)(u.A,{handleClose:t,children:[(0,d.jsx)("h1",{className:"text-center text-white text-2xl",children:"Airdrop NFT"}),(0,d.jsx)(a.J9,{initialValues:{to:""},validate:function(e){var t={};return e.to||(t.to="Required"),t},onSubmit:function(e,r){var n=e.to,a=r.setSubmitting;b({to:n.split(" "),set:s}),a(!1),t()},children:function(e){var t=e.values,s=e.errors,r=e.touched,n=e.handleChange,a=e.handleBlur,l=e.handleSubmit;return(0,d.jsx)("form",{onSubmit:l,children:(0,d.jsxs)("div",{className:"flex flex-col justify-center gap-5 text-white",children:[(0,d.jsx)(i.y,{name:"to",errors:s.to,handleBlur:a,handleChange:n,touched:r.to,value:t.to}),(0,d.jsx)("p",{children:'example - "name another_name"'}),(0,d.jsx)("button",{type:"submit",className:"rounded-lg border border-white py-1 w-2/3 px-2 bg-gray-500 focus:ring-4 mx-auto focus:outline-none focus:ring-gray-700",children:"Airdrop"})]})})}})]})}},50223:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return Z}});var r=s(67294),n=s(2804),a=s(63569),l=s(43837),i=s(9669),o=s.n(i),c=s(11163),_=s(52962),u=s(37039),d=s(85893),x=function(){var e=(0,r.useState)([]),t=e[0],s=e[1],l=(0,n.sJ)(a.KL),i=(0,n.sJ)(a.H3),x=(0,n.sJ)(a.eY),m=(0,u.$G)().t,h=(0,c.useRouter)();return(0,r.useEffect)((function(){if("inventory"===x||""===x)if(l){var e=l.name;o().get("".concat(i,"api/nfts/").concat(e)).then((function(e){s(e.data.mint_tokens)}))}else h.push("/")}),[x]),(0,d.jsxs)("div",{className:"mx-10",children:[0===t.length&&(0,d.jsx)("div",{className:"w-full flex justify-center items-center",children:(0,d.jsx)("h1",{className:"text-white text-xl w-full text-center",children:m("noFT")})}),(0,d.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-4/5 gap-4",children:t.map((function(e){return(0,d.jsx)("div",{children:(0,d.jsx)(_.H,{token:e},"_"+Math.random().toString(36).substr(2,9))},e.set)}))})]})},m=s(65523),h=s(92809),f=s(8193),p=s(47516),g=s(89583),j=s(83789),b=s(80318),E=s(94649),v=s(86733),D=s(88943),y=s(43196),O=function(e){var t=e.handleClose,s=e.balance,r=e.up,l=void 0===r||r,i=(0,n.sJ)(a.KL),o=(0,n.FV)(a.D2),c=(0,b.Z)(o,2),_=(c[0],c[1]);return(0,d.jsxs)(D.A,{handleClose:t,children:[(0,d.jsx)("h1",{className:"text-xl mb-2",children:l?"Lock DLUX for Governance Ops":"Unlock Governance Tokens"}),(0,d.jsx)(E.J9,{initialValues:{amount:1},validate:function(e){var t={};return e.amount>s&&(t.amount="Not enough GOV"),t},onSubmit:function(e,s){var r=e.amount,n=s.setSubmitting;i&&(0,y.pP)(r,i.name,l).then((function(e){e&&e.success&&_((function(t){return[].concat((0,j.Z)(t),[e])}))})),n(!1),t()},children:function(e){var t=e.values,r=e.errors,n=e.touched,a=e.handleChange,i=e.handleBlur,o=e.handleSubmit;return(0,d.jsxs)("form",{onSubmit:o,children:[(0,d.jsxs)("div",{className:"mt-2 relative",children:[(0,d.jsx)(v.y,{title:"Amount (".concat(s.toFixed(2)," GOV)"),min:1,name:"amount",type:"number",errors:r.amount,handleBlur:i,handleChange:a,touched:n.amount,value:t.amount}),(0,d.jsx)("div",{className:"absolute top-8 right-9",children:(0,d.jsx)("img",{src:"https://www.dlux.io/img/dlux-hive-logo-alpha.svg",width:25,height:25,alt:"logo"})})]}),(0,d.jsx)("button",{type:"submit",className:"px-2 py-1 mx-auto mt-5 flex items-center gap-3 rounded-lg border-2 text-white bg-gradient-to-b from-pink-500 to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600",children:l?(0,d.jsxs)("h1",{className:"flex gap-4 items-center",children:["Lock GOV ",(0,d.jsx)(g.kUi,{})]}):(0,d.jsxs)("h1",{className:"flex gap-4 items-center",children:["Unlock GOV ",(0,d.jsx)(g.D5B,{})]})})]})}})]})},M=function(e){var t=e.handleClose,s=e.balance,r=e.currency,l=(0,n.sJ)(a.KL),i=(0,n.FV)(a.D2),o=(0,b.Z)(i,2),c=(o[0],o[1]);return(0,d.jsxs)(D.A,{handleClose:t,children:[(0,d.jsxs)("h1",{className:"text-xl mb-2",children:["Send ",r]}),(0,d.jsx)(E.J9,{initialValues:{to:"",amount:1,memo:""},validate:function(e){var t=e.to,n=e.amount,a={};return t||(a.to="Required"),n>s&&(a.amount="Not enough ".concat(r)),a},onSubmit:function(e,s){var n=s.setSubmitting;l&&("DLUX"===r?(0,y._D)(e,l.name).then((function(e){e&&e.success&&c((function(t){return[].concat((0,j.Z)(t),[e])}))})):(0,y.wM)(e,l.name).then((function(e){e&&e.success&&c((function(t){return[].concat((0,j.Z)(t),[e])}))}))),n(!1),t()},children:function(e){var t=e.values,n=e.errors,a=e.touched,l=e.handleChange,i=e.handleBlur,o=e.handleSubmit;return(0,d.jsxs)("form",{onSubmit:o,children:[(0,d.jsx)(v.y,{name:"to",errors:n.to,handleBlur:i,handleChange:l,touched:a.to,value:t.to}),(0,d.jsxs)("div",{className:"mt-2 relative",children:[(0,d.jsx)(v.y,{title:"Amount (".concat(s.toFixed(2)," ").concat(r,")"),name:"amount",type:"number",errors:n.amount,handleBlur:i,handleChange:l,touched:a.amount,value:t.amount}),(0,d.jsx)("div",{className:"absolute top-8 right-9",children:(0,d.jsx)("img",{src:"DLUX"===r?"https://www.dlux.io/img/dlux-hive-logo-alpha.svg":"https://www.dlux.io/img/hextacular.svg",width:25,height:25,alt:"logo"})})]}),(0,d.jsx)("div",{className:"mt-2",children:(0,d.jsx)(v.y,{name:"memo",errors:n.memo,handleBlur:i,handleChange:l,touched:a.memo,value:t.memo})}),(0,d.jsxs)("button",{type:"submit",className:"px-2 py-1 mx-auto mt-5 flex items-center gap-3 rounded-lg border-2 text-white bg-gradient-to-b ".concat("DLUX"===r?"from-pink-500 to-blue-500":"from-white to-red-500"," focus:outline-none focus:ring-2 focus:ring-blue-600"),children:["Send",(0,d.jsx)(p.VLC,{size:"1.5rem"})]})]})}})]})};function P(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function k(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?P(Object(s),!0).forEach((function(t){(0,h.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):P(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var w=function(e){var t=e.balance,s=(0,r.useState)(!1),n=s[0],a=s[1],l=(0,r.useState)({show:!1,up:!1}),i=l[0],o=l[1],c=(0,r.useState)(!1),_=c[0],u=c[1];return(0,d.jsxs)("div",{className:"flex flex-col mt-3 pt-3 border-t-2 border-gray-500",children:[n&&(0,d.jsx)(M,{currency:"DLUX",balance:t.DLUX/1e3,handleClose:function(){return a(!1)}}),i.show&&(0,d.jsx)(O,{balance:t.GOV,handleClose:function(){return o(k(k({},i),{},{show:!1}))},up:i.up}),(0,d.jsxs)("div",{className:"flex flex-col sm:flex-row justify-between gap-5",children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("h1",{children:["DLUX Token (",(t.DLUX/1e3).toFixed(2)," Bal)"]}),(0,d.jsx)("h1",{className:"text-gray-400 pt-2",children:"The utility token for content distribution and smart contracts, also called a smart media token (SMT)"})]}),(0,d.jsx)("div",{className:"flex items-center",children:(0,d.jsxs)("button",{onClick:function(){return a(!0)},className:"px-4 py-3 flex items-center gap-3 rounded-lg border-2 text-white bg-gradient-to-b from-pink-500 to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600",children:["Send",(0,d.jsx)(p.VLC,{size:"1.5rem"})]})})]}),(0,d.jsxs)("div",{className:"flex flex-col sm:flex-row justify-between gap-10 border-t-2 border-gray-600 mt-2 pt-2",children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("h1",{children:["DLUX Governance (",(t.GOV/1e3).toFixed(2)," Bal)"]}),(0,d.jsx)("h1",{className:"text-gray-400 pt-2",children:"Locked tokens used to determine concensus and earn rewards for running a node"}),(0,d.jsx)("h1",{className:"text-gray-400 pt-2",children:"Benefits of DLUX Governance:"}),(0,d.jsxs)("ul",{className:"text-gray-400 pt-1 pl-3",children:[(0,d.jsx)("li",{children:"1. Provides liquid funds to DAO multi-sig wallet"}),(0,d.jsx)("li",{children:"2. Ensures collateral for DEX escrow transactions"}),(0,d.jsx)("li",{children:"3. Enables voting on proposed community measures"}),(0,d.jsx)("li",{children:"4. 1 Week Lock | 4 Week Unlock | 1 Week Convert"})]})]}),(0,d.jsxs)("div",{className:"flex flex-col items-center lg:items-end",children:[(0,d.jsxs)("button",{onClick:function(){return u(!_)},className:"px-3 py-3 flex items-center gap-3 rounded-lg border-2 text-white bg-transparent border-gray-700 bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",children:["Actions"," ",_?(0,d.jsx)(f.N9e,{}):(0,d.jsx)(f.w4J,{})]}),_&&(0,d.jsxs)("div",{className:"bg-gray-600 rounded-xl p-3",children:[(0,d.jsxs)("button",{onClick:function(){return o({show:!0,up:!0})},className:"flex justify-between items-center whitespace-nowrap gap-2 bg-gray-500 w-full px-2 py-1 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-700",children:["Lock GOV ",(0,d.jsx)(g.kUi,{})]}),(0,d.jsxs)("button",{onClick:function(){return o({show:!0,up:!1})},className:"flex mt-2 items-center whitespace-nowrap gap-2 bg-gray-500 w-full px-2 py-1 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-700",children:["Unlock GOV ",(0,d.jsx)(g.D5B,{})]})]})]})]})]})},C=function(e){var t=e.balance,s=(0,r.useState)(!1),l=s[0],i=s[1],o=(0,n.FV)(a.c9),c=(0,b.Z)(o,2),_=(c[0],c[1]);return(0,d.jsxs)("div",{className:"flex flex-col mt-3 pt-3 border-t-2 border-gray-500",children:[l&&(0,d.jsx)(M,{currency:"HIVE",balance:t,handleClose:function(){return i(!1)}}),(0,d.jsxs)("div",{className:"flex justify-between gap-5",children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("h1",{children:["HIVE Token (",t.toFixed(2)," Bal)"]}),(0,d.jsx)("h1",{className:"text-gray-400 pt-2",children:"HIVE is a DPoS blockchain with free transactions and a method to post and rate content."})]}),(0,d.jsx)("div",{className:"flex items-center",children:(0,d.jsxs)("button",{onClick:function(){return i(!0)},className:"px-4 py-3 flex items-center gap-3 rounded-lg border-2 text-white bg-gradient-to-b from-white to-red-500 focus:outline-none focus:ring-2 focus:ring-red-600",children:["Send",(0,d.jsx)(p.VLC,{size:"1.5rem"})]})})]}),(0,d.jsx)("div",{className:"mx-auto mb-3 mt-7",children:(0,d.jsxs)("button",{onClick:function(){return _("dex")},className:"px-4 py-3 flex items-center gap-3 rounded-lg border-2 text-white bg-gradient-to-b from-white to-red-500 focus:outline-none focus:ring-2 focus:ring-red-600",children:["Trade",(0,d.jsx)("img",{src:"https://www.dlux.io/img/dlux-hive-logo-alpha.svg",alt:"dlux_logo",width:30})]})})]})},N=function(e){var t=e.currency,s=e.balance;return(0,d.jsxs)("div",{className:"bg-gray-500 w-full px-5 py-3 text-white  rounded-xl border-2 border-gray-800",children:[(0,d.jsxs)("div",{className:"flex items-center justify-between",children:["DLUX"===t&&(0,d.jsx)("img",{src:"https://www.dlux.io/img/dlux-hive-logo-alpha.svg",width:45,height:45,alt:"logo"}),"HIVE"===t&&(0,d.jsx)("img",{src:"https://cryptologos.cc/logos/hive-blockchain-hive-logo.png",width:45,height:45,alt:"logo"}),(0,d.jsxs)("h1",{className:"text-xl mr-3",children:["HIVE"===t?s:(s.DLUX/1e3).toFixed(2)," ",t]})]}),"DLUX"===t&&(0,d.jsx)(w,{balance:s}),"HIVE"===t&&(0,d.jsx)(C,{balance:s})]})},U=function(e){(0,m.Z)(e);var t=(0,r.useState)({DLUX:0,GOV:0}),s=t[0],l=t[1],i=(0,r.useState)(0),c=i[0],_=i[1],x=(0,n.sJ)(a.KL),h=(0,n.sJ)(a.H3),f=(0,u.$G)().t;return(0,r.useEffect)((function(){_(parseFloat(x.balance.split(" ")[0])),o().get("".concat(h,"@").concat(x.name)).then((function(e){var t=e.data;return l({DLUX:parseFloat(t.balance),GOV:parseFloat(t.gov)})}))}),[x]),(0,d.jsxs)("div",{className:"w-full",children:[(0,d.jsx)("h1",{className:"text-white text-xl mx-10 my-2",children:f("balances")}),(0,d.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-5 px-10",children:[(0,d.jsx)(N,{currency:"DLUX",balance:s}),(0,d.jsx)(N,{currency:"HIVE",balance:c})]})]})},L=function(){var e=(0,c.useRouter)(),t=(0,u.$G)().t,s=(0,n.sJ)(a.KL),i=(0,n.sJ)(a.H3),_=(0,r.useState)(),x=_[0],m=_[1],h=(0,n.sJ)(a.eY),f=(0,n.FV)(a.dL),p=(0,b.Z)(f,2),g=p[0],j=p[1];(0,r.useEffect)((function(){if("inventory"===h||""===h)if(s){var t=s.name;o().get("".concat(i,"api/nfts/").concat(t)).then((function(e){j(e.data.result)}))}else e.push("/")}),[h]),(0,r.useEffect)((function(){g.length&&m(g[0])}),[g]);return(0,d.jsxs)("div",{className:"flex h-auto flex-col gap-8 sm:flex-row",children:[(0,d.jsxs)("div",{className:"w-full",children:[0===g.length&&(0,d.jsx)("h1",{className:"text-white text-xl text-center",children:t("noNFT")}),(0,d.jsx)("div",{className:"grid grid-cols-1 grid-row-auto sm:grid-cols-2 xl:grid-cols-4 w-4/5 gap-4 mx-auto sm:mx-10",children:g.map((function(t){return(0,d.jsx)(l.$M,{nft:t,onClick:function(){!function(e){m(e)}(t)},onDoubleClick:function(){return e.push("/nft/".concat(t.set,":").concat(t.uid))}},"".concat(t.set,"_").concat(t.uid))}))})]}),x&&(0,d.jsx)("div",{id:"details",className:"w-full mx-auto sm:mx-10",children:(0,d.jsx)(l.vq,{nft:x})})]})},I=function(e){var t=e.type,s=e.coin,l=(0,r.useState)("limit"),i=l[0],o=l[1],c=(0,r.useState)(0),_=c[0],x=c[1],m=(0,r.useState)(0),h=m[0],f=m[1],p=(0,n.sJ)(a.KL),g=(0,n.sJ)(a.uo),j=(0,n.sJ)(a.db),b=(0,u.$G)().t;return(0,d.jsxs)("div",{className:"flex flex-col flex-grow bg-gray-700 border-2 border-gray-800 p-3 rounded-md",children:[(0,d.jsxs)("div",{className:"text-white text-xl flex gap-3",children:[(0,d.jsx)("h1",{className:"sell"===t?"text-red-500":"text-green-500",children:b(t)}),(0,d.jsx)("h1",{children:"DLUX"})]}),(0,d.jsxs)("div",{className:"flex flex-col sm:flex-row items-center  mr-5 justify-between mt-2 text-white font-light",children:[(0,d.jsx)("h1",{children:b("orderType")}),(0,d.jsxs)("div",{className:"flex justify-center",children:[(0,d.jsx)("button",{onClick:function(){return o("limit")},className:"p-2 ".concat("limit"===i&&"bg-gray-900"," rounded-l-full bg-gray-800 text-white transition-all"),children:b("limit")}),(0,d.jsx)("button",{onClick:function(){return o("market")},className:"p-2 ".concat("market"===i&&"bg-gray-900"," rounded-r-full bg-gray-800 text-white transition-all"),children:b("market")})]})]}),(0,d.jsxs)("div",{className:"flex text-white gap-3 flex-col mr-3 mt-5",children:["limit"===i&&(0,d.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between",children:[(0,d.jsxs)("div",{className:"flex flex-col mr-5",children:[(0,d.jsx)("h1",{children:b("qty")}),(0,d.jsx)("h1",{className:"font-light text-sm",children:"DLUX"})]}),(0,d.jsx)("input",{step:.001,className:"rounded-xl outline-none px-3 py-1 bg-gray-500 text-white",type:"number",value:_,onChange:function(e){return x(+e.target.value)}})]}),"market"===i&&"sell"===t&&(0,d.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between",children:[(0,d.jsxs)("div",{className:"flex flex-col mr-5",children:[(0,d.jsx)("h1",{children:b("qty")}),(0,d.jsx)("h1",{className:"font-light text-sm",children:"DLUX"})]}),(0,d.jsx)("input",{step:.001,className:"rounded-xl outline-none px-3 py-1 bg-gray-500 text-white",type:"number",value:_,onChange:function(e){return x(+e.target.value)}})]}),"limit"===i&&"sell"===t&&(0,d.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between",children:[(0,d.jsxs)("div",{className:"flex flex-col mr-5",children:[(0,d.jsx)("h1",{children:b("total")}),(0,d.jsx)("h1",{className:"font-light text-sm",children:s})]}),(0,d.jsx)("input",{step:.001,className:"rounded-xl outline-none px-3 py-1 bg-gray-500 text-white",type:"number",value:h,onChange:function(e){return f(+e.target.value)}})]}),"buy"===t&&(0,d.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between",children:[(0,d.jsxs)("div",{className:"flex flex-col mr-5",children:[(0,d.jsx)("h1",{children:b("total")}),(0,d.jsx)("h1",{className:"font-light text-sm",children:s})]}),(0,d.jsx)("input",{step:.001,className:"rounded-xl outline-none px-3 py-1 bg-gray-500 text-white",type:"number",value:h,onChange:function(e){return f(+e.target.value)}})]})]}),(0,d.jsx)("div",{className:"flex justify-end",children:(0,d.jsx)("button",{onClick:function(){"sell"===t&&"market"===i?(0,y.SN)({dlux:1e3*_,hive:0},p.name,g):"sell"===t&&"limit"===i?"HIVE"===s?(0,y.SN)({dlux:1e3*_,hive:1e3*h},p.name,g):(0,y.SN)({dlux:1e3*_,hbd:1e3*h},p.name,g):"buy"===t&&"market"===i?(0,y.u4)({coin:s,amount:1e3*h,buyData:{hours:720}},p.name,j):"buy"===t&&"limit"===i&&(0,y.u4)({coin:s,amount:1e3*h,buyData:{rate:parseFloat((h/_).toFixed(6)),hours:720}},p.name,j)},className:"".concat("sell"===t?"bg-red-500 focus:ring-red-600":"bg-green-500 focus:ring-green-600"," text-white mx-4 mt-5 px-4 py-2 rounded-xl focus:ring-2 "),children:b(t)})})]})},A=s(30266),T=s(809),B=s.n(T),F=function(e){var t=e.coin,s=(0,r.useState)({dollars:0,dlux:0}),l=s[0],i=s[1],c=(0,r.useState)({dollars:0,dlux:0}),_=c[0],x=c[1],m=(0,r.useState)({dollars:0,dlux:0}),h=m[0],f=m[1],p=(0,r.useState)({dollars:0,dlux:0}),g=p[0],j=p[1],E=(0,n.FV)(a.n6),v=(0,b.Z)(E,2),D=v[0],y=v[1],O=(0,r.useState)(),M=O[0],P=O[1],k=(0,u.$G)().t,w=(0,n.sJ)(a.H3);return(0,r.useEffect)((function(){var e=0,s=0;(function(){var t=(0,A.Z)(B().mark((function t(){var r,n,a,l;return B().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("https://api.coingecko.com/api/v3/coins/hive",{headers:{accept:"application/json"}});case 2:return r=t.sent,n=r.data,t.next=6,o().get("https://api.coingecko.com/api/v3/coins/hive_dollar",{headers:{accept:"application/json"}});case 6:a=t.sent,l=a.data,e=n.market_data.current_price.usd,s=l.market_data.current_price.usd;case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()(),t&&o().get("".concat(w,"dex")).then((function(r){var n=r.data;P(n),"HIVE"===t?(n.markets.hive.sells.length&&n.markets.hive.buys.length?(i({dlux:parseFloat(n.markets.hive.buys[0].rate),dollars:parseFloat((parseFloat(n.markets.hive.tick)*e*n.markets.hive.buys[0].rate).toFixed(2))}),x({dlux:parseFloat(n.markets.hive.sells[0].rate),dollars:parseFloat((parseFloat(n.markets.hive.tick)*e*n.markets.hive.sells[0].rate).toFixed(2))})):(i({dlux:0,dollars:0}),x({dlux:0,dollars:0})),j({dlux:n.stats.HiveVWMA.rate,dollars:parseFloat((+n.stats.HiveVWMA.rate*+n.markets.hive.tick).toFixed(2))}),f({dlux:n.markets.hive.tick,dollars:parseFloat((parseFloat(n.markets.hive.tick)*e).toFixed(2))})):"HBD"===t&&(n.markets.hbd.sells.length&&n.markets.hbd.buys.length?(i({dlux:n.markets.hbd.sells[0].rate,dollars:parseFloat((parseFloat(n.markets.hbd.tick)*s*n.markets.hbd.sells[0].rate).toFixed(2))}),x({dlux:n.markets.hbd.buys[0].rate,dollars:parseFloat((parseFloat(n.markets.hbd.tick)*s*n.markets.hbd.sells[0].rate).toFixed(2))})):(i({dlux:0,dollars:0}),x({dlux:0,dollars:0})),j({dlux:n.stats.HbdVWMA.rate,dollars:parseFloat((+n.stats.HbdVWMA.rate*+n.markets.hbd.tick).toFixed(2))}),f({dlux:n.markets.hbd.tick,dollars:parseFloat((parseFloat(n.markets.hbd.tick)*e).toFixed(2))}))}))}),[t]),(0,r.useEffect)((function(){M&&y("HIVE"===t?{dlux:D.dlux,dollars:(parseFloat(D.dlux)*M.markets.hive.tick).toFixed(2)}:{dlux:D.dlux,dollars:(parseFloat(D.dlux)*M.markets.hbd.tick).toFixed(2)})}),[t]),(0,d.jsxs)("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-3 text-white text-xl",children:[(0,d.jsxs)("div",{className:"mx-3 flex flex-col justify-center items-center gap-3",children:[(0,d.jsx)("h1",{className:"px-5 py-2 bg-gray-500 rounded-xl",children:k("bid")}),(0,d.jsxs)("div",{className:"flex flex-col justify-center items-center text-md",children:[(0,d.jsx)("h1",{children:l.dlux}),(0,d.jsxs)("h1",{children:["$",l.dollars]})]})]}),(0,d.jsxs)("div",{className:"mx-3 flex flex-col justify-center items-center gap-3",children:[(0,d.jsx)("h1",{className:"px-5 py-2 bg-gray-500 rounded-xl",children:k("ask")}),(0,d.jsxs)("div",{className:"flex flex-col justify-center items-center text-md",children:[(0,d.jsx)("h1",{children:_.dlux}),(0,d.jsxs)("h1",{children:["$",_.dollars]})]})]}),(0,d.jsxs)("div",{className:"mx-3 flex flex-col justify-center items-center gap-3",children:[(0,d.jsx)("h1",{className:"px-5 py-2 bg-gray-500 rounded-xl",children:k("last")}),(0,d.jsxs)("div",{className:"flex flex-col justify-center items-center text-md",children:[(0,d.jsx)("h1",{children:h.dlux}),(0,d.jsxs)("h1",{children:["$",h.dollars]})]})]}),(0,d.jsxs)("div",{className:"mx-3 flex flex-col justify-center items-center gap-3",children:[(0,d.jsx)("h1",{className:"px-5 py-2 bg-gray-500 rounded-xl",children:"VWMA"}),(0,d.jsxs)("div",{className:"flex flex-col justify-center items-center text-md",children:[(0,d.jsx)("h1",{children:g.dlux}),(0,d.jsxs)("h1",{children:["$",g.dollars]})]})]}),(0,d.jsxs)("div",{className:"mx-3 flex flex-col justify-center items-center gap-3",children:[(0,d.jsx)("h1",{className:"px-5 py-2 bg-gray-500 rounded-xl",children:k("hourVolume")}),(0,d.jsxs)("div",{className:"flex flex-col justify-center items-center text-md",children:[(0,d.jsx)("h1",{children:D.dlux}),(0,d.jsxs)("h1",{children:["$",D.dollars]})]})]})]})},S=function(e){var t=e.order,s=e.i,n=e.orders,a=(0,r.useState)("HIVE"),l=a[0],i=a[1],o=(0,r.useState)("buy"),c=(o[0],o[1]),_=(0,r.useState)(""),u=_[0],x=_[1];return(0,r.useEffect)((function(){c(t.type.split(":")[1]),i(t.type.split(":")[0]);var e=0,r=t.type.split(":")[0];n.forEach((function(t,n){n<=s&&(e+="hive"===r?parseFloat(parseFloat((+t.hivenai.amount/Math.pow(10,t.hivenai.precision)).toString()).toFixed(t.hivenai.precision)):parseFloat(parseFloat((+t.hbdnai.amount/Math.pow(10,t.hbdnai.precision)).toString()).toFixed(t.hbdnai.precision)))})),x(e.toFixed(2))}),[]),(0,d.jsxs)("div",{className:"".concat(s%2===0?"bg-gray-500":""," grid grid-cols-4 gap-5 my-1 px-2 py-1"),children:[(0,d.jsx)("h1",{children:u}),(0,d.jsx)("h1",{children:"hive"===l?parseFloat(parseFloat((+t.hivenai.amount/Math.pow(10,t.hivenai.precision)).toString()).toFixed(t.hivenai.precision)).toFixed(2):parseFloat(parseFloat((+t.hbdnai.amount/Math.pow(10,t.hbdnai.precision)).toString()).toFixed(t.hbdnai.precision)).toFixed(2)}),(0,d.jsx)("h1",{children:parseFloat(parseFloat((+t.amountnai.amount/Math.pow(10,t.amountnai.precision)).toString()).toFixed(t.amountnai.precision)).toFixed(2)}),(0,d.jsx)("h1",{children:parseFloat(t.rate).toFixed(2)})]})},W=function(e){var t=e.type,s=e.coin,l=(0,r.useState)([]),i=l[0],c=l[1],_=(0,n.sJ)(a.H3),x=(0,u.$G)().t;return(0,r.useEffect)((function(){o().get("".concat(_,"dex")).then((function(e){var r=e.data.markets;"HIVE"===s&&"buy"===t?c(r.hive.buys.length<=1?r.hive.buys.sort((function(e,t){return parseFloat(e.rate)<parseFloat(t.rate)?-1:1})):r.hive.buys.sort((function(e,t){return parseFloat(e.rate)>parseFloat(t.rate)?-1:1}))):"HBD"===s&&"buy"===t?c(r.hbd.buys.length<=1?r.hbd.buys.sort((function(e,t){return parseFloat(e.rate)<parseFloat(t.rate)?-1:1})):r.hbd.buys.sort((function(e,t){return parseFloat(e.rate)>parseFloat(t.rate)?-1:1}))):"HIVE"===s&&"sell"===t?c((r.hive.sells.length,r.hive.sells.sort((function(e,t){return parseFloat(e.rate)<parseFloat(t.rate)?-1:1})))):"HBD"===s&&"sell"===t&&c(r.hbd.sells.length<=1?r.hbd.sells.sort((function(e,t){return parseFloat(e.rate)<parseFloat(t.rate)?-1:1})):r.hbd.sell.sort((function(e,t){return parseFloat(e.rate)<parseFloat(t.rate)?-1:1})))}))}),[s]),(0,d.jsxs)("div",{className:"text-white text-xl w-full",children:[(0,d.jsxs)("div",{className:"flex gap-3",children:[(0,d.jsx)("h1",{className:"sell"===t?"text-red-500":"text-green-500",children:x(t)}),(0,d.jsx)("h1",{children:x("orders")})]}),(0,d.jsxs)("div",{className:"grid grid-cols-4 gap-5 mt-3",children:[(0,d.jsx)("h1",{children:x("total").toUpperCase()}),(0,d.jsx)("h1",{children:s}),(0,d.jsx)("h1",{children:"DLUX"}),(0,d.jsx)("h1",{children:x("sell"===t?"ask":"bid").toUpperCase()})]}),(0,d.jsx)("div",{className:"mt-2",children:i&&i.map((function(e,t){return(0,d.jsx)(S,{i:t,order:e,orders:i})}))})]})},R=s(53817),K=function(e){var t=e.transaction,s=e.i,n=e.transactions,a=(0,R.aM)().isMobile,l=(0,r.useState)(""),i=l[0],o=l[1];return(0,r.useEffect)((function(){var e=0;n.forEach((function(t,r){r<=s&&(e+=+t.price)})),o(e.toFixed(2))}),[]),(0,d.jsxs)("div",{className:"".concat(s%2===0?"bg-gray-500":""," text-xl px-2 py-1 grid grid-cols-4 sm:grid-cols-5"),children:[!a&&(0,d.jsx)("h1",{className:"w-2/3",children:new Date(t.trade_timestamp).toUTCString()}),(0,d.jsx)("h1",{className:"buy"===t.type?"text-green-500":"text-red-500",children:t.type.toUpperCase()}),(0,d.jsx)("h1",{children:parseFloat(t.base_volume).toFixed(2)}),(0,d.jsx)("h1",{children:parseFloat(t.price).toFixed(2)}),(0,d.jsx)("h1",{children:parseFloat(i).toFixed(2)})]})},V=function(e){var t=e.coin,s=(0,R.aM)().isMobile,l=(0,r.useState)("HIVE_DLUX"),i=l[0],c=l[1],_=(0,r.useState)([]),x=_[0],m=_[1],h=(0,n.sJ)(a.H3),f=(0,u.$G)().t;return(0,r.useEffect)((function(){o().get("".concat(h,"api/pairs")).then((function(e){var s=e.data;c("HIVE"===t?s[0].ticker_id:s[1].ticker_id)}))}),[]),(0,r.useEffect)((function(){i&&o().get("".concat(h,"api/historical/").concat(i,"?depth=200")).then((function(e){var t=e.data,s=t.buy.concat(t.sell).sort((function(e,t){return t.trade_timestamp-e.trade_timestamp}));m(s)}))}),[i]),(0,d.jsxs)("div",{className:"flex flex-col text-white",children:[(0,d.jsx)("h1",{className:"text-xl",children:f("tradeHistory")}),(0,d.jsxs)("div",{className:"grid mt-2 mb-1 text-xl grid-cols-4 sm:grid-cols-5",children:[!s&&(0,d.jsx)("h1",{children:f("date").toUpperCase()}),(0,d.jsx)("h1",{children:f("type").toUpperCase()}),(0,d.jsx)("h1",{children:"DLUX"}),(0,d.jsx)("h1",{children:"HIVE"}),(0,d.jsx)("h1",{children:f("total").toUpperCase()})]}),x.map((function(e,t){return(0,d.jsx)(K,{transaction:e,transactions:x,i:t})}))]})},H=s(5152),G=function(e){var t=e.coin,l=(0,n.sJ)(a.H3),i=(0,r.useState)(),c=i[0],_=i[1],u=(0,H.default)((function(){return Promise.all([s.e(279),s.e(229)]).then(s.bind(s,47229))}),{loadableGenerated:{webpack:function(){return[47229]},modules:["../components/DEX/DEXChart.tsx -> react-apexcharts"]}});return(0,r.useEffect)((function(){o().get("".concat(l,"dex")).then((function(e){var s=e.data;_("HIVE"===t?(0,y.IR)(s.markets.hive.days):(0,y.IR)(s.markets.hbd.days))}))}),[t]),c?(0,d.jsx)("div",{style:{height:"50vh"},children:(0,d.jsx)(u,{height:"100%",series:c.series,type:"candlestick",options:{chart:{type:"candlestick",height:"100%",foreColor:"white"},title:{text:"".concat(t,"/DLUX"),align:"left"},xaxis:{type:"datetime"},yaxis:{tooltip:{enabled:!0}}}})}):(0,d.jsx)("div",{className:"text-center text-white text-xl",children:"Loading charts..."})},q=function(){var e=(0,R.aM)().isMobile,t=(0,r.useState)("HIVE"),s=t[0],l=t[1],i=(0,n.FV)(a.db),c=(0,b.Z)(i,2),_=(c[0],c[1]),u=(0,n.sJ)(a.H3);return(0,r.useEffect)((function(){o().get("".concat(u,"api/protocol")).then((function(e){var t=e.data;_(t.multisig)}))}),[]),(0,d.jsx)("div",{className:"flex w-full justify-center",children:(0,d.jsxs)("div",{className:"flex flex-col  justify-center items-center gap-9",children:[(0,d.jsxs)("div",{className:"flex justify-center",children:[(0,d.jsx)("button",{onClick:function(){return l("HIVE")},className:"p-2 ".concat("HIVE"===s&&"bg-gray-800"," rounded-l-full bg-gray-700 text-white transition-all"),children:"HIVE"}),(0,d.jsx)("button",{onClick:function(){return l("HBD")},className:"p-2 ".concat("HBD"===s&&"bg-gray-800"," rounded-r-full bg-gray-700 text-white transition-all"),children:"HBD"})]}),(0,d.jsxs)("div",{className:"flex flex-col sm:mx-10 bg-gray-600 mb-3 border-2 rounded-xl border-gray-800 p-5 justify-center",children:[(0,d.jsx)("div",{className:"flex flex-wrap justify-center",children:(0,d.jsx)(F,{coin:s})}),!e&&(0,d.jsx)("div",{className:"my-3",children:(0,d.jsx)(G,{coin:s})}),(0,d.jsxs)("div",{className:"flex flex-col my-5 gap-2 xl:flex-row xl:justify-between xl:gap-10",children:[(0,d.jsx)(I,{coin:s,type:"buy"}),(0,d.jsx)(I,{coin:s,type:"sell"})]}),(0,d.jsxs)("div",{className:"flex flex-col gap-2 xl:flex-row xl:gap-10 w-full mb-4",children:[(0,d.jsx)(W,{coin:s,type:"buy"}),(0,d.jsx)(W,{coin:s,type:"sell"})]}),(0,d.jsx)("div",{className:"mt-5",children:(0,d.jsx)(V,{coin:s})})]})]})})},J=s(76467),X=function(){var e=(0,n.sJ)(a.KL),t=(0,n.sJ)(a.c9);return(0,d.jsxs)("div",{children:[(0,d.jsx)("title",{children:e?"Inv-".concat(e.name):"Inventory"}),e&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.LP,{}),(0,d.jsxs)("div",{className:"",children:["mint"===t&&(0,d.jsx)(x,{}),"nft"===t&&(0,d.jsx)(L,{}),"tokens"===t&&(0,d.jsx)(U,{}),"dex"===t&&(0,d.jsx)(J.default,{children:(0,d.jsx)(q,{})})]})]})]})},Z=(0,H.default)((function(){return Promise.resolve(X)}),{ssr:!1})},59415:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/inventory",function(){return s(50223)}])}},function(e){e.O(0,[774,617,874,33,888,179],(function(){return t=59415,e(e.s=t);var t}));var t=e.O();_N_E=t}]);