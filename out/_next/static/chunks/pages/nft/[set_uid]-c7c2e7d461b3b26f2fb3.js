(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[783],{24157:function(_,e,t){"use strict";t.d(e,{A:function(){return d}});var r=t(92809),s=t(9669),n=t.n(s),a=t(67294),o=t(2804),c=t(63569),i=t(43196),u=t(85893);function l(_,e){var t=Object.keys(_);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(_);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(_,e).enumerable}))),t.push.apply(t,r)}return t}function E(_){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){(0,r.Z)(_,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(_,e,Object.getOwnPropertyDescriptor(t,e))}))}return _}var d=function(_){var e=_.set,t=(0,o.sJ)(c.H3),r=(0,o.sJ)(c.KL),s=(0,o.sJ)(c.uo),l=(0,a.useState)({}),d=l[0],O=l[1],P=(0,a.useState)({username:"",percentage:0}),m=P[0],p=P[1];(0,a.useEffect)((function(){r&&e&&n().get("".concat(t,"api/set/").concat(e)).then((function(_){var e=_.data,t={};e.set.royalty_accounts.split(",").forEach((function(_){t[_.split("_")[0]]=+_.split("_")[1]})),O(t)}))}),[]);return r&&d[r.name]?(0,u.jsxs)("div",{className:"p-3 bg-gray-600 border-2 border-gray-800 rounded-xl mb-4 w-full mx-5 sm:w-3/4 mr-5",children:[(0,u.jsx)("h1",{className:"text-center",children:"Assign royalties"}),(0,u.jsxs)("div",{className:"my-2",children:[(0,u.jsx)("label",{htmlFor:"username",children:"@Username"}),(0,u.jsx)("input",{onChange:function(_){return p(E(E({},m),{},{username:_.target.value}))},placeholder:"Username to assign...",name:"username",type:"text",className:"px-3 py-1 rounded-lg border bg-gray-500 border-gray-300 focus:outline-none focus:ring-2 w-full focus:ring-gray-200"})]}),(0,u.jsxs)("div",{className:"my-2 relative",children:[(0,u.jsx)("label",{className:"absolute right-9 top-1",htmlFor:"percentage",children:"%"}),(0,u.jsx)("input",{onChange:function(_){return p(E(E({},m),{},{percentage:+_.target.value}))},className:"px-3 w-full py-1 rounded-lg border bg-gray-500 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200",min:1,name:"percentage",max:100,type:"number",step:.1,defaultValue:1})]}),(0,u.jsx)("div",{className:"flex justify-center",children:(0,u.jsx)("button",{onClick:function(){var _=d[r.name],t=_/100*m.percentage;d[r.name]=_-t,d[m.username]=t;var n="";Object.keys(d).forEach((function(_){return n+="".concat(_,"_").concat(d[_],",")})),(0,i.Fg)(n,e,r.name,s)},className:"rounded-lg border border-white py-1 px-6 bg-gray-500 focus:ring-4 mx-auto focus:outline-none focus:ring-gray-700",children:"Assign"})})]}):(0,u.jsx)("div",{className:"mb-10",children:(0,u.jsx)("h1",{children:"You can't assign royalties"})})}},11222:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _Users_noclue_ps_Desktop_Programavimas_Workspaces_spk_wallet_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(92809),_Users_noclue_ps_Desktop_Programavimas_Workspaces_spk_wallet_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(83789),_Users_noclue_ps_Desktop_Programavimas_Workspaces_spk_wallet_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(80318),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67294),next_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(11163),axios__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9669),axios__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__),recoil__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2804),_atoms__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(63569),_constants__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(45051),react_icons_ai__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(8193),next_export_i18n__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(37039),_utils__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(43196),_components__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(43837),_components_Modals_Confirmation__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(28111),_components_Modals_AuctionForm__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(23504),_components_Modals_SellForm__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(18851),_components_Card_RoyaltyCard__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(24157),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(85893);function ownKeys(_,e){var t=Object.keys(_);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(_);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(_,e).enumerable}))),t.push.apply(t,r)}return t}function _objectSpread(_){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(t),!0).forEach((function(e){(0,_Users_noclue_ps_Desktop_Programavimas_Workspaces_spk_wallet_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(_,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(e){Object.defineProperty(_,e,Object.getOwnPropertyDescriptor(t,e))}))}return _}var NFTManagement=function NFTManagement(){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),description=_useState[0],setDescription=_useState[1],_useState2=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),attributes=_useState2[0],setAttributes=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),showActions=_useState3[0],setShowActions=_useState3[1],_useState4=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),script=_useState4[0],setScript=_useState4[1],_useState5=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),confirm=_useState5[0],setConfirm=_useState5[1],_useState6=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),selling=_useState6[0],setSelling=_useState6[1],_useState7=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),isTransfering=_useState7[0],setIsTransfering=_useState7[1],_useState8=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),auction=_useState8[0],setAuction=_useState8[1],router=(0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(),set_uid=router.query.set_uid,uid=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return set_uid?set_uid.split(":")[1]:""}),[]),set=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return set_uid?set_uid.split(":")[0]:""}),[]),apiLink=(0,recoil__WEBPACK_IMPORTED_MODULE_4__.sJ)(_atoms__WEBPACK_IMPORTED_MODULE_5__.H3),user=(0,recoil__WEBPACK_IMPORTED_MODULE_4__.sJ)(_atoms__WEBPACK_IMPORTED_MODULE_5__.KL),prefix=(0,recoil__WEBPACK_IMPORTED_MODULE_4__.sJ)(_atoms__WEBPACK_IMPORTED_MODULE_5__.uo),_useRecoilState=(0,recoil__WEBPACK_IMPORTED_MODULE_4__.FV)(_atoms__WEBPACK_IMPORTED_MODULE_5__.D2),_useRecoilState2=(0,_Users_noclue_ps_Desktop_Programavimas_Workspaces_spk_wallet_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_15__.Z)(_useRecoilState,2),_broadcasts=_useRecoilState2[0],setBroadcasts=_useRecoilState2[1],_useTranslation=(0,next_export_i18n__WEBPACK_IMPORTED_MODULE_7__.$G)(),t=_useTranslation.t;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){set&&user?axios__WEBPACK_IMPORTED_MODULE_3___default().get("".concat(apiLink,"api/set/").concat(set)).then((function(_){var e=_.data;setScript(e.set.script)})):router.push("/")}),[]);var handleSetPfp=function(){(0,_utils__WEBPACK_IMPORTED_MODULE_8__.n2)(user.name,prefix,{set:set,uid:uid}).then((function(_){_&&_.success&&setBroadcasts((function(e){return[].concat((0,_Users_noclue_ps_Desktop_Programavimas_Workspaces_spk_wallet_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_16__.Z)(e),[_])}))}))},handleMelt=function(){setConfirm(!1),(0,_utils__WEBPACK_IMPORTED_MODULE_8__.ZJ)(user.name,{set:set,uid:uid},prefix).then((function(_){_&&_.success&&setBroadcasts((function(e){return[].concat((0,_Users_noclue_ps_Desktop_Programavimas_Workspaces_spk_wallet_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_16__.Z)(e),[_])}))}))},fetchImage=function fetchImage(){uid&&set?fetch("https://ipfs.io/ipfs/".concat(script,"?").concat(uid)).then((function(_){return _.text()})).then((function(data){var code="(//".concat(data,'\n)("').concat(uid,'")'),SVG=eval(code);setDescription(SVG.set.Description);var attributeObj={};SVG.attributes.forEach((function(_){attributeObj=_objectSpread(_objectSpread({},attributeObj),_)})),setAttributes(attributeObj),document.getElementById("".concat(set,"-").concat(uid,"-details")).innerHTML=SVG.HTML})):router.push("/")};return(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){script&&fetchImage()}),[script]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div",{className:"w-full flex flex-col sm:flex-row justify-between mt-5 mb-2 text-white text-xl",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div",{className:"flex sm:w-1/3 mx-10 flex-col gap-4 text-center bg-gray-600 rounded-xl border-2 border-gray-800 ",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div",{id:"".concat(set,"-").concat(uid,"-details"),className:"w-1/2 mx-auto my-5"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h1",{className:"text-white text-xl font-bold my-5",children:uid}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("p",{className:"text-white text-center mx-20",children:description}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div",{className:"my-8",children:attributes&&Object.keys(attributes).map((function(_){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div",{className:"mx-20 flex my-2 items-center gap-5",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h1",{className:"text-white text-left px-2 py-1 w-auto rounded-xl",style:{backgroundColor:_constants__WEBPACK_IMPORTED_MODULE_6__.Cn[_]},children:_}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h1",{className:"text-white text-center",children:attributes[_]})]})}))})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div",{className:"flex flex-col my-10 flex-grow items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_Card_RoyaltyCard__WEBPACK_IMPORTED_MODULE_13__.A,{set:set}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div",{className:"flex flex-col items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("button",{onClick:function(){return setShowActions(!showActions)},className:"px-4 py-2 h-16 flex items-center gap-3 rounded-lg border-2 text-white bg-transparent border-gray-700 bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",children:["Actions"," ",showActions?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_17__.N9e,{}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_17__.w4J,{})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div",{className:"".concat(showActions?"":"hidden"," bg-gray-600 rounded-xl p-5 border-2 border-gray-800 my-3 flex gap-2"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("button",{onClick:handleSetPfp,className:"px-4 py-2 rounded-lg border-2 text-green-500 bg-transparent border-green-500 focus:outline-none focus:ring-2 focus:ring-green-700",children:"PFP"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("button",{onClick:function(){return setIsTransfering(!0)},className:"px-4 py-2 rounded-lg border-2 text-blue-500 bg-transparent border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-700",children:t("give")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("button",{onClick:function(){return setAuction(!0)},className:"px-4 py-2 rounded-lg border-2 text-yellow-500 bg-transparent border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-700",children:t("auction")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("button",{onClick:function(){return setSelling(!0)},className:"px-4 py-2 rounded-lg border-2 text-red-500 bg-transparent border-red-500 focus:outline-none focus:ring-2 focus:ring-red-700",children:t("sell")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("button",{onClick:function(){return setConfirm(!0)},className:"px-4 py-2 rounded-lg border-2 text-red-600 bg-transparent border-red-600 focus:outline-none focus:ring-2 focus:ring-red-800",children:"Melt"})]})]})]}),isTransfering&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components__WEBPACK_IMPORTED_MODULE_9__.oQ,{uid:uid,handleClose:function(){return setIsTransfering(!1)},set:set}),auction&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_Modals_AuctionForm__WEBPACK_IMPORTED_MODULE_11__.f,{set:set,uid:uid,handleClose:function(){return setAuction(!1)},kind:"nft"}),selling&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_Modals_SellForm__WEBPACK_IMPORTED_MODULE_12__.M,{set:set,uid:uid,handleClose:function(){return setSelling(!1)}}),confirm&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_Modals_Confirmation__WEBPACK_IMPORTED_MODULE_10__.T,{handleClose:function(){return setConfirm(!1)},handleContinue:handleMelt})]})};__webpack_exports__.default=NFTManagement},68311:function(_,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nft/[set_uid]",function(){return t(11222)}])}},function(_){_.O(0,[617,774,888,179],(function(){return e=68311,_(_.s=e);var e}));var e=_.O();_N_E=e}]);