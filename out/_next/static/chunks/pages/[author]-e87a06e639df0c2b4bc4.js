(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[446],{13813:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var r=n(30266),i=n(809),a=n.n(i),o=n(67294);function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const f={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0};class p extends o.Component{constructor(e){let t;super(e),this.reCalculateColumnCount=this.reCalculateColumnCount.bind(this),this.reCalculateColumnCountDebounce=this.reCalculateColumnCountDebounce.bind(this),t=this.props.breakpointCols&&this.props.breakpointCols.default?this.props.breakpointCols.default:parseInt(this.props.breakpointCols)||2,this.state={columnCount:t}}componentDidMount(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}componentDidUpdate(){this.reCalculateColumnCount()}componentWillUnmount(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}reCalculateColumnCountDebounce(){window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame((()=>{this.reCalculateColumnCount()}))):this.reCalculateColumnCount()}reCalculateColumnCount(){const e=window&&window.innerWidth||1/0;let t=this.props.breakpointCols;"object"!==typeof t&&(t={default:parseInt(t)||2});let n=1/0,r=t.default||2;for(let i in t){const a=parseInt(i);a>0&&e<=a&&a<n&&(n=a,r=t[i])}r=Math.max(1,parseInt(r)||1),this.state.columnCount!==r&&this.setState({columnCount:r})}itemsInColumns(){const e=this.state.columnCount,t=new Array(e),n=o.Children.toArray(this.props.children);for(let r=0;r<n.length;r++){const i=r%e;t[i]||(t[i]=[]),t[i].push(n[r])}return t}renderColumns(){const{column:e,columnAttrs:t={},columnClassName:n}=this.props,r=this.itemsInColumns(),i=100/r.length+"%";let a=n;a&&"string"!==typeof a&&(this.logDeprecated('The property "columnClassName" requires a string'),"undefined"===typeof a&&(a="my-masonry-grid_column"));const s=c(c(c({},e),t),{},{style:c(c({},t.style),{},{width:i}),className:a});return r.map(((e,t)=>o.createElement("div",l({},s,{key:t}),e)))}logDeprecated(e){console.error("[Masonry]",e)}render(){const e=this.props,{children:t,breakpointCols:n,columnClassName:r,columnAttrs:i,column:a,className:u}=e,c=s(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]);let d=u;return"string"!==typeof u&&(this.logDeprecated('The property "className" requires a string'),"undefined"===typeof u&&(d="my-masonry-grid")),o.createElement("div",l({},c,{className:d}),this.renderColumns())}}p.defaultProps=f;var h=p,m=n(85518),y=n(11163),v=n(45051),b=n(87893),g=n(37039),w=n(34415),j=n(43196),x=n(45155),_=n(79352),P=n(85893),C=["https://","http://"],O=function(e){var t=e.userData,n=e.username,r=e.author;return(0,P.jsx)("div",{className:"flex flex-col items-center w-full",children:(0,P.jsxs)("div",{className:"relative overflow-hidden border-2 text-white p-5 rounded-xl border-gray-800 ".concat(null!==t&&void 0!==t&&t.cover_image?"bg-black":"bg-gray-600"," flex-col ").concat(t?"flex":"hidden"," sm:flex-row items-center sm:items-start gap-3 w-full"),children:[(0,P.jsxs)("div",{className:"flex flex-col items-center justify-center z-10",children:[t&&(0,P.jsx)("img",{height:165,width:165,src:t.profile_image?t.profile_image:v.$8,alt:"profile"}),(0,P.jsx)("h1",{className:"text-xl my-2",children:"hive"===n.provider?r:null===t||void 0===t?void 0:t.name})]}),t&&(0,P.jsxs)("div",{className:"z-40 mx-5 my-auto",children:[(0,P.jsx)("h1",{className:"text-2xl mt-2",children:null===t||void 0===t?void 0:t.name}),t.about&&(0,P.jsxs)("div",{className:"flex items-center gap-2",children:[(0,P.jsx)(_.IIZ,{}),(0,P.jsx)("h1",{children:t.about})]}),t.location&&(0,P.jsxs)("div",{className:"flex items-center gap-2",children:[(0,P.jsx)(_.l65,{}),(0,P.jsx)("h1",{children:t.location})]}),t.website&&(0,P.jsx)("a",{target:"_blank",href:t.website,children:(0,P.jsxs)("div",{className:"flex items-center gap-2 hover:text-gray-300",children:[(0,P.jsx)(_.Utb,{}),(0,P.jsx)("h1",{children:function(e){var t="";return C.forEach((function(n){e.includes(n)&&(t=e.split("").splice(n.length,e.length).join("")).includes("www.")&&(t=e.split("www.",t.length)[1])})),t||e}(t.website)})]})})]}),t&&(0,P.jsxs)("div",{className:"sm:absolute z-20 right-7 bottom-6 flex gap-3",children:[t.facebook&&(0,P.jsx)("a",{target:"_blank",href:"https://www.facebook.com/"+t.facebook,className:"hover:text-gray-300",children:(0,P.jsx)(x.kKz,{size:25})}),t.instagram&&(0,P.jsx)("a",{target:"_blank",className:"hover:text-gray-300",href:"https://www.instagram.com/"+t.instagram,children:(0,P.jsx)(x.Z8w,{size:25})}),t.github&&(0,P.jsx)("a",{target:"_blank",className:"hover:text-gray-300",href:"https://www.github.com/"+t.github,children:(0,P.jsx)(x.lfl,{size:25})}),t.linkedin&&(0,P.jsx)("a",{target:"_blank",className:"hover:text-gray-300",href:"https://www.linkedin.com/"+t.linkedin,children:(0,P.jsx)(x.juy,{size:25})}),t.twitter&&(0,P.jsx)("a",{target:"_blank",className:"hover:text-gray-300",href:"https://www.twitter.com/"+t.twitter,children:(0,P.jsx)(x.Xai,{size:25})})]}),t&&t.cover_image&&(0,P.jsx)("img",{className:"absolute top-0 left-0 z-0 w-full pb-1 opacity-40",src:t.cover_image,width:120,height:120,alt:"coverPhoto"})]})})},S=n(47320),k=n(5434),N=function(e){var t=e.title,n=e.images,i=e.votes,s=e.speak,l=e.playlist,u=e.author,c=e.permlink,d=e.pfp,f=(0,o.useState)(u),p=f[0],h=f[1],m=(0,o.useState)(d),b=m[0],g=m[1],j=(0,y.useRouter)(),x=(0,w.useHiveKeychainCeramic)(v.LX);return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.idx.get("basicProfile",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();"d"===u[0]&&e(u).then((function(e){h(e.name),g("https://ipfs-3speak.b-cdn.net/ipfs/"+e.image.original.src.split("ipfs://")[1])}))}),[]),(0,P.jsxs)("div",{className:"border-2 my-3 border-gray-800 rounded-xl w-full bg-gray-600",children:[(0,P.jsx)("div",{className:"rounded-t-xl",children:s?(0,P.jsx)("div",{className:"w-full flex justify-center",children:(0,P.jsx)(S.Z,{className:"rounded-t-xl w-full",playerId:"my-unique-id",playerScript:"https://cdn.jwplayer.com/libraries/HT7Dts3H.js",playlist:l})}):n&&n.length>=1&&(0,P.jsx)("img",{className:"w-full h-full rounded-t-xl border-b-2 border-gray-800",src:n[0],alt:"thumbnail"})}),(0,P.jsxs)("div",{className:"pt-2 px-5",children:[(0,P.jsxs)("div",{className:"flex items-center gap-2",children:[(0,P.jsx)("img",{src:b,className:"rounded-full",height:30,width:30,alt:"profile_picture"}),(0,P.jsx)("h1",{children:p})]}),(0,P.jsx)("div",{className:"flex justify-center",children:t}),(0,P.jsxs)("div",{className:"p-2 flex justify-center gap-2",children:[(0,P.jsxs)("button",{onClick:function(){return j.replace("/@".concat(u,"/").concat(c))},className:"flex gap-1 items-center bg-red-500 hover:bg-red-600 transition-all p-1 px-2 rounded-xl",children:[(0,P.jsx)(_.iB2,{})," ",i?i.length:0]}),(0,P.jsx)("button",{onClick:function(){return j.replace("/@".concat(u,"/").concat(c))},className:"flex gap-1 justify-center px-5 items-center bg-blue-500 hover:bg-blue-600 transition-all p-1 rounded-xl",children:(0,P.jsx)(k.Hlg,{})})]})]})]})},A=function(){var e=new b.Client(v.ZA),t=(0,w.useHiveKeychainCeramic)(v.LX),n=(0,y.useRouter)(),i=n.query.author,s=(0,o.useState)({username:"",provider:""}),l=s[0],u=s[1],c=(0,o.useState)([]),d=c[0],f=c[1],p=(0,o.useState)(null),x=p[0],_=p[1],C=(0,g.$G)().t;return(0,o.useEffect)((function(){if(i){var e=i.slice(0,1);"@"===e?u({username:i.slice(1,i.length),provider:"hive"}):"d"===e?u({username:i,provider:"ceramic"}):n.push("/404")}}),[i]),(0,o.useEffect)((function(){var n=function(){var e=(0,r.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.idx.get("basicProfile",n);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(l)if("hive"===l.provider){var i={tag:l.username,limit:10};e.database.getDiscussions("blog",i).then((function(e){f(e)})),e.database.getAccounts([l.username]).then((function(e){e[0]&&_(JSON.parse(e[0].posting_json_metadata).profile)}))}else l.username&&(n(l.username).then((function(e){e&&_(e.profile?e.profile:{about:e.description||null,name:e.name||null,profile_image:"https://ipfs-3speak.b-cdn.net/ipfs/"+e.image.original.src.split("ipfs://")[1]||0,cover_image:"https://ipfs-3speak.b-cdn.net/ipfs/"+e.background.original.src.split("ipfs://")[1]||0,website:e.url||null,location:e.residenceCountry||null})})),(0,j.ww)(l.username).then((function(e){f(e)})))}),[l]),(0,P.jsxs)("div",{className:"flex flex-col text-white my-10 mx-2 sm:mx-10",children:[(0,P.jsx)(O,{userData:x,username:l,author:i}),(0,P.jsxs)("div",{className:"text-center",children:[(0,P.jsx)("h1",{className:"my-3 font-bold text-xl",children:C("recent")}),(0,P.jsx)(h,{breakpointCols:m.tq?1:2,className:"masonry-grid sm:mx-4",columnClassName:"masonry-grid_column",children:d.map((function(e){var t=e.json_metadata?JSON.parse(e.json_metadata):null;return e.active_votes?(0,P.jsx)(N,{author:e.author,permlink:e.permlink,speak:!1,title:e.title,votes:e.active_votes,images:t.image,playlist:[],pfp:null!==x&&void 0!==x&&x.profile_image?x.profile_image:v.$8},e.permlink):(0,P.jsx)(N,{author:e.creatorId,permlink:e.permlink,pfp:v.$8,speak:!1,title:e.content.title?e.content.title:"",votes:[],images:[],playlist:[]},e.permlink)}))})]})]})}},2719:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[author]",function(){return n(13813)}])},42804:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(34171)),i=c(n(96359)),a=c(n(99569)),o=c(n(98886)),s=c(n(78454)),l=c(n(56565)),u=c(n(84515));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return{onAdPlay:r.default.bind(e),onBeforePlay:i.default.bind(e),onFullScreen:a.default.bind(e),onMute:o.default.bind(e),onPlay:s.default.bind(e),onTime:l.default.bind(e),onVideoLoad:u.default.bind(e)}}},34171:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){this.state.adHasPlayed?this.props.onAdResume(e):(this.props.onAdPlay(e),this.setState({adHasPlayed:!0}))}},96359:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.getPlaylistItem();this.state.hasPlayed||this.state.adHasPlayed||"function"!==typeof this.props.generatePrerollUrl||t.playAd(this.props.generatePrerollUrl(n))}},99569:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e.fullscreen?this.props.onEnterFullScreen(e):this.props.onExitFullScreen(e)}},98886:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e.mute?this.props.onMute(e):this.props.onUnmute(e)}},78454:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){"autostart"===e.playReason?(this.setState({hasPlayed:!0}),this.props.onAutoStart(e)):!this.state.hasPlayed||"buffering"!==e.oldstate&&"paused"!==e.oldstate?(this.props.onPlay(e),this.setState({hasPlayed:!0})):this.props.onResume(e)}},56565:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=this.state.hasFired,n=e.position,r=e.duration,i=!1;this.props.onTime(e),!t.threeSeconds&&n>3&&(this.props.onThreeSeconds(),t.threeSeconds=!0,i=!0),!t.tenSeconds&&n>10&&(this.props.onTenSeconds(),t.tenSeconds=!0,i=!0),!t.thirtySeconds&&n>30&&(this.props.onThirtySeconds(),t.thirtySeconds=!0,i=!0),!t.twentyFivePercent&&n/r*100>25&&(this.props.onTwentyFivePercent(),t.twentyFivePercent=!0,i=!0),!t.fiftyPercent&&n/r*100>50&&(this.props.onFiftyPercent(),t.fiftyPercent=!0,i=!0),!t.seventyFivePercent&&n/r*100>75&&(this.props.onSeventyFivePercent(),t.seventyFivePercent=!0,i=!0),!t.ninetyFivePercent&&n/r*100>95&&(this.props.onNinetyFivePercent(),t.ninetyFivePercent=!0,i=!0),i&&this.setState({hasFired:t})}},84515:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){this.setState({hasFired:{}}),this.props.onVideoLoad(e)}},19090:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){},r={aspectRatio:"inherit",file:"",isAutoPlay:void 0,isMuted:void 0,onAdPlay:n,onAdResume:n,onAdSkipped:n,onAdComplete:n,onEnterFullScreen:n,onExitFullScreen:n,onMute:n,onUnmute:n,onAutoStart:n,onResume:n,onPlay:n,onClose:n,onReady:n,onError:n,onAdPause:n,onPause:n,onVideoLoad:n,onOneHundredPercent:n,onThreeSeconds:n,onTenSeconds:n,onThirtySeconds:n,onTwentyFivePercent:n,onFiftyPercent:n,onSeventyFivePercent:n,onNinetyFivePercent:n,onTime:n,onBuffer:n,onBufferChange:n,playlist:"",useMultiplePlayerScripts:!1};t.default=r},53817:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=e.onload||function(){};return function(){n(),t()}}},4080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){var t;if("on"===e.slice(0,2)){var n=e.slice(2),r=(t=n,Array.isArray(t)?t:Array.from(t)),i=r[0],a=r.slice(1);return""+i.toLowerCase()+a.join("")}return null}},87890:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(e){var t=e.aspectRatio,r=e.customProps,i=void 0===r?{}:r,a=e.file,o=e.generatePrerollUrl,s=e.image,l=e.isAutoPlay,u=e.isMuted,c=e.licenseKey,d=e.playlist,f=!!o,p={};return c&&(p.key=c),d?p.playlist=d:a&&(p.file=a),t&&"inherit"!==t&&(p.aspectratio=t),f&&(p.advertising={client:"googima",admessage:"Ad \u2014 xxs left",autoplayadsmuted:!0}),"undefined"!==typeof l&&(p.autostart=!!l),"undefined"!==typeof u&&(p.mute=!!u),s&&(p.image=s),n(p,i)}},7512:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(4080),a=(r=i)&&r.__esModule?r:{default:r};t.default=function(e){var t=e.component,n=e.player,r=e.playerOpts;n.setup(r);var i={};Object.keys(t.props).forEach((function(e){var n=(0,a.default)(e);n&&(i[n]=t.props[e])})),i.adPlay=t.eventHandlers.onAdPlay,i.beforeComplete=t.props.onOneHundredPercent,i.beforePlay=function(e){t.eventHandlers.onBeforePlay(e,n)},i.fullscreen=t.eventHandlers.onFullScreen,i.mute=t.eventHandlers.onMute,i.play=t.eventHandlers.onPlay,i.playlistItem=t.eventHandlers.onVideoLoad,i.time=t.eventHandlers.onTime,Object.keys(i).forEach((function(e){n.on(e,i[e])}))}},12876:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.context,n=e.onLoadCallback,r=e.scriptSrc,i=e.uniqueScriptId,a=t.createElement("script");a.id=i,a.src=r,a.onload=n,t.head.appendChild(a)}},40648:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.jwplayer&&t.jwplayer(e);n&&n.remove()}},57668:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){var t=e.context,n=e.playerId,r=t.__JW_PLAYER_CONFIGS__=t.__JW_PLAYER_CONFIGS__||{},i=r[n];i?t.jwplayer.defaults=i:r[n]=t.jwplayer.defaults}},84606:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(45697),a=(r=i)&&r.__esModule?r:{default:r};var o={aspectRatio:a.default.oneOf(["inherit","1:1","16:9"]),className:a.default.string,customProps:a.default.object,file:a.default.string,generatePrerollUrl:a.default.func,image:a.default.string,isAutoPlay:a.default.bool,isMuted:a.default.bool,licenseKey:a.default.string,onAdPause:a.default.func,onAdPlay:a.default.func,onAdResume:a.default.func,onAdSkipped:a.default.func,onAdComplete:a.default.func,onAutoStart:a.default.func,onEnterFullScreen:a.default.func,onError:a.default.func,onExitFullScreen:a.default.func,onFiftyPercent:a.default.func,onMute:a.default.func,onNinetyFivePercent:a.default.func,onOneHundredPercent:a.default.func,onPause:a.default.func,onPlay:a.default.func,onReady:a.default.func,onResume:a.default.func,onSeventyFivePercent:a.default.func,onTenSeconds:a.default.func,onThirtySeconds:a.default.func,onThreeSeconds:a.default.func,onTwentyFivePercent:a.default.func,onUnmute:a.default.func,onVideoLoad:a.default.func,onBuffer:a.default.func,onBufferChange:a.default.func,playerId:a.default.string.isRequired,playerScript:a.default.string.isRequired,playlist:a.default.oneOfType([a.default.string,a.default.array]),useMultiplePlayerScripts:a.default.bool};t.default=o},47320:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(67294),a=y(i),o=y(n(69590)),s=y(n(42804)),l=y(n(53817)),u=y(n(87890)),c=y(n(7512)),d=y(n(12876)),f=y(n(40648)),p=y(n(57668)),h=y(n(19090)),m=y(n(84606));function y(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={adHasPlayed:!1,hasPlayed:!1,hasFired:{}},n.eventHandlers=(0,s.default)(n),n.uniqueScriptId="jw-player-script",e.useMultiplePlayerScripts&&(n.uniqueScriptId+="-"+e.playerId),n.videoRef=null,n._initialize=n._initialize.bind(n),n._setVideoRef=n._setVideoRef.bind(n),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){var e=!!window.jwplayer,t=document.getElementById(this.uniqueScriptId),n=this.props.useMultiplePlayerScripts;n||!e?n&&t?this._initialize():t?t.onload=(0,l.default)(t,this._initialize):(0,d.default)({context:document,onLoadCallback:this._initialize,scriptSrc:this.props.playerScript,uniqueScriptId:this.uniqueScriptId}):this._initialize()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props.file!==e.file,n=!(0,o.default)(this.props.playlist,e.playlist);return t||n}},{key:"componentDidUpdate",value:function(){window.jwplayer&&window.jwplayer(this.videoRef)&&this._initialize()}},{key:"componentWillUnmount",value:function(){(0,f.default)(this.videoRef,window)}},{key:"_initialize",value:function(){var e=this.props,t=e.playerId;e.useMultiplePlayerScripts&&(0,p.default)({context:window,playerId:t});var n=window.jwplayer(this.videoRef);if(n){var r=(0,u.default)(this.props);(0,c.default)({component:this,player:n,playerOpts:r})}}},{key:"_setVideoRef",value:function(e){this.videoRef=e}},{key:"render",value:function(){return a.default.createElement("div",{className:this.props.className},a.default.createElement("div",{id:this.props.playerId,ref:this._setVideoRef}))}}]),t}(i.Component);v.defaultProps=h.default,v.displayName="ReactJWPlayer",v.propTypes=m.default,t.Z=v}},function(e){e.O(0,[937,158,774,888,179],(function(){return t=2719,e(e.s=t);var t}));var t=e.O();_N_E=t}]);