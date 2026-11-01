import{a as e,r as t,t as n}from"./rolldown-runtime-BWaJ3C7D.js";var r=n((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function w(){}var T={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function D(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ee(e,t){return D(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var te=/\/+/g;function ne(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function A(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(w,w):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function j(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,j(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ne(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(te,`$&/`)+`/`),j(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=ee(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(te,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ne(a,u),c+=j(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ne(a,u++),c+=j(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return j(A(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function M(e,t,n){if(e==null)return e;var r=[],i=0;return j(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function re(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var N=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function P(e){var t=T.T,n={};n.types=t===null?null:t.types,T.T=n;try{var r=e(),i=T.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(w,N)}catch(e){N(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),T.T=t}}function F(e){var t=T.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else P(F.bind(null,e))}var ie={map:M,forEach:function(e,t,n){M(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return M(e,function(){t++}),t},toArray:function(e){return M(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=ie,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},e.addTransitionType=F,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!E.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return D(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)E.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return D(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:re}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=P,e.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},e.use=function(e){return T.H.use(e)},e.useActionState=function(e,t,n){return T.H.useActionState(e,t,n)},e.useCallback=function(e,t){return T.H.useCallback(e,t)},e.useContext=function(e){return T.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return T.H.useEffect(e,t)},e.useEffectEvent=function(e){return T.H.useEffectEvent(e)},e.useId=function(){return T.H.useId()},e.useImperativeHandle=function(e,t,n){return T.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.H.useMemo(e,t)},e.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return T.H.useReducer(e,t,n)},e.useRef=function(e){return T.H.useRef(e)},e.useState=function(e){return T.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.H.useTransition()},e.version=`19.3.1`})),i=n(((e,t)=>{t.exports=r()})),a=e(i()),o=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),s=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),c=e=>{let t=s(e);return t.charAt(0).toUpperCase()+t.slice(1)},l=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),u=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0},d={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},f=(0,a.forwardRef)(({color:e=`currentColor`,size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i=``,children:o,iconNode:s,...c},f)=>(0,a.createElement)(`svg`,{ref:f,...d,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:l(`lucide`,i),...!o&&!u(c)&&{"aria-hidden":`true`},...c},[...s.map(([e,t])=>(0,a.createElement)(e,t)),...Array.isArray(o)?o:[o]])),p=(e,t)=>{let n=(0,a.forwardRef)(({className:n,...r},i)=>(0,a.createElement)(f,{ref:i,iconNode:t,className:l(`lucide-${o(c(e))}`,`lucide-${e}`,n),...r}));return n.displayName=c(e),n},m=p(`activity`,[[`path`,{d:`M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2`,key:`169zse`}]]),h=p(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),g=p(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),_=p(`arrow-up-right`,[[`path`,{d:`M7 7h10v10`,key:`1tivn9`}],[`path`,{d:`M7 17 17 7`,key:`1vkiza`}]]),v=p(`arrow-up`,[[`path`,{d:`m5 12 7-7 7 7`,key:`hav0vg`}],[`path`,{d:`M12 19V5`,key:`x0mq9r`}]]),y=p(`bell`,[[`path`,{d:`M10.268 21a2 2 0 0 0 3.464 0`,key:`vwvbt9`}],[`path`,{d:`M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326`,key:`11g9vi`}]]),b=p(`bold`,[[`path`,{d:`M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8`,key:`mg9rjx`}]]),x=p(`bot`,[[`path`,{d:`M12 8V4H8`,key:`hb8ula`}],[`rect`,{width:`16`,height:`12`,x:`4`,y:`8`,rx:`2`,key:`enze0r`}],[`path`,{d:`M2 14h2`,key:`vft8re`}],[`path`,{d:`M20 14h2`,key:`4cs60a`}],[`path`,{d:`M15 13v2`,key:`1xurst`}],[`path`,{d:`M9 13v2`,key:`rq6x2g`}]]),S=p(`calendar`,[[`path`,{d:`M8 2v4`,key:`1cmpym`}],[`path`,{d:`M16 2v4`,key:`4m81vk`}],[`rect`,{width:`18`,height:`18`,x:`3`,y:`4`,rx:`2`,key:`1hopcy`}],[`path`,{d:`M3 10h18`,key:`8toen8`}]]),C=p(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),w=p(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),T=p(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),E=p(`circle-check`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),D=p(`circle-x`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),ee=p(`clock`,[[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}],[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),O=p(`cloud-upload`,[[`path`,{d:`M12 13v8`,key:`1l5pq0`}],[`path`,{d:`M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242`,key:`1pljnt`}],[`path`,{d:`m8 17 4-4 4 4`,key:`1quai1`}]]),k=p(`code`,[[`path`,{d:`m16 18 6-6-6-6`,key:`eg8j8`}],[`path`,{d:`m8 6-6 6 6 6`,key:`ppft3o`}]]),te=p(`columns-2`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M12 3v18`,key:`108xh3`}]]),ne=p(`command`,[[`path`,{d:`M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3`,key:`11bfej`}]]),A=p(`compass`,[[`path`,{d:`m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z`,key:`9ktpf1`}],[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),j=p(`copy`,[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]),M=p(`download`,[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]),re=p(`external-link`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]),N=p(`eye-off`,[[`path`,{d:`M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49`,key:`ct8e1f`}],[`path`,{d:`M14.084 14.158a3 3 0 0 1-4.242-4.242`,key:`151rxh`}],[`path`,{d:`M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143`,key:`13bj9a`}],[`path`,{d:`m2 2 20 20`,key:`1ooewy`}]]),P=p(`eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),F=p(`file-text`,[[`path`,{d:`M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z`,key:`1rqfz7`}],[`path`,{d:`M14 2v4a2 2 0 0 0 2 2h4`,key:`tnqrlb`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),ie=p(`flame`,[[`path`,{d:`M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4`,key:`1slcih`}]]),ae=p(`folder`,[[`path`,{d:`M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`,key:`1kt360`}]]),oe=p(`funnel`,[[`path`,{d:`M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z`,key:`sc7q7i`}]]),se=p(`git-commit-horizontal`,[[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}],[`line`,{x1:`3`,x2:`9`,y1:`12`,y2:`12`,key:`1dyftd`}],[`line`,{x1:`15`,x2:`21`,y1:`12`,y2:`12`,key:`oup4p8`}]]),ce=p(`grid-3x3`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M3 9h18`,key:`1pudct`}],[`path`,{d:`M3 15h18`,key:`5xshup`}],[`path`,{d:`M9 3v18`,key:`fh3hqa`}],[`path`,{d:`M15 3v18`,key:`14nvp0`}]]),le=p(`grip-vertical`,[[`circle`,{cx:`9`,cy:`12`,r:`1`,key:`1vctgf`}],[`circle`,{cx:`9`,cy:`5`,r:`1`,key:`hp0tcf`}],[`circle`,{cx:`9`,cy:`19`,r:`1`,key:`fkjjf6`}],[`circle`,{cx:`15`,cy:`12`,r:`1`,key:`1tmaij`}],[`circle`,{cx:`15`,cy:`5`,r:`1`,key:`19l28e`}],[`circle`,{cx:`15`,cy:`19`,r:`1`,key:`f4zoj3`}]]),I=p(`house`,[[`path`,{d:`M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`,key:`5wwlr5`}],[`path`,{d:`M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,key:`r6nss1`}]]),ue=p(`info`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 16v-4`,key:`1dtifu`}],[`path`,{d:`M12 8h.01`,key:`e9boi3`}]]),L=p(`italic`,[[`line`,{x1:`19`,x2:`10`,y1:`4`,y2:`4`,key:`15jd3p`}],[`line`,{x1:`14`,x2:`5`,y1:`20`,y2:`20`,key:`bu0au3`}],[`line`,{x1:`15`,x2:`9`,y1:`4`,y2:`20`,key:`uljnxc`}]]),de=p(`key-round`,[[`path`,{d:`M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z`,key:`1s6t7t`}],[`circle`,{cx:`16.5`,cy:`7.5`,r:`.5`,fill:`currentColor`,key:`w0ekpg`}]]),R=p(`layers`,[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]]),fe=p(`link`,[[`path`,{d:`M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71`,key:`1cjeqo`}],[`path`,{d:`M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71`,key:`19qd67`}]]),pe=p(`loader-circle`,[[`path`,{d:`M21 12a9 9 0 1 1-6.219-8.56`,key:`13zald`}]]),me=p(`magnet`,[[`path`,{d:`m12 15 4 4`,key:`lnac28`}],[`path`,{d:`M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z`,key:`nlhkjb`}],[`path`,{d:`m5 8 4 4`,key:`j6kj7e`}]]),he=p(`maximize-2`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`m21 3-7 7`,key:`1l2asr`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M9 21H3v-6`,key:`wtvkvv`}]]),ge=p(`menu`,[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]),_e=p(`minus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}]]),ve=p(`moon`,[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,key:`kfwtm`}]]),ye=p(`mouse-pointer`,[[`path`,{d:`M12.586 12.586 19 19`,key:`ea5xo7`}],[`path`,{d:`M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z`,key:`277e5u`}]]),be=p(`palette`,[[`path`,{d:`M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z`,key:`e79jfc`}],[`circle`,{cx:`13.5`,cy:`6.5`,r:`.5`,fill:`currentColor`,key:`1okk4w`}],[`circle`,{cx:`17.5`,cy:`10.5`,r:`.5`,fill:`currentColor`,key:`f64h9f`}],[`circle`,{cx:`6.5`,cy:`12.5`,r:`.5`,fill:`currentColor`,key:`qy21gx`}],[`circle`,{cx:`8.5`,cy:`7.5`,r:`.5`,fill:`currentColor`,key:`fotxhn`}]]),xe=p(`paperclip`,[[`path`,{d:`m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551`,key:`1miecu`}]]),Se=p(`party-popper`,[[`path`,{d:`M5.8 11.3 2 22l10.7-3.79`,key:`gwxi1d`}],[`path`,{d:`M4 3h.01`,key:`1vcuye`}],[`path`,{d:`M22 8h.01`,key:`1mrtc2`}],[`path`,{d:`M15 2h.01`,key:`1cjtqr`}],[`path`,{d:`M22 20h.01`,key:`1mrys2`}],[`path`,{d:`m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10`,key:`hbicv8`}],[`path`,{d:`m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17`,key:`1i94pl`}],[`path`,{d:`m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7`,key:`1cofks`}],[`path`,{d:`M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z`,key:`4kbmks`}]]),Ce=p(`pen`,[[`path`,{d:`M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,key:`1a8usu`}]]),we=p(`pen-tool`,[[`path`,{d:`M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z`,key:`nt11vn`}],[`path`,{d:`m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18`,key:`15qc1e`}],[`path`,{d:`m2.3 2.3 7.286 7.286`,key:`1wuzzi`}],[`circle`,{cx:`11`,cy:`11`,r:`2`,key:`xmgehs`}]]),Te=p(`play`,[[`path`,{d:`M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,key:`10ikf1`}]]),z=p(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),Ee=p(`qr-code`,[[`rect`,{width:`5`,height:`5`,x:`3`,y:`3`,rx:`1`,key:`1tu5fj`}],[`rect`,{width:`5`,height:`5`,x:`16`,y:`3`,rx:`1`,key:`1v8r4q`}],[`rect`,{width:`5`,height:`5`,x:`3`,y:`16`,rx:`1`,key:`1x03jg`}],[`path`,{d:`M21 16h-3a2 2 0 0 0-2 2v3`,key:`177gqh`}],[`path`,{d:`M21 21v.01`,key:`ents32`}],[`path`,{d:`M12 7v3a2 2 0 0 1-2 2H7`,key:`8crl2c`}],[`path`,{d:`M3 12h.01`,key:`nlz23k`}],[`path`,{d:`M12 3h.01`,key:`n36tog`}],[`path`,{d:`M12 16v.01`,key:`133mhm`}],[`path`,{d:`M16 12h1`,key:`1slzba`}],[`path`,{d:`M21 12v.01`,key:`1lwtk9`}],[`path`,{d:`M12 21v-1`,key:`1880an`}]]),De=p(`refresh-cw`,[[`path`,{d:`M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`,key:`v9h5vc`}],[`path`,{d:`M21 3v5h-5`,key:`1q7to0`}],[`path`,{d:`M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`,key:`3uifl3`}],[`path`,{d:`M8 16H3v5`,key:`1cv678`}]]),B=p(`rotate-ccw`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]),Oe=p(`rotate-cw`,[[`path`,{d:`M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8`,key:`1p45f6`}],[`path`,{d:`M21 3v5h-5`,key:`1q7to0`}]]),V=p(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),ke=p(`send`,[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]]),H=p(`settings`,[[`path`,{d:`M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,key:`1i5ecw`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),Ae=p(`share-2`,[[`circle`,{cx:`18`,cy:`5`,r:`3`,key:`gq8acd`}],[`circle`,{cx:`6`,cy:`12`,r:`3`,key:`w7nqdw`}],[`circle`,{cx:`18`,cy:`19`,r:`3`,key:`1xt0gg`}],[`line`,{x1:`8.59`,x2:`15.42`,y1:`13.51`,y2:`17.49`,key:`47mynk`}],[`line`,{x1:`15.41`,x2:`8.59`,y1:`6.51`,y2:`10.49`,key:`1n3mei`}]]),je=p(`shield-check`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),Me=p(`shield`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}]]),U=p(`sparkles`,[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]]),Ne=p(`sun`,[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`m4.93 4.93 1.41 1.41`,key:`149t6j`}],[`path`,{d:`m17.66 17.66 1.41 1.41`,key:`ptbguv`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`m6.34 17.66-1.41 1.41`,key:`1m8zz5`}],[`path`,{d:`m19.07 4.93-1.41 1.41`,key:`1shlcs`}]]),Pe=p(`terminal`,[[`path`,{d:`M12 19h8`,key:`baeox8`}],[`path`,{d:`m4 17 6-6-6-6`,key:`1yngyt`}]]),Fe=p(`thumbs-down`,[[`path`,{d:`M17 14V2`,key:`8ymqnk`}],[`path`,{d:`M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z`,key:`m61m77`}]]),Ie=p(`thumbs-up`,[[`path`,{d:`M7 10v12`,key:`1qc93n`}],[`path`,{d:`M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z`,key:`emmmcr`}]]),Le=p(`trash-2`,[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]]),Re=p(`trending-up`,[[`path`,{d:`M16 7h6v6`,key:`box55l`}],[`path`,{d:`m22 7-8.5 8.5-5-5L2 17`,key:`1t1m79`}]]),ze=p(`triangle-alert`,[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),Be=p(`wifi`,[[`path`,{d:`M12 20h.01`,key:`zekei9`}],[`path`,{d:`M2 8.82a15 15 0 0 1 20 0`,key:`dnpr2z`}],[`path`,{d:`M5 12.859a10 10 0 0 1 14 0`,key:`1x1e6c`}],[`path`,{d:`M8.5 16.429a5 5 0 0 1 7 0`,key:`1bycff`}]]),W=p(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),Ve=p(`zap`,[[`path`,{d:`M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,key:`1xq2db`}]]);function He(e){if(!e)return{score:0,bits:0,label:`Empty`,colorClass:`bg-slate-300 dark:bg-slate-700`,suggestions:[`Enter at least 10 characters with mixed case, numbers & symbols`]};let t=0,n=/[a-z]/.test(e),r=/[A-Z]/.test(e),i=/[0-9]/.test(e),a=/[^a-zA-Z0-9]/.test(e);n&&(t+=26),r&&(t+=26),i&&(t+=10),a&&(t+=32);let o=Math.round(e.length*Math.log2(Math.max(t,1))),s=Math.min(100,Math.round(o/80*100)),c=[];return e.length<10&&c.push(`Add more characters (10+ recommended)`),r&&n||c.push(`Mix uppercase & lowercase letters`),i||c.push(`Include at least one number`),a||c.push(`Include a special character (!@#$%)`),s<35?{score:s,bits:o,label:`Weak`,colorClass:`bg-rose-500`,suggestions:c}:s<60?{score:s,bits:o,label:`Fair`,colorClass:`bg-amber-500`,suggestions:c}:s<82?{score:s,bits:o,label:`Good`,colorClass:`bg-sky-500`,suggestions:c}:{score:s,bits:o,label:`Strong`,colorClass:`bg-emerald-500`,suggestions:c}}function Ue(e){return e<=0?`Unrated`:e<=1.5?`Needs Work`:e<=2.5?`Below Average`:e<=3.5?`Solid & Reliable`:e<=4.5?`Delightful`:`Exceptional`}function We(e,t){if(!t.trim())return 1;let n=e.toLowerCase(),r=t.trim().toLowerCase();if(n===r)return 100;if(n.startsWith(r))return 85;if(n.includes(r))return 65;let i=0,a=0,o=0;for(let e=0;e<n.length&&i<r.length;e++)n[e]===r[i]?(i++,a++,o+=5+a*2):a=0;return i===r.length?o:0}function Ge(e,t,n=!0){let r=e.trim();if(!n)return r;let i=Array.from(r.matchAll(/<([A-Z][A-Za-z0-9_]*)/g)).map(e=>e[1]),a=t.split(/[ &/]/)[0].trim(),o=Array.from(new Set([a,...i].filter(e=>e.startsWith(`JX`)))),s=o.length>0?o:a?[a]:[];return`${s.length>0?`import { ${s.join(`, `)} } from 'jxui-react';\n\n`:``}${r}`}function Ke(e){let t=e.name.split(/[ &/]/)[0].replace(/[^A-Za-z0-9_]/g,``).trim()||`JXComponent`,n=e.props&&e.props.length>0?e.props.map(e=>`  /** ${e.description||`${e.name} prop`} (default: ${e.defaultValue??`undefined`}) */\n  ${e.name}${e.required?``:`?`}: ${e.type};`).join(`
`):`  /** Visual surface style */
  variant?: 'solid' | 'soft' | 'outline' | 'glass';
  /** Semantic color tone */
  tone?: 'primary' | 'success' | 'warning' | 'danger';
  /** Enable 200ms damped spring physics */
  spring?: boolean;
  /** Enable 3px accessible focus halo */
  halo?: boolean;`;return`// @jxui/react v3.0.0 — ${t} (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { Sparkles, Check } from 'lucide-react';

/**
 * ${t} — ${e.subtitle||`JXUI Interactive Component`}
 * @version 3.0.0
 * Upgrade: ${e.jxuiUpgrade||`Zero-layout-shift spring physics with WCAG 2.1 AA compliance.`}
 */
export interface ${t}Props extends React.HTMLAttributes<HTMLElement> {
${n}
  className?: string;
  children?: React.ReactNode;
}

export const ${t}: React.FC<${t}Props> = ({
  children = '${t}',
  className = '',
  ...rest
}) => {
  const [active, setActive] = useState(false);

  return (
    <div
      role="region"
      aria-label="${t}"
      data-jxui-version="3.0.0"
      onClick={() => setActive((prev) => !prev)}
      className={\`relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-indigo-500/25 cursor-pointer select-none \${
        active
          ? 'bg-emerald-600 text-white shadow-md'
          : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm'
      } \${className}\`}
      {...rest}
    >
      {active ? <Check className="w-3.5 h-3.5 shrink-0" /> : <Sparkles className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </div>
  );
};
`}var G={indigo:{name:`Indigo`,primaryHex:`#4f46e5`,haloRgba:`rgba(99, 102, 241, 0.18)`,stops:{50:`#eef2ff`,100:`#e0e7ff`,200:`#c7d2fe`,300:`#a5b4fc`,400:`#818cf8`,500:`#6366f1`,600:`#4f46e5`,700:`#4338ca`,800:`#3730a3`,900:`#312e81`,950:`#1e1b4b`}},violet:{name:`Violet`,primaryHex:`#7c3aed`,haloRgba:`rgba(139, 92, 246, 0.18)`,stops:{50:`#f5f3ff`,100:`#ede9fe`,200:`#ddd6fe`,300:`#c4b5fd`,400:`#a78bfa`,500:`#8b5cf6`,600:`#7c3aed`,700:`#6d28d9`,800:`#5b21b6`,900:`#4c1d95`,950:`#2e1065`}},emerald:{name:`Emerald`,primaryHex:`#059669`,haloRgba:`rgba(16, 185, 129, 0.18)`,stops:{50:`#ecfdf5`,100:`#d1fae5`,200:`#a7f3d0`,300:`#6ee7b7`,400:`#34d399`,500:`#10b981`,600:`#059669`,700:`#047857`,800:`#065f46`,900:`#064e3b`,950:`#022c22`}},rose:{name:`Rose`,primaryHex:`#e11d48`,haloRgba:`rgba(244, 63, 94, 0.18)`,stops:{50:`#fff1f2`,100:`#ffe4e6`,200:`#fecdd3`,300:`#fda4af`,400:`#fb7185`,500:`#f43f5e`,600:`#e11d48`,700:`#be123c`,800:`#9f1239`,900:`#881337`,950:`#4c0519`}},ocean:{name:`Ocean Sky`,primaryHex:`#0284c7`,haloRgba:`rgba(14, 165, 233, 0.18)`,stops:{50:`#f0f9ff`,100:`#e0f2fe`,200:`#bae6fd`,300:`#7dd3fc`,400:`#38bdf8`,500:`#0ea5e9`,600:`#0284c7`,700:`#0369a1`,800:`#075985`,900:`#0c4a6e`,950:`#082f49`}}},K={sharp:{scaleId:`sharp`,label:`Sharp (0px)`,controlPx:`0px`,cardPx:`0px`,pillPx:`0px`},sm:{scaleId:`sm`,label:`Small (8px)`,controlPx:`6px`,cardPx:`8px`,pillPx:`6px`},md:{scaleId:`md`,label:`Medium (12px)`,controlPx:`8px`,cardPx:`12px`,pillPx:`9999px`},lg:{scaleId:`lg`,label:`Large (16px)`,controlPx:`12px`,cardPx:`16px`,pillPx:`9999px`},xl:{scaleId:`xl`,label:`Ultra (24px)`,controlPx:`16px`,cardPx:`24px`,pillPx:`9999px`}};function qe(e,t){return`jxui-tokens-${e.accent}-${e.mode}-${e.radiusScale}.${t}`}function Je(e){let t=G[e.accent]||G.indigo,n=K[e.radiusScale]||K.lg,r=e.mode===`dark`,i={$schema:`https://tr.designtokens.org/format/`,$metadata:{system:`JXUI (@jxui/react)`,version:`3.0.0`,activeThemeMode:e.mode,activeAccentPalette:e.accent,activeRadiusScale:e.radiusScale,wcagCompliance:`WCAG 2.1 AA`},color:{accent:{$description:`Active primary accent palette (${t.name})`,name:{$value:t.name,$type:`string`},primary:{$value:r?t.stops[500]:t.stops[600],$type:`color`},hover:{$value:r?t.stops[400]:t.stops[500],$type:`color`},focusHalo:{$value:t.haloRgba,$type:`color`},scale:Object.fromEntries(Object.entries(t.stops).map(([e,t])=>[e,{$value:t,$type:`color`}]))},surface:{canvas:{$value:r?`#0B0F19`:`#F8FAFC`,$type:`color`},elevatedCard:{$value:r?`#111827`:`#FFFFFF`,$type:`color`},subtle:{$value:r?`#1E293B`:`#F1F5F9`,$type:`color`},translucentGlass:{$value:r?`rgba(15, 23, 42, 0.82)`:`rgba(255, 255, 255, 0.82)`,$type:`color`},hairlineBorder:{$value:r?`rgba(255, 255, 255, 0.08)`:`rgba(15, 23, 42, 0.07)`,$type:`color`},specularHighlight:{$value:r?`inset 0 1px 0 0 rgba(255, 255, 255, 0.06)`:`inset 0 1px 0 0 rgba(255, 255, 255, 0.80)`,$type:`shadow`}},text:{primary:{$value:r?`#F8FAFC`:`#0F172A`,$type:`color`},secondary:{$value:r?`#94A3B8`:`#475569`,$type:`color`},muted:{$value:`#64748B`,$type:`color`}}},geometry:{radius:{activeScale:{$value:n.scaleId,$type:`string`},control:{$value:n.controlPx,$type:`dimension`},card:{$value:n.cardPx,$type:`dimension`},pill:{$value:n.pillPx,$type:`dimension`},presets:{none:{$value:`0px`,$type:`dimension`},sm:{$value:`8px`,$type:`dimension`},md:{$value:`12px`,$type:`dimension`},lg:{$value:`16px`,$type:`dimension`},xl:{$value:`24px`,$type:`dimension`},full:{$value:`9999px`,$type:`dimension`}}}},elevation:{elevation1:{$value:`0 2px 6px -1px rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.02)`,$type:`shadow`},elevation2:{$value:`0 10px 25px -4px rgba(15, 23, 42, 0.06), 0 4px 10px -2px rgba(15, 23, 42, 0.03)`,$type:`shadow`},elevation3:{$value:`0 20px 40px -8px rgba(15, 23, 42, 0.10), 0 8px 16px -4px rgba(15, 23, 42, 0.04)`,$type:`shadow`}},motion:{springBezier:{$value:`cubic-bezier(0.22, 1, 0.36, 1)`,$type:`cubicBezier`},pressScale:{$value:`0.98`,$type:`number`},backdropBlur:{$value:`16px`,$type:`dimension`}},typography:{fontSans:{$value:`'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif`,$type:`fontFamily`},fontMono:{$value:`'JetBrains Mono', monospace`,$type:`fontFamily`},trackingTight:{$value:`-0.015em`,$type:`dimension`}}};return JSON.stringify(i,null,2)}function Ye(e){let t=G[e.accent]||G.indigo,n=K[e.radiusScale]||K.lg,r=e.mode===`dark`,i=Object.entries(t.stops).map(([e,t])=>`  --jx-accent-${e}: ${t};`).join(`
`);return`/**
 * JXUI (@jxui/react) v3.0 — Generated Design Tokens CSS Variables
 * Active Profile: mode=${e.mode} | accent=${e.accent} (${t.name}) | radius=${e.radiusScale} (${n.label})
 */

:root {
  /* 1. Active Accent Palette (${t.name}) */
${i}
  --jx-accent-primary: ${r?t.stops[500]:t.stops[600]};
  --jx-accent-hover: ${r?t.stops[400]:t.stops[500]};
  --jx-focus-halo: 0 0 0 3px ${t.haloRgba};

  /* 2. Active Surface & Luminance Tokens (${e.mode} mode) */
  --jx-surface-canvas: ${r?`#0B0F19`:`#F8FAFC`};
  --jx-surface-card: ${r?`#111827`:`#FFFFFF`};
  --jx-surface-subtle: ${r?`#1E293B`:`#F1F5F9`};
  --jx-surface-glass: ${r?`rgba(15, 23, 42, 0.82)`:`rgba(255, 255, 255, 0.82)`};
  --jx-border-hairline: 1px solid ${r?`rgba(255, 255, 255, 0.08)`:`rgba(15, 23, 42, 0.07)`};
  --jx-specular-top: ${r?`inset 0 1px 0 0 rgba(255, 255, 255, 0.06)`:`inset 0 1px 0 0 rgba(255, 255, 255, 0.80)`};
  --jx-text-primary: ${r?`#F8FAFC`:`#0F172A`};
  --jx-text-secondary: ${r?`#94A3B8`:`#475569`};

  /* 3. Active Geometry & Radius Scale (${n.label}) */
  --jx-radius-control: ${n.controlPx};
  --jx-radius-card: ${n.cardPx};
  --jx-radius-pill: ${n.pillPx};
  --jx-radius-sm: 8px;
  --jx-radius-md: 12px;
  --jx-radius-lg: 16px;
  --jx-radius-xl: 24px;
  --jx-radius-full: 9999px;

  /* 4. Diffused Multi-Layered Elevation Shadows */
  --jx-elevation-1: 0 2px 6px -1px rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.02);
  --jx-elevation-2: 0 10px 25px -4px rgba(15, 23, 42, 0.06), 0 4px 10px -2px rgba(15, 23, 42, 0.03);
  --jx-elevation-3: 0 20px 40px -8px rgba(15, 23, 42, 0.10), 0 8px 16px -4px rgba(15, 23, 42, 0.04);

  /* 5. Tactile Spring Physics & Typography */
  --jx-spring-easing: cubic-bezier(0.22, 1, 0.36, 1);
  --jx-press-scale: 0.98;
  --jx-backdrop-blur: blur(16px);
  --jx-font-sans: 'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif;
  --jx-font-mono: 'JetBrains Mono', monospace;
}
`}var Xe={"jx-autocomplete":{ariaRole:`combobox + listbox`,ariaAttributes:[`aria-expanded`,`aria-autocomplete="list"`,`aria-activedescendant`,`aria-multiselectable`],keyboardContract:`⌘K / Ctrl+K opens palette; ArrowUp/Down cycles options; Enter selects; Backspace deletes last token; Escape closes.`,screenReaderContract:`Announces match count via polite live region, active group header, and multi-select token removal.`},"jx-button":{ariaRole:`button`,ariaAttributes:[`aria-busy`,`aria-disabled`,`aria-live="polite"`],keyboardContract:`Tab focuses with 3px indigo halo; Space / Enter triggers tactile press & morphing state.`,screenReaderContract:`Announces loading spinner transition ("Syncing...") and morphSuccess completion state automatically.`},"jx-button-group":{ariaRole:`group / radiogroup`,ariaAttributes:[`aria-label`,`aria-pressed`,`role="group"`],keyboardContract:`Roving tabIndex with ArrowLeft/Right navigation between segmented actions and split menu trigger.`,screenReaderContract:`Reads group label context and announces active segment selection state.`},"jx-checkbox":{ariaRole:`checkbox`,ariaAttributes:[`aria-checked="true|false|mixed"`,`aria-describedby`],keyboardContract:`Tab moves between checkbox cards; Space toggles checked/indeterminate state with spring bounce.`,screenReaderContract:`Announces label, rich card description, and tri-state mixed status for parent batch controls.`},"jx-fab":{ariaRole:`button`,ariaAttributes:[`aria-label`,`aria-expanded`],keyboardContract:`Tab focuses floating pill action; Enter/Space triggers primary quick-create action.`,screenReaderContract:`Exposes accessible action label even when collapsed into compact icon-only scroll mode.`},"jx-radio-group":{ariaRole:`radiogroup + radio`,ariaAttributes:[`aria-checked`,`aria-labelledby`,`aria-describedby`],keyboardContract:`Roving tabIndex: ArrowUp/Down/Left/Right moves focus and selects plan card; Home/End jumps to first/last.`,screenReaderContract:`Announces radio card title, pricing tier metadata, and position (e.g. "2 of 3").`},"jx-rating":{ariaRole:`slider / radiogroup`,ariaAttributes:[`aria-valuenow`,`aria-valuemin="0"`,`aria-valuemax="5"`,`aria-valuetext`],keyboardContract:`ArrowLeft/Right adjusts rating in 0.5 increments; Home resets to 0; End sets to 5.`,screenReaderContract:`Reads numeric star value alongside expressive sentiment label (e.g., "4.5 stars — Delightful").`},"jx-select":{ariaRole:`combobox + listbox`,ariaAttributes:[`aria-haspopup="listbox"`,`aria-expanded`,`aria-selected`],keyboardContract:`Enter/Space/ArrowDown opens popover; Arrow keys navigate options; typeahead filters list; Escape closes.`,screenReaderContract:`Announces selected option badge, status dot semantics, and total available choices.`},"jx-slider":{ariaRole:`slider`,ariaAttributes:[`aria-valuenow`,`aria-valuemin`,`aria-valuemax`,`aria-valuetext`,`aria-orientation`],keyboardContract:`ArrowLeft/Right/Up/Down steps by 1%; PageUp/PageDown steps by 10%; Home/End jumps to min/max bounds.`,screenReaderContract:`Announces live formatted unit value and histogram density percentile on thumb movement.`},"jx-switch":{ariaRole:`switch`,ariaAttributes:[`aria-checked`,`aria-readonly`,`aria-label`],keyboardContract:`Space or Enter toggles liquid spring thumb; respects prefers-reduced-motion instantaneously.`,screenReaderContract:`Announces "Switch, On" or "Switch, Off" with associated setting title and description.`},"jx-text-field":{ariaRole:`textbox`,ariaAttributes:[`aria-invalid`,`aria-errormessage`,`aria-describedby`],keyboardContract:`Standard text navigation; Escape clears search input; Tab reaches inline visibility/copy actions.`,screenReaderContract:`Links top label and live password entropy meter via aria-describedby without layout-shifting notches.`},"jx-transfer-list":{ariaRole:`group + listbox`,ariaAttributes:[`aria-multiselectable="true"`,`aria-label`],keyboardContract:`ArrowUp/Down navigates items; Space toggles selection; Enter moves selected items across buckets.`,screenReaderContract:`Polite live region announces item transfers (e.g., "Moved 2 permissions to Assigned").`},"jx-toggle-button":{ariaRole:`radiogroup / toolbar`,ariaAttributes:[`aria-pressed`,`aria-checked`],keyboardContract:`Roving tabIndex with ArrowLeft/Right/Home/End across sliding pill segments.`,screenReaderContract:`Announces active view mode or formatting toggle state.`},"jx-number-input":{ariaRole:`spinbutton`,ariaAttributes:[`aria-valuenow`,`aria-valuemin`,`aria-valuemax`],keyboardContract:`ArrowUp/Down steps value; Shift+Arrow steps by 10; Home/End snaps to min/max limits.`,screenReaderContract:`Announces updated numeric quantity and unit suffix on each increment.`},"jx-data-grid":{ariaRole:`grid + row + gridcell`,ariaAttributes:[`aria-rowcount`,`aria-colcount`,`aria-sort`,`aria-selected`],keyboardContract:`2D Arrow key cell navigation; Space selects row; Enter activates inline cell edit; Escape cancels edit.`,screenReaderContract:`Announces column sort direction, active cell coordinates, and bulk selection count.`},"jx-date-range-picker":{ariaRole:`dialog + grid`,ariaAttributes:[`aria-label="Choose date range"`,`aria-selected`,`aria-current="date"`],keyboardContract:`Natural language input accepts typed phrases ("next friday"); Arrow keys navigate calendar grid days.`,screenReaderContract:`Announces parsed natural-language date range and start/end selection boundaries.`},"jx-spotlight-dock":{ariaRole:`toolbar`,ariaAttributes:[`aria-label="JXUI Tactile Application Dock"`,`aria-pressed`],keyboardContract:`Tab & ArrowLeft/Right cycle dock launchers with 3px focus halo; Enter/Space triggers haptic launch.`,screenReaderContract:`Announces launcher app name, notification badge count, and running indicator status.`},"jx-pricing-bento-matrix":{ariaRole:`region + radiogroup`,ariaAttributes:[`aria-label="Subscription Pricing Tiers"`,`aria-pressed`],keyboardContract:`Tab navigates billing cycle toggle, seat volume slider, and tier selection CTAs.`,screenReaderContract:`Announces dynamic per-seat price updates, annual discount savings, and recommended tier badge.`},"jx-command-deploy-pipeline":{ariaRole:`region + slider`,ariaAttributes:[`aria-label="Canary Traffic Allocation Percentage"`,`aria-valuenow`,`aria-valuetext`],keyboardContract:`Slider supports Arrow keys (1% step), PageUp/Down (10%), plus instant preset buttons (0%, 10%, 25%, 50%, 100%).`,screenReaderContract:`Announces live stable vs. canary traffic split percentages, rollout phase, and RPS telemetry.`}};function Ze(e){let t=Xe[e.id];if(t)return{id:e.id,number:e.number,name:e.name,category:e.category,ariaRole:t.ariaRole,ariaAttributes:t.ariaAttributes,wcagCriteria:[`1.4.3 Contrast (Minimum) AA`,`2.1.1 Keyboard Accessible`,`2.4.7 Focus Visible (3px Halo)`,`4.1.2 Name, Role, Value`],contrastRatio:t.contrastRatio||`7.2:1 (AA/AAA)`,keyboardContract:t.keyboardContract,screenReaderContract:t.screenReaderContract};switch(e.category){case`data-display`:return{id:e.id,number:e.number,name:e.name,category:e.category,ariaRole:`region / list / table`,ariaAttributes:[`aria-label`,`aria-live="polite"`,`aria-expanded`],wcagCriteria:[`1.3.1 Info and Relationships`,`1.4.3 Contrast (Minimum) AA`,`2.1.1 Keyboard Accessible`,`4.1.3 Status Messages`],contrastRatio:`7.5:1 (AA/AAA)`,keyboardContract:`Tab & Arrow keys navigate interactive tokens, avatar popovers, and sortable table headers; Escape dismisses hover cards.`,screenReaderContract:`Provides semantic structure, tabular-nums odometer announcements, and accessible labels for status badges and icons.`};case`feedback`:return{id:e.id,number:e.number,name:e.name,category:e.category,ariaRole:`alert / dialog / status`,ariaAttributes:[`aria-modal="true"`,`aria-live="assertive|polite"`,`aria-busy`,`aria-labelledby`],wcagCriteria:[`2.1.2 No Keyboard Trap`,`2.4.3 Focus Order`,`4.1.2 Name, Role, Value`,`4.1.3 Status Messages`],contrastRatio:`6.8:1 (AA)`,keyboardContract:`Cycles focus strictly inside modal overlays; Escape dismisses non-blocking dialogs and toasts; returns focus to trigger on close.`,screenReaderContract:`Announces toast status transitions, progress percentage updates, and alert severity without interrupting active input focus.`};case`surfaces`:return{id:e.id,number:e.number,name:e.name,category:e.category,ariaRole:`region / button (accordion header)`,ariaAttributes:[`aria-expanded`,`aria-controls`,`aria-labelledby`],wcagCriteria:[`1.3.1 Info and Relationships`,`1.4.11 Non-text Contrast`,`2.1.1 Keyboard Accessible`,`2.4.7 Focus Visible`],contrastRatio:`7.8:1 (AA/AAA)`,keyboardContract:`Enter/Space toggles accordion disclosure panels; Home/End/ArrowUp/Down moves between surface headers.`,screenReaderContract:`Associates disclosure headers with collapsible content regions via aria-controls and announces expanded/collapsed state.`};case`navigation`:return{id:e.id,number:e.number,name:e.name,category:e.category,ariaRole:`navigation / tablist / menu`,ariaAttributes:[`aria-current="page|step"`,`aria-selected`,`aria-haspopup="menu"`,`aria-orientation`],wcagCriteria:[`2.1.1 Keyboard Accessible`,`2.4.3 Focus Order`,`2.4.7 Focus Visible`,`2.4.8 Location`],contrastRatio:`7.1:1 (AA/AAA)`,keyboardContract:`Roving tabIndex with Arrow keys across tabs, menus, breadcrumbs, and stepper nodes; Escape closes popovers and drawers.`,screenReaderContract:`Identifies current page/step via aria-current, announces collapsed breadcrumb ellipsis count, and reads keyboard shortcut hints.`};case`layout-utils`:return{id:e.id,number:e.number,name:e.name,category:e.category,ariaRole:`region / list (timeline)`,ariaAttributes:[`aria-label`,`aria-expanded`,`data-reduced-motion`],wcagCriteria:[`1.3.2 Meaningful Sequence`,`1.4.10 Reflow (320px–1440px)`,`2.1.1 Keyboard Accessible`,`2.3.3 Animation from Interactions`],contrastRatio:`7.4:1 (AA/AAA)`,keyboardContract:`Preserves logical DOM tab order across responsive Bento & Masonry reflows; respects prefers-reduced-motion media query.`,screenReaderContract:`Maintains chronological reading order for audit timelines and announces expandable JSON diff payloads.`};case`enterprise-x`:return{id:e.id,number:e.number,name:e.name,category:e.category,ariaRole:`tree / application / figure`,ariaAttributes:[`aria-expanded`,`aria-level`,`aria-setsize`,`aria-posinset`,`aria-roledescription`],wcagCriteria:[`1.4.3 Contrast (Minimum) AA`,`2.1.1 Keyboard Accessible`,`2.4.7 Focus Visible`,`4.1.2 Name, Role, Value`],contrastRatio:`6.9:1 (AA)`,keyboardContract:`ArrowRight expands tree nodes; ArrowLeft collapses; Slash (/) opens rich command block menu; Arrow keys scrub chart points.`,screenReaderContract:`Reads hierarchical tree depth/position, SVG chart series data summaries, and rich text block formatting states.`};default:return{id:e.id,number:e.number,name:e.name,category:e.category,ariaRole:`region + group`,ariaAttributes:[`aria-label`,`aria-live="polite"`,`aria-describedby`],wcagCriteria:[`1.4.3 Contrast (Minimum) AA`,`2.1.1 Keyboard Accessible`,`2.4.7 Focus Visible (3px Halo)`,`4.1.2 Name, Role, Value`],contrastRatio:`7.0:1 (AA/AAA)`,keyboardContract:`Full Tab and Arrow key navigation across composed controls with zero keyboard traps and visible 3px focus halos.`,screenReaderContract:`Exposes semantic region landmarks, live interactive telemetry updates, and accessible action descriptions.`}}}function Qe(e,t={}){let n=e.length;if(n===0)return{totalComponents:0,keyboardPassCount:0,screenReaderPassCount:0,fullyCompliantCount:0,compliancePercentage:100,failedComponentIds:[],overallStatus:`WCAG 2.1 AA Certified`};let r=0,i=0,a=0,o=[];for(let n of e){let e=t[n.id]??{keyboardPass:!0,screenReaderPass:!0};e.keyboardPass&&r++,e.screenReaderPass&&i++,e.keyboardPass&&e.screenReaderPass?a++:o.push(n.id)}let s=n*2,c=r+i,l=Number((c/s*100).toFixed(1));return{totalComponents:n,keyboardPassCount:r,screenReaderPassCount:i,fullyCompliantCount:a,compliancePercentage:l,failedComponentIds:o,overallStatus:o.length===0?`WCAG 2.1 AA Certified`:`Remediation Required`}}var q=`jxui-theme-mode`,$e=[`jxui-theme-mode`,`jxui-theme`,`theme`];function J(e){return e===`light`||e===`dark`}function et(e={}){let{storage:t=typeof window<`u`?window.localStorage:null,storageKey:n=q,defaultMode:r,prefersDark:i}=e;if(t)try{let e=Array.from(new Set([n,...$e]));for(let n of e){let e=t.getItem(n);if(J(e))return e}}catch{}if(J(r))return r;if(typeof i==`boolean`)return i?`dark`:`light`;if(typeof window<`u`&&typeof window.matchMedia==`function`)try{if(window.matchMedia(`(prefers-color-scheme: dark)`).matches)return`dark`}catch{}return`light`}function tt(e,t=typeof window<`u`?window.localStorage:null,n=q){if(!J(e)||!t)return!1;try{return t.setItem(n,e),n!==`jxui-theme-mode`&&t.setItem(q,e),!0}catch{return!1}}var nt={variant:`contained`,color:`primary`,size:`md`,elevation:1,disabled:!1,loading:!1,glass:!1,spring:!0,halo:!0,morphSuccess:!1,copyable:!1,customLabel:``},rt={"--jx-pg-radius":`14px`,"--jx-pg-accent":`#4f46e5`,"--jx-pg-blur":`16px`,"--jx-pg-scale":`1`,"--jx-pg-shadow-alpha":`0.08`,"--jx-pg-padding":`16px`,"--jx-pg-border-alpha":`0.14`},it=[{key:`--jx-pg-radius`,label:`Surface Radius`,unit:`px`,min:0,max:32,step:2,description:`Controls component & stage corner rounding (--jx-pg-radius)`},{key:`--jx-pg-accent`,label:`Accent Token`,unit:`color`,description:`Primary interactive accent color (--jx-pg-accent)`},{key:`--jx-pg-blur`,label:`Glass Backdrop Blur`,unit:`px`,min:0,max:32,step:2,description:`Translucent surface blur intensity (--jx-pg-blur)`},{key:`--jx-pg-scale`,label:`Component Scale`,unit:`number`,min:.85,max:1.2,step:.05,description:`Real-time spatial zoom factor (--jx-pg-scale)`},{key:`--jx-pg-padding`,label:`Stage Padding`,unit:`px`,min:8,max:40,step:4,description:`Internal breathing room around component (--jx-pg-padding)`},{key:`--jx-pg-shadow-alpha`,label:`Ambient Shadow Alpha`,unit:`number`,min:0,max:.35,step:.02,description:`Key & ambient elevation shadow opacity (--jx-pg-shadow-alpha)`},{key:`--jx-pg-border-alpha`,label:`Hairline Border Alpha`,unit:`number`,min:0,max:.5,step:.02,description:`Specular hairline border intensity (--jx-pg-border-alpha)`}];function at(e,t){return t||e===`glass`?`glass`:e===`soft`?`soft`:e===`outlined`||e===`text`?`outline`:`solid`}function ot(e){return e===`success`?`success`:e===`warning`?`warning`:e===`error`?`danger`:`primary`}function st(e,t,n=!0){let r=e.split(/[ &/]/)[0].replace(/[^A-Za-z0-9_]/g,``).trim()||`JXComponent`,i=[];i.push(`  variant="${t.variant}"`),i.push(`  color="${t.color}"`),i.push(`  size="${t.size}"`),t.elevation!==1&&i.push(`  elevation={${t.elevation}}`),t.disabled&&i.push(`  disabled`),t.loading&&i.push(`  loading`),t.glass&&i.push(`  glass`),t.spring?i.push(`  spring`):i.push(`  spring={false}`),t.halo?i.push(`  halo`):i.push(`  halo={false}`),t.morphSuccess&&i.push(`  morphSuccess`),t.copyable&&i.push(`  copyable`);let a=t.customLabel.trim(),o=a?`<${r}\n${i.join(`
`)}\n>\n  ${a}\n</${r}>`:`<${r}\n${i.join(`
`)}\n/>`;return n?`import { ${r} } from 'jxui-react';\n\n${o}`:o}function ct(e,t=`:root, .jx-playground-scope`){return`${t} {\n${Object.entries(e).map(([e,t])=>`  ${e}: ${t};`).join(`
`)}\n  --jx-radius-card: ${e[`--jx-pg-radius`]};\n  --jx-accent-primary: ${e[`--jx-pg-accent`]};\n  --jx-backdrop-blur: blur(${e[`--jx-pg-blur`]});\n}`}function lt(e,t={}){let n=Number.parseFloat(e[`--jx-pg-shadow-alpha`])||.08,r=Number.parseFloat(e[`--jx-pg-border-alpha`])||.14,i=Number.parseFloat(e[`--jx-pg-scale`])||1,a=t.size===`sm`?.92:t.size===`lg`?1.08:1,o=Number((i*a).toFixed(3)),s=t.elevation===0?0:t.elevation===2?1.5:t.elevation===3?2.2:1,c=Number((n*s).toFixed(3)),l=e[`--jx-pg-accent`]||`#4f46e5`;return{"--jx-pg-radius":e[`--jx-pg-radius`],"--jx-pg-accent":l,"--jx-pg-blur":e[`--jx-pg-blur`],"--jx-pg-scale":e[`--jx-pg-scale`],"--jx-pg-shadow-alpha":e[`--jx-pg-shadow-alpha`],"--jx-pg-padding":e[`--jx-pg-padding`],"--jx-pg-border-alpha":e[`--jx-pg-border-alpha`],"--jx-radius-card":e[`--jx-pg-radius`],"--jx-radius-control":e[`--jx-pg-radius`],"--jx-accent-primary":l,borderRadius:e[`--jx-pg-radius`],padding:e[`--jx-pg-padding`],backdropFilter:t.glass||t.variant===`glass`?`blur(${e[`--jx-pg-blur`]})`:void 0,transform:`scale(${o})`,boxShadow:c>0?`0 16px 36px -6px rgba(15, 23, 42, ${c}), 0 0 0 ${t.halo?`3px`:`0px`} ${l}26`:t.halo?`0 0 0 3px ${l}26`:`none`,borderColor:`rgba(99, 102, 241, ${r})`,opacity:t.disabled?.52:1,pointerEvents:t.disabled?`none`:`auto`,transition:t.spring?`all 200ms cubic-bezier(0.22, 1, 0.36, 1)`:`none`}}function ut(e){let t=e.name.split(/[ &/]/)[0].replace(/[^A-Za-z0-9_]/g,``).trim()||`JXComponent`,n=t.startsWith(`JX`)?`MUI ${t.slice(2)}`:`v2 ${t}`,r=(e.categoryTitle||`JXUI Core`).replace(/^Category \d+:\s*/,``),i=Array.from((e.jsxSnippet||``).matchAll(/\s([a-zA-Z][a-zA-Z0-9]*)=/g)).map(e=>e[1]).filter(e=>![`className`,`style`,`key`,`id`].includes(e)),a=i.length>0?i.slice(0,3).join(`, `):`variant, spring, glass, halo`,o=e.jxuiUpgrade||`Upgraded <${t} /> with tactile spring physics, translucent glass surface tokens, and zero-CLS layout transitions.`,s=e.muiFlaw||`Legacy ${n} relied on static Material elevation shadows, runtime CSS injection, and ink-ripple DOM nodes.`,c=[{id:`${t}-v3-api`,category:`Breaking / API`,title:`v3.0 Ergonomic API & Prop Unification for <${t} />`,description:`${o} Eliminates legacy flaw: ${s}`,beforeV2:`<${t} disableRipple sx={{ boxShadow: 2 }} />`,afterV3:`<${t} variant="soft" spring halo (${a}) />`,impact:`major`},{id:`${t}-v3-physics`,category:`Physics & UX`,title:`Tactile Spring Kinematics & Zero-Ripple Press Response`,description:`Replaced v2 Material ink ripples on <${t} /> (${r}) with 200ms spring physics (cubic-bezier(0.22, 1, 0.36, 1)), active:scale-[0.98] micro-press feedback, and zero layout shift (CLS = 0).`,beforeV2:`TouchRipple DOM mount + 300ms linear easing`,afterV3:`spring={true} + cubic-bezier(0.22, 1, 0.36, 1)`,impact:`enhancement`},{id:`${t}-v3-css-vars`,category:`Theme & CSS Vars`,title:`Zero-Runtime Scoped CSS Variables & Glassmorphism`,description:`Migrated <${t} /> styling from runtime JS style sheets to scoped CSS custom properties (--jx-pg-radius, --jx-pg-accent, --jx-pg-blur, --jx-pg-scale) with instant localStorage dark/light theme parity.`,beforeV2:`Runtime Emotion CSS-in-JS recalculation`,afterV3:`Scoped --jx-pg-* CSS tokens + backdrop-filter: blur(16px)`,impact:`performance`},{id:`${t}-v3-a11y-react19`,category:`A11y & React 19`,title:`React 19 Ref-as-Prop & WCAG 2.1 AA Focus Halo`,description:`Upgraded <${t} /> to native React 19 ref prop forwarding, added data-jxui-version="3.0.0" verification telemetry, 3px high-contrast focus halo (rgba(99, 102, 241, 0.18)), and full roving keyboard navigation.`,beforeV2:`React.forwardRef wrapper + 1px browser outline`,afterV3:`React 19 native ref + 3px halo + WCAG AA verified`,impact:`enhancement`}];return{componentName:t,version:`3.0.0`,releaseDate:`v3.0.0 Stable Release`,summary:`Migrated <${t} /> (${e.subtitle||r}) to the JXUI v3.0 architecture with zero-runtime CSS variables, tactile spring physics, and React 19 ergonomics.`,entries:c}}function dt(e){return`${`# <${e.componentName} /> — JXUI v${e.version} Migration Changelog\n\n${e.summary}\n`}\n${e.entries.map(e=>`## [${e.category}] ${e.title}\n- **Change**: ${e.description}\n- **v2 Legacy**: \`${e.beforeV2}\`\n- **v3 Upgrade**: \`${e.afterV3}\``).join(`

`)}\n`}var ft=`jxui-recently-viewed`;function pt(e,t,n=8){let r=typeof t==`string`?t.trim():``,i=Array.isArray(e)?e.filter(e=>typeof e==`string`&&e.trim().length>0).map(e=>e.trim()):[];return r?[r,...i.filter(e=>e!==r)].slice(0,Math.max(1,n)):Array.from(new Set(i)).slice(0,Math.max(1,n))}function mt(e=typeof window<`u`?window.localStorage:null,t=ft,n=8){if(!e)return[];try{let r=e.getItem(t);if(!r)return[];let i=JSON.parse(r);if(!Array.isArray(i))return[];let a=i.filter(e=>typeof e==`string`&&e.trim().length>0).map(e=>e.trim());return Array.from(new Set(a)).slice(0,Math.max(1,n))}catch{return[]}}function ht(e,t=typeof window<`u`?window.localStorage:null,n=ft,r=8){let i=Array.from(new Set((Array.isArray(e)?e:[]).filter(e=>typeof e==`string`&&e.trim().length>0).map(e=>e.trim()))).slice(0,Math.max(1,r));if(t)try{t.setItem(n,JSON.stringify(i)),typeof window<`u`&&typeof window.dispatchEvent==`function`&&window.dispatchEvent(new CustomEvent(`jxui-recently-viewed-updated`))}catch{}return i}function gt(e,t=typeof window<`u`?window.localStorage:null,n=ft,r=8){return ht(pt(mt(t,n,r),e,r),t,n,r)}function _t(e=typeof window<`u`?window.localStorage:null,t=ft){if(e)try{typeof e.removeItem==`function`?e.removeItem(t):typeof e.setItem==`function`&&e.setItem(t,JSON.stringify([])),typeof window<`u`&&typeof window.dispatchEvent==`function`&&window.dispatchEvent(new CustomEvent(`jxui-recently-viewed-updated`))}catch{}return[]}var vt=n((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),yt=n(((e,t)=>{t.exports=vt()})),Y=yt(),X={indigo:{name:`Indigo`,hex:`#4f46e5`,bg:`bg-indigo-600 dark:bg-indigo-500`,bgHover:`hover:bg-indigo-500 dark:hover:bg-indigo-400`,text:`text-indigo-600 dark:text-indigo-400`,border:`border-indigo-500/40 dark:border-indigo-400/40`,softBg:`bg-indigo-500/10 dark:bg-indigo-400/15`,ring:`focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)]`,gradient:`from-indigo-600 to-violet-600`},violet:{name:`Violet`,hex:`#7c3aed`,bg:`bg-violet-600 dark:bg-violet-500`,bgHover:`hover:bg-violet-500 dark:hover:bg-violet-400`,text:`text-violet-600 dark:text-violet-400`,border:`border-violet-500/40 dark:border-violet-400/40`,softBg:`bg-violet-500/10 dark:bg-violet-400/15`,ring:`focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)]`,gradient:`from-violet-600 to-fuchsia-600`},emerald:{name:`Emerald`,hex:`#059669`,bg:`bg-emerald-600 dark:bg-emerald-500`,bgHover:`hover:bg-emerald-500 dark:hover:bg-emerald-400`,text:`text-emerald-600 dark:text-emerald-400`,border:`border-emerald-500/40 dark:border-emerald-400/40`,softBg:`bg-emerald-500/10 dark:bg-emerald-400/15`,ring:`focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)]`,gradient:`from-emerald-600 to-teal-600`},rose:{name:`Rose`,hex:`#e11d48`,bg:`bg-rose-600 dark:bg-rose-500`,bgHover:`hover:bg-rose-500 dark:hover:bg-rose-400`,text:`text-rose-600 dark:text-rose-400`,border:`border-rose-500/40 dark:border-rose-400/40`,softBg:`bg-rose-500/10 dark:bg-rose-400/15`,ring:`focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)]`,gradient:`from-rose-600 to-orange-500`},ocean:{name:`Ocean`,hex:`#0284c7`,bg:`bg-sky-600 dark:bg-sky-500`,bgHover:`hover:bg-sky-500 dark:hover:bg-sky-400`,text:`text-sky-600 dark:text-sky-400`,border:`border-sky-500/40 dark:border-sky-400/40`,softBg:`bg-sky-500/10 dark:bg-sky-400/15`,ring:`focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)]`,gradient:`from-sky-600 to-cyan-500`}};function Z(e){if(typeof document>`u`)return;let t=document.documentElement;e===`dark`?t.classList.add(`dark`):t.classList.remove(`dark`),t.setAttribute(`data-theme`,e),t.style.colorScheme=e}function bt(e,t){return et({storageKey:e,defaultMode:t})}function xt(){if(typeof window>`u`)return`indigo`;try{let e=localStorage.getItem(`jxui-theme-accent`);if(e&&X[e])return e}catch{}return`indigo`}function St(){if(typeof window>`u`)return`lg`;try{let e=localStorage.getItem(`jxui-theme-radius`);if([`sharp`,`sm`,`md`,`lg`,`xl`].includes(e))return e}catch{}return`lg`}function Ct(){if(typeof window>`u`)return`jxui`;try{let e=localStorage.getItem(`jxui-theme-compare`);if(e===`jxui`||e===`split`)return e}catch{}return`jxui`}var wt=(0,a.createContext)(null),Tt=({children:e,defaultMode:t,storageKey:n=q})=>{let[r,i]=(0,a.useState)(()=>{let e=bt(n,t);return Z(e),e}),[o,s]=(0,a.useState)(xt),[c,l]=(0,a.useState)(St),[u,d]=(0,a.useState)(Ct),[f,p]=(0,a.useState)([]),[m,h]=(0,a.useState)(!1),g=(0,a.useCallback)(e=>{J(e)&&(i(e),Z(e),tt(e,void 0,n))},[n]),_=(0,a.useCallback)(()=>{i(e=>{let t=e===`light`?`dark`:`light`;return Z(t),tt(t,void 0,n),t})},[n]);(0,a.useEffect)(()=>{Z(r),tt(r,void 0,n)},[r,n]),(0,a.useEffect)(()=>{if(typeof window>`u`)return;let e=e=>{(e.key===n||e.key===`jxui-theme-mode`)&&J(e.newValue)&&(i(e.newValue),Z(e.newValue))};return window.addEventListener(`storage`,e),()=>window.removeEventListener(`storage`,e)},[n]),(0,a.useEffect)(()=>{try{if(localStorage.setItem(`jxui-theme-accent`,o),typeof document<`u`){let e=X[o];e&&(document.documentElement.style.setProperty(`--jx-accent`,e.hex),document.documentElement.style.setProperty(`--jx-accent-halo`,`${e.hex}33`),document.documentElement.style.setProperty(`--jx-accent-soft`,`${e.hex}1f`))}}catch{}},[o]),(0,a.useEffect)(()=>{try{localStorage.setItem(`jxui-theme-radius`,c)}catch{}},[c]),(0,a.useEffect)(()=>{try{localStorage.setItem(`jxui-theme-compare`,u)}catch{}},[u]);let v=(0,a.useCallback)((e=`control`)=>{if(c===`sharp`)return`rounded-none`;if(e===`pill`)return c===`sm`?`rounded-md`:`rounded-full`;if(e===`card`)switch(c){case`sm`:return`rounded-lg`;case`md`:return`rounded-xl`;case`lg`:return`rounded-2xl`;case`xl`:return`rounded-3xl`}switch(c){case`sm`:return`rounded-md`;case`md`:return`rounded-lg`;case`lg`:return`rounded-xl`;case`xl`:return`rounded-2xl`}},[c]),y=(0,a.useCallback)(e=>{let t=`toast-${Date.now()}-${Math.random().toString(36).slice(2,6)}`;return p(n=>[{...e,id:t,createdAt:Date.now()},...n.slice(0,4)]),t},[]),b=(0,a.useCallback)(e=>{p(t=>t.filter(t=>t.id!==e))},[]),x=(0,a.useCallback)(()=>{p([])},[]),S=(0,a.useCallback)(e=>{let t=`promise-${Date.now()}`;p(n=>[{id:t,title:`Syncing ${e}...`,description:`Negotiating edge replica state`,variant:`loading`,createdAt:Date.now()},...n.slice(0,4)]),setTimeout(()=>{p(n=>n.map(n=>n.id===t?{...n,title:`${e} Completed`,description:`Committed in 142ms with zero layout shift`,variant:`success`}:n))},1100)},[]),C=X[o];return(0,Y.jsxs)(wt.Provider,{value:{mode:r,setMode:g,toggleMode:_,accent:o,setAccent:s,palette:C,radiusScale:c,setRadiusScale:l,getRadiusClass:v,compareMode:u,setCompareMode:d,toasts:f,pushToast:y,triggerPromiseToast:S,dismissToast:b,clearToasts:x},children:[e,f.length>0&&(0,Y.jsx)(`div`,{className:`fixed bottom-5 right-5 z-50 flex flex-col items-end pointer-events-none`,onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),role:`region`,"aria-label":`Notifications`,children:(0,Y.jsx)(`div`,{className:`relative w-88 sm:w-96 pointer-events-auto`,children:f.slice(0,4).map((e,t)=>{let n=m?t*76:t*10,r=m?1:1-t*.045,i=m?1:t>2?0:1-t*.2;return(0,Y.jsx)(`div`,{style:{transform:`translateY(-${n}px) scale(${r})`,opacity:i,zIndex:50-t},className:`absolute bottom-0 right-0 w-full transition-all duration-300 jx-spring bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/80 jx-elevation-3 p-3.5 ${v(`control`)}`,children:(0,Y.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,Y.jsxs)(`div`,{className:`mt-0.5 shrink-0`,children:[e.variant===`success`&&(0,Y.jsx)(E,{className:`w-4 h-4 text-emerald-500`}),e.variant===`warning`&&(0,Y.jsx)(ze,{className:`w-4 h-4 text-amber-500`}),e.variant===`error`&&(0,Y.jsx)(D,{className:`w-4 h-4 text-rose-500`}),e.variant===`loading`&&(0,Y.jsx)(pe,{className:`w-4 h-4 text-indigo-500 animate-spin`}),e.variant==="default"&&(0,Y.jsx)(ue,{className:`w-4 h-4 text-sky-500`})]}),(0,Y.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,Y.jsx)(`p`,{className:`text-xs font-semibold text-slate-900 dark:text-slate-100 truncate`,children:e.title}),e.description&&(0,Y.jsx)(`p`,{className:`text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5`,children:e.description})]}),(0,Y.jsxs)(`div`,{className:`flex items-center gap-1 shrink-0`,children:[e.undoAction&&(0,Y.jsxs)(`button`,{type:`button`,onClick:()=>{e.undoAction?.(),b(e.id)},className:`inline-flex items-center gap-1 px-2 py-1 text-[11px] font-medium rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors`,children:[(0,Y.jsx)(B,{className:`w-3 h-3`}),`Undo`]}),(0,Y.jsx)(`button`,{type:`button`,onClick:()=>b(e.id),"aria-label":`Dismiss ${e.title}`,className:`p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors`,children:(0,Y.jsx)(W,{className:`w-3.5 h-3.5`})})]})]})},e.id)})})})]})};function Q(){let e=(0,a.useContext)(wt);if(!e)throw Error(`useJXTheme must be used inside JXThemeProvider`);return e}var $=new class{constructor(){if(this.ctx=null,this.soundEnabled=!0,typeof window<`u`){let e=localStorage.getItem(`jxui-sound-enabled`);this.soundEnabled=e!==`false`}}initCtx(){if(typeof window<`u`){if(!this.ctx){let e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state===`suspended`&&this.ctx.resume().catch(()=>{})}}setSoundEnabled(e){this.soundEnabled=e,typeof window<`u`&&localStorage.setItem(`jxui-sound-enabled`,String(e))}isSoundEnabled(){return this.soundEnabled}playClick(e=800,t=.04){if(this.soundEnabled)try{if(this.initCtx(),!this.ctx)return;let n=this.ctx.createOscillator(),r=this.ctx.createGain();n.type=`sine`,n.frequency.setValueAtTime(e,this.ctx.currentTime),n.frequency.exponentialRampToValueAtTime(e*.4,this.ctx.currentTime+t),r.gain.setValueAtTime(.08,this.ctx.currentTime),r.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+t),n.connect(r),r.connect(this.ctx.destination),n.start(),n.stop(this.ctx.currentTime+t)}catch{}}playSuccess(){if(this.soundEnabled)try{if(this.initCtx(),!this.ctx)return;let e=this.ctx.currentTime;[523.25,659.25,783.99].forEach((t,n)=>{if(!this.ctx)return;let r=this.ctx.createOscillator(),i=this.ctx.createGain();r.type=`triangle`,r.frequency.setValueAtTime(t,e+n*.06),i.gain.setValueAtTime(.06,e+n*.06),i.gain.exponentialRampToValueAtTime(.001,e+n*.06+.12),r.connect(i),i.connect(this.ctx.destination),r.start(e+n*.06),r.stop(e+n*.06+.12)})}catch{}}triggerHaptic(e=`light`){if(typeof window<`u`&&navigator.vibrate)try{e===`light`?navigator.vibrate(8):e===`medium`?navigator.vibrate(18):e===`success`&&navigator.vibrate([10,30,20])}catch{}}},Et=({title:e=`3D Parallax Tilt Card`,subtitle:t=`Move your cursor across this surface to experience real 3D perspective pitch and yaw.`,className:n=``})=>{let{getRadiusClass:r}=Q(),i=(0,a.useRef)(null),[o,s]=(0,a.useState)({rotateX:0,rotateY:0});return(0,Y.jsx)(`div`,{style:{perspective:`800px`},className:`inline-block w-full ${n}`,children:(0,Y.jsx)(`div`,{ref:i,onMouseMove:e=>{if(!i.current)return;let t=i.current.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top,a=t.width/2,o=t.height/2,c=(r-o)/o*-12,l=(n-a)/a*12;s({rotateX:c,rotateY:l})},onMouseLeave:()=>{s({rotateX:0,rotateY:0})},style:{transform:`rotateX(${o.rotateX}deg) rotateY(${o.rotateY}deg)`,transition:o.rotateX===0?`transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)`:`transform 0.08s ease-out`,transformStyle:`preserve-3d`},className:`p-5 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 jx-elevation-1 hover:shadow-2xl ${r(`card`)} cursor-pointer select-none`,children:(0,Y.jsxs)(`div`,{style:{transform:`translateZ(24px)`},className:`space-y-2`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,Y.jsxs)(`span`,{className:`text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5`,children:[(0,Y.jsx)(U,{className:`w-3.5 h-3.5`}),(0,Y.jsx)(`span`,{children:`3D Motion Spec`})]}),(0,Y.jsx)(R,{className:`w-4 h-4 text-slate-400`})]}),(0,Y.jsx)(`h4`,{className:`font-bold text-sm text-slate-900 dark:text-white`,children:e}),(0,Y.jsx)(`p`,{className:`text-xs text-slate-500 dark:text-slate-400 leading-relaxed`,children:t})]})})})},Dt=({title:e=`Magnetic Attraction Card`,subtitle:t=`Pulls toward the pointer coordinates on hover and springs back smoothly upon mouse exit.`,strength:n=.25,className:r=``})=>{let{getRadiusClass:i}=Q(),o=(0,a.useRef)(null),[s,c]=(0,a.useState)({x:0,y:0});return(0,Y.jsxs)(`div`,{ref:o,onMouseMove:e=>{if(!o.current)return;let t=o.current.getBoundingClientRect(),r=t.left+t.width/2,i=t.top+t.height/2;c({x:(e.clientX-r)*n,y:(e.clientY-i)*n})},onMouseLeave:()=>{c({x:0,y:0})},style:{transform:`translate3d(${s.x}px, ${s.y}px, 0)`,transition:s.x===0?`transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)`:`transform 0.08s ease-out`},className:`p-5 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 jx-elevation-1 hover:shadow-xl ${i(`card`)} cursor-pointer select-none space-y-2 ${r}`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,Y.jsxs)(`span`,{className:`text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5`,children:[(0,Y.jsx)(me,{className:`w-3.5 h-3.5`}),(0,Y.jsx)(`span`,{children:`Magnetic Physics`})]}),(0,Y.jsxs)(`span`,{className:`text-[10px] font-mono text-slate-400`,children:[`dx: `,Math.round(s.x),`px, dy: `,Math.round(s.y),`px`]})]}),(0,Y.jsx)(`h4`,{className:`font-bold text-sm text-slate-900 dark:text-white`,children:e}),(0,Y.jsx)(`p`,{className:`text-xs text-slate-500 dark:text-slate-400 leading-relaxed`,children:t})]})},Ot=({onSave:e,className:t=``})=>{let{getRadiusClass:n}=Q(),r=(0,a.useRef)(null),[i,o]=(0,a.useState)(!1),[s,c]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let e=r.current;if(!e)return;let t=e.getContext(`2d`);t&&(t.lineWidth=2.5,t.lineCap=`round`,t.lineJoin=`round`,t.strokeStyle=`#4f46e5`)},[]);let l=e=>{let t=r.current;if(!t)return{x:0,y:0};let n=t.getBoundingClientRect();if(`touches`in e){let t=e.touches[0];return{x:t.clientX-n.left,y:t.clientY-n.top}}return{x:e.clientX-n.left,y:e.clientY-n.top}},u=e=>{o(!0),c(!0);let t=r.current;if(!t)return;let n=t.getContext(`2d`);if(!n)return;let{x:i,y:a}=l(e);n.beginPath(),n.moveTo(i,a)},d=e=>{if(!i)return;let t=r.current;if(!t)return;let n=t.getContext(`2d`);if(!n)return;let{x:a,y:o}=l(e);n.lineTo(a,o),n.stroke()},f=()=>{o(!1),r.current&&e&&e(r.current.toDataURL())};return(0,Y.jsxs)(`div`,{className:`p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 ${n(`card`)} shadow-sm space-y-2 ${t}`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center justify-between text-xs`,children:[(0,Y.jsxs)(`span`,{className:`font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1.5`,children:[(0,Y.jsx)(we,{className:`w-3.5 h-3.5 text-indigo-500`}),(0,Y.jsx)(`span`,{children:`Vector Digital Signature`})]}),s&&(0,Y.jsxs)(`button`,{type:`button`,onClick:()=>{let e=r.current;if(!e)return;let t=e.getContext(`2d`);t&&(t.clearRect(0,0,e.width,e.height),c(!1))},className:`flex items-center gap-1 text-[11px] font-medium text-slate-500 hover:text-rose-500 cursor-pointer`,children:[(0,Y.jsx)(B,{className:`w-3 h-3`}),(0,Y.jsx)(`span`,{children:`Clear`})]})]}),(0,Y.jsxs)(`div`,{className:`relative w-full h-24 bg-slate-50 dark:bg-slate-950/60 border border-dashed border-slate-300 dark:border-slate-700 rounded-lg overflow-hidden`,children:[(0,Y.jsx)(`canvas`,{ref:r,width:300,height:96,onMouseDown:u,onMouseMove:d,onMouseUp:f,onMouseLeave:f,onTouchStart:u,onTouchMove:d,onTouchEnd:f,className:`w-full h-full cursor-crosshair touch-none`}),!s&&(0,Y.jsx)(`span`,{className:`absolute inset-0 flex items-center justify-center text-[11px] text-slate-400 pointer-events-none select-none`,children:`Sign here with mouse or stylus...`})]})]})},kt=({min:e=0,max:t=100,step:n=1,defaultMin:r=20,defaultMax:i=80,onChange:o})=>{let{palette:s,getRadiusClass:c}=Q(),[l,u]=(0,a.useState)(r),[d,f]=(0,a.useState)(i),p=e=>{let t=Math.min(Number(e.target.value),d-n);u(t),o?.({min:t,max:d})},m=e=>{let t=Math.max(Number(e.target.value),l+n);f(t),o?.({min:l,max:t})},h=(l-e)/(t-e)*100,g=(d-e)/(t-e)*100;return(0,Y.jsxs)(`div`,{className:`w-full flex flex-col gap-2 py-1 select-none`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center justify-between text-xs font-mono font-medium`,children:[(0,Y.jsxs)(`span`,{className:`text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800`,children:[l,`px`]}),(0,Y.jsx)(`span`,{className:`text-[10px] text-slate-400 uppercase tracking-wider font-semibold`,children:`Range Span`}),(0,Y.jsxs)(`span`,{className:`text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800`,children:[d,`px`]})]}),(0,Y.jsxs)(`div`,{className:`relative w-full h-6 flex items-center`,children:[(0,Y.jsx)(`div`,{className:`absolute inset-x-0 h-2 bg-slate-200 dark:bg-slate-700 rounded-full`}),(0,Y.jsx)(`div`,{className:`absolute h-2 ${s.bg} rounded-full`,style:{left:`${h}%`,width:`${g-h}%`}}),(0,Y.jsx)(`input`,{type:`range`,min:e,max:t,step:n,value:l,onChange:p,"aria-label":`Minimum range slider`,className:`absolute inset-x-0 w-full appearance-none pointer-events-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-indigo-600 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-grab active:[&::-webkit-slider-thumb]:cursor-grabbing`}),(0,Y.jsx)(`input`,{type:`range`,min:e,max:t,step:n,value:d,onChange:m,"aria-label":`Maximum range slider`,className:`absolute inset-x-0 w-full appearance-none pointer-events-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-indigo-600 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-grab active:[&::-webkit-slider-thumb]:cursor-grabbing`})]})]})},At=({size:e=80,minAngle:t=0,maxAngle:n=360,defaultValue:r=240,onChange:i})=>{let{palette:o}=Q(),[s,c]=(0,a.useState)(r),[l,u]=(0,a.useState)(!1),d=(0,a.useRef)(null),f=e/2-8,p=e/2,m=2*Math.PI*f,h=m-s/360*m,g=(0,a.useCallback)((e,r)=>{if(!d.current)return;let a=d.current.getBoundingClientRect(),o=a.left+a.width/2,s=a.top+a.height/2,l=e-o,u=r-s,f=Math.atan2(u,l)*180/Math.PI+90;f<0&&(f+=360);let p=Math.max(t,Math.min(n,Math.round(f)));c(p),i?.(p)},[t,n,i]),_=e=>{u(!0),e.currentTarget.setPointerCapture(e.pointerId),g(e.clientX,e.clientY)},v=e=>{l&&g(e.clientX,e.clientY)},y=e=>{u(!1);try{e.currentTarget.releasePointerCapture(e.pointerId)}catch{}},b=(s-90)*Math.PI/180,x=p+f*Math.cos(b),S=p+f*Math.sin(b);return(0,Y.jsxs)(`div`,{className:`flex flex-col items-center gap-1.5 select-none`,children:[(0,Y.jsxs)(`div`,{ref:d,onPointerDown:_,onPointerMove:v,onPointerUp:y,style:{width:e,height:e},className:`relative cursor-pointer touch-none group`,children:[(0,Y.jsxs)(`svg`,{width:e,height:e,className:`overflow-visible`,children:[(0,Y.jsx)(`circle`,{cx:p,cy:p,r:f,fill:`none`,stroke:`currentColor`,strokeWidth:6,className:`text-slate-200 dark:text-slate-800`}),(0,Y.jsx)(`circle`,{cx:p,cy:p,r:f,fill:`none`,stroke:`url(#circular-grad)`,strokeWidth:6,strokeDasharray:m,strokeDashoffset:h,strokeLinecap:`round`,transform:`rotate(-90 ${p} ${p})`,className:`transition-all duration-75`}),(0,Y.jsx)(`defs`,{children:(0,Y.jsxs)(`linearGradient`,{id:`circular-grad`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`100%`,children:[(0,Y.jsx)(`stop`,{offset:`0%`,stopColor:`#6366f1`}),(0,Y.jsx)(`stop`,{offset:`100%`,stopColor:`#a855f7`})]})}),(0,Y.jsx)(`circle`,{cx:x,cy:S,r:6,className:`fill-white stroke-indigo-600 stroke-2 shadow-md filter drop-shadow cursor-grab active:cursor-grabbing transition-transform group-hover:scale-125`})]}),(0,Y.jsx)(`div`,{className:`absolute inset-0 flex flex-col items-center justify-center pointer-events-none`,children:(0,Y.jsxs)(`span`,{className:`text-xs font-mono font-bold text-slate-900 dark:text-white`,children:[s,`°`]})})]}),(0,Y.jsx)(`span`,{className:`text-[10px] font-mono text-slate-400`,children:`Rotary Knob`})]})},jt=({initialToken:e=`jx_sec_live_94f8b2c149e8a71b`,onRegenerate:t})=>{let{palette:n,getRadiusClass:r,pushToast:i}=Q(),[o,s]=(0,a.useState)(e),[c,l]=(0,a.useState)(!1),[u,d]=(0,a.useState)(!1),f=()=>{navigator.clipboard?.writeText(o),d(!0),i({title:`Secret Token Copied`,description:`API key copied safely to clipboard`,variant:`success`}),setTimeout(()=>d(!1),2e3)},p=()=>{let e=`jx_sec_live_${Math.random().toString(36).substring(2,10)+Math.random().toString(36).substring(2,10)}`;s(e),t?.(),i({title:`Generated New Token`,description:`New ephemeral secret credentials generated`,variant:`default`})},m=o.slice(0,12)+`•`.repeat(Math.max(4,o.length-16))+o.slice(-4);return(0,Y.jsxs)(`div`,{className:`flex items-center justify-between gap-2 px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 ${r(`control`)} text-xs font-mono`,children:[(0,Y.jsx)(`span`,{className:`text-slate-800 dark:text-slate-200 select-all truncate`,children:c?o:m}),(0,Y.jsxs)(`div`,{className:`flex items-center gap-1 shrink-0`,children:[(0,Y.jsx)(`button`,{type:`button`,onClick:()=>l(!c),"aria-label":c?`Hide secret token`:`Reveal secret token`,className:`p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer`,children:c?(0,Y.jsx)(N,{className:`w-3.5 h-3.5`}):(0,Y.jsx)(P,{className:`w-3.5 h-3.5`})}),(0,Y.jsx)(`button`,{type:`button`,onClick:f,"aria-label":`Copy token`,className:`p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer`,children:u?(0,Y.jsx)(C,{className:`w-3.5 h-3.5 text-emerald-500`}):(0,Y.jsx)(j,{className:`w-3.5 h-3.5`})}),(0,Y.jsx)(`button`,{type:`button`,onClick:p,"aria-label":`Regenerate token`,className:`p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer`,children:(0,Y.jsx)(De,{className:`w-3.5 h-3.5`})})]})]})},Mt=({children:e=`Liquid Gel`,variant:t=`solid`,tone:n=`primary`,className:r=``,onClick:i,...o})=>{let{palette:s,getRadiusClass:c}=Q(),[l,u]=(0,a.useState)(0),d={primary:{solid:`${s.bg} text-white`,soft:`${s.softBg} ${s.text} border ${s.border}`,outline:`bg-transparent ${s.text} border-2 ${s.border}`,glass:`bg-white/75 dark:bg-slate-800/75 backdrop-blur-md text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700`},success:{solid:`bg-emerald-600 text-white`,soft:`bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800`,outline:`bg-transparent text-emerald-600 dark:text-emerald-400 border-2 border-emerald-500`,glass:`bg-emerald-500/15 backdrop-blur-md text-emerald-700 dark:text-emerald-200 border border-emerald-400/40`},warning:{solid:`bg-amber-500 text-white`,soft:`bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800`,outline:`bg-transparent text-amber-600 dark:text-amber-400 border-2 border-amber-500`,glass:`bg-amber-500/15 backdrop-blur-md text-amber-700 dark:text-amber-200 border border-amber-400/40`},danger:{solid:`bg-rose-600 text-white`,soft:`bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800`,outline:`bg-transparent text-rose-600 dark:text-rose-400 border-2 border-rose-500`,glass:`bg-rose-500/15 backdrop-blur-md text-rose-700 dark:text-rose-200 border border-rose-400/40`}};return(0,Y.jsxs)(`button`,{type:`button`,onClick:e=>{u(e=>e+1),i?.(e)},className:`relative overflow-hidden px-4 py-2 font-semibold text-xs ${d[n][t]} ${c(`pill`)} shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 group cursor-pointer ${r}`,...o,children:[(0,Y.jsxs)(`span`,{className:`relative z-10 flex items-center justify-center gap-2`,children:[(0,Y.jsx)(U,{className:`w-3.5 h-3.5`}),(0,Y.jsx)(`span`,{children:e}),l>0&&(0,Y.jsxs)(`span`,{className:`px-1.5 py-0.2 rounded-full bg-black/15 dark:bg-white/20 text-[10px] font-mono`,children:[l,`x`]})]}),(0,Y.jsx)(`div`,{className:`absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12`})]})},Nt=({children:e=`Tactile Ripple`,className:t=``,variant:n=`solid`,tone:r=`primary`,onClick:i,...o})=>{let{palette:s,getRadiusClass:c}=Q(),[l,u]=(0,a.useState)([]),[d,f]=(0,a.useState)(0),p={primary:{solid:`${s.bg} text-white border-transparent`,soft:`${s.softBg} ${s.text} ${s.border}`,outline:`bg-transparent border-2 ${s.border} ${s.text}`,glass:`bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white`},success:{solid:`bg-emerald-600 text-white border-transparent`,soft:`bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800`,outline:`bg-transparent border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400`,glass:`bg-emerald-500/15 backdrop-blur-md border-emerald-400/40 text-emerald-700 dark:text-emerald-200`},warning:{solid:`bg-amber-500 text-white border-transparent`,soft:`bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800`,outline:`bg-transparent border-2 border-amber-500 text-amber-600 dark:text-amber-400`,glass:`bg-amber-500/15 backdrop-blur-md border-amber-400/40 text-amber-700 dark:text-amber-200`},danger:{solid:`bg-rose-600 text-white border-transparent`,soft:`bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800`,outline:`bg-transparent border-2 border-rose-500 text-rose-600 dark:text-rose-400`,glass:`bg-rose-500/15 backdrop-blur-md border-rose-400/40 text-rose-700 dark:text-rose-200`}};return(0,Y.jsxs)(`button`,{type:`button`,onClick:e=>{let t=e.currentTarget.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top,a={id:Date.now(),x:n,y:r};u(e=>[...e,a]),f(e=>e+1),setTimeout(()=>{u(e=>e.filter(e=>e.id!==a.id))},600),i?.(e)},className:`relative overflow-hidden px-4 py-2 text-xs font-semibold border ${p[r][n]} ${c(`control`)} shadow-md cursor-pointer transition-all ${t}`,...o,children:[(0,Y.jsxs)(`span`,{className:`relative z-10 inline-flex items-center gap-1.5`,children:[(0,Y.jsx)(`span`,{children:e}),d>0&&(0,Y.jsxs)(`span`,{className:`font-mono text-[10px] opacity-80`,children:[`×`,d]})]}),l.map(e=>(0,Y.jsx)(`span`,{style:{left:e.x,top:e.y},className:`absolute w-3 h-3 -ml-1.5 -mt-1.5 bg-current opacity-35 rounded-full animate-ping pointer-events-none`},e.id))]})},Pt=({children:e=`Magnetic Action`,strength:t=.35,variant:n=`solid`,tone:r=`primary`,className:i=``,onClick:o,...s})=>{let{palette:c,getRadiusClass:l}=Q(),[u,d]=(0,a.useState)({x:0,y:0}),[f,p]=(0,a.useState)(0),m=(0,a.useRef)(null),h=e=>{if(!m.current)return;let n=m.current.getBoundingClientRect(),r=n.left+n.width/2,i=n.top+n.height/2;d({x:(e.clientX-r)*t,y:(e.clientY-i)*t})},g=()=>{d({x:0,y:0})},_={primary:{solid:`${c.bg} text-white`,soft:`${c.softBg} ${c.text} border ${c.border}`,outline:`bg-transparent ${c.text} border-2 ${c.border}`,glass:`bg-white/75 dark:bg-slate-800/75 backdrop-blur-md text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700`},success:{solid:`bg-emerald-600 text-white`,soft:`bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800`,outline:`bg-transparent text-emerald-600 dark:text-emerald-400 border-2 border-emerald-500`,glass:`bg-emerald-500/15 backdrop-blur-md text-emerald-700 dark:text-emerald-200 border border-emerald-400/40`},warning:{solid:`bg-amber-500 text-white`,soft:`bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800`,outline:`bg-transparent text-amber-600 dark:text-amber-400 border-2 border-amber-500`,glass:`bg-amber-500/15 backdrop-blur-md text-amber-700 dark:text-amber-200 border border-amber-400/40`},danger:{solid:`bg-rose-600 text-white`,soft:`bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800`,outline:`bg-transparent text-rose-600 dark:text-rose-400 border-2 border-rose-500`,glass:`bg-rose-500/15 backdrop-blur-md text-rose-700 dark:text-rose-200 border border-rose-400/40`}};return(0,Y.jsxs)(`button`,{ref:m,type:`button`,onMouseMove:h,onMouseLeave:g,onClick:e=>{p(e=>e+1),o?.(e)},style:{transform:`translate(${u.x}px, ${u.y}px)`,transition:u.x===0?`transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)`:`transform 0.1s ease-out`},className:`px-4 py-2 font-semibold text-xs ${_[r][n]} ${l(`control`)} shadow-md hover:shadow-lg active:scale-95 cursor-pointer inline-flex items-center gap-2 ${i}`,...s,children:[(0,Y.jsx)(U,{className:`w-3.5 h-3.5`}),(0,Y.jsx)(`span`,{children:e}),f>0&&(0,Y.jsxs)(`span`,{className:`px-1.5 py-0.2 rounded-full bg-black/15 dark:bg-white/20 text-[10px] font-mono`,children:[f,`x`]})]})},Ft=({label:e=`Create Issue`,icon:t,extended:n=!0,autoCollapseOnScroll:r=!1,glass:i=!1,badgeCount:o,size:s=`md`,position:c=`inline`,disabled:l=!1,className:u=``,...d})=>{let{palette:f}=Q(),[p,m]=(0,a.useState)(!1);(0,a.useEffect)(()=>{if(!r)return;let e=window.scrollY,t=()=>{let t=window.scrollY;m(t>e&&t>80),e=t};return window.addEventListener(`scroll`,t,{passive:!0}),()=>window.removeEventListener(`scroll`,t)},[r]);let h=r?!p&&n:n;return(0,Y.jsxs)(`button`,{type:`button`,disabled:l,"aria-label":e,className:`${c===`bottom-right`?`fixed bottom-6 right-6 z-40`:c===`bottom-center`?`fixed bottom-6 left-1/2 -translate-x-1/2 z-40`:`relative`} inline-flex items-center justify-center gap-2.5 font-semibold rounded-full jx-elevation-3 transition-all duration-300 jx-spring active:scale-95 whitespace-nowrap shrink-0 ${s===`sm`?`h-10 px-4 text-xs`:s===`lg`?`h-14 px-6 text-sm`:`h-12 px-5 text-xs`} ${i?`bg-slate-900/85 dark:bg-white/90 text-white dark:text-slate-900 backdrop-blur-md border border-white/15`:`${f.bg} ${f.bgHover} text-white`} ${l?`opacity-50 pointer-events-none`:``} ${u}`,...d,children:[(0,Y.jsx)(`span`,{className:`shrink-0`,children:t||(0,Y.jsx)(z,{className:`w-4 h-4`})}),h&&e&&(0,Y.jsx)(`span`,{children:e}),typeof o==`number`&&o>0&&(0,Y.jsx)(`span`,{className:`px-1.5 py-0.5 text-[10px] font-mono bg-white/20 dark:bg-black/20 rounded-full tabular-nums`,children:o})]})},It=[{id:`release`,title:`v3.0.0 Production Release`,timestamp:`2m ago`,status:`success`,icon:(0,Y.jsx)(se,{className:`h-3.5 w-3.5 text-emerald-600`})},{id:`tokens`,title:`Design Token Sync`,timestamp:`14m ago`,status:`active`,icon:(0,Y.jsx)(U,{className:`h-3.5 w-3.5 text-indigo-600`}),payload:`+ "--jx-radius-lg": "16px"
+ "--jx-shadow-elevation-2": "0 10px 25px -4px rgba(15,23,42,0.06)"`},{id:`audit`,title:`Automated WCAG AA Audit Passed`,timestamp:`1h ago`,status:`neutral`,icon:(0,Y.jsx)(ee,{className:`h-3.5 w-3.5 text-slate-500`})}],Lt=({events:e=It,defaultExpandedPayload:t=!0,className:n=``})=>{let[r,i]=(0,a.useState)({tokens:t}),o=e=>{i(t=>({...t,[e]:!t[e]}))};return(0,Y.jsx)(`div`,{className:`relative pl-5 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-700 ${n}`,children:e.map(e=>{let t=!!r[e.id],n=e.status===`success`?`border-emerald-500 bg-emerald-50 dark:bg-emerald-950`:e.status===`active`?`border-indigo-500 bg-indigo-50 dark:bg-indigo-950`:`border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800`;return(0,Y.jsxs)(`div`,{className:`relative`,children:[(0,Y.jsx)(`span`,{className:`absolute -left-5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 ${n}`,children:e.icon}),(0,Y.jsxs)(`div`,{className:`flex items-center justify-between text-xs`,children:[(0,Y.jsx)(`span`,{className:`font-semibold text-slate-900 dark:text-white`,children:e.title}),(0,Y.jsxs)(`div`,{className:`flex items-center gap-2`,children:[e.payload&&(0,Y.jsx)(`button`,{type:`button`,onClick:()=>o(e.id),className:`text-[11px] font-medium text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer`,children:t?`Hide Diff`:`Show Diff`}),(0,Y.jsx)(`span`,{className:`font-mono text-[10px] text-slate-400`,children:e.timestamp})]})]}),e.payload&&t&&(0,Y.jsx)(`pre`,{className:`mt-1.5 rounded-lg bg-slate-900 text-slate-200 p-2.5 text-[10px] font-mono overflow-x-auto`,children:e.payload})]},e.id)})})},Rt=t({default:()=>zt}),zt=`// @jxui/react v3.0.0 — AIApprovalCard (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Bot, 
  Sparkles, 
  Send, 
  ThumbsUp, 
  ThumbsDown, 
  Copy, 
  RefreshCw, 
  Paperclip, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';

// 8. AIApprovalCard
export const AIApprovalCard: React.FC = () => {
  return (
    <div className="p-3 border-2 border-indigo-500 rounded-xl bg-indigo-50/20 dark:bg-indigo-950/20 text-xs flex flex-col gap-2">
      <span className="font-bold">Human-in-the-Loop Approval Required</span>
      <p className="text-[11px] text-slate-500">Deploy build #894 to production?</p>
      <div className="flex gap-2">
        <button className="px-3 py-1 bg-emerald-600 text-white rounded font-bold cursor-pointer">Approve</button>
        <button className="px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded font-bold cursor-pointer">Reject</button>
      </div>
    </div>
  );
};
`,Bt=t({default:()=>Vt}),Vt=`// @jxui/react v3.0.0 — AIAttachmentPreview (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Bot, 
  Sparkles, 
  Send, 
  ThumbsUp, 
  ThumbsDown, 
  Copy, 
  RefreshCw, 
  Paperclip, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';

// 13. AIAttachmentPreview
export const AIAttachmentPreview: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-[11px]">
      <span>architecture.png (142 KB)</span>
    </div>
  );
};
`,Ht=t({default:()=>Ut}),Ut=`// @jxui/react v3.0.0 — AIChatPanel (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Bot, 
  Sparkles, 
  Send, 
  ThumbsUp, 
  ThumbsDown, 
  Copy, 
  RefreshCw, 
  Paperclip, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';

// 1. AIChatPanel
export const AIChatPanel: React.FC = () => {
  return (
    <div className="w-full max-w-sm border rounded-2xl p-3 flex flex-col gap-2 bg-white dark:bg-slate-900 shadow-xl text-xs">
      <div className="flex items-center gap-2 pb-2 border-b">
        <Bot className="w-4 h-4 text-indigo-500" />
        <span className="font-bold">Antigravity AI Agent</span>
      </div>
      <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">How can I assist your workflow today?</div>
    </div>
  );
};
`,Wt=t({default:()=>Gt}),Gt=`// @jxui/react v3.0.0 — AICitationCard (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Bot, 
  Sparkles, 
  Send, 
  ThumbsUp, 
  ThumbsDown, 
  Copy, 
  RefreshCw, 
  Paperclip, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';

// 14. AICitationCard
export const AICitationCard: React.FC = () => {
  return (
    <div className="p-2 border rounded-lg text-xs flex items-center justify-between">
      <span className="font-semibold text-indigo-600">Source: DESIGN.md</span>
      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
    </div>
  );
};
`,Kt=t({default:()=>qt}),qt=`// @jxui/react v3.0.0 — AIComposer (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Bot, 
  Sparkles, 
  Send, 
  ThumbsUp, 
  ThumbsDown, 
  Copy, 
  RefreshCw, 
  Paperclip, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';

// 3. AIComposer
export const AIComposer: React.FC = () => {
  return (
    <div className="flex items-center gap-2 p-2 border rounded-xl bg-white dark:bg-slate-900 w-full text-xs">
      <Paperclip className="w-4 h-4 text-slate-400 cursor-pointer" />
      <input placeholder="Ask AI anything..." className="w-full bg-transparent focus:outline-none" />
      <button className="p-1.5 bg-indigo-600 text-white rounded-lg cursor-pointer"><Send className="w-3.5 h-3.5" /></button>
    </div>
  );
};
`,Jt=t({default:()=>Yt}),Yt=`// @jxui/react v3.0.0 — AIContextPanel (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Bot, 
  Sparkles, 
  Send, 
  ThumbsUp, 
  ThumbsDown, 
  Copy, 
  RefreshCw, 
  Paperclip, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';

// 11. AIContextPanel
export const AIContextPanel: React.FC = () => {
  return (
    <div className="p-2 border rounded-lg text-xs font-mono">
      <span>Context: 18.4k / 200k tokens</span>
    </div>
  );
};
`,Xt=t({default:()=>Zt}),Zt=`// @jxui/react v3.0.0 — AIMessage (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Bot, 
  Sparkles, 
  Send, 
  ThumbsUp, 
  ThumbsDown, 
  Copy, 
  RefreshCw, 
  Paperclip, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';

// 2. AIMessage
export const AIMessage: React.FC<{ content?: string }> = ({ content = 'I analyzed the 18 design categories and synthesized all 290 zero-shift components.' }) => {
  return (
    <div className="flex gap-2.5 text-xs">
      <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0">
        <Bot className="w-3.5 h-3.5" />
      </div>
      <div className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-800 dark:text-slate-200">
        {content}
      </div>
    </div>
  );
};
`,Qt=t({default:()=>$t}),$t=`// @jxui/react v3.0.0 — AIModelSelector (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Bot, 
  Sparkles, 
  Send, 
  ThumbsUp, 
  ThumbsDown, 
  Copy, 
  RefreshCw, 
  Paperclip, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';

// 12. AIModelSelector
export const AIModelSelector: React.FC = () => {
  return (
    <select className="px-2 py-1 border rounded-lg text-xs bg-white dark:bg-slate-900 cursor-pointer">
      <option>Gemini 2.5 Flash</option>
      <option>Gemini 2.5 Pro</option>
      <option>Claude 3.7 Sonnet</option>
    </select>
  );
};
`,en=t({default:()=>tn}),tn=`// @jxui/react v3.0.0 — AIReasoningTimeline (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Bot, 
  Sparkles, 
  Send, 
  ThumbsUp, 
  ThumbsDown, 
  Copy, 
  RefreshCw, 
  Paperclip, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';

// 9. AIReasoningTimeline
export const AIReasoningTimeline: React.FC = () => {
  return (
    <div className="flex flex-col gap-1.5 text-[11px] text-slate-500 border-l-2 border-indigo-400 pl-2">
      <div>1. Read component specifications</div>
      <div>2. Generated TypeScript interfaces</div>
      <div className="text-indigo-600 font-bold">3. Verifying zero CLS metrics</div>
    </div>
  );
};
`,nn=t({default:()=>rn}),rn=`// @jxui/react v3.0.0 — AIResponseActions (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Bot, 
  Sparkles, 
  Send, 
  ThumbsUp, 
  ThumbsDown, 
  Copy, 
  RefreshCw, 
  Paperclip, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';

// 10. AIResponseActions
export const AIResponseActions: React.FC = () => {
  return (
    <div className="flex items-center gap-2 text-slate-400 text-xs">
      <button className="hover:text-slate-600 cursor-pointer"><ThumbsUp className="w-3.5 h-3.5" /></button>
      <button className="hover:text-slate-600 cursor-pointer"><ThumbsDown className="w-3.5 h-3.5" /></button>
      <button className="hover:text-slate-600 cursor-pointer"><Copy className="w-3.5 h-3.5" /></button>
      <button className="hover:text-slate-600 cursor-pointer"><RefreshCw className="w-3.5 h-3.5" /></button>
    </div>
  );
};
`,an=t({default:()=>on}),on=`// @jxui/react v3.0.0 — AIStreamingText (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Bot, 
  Sparkles, 
  Send, 
  ThumbsUp, 
  ThumbsDown, 
  Copy, 
  RefreshCw, 
  Paperclip, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';

// 5. AIStreamingText
export const AIStreamingText: React.FC = () => {
  return (
    <div className="font-mono text-xs text-slate-800 dark:text-slate-200 flex items-center gap-1">
      <span>Streaming token sequence</span>
      <span className="w-1.5 h-3.5 bg-indigo-600 animate-pulse" />
    </div>
  );
};
`,sn=t({default:()=>cn}),cn=`// @jxui/react v3.0.0 — AIThinkingIndicator (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Bot, 
  Sparkles, 
  Send, 
  ThumbsUp, 
  ThumbsDown, 
  Copy, 
  RefreshCw, 
  Paperclip, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';

// 4. AIThinkingIndicator
export const AIThinkingIndicator: React.FC = () => {
  return (
    <div className="flex items-center gap-2 p-2 bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-lg text-xs text-indigo-700 dark:text-indigo-300">
      <Sparkles className="w-3.5 h-3.5 animate-spin" />
      <span>Reasoning across codebase...</span>
    </div>
  );
};
`,ln=t({default:()=>un}),un=`// @jxui/react v3.0.0 — AIToolCall (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Bot, 
  Sparkles, 
  Send, 
  ThumbsUp, 
  ThumbsDown, 
  Copy, 
  RefreshCw, 
  Paperclip, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';

// 6. AIToolCall
export const AIToolCall: React.FC<{ toolName?: string }> = ({ toolName = 'run_command' }) => {
  return (
    <div className="p-2.5 border border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs font-mono">
      <div className="text-indigo-600 font-bold flex items-center gap-1">⚡ call_tool: {toolName}</div>
      <div className="text-slate-500 text-[10px] mt-1">{\`{ "command": "npm test" }\`}</div>
    </div>
  );
};
`,dn=t({default:()=>fn}),fn=`// @jxui/react v3.0.0 — AIToolTrace (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Bot, 
  Sparkles, 
  Send, 
  ThumbsUp, 
  ThumbsDown, 
  Copy, 
  RefreshCw, 
  Paperclip, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';

// 7. AIToolTrace
export const AIToolTrace: React.FC = () => {
  return (
    <div className="p-2 bg-slate-950 text-emerald-400 font-mono text-[10px] rounded-lg">
      ✓ Executed in 142ms • Exit code: 0
    </div>
  );
};
`,pn=t({default:()=>mn}),mn=`// @jxui/react v3.0.0 — AIWorkflowBuilder (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Bot, 
  Sparkles, 
  Send, 
  ThumbsUp, 
  ThumbsDown, 
  Copy, 
  RefreshCw, 
  Paperclip, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';

// 15. AIWorkflowBuilder
export const AIWorkflowBuilder: React.FC = () => {
  return (
    <div className="flex items-center gap-2 text-xs font-mono">
      <span className="p-1.5 border rounded bg-slate-50 dark:bg-slate-900">Trigger</span>
      <span>→</span>
      <span className="p-1.5 bg-indigo-600 text-white rounded">LLM Agent</span>
      <span>→</span>
      <span className="p-1.5 border rounded bg-slate-50 dark:bg-slate-900">Output</span>
    </div>
  );
};
`,hn=t({default:()=>gn}),gn=`// @jxui/react v3.0.0 — AnimatedGradient (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, Eye, Zap } from 'lucide-react';

// 10. AnimatedGradient
export const AnimatedGradient: React.FC = () => {
  return (
    <div className="w-full h-10 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x" />
  );
};
`,_n=t({default:()=>vn}),vn=`// @jxui/react v3.0.0 — CursorFollower (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, Eye, Zap } from 'lucide-react';

// 9. CursorFollower
export const CursorFollower: React.FC = () => {
  return <div className="text-xs text-slate-500 font-mono">Trailing Radial Ambient Halo</div>;
};
`,yn=t({default:()=>bn}),bn=`// @jxui/react v3.0.0 — HoverDistortion (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, Eye, Zap } from 'lucide-react';

// 14. HoverDistortion
export const HoverDistortion: React.FC = () => {
  return <div className="text-xs text-slate-500">Wave displacement shader simulation</div>;
};
`,xn=t({default:()=>Sn}),Sn=`// @jxui/react v3.0.0 — LiquidBlob (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, Eye, Zap } from 'lucide-react';

// 11. LiquidBlob
export const LiquidBlob: React.FC = () => {
  return (
    <div className="w-12 h-12 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-full animate-blob blur-xs" />
  );
};
`,Cn=t({default:()=>wn}),wn=`// @jxui/react v3.0.0 — MagneticCursor (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, Eye, Zap } from 'lucide-react';

// 8. MagneticCursor
export const MagneticCursor: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-1.5 p-2 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 rounded-lg text-xs font-semibold text-indigo-600">
      <Sparkles className="w-3.5 h-3.5" /> Magnetic Cursor Snapping
    </div>
  );
};
`,Tn=t({default:()=>En}),En=`// @jxui/react v3.0.0 — MorphTransition (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, Eye, Zap } from 'lucide-react';

// 2. MorphTransition
export const MorphTransition: React.FC = () => {
  return (
    <div className="w-12 h-12 bg-indigo-600 rounded-xl hover:rounded-full transition-all duration-500 cursor-pointer flex items-center justify-center text-white text-[10px] font-bold">
      Morph
    </div>
  );
};
`,Dn=t({default:()=>On}),On=`// @jxui/react v3.0.0 — MotionSequence (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, Eye, Zap } from 'lucide-react';

// 15. MotionSequence
export const MotionSequence: React.FC = () => {
  return (
    <div className="flex items-center gap-2 text-xs font-mono">
      <Zap className="w-3.5 h-3.5 text-amber-500" />
      <span>Stage: Keyframe 3/4 Running</span>
    </div>
  );
};
`,kn=t({default:()=>An}),An=`// @jxui/react v3.0.0 — PageTransition (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, Eye, Zap } from 'lucide-react';

// 4. PageTransition
export const PageTransition: React.FC = () => {
  return <div className="p-2 border rounded text-xs animate-fade-in">Page Enter: Fade & Slide 12px</div>;
};
`,jn=t({default:()=>Mn}),Mn=`// @jxui/react v3.0.0 — ParallaxContainer (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, Eye, Zap } from 'lucide-react';

// 7. ParallaxContainer
export const ParallaxContainer: React.FC = () => {
  return <div className="p-3 border rounded-xl text-xs text-center font-bold">Parallax Depth Plane</div>;
};
`,Nn=t({default:()=>Pn}),Pn=`// @jxui/react v3.0.0 — ParticleField (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, Eye, Zap } from 'lucide-react';

// 12. ParticleField
export const ParticleField: React.FC = () => {
  return (
    <div className="relative w-36 h-12 border rounded-lg overflow-hidden flex items-center justify-around">
      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping" />
      <span className="w-1 h-1 bg-violet-400 rounded-full animate-ping [animation-delay:0.2s]" />
      <span className="w-2 h-2 bg-pink-400 rounded-full animate-ping [animation-delay:0.4s]" />
    </div>
  );
};
`,Fn=t({default:()=>In}),In=`// @jxui/react v3.0.0 — ScrollReveal (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, Eye, Zap } from 'lucide-react';

// 6. ScrollReveal
export const ScrollReveal: React.FC = () => {
  return <div className="text-xs text-slate-500">IntersectionObserver Viewport Reveal</div>;
};
`,Ln=t({default:()=>Rn}),Rn=`// @jxui/react v3.0.0 — SharedElementTransition (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, Eye, Zap } from 'lucide-react';

// 3. SharedElementTransition
export const SharedElementTransition: React.FC = () => {
  return <div className="text-xs text-slate-500 font-mono">Shared Layout ID Transition</div>;
};
`,zn=t({default:()=>Bn}),Bn=`// @jxui/react v3.0.0 — SpotlightEffect (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, Eye, Zap } from 'lucide-react';

// 13. SpotlightEffect
export const SpotlightEffect: React.FC = () => {
  return (
    <div className="p-3 bg-slate-950 text-white rounded-lg text-xs text-center font-bold">
      Spotlight Glow Shading
    </div>
  );
};
`,Vn=t({default:()=>Hn}),Hn=`// @jxui/react v3.0.0 — SpringTransition (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, Eye, Zap } from 'lucide-react';

// 1. SpringTransition
export const SpringTransition: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105">
      {children ?? <div className="p-3 border rounded-xl text-xs font-bold text-center">Spring Transition (Scale 1.05)</div>}
    </div>
  );
};
`,Un=t({default:()=>Wn}),Wn=`// @jxui/react v3.0.0 — StaggeredReveal (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, Eye, Zap } from 'lucide-react';

// 5. StaggeredReveal
export const StaggeredReveal: React.FC = () => {
  return (
    <div className="flex gap-1.5 text-xs">
      <div className="p-1.5 border rounded animate-fade-in [animation-delay:0.1s]">Item 1</div>
      <div className="p-1.5 border rounded animate-fade-in [animation-delay:0.2s]">Item 2</div>
      <div className="p-1.5 border rounded animate-fade-in [animation-delay:0.3s]">Item 3</div>
    </div>
  );
};
`,Gn=t({default:()=>Kn}),Kn=`// @jxui/react v3.0.0 — AnimatedButtonGroup (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Sparkles, 
  Check, 
  Loader2, 
  ChevronRight, 
  ChevronDown, 
  ArrowRight, 
  Plus, 
  Trash2, 
  Command, 
  MousePointer, 
  Flame, 
  Share2,
  Copy,
  ExternalLink,
  ShieldCheck,
  Send
} from 'lucide-react';

// 17. AnimatedButtonGroup
export interface AnimatedButtonGroupProps {
  options?: string[];
  value?: string;
  onChange?: (val: string) => void;
}
export const AnimatedButtonGroup: React.FC<AnimatedButtonGroupProps> = ({
  options = ['Day', 'Week', 'Month', 'Year'],
  value,
  onChange,
}) => {
  const { palette, getRadiusClass } = useJXTheme();
  const [internalValue, setInternalValue] = useState<string>(value ?? options[1] ?? options[0]);
  const selectedValue = value ?? internalValue;

  const handleSelect = (opt: string) => {
    setInternalValue(opt);
    onChange?.(opt);
  };

  return (
    <div className={\`inline-flex p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 \${getRadiusClass('pill')}\`}>
      {options.map((opt) => {
        const isSelected = opt === selectedValue;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => handleSelect(opt)}
            className={\`px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer \${
              isSelected
                ? \`\${palette.bg} text-white shadow-sm\`
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }\`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
};
`,qn=t({default:()=>Jn}),Jn=`// @jxui/react v3.0.0 — CommandButton (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Command } from 'lucide-react';

// 18. CommandButton
export interface CommandButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  shortcut?: string;
  variant?: 'solid' | 'soft' | 'outline' | 'glass';
  tone?: 'primary' | 'success' | 'warning' | 'danger';
}
export const CommandButton: React.FC<CommandButtonProps> = ({
  label = 'Search Project',
  shortcut = '⌘K',
  variant = 'outline',
  tone = 'primary',
  className = '',
  onClick,
  ...props
}) => {
  const { palette, getRadiusClass } = useJXTheme();
  const [triggered, setTriggered] = useState(false);

  const toneMap = {
    primary: {
      solid: \`\${palette.bg} text-white border-transparent\`,
      soft: \`\${palette.softBg} \${palette.text} \${palette.border}\`,
      outline: 'text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700',
      glass: 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white',
    },
    success: {
      solid: 'bg-emerald-600 text-white border-transparent',
      soft: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
      outline: 'bg-transparent text-emerald-600 dark:text-emerald-400 border-emerald-500',
      glass: 'bg-emerald-500/15 backdrop-blur-md text-emerald-700 dark:text-emerald-200 border-emerald-400/40',
    },
    warning: {
      solid: 'bg-amber-500 text-white border-transparent',
      soft: 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800',
      outline: 'bg-transparent text-amber-600 dark:text-amber-400 border-amber-500',
      glass: 'bg-amber-500/15 backdrop-blur-md text-amber-700 dark:text-amber-200 border-amber-400/40',
    },
    danger: {
      solid: 'bg-rose-600 text-white border-transparent',
      soft: 'bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800',
      outline: 'bg-transparent text-rose-600 dark:text-rose-400 border-rose-500',
      glass: 'bg-rose-500/15 backdrop-blur-md text-rose-700 dark:text-rose-200 border-rose-400/40',
    },
  };

  return (
    <button
      type="button"
      onClick={(e) => {
        setTriggered(true);
        setTimeout(() => setTriggered(false), 1200);
        onClick?.(e);
      }}
      className={\`inline-flex items-center gap-2.5 px-3 py-1.5 text-xs font-medium \${
        triggered
          ? 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500'
          : toneMap[tone][variant]
      } border \${getRadiusClass('control')} shadow-xs active:scale-95 transition-all cursor-pointer \${className}\`}
      {...props}
    >
      <Command className="w-3.5 h-3.5 opacity-80" />
      <span>{triggered ? 'Command Executed!' : label}</span>
      <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-black/10 dark:bg-white/10 rounded">
        {shortcut}
      </kbd>
    </button>
  );
};
`,Yn=t({default:()=>Xn}),Xn=`// @jxui/react v3.0.0 — ExpandableButton (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Plus, Check } from 'lucide-react';

// 13. ExpandableButton
export interface ExpandableButtonProps {
  icon?: React.ComponentType<{ className?: string }>;
  label?: string;
  onClick?: () => void;
  variant?: 'solid' | 'soft' | 'outline' | 'glass';
  tone?: 'primary' | 'success' | 'warning' | 'danger';
}

export const ExpandableButton: React.FC<ExpandableButtonProps> = ({
  icon: Icon = Plus,
  label = 'Create New Project',
  onClick,
  variant = 'solid',
  tone = 'primary',
}) => {
  const { palette, getRadiusClass } = useJXTheme();
  const [expanded, setExpanded] = useState(false);
  const [createdCount, setCreatedCount] = useState(0);

  const toneMap = {
    primary: {
      solid: \`\${palette.bg} text-white\`,
      soft: \`\${palette.softBg} \${palette.text} border \${palette.border}\`,
      outline: \`bg-transparent border-2 \${palette.border} \${palette.text}\`,
      glass: 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white',
    },
    success: {
      solid: 'bg-emerald-600 text-white',
      soft: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800',
      outline: 'bg-transparent border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400',
      glass: 'bg-emerald-500/15 backdrop-blur-md border border-emerald-400/40 text-emerald-700 dark:text-emerald-200',
    },
    warning: {
      solid: 'bg-amber-500 text-white',
      soft: 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800',
      outline: 'bg-transparent border-2 border-amber-500 text-amber-600 dark:text-amber-400',
      glass: 'bg-amber-500/15 backdrop-blur-md border border-amber-400/40 text-amber-700 dark:text-amber-200',
    },
    danger: {
      solid: 'bg-rose-600 text-white',
      soft: 'bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800',
      outline: 'bg-transparent border-2 border-rose-500 text-rose-600 dark:text-rose-400',
      glass: 'bg-rose-500/15 backdrop-blur-md border border-rose-400/40 text-rose-700 dark:text-rose-200',
    },
  };

  const handleClick = () => {
    setExpanded((prev) => !prev);
    setCreatedCount((c) => c + 1);
    onClick?.();
  };

  return (
    <button
      type="button"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onFocus={() => setExpanded(true)}
      onBlur={() => setExpanded(false)}
      onClick={handleClick}
      className={\`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold \${toneMap[tone][variant]} \${getRadiusClass('pill')} shadow-md transition-all duration-300 cursor-pointer overflow-hidden\`}
    >
      {createdCount > 0 ? <Check className="w-4 h-4 shrink-0" /> : <Icon className="w-4 h-4 shrink-0" />}
      <span className={\`transition-all duration-300 whitespace-nowrap overflow-hidden \${expanded || createdCount > 0 ? 'max-w-xs opacity-100 pr-1' : 'max-w-0 opacity-0'}\`}>
        {createdCount > 0 ? \`\${label} (\${createdCount})\` : label}
      </span>
    </button>
  );
};
`,Zn=t({default:()=>Qn}),Qn=`// @jxui/react v3.0.0 — FloatingActionButton (JXUI v3.0 Unified Component Suite)
import React from 'react';
import { Plus } from 'lucide-react';
import { JXFab, type JXFabProps } from '../../inputs/JXFab';

// 14. FloatingActionButton (FAB)
// Reuses JXFab high-fidelity spring physics, telemetry tokens, and optional scroll-collapse
export interface FloatingActionButtonProps extends Omit<JXFabProps, 'icon'> {
  icon?: React.ComponentType<{ className?: string }> | React.ReactNode;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  icon: Icon = Plus,
  label,
  className = '',
  ...props
}) => {
  const renderedIcon = React.isValidElement(Icon)
    ? Icon
    : typeof Icon === 'function'
    ? React.createElement(Icon as React.ComponentType<{ className?: string }>, { className: 'w-5 h-5' })
    : <Plus className="w-5 h-5" />;

  return (
    <JXFab
      icon={renderedIcon}
      label={label}
      extended={Boolean(label)}
      className={className}
      {...props}
    />
  );
};
`,$n=t({default:()=>er}),er=`// @jxui/react v3.0.0 — GestureButton (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Sparkles, 
  Check, 
  Loader2, 
  ChevronRight, 
  ChevronDown, 
  ArrowRight, 
  Plus, 
  Trash2, 
  Command, 
  MousePointer, 
  Flame, 
  Share2,
  Copy,
  ExternalLink,
  ShieldCheck,
  Send
} from 'lucide-react';

// 19. GestureButton
export interface GestureButtonProps {
  onSwipeRight?: () => void;
  label?: string;
}
export const GestureButton: React.FC<GestureButtonProps> = ({
  onSwipeRight,
  label = 'Tap / Double-Tap Gesture',
}) => {
  const { palette, getRadiusClass } = useJXTheme();
  const [gestureState, setGestureState] = useState<'idle' | 'tapped' | 'double'>('idle');

  const handleClick = () => {
    setGestureState('tapped');
    onSwipeRight?.();
    setTimeout(() => setGestureState('idle'), 900);
  };

  const handleDoubleClick = () => {
    setGestureState('double');
    onSwipeRight?.();
    setTimeout(() => setGestureState('idle'), 1100);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      className={\`px-4 py-2 text-xs font-semibold text-white \${
        gestureState === 'double'
          ? 'bg-emerald-600'
          : gestureState === 'tapped'
          ? 'bg-violet-600'
          : palette.bg
      } \${getRadiusClass('control')} shadow-md active:scale-95 transition-all cursor-pointer select-none\`}
    >
      <div className="flex items-center gap-1.5">
        <MousePointer className="w-3.5 h-3.5" />
        <span>
          {gestureState === 'double'
            ? 'Double-Tap Recognized!'
            : gestureState === 'tapped'
            ? 'Tap Impulse Fired!'
            : label}
        </span>
      </div>
    </button>
  );
};
`,tr=t({default:()=>nr}),nr=`// @jxui/react v3.0.0 — GlowButton (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Flame } from 'lucide-react';

// 6. GlowButton
export interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: 'solid' | 'soft' | 'outline' | 'glass';
  tone?: 'primary' | 'success' | 'warning' | 'danger';
}
export const GlowButton: React.FC<GlowButtonProps> = ({
  children = 'Luminescent Glow',
  variant = 'solid',
  tone = 'primary',
  className = '',
  onClick,
  ...props
}) => {
  const { palette, getRadiusClass } = useJXTheme();
  const [clicks, setClicks] = useState(0);

  const toneMap = {
    primary: {
      solid: \`\${palette.bg} text-white shadow-[0_0_20px_rgba(99,102,241,0.45)]\`,
      soft: \`\${palette.softBg} \${palette.text} border \${palette.border} shadow-[0_0_16px_rgba(99,102,241,0.25)]\`,
      outline: \`bg-transparent \${palette.text} border-2 \${palette.border} shadow-[0_0_16px_rgba(99,102,241,0.3)]\`,
      glass: 'bg-white/75 dark:bg-slate-800/75 backdrop-blur-md text-slate-900 dark:text-white border border-indigo-400/50 shadow-[0_0_18px_rgba(99,102,241,0.3)]',
    },
    success: {
      solid: 'bg-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.45)]',
      soft: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shadow-[0_0_16px_rgba(16,185,129,0.25)]',
      outline: 'bg-transparent text-emerald-600 dark:text-emerald-400 border-2 border-emerald-500 shadow-[0_0_16px_rgba(16,185,129,0.3)]',
      glass: 'bg-emerald-500/15 backdrop-blur-md text-emerald-700 dark:text-emerald-200 border border-emerald-400/50 shadow-[0_0_18px_rgba(16,185,129,0.3)]',
    },
    warning: {
      solid: 'bg-amber-500 text-white shadow-[0_0_20px_rgba(245,158,11,0.45)]',
      soft: 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 shadow-[0_0_16px_rgba(245,158,11,0.25)]',
      outline: 'bg-transparent text-amber-600 dark:text-amber-400 border-2 border-amber-500 shadow-[0_0_16px_rgba(245,158,11,0.3)]',
      glass: 'bg-amber-500/15 backdrop-blur-md text-amber-700 dark:text-amber-200 border border-amber-400/50 shadow-[0_0_18px_rgba(245,158,11,0.3)]',
    },
    danger: {
      solid: 'bg-rose-600 text-white shadow-[0_0_20px_rgba(244,63,94,0.45)]',
      soft: 'bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 shadow-[0_0_16px_rgba(244,63,94,0.25)]',
      outline: 'bg-transparent text-rose-600 dark:text-rose-400 border-2 border-rose-500 shadow-[0_0_16px_rgba(244,63,94,0.3)]',
      glass: 'bg-rose-500/15 backdrop-blur-md text-rose-700 dark:text-rose-200 border border-rose-400/50 shadow-[0_0_18px_rgba(244,63,94,0.3)]',
    },
  };

  return (
    <button
      type="button"
      onClick={(e) => {
        setClicks((c) => c + 1);
        onClick?.(e);
      }}
      className={\`relative group px-4 py-2 text-xs font-semibold \${toneMap[tone][variant]} \${getRadiusClass('control')} cursor-pointer transition-all duration-300 active:scale-95 inline-flex items-center gap-1.5 \${className}\`}
      {...props}
    >
      <Flame className="w-3.5 h-3.5" />
      <span>{children}</span>
      {clicks > 0 && (
        <span className="px-1.5 py-0.2 rounded-full bg-black/15 dark:bg-white/20 text-[10px] font-mono">
          {clicks}x
        </span>
      )}
    </button>
  );
};
`,rr=t({default:()=>ir}),ir=`// @jxui/react v3.0.0 — GradientButton (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles } from 'lucide-react';

// 7. GradientButton
export interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: 'solid' | 'soft' | 'outline' | 'glass';
  tone?: 'primary' | 'success' | 'warning' | 'danger';
}
export const GradientButton: React.FC<GradientButtonProps> = ({
  children = 'Gradient Aura',
  variant = 'solid',
  tone = 'primary',
  className = '',
  onClick,
  ...props
}) => {
  const { palette, getRadiusClass } = useJXTheme();
  const [clicks, setClicks] = useState(0);

  const toneMap = {
    primary: {
      solid: \`text-white bg-gradient-to-r \${palette.gradient}\`,
      soft: \`\${palette.softBg} \${palette.text} border \${palette.border}\`,
      outline: \`bg-transparent \${palette.text} border-2 \${palette.border}\`,
      glass: 'bg-white/75 dark:bg-slate-800/75 backdrop-blur-md text-slate-900 dark:text-white border border-indigo-400/40',
    },
    success: {
      solid: 'text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600',
      soft: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800',
      outline: 'bg-transparent text-emerald-600 dark:text-emerald-400 border-2 border-emerald-500',
      glass: 'bg-emerald-500/15 backdrop-blur-md text-emerald-700 dark:text-emerald-200 border border-emerald-400/40',
    },
    warning: {
      solid: 'text-white bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500',
      soft: 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800',
      outline: 'bg-transparent text-amber-600 dark:text-amber-400 border-2 border-amber-500',
      glass: 'bg-amber-500/15 backdrop-blur-md text-amber-700 dark:text-amber-200 border border-amber-400/40',
    },
    danger: {
      solid: 'text-white bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600',
      soft: 'bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800',
      outline: 'bg-transparent text-rose-600 dark:text-rose-400 border-2 border-rose-500',
      glass: 'bg-rose-500/15 backdrop-blur-md text-rose-700 dark:text-rose-200 border border-rose-400/40',
    },
  };

  return (
    <button
      type="button"
      onClick={(e) => {
        setClicks((c) => c + 1);
        onClick?.(e);
      }}
      className={\`px-4 py-2 text-xs font-bold \${toneMap[tone][variant]} \${getRadiusClass('control')} shadow-lg hover:brightness-110 active:scale-95 transition-all duration-200 cursor-pointer inline-flex items-center gap-1.5 \${className}\`}
      {...props}
    >
      <Sparkles className="w-3.5 h-3.5" />
      <span>{children}</span>
      {clicks > 0 && (
        <span className="px-1.5 py-0.2 rounded-full bg-black/20 text-[10px] font-mono">
          {clicks}x
        </span>
      )}
    </button>
  );
};
`,ar=t({default:()=>or}),or=`// @jxui/react v3.0.0 — HoldToConfirmButton (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Trash2, Check, RotateCcw } from 'lucide-react';

// 11. HoldToConfirmButton
export interface HoldToConfirmButtonProps {
  label?: string;
  onConfirm?: () => void;
  holdDurationMs?: number;
  variant?: 'solid' | 'soft' | 'outline' | 'glass';
  tone?: 'primary' | 'success' | 'warning' | 'danger';
}

export const HoldToConfirmButton: React.FC<HoldToConfirmButtonProps> = ({
  label = 'Hold to Delete',
  onConfirm,
  holdDurationMs = 900,
  variant = 'soft',
  tone = 'danger',
}) => {
  const { palette, getRadiusClass } = useJXTheme();
  const [progress, setProgress] = useState(0);
  const [confirmed, setConfirmed] = useState(false);
  const timerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const handleStart = () => {
    if (confirmed) {
      setConfirmed(false);
      return;
    }
    startTimeRef.current = Date.now();
    timerRef.current = window.setInterval(() => {
      if (!startTimeRef.current) return;
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min(100, (elapsed / holdDurationMs) * 100);
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(timerRef.current!);
        setConfirmed(true);
        onConfirm?.();
        setProgress(0);
        startTimeRef.current = null;
      }
    }, 20);
  };

  const handleEnd = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setProgress(0);
    startTimeRef.current = null;
  };

  const toneStyles = {
    primary: variant === 'solid' ? \`\${palette.bg} text-white border-transparent\` : \`\${palette.softBg} \${palette.text} \${palette.border}\`,
    success: variant === 'solid' ? 'bg-emerald-600 text-white border-transparent' : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-300 dark:border-emerald-800',
    warning: variant === 'solid' ? 'bg-amber-500 text-white border-transparent' : 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-800',
    danger: variant === 'solid' ? 'bg-rose-600 text-white border-transparent' : 'bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border-rose-300 dark:border-rose-800',
  };

  return (
    <button
      type="button"
      onMouseDown={handleStart}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
      className={\`relative overflow-hidden px-4 py-2 text-xs font-semibold border \${
        confirmed
          ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800'
          : toneStyles[tone]
      } \${getRadiusClass('control')} cursor-pointer select-none active:scale-98 transition-all\`}
    >
      <div
        className="absolute inset-y-0 left-0 bg-rose-500/25 dark:bg-rose-500/35 transition-all duration-75"
        style={{ width: \`\${progress}%\` }}
      />
      <div className="relative z-10 flex items-center gap-2">
        {confirmed ? (
          <>
            <Check className="w-3.5 h-3.5" />
            <span>Confirmed! Click to Reset</span>
            <RotateCcw className="w-3 h-3 opacity-70" />
          </>
        ) : (
          <>
            <Trash2 className="w-3.5 h-3.5" />
            <span>{label}</span>
            {progress > 0 && <span className="font-mono text-[10px]">{Math.round(progress)}%</span>}
          </>
        )}
      </div>
    </button>
  );
};
`,sr=t({default:()=>cr}),cr=`// @jxui/react v3.0.0 — LiquidButton (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles } from 'lucide-react';

// 2. LiquidButton
export interface LiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: 'solid' | 'soft' | 'outline' | 'glass';
  tone?: 'primary' | 'success' | 'warning' | 'danger';
}
export const LiquidButton: React.FC<LiquidButtonProps> = ({
  children = 'Liquid Gel',
  variant = 'solid',
  tone = 'primary',
  className = '',
  onClick,
  ...props
}) => {
  const { palette, getRadiusClass } = useJXTheme();
  const [clicks, setClicks] = useState(0);

  const toneMap = {
    primary: {
      solid: \`\${palette.bg} text-white\`,
      soft: \`\${palette.softBg} \${palette.text} border \${palette.border}\`,
      outline: \`bg-transparent \${palette.text} border-2 \${palette.border}\`,
      glass: 'bg-white/75 dark:bg-slate-800/75 backdrop-blur-md text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700',
    },
    success: {
      solid: 'bg-emerald-600 text-white',
      soft: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800',
      outline: 'bg-transparent text-emerald-600 dark:text-emerald-400 border-2 border-emerald-500',
      glass: 'bg-emerald-500/15 backdrop-blur-md text-emerald-700 dark:text-emerald-200 border border-emerald-400/40',
    },
    warning: {
      solid: 'bg-amber-500 text-white',
      soft: 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800',
      outline: 'bg-transparent text-amber-600 dark:text-amber-400 border-2 border-amber-500',
      glass: 'bg-amber-500/15 backdrop-blur-md text-amber-700 dark:text-amber-200 border border-amber-400/40',
    },
    danger: {
      solid: 'bg-rose-600 text-white',
      soft: 'bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800',
      outline: 'bg-transparent text-rose-600 dark:text-rose-400 border-2 border-rose-500',
      glass: 'bg-rose-500/15 backdrop-blur-md text-rose-700 dark:text-rose-200 border border-rose-400/40',
    },
  };

  return (
    <button
      type="button"
      onClick={(e) => {
        setClicks((c) => c + 1);
        onClick?.(e);
      }}
      className={\`relative overflow-hidden px-4 py-2 font-semibold text-xs \${toneMap[tone][variant]} \${getRadiusClass('pill')} shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 group cursor-pointer \${className}\`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5" />
        <span>{children}</span>
        {clicks > 0 && (
          <span className="px-1.5 py-0.2 rounded-full bg-black/15 dark:bg-white/20 text-[10px] font-mono">
            {clicks}x
          </span>
        )}
      </span>
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
    </button>
  );
};
`,lr=t({default:()=>ur}),ur=`// @jxui/react v3.0.0 — MagneticButton (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles } from 'lucide-react';

// 1. MagneticButton
export interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  strength?: number;
  variant?: 'solid' | 'soft' | 'outline' | 'glass';
  tone?: 'primary' | 'success' | 'warning' | 'danger';
}
export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children = 'Magnetic Action',
  strength = 0.35,
  variant = 'solid',
  tone = 'primary',
  className = '',
  onClick,
  ...props
}) => {
  const { palette, getRadiusClass } = useJXTheme();
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [clicks, setClicks] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setOffset({
      x: (e.clientX - centerX) * strength,
      y: (e.clientY - centerY) * strength,
    });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const toneMap = {
    primary: {
      solid: \`\${palette.bg} text-white\`,
      soft: \`\${palette.softBg} \${palette.text} border \${palette.border}\`,
      outline: \`bg-transparent \${palette.text} border-2 \${palette.border}\`,
      glass: 'bg-white/75 dark:bg-slate-800/75 backdrop-blur-md text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700',
    },
    success: {
      solid: 'bg-emerald-600 text-white',
      soft: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800',
      outline: 'bg-transparent text-emerald-600 dark:text-emerald-400 border-2 border-emerald-500',
      glass: 'bg-emerald-500/15 backdrop-blur-md text-emerald-700 dark:text-emerald-200 border border-emerald-400/40',
    },
    warning: {
      solid: 'bg-amber-500 text-white',
      soft: 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800',
      outline: 'bg-transparent text-amber-600 dark:text-amber-400 border-2 border-amber-500',
      glass: 'bg-amber-500/15 backdrop-blur-md text-amber-700 dark:text-amber-200 border border-amber-400/40',
    },
    danger: {
      solid: 'bg-rose-600 text-white',
      soft: 'bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800',
      outline: 'bg-transparent text-rose-600 dark:text-rose-400 border-2 border-rose-500',
      glass: 'bg-rose-500/15 backdrop-blur-md text-rose-700 dark:text-rose-200 border border-rose-400/40',
    },
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => {
        setClicks((c) => c + 1);
        onClick?.(e);
      }}
      style={{
        transform: \`translate(\${offset.x}px, \${offset.y}px)\`,
        transition: offset.x === 0 ? 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)' : 'transform 0.1s ease-out',
      }}
      className={\`px-4 py-2 font-semibold text-xs \${toneMap[tone][variant]} \${getRadiusClass('control')} shadow-md hover:shadow-lg active:scale-95 cursor-pointer inline-flex items-center gap-2 \${className}\`}
      {...props}
    >
      <Sparkles className="w-3.5 h-3.5" />
      <span>{children}</span>
      {clicks > 0 && (
        <span className="px-1.5 py-0.2 rounded-full bg-black/15 dark:bg-white/20 text-[10px] font-mono">
          {clicks}x
        </span>
      )}
    </button>
  );
};
`,dr=t({default:()=>fr}),fr=`// @jxui/react v3.0.0 — MagneticIconButton (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, Check } from 'lucide-react';

// 10. MagneticIconButton
export interface MagneticIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<{ className?: string }>;
  variant?: 'solid' | 'soft' | 'outline' | 'glass';
  tone?: 'primary' | 'success' | 'warning' | 'danger';
}
export const MagneticIconButton: React.FC<MagneticIconButtonProps> = ({
  icon: Icon = Sparkles,
  variant = 'solid',
  tone = 'primary',
  className = '',
  onClick,
  ...props
}) => {
  const { palette, getRadiusClass } = useJXTheme();
  const [active, setActive] = useState(false);

  const toneMap = {
    primary: {
      solid: \`\${palette.bg} text-white\`,
      soft: \`\${palette.softBg} \${palette.text} border \${palette.border}\`,
      outline: \`bg-transparent \${palette.text} border-2 \${palette.border}\`,
      glass: 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white',
    },
    success: {
      solid: 'bg-emerald-600 text-white',
      soft: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800',
      outline: 'bg-transparent text-emerald-600 dark:text-emerald-400 border-2 border-emerald-500',
      glass: 'bg-emerald-500/15 backdrop-blur-md text-emerald-700 dark:text-emerald-200 border border-emerald-400/40',
    },
    warning: {
      solid: 'bg-amber-500 text-white',
      soft: 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800',
      outline: 'bg-transparent text-amber-600 dark:text-amber-400 border-2 border-amber-500',
      glass: 'bg-amber-500/15 backdrop-blur-md text-amber-700 dark:text-amber-200 border border-amber-400/40',
    },
    danger: {
      solid: 'bg-rose-600 text-white',
      soft: 'bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800',
      outline: 'bg-transparent text-rose-600 dark:text-rose-400 border-2 border-rose-500',
      glass: 'bg-rose-500/15 backdrop-blur-md text-rose-700 dark:text-rose-200 border border-rose-400/40',
    },
  };

  return (
    <div className="inline-flex items-center gap-2">
      <button
        type="button"
        aria-label="Magnetic icon action"
        onClick={(e) => {
          setActive((a) => !a);
          onClick?.(e);
        }}
        className={\`w-10 h-10 flex items-center justify-center \${
          active ? 'bg-emerald-600 text-white ring-4 ring-emerald-500/20' : toneMap[tone][variant]
        } \${getRadiusClass('pill')} shadow-md hover:scale-110 active:scale-90 transition-all duration-200 cursor-pointer \${className}\`}
        {...props}
      >
        {active ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
      </button>
      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
        {active ? 'Pinned' : 'Click icon'}
      </span>
    </div>
  );
};
`,pr=t({default:()=>mr}),mr=`// @jxui/react v3.0.0 — MorphButton (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, Check, Loader2, X } from 'lucide-react';

// 3. MorphButton (Zero-shift 3-state morphing: idle -> loading -> success)
export interface MorphButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  status?: 'idle' | 'loading' | 'success' | 'error';
  variant?: 'solid' | 'soft' | 'outline' | 'glass';
  tone?: 'primary' | 'success' | 'warning' | 'danger';
  idleText?: string;
  loadingText?: string;
  successText?: string;
  errorText?: string;
  onTrigger?: () => void;
}
export const MorphButton: React.FC<MorphButtonProps> = ({
  status,
  variant = 'solid',
  tone = 'primary',
  idleText = 'Deploy Changes',
  loadingText = 'Deploying...',
  successText = 'Deployed!',
  errorText = 'Failed — Retry',
  onTrigger,
  onClick,
  className = '',
  ...props
}) => {
  const { palette, getRadiusClass } = useJXTheme();
  const [internalStatus, setInternalStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const currentStatus = status ?? internalStatus;

  const toneMap = {
    primary: {
      solid: \`\${palette.bg} text-white border-transparent shadow-md\`,
      soft: \`\${palette.softBg} \${palette.text} border \${palette.border}\`,
      outline: \`bg-transparent \${palette.text} border-2 \${palette.border}\`,
      glass: 'bg-white/75 dark:bg-slate-800/75 backdrop-blur-md text-slate-900 dark:text-white border border-slate-200/80 dark:border-slate-700 shadow-sm',
    },
    success: {
      solid: 'bg-emerald-600 text-white border-transparent shadow-md',
      soft: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800',
      outline: 'bg-transparent text-emerald-600 dark:text-emerald-400 border-2 border-emerald-500',
      glass: 'bg-emerald-500/15 backdrop-blur-md text-emerald-700 dark:text-emerald-200 border border-emerald-400/40',
    },
    warning: {
      solid: 'bg-amber-500 text-white border-transparent shadow-md',
      soft: 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800',
      outline: 'bg-transparent text-amber-600 dark:text-amber-400 border-2 border-amber-500',
      glass: 'bg-amber-500/15 backdrop-blur-md text-amber-700 dark:text-amber-200 border border-amber-400/40',
    },
    danger: {
      solid: 'bg-rose-600 text-white border-transparent shadow-md',
      soft: 'bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800',
      outline: 'bg-transparent text-rose-600 dark:text-rose-400 border-2 border-rose-500',
      glass: 'bg-rose-500/15 backdrop-blur-md text-rose-700 dark:text-rose-200 border border-rose-400/40',
    },
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    onTrigger?.();
    if (status === undefined && internalStatus === 'idle') {
      setInternalStatus('loading');
      setTimeout(() => {
        setInternalStatus(tone === 'danger' ? 'error' : 'success');
        setTimeout(() => setInternalStatus('idle'), 1600);
      }, 650);
    }
  };

  const getVariantStyle = () => {
    if (currentStatus === 'success') {
      return 'bg-emerald-600 text-white border-transparent shadow-md shadow-emerald-500/20';
    }
    if (currentStatus === 'error') {
      return 'bg-rose-600 text-white border-transparent shadow-md shadow-rose-500/20';
    }
    return toneMap[tone][variant];
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={currentStatus === 'loading'}
      className={\`relative min-w-[148px] px-4 py-2 text-xs font-semibold transition-all duration-300 \${getRadiusClass('control')} cursor-pointer active:scale-95 \${getVariantStyle()} \${className}\`}
      {...props}
    >
      <div className="flex items-center justify-center gap-2 min-h-[20px]">
        {currentStatus === 'idle' && (
          <>
            <Sparkles className="w-3.5 h-3.5" />
            <span>{idleText}</span>
          </>
        )}
        {currentStatus === 'loading' && (
          <>
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
            <span>{loadingText}</span>
          </>
        )}
        {currentStatus === 'success' && (
          <>
            <Check className="w-3.5 h-3.5" />
            <span>{successText}</span>
          </>
        )}
        {currentStatus === 'error' && (
          <>
            <X className="w-3.5 h-3.5" />
            <span>{errorText}</span>
          </>
        )}
      </div>
    </button>
  );
};
`,hr=t({default:()=>gr}),gr=`// @jxui/react v3.0.0 — MultiStateButton (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Sparkles, 
  Check, 
  Loader2, 
  ChevronRight, 
  ChevronDown, 
  ArrowRight, 
  Plus, 
  Trash2, 
  Command, 
  MousePointer, 
  Flame, 
  Share2,
  Copy,
  ExternalLink,
  ShieldCheck,
  Send
} from 'lucide-react';

// 20. MultiStateButton
export interface MultiStateButtonProps {
  states?: string[];
  activeState?: string;
  onCycle?: (nextState: string) => void;
}
export const MultiStateButton: React.FC<MultiStateButtonProps> = ({
  states = ['Pending', 'In Review', 'Approved', 'Rejected'],
  activeState,
  onCycle,
}) => {
  const { getRadiusClass } = useJXTheme();
  const [internalState, setInternalState] = useState<string>(activeState ?? states[0]);
  const current = activeState ?? internalState;

  const handleNext = () => {
    const idx = states.indexOf(current);
    const next = states[(idx + 1) % states.length];
    setInternalState(next);
    onCycle?.(next);
  };

  const getTone = (st: string) => {
    switch (st) {
      case 'Approved':
        return 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/40';
      case 'Rejected':
        return 'bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/40';
      case 'In Review':
        return 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/40';
      default:
        return 'bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-500/40';
    }
  };

  return (
    <button
      type="button"
      onClick={handleNext}
      className={\`px-3.5 py-2 text-xs font-semibold border \${getRadiusClass('pill')} \${getTone(current)} active:scale-95 transition-all cursor-pointer flex items-center gap-2 shadow-xs\`}
    >
      <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
      <span>Status: {current}</span>
      <span className="text-[10px] opacity-70 font-mono">(Click to cycle)</span>
    </button>
  );
};
`,_r=t({default:()=>vr}),vr=`// @jxui/react v3.0.0 — ParticleButton (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles } from 'lucide-react';

// 9. ParticleButton
export interface ParticleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: 'solid' | 'soft' | 'outline' | 'glass';
  tone?: 'primary' | 'success' | 'warning' | 'danger';
}

export const ParticleButton: React.FC<ParticleButtonProps> = ({
  children = 'Particle Burst',
  className = '',
  variant = 'solid',
  tone = 'primary',
  onClick,
  ...props
}) => {
  const { palette, getRadiusClass } = useJXTheme();
  const [burst, setBurst] = useState(false);
  const [burstCount, setBurstCount] = useState(0);

  const toneMap = {
    primary: {
      solid: \`\${palette.bg} text-white border-transparent\`,
      soft: \`\${palette.softBg} \${palette.text} \${palette.border}\`,
      outline: \`bg-transparent border-2 \${palette.border} \${palette.text}\`,
      glass: 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white',
    },
    success: {
      solid: 'bg-emerald-600 text-white border-transparent',
      soft: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
      outline: 'bg-transparent border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400',
      glass: 'bg-emerald-500/15 backdrop-blur-md border-emerald-400/40 text-emerald-700 dark:text-emerald-200',
    },
    warning: {
      solid: 'bg-amber-500 text-white border-transparent',
      soft: 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800',
      outline: 'bg-transparent border-2 border-amber-500 text-amber-600 dark:text-amber-400',
      glass: 'bg-amber-500/15 backdrop-blur-md border-amber-400/40 text-amber-700 dark:text-amber-200',
    },
    danger: {
      solid: 'bg-rose-600 text-white border-transparent',
      soft: 'bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800',
      outline: 'bg-transparent border-2 border-rose-500 text-rose-600 dark:text-rose-400',
      glass: 'bg-rose-500/15 backdrop-blur-md border-rose-400/40 text-rose-700 dark:text-rose-200',
    },
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setBurst(true);
    setBurstCount((c) => c + 1);
    setTimeout(() => setBurst(false), 700);
    onClick?.(e);
  };

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={handleClick}
        className={\`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold border \${toneMap[tone][variant]} \${getRadiusClass('control')} shadow-md active:scale-95 transition-all cursor-pointer \${className}\`}
        {...props}
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>{children}</span>
        {burstCount > 0 && <span className="font-mono text-[10px] opacity-80">×{burstCount}</span>}
      </button>
      {burst && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping"
              style={{
                transform: \`rotate(\${i * 45}deg) translate(\${28 + (i % 2) * 10}px)\`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
`,yr=t({default:()=>br}),br=`// @jxui/react v3.0.0 — RippleButton (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 5. RippleButton
export interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: 'solid' | 'soft' | 'outline' | 'glass';
  tone?: 'primary' | 'success' | 'warning' | 'danger';
}

export const RippleButton: React.FC<RippleButtonProps> = ({
  children = 'Tactile Ripple',
  className = '',
  variant = 'solid',
  tone = 'primary',
  onClick,
  ...props
}) => {
  const { palette, getRadiusClass } = useJXTheme();
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const [clickCount, setClickCount] = useState(0);

  const toneMap = {
    primary: {
      solid: \`\${palette.bg} text-white border-transparent\`,
      soft: \`\${palette.softBg} \${palette.text} \${palette.border}\`,
      outline: \`bg-transparent border-2 \${palette.border} \${palette.text}\`,
      glass: 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white',
    },
    success: {
      solid: 'bg-emerald-600 text-white border-transparent',
      soft: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
      outline: 'bg-transparent border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400',
      glass: 'bg-emerald-500/15 backdrop-blur-md border-emerald-400/40 text-emerald-700 dark:text-emerald-200',
    },
    warning: {
      solid: 'bg-amber-500 text-white border-transparent',
      soft: 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800',
      outline: 'bg-transparent border-2 border-amber-500 text-amber-600 dark:text-amber-400',
      glass: 'bg-amber-500/15 backdrop-blur-md border-amber-400/40 text-amber-700 dark:text-amber-200',
    },
    danger: {
      solid: 'bg-rose-600 text-white border-transparent',
      soft: 'bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800',
      outline: 'bg-transparent border-2 border-rose-500 text-rose-600 dark:text-rose-400',
      glass: 'bg-rose-500/15 backdrop-blur-md border-rose-400/40 text-rose-700 dark:text-rose-200',
    },
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { id: Date.now(), x, y };
    setRipples((prev) => [...prev, newRipple]);
    setClickCount((c) => c + 1);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
    onClick?.(e);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={\`relative overflow-hidden px-4 py-2 text-xs font-semibold border \${toneMap[tone][variant]} \${getRadiusClass('control')} shadow-md cursor-pointer transition-all \${className}\`}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center gap-1.5">
        <span>{children}</span>
        {clickCount > 0 && <span className="font-mono text-[10px] opacity-80">×{clickCount}</span>}
      </span>
      {ripples.map((r) => (
        <span
          key={r.id}
          style={{ left: r.x, top: r.y }}
          className="absolute w-3 h-3 -ml-1.5 -mt-1.5 bg-current opacity-35 rounded-full animate-ping pointer-events-none"
        />
      ))}
    </button>
  );
};
`,xr=t({default:()=>Sr}),Sr=`// @jxui/react v3.0.0 — ShimmerButton (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles } from 'lucide-react';

// 8. ShimmerButton
export interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: 'solid' | 'soft' | 'outline' | 'glass';
  tone?: 'primary' | 'success' | 'warning' | 'danger';
}
export const ShimmerButton: React.FC<ShimmerButtonProps> = ({
  children = 'Metallic Shimmer',
  variant = 'solid',
  tone = 'primary',
  className = '',
  onClick,
  ...props
}) => {
  const { palette, getRadiusClass } = useJXTheme();
  const [clicks, setClicks] = useState(0);

  const toneMap = {
    primary: {
      solid: \`\${palette.bg} text-white\`,
      soft: \`\${palette.softBg} \${palette.text} border \${palette.border}\`,
      outline: \`bg-transparent \${palette.text} border-2 \${palette.border}\`,
      glass: 'text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-900 border border-slate-300/80 dark:border-slate-800',
    },
    success: {
      solid: 'bg-emerald-600 text-white',
      soft: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800',
      outline: 'bg-transparent text-emerald-600 dark:text-emerald-400 border-2 border-emerald-500',
      glass: 'bg-emerald-500/15 backdrop-blur-md text-emerald-700 dark:text-emerald-200 border border-emerald-400/40',
    },
    warning: {
      solid: 'bg-amber-500 text-white',
      soft: 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800',
      outline: 'bg-transparent text-amber-600 dark:text-amber-400 border-2 border-amber-500',
      glass: 'bg-amber-500/15 backdrop-blur-md text-amber-700 dark:text-amber-200 border border-amber-400/40',
    },
    danger: {
      solid: 'bg-rose-600 text-white',
      soft: 'bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800',
      outline: 'bg-transparent text-rose-600 dark:text-rose-400 border-2 border-rose-500',
      glass: 'bg-rose-500/15 backdrop-blur-md text-rose-700 dark:text-rose-200 border border-rose-400/40',
    },
  };

  return (
    <button
      type="button"
      onClick={(e) => {
        setClicks((c) => c + 1);
        onClick?.(e);
      }}
      className={\`relative overflow-hidden px-4 py-2 text-xs font-semibold \${toneMap[tone][variant]} \${getRadiusClass('control')} shadow-sm active:scale-95 transition-all cursor-pointer group inline-flex items-center gap-1.5 \${className}\`}
      {...props}
    >
      <Sparkles className="w-3.5 h-3.5" />
      <span className="relative z-10">{children}</span>
      {clicks > 0 && (
        <span className="relative z-10 px-1.5 py-0.2 rounded-full bg-black/15 dark:bg-white/20 text-[10px] font-mono">
          {clicks}x
        </span>
      )}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
    </button>
  );
};
`,Cr=t({default:()=>wr}),wr=`// @jxui/react v3.0.0 — SlideToAction (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Sparkles, 
  Check, 
  Loader2, 
  ChevronRight, 
  ChevronDown, 
  ArrowRight, 
  Plus, 
  Trash2, 
  Command, 
  MousePointer, 
  Flame, 
  Share2,
  Copy,
  ExternalLink,
  ShieldCheck,
  Send
} from 'lucide-react';

// 12. SlideToAction
export interface SlideToActionProps {
  onComplete?: () => void;
  label?: string;
  completedText?: string;
}
export const SlideToAction: React.FC<SlideToActionProps> = ({
  onComplete,
  label = 'Slide to unlock',
  completedText = 'Unlocked! (Click to reset)',
}) => {
  const { palette, getRadiusClass } = useJXTheme();
  const [dragX, setDragX] = useState(0);
  const [completed, setCompleted] = useState(false);
  const maxDrag = 160;

  const handleDrag = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setDragX(val);
    if (val >= maxDrag) {
      setCompleted(true);
      onComplete?.();
    }
  };

  const handleReset = () => {
    if (completed) {
      setCompleted(false);
      setDragX(0);
    }
  };

  return (
    <div
      onClick={handleReset}
      className={\`relative w-[220px] h-11 bg-slate-200 dark:bg-slate-800 \${getRadiusClass('pill')} p-1 flex items-center overflow-hidden select-none \${completed ? 'cursor-pointer ring-2 ring-emerald-500/40' : ''}\`}
    >
      <span className="absolute inset-0 flex items-center justify-center text-[11px] font-semibold text-slate-600 dark:text-slate-300 tracking-wide pl-6">
        {completed ? completedText : label}
      </span>
      <div
        style={{ transform: \`translateX(\${dragX}px)\` }}
        className={\`relative z-10 w-9 h-9 \${completed ? 'bg-emerald-600' : palette.bg} text-white rounded-full flex items-center justify-center shadow-md cursor-grab active:cursor-grabbing transition-transform\`}
      >
        {completed ? <Check className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
      </div>
      {!completed && (
        <input
          type="range"
          min={0}
          max={maxDrag}
          value={dragX}
          onChange={handleDrag}
          aria-label={label}
          className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-20"
        />
      )}
    </div>
  );
};
`,Tr=t({default:()=>Er}),Er=`// @jxui/react v3.0.0 — SpeedDial (JXUI v3.0 Unified Component Suite)
import React from 'react';
import { JXSpeedDial, type JXSpeedDialProps, type JXSpeedDialAction } from '../../navigation/JXSpeedDial';

// 15. SpeedDial
// Reuses JXSpeedDial with staggered spring entrance, frosted labels, and shortcut badges
export interface SpeedDialAction extends Omit<Partial<JXSpeedDialAction>, 'icon'> {
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }> | React.ReactNode;
  onClick?: () => void;
}

export interface SpeedDialProps extends Omit<JXSpeedDialProps, 'actions'> {
  actions?: SpeedDialAction[];
}

export const SpeedDial: React.FC<SpeedDialProps> = ({ actions, ...props }) => {
  const convertedActions: JXSpeedDialAction[] | undefined = actions?.map((act) => ({
    id: act.id,
    label: act.label,
    shortcut: act.shortcut,
    onClick: act.onClick,
    icon: React.isValidElement(act.icon)
      ? act.icon
      : typeof act.icon === 'function'
      ? React.createElement(act.icon as React.ComponentType<{ className?: string }>, { className: 'w-4 h-4' })
      : undefined,
  }));

  return <JXSpeedDial actions={convertedActions} {...props} />;
};

export type { JXSpeedDialAction };
`,Dr=t({default:()=>Or}),Or=`// @jxui/react v3.0.0 — SplitButton (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { ChevronDown, Check } from 'lucide-react';

// 16. SplitButton
export interface SplitButtonProps {
  label?: string;
  options?: string[];
  onPrimaryClick?: () => void;
  onSelectOption?: (opt: string) => void;
  variant?: 'solid' | 'soft' | 'outline' | 'glass';
  tone?: 'primary' | 'success' | 'warning' | 'danger';
}

export const SplitButton: React.FC<SplitButtonProps> = ({
  label = 'Commit Changes',
  options = ['Commit & Push', 'Commit to New Branch', 'Save Stash'],
  onPrimaryClick,
  onSelectOption,
  variant = 'solid',
  tone = 'primary',
}) => {
  const { palette, getRadiusClass } = useJXTheme();
  const [open, setOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(label);
  const [executedCount, setExecutedCount] = useState(0);

  const toneMap = {
    primary: {
      solid: \`\${palette.bg} text-white\`,
      soft: \`\${palette.softBg} \${palette.text} border \${palette.border}\`,
      outline: \`bg-transparent border \${palette.border} \${palette.text}\`,
      glass: 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white',
    },
    success: {
      solid: 'bg-emerald-600 text-white',
      soft: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800',
      outline: 'bg-transparent border border-emerald-500 text-emerald-600 dark:text-emerald-400',
      glass: 'bg-emerald-500/15 backdrop-blur-md border border-emerald-400/40 text-emerald-700 dark:text-emerald-200',
    },
    warning: {
      solid: 'bg-amber-500 text-white',
      soft: 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800',
      outline: 'bg-transparent border border-amber-500 text-amber-600 dark:text-amber-400',
      glass: 'bg-amber-500/15 backdrop-blur-md border border-amber-400/40 text-amber-700 dark:text-amber-200',
    },
    danger: {
      solid: 'bg-rose-600 text-white',
      soft: 'bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800',
      outline: 'bg-transparent border border-rose-500 text-rose-600 dark:text-rose-400',
      glass: 'bg-rose-500/15 backdrop-blur-md border border-rose-400/40 text-rose-700 dark:text-rose-200',
    },
  };

  return (
    <div className="relative inline-flex rounded-lg shadow-sm">
      <button
        type="button"
        onClick={() => {
          setExecutedCount((c) => c + 1);
          onPrimaryClick?.();
        }}
        className={\`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold \${toneMap[tone][variant]} rounded-l-lg border-r border-white/20 hover:brightness-105 active:scale-98 transition-all cursor-pointer\`}
      >
        {executedCount > 0 && <Check className="w-3.5 h-3.5" />}
        <span>{selectedLabel}</span>
        {executedCount > 0 && <span className="font-mono text-[10px] opacity-80">×{executedCount}</span>}
      </button>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={\`px-2 py-2 \${toneMap[tone][variant]} rounded-r-lg hover:brightness-105 active:scale-98 transition-all cursor-pointer\`}
      >
        <ChevronDown className={\`w-4 h-4 transition-transform \${open ? 'rotate-180' : ''}\`} />
      </button>
      {open && (
        <div className={\`absolute top-full mt-1.5 right-0 z-30 w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl \${getRadiusClass('control')} py-1\`}>
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                setSelectedLabel(opt);
                onSelectOption?.(opt);
                setOpen(false);
              }}
              className="w-full flex items-center justify-between text-left px-3 py-1.5 text-xs text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            >
              <span>{opt}</span>
              {selectedLabel === opt && <Check className="w-3.5 h-3.5 text-indigo-500" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
`,kr=t({default:()=>Ar}),Ar=`// @jxui/react v3.0.0 — SpringButton (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 4. SpringButton
export interface SpringButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: 'solid' | 'soft' | 'outline' | 'glass';
  tone?: 'primary' | 'success' | 'warning' | 'danger';
}
export const SpringButton: React.FC<SpringButtonProps> = ({
  children = 'Spring Press',
  variant = 'solid',
  tone = 'primary',
  className = '',
  onClick,
  ...props
}) => {
  const { palette, getRadiusClass } = useJXTheme();
  const [clicks, setClicks] = useState(0);

  const toneMap = {
    primary: {
      solid: \`\${palette.bg} text-white\`,
      soft: \`\${palette.softBg} \${palette.text} border \${palette.border}\`,
      outline: \`bg-transparent \${palette.text} border-2 \${palette.border}\`,
      glass: 'bg-white/75 dark:bg-slate-800/75 backdrop-blur-md text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700',
    },
    success: {
      solid: 'bg-emerald-600 text-white',
      soft: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800',
      outline: 'bg-transparent text-emerald-600 dark:text-emerald-400 border-2 border-emerald-500',
      glass: 'bg-emerald-500/15 backdrop-blur-md text-emerald-700 dark:text-emerald-200 border border-emerald-400/40',
    },
    warning: {
      solid: 'bg-amber-500 text-white',
      soft: 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800',
      outline: 'bg-transparent text-amber-600 dark:text-amber-400 border-2 border-amber-500',
      glass: 'bg-amber-500/15 backdrop-blur-md text-amber-700 dark:text-amber-200 border border-amber-400/40',
    },
    danger: {
      solid: 'bg-rose-600 text-white',
      soft: 'bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800',
      outline: 'bg-transparent text-rose-600 dark:text-rose-400 border-2 border-rose-500',
      glass: 'bg-rose-500/15 backdrop-blur-md text-rose-700 dark:text-rose-200 border border-rose-400/40',
    },
  };

  return (
    <button
      type="button"
      onClick={(e) => {
        setClicks((c) => c + 1);
        onClick?.(e);
      }}
      className={\`px-4 py-2 text-xs font-semibold \${toneMap[tone][variant]} \${getRadiusClass('control')} shadow-md hover:-translate-y-0.5 active:translate-y-1 active:scale-90 transition-all duration-150 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer inline-flex items-center gap-1.5 \${className}\`}
      {...props}
    >
      <span>{children}</span>
      {clicks > 0 && (
        <span className="px-1.5 py-0.2 rounded-full bg-black/15 dark:bg-white/20 text-[10px] font-mono">
          {clicks}x
        </span>
      )}
    </button>
  );
};
`,jr=t({default:()=>Mr}),Mr=`// @jxui/react v3.0.0 — BentoGrid (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, ArrowUpRight, Check, Heart, ShoppingCart, TrendingUp } from 'lucide-react';

// 20. BentoGrid
export const BentoGrid: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {children ?? (
        <>
          <div className="col-span-2 p-4 border rounded-2xl text-xs font-bold bg-slate-50 dark:bg-slate-900">Bento Major</div>
          <div className="col-span-1 p-4 border rounded-2xl text-xs font-bold bg-slate-50 dark:bg-slate-900">Bento Minor</div>
        </>
      )}
    </div>
  );
};
`,Nr=t({default:()=>Pr}),Pr=`// @jxui/react v3.0.0 — ComparisonCard (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, ArrowUpRight, Check, Heart, ShoppingCart, TrendingUp } from 'lucide-react';

// 18. ComparisonCard
export const ComparisonCard: React.FC = () => {
  return (
    <div className="p-3 border rounded-xl text-xs grid grid-cols-2 gap-2 text-center">
      <div className="p-1 bg-rose-50 dark:bg-rose-950/30 rounded text-rose-600 font-medium">MUI: 34ms</div>
      <div className="p-1 bg-emerald-50 dark:bg-emerald-950/30 rounded text-emerald-600 font-bold">JXUI: 0.8ms</div>
    </div>
  );
};
`,Fr=t({default:()=>Ir}),Ir=`// @jxui/react v3.0.0 — ContentGlassCard (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, ArrowUpRight, Check, Heart, ShoppingCart, TrendingUp } from 'lucide-react';

// 1. ContentGlassCard (GlassCard content variant)
export const ContentGlassCard: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="p-4 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/40 dark:border-slate-800 rounded-2xl shadow-lg">
      {children ?? <p className="text-xs font-semibold">Frosted Luminescent Glass Surface</p>}
    </div>
  );
};
`,Lr=t({default:()=>Rr}),Rr=`// @jxui/react v3.0.0 — ExpandableCard (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';

// 2. ExpandableCard
export const ExpandableCard: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="p-3 border rounded-xl bg-white dark:bg-slate-900">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        className="w-full text-left font-bold cursor-pointer"
      >
        Module Details
      </button>
      {expanded && <div className="pt-2 text-xs text-slate-500">Provides deep integration with JXUI styling engine.</div>}
    </div>
  );
};
`,zr=t({default:()=>Br}),Br=`// @jxui/react v3.0.0 — FeatureCard (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, ArrowUpRight, Check, Heart, ShoppingCart, TrendingUp } from 'lucide-react';

// 19. FeatureCard
export const FeatureCard: React.FC = () => {
  return (
    <div className="p-4 border rounded-2xl flex flex-col gap-2 text-xs">
      <Sparkles className="w-5 h-5 text-indigo-500" />
      <span className="font-bold text-sm">Zero Layout Shift</span>
      <p className="text-slate-500 text-[11px]">Strict CLS = 0 compliance across all state transitions.</p>
    </div>
  );
};
`,Vr=t({default:()=>Hr}),Hr=`// @jxui/react v3.0.0 — FlipCard (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { KeyRound, RotateCw, ShieldCheck } from 'lucide-react';

// 7. FlipCard
// 3D perspective flip between front presentation surface and back security credentials
export interface FlipCardProps {
  frontTitle?: string;
  frontSubtitle?: string;
  backKey?: string;
  className?: string;
}

export const FlipCard: React.FC<FlipCardProps> = ({
  frontTitle = 'FIDO2 Hardware Key',
  frontSubtitle = 'Click card to flip and verify encrypted enclave key credentials.',
  backKey = 'jx_sec_live_94f8a32d1e0c',
  className = '',
}) => {
  const { getRadiusClass } = useJXTheme();
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      style={{ perspective: '1000px' }}
      onClick={() => setFlipped((f) => !f)}
      className={\`inline-block w-full cursor-pointer select-none \${className}\`}
    >
      <div
        style={{
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
        className={\`relative min-h-[140px] w-full \${getRadiusClass('card')}\`}
      >
        {/* Front Face */}
        <div
          style={{ backfaceVisibility: 'hidden' }}
          className={\`absolute inset-0 p-5 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 jx-elevation-1 shadow-lg flex flex-col justify-between \${getRadiusClass(
            'card'
          )}\`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
              <KeyRound className="w-3.5 h-3.5" />
              <span>Front Credential</span>
            </span>
            <RotateCw className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">{frontTitle}</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{frontSubtitle}</p>
          </div>
          <span className="text-[10px] font-mono text-indigo-500 font-semibold">Click to flip card →</span>
        </div>

        {/* Back Face */}
        <div
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
          }}
          className={\`absolute inset-0 p-5 bg-indigo-950 text-white border border-indigo-800 shadow-xl flex flex-col justify-between \${getRadiusClass(
            'card'
          )}\`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Hardware Enclave</span>
            </span>
            <RotateCw className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-indigo-300 font-bold">API Private Key</span>
            <code className="block px-2.5 py-1.5 rounded bg-indigo-900/80 font-mono text-xs text-emerald-300 overflow-x-auto">
              {backKey}
            </code>
          </div>
          <span className="text-[10px] font-mono text-indigo-300">Click to return to front ←</span>
        </div>
      </div>
    </div>
  );
};
`,Ur=t({default:()=>Wr}),Wr=`// @jxui/react v3.0.0 — GradientBorderCard (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, ArrowUpRight, Check, Heart, ShoppingCart, TrendingUp } from 'lucide-react';

// 13. GradientBorderCard
export const GradientBorderCard: React.FC = () => {
  return (
    <div className="p-0.5 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="p-4 bg-white dark:bg-slate-900 rounded-[14px] text-xs font-bold">
        Gradient Border
      </div>
    </div>
  );
};
`,Gr=t({default:()=>Kr}),Kr=`// @jxui/react v3.0.0 — HoverLiftCard (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, ArrowUpRight, Check, Heart, ShoppingCart, TrendingUp } from 'lucide-react';

// 4. HoverLiftCard
export const HoverLiftCard: React.FC = () => {
  return (
    <div className="p-4 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 jx-elevation-1 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all cursor-pointer">
      <span className="text-xs font-bold text-slate-900 dark:text-white">Tactile Elevation Lift</span>
    </div>
  );
};
`,qr=t({default:()=>Jr}),Jr=`// @jxui/react v3.0.0 — InteractiveCard (JXUI v3.0 Unified Component Suite)
import React from 'react';
import { JXCard, type JXCardProps, JXCardHeader, JXCardContent, JXCardActions } from '../../surfaces/JXCard';
import { Sparkles, ArrowUpRight } from 'lucide-react';

// 10. InteractiveCard
// Reuses JXCard with cursor-tracking spotlight, specular border highlights, and tactile elevation lift
export interface InteractiveCardProps extends JXCardProps {}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({
  title = 'Interactive Spotlight Surface',
  kicker = 'Tactile Luminescence',
  description = 'Cursor-tracking spotlight halo with specular borders and spring hover elevation.',
  children,
  className = '',
  ...props
}) => {
  return (
    <JXCard
      title={title}
      kicker={kicker}
      description={description}
      spotlight
      hoverLift
      className={className}
      {...props}
    >
      {children || (
        <>
          <JXCardHeader
            title={title}
            subheader={kicker}
            icon={<Sparkles className="w-4 h-4 text-indigo-500" />}
          />
          <JXCardContent>{description}</JXCardContent>
          <JXCardActions>
            <span className="text-[11px] font-mono text-slate-400">Tactile Spec</span>
            <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 cursor-pointer">
              Explore <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </JXCardActions>
        </>
      )}
    </JXCard>
  );
};
`,Yr=t({default:()=>Xr}),Xr=`// @jxui/react v3.0.0 — MagneticCard (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Magnet } from 'lucide-react';

// 2. MagneticCard
// Tracks cursor proximity and pulls the card surface toward the pointer with damped spring return
export interface MagneticCardProps {
  title?: string;
  subtitle?: string;
  strength?: number;
  className?: string;
}

export const MagneticCard: React.FC<MagneticCardProps> = ({
  title = 'Magnetic Attraction Card',
  subtitle = 'Pulls toward the pointer coordinates on hover and springs back smoothly upon mouse exit.',
  strength = 0.25,
  className = '',
}) => {
  const { getRadiusClass } = useJXTheme();
  const cardRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setOffset({
      x: (e.clientX - centerX) * strength,
      y: (e.clientY - centerY) * strength,
    });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: \`translate3d(\${offset.x}px, \${offset.y}px, 0)\`,
        transition: offset.x === 0 ? 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)' : 'transform 0.08s ease-out',
      }}
      className={\`p-5 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 jx-elevation-1 hover:shadow-xl \${getRadiusClass(
        'card'
      )} cursor-pointer select-none space-y-2 \${className}\`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
          <Magnet className="w-3.5 h-3.5" />
          <span>Magnetic Physics</span>
        </span>
        <span className="text-[10px] font-mono text-slate-400">
          dx: {Math.round(offset.x)}px, dy: {Math.round(offset.y)}px
        </span>
      </div>
      <h4 className="font-bold text-sm text-slate-900 dark:text-white">{title}</h4>
      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{subtitle}</p>
    </div>
  );
};
`,Zr=t({default:()=>Qr}),Qr=`// @jxui/react v3.0.0 — MetricCard (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, ArrowUpRight, Check, Heart, ShoppingCart, TrendingUp } from 'lucide-react';

// 17. MetricCard
export const MetricCard: React.FC = () => {
  return (
    <div className="p-4 border rounded-2xl flex flex-col gap-1 text-xs">
      <span className="text-slate-500 font-medium">Render Latency</span>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold font-mono">0.8ms</span>
        <span className="text-emerald-500 font-bold flex items-center text-[10px]"><TrendingUp className="w-3 h-3" /> -62%</span>
      </div>
    </div>
  );
};
`,$r=t({default:()=>ei}),ei=`// @jxui/react v3.0.0 — MorphingCard (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, Maximize2, Minimize2, ChevronRight, Activity, ArrowUpRight } from 'lucide-react';

import { tactile } from '../../../utils/tactileAudio';

export const MorphingCard: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [layout, setLayout] = useState<'compact' | 'expanded' | 'detail'>('compact');

  const cycleLayout = () => {
    tactile.playClick();
    setLayout((curr) => {
      if (curr === 'compact') return 'expanded';
      if (curr === 'expanded') return 'detail';
      return 'compact';
    });
  };

  return (
    <div
      onClick={cycleLayout}
      className={\`w-full bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 jx-elevation-1 hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden touch-manipulation active:scale-[0.99] \${getRadiusClass('card')} \${
        layout === 'detail' ? 'p-4 ring-2 ring-[var(--jx-accent-halo)]' : layout === 'expanded' ? 'p-3.5' : 'p-3'
      }\`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
            <Activity className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-xs text-slate-900 dark:text-white">
            Morphing Card
          </span>
        </div>
        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-[#1E293B] text-slate-500 capitalize">
          {layout}
        </span>
      </div>

      {layout !== 'compact' && (
        <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex flex-col gap-1.5 animate-fadeIn">
          <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
            <span>Throughput:</span>
            <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">99.98%</span>
          </div>
          {layout === 'detail' && (
            <div className="flex flex-col gap-1 text-[10px] text-slate-500 font-mono bg-slate-50 dark:bg-[#0B0F19] p-2 rounded-lg">
              <span>Latency: 4.2ms</span>
              <span>Memory: 18.4 MB</span>
              <span>Zero CLS Guarantee: Active</span>
            </div>
          )}
        </div>
      )}

      <div className="mt-2 text-[10px] text-slate-400 flex items-center justify-between">
        <span>Click to cycle layout</span>
        <ChevronRight className="w-3 h-3" />
      </div>
    </div>
  );
};
`,ti=t({default:()=>ni}),ni=`// @jxui/react v3.0.0 — PricingCard (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, ArrowUpRight, Check, Heart, ShoppingCart, TrendingUp } from 'lucide-react';

// 16. PricingCard
export const PricingCard: React.FC = () => {
  return (
    <div className="p-4 border-2 border-indigo-600 rounded-2xl bg-indigo-50/20 dark:bg-indigo-950/20 text-xs flex flex-col gap-2">
      <div className="font-bold text-sm">Enterprise</div>
      <div className="text-lg font-extrabold">$49<span className="text-xs font-normal text-slate-500">/mo</span></div>
      <div className="flex items-center gap-1 text-[11px]"><Check className="w-3.5 h-3.5 text-emerald-500" /> 61 Components</div>
    </div>
  );
};
`,ri=t({default:()=>ii}),ii=`// @jxui/react v3.0.0 — ProductCard (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, ArrowUpRight, Check, Heart, ShoppingCart, TrendingUp } from 'lucide-react';

// 15. ProductCard
export const ProductCard: React.FC = () => {
  return (
    <div className="w-48 p-3 border rounded-xl flex flex-col gap-2 text-xs">
      <div className="w-full h-24 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-400">Preview</div>
      <div className="flex justify-between font-bold">
        <span>JXUI Pro</span>
        <span className="text-indigo-600">$199</span>
      </div>
    </div>
  );
};
`,ai=t({default:()=>oi}),oi=`// @jxui/react v3.0.0 — ProfileCard (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, ArrowUpRight, Check, Heart, ShoppingCart, TrendingUp } from 'lucide-react';

// 14. ProfileCard
export const ProfileCard: React.FC = () => {
  return (
    <div className="p-3 border rounded-xl flex items-center gap-3 text-xs">
      <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">JX</div>
      <div>
        <div className="font-bold">Alex Mercer</div>
        <div className="text-[10px] text-slate-500">Core Architect</div>
      </div>
    </div>
  );
};
`,si=t({default:()=>ci}),ci=`// @jxui/react v3.0.0 — SpotlightBorderCard (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, ArrowUpRight, Check, Heart, ShoppingCart, TrendingUp } from 'lucide-react';

// 12. SpotlightBorderCard
export const SpotlightBorderCard: React.FC = () => {
  return (
    <div className="p-4 rounded-xl border border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.2)] text-xs font-bold">
      Glow Border Card
    </div>
  );
};
`,li=t({default:()=>ui}),ui=`// @jxui/react v3.0.0 — SpotlightCard (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles } from 'lucide-react';

// 11. SpotlightCard
// Dynamic luminescent spotlight projection that follows cursor coordinates in real time
export interface SpotlightCardProps {
  title?: string;
  subtitle?: string;
  spotlightColor?: string;
  className?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  title = 'Spotlight Luminescence',
  subtitle = 'Projects a radial illumination beam directly under the pointer coordinates.',
  spotlightColor = 'rgba(99, 102, 241, 0.18)',
  className = '',
}) => {
  const { getRadiusClass } = useJXTheme();
  const cardRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 120, y: 60 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundImage: isHovered
          ? \`radial-gradient(240px circle at \${pos.x}px \${pos.y}px, \${spotlightColor}, transparent 80%)\`
          : undefined,
      }}
      className={\`relative overflow-hidden p-5 bg-white dark:bg-[#111827] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 jx-elevation-1 \${getRadiusClass(
        'card'
      )} shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-colors cursor-pointer select-none space-y-2 \${className}\`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Spotlight Spec</span>
        </span>
        <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
          X: {Math.round(pos.x)}, Y: {Math.round(pos.y)}
        </span>
      </div>
      <h4 className="font-bold text-sm text-slate-900 dark:text-white">{title}</h4>
      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{subtitle}</p>
    </div>
  );
};
`,di=t({default:()=>fi}),fi=`// @jxui/react v3.0.0 — StackedCard (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Layers, Sparkles } from 'lucide-react';

interface DeckItem {
  id: number;
  title: string;
  tag: string;
  color: string;
}

const DECK_ITEMS: DeckItem[] = [
  { id: 1, title: 'Tactile Luminescence', tag: 'Physics Engine', color: 'bg-indigo-600' },
  { id: 2, title: 'Spatial Glassmorphism', tag: 'Optics FX', color: 'bg-purple-600' },
  { id: 3, title: 'Bento Grid Kinetics', tag: 'Layout Matrix', color: 'bg-cyan-600' },
];

export const StackedCard: React.FC = () => {
  const { getRadiusClass } = useJXTheme();
  const [deck, setDeck] = useState(DECK_ITEMS);

  const cycleTopCard = () => {
    setDeck((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  return (
    <div
      onClick={cycleTopCard}
      className="relative w-48 h-28 cursor-pointer select-none group my-1"
      title="Click to cycle card deck"
    >
      {deck.map((item, index) => {
        // index 0 is top, index 1 is middle, index 2 is back
        const offsetY = index * 8;
        const scale = 1 - index * 0.05;
        const opacity = 1 - index * 0.18;
        const zIndex = 30 - index * 10;

        return (
          <div
            key={item.id}
            style={{
              top: \`\${offsetY}px\`,
              transform: \`scale(\${scale})\`,
              opacity,
              zIndex,
            }}
            className={\`absolute inset-x-0 h-20 p-3 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 jx-elevation-1 shadow-md \${getRadiusClass(
              'card'
            )} transition-all duration-300 group-hover:-translate-y-1 flex flex-col justify-between\`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-400">Card #{item.id}</span>
              <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-100 dark:bg-[#1E293B] text-slate-600 dark:text-slate-300">
                {item.tag}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
                {item.title}
              </span>
              <span className="text-[9px] text-indigo-500 font-semibold group-hover:underline">Next →</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
`,pi=t({default:()=>mi}),mi=`// @jxui/react v3.0.0 — SwipeableCard (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Check, X, RotateCcw } from 'lucide-react';

// 9. SwipeableCard
// Interactive drag gesture card with spring reset and left/right decision triggers
export interface SwipeableCardProps {
  title?: string;
  subtitle?: string;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  className?: string;
}

export const SwipeableCard: React.FC<SwipeableCardProps> = ({
  title = 'Deploy to Edge Canary',
  subtitle = 'Swipe right to approve rollout, swipe left to reject.',
  onSwipeLeft,
  onSwipeRight,
  className = '',
}) => {
  const { getRadiusClass } = useJXTheme();
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [swiped, setSwiped] = useState<'left' | 'right' | null>(null);
  const startXRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startXRef.current = e.clientX - dragX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentDrag = e.clientX - startXRef.current;
    setDragX(currentDrag);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragX > 80) {
      setSwiped('right');
      onSwipeRight?.();
    } else if (dragX < -80) {
      setSwiped('left');
      onSwipeLeft?.();
    } else {
      setDragX(0);
    }
  };

  const handleReset = () => {
    setSwiped(null);
    setDragX(0);
  };

  if (swiped) {
    return (
      <div
        className={\`p-5 border text-center space-y-3 \${getRadiusClass('card')} \${
          swiped === 'right'
            ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-200'
            : 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-700 text-rose-800 dark:text-rose-200'
        } \${className}\`}
      >
        <div className="flex items-center justify-center gap-2 font-bold text-sm">
          {swiped === 'right' ? <Check className="w-5 h-5 text-emerald-500" /> : <X className="w-5 h-5 text-rose-500" />}
          <span>{swiped === 'right' ? 'Action Approved' : 'Action Rejected'}</span>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="min-h-[44px] inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-[#111827] border border-slate-300 dark:border-slate-700 jx-elevation-1 cursor-pointer touch-manipulation active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)]"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Card</span>
        </button>
      </div>
    );
  }

  const rotation = (dragX / 100) * 8;
  const opacity = Math.max(0.4, 1 - Math.abs(dragX) / 250);

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{
        transform: \`translateX(\${dragX}px) rotate(\${rotation}deg)\`,
        opacity,
        transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease',
      }}
      className={\`relative p-5 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 jx-elevation-1 shadow-lg \${getRadiusClass(
        'card'
      )} cursor-grab active:cursor-grabbing select-none space-y-2 \${className}\`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
          Swipeable Gesture
        </span>
        <span className="text-[10px] font-mono text-slate-400">
          {dragX > 40 ? '👉 Approve' : dragX < -40 ? '👈 Reject' : 'Drag Card'}
        </span>
      </div>
      <h4 className="font-bold text-sm text-slate-900 dark:text-white">{title}</h4>
      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{subtitle}</p>
    </div>
  );
};
`,hi=t({default:()=>gi}),gi=`// @jxui/react v3.0.0 — TiltCard (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, Layers } from 'lucide-react';

// 3. TiltCard
// Real 3D perspective tilt tracking cursor coordinates across X and Y axes
export interface TiltCardProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  title = '3D Parallax Tilt Card',
  subtitle = 'Move your cursor across this surface to experience real 3D perspective pitch and yaw.',
  className = '',
}) => {
  const { getRadiusClass } = useJXTheme();
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      style={{ perspective: '800px' }}
      className={\`inline-block w-full \${className}\`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: \`rotateX(\${tilt.rotateX}deg) rotateY(\${tilt.rotateY}deg)\`,
          transition: tilt.rotateX === 0 ? 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)' : 'transform 0.08s ease-out',
          transformStyle: 'preserve-3d',
        }}
        className={\`p-5 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 jx-elevation-1 hover:shadow-2xl \${getRadiusClass(
          'card'
        )} cursor-pointer select-none\`}
      >
        <div style={{ transform: 'translateZ(24px)' }} className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>3D Motion Spec</span>
            </span>
            <Layers className="w-4 h-4 text-slate-400" />
          </div>
          <h4 className="font-bold text-sm text-slate-900 dark:text-white">{title}</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
`,_i=({status:e,variant:t=`solid`,tone:n=`primary`,idleText:r=`Deploy Changes`,loadingText:i=`Deploying...`,successText:o=`Deployed!`,errorText:s=`Failed — Retry`,onTrigger:c,onClick:l,className:u=``,...d})=>{let{palette:f,getRadiusClass:p}=Q(),[m,h]=(0,a.useState)(`idle`),g=e??m,_={primary:{solid:`${f.bg} text-white border-transparent shadow-md`,soft:`${f.softBg} ${f.text} border ${f.border}`,outline:`bg-transparent ${f.text} border-2 ${f.border}`,glass:`bg-white/75 dark:bg-slate-800/75 backdrop-blur-md text-slate-900 dark:text-white border border-slate-200/80 dark:border-slate-700 shadow-sm`},success:{solid:`bg-emerald-600 text-white border-transparent shadow-md`,soft:`bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800`,outline:`bg-transparent text-emerald-600 dark:text-emerald-400 border-2 border-emerald-500`,glass:`bg-emerald-500/15 backdrop-blur-md text-emerald-700 dark:text-emerald-200 border border-emerald-400/40`},warning:{solid:`bg-amber-500 text-white border-transparent shadow-md`,soft:`bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800`,outline:`bg-transparent text-amber-600 dark:text-amber-400 border-2 border-amber-500`,glass:`bg-amber-500/15 backdrop-blur-md text-amber-700 dark:text-amber-200 border border-amber-400/40`},danger:{solid:`bg-rose-600 text-white border-transparent shadow-md`,soft:`bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800`,outline:`bg-transparent text-rose-600 dark:text-rose-400 border-2 border-rose-500`,glass:`bg-rose-500/15 backdrop-blur-md text-rose-700 dark:text-rose-200 border border-rose-400/40`}};return(0,Y.jsx)(`button`,{type:`button`,onClick:t=>{l?.(t),c?.(),e===void 0&&m===`idle`&&(h(`loading`),setTimeout(()=>{h(n===`danger`?`error`:`success`),setTimeout(()=>h(`idle`),1600)},650))},disabled:g===`loading`,className:`relative min-w-[148px] px-4 py-2 text-xs font-semibold transition-all duration-300 ${p(`control`)} cursor-pointer active:scale-95 ${g===`success`?`bg-emerald-600 text-white border-transparent shadow-md shadow-emerald-500/20`:g===`error`?`bg-rose-600 text-white border-transparent shadow-md shadow-rose-500/20`:_[n][t]} ${u}`,...d,children:(0,Y.jsxs)(`div`,{className:`flex items-center justify-center gap-2 min-h-[20px]`,children:[g===`idle`&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(U,{className:`w-3.5 h-3.5`}),(0,Y.jsx)(`span`,{children:r})]}),g===`loading`&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(pe,{className:`w-3.5 h-3.5 animate-spin`}),(0,Y.jsx)(`span`,{children:i})]}),g===`success`&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(C,{className:`w-3.5 h-3.5`}),(0,Y.jsx)(`span`,{children:o})]}),g===`error`&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(W,{className:`w-3.5 h-3.5`}),(0,Y.jsx)(`span`,{children:s})]})]})})},vi=({children:e=`Spring Press`,variant:t=`solid`,tone:n=`primary`,className:r=``,onClick:i,...o})=>{let{palette:s,getRadiusClass:c}=Q(),[l,u]=(0,a.useState)(0),d={primary:{solid:`${s.bg} text-white`,soft:`${s.softBg} ${s.text} border ${s.border}`,outline:`bg-transparent ${s.text} border-2 ${s.border}`,glass:`bg-white/75 dark:bg-slate-800/75 backdrop-blur-md text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700`},success:{solid:`bg-emerald-600 text-white`,soft:`bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800`,outline:`bg-transparent text-emerald-600 dark:text-emerald-400 border-2 border-emerald-500`,glass:`bg-emerald-500/15 backdrop-blur-md text-emerald-700 dark:text-emerald-200 border border-emerald-400/40`},warning:{solid:`bg-amber-500 text-white`,soft:`bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800`,outline:`bg-transparent text-amber-600 dark:text-amber-400 border-2 border-amber-500`,glass:`bg-amber-500/15 backdrop-blur-md text-amber-700 dark:text-amber-200 border border-amber-400/40`},danger:{solid:`bg-rose-600 text-white`,soft:`bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800`,outline:`bg-transparent text-rose-600 dark:text-rose-400 border-2 border-rose-500`,glass:`bg-rose-500/15 backdrop-blur-md text-rose-700 dark:text-rose-200 border border-rose-400/40`}};return(0,Y.jsxs)(`button`,{type:`button`,onClick:e=>{u(e=>e+1),i?.(e)},className:`px-4 py-2 text-xs font-semibold ${d[n][t]} ${c(`control`)} shadow-md hover:-translate-y-0.5 active:translate-y-1 active:scale-90 transition-all duration-150 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer inline-flex items-center gap-1.5 ${r}`,...o,children:[(0,Y.jsx)(`span`,{children:e}),l>0&&(0,Y.jsxs)(`span`,{className:`px-1.5 py-0.2 rounded-full bg-black/15 dark:bg-white/20 text-[10px] font-mono`,children:[l,`x`]})]})},yi=({children:e=`Luminescent Glow`,variant:t=`solid`,tone:n=`primary`,className:r=``,onClick:i,...o})=>{let{palette:s,getRadiusClass:c}=Q(),[l,u]=(0,a.useState)(0),d={primary:{solid:`${s.bg} text-white shadow-[0_0_20px_rgba(99,102,241,0.45)]`,soft:`${s.softBg} ${s.text} border ${s.border} shadow-[0_0_16px_rgba(99,102,241,0.25)]`,outline:`bg-transparent ${s.text} border-2 ${s.border} shadow-[0_0_16px_rgba(99,102,241,0.3)]`,glass:`bg-white/75 dark:bg-slate-800/75 backdrop-blur-md text-slate-900 dark:text-white border border-indigo-400/50 shadow-[0_0_18px_rgba(99,102,241,0.3)]`},success:{solid:`bg-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.45)]`,soft:`bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shadow-[0_0_16px_rgba(16,185,129,0.25)]`,outline:`bg-transparent text-emerald-600 dark:text-emerald-400 border-2 border-emerald-500 shadow-[0_0_16px_rgba(16,185,129,0.3)]`,glass:`bg-emerald-500/15 backdrop-blur-md text-emerald-700 dark:text-emerald-200 border border-emerald-400/50 shadow-[0_0_18px_rgba(16,185,129,0.3)]`},warning:{solid:`bg-amber-500 text-white shadow-[0_0_20px_rgba(245,158,11,0.45)]`,soft:`bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 shadow-[0_0_16px_rgba(245,158,11,0.25)]`,outline:`bg-transparent text-amber-600 dark:text-amber-400 border-2 border-amber-500 shadow-[0_0_16px_rgba(245,158,11,0.3)]`,glass:`bg-amber-500/15 backdrop-blur-md text-amber-700 dark:text-amber-200 border border-amber-400/50 shadow-[0_0_18px_rgba(245,158,11,0.3)]`},danger:{solid:`bg-rose-600 text-white shadow-[0_0_20px_rgba(244,63,94,0.45)]`,soft:`bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 shadow-[0_0_16px_rgba(244,63,94,0.25)]`,outline:`bg-transparent text-rose-600 dark:text-rose-400 border-2 border-rose-500 shadow-[0_0_16px_rgba(244,63,94,0.3)]`,glass:`bg-rose-500/15 backdrop-blur-md text-rose-700 dark:text-rose-200 border border-rose-400/50 shadow-[0_0_18px_rgba(244,63,94,0.3)]`}};return(0,Y.jsxs)(`button`,{type:`button`,onClick:e=>{u(e=>e+1),i?.(e)},className:`relative group px-4 py-2 text-xs font-semibold ${d[n][t]} ${c(`control`)} cursor-pointer transition-all duration-300 active:scale-95 inline-flex items-center gap-1.5 ${r}`,...o,children:[(0,Y.jsx)(ie,{className:`w-3.5 h-3.5`}),(0,Y.jsx)(`span`,{children:e}),l>0&&(0,Y.jsxs)(`span`,{className:`px-1.5 py-0.2 rounded-full bg-black/15 dark:bg-white/20 text-[10px] font-mono`,children:[l,`x`]})]})},bi=({children:e=`Gradient Aura`,variant:t=`solid`,tone:n=`primary`,className:r=``,onClick:i,...o})=>{let{palette:s,getRadiusClass:c}=Q(),[l,u]=(0,a.useState)(0),d={primary:{solid:`text-white bg-gradient-to-r ${s.gradient}`,soft:`${s.softBg} ${s.text} border ${s.border}`,outline:`bg-transparent ${s.text} border-2 ${s.border}`,glass:`bg-white/75 dark:bg-slate-800/75 backdrop-blur-md text-slate-900 dark:text-white border border-indigo-400/40`},success:{solid:`text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600`,soft:`bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800`,outline:`bg-transparent text-emerald-600 dark:text-emerald-400 border-2 border-emerald-500`,glass:`bg-emerald-500/15 backdrop-blur-md text-emerald-700 dark:text-emerald-200 border border-emerald-400/40`},warning:{solid:`text-white bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500`,soft:`bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800`,outline:`bg-transparent text-amber-600 dark:text-amber-400 border-2 border-amber-500`,glass:`bg-amber-500/15 backdrop-blur-md text-amber-700 dark:text-amber-200 border border-amber-400/40`},danger:{solid:`text-white bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600`,soft:`bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800`,outline:`bg-transparent text-rose-600 dark:text-rose-400 border-2 border-rose-500`,glass:`bg-rose-500/15 backdrop-blur-md text-rose-700 dark:text-rose-200 border border-rose-400/40`}};return(0,Y.jsxs)(`button`,{type:`button`,onClick:e=>{u(e=>e+1),i?.(e)},className:`px-4 py-2 text-xs font-bold ${d[n][t]} ${c(`control`)} shadow-lg hover:brightness-110 active:scale-95 transition-all duration-200 cursor-pointer inline-flex items-center gap-1.5 ${r}`,...o,children:[(0,Y.jsx)(U,{className:`w-3.5 h-3.5`}),(0,Y.jsx)(`span`,{children:e}),l>0&&(0,Y.jsxs)(`span`,{className:`px-1.5 py-0.2 rounded-full bg-black/20 text-[10px] font-mono`,children:[l,`x`]})]})},xi=({children:e=`Metallic Shimmer`,variant:t=`solid`,tone:n=`primary`,className:r=``,onClick:i,...o})=>{let{palette:s,getRadiusClass:c}=Q(),[l,u]=(0,a.useState)(0),d={primary:{solid:`${s.bg} text-white`,soft:`${s.softBg} ${s.text} border ${s.border}`,outline:`bg-transparent ${s.text} border-2 ${s.border}`,glass:`text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-900 border border-slate-300/80 dark:border-slate-800`},success:{solid:`bg-emerald-600 text-white`,soft:`bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800`,outline:`bg-transparent text-emerald-600 dark:text-emerald-400 border-2 border-emerald-500`,glass:`bg-emerald-500/15 backdrop-blur-md text-emerald-700 dark:text-emerald-200 border border-emerald-400/40`},warning:{solid:`bg-amber-500 text-white`,soft:`bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800`,outline:`bg-transparent text-amber-600 dark:text-amber-400 border-2 border-amber-500`,glass:`bg-amber-500/15 backdrop-blur-md text-amber-700 dark:text-amber-200 border border-amber-400/40`},danger:{solid:`bg-rose-600 text-white`,soft:`bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800`,outline:`bg-transparent text-rose-600 dark:text-rose-400 border-2 border-rose-500`,glass:`bg-rose-500/15 backdrop-blur-md text-rose-700 dark:text-rose-200 border border-rose-400/40`}};return(0,Y.jsxs)(`button`,{type:`button`,onClick:e=>{u(e=>e+1),i?.(e)},className:`relative overflow-hidden px-4 py-2 text-xs font-semibold ${d[n][t]} ${c(`control`)} shadow-sm active:scale-95 transition-all cursor-pointer group inline-flex items-center gap-1.5 ${r}`,...o,children:[(0,Y.jsx)(U,{className:`w-3.5 h-3.5`}),(0,Y.jsx)(`span`,{className:`relative z-10`,children:e}),l>0&&(0,Y.jsxs)(`span`,{className:`relative z-10 px-1.5 py-0.2 rounded-full bg-black/15 dark:bg-white/20 text-[10px] font-mono`,children:[l,`x`]}),(0,Y.jsx)(`div`,{className:`absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12`})]})},Si=({children:e=`Particle Burst`,className:t=``,variant:n=`solid`,tone:r=`primary`,onClick:i,...o})=>{let{palette:s,getRadiusClass:c}=Q(),[l,u]=(0,a.useState)(!1),[d,f]=(0,a.useState)(0),p={primary:{solid:`${s.bg} text-white border-transparent`,soft:`${s.softBg} ${s.text} ${s.border}`,outline:`bg-transparent border-2 ${s.border} ${s.text}`,glass:`bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white`},success:{solid:`bg-emerald-600 text-white border-transparent`,soft:`bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800`,outline:`bg-transparent border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400`,glass:`bg-emerald-500/15 backdrop-blur-md border-emerald-400/40 text-emerald-700 dark:text-emerald-200`},warning:{solid:`bg-amber-500 text-white border-transparent`,soft:`bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800`,outline:`bg-transparent border-2 border-amber-500 text-amber-600 dark:text-amber-400`,glass:`bg-amber-500/15 backdrop-blur-md border-amber-400/40 text-amber-700 dark:text-amber-200`},danger:{solid:`bg-rose-600 text-white border-transparent`,soft:`bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800`,outline:`bg-transparent border-2 border-rose-500 text-rose-600 dark:text-rose-400`,glass:`bg-rose-500/15 backdrop-blur-md border-rose-400/40 text-rose-700 dark:text-rose-200`}};return(0,Y.jsxs)(`div`,{className:`relative inline-block`,children:[(0,Y.jsxs)(`button`,{type:`button`,onClick:e=>{u(!0),f(e=>e+1),setTimeout(()=>u(!1),700),i?.(e)},className:`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold border ${p[r][n]} ${c(`control`)} shadow-md active:scale-95 transition-all cursor-pointer ${t}`,...o,children:[(0,Y.jsx)(U,{className:`w-3.5 h-3.5`}),(0,Y.jsx)(`span`,{children:e}),d>0&&(0,Y.jsxs)(`span`,{className:`font-mono text-[10px] opacity-80`,children:[`×`,d]})]}),l&&(0,Y.jsx)(`div`,{className:`absolute inset-0 pointer-events-none flex items-center justify-center`,children:[...Array(8)].map((e,t)=>(0,Y.jsx)(`span`,{className:`absolute w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping`,style:{transform:`rotate(${t*45}deg) translate(${28+t%2*10}px)`}},t))})]})},Ci=({icon:e=U,variant:t=`solid`,tone:n=`primary`,className:r=``,onClick:i,...o})=>{let{palette:s,getRadiusClass:c}=Q(),[l,u]=(0,a.useState)(!1),d={primary:{solid:`${s.bg} text-white`,soft:`${s.softBg} ${s.text} border ${s.border}`,outline:`bg-transparent ${s.text} border-2 ${s.border}`,glass:`bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white`},success:{solid:`bg-emerald-600 text-white`,soft:`bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800`,outline:`bg-transparent text-emerald-600 dark:text-emerald-400 border-2 border-emerald-500`,glass:`bg-emerald-500/15 backdrop-blur-md text-emerald-700 dark:text-emerald-200 border border-emerald-400/40`},warning:{solid:`bg-amber-500 text-white`,soft:`bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800`,outline:`bg-transparent text-amber-600 dark:text-amber-400 border-2 border-amber-500`,glass:`bg-amber-500/15 backdrop-blur-md text-amber-700 dark:text-amber-200 border border-amber-400/40`},danger:{solid:`bg-rose-600 text-white`,soft:`bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800`,outline:`bg-transparent text-rose-600 dark:text-rose-400 border-2 border-rose-500`,glass:`bg-rose-500/15 backdrop-blur-md text-rose-700 dark:text-rose-200 border border-rose-400/40`}};return(0,Y.jsxs)(`div`,{className:`inline-flex items-center gap-2`,children:[(0,Y.jsx)(`button`,{type:`button`,"aria-label":`Magnetic icon action`,onClick:e=>{u(e=>!e),i?.(e)},className:`w-10 h-10 flex items-center justify-center ${l?`bg-emerald-600 text-white ring-4 ring-emerald-500/20`:d[n][t]} ${c(`pill`)} shadow-md hover:scale-110 active:scale-90 transition-all duration-200 cursor-pointer ${r}`,...o,children:l?(0,Y.jsx)(C,{className:`w-5 h-5`}):(0,Y.jsx)(e,{className:`w-5 h-5`})}),(0,Y.jsx)(`span`,{className:`text-[11px] font-mono text-slate-500 dark:text-slate-400`,children:l?`Pinned`:`Click icon`})]})},wi=({label:e=`Hold to Delete`,onConfirm:t,holdDurationMs:n=900,variant:r=`soft`,tone:i=`danger`})=>{let{palette:o,getRadiusClass:s}=Q(),[c,l]=(0,a.useState)(0),[u,d]=(0,a.useState)(!1),f=(0,a.useRef)(null),p=(0,a.useRef)(null),m=()=>{u?d(!1):(p.current=Date.now(),f.current=window.setInterval(()=>{if(!p.current)return;let e=Date.now()-p.current,r=Math.min(100,e/n*100);l(r),r>=100&&(clearInterval(f.current),d(!0),t?.(),l(0),p.current=null)},20))},h=()=>{f.current&&clearInterval(f.current),l(0),p.current=null},g={primary:r===`solid`?`${o.bg} text-white border-transparent`:`${o.softBg} ${o.text} ${o.border}`,success:r===`solid`?`bg-emerald-600 text-white border-transparent`:`bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-300 dark:border-emerald-800`,warning:r===`solid`?`bg-amber-500 text-white border-transparent`:`bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-800`,danger:r===`solid`?`bg-rose-600 text-white border-transparent`:`bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border-rose-300 dark:border-rose-800`};return(0,Y.jsxs)(`button`,{type:`button`,onMouseDown:m,onMouseUp:h,onMouseLeave:h,onTouchStart:m,onTouchEnd:h,className:`relative overflow-hidden px-4 py-2 text-xs font-semibold border ${u?`bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800`:g[i]} ${s(`control`)} cursor-pointer select-none active:scale-98 transition-all`,children:[(0,Y.jsx)(`div`,{className:`absolute inset-y-0 left-0 bg-rose-500/25 dark:bg-rose-500/35 transition-all duration-75`,style:{width:`${c}%`}}),(0,Y.jsx)(`div`,{className:`relative z-10 flex items-center gap-2`,children:u?(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(C,{className:`w-3.5 h-3.5`}),(0,Y.jsx)(`span`,{children:`Confirmed! Click to Reset`}),(0,Y.jsx)(B,{className:`w-3 h-3 opacity-70`})]}):(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(Le,{className:`w-3.5 h-3.5`}),(0,Y.jsx)(`span`,{children:e}),c>0&&(0,Y.jsxs)(`span`,{className:`font-mono text-[10px]`,children:[Math.round(c),`%`]})]})})]})},Ti=({onComplete:e,label:t=`Slide to unlock`,completedText:n=`Unlocked! (Click to reset)`})=>{let{palette:r,getRadiusClass:i}=Q(),[o,s]=(0,a.useState)(0),[c,l]=(0,a.useState)(!1);return(0,Y.jsxs)(`div`,{onClick:()=>{c&&(l(!1),s(0))},className:`relative w-[220px] h-11 bg-slate-200 dark:bg-slate-800 ${i(`pill`)} p-1 flex items-center overflow-hidden select-none ${c?`cursor-pointer ring-2 ring-emerald-500/40`:``}`,children:[(0,Y.jsx)(`span`,{className:`absolute inset-0 flex items-center justify-center text-[11px] font-semibold text-slate-600 dark:text-slate-300 tracking-wide pl-6`,children:c?n:t}),(0,Y.jsx)(`div`,{style:{transform:`translateX(${o}px)`},className:`relative z-10 w-9 h-9 ${c?`bg-emerald-600`:r.bg} text-white rounded-full flex items-center justify-center shadow-md cursor-grab active:cursor-grabbing transition-transform`,children:c?(0,Y.jsx)(C,{className:`w-4 h-4`}):(0,Y.jsx)(T,{className:`w-4 h-4`})}),!c&&(0,Y.jsx)(`input`,{type:`range`,min:0,max:160,value:o,onChange:t=>{let n=Number(t.target.value);s(n),n>=160&&(l(!0),e?.())},"aria-label":t,className:`absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-20`})]})},Ei=({icon:e=z,label:t=`Create New Project`,onClick:n,variant:r=`solid`,tone:i=`primary`})=>{let{palette:o,getRadiusClass:s}=Q(),[c,l]=(0,a.useState)(!1),[u,d]=(0,a.useState)(0),f={primary:{solid:`${o.bg} text-white`,soft:`${o.softBg} ${o.text} border ${o.border}`,outline:`bg-transparent border-2 ${o.border} ${o.text}`,glass:`bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white`},success:{solid:`bg-emerald-600 text-white`,soft:`bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800`,outline:`bg-transparent border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400`,glass:`bg-emerald-500/15 backdrop-blur-md border border-emerald-400/40 text-emerald-700 dark:text-emerald-200`},warning:{solid:`bg-amber-500 text-white`,soft:`bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800`,outline:`bg-transparent border-2 border-amber-500 text-amber-600 dark:text-amber-400`,glass:`bg-amber-500/15 backdrop-blur-md border border-amber-400/40 text-amber-700 dark:text-amber-200`},danger:{solid:`bg-rose-600 text-white`,soft:`bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800`,outline:`bg-transparent border-2 border-rose-500 text-rose-600 dark:text-rose-400`,glass:`bg-rose-500/15 backdrop-blur-md border border-rose-400/40 text-rose-700 dark:text-rose-200`}};return(0,Y.jsxs)(`button`,{type:`button`,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),onFocus:()=>l(!0),onBlur:()=>l(!1),onClick:()=>{l(e=>!e),d(e=>e+1),n?.()},className:`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold ${f[i][r]} ${s(`pill`)} shadow-md transition-all duration-300 cursor-pointer overflow-hidden`,children:[u>0?(0,Y.jsx)(C,{className:`w-4 h-4 shrink-0`}):(0,Y.jsx)(e,{className:`w-4 h-4 shrink-0`}),(0,Y.jsx)(`span`,{className:`transition-all duration-300 whitespace-nowrap overflow-hidden ${c||u>0?`max-w-xs opacity-100 pr-1`:`max-w-0 opacity-0`}`,children:u>0?`${t} (${u})`:t})]})},Di=({icon:e=z,label:t,className:n=``,...r})=>{let i=a.isValidElement(e)?e:typeof e==`function`?a.createElement(e,{className:`w-5 h-5`}):(0,Y.jsx)(z,{className:`w-5 h-5`});return(0,Y.jsx)(Ft,{icon:i,label:t,extended:!!t,className:n,...r})},Oi=[{id:`doc`,label:`New Spec Doc`,icon:(0,Y.jsx)(F,{className:`h-3.5 w-3.5 text-indigo-600`}),shortcut:`⌘N`},{id:`share`,label:`Share Snapshot`,icon:(0,Y.jsx)(Ae,{className:`h-3.5 w-3.5 text-emerald-600`}),shortcut:`⌘S`},{id:`export`,label:`Export JSON Tokens`,icon:(0,Y.jsx)(M,{className:`h-3.5 w-3.5 text-amber-600`}),shortcut:`⌘E`}],ki=({actions:e=Oi,defaultOpen:t=!0,open:n,onOpenChange:r,onActionSelect:i,ariaLabel:o=`Quick actions speed dial`,className:s=``})=>{let[c,l]=(0,a.useState)(t),[u,d]=(0,a.useState)(null),f=n===void 0?c:n,p=()=>{let e=!f;n===void 0&&l(e),r?.(e)},m=e=>{d(e.label),e.onClick?.(),i?.(e)};return(0,Y.jsxs)(`div`,{className:`relative h-44 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/70 p-4 flex items-end justify-between overflow-hidden ${s}`,children:[(0,Y.jsxs)(`div`,{className:`space-y-1`,children:[(0,Y.jsx)(`p`,{className:`text-xs text-slate-500 max-w-[175px]`,children:`Always-visible frosted labels beside each staggered action pill.`}),u&&(0,Y.jsxs)(`p`,{className:`text-[11px] font-medium text-indigo-600 dark:text-indigo-400`,children:[`Triggered: `,u]})]}),(0,Y.jsxs)(`div`,{className:`flex flex-col items-end gap-2`,children:[f&&(0,Y.jsx)(`div`,{className:`flex flex-col items-end gap-1.5 animate-in fade-in slide-in-from-bottom-2 duration-200`,children:e.map(e=>(0,Y.jsxs)(`button`,{type:`button`,onClick:()=>m(e),className:`flex items-center gap-2 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 shadow-sm hover:border-indigo-400 hover:shadow transition-all cursor-pointer`,children:[(0,Y.jsx)(`span`,{children:e.label}),e.shortcut&&(0,Y.jsx)(`kbd`,{className:`text-[10px] font-mono text-slate-400`,children:e.shortcut}),e.icon]},e.id))}),(0,Y.jsx)(`button`,{type:`button`,onClick:p,"aria-expanded":f,"aria-label":o,className:`flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white shadow-md hover:bg-indigo-500 active:scale-95 transition-all cursor-pointer`,children:(0,Y.jsx)(z,{className:`h-5 w-5 transition-transform duration-200 ${f?`rotate-45`:``}`})})]})]})},Ai=({actions:e,...t})=>{let n=e?.map(e=>({id:e.id,label:e.label,shortcut:e.shortcut,onClick:e.onClick,icon:a.isValidElement(e.icon)?e.icon:typeof e.icon==`function`?a.createElement(e.icon,{className:`w-4 h-4`}):void 0}));return(0,Y.jsx)(ki,{actions:n,...t})},ji=({label:e=`Commit Changes`,options:t=[`Commit & Push`,`Commit to New Branch`,`Save Stash`],onPrimaryClick:n,onSelectOption:r,variant:i=`solid`,tone:o=`primary`})=>{let{palette:s,getRadiusClass:c}=Q(),[l,u]=(0,a.useState)(!1),[d,f]=(0,a.useState)(e),[p,m]=(0,a.useState)(0),h={primary:{solid:`${s.bg} text-white`,soft:`${s.softBg} ${s.text} border ${s.border}`,outline:`bg-transparent border ${s.border} ${s.text}`,glass:`bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white`},success:{solid:`bg-emerald-600 text-white`,soft:`bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800`,outline:`bg-transparent border border-emerald-500 text-emerald-600 dark:text-emerald-400`,glass:`bg-emerald-500/15 backdrop-blur-md border border-emerald-400/40 text-emerald-700 dark:text-emerald-200`},warning:{solid:`bg-amber-500 text-white`,soft:`bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800`,outline:`bg-transparent border border-amber-500 text-amber-600 dark:text-amber-400`,glass:`bg-amber-500/15 backdrop-blur-md border border-amber-400/40 text-amber-700 dark:text-amber-200`},danger:{solid:`bg-rose-600 text-white`,soft:`bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800`,outline:`bg-transparent border border-rose-500 text-rose-600 dark:text-rose-400`,glass:`bg-rose-500/15 backdrop-blur-md border border-rose-400/40 text-rose-700 dark:text-rose-200`}};return(0,Y.jsxs)(`div`,{className:`relative inline-flex rounded-lg shadow-sm`,children:[(0,Y.jsxs)(`button`,{type:`button`,onClick:()=>{m(e=>e+1),n?.()},className:`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold ${h[o][i]} rounded-l-lg border-r border-white/20 hover:brightness-105 active:scale-98 transition-all cursor-pointer`,children:[p>0&&(0,Y.jsx)(C,{className:`w-3.5 h-3.5`}),(0,Y.jsx)(`span`,{children:d}),p>0&&(0,Y.jsxs)(`span`,{className:`font-mono text-[10px] opacity-80`,children:[`×`,p]})]}),(0,Y.jsx)(`button`,{type:`button`,onClick:()=>u(e=>!e),className:`px-2 py-2 ${h[o][i]} rounded-r-lg hover:brightness-105 active:scale-98 transition-all cursor-pointer`,children:(0,Y.jsx)(w,{className:`w-4 h-4 transition-transform ${l?`rotate-180`:``}`})}),l&&(0,Y.jsx)(`div`,{className:`absolute top-full mt-1.5 right-0 z-30 w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl ${c(`control`)} py-1`,children:t.map(e=>(0,Y.jsxs)(`button`,{type:`button`,onClick:()=>{f(e),r?.(e),u(!1)},className:`w-full flex items-center justify-between text-left px-3 py-1.5 text-xs text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer`,children:[(0,Y.jsx)(`span`,{children:e}),d===e&&(0,Y.jsx)(C,{className:`w-3.5 h-3.5 text-indigo-500`})]},e))})]})},Mi=({options:e=[`Day`,`Week`,`Month`,`Year`],value:t,onChange:n})=>{let{palette:r,getRadiusClass:i}=Q(),[o,s]=(0,a.useState)(t??e[1]??e[0]),c=t??o,l=e=>{s(e),n?.(e)};return(0,Y.jsx)(`div`,{className:`inline-flex p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 ${i(`pill`)}`,children:e.map(e=>(0,Y.jsx)(`button`,{type:`button`,onClick:()=>l(e),className:`px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${e===c?`${r.bg} text-white shadow-sm`:`text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white`}`,children:e},e))})},Ni=({label:e=`Search Project`,shortcut:t=`⌘K`,variant:n=`outline`,tone:r=`primary`,className:i=``,onClick:o,...s})=>{let{palette:c,getRadiusClass:l}=Q(),[u,d]=(0,a.useState)(!1),f={primary:{solid:`${c.bg} text-white border-transparent`,soft:`${c.softBg} ${c.text} ${c.border}`,outline:`text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700`,glass:`bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white`},success:{solid:`bg-emerald-600 text-white border-transparent`,soft:`bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800`,outline:`bg-transparent text-emerald-600 dark:text-emerald-400 border-emerald-500`,glass:`bg-emerald-500/15 backdrop-blur-md text-emerald-700 dark:text-emerald-200 border-emerald-400/40`},warning:{solid:`bg-amber-500 text-white border-transparent`,soft:`bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800`,outline:`bg-transparent text-amber-600 dark:text-amber-400 border-amber-500`,glass:`bg-amber-500/15 backdrop-blur-md text-amber-700 dark:text-amber-200 border-amber-400/40`},danger:{solid:`bg-rose-600 text-white border-transparent`,soft:`bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800`,outline:`bg-transparent text-rose-600 dark:text-rose-400 border-rose-500`,glass:`bg-rose-500/15 backdrop-blur-md text-rose-700 dark:text-rose-200 border-rose-400/40`}};return(0,Y.jsxs)(`button`,{type:`button`,onClick:e=>{d(!0),setTimeout(()=>d(!1),1200),o?.(e)},className:`inline-flex items-center gap-2.5 px-3 py-1.5 text-xs font-medium ${u?`text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500`:f[r][n]} border ${l(`control`)} shadow-xs active:scale-95 transition-all cursor-pointer ${i}`,...s,children:[(0,Y.jsx)(ne,{className:`w-3.5 h-3.5 opacity-80`}),(0,Y.jsx)(`span`,{children:u?`Command Executed!`:e}),(0,Y.jsx)(`kbd`,{className:`px-1.5 py-0.5 text-[10px] font-mono bg-black/10 dark:bg-white/10 rounded`,children:t})]})},Pi=({onSwipeRight:e,label:t=`Tap / Double-Tap Gesture`})=>{let{palette:n,getRadiusClass:r}=Q(),[i,o]=(0,a.useState)(`idle`);return(0,Y.jsx)(`button`,{type:`button`,onClick:()=>{o(`tapped`),e?.(),setTimeout(()=>o(`idle`),900)},onDoubleClick:()=>{o(`double`),e?.(),setTimeout(()=>o(`idle`),1100)},className:`px-4 py-2 text-xs font-semibold text-white ${i===`double`?`bg-emerald-600`:i===`tapped`?`bg-violet-600`:n.bg} ${r(`control`)} shadow-md active:scale-95 transition-all cursor-pointer select-none`,children:(0,Y.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,Y.jsx)(ye,{className:`w-3.5 h-3.5`}),(0,Y.jsx)(`span`,{children:i===`double`?`Double-Tap Recognized!`:i===`tapped`?`Tap Impulse Fired!`:t})]})})},Fi=({states:e=[`Pending`,`In Review`,`Approved`,`Rejected`],activeState:t,onCycle:n})=>{let{getRadiusClass:r}=Q(),[i,o]=(0,a.useState)(t??e[0]),s=t??i;return(0,Y.jsxs)(`button`,{type:`button`,onClick:()=>{let t=e[(e.indexOf(s)+1)%e.length];o(t),n?.(t)},className:`px-3.5 py-2 text-xs font-semibold border ${r(`pill`)} ${(e=>{switch(e){case`Approved`:return`bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/40`;case`Rejected`:return`bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/40`;case`In Review`:return`bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/40`;default:return`bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-500/40`}})(s)} active:scale-95 transition-all cursor-pointer flex items-center gap-2 shadow-xs`,children:[(0,Y.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-current animate-pulse`}),(0,Y.jsxs)(`span`,{children:[`Status: `,s]}),(0,Y.jsx)(`span`,{className:`text-[10px] opacity-70 font-mono`,children:`(Click to cycle)`})]})},Ii=t({AnimatedButtonGroup:()=>Mi,CommandButton:()=>Ni,ExpandableButton:()=>Ei,FloatingActionButton:()=>Di,GestureButton:()=>Pi,GlowButton:()=>yi,GradientButton:()=>bi,HoldToConfirmButton:()=>wi,LiquidButton:()=>Mt,MagneticButton:()=>Pt,MagneticIconButton:()=>Ci,MorphButton:()=>_i,MultiStateButton:()=>Fi,ParticleButton:()=>Si,RippleButton:()=>Nt,ShimmerButton:()=>xi,SlideToAction:()=>Ti,SpeedDial:()=>Ai,SplitButton:()=>ji,SpringButton:()=>vi}),Li=t({default:()=>Ri}),Ri=`// @jxui/react v3.0.0 — category01Buttons (JXUI v3.0 Unified Component Suite)
// JXUI Category 1: Buttons & Actions (Compatibility Barrel)
// All individual components are located in ./buttons/

export * from './buttons';
`,zi=({children:e,className:t=``})=>{let{getRadiusClass:n}=Q();return(0,Y.jsxs)(`div`,{className:`relative overflow-hidden p-6 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.12)] ${n(`card`)} ${t}`,children:[(0,Y.jsx)(`div`,{className:`absolute -top-12 -left-12 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none`}),(0,Y.jsx)(`div`,{className:`absolute -bottom-12 -right-12 w-32 h-32 bg-violet-500/20 rounded-full blur-2xl pointer-events-none`}),(0,Y.jsx)(`div`,{className:`relative z-10`,children:e??(0,Y.jsx)(`p`,{className:`text-sm font-medium text-slate-800 dark:text-slate-200`,children:`Liquid Refractive Glass Surface`})})]})},Bi=({children:e,className:t=``})=>{let{getRadiusClass:n}=Q();return(0,Y.jsx)(`div`,{className:`p-5 bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-slate-200/60 dark:border-slate-800/80 shadow-lg ${n(`card`)} ${t}`,children:e??(0,Y.jsx)(`p`,{className:`text-sm font-medium text-slate-800 dark:text-slate-200`,children:`Heavy Frosted Glass with Deep Diffuse Blur`})})},Vi=({children:e,className:t=``})=>{let{palette:n,getRadiusClass:r}=Q();return(0,Y.jsx)(`div`,{className:`p-5 bg-gradient-to-br ${n.softBg} backdrop-blur-lg border ${n.border} shadow-md ${r(`card`)} ${t}`,children:e??(0,Y.jsx)(`p`,{className:`text-sm font-medium text-slate-800 dark:text-slate-200`,children:`Adaptive Glass Reacting to Theme Tint`})})},Hi=({title:e=`Telemetry Stream`,children:t,className:n=``})=>{let{getRadiusClass:r}=Q(),[i,o]=(0,a.useState)(16);return(0,Y.jsxs)(`div`,{style:{backdropFilter:`blur(${i}px)`},className:`p-4 bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/50 shadow-xl ${r(`card`)} ${n}`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center justify-between pb-3 border-b border-white/20 dark:border-slate-800`,children:[(0,Y.jsx)(`h4`,{className:`text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300`,children:e}),(0,Y.jsxs)(`div`,{className:`flex items-center gap-1.5 text-[11px] text-slate-500 font-mono`,children:[(0,Y.jsx)(`span`,{children:`Blur:`}),(0,Y.jsx)(`input`,{type:`range`,min:4,max:32,value:i,onChange:e=>o(Number(e.target.value)),className:`w-16 h-1 accent-indigo-500 cursor-pointer`}),(0,Y.jsxs)(`span`,{children:[i,`px`]})]})]}),(0,Y.jsx)(`div`,{className:`pt-3 text-sm text-slate-700 dark:text-slate-300`,children:t??(0,Y.jsx)(`p`,{children:`Dynamic hardware-accelerated backdrop blur filter.`})})]})},Ui=({title:e=`Luminescent Metric`,subtitle:t=`Zero latency event loop`,children:n,className:r=``})=>{let{getRadiusClass:i}=Q();return(0,Y.jsxs)(`div`,{className:`p-5 bg-white/70 dark:bg-[#111827]/70 backdrop-blur-xl border border-white/50 dark:border-slate-800 jx-elevation-2 shadow-lg hover:shadow-2xl transition-all duration-300 ${i(`card`)} ${r}`,children:[(0,Y.jsx)(`h3`,{className:`font-bold text-slate-900 dark:text-white text-base`,children:e}),(0,Y.jsx)(`p`,{className:`text-xs text-slate-500 dark:text-slate-400 mt-0.5 mb-3`,children:t}),n]})},Wi=({brand:e=`JX GlassNav`,links:t=[`Docs`,`Tokens`,`API`,`Showcase`]})=>{let{palette:n,getRadiusClass:r}=Q();return(0,Y.jsxs)(`nav`,{className:`px-4 py-2.5 bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/80 shadow-md ${r(`pill`)} flex items-center justify-between`,children:[(0,Y.jsxs)(`span`,{className:`font-extrabold text-sm tracking-tight text-slate-900 dark:text-white flex items-center gap-2`,children:[(0,Y.jsx)(U,{className:`w-4 h-4 text-indigo-500`}),e]}),(0,Y.jsx)(`div`,{className:`flex items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-300`,children:t.map(e=>(0,Y.jsx)(`a`,{href:`#${e.toLowerCase()}`,className:`hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors`,children:e},e))}),(0,Y.jsx)(`button`,{className:`px-3 py-1 text-xs font-semibold text-white ${n.bg} rounded-full shadow-xs cursor-pointer`,children:`Launch`})]})},Gi=({items:e=[`Overview`,`Analytics`,`Components`,`Settings`]})=>{let{palette:t,getRadiusClass:n}=Q(),[r,i]=(0,a.useState)(`Overview`);return(0,Y.jsxs)(`aside`,{className:`w-48 p-3 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/80 shadow-lg ${n(`card`)} flex flex-col gap-1`,children:[(0,Y.jsx)(`span`,{className:`text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 py-1`,children:`Navigation`}),e.map(e=>(0,Y.jsx)(`button`,{type:`button`,onClick:()=>i(e),className:`px-3 py-1.5 text-xs font-medium text-left rounded-lg transition-all cursor-pointer ${r===e?`${t.bg} text-white shadow-xs`:`text-slate-600 dark:text-slate-400 hover:bg-white/60 dark:hover:bg-slate-800/60`}`,children:e},e))]})},Ki=({open:e=!0,onClose:t,title:n=`Frosted Dialog`,children:r})=>{let{getRadiusClass:i}=Q();return e?(0,Y.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in`,children:(0,Y.jsxs)(`div`,{className:`w-full max-w-md p-6 bg-white/75 dark:bg-slate-900/75 backdrop-blur-2xl border border-white/60 dark:border-slate-700/60 shadow-2xl ${i(`card`)}`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center justify-between pb-3 border-b border-slate-200/40 dark:border-slate-800`,children:[(0,Y.jsx)(`h3`,{className:`font-bold text-slate-900 dark:text-white text-base`,children:n}),(0,Y.jsx)(`button`,{type:`button`,onClick:t,className:`p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer`,children:(0,Y.jsx)(W,{className:`w-4 h-4`})})]}),(0,Y.jsx)(`div`,{className:`py-4 text-sm text-slate-700 dark:text-slate-300`,children:r??(0,Y.jsx)(`p`,{children:`Refractive modal dialog with liquid translucent depth.`})})]})}):null},qi=({triggerLabel:e=`Open Glass Popover`,content:t=`Lightweight floating popover layer.`})=>{let{getRadiusClass:n}=Q(),[r,i]=(0,a.useState)(!1);return(0,Y.jsxs)(`div`,{className:`relative inline-block`,children:[(0,Y.jsx)(`button`,{type:`button`,onClick:()=>i(e=>!e),className:`px-3 py-1.5 text-xs font-semibold bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-300 dark:border-slate-700 ${n(`control`)} shadow-xs cursor-pointer`,children:e}),r&&(0,Y.jsx)(`div`,{className:`absolute top-full mt-2 left-0 z-30 w-56 p-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/60 dark:border-slate-700 shadow-xl ${n(`card`)}`,children:(0,Y.jsx)(`p`,{className:`text-xs text-slate-700 dark:text-slate-300`,children:t})})]})},Ji=({text:e,children:t})=>{let{getRadiusClass:n}=Q(),[r,i]=(0,a.useState)(!1);return(0,Y.jsxs)(`div`,{className:`relative inline-block`,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[t,r&&(0,Y.jsx)(`div`,{className:`absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 z-40 px-2.5 py-1 text-[11px] font-medium text-slate-900 dark:text-white bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border border-white/40 dark:border-slate-700/60 shadow-md ${n(`control`)} whitespace-nowrap`,children:e})]})},Yi=({icons:e=[ae,F,H,y,U]})=>{let{getRadiusClass:t}=Q();return(0,Y.jsx)(`div`,{className:`inline-flex items-center gap-2 px-3 py-2 bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl border border-white/50 dark:border-slate-800/80 shadow-2xl ${t(`pill`)}`,children:e.map((e,t)=>(0,Y.jsx)(`button`,{type:`button`,className:`w-9 h-9 flex items-center justify-center rounded-xl bg-white/60 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:-translate-y-1.5 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer shadow-xs`,children:(0,Y.jsx)(e,{className:`w-4 h-4`})},t))})},Xi=({children:e})=>{let{getRadiusClass:t}=Q();return(0,Y.jsx)(`div`,{className:`inline-flex items-center gap-1.5 p-1.5 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800 shadow-md ${t(`pill`)}`,children:e??(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(`button`,{className:`px-2.5 py-1 text-xs font-medium rounded-full hover:bg-slate-200/60 dark:hover:bg-slate-800 cursor-pointer`,children:`Filter`}),(0,Y.jsx)(`button`,{className:`px-2.5 py-1 text-xs font-medium rounded-full hover:bg-slate-200/60 dark:hover:bg-slate-800 cursor-pointer`,children:`Sort`}),(0,Y.jsx)(`button`,{className:`px-2.5 py-1 text-xs font-medium rounded-full hover:bg-slate-200/60 dark:hover:bg-slate-800 cursor-pointer`,children:`Export`})]})})},Zi=({title:e=`Deployment Verified`,message:t=`Build #4892 completed in 2.1s with zero bundle regressions.`,onDismiss:n})=>{let{getRadiusClass:r}=Q();return(0,Y.jsxs)(`div`,{className:`relative p-4 max-w-sm bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-emerald-500/30 shadow-xl ${r(`card`)} flex items-start gap-3`,children:[(0,Y.jsx)(U,{className:`w-5 h-5 text-emerald-500 shrink-0 mt-0.5`}),(0,Y.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,Y.jsx)(`h5`,{className:`font-bold text-xs text-slate-900 dark:text-white`,children:e}),(0,Y.jsx)(`p`,{className:`text-[11px] text-slate-600 dark:text-slate-400 mt-0.5`,children:t})]}),n&&(0,Y.jsx)(`button`,{type:`button`,onClick:n,className:`text-slate-400 hover:text-slate-600 cursor-pointer`,children:(0,Y.jsx)(W,{className:`w-3.5 h-3.5`})})]})},Qi=({label:e,className:t=``,children:n,...r})=>{let{getRadiusClass:i}=Q();return(0,Y.jsxs)(`div`,{className:`flex flex-col gap-1 w-full`,children:[e&&(0,Y.jsx)(`label`,{className:`text-xs font-medium text-slate-600 dark:text-slate-400`,children:e}),(0,Y.jsx)(`input`,{className:`px-3 py-2 text-sm text-slate-900 dark:text-white bg-white/40 dark:bg-slate-900/40 backdrop-blur-lg border border-slate-300/60 dark:border-slate-700/60 placeholder-slate-400 focus:outline-none focus:border-indigo-500 ${i(`control`)} transition-all ${t}`,...r})]})},$i=({children:e=`Glass Action`,className:t=``,...n})=>{let{getRadiusClass:r}=Q();return(0,Y.jsx)(`button`,{className:`px-4 py-2 text-sm font-semibold text-slate-900 dark:text-white bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/60 dark:border-white/10 hover:bg-white/60 dark:hover:bg-slate-700/60 active:scale-95 transition-all shadow-xs cursor-pointer ${r(`control`)} ${t}`,...n,children:e})},ea=({tabs:e=[`Design`,`Code`,`Audit`,`Tokens`],activeTab:t,onChange:n})=>{let{palette:r,getRadiusClass:i}=Q(),[o,s]=(0,a.useState)(t??e[0]),c=t??o;return(0,Y.jsx)(`div`,{className:`inline-flex p-1 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800 ${i(`pill`)}`,children:e.map(e=>(0,Y.jsx)(`button`,{type:`button`,onClick:()=>{s(e),n?.(e)},className:`px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${e===c?`${r.bg} text-white shadow-xs`:`text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white`}`,children:e},e))})},ta=({open:e=!0,onClose:t,title:n=`Properties Inspector`,children:r})=>{let{getRadiusClass:i}=Q();return e?(0,Y.jsx)(`aside`,{className:`w-80 p-5 bg-white/70 dark:bg-slate-950/70 backdrop-blur-2xl border-l border-slate-200/50 dark:border-slate-800 shadow-2xl flex flex-col justify-between h-full ${i(`card`)}`,children:(0,Y.jsxs)(`div`,{children:[(0,Y.jsxs)(`div`,{className:`flex items-center justify-between pb-3 border-b border-slate-200/50 dark:border-slate-800`,children:[(0,Y.jsx)(`h4`,{className:`font-bold text-sm text-slate-900 dark:text-white`,children:n}),(0,Y.jsx)(`button`,{type:`button`,onClick:t,className:`p-1 text-slate-400 hover:text-slate-600 cursor-pointer`,children:(0,Y.jsx)(W,{className:`w-4 h-4`})})]}),(0,Y.jsx)(`div`,{className:`pt-4 text-xs text-slate-600 dark:text-slate-300`,children:r??(0,Y.jsx)(`p`,{children:`Sliding translucent inspector drawer panel.`})})]})}):null},na=({placeholder:e=`Type a command or jump...`})=>{let{getRadiusClass:t}=Q();return(0,Y.jsxs)(`div`,{className:`w-full max-w-lg p-2 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/50 dark:border-slate-800 shadow-2xl ${t(`card`)}`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center gap-2 px-3 py-1.5 border-b border-slate-200/50 dark:border-slate-800`,children:[(0,Y.jsx)(V,{className:`w-4 h-4 text-slate-400`}),(0,Y.jsx)(`input`,{type:`text`,placeholder:e,className:`w-full bg-transparent text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none`})]}),(0,Y.jsx)(`div`,{className:`p-2 text-[11px] text-slate-500 font-mono`,children:`Suggested: /theme, /export, /audit`})]})},ra=({title:e=`Live Performance Monitor`,children:t})=>{let{getRadiusClass:n}=Q();return(0,Y.jsxs)(`div`,{className:`p-4 w-72 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/40 dark:border-slate-800 shadow-2xl ${n(`card`)}`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center justify-between pb-2 mb-2 border-b border-slate-200/40 dark:border-slate-800`,children:[(0,Y.jsx)(`span`,{className:`text-xs font-bold text-slate-900 dark:text-white`,children:e}),(0,Y.jsx)(he,{className:`w-3.5 h-3.5 text-slate-400`})]}),(0,Y.jsx)(`div`,{className:`text-xs text-slate-600 dark:text-slate-400`,children:t??(0,Y.jsx)(`p`,{children:`60 FPS • 0.8ms Frame Budget`})})]})},ia=({children:e})=>{let{getRadiusClass:t}=Q();return(0,Y.jsxs)(`div`,{className:`relative p-8 bg-gradient-to-br from-white/30 via-slate-100/40 to-indigo-50/30 dark:from-slate-950/40 dark:via-slate-900/40 dark:to-indigo-950/20 backdrop-blur-3xl border border-white/40 dark:border-slate-800/80 shadow-2xl ${t(`card`)} overflow-hidden`,children:[(0,Y.jsx)(`div`,{className:`absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none`}),(0,Y.jsx)(`div`,{className:`relative z-10`,children:e??(0,Y.jsx)(`p`,{className:`text-sm font-semibold text-slate-800 dark:text-slate-200`,children:`3D Multi-Layer Spatial Glass Canvas`})})]})},aa=t({AdaptiveGlass:()=>Vi,DynamicGlassPanel:()=>Hi,FrostedGlass:()=>Bi,GlassButton:()=>$i,GlassCard:()=>Ui,GlassCommandMenu:()=>na,GlassDock:()=>Yi,GlassFloatingPanel:()=>ra,GlassInput:()=>Qi,GlassModal:()=>Ki,GlassNavbar:()=>Wi,GlassNotification:()=>Zi,GlassPopover:()=>qi,GlassSheet:()=>ta,GlassSidebar:()=>Gi,GlassTabs:()=>ea,GlassToolbar:()=>Xi,GlassTooltip:()=>Ji,LiquidGlass:()=>zi,SpatialGlassWorkspace:()=>ia}),oa=t({default:()=>sa}),sa=`// @jxui/react v3.0.0 — category02Glassmorphism (JXUI v3.0 Unified Component Suite)
// JXUI Category 2: Glassmorphism & Surfaces (Compatibility Barrel)
// All individual components are located in ./glassmorphism/

export * from './glassmorphism';
`,ca=({items:e=[{id:`1`,label:`Home`,icon:I},{id:`2`,label:`Explore`,icon:A},{id:`3`,label:`Layers`,icon:R},{id:`4`,label:`Settings`,icon:H}]})=>{let{palette:t,getRadiusClass:n}=Q(),[r,i]=(0,a.useState)(null);return(0,Y.jsx)(`div`,{className:`inline-flex items-end gap-3 px-4 py-3 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-slate-200/60 dark:border-slate-800 shadow-xl ${n(`pill`)}`,children:e.map((e,n)=>{let a=e.icon,o=r===n,s=r!==null&&Math.abs(r-n)===1,c=o?`scale-125 -translate-y-2`:s?`scale-110 -translate-y-1`:`scale-100`;return(0,Y.jsx)(`button`,{type:`button`,onMouseEnter:()=>i(n),onMouseLeave:()=>i(null),title:e.label,className:`w-10 h-10 flex items-center justify-center rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700 text-slate-700 dark:text-slate-200 shadow-md transition-all duration-150 cursor-pointer ${c} ${o?`${t.bg} text-white border-transparent`:``}`,children:(0,Y.jsx)(a,{className:`w-5 h-5`})},e.id)})})},la=({onSearch:e})=>{let{palette:t,getRadiusClass:n}=Q();return(0,Y.jsxs)(`div`,{className:`inline-flex items-center gap-2 p-1.5 bg-slate-900/90 dark:bg-slate-950/90 text-white backdrop-blur-xl border border-slate-700/80 shadow-2xl ${n(`pill`)}`,children:[(0,Y.jsx)(`button`,{className:`p-2 hover:bg-slate-800 rounded-full transition-colors cursor-pointer`,title:`Home`,children:(0,Y.jsx)(I,{className:`w-4 h-4`})}),(0,Y.jsx)(`button`,{className:`p-2 hover:bg-slate-800 rounded-full transition-colors cursor-pointer`,title:`Search`,onClick:e,children:(0,Y.jsx)(V,{className:`w-4 h-4`})}),(0,Y.jsx)(`div`,{className:`w-px h-4 bg-slate-700`}),(0,Y.jsx)(`button`,{className:`px-3 py-1 text-xs font-semibold rounded-full ${t.bg} cursor-pointer`,children:`Action`})]})},ua=({brand:e=`JXUI Adaptive`})=>{let{palette:t,getRadiusClass:n}=Q(),[r,i]=(0,a.useState)(!1);return(0,Y.jsxs)(`header`,{className:`w-full px-4 py-3 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between ${n(`control`)}`,children:[(0,Y.jsxs)(`span`,{className:`font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2`,children:[(0,Y.jsx)(U,{className:`w-4 h-4 text-indigo-500`}),e]}),(0,Y.jsxs)(`div`,{className:`hidden md:flex items-center gap-5 text-xs font-medium text-slate-600 dark:text-slate-400`,children:[(0,Y.jsx)(`a`,{href:`#overview`,className:`hover:text-indigo-600`,children:`Overview`}),(0,Y.jsx)(`a`,{href:`#components`,className:`hover:text-indigo-600`,children:`Components`}),(0,Y.jsx)(`a`,{href:`#tokens`,className:`hover:text-indigo-600`,children:`Tokens`})]}),(0,Y.jsx)(`button`,{onClick:()=>i(!r),className:`md:hidden p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 cursor-pointer`,"aria-label":r?`Close menu`:`Open menu`,"aria-expanded":r,"aria-haspopup":`menu`,children:r?(0,Y.jsx)(W,{className:`w-4 h-4`}):(0,Y.jsx)(ge,{className:`w-4 h-4`})})]})},da=({compact:e=!1})=>{let{palette:t,getRadiusClass:n}=Q();return(0,Y.jsxs)(`nav`,{className:`transition-all duration-300 ${e?`py-1.5 px-3 max-w-md`:`py-3 px-6 max-w-3xl`} mx-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800 shadow-md ${n(`pill`)} flex items-center justify-between`,children:[(0,Y.jsx)(`span`,{className:`text-xs font-bold text-slate-900 dark:text-white`,children:`Morphing Navigation`}),(0,Y.jsx)(`span`,{className:`text-[11px] font-mono text-slate-500`,children:e?`Compact Mode`:`Expanded Mode`})]})},fa=({collapsed:e=!1})=>{let{palette:t}=Q();return(0,Y.jsxs)(`aside`,{className:`transition-all duration-300 ${e?`w-16`:`w-56`} p-3 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col gap-2`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center gap-2 p-2 font-bold text-xs text-slate-900 dark:text-white`,children:[(0,Y.jsx)(U,{className:`w-4 h-4 text-indigo-500 shrink-0`}),!e&&(0,Y.jsx)(`span`,{children:`Workspace`})]}),(0,Y.jsx)(`div`,{className:`flex flex-col gap-1`,children:[`Dashboard`,`Projects`,`Analytics`,`Settings`].map(t=>(0,Y.jsxs)(`button`,{className:`flex items-center gap-2 px-2.5 py-1.5 text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg cursor-pointer`,children:[(0,Y.jsx)(ae,{className:`w-4 h-4 shrink-0`}),!e&&(0,Y.jsx)(`span`,{children:t})]},t))})]})},pa=()=>{let[e,t]=(0,a.useState)(!1);return(0,Y.jsxs)(`div`,{onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),className:`transition-all duration-300 ${e?`w-52`:`w-14`} p-2 bg-slate-900 text-white flex flex-col gap-2 rounded-xl`,children:[(0,Y.jsxs)(`button`,{className:`flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800 cursor-pointer`,children:[(0,Y.jsx)(I,{className:`w-4 h-4 shrink-0`}),e&&(0,Y.jsx)(`span`,{className:`text-xs font-medium`,children:`Home`})]}),(0,Y.jsxs)(`button`,{className:`flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800 cursor-pointer`,children:[(0,Y.jsx)(A,{className:`w-4 h-4 shrink-0`}),e&&(0,Y.jsx)(`span`,{className:`text-xs font-medium`,children:`Explore`})]})]})},ma=()=>{let[e,t]=(0,a.useState)(!0);return(0,Y.jsxs)(`div`,{className:`w-48 text-xs font-medium`,children:[(0,Y.jsxs)(`button`,{onClick:()=>t(!e),className:`w-full flex items-center justify-between p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer`,children:[(0,Y.jsx)(`span`,{children:`Components`}),(0,Y.jsx)(w,{className:`w-3.5 h-3.5 transition-transform ${e?`rotate-180`:``}`})]}),e&&(0,Y.jsxs)(`div`,{className:`pl-4 flex flex-col gap-1 pt-1`,children:[(0,Y.jsx)(`a`,{href:`#buttons`,className:`p-1 text-slate-500 hover:text-indigo-600`,children:`Buttons (20)`}),(0,Y.jsx)(`a`,{href:`#glass`,className:`p-1 text-slate-500 hover:text-indigo-600`,children:`Glassmorphism (20)`}),(0,Y.jsx)(`a`,{href:`#nav`,className:`p-1 text-slate-500 hover:text-indigo-600`,children:`Navigation (20)`})]})]})},ha=()=>{let{getRadiusClass:e}=Q();return(0,Y.jsxs)(`div`,{className:`p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl ${e(`card`)} grid grid-cols-3 gap-4 max-w-lg`,children:[(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`h5`,{className:`font-bold text-xs text-slate-900 dark:text-white mb-2`,children:`Actions`}),(0,Y.jsxs)(`div`,{className:`flex flex-col gap-1 text-[11px] text-slate-500`,children:[(0,Y.jsx)(`span`,{children:`Magnetic Buttons`}),(0,Y.jsx)(`span`,{children:`Hold to Confirm`}),(0,Y.jsx)(`span`,{children:`Slide to Action`})]})]}),(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`h5`,{className:`font-bold text-xs text-slate-900 dark:text-white mb-2`,children:`Surfaces`}),(0,Y.jsxs)(`div`,{className:`flex flex-col gap-1 text-[11px] text-slate-500`,children:[(0,Y.jsx)(`span`,{children:`Liquid Glass`}),(0,Y.jsx)(`span`,{children:`Frosted Panel`}),(0,Y.jsx)(`span`,{children:`Adaptive Glass`})]})]}),(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`h5`,{className:`font-bold text-xs text-slate-900 dark:text-white mb-2`,children:`Enterprise`}),(0,Y.jsxs)(`div`,{className:`flex flex-col gap-1 text-[11px] text-slate-500`,children:[(0,Y.jsx)(`span`,{children:`Notion Data Grid`}),(0,Y.jsx)(`span`,{children:`Waveform Scrubber`}),(0,Y.jsx)(`span`,{children:`Canary Splitter`})]})]})]})},ga=()=>{let{getRadiusClass:e}=Q();return(0,Y.jsxs)(`div`,{className:`px-3 py-2 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 ${e(`control`)} flex items-center justify-between gap-4 text-xs`,children:[(0,Y.jsx)(`span`,{className:`text-slate-500`,children:`Jump to section...`}),(0,Y.jsx)(`kbd`,{className:`px-1.5 py-0.5 font-mono text-[10px] bg-white dark:bg-slate-800 border rounded text-slate-600 dark:text-slate-400`,children:`⌘P`})]})},_a=({crumbs:e=[`JXUI`,`Library`,`Navigation`,`Dock`]})=>(0,Y.jsx)(`nav`,{className:`flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400`,children:e.map((t,n)=>(0,Y.jsxs)(a.Fragment,{children:[n>0&&(0,Y.jsx)(T,{className:`w-3.5 h-3.5 text-slate-400`}),(0,Y.jsx)(`span`,{className:n===e.length-1?`font-bold text-slate-900 dark:text-white`:`hover:underline cursor-pointer`,children:t})]},t))}),va=({tab:e,selected:t,indicatorVariant:n=`pill`,onSelect:r})=>n===`underline`?(0,Y.jsxs)(`button`,{type:`button`,role:`tab`,"aria-selected":t,disabled:e.disabled,onClick:()=>!e.disabled&&r(e.id),className:`relative flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold transition-all cursor-pointer disabled:opacity-40 ${t?`text-indigo-600 dark:text-indigo-400`:`text-slate-500 hover:text-slate-700 dark:hover:text-slate-300`}`,children:[e.icon,(0,Y.jsx)(`span`,{children:e.label}),e.count!==void 0&&(0,Y.jsx)(`span`,{className:`rounded-full px-1.5 py-0.2 text-[10px] font-mono ${t?`bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300`:`bg-slate-100 dark:bg-slate-800 text-slate-500`}`,children:e.count}),t&&(0,Y.jsx)(`span`,{className:`absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-indigo-600 dark:bg-indigo-400`})]}):(0,Y.jsxs)(`button`,{type:`button`,role:`tab`,"aria-selected":t,disabled:e.disabled,onClick:()=>!e.disabled&&r(e.id),className:`flex-1 flex items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs font-semibold transition-all cursor-pointer disabled:opacity-40 ${t?`bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm`:`text-slate-500 hover:text-slate-700 dark:hover:text-slate-300`}`,children:[e.icon,(0,Y.jsx)(`span`,{children:e.label}),e.count!==void 0&&(0,Y.jsx)(`span`,{className:`rounded-full px-1.5 py-0.2 text-[10px] font-mono ${t?`bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300`:`bg-slate-200/70 dark:bg-slate-700 text-slate-500`}`,children:e.count})]}),ya=[{id:`overview`,label:`Overview`,count:4,content:(0,Y.jsxs)(`span`,{children:[`Viewing `,(0,Y.jsx)(`strong`,{className:`text-slate-900 dark:text-white`,children:`Overview`}),` panel with smooth layout pill projection and Title Case typography.`]})},{id:`metrics`,label:`Metrics`,count:18,content:(0,Y.jsxs)(`span`,{children:[`Viewing `,(0,Y.jsx)(`strong`,{className:`text-slate-900 dark:text-white`,children:`Metrics`}),` telemetry feed — 99.98% uptime across 18 global edge PoPs.`]})},{id:`webhooks`,label:`Webhooks`,count:2,content:(0,Y.jsxs)(`span`,{children:[`Viewing `,(0,Y.jsx)(`strong`,{className:`text-slate-900 dark:text-white`,children:`Webhooks`}),` endpoints with automatic exponential retry policies enabled.`]})}],ba=({tabs:e=ya,value:t,defaultValue:n=`overview`,onChange:r,indicatorVariant:i=`pill`,className:o=``})=>{let[s,c]=(0,a.useState)(n),l=t===void 0?s:t,u=e=>{t===void 0&&c(e),r?.(e)},d=e.find(e=>e.id===l)||e[0];return(0,Y.jsxs)(`div`,{className:`space-y-3 ${o}`,children:[(0,Y.jsx)(`div`,{role:`tablist`,className:i===`pill`?`flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1`:`flex border-b border-slate-200 dark:border-slate-700`,children:e.map(e=>(0,Y.jsx)(va,{tab:e,selected:l===e.id,indicatorVariant:i,onSelect:u},e.id))}),(0,Y.jsx)(`div`,{role:`tabpanel`,className:`rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/70 p-3 text-xs text-slate-600 dark:text-slate-300`,children:d?.content??(0,Y.jsxs)(`span`,{children:[`Viewing `,(0,Y.jsx)(`strong`,{className:`text-slate-900 dark:text-white`,children:d?.label}),` panel with smooth layout pill projection and Title Case typography.`]})})]})},xa=({tabs:e=[`Design`,`Code`,`API`,`Audit`],indicatorVariant:t=`pill`,...n})=>{let r=e.map(e=>typeof e==`string`?{id:e.toLowerCase().replace(/\s+/g,`-`),label:e}:e);return(0,Y.jsx)(ba,{tabs:r,defaultValue:r[0]?.id,indicatorVariant:t,...n})},Sa=()=>{let{palette:e}=Q(),[t,n]=(0,a.useState)(`Specs`);return(0,Y.jsx)(`div`,{className:`flex border-b border-slate-200 dark:border-slate-800 text-xs font-semibold`,children:[`Specs`,`Props`,`Changelog`].map(r=>(0,Y.jsxs)(`button`,{onClick:()=>n(r),className:`px-4 py-2 relative cursor-pointer ${t===r?`text-indigo-600 dark:text-indigo-400`:`text-slate-500`}`,children:[r,t===r&&(0,Y.jsx)(`div`,{className:`absolute bottom-0 inset-x-0 h-0.5 ${e.bg}`})]},r))})},Ca=()=>{let{palette:e}=Q(),[t,n]=(0,a.useState)(0);return(0,Y.jsx)(`div`,{className:`w-14 py-4 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col items-center gap-4`,children:[I,A,R,H].map((r,i)=>(0,Y.jsx)(`button`,{onClick:()=>n(i),className:`w-9 h-9 flex items-center justify-center rounded-xl transition-all cursor-pointer ${t===i?`${e.bg} text-white shadow-sm`:`text-slate-400 hover:text-slate-900 dark:hover:text-white`}`,children:(0,Y.jsx)(r,{className:`w-4 h-4`})},i))})},wa=()=>{let{palette:e,getRadiusClass:t}=Q();return(0,Y.jsxs)(`div`,{className:`px-4 py-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-xl ${t(`pill`)} flex items-center gap-6`,children:[(0,Y.jsx)(`button`,{className:`text-indigo-600 dark:text-indigo-400 cursor-pointer`,children:(0,Y.jsx)(I,{className:`w-4 h-4`})}),(0,Y.jsx)(`button`,{className:`text-slate-400 hover:text-slate-600 cursor-pointer`,children:(0,Y.jsx)(V,{className:`w-4 h-4`})}),(0,Y.jsx)(`button`,{className:`text-slate-400 hover:text-slate-600 cursor-pointer`,children:(0,Y.jsx)(y,{className:`w-4 h-4`})}),(0,Y.jsx)(`button`,{className:`text-slate-400 hover:text-slate-600 cursor-pointer`,children:(0,Y.jsx)(H,{className:`w-4 h-4`})})]})},Ta=()=>{let{palette:e}=Q();return(0,Y.jsxs)(`div`,{className:`relative w-28 h-28 rounded-full border-2 border-dashed border-indigo-500/40 flex items-center justify-center`,children:[(0,Y.jsx)(`div`,{className:`w-8 h-8 rounded-full ${e.bg} text-white flex items-center justify-center shadow-md`,children:(0,Y.jsx)(U,{className:`w-4 h-4`})}),(0,Y.jsx)(`button`,{className:`absolute top-1 text-slate-500 hover:text-indigo-600`,children:(0,Y.jsx)(I,{className:`w-3.5 h-3.5`})}),(0,Y.jsx)(`button`,{className:`absolute bottom-1 text-slate-500 hover:text-indigo-600`,children:(0,Y.jsx)(A,{className:`w-3.5 h-3.5`})}),(0,Y.jsx)(`button`,{className:`absolute left-1 text-slate-500 hover:text-indigo-600`,children:(0,Y.jsx)(R,{className:`w-3.5 h-3.5`})}),(0,Y.jsx)(`button`,{className:`absolute right-1 text-slate-500 hover:text-indigo-600`,children:(0,Y.jsx)(H,{className:`w-3.5 h-3.5`})})]})},Ea=()=>{let[e,t]=(0,a.useState)(!1),{palette:n}=Q();return(0,Y.jsxs)(`div`,{className:`relative inline-block`,children:[(0,Y.jsx)(`button`,{onClick:()=>t(!e),className:`w-10 h-10 rounded-full ${n.bg} text-white flex items-center justify-center shadow-lg cursor-pointer`,"aria-label":e?`Close radial menu`:`Open radial menu`,"aria-expanded":e,"aria-haspopup":`menu`,children:(0,Y.jsx)(ce,{className:`w-4 h-4`})}),e&&(0,Y.jsxs)(`div`,{className:`absolute -top-12 -left-12 w-32 h-32 pointer-events-none`,role:`menu`,children:[(0,Y.jsx)(`button`,{role:`menuitem`,"aria-label":`Home`,className:`pointer-events-auto absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-white dark:bg-slate-800 rounded-full shadow-md flex items-center justify-center`,children:(0,Y.jsx)(I,{className:`w-3.5 h-3.5 text-indigo-500`})}),(0,Y.jsx)(`button`,{role:`menuitem`,"aria-label":`Search`,className:`pointer-events-auto absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-white dark:bg-slate-800 rounded-full shadow-md flex items-center justify-center`,children:(0,Y.jsx)(V,{className:`w-3.5 h-3.5 text-indigo-500`})}),(0,Y.jsx)(`button`,{role:`menuitem`,"aria-label":`Settings`,className:`pointer-events-auto absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white dark:bg-slate-800 rounded-full shadow-md flex items-center justify-center`,children:(0,Y.jsx)(H,{className:`w-3.5 h-3.5 text-indigo-500`})}),(0,Y.jsx)(`button`,{role:`menuitem`,"aria-label":`Share`,className:`pointer-events-auto absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white dark:bg-slate-800 rounded-full shadow-md flex items-center justify-center`,children:(0,Y.jsx)(Ae,{className:`w-3.5 h-3.5 text-indigo-500`})})]})]})},Da=()=>{let{palette:e}=Q();return(0,Y.jsxs)(`div`,{className:`relative w-24 h-24 flex items-center justify-center`,children:[(0,Y.jsx)(`div`,{className:`w-8 h-8 rounded-full ${e.bg} text-white flex items-center justify-center z-10 shadow-lg animate-pulse`,children:(0,Y.jsx)(U,{className:`w-4 h-4`})}),(0,Y.jsx)(`div`,{className:`absolute inset-0 rounded-full border border-indigo-500/20 animate-spin-slow`,children:(0,Y.jsx)(`div`,{className:`w-3 h-3 rounded-full bg-indigo-500 absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-xs`})})]})},Oa=()=>{let{getRadiusClass:e}=Q();return(0,Y.jsxs)(`div`,{className:`p-2 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 ${e(`control`)} flex items-center justify-between text-xs`,children:[(0,Y.jsx)(`span`,{className:`font-semibold text-indigo-900 dark:text-indigo-200`,children:`1 item selected`}),(0,Y.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,Y.jsx)(`button`,{className:`px-2 py-1 bg-white dark:bg-slate-800 rounded shadow-xs cursor-pointer`,children:`Duplicate`}),(0,Y.jsx)(`button`,{className:`px-2 py-1 bg-white dark:bg-slate-800 text-rose-600 rounded shadow-xs cursor-pointer`,children:`Delete`})]})]})},ka=()=>{let{getRadiusClass:e}=Q(),[t,n]=(0,a.useState)(!1);return(0,Y.jsxs)(`div`,{className:`w-44 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl ${e(`control`)} text-xs relative`,children:[(0,Y.jsxs)(`button`,{onMouseEnter:()=>n(!0),className:`w-full flex items-center justify-between px-2.5 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer`,children:[(0,Y.jsx)(`span`,{children:`Export`}),(0,Y.jsx)(T,{className:`w-3.5 h-3.5`})]}),t&&(0,Y.jsxs)(`div`,{onMouseLeave:()=>n(!1),className:`absolute top-0 left-full ml-1 w-36 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl ${e(`control`)}`,children:[(0,Y.jsx)(`div`,{className:`px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer`,children:`JSON Tokens`}),(0,Y.jsx)(`div`,{className:`px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer`,children:`CSS Variables`})]})]})},Aa=[{id:1,title:`Luminescence`,icon:U,desc:`Zero CLS dynamic radiance`},{id:2,title:`Tactile Physics`,icon:Ve,desc:`Spring kinematic velocity`},{id:3,title:`WCAG AAA`,icon:Me,desc:`High-contrast ARIA audited`}],ja=()=>{let{palette:e,getRadiusClass:t}=Q(),[n,r]=(0,a.useState)(0),[i,o]=(0,a.useState)(0),[s,c]=(0,a.useState)(!1),l=(0,a.useRef)(0),u=()=>r(e=>Math.max(0,e-1)),d=()=>r(e=>Math.min(Aa.length-1,e+1)),f=e=>{c(!0),l.current=e.clientX,e.currentTarget.setPointerCapture(e.pointerId)},p=e=>{if(!s)return;let t=e.clientX-l.current;o(t)},m=e=>{if(s){c(!1);try{e.currentTarget.releasePointerCapture(e.pointerId)}catch{}i>40?u():i<-40&&d(),o(0)}},_=Aa[n],v=_.icon;return(0,Y.jsxs)(`div`,{className:`w-full flex flex-col items-center gap-2 select-none`,children:[(0,Y.jsxs)(`div`,{onPointerDown:f,onPointerMove:p,onPointerUp:m,style:{transform:`translateX(${i}px)`},className:`w-full p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm cursor-grab active:cursor-grabbing transition-transform ${s?`duration-0`:`duration-200`} ${t(`card`)} flex items-center justify-between gap-3`,children:[(0,Y.jsx)(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),u()},disabled:n===0,className:`p-1 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer`,children:(0,Y.jsx)(h,{className:`w-3.5 h-3.5`})}),(0,Y.jsxs)(`div`,{className:`flex items-center gap-2 min-w-0 text-center`,children:[(0,Y.jsx)(`div`,{className:`w-6 h-6 rounded bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0`,children:(0,Y.jsx)(v,{className:`w-3.5 h-3.5`})}),(0,Y.jsxs)(`div`,{className:`min-w-0`,children:[(0,Y.jsx)(`span`,{className:`text-xs font-bold text-slate-900 dark:text-white block truncate`,children:_.title}),(0,Y.jsx)(`span`,{className:`text-[10px] text-slate-400 block truncate`,children:_.desc})]})]}),(0,Y.jsx)(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),d()},disabled:n===Aa.length-1,className:`p-1 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer`,children:(0,Y.jsx)(g,{className:`w-3.5 h-3.5`})})]}),(0,Y.jsx)(`div`,{className:`flex items-center gap-1.5`,children:Aa.map((e,t)=>(0,Y.jsx)(`button`,{type:`button`,onClick:()=>r(t),className:`h-1.5 rounded-full transition-all cursor-pointer ${n===t?`w-4 bg-indigo-600`:`w-1.5 bg-slate-300 dark:bg-slate-700`}`},t))}),(0,Y.jsx)(`span`,{className:`text-[9px] font-mono text-slate-400`,children:`Swipe or drag left / right`})]})},Ma=t({AdaptiveNavbar:()=>ua,AnimatedSidebar:()=>fa,AnimatedTabs:()=>xa,BreadcrumbTrail:()=>_a,CircularNavigation:()=>Ta,CollapsibleNavigation:()=>ma,CommandNavigation:()=>ga,ContextNavigation:()=>Oa,ExpandableSidebar:()=>pa,FloatingDock:()=>la,FloatingTabBar:()=>wa,GestureNavigation:()=>ja,MagneticDock:()=>ca,MegaMenu:()=>ha,MorphingNavbar:()=>da,MultiLevelMenu:()=>ka,NavigationRail:()=>Ca,OrbitalMenu:()=>Da,RadialMenu:()=>Ea,SlidingTabs:()=>Sa}),Na=t({default:()=>Pa}),Pa=`// @jxui/react v3.0.0 — category03Navigation (JXUI v3.0 Unified Component Suite)
// JXUI Category 3: Navigation & Wayfinding (Compatibility Barrel)
// All individual components are located in ./navigation/

export * from './navigation';
`,Fa=({className:e=``,children:t,...n})=>{let{palette:r,getRadiusClass:i}=Q();return(0,Y.jsxs)(`div`,{className:`relative w-full`,children:[(0,Y.jsx)(`input`,{className:`w-full min-h-[44px] px-3.5 py-2 text-sm bg-white dark:bg-[#111827] border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white ${i(`control`)} focus:outline-none focus:ring-2 focus:ring-[var(--jx-accent-halo)] transition-all touch-manipulation ${e}`,...n}),(0,Y.jsx)(`div`,{className:`absolute bottom-0 inset-x-2 h-0.5 ${r.bg} opacity-0 focus-within:opacity-100 transition-opacity`})]})},Ia=({label:e=`Work Email`,value:t=``,onChange:n})=>{let[r,i]=(0,a.useState)(t),[o,s]=(0,a.useState)(!1),c=o||r.length>0,{getRadiusClass:l}=Q();return(0,Y.jsxs)(`div`,{className:`relative w-full`,children:[(0,Y.jsx)(`label`,{className:`absolute left-3 transition-all duration-200 pointer-events-none text-slate-400 ${c?`top-1 text-[10px] font-bold text-indigo-600 dark:text-indigo-400`:`top-2.5 text-xs`}`,children:e}),(0,Y.jsx)(`input`,{type:`text`,value:r,onFocus:()=>s(!0),onBlur:()=>s(!1),onChange:e=>{i(e.target.value),n?.(e)},className:`w-full pt-4 pb-1.5 px-3 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 ${l(`control`)}`})]})},La=()=>{let[e,t]=(0,a.useState)(!1),{getRadiusClass:n}=Q();return(0,Y.jsxs)(`div`,{className:`flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 border ${e?`border-indigo-500 shadow-sm`:`border-slate-300 dark:border-slate-700`} ${n(`control`)} transition-all`,children:[(0,Y.jsx)(U,{className:`w-4 h-4 transition-transform ${e?`text-indigo-500 scale-110`:`text-slate-400`}`}),(0,Y.jsx)(`input`,{onFocus:()=>t(!0),onBlur:()=>t(!1),placeholder:`Animated focus reaction...`,className:`w-full bg-transparent text-xs text-slate-900 dark:text-white focus:outline-none`})]})},Ra=()=>{let{getRadiusClass:e}=Q();return(0,Y.jsx)(`input`,{placeholder:`Glassmorphic input...`,className:`w-full px-3.5 py-2 text-xs bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/40 dark:border-slate-700/60 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 ${e(`control`)}`})},za=()=>{let[e,t]=(0,a.useState)(!1),{getRadiusClass:n}=Q();return(0,Y.jsx)(`div`,{className:`w-full`,children:e?(0,Y.jsx)(`textarea`,{autoFocus:!0,onBlur:()=>t(!1),placeholder:`Morphing into multi-line markdown...`,rows:3,className:`w-full p-2.5 text-xs bg-white dark:bg-slate-900 border border-indigo-500 rounded-lg text-slate-900 dark:text-white focus:outline-none ${n(`control`)}`}):(0,Y.jsx)(`input`,{onFocus:()=>t(!0),placeholder:`Click to morph into multi-line textarea...`,className:`w-full px-3 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white cursor-pointer ${n(`control`)}`})})},Ba=({onSearch:e})=>{let[t,n]=(0,a.useState)(``),{getRadiusClass:r}=Q();return(0,Y.jsxs)(`div`,{className:`relative flex items-center px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg ${r(`control`)}`,children:[(0,Y.jsx)(V,{className:`w-3.5 h-3.5 text-slate-400 mr-2`}),(0,Y.jsx)(`input`,{value:t,onChange:t=>{n(t.target.value),e?.(t.target.value)},placeholder:`Search components...`,className:`w-full bg-transparent text-xs text-slate-900 dark:text-white focus:outline-none`}),t&&(0,Y.jsx)(`button`,{onClick:()=>n(``),className:`p-0.5 text-slate-400 hover:text-slate-600`,children:(0,Y.jsx)(W,{className:`w-3 h-3`})})]})},Va=()=>{let{palette:e,getRadiusClass:t}=Q();return(0,Y.jsxs)(`div`,{className:`flex flex-col gap-1.5 w-full`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 ${t(`control`)}`,children:[(0,Y.jsx)(V,{className:`w-4 h-4 text-indigo-500`}),(0,Y.jsx)(`input`,{placeholder:`Search with smart suggestions...`,className:`w-full bg-transparent text-xs focus:outline-none text-slate-900 dark:text-white`})]}),(0,Y.jsxs)(`div`,{className:`flex items-center gap-1.5 text-[10px] text-slate-500`,children:[(0,Y.jsx)(`span`,{children:`Suggested:`}),[`Button`,`DataGrid`,`Glass`].map(e=>(0,Y.jsx)(`span`,{className:`px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded cursor-pointer hover:bg-slate-200`,children:e},e))]})]})},Ha=()=>{let{getRadiusClass:e}=Q();return(0,Y.jsxs)(`div`,{className:`flex items-center gap-2 px-3 py-2 bg-slate-950 text-emerald-400 font-mono text-xs ${e(`control`)}`,children:[(0,Y.jsx)(Pe,{className:`w-3.5 h-3.5 text-emerald-500`}),(0,Y.jsx)(`span`,{className:`text-emerald-500`,children:`$`}),(0,Y.jsx)(`input`,{placeholder:`npx @jxui/cli add button`,className:`w-full bg-transparent focus:outline-none placeholder-slate-600 text-white`})]})},Ua=()=>{let[e,t]=(0,a.useState)(``),[n,r]=(0,a.useState)(!1),i=[`React 19`,`Next.js 15`,`Vite 8`,`Tailwind v4`,`TypeScript 5.8`].filter(t=>t.toLowerCase().includes(e.toLowerCase())),{getRadiusClass:o}=Q();return(0,Y.jsxs)(`div`,{className:`relative w-full`,children:[(0,Y.jsx)(`input`,{value:e,onFocus:()=>r(!0),onChange:e=>t(e.target.value),placeholder:`Type framework (e.g. React)...`,className:`w-full px-3 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none ${o(`control`)}`}),n&&i.length>0&&(0,Y.jsx)(`div`,{className:`absolute top-full mt-1 inset-x-0 z-30 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg rounded-lg py-1 ${o(`control`)}`,children:i.map(e=>(0,Y.jsx)(`div`,{onMouseDown:()=>{t(e),r(!1)},className:`px-3 py-1.5 text-xs text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer`,children:e},e))})]})},Wa=()=>{let[e,t]=(0,a.useState)([`TypeScript`,`Tailwind`]),n=[`React`,`TypeScript`,`Tailwind`,`Motion`,`Vite`],{palette:r}=Q();return(0,Y.jsxs)(`div`,{className:`flex flex-wrap gap-1.5 p-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg`,children:[e.map(n=>(0,Y.jsxs)(`span`,{className:`px-2 py-0.5 text-[11px] font-semibold text-white ${r.bg} rounded-full flex items-center gap-1`,children:[n,(0,Y.jsx)(`button`,{onClick:()=>t(e.filter(e=>e!==n)),children:(0,Y.jsx)(W,{className:`w-3 h-3`})})]},n)),(0,Y.jsxs)(`select`,{onChange:n=>{n.target.value&&!e.includes(n.target.value)&&t([...e,n.target.value])},className:`text-xs bg-transparent text-slate-500 focus:outline-none cursor-pointer`,children:[(0,Y.jsx)(`option`,{value:``,children:`+ Add Tag`}),n.filter(t=>!e.includes(t)).map(e=>(0,Y.jsx)(`option`,{value:e,children:e},e))]})]})},Ga=()=>{let[e,t]=(0,a.useState)([`v3.0`,`stable`]),[n,r]=(0,a.useState)(``);return(0,Y.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1.5 p-2 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg`,children:[e.map(n=>(0,Y.jsxs)(`span`,{className:`px-2 py-0.5 text-xs bg-slate-200 dark:bg-slate-800 rounded font-mono flex items-center gap-1`,children:[n,(0,Y.jsx)(`button`,{onClick:()=>t(e.filter(e=>e!==n)),children:(0,Y.jsx)(W,{className:`w-3 h-3`})})]},n)),(0,Y.jsx)(`input`,{value:n,onChange:e=>r(e.target.value),onKeyDown:i=>{i.key===`Enter`&&n.trim()&&(t([...e,n.trim()]),r(``))},placeholder:`Type tag & Enter...`,className:`text-xs bg-transparent focus:outline-none text-slate-900 dark:text-white min-w-[120px]`})]})},Ka=({length:e=6,onComplete:t,className:n=``})=>{let{getRadiusClass:r}=Q(),[i,o]=(0,a.useState)(Array(e).fill(``)),s=(0,a.useRef)([]),c=(n,r)=>{let a=n.slice(-1),c=[...i];c[r]=a,o(c),a&&r<e-1&&s.current[r+1]?.focus(),c.every(e=>e!==``)&&t?.(c.join(``))},l=(t,n)=>{t.key===`Backspace`&&!i[n]&&n>0||t.key===`ArrowLeft`&&n>0?s.current[n-1]?.focus():t.key===`ArrowRight`&&n<e-1&&s.current[n+1]?.focus()};return(0,Y.jsx)(`div`,{className:`flex items-center gap-2 ${n}`,children:i.map((e,t)=>(0,Y.jsx)(`input`,{ref:e=>{s.current[t]=e},type:`text`,inputMode:`numeric`,maxLength:1,value:e,onChange:e=>c(e.target.value,t),onKeyDown:e=>l(e,t),className:`min-h-[44px] min-w-[44px] w-11 h-11 text-center font-mono text-base font-bold bg-white dark:bg-[#111827] border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-[var(--jx-accent-halo)] transition-all touch-manipulation ${r(`control`)}`},t))})},qa=({length:e=4,onComplete:t,mask:n=!0})=>{let{palette:r,getRadiusClass:i}=Q(),[o,s]=(0,a.useState)(Array(e).fill(``)),c=(0,a.useRef)([]),l=(n,r)=>{let i=r.slice(-1);if(!/^\d*$/.test(i))return;let a=[...o];a[n]=i,s(a),i&&n<e-1&&c.current[n+1]?.focus(),a.every(e=>e!==``)&&t?.(a.join(``))},u=(e,t)=>{t.key===`Backspace`&&!o[e]&&e>0&&c.current[e-1]?.focus()};return(0,Y.jsx)(`div`,{className:`flex items-center gap-2.5`,onPaste:n=>{n.preventDefault();let r=n.clipboardData.getData(`text`).replace(/\D/g,``).slice(0,e);if(!r)return;let i=[...o];for(let e=0;e<r.length;e++)i[e]=r[e];s(i);let a=Math.min(r.length,e-1);c.current[a]?.focus(),i.every(e=>e!==``)&&t?.(i.join(``))},children:o.map((e,t)=>(0,Y.jsxs)(`div`,{className:`relative flex items-center justify-center`,children:[(0,Y.jsx)(`input`,{ref:e=>{c.current[t]=e},type:`text`,inputMode:`numeric`,maxLength:1,value:e,onChange:e=>l(t,e.target.value),onKeyDown:e=>u(t,e),"aria-label":`PIN Digit ${t+1}`,className:`min-h-[44px] min-w-[44px] w-11 h-11 text-center font-mono text-base font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-[#111827] border ${e?`border-indigo-500 ring-2 ring-[var(--jx-accent-halo)]`:`border-slate-300 dark:border-slate-700`} ${i(`control`)} focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-[var(--jx-accent-halo)] transition-all touch-manipulation`}),n&&e&&(0,Y.jsx)(`div`,{className:`absolute pointer-events-none w-2.5 h-2.5 rounded-full bg-indigo-600`})]},t))})},Ja=()=>{let[e,t]=(0,a.useState)(`Secret!2026`),n=e.length,r=Math.min(100,n*10);return(0,Y.jsxs)(`div`,{className:`w-full flex flex-col gap-1.5`,children:[(0,Y.jsx)(`input`,{type:`password`,value:e,onChange:e=>t(e.target.value),className:`w-full px-3 py-1.5 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white`}),(0,Y.jsx)(`div`,{className:`w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden`,children:(0,Y.jsx)(`div`,{style:{width:`${r}%`},className:`h-full ${r>70?`bg-emerald-500`:r>40?`bg-amber-500`:`bg-rose-500`}`})}),(0,Y.jsxs)(`span`,{className:`text-[10px] text-slate-500 font-mono`,children:[`Entropy: `,r,`% Strong`]})]})},Ya=()=>{let[e,t]=(0,a.useState)(!1);return(0,Y.jsxs)(`div`,{className:`relative flex items-center w-full`,children:[(0,Y.jsx)(`input`,{type:e?`text`:`password`,defaultValue:`TactileDesignTokens`,className:`w-full px-3 py-1.5 pr-8 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none`}),(0,Y.jsx)(`button`,{onClick:()=>t(!e),className:`absolute right-2.5 text-slate-400 hover:text-slate-600`,children:e?(0,Y.jsx)(N,{className:`w-3.5 h-3.5`}):(0,Y.jsx)(P,{className:`w-3.5 h-3.5`})})]})},Xa=()=>{let[e,t]=(0,a.useState)(`#4f46e5`);return(0,Y.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,Y.jsx)(`input`,{type:`color`,value:e,onChange:e=>t(e.target.value),className:`w-8 h-8 rounded border-none cursor-pointer`}),(0,Y.jsx)(`span`,{className:`font-mono text-xs text-slate-700 dark:text-slate-300`,children:e})]})},Za=()=>{let{getRadiusClass:e,pushToast:t}=Q(),[n,r]=(0,a.useState)(`#6366f1`),[i,o]=(0,a.useState)(`#ec4899`),[s,c]=(0,a.useState)(!1),l=[{from:`#6366f1`,to:`#ec4899`},{from:`#3b82f6`,to:`#10b981`},{from:`#f59e0b`,to:`#ef4444`},{from:`#8b5cf6`,to:`#06b6d4`}],u=`linear-gradient(135deg, ${n}, ${i})`;return(0,Y.jsxs)(`div`,{className:`flex flex-col gap-2.5 w-full`,children:[(0,Y.jsx)(`div`,{className:`w-full h-8 rounded-lg shadow-sm border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-end px-2`,style:{background:u},children:(0,Y.jsxs)(`button`,{type:`button`,onClick:()=>{navigator.clipboard?.writeText(`background: ${u};`),c(!0),t({title:`Copied Gradient CSS`,description:`background: ${u}`,variant:`success`}),setTimeout(()=>c(!1),2e3)},className:`p-1 rounded bg-black/40 text-white hover:bg-black/60 transition-colors text-[10px] flex items-center gap-1 cursor-pointer`,children:[s?(0,Y.jsx)(C,{className:`w-3 h-3 text-emerald-400`}):(0,Y.jsx)(j,{className:`w-3 h-3`}),(0,Y.jsx)(`span`,{children:`CSS`})]})}),(0,Y.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center gap-2 text-xs font-mono`,children:[(0,Y.jsxs)(`label`,{className:`flex items-center gap-1 cursor-pointer`,children:[(0,Y.jsx)(`input`,{type:`color`,value:n,onChange:e=>r(e.target.value),className:`w-5 h-5 rounded cursor-pointer border-0 p-0`}),(0,Y.jsx)(`span`,{className:`text-[11px] text-slate-500`,children:n})]}),(0,Y.jsx)(`span`,{className:`text-slate-400`,children:`→`}),(0,Y.jsxs)(`label`,{className:`flex items-center gap-1 cursor-pointer`,children:[(0,Y.jsx)(`input`,{type:`color`,value:i,onChange:e=>o(e.target.value),className:`w-5 h-5 rounded cursor-pointer border-0 p-0`}),(0,Y.jsx)(`span`,{className:`text-[11px] text-slate-500`,children:i})]})]}),(0,Y.jsx)(`div`,{className:`flex items-center gap-1`,children:l.map((e,t)=>(0,Y.jsx)(`button`,{type:`button`,onClick:()=>{r(e.from),o(e.to)},style:{background:`linear-gradient(135deg, ${e.from}, ${e.to})`},className:`w-4 h-4 rounded-full border border-white/40 shadow-xs hover:scale-125 transition-transform cursor-pointer`},t))})]})]})},Qa=()=>{let[e,t]=(0,a.useState)(48);return(0,Y.jsxs)(`div`,{className:`flex items-center gap-3 w-full`,children:[(0,Y.jsx)(`input`,{type:`range`,min:0,max:100,value:e,onChange:e=>t(Number(e.target.value)),className:`w-full accent-indigo-600`}),(0,Y.jsxs)(`span`,{className:`font-mono text-xs text-slate-600 dark:text-slate-400 w-8`,children:[e,`%`]})]})},$a=()=>(0,Y.jsxs)(`div`,{className:`flex items-center gap-2 w-full`,children:[(0,Y.jsx)(`input`,{type:`range`,step:25,defaultValue:50,className:`w-full accent-indigo-600 cursor-pointer`}),(0,Y.jsx)(`span`,{className:`text-[10px] font-mono text-slate-500`,children:`Snap 25%`})]}),eo=()=>{let[e,t]=(0,a.useState)(1);return(0,Y.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center gap-2 text-xs font-semibold`,children:[(0,Y.jsx)(`span`,{className:`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${e===1?`bg-indigo-600 text-white`:`bg-slate-200`}`,children:`1`}),(0,Y.jsx)(`span`,{className:`text-slate-500`,children:`Account`}),(0,Y.jsx)(T,{className:`w-3.5 h-3.5 text-slate-400`}),(0,Y.jsx)(`span`,{className:`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${e===2?`bg-indigo-600 text-white`:`bg-slate-200`}`,children:`2`}),(0,Y.jsx)(`span`,{className:`text-slate-500`,children:`Billing`})]}),(0,Y.jsx)(`button`,{onClick:()=>t(e===1?2:1),className:`text-xs text-indigo-600 hover:underline text-left`,children:e===1?`Next: Billing →`:`← Back to Account`})]})},to=[{id:`fullName`,label:`Full Name`,type:`text`,placeholder:`Jane Doe`,required:!0},{id:`workEmail`,label:`Work Email`,type:`email`,placeholder:`jane@company.com`,required:!0},{id:`tier`,label:`Role Tier`,type:`select`,options:[`Engineering`,`Design`,`Product`,`Executive`]},{id:`agreed`,label:`Opt in to design system releases`,type:`checkbox`}],no=()=>{let{palette:e,getRadiusClass:t,pushToast:n}=Q(),[r,i]=(0,a.useState)({fullName:``,workEmail:``,tier:`Engineering`,agreed:!0}),[o,s]=(0,a.useState)(!1);return(0,Y.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),s(!0),n({title:`Schema Form Validated`,description:`Payload: ${JSON.stringify(r)}`,variant:`success`}),setTimeout(()=>s(!1),2500)},className:`w-full flex flex-col gap-2.5 text-xs text-left`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-1.5 mb-1`,children:[(0,Y.jsxs)(`span`,{className:`font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5`,children:[(0,Y.jsx)(U,{className:`w-3.5 h-3.5 text-indigo-500`}),(0,Y.jsx)(`span`,{children:`Dynamic Schema Engine`})]}),(0,Y.jsx)(`span`,{className:`font-mono text-[10px] text-slate-400`,children:`4 fields`})]}),to.map(e=>e.type===`checkbox`?(0,Y.jsxs)(`label`,{className:`flex items-center gap-2 cursor-pointer pt-0.5`,children:[(0,Y.jsx)(`input`,{type:`checkbox`,checked:!!r[e.id],onChange:t=>i({...r,[e.id]:t.target.checked}),className:`w-3.5 h-3.5 accent-indigo-600 rounded`}),(0,Y.jsx)(`span`,{className:`text-[11px] text-slate-600 dark:text-slate-400`,children:e.label})]},e.id):e.type===`select`?(0,Y.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,Y.jsx)(`label`,{className:`text-[11px] font-medium text-slate-600 dark:text-slate-400`,children:e.label}),(0,Y.jsx)(`select`,{value:r[e.id],onChange:t=>i({...r,[e.id]:t.target.value}),className:`px-2.5 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white ${t(`control`)} text-xs focus:outline-none focus:border-indigo-500`,children:e.options?.map(e=>(0,Y.jsx)(`option`,{value:e,children:e},e))})]},e.id):(0,Y.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,Y.jsx)(`label`,{className:`text-[11px] font-medium text-slate-600 dark:text-slate-400`,children:e.label}),(0,Y.jsx)(`input`,{type:e.type,value:r[e.id],placeholder:e.placeholder,onChange:t=>i({...r,[e.id]:t.target.value}),className:`px-2.5 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white ${t(`control`)} text-xs focus:outline-none focus:border-indigo-500`})]},e.id)),(0,Y.jsxs)(`button`,{type:`submit`,className:`mt-1 py-1.5 px-3 rounded-lg text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${o?`bg-emerald-600`:`bg-indigo-600 hover:bg-indigo-700`}`,children:[o?(0,Y.jsx)(C,{className:`w-3.5 h-3.5`}):(0,Y.jsx)(ke,{className:`w-3.5 h-3.5`}),(0,Y.jsx)(`span`,{children:o?`Validated`:`Submit Schema`})]})]})},ro=t({AnimatedInput:()=>La,AutoComplete:()=>Ua,CircularSlider:()=>At,ColorPicker:()=>Xa,CommandInput:()=>Ha,DualRangeSlider:()=>kt,DynamicFormBuilder:()=>no,FloatingLabelInput:()=>Ia,FormGlassInput:()=>Ra,FormWizard:()=>eo,GradientPicker:()=>Za,LiquidInput:()=>Fa,MagneticSlider:()=>$a,MorphingInput:()=>za,MultiSelect:()=>Wa,OTPInput:()=>Ka,PasswordReveal:()=>Ya,PasswordStrength:()=>Ja,PinInput:()=>qa,RangeSlider:()=>Qa,SearchInput:()=>Ba,SignaturePad:()=>Ot,SmartSearch:()=>Va,TagInput:()=>Ga,TokenInput:()=>jt}),io=t({default:()=>ao}),ao=`// @jxui/react v3.0.0 — category04Inputs (JXUI v3.0 Unified Component Suite)
// JXUI Category 4: Inputs & Forms (Compatibility Barrel)
// All individual components are located in ./inputs/

export * from './inputs';
`,oo=()=>{let[e,t]=(0,a.useState)(!0),{palette:n}=Q();return(0,Y.jsx)(`button`,{onClick:()=>t(!e),className:`relative w-12 h-6.5 rounded-full transition-colors duration-300 p-0.5 cursor-pointer ${e?n.bg:`bg-slate-300 dark:bg-slate-700`}`,children:(0,Y.jsx)(`div`,{className:`w-5.5 h-5.5 bg-white rounded-full shadow-md transition-transform duration-300 transform ${e?`translate-x-5.5`:`translate-x-0`}`})})},so=()=>{let[e,t]=(0,a.useState)(!1),{palette:n}=Q();return(0,Y.jsx)(`button`,{onClick:()=>t(!e),className:`w-11 h-6 rounded-full flex items-center p-0.5 transition-colors cursor-pointer ${e?n.bg:`bg-slate-300 dark:bg-slate-700`}`,children:(0,Y.jsx)(`div`,{className:`w-5 h-5 bg-white rounded-full flex items-center justify-center text-slate-800 shadow-xs transition-transform ${e?`translate-x-5`:`translate-x-0`}`,children:e?(0,Y.jsx)(C,{className:`w-3 h-3 text-indigo-600`}):(0,Y.jsx)(W,{className:`w-3 h-3 text-slate-400`})})})},co=()=>{let[e,t]=(0,a.useState)(!1);return(0,Y.jsx)(`button`,{type:`button`,onClick:()=>t(!e),role:`switch`,"aria-checked":e,className:`relative w-14 h-7 bg-slate-200 dark:bg-slate-800 rounded-full p-1 cursor-pointer`,children:(0,Y.jsx)(`div`,{className:`w-5 h-5 bg-white dark:bg-slate-950 rounded-full shadow-sm transition-transform duration-300 ${e?`translate-x-7`:`translate-x-0`}`})})},lo=()=>{let[e,t]=(0,a.useState)(!0),{palette:n}=Q();return(0,Y.jsx)(`button`,{onClick:()=>t(!e),className:`w-5 h-5 rounded border flex items-center justify-center transition-all cursor-pointer ${e?`${n.bg} border-transparent text-white`:`border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900`}`,children:e&&(0,Y.jsx)(C,{className:`w-3.5 h-3.5 animate-scale-in`})})},uo=()=>{let[e,t]=(0,a.useState)(!0);return(0,Y.jsx)(`button`,{onClick:()=>t(!e),className:`w-5 h-5 rounded bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/50 dark:border-slate-700 flex items-center justify-center cursor-pointer`,children:e&&(0,Y.jsx)(`span`,{className:`w-2.5 h-2.5 bg-indigo-500 rounded-sm`})})},fo=()=>{let[e,t]=(0,a.useState)(!1),{palette:n}=Q();return(0,Y.jsx)(`button`,{onClick:()=>t(!e),className:`w-5 h-5 rounded-full border flex items-center justify-center cursor-pointer ${e?`${n.bg} border-transparent text-white`:`border-slate-300 dark:border-slate-700`}`,children:e&&(0,Y.jsx)(`div`,{className:`w-2 h-2 bg-white rounded-full`})})},po=()=>{let[e,t]=(0,a.useState)(!0);return(0,Y.jsx)(`button`,{type:`button`,onClick:()=>t(!e),role:`radio`,"aria-checked":e,className:`w-5 h-5 rounded-full border-2 border-indigo-600 flex items-center justify-center cursor-pointer`,children:e&&(0,Y.jsx)(`div`,{className:`w-2.5 h-2.5 bg-indigo-600 rounded-full animate-scale-in`})})},mo=()=>{let[e,t]=(0,a.useState)(`Daily`),{palette:n,getRadiusClass:r}=Q();return(0,Y.jsx)(`div`,{className:`inline-flex p-1 bg-slate-100 dark:bg-slate-800 ${r(`pill`)}`,children:[`Daily`,`Weekly`,`Monthly`].map(r=>(0,Y.jsx)(`button`,{onClick:()=>t(r),className:`px-3 py-1 text-xs font-semibold rounded-full cursor-pointer transition-all ${e===r?`${n.bg} text-white shadow-xs`:`text-slate-600 dark:text-slate-400`}`,children:r},r))})},ho=()=>{let[e,t]=(0,a.useState)(`Dev`),{palette:n}=Q();return(0,Y.jsx)(`div`,{className:`flex border border-slate-300 dark:border-slate-700 rounded-lg p-0.5 text-xs font-medium`,children:[`Dev`,`Stage`,`Prod`].map(r=>(0,Y.jsx)(`button`,{onClick:()=>t(r),className:`px-3 py-1 rounded-md transition-all cursor-pointer ${e===r?`${n.bg} text-white`:`text-slate-500`}`,children:r},r))})},go=()=>{let[e,t]=(0,a.useState)(!0),{palette:n,getRadiusClass:r}=Q();return(0,Y.jsxs)(`div`,{onClick:()=>t(!e),className:`p-3 border-2 cursor-pointer transition-all ${r(`card`)} ${e?`border-indigo-600 bg-indigo-50/40 dark:bg-indigo-950/30`:`border-slate-200 dark:border-slate-800`}`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,Y.jsx)(`span`,{className:`text-xs font-bold text-slate-900 dark:text-white`,children:`Enterprise Tier`}),e&&(0,Y.jsx)(C,{className:`w-4 h-4 text-indigo-600`})]}),(0,Y.jsx)(`p`,{className:`text-[11px] text-slate-500 mt-1`,children:`Unlimited telemetry events`})]})},_o=()=>{let[e,t]=(0,a.useState)([0]);return(0,Y.jsx)(`div`,{className:`grid grid-cols-3 gap-2`,children:[1,2,3].map((n,r)=>(0,Y.jsxs)(`button`,{onClick:()=>t(e.includes(r)?e.filter(e=>e!==r):[...e,r]),className:`p-2 text-xs font-bold rounded-lg border text-center cursor-pointer ${e.includes(r)?`border-indigo-600 bg-indigo-50 dark:bg-indigo-950 text-indigo-600`:`border-slate-300 dark:border-slate-700`}`,children:[`Plan `,n]},n))})},vo=()=>{let[e,t]=(0,a.useState)(0);return(0,Y.jsxs)(`button`,{onClick:()=>t(e=>(e+1)%3),className:`px-3 py-1.5 text-xs font-semibold bg-slate-100 dark:bg-slate-800 rounded-lg cursor-pointer`,children:[`Mode: `,(0,Y.jsx)(`span`,{className:`text-indigo-600 dark:text-indigo-400 font-bold`,children:[`Off`,`Eco`,`Turbo`][e]})]})},yo=()=>{let[e,t]=(0,a.useState)(`indeterminate`);return(0,Y.jsxs)(`button`,{onClick:()=>{t(e===`unchecked`?`indeterminate`:e===`indeterminate`?`checked`:`unchecked`)},className:`w-5 h-5 rounded border border-slate-300 dark:border-slate-700 flex items-center justify-center cursor-pointer`,children:[e===`checked`&&(0,Y.jsx)(C,{className:`w-3.5 h-3.5 text-indigo-600`}),e===`indeterminate`&&(0,Y.jsx)(_e,{className:`w-3.5 h-3.5 text-amber-500`})]})},bo=()=>(0,Y.jsx)(`div`,{className:`px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs text-slate-500`,children:`Drag handle left / right to toggle`}),xo=()=>{let{palette:e,getRadiusClass:t}=Q();return(0,Y.jsxs)(`div`,{className:`inline-flex items-center gap-3 px-4 py-2 bg-slate-900 text-white shadow-2xl ${t(`pill`)} text-xs`,children:[(0,Y.jsx)(`span`,{className:`font-semibold text-indigo-400`,children:`3 selected`}),(0,Y.jsxs)(`button`,{className:`flex items-center gap-1 hover:text-slate-300 cursor-pointer`,children:[(0,Y.jsx)(j,{className:`w-3.5 h-3.5`}),` Duplicate`]}),(0,Y.jsxs)(`button`,{className:`flex items-center gap-1 text-rose-400 hover:text-rose-300 cursor-pointer`,children:[(0,Y.jsx)(Le,{className:`w-3.5 h-3.5`}),` Delete`]})]})},So=t({AnimatedCheckbox:()=>lo,AnimatedRadio:()=>po,CircularCheckbox:()=>fo,FloatingSelectionBar:()=>xo,GestureSelector:()=>bo,GlassCheckbox:()=>uo,LiquidSwitch:()=>oo,MagneticSwitch:()=>co,MorphSwitch:()=>so,MultiStateToggle:()=>vo,SegmentedControl:()=>mo,SelectableCard:()=>go,SelectionGrid:()=>_o,SlidingSegmentedControl:()=>ho,TriStateToggle:()=>yo}),Co=t({default:()=>wo}),wo=`// @jxui/react v3.0.0 — category05Toggles (JXUI v3.0 Unified Component Suite)
// JXUI Category 5: Toggles & Selection (Compatibility Barrel)
// All individual components are located in ./toggles/

export * from './toggles';
`,To=()=>{let[e,t]=(0,a.useState)(!1),{palette:n,getRadiusClass:r}=Q();return(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`button`,{onClick:()=>t(!0),className:`px-4 py-2 text-xs font-semibold text-white ${n.bg} ${r(`control`)} cursor-pointer`,children:`Open Morphing Modal`}),e&&(0,Y.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4`,children:(0,Y.jsxs)(`div`,{className:`w-full max-w-sm p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl ${r(`card`)} animate-scale-in`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800`,children:[(0,Y.jsx)(`span`,{className:`font-bold text-xs text-slate-900 dark:text-white`,children:`Morphing Surface`}),(0,Y.jsx)(`button`,{onClick:()=>t(!1),children:(0,Y.jsx)(W,{className:`w-4 h-4 text-slate-400`})})]}),(0,Y.jsx)(`p`,{className:`text-xs text-slate-600 dark:text-slate-400 py-3`,children:`Zero-shift geometric expansion from trigger coordinates.`})]})})]})},Eo=()=>(0,Y.jsxs)(`div`,{className:`p-4 bg-white/80 dark:bg-[#111827]/80 backdrop-blur-xl border border-[var(--jx-accent-halo)] jx-elevation-2 rounded-xl text-xs`,children:[(0,Y.jsx)(`span`,{className:`font-bold text-indigo-600 dark:text-indigo-400`,children:`Liquid Viscous Dialog`}),(0,Y.jsx)(`p`,{className:`text-slate-500 dark:text-slate-400 mt-1`,children:`Simulated fluid surface tension.`})]}),Do=()=>(0,Y.jsxs)(`div`,{className:`p-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-2xl border border-white/60 dark:border-slate-700/60 rounded-xl shadow-xl text-xs`,children:[(0,Y.jsx)(`span`,{className:`font-bold text-slate-900 dark:text-white`,children:`Specular Glass Dialog`}),(0,Y.jsx)(`p`,{className:`text-slate-500 mt-1`,children:`Multi-layered glass reflection profile.`})]}),Oo=()=>(0,Y.jsxs)(`div`,{className:`p-4 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl shadow-lg text-xs animate-bounce-subtle`,children:[(0,Y.jsx)(`span`,{className:`font-bold text-slate-900 dark:text-white`,children:`Spring Physics Modal`}),(0,Y.jsx)(`p`,{className:`text-slate-500 mt-1`,children:`Cubic bezier spring release with damping.`})]}),ko=()=>(0,Y.jsxs)(`div`,{className:`p-3 bg-slate-100 dark:bg-slate-800 border rounded-lg text-xs flex items-center justify-between`,children:[(0,Y.jsx)(`span`,{children:`Fullscreen Viewport Overlay`}),(0,Y.jsx)(`kbd`,{className:`text-[10px] bg-white dark:bg-slate-700 px-1 rounded`,children:`ESC`})]}),Ao=()=>(0,Y.jsxs)(`div`,{className:`w-56 p-3 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 rounded-lg text-xs`,children:[(0,Y.jsx)(`span`,{className:`font-bold`,children:`Edge Slide Drawer`}),(0,Y.jsx)(`p`,{className:`text-slate-500 mt-1`,children:`Right-anchored panel.`})]}),jo=()=>(0,Y.jsx)(`div`,{className:`p-3 bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-lg text-xs`,children:(0,Y.jsx)(`span`,{className:`font-semibold text-indigo-600`,children:`Magnetic Snap Drawer (30% / 60% / 100%)`})}),Mo=()=>(0,Y.jsxs)(`div`,{className:`w-64 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-t-2xl shadow-xl flex flex-col items-center text-xs`,children:[(0,Y.jsx)(`div`,{className:`w-10 h-1 bg-slate-300 dark:bg-slate-700 rounded-full mb-2`}),(0,Y.jsx)(`span`,{children:`Mobile Bottom Sheet`})]}),No=()=>(0,Y.jsxs)(`div`,{className:`w-64 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-t-2xl shadow-xl flex flex-col items-center text-xs`,children:[(0,Y.jsx)(`div`,{className:`w-12 h-1.5 bg-indigo-400 rounded-full mb-2`}),(0,Y.jsx)(`span`,{children:`Drag down to dismiss`})]}),Po=()=>(0,Y.jsxs)(`div`,{className:`w-64 p-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl shadow-2xl text-xs`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center justify-between pb-1.5 border-b border-slate-200 dark:border-slate-800`,children:[(0,Y.jsx)(`span`,{className:`font-bold`,children:`Floating Widget`}),(0,Y.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-emerald-500`})]}),(0,Y.jsx)(`p`,{className:`text-slate-500 mt-1`,children:`Draggable window surface.`})]}),Fo=()=>(0,Y.jsxs)(`div`,{className:`relative w-48 h-24 p-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs`,children:[(0,Y.jsx)(`span`,{children:`Resizable Panel`}),(0,Y.jsx)(`div`,{className:`absolute bottom-1 right-1 w-2.5 h-2.5 border-r-2 border-b-2 border-slate-400 cursor-nwse-resize`})]}),Io=()=>(0,Y.jsxs)(`div`,{className:`relative p-3 bg-slate-900 text-white rounded-lg text-xs flex items-center justify-between`,children:[(0,Y.jsx)(`span`,{children:`Spotlight Focus Zone`}),(0,Y.jsx)(`span`,{className:`text-indigo-400 font-mono text-[10px]`,children:`Backdrop Dim 75%`})]}),Lo=()=>(0,Y.jsxs)(`div`,{className:`w-40 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-xl text-xs flex flex-col gap-0.5`,children:[(0,Y.jsx)(`div`,{className:`px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer`,children:`Inspect Element`}),(0,Y.jsx)(`div`,{className:`px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer`,children:`Copy Token CSS`})]}),Ro=()=>(0,Y.jsx)(`div`,{className:`w-16 h-16 rounded-full border-2 border-indigo-500/40 flex items-center justify-center text-[10px] text-slate-500 font-bold`,children:`Radial Menu`}),zo=()=>(0,Y.jsx)(`div`,{className:`p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-md text-xs`,children:`Collision Auto-Positioning`}),Bo=()=>(0,Y.jsx)(`div`,{className:`p-2 bg-slate-900 text-white rounded text-[11px] shadow-lg`,children:`Interactive tooltip with clickable link`}),Vo=()=>(0,Y.jsxs)(`div`,{className:`w-56 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl text-xs`,children:[(0,Y.jsx)(`div`,{className:`font-bold text-slate-900 dark:text-white`,children:`@jxui/react`}),(0,Y.jsx)(`p`,{className:`text-slate-500 mt-1`,children:`High-performance zero-shift design library.`})]}),Ho=()=>(0,Y.jsxs)(`div`,{className:`w-full max-w-sm p-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl shadow-2xl text-xs`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center gap-2 px-2 py-1 border-b border-slate-200 dark:border-slate-800`,children:[(0,Y.jsx)(V,{className:`w-3.5 h-3.5 text-slate-400`}),(0,Y.jsx)(`span`,{className:`text-slate-400`,children:`Search commands...`})]}),(0,Y.jsx)(`div`,{className:`p-2 text-slate-600 dark:text-slate-300`,children:`Quick launcher palette`})]}),Uo=()=>(0,Y.jsxs)(`div`,{className:`p-3 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-300 dark:border-indigo-800 rounded-xl text-xs flex items-center justify-between`,children:[(0,Y.jsx)(`span`,{className:`font-semibold text-indigo-700 dark:text-indigo-300`,children:`Fullscreen Spotlight Engine`}),(0,Y.jsx)(`kbd`,{className:`px-1.5 py-0.5 bg-white dark:bg-slate-800 rounded text-[10px]`,children:`⌘K`})]}),Wo=()=>(0,Y.jsxs)(`div`,{className:`flex items-center gap-2 text-xs text-slate-500`,children:[(0,Y.jsx)(R,{className:`w-4 h-4 text-indigo-500`}),(0,Y.jsx)(`span`,{children:`Z-Index Layer Stack Manager (LIFO)`})]}),Go=t({BottomSheet:()=>Mo,CommandPalette:()=>Ho,ContextMenu:()=>Lo,Drawer:()=>Ao,FloatingPanel:()=>Po,FullscreenModal:()=>ko,GlassDialog:()=>Do,HoverCard:()=>Vo,InteractiveBottomSheet:()=>No,InteractiveTooltip:()=>Bo,LiquidDialog:()=>Eo,MagneticDrawer:()=>jo,MorphingModal:()=>To,OverlayStack:()=>Wo,RadialContextMenu:()=>Ro,ResizablePanel:()=>Fo,SmartPopover:()=>zo,SpotlightOverlay:()=>Io,SpotlightSearch:()=>Uo,SpringModal:()=>Oo}),Ko=t({default:()=>qo}),qo=`// @jxui/react v3.0.0 — category06Modals (JXUI v3.0 Unified Component Suite)
// JXUI Category 6: Modals & Overlays (Compatibility Barrel)
// All individual components are located in ./modals/

export * from './modals';
`,Jo=()=>{let{palette:e,getRadiusClass:t}=Q();return(0,Y.jsxs)(`div`,{className:`p-3 max-w-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl ${t(`card`)} flex items-center justify-between text-xs`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,Y.jsx)(E,{className:`w-4 h-4 text-emerald-500`}),(0,Y.jsx)(`span`,{className:`font-semibold text-slate-800 dark:text-slate-200`,children:`Asset uploaded`})]}),(0,Y.jsxs)(`button`,{className:`text-indigo-600 dark:text-indigo-400 font-semibold hover:underline flex items-center gap-1 cursor-pointer`,children:[(0,Y.jsx)(B,{className:`w-3 h-3`}),` Undo`]})]})},Yo=()=>(0,Y.jsxs)(`div`,{className:`relative w-64 h-16`,children:[(0,Y.jsx)(`div`,{className:`absolute inset-x-2 top-0 p-2 bg-slate-200 dark:bg-slate-800 rounded-lg text-xs opacity-50 shadow-xs`}),(0,Y.jsx)(`div`,{className:`absolute inset-x-1 top-2 p-2 bg-slate-100 dark:bg-slate-800/80 rounded-lg text-xs opacity-80 shadow-sm`}),(0,Y.jsx)(`div`,{className:`absolute inset-x-0 top-4 p-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg shadow-md text-xs font-semibold`,children:`3 Active Notifications`})]}),Xo=()=>(0,Y.jsxs)(`div`,{className:`w-64 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl text-xs flex flex-col gap-2`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center justify-between font-bold pb-1 border-b`,children:[(0,Y.jsx)(`span`,{children:`Activity Log`}),(0,Y.jsx)(y,{className:`w-3.5 h-3.5 text-slate-400`})]}),(0,Y.jsx)(`p`,{className:`text-slate-500 text-[11px]`,children:`No unread system alerts.`})]}),Zo=()=>(0,Y.jsxs)(`div`,{className:`p-3 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/40 dark:border-slate-700 rounded-xl shadow-lg text-xs flex items-center gap-2`,children:[(0,Y.jsx)(ue,{className:`w-4 h-4 text-sky-500`}),(0,Y.jsx)(`span`,{children:`Frosted Glass Ambient Notification`})]}),Qo=()=>(0,Y.jsxs)(`div`,{className:`p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 rounded-xl text-xs flex items-center gap-2 text-amber-800 dark:text-amber-200 animate-pulse`,children:[(0,Y.jsx)(ze,{className:`w-4 h-4 text-amber-500`}),(0,Y.jsx)(`span`,{children:`Canary rollout currently at 25% traffic`})]}),$o=()=>(0,Y.jsx)(`div`,{className:`p-2.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs text-slate-700 dark:text-slate-300 border-l-4 border-indigo-600`,children:`Compact inline message notification.`}),es=()=>(0,Y.jsxs)(`div`,{className:`w-full px-4 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-xs flex items-center justify-between rounded-lg`,children:[(0,Y.jsx)(`span`,{children:`🎉 JXUI 2.0 is live with 290 components!`}),(0,Y.jsx)(`button`,{className:`text-white/80 hover:text-white`,children:(0,Y.jsx)(W,{className:`w-3.5 h-3.5`})})]}),ts=()=>(0,Y.jsxs)(`div`,{className:`p-3 bg-white dark:bg-slate-900 border rounded-xl shadow-lg text-xs w-60 flex flex-col gap-1.5`,children:[(0,Y.jsxs)(`div`,{className:`flex justify-between font-semibold`,children:[(0,Y.jsx)(`span`,{children:`Exporting tokens...`}),(0,Y.jsx)(`span`,{className:`font-mono`,children:`78%`})]}),(0,Y.jsx)(`div`,{className:`w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden`,children:(0,Y.jsx)(`div`,{className:`w-[78%] h-full bg-indigo-600`})})]}),ns=()=>(0,Y.jsxs)(`div`,{className:`p-2.5 bg-slate-900 text-white rounded-lg text-xs flex items-center justify-between w-64 shadow-xl`,children:[(0,Y.jsx)(`span`,{children:`File removed from tree`}),(0,Y.jsx)(`button`,{className:`text-indigo-400 font-bold hover:underline cursor-pointer`,children:`Undo (5s)`})]}),rs=()=>(0,Y.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-3 py-1.5 bg-black text-white rounded-full text-xs shadow-xl`,children:[(0,Y.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-emerald-500 animate-ping`}),(0,Y.jsx)(`span`,{children:`AI Inference in Progress • 42 tok/s`})]}),is=()=>(0,Y.jsxs)(`div`,{className:`inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300`,children:[(0,Y.jsx)(`span`,{className:`w-2.5 h-2.5 rounded-full bg-emerald-500`}),(0,Y.jsx)(`span`,{children:`Operational`})]}),as=()=>(0,Y.jsxs)(`div`,{className:`relative flex items-center justify-center w-6 h-6`,children:[(0,Y.jsx)(`span`,{className:`absolute w-5 h-5 rounded-full bg-indigo-400 opacity-75 animate-ping`}),(0,Y.jsx)(`span`,{className:`relative w-3 h-3 rounded-full bg-indigo-600`})]}),os=()=>(0,Y.jsxs)(`div`,{className:`flex items-center gap-1.5 text-xs text-emerald-600 font-medium`,children:[(0,Y.jsx)(Be,{className:`w-3.5 h-3.5`}),(0,Y.jsx)(`span`,{children:`Websocket Connected`})]}),ss=()=>(0,Y.jsxs)(`div`,{className:`flex items-center gap-2 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 rounded-lg text-xs text-emerald-700 dark:text-emerald-300 font-semibold`,children:[(0,Y.jsx)(Se,{className:`w-4 h-4 text-emerald-500`}),(0,Y.jsx)(`span`,{children:`All 12 Test Suites Passed!`})]}),cs=()=>(0,Y.jsxs)(`div`,{className:`p-4 border border-rose-300 dark:border-rose-900 bg-rose-50/50 dark:bg-rose-950/20 rounded-xl text-xs text-rose-800 dark:text-rose-200 flex items-center justify-between`,children:[(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`span`,{className:`font-bold`,children:`Execution Error`}),(0,Y.jsx)(`p`,{className:`text-[11px] text-rose-600`,children:`Component crashed safely.`})]}),(0,Y.jsxs)(`button`,{className:`px-2.5 py-1 bg-rose-600 text-white rounded text-xs flex items-center gap-1 cursor-pointer`,children:[(0,Y.jsx)(De,{className:`w-3 h-3`}),` Retry`]})]}),ls=t({AnimatedAlert:()=>Qo,ConnectionStatus:()=>os,ErrorBoundaryFallback:()=>cs,FeedbackGlassNotification:()=>Zo,InlineAlert:()=>$o,LiveActivity:()=>rs,NotificationCenter:()=>Xo,NotificationStack:()=>Yo,ProgressToast:()=>ts,PulseIndicator:()=>as,SmartBanner:()=>es,SmartToast:()=>Jo,StatusIndicator:()=>is,SuccessCelebration:()=>ss,UndoNotification:()=>ns}),us=t({default:()=>ds}),ds=`// @jxui/react v3.0.0 — category07Feedback (JXUI v3.0 Unified Component Suite)
// JXUI Category 7: Notifications & Feedback (Compatibility Barrel)
// All individual components are located in ./feedback/

export * from './feedback';
`,fs=()=>(0,Y.jsx)(`div`,{className:`w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 animate-spin-slow blur-xs shadow-md`}),ps=()=>(0,Y.jsx)(`div`,{className:`w-6 h-6 bg-indigo-600 rounded-sm animate-spin`}),ms=()=>(0,Y.jsxs)(`div`,{className:`relative w-8 h-8 flex items-center justify-center animate-spin`,children:[(0,Y.jsx)(`div`,{className:`absolute top-0 w-2 h-2 rounded-full bg-indigo-600`}),(0,Y.jsx)(`div`,{className:`absolute bottom-0 w-2 h-2 rounded-full bg-violet-400`})]}),hs=()=>(0,Y.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,Y.jsx)(`span`,{className:`w-2 h-2 bg-indigo-600 rounded-full animate-bounce`}),(0,Y.jsx)(`span`,{className:`w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.15s]`}),(0,Y.jsx)(`span`,{className:`w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.3s]`})]}),gs=()=>(0,Y.jsxs)(`div`,{className:`flex items-end gap-1 h-6`,children:[(0,Y.jsx)(`div`,{className:`w-1.5 h-3 bg-indigo-600 rounded-full animate-pulse`}),(0,Y.jsx)(`div`,{className:`w-1.5 h-6 bg-indigo-600 rounded-full animate-pulse [animation-delay:0.2s]`}),(0,Y.jsx)(`div`,{className:`w-1.5 h-4 bg-indigo-600 rounded-full animate-pulse [animation-delay:0.4s]`})]}),_s=()=>(0,Y.jsx)(`div`,{className:`w-7 h-7 rounded-full border-2 border-transparent border-t-indigo-600 border-r-violet-600 animate-spin`}),vs=()=>(0,Y.jsxs)(`div`,{className:`w-48 p-3 border border-slate-200 dark:border-slate-800 rounded-xl flex flex-col gap-2`,children:[(0,Y.jsx)(`div`,{className:`w-full h-20 bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse`}),(0,Y.jsx)(`div`,{className:`w-3/4 h-3 bg-slate-200 dark:bg-slate-800 rounded animate-pulse`}),(0,Y.jsx)(`div`,{className:`w-1/2 h-2.5 bg-slate-200 dark:bg-slate-800 rounded animate-pulse`})]}),ys=()=>(0,Y.jsxs)(`div`,{className:`w-full flex flex-col gap-2`,children:[(0,Y.jsx)(`div`,{className:`w-full h-6 bg-slate-200 dark:bg-slate-800 rounded animate-pulse`}),(0,Y.jsx)(`div`,{className:`w-full h-6 bg-slate-100 dark:bg-slate-900 rounded animate-pulse`})]}),bs=()=>(0,Y.jsxs)(`div`,{className:`flex flex-col gap-1.5 w-40`,children:[(0,Y.jsx)(`div`,{className:`w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded animate-pulse`}),(0,Y.jsx)(`div`,{className:`w-4/5 h-2.5 bg-slate-200 dark:bg-slate-800 rounded animate-pulse`})]}),xs=()=>(0,Y.jsxs)(`div`,{className:`relative w-12 h-12 flex items-center justify-center font-mono text-[11px] font-bold`,children:[(0,Y.jsxs)(`svg`,{className:`w-full h-full -rotate-90`,viewBox:`0 0 36 36`,children:[(0,Y.jsx)(`circle`,{cx:`18`,cy:`18`,r:`14`,fill:`none`,className:`stroke-slate-200 dark:stroke-slate-800`,strokeWidth:`3`}),(0,Y.jsx)(`circle`,{cx:`18`,cy:`18`,r:`14`,fill:`none`,className:`stroke-indigo-600`,strokeWidth:`3`,strokeDasharray:`88`,strokeDashoffset:`26`})]}),(0,Y.jsx)(`span`,{className:`absolute`,children:`70%`})]}),Ss=()=>(0,Y.jsx)(pe,{className:`w-6 h-6 text-indigo-600 animate-spin`}),Cs=()=>(0,Y.jsxs)(`div`,{className:`flex items-center gap-1 w-32`,children:[(0,Y.jsx)(`div`,{className:`flex-1 h-1.5 bg-indigo-600 rounded-full`}),(0,Y.jsx)(`div`,{className:`flex-1 h-1.5 bg-indigo-600 rounded-full`}),(0,Y.jsx)(`div`,{className:`flex-1 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full`})]}),ws=()=>(0,Y.jsxs)(`div`,{className:`flex items-center gap-2 text-xs`,children:[(0,Y.jsx)(`span`,{className:`w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px]`,children:`1`}),(0,Y.jsx)(`div`,{className:`w-6 h-0.5 bg-indigo-600`}),(0,Y.jsx)(`span`,{className:`w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center text-[10px]`,children:`2`})]}),Ts=()=>(0,Y.jsxs)(`div`,{className:`flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400`,children:[(0,Y.jsx)(O,{className:`w-4 h-4 text-indigo-500 animate-bounce`}),(0,Y.jsx)(`span`,{children:`2.4 MB / 4.0 MB (60%)`})]}),Es=()=>(0,Y.jsxs)(`div`,{className:`p-2 border rounded-lg text-xs flex items-center justify-between w-48`,children:[(0,Y.jsx)(`span`,{children:`Index Symbols`}),(0,Y.jsx)(`span`,{className:`font-mono text-emerald-600 font-bold`,children:`Done ✓`})]}),Ds=t({CircularProgress:()=>Ss,GradientLoader:()=>_s,LiquidLoader:()=>fs,MorphingLoader:()=>ps,MultiStepProgress:()=>ws,OrbitalLoader:()=>ms,ParticleLoader:()=>hs,ProgressRing:()=>xs,SegmentedProgress:()=>Cs,SkeletonCard:()=>vs,SkeletonTable:()=>ys,SkeletonText:()=>bs,TaskProgress:()=>Es,UploadProgress:()=>Ts,WaveLoader:()=>gs}),Os=t({default:()=>ks}),ks=`// @jxui/react v3.0.0 — category08Loading (JXUI v3.0 Unified Component Suite)
// JXUI Category 8: Loading & Progress (Compatibility Barrel)
// All individual components are located in ./loading/

export * from './loading';
`,As=({children:e})=>(0,Y.jsx)(`div`,{className:`p-4 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/40 dark:border-slate-800 rounded-2xl shadow-lg`,children:e??(0,Y.jsx)(`p`,{className:`text-xs font-semibold`,children:`Frosted Luminescent Glass Surface`})}),js=()=>(0,Y.jsx)(`div`,{className:`p-4 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 jx-elevation-1 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all cursor-pointer`,children:(0,Y.jsx)(`span`,{className:`text-xs font-bold text-slate-900 dark:text-white`,children:`Tactile Elevation Lift`})}),Ms=()=>{let[e,t]=(0,a.useState)(!1);return(0,Y.jsxs)(`div`,{className:`p-3 border rounded-xl bg-white dark:bg-slate-900`,children:[(0,Y.jsx)(`button`,{type:`button`,onClick:()=>t(!e),"aria-expanded":e,className:`w-full text-left font-bold cursor-pointer`,children:`Module Details`}),e&&(0,Y.jsx)(`div`,{className:`pt-2 text-xs text-slate-500`,children:`Provides deep integration with JXUI styling engine.`})]})},Ns=()=>{let{palette:e,getRadiusClass:t}=Q(),[n,r]=(0,a.useState)(`compact`);return(0,Y.jsxs)(`div`,{onClick:()=>{$.playClick(),r(e=>e===`compact`?`expanded`:e===`expanded`?`detail`:`compact`)},className:`w-full bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 jx-elevation-1 hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden touch-manipulation active:scale-[0.99] ${t(`card`)} ${n===`detail`?`p-4 ring-2 ring-[var(--jx-accent-halo)]`:n===`expanded`?`p-3.5`:`p-3`}`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,Y.jsx)(`div`,{className:`w-6 h-6 rounded-lg bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400`,children:(0,Y.jsx)(m,{className:`w-3.5 h-3.5`})}),(0,Y.jsx)(`span`,{className:`font-bold text-xs text-slate-900 dark:text-white`,children:`Morphing Card`})]}),(0,Y.jsx)(`span`,{className:`text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-[#1E293B] text-slate-500 capitalize`,children:n})]}),n!==`compact`&&(0,Y.jsxs)(`div`,{className:`mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex flex-col gap-1.5 animate-fadeIn`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400`,children:[(0,Y.jsx)(`span`,{children:`Throughput:`}),(0,Y.jsx)(`span`,{className:`font-mono font-bold text-indigo-600 dark:text-indigo-400`,children:`99.98%`})]}),n===`detail`&&(0,Y.jsxs)(`div`,{className:`flex flex-col gap-1 text-[10px] text-slate-500 font-mono bg-slate-50 dark:bg-[#0B0F19] p-2 rounded-lg`,children:[(0,Y.jsx)(`span`,{children:`Latency: 4.2ms`}),(0,Y.jsx)(`span`,{children:`Memory: 18.4 MB`}),(0,Y.jsx)(`span`,{children:`Zero CLS Guarantee: Active`})]})]}),(0,Y.jsxs)(`div`,{className:`mt-2 text-[10px] text-slate-400 flex items-center justify-between`,children:[(0,Y.jsx)(`span`,{children:`Click to cycle layout`}),(0,Y.jsx)(T,{className:`w-3 h-3`})]})]})},Ps=({frontTitle:e=`FIDO2 Hardware Key`,frontSubtitle:t=`Click card to flip and verify encrypted enclave key credentials.`,backKey:n=`jx_sec_live_94f8a32d1e0c`,className:r=``})=>{let{getRadiusClass:i}=Q(),[o,s]=(0,a.useState)(!1);return(0,Y.jsx)(`div`,{style:{perspective:`1000px`},onClick:()=>s(e=>!e),className:`inline-block w-full cursor-pointer select-none ${r}`,children:(0,Y.jsxs)(`div`,{style:{transform:o?`rotateY(180deg)`:`rotateY(0deg)`,transformStyle:`preserve-3d`,transition:`transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)`},className:`relative min-h-[140px] w-full ${i(`card`)}`,children:[(0,Y.jsxs)(`div`,{style:{backfaceVisibility:`hidden`},className:`absolute inset-0 p-5 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 jx-elevation-1 shadow-lg flex flex-col justify-between ${i(`card`)}`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,Y.jsxs)(`span`,{className:`text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5`,children:[(0,Y.jsx)(de,{className:`w-3.5 h-3.5`}),(0,Y.jsx)(`span`,{children:`Front Credential`})]}),(0,Y.jsx)(Oe,{className:`w-3.5 h-3.5 text-slate-400`})]}),(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`h4`,{className:`font-bold text-sm text-slate-900 dark:text-white`,children:e}),(0,Y.jsx)(`p`,{className:`text-xs text-slate-500 dark:text-slate-400 mt-1`,children:t})]}),(0,Y.jsx)(`span`,{className:`text-[10px] font-mono text-indigo-500 font-semibold`,children:`Click to flip card →`})]}),(0,Y.jsxs)(`div`,{style:{transform:`rotateY(180deg)`,backfaceVisibility:`hidden`},className:`absolute inset-0 p-5 bg-indigo-950 text-white border border-indigo-800 shadow-xl flex flex-col justify-between ${i(`card`)}`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,Y.jsxs)(`span`,{className:`text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5`,children:[(0,Y.jsx)(je,{className:`w-3.5 h-3.5`}),(0,Y.jsx)(`span`,{children:`Hardware Enclave`})]}),(0,Y.jsx)(Oe,{className:`w-3.5 h-3.5 text-slate-400`})]}),(0,Y.jsxs)(`div`,{className:`space-y-1`,children:[(0,Y.jsx)(`span`,{className:`text-[10px] uppercase tracking-wider text-indigo-300 font-bold`,children:`API Private Key`}),(0,Y.jsx)(`code`,{className:`block px-2.5 py-1.5 rounded bg-indigo-900/80 font-mono text-xs text-emerald-300 overflow-x-auto`,children:n})]}),(0,Y.jsx)(`span`,{className:`text-[10px] font-mono text-indigo-300`,children:`Click to return to front ←`})]})]})})},Fs=[{id:1,title:`Tactile Luminescence`,tag:`Physics Engine`,color:`bg-indigo-600`},{id:2,title:`Spatial Glassmorphism`,tag:`Optics FX`,color:`bg-purple-600`},{id:3,title:`Bento Grid Kinetics`,tag:`Layout Matrix`,color:`bg-cyan-600`}],Is=()=>{let{getRadiusClass:e}=Q(),[t,n]=(0,a.useState)(Fs);return(0,Y.jsx)(`div`,{onClick:()=>{n(e=>{let[t,...n]=e;return[...n,t]})},className:`relative w-48 h-28 cursor-pointer select-none group my-1`,title:`Click to cycle card deck`,children:t.map((t,n)=>{let r=n*8,i=1-n*.05,a=1-n*.18,o=30-n*10;return(0,Y.jsxs)(`div`,{style:{top:`${r}px`,transform:`scale(${i})`,opacity:a,zIndex:o},className:`absolute inset-x-0 h-20 p-3 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 jx-elevation-1 shadow-md ${e(`card`)} transition-all duration-300 group-hover:-translate-y-1 flex flex-col justify-between`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,Y.jsxs)(`span`,{className:`text-[10px] font-mono text-slate-400`,children:[`Card #`,t.id]}),(0,Y.jsx)(`span`,{className:`text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-100 dark:bg-[#1E293B] text-slate-600 dark:text-slate-300`,children:t.tag})]}),(0,Y.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,Y.jsx)(`span`,{className:`text-xs font-bold text-slate-900 dark:text-white truncate`,children:t.title}),(0,Y.jsx)(`span`,{className:`text-[9px] text-indigo-500 font-semibold group-hover:underline`,children:`Next →`})]})]},t.id)})})},Ls=({title:e=`Deploy to Edge Canary`,subtitle:t=`Swipe right to approve rollout, swipe left to reject.`,onSwipeLeft:n,onSwipeRight:r,className:i=``})=>{let{getRadiusClass:o}=Q(),[s,c]=(0,a.useState)(0),[l,u]=(0,a.useState)(!1),[d,f]=(0,a.useState)(null),p=(0,a.useRef)(0),m=e=>{u(!0),p.current=e.clientX-s},h=e=>{if(!l)return;let t=e.clientX-p.current;c(t)},g=()=>{l&&(u(!1),s>80?(f(`right`),r?.()):s<-80?(f(`left`),n?.()):c(0))},_=()=>{f(null),c(0)};if(d)return(0,Y.jsxs)(`div`,{className:`p-5 border text-center space-y-3 ${o(`card`)} ${d===`right`?`bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-200`:`bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-700 text-rose-800 dark:text-rose-200`} ${i}`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center justify-center gap-2 font-bold text-sm`,children:[d===`right`?(0,Y.jsx)(C,{className:`w-5 h-5 text-emerald-500`}):(0,Y.jsx)(W,{className:`w-5 h-5 text-rose-500`}),(0,Y.jsx)(`span`,{children:d===`right`?`Action Approved`:`Action Rejected`})]}),(0,Y.jsxs)(`button`,{type:`button`,onClick:_,className:`min-h-[44px] inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-[#111827] border border-slate-300 dark:border-slate-700 jx-elevation-1 cursor-pointer touch-manipulation active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)]`,children:[(0,Y.jsx)(B,{className:`w-3.5 h-3.5`}),(0,Y.jsx)(`span`,{children:`Reset Card`})]})]});let v=s/100*8,y=Math.max(.4,1-Math.abs(s)/250);return(0,Y.jsxs)(`div`,{onMouseDown:m,onMouseMove:h,onMouseUp:g,onMouseLeave:g,style:{transform:`translateX(${s}px) rotate(${v}deg)`,opacity:y,transition:l?`none`:`transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease`},className:`relative p-5 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 jx-elevation-1 shadow-lg ${o(`card`)} cursor-grab active:cursor-grabbing select-none space-y-2 ${i}`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,Y.jsx)(`span`,{className:`text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400`,children:`Swipeable Gesture`}),(0,Y.jsx)(`span`,{className:`text-[10px] font-mono text-slate-400`,children:s>40?`👉 Approve`:s<-40?`👈 Reject`:`Drag Card`})]}),(0,Y.jsx)(`h4`,{className:`font-bold text-sm text-slate-900 dark:text-white`,children:e}),(0,Y.jsx)(`p`,{className:`text-xs text-slate-500 dark:text-slate-400 leading-relaxed`,children:t})]})},Rs=({title:e,subheader:t,icon:n})=>(0,Y.jsxs)(`div`,{className:`mb-2`,children:[t&&(0,Y.jsxs)(`div`,{className:`flex items-center justify-between mb-1`,children:[(0,Y.jsx)(`span`,{className:`text-xs font-mono text-indigo-600 dark:text-indigo-400`,children:t}),n]}),(0,Y.jsx)(`h4`,{className:`text-base font-bold text-slate-900 dark:text-white`,children:e})]}),zs=({children:e})=>(0,Y.jsx)(`div`,{className:`text-xs text-slate-600 dark:text-slate-400 mt-1`,children:e}),Bs=({gradient:e=`from-indigo-500/20 via-violet-500/20 to-sky-500/20`,caption:t})=>(0,Y.jsx)(`div`,{className:`h-24 rounded-xl bg-gradient-to-br ${e} flex items-center justify-center text-xs font-mono text-slate-600 dark:text-slate-300 mb-3`,children:t}),Vs=({children:e})=>(0,Y.jsx)(`div`,{className:`mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-end gap-2`,children:e}),Hs=({title:e=`Move cursor across this Bento Card`,kicker:t=`Interactive Cursor Spotlight Surface`,description:n=`Tracks pointer coordinates to project a subtle radial specular highlight with zero layout overhead.`,spotlight:r=!0,hoverLift:i=!0,children:o,className:s=``})=>{let{getRadiusClass:c}=Q(),[l,u]=(0,a.useState)({x:140,y:80});return(0,Y.jsx)(`div`,{onMouseMove:e=>{if(!r)return;let t=e.currentTarget.getBoundingClientRect();u({x:e.clientX-t.left,y:e.clientY-t.top})},style:r?{backgroundImage:`radial-gradient(280px circle at ${l.x}px ${l.y}px, rgba(99, 102, 241, 0.10), transparent 80%)`}:void 0,className:`p-5 bg-white dark:bg-[#111827] text-slate-900 dark:text-white border border-slate-200/90 dark:border-slate-800 transition-transform duration-200 ${i?`hover:-translate-y-0.5`:``} jx-elevation-1 ${c(`card`)} ${s}`,children:o||(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(Rs,{title:e,subheader:t,icon:(0,Y.jsx)(R,{className:`w-4 h-4 text-slate-400`})}),(0,Y.jsx)(zs,{children:n})]})})},Us=({title:e=`Interactive Spotlight Surface`,kicker:t=`Tactile Luminescence`,description:n=`Cursor-tracking spotlight halo with specular borders and spring hover elevation.`,children:r,className:i=``,...a})=>(0,Y.jsx)(Hs,{title:e,kicker:t,description:n,spotlight:!0,hoverLift:!0,className:i,...a,children:r||(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(Rs,{title:e,subheader:t,icon:(0,Y.jsx)(U,{className:`w-4 h-4 text-indigo-500`})}),(0,Y.jsx)(zs,{children:n}),(0,Y.jsxs)(Vs,{children:[(0,Y.jsx)(`span`,{className:`text-[11px] font-mono text-slate-400`,children:`Tactile Spec`}),(0,Y.jsxs)(`span`,{className:`text-xs font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 cursor-pointer`,children:[`Explore `,(0,Y.jsx)(_,{className:`w-3.5 h-3.5`})]})]})]})}),Ws=({title:e=`Spotlight Luminescence`,subtitle:t=`Projects a radial illumination beam directly under the pointer coordinates.`,spotlightColor:n=`rgba(99, 102, 241, 0.18)`,className:r=``})=>{let{getRadiusClass:i}=Q(),o=(0,a.useRef)(null),[s,c]=(0,a.useState)({x:120,y:60}),[l,u]=(0,a.useState)(!1);return(0,Y.jsxs)(`div`,{ref:o,onMouseEnter:()=>u(!0),onMouseMove:e=>{if(!o.current)return;let t=o.current.getBoundingClientRect();c({x:e.clientX-t.left,y:e.clientY-t.top})},onMouseLeave:()=>u(!1),style:{backgroundImage:l?`radial-gradient(240px circle at ${s.x}px ${s.y}px, ${n}, transparent 80%)`:void 0},className:`relative overflow-hidden p-5 bg-white dark:bg-[#111827] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 jx-elevation-1 ${i(`card`)} shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-colors cursor-pointer select-none space-y-2 ${r}`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,Y.jsxs)(`span`,{className:`text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5`,children:[(0,Y.jsx)(U,{className:`w-3.5 h-3.5`}),(0,Y.jsx)(`span`,{children:`Spotlight Spec`})]}),(0,Y.jsxs)(`span`,{className:`text-[10px] font-mono text-slate-400 dark:text-slate-500`,children:[`X: `,Math.round(s.x),`, Y: `,Math.round(s.y)]})]}),(0,Y.jsx)(`h4`,{className:`font-bold text-sm text-slate-900 dark:text-white`,children:e}),(0,Y.jsx)(`p`,{className:`text-xs text-slate-500 dark:text-slate-400 leading-relaxed`,children:t})]})},Gs=()=>(0,Y.jsx)(`div`,{className:`p-4 rounded-xl border border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.2)] text-xs font-bold`,children:`Glow Border Card`}),Ks=()=>(0,Y.jsx)(`div`,{className:`p-0.5 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`,children:(0,Y.jsx)(`div`,{className:`p-4 bg-white dark:bg-slate-900 rounded-[14px] text-xs font-bold`,children:`Gradient Border`})}),qs=()=>(0,Y.jsxs)(`div`,{className:`p-3 border rounded-xl flex items-center gap-3 text-xs`,children:[(0,Y.jsx)(`div`,{className:`w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold`,children:`JX`}),(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`div`,{className:`font-bold`,children:`Alex Mercer`}),(0,Y.jsx)(`div`,{className:`text-[10px] text-slate-500`,children:`Core Architect`})]})]}),Js=()=>(0,Y.jsxs)(`div`,{className:`w-48 p-3 border rounded-xl flex flex-col gap-2 text-xs`,children:[(0,Y.jsx)(`div`,{className:`w-full h-24 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-400`,children:`Preview`}),(0,Y.jsxs)(`div`,{className:`flex justify-between font-bold`,children:[(0,Y.jsx)(`span`,{children:`JXUI Pro`}),(0,Y.jsx)(`span`,{className:`text-indigo-600`,children:`$199`})]})]}),Ys=()=>(0,Y.jsxs)(`div`,{className:`p-4 border-2 border-indigo-600 rounded-2xl bg-indigo-50/20 dark:bg-indigo-950/20 text-xs flex flex-col gap-2`,children:[(0,Y.jsx)(`div`,{className:`font-bold text-sm`,children:`Enterprise`}),(0,Y.jsxs)(`div`,{className:`text-lg font-extrabold`,children:[`$49`,(0,Y.jsx)(`span`,{className:`text-xs font-normal text-slate-500`,children:`/mo`})]}),(0,Y.jsxs)(`div`,{className:`flex items-center gap-1 text-[11px]`,children:[(0,Y.jsx)(C,{className:`w-3.5 h-3.5 text-emerald-500`}),` 61 Components`]})]}),Xs=()=>(0,Y.jsxs)(`div`,{className:`p-4 border rounded-2xl flex flex-col gap-1 text-xs`,children:[(0,Y.jsx)(`span`,{className:`text-slate-500 font-medium`,children:`Render Latency`}),(0,Y.jsxs)(`div`,{className:`flex items-baseline gap-2`,children:[(0,Y.jsx)(`span`,{className:`text-2xl font-bold font-mono`,children:`0.8ms`}),(0,Y.jsxs)(`span`,{className:`text-emerald-500 font-bold flex items-center text-[10px]`,children:[(0,Y.jsx)(Re,{className:`w-3 h-3`}),` -62%`]})]})]}),Zs=()=>(0,Y.jsxs)(`div`,{className:`p-3 border rounded-xl text-xs grid grid-cols-2 gap-2 text-center`,children:[(0,Y.jsx)(`div`,{className:`p-1 bg-rose-50 dark:bg-rose-950/30 rounded text-rose-600 font-medium`,children:`MUI: 34ms`}),(0,Y.jsx)(`div`,{className:`p-1 bg-emerald-50 dark:bg-emerald-950/30 rounded text-emerald-600 font-bold`,children:`JXUI: 0.8ms`})]}),Qs=()=>(0,Y.jsxs)(`div`,{className:`p-4 border rounded-2xl flex flex-col gap-2 text-xs`,children:[(0,Y.jsx)(U,{className:`w-5 h-5 text-indigo-500`}),(0,Y.jsx)(`span`,{className:`font-bold text-sm`,children:`Zero Layout Shift`}),(0,Y.jsx)(`p`,{className:`text-slate-500 text-[11px]`,children:`Strict CLS = 0 compliance across all state transitions.`})]}),$s=({children:e})=>(0,Y.jsx)(`div`,{className:`grid grid-cols-3 gap-3`,children:e??(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(`div`,{className:`col-span-2 p-4 border rounded-2xl text-xs font-bold bg-slate-50 dark:bg-slate-900`,children:`Bento Major`}),(0,Y.jsx)(`div`,{className:`col-span-1 p-4 border rounded-2xl text-xs font-bold bg-slate-50 dark:bg-slate-900`,children:`Bento Minor`})]})}),ec=t({BentoGrid:()=>$s,ComparisonCard:()=>Zs,ContentGlassCard:()=>As,ExpandableCard:()=>Ms,FeatureCard:()=>Qs,FlipCard:()=>Ps,GradientBorderCard:()=>Ks,HoverLiftCard:()=>js,InteractiveCard:()=>Us,MagneticCard:()=>Dt,MetricCard:()=>Xs,MorphingCard:()=>Ns,PricingCard:()=>Ys,ProductCard:()=>Js,ProfileCard:()=>qs,SpotlightBorderCard:()=>Gs,SpotlightCard:()=>Ws,StackedCard:()=>Is,SwipeableCard:()=>Ls,TiltCard:()=>Et}),tc=t({default:()=>nc}),nc=`// @jxui/react v3.0.0 — category09Cards (JXUI v3.0 Unified Component Suite)
// JXUI Category 9: Cards & Content (Compatibility Barrel)
// All individual components are located in ./cards/

export * from './cards';
`,rc=()=>(0,Y.jsx)(`div`,{className:`flex items-end gap-2 h-20 p-2 border rounded-xl`,children:[40,70,55,90,65,85].map((e,t)=>(0,Y.jsx)(`div`,{style:{height:`${e}%`},className:`flex-1 bg-indigo-600 rounded-t-sm hover:brightness-110 transition-all cursor-pointer`},t))}),ic=()=>(0,Y.jsx)(`div`,{className:`w-full h-16 p-1 border rounded-xl flex items-center`,children:(0,Y.jsx)(`svg`,{className:`w-full h-full`,viewBox:`0 0 100 40`,children:(0,Y.jsx)(`path`,{d:`M 0 30 Q 25 5 50 20 T 100 10`,fill:`none`,stroke:`#4f46e5`,strokeWidth:`2.5`})})}),ac=()=>(0,Y.jsx)(`div`,{className:`w-full h-16 border rounded-xl overflow-hidden bg-indigo-50/20 dark:bg-indigo-950/20`,children:(0,Y.jsxs)(`svg`,{className:`w-full h-full`,viewBox:`0 0 100 40`,preserveAspectRatio:`none`,children:[(0,Y.jsx)(`path`,{d:`M 0 35 Q 25 10 50 22 T 100 8 L 100 40 L 0 40 Z`,fill:`rgba(79, 70, 229, 0.25)`}),(0,Y.jsx)(`path`,{d:`M 0 35 Q 25 10 50 22 T 100 8`,fill:`none`,stroke:`#4f46e5`,strokeWidth:`2`})]})}),oc=()=>(0,Y.jsxs)(`div`,{className:`w-16 h-16 relative flex items-center justify-center font-mono text-[10px] font-bold`,children:[(0,Y.jsxs)(`svg`,{className:`w-full h-full -rotate-90`,viewBox:`0 0 36 36`,children:[(0,Y.jsx)(`circle`,{cx:`18`,cy:`18`,r:`14`,fill:`none`,stroke:`#e2e8f0`,strokeWidth:`3`}),(0,Y.jsx)(`circle`,{cx:`18`,cy:`18`,r:`14`,fill:`none`,stroke:`#4f46e5`,strokeWidth:`3`,strokeDasharray:`88`,strokeDashoffset:`30`})]}),(0,Y.jsx)(`span`,{className:`absolute`,children:`65%`})]}),sc=()=>(0,Y.jsx)(`div`,{className:`w-16 h-16 relative flex items-center justify-center`,children:(0,Y.jsx)(`div`,{className:`w-14 h-14 rounded-full border-4 border-indigo-600 border-t-emerald-500 border-r-violet-500`})}),cc=()=>(0,Y.jsx)(`div`,{className:`w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] text-white font-bold cursor-pointer hover:scale-105 transition-transform`,children:`Pie`}),lc=()=>(0,Y.jsx)(`div`,{className:`w-16 h-16 border rounded-full flex items-center justify-center text-[10px] text-indigo-500 font-mono`,children:`Radar`}),uc=()=>(0,Y.jsxs)(`div`,{className:`relative w-28 h-16 border rounded-lg p-1`,children:[(0,Y.jsx)(`div`,{className:`absolute top-2 left-4 w-2 h-2 rounded-full bg-indigo-600`}),(0,Y.jsx)(`div`,{className:`absolute top-8 left-12 w-2 h-2 rounded-full bg-violet-600`}),(0,Y.jsx)(`div`,{className:`absolute top-4 left-20 w-2 h-2 rounded-full bg-indigo-600`})]}),dc=()=>(0,Y.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,Y.jsx)(`div`,{className:`w-6 h-6 rounded-full bg-indigo-500/40 border border-indigo-600 flex items-center justify-center text-[8px]`,children:`A`}),(0,Y.jsx)(`div`,{className:`w-10 h-10 rounded-full bg-emerald-500/40 border border-emerald-600 flex items-center justify-center text-[10px]`,children:`B`})]}),fc=()=>(0,Y.jsx)(`div`,{className:`grid grid-cols-4 gap-1`,children:[1,2,4,3,2,4,1,3].map((e,t)=>(0,Y.jsx)(`div`,{className:`w-4 h-4 rounded-xs ${e===4?`bg-indigo-600`:e===3?`bg-indigo-400`:`bg-indigo-200 dark:bg-indigo-900`}`},t))}),pc=()=>(0,Y.jsx)(`div`,{className:`flex gap-1 p-2 border rounded-lg`,children:[...Array(8)].map((e,t)=>(0,Y.jsx)(`div`,{className:`flex flex-col gap-1`,children:[...[,,,,]].map((e,n)=>(0,Y.jsx)(`div`,{className:`w-2.5 h-2.5 rounded-xs bg-emerald-500`,style:{opacity:(t+n)%2?.9:.3}},n))},t))}),mc=()=>(0,Y.jsxs)(`div`,{className:`w-28 h-16 border rounded grid grid-cols-3 gap-0.5 p-0.5 text-[8px] font-mono text-white text-center`,children:[(0,Y.jsx)(`div`,{className:`col-span-2 bg-indigo-600 rounded-xs p-1`,children:`Core (60%)`}),(0,Y.jsx)(`div`,{className:`bg-violet-600 rounded-xs p-1`,children:`Lab`})]}),hc=()=>(0,Y.jsxs)(`div`,{className:`flex items-center justify-between w-32 text-[10px] font-mono`,children:[(0,Y.jsx)(`span`,{className:`p-1 bg-slate-200 dark:bg-slate-800 rounded`,children:`100 In`}),(0,Y.jsx)(`span`,{children:`→`}),(0,Y.jsx)(`span`,{className:`p-1 bg-emerald-500 text-white rounded`,children:`92 Conv`})]}),gc=()=>(0,Y.jsxs)(`div`,{className:`flex items-end gap-1.5 h-12`,children:[(0,Y.jsx)(`div`,{className:`w-3 h-8 bg-emerald-500 rounded-t-xs`}),(0,Y.jsx)(`div`,{className:`w-3 h-4 bg-rose-500 rounded-t-xs`}),(0,Y.jsx)(`div`,{className:`w-3 h-10 bg-indigo-600 rounded-t-xs`})]}),_c=()=>(0,Y.jsxs)(`div`,{className:`flex flex-col items-center gap-0.5`,children:[(0,Y.jsx)(`div`,{className:`w-24 h-2 bg-indigo-600 rounded`}),(0,Y.jsx)(`div`,{className:`w-16 h-2 bg-indigo-500 rounded`}),(0,Y.jsx)(`div`,{className:`w-10 h-2 bg-indigo-400 rounded`})]}),vc=()=>(0,Y.jsxs)(`div`,{className:`flex items-center gap-1.5 font-mono text-xs`,children:[(0,Y.jsx)(`span`,{className:`font-bold text-slate-900 dark:text-white`,children:`JX/USD`}),(0,Y.jsx)(`span`,{className:`text-emerald-500 font-semibold`,children:`$1,489.20`}),(0,Y.jsx)(`span`,{className:`text-[10px] text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-1 rounded`,children:`+4.2%`})]}),yc=({value:e=14209})=>(0,Y.jsx)(`div`,{className:`font-mono text-xl font-bold tabular-nums text-indigo-600 dark:text-indigo-400`,children:e.toLocaleString()}),bc=()=>(0,Y.jsx)(`svg`,{className:`w-16 h-6`,viewBox:`0 0 50 20`,children:(0,Y.jsx)(`path`,{d:`M 0 15 L 10 18 L 20 8 L 30 12 L 40 4 L 50 9`,fill:`none`,stroke:`#10b981`,strokeWidth:`2`})}),xc=()=>(0,Y.jsxs)(`div`,{className:`relative w-20 h-10 overflow-hidden flex items-end justify-center`,children:[(0,Y.jsx)(`div`,{className:`w-20 h-20 rounded-full border-4 border-indigo-500 border-b-transparent -rotate-45`}),(0,Y.jsx)(`span`,{className:`absolute bottom-0 font-mono text-xs font-bold`,children:`88 mph`})]}),Sc=()=>(0,Y.jsxs)(`div`,{className:`flex flex-col gap-1 w-28 text-[10px] font-mono`,children:[(0,Y.jsxs)(`div`,{className:`flex justify-between`,children:[(0,Y.jsx)(`span`,{children:`Vite`}),(0,Y.jsx)(`span`,{className:`font-bold`,children:`0.8s`})]}),(0,Y.jsx)(`div`,{className:`w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded`,children:(0,Y.jsx)(`div`,{className:`w-1/4 h-full bg-indigo-600 rounded`})})]}),Cc=t({AnimatedLineChart:()=>ic,BubbleChart:()=>dc,CalendarHeatmap:()=>pc,DataComparisonChart:()=>Sc,DonutChart:()=>sc,FunnelChart:()=>_c,Heatmap:()=>fc,InteractiveGauge:()=>xc,InteractivePieChart:()=>cc,KineticBarChart:()=>rc,LiquidAreaChart:()=>ac,LiveTicker:()=>vc,NumberCounter:()=>yc,RadarChart:()=>lc,RadialChart:()=>oc,SankeyDiagram:()=>hc,ScatterPlot:()=>uc,Sparkline:()=>bc,Treemap:()=>mc,WaterfallChart:()=>gc}),wc=t({default:()=>Tc}),Tc=`// @jxui/react v3.0.0 — category10DataViz (JXUI v3.0 Unified Component Suite)
// JXUI Category 10: Data Visualization (Compatibility Barrel)
// All individual components are located in ./dataviz/

export * from './dataviz';
`,Ec=()=>(0,Y.jsxs)(`div`,{className:`w-full border rounded-xl overflow-hidden text-xs`,children:[(0,Y.jsxs)(`div`,{className:`bg-slate-100 dark:bg-slate-800 p-2 font-bold flex justify-between`,children:[(0,Y.jsx)(`span`,{children:`Component`}),(0,Y.jsx)(`span`,{children:`Category`}),(0,Y.jsx)(`span`,{children:`Status`})]}),(0,Y.jsxs)(`div`,{className:`p-2 flex justify-between border-t border-slate-200 dark:border-slate-800`,children:[(0,Y.jsx)(`span`,{children:`JXButton`}),(0,Y.jsx)(`span`,{children:`Inputs`}),(0,Y.jsx)(`span`,{className:`text-emerald-500 font-bold`,children:`Stable`})]})]}),Dc=()=>(0,Y.jsx)(`div`,{className:`p-3 border rounded-xl text-xs font-mono`,children:(0,Y.jsx)(`span`,{children:`Virtualized Engine: 100,000 rows at 60 FPS`})}),Oc=()=>{let[e,t]=(0,a.useState)(!1);return(0,Y.jsxs)(`div`,{className:`border rounded-xl p-2 text-xs`,children:[(0,Y.jsxs)(`button`,{type:`button`,onClick:()=>t(!e),"aria-expanded":e,className:`w-full flex items-center justify-between cursor-pointer font-bold`,children:[(0,Y.jsx)(`span`,{children:`Design Token Palette`}),(0,Y.jsx)(w,{className:`w-3.5 h-3.5 transition-transform ${e?`rotate-180`:``}`})]}),e&&(0,Y.jsx)(`div`,{className:`pt-2 text-slate-500`,children:`5 dynamic accents: Indigo, Violet, Emerald, Rose, Ocean.`})]})},kc=()=>{let[e,t]=(0,a.useState)(`Production`);return(0,Y.jsxs)(`div`,{className:`flex items-center gap-2 text-xs border p-2 rounded-lg`,children:[(0,Y.jsx)(`span`,{className:`text-slate-500`,children:`Environment:`}),(0,Y.jsx)(`input`,{value:e,onChange:e=>t(e.target.value),className:`font-bold bg-transparent focus:outline-none text-indigo-600`}),(0,Y.jsx)(Ce,{className:`w-3 h-3 text-slate-400`})]})},Ac=()=>(0,Y.jsxs)(`div`,{className:`p-2 border rounded-lg text-xs font-mono`,children:[(0,Y.jsx)(`div`,{children:`📁 src`}),(0,Y.jsx)(`div`,{className:`pl-4`,children:`📁 components (61)`}),(0,Y.jsx)(`div`,{className:`pl-8`,children:`📄 JXButton.tsx`})]}),jc=()=>(0,Y.jsxs)(`div`,{className:`p-2 border rounded-lg text-xs grid grid-cols-3 text-center`,children:[(0,Y.jsx)(`span`,{className:`font-bold`,children:`Inputs`}),(0,Y.jsx)(`span`,{children:`Count: 14`}),(0,Y.jsx)(`span`,{children:`Avg Latency: 0.8ms`})]}),Mc=()=>(0,Y.jsxs)(`div`,{className:`p-2 border rounded-lg text-xs flex gap-2`,children:[(0,Y.jsx)(`span`,{className:`px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded`,children:`Backlog`}),(0,Y.jsx)(`span`,{className:`px-2 py-0.5 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 rounded`,children:`In Dev`})]}),Nc=()=>(0,Y.jsx)(`div`,{className:`p-2 border rounded-lg text-xs text-slate-500`,children:`Infinite Grid • Loaded 1-50 of 2,400`}),Pc=()=>(0,Y.jsxs)(`div`,{className:`flex items-center gap-1 text-xs border p-1.5 rounded`,children:[(0,Y.jsx)(`span`,{children:`Column Header`}),(0,Y.jsx)(`div`,{className:`w-1 h-4 bg-indigo-500 cursor-col-resize`})]}),Fc=()=>(0,Y.jsxs)(`div`,{className:`flex items-center gap-1.5 text-xs border p-1.5 rounded`,children:[(0,Y.jsx)(te,{className:`w-3.5 h-3.5`}),(0,Y.jsx)(`span`,{children:`Visible Columns (8/12)`})]}),Ic=()=>(0,Y.jsx)(`div`,{className:`p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-mono`,children:"WHERE `status` = 'active' AND `cls` = 0"}),Lc=()=>(0,Y.jsxs)(`div`,{className:`w-48 p-2 border rounded-lg text-xs flex flex-col gap-1`,children:[(0,Y.jsx)(`span`,{className:`font-bold`,children:`Faceted Filters`}),(0,Y.jsxs)(`label`,{className:`flex items-center gap-1 text-[11px]`,children:[(0,Y.jsx)(`input`,{type:`checkbox`,defaultChecked:!0}),` WCAG AA Compliant`]})]}),Rc=()=>(0,Y.jsxs)(`div`,{className:`flex items-center justify-between p-2 border rounded-lg text-xs`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,Y.jsx)(V,{className:`w-3.5 h-3.5 text-slate-400`}),(0,Y.jsx)(`span`,{children:`Search records...`})]}),(0,Y.jsxs)(`button`,{className:`flex items-center gap-1 text-indigo-600 font-semibold`,children:[(0,Y.jsx)(oe,{className:`w-3.5 h-3.5`}),` Filter`]})]}),zc=()=>(0,Y.jsxs)(`div`,{className:`p-2 bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 rounded-lg text-xs flex items-center justify-between`,children:[(0,Y.jsx)(`span`,{className:`font-bold text-indigo-700 dark:text-indigo-300`,children:`12 items selected`}),(0,Y.jsx)(`button`,{className:`text-rose-600 font-semibold cursor-pointer`,children:`Batch Delete`})]}),Bc=()=>(0,Y.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,Y.jsxs)(`button`,{className:`px-2.5 py-1 text-xs border rounded flex items-center gap-1 cursor-pointer`,children:[(0,Y.jsx)(M,{className:`w-3.5 h-3.5`}),` CSV`]}),(0,Y.jsxs)(`button`,{className:`px-2.5 py-1 text-xs border rounded flex items-center gap-1 cursor-pointer`,children:[(0,Y.jsx)(M,{className:`w-3.5 h-3.5`}),` JSON`]})]}),Vc=t({AdvancedFilterPanel:()=>Lc,ColumnManager:()=>Fc,ColumnResizer:()=>Pc,DataExportPanel:()=>Bc,EditableTable:()=>kc,ExpandableTable:()=>Oc,FilterBuilder:()=>Ic,InfiniteDataGrid:()=>Nc,KanbanTable:()=>Mc,PivotTable:()=>jc,RowSelectionToolbar:()=>zc,SmartDataTable:()=>Ec,TableToolbar:()=>Rc,TreeTable:()=>Ac,VirtualizedTable:()=>Dc}),Hc=t({default:()=>Uc}),Uc=`// @jxui/react v3.0.0 — category11DataGrids (JXUI v3.0 Unified Component Suite)
// JXUI Category 11: Tables & Data Grids (Compatibility Barrel)
// All individual components are located in ./datagrids/

export * from './datagrids';
`,Wc=()=>(0,Y.jsxs)(`div`,{className:`flex gap-2`,children:[(0,Y.jsxs)(`div`,{className:`w-28 p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-[10px]`,children:[(0,Y.jsx)(`div`,{className:`font-bold mb-1`,children:`Todo (2)`}),(0,Y.jsx)(`div`,{className:`p-1.5 bg-white dark:bg-slate-900 rounded shadow-xs mb-1`,children:`Token CSS`})]}),(0,Y.jsxs)(`div`,{className:`w-28 p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-[10px]`,children:[(0,Y.jsx)(`div`,{className:`font-bold mb-1`,children:`Done (4)`}),(0,Y.jsx)(`div`,{className:`p-1.5 bg-white dark:bg-slate-900 rounded shadow-xs`,children:`Buttons`})]})]}),Gc=()=>(0,Y.jsx)(`div`,{className:`grid grid-cols-3 gap-1.5 w-36`,children:[1,2,3,4,5,6].map(e=>(0,Y.jsx)(`div`,{className:`h-8 bg-slate-200 dark:bg-slate-800 rounded flex items-center justify-center text-xs font-mono cursor-grab active:cursor-grabbing`,children:e},e))}),Kc=()=>(0,Y.jsxs)(`div`,{className:`flex flex-col gap-1 w-44 text-xs`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center gap-1.5 p-1.5 bg-white dark:bg-slate-900 border rounded cursor-grab`,children:[(0,Y.jsx)(le,{className:`w-3.5 h-3.5 text-slate-400`}),(0,Y.jsx)(`span`,{children:`1. High Priority`})]}),(0,Y.jsxs)(`div`,{className:`flex items-center gap-1.5 p-1.5 bg-white dark:bg-slate-900 border rounded cursor-grab`,children:[(0,Y.jsx)(le,{className:`w-3.5 h-3.5 text-slate-400`}),(0,Y.jsx)(`span`,{children:`2. Medium Priority`})]})]}),qc=()=>(0,Y.jsxs)(`div`,{className:`grid grid-cols-2 gap-2 text-xs`,children:[(0,Y.jsx)(`div`,{className:`p-2 border rounded text-center cursor-grab`,children:`Tile A`}),(0,Y.jsx)(`div`,{className:`p-2 border rounded text-center cursor-grab`,children:`Tile B`})]}),Jc=()=>(0,Y.jsxs)(`div`,{className:`text-xs font-mono border p-2 rounded`,children:[(0,Y.jsx)(`div`,{children:`📁 Root`}),(0,Y.jsx)(`div`,{className:`pl-4`,children:`↳ 📄 File A (Draggable)`})]}),Yc=()=>(0,Y.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Drag to reorder folder taxonomy`}),Xc=()=>(0,Y.jsx)(`div`,{className:`p-2 border rounded-lg text-xs flex items-center gap-2`,children:(0,Y.jsx)(`span`,{className:`font-bold text-indigo-600`,children:`3 Items Ghost Drag`})}),Zc=()=>(0,Y.jsxs)(`div`,{className:`w-full h-20 border-2 border-dashed border-indigo-400 rounded-xl flex flex-col items-center justify-center text-xs text-indigo-600 cursor-pointer`,children:[(0,Y.jsx)(O,{className:`w-5 h-5 mb-1`}),(0,Y.jsx)(`span`,{children:`Drop files to upload`})]}),Qc=()=>(0,Y.jsx)(`div`,{className:`p-3 border-2 border-emerald-500/40 bg-emerald-50/20 dark:bg-emerald-950/20 rounded-xl text-center text-xs text-emerald-600`,children:`Magnetic Snap Target`}),$c=()=>(0,Y.jsx)(`div`,{className:`inline-block p-1.5 bg-indigo-600 text-white text-xs rounded-lg shadow-2xl opacity-90`,children:`Ghost Draggable Token`}),el=()=>(0,Y.jsxs)(`div`,{className:`relative w-28 h-14 border rounded p-1 text-[10px]`,children:[`Grid Item`,(0,Y.jsx)(`span`,{className:`absolute bottom-0 right-0 w-2 h-2 bg-slate-400 cursor-se-resize`})]}),tl=()=>(0,Y.jsx)(`div`,{className:`text-xs text-slate-500 font-mono`,children:`8px Snap Grid Alignment`}),nl=()=>(0,Y.jsx)(`div`,{className:`w-48 h-8 border rounded-lg flex items-center px-2 text-xs`,children:(0,Y.jsx)(`div`,{className:`h-4 bg-indigo-500 rounded px-2 text-white text-[10px] cursor-ew-resize`,children:`Sprint 42`})}),rl=()=>(0,Y.jsxs)(`div`,{className:`flex items-center gap-2 text-xs`,children:[(0,Y.jsx)(S,{className:`w-4 h-4 text-indigo-500`}),(0,Y.jsx)(`span`,{children:`Drag appointment to Thursday`})]}),il=()=>(0,Y.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Cross-container event dispatch`}),al=t({DragCalendar:()=>rl,DragDropUpload:()=>Zc,DragGrid:()=>Gc,DragTimeline:()=>nl,DragTree:()=>Yc,FloatingDragPreview:()=>$c,KineticKanban:()=>Wc,MagneticDropZone:()=>Qc,MultiContainerDrag:()=>il,MultiSelectDrag:()=>Xc,NestedDragList:()=>Jc,ResizableGridItem:()=>el,SnapGrid:()=>tl,SortableGrid:()=>qc,SortableList:()=>Kc}),ol=t({default:()=>sl}),sl=`// @jxui/react v3.0.0 — category12DragDrop (JXUI v3.0 Unified Component Suite)
// JXUI Category 12: Drag & Drop (Compatibility Barrel)
// All individual components are located in ./dragdrop/

export * from './dragdrop';
`,cl=()=>(0,Y.jsxs)(`div`,{className:`grid grid-cols-3 gap-2 w-full text-xs`,children:[(0,Y.jsx)(`div`,{className:`p-2 border rounded-lg bg-slate-50 dark:bg-slate-900`,children:`KPI Telemetry`}),(0,Y.jsx)(`div`,{className:`p-2 border rounded-lg bg-slate-50 dark:bg-slate-900`,children:`Traffic Distribution`}),(0,Y.jsx)(`div`,{className:`p-2 border rounded-lg bg-slate-50 dark:bg-slate-900`,children:`Health Matrix`})]}),ll=()=>(0,Y.jsx)(`div`,{className:`w-48 h-20 border rounded-xl bg-radial from-slate-200/50 to-transparent flex items-center justify-center text-xs text-slate-500`,children:`Pan & Zoom Canvas (100%)`}),ul=()=>(0,Y.jsx)(`div`,{className:`p-3 border rounded-xl text-xs font-semibold`,children:`3D Spatial Layer View`}),dl=()=>(0,Y.jsxs)(`div`,{className:`w-56 border rounded-xl shadow-lg overflow-hidden text-xs`,children:[(0,Y.jsxs)(`div`,{className:`bg-slate-100 dark:bg-slate-800 p-2 flex items-center justify-between border-b`,children:[(0,Y.jsx)(`span`,{className:`font-bold`,children:`Terminal Window`}),(0,Y.jsxs)(`div`,{className:`flex gap-1`,children:[(0,Y.jsx)(`span`,{className:`w-2.5 h-2.5 rounded-full bg-amber-400`}),(0,Y.jsx)(`span`,{className:`w-2.5 h-2.5 rounded-full bg-emerald-400`}),(0,Y.jsx)(`span`,{className:`w-2.5 h-2.5 rounded-full bg-rose-400`})]})]}),(0,Y.jsx)(`div`,{className:`p-2 font-mono text-[10px]`,children:`$ jxui --version`})]}),fl=()=>(0,Y.jsxs)(`div`,{className:`p-3 border border-slate-300 dark:border-slate-700 rounded-xl shadow-xl text-xs w-48`,children:[(0,Y.jsx)(`div`,{className:`font-bold pb-1 mb-1 border-b`,children:`Widget Inspector`}),(0,Y.jsx)(`p`,{className:`text-slate-500 text-[11px]`,children:`Draggable surface.`})]}),pl=()=>(0,Y.jsx)(`div`,{className:`text-xs text-slate-500 font-mono`,children:`Pinned Dock (Bottom Edge)`}),ml=()=>(0,Y.jsxs)(`div`,{className:`flex border rounded-lg overflow-hidden text-xs w-48 h-12`,children:[(0,Y.jsx)(`div`,{className:`flex-1 p-2 bg-slate-50 dark:bg-slate-900`,children:`Left Pane`}),(0,Y.jsx)(`div`,{className:`w-1 bg-indigo-500 cursor-col-resize`}),(0,Y.jsx)(`div`,{className:`flex-1 p-2 bg-slate-100 dark:bg-slate-800`,children:`Right Pane`})]}),hl=()=>(0,Y.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Multi-column adjustable workspace layout`}),gl=()=>(0,Y.jsxs)(`div`,{className:`grid grid-cols-2 gap-1.5 w-32 text-[10px] text-center font-bold`,children:[(0,Y.jsx)(`div`,{className:`p-2 bg-indigo-100 dark:bg-indigo-950 rounded`,children:`A`}),(0,Y.jsx)(`div`,{className:`p-2 bg-violet-100 dark:bg-violet-950 rounded`,children:`B`})]}),_l=()=>(0,Y.jsxs)(`div`,{className:`grid grid-cols-3 gap-1.5 w-48 text-[10px]`,children:[(0,Y.jsx)(`div`,{className:`col-span-2 p-2 border rounded font-bold`,children:`Hero Tile`}),(0,Y.jsx)(`div`,{className:`p-2 border rounded font-bold`,children:`Stat`})]}),vl=()=>(0,Y.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Responsive 12-column flex grid`}),yl=()=>(0,Y.jsxs)(`div`,{className:`flex gap-1.5 text-[10px]`,children:[(0,Y.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,Y.jsx)(`div`,{className:`h-10 w-16 border rounded p-1`,children:`Tile 1`}),(0,Y.jsx)(`div`,{className:`h-6 w-16 border rounded p-1`,children:`Tile 2`})]}),(0,Y.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,Y.jsx)(`div`,{className:`h-6 w-16 border rounded p-1`,children:`Tile 3`}),(0,Y.jsx)(`div`,{className:`h-10 w-16 border rounded p-1`,children:`Tile 4`})]})]}),bl=()=>(0,Y.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Auto Layout flex gap distributor`}),xl=()=>(0,Y.jsx)(`div`,{className:`border rounded-lg text-xs p-2`,children:(0,Y.jsx)(`span`,{className:`font-bold`,children:`Inspector Panel Group`})}),Sl=()=>(0,Y.jsxs)(`div`,{className:`flex items-center gap-1.5 text-xs font-semibold`,children:[(0,Y.jsx)(`span`,{className:`px-2 py-0.5 bg-indigo-600 text-white rounded`,children:`Design`}),(0,Y.jsx)(`span`,{className:`px-2 py-0.5 text-slate-500 hover:text-slate-800`,children:`Production`})]}),Cl=t({AdaptiveDashboard:()=>cl,AutoLayout:()=>bl,BentoLayout:()=>_l,DockManager:()=>pl,FloatingWindow:()=>fl,InfiniteCanvas:()=>ll,MasonryLayout:()=>yl,MosaicGrid:()=>gl,PanelGroup:()=>xl,ResizableLayout:()=>hl,ResponsiveGrid:()=>vl,SpatialWorkspace:()=>ul,SplitPane:()=>ml,WindowManager:()=>dl,WorkspaceSwitcher:()=>Sl}),wl=t({default:()=>Tl}),Tl=`// @jxui/react v3.0.0 — category13Layout (JXUI v3.0 Unified Component Suite)
// JXUI Category 13: Layout & Workspace (Compatibility Barrel)
// All individual components are located in ./layout/

export * from './layout';
`,El=({children:e})=>(0,Y.jsx)(`div`,{className:`transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105`,children:e??(0,Y.jsx)(`div`,{className:`p-3 border rounded-xl text-xs font-bold text-center`,children:`Spring Transition (Scale 1.05)`})}),Dl=()=>(0,Y.jsx)(`div`,{className:`w-12 h-12 bg-indigo-600 rounded-xl hover:rounded-full transition-all duration-500 cursor-pointer flex items-center justify-center text-white text-[10px] font-bold`,children:`Morph`}),Ol=()=>(0,Y.jsx)(`div`,{className:`text-xs text-slate-500 font-mono`,children:`Shared Layout ID Transition`}),kl=()=>(0,Y.jsx)(`div`,{className:`p-2 border rounded text-xs animate-fade-in`,children:`Page Enter: Fade & Slide 12px`}),Al=()=>(0,Y.jsxs)(`div`,{className:`flex gap-1.5 text-xs`,children:[(0,Y.jsx)(`div`,{className:`p-1.5 border rounded animate-fade-in [animation-delay:0.1s]`,children:`Item 1`}),(0,Y.jsx)(`div`,{className:`p-1.5 border rounded animate-fade-in [animation-delay:0.2s]`,children:`Item 2`}),(0,Y.jsx)(`div`,{className:`p-1.5 border rounded animate-fade-in [animation-delay:0.3s]`,children:`Item 3`})]}),jl=()=>(0,Y.jsx)(`div`,{className:`text-xs text-slate-500`,children:`IntersectionObserver Viewport Reveal`}),Ml=()=>(0,Y.jsx)(`div`,{className:`p-3 border rounded-xl text-xs text-center font-bold`,children:`Parallax Depth Plane`}),Nl=()=>(0,Y.jsxs)(`div`,{className:`inline-flex items-center gap-1.5 p-2 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 rounded-lg text-xs font-semibold text-indigo-600`,children:[(0,Y.jsx)(U,{className:`w-3.5 h-3.5`}),` Magnetic Cursor Snapping`]}),Pl=()=>(0,Y.jsx)(`div`,{className:`text-xs text-slate-500 font-mono`,children:`Trailing Radial Ambient Halo`}),Fl=()=>(0,Y.jsx)(`div`,{className:`w-full h-10 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x`}),Il=()=>(0,Y.jsx)(`div`,{className:`w-12 h-12 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-full animate-blob blur-xs`}),Ll=()=>(0,Y.jsxs)(`div`,{className:`relative w-36 h-12 border rounded-lg overflow-hidden flex items-center justify-around`,children:[(0,Y.jsx)(`span`,{className:`w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping`}),(0,Y.jsx)(`span`,{className:`w-1 h-1 bg-violet-400 rounded-full animate-ping [animation-delay:0.2s]`}),(0,Y.jsx)(`span`,{className:`w-2 h-2 bg-pink-400 rounded-full animate-ping [animation-delay:0.4s]`})]}),Rl=()=>(0,Y.jsx)(`div`,{className:`p-3 bg-slate-950 text-white rounded-lg text-xs text-center font-bold`,children:`Spotlight Glow Shading`}),zl=()=>(0,Y.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Wave displacement shader simulation`}),Bl=()=>(0,Y.jsxs)(`div`,{className:`flex items-center gap-2 text-xs font-mono`,children:[(0,Y.jsx)(Ve,{className:`w-3.5 h-3.5 text-amber-500`}),(0,Y.jsx)(`span`,{children:`Stage: Keyframe 3/4 Running`})]}),Vl=t({AnimatedGradient:()=>Fl,CursorFollower:()=>Pl,HoverDistortion:()=>zl,LiquidBlob:()=>Il,MagneticCursor:()=>Nl,MorphTransition:()=>Dl,MotionSequence:()=>Bl,PageTransition:()=>kl,ParallaxContainer:()=>Ml,ParticleField:()=>Ll,ScrollReveal:()=>jl,SharedElementTransition:()=>Ol,SpotlightEffect:()=>Rl,SpringTransition:()=>El,StaggeredReveal:()=>Al}),Hl=t({default:()=>Ul}),Ul=`// @jxui/react v3.0.0 — category14Animation (JXUI v3.0 Unified Component Suite)
// JXUI Category 14: Animation & Motion (Compatibility Barrel)
// All individual components are located in ./animation/

export * from './animation';
`,Wl=()=>(0,Y.jsxs)(`div`,{className:`w-full max-w-sm border rounded-2xl p-3 flex flex-col gap-2 bg-white dark:bg-slate-900 shadow-xl text-xs`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center gap-2 pb-2 border-b`,children:[(0,Y.jsx)(x,{className:`w-4 h-4 text-indigo-500`}),(0,Y.jsx)(`span`,{className:`font-bold`,children:`Antigravity AI Agent`})]}),(0,Y.jsx)(`div`,{className:`p-2 bg-slate-100 dark:bg-slate-800 rounded-lg`,children:`How can I assist your workflow today?`})]}),Gl=({content:e=`I analyzed the 18 design categories and synthesized all 290 zero-shift components.`})=>(0,Y.jsxs)(`div`,{className:`flex gap-2.5 text-xs`,children:[(0,Y.jsx)(`div`,{className:`w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0`,children:(0,Y.jsx)(x,{className:`w-3.5 h-3.5`})}),(0,Y.jsx)(`div`,{className:`p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-800 dark:text-slate-200`,children:e})]}),Kl=()=>(0,Y.jsxs)(`div`,{className:`flex items-center gap-2 p-2 border rounded-xl bg-white dark:bg-slate-900 w-full text-xs`,children:[(0,Y.jsx)(xe,{className:`w-4 h-4 text-slate-400 cursor-pointer`}),(0,Y.jsx)(`input`,{placeholder:`Ask AI anything...`,className:`w-full bg-transparent focus:outline-none`}),(0,Y.jsx)(`button`,{className:`p-1.5 bg-indigo-600 text-white rounded-lg cursor-pointer`,children:(0,Y.jsx)(ke,{className:`w-3.5 h-3.5`})})]}),ql=()=>(0,Y.jsxs)(`div`,{className:`flex items-center gap-2 p-2 bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-lg text-xs text-indigo-700 dark:text-indigo-300`,children:[(0,Y.jsx)(U,{className:`w-3.5 h-3.5 animate-spin`}),(0,Y.jsx)(`span`,{children:`Reasoning across codebase...`})]}),Jl=()=>(0,Y.jsxs)(`div`,{className:`font-mono text-xs text-slate-800 dark:text-slate-200 flex items-center gap-1`,children:[(0,Y.jsx)(`span`,{children:`Streaming token sequence`}),(0,Y.jsx)(`span`,{className:`w-1.5 h-3.5 bg-indigo-600 animate-pulse`})]}),Yl=({toolName:e=`run_command`})=>(0,Y.jsxs)(`div`,{className:`p-2.5 border border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs font-mono`,children:[(0,Y.jsxs)(`div`,{className:`text-indigo-600 font-bold flex items-center gap-1`,children:[`⚡ call_tool: `,e]}),(0,Y.jsx)(`div`,{className:`text-slate-500 text-[10px] mt-1`,children:`{ "command": "npm test" }`})]}),Xl=()=>(0,Y.jsx)(`div`,{className:`p-2 bg-slate-950 text-emerald-400 font-mono text-[10px] rounded-lg`,children:`✓ Executed in 142ms • Exit code: 0`}),Zl=()=>(0,Y.jsxs)(`div`,{className:`p-3 border-2 border-indigo-500 rounded-xl bg-indigo-50/20 dark:bg-indigo-950/20 text-xs flex flex-col gap-2`,children:[(0,Y.jsx)(`span`,{className:`font-bold`,children:`Human-in-the-Loop Approval Required`}),(0,Y.jsx)(`p`,{className:`text-[11px] text-slate-500`,children:`Deploy build #894 to production?`}),(0,Y.jsxs)(`div`,{className:`flex gap-2`,children:[(0,Y.jsx)(`button`,{className:`px-3 py-1 bg-emerald-600 text-white rounded font-bold cursor-pointer`,children:`Approve`}),(0,Y.jsx)(`button`,{className:`px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded font-bold cursor-pointer`,children:`Reject`})]})]}),Ql=()=>(0,Y.jsxs)(`div`,{className:`flex flex-col gap-1.5 text-[11px] text-slate-500 border-l-2 border-indigo-400 pl-2`,children:[(0,Y.jsx)(`div`,{children:`1. Read component specifications`}),(0,Y.jsx)(`div`,{children:`2. Generated TypeScript interfaces`}),(0,Y.jsx)(`div`,{className:`text-indigo-600 font-bold`,children:`3. Verifying zero CLS metrics`})]}),$l=()=>(0,Y.jsxs)(`div`,{className:`flex items-center gap-2 text-slate-400 text-xs`,children:[(0,Y.jsx)(`button`,{className:`hover:text-slate-600 cursor-pointer`,children:(0,Y.jsx)(Ie,{className:`w-3.5 h-3.5`})}),(0,Y.jsx)(`button`,{className:`hover:text-slate-600 cursor-pointer`,children:(0,Y.jsx)(Fe,{className:`w-3.5 h-3.5`})}),(0,Y.jsx)(`button`,{className:`hover:text-slate-600 cursor-pointer`,children:(0,Y.jsx)(j,{className:`w-3.5 h-3.5`})}),(0,Y.jsx)(`button`,{className:`hover:text-slate-600 cursor-pointer`,children:(0,Y.jsx)(De,{className:`w-3.5 h-3.5`})})]}),eu=()=>(0,Y.jsx)(`div`,{className:`p-2 border rounded-lg text-xs font-mono`,children:(0,Y.jsx)(`span`,{children:`Context: 18.4k / 200k tokens`})}),tu=()=>(0,Y.jsxs)(`select`,{className:`px-2 py-1 border rounded-lg text-xs bg-white dark:bg-slate-900 cursor-pointer`,children:[(0,Y.jsx)(`option`,{children:`Gemini 2.5 Flash`}),(0,Y.jsx)(`option`,{children:`Gemini 2.5 Pro`}),(0,Y.jsx)(`option`,{children:`Claude 3.7 Sonnet`})]}),nu=()=>(0,Y.jsx)(`div`,{className:`inline-flex items-center gap-1.5 px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-[11px]`,children:(0,Y.jsx)(`span`,{children:`architecture.png (142 KB)`})}),ru=()=>(0,Y.jsxs)(`div`,{className:`p-2 border rounded-lg text-xs flex items-center justify-between`,children:[(0,Y.jsx)(`span`,{className:`font-semibold text-indigo-600`,children:`Source: DESIGN.md`}),(0,Y.jsx)(re,{className:`w-3.5 h-3.5 text-slate-400`})]}),iu=()=>(0,Y.jsxs)(`div`,{className:`flex items-center gap-2 text-xs font-mono`,children:[(0,Y.jsx)(`span`,{className:`p-1.5 border rounded bg-slate-50 dark:bg-slate-900`,children:`Trigger`}),(0,Y.jsx)(`span`,{children:`→`}),(0,Y.jsx)(`span`,{className:`p-1.5 bg-indigo-600 text-white rounded`,children:`LLM Agent`}),(0,Y.jsx)(`span`,{children:`→`}),(0,Y.jsx)(`span`,{className:`p-1.5 border rounded bg-slate-50 dark:bg-slate-900`,children:`Output`})]}),au=t({AIApprovalCard:()=>Zl,AIAttachmentPreview:()=>nu,AIChatPanel:()=>Wl,AICitationCard:()=>ru,AIComposer:()=>Kl,AIContextPanel:()=>eu,AIMessage:()=>Gl,AIModelSelector:()=>tu,AIReasoningTimeline:()=>Ql,AIResponseActions:()=>$l,AIStreamingText:()=>Jl,AIThinkingIndicator:()=>ql,AIToolCall:()=>Yl,AIToolTrace:()=>Xl,AIWorkflowBuilder:()=>iu}),ou=t({default:()=>su}),su=`// @jxui/react v3.0.0 — category15AI (JXUI v3.0 Unified Component Suite)
// JXUI Category 15: AI Components (Compatibility Barrel)
// All individual components are located in ./ai/

export * from './ai';
`,cu=()=>(0,Y.jsxs)(`div`,{className:`w-full border rounded-xl overflow-hidden text-xs`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center gap-2 p-2 bg-slate-100 dark:bg-slate-800 border-b`,children:[(0,Y.jsx)(b,{className:`w-3.5 h-3.5 cursor-pointer`}),(0,Y.jsx)(L,{className:`w-3.5 h-3.5 cursor-pointer`}),(0,Y.jsx)(fe,{className:`w-3.5 h-3.5 cursor-pointer`}),(0,Y.jsx)(k,{className:`w-3.5 h-3.5 cursor-pointer`})]}),(0,Y.jsx)(`div`,{className:`p-3 text-slate-700 dark:text-slate-300`,children:`Start writing your design specification...`})]}),lu=()=>(0,Y.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-2.5 py-1.5 bg-slate-900 text-white rounded-lg shadow-xl text-xs`,children:[(0,Y.jsx)(b,{className:`w-3.5 h-3.5 hover:text-indigo-400 cursor-pointer`}),(0,Y.jsx)(L,{className:`w-3.5 h-3.5 hover:text-indigo-400 cursor-pointer`}),(0,Y.jsx)(fe,{className:`w-3.5 h-3.5 hover:text-indigo-400 cursor-pointer`})]}),uu=()=>(0,Y.jsxs)(`div`,{className:`w-48 p-1 border rounded-xl shadow-xl bg-white dark:bg-slate-900 text-xs flex flex-col gap-0.5`,children:[(0,Y.jsx)(`div`,{className:`px-2 py-1 font-bold text-slate-400 text-[10px]`,children:`BASIC BLOCKS`}),(0,Y.jsx)(`div`,{className:`px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer`,children:`/heading 1`}),(0,Y.jsx)(`div`,{className:`px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer`,children:`/bullet list`}),(0,Y.jsx)(`div`,{className:`px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer`,children:`/code snippet`})]}),du=()=>(0,Y.jsxs)(`div`,{className:`p-2 border rounded-lg text-xs flex items-center justify-between`,children:[(0,Y.jsx)(`span`,{children:`Draggable Block: Paragraph`}),(0,Y.jsx)(`span`,{className:`text-slate-400`,children:`⋮⋮`})]}),fu=()=>(0,Y.jsxs)(`div`,{className:`grid grid-cols-2 gap-2 text-xs border rounded-xl p-2 font-mono`,children:[(0,Y.jsx)(`div`,{className:`p-1 border-r`,children:`# Heading 1`}),(0,Y.jsx)(`div`,{className:`p-1 font-bold font-sans`,children:`Heading 1`})]}),pu=()=>(0,Y.jsxs)(`div`,{className:`p-3 bg-slate-950 text-slate-200 font-mono text-xs rounded-xl`,children:[(0,Y.jsx)(`span`,{className:`text-pink-400`,children:`import`}),` `,`{ MagneticButton }`,` `,(0,Y.jsx)(`span`,{className:`text-pink-400`,children:`from`}),` `,(0,Y.jsx)(`span`,{className:`text-emerald-400`,children:`'@jxui/react'`}),`;`]}),mu=()=>(0,Y.jsxs)(`div`,{className:`font-mono text-xs border rounded-lg p-2`,children:[(0,Y.jsx)(`div`,{className:`text-rose-600 bg-rose-50 dark:bg-rose-950/30 px-1`,children:`- const lag = 34ms;`}),(0,Y.jsx)(`div`,{className:`text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-1`,children:`+ const zeroShift = true;`})]}),hu=()=>(0,Y.jsx)(`div`,{className:`font-mono text-xs p-2 bg-slate-100 dark:bg-slate-900 rounded-lg`,children:(0,Y.jsx)(`div`,{children:`{ "theme": "Tactile Luminescence", "components": 290 }`})}),gu=()=>{let{accent:e,setAccent:t,mode:n,toggleMode:r,getRadiusClass:i}=Q();return(0,Y.jsxs)(`div`,{className:`p-4 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 jx-elevation-1 text-xs flex flex-col gap-3.5 ${i(`card`)}`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,Y.jsxs)(`span`,{className:`font-bold text-slate-900 dark:text-white flex items-center gap-1.5`,children:[(0,Y.jsx)(be,{className:`w-4 h-4 text-indigo-500`}),(0,Y.jsx)(`span`,{children:`Theme Studio Editor`})]}),(0,Y.jsx)(`button`,{type:`button`,onClick:()=>{$.playClick(n===`light`?600:850),r()},"aria-label":`Toggle dark mode`,className:`min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg bg-slate-100 dark:bg-[#1E293B] text-slate-700 dark:text-slate-200 cursor-pointer touch-manipulation active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)]`,children:n===`light`?(0,Y.jsx)(Ne,{className:`w-4 h-4 text-amber-500`}):(0,Y.jsx)(ve,{className:`w-4 h-4 text-indigo-400`})})]}),(0,Y.jsx)(`div`,{className:`flex flex-wrap items-center gap-2`,children:Object.keys(X).map(n=>{let r=X[n],i=e===n;return(0,Y.jsx)(`button`,{type:`button`,onClick:()=>{$.playClick(850),t(n)},"aria-label":`Select ${r.name} accent`,className:`min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer touch-manipulation active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)]`,children:(0,Y.jsx)(`span`,{style:{backgroundColor:r.hex},className:`w-6 h-6 rounded-full transition-transform ${i?`ring-2 ring-[var(--jx-accent)] ring-offset-2 scale-110 shadow-sm`:`opacity-70 hover:opacity-100 hover:scale-105`}`})},n)})})]})},_u=()=>(0,Y.jsxs)(`div`,{className:`flex items-center gap-2 text-xs`,children:[(0,Y.jsx)(`div`,{className:`w-24 h-6 rounded bg-gradient-to-r from-indigo-500 to-pink-500`}),(0,Y.jsx)(`span`,{className:`text-slate-500 font-mono`,children:`2 Color Stops`})]}),vu=()=>(0,Y.jsxs)(`div`,{className:`w-40 p-2 border rounded-lg text-xs flex flex-col gap-1`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,Y.jsx)(P,{className:`w-3 h-3 text-slate-400`}),(0,Y.jsx)(`span`,{children:`Header Glass`})]}),(0,Y.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,Y.jsx)(P,{className:`w-3 h-3 text-slate-400`}),(0,Y.jsx)(`span`,{children:`Bento Grid`})]})]}),yu=()=>(0,Y.jsx)(`div`,{className:`text-xs text-slate-500`,children:`Harmonious OKLCH Palette Generator`}),bu=()=>(0,Y.jsxs)(`div`,{className:`grid grid-cols-4 gap-1 p-1 border rounded-lg w-28`,children:[(0,Y.jsx)(b,{className:`w-4 h-4 p-0.5`}),(0,Y.jsx)(L,{className:`w-4 h-4 p-0.5`}),(0,Y.jsx)(fe,{className:`w-4 h-4 p-0.5`}),(0,Y.jsx)(k,{className:`w-4 h-4 p-0.5`})]}),xu=()=>(0,Y.jsxs)(`div`,{className:`flex gap-2 p-1 border rounded-lg text-sm`,children:[(0,Y.jsx)(`span`,{children:`🚀`}),(0,Y.jsx)(`span`,{children:`✨`}),(0,Y.jsx)(`span`,{children:`🔥`}),(0,Y.jsx)(`span`,{children:`💎`})]}),Su=()=>(0,Y.jsx)(`div`,{className:`p-2 border rounded-lg text-xs font-mono`,children:`--jx-radius-control: 8px`}),Cu=t({BlockEditor:()=>du,CodeEditor:()=>pu,ColorPaletteBuilder:()=>yu,DesignTokenEditor:()=>Su,DiffViewer:()=>mu,EmojiPicker:()=>xu,FloatingEditorToolbar:()=>lu,GradientEditor:()=>_u,IconPicker:()=>bu,JsonEditor:()=>hu,LayerPanel:()=>vu,MarkdownEditor:()=>fu,RichTextEditor:()=>cu,SlashCommandMenu:()=>uu,VisualThemeEditor:()=>gu}),wu=t({default:()=>Tu}),Tu=`// @jxui/react v3.0.0 — category16Editors (JXUI v3.0 Unified Component Suite)
// JXUI Category 16: Editors & Creative Tools (Compatibility Barrel)
// All individual components are located in ./editors/

export * from './editors';
`,Eu=()=>(0,Y.jsxs)(`div`,{className:`w-52 p-3 border rounded-2xl bg-white dark:bg-slate-900 text-xs`,children:[(0,Y.jsxs)(`div`,{className:`flex justify-between font-bold mb-2`,children:[(0,Y.jsx)(`span`,{children:`October 2026`}),(0,Y.jsx)(S,{className:`w-3.5 h-3.5 text-indigo-500`})]}),(0,Y.jsxs)(`div`,{className:`grid grid-cols-7 gap-1 text-center text-[10px]`,children:[[`M`,`T`,`W`,`T`,`F`,`S`,`S`].map((e,t)=>(0,Y.jsx)(`span`,{className:`text-slate-400`,children:e},t)),[...Array(14)].map((e,t)=>(0,Y.jsx)(`span`,{className:`p-1 rounded cursor-pointer ${t===9?`bg-indigo-600 text-white font-bold`:`hover:bg-slate-100 dark:hover:bg-slate-800`}`,children:t+1},t))]})]}),Du=()=>(0,Y.jsx)(`div`,{className:`p-2 border rounded-xl text-xs font-mono`,children:(0,Y.jsx)(`span`,{children:`Oct 12 → Oct 24 (12 Days Selected)`})}),Ou=e=>(0,Y.jsx)(Lt,{...e}),ku=()=>(0,Y.jsxs)(`div`,{className:`w-56 p-2 border rounded-xl text-xs flex flex-col gap-1.5`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,Y.jsx)(`span`,{className:`text-[11px]`,children:`Sprint 1`}),(0,Y.jsx)(`div`,{className:`w-24 h-3 bg-indigo-500 rounded text-[9px] text-white flex items-center px-1`,children:`Active`})]}),(0,Y.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,Y.jsx)(`span`,{className:`text-[11px]`,children:`QA Audit`}),(0,Y.jsx)(`div`,{className:`w-16 h-3 bg-slate-300 dark:bg-slate-700 rounded text-[9px] flex items-center px-1`,children:`Next`})]})]}),Au=()=>(0,Y.jsxs)(`div`,{className:`p-2 border rounded-xl text-xs flex flex-col gap-1`,children:[(0,Y.jsx)(`div`,{className:`font-bold`,children:`Calendar Schedule`}),(0,Y.jsx)(`div`,{className:`p-1 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 rounded text-[11px]`,children:`2:00 PM • Design Review`})]}),ju=()=>(0,Y.jsxs)(`div`,{className:`inline-flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-xs font-mono`,children:[(0,Y.jsx)(ee,{className:`w-3.5 h-3.5 text-indigo-500`}),(0,Y.jsx)(`span`,{children:`14:30 EST`})]}),Mu=()=>(0,Y.jsxs)(`div`,{className:`px-3 py-1.5 border rounded-lg text-xs flex items-center justify-between w-48`,children:[(0,Y.jsx)(`span`,{children:`Last 30 Days`}),(0,Y.jsx)(S,{className:`w-3.5 h-3.5 text-slate-400`})]}),Nu=()=>(0,Y.jsxs)(`div`,{className:`grid grid-cols-4 gap-1 text-[10px] text-center`,children:[(0,Y.jsx)(`span`,{className:`p-1 bg-emerald-100 text-emerald-700 rounded`,children:`9 AM ✓`}),(0,Y.jsx)(`span`,{className:`p-1 bg-emerald-100 text-emerald-700 rounded`,children:`10 AM ✓`}),(0,Y.jsx)(`span`,{className:`p-1 bg-slate-100 text-slate-400 rounded`,children:`11 AM —`}),(0,Y.jsx)(`span`,{className:`p-1 bg-emerald-100 text-emerald-700 rounded`,children:`1 PM ✓`})]}),Pu=()=>(0,Y.jsx)(`div`,{className:`text-xs text-slate-600 dark:text-slate-400`,children:`⚡ Token exporter triggered by user • 2m ago`}),Fu=()=>(0,Y.jsxs)(`div`,{className:`flex items-center gap-2 font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400`,children:[(0,Y.jsx)(`div`,{className:`p-1.5 border rounded bg-slate-50 dark:bg-slate-900`,children:`04d`}),(0,Y.jsx)(`span`,{children:`:`}),(0,Y.jsx)(`div`,{className:`p-1.5 border rounded bg-slate-50 dark:bg-slate-900`,children:`18h`}),(0,Y.jsx)(`span`,{children:`:`}),(0,Y.jsx)(`div`,{className:`p-1.5 border rounded bg-slate-50 dark:bg-slate-900`,children:`42m`})]}),Iu=t({AvailabilityGrid:()=>Nu,CountdownTimer:()=>Fu,DateRangePicker:()=>Mu,EventTimeline:()=>Pu,GanttChart:()=>ku,RangeCalendar:()=>Du,Scheduler:()=>Au,SmartCalendar:()=>Eu,TimePicker:()=>ju,Timeline:()=>Ou}),Lu=t({default:()=>Ru}),Ru=`// @jxui/react v3.0.0 — category17Time (JXUI v3.0 Unified Component Suite)
// JXUI Category 17: Time & Scheduling (Compatibility Barrel)
// All individual components are located in ./time/

export * from './time';
`,zu=()=>(0,Y.jsx)(`div`,{className:`p-2 border rounded-lg text-xs font-mono text-center text-slate-500`,children:`Intersection Sentinel: 142 items loaded`}),Bu=()=>(0,Y.jsx)(`div`,{className:`p-2 border rounded-lg text-xs font-mono`,children:`Virtual Viewport: 8 DOM nodes active`}),Vu=()=>(0,Y.jsx)(`div`,{className:`w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden`,children:(0,Y.jsx)(`div`,{className:`w-2/3 h-full bg-indigo-600`})}),Hu=()=>(0,Y.jsx)(`button`,{className:`w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer`,children:(0,Y.jsx)(v,{className:`w-4 h-4`})}),Uu=()=>(0,Y.jsxs)(`div`,{className:`w-36 h-20 border rounded-xl overflow-hidden relative group cursor-pointer`,children:[(0,Y.jsx)(`div`,{className:`w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xs text-slate-400`,children:`Image Asset`}),(0,Y.jsx)(`div`,{className:`absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white`,children:(0,Y.jsx)(he,{className:`w-4 h-4`})})]}),Wu=()=>{let[e,t]=(0,a.useState)(50);return(0,Y.jsxs)(`div`,{className:`w-44 h-20 border rounded-xl overflow-hidden relative select-none`,children:[(0,Y.jsx)(`div`,{className:`absolute inset-0 bg-indigo-100 dark:bg-indigo-950 flex items-center justify-start pl-2 text-[10px] font-bold`,children:`MUI`}),(0,Y.jsx)(`div`,{style:{width:`${e}%`},className:`absolute inset-y-0 left-0 bg-indigo-600 text-white overflow-hidden flex items-center justify-start pl-2 text-[10px] font-bold`,children:`JXUI`}),(0,Y.jsx)(`input`,{type:`range`,min:0,max:100,value:e,onChange:e=>t(Number(e.target.value)),className:`absolute inset-0 opacity-0 cursor-ew-resize w-full h-full`})]})},Gu=()=>(0,Y.jsxs)(`div`,{className:`w-48 h-24 bg-slate-950 text-white rounded-xl flex flex-col justify-between p-2 text-xs`,children:[(0,Y.jsxs)(`div`,{className:`flex justify-between items-center text-[10px] text-slate-400`,children:[(0,Y.jsx)(`span`,{children:`JXUI Demo Reel`}),(0,Y.jsx)(`span`,{children:`1080p60`})]}),(0,Y.jsx)(`div`,{className:`flex justify-center`,children:(0,Y.jsx)(Te,{className:`w-6 h-6 text-white cursor-pointer hover:scale-110`})}),(0,Y.jsx)(`div`,{className:`w-full h-1 bg-slate-700 rounded-full`,children:(0,Y.jsx)(`div`,{className:`w-1/3 h-full bg-indigo-500 rounded-full`})})]}),Ku=()=>(0,Y.jsx)(`div`,{className:`flex items-end gap-1 h-8 p-1 border rounded-lg`,children:[40,80,20,95,60,30,75,45].map((e,t)=>(0,Y.jsx)(`div`,{style:{height:`${e}%`},className:`w-1.5 bg-indigo-500 rounded-t-sm animate-pulse`},t))}),qu=()=>(0,Y.jsxs)(`div`,{className:`p-2 border rounded-xl inline-flex flex-col items-center gap-1`,children:[(0,Y.jsx)(Ee,{className:`w-12 h-12 text-slate-900 dark:text-white`}),(0,Y.jsx)(`span`,{className:`font-mono text-[9px] text-slate-500`,children:`jxui.dev/spec`})]}),Ju=()=>(0,Y.jsxs)(`div`,{className:`p-2.5 bg-slate-900 text-white rounded-xl text-xs flex flex-col gap-1 w-48 shadow-2xl`,children:[(0,Y.jsx)(`span`,{className:`font-bold text-indigo-400`,children:`Step 1 of 4`}),(0,Y.jsx)(`p`,{className:`text-[11px] text-slate-300`,children:`Click ⌘K anytime to jump across the 290 components.`})]}),Yu=t({AudioVisualizer:()=>Ku,ImageComparison:()=>Wu,ImageLightbox:()=>Uu,InfiniteScroll:()=>zu,QRCodeGenerator:()=>qu,ScrollProgress:()=>Vu,ScrollToTop:()=>Hu,TourGuide:()=>Ju,VideoPlayer:()=>Gu,VirtualList:()=>Bu}),Xu=t({default:()=>Zu}),Zu=`// @jxui/react v3.0.0 — category18Utilities (JXUI v3.0 Unified Component Suite)
// JXUI Category 18: Advanced Utilities (Compatibility Barrel)
// All individual components are located in ./utilities/

export * from './utilities';
`,Qu=t({default:()=>$u}),$u=`// @jxui/react v3.0.0 — AdvancedFilterPanel (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Table, Download, Filter, Columns, ChevronDown, Check, Edit2, Search } from 'lucide-react';

// 12. AdvancedFilterPanel
export const AdvancedFilterPanel: React.FC = () => {
  return (
    <div className="w-48 p-2 border rounded-lg text-xs flex flex-col gap-1">
      <span className="font-bold">Faceted Filters</span>
      <label className="flex items-center gap-1 text-[11px]"><input type="checkbox" defaultChecked /> WCAG AA Compliant</label>
    </div>
  );
};
`,ed=t({default:()=>td}),td=`// @jxui/react v3.0.0 — ColumnManager (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Table, Download, Filter, Columns, ChevronDown, Check, Edit2, Search } from 'lucide-react';

// 10. ColumnManager
export const ColumnManager: React.FC = () => {
  return (
    <div className="flex items-center gap-1.5 text-xs border p-1.5 rounded">
      <Columns className="w-3.5 h-3.5" />
      <span>Visible Columns (8/12)</span>
    </div>
  );
};
`,nd=t({default:()=>rd}),rd=`// @jxui/react v3.0.0 — ColumnResizer (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Table, Download, Filter, Columns, ChevronDown, Check, Edit2, Search } from 'lucide-react';

// 9. ColumnResizer
export const ColumnResizer: React.FC = () => {
  return (
    <div className="flex items-center gap-1 text-xs border p-1.5 rounded">
      <span>Column Header</span>
      <div className="w-1 h-4 bg-indigo-500 cursor-col-resize" />
    </div>
  );
};
`,id=t({default:()=>ad}),ad=`// @jxui/react v3.0.0 — DataExportPanel (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Table, Download, Filter, Columns, ChevronDown, Check, Edit2, Search } from 'lucide-react';

// 15. DataExportPanel
export const DataExportPanel: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <button className="px-2.5 py-1 text-xs border rounded flex items-center gap-1 cursor-pointer"><Download className="w-3.5 h-3.5" /> CSV</button>
      <button className="px-2.5 py-1 text-xs border rounded flex items-center gap-1 cursor-pointer"><Download className="w-3.5 h-3.5" /> JSON</button>
    </div>
  );
};
`,od=t({default:()=>sd}),sd=`// @jxui/react v3.0.0 — EditableTable (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Table, Download, Filter, Columns, ChevronDown, Check, Edit2, Search } from 'lucide-react';

// 4. EditableTable
export const EditableTable: React.FC = () => {
  const [val, setVal] = useState('Production');
  return (
    <div className="flex items-center gap-2 text-xs border p-2 rounded-lg">
      <span className="text-slate-500">Environment:</span>
      <input value={val} onChange={(e) => setVal(e.target.value)} className="font-bold bg-transparent focus:outline-none text-indigo-600" />
      <Edit2 className="w-3 h-3 text-slate-400" />
    </div>
  );
};
`,cd=t({default:()=>ld}),ld=`// @jxui/react v3.0.0 — ExpandableTable (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// 3. ExpandableTable
export const ExpandableTable: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border rounded-xl p-2 text-xs">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        className="w-full flex items-center justify-between cursor-pointer font-bold"
      >
        <span>Design Token Palette</span>
        <ChevronDown className={\`w-3.5 h-3.5 transition-transform \${expanded ? 'rotate-180' : ''}\`} />
      </button>
      {expanded && <div className="pt-2 text-slate-500">5 dynamic accents: Indigo, Violet, Emerald, Rose, Ocean.</div>}
    </div>
  );
};
`,ud=t({default:()=>dd}),dd=`// @jxui/react v3.0.0 — FilterBuilder (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Table, Download, Filter, Columns, ChevronDown, Check, Edit2, Search } from 'lucide-react';

// 11. FilterBuilder
export const FilterBuilder: React.FC = () => {
  return (
    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-mono">
      WHERE \`status\` = 'active' AND \`cls\` = 0
    </div>
  );
};
`,fd=t({default:()=>pd}),pd=`// @jxui/react v3.0.0 — InfiniteDataGrid (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Table, Download, Filter, Columns, ChevronDown, Check, Edit2, Search } from 'lucide-react';

// 8. InfiniteDataGrid
export const InfiniteDataGrid: React.FC = () => {
  return <div className="p-2 border rounded-lg text-xs text-slate-500">Infinite Grid • Loaded 1-50 of 2,400</div>;
};
`,md=t({default:()=>hd}),hd=`// @jxui/react v3.0.0 — KanbanTable (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Table, Download, Filter, Columns, ChevronDown, Check, Edit2, Search } from 'lucide-react';

// 7. KanbanTable
export const KanbanTable: React.FC = () => {
  return (
    <div className="p-2 border rounded-lg text-xs flex gap-2">
      <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded">Backlog</span>
      <span className="px-2 py-0.5 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 rounded">In Dev</span>
    </div>
  );
};
`,gd=t({default:()=>_d}),_d=`// @jxui/react v3.0.0 — PivotTable (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Table, Download, Filter, Columns, ChevronDown, Check, Edit2, Search } from 'lucide-react';

// 6. PivotTable
export const PivotTable: React.FC = () => {
  return (
    <div className="p-2 border rounded-lg text-xs grid grid-cols-3 text-center">
      <span className="font-bold">Inputs</span><span>Count: 14</span><span>Avg Latency: 0.8ms</span>
    </div>
  );
};
`,vd=t({default:()=>yd}),yd=`// @jxui/react v3.0.0 — RowSelectionToolbar (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Table, Download, Filter, Columns, ChevronDown, Check, Edit2, Search } from 'lucide-react';

// 14. RowSelectionToolbar
export const RowSelectionToolbar: React.FC = () => {
  return (
    <div className="p-2 bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 rounded-lg text-xs flex items-center justify-between">
      <span className="font-bold text-indigo-700 dark:text-indigo-300">12 items selected</span>
      <button className="text-rose-600 font-semibold cursor-pointer">Batch Delete</button>
    </div>
  );
};
`,bd=t({default:()=>xd}),xd=`// @jxui/react v3.0.0 — SmartDataTable (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Table, Download, Filter, Columns, ChevronDown, Check, Edit2, Search } from 'lucide-react';

// 1. SmartDataTable
export const SmartDataTable: React.FC = () => {
  return (
    <div className="w-full border rounded-xl overflow-hidden text-xs">
      <div className="bg-slate-100 dark:bg-slate-800 p-2 font-bold flex justify-between">
        <span>Component</span><span>Category</span><span>Status</span>
      </div>
      <div className="p-2 flex justify-between border-t border-slate-200 dark:border-slate-800">
        <span>JXButton</span><span>Inputs</span><span className="text-emerald-500 font-bold">Stable</span>
      </div>
    </div>
  );
};
`,Sd=t({default:()=>Cd}),Cd=`// @jxui/react v3.0.0 — TableToolbar (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Table, Download, Filter, Columns, ChevronDown, Check, Edit2, Search } from 'lucide-react';

// 13. TableToolbar
export const TableToolbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-2 border rounded-lg text-xs">
      <div className="flex items-center gap-1.5"><Search className="w-3.5 h-3.5 text-slate-400" /><span>Search records...</span></div>
      <button className="flex items-center gap-1 text-indigo-600 font-semibold"><Filter className="w-3.5 h-3.5" /> Filter</button>
    </div>
  );
};
`,wd=t({default:()=>Td}),Td=`// @jxui/react v3.0.0 — TreeTable (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Table, Download, Filter, Columns, ChevronDown, Check, Edit2, Search } from 'lucide-react';

// 5. TreeTable
export const TreeTable: React.FC = () => {
  return (
    <div className="p-2 border rounded-lg text-xs font-mono">
      <div>📁 src</div>
      <div className="pl-4">📁 components (61)</div>
      <div className="pl-8">📄 JXButton.tsx</div>
    </div>
  );
};
`,Ed=t({default:()=>Dd}),Dd=`// @jxui/react v3.0.0 — VirtualizedTable (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Table, Download, Filter, Columns, ChevronDown, Check, Edit2, Search } from 'lucide-react';

// 2. VirtualizedTable
export const VirtualizedTable: React.FC = () => {
  return (
    <div className="p-3 border rounded-xl text-xs font-mono">
      <span>Virtualized Engine: 100,000 rows at 60 FPS</span>
    </div>
  );
};
`,Od=t({default:()=>kd}),kd=`// @jxui/react v3.0.0 — AnimatedLineChart (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { TrendingUp, Activity, BarChart2 } from 'lucide-react';

// 2. AnimatedLineChart
export const AnimatedLineChart: React.FC = () => {
  return (
    <div className="w-full h-16 p-1 border rounded-xl flex items-center">
      <svg className="w-full h-full" viewBox="0 0 100 40">
        <path d="M 0 30 Q 25 5 50 20 T 100 10" fill="none" stroke="#4f46e5" strokeWidth="2.5" />
      </svg>
    </div>
  );
};
`,Ad=t({default:()=>jd}),jd=`// @jxui/react v3.0.0 — BubbleChart (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { TrendingUp, Activity, BarChart2 } from 'lucide-react';

// 9. BubbleChart
export const BubbleChart: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-indigo-500/40 border border-indigo-600 flex items-center justify-center text-[8px]">A</div>
      <div className="w-10 h-10 rounded-full bg-emerald-500/40 border border-emerald-600 flex items-center justify-center text-[10px]">B</div>
    </div>
  );
};
`,Md=t({default:()=>Nd}),Nd=`// @jxui/react v3.0.0 — CalendarHeatmap (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { TrendingUp, Activity, BarChart2 } from 'lucide-react';

// 11. CalendarHeatmap
export const CalendarHeatmap: React.FC = () => {
  return (
    <div className="flex gap-1 p-2 border rounded-lg">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="flex flex-col gap-1">
          {[...Array(4)].map((_, j) => (
            <div key={j} className="w-2.5 h-2.5 rounded-xs bg-emerald-500" style={{ opacity: (i + j) % 2 ? 0.9 : 0.3 }} />
          ))}
        </div>
      ))}
    </div>
  );
};
`,Pd=t({default:()=>Fd}),Fd=`// @jxui/react v3.0.0 — DataComparisonChart (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { TrendingUp, Activity, BarChart2 } from 'lucide-react';

// 20. DataComparisonChart
export const DataComparisonChart: React.FC = () => {
  return (
    <div className="flex flex-col gap-1 w-28 text-[10px] font-mono">
      <div className="flex justify-between"><span>Vite</span><span className="font-bold">0.8s</span></div>
      <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded"><div className="w-1/4 h-full bg-indigo-600 rounded" /></div>
    </div>
  );
};
`,Id=t({default:()=>Ld}),Ld=`// @jxui/react v3.0.0 — DonutChart (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { TrendingUp, Activity, BarChart2 } from 'lucide-react';

// 5. DonutChart
export const DonutChart: React.FC = () => {
  return (
    <div className="w-16 h-16 relative flex items-center justify-center">
      <div className="w-14 h-14 rounded-full border-4 border-indigo-600 border-t-emerald-500 border-r-violet-500" />
    </div>
  );
};
`,Rd=t({default:()=>zd}),zd=`// @jxui/react v3.0.0 — FunnelChart (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { TrendingUp, Activity, BarChart2 } from 'lucide-react';

// 15. FunnelChart
export const FunnelChart: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className="w-24 h-2 bg-indigo-600 rounded" />
      <div className="w-16 h-2 bg-indigo-500 rounded" />
      <div className="w-10 h-2 bg-indigo-400 rounded" />
    </div>
  );
};
`,Bd=t({default:()=>Vd}),Vd=`// @jxui/react v3.0.0 — Heatmap (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { TrendingUp, Activity, BarChart2 } from 'lucide-react';

// 10. Heatmap
export const Heatmap: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-1">
      {[1, 2, 4, 3, 2, 4, 1, 3].map((val, idx) => (
        <div key={idx} className={\`w-4 h-4 rounded-xs \${val === 4 ? 'bg-indigo-600' : val === 3 ? 'bg-indigo-400' : 'bg-indigo-200 dark:bg-indigo-900'}\`} />
      ))}
    </div>
  );
};
`,Hd=t({default:()=>Ud}),Ud=`// @jxui/react v3.0.0 — InteractiveGauge (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { TrendingUp, Activity, BarChart2 } from 'lucide-react';

// 19. InteractiveGauge
export const InteractiveGauge: React.FC = () => {
  return (
    <div className="relative w-20 h-10 overflow-hidden flex items-end justify-center">
      <div className="w-20 h-20 rounded-full border-4 border-indigo-500 border-b-transparent -rotate-45" />
      <span className="absolute bottom-0 font-mono text-xs font-bold">88 mph</span>
    </div>
  );
};
`,Wd=t({default:()=>Gd}),Gd=`// @jxui/react v3.0.0 — InteractivePieChart (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { TrendingUp, Activity, BarChart2 } from 'lucide-react';

// 6. InteractivePieChart
export const InteractivePieChart: React.FC = () => {
  return (
    <div className="w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] text-white font-bold cursor-pointer hover:scale-105 transition-transform">
      Pie
    </div>
  );
};
`,Kd=t({default:()=>qd}),qd=`// @jxui/react v3.0.0 — KineticBarChart (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { TrendingUp, Activity, BarChart2 } from 'lucide-react';

// 1. KineticBarChart
export const KineticBarChart: React.FC = () => {
  return (
    <div className="flex items-end gap-2 h-20 p-2 border rounded-xl">
      {[40, 70, 55, 90, 65, 85].map((h, i) => (
        <div key={i} style={{ height: \`\${h}%\` }} className="flex-1 bg-indigo-600 rounded-t-sm hover:brightness-110 transition-all cursor-pointer" />
      ))}
    </div>
  );
};
`,Jd=t({default:()=>Yd}),Yd=`// @jxui/react v3.0.0 — LiquidAreaChart (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { TrendingUp, Activity, BarChart2 } from 'lucide-react';

// 3. LiquidAreaChart
export const LiquidAreaChart: React.FC = () => {
  return (
    <div className="w-full h-16 border rounded-xl overflow-hidden bg-indigo-50/20 dark:bg-indigo-950/20">
      <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
        <path d="M 0 35 Q 25 10 50 22 T 100 8 L 100 40 L 0 40 Z" fill="rgba(79, 70, 229, 0.25)" />
        <path d="M 0 35 Q 25 10 50 22 T 100 8" fill="none" stroke="#4f46e5" strokeWidth="2" />
      </svg>
    </div>
  );
};
`,Xd=t({default:()=>Zd}),Zd=`// @jxui/react v3.0.0 — LiveTicker (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { TrendingUp, Activity, BarChart2 } from 'lucide-react';

// 16. LiveTicker
export const LiveTicker: React.FC = () => {
  return (
    <div className="flex items-center gap-1.5 font-mono text-xs">
      <span className="font-bold text-slate-900 dark:text-white">JX/USD</span>
      <span className="text-emerald-500 font-semibold">$1,489.20</span>
      <span className="text-[10px] text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-1 rounded">+4.2%</span>
    </div>
  );
};
`,Qd=t({default:()=>$d}),$d=`// @jxui/react v3.0.0 — NumberCounter (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { TrendingUp, Activity, BarChart2 } from 'lucide-react';

// 17. NumberCounter
export const NumberCounter: React.FC<{ value?: number }> = ({ value = 14209 }) => {
  return (
    <div className="font-mono text-xl font-bold tabular-nums text-indigo-600 dark:text-indigo-400">
      {value.toLocaleString()}
    </div>
  );
};
`,ef=t({default:()=>tf}),tf=`// @jxui/react v3.0.0 — RadarChart (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { TrendingUp, Activity, BarChart2 } from 'lucide-react';

// 7. RadarChart
export const RadarChart: React.FC = () => {
  return (
    <div className="w-16 h-16 border rounded-full flex items-center justify-center text-[10px] text-indigo-500 font-mono">
      Radar
    </div>
  );
};
`,nf=t({default:()=>rf}),rf=`// @jxui/react v3.0.0 — RadialChart (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { TrendingUp, Activity, BarChart2 } from 'lucide-react';

// 4. RadialChart
export const RadialChart: React.FC = () => {
  return (
    <div className="w-16 h-16 relative flex items-center justify-center font-mono text-[10px] font-bold">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="14" fill="none" stroke="#e2e8f0" strokeWidth="3" />
        <circle cx="18" cy="18" r="14" fill="none" stroke="#4f46e5" strokeWidth="3" strokeDasharray="88" strokeDashoffset="30" />
      </svg>
      <span className="absolute">65%</span>
    </div>
  );
};
`,af=t({default:()=>of}),of=`// @jxui/react v3.0.0 — SankeyDiagram (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { TrendingUp, Activity, BarChart2 } from 'lucide-react';

// 13. SankeyDiagram
export const SankeyDiagram: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-32 text-[10px] font-mono">
      <span className="p-1 bg-slate-200 dark:bg-slate-800 rounded">100 In</span>
      <span>→</span>
      <span className="p-1 bg-emerald-500 text-white rounded">92 Conv</span>
    </div>
  );
};
`,sf=t({default:()=>cf}),cf=`// @jxui/react v3.0.0 — ScatterPlot (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { TrendingUp, Activity, BarChart2 } from 'lucide-react';

// 8. ScatterPlot
export const ScatterPlot: React.FC = () => {
  return (
    <div className="relative w-28 h-16 border rounded-lg p-1">
      <div className="absolute top-2 left-4 w-2 h-2 rounded-full bg-indigo-600" />
      <div className="absolute top-8 left-12 w-2 h-2 rounded-full bg-violet-600" />
      <div className="absolute top-4 left-20 w-2 h-2 rounded-full bg-indigo-600" />
    </div>
  );
};
`,lf=t({default:()=>uf}),uf=`// @jxui/react v3.0.0 — Sparkline (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { TrendingUp, Activity, BarChart2 } from 'lucide-react';

// 18. Sparkline
export const Sparkline: React.FC = () => {
  return (
    <svg className="w-16 h-6" viewBox="0 0 50 20">
      <path d="M 0 15 L 10 18 L 20 8 L 30 12 L 40 4 L 50 9" fill="none" stroke="#10b981" strokeWidth="2" />
    </svg>
  );
};
`,df=t({default:()=>ff}),ff=`// @jxui/react v3.0.0 — Treemap (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { TrendingUp, Activity, BarChart2 } from 'lucide-react';

// 12. Treemap
export const Treemap: React.FC = () => {
  return (
    <div className="w-28 h-16 border rounded grid grid-cols-3 gap-0.5 p-0.5 text-[8px] font-mono text-white text-center">
      <div className="col-span-2 bg-indigo-600 rounded-xs p-1">Core (60%)</div>
      <div className="bg-violet-600 rounded-xs p-1">Lab</div>
    </div>
  );
};
`,pf=t({default:()=>mf}),mf=`// @jxui/react v3.0.0 — WaterfallChart (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { TrendingUp, Activity, BarChart2 } from 'lucide-react';

// 14. WaterfallChart
export const WaterfallChart: React.FC = () => {
  return (
    <div className="flex items-end gap-1.5 h-12">
      <div className="w-3 h-8 bg-emerald-500 rounded-t-xs" />
      <div className="w-3 h-4 bg-rose-500 rounded-t-xs" />
      <div className="w-3 h-10 bg-indigo-600 rounded-t-xs" />
    </div>
  );
};
`,hf=t({default:()=>gf}),gf=`// @jxui/react v3.0.0 — DragCalendar (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Move, GripVertical, UploadCloud, Calendar, Grid } from 'lucide-react';

// 14. DragCalendar
export const DragCalendar: React.FC = () => {
  return (
    <div className="flex items-center gap-2 text-xs">
      <Calendar className="w-4 h-4 text-indigo-500" />
      <span>Drag appointment to Thursday</span>
    </div>
  );
};
`,_f=t({default:()=>vf}),vf=`// @jxui/react v3.0.0 — DragDropUpload (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Move, GripVertical, UploadCloud, Calendar, Grid } from 'lucide-react';

// 8. DragDropUpload
export const DragDropUpload: React.FC = () => {
  return (
    <div className="w-full h-20 border-2 border-dashed border-indigo-400 rounded-xl flex flex-col items-center justify-center text-xs text-indigo-600 cursor-pointer">
      <UploadCloud className="w-5 h-5 mb-1" />
      <span>Drop files to upload</span>
    </div>
  );
};
`,yf=t({default:()=>bf}),bf=`// @jxui/react v3.0.0 — DragGrid (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Move, GripVertical, UploadCloud, Calendar, Grid } from 'lucide-react';

// 2. DragGrid
export const DragGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-1.5 w-36">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="h-8 bg-slate-200 dark:bg-slate-800 rounded flex items-center justify-center text-xs font-mono cursor-grab active:cursor-grabbing">
          {i}
        </div>
      ))}
    </div>
  );
};
`,xf=t({default:()=>Sf}),Sf=`// @jxui/react v3.0.0 — DragTimeline (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Move, GripVertical, UploadCloud, Calendar, Grid } from 'lucide-react';

// 13. DragTimeline
export const DragTimeline: React.FC = () => {
  return (
    <div className="w-48 h-8 border rounded-lg flex items-center px-2 text-xs">
      <div className="h-4 bg-indigo-500 rounded px-2 text-white text-[10px] cursor-ew-resize">Sprint 42</div>
    </div>
  );
};
`,Cf=t({default:()=>wf}),wf=`// @jxui/react v3.0.0 — DragTree (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Move, GripVertical, UploadCloud, Calendar, Grid } from 'lucide-react';

// 6. DragTree
export const DragTree: React.FC = () => {
  return <div className="text-xs text-slate-500">Drag to reorder folder taxonomy</div>;
};
`,Tf=t({default:()=>Ef}),Ef=`// @jxui/react v3.0.0 — FloatingDragPreview (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Move, GripVertical, UploadCloud, Calendar, Grid } from 'lucide-react';

// 10. FloatingDragPreview
export const FloatingDragPreview: React.FC = () => {
  return (
    <div className="inline-block p-1.5 bg-indigo-600 text-white text-xs rounded-lg shadow-2xl opacity-90">
      Ghost Draggable Token
    </div>
  );
};
`,Df=t({default:()=>Of}),Of=`// @jxui/react v3.0.0 — KineticKanban (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Move, GripVertical, UploadCloud, Calendar, Grid } from 'lucide-react';

// 1. KineticKanban
export const KineticKanban: React.FC = () => {
  return (
    <div className="flex gap-2">
      <div className="w-28 p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-[10px]">
        <div className="font-bold mb-1">Todo (2)</div>
        <div className="p-1.5 bg-white dark:bg-slate-900 rounded shadow-xs mb-1">Token CSS</div>
      </div>
      <div className="w-28 p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-[10px]">
        <div className="font-bold mb-1">Done (4)</div>
        <div className="p-1.5 bg-white dark:bg-slate-900 rounded shadow-xs">Buttons</div>
      </div>
    </div>
  );
};
`,kf=t({default:()=>Af}),Af=`// @jxui/react v3.0.0 — MagneticDropZone (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Move, GripVertical, UploadCloud, Calendar, Grid } from 'lucide-react';

// 9. MagneticDropZone
export const MagneticDropZone: React.FC = () => {
  return (
    <div className="p-3 border-2 border-emerald-500/40 bg-emerald-50/20 dark:bg-emerald-950/20 rounded-xl text-center text-xs text-emerald-600">
      Magnetic Snap Target
    </div>
  );
};
`,jf=t({default:()=>Mf}),Mf=`// @jxui/react v3.0.0 — MultiContainerDrag (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Move, GripVertical, UploadCloud, Calendar, Grid } from 'lucide-react';

// 15. MultiContainerDrag
export const MultiContainerDrag: React.FC = () => {
  return <div className="text-xs text-slate-500">Cross-container event dispatch</div>;
};
`,Nf=t({default:()=>Pf}),Pf=`// @jxui/react v3.0.0 — MultiSelectDrag (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Move, GripVertical, UploadCloud, Calendar, Grid } from 'lucide-react';

// 7. MultiSelectDrag
export const MultiSelectDrag: React.FC = () => {
  return (
    <div className="p-2 border rounded-lg text-xs flex items-center gap-2">
      <span className="font-bold text-indigo-600">3 Items Ghost Drag</span>
    </div>
  );
};
`,Ff=t({default:()=>If}),If=`// @jxui/react v3.0.0 — NestedDragList (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Move, GripVertical, UploadCloud, Calendar, Grid } from 'lucide-react';

// 5. NestedDragList
export const NestedDragList: React.FC = () => {
  return (
    <div className="text-xs font-mono border p-2 rounded">
      <div>📁 Root</div>
      <div className="pl-4">↳ 📄 File A (Draggable)</div>
    </div>
  );
};
`,Lf=t({default:()=>Rf}),Rf=`// @jxui/react v3.0.0 — ResizableGridItem (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Move, GripVertical, UploadCloud, Calendar, Grid } from 'lucide-react';

// 11. ResizableGridItem
export const ResizableGridItem: React.FC = () => {
  return (
    <div className="relative w-28 h-14 border rounded p-1 text-[10px]">
      Grid Item
      <span className="absolute bottom-0 right-0 w-2 h-2 bg-slate-400 cursor-se-resize" />
    </div>
  );
};
`,zf=t({default:()=>Bf}),Bf=`// @jxui/react v3.0.0 — SnapGrid (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Move, GripVertical, UploadCloud, Calendar, Grid } from 'lucide-react';

// 12. SnapGrid
export const SnapGrid: React.FC = () => {
  return <div className="text-xs text-slate-500 font-mono">8px Snap Grid Alignment</div>;
};
`,Vf=t({default:()=>Hf}),Hf=`// @jxui/react v3.0.0 — SortableGrid (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Move, GripVertical, UploadCloud, Calendar, Grid } from 'lucide-react';

// 4. SortableGrid
export const SortableGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-2 text-xs">
      <div className="p-2 border rounded text-center cursor-grab">Tile A</div>
      <div className="p-2 border rounded text-center cursor-grab">Tile B</div>
    </div>
  );
};
`,Uf=t({default:()=>Wf}),Wf=`// @jxui/react v3.0.0 — SortableList (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Move, GripVertical, UploadCloud, Calendar, Grid } from 'lucide-react';

// 3. SortableList
export const SortableList: React.FC = () => {
  return (
    <div className="flex flex-col gap-1 w-44 text-xs">
      <div className="flex items-center gap-1.5 p-1.5 bg-white dark:bg-slate-900 border rounded cursor-grab">
        <GripVertical className="w-3.5 h-3.5 text-slate-400" />
        <span>1. High Priority</span>
      </div>
      <div className="flex items-center gap-1.5 p-1.5 bg-white dark:bg-slate-900 border rounded cursor-grab">
        <GripVertical className="w-3.5 h-3.5 text-slate-400" />
        <span>2. Medium Priority</span>
      </div>
    </div>
  );
};
`,Gf=t({default:()=>Kf}),Kf=`// @jxui/react v3.0.0 — BlockEditor (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Bold, 
  Italic, 
  Link, 
  Code, 
  Eye, 
  Layers, 
  Palette, 
  Smile, 
  Check, 
  Plus, 
  Sliders 
} from 'lucide-react';

// 4. BlockEditor
export const BlockEditor: React.FC = () => {
  return (
    <div className="p-2 border rounded-lg text-xs flex items-center justify-between">
      <span>Draggable Block: Paragraph</span>
      <span className="text-slate-400">⋮⋮</span>
    </div>
  );
};
`,qf=t({default:()=>Jf}),Jf=`// @jxui/react v3.0.0 — CodeEditor (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Bold, 
  Italic, 
  Link, 
  Code, 
  Eye, 
  Layers, 
  Palette, 
  Smile, 
  Check, 
  Plus, 
  Sliders 
} from 'lucide-react';

// 6. CodeEditor
export const CodeEditor: React.FC = () => {
  return (
    <div className="p-3 bg-slate-950 text-slate-200 font-mono text-xs rounded-xl">
      <span className="text-pink-400">import</span> {\`{ MagneticButton }\`} <span className="text-pink-400">from</span> <span className="text-emerald-400">'@jxui/react'</span>;
    </div>
  );
};
`,Yf=t({default:()=>Xf}),Xf=`// @jxui/react v3.0.0 — ColorPaletteBuilder (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Bold, 
  Italic, 
  Link, 
  Code, 
  Eye, 
  Layers, 
  Palette, 
  Smile, 
  Check, 
  Plus, 
  Sliders 
} from 'lucide-react';

// 12. ColorPaletteBuilder
export const ColorPaletteBuilder: React.FC = () => {
  return <div className="text-xs text-slate-500">Harmonious OKLCH Palette Generator</div>;
};
`,Zf=t({default:()=>Qf}),Qf=`// @jxui/react v3.0.0 — DesignTokenEditor (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Bold, 
  Italic, 
  Link, 
  Code, 
  Eye, 
  Layers, 
  Palette, 
  Smile, 
  Check, 
  Plus, 
  Sliders 
} from 'lucide-react';

// 15. DesignTokenEditor
export const DesignTokenEditor: React.FC = () => {
  return (
    <div className="p-2 border rounded-lg text-xs font-mono">
      --jx-radius-control: 8px
    </div>
  );
};
`,$f=t({default:()=>ep}),ep=`// @jxui/react v3.0.0 — DiffViewer (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Bold, 
  Italic, 
  Link, 
  Code, 
  Eye, 
  Layers, 
  Palette, 
  Smile, 
  Check, 
  Plus, 
  Sliders 
} from 'lucide-react';

// 7. DiffViewer
export const DiffViewer: React.FC = () => {
  return (
    <div className="font-mono text-xs border rounded-lg p-2">
      <div className="text-rose-600 bg-rose-50 dark:bg-rose-950/30 px-1">- const lag = 34ms;</div>
      <div className="text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-1">+ const zeroShift = true;</div>
    </div>
  );
};
`,tp=t({default:()=>np}),np=`// @jxui/react v3.0.0 — EmojiPicker (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Bold, 
  Italic, 
  Link, 
  Code, 
  Eye, 
  Layers, 
  Palette, 
  Smile, 
  Check, 
  Plus, 
  Sliders 
} from 'lucide-react';

// 14. EmojiPicker
export const EmojiPicker: React.FC = () => {
  return (
    <div className="flex gap-2 p-1 border rounded-lg text-sm">
      <span>🚀</span><span>✨</span><span>🔥</span><span>💎</span>
    </div>
  );
};
`,rp=t({default:()=>ip}),ip=`// @jxui/react v3.0.0 — FloatingEditorToolbar (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Bold, 
  Italic, 
  Link, 
  Code, 
  Eye, 
  Layers, 
  Palette, 
  Smile, 
  Check, 
  Plus, 
  Sliders 
} from 'lucide-react';

// 2. FloatingEditorToolbar
export const FloatingEditorToolbar: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-2 px-2.5 py-1.5 bg-slate-900 text-white rounded-lg shadow-xl text-xs">
      <Bold className="w-3.5 h-3.5 hover:text-indigo-400 cursor-pointer" />
      <Italic className="w-3.5 h-3.5 hover:text-indigo-400 cursor-pointer" />
      <Link className="w-3.5 h-3.5 hover:text-indigo-400 cursor-pointer" />
    </div>
  );
};
`,ap=t({default:()=>op}),op=`// @jxui/react v3.0.0 — GradientEditor (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Bold, 
  Italic, 
  Link, 
  Code, 
  Eye, 
  Layers, 
  Palette, 
  Smile, 
  Check, 
  Plus, 
  Sliders 
} from 'lucide-react';

// 10. GradientEditor
export const GradientEditor: React.FC = () => {
  return (
    <div className="flex items-center gap-2 text-xs">
      <div className="w-24 h-6 rounded bg-gradient-to-r from-indigo-500 to-pink-500" />
      <span className="text-slate-500 font-mono">2 Color Stops</span>
    </div>
  );
};
`,sp=t({default:()=>cp}),cp=`// @jxui/react v3.0.0 — IconPicker (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Bold, 
  Italic, 
  Link, 
  Code, 
  Eye, 
  Layers, 
  Palette, 
  Smile, 
  Check, 
  Plus, 
  Sliders 
} from 'lucide-react';

// 13. IconPicker
export const IconPicker: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-1 p-1 border rounded-lg w-28">
      <Bold className="w-4 h-4 p-0.5" />
      <Italic className="w-4 h-4 p-0.5" />
      <Link className="w-4 h-4 p-0.5" />
      <Code className="w-4 h-4 p-0.5" />
    </div>
  );
};
`,lp=t({default:()=>up}),up=`// @jxui/react v3.0.0 — JsonEditor (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Bold, 
  Italic, 
  Link, 
  Code, 
  Eye, 
  Layers, 
  Palette, 
  Smile, 
  Check, 
  Plus, 
  Sliders 
} from 'lucide-react';

// 8. JsonEditor
export const JsonEditor: React.FC = () => {
  return (
    <div className="font-mono text-xs p-2 bg-slate-100 dark:bg-slate-900 rounded-lg">
      <div>{\`{ "theme": "Tactile Luminescence", "components": 290 }\`}</div>
    </div>
  );
};
`,dp=t({default:()=>fp}),fp=`// @jxui/react v3.0.0 — LayerPanel (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Bold, 
  Italic, 
  Link, 
  Code, 
  Eye, 
  Layers, 
  Palette, 
  Smile, 
  Check, 
  Plus, 
  Sliders 
} from 'lucide-react';

// 11. LayerPanel
export const LayerPanel: React.FC = () => {
  return (
    <div className="w-40 p-2 border rounded-lg text-xs flex flex-col gap-1">
      <div className="flex items-center justify-between"><Eye className="w-3 h-3 text-slate-400" /><span>Header Glass</span></div>
      <div className="flex items-center justify-between"><Eye className="w-3 h-3 text-slate-400" /><span>Bento Grid</span></div>
    </div>
  );
};
`,pp=t({default:()=>mp}),mp=`// @jxui/react v3.0.0 — MarkdownEditor (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Bold, 
  Italic, 
  Link, 
  Code, 
  Eye, 
  Layers, 
  Palette, 
  Smile, 
  Check, 
  Plus, 
  Sliders 
} from 'lucide-react';

// 5. MarkdownEditor
export const MarkdownEditor: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-2 text-xs border rounded-xl p-2 font-mono">
      <div className="p-1 border-r"># Heading 1</div>
      <div className="p-1 font-bold font-sans">Heading 1</div>
    </div>
  );
};
`,hp=t({default:()=>gp}),gp=`// @jxui/react v3.0.0 — RichTextEditor (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Bold, 
  Italic, 
  Link, 
  Code, 
  Eye, 
  Layers, 
  Palette, 
  Smile, 
  Check, 
  Plus, 
  Sliders 
} from 'lucide-react';

// 1. RichTextEditor
export const RichTextEditor: React.FC = () => {
  return (
    <div className="w-full border rounded-xl overflow-hidden text-xs">
      <div className="flex items-center gap-2 p-2 bg-slate-100 dark:bg-slate-800 border-b">
        <Bold className="w-3.5 h-3.5 cursor-pointer" />
        <Italic className="w-3.5 h-3.5 cursor-pointer" />
        <Link className="w-3.5 h-3.5 cursor-pointer" />
        <Code className="w-3.5 h-3.5 cursor-pointer" />
      </div>
      <div className="p-3 text-slate-700 dark:text-slate-300">Start writing your design specification...</div>
    </div>
  );
};
`,_p=t({default:()=>vp}),vp=`// @jxui/react v3.0.0 — SlashCommandMenu (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Bold, 
  Italic, 
  Link, 
  Code, 
  Eye, 
  Layers, 
  Palette, 
  Smile, 
  Check, 
  Plus, 
  Sliders 
} from 'lucide-react';

// 3. SlashCommandMenu
export const SlashCommandMenu: React.FC = () => {
  return (
    <div className="w-48 p-1 border rounded-xl shadow-xl bg-white dark:bg-slate-900 text-xs flex flex-col gap-0.5">
      <div className="px-2 py-1 font-bold text-slate-400 text-[10px]">BASIC BLOCKS</div>
      <div className="px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">/heading 1</div>
      <div className="px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">/bullet list</div>
      <div className="px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">/code snippet</div>
    </div>
  );
};
`,yp=t({default:()=>bp}),bp=`// @jxui/react v3.0.0 — VisualThemeEditor (JXUI v3.0 Unified Component Suite)
import React from 'react';
import { useJXTheme, AccentColor, ACCENT_PALETTES } from '../../../context/JXThemeContext';
import { tactile } from '../../../utils/tactileAudio';
import { Palette, Sun, Moon } from 'lucide-react';

// 9. VisualThemeEditor
export const VisualThemeEditor: React.FC = () => {
  const { accent, setAccent, mode, toggleMode, getRadiusClass } = useJXTheme();

  return (
    <div className={\`p-4 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 jx-elevation-1 text-xs flex flex-col gap-3.5 \${getRadiusClass('card')}\`}>
      <div className="flex items-center justify-between">
        <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
          <Palette className="w-4 h-4 text-indigo-500" />
          <span>Theme Studio Editor</span>
        </span>
        <button
          type="button"
          onClick={() => {
            tactile.playClick(mode === 'light' ? 600 : 850);
            toggleMode();
          }}
          aria-label="Toggle dark mode"
          className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg bg-slate-100 dark:bg-[#1E293B] text-slate-700 dark:text-slate-200 cursor-pointer touch-manipulation active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)]"
        >
          {mode === 'light' ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-indigo-400" />}
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {(Object.keys(ACCENT_PALETTES) as AccentColor[]).map((key) => {
          const pal = ACCENT_PALETTES[key];
          const active = accent === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => {
                tactile.playClick(850);
                setAccent(key);
              }}
              aria-label={\`Select \${pal.name} accent\`}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer touch-manipulation active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)]"
            >
              <span
                style={{ backgroundColor: pal.hex }}
                className={\`w-6 h-6 rounded-full transition-transform \${
                  active ? 'ring-2 ring-[var(--jx-accent)] ring-offset-2 scale-110 shadow-sm' : 'opacity-70 hover:opacity-100 hover:scale-105'
                }\`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
`,xp=t({default:()=>Sp}),Sp=`// @jxui/react v3.0.0 — AnimatedAlert (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  XCircle, 
  RotateCcw, 
  X, 
  Wifi, 
  WifiOff, 
  PartyPopper, 
  RefreshCw,
  Bell
} from 'lucide-react';

// 5. AnimatedAlert
export const AnimatedAlert: React.FC = () => {
  return (
    <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 rounded-xl text-xs flex items-center gap-2 text-amber-800 dark:text-amber-200 animate-pulse">
      <AlertTriangle className="w-4 h-4 text-amber-500" />
      <span>Canary rollout currently at 25% traffic</span>
    </div>
  );
};
`,Cp=t({default:()=>wp}),wp=`// @jxui/react v3.0.0 — ConnectionStatus (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  XCircle, 
  RotateCcw, 
  X, 
  Wifi, 
  WifiOff, 
  PartyPopper, 
  RefreshCw,
  Bell
} from 'lucide-react';

// 13. ConnectionStatus
export const ConnectionStatus: React.FC = () => {
  return (
    <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
      <Wifi className="w-3.5 h-3.5" />
      <span>Websocket Connected</span>
    </div>
  );
};
`,Tp=t({default:()=>Ep}),Ep=`// @jxui/react v3.0.0 — ErrorBoundaryFallback (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  XCircle, 
  RotateCcw, 
  X, 
  Wifi, 
  WifiOff, 
  PartyPopper, 
  RefreshCw,
  Bell
} from 'lucide-react';

// 15. ErrorBoundaryFallback
export const ErrorBoundaryFallback: React.FC = () => {
  return (
    <div className="p-4 border border-rose-300 dark:border-rose-900 bg-rose-50/50 dark:bg-rose-950/20 rounded-xl text-xs text-rose-800 dark:text-rose-200 flex items-center justify-between">
      <div>
        <span className="font-bold">Execution Error</span>
        <p className="text-[11px] text-rose-600">Component crashed safely.</p>
      </div>
      <button className="px-2.5 py-1 bg-rose-600 text-white rounded text-xs flex items-center gap-1 cursor-pointer">
        <RefreshCw className="w-3 h-3" /> Retry
      </button>
    </div>
  );
};
`,Dp=t({default:()=>Op}),Op=`// @jxui/react v3.0.0 — FeedbackGlassNotification (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  XCircle, 
  RotateCcw, 
  X, 
  Wifi, 
  WifiOff, 
  PartyPopper, 
  RefreshCw,
  Bell
} from 'lucide-react';

// 4. FeedbackGlassNotification (GlassNotification feedback variant)
export const FeedbackGlassNotification: React.FC = () => {
  return (
    <div className="p-3 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/40 dark:border-slate-700 rounded-xl shadow-lg text-xs flex items-center gap-2">
      <Info className="w-4 h-4 text-sky-500" />
      <span>Frosted Glass Ambient Notification</span>
    </div>
  );
};
`,kp=t({default:()=>Ap}),Ap=`// @jxui/react v3.0.0 — InlineAlert (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  XCircle, 
  RotateCcw, 
  X, 
  Wifi, 
  WifiOff, 
  PartyPopper, 
  RefreshCw,
  Bell
} from 'lucide-react';

// 6. InlineAlert
export const InlineAlert: React.FC = () => {
  return (
    <div className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs text-slate-700 dark:text-slate-300 border-l-4 border-indigo-600">
      Compact inline message notification.
    </div>
  );
};
`,jp=t({default:()=>Mp}),Mp=`// @jxui/react v3.0.0 — LiveActivity (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  XCircle, 
  RotateCcw, 
  X, 
  Wifi, 
  WifiOff, 
  PartyPopper, 
  RefreshCw,
  Bell
} from 'lucide-react';

// 10. LiveActivity
export const LiveActivity: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black text-white rounded-full text-xs shadow-xl">
      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
      <span>AI Inference in Progress • 42 tok/s</span>
    </div>
  );
};
`,Np=t({default:()=>Pp}),Pp=`// @jxui/react v3.0.0 — NotificationCenter (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  XCircle, 
  RotateCcw, 
  X, 
  Wifi, 
  WifiOff, 
  PartyPopper, 
  RefreshCw,
  Bell
} from 'lucide-react';

// 3. NotificationCenter
export const NotificationCenter: React.FC = () => {
  return (
    <div className="w-64 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl text-xs flex flex-col gap-2">
      <div className="flex items-center justify-between font-bold pb-1 border-b">
        <span>Activity Log</span>
        <Bell className="w-3.5 h-3.5 text-slate-400" />
      </div>
      <p className="text-slate-500 text-[11px]">No unread system alerts.</p>
    </div>
  );
};
`,Fp=t({default:()=>Ip}),Ip=`// @jxui/react v3.0.0 — NotificationStack (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  XCircle, 
  RotateCcw, 
  X, 
  Wifi, 
  WifiOff, 
  PartyPopper, 
  RefreshCw,
  Bell
} from 'lucide-react';

// 2. NotificationStack
export const NotificationStack: React.FC = () => {
  return (
    <div className="relative w-64 h-16">
      <div className="absolute inset-x-2 top-0 p-2 bg-slate-200 dark:bg-slate-800 rounded-lg text-xs opacity-50 shadow-xs" />
      <div className="absolute inset-x-1 top-2 p-2 bg-slate-100 dark:bg-slate-800/80 rounded-lg text-xs opacity-80 shadow-sm" />
      <div className="absolute inset-x-0 top-4 p-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg shadow-md text-xs font-semibold">
        3 Active Notifications
      </div>
    </div>
  );
};
`,Lp=t({default:()=>Rp}),Rp=`// @jxui/react v3.0.0 — ProgressToast (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  XCircle, 
  RotateCcw, 
  X, 
  Wifi, 
  WifiOff, 
  PartyPopper, 
  RefreshCw,
  Bell
} from 'lucide-react';

// 8. ProgressToast
export const ProgressToast: React.FC = () => {
  return (
    <div className="p-3 bg-white dark:bg-slate-900 border rounded-xl shadow-lg text-xs w-60 flex flex-col gap-1.5">
      <div className="flex justify-between font-semibold">
        <span>Exporting tokens...</span>
        <span className="font-mono">78%</span>
      </div>
      <div className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
        <div className="w-[78%] h-full bg-indigo-600" />
      </div>
    </div>
  );
};
`,zp=t({default:()=>Bp}),Bp=`// @jxui/react v3.0.0 — PulseIndicator (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  XCircle, 
  RotateCcw, 
  X, 
  Wifi, 
  WifiOff, 
  PartyPopper, 
  RefreshCw,
  Bell
} from 'lucide-react';

// 12. PulseIndicator
export const PulseIndicator: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center w-6 h-6">
      <span className="absolute w-5 h-5 rounded-full bg-indigo-400 opacity-75 animate-ping" />
      <span className="relative w-3 h-3 rounded-full bg-indigo-600" />
    </div>
  );
};
`,Vp=t({default:()=>Hp}),Hp=`// @jxui/react v3.0.0 — SmartBanner (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  XCircle, 
  RotateCcw, 
  X, 
  Wifi, 
  WifiOff, 
  PartyPopper, 
  RefreshCw,
  Bell
} from 'lucide-react';

// 7. SmartBanner
export const SmartBanner: React.FC = () => {
  return (
    <div className="w-full px-4 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-xs flex items-center justify-between rounded-lg">
      <span>🎉 JXUI 2.0 is live with 290 components!</span>
      <button className="text-white/80 hover:text-white"><X className="w-3.5 h-3.5" /></button>
    </div>
  );
};
`,Up=t({default:()=>Wp}),Wp=`// @jxui/react v3.0.0 — SmartToast (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  XCircle, 
  RotateCcw, 
  X, 
  Wifi, 
  WifiOff, 
  PartyPopper, 
  RefreshCw,
  Bell
} from 'lucide-react';

// 1. SmartToast
export const SmartToast: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  return (
    <div className={\`p-3 max-w-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl \${getRadiusClass('card')} flex items-center justify-between text-xs\`}>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
        <span className="font-semibold text-slate-800 dark:text-slate-200">Asset uploaded</span>
      </div>
      <button className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline flex items-center gap-1 cursor-pointer">
        <RotateCcw className="w-3 h-3" /> Undo
      </button>
    </div>
  );
};
`,Gp=t({default:()=>Kp}),Kp=`// @jxui/react v3.0.0 — StatusIndicator (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  XCircle, 
  RotateCcw, 
  X, 
  Wifi, 
  WifiOff, 
  PartyPopper, 
  RefreshCw,
  Bell
} from 'lucide-react';

// 11. StatusIndicator
export const StatusIndicator: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
      <span>Operational</span>
    </div>
  );
};
`,qp=t({default:()=>Jp}),Jp=`// @jxui/react v3.0.0 — SuccessCelebration (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  XCircle, 
  RotateCcw, 
  X, 
  Wifi, 
  WifiOff, 
  PartyPopper, 
  RefreshCw,
  Bell
} from 'lucide-react';

// 14. SuccessCelebration
export const SuccessCelebration: React.FC = () => {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 rounded-lg text-xs text-emerald-700 dark:text-emerald-300 font-semibold">
      <PartyPopper className="w-4 h-4 text-emerald-500" />
      <span>All 12 Test Suites Passed!</span>
    </div>
  );
};
`,Yp=t({default:()=>Xp}),Xp=`// @jxui/react v3.0.0 — UndoNotification (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  XCircle, 
  RotateCcw, 
  X, 
  Wifi, 
  WifiOff, 
  PartyPopper, 
  RefreshCw,
  Bell
} from 'lucide-react';

// 9. UndoNotification
export const UndoNotification: React.FC = () => {
  return (
    <div className="p-2.5 bg-slate-900 text-white rounded-lg text-xs flex items-center justify-between w-64 shadow-xl">
      <span>File removed from tree</span>
      <button className="text-indigo-400 font-bold hover:underline cursor-pointer">Undo (5s)</button>
    </div>
  );
};
`,Zp=t({default:()=>Qp}),Qp=`// @jxui/react v3.0.0 — AdaptiveGlass (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Sparkles, 
  Layers, 
  Search, 
  Sliders, 
  Bell, 
  X, 
  Folder, 
  FileText, 
  Settings, 
  Maximize2,
  ChevronRight,
  Info
} from 'lucide-react';

// 3. AdaptiveGlass
export interface AdaptiveGlassProps {
  children?: React.ReactNode;
  className?: string;
}
export const AdaptiveGlass: React.FC<AdaptiveGlassProps> = ({ children, className = '' }) => {
  const { palette, getRadiusClass } = useJXTheme();
  return (
    <div className={\`p-5 bg-gradient-to-br \${palette.softBg} backdrop-blur-lg border \${palette.border} shadow-md \${getRadiusClass('card')} \${className}\`}>
      {children ?? <p className="text-sm font-medium text-slate-800 dark:text-slate-200">Adaptive Glass Reacting to Theme Tint</p>}
    </div>
  );
};
`,$p=t({default:()=>em}),em=`// @jxui/react v3.0.0 — DynamicGlassPanel (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Sparkles, 
  Layers, 
  Search, 
  Sliders, 
  Bell, 
  X, 
  Folder, 
  FileText, 
  Settings, 
  Maximize2,
  ChevronRight,
  Info
} from 'lucide-react';

// 4. DynamicGlassPanel
export interface DynamicGlassPanelProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}
export const DynamicGlassPanel: React.FC<DynamicGlassPanelProps> = ({ title = 'Telemetry Stream', children, className = '' }) => {
  const { getRadiusClass } = useJXTheme();
  const [blurLevel, setBlurLevel] = useState(16);
  return (
    <div
      style={{ backdropFilter: \`blur(\${blurLevel}px)\` }}
      className={\`p-4 bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/50 shadow-xl \${getRadiusClass('card')} \${className}\`}
    >
      <div className="flex items-center justify-between pb-3 border-b border-white/20 dark:border-slate-800">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">{title}</h4>
        <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-mono">
          <span>Blur:</span>
          <input
            type="range"
            min={4}
            max={32}
            value={blurLevel}
            onChange={(e) => setBlurLevel(Number(e.target.value))}
            className="w-16 h-1 accent-indigo-500 cursor-pointer"
          />
          <span>{blurLevel}px</span>
        </div>
      </div>
      <div className="pt-3 text-sm text-slate-700 dark:text-slate-300">{children ?? <p>Dynamic hardware-accelerated backdrop blur filter.</p>}</div>
    </div>
  );
};
`,tm=t({default:()=>nm}),nm=`// @jxui/react v3.0.0 — FrostedGlass (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Sparkles, 
  Layers, 
  Search, 
  Sliders, 
  Bell, 
  X, 
  Folder, 
  FileText, 
  Settings, 
  Maximize2,
  ChevronRight,
  Info
} from 'lucide-react';

// 2. FrostedGlass
export interface FrostedGlassProps {
  children?: React.ReactNode;
  className?: string;
}
export const FrostedGlass: React.FC<FrostedGlassProps> = ({ children, className = '' }) => {
  const { getRadiusClass } = useJXTheme();
  return (
    <div className={\`p-5 bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-slate-200/60 dark:border-slate-800/80 shadow-lg \${getRadiusClass('card')} \${className}\`}>
      {children ?? <p className="text-sm font-medium text-slate-800 dark:text-slate-200">Heavy Frosted Glass with Deep Diffuse Blur</p>}
    </div>
  );
};
`,rm=t({default:()=>im}),im=`// @jxui/react v3.0.0 — GlassButton (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Sparkles, 
  Layers, 
  Search, 
  Sliders, 
  Bell, 
  X, 
  Folder, 
  FileText, 
  Settings, 
  Maximize2,
  ChevronRight,
  Info
} from 'lucide-react';

// 15. GlassButton
export interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}
export const GlassButton: React.FC<GlassButtonProps> = ({ children = 'Glass Action', className = '', ...props }) => {
  const { getRadiusClass } = useJXTheme();
  return (
    <button
      className={\`px-4 py-2 text-sm font-semibold text-slate-900 dark:text-white bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/60 dark:border-white/10 hover:bg-white/60 dark:hover:bg-slate-700/60 active:scale-95 transition-all shadow-xs cursor-pointer \${getRadiusClass('control')} \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
};
`,am=t({default:()=>om}),om=`// @jxui/react v3.0.0 — GlassCard (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Sparkles, 
  Layers, 
  Search, 
  Sliders, 
  Bell, 
  X, 
  Folder, 
  FileText, 
  Settings, 
  Maximize2,
  ChevronRight,
  Info
} from 'lucide-react';

// 5. GlassCard
export interface GlassCardProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}
export const GlassCard: React.FC<GlassCardProps> = ({ title = 'Luminescent Metric', subtitle = 'Zero latency event loop', children, className = '' }) => {
  const { getRadiusClass } = useJXTheme();
  return (
    <div className={\`p-5 bg-white/70 dark:bg-[#111827]/70 backdrop-blur-xl border border-white/50 dark:border-slate-800 jx-elevation-2 shadow-lg hover:shadow-2xl transition-all duration-300 \${getRadiusClass('card')} \${className}\`}>
      <h3 className="font-bold text-slate-900 dark:text-white text-base">{title}</h3>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 mb-3">{subtitle}</p>
      {children}
    </div>
  );
};
`,sm=t({default:()=>cm}),cm=`// @jxui/react v3.0.0 — GlassCommandMenu (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Sparkles, 
  Layers, 
  Search, 
  Sliders, 
  Bell, 
  X, 
  Folder, 
  FileText, 
  Settings, 
  Maximize2,
  ChevronRight,
  Info
} from 'lucide-react';

// 18. GlassCommandMenu
export interface GlassCommandMenuProps {
  placeholder?: string;
}
export const GlassCommandMenu: React.FC<GlassCommandMenuProps> = ({ placeholder = 'Type a command or jump...' }) => {
  const { getRadiusClass } = useJXTheme();
  return (
    <div className={\`w-full max-w-lg p-2 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/50 dark:border-slate-800 shadow-2xl \${getRadiusClass('card')}\`}>
      <div className="flex items-center gap-2 px-3 py-1.5 border-b border-slate-200/50 dark:border-slate-800">
        <Search className="w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder={placeholder}
          className="w-full bg-transparent text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
        />
      </div>
      <div className="p-2 text-[11px] text-slate-500 font-mono">Suggested: /theme, /export, /audit</div>
    </div>
  );
};
`,lm=t({default:()=>um}),um=`// @jxui/react v3.0.0 — GlassDock (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Sparkles, 
  Layers, 
  Search, 
  Sliders, 
  Bell, 
  X, 
  Folder, 
  FileText, 
  Settings, 
  Maximize2,
  ChevronRight,
  Info
} from 'lucide-react';

// 11. GlassDock
export interface GlassDockProps {
  icons?: React.ComponentType<{ className?: string }>[];
}
export const GlassDock: React.FC<GlassDockProps> = ({ icons = [Folder, FileText, Settings, Bell, Sparkles] }) => {
  const { getRadiusClass } = useJXTheme();
  return (
    <div className={\`inline-flex items-center gap-2 px-3 py-2 bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl border border-white/50 dark:border-slate-800/80 shadow-2xl \${getRadiusClass('pill')}\`}>
      {icons.map((Icon, idx) => (
        <button
          key={idx}
          type="button"
          className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/60 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:-translate-y-1.5 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer shadow-xs"
        >
          <Icon className="w-4 h-4" />
        </button>
      ))}
    </div>
  );
};
`,dm=t({default:()=>fm}),fm=`// @jxui/react v3.0.0 — GlassFloatingPanel (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Sparkles, 
  Layers, 
  Search, 
  Sliders, 
  Bell, 
  X, 
  Folder, 
  FileText, 
  Settings, 
  Maximize2,
  ChevronRight,
  Info
} from 'lucide-react';

// 19. GlassFloatingPanel
export interface GlassFloatingPanelProps {
  title?: string;
  children?: React.ReactNode;
}
export const GlassFloatingPanel: React.FC<GlassFloatingPanelProps> = ({ title = 'Live Performance Monitor', children }) => {
  const { getRadiusClass } = useJXTheme();
  return (
    <div className={\`p-4 w-72 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/40 dark:border-slate-800 shadow-2xl \${getRadiusClass('card')}\`}>
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200/40 dark:border-slate-800">
        <span className="text-xs font-bold text-slate-900 dark:text-white">{title}</span>
        <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
      </div>
      <div className="text-xs text-slate-600 dark:text-slate-400">{children ?? <p>60 FPS • 0.8ms Frame Budget</p>}</div>
    </div>
  );
};
`,pm=t({default:()=>mm}),mm=`// @jxui/react v3.0.0 — GlassInput (JXUI v3.0 Unified Component Suite)
import React from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 14. GlassInput
export interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  children?: React.ReactNode;
}

export const GlassInput: React.FC<GlassInputProps> = ({ label, className = '', children, ...props }) => {
  const { getRadiusClass } = useJXTheme();
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-xs font-medium text-slate-600 dark:text-slate-400">{label}</label>}
      <input
        className={\`px-3 py-2 text-sm text-slate-900 dark:text-white bg-white/40 dark:bg-slate-900/40 backdrop-blur-lg border border-slate-300/60 dark:border-slate-700/60 placeholder-slate-400 focus:outline-none focus:border-indigo-500 \${getRadiusClass('control')} transition-all \${className}\`}
        {...props}
      />
    </div>
  );
};
`,hm=t({default:()=>gm}),gm=`// @jxui/react v3.0.0 — GlassModal (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Sparkles, 
  Layers, 
  Search, 
  Sliders, 
  Bell, 
  X, 
  Folder, 
  FileText, 
  Settings, 
  Maximize2,
  ChevronRight,
  Info
} from 'lucide-react';

// 8. GlassModal
export interface GlassModalProps {
  open?: boolean;
  onClose?: () => void;
  title?: string;
  children?: React.ReactNode;
}
export const GlassModal: React.FC<GlassModalProps> = ({ open = true, onClose, title = 'Frosted Dialog', children }) => {
  const { getRadiusClass } = useJXTheme();
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className={\`w-full max-w-md p-6 bg-white/75 dark:bg-slate-900/75 backdrop-blur-2xl border border-white/60 dark:border-slate-700/60 shadow-2xl \${getRadiusClass('card')}\`}>
        <div className="flex items-center justify-between pb-3 border-b border-slate-200/40 dark:border-slate-800">
          <h3 className="font-bold text-slate-900 dark:text-white text-base">{title}</h3>
          <button type="button" onClick={onClose} className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="py-4 text-sm text-slate-700 dark:text-slate-300">{children ?? <p>Refractive modal dialog with liquid translucent depth.</p>}</div>
      </div>
    </div>
  );
};
`,_m=t({default:()=>vm}),vm=`// @jxui/react v3.0.0 — GlassNavbar (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Sparkles, 
  Layers, 
  Search, 
  Sliders, 
  Bell, 
  X, 
  Folder, 
  FileText, 
  Settings, 
  Maximize2,
  ChevronRight,
  Info
} from 'lucide-react';

// 6. GlassNavbar
export interface GlassNavbarProps {
  brand?: string;
  links?: string[];
}
export const GlassNavbar: React.FC<GlassNavbarProps> = ({ brand = 'JX GlassNav', links = ['Docs', 'Tokens', 'API', 'Showcase'] }) => {
  const { palette, getRadiusClass } = useJXTheme();
  return (
    <nav className={\`px-4 py-2.5 bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/80 shadow-md \${getRadiusClass('pill')} flex items-center justify-between\`}>
      <span className="font-extrabold text-sm tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-indigo-500" />
        {brand}
      </span>
      <div className="flex items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-300">
        {links.map((link) => (
          <a key={link} href={\`#\${link.toLowerCase()}\`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            {link}
          </a>
        ))}
      </div>
      <button className={\`px-3 py-1 text-xs font-semibold text-white \${palette.bg} rounded-full shadow-xs cursor-pointer\`}>
        Launch
      </button>
    </nav>
  );
};
`,ym=t({default:()=>bm}),bm=`// @jxui/react v3.0.0 — GlassNotification (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Sparkles, 
  Layers, 
  Search, 
  Sliders, 
  Bell, 
  X, 
  Folder, 
  FileText, 
  Settings, 
  Maximize2,
  ChevronRight,
  Info
} from 'lucide-react';

// 13. GlassNotification
export interface GlassNotificationProps {
  title?: string;
  message?: string;
  onDismiss?: () => void;
}
export const GlassNotification: React.FC<GlassNotificationProps> = ({
  title = 'Deployment Verified',
  message = 'Build #4892 completed in 2.1s with zero bundle regressions.',
  onDismiss,
}) => {
  const { getRadiusClass } = useJXTheme();
  return (
    <div className={\`relative p-4 max-w-sm bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-emerald-500/30 shadow-xl \${getRadiusClass('card')} flex items-start gap-3\`}>
      <Sparkles className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
      <div className="flex-1 min-w-0">
        <h5 className="font-bold text-xs text-slate-900 dark:text-white">{title}</h5>
        <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">{message}</p>
      </div>
      {onDismiss && (
        <button type="button" onClick={onDismiss} className="text-slate-400 hover:text-slate-600 cursor-pointer">
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};
`,xm=t({default:()=>Sm}),Sm=`// @jxui/react v3.0.0 — GlassPopover (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Sparkles, 
  Layers, 
  Search, 
  Sliders, 
  Bell, 
  X, 
  Folder, 
  FileText, 
  Settings, 
  Maximize2,
  ChevronRight,
  Info
} from 'lucide-react';

// 9. GlassPopover
export interface GlassPopoverProps {
  triggerLabel?: string;
  content?: string;
}
export const GlassPopover: React.FC<GlassPopoverProps> = ({ triggerLabel = 'Open Glass Popover', content = 'Lightweight floating popover layer.' }) => {
  const { getRadiusClass } = useJXTheme();
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={\`px-3 py-1.5 text-xs font-semibold bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-300 dark:border-slate-700 \${getRadiusClass('control')} shadow-xs cursor-pointer\`}
      >
        {triggerLabel}
      </button>
      {open && (
        <div className={\`absolute top-full mt-2 left-0 z-30 w-56 p-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/60 dark:border-slate-700 shadow-xl \${getRadiusClass('card')}\`}>
          <p className="text-xs text-slate-700 dark:text-slate-300">{content}</p>
        </div>
      )}
    </div>
  );
};
`,Cm=t({default:()=>wm}),wm=`// @jxui/react v3.0.0 — GlassSheet (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Sparkles, 
  Layers, 
  Search, 
  Sliders, 
  Bell, 
  X, 
  Folder, 
  FileText, 
  Settings, 
  Maximize2,
  ChevronRight,
  Info
} from 'lucide-react';

// 17. GlassSheet
export interface GlassSheetProps {
  open?: boolean;
  onClose?: () => void;
  title?: string;
  children?: React.ReactNode;
}
export const GlassSheet: React.FC<GlassSheetProps> = ({ open = true, onClose, title = 'Properties Inspector', children }) => {
  const { getRadiusClass } = useJXTheme();
  if (!open) return null;
  return (
    <aside className={\`w-80 p-5 bg-white/70 dark:bg-slate-950/70 backdrop-blur-2xl border-l border-slate-200/50 dark:border-slate-800 shadow-2xl flex flex-col justify-between h-full \${getRadiusClass('card')}\`}>
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-slate-200/50 dark:border-slate-800">
          <h4 className="font-bold text-sm text-slate-900 dark:text-white">{title}</h4>
          <button type="button" onClick={onClose} className="p-1 text-slate-400 hover:text-slate-600 cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="pt-4 text-xs text-slate-600 dark:text-slate-300">{children ?? <p>Sliding translucent inspector drawer panel.</p>}</div>
      </div>
    </aside>
  );
};
`,Tm=t({default:()=>Em}),Em=`// @jxui/react v3.0.0 — GlassSidebar (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Sparkles, 
  Layers, 
  Search, 
  Sliders, 
  Bell, 
  X, 
  Folder, 
  FileText, 
  Settings, 
  Maximize2,
  ChevronRight,
  Info
} from 'lucide-react';

// 7. GlassSidebar
export interface GlassSidebarProps {
  items?: string[];
}
export const GlassSidebar: React.FC<GlassSidebarProps> = ({ items = ['Overview', 'Analytics', 'Components', 'Settings'] }) => {
  const { palette, getRadiusClass } = useJXTheme();
  const [active, setActive] = useState('Overview');
  return (
    <aside className={\`w-48 p-3 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/80 shadow-lg \${getRadiusClass('card')} flex flex-col gap-1\`}>
      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 py-1">Navigation</span>
      {items.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setActive(item)}
          className={\`px-3 py-1.5 text-xs font-medium text-left rounded-lg transition-all cursor-pointer \${
            active === item
              ? \`\${palette.bg} text-white shadow-xs\`
              : 'text-slate-600 dark:text-slate-400 hover:bg-white/60 dark:hover:bg-slate-800/60'
          }\`}
        >
          {item}
        </button>
      ))}
    </aside>
  );
};
`,Dm=t({default:()=>Om}),Om=`// @jxui/react v3.0.0 — GlassTabs (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Sparkles, 
  Layers, 
  Search, 
  Sliders, 
  Bell, 
  X, 
  Folder, 
  FileText, 
  Settings, 
  Maximize2,
  ChevronRight,
  Info
} from 'lucide-react';

// 16. GlassTabs
export interface GlassTabsProps {
  tabs?: string[];
  activeTab?: string;
  onChange?: (tab: string) => void;
}
export const GlassTabs: React.FC<GlassTabsProps> = ({
  tabs = ['Design', 'Code', 'Audit', 'Tokens'],
  activeTab,
  onChange,
}) => {
  const { palette, getRadiusClass } = useJXTheme();
  const [internalTab, setInternalTab] = useState<string>(activeTab ?? tabs[0]);
  const currentTab = activeTab ?? internalTab;

  return (
    <div className={\`inline-flex p-1 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800 \${getRadiusClass('pill')}\`}>
      {tabs.map((tab) => {
        const isSelected = tab === currentTab;
        return (
          <button
            key={tab}
            type="button"
            onClick={() => {
              setInternalTab(tab);
              onChange?.(tab);
            }}
            className={\`px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer \${
              isSelected ? \`\${palette.bg} text-white shadow-xs\` : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }\`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};
`,km=t({default:()=>Am}),Am=`// @jxui/react v3.0.0 — GlassToolbar (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Sparkles, 
  Layers, 
  Search, 
  Sliders, 
  Bell, 
  X, 
  Folder, 
  FileText, 
  Settings, 
  Maximize2,
  ChevronRight,
  Info
} from 'lucide-react';

// 12. GlassToolbar
export interface GlassToolbarProps {
  children?: React.ReactNode;
}
export const GlassToolbar: React.FC<GlassToolbarProps> = ({ children }) => {
  const { getRadiusClass } = useJXTheme();
  return (
    <div className={\`inline-flex items-center gap-1.5 p-1.5 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800 shadow-md \${getRadiusClass('pill')}\`}>
      {children ?? (
        <>
          <button className="px-2.5 py-1 text-xs font-medium rounded-full hover:bg-slate-200/60 dark:hover:bg-slate-800 cursor-pointer">Filter</button>
          <button className="px-2.5 py-1 text-xs font-medium rounded-full hover:bg-slate-200/60 dark:hover:bg-slate-800 cursor-pointer">Sort</button>
          <button className="px-2.5 py-1 text-xs font-medium rounded-full hover:bg-slate-200/60 dark:hover:bg-slate-800 cursor-pointer">Export</button>
        </>
      )}
    </div>
  );
};
`,jm=t({default:()=>Mm}),Mm=`// @jxui/react v3.0.0 — GlassTooltip (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Sparkles, 
  Layers, 
  Search, 
  Sliders, 
  Bell, 
  X, 
  Folder, 
  FileText, 
  Settings, 
  Maximize2,
  ChevronRight,
  Info
} from 'lucide-react';

// 10. GlassTooltip
export interface GlassTooltipProps {
  text: string;
  children: React.ReactNode;
}
export const GlassTooltip: React.FC<GlassTooltipProps> = ({ text, children }) => {
  const { getRadiusClass } = useJXTheme();
  const [show, setShow] = useState(false);
  return (
    <div className="relative inline-block" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <div className={\`absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 z-40 px-2.5 py-1 text-[11px] font-medium text-slate-900 dark:text-white bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border border-white/40 dark:border-slate-700/60 shadow-md \${getRadiusClass('control')} whitespace-nowrap\`}>
          {text}
        </div>
      )}
    </div>
  );
};
`,Nm=t({default:()=>Pm}),Pm=`// @jxui/react v3.0.0 — LiquidGlass (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Sparkles, 
  Layers, 
  Search, 
  Sliders, 
  Bell, 
  X, 
  Folder, 
  FileText, 
  Settings, 
  Maximize2,
  ChevronRight,
  Info
} from 'lucide-react';

// 1. LiquidGlass
export interface LiquidGlassProps {
  children?: React.ReactNode;
  className?: string;
}
export const LiquidGlass: React.FC<LiquidGlassProps> = ({ children, className = '' }) => {
  const { getRadiusClass } = useJXTheme();
  return (
    <div className={\`relative overflow-hidden p-6 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.12)] \${getRadiusClass('card')} \${className}\`}>
      <div className="absolute -top-12 -left-12 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-violet-500/20 rounded-full blur-2xl pointer-events-none" />
      <div className="relative z-10">{children ?? <p className="text-sm font-medium text-slate-800 dark:text-slate-200">Liquid Refractive Glass Surface</p>}</div>
    </div>
  );
};
`,Fm=t({default:()=>Im}),Im=`// @jxui/react v3.0.0 — SpatialGlassWorkspace (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Sparkles, 
  Layers, 
  Search, 
  Sliders, 
  Bell, 
  X, 
  Folder, 
  FileText, 
  Settings, 
  Maximize2,
  ChevronRight,
  Info
} from 'lucide-react';

// 20. SpatialGlassWorkspace
export interface SpatialGlassWorkspaceProps {
  children?: React.ReactNode;
}
export const SpatialGlassWorkspace: React.FC<SpatialGlassWorkspaceProps> = ({ children }) => {
  const { getRadiusClass } = useJXTheme();
  return (
    <div className={\`relative p-8 bg-gradient-to-br from-white/30 via-slate-100/40 to-indigo-50/30 dark:from-slate-950/40 dark:via-slate-900/40 dark:to-indigo-950/20 backdrop-blur-3xl border border-white/40 dark:border-slate-800/80 shadow-2xl \${getRadiusClass('card')} overflow-hidden\`}>
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10">{children ?? <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">3D Multi-Layer Spatial Glass Canvas</p>}</div>
    </div>
  );
};
`,Lm=t({default:()=>Rm}),Rm=`// @jxui/react v3.0.0 — AnimatedInput (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Search, 
  X, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Check, 
  Lock, 
  Terminal, 
  Palette, 
  Sliders, 
  PenTool, 
  ChevronRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

// 3. AnimatedInput
export const AnimatedInput: React.FC = () => {
  const [active, setActive] = useState(false);
  const { getRadiusClass } = useJXTheme();
  return (
    <div className={\`flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 border \${active ? 'border-indigo-500 shadow-sm' : 'border-slate-300 dark:border-slate-700'} \${getRadiusClass('control')} transition-all\`}>
      <Sparkles className={\`w-4 h-4 transition-transform \${active ? 'text-indigo-500 scale-110' : 'text-slate-400'}\`} />
      <input
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        placeholder="Animated focus reaction..."
        className="w-full bg-transparent text-xs text-slate-900 dark:text-white focus:outline-none"
      />
    </div>
  );
};
`,zm=t({default:()=>Bm}),Bm=`// @jxui/react v3.0.0 — AutoComplete (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Search, 
  X, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Check, 
  Lock, 
  Terminal, 
  Palette, 
  Sliders, 
  PenTool, 
  ChevronRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

// 9. AutoComplete
export const AutoComplete: React.FC = () => {
  const [val, setVal] = useState('');
  const [open, setOpen] = useState(false);
  const items = ['React 19', 'Next.js 15', 'Vite 8', 'Tailwind v4', 'TypeScript 5.8'];
  const filtered = items.filter((i) => i.toLowerCase().includes(val.toLowerCase()));
  const { getRadiusClass } = useJXTheme();

  return (
    <div className="relative w-full">
      <input
        value={val}
        onFocus={() => setOpen(true)}
        onChange={(e) => setVal(e.target.value)}
        placeholder="Type framework (e.g. React)..."
        className={\`w-full px-3 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none \${getRadiusClass('control')}\`}
      />
      {open && filtered.length > 0 && (
        <div className={\`absolute top-full mt-1 inset-x-0 z-30 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg rounded-lg py-1 \${getRadiusClass('control')}\`}>
          {filtered.map((item) => (
            <div
              key={item}
              onMouseDown={() => {
                setVal(item);
                setOpen(false);
              }}
              className="px-3 py-1.5 text-xs text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
`,Vm=t({default:()=>Hm}),Hm=`// @jxui/react v3.0.0 — CircularSlider (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

export interface CircularSliderProps {
  size?: number;
  minAngle?: number;
  maxAngle?: number;
  defaultValue?: number;
  onChange?: (degrees: number) => void;
}

export const CircularSlider: React.FC<CircularSliderProps> = ({
  size = 80,
  minAngle = 0,
  maxAngle = 360,
  defaultValue = 240,
  onChange,
}) => {
  const { palette } = useJXTheme();
  const [angle, setAngle] = useState(defaultValue);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const radius = size / 2 - 8;
  const strokeWidth = 6;
  const center = size / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (angle / 360) * circumference;

  const calculateAngle = useCallback((clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = clientX - cx;
    const dy = clientY - cy;
    let rad = Math.atan2(dy, dx); // [-PI, PI]
    let deg = (rad * 180) / Math.PI + 90; // Top is 0
    if (deg < 0) deg += 360;
    const clamped = Math.max(minAngle, Math.min(maxAngle, Math.round(deg)));
    setAngle(clamped);
    onChange?.(clamped);
  }, [minAngle, maxAngle, onChange]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    calculateAngle(e.clientX, e.clientY);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging) {
      calculateAngle(e.clientX, e.clientY);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  // Coordinates for the thumb
  const thumbRad = ((angle - 90) * Math.PI) / 180;
  const thumbX = center + radius * Math.cos(thumbRad);
  const thumbY = center + radius * Math.sin(thumbRad);

  return (
    <div className="flex flex-col items-center gap-1.5 select-none">
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        style={{ width: size, height: size }}
        className="relative cursor-pointer touch-none group"
      >
        <svg width={size} height={size} className="overflow-visible">
          {/* Background circle track */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-slate-200 dark:text-slate-800"
          />
          {/* Active arc */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="url(#circular-grad)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform={\`rotate(-90 \${center} \${center})\`}
            className="transition-all duration-75"
          />
          <defs>
            <linearGradient id="circular-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          {/* Rotary thumb */}
          <circle
            cx={thumbX}
            cy={thumbY}
            r={6}
            className="fill-white stroke-indigo-600 stroke-2 shadow-md filter drop-shadow cursor-grab active:cursor-grabbing transition-transform group-hover:scale-125"
          />
        </svg>

        {/* Center Readout */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">
            {angle}°
          </span>
        </div>
      </div>
      <span className="text-[10px] font-mono text-slate-400">Rotary Knob</span>
    </div>
  );
};
`,Um=t({default:()=>Wm}),Wm=`// @jxui/react v3.0.0 — ColorPicker (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Search, 
  X, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Check, 
  Lock, 
  Terminal, 
  Palette, 
  Sliders, 
  PenTool, 
  ChevronRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

// 17. ColorPicker
export const ColorPicker: React.FC = () => {
  const [color, setColor] = useState('#4f46e5');
  return (
    <div className="flex items-center gap-2">
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-8 h-8 rounded border-none cursor-pointer" />
      <span className="font-mono text-xs text-slate-700 dark:text-slate-300">{color}</span>
    </div>
  );
};
`,Gm=t({default:()=>Km}),Km=`// @jxui/react v3.0.0 — CommandInput (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Search, 
  X, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Check, 
  Lock, 
  Terminal, 
  Palette, 
  Sliders, 
  PenTool, 
  ChevronRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

// 8. CommandInput
export const CommandInput: React.FC = () => {
  const { getRadiusClass } = useJXTheme();
  return (
    <div className={\`flex items-center gap-2 px-3 py-2 bg-slate-950 text-emerald-400 font-mono text-xs \${getRadiusClass('control')}\`}>
      <Terminal className="w-3.5 h-3.5 text-emerald-500" />
      <span className="text-emerald-500">$</span>
      <input placeholder="npx @jxui/cli add button" className="w-full bg-transparent focus:outline-none placeholder-slate-600 text-white" />
    </div>
  );
};
`,qm=t({default:()=>Jm}),Jm=`// @jxui/react v3.0.0 — DualRangeSlider (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

export interface DualRangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultMin?: number;
  defaultMax?: number;
  onChange?: (values: { min: number; max: number }) => void;
}

export const DualRangeSlider: React.FC<DualRangeSliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  defaultMin = 20,
  defaultMax = 80,
  onChange,
}) => {
  const { palette, getRadiusClass } = useJXTheme();
  const [minVal, setMinVal] = useState(defaultMin);
  const [maxVal, setMaxVal] = useState(defaultMax);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxVal - step);
    setMinVal(value);
    onChange?.({ min: value, max: maxVal });
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minVal + step);
    setMaxVal(value);
    onChange?.({ min: minVal, max: value });
  };

  const minPercent = ((minVal - min) / (max - min)) * 100;
  const maxPercent = ((maxVal - min) / (max - min)) * 100;

  return (
    <div className="w-full flex flex-col gap-2 py-1 select-none">
      <div className="flex items-center justify-between text-xs font-mono font-medium">
        <span className="text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
          {minVal}px
        </span>
        <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Range Span</span>
        <span className="text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
          {maxVal}px
        </span>
      </div>

      <div className="relative w-full h-6 flex items-center">
        {/* Track Background */}
        <div className="absolute inset-x-0 h-2 bg-slate-200 dark:bg-slate-700 rounded-full" />
        {/* Highlighted Range Bar */}
        <div
          className={\`absolute h-2 \${palette.bg} rounded-full\`}
          style={{ left: \`\${minPercent}%\`, width: \`\${maxPercent - minPercent}%\` }}
        />

        {/* Lower Slider Input */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minVal}
          onChange={handleMinChange}
          aria-label="Minimum range slider"
          className="absolute inset-x-0 w-full appearance-none pointer-events-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-indigo-600 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-grab active:[&::-webkit-slider-thumb]:cursor-grabbing"
        />

        {/* Upper Slider Input */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxVal}
          onChange={handleMaxChange}
          aria-label="Maximum range slider"
          className="absolute inset-x-0 w-full appearance-none pointer-events-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-indigo-600 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-grab active:[&::-webkit-slider-thumb]:cursor-grabbing"
        />
      </div>
    </div>
  );
};
`,Ym=t({default:()=>Xm}),Xm=`// @jxui/react v3.0.0 — DynamicFormBuilder (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, Check, Send } from 'lucide-react';

interface SchemaField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'select' | 'checkbox';
  options?: string[];
  placeholder?: string;
  required?: boolean;
}

const DEFAULT_SCHEMA: SchemaField[] = [
  { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Jane Doe', required: true },
  { id: 'workEmail', label: 'Work Email', type: 'email', placeholder: 'jane@company.com', required: true },
  { id: 'tier', label: 'Role Tier', type: 'select', options: ['Engineering', 'Design', 'Product', 'Executive'] },
  { id: 'agreed', label: 'Opt in to design system releases', type: 'checkbox' },
];

export const DynamicFormBuilder: React.FC = () => {
  const { palette, getRadiusClass, pushToast } = useJXTheme();
  const [formData, setFormData] = useState<Record<string, any>>({
    fullName: '',
    workEmail: '',
    tier: 'Engineering',
    agreed: true,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    pushToast({
      title: 'Schema Form Validated',
      description: \`Payload: \${JSON.stringify(formData)}\`,
      variant: 'success',
    });
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2.5 text-xs text-left">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-1.5 mb-1">
        <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
          <span>Dynamic Schema Engine</span>
        </span>
        <span className="font-mono text-[10px] text-slate-400">4 fields</span>
      </div>

      {DEFAULT_SCHEMA.map((field) => {
        if (field.type === 'checkbox') {
          return (
            <label key={field.id} className="flex items-center gap-2 cursor-pointer pt-0.5">
              <input
                type="checkbox"
                checked={Boolean(formData[field.id])}
                onChange={(e) => setFormData({ ...formData, [field.id]: e.target.checked })}
                className="w-3.5 h-3.5 accent-indigo-600 rounded"
              />
              <span className="text-[11px] text-slate-600 dark:text-slate-400">{field.label}</span>
            </label>
          );
        }

        if (field.type === 'select') {
          return (
            <div key={field.id} className="flex flex-col gap-1">
              <label className="text-[11px] font-medium text-slate-600 dark:text-slate-400">{field.label}</label>
              <select
                value={formData[field.id]}
                onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                className={\`px-2.5 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white \${getRadiusClass('control')} text-xs focus:outline-none focus:border-indigo-500\`}
              >
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          );
        }

        return (
          <div key={field.id} className="flex flex-col gap-1">
            <label className="text-[11px] font-medium text-slate-600 dark:text-slate-400">{field.label}</label>
            <input
              type={field.type}
              value={formData[field.id]}
              placeholder={field.placeholder}
              onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
              className={\`px-2.5 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white \${getRadiusClass('control')} text-xs focus:outline-none focus:border-indigo-500\`}
            />
          </div>
        );
      })}

      <button
        type="submit"
        className={\`mt-1 py-1.5 px-3 rounded-lg text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer \${
          submitted ? 'bg-emerald-600' : 'bg-indigo-600 hover:bg-indigo-700'
        }\`}
      >
        {submitted ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
        <span>{submitted ? 'Validated' : 'Submit Schema'}</span>
      </button>
    </form>
  );
};
`,Zm=t({default:()=>Qm}),Qm=`// @jxui/react v3.0.0 — FloatingLabelInput (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Search, 
  X, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Check, 
  Lock, 
  Terminal, 
  Palette, 
  Sliders, 
  PenTool, 
  ChevronRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

// 2. FloatingLabelInput
export const FloatingLabelInput: React.FC<{ label?: string; value?: string; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({
  label = 'Work Email',
  value = '',
  onChange,
}) => {
  const [val, setVal] = useState(value);
  const [focused, setFocused] = useState(false);
  const isFloating = focused || val.length > 0;
  const { getRadiusClass } = useJXTheme();

  return (
    <div className="relative w-full">
      <label
        className={\`absolute left-3 transition-all duration-200 pointer-events-none text-slate-400 \${
          isFloating ? 'top-1 text-[10px] font-bold text-indigo-600 dark:text-indigo-400' : 'top-2.5 text-xs'
        }\`}
      >
        {label}
      </label>
      <input
        type="text"
        value={val}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => {
          setVal(e.target.value);
          onChange?.(e);
        }}
        className={\`w-full pt-4 pb-1.5 px-3 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 \${getRadiusClass('control')}\`}
      />
    </div>
  );
};
`,$m=t({default:()=>eh}),eh=`// @jxui/react v3.0.0 — FormGlassInput (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Search, 
  X, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Check, 
  Lock, 
  Terminal, 
  Palette, 
  Sliders, 
  PenTool, 
  ChevronRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

// 4. FormGlassInput (GlassInput form variant)
export const FormGlassInput: React.FC = () => {
  const { getRadiusClass } = useJXTheme();
  return (
    <input
      placeholder="Glassmorphic input..."
      className={\`w-full px-3.5 py-2 text-xs bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/40 dark:border-slate-700/60 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 \${getRadiusClass('control')}\`}
    />
  );
};
`,th=t({default:()=>nh}),nh=`// @jxui/react v3.0.0 — FormWizard (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Search, 
  X, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Check, 
  Lock, 
  Terminal, 
  Palette, 
  Sliders, 
  PenTool, 
  ChevronRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

// 24. FormWizard
export const FormWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 text-xs font-semibold">
        <span className={\`w-5 h-5 rounded-full flex items-center justify-center text-[10px] \${step === 1 ? 'bg-indigo-600 text-white' : 'bg-slate-200'}\`}>1</span>
        <span className="text-slate-500">Account</span>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className={\`w-5 h-5 rounded-full flex items-center justify-center text-[10px] \${step === 2 ? 'bg-indigo-600 text-white' : 'bg-slate-200'}\`}>2</span>
        <span className="text-slate-500">Billing</span>
      </div>
      <button onClick={() => setStep(step === 1 ? 2 : 1)} className="text-xs text-indigo-600 hover:underline text-left">
        {step === 1 ? 'Next: Billing →' : '← Back to Account'}
      </button>
    </div>
  );
};
`,rh=t({default:()=>ih}),ih=`// @jxui/react v3.0.0 — GradientPicker (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Palette, Copy, Check } from 'lucide-react';

export const GradientPicker: React.FC = () => {
  const { getRadiusClass, pushToast } = useJXTheme();
  const [fromColor, setFromColor] = useState('#6366f1');
  const [toColor, setToColor] = useState('#ec4899');
  const [copied, setCopied] = useState(false);

  const presets = [
    { from: '#6366f1', to: '#ec4899' },
    { from: '#3b82f6', to: '#10b981' },
    { from: '#f59e0b', to: '#ef4444' },
    { from: '#8b5cf6', to: '#06b6d4' },
  ];

  const gradientStyle = \`linear-gradient(135deg, \${fromColor}, \${toColor})\`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(\`background: \${gradientStyle};\`);
    setCopied(true);
    pushToast({
      title: 'Copied Gradient CSS',
      description: \`background: \${gradientStyle}\`,
      variant: 'success',
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-2.5 w-full">
      {/* Live Gradient Preview Bar */}
      <div
        className="w-full h-8 rounded-lg shadow-sm border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-end px-2"
        style={{ background: gradientStyle }}
      >
        <button
          type="button"
          onClick={handleCopy}
          className="p-1 rounded bg-black/40 text-white hover:bg-black/60 transition-colors text-[10px] flex items-center gap-1 cursor-pointer"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
          <span>CSS</span>
        </button>
      </div>

      <div className="flex items-center justify-between gap-2">
        {/* Color Pickers */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="color"
              value={fromColor}
              onChange={(e) => setFromColor(e.target.value)}
              className="w-5 h-5 rounded cursor-pointer border-0 p-0"
            />
            <span className="text-[11px] text-slate-500">{fromColor}</span>
          </label>
          <span className="text-slate-400">→</span>
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="color"
              value={toColor}
              onChange={(e) => setToColor(e.target.value)}
              className="w-5 h-5 rounded cursor-pointer border-0 p-0"
            />
            <span className="text-[11px] text-slate-500">{toColor}</span>
          </label>
        </div>

        {/* Preset Chips */}
        <div className="flex items-center gap-1">
          {presets.map((p, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setFromColor(p.from);
                setToColor(p.to);
              }}
              style={{ background: \`linear-gradient(135deg, \${p.from}, \${p.to})\` }}
              className="w-4 h-4 rounded-full border border-white/40 shadow-xs hover:scale-125 transition-transform cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
`,ah=t({default:()=>oh}),oh=`// @jxui/react v3.0.0 — LiquidInput (JXUI v3.0 Unified Component Suite)
import React from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 1. LiquidInput
export interface LiquidInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
}

export const LiquidInput: React.FC<LiquidInputProps> = ({ className = '', children, ...props }) => {
  const { palette, getRadiusClass } = useJXTheme();
  return (
    <div className="relative w-full">
      <input
        className={\`w-full min-h-[44px] px-3.5 py-2 text-sm bg-white dark:bg-[#111827] border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white \${getRadiusClass('control')} focus:outline-none focus:ring-2 focus:ring-[var(--jx-accent-halo)] transition-all touch-manipulation \${className}\`}
        {...props}
      />
      <div className={\`absolute bottom-0 inset-x-2 h-0.5 \${palette.bg} opacity-0 focus-within:opacity-100 transition-opacity\`} />
    </div>
  );
};
`,sh=t({default:()=>ch}),ch=`// @jxui/react v3.0.0 — MagneticSlider (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Search, 
  X, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Check, 
  Lock, 
  Terminal, 
  Palette, 
  Sliders, 
  PenTool, 
  ChevronRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

// 22. MagneticSlider
export const MagneticSlider: React.FC = () => {
  return (
    <div className="flex items-center gap-2 w-full">
      <input type="range" step={25} defaultValue={50} className="w-full accent-indigo-600 cursor-pointer" />
      <span className="text-[10px] font-mono text-slate-500">Snap 25%</span>
    </div>
  );
};
`,lh=t({default:()=>uh}),uh=`// @jxui/react v3.0.0 — MorphingInput (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Search, 
  X, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Check, 
  Lock, 
  Terminal, 
  Palette, 
  Sliders, 
  PenTool, 
  ChevronRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

// 5. MorphingInput
export const MorphingInput: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const { getRadiusClass } = useJXTheme();
  return (
    <div className="w-full">
      {expanded ? (
        <textarea
          autoFocus
          onBlur={() => setExpanded(false)}
          placeholder="Morphing into multi-line markdown..."
          rows={3}
          className={\`w-full p-2.5 text-xs bg-white dark:bg-slate-900 border border-indigo-500 rounded-lg text-slate-900 dark:text-white focus:outline-none \${getRadiusClass('control')}\`}
        />
      ) : (
        <input
          onFocus={() => setExpanded(true)}
          placeholder="Click to morph into multi-line textarea..."
          className={\`w-full px-3 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white cursor-pointer \${getRadiusClass('control')}\`}
        />
      )}
    </div>
  );
};
`,dh=t({default:()=>fh}),fh=`// @jxui/react v3.0.0 — MultiSelect (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Search, 
  X, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Check, 
  Lock, 
  Terminal, 
  Palette, 
  Sliders, 
  PenTool, 
  ChevronRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

// 10. MultiSelect
export const MultiSelect: React.FC = () => {
  const [selected, setSelected] = useState<string[]>(['TypeScript', 'Tailwind']);
  const available = ['React', 'TypeScript', 'Tailwind', 'Motion', 'Vite'];
  const { palette } = useJXTheme();

  return (
    <div className="flex flex-wrap gap-1.5 p-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg">
      {selected.map((s) => (
        <span key={s} className={\`px-2 py-0.5 text-[11px] font-semibold text-white \${palette.bg} rounded-full flex items-center gap-1\`}>
          {s}
          <button onClick={() => setSelected(selected.filter((x) => x !== s))}><X className="w-3 h-3" /></button>
        </span>
      ))}
      <select
        onChange={(e) => {
          if (e.target.value && !selected.includes(e.target.value)) {
            setSelected([...selected, e.target.value]);
          }
        }}
        className="text-xs bg-transparent text-slate-500 focus:outline-none cursor-pointer"
      >
        <option value="">+ Add Tag</option>
        {available.filter((a) => !selected.includes(a)).map((a) => (
          <option key={a} value={a}>{a}</option>
        ))}
      </select>
    </div>
  );
};
`,ph=t({default:()=>mh}),mh=`// @jxui/react v3.0.0 — OTPInput (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 13. OTPInput
// 6-digit one-time code input with auto-advance and bidirectional backspace focus
export interface OTPInputProps {
  length?: number;
  onComplete?: (code: string) => void;
  className?: string;
}

export const OTPInput: React.FC<OTPInputProps> = ({ length = 6, onComplete, className = '' }) => {
  const { getRadiusClass } = useJXTheme();
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (val: string, idx: number) => {
    const char = val.slice(-1);
    const next = [...otp];
    next[idx] = char;
    setOtp(next);

    if (char && idx < length - 1) {
      inputsRef.current[idx + 1]?.focus();
    }

    if (next.every((d) => d !== '')) {
      onComplete?.(next.join(''));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === 'Backspace' && !otp[idx] && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    } else if (e.key === 'ArrowLeft' && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    } else if (e.key === 'ArrowRight' && idx < length - 1) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  return (
    <div className={\`flex items-center gap-2 \${className}\`}>
      {otp.map((digit, idx) => (
        <input
          key={idx}
          ref={(el) => {
            inputsRef.current[idx] = el;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e.target.value, idx)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
          className={\`min-h-[44px] min-w-[44px] w-11 h-11 text-center font-mono text-base font-bold bg-white dark:bg-[#111827] border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-[var(--jx-accent-halo)] transition-all touch-manipulation \${getRadiusClass(
            'control'
          )}\`}
        />
      ))}
    </div>
  );
};
`,hh=t({default:()=>gh}),gh=`// @jxui/react v3.0.0 — PasswordReveal (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Search, 
  X, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Check, 
  Lock, 
  Terminal, 
  Palette, 
  Sliders, 
  PenTool, 
  ChevronRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

// 16. PasswordReveal
export const PasswordReveal: React.FC = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative flex items-center w-full">
      <input
        type={show ? 'text' : 'password'}
        defaultValue="TactileDesignTokens"
        className="w-full px-3 py-1.5 pr-8 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none"
      />
      <button onClick={() => setShow(!show)} className="absolute right-2.5 text-slate-400 hover:text-slate-600">
        {show ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
};
`,_h=t({default:()=>vh}),vh=`// @jxui/react v3.0.0 — PasswordStrength (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Search, 
  X, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Check, 
  Lock, 
  Terminal, 
  Palette, 
  Sliders, 
  PenTool, 
  ChevronRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

// 15. PasswordStrength
export const PasswordStrength: React.FC = () => {
  const [pw, setPw] = useState('Secret!2026');
  const len = pw.length;
  const pct = Math.min(100, len * 10);
  return (
    <div className="w-full flex flex-col gap-1.5">
      <input
        type="password"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        className="w-full px-3 py-1.5 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
      />
      <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
        <div style={{ width: \`\${pct}%\` }} className={\`h-full \${pct > 70 ? 'bg-emerald-500' : pct > 40 ? 'bg-amber-500' : 'bg-rose-500'}\`} />
      </div>
      <span className="text-[10px] text-slate-500 font-mono">Entropy: {pct}% Strong</span>
    </div>
  );
};
`,yh=t({default:()=>bh}),bh=`// @jxui/react v3.0.0 — PinInput (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

export interface PinInputProps {
  length?: number;
  onComplete?: (pin: string) => void;
  mask?: boolean;
}

export const PinInput: React.FC<PinInputProps> = ({
  length = 4,
  onComplete,
  mask = true,
}) => {
  const { palette, getRadiusClass } = useJXTheme();
  const [values, setValues] = useState<string[]>(Array(length).fill(''));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, val: string) => {
    const char = val.slice(-1);
    if (!/^\\d*$/.test(char)) return;

    const next = [...values];
    next[index] = char;
    setValues(next);

    if (char && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    if (next.every((v) => v !== '')) {
      onComplete?.(next.join(''));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\\D/g, '').slice(0, length);
    if (!pasted) return;
    const next = [...values];
    for (let i = 0; i < pasted.length; i++) {
      next[i] = pasted[i];
    }
    setValues(next);
    const nextFocus = Math.min(pasted.length, length - 1);
    inputsRef.current[nextFocus]?.focus();
    if (next.every((v) => v !== '')) {
      onComplete?.(next.join(''));
    }
  };

  return (
    <div className="flex items-center gap-2.5" onPaste={handlePaste}>
      {values.map((v, i) => (
        <div key={i} className="relative flex items-center justify-center">
          <input
            ref={(el) => {
              inputsRef.current[i] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={v}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            aria-label={\`PIN Digit \${i + 1}\`}
            className={\`min-h-[44px] min-w-[44px] w-11 h-11 text-center font-mono text-base font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-[#111827] border \${
              v
                ? 'border-indigo-500 ring-2 ring-[var(--jx-accent-halo)]'
                : 'border-slate-300 dark:border-slate-700'
            } \${getRadiusClass('control')} focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-[var(--jx-accent-halo)] transition-all touch-manipulation\`}
          />
          {mask && v && (
            <div className="absolute pointer-events-none w-2.5 h-2.5 rounded-full bg-indigo-600" />
          )}
        </div>
      ))}
    </div>
  );
};
`,xh=t({default:()=>Sh}),Sh=`// @jxui/react v3.0.0 — RangeSlider (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Search, 
  X, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Check, 
  Lock, 
  Terminal, 
  Palette, 
  Sliders, 
  PenTool, 
  ChevronRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

// 19. RangeSlider
export const RangeSlider: React.FC = () => {
  const [val, setVal] = useState(48);
  return (
    <div className="flex items-center gap-3 w-full">
      <input type="range" min={0} max={100} value={val} onChange={(e) => setVal(Number(e.target.value))} className="w-full accent-indigo-600" />
      <span className="font-mono text-xs text-slate-600 dark:text-slate-400 w-8">{val}%</span>
    </div>
  );
};
`,Ch=t({default:()=>wh}),wh=`// @jxui/react v3.0.0 — SearchInput (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Search, 
  X, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Check, 
  Lock, 
  Terminal, 
  Palette, 
  Sliders, 
  PenTool, 
  ChevronRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

// 6. SearchInput
export const SearchInput: React.FC<{ onSearch?: (q: string) => void }> = ({ onSearch }) => {
  const [q, setQ] = useState('');
  const { getRadiusClass } = useJXTheme();
  return (
    <div className={\`relative flex items-center px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg \${getRadiusClass('control')}\`}>
      <Search className="w-3.5 h-3.5 text-slate-400 mr-2" />
      <input
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          onSearch?.(e.target.value);
        }}
        placeholder="Search components..."
        className="w-full bg-transparent text-xs text-slate-900 dark:text-white focus:outline-none"
      />
      {q && <button onClick={() => setQ('')} className="p-0.5 text-slate-400 hover:text-slate-600"><X className="w-3 h-3" /></button>}
    </div>
  );
};
`,Th=t({default:()=>Eh}),Eh=`// @jxui/react v3.0.0 — SignaturePad (JXUI v3.0 Unified Component Suite)
import React, { useRef, useState, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { PenTool, RotateCcw, Check } from 'lucide-react';

// 23. SignaturePad
// Real vector drawing canvas with smooth touch/mouse strokes and 1-click reset
export interface SignaturePadProps {
  onSave?: (dataUrl: string) => void;
  className?: string;
}

export const SignaturePad: React.FC<SignaturePadProps> = ({ onSave, className = '' }) => {
  const { getRadiusClass } = useJXTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#4f46e5';
  }, []);

  const getCoordinates = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    if ('touches' in e) {
      const touch = e.touches[0];
      return { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
    }
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    setHasDrawn(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const { x, y } = getCoordinates(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const { x, y } = getCoordinates(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    if (canvasRef.current && onSave) {
      onSave(canvasRef.current.toDataURL());
    }
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
  };

  return (
    <div className={\`p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 \${getRadiusClass('card')} shadow-sm space-y-2 \${className}\`}>
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
          <PenTool className="w-3.5 h-3.5 text-indigo-500" />
          <span>Vector Digital Signature</span>
        </span>
        {hasDrawn && (
          <button
            type="button"
            onClick={handleClear}
            className="flex items-center gap-1 text-[11px] font-medium text-slate-500 hover:text-rose-500 cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Clear</span>
          </button>
        )}
      </div>

      <div className="relative w-full h-24 bg-slate-50 dark:bg-slate-950/60 border border-dashed border-slate-300 dark:border-slate-700 rounded-lg overflow-hidden">
        <canvas
          ref={canvasRef}
          width={300}
          height={96}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="w-full h-full cursor-crosshair touch-none"
        />
        {!hasDrawn && (
          <span className="absolute inset-0 flex items-center justify-center text-[11px] text-slate-400 pointer-events-none select-none">
            Sign here with mouse or stylus...
          </span>
        )}
      </div>
    </div>
  );
};
`,Dh=t({default:()=>Oh}),Oh=`// @jxui/react v3.0.0 — SmartSearch (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Search, 
  X, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Check, 
  Lock, 
  Terminal, 
  Palette, 
  Sliders, 
  PenTool, 
  ChevronRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

// 7. SmartSearch
export const SmartSearch: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <div className={\`flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 \${getRadiusClass('control')}\`}>
        <Search className="w-4 h-4 text-indigo-500" />
        <input placeholder="Search with smart suggestions..." className="w-full bg-transparent text-xs focus:outline-none text-slate-900 dark:text-white" />
      </div>
      <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
        <span>Suggested:</span>
        {['Button', 'DataGrid', 'Glass'].map((t) => (
          <span key={t} className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded cursor-pointer hover:bg-slate-200">{t}</span>
        ))}
      </div>
    </div>
  );
};
`,kh=t({default:()=>Ah}),Ah=`// @jxui/react v3.0.0 — TagInput (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Search, 
  X, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Check, 
  Lock, 
  Terminal, 
  Palette, 
  Sliders, 
  PenTool, 
  ChevronRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

// 11. TagInput
export const TagInput: React.FC = () => {
  const [tags, setTags] = useState(['v3.0', 'stable']);
  const [inputVal, setInputVal] = useState('');
  return (
    <div className="flex flex-wrap items-center gap-1.5 p-2 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg">
      {tags.map((t) => (
        <span key={t} className="px-2 py-0.5 text-xs bg-slate-200 dark:bg-slate-800 rounded font-mono flex items-center gap-1">
          {t}
          <button onClick={() => setTags(tags.filter((x) => x !== t))}><X className="w-3 h-3" /></button>
        </span>
      ))}
      <input
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && inputVal.trim()) {
            setTags([...tags, inputVal.trim()]);
            setInputVal('');
          }
        }}
        placeholder="Type tag & Enter..."
        className="text-xs bg-transparent focus:outline-none text-slate-900 dark:text-white min-w-[120px]"
      />
    </div>
  );
};
`,jh=t({default:()=>Mh}),Mh=`// @jxui/react v3.0.0 — TokenInput (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { Eye, EyeOff, Copy, Check, RefreshCw } from 'lucide-react';
import { useJXTheme } from '../../../context/JXThemeContext';

export interface TokenInputProps {
  initialToken?: string;
  onRegenerate?: () => void;
}

export const TokenInput: React.FC<TokenInputProps> = ({
  initialToken = 'jx_sec_live_94f8b2c149e8a71b',
  onRegenerate,
}) => {
  const { palette, getRadiusClass, pushToast } = useJXTheme();
  const [token, setToken] = useState(initialToken);
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(token);
    setCopied(true);
    pushToast({
      title: 'Secret Token Copied',
      description: 'API key copied safely to clipboard',
      variant: 'success',
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRegen = () => {
    const randomSuffix = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
    const nextToken = \`jx_sec_live_\${randomSuffix}\`;
    setToken(nextToken);
    onRegenerate?.();
    pushToast({
      title: 'Generated New Token',
      description: 'New ephemeral secret credentials generated',
      variant: 'default',
    });
  };

  const maskedString = token.slice(0, 12) + '•'.repeat(Math.max(4, token.length - 16)) + token.slice(-4);

  return (
    <div className={\`flex items-center justify-between gap-2 px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 \${getRadiusClass('control')} text-xs font-mono\`}>
      <span className="text-slate-800 dark:text-slate-200 select-all truncate">
        {revealed ? token : maskedString}
      </span>
      <div className="flex items-center gap-1 shrink-0">
        <button
          type="button"
          onClick={() => setRevealed(!revealed)}
          aria-label={revealed ? 'Hide secret token' : 'Reveal secret token'}
          className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer"
        >
          {revealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
        </button>
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy token"
          className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
        <button
          type="button"
          onClick={handleRegen}
          aria-label="Regenerate token"
          className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
`,Nh=t({default:()=>Ph}),Ph=`// @jxui/react v3.0.0 — AdaptiveDashboard (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Layout, Maximize2, Minimize2, X, Move, Split } from 'lucide-react';

// 1. AdaptiveDashboard
export const AdaptiveDashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-2 w-full text-xs">
      <div className="p-2 border rounded-lg bg-slate-50 dark:bg-slate-900">KPI Telemetry</div>
      <div className="p-2 border rounded-lg bg-slate-50 dark:bg-slate-900">Traffic Distribution</div>
      <div className="p-2 border rounded-lg bg-slate-50 dark:bg-slate-900">Health Matrix</div>
    </div>
  );
};
`,Fh=t({default:()=>Ih}),Ih=`// @jxui/react v3.0.0 — AutoLayout (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Layout, Maximize2, Minimize2, X, Move, Split } from 'lucide-react';

// 13. AutoLayout
export const AutoLayout: React.FC = () => {
  return <div className="text-xs text-slate-500">Auto Layout flex gap distributor</div>;
};
`,Lh=t({default:()=>Rh}),Rh=`// @jxui/react v3.0.0 — BentoLayout (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Layout, Maximize2, Minimize2, X, Move, Split } from 'lucide-react';

// 10. BentoLayout
export const BentoLayout: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-1.5 w-48 text-[10px]">
      <div className="col-span-2 p-2 border rounded font-bold">Hero Tile</div>
      <div className="p-2 border rounded font-bold">Stat</div>
    </div>
  );
};
`,zh=t({default:()=>Bh}),Bh=`// @jxui/react v3.0.0 — DockManager (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Layout, Maximize2, Minimize2, X, Move, Split } from 'lucide-react';

// 6. DockManager
export const DockManager: React.FC = () => {
  return <div className="text-xs text-slate-500 font-mono">Pinned Dock (Bottom Edge)</div>;
};
`,Vh=t({default:()=>Hh}),Hh=`// @jxui/react v3.0.0 — FloatingWindow (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Layout, Maximize2, Minimize2, X, Move, Split } from 'lucide-react';

// 5. FloatingWindow
export const FloatingWindow: React.FC = () => {
  return (
    <div className="p-3 border border-slate-300 dark:border-slate-700 rounded-xl shadow-xl text-xs w-48">
      <div className="font-bold pb-1 mb-1 border-b">Widget Inspector</div>
      <p className="text-slate-500 text-[11px]">Draggable surface.</p>
    </div>
  );
};
`,Uh=t({default:()=>Wh}),Wh=`// @jxui/react v3.0.0 — InfiniteCanvas (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Layout, Maximize2, Minimize2, X, Move, Split } from 'lucide-react';

// 2. InfiniteCanvas
export const InfiniteCanvas: React.FC = () => {
  return (
    <div className="w-48 h-20 border rounded-xl bg-radial from-slate-200/50 to-transparent flex items-center justify-center text-xs text-slate-500">
      Pan & Zoom Canvas (100%)
    </div>
  );
};
`,Gh=t({default:()=>Kh}),Kh=`// @jxui/react v3.0.0 — MasonryLayout (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Layout, Maximize2, Minimize2, X, Move, Split } from 'lucide-react';

// 12. MasonryLayout
export const MasonryLayout: React.FC = () => {
  return (
    <div className="flex gap-1.5 text-[10px]">
      <div className="flex flex-col gap-1.5"><div className="h-10 w-16 border rounded p-1">Tile 1</div><div className="h-6 w-16 border rounded p-1">Tile 2</div></div>
      <div className="flex flex-col gap-1.5"><div className="h-6 w-16 border rounded p-1">Tile 3</div><div className="h-10 w-16 border rounded p-1">Tile 4</div></div>
    </div>
  );
};
`,qh=t({default:()=>Jh}),Jh=`// @jxui/react v3.0.0 — MosaicGrid (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Layout, Maximize2, Minimize2, X, Move, Split } from 'lucide-react';

// 9. MosaicGrid
export const MosaicGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-1.5 w-32 text-[10px] text-center font-bold">
      <div className="p-2 bg-indigo-100 dark:bg-indigo-950 rounded">A</div>
      <div className="p-2 bg-violet-100 dark:bg-violet-950 rounded">B</div>
    </div>
  );
};
`,Yh=t({default:()=>Xh}),Xh=`// @jxui/react v3.0.0 — PanelGroup (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Layout, Maximize2, Minimize2, X, Move, Split } from 'lucide-react';

// 14. PanelGroup
export const PanelGroup: React.FC = () => {
  return (
    <div className="border rounded-lg text-xs p-2">
      <span className="font-bold">Inspector Panel Group</span>
    </div>
  );
};
`,Zh=t({default:()=>Qh}),Qh=`// @jxui/react v3.0.0 — ResizableLayout (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Layout, Maximize2, Minimize2, X, Move, Split } from 'lucide-react';

// 8. ResizableLayout
export const ResizableLayout: React.FC = () => {
  return <div className="text-xs text-slate-500">Multi-column adjustable workspace layout</div>;
};
`,$h=t({default:()=>eg}),eg=`// @jxui/react v3.0.0 — ResponsiveGrid (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Layout, Maximize2, Minimize2, X, Move, Split } from 'lucide-react';

// 11. ResponsiveGrid
export const ResponsiveGrid: React.FC = () => {
  return <div className="text-xs text-slate-500">Responsive 12-column flex grid</div>;
};
`,tg=t({default:()=>ng}),ng=`// @jxui/react v3.0.0 — SpatialWorkspace (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Layout, Maximize2, Minimize2, X, Move, Split } from 'lucide-react';

// 3. SpatialWorkspace
export const SpatialWorkspace: React.FC = () => {
  return (
    <div className="p-3 border rounded-xl text-xs font-semibold">
      3D Spatial Layer View
    </div>
  );
};
`,rg=t({default:()=>ig}),ig=`// @jxui/react v3.0.0 — SplitPane (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Layout, Maximize2, Minimize2, X, Move, Split } from 'lucide-react';

// 7. SplitPane
export const SplitPane: React.FC = () => {
  return (
    <div className="flex border rounded-lg overflow-hidden text-xs w-48 h-12">
      <div className="flex-1 p-2 bg-slate-50 dark:bg-slate-900">Left Pane</div>
      <div className="w-1 bg-indigo-500 cursor-col-resize" />
      <div className="flex-1 p-2 bg-slate-100 dark:bg-slate-800">Right Pane</div>
    </div>
  );
};
`,ag=t({default:()=>og}),og=`// @jxui/react v3.0.0 — WindowManager (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Layout, Maximize2, Minimize2, X, Move, Split } from 'lucide-react';

// 4. WindowManager
export const WindowManager: React.FC = () => {
  return (
    <div className="w-56 border rounded-xl shadow-lg overflow-hidden text-xs">
      <div className="bg-slate-100 dark:bg-slate-800 p-2 flex items-center justify-between border-b">
        <span className="font-bold">Terminal Window</span>
        <div className="flex gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
        </div>
      </div>
      <div className="p-2 font-mono text-[10px]">$ jxui --version</div>
    </div>
  );
};
`,sg=t({default:()=>cg}),cg=`// @jxui/react v3.0.0 — WorkspaceSwitcher (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Layout, Maximize2, Minimize2, X, Move, Split } from 'lucide-react';

// 15. WorkspaceSwitcher
export const WorkspaceSwitcher: React.FC = () => {
  return (
    <div className="flex items-center gap-1.5 text-xs font-semibold">
      <span className="px-2 py-0.5 bg-indigo-600 text-white rounded">Design</span>
      <span className="px-2 py-0.5 text-slate-500 hover:text-slate-800">Production</span>
    </div>
  );
};
`,lg=t({default:()=>ug}),ug=`// @jxui/react v3.0.0 — CircularProgress (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Loader2, Check, Sparkles, UploadCloud } from 'lucide-react';

// 11. CircularProgress
export const CircularProgress: React.FC = () => {
  return <Loader2 className="w-6 h-6 text-indigo-600 animate-spin" />;
};
`,dg=t({default:()=>fg}),fg=`// @jxui/react v3.0.0 — GradientLoader (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Loader2, Check, Sparkles, UploadCloud } from 'lucide-react';

// 6. GradientLoader
export const GradientLoader: React.FC = () => {
  return (
    <div className="w-7 h-7 rounded-full border-2 border-transparent border-t-indigo-600 border-r-violet-600 animate-spin" />
  );
};
`,pg=t({default:()=>mg}),mg=`// @jxui/react v3.0.0 — LiquidLoader (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Loader2, Check, Sparkles, UploadCloud } from 'lucide-react';

// 1. LiquidLoader
export const LiquidLoader: React.FC = () => {
  return (
    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 animate-spin-slow blur-xs shadow-md" />
  );
};
`,hg=t({default:()=>gg}),gg=`// @jxui/react v3.0.0 — MorphingLoader (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Loader2, Check, Sparkles, UploadCloud } from 'lucide-react';

// 2. MorphingLoader
export const MorphingLoader: React.FC = () => {
  return (
    <div className="w-6 h-6 bg-indigo-600 rounded-sm animate-spin" />
  );
};
`,_g=t({default:()=>vg}),vg=`// @jxui/react v3.0.0 — MultiStepProgress (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Loader2, Check, Sparkles, UploadCloud } from 'lucide-react';

// 13. MultiStepProgress
export const MultiStepProgress: React.FC = () => {
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px]">1</span>
      <div className="w-6 h-0.5 bg-indigo-600" />
      <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center text-[10px]">2</span>
    </div>
  );
};
`,yg=t({default:()=>bg}),bg=`// @jxui/react v3.0.0 — OrbitalLoader (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Loader2, Check, Sparkles, UploadCloud } from 'lucide-react';

// 3. OrbitalLoader
export const OrbitalLoader: React.FC = () => {
  return (
    <div className="relative w-8 h-8 flex items-center justify-center animate-spin">
      <div className="absolute top-0 w-2 h-2 rounded-full bg-indigo-600" />
      <div className="absolute bottom-0 w-2 h-2 rounded-full bg-violet-400" />
    </div>
  );
};
`,xg=t({default:()=>Sg}),Sg=`// @jxui/react v3.0.0 — ParticleLoader (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Loader2, Check, Sparkles, UploadCloud } from 'lucide-react';

// 4. ParticleLoader
export const ParticleLoader: React.FC = () => {
  return (
    <div className="flex items-center gap-1">
      <span className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" />
      <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.15s]" />
      <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.3s]" />
    </div>
  );
};
`,Cg=t({default:()=>wg}),wg=`// @jxui/react v3.0.0 — ProgressRing (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Loader2, Check, Sparkles, UploadCloud } from 'lucide-react';

// 10. ProgressRing
export const ProgressRing: React.FC = () => {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center font-mono text-[11px] font-bold">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="14" fill="none" className="stroke-slate-200 dark:stroke-slate-800" strokeWidth="3" />
        <circle cx="18" cy="18" r="14" fill="none" className="stroke-indigo-600" strokeWidth="3" strokeDasharray="88" strokeDashoffset="26" />
      </svg>
      <span className="absolute">70%</span>
    </div>
  );
};
`,Tg=t({default:()=>Eg}),Eg=`// @jxui/react v3.0.0 — SegmentedProgress (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Loader2, Check, Sparkles, UploadCloud } from 'lucide-react';

// 12. SegmentedProgress
export const SegmentedProgress: React.FC = () => {
  return (
    <div className="flex items-center gap-1 w-32">
      <div className="flex-1 h-1.5 bg-indigo-600 rounded-full" />
      <div className="flex-1 h-1.5 bg-indigo-600 rounded-full" />
      <div className="flex-1 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full" />
    </div>
  );
};
`,Dg=t({default:()=>Og}),Og=`// @jxui/react v3.0.0 — SkeletonCard (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Loader2, Check, Sparkles, UploadCloud } from 'lucide-react';

// 7. SkeletonCard
export const SkeletonCard: React.FC = () => {
  return (
    <div className="w-48 p-3 border border-slate-200 dark:border-slate-800 rounded-xl flex flex-col gap-2">
      <div className="w-full h-20 bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse" />
      <div className="w-3/4 h-3 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
      <div className="w-1/2 h-2.5 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
    </div>
  );
};
`,kg=t({default:()=>Ag}),Ag=`// @jxui/react v3.0.0 — SkeletonTable (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Loader2, Check, Sparkles, UploadCloud } from 'lucide-react';

// 8. SkeletonTable
export const SkeletonTable: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full h-6 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
      <div className="w-full h-6 bg-slate-100 dark:bg-slate-900 rounded animate-pulse" />
    </div>
  );
};
`,jg=t({default:()=>Mg}),Mg=`// @jxui/react v3.0.0 — SkeletonText (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Loader2, Check, Sparkles, UploadCloud } from 'lucide-react';

// 9. SkeletonText
export const SkeletonText: React.FC = () => {
  return (
    <div className="flex flex-col gap-1.5 w-40">
      <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
      <div className="w-4/5 h-2.5 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
    </div>
  );
};
`,Ng=t({default:()=>Pg}),Pg=`// @jxui/react v3.0.0 — TaskProgress (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Loader2, Check, Sparkles, UploadCloud } from 'lucide-react';

// 15. TaskProgress
export const TaskProgress: React.FC = () => {
  return (
    <div className="p-2 border rounded-lg text-xs flex items-center justify-between w-48">
      <span>Index Symbols</span>
      <span className="font-mono text-emerald-600 font-bold">Done ✓</span>
    </div>
  );
};
`,Fg=t({default:()=>Ig}),Ig=`// @jxui/react v3.0.0 — UploadProgress (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Loader2, Check, Sparkles, UploadCloud } from 'lucide-react';

// 14. UploadProgress
export const UploadProgress: React.FC = () => {
  return (
    <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
      <UploadCloud className="w-4 h-4 text-indigo-500 animate-bounce" />
      <span>2.4 MB / 4.0 MB (60%)</span>
    </div>
  );
};
`,Lg=t({default:()=>Rg}),Rg=`// @jxui/react v3.0.0 — WaveLoader (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Loader2, Check, Sparkles, UploadCloud } from 'lucide-react';

// 5. WaveLoader
export const WaveLoader: React.FC = () => {
  return (
    <div className="flex items-end gap-1 h-6">
      <div className="w-1.5 h-3 bg-indigo-600 rounded-full animate-pulse" />
      <div className="w-1.5 h-6 bg-indigo-600 rounded-full animate-pulse [animation-delay:0.2s]" />
      <div className="w-1.5 h-4 bg-indigo-600 rounded-full animate-pulse [animation-delay:0.4s]" />
    </div>
  );
};
`,zg=t({default:()=>Bg}),Bg=`// @jxui/react v3.0.0 — BottomSheet (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, Search, ChevronRight, CornerDownLeft, Sparkles, Layers } from 'lucide-react';

// 8. BottomSheet
export const BottomSheet: React.FC = () => {
  return (
    <div className="w-64 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-t-2xl shadow-xl flex flex-col items-center text-xs">
      <div className="w-10 h-1 bg-slate-300 dark:bg-slate-700 rounded-full mb-2" />
      <span>Mobile Bottom Sheet</span>
    </div>
  );
};
`,Vg=t({default:()=>Hg}),Hg=`// @jxui/react v3.0.0 — CommandPalette (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, Search, ChevronRight, CornerDownLeft, Sparkles, Layers } from 'lucide-react';

// 18. CommandPalette
export const CommandPalette: React.FC = () => {
  return (
    <div className="w-full max-w-sm p-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl shadow-2xl text-xs">
      <div className="flex items-center gap-2 px-2 py-1 border-b border-slate-200 dark:border-slate-800">
        <Search className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-400">Search commands...</span>
      </div>
      <div className="p-2 text-slate-600 dark:text-slate-300">Quick launcher palette</div>
    </div>
  );
};
`,Ug=t({default:()=>Wg}),Wg=`// @jxui/react v3.0.0 — ContextMenu (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, Search, ChevronRight, CornerDownLeft, Sparkles, Layers } from 'lucide-react';

// 13. ContextMenu
export const ContextMenu: React.FC = () => {
  return (
    <div className="w-40 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-xl text-xs flex flex-col gap-0.5">
      <div className="px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">Inspect Element</div>
      <div className="px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">Copy Token CSS</div>
    </div>
  );
};
`,Gg=t({default:()=>Kg}),Kg=`// @jxui/react v3.0.0 — Drawer (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, Search, ChevronRight, CornerDownLeft, Sparkles, Layers } from 'lucide-react';

// 6. Drawer
export const Drawer: React.FC = () => {
  return (
    <div className="w-56 p-3 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 rounded-lg text-xs">
      <span className="font-bold">Edge Slide Drawer</span>
      <p className="text-slate-500 mt-1">Right-anchored panel.</p>
    </div>
  );
};
`,qg=t({default:()=>Jg}),Jg=`// @jxui/react v3.0.0 — FloatingPanel (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, Search, ChevronRight, CornerDownLeft, Sparkles, Layers } from 'lucide-react';

// 10. FloatingPanel
export const FloatingPanel: React.FC = () => {
  return (
    <div className="w-64 p-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl shadow-2xl text-xs">
      <div className="flex items-center justify-between pb-1.5 border-b border-slate-200 dark:border-slate-800">
        <span className="font-bold">Floating Widget</span>
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
      </div>
      <p className="text-slate-500 mt-1">Draggable window surface.</p>
    </div>
  );
};
`,Yg=t({default:()=>Xg}),Xg=`// @jxui/react v3.0.0 — FullscreenModal (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, Search, ChevronRight, CornerDownLeft, Sparkles, Layers } from 'lucide-react';

// 5. FullscreenModal
export const FullscreenModal: React.FC = () => {
  return (
    <div className="p-3 bg-slate-100 dark:bg-slate-800 border rounded-lg text-xs flex items-center justify-between">
      <span>Fullscreen Viewport Overlay</span>
      <kbd className="text-[10px] bg-white dark:bg-slate-700 px-1 rounded">ESC</kbd>
    </div>
  );
};
`,Zg=t({default:()=>Qg}),Qg=`// @jxui/react v3.0.0 — GlassDialog (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, Search, ChevronRight, CornerDownLeft, Sparkles, Layers } from 'lucide-react';

// 3. GlassDialog
export const GlassDialog: React.FC = () => {
  return (
    <div className="p-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-2xl border border-white/60 dark:border-slate-700/60 rounded-xl shadow-xl text-xs">
      <span className="font-bold text-slate-900 dark:text-white">Specular Glass Dialog</span>
      <p className="text-slate-500 mt-1">Multi-layered glass reflection profile.</p>
    </div>
  );
};
`,$g=t({default:()=>e_}),e_=`// @jxui/react v3.0.0 — HoverCard (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, Search, ChevronRight, CornerDownLeft, Sparkles, Layers } from 'lucide-react';

// 17. HoverCard
export const HoverCard: React.FC = () => {
  return (
    <div className="w-56 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl text-xs">
      <div className="font-bold text-slate-900 dark:text-white">@jxui/react</div>
      <p className="text-slate-500 mt-1">High-performance zero-shift design library.</p>
    </div>
  );
};
`,t_=t({default:()=>n_}),n_=`// @jxui/react v3.0.0 — InteractiveBottomSheet (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, Search, ChevronRight, CornerDownLeft, Sparkles, Layers } from 'lucide-react';

// 9. InteractiveBottomSheet
export const InteractiveBottomSheet: React.FC = () => {
  return (
    <div className="w-64 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-t-2xl shadow-xl flex flex-col items-center text-xs">
      <div className="w-12 h-1.5 bg-indigo-400 rounded-full mb-2" />
      <span>Drag down to dismiss</span>
    </div>
  );
};
`,r_=t({default:()=>i_}),i_=`// @jxui/react v3.0.0 — InteractiveTooltip (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, Search, ChevronRight, CornerDownLeft, Sparkles, Layers } from 'lucide-react';

// 16. InteractiveTooltip
export const InteractiveTooltip: React.FC = () => {
  return (
    <div className="p-2 bg-slate-900 text-white rounded text-[11px] shadow-lg">
      Interactive tooltip with clickable link
    </div>
  );
};
`,a_=t({default:()=>o_}),o_=`// @jxui/react v3.0.0 — LiquidDialog (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, Search, ChevronRight, CornerDownLeft, Sparkles, Layers } from 'lucide-react';

// 2. LiquidDialog
export const LiquidDialog: React.FC = () => {
  return (
    <div className="p-4 bg-white/80 dark:bg-[#111827]/80 backdrop-blur-xl border border-[var(--jx-accent-halo)] jx-elevation-2 rounded-xl text-xs">
      <span className="font-bold text-indigo-600 dark:text-indigo-400">Liquid Viscous Dialog</span>
      <p className="text-slate-500 dark:text-slate-400 mt-1">Simulated fluid surface tension.</p>
    </div>
  );
};
`,s_=t({default:()=>c_}),c_=`// @jxui/react v3.0.0 — MagneticDrawer (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, Search, ChevronRight, CornerDownLeft, Sparkles, Layers } from 'lucide-react';

// 7. MagneticDrawer
export const MagneticDrawer: React.FC = () => {
  return (
    <div className="p-3 bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-lg text-xs">
      <span className="font-semibold text-indigo-600">Magnetic Snap Drawer (30% / 60% / 100%)</span>
    </div>
  );
};
`,l_=t({default:()=>u_}),u_=`// @jxui/react v3.0.0 — MorphingModal (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, Search, ChevronRight, CornerDownLeft, Sparkles, Layers } from 'lucide-react';

// 1. MorphingModal
export const MorphingModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { palette, getRadiusClass } = useJXTheme();
  return (
    <div>
      <button onClick={() => setOpen(true)} className={\`px-4 py-2 text-xs font-semibold text-white \${palette.bg} \${getRadiusClass('control')} cursor-pointer\`}>
        Open Morphing Modal
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className={\`w-full max-w-sm p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl \${getRadiusClass('card')} animate-scale-in\`}>
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
              <span className="font-bold text-xs text-slate-900 dark:text-white">Morphing Surface</span>
              <button onClick={() => setOpen(false)}><X className="w-4 h-4 text-slate-400" /></button>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 py-3">Zero-shift geometric expansion from trigger coordinates.</p>
          </div>
        </div>
      )}
    </div>
  );
};
`,d_=t({default:()=>f_}),f_=`// @jxui/react v3.0.0 — OverlayStack (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, Search, ChevronRight, CornerDownLeft, Sparkles, Layers } from 'lucide-react';

// 20. OverlayStack
export const OverlayStack: React.FC = () => {
  return (
    <div className="flex items-center gap-2 text-xs text-slate-500">
      <Layers className="w-4 h-4 text-indigo-500" />
      <span>Z-Index Layer Stack Manager (LIFO)</span>
    </div>
  );
};
`,p_=t({default:()=>m_}),m_=`// @jxui/react v3.0.0 — RadialContextMenu (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, Search, ChevronRight, CornerDownLeft, Sparkles, Layers } from 'lucide-react';

// 14. RadialContextMenu
export const RadialContextMenu: React.FC = () => {
  return (
    <div className="w-16 h-16 rounded-full border-2 border-indigo-500/40 flex items-center justify-center text-[10px] text-slate-500 font-bold">
      Radial Menu
    </div>
  );
};
`,h_=t({default:()=>g_}),g_=`// @jxui/react v3.0.0 — ResizablePanel (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, Search, ChevronRight, CornerDownLeft, Sparkles, Layers } from 'lucide-react';

// 11. ResizablePanel
export const ResizablePanel: React.FC = () => {
  return (
    <div className="relative w-48 h-24 p-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs">
      <span>Resizable Panel</span>
      <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-r-2 border-b-2 border-slate-400 cursor-nwse-resize" />
    </div>
  );
};
`,__=t({default:()=>v_}),v_=`// @jxui/react v3.0.0 — SmartPopover (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, Search, ChevronRight, CornerDownLeft, Sparkles, Layers } from 'lucide-react';

// 15. SmartPopover
export const SmartPopover: React.FC = () => {
  return (
    <div className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-md text-xs">
      Collision Auto-Positioning
    </div>
  );
};
`,y_=t({default:()=>b_}),b_=`// @jxui/react v3.0.0 — SpotlightOverlay (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, Search, ChevronRight, CornerDownLeft, Sparkles, Layers } from 'lucide-react';

// 12. SpotlightOverlay
export const SpotlightOverlay: React.FC = () => {
  return (
    <div className="relative p-3 bg-slate-900 text-white rounded-lg text-xs flex items-center justify-between">
      <span>Spotlight Focus Zone</span>
      <span className="text-indigo-400 font-mono text-[10px]">Backdrop Dim 75%</span>
    </div>
  );
};
`,x_=t({default:()=>S_}),S_=`// @jxui/react v3.0.0 — SpotlightSearch (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, Search, ChevronRight, CornerDownLeft, Sparkles, Layers } from 'lucide-react';

// 19. SpotlightSearch
export const SpotlightSearch: React.FC = () => {
  return (
    <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-300 dark:border-indigo-800 rounded-xl text-xs flex items-center justify-between">
      <span className="font-semibold text-indigo-700 dark:text-indigo-300">Fullscreen Spotlight Engine</span>
      <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-800 rounded text-[10px]">⌘K</kbd>
    </div>
  );
};
`,C_=t({default:()=>w_}),w_=`// @jxui/react v3.0.0 — SpringModal (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, Search, ChevronRight, CornerDownLeft, Sparkles, Layers } from 'lucide-react';

// 4. SpringModal
export const SpringModal: React.FC = () => {
  return (
    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl shadow-lg text-xs animate-bounce-subtle">
      <span className="font-bold text-slate-900 dark:text-white">Spring Physics Modal</span>
      <p className="text-slate-500 mt-1">Cubic bezier spring release with damping.</p>
    </div>
  );
};
`,T_=t({default:()=>E_}),E_=`// @jxui/react v3.0.0 — AdaptiveNavbar (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Home, 
  Compass, 
  Layers, 
  Settings, 
  Search, 
  ChevronRight, 
  ChevronDown, 
  Menu, 
  X, 
  Sliders, 
  Folder, 
  FileText,
  Share2,
  Grid,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Bell
} from 'lucide-react';

// 3. AdaptiveNavbar
export interface AdaptiveNavbarProps {
  brand?: string;
}
export const AdaptiveNavbar: React.FC<AdaptiveNavbarProps> = ({ brand = 'JXUI Adaptive' }) => {
  const { palette, getRadiusClass } = useJXTheme();
  const [open, setOpen] = useState(false);
  return (
    <header className={\`w-full px-4 py-3 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between \${getRadiusClass('control')}\`}>
      <span className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-indigo-500" />
        {brand}
      </span>
      <div className="hidden md:flex items-center gap-5 text-xs font-medium text-slate-600 dark:text-slate-400">
        <a href="#overview" className="hover:text-indigo-600">Overview</a>
        <a href="#components" className="hover:text-indigo-600">Components</a>
        <a href="#tokens" className="hover:text-indigo-600">Tokens</a>
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 cursor-pointer"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </button>
    </header>
  );
};
`,D_=t({default:()=>O_}),O_=`// @jxui/react v3.0.0 — AnimatedSidebar (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Home, 
  Compass, 
  Layers, 
  Settings, 
  Search, 
  ChevronRight, 
  ChevronDown, 
  Menu, 
  X, 
  Sliders, 
  Folder, 
  FileText,
  Share2,
  Grid,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Bell
} from 'lucide-react';

// 5. AnimatedSidebar
export interface AnimatedSidebarProps {
  collapsed?: boolean;
}
export const AnimatedSidebar: React.FC<AnimatedSidebarProps> = ({ collapsed = false }) => {
  const { palette } = useJXTheme();
  return (
    <aside className={\`transition-all duration-300 \${collapsed ? 'w-16' : 'w-56'} p-3 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col gap-2\`}>
      <div className="flex items-center gap-2 p-2 font-bold text-xs text-slate-900 dark:text-white">
        <Sparkles className="w-4 h-4 text-indigo-500 shrink-0" />
        {!collapsed && <span>Workspace</span>}
      </div>
      <div className="flex flex-col gap-1">
        {['Dashboard', 'Projects', 'Analytics', 'Settings'].map((item) => (
          <button key={item} className="flex items-center gap-2 px-2.5 py-1.5 text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg cursor-pointer">
            <Folder className="w-4 h-4 shrink-0" />
            {!collapsed && <span>{item}</span>}
          </button>
        ))}
      </div>
    </aside>
  );
};
`,k_=t({default:()=>A_}),A_=`// @jxui/react v3.0.0 — AnimatedTabs (JXUI v3.0 Unified Component Suite)
import React from 'react';
import { JXTabs, type JXTabsProps, type JXTabItem } from '../../navigation/JXTabs';

// 11. AnimatedTabs
// Reuses JXTabs zero-shift layout pill projection, count badges, and tab panels
export interface AnimatedTabsProps extends Omit<JXTabsProps, 'tabs'> {
  tabs?: (string | JXTabItem)[];
}

export const AnimatedTabs: React.FC<AnimatedTabsProps> = ({
  tabs = ['Design', 'Code', 'API', 'Audit'],
  indicatorVariant = 'pill',
  ...props
}) => {
  const convertedTabs: JXTabItem[] = tabs.map((t) => {
    if (typeof t === 'string') {
      return { id: t.toLowerCase().replace(/\\s+/g, '-'), label: t };
    }
    return t;
  });

  return (
    <JXTabs
      tabs={convertedTabs}
      defaultValue={convertedTabs[0]?.id}
      indicatorVariant={indicatorVariant}
      {...props}
    />
  );
};

export type { JXTabItem };
`,j_=t({default:()=>M_}),M_=`// @jxui/react v3.0.0 — BreadcrumbTrail (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Home, 
  Compass, 
  Layers, 
  Settings, 
  Search, 
  ChevronRight, 
  ChevronDown, 
  Menu, 
  X, 
  Sliders, 
  Folder, 
  FileText,
  Share2,
  Grid,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Bell
} from 'lucide-react';

// 10. BreadcrumbTrail
export interface BreadcrumbTrailProps {
  crumbs?: string[];
}
export const BreadcrumbTrail: React.FC<BreadcrumbTrailProps> = ({ crumbs = ['JXUI', 'Library', 'Navigation', 'Dock'] }) => {
  return (
    <nav className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
      {crumbs.map((crumb, idx) => (
        <React.Fragment key={crumb}>
          {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-400" />}
          <span className={idx === crumbs.length - 1 ? 'font-bold text-slate-900 dark:text-white' : 'hover:underline cursor-pointer'}>
            {crumb}
          </span>
        </React.Fragment>
      ))}
    </nav>
  );
};
`,N_=t({default:()=>P_}),P_=`// @jxui/react v3.0.0 — CircularNavigation (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Home, 
  Compass, 
  Layers, 
  Settings, 
  Search, 
  ChevronRight, 
  ChevronDown, 
  Menu, 
  X, 
  Sliders, 
  Folder, 
  FileText,
  Share2,
  Grid,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Bell
} from 'lucide-react';

// 15. CircularNavigation
export const CircularNavigation: React.FC = () => {
  const { palette } = useJXTheme();
  return (
    <div className="relative w-28 h-28 rounded-full border-2 border-dashed border-indigo-500/40 flex items-center justify-center">
      <div className={\`w-8 h-8 rounded-full \${palette.bg} text-white flex items-center justify-center shadow-md\`}>
        <Sparkles className="w-4 h-4" />
      </div>
      <button className="absolute top-1 text-slate-500 hover:text-indigo-600"><Home className="w-3.5 h-3.5" /></button>
      <button className="absolute bottom-1 text-slate-500 hover:text-indigo-600"><Compass className="w-3.5 h-3.5" /></button>
      <button className="absolute left-1 text-slate-500 hover:text-indigo-600"><Layers className="w-3.5 h-3.5" /></button>
      <button className="absolute right-1 text-slate-500 hover:text-indigo-600"><Settings className="w-3.5 h-3.5" /></button>
    </div>
  );
};
`,F_=t({default:()=>I_}),I_=`// @jxui/react v3.0.0 — CollapsibleNavigation (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Home, 
  Compass, 
  Layers, 
  Settings, 
  Search, 
  ChevronRight, 
  ChevronDown, 
  Menu, 
  X, 
  Sliders, 
  Folder, 
  FileText,
  Share2,
  Grid,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Bell
} from 'lucide-react';

// 7. CollapsibleNavigation
export const CollapsibleNavigation: React.FC = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-48 text-xs font-medium">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
        <span>Components</span>
        <ChevronDown className={\`w-3.5 h-3.5 transition-transform \${open ? 'rotate-180' : ''}\`} />
      </button>
      {open && (
        <div className="pl-4 flex flex-col gap-1 pt-1">
          <a href="#buttons" className="p-1 text-slate-500 hover:text-indigo-600">Buttons (20)</a>
          <a href="#glass" className="p-1 text-slate-500 hover:text-indigo-600">Glassmorphism (20)</a>
          <a href="#nav" className="p-1 text-slate-500 hover:text-indigo-600">Navigation (20)</a>
        </div>
      )}
    </div>
  );
};
`,L_=t({default:()=>R_}),R_=`// @jxui/react v3.0.0 — CommandNavigation (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Home, 
  Compass, 
  Layers, 
  Settings, 
  Search, 
  ChevronRight, 
  ChevronDown, 
  Menu, 
  X, 
  Sliders, 
  Folder, 
  FileText,
  Share2,
  Grid,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Bell
} from 'lucide-react';

// 9. CommandNavigation
export const CommandNavigation: React.FC = () => {
  const { getRadiusClass } = useJXTheme();
  return (
    <div className={\`px-3 py-2 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 \${getRadiusClass('control')} flex items-center justify-between gap-4 text-xs\`}>
      <span className="text-slate-500">Jump to section...</span>
      <kbd className="px-1.5 py-0.5 font-mono text-[10px] bg-white dark:bg-slate-800 border rounded text-slate-600 dark:text-slate-400">⌘P</kbd>
    </div>
  );
};
`,z_=t({default:()=>B_}),B_=`// @jxui/react v3.0.0 — ContextNavigation (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Home, 
  Compass, 
  Layers, 
  Settings, 
  Search, 
  ChevronRight, 
  ChevronDown, 
  Menu, 
  X, 
  Sliders, 
  Folder, 
  FileText,
  Share2,
  Grid,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Bell
} from 'lucide-react';

// 18. ContextNavigation
export const ContextNavigation: React.FC = () => {
  const { getRadiusClass } = useJXTheme();
  return (
    <div className={\`p-2 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 \${getRadiusClass('control')} flex items-center justify-between text-xs\`}>
      <span className="font-semibold text-indigo-900 dark:text-indigo-200">1 item selected</span>
      <div className="flex items-center gap-1.5">
        <button className="px-2 py-1 bg-white dark:bg-slate-800 rounded shadow-xs cursor-pointer">Duplicate</button>
        <button className="px-2 py-1 bg-white dark:bg-slate-800 text-rose-600 rounded shadow-xs cursor-pointer">Delete</button>
      </div>
    </div>
  );
};
`,V_=t({default:()=>H_}),H_=`// @jxui/react v3.0.0 — ExpandableSidebar (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Home, 
  Compass, 
  Layers, 
  Settings, 
  Search, 
  ChevronRight, 
  ChevronDown, 
  Menu, 
  X, 
  Sliders, 
  Folder, 
  FileText,
  Share2,
  Grid,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Bell
} from 'lucide-react';

// 6. ExpandableSidebar
export const ExpandableSidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={\`transition-all duration-300 \${isExpanded ? 'w-52' : 'w-14'} p-2 bg-slate-900 text-white flex flex-col gap-2 rounded-xl\`}
    >
      <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800 cursor-pointer">
        <Home className="w-4 h-4 shrink-0" />
        {isExpanded && <span className="text-xs font-medium">Home</span>}
      </button>
      <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800 cursor-pointer">
        <Compass className="w-4 h-4 shrink-0" />
        {isExpanded && <span className="text-xs font-medium">Explore</span>}
      </button>
    </div>
  );
};
`,U_=t({default:()=>W_}),W_=`// @jxui/react v3.0.0 — FloatingDock (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Home, 
  Compass, 
  Layers, 
  Settings, 
  Search, 
  ChevronRight, 
  ChevronDown, 
  Menu, 
  X, 
  Sliders, 
  Folder, 
  FileText,
  Share2,
  Grid,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Bell
} from 'lucide-react';

// 2. FloatingDock
export interface FloatingDockProps {
  onSearch?: () => void;
}
export const FloatingDock: React.FC<FloatingDockProps> = ({ onSearch }) => {
  const { palette, getRadiusClass } = useJXTheme();
  return (
    <div className={\`inline-flex items-center gap-2 p-1.5 bg-slate-900/90 dark:bg-slate-950/90 text-white backdrop-blur-xl border border-slate-700/80 shadow-2xl \${getRadiusClass('pill')}\`}>
      <button className="p-2 hover:bg-slate-800 rounded-full transition-colors cursor-pointer" title="Home"><Home className="w-4 h-4" /></button>
      <button className="p-2 hover:bg-slate-800 rounded-full transition-colors cursor-pointer" title="Search" onClick={onSearch}><Search className="w-4 h-4" /></button>
      <div className="w-px h-4 bg-slate-700" />
      <button className={\`px-3 py-1 text-xs font-semibold rounded-full \${palette.bg} cursor-pointer\`}>Action</button>
    </div>
  );
};
`,G_=t({default:()=>K_}),K_=`// @jxui/react v3.0.0 — FloatingTabBar (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Home, 
  Compass, 
  Layers, 
  Settings, 
  Search, 
  ChevronRight, 
  ChevronDown, 
  Menu, 
  X, 
  Sliders, 
  Folder, 
  FileText,
  Share2,
  Grid,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Bell
} from 'lucide-react';

// 14. FloatingTabBar
export const FloatingTabBar: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  return (
    <div className={\`px-4 py-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-xl \${getRadiusClass('pill')} flex items-center gap-6\`}>
      <button className="text-indigo-600 dark:text-indigo-400 cursor-pointer"><Home className="w-4 h-4" /></button>
      <button className="text-slate-400 hover:text-slate-600 cursor-pointer"><Search className="w-4 h-4" /></button>
      <button className="text-slate-400 hover:text-slate-600 cursor-pointer"><Bell className="w-4 h-4" /></button>
      <button className="text-slate-400 hover:text-slate-600 cursor-pointer"><Settings className="w-4 h-4" /></button>
    </div>
  );
};
`,q_=t({default:()=>J_}),J_=`// @jxui/react v3.0.0 — GestureNavigation (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { ArrowLeft, ArrowRight, Compass, Shield, Zap, Sparkles } from 'lucide-react';

const STEPS = [
  { id: 1, title: 'Luminescence', icon: Sparkles, desc: 'Zero CLS dynamic radiance' },
  { id: 2, title: 'Tactile Physics', icon: Zap, desc: 'Spring kinematic velocity' },
  { id: 3, title: 'WCAG AAA', icon: Shield, desc: 'High-contrast ARIA audited' },
];

export const GestureNavigation: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);

  const prevStep = () => setActiveStep((curr) => Math.max(0, curr - 1));
  const nextStep = () => setActiveStep((curr) => Math.min(STEPS.length - 1, curr + 1));

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    startX.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - startX.current;
    setDragOffset(delta);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}

    if (dragOffset > 40) {
      prevStep();
    } else if (dragOffset < -40) {
      nextStep();
    }
    setDragOffset(0);
  };

  const current = STEPS[activeStep];
  const Icon = current.icon;

  return (
    <div className="w-full flex flex-col items-center gap-2 select-none">
      {/* Swipeable Viewport */}
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        style={{ transform: \`translateX(\${dragOffset}px)\` }}
        className={\`w-full p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm cursor-grab active:cursor-grabbing transition-transform \${
          isDragging ? 'duration-0' : 'duration-200'
        } \${getRadiusClass('card')} flex items-center justify-between gap-3\`}
      >
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); prevStep(); }}
          disabled={activeStep === 0}
          className="p-1 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-2 min-w-0 text-center">
          <div className="w-6 h-6 rounded bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
            <Icon className="w-3.5 h-3.5" />
          </div>
          <div className="min-w-0">
            <span className="text-xs font-bold text-slate-900 dark:text-white block truncate">
              {current.title}
            </span>
            <span className="text-[10px] text-slate-400 block truncate">
              {current.desc}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); nextStep(); }}
          disabled={activeStep === STEPS.length - 1}
          className="p-1 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
        >
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Step Indicators & Gesture Hint */}
      <div className="flex items-center gap-1.5">
        {STEPS.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveStep(idx)}
            className={\`h-1.5 rounded-full transition-all cursor-pointer \${
              activeStep === idx ? 'w-4 bg-indigo-600' : 'w-1.5 bg-slate-300 dark:bg-slate-700'
            }\`}
          />
        ))}
      </div>
      <span className="text-[9px] font-mono text-slate-400">Swipe or drag left / right</span>
    </div>
  );
};
`,Y_=t({default:()=>X_}),X_=`// @jxui/react v3.0.0 — MagneticDock (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Home, 
  Compass, 
  Layers, 
  Settings, 
  Search, 
  ChevronRight, 
  ChevronDown, 
  Menu, 
  X, 
  Sliders, 
  Folder, 
  FileText,
  Share2,
  Grid,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Bell
} from 'lucide-react';

// 1. MagneticDock
export interface MagneticDockProps {
  items?: { id: string; label: string; icon: React.ComponentType<{ className?: string }> }[];
}
export const MagneticDock: React.FC<MagneticDockProps> = ({
  items = [
    { id: '1', label: 'Home', icon: Home },
    { id: '2', label: 'Explore', icon: Compass },
    { id: '3', label: 'Layers', icon: Layers },
    { id: '4', label: 'Settings', icon: Settings },
  ],
}) => {
  const { palette, getRadiusClass } = useJXTheme();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className={\`inline-flex items-end gap-3 px-4 py-3 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-slate-200/60 dark:border-slate-800 shadow-xl \${getRadiusClass('pill')}\`}>
      {items.map((it, idx) => {
        const Icon = it.icon;
        const isHovered = hoveredIdx === idx;
        const isNeighbor = hoveredIdx !== null && Math.abs(hoveredIdx - idx) === 1;
        const scale = isHovered ? 'scale-125 -translate-y-2' : isNeighbor ? 'scale-110 -translate-y-1' : 'scale-100';

        return (
          <button
            key={it.id}
            type="button"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            title={it.label}
            className={\`w-10 h-10 flex items-center justify-center rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700 text-slate-700 dark:text-slate-200 shadow-md transition-all duration-150 cursor-pointer \${scale} \${
              isHovered ? \`\${palette.bg} text-white border-transparent\` : ''
            }\`}
          >
            <Icon className="w-5 h-5" />
          </button>
        );
      })}
    </div>
  );
};
`,Z_=t({default:()=>Q_}),Q_=`// @jxui/react v3.0.0 — MegaMenu (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Home, 
  Compass, 
  Layers, 
  Settings, 
  Search, 
  ChevronRight, 
  ChevronDown, 
  Menu, 
  X, 
  Sliders, 
  Folder, 
  FileText,
  Share2,
  Grid,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Bell
} from 'lucide-react';

// 8. MegaMenu
export const MegaMenu: React.FC = () => {
  const { getRadiusClass } = useJXTheme();
  return (
    <div className={\`p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl \${getRadiusClass('card')} grid grid-cols-3 gap-4 max-w-lg\`}>
      <div>
        <h5 className="font-bold text-xs text-slate-900 dark:text-white mb-2">Actions</h5>
        <div className="flex flex-col gap-1 text-[11px] text-slate-500">
          <span>Magnetic Buttons</span>
          <span>Hold to Confirm</span>
          <span>Slide to Action</span>
        </div>
      </div>
      <div>
        <h5 className="font-bold text-xs text-slate-900 dark:text-white mb-2">Surfaces</h5>
        <div className="flex flex-col gap-1 text-[11px] text-slate-500">
          <span>Liquid Glass</span>
          <span>Frosted Panel</span>
          <span>Adaptive Glass</span>
        </div>
      </div>
      <div>
        <h5 className="font-bold text-xs text-slate-900 dark:text-white mb-2">Enterprise</h5>
        <div className="flex flex-col gap-1 text-[11px] text-slate-500">
          <span>Notion Data Grid</span>
          <span>Waveform Scrubber</span>
          <span>Canary Splitter</span>
        </div>
      </div>
    </div>
  );
};
`,$_=t({default:()=>ev}),ev=`// @jxui/react v3.0.0 — MorphingNavbar (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Home, 
  Compass, 
  Layers, 
  Settings, 
  Search, 
  ChevronRight, 
  ChevronDown, 
  Menu, 
  X, 
  Sliders, 
  Folder, 
  FileText,
  Share2,
  Grid,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Bell
} from 'lucide-react';

// 4. MorphingNavbar
export interface MorphingNavbarProps {
  compact?: boolean;
}
export const MorphingNavbar: React.FC<MorphingNavbarProps> = ({ compact = false }) => {
  const { palette, getRadiusClass } = useJXTheme();
  return (
    <nav className={\`transition-all duration-300 \${compact ? 'py-1.5 px-3 max-w-md' : 'py-3 px-6 max-w-3xl'} mx-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800 shadow-md \${getRadiusClass('pill')} flex items-center justify-between\`}>
      <span className="text-xs font-bold text-slate-900 dark:text-white">Morphing Navigation</span>
      <span className="text-[11px] font-mono text-slate-500">{compact ? 'Compact Mode' : 'Expanded Mode'}</span>
    </nav>
  );
};
`,tv=t({default:()=>nv}),nv=`// @jxui/react v3.0.0 — MultiLevelMenu (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Home, 
  Compass, 
  Layers, 
  Settings, 
  Search, 
  ChevronRight, 
  ChevronDown, 
  Menu, 
  X, 
  Sliders, 
  Folder, 
  FileText,
  Share2,
  Grid,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Bell
} from 'lucide-react';

// 19. MultiLevelMenu
export const MultiLevelMenu: React.FC = () => {
  const { getRadiusClass } = useJXTheme();
  const [subOpen, setSubOpen] = useState(false);
  return (
    <div className={\`w-44 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl \${getRadiusClass('control')} text-xs relative\`}>
      <button onMouseEnter={() => setSubOpen(true)} className="w-full flex items-center justify-between px-2.5 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
        <span>Export</span>
        <ChevronRight className="w-3.5 h-3.5" />
      </button>
      {subOpen && (
        <div onMouseLeave={() => setSubOpen(false)} className={\`absolute top-0 left-full ml-1 w-36 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl \${getRadiusClass('control')}\`}>
          <div className="px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer">JSON Tokens</div>
          <div className="px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer">CSS Variables</div>
        </div>
      )}
    </div>
  );
};
`,rv=t({default:()=>iv}),iv=`// @jxui/react v3.0.0 — NavigationRail (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Home, 
  Compass, 
  Layers, 
  Settings, 
  Search, 
  ChevronRight, 
  ChevronDown, 
  Menu, 
  X, 
  Sliders, 
  Folder, 
  FileText,
  Share2,
  Grid,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Bell
} from 'lucide-react';

// 13. NavigationRail
export const NavigationRail: React.FC = () => {
  const { palette } = useJXTheme();
  const [active, setActive] = useState(0);
  const icons = [Home, Compass, Layers, Settings];
  return (
    <div className="w-14 py-4 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col items-center gap-4">
      {icons.map((Icon, idx) => (
        <button
          key={idx}
          onClick={() => setActive(idx)}
          className={\`w-9 h-9 flex items-center justify-center rounded-xl transition-all cursor-pointer \${
            active === idx ? \`\${palette.bg} text-white shadow-sm\` : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }\`}
        >
          <Icon className="w-4 h-4" />
        </button>
      ))}
    </div>
  );
};
`,av=t({default:()=>ov}),ov=`// @jxui/react v3.0.0 — OrbitalMenu (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Home, 
  Compass, 
  Layers, 
  Settings, 
  Search, 
  ChevronRight, 
  ChevronDown, 
  Menu, 
  X, 
  Sliders, 
  Folder, 
  FileText,
  Share2,
  Grid,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Bell
} from 'lucide-react';

// 17. OrbitalMenu
export const OrbitalMenu: React.FC = () => {
  const { palette } = useJXTheme();
  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      <div className={\`w-8 h-8 rounded-full \${palette.bg} text-white flex items-center justify-center z-10 shadow-lg animate-pulse\`}>
        <Sparkles className="w-4 h-4" />
      </div>
      <div className="absolute inset-0 rounded-full border border-indigo-500/20 animate-spin-slow">
        <div className="w-3 h-3 rounded-full bg-indigo-500 absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-xs" />
      </div>
    </div>
  );
};
`,sv=t({default:()=>cv}),cv=`// @jxui/react v3.0.0 — RadialMenu (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Home, 
  Compass, 
  Layers, 
  Settings, 
  Search, 
  ChevronRight, 
  ChevronDown, 
  Menu, 
  X, 
  Sliders, 
  Folder, 
  FileText,
  Share2,
  Grid,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Bell
} from 'lucide-react';

// 16. RadialMenu
export const RadialMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { palette } = useJXTheme();
  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className={\`w-10 h-10 rounded-full \${palette.bg} text-white flex items-center justify-center shadow-lg cursor-pointer\`}
        aria-label={open ? "Close radial menu" : "Open radial menu"}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <Grid className="w-4 h-4" />
      </button>
      {open && (
        <div className="absolute -top-12 -left-12 w-32 h-32 pointer-events-none" role="menu">
          <button role="menuitem" aria-label="Home" className="pointer-events-auto absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-white dark:bg-slate-800 rounded-full shadow-md flex items-center justify-center"><Home className="w-3.5 h-3.5 text-indigo-500" /></button>
          <button role="menuitem" aria-label="Search" className="pointer-events-auto absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-white dark:bg-slate-800 rounded-full shadow-md flex items-center justify-center"><Search className="w-3.5 h-3.5 text-indigo-500" /></button>
          <button role="menuitem" aria-label="Settings" className="pointer-events-auto absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white dark:bg-slate-800 rounded-full shadow-md flex items-center justify-center"><Settings className="w-3.5 h-3.5 text-indigo-500" /></button>
          <button role="menuitem" aria-label="Share" className="pointer-events-auto absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white dark:bg-slate-800 rounded-full shadow-md flex items-center justify-center"><Share2 className="w-3.5 h-3.5 text-indigo-500" /></button>
        </div>
      )}
    </div>
  );
};
`,lv=t({default:()=>uv}),uv=`// @jxui/react v3.0.0 — SlidingTabs (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  Home, 
  Compass, 
  Layers, 
  Settings, 
  Search, 
  ChevronRight, 
  ChevronDown, 
  Menu, 
  X, 
  Sliders, 
  Folder, 
  FileText,
  Share2,
  Grid,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Bell
} from 'lucide-react';

// 12. SlidingTabs
export const SlidingTabs: React.FC = () => {
  const { palette } = useJXTheme();
  const [active, setActive] = useState('Specs');
  return (
    <div className="flex border-b border-slate-200 dark:border-slate-800 text-xs font-semibold">
      {['Specs', 'Props', 'Changelog'].map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={\`px-4 py-2 relative cursor-pointer \${
            active === tab ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500'
          }\`}
        >
          {tab}
          {active === tab && <div className={\`absolute bottom-0 inset-x-0 h-0.5 \${palette.bg}\`} />}
        </button>
      ))}
    </div>
  );
};
`,dv=t({default:()=>fv}),fv=`// @jxui/react v3.0.0 — AvailabilityGrid (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Calendar, Clock, Clock3, ChevronRight, Check } from 'lucide-react';

// 8. AvailabilityGrid
export const AvailabilityGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-1 text-[10px] text-center">
      <span className="p-1 bg-emerald-100 text-emerald-700 rounded">9 AM ✓</span>
      <span className="p-1 bg-emerald-100 text-emerald-700 rounded">10 AM ✓</span>
      <span className="p-1 bg-slate-100 text-slate-400 rounded">11 AM —</span>
      <span className="p-1 bg-emerald-100 text-emerald-700 rounded">1 PM ✓</span>
    </div>
  );
};
`,pv=t({default:()=>mv}),mv=`// @jxui/react v3.0.0 — CountdownTimer (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Calendar, Clock, Clock3, ChevronRight, Check } from 'lucide-react';

// 10. CountdownTimer
export const CountdownTimer: React.FC = () => {
  return (
    <div className="flex items-center gap-2 font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400">
      <div className="p-1.5 border rounded bg-slate-50 dark:bg-slate-900">04d</div>
      <span>:</span>
      <div className="p-1.5 border rounded bg-slate-50 dark:bg-slate-900">18h</div>
      <span>:</span>
      <div className="p-1.5 border rounded bg-slate-50 dark:bg-slate-900">42m</div>
    </div>
  );
};
`,hv=t({default:()=>gv}),gv=`// @jxui/react v3.0.0 — DateRangePicker (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Calendar, Clock, Clock3, ChevronRight, Check } from 'lucide-react';

// 7. DateRangePicker
export const DateRangePicker: React.FC = () => {
  return (
    <div className="px-3 py-1.5 border rounded-lg text-xs flex items-center justify-between w-48">
      <span>Last 30 Days</span>
      <Calendar className="w-3.5 h-3.5 text-slate-400" />
    </div>
  );
};
`,_v=t({default:()=>vv}),vv=`// @jxui/react v3.0.0 — EventTimeline (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Calendar, Clock, Clock3, ChevronRight, Check } from 'lucide-react';

// 9. EventTimeline
export const EventTimeline: React.FC = () => {
  return (
    <div className="text-xs text-slate-600 dark:text-slate-400">
      ⚡ Token exporter triggered by user • 2m ago
    </div>
  );
};
`,yv=t({default:()=>bv}),bv=`// @jxui/react v3.0.0 — GanttChart (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Calendar, Clock, Clock3, ChevronRight, Check } from 'lucide-react';

// 4. GanttChart
export const GanttChart: React.FC = () => {
  return (
    <div className="w-56 p-2 border rounded-xl text-xs flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <span className="text-[11px]">Sprint 1</span>
        <div className="w-24 h-3 bg-indigo-500 rounded text-[9px] text-white flex items-center px-1">Active</div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[11px]">QA Audit</span>
        <div className="w-16 h-3 bg-slate-300 dark:bg-slate-700 rounded text-[9px] flex items-center px-1">Next</div>
      </div>
    </div>
  );
};
`,xv=t({default:()=>Sv}),Sv=`// @jxui/react v3.0.0 — RangeCalendar (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Calendar, Clock, Clock3, ChevronRight, Check } from 'lucide-react';

// 2. RangeCalendar
export const RangeCalendar: React.FC = () => {
  return (
    <div className="p-2 border rounded-xl text-xs font-mono">
      <span>Oct 12 → Oct 24 (12 Days Selected)</span>
    </div>
  );
};
`,Cv=t({default:()=>wv}),wv=`// @jxui/react v3.0.0 — Scheduler (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Calendar, Clock, Clock3, ChevronRight, Check } from 'lucide-react';

// 5. Scheduler
export const Scheduler: React.FC = () => {
  return (
    <div className="p-2 border rounded-xl text-xs flex flex-col gap-1">
      <div className="font-bold">Calendar Schedule</div>
      <div className="p-1 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 rounded text-[11px]">2:00 PM • Design Review</div>
    </div>
  );
};
`,Tv=t({default:()=>Ev}),Ev=`// @jxui/react v3.0.0 — SmartCalendar (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Calendar, Clock, Clock3, ChevronRight, Check } from 'lucide-react';

// 1. SmartCalendar
export const SmartCalendar: React.FC = () => {
  return (
    <div className="w-52 p-3 border rounded-2xl bg-white dark:bg-slate-900 text-xs">
      <div className="flex justify-between font-bold mb-2">
        <span>October 2026</span>
        <Calendar className="w-3.5 h-3.5 text-indigo-500" />
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-[10px]">
        {['M','T','W','T','F','S','S'].map((d, i) => <span key={i} className="text-slate-400">{d}</span>)}
        {[...Array(14)].map((_, i) => (
          <span key={i} className={\`p-1 rounded cursor-pointer \${i === 9 ? 'bg-indigo-600 text-white font-bold' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}\`}>{i + 1}</span>
        ))}
      </div>
    </div>
  );
};
`,Dv=t({default:()=>Ov}),Ov=`// @jxui/react v3.0.0 — TimePicker (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Calendar, Clock, Clock3, ChevronRight, Check } from 'lucide-react';

// 6. TimePicker
export const TimePicker: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-xs font-mono">
      <Clock className="w-3.5 h-3.5 text-indigo-500" />
      <span>14:30 EST</span>
    </div>
  );
};
`,kv=t({default:()=>Av}),Av=`// @jxui/react v3.0.0 — Timeline (JXUI v3.0 Unified Component Suite)
import React from 'react';
import { JXTimeline, type JXTimelineProps, type JXTimelineEvent } from '../../layout-utils/JXTimeline';

// 3. Timeline
// Reuses JXTimeline with status indicators, expandable git diff payloads, and theme tokens
export interface TimelineProps extends JXTimelineProps {}

export const Timeline: React.FC<TimelineProps> = (props) => {
  return <JXTimeline {...props} />;
};

export type { JXTimelineEvent };
`,jv=t({default:()=>Mv}),Mv=`// @jxui/react v3.0.0 — AnimatedCheckbox (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Check, Minus, X, Trash2, Copy, Sparkles } from 'lucide-react';

// 4. AnimatedCheckbox
export const AnimatedCheckbox: React.FC = () => {
  const [checked, setChecked] = useState(true);
  const { palette } = useJXTheme();
  return (
    <button
      onClick={() => setChecked(!checked)}
      className={\`w-5 h-5 rounded border flex items-center justify-center transition-all cursor-pointer \${
        checked ? \`\${palette.bg} border-transparent text-white\` : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900'
      }\`}
    >
      {checked && <Check className="w-3.5 h-3.5 animate-scale-in" />}
    </button>
  );
};
`,Nv=t({default:()=>Pv}),Pv=`// @jxui/react v3.0.0 — AnimatedRadio (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';

// 7. AnimatedRadio
export const AnimatedRadio: React.FC = () => {
  const [selected, setSelected] = useState(true);
  return (
    <button
      type="button"
      onClick={() => setSelected(!selected)}
      role="radio"
      aria-checked={selected}
      className="w-5 h-5 rounded-full border-2 border-indigo-600 flex items-center justify-center cursor-pointer"
    >
      {selected && <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full animate-scale-in" />}
    </button>
  );
};
`,Fv=t({default:()=>Iv}),Iv=`// @jxui/react v3.0.0 — CircularCheckbox (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Check, Minus, X, Trash2, Copy, Sparkles } from 'lucide-react';

// 6. CircularCheckbox
export const CircularCheckbox: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const { palette } = useJXTheme();
  return (
    <button
      onClick={() => setChecked(!checked)}
      className={\`w-5 h-5 rounded-full border flex items-center justify-center cursor-pointer \${
        checked ? \`\${palette.bg} border-transparent text-white\` : 'border-slate-300 dark:border-slate-700'
      }\`}
    >
      {checked && <div className="w-2 h-2 bg-white rounded-full" />}
    </button>
  );
};
`,Lv=t({default:()=>Rv}),Rv=`// @jxui/react v3.0.0 — FloatingSelectionBar (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Check, Minus, X, Trash2, Copy, Sparkles } from 'lucide-react';

// 15. FloatingSelectionBar
export const FloatingSelectionBar: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  return (
    <div className={\`inline-flex items-center gap-3 px-4 py-2 bg-slate-900 text-white shadow-2xl \${getRadiusClass('pill')} text-xs\`}>
      <span className="font-semibold text-indigo-400">3 selected</span>
      <button className="flex items-center gap-1 hover:text-slate-300 cursor-pointer"><Copy className="w-3.5 h-3.5" /> Duplicate</button>
      <button className="flex items-center gap-1 text-rose-400 hover:text-rose-300 cursor-pointer"><Trash2 className="w-3.5 h-3.5" /> Delete</button>
    </div>
  );
};
`,zv=t({default:()=>Bv}),Bv=`// @jxui/react v3.0.0 — GestureSelector (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Check, Minus, X, Trash2, Copy, Sparkles } from 'lucide-react';

// 14. GestureSelector
export const GestureSelector: React.FC = () => {
  return (
    <div className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs text-slate-500">
      Drag handle left / right to toggle
    </div>
  );
};
`,Vv=t({default:()=>Hv}),Hv=`// @jxui/react v3.0.0 — GlassCheckbox (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Check, Minus, X, Trash2, Copy, Sparkles } from 'lucide-react';

// 5. GlassCheckbox
export const GlassCheckbox: React.FC = () => {
  const [checked, setChecked] = useState(true);
  return (
    <button
      onClick={() => setChecked(!checked)}
      className="w-5 h-5 rounded bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/50 dark:border-slate-700 flex items-center justify-center cursor-pointer"
    >
      {checked && <span className="w-2.5 h-2.5 bg-indigo-500 rounded-sm" />}
    </button>
  );
};
`,Uv=t({default:()=>Wv}),Wv=`// @jxui/react v3.0.0 — LiquidSwitch (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Check, Minus, X, Trash2, Copy, Sparkles } from 'lucide-react';

// 1. LiquidSwitch
export const LiquidSwitch: React.FC = () => {
  const [checked, setChecked] = useState(true);
  const { palette } = useJXTheme();
  return (
    <button
      onClick={() => setChecked(!checked)}
      className={\`relative w-12 h-6.5 rounded-full transition-colors duration-300 p-0.5 cursor-pointer \${
        checked ? palette.bg : 'bg-slate-300 dark:bg-slate-700'
      }\`}
    >
      <div
        className={\`w-5.5 h-5.5 bg-white rounded-full shadow-md transition-transform duration-300 transform \${
          checked ? 'translate-x-5.5' : 'translate-x-0'
        }\`}
      />
    </button>
  );
};
`,Gv=t({default:()=>Kv}),Kv=`// @jxui/react v3.0.0 — MagneticSwitch (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';

// 8. MagneticSwitch
export const MagneticSwitch: React.FC = () => {
  const [active, setActive] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setActive(!active)}
      role="switch"
      aria-checked={active}
      className="relative w-14 h-7 bg-slate-200 dark:bg-slate-800 rounded-full p-1 cursor-pointer"
    >
      <div
        className={\`w-5 h-5 bg-white dark:bg-slate-950 rounded-full shadow-sm transition-transform duration-300 \${
          active ? 'translate-x-7' : 'translate-x-0'
        }\`}
      />
    </button>
  );
};
`,qv=t({default:()=>Jv}),Jv=`// @jxui/react v3.0.0 — MorphSwitch (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Check, Minus, X, Trash2, Copy, Sparkles } from 'lucide-react';

// 2. MorphSwitch
export const MorphSwitch: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const { palette } = useJXTheme();
  return (
    <button
      onClick={() => setChecked(!checked)}
      className={\`w-11 h-6 rounded-full flex items-center p-0.5 transition-colors cursor-pointer \${
        checked ? palette.bg : 'bg-slate-300 dark:bg-slate-700'
      }\`}
    >
      <div className={\`w-5 h-5 bg-white rounded-full flex items-center justify-center text-slate-800 shadow-xs transition-transform \${checked ? 'translate-x-5' : 'translate-x-0'}\`}>
        {checked ? <Check className="w-3 h-3 text-indigo-600" /> : <X className="w-3 h-3 text-slate-400" />}
      </div>
    </button>
  );
};
`,Yv=t({default:()=>Xv}),Xv=`// @jxui/react v3.0.0 — MultiStateToggle (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Check, Minus, X, Trash2, Copy, Sparkles } from 'lucide-react';

// 12. MultiStateToggle
export const MultiStateToggle: React.FC = () => {
  const [state, setState] = useState(0); // 0: None, 1: Low, 2: High
  const labels = ['Off', 'Eco', 'Turbo'];
  return (
    <button
      onClick={() => setState((s) => (s + 1) % 3)}
      className="px-3 py-1.5 text-xs font-semibold bg-slate-100 dark:bg-slate-800 rounded-lg cursor-pointer"
    >
      Mode: <span className="text-indigo-600 dark:text-indigo-400 font-bold">{labels[state]}</span>
    </button>
  );
};
`,Zv=t({default:()=>Qv}),Qv=`// @jxui/react v3.0.0 — SegmentedControl (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Check, Minus, X, Trash2, Copy, Sparkles } from 'lucide-react';

// 8. SegmentedControl
export const SegmentedControl: React.FC = () => {
  const [val, setVal] = useState('Daily');
  const { palette, getRadiusClass } = useJXTheme();
  return (
    <div className={\`inline-flex p-1 bg-slate-100 dark:bg-slate-800 \${getRadiusClass('pill')}\`}>
      {['Daily', 'Weekly', 'Monthly'].map((opt) => (
        <button
          key={opt}
          onClick={() => setVal(opt)}
          className={\`px-3 py-1 text-xs font-semibold rounded-full cursor-pointer transition-all \${
            val === opt ? \`\${palette.bg} text-white shadow-xs\` : 'text-slate-600 dark:text-slate-400'
          }\`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
};
`,$v=t({default:()=>ey}),ey=`// @jxui/react v3.0.0 — SelectableCard (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Check, Minus, X, Trash2, Copy, Sparkles } from 'lucide-react';

// 10. SelectableCard
export const SelectableCard: React.FC = () => {
  const [selected, setSelected] = useState(true);
  const { palette, getRadiusClass } = useJXTheme();
  return (
    <div
      onClick={() => setSelected(!selected)}
      className={\`p-3 border-2 cursor-pointer transition-all \${getRadiusClass('card')} \${
        selected ? 'border-indigo-600 bg-indigo-50/40 dark:bg-indigo-950/30' : 'border-slate-200 dark:border-slate-800'
      }\`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-slate-900 dark:text-white">Enterprise Tier</span>
        {selected && <Check className="w-4 h-4 text-indigo-600" />}
      </div>
      <p className="text-[11px] text-slate-500 mt-1">Unlimited telemetry events</p>
    </div>
  );
};
`,ty=t({default:()=>ny}),ny=`// @jxui/react v3.0.0 — SelectionGrid (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Check, Minus, X, Trash2, Copy, Sparkles } from 'lucide-react';

// 11. SelectionGrid
export const SelectionGrid: React.FC = () => {
  const [selected, setSelected] = useState([0]);
  return (
    <div className="grid grid-cols-3 gap-2">
      {[1, 2, 3].map((num, i) => (
        <button
          key={num}
          onClick={() => setSelected(selected.includes(i) ? selected.filter((x) => x !== i) : [...selected, i])}
          className={\`p-2 text-xs font-bold rounded-lg border text-center cursor-pointer \${
            selected.includes(i) ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950 text-indigo-600' : 'border-slate-300 dark:border-slate-700'
          }\`}
        >
          Plan {num}
        </button>
      ))}
    </div>
  );
};
`,ry=t({default:()=>iy}),iy=`// @jxui/react v3.0.0 — SlidingSegmentedControl (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Check, Minus, X, Trash2, Copy, Sparkles } from 'lucide-react';

// 9. SlidingSegmentedControl
export const SlidingSegmentedControl: React.FC = () => {
  const [active, setActive] = useState('Dev');
  const { palette } = useJXTheme();
  return (
    <div className="flex border border-slate-300 dark:border-slate-700 rounded-lg p-0.5 text-xs font-medium">
      {['Dev', 'Stage', 'Prod'].map((env) => (
        <button
          key={env}
          onClick={() => setActive(env)}
          className={\`px-3 py-1 rounded-md transition-all cursor-pointer \${active === env ? \`\${palette.bg} text-white\` : 'text-slate-500'}\`}
        >
          {env}
        </button>
      ))}
    </div>
  );
};
`,ay=t({default:()=>oy}),oy=`// @jxui/react v3.0.0 — TriStateToggle (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Check, Minus, X, Trash2, Copy, Sparkles } from 'lucide-react';

// 13. TriStateToggle
export const TriStateToggle: React.FC = () => {
  const [state, setState] = useState<'checked' | 'unchecked' | 'indeterminate'>('indeterminate');
  const cycle = () => {
    if (state === 'unchecked') setState('indeterminate');
    else if (state === 'indeterminate') setState('checked');
    else setState('unchecked');
  };
  return (
    <button onClick={cycle} className="w-5 h-5 rounded border border-slate-300 dark:border-slate-700 flex items-center justify-center cursor-pointer">
      {state === 'checked' && <Check className="w-3.5 h-3.5 text-indigo-600" />}
      {state === 'indeterminate' && <Minus className="w-3.5 h-3.5 text-amber-500" />}
    </button>
  );
};
`,sy=t({default:()=>cy}),cy=`// @jxui/react v3.0.0 — AudioVisualizer (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  ArrowUp, 
  Maximize2, 
  Play, 
  Volume2, 
  QrCode, 
  Compass, 
  Sliders, 
  Eye 
} from 'lucide-react';

// 8. AudioVisualizer
export const AudioVisualizer: React.FC = () => {
  return (
    <div className="flex items-end gap-1 h-8 p-1 border rounded-lg">
      {[40, 80, 20, 95, 60, 30, 75, 45].map((h, i) => (
        <div key={i} style={{ height: \`\${h}%\` }} className="w-1.5 bg-indigo-500 rounded-t-sm animate-pulse" />
      ))}
    </div>
  );
};
`,ly=t({default:()=>uy}),uy=`// @jxui/react v3.0.0 — ImageComparison (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  ArrowUp, 
  Maximize2, 
  Play, 
  Volume2, 
  QrCode, 
  Compass, 
  Sliders, 
  Eye 
} from 'lucide-react';

// 6. ImageComparison
export const ImageComparison: React.FC = () => {
  const [slider, setSlider] = useState(50);
  return (
    <div className="w-44 h-20 border rounded-xl overflow-hidden relative select-none">
      <div className="absolute inset-0 bg-indigo-100 dark:bg-indigo-950 flex items-center justify-start pl-2 text-[10px] font-bold">MUI</div>
      <div
        style={{ width: \`\${slider}%\` }}
        className="absolute inset-y-0 left-0 bg-indigo-600 text-white overflow-hidden flex items-center justify-start pl-2 text-[10px] font-bold"
      >
        JXUI
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={slider}
        onChange={(e) => setSlider(Number(e.target.value))}
        className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full"
      />
    </div>
  );
};
`,dy=t({default:()=>fy}),fy=`// @jxui/react v3.0.0 — ImageLightbox (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  ArrowUp, 
  Maximize2, 
  Play, 
  Volume2, 
  QrCode, 
  Compass, 
  Sliders, 
  Eye 
} from 'lucide-react';

// 5. ImageLightbox
export const ImageLightbox: React.FC = () => {
  return (
    <div className="w-36 h-20 border rounded-xl overflow-hidden relative group cursor-pointer">
      <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xs text-slate-400">Image Asset</div>
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
        <Maximize2 className="w-4 h-4" />
      </div>
    </div>
  );
};
`,py=t({default:()=>my}),my=`// @jxui/react v3.0.0 — InfiniteScroll (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  ArrowUp, 
  Maximize2, 
  Play, 
  Volume2, 
  QrCode, 
  Compass, 
  Sliders, 
  Eye 
} from 'lucide-react';

// 1. InfiniteScroll
export const InfiniteScroll: React.FC = () => {
  return (
    <div className="p-2 border rounded-lg text-xs font-mono text-center text-slate-500">
      Intersection Sentinel: 142 items loaded
    </div>
  );
};
`,hy=t({default:()=>gy}),gy=`// @jxui/react v3.0.0 — QRCodeGenerator (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  ArrowUp, 
  Maximize2, 
  Play, 
  Volume2, 
  QrCode, 
  Compass, 
  Sliders, 
  Eye 
} from 'lucide-react';

// 9. QRCodeGenerator
export const QRCodeGenerator: React.FC = () => {
  return (
    <div className="p-2 border rounded-xl inline-flex flex-col items-center gap-1">
      <QrCode className="w-12 h-12 text-slate-900 dark:text-white" />
      <span className="font-mono text-[9px] text-slate-500">jxui.dev/spec</span>
    </div>
  );
};
`,_y=t({default:()=>vy}),vy=`// @jxui/react v3.0.0 — ScrollProgress (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  ArrowUp, 
  Maximize2, 
  Play, 
  Volume2, 
  QrCode, 
  Compass, 
  Sliders, 
  Eye 
} from 'lucide-react';

// 3. ScrollProgress
export const ScrollProgress: React.FC = () => {
  return (
    <div className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
      <div className="w-2/3 h-full bg-indigo-600" />
    </div>
  );
};
`,yy=t({default:()=>by}),by=`// @jxui/react v3.0.0 — ScrollToTop (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  ArrowUp, 
  Maximize2, 
  Play, 
  Volume2, 
  QrCode, 
  Compass, 
  Sliders, 
  Eye 
} from 'lucide-react';

// 4. ScrollToTop
export const ScrollToTop: React.FC = () => {
  return (
    <button className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};
`,xy=t({default:()=>Sy}),Sy=`// @jxui/react v3.0.0 — TourGuide (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  ArrowUp, 
  Maximize2, 
  Play, 
  Volume2, 
  QrCode, 
  Compass, 
  Sliders, 
  Eye 
} from 'lucide-react';

// 10. TourGuide
export const TourGuide: React.FC = () => {
  return (
    <div className="p-2.5 bg-slate-900 text-white rounded-xl text-xs flex flex-col gap-1 w-48 shadow-2xl">
      <span className="font-bold text-indigo-400">Step 1 of 4</span>
      <p className="text-[11px] text-slate-300">Click ⌘K anytime to jump across the 290 components.</p>
    </div>
  );
};
`,Cy=t({default:()=>wy}),wy=`// @jxui/react v3.0.0 — VideoPlayer (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  ArrowUp, 
  Maximize2, 
  Play, 
  Volume2, 
  QrCode, 
  Compass, 
  Sliders, 
  Eye 
} from 'lucide-react';

// 7. VideoPlayer
export const VideoPlayer: React.FC = () => {
  return (
    <div className="w-48 h-24 bg-slate-950 text-white rounded-xl flex flex-col justify-between p-2 text-xs">
      <div className="flex justify-between items-center text-[10px] text-slate-400">
        <span>JXUI Demo Reel</span>
        <span>1080p60</span>
      </div>
      <div className="flex justify-center"><Play className="w-6 h-6 text-white cursor-pointer hover:scale-110" /></div>
      <div className="w-full h-1 bg-slate-700 rounded-full"><div className="w-1/3 h-full bg-indigo-500 rounded-full" /></div>
    </div>
  );
};
`,Ty=t({default:()=>Ey}),Ey=`// @jxui/react v3.0.0 — VirtualList (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { 
  ArrowUp, 
  Maximize2, 
  Play, 
  Volume2, 
  QrCode, 
  Compass, 
  Sliders, 
  Eye 
} from 'lucide-react';

// 2. VirtualList
export const VirtualList: React.FC = () => {
  return (
    <div className="p-2 border rounded-lg text-xs font-mono">
      Virtual Viewport: 8 DOM nodes active
    </div>
  );
};
`;export{k_ as $,Dn as $a,ba as $i,kp as $n,ut as $o,Od as $r,_ as $s,kh as $t,xv as A,yr as Aa,Vc as Ai,xm as An,Dt as Ao,xf as Ar,pe as As,xg as At,tv as B,$n as Ba,Os as Bi,tm as Bn,it as Bo,ef as Br,j as Bs,tg as Bt,Fv as C,Nr as Ca,Hl as Ci,Fm as Cn,Pt as Co,Ff as Cr,z as Cs,Fg as Ct,Dv as D,Tr as Da,ol as Di,Dm as Dn,At as Do,Df as Dr,_e as Ds,Dg as Dt,kv as E,Dr as Ea,Cl as Ei,km as En,jt as Eo,kf as Er,ve as Es,kg as Et,dv as F,lr as Fa,Hs as Fi,dm as Fn,Q as Fo,df as Fr,ae as Fs,dg as Ft,G_ as G,Un as Ga,Go as Gi,Gp as Gn,Qe as Go,Wd as Gr,D as Gs,Gh as Gt,Z_ as H,Yn as Ha,us as Hi,Zp as Hn,lt as Ho,Xd as Hr,te as Hs,Zh as Ht,lv as I,sr as Ia,Vs as Ii,lm as In,yt as Io,lf as Ir,P as Is,lg as It,z_ as J,Ln as Ja,io as Ji,zp as Jn,We as Jo,Rd as Jr,w as Js,zh as Jt,U_ as K,Vn as Ka,Co as Ki,Up as Kn,Ge as Ko,Hd as Kr,E as Ks,Uh as Kt,sv as L,ar as La,zs as Li,sm as Ln,G as Lo,sf as Lr,N as Ls,sg as Lt,_v as M,hr as Ma,Cc as Mi,_m as Mn,$ as Mo,_f as Mr,L as Ms,_g as Mt,hv as N,pr as Na,tc as Ni,hm as Nn,X as No,hf as Nr,ue as Ns,hg as Nt,Tv as O,Cr as Oa,al as Oi,Tm as On,kt as Oo,Tf as Or,ge as Os,Tg as Ot,pv as P,dr as Pa,ec as Pi,pm as Pn,Tt as Po,pf as Pr,I as Ps,pg as Pt,j_ as Q,kn as Qa,va as Qi,jp as Qn,Ze as Qo,Ad as Qr,y as Qs,jh as Qt,av as R,rr as Ra,Rs as Ri,am as Rn,rt as Ro,af as Rr,re as Rs,ag as Rt,Lv as S,Fr as Sa,au as Si,Lm as Sn,Ft as So,Lf as Sr,B as Ss,Lg as St,jv as T,kr as Ta,wl as Ti,jm as Tn,Mt as To,jf as Tr,be as Ts,jg as Tt,Y_ as U,qn as Ua,ls as Ui,Yp as Un,He as Uo,Jd as Ur,k as Us,Yh as Ut,$_ as V,Zn as Va,Ds as Vi,$p as Vn,K as Vo,Qd as Vr,A as Vs,$h as Vt,q_ as W,Gn as Wa,Ko as Wi,qp as Wn,_t as Wo,Kd as Wr,ee as Ws,qh as Wt,F_ as X,Nn as Xa,Na as Xi,Fp as Xn,Je as Xo,Pd as Xr,S as Xs,Fh as Xt,L_ as Y,Fn as Ya,ro as Yi,Lp as Yn,Ye as Yo,Id as Yr,C as Ys,Lh as Yt,N_ as Z,jn as Za,Ma as Zi,Np as Zn,Ke as Zo,Md as Zr,b as Zs,Nh as Zt,qv as _,Gr as _a,Lu as _i,qm as _n,Wt as _o,qf as _r,Me as _s,qg as _t,_y as a,hi as aa,gd as ai,_h as an,hn as ao,_p as ar,gt as as,__ as at,Vv as b,zr as ba,Cu as bi,Vm as bn,Rt as bo,Vf as br,H as bs,Vg as bt,dy as c,li as ca,ud as ci,dh as cn,ln as co,dp as cr,st as cs,d_ as ct,ay as d,ri as da,id as di,ah as dn,nn as do,ap as dr,ze as ds,a_ as dt,oa as ea,g as ec,Ed as ei,Dh as en,Tn as eo,Dp as er,qe as es,D_ as et,ry as f,ti as fa,nd as fi,rh as fn,en as fo,rp as fr,Le as fs,r_ as ft,Yv as g,qr as ga,Yu as gi,Ym as gn,Kt as go,Yf as gr,U as gs,Yg as gt,Zv as h,Yr as ha,Xu as hi,Zm as hn,Jt as ho,Zf as hr,Ne as hs,Zg as ht,yy as i,ki as ia,i as ic,vd as ii,yh as in,_n as io,yp as ir,at as is,y_ as it,yv as j,_r as ja,wc as ji,ym as jn,Et as jo,yf as jr,R as js,yg as jt,Cv as k,xr as ka,Hc as ki,Cm as kn,Ot as ko,Cf as kr,he as ks,Cg as kt,ly as l,si as la,cd as li,lh as ln,sn as lo,lp as lr,Ve as ls,l_ as lt,$v as m,Zr as ma,Qu as mi,$m as mn,Xt as mo,$f as mr,Pe as ms,$g as mt,Cy as n,Li as na,m as nc,Sd as ni,Ch as nn,xn as no,Cp as nr,mt as ns,C_ as nt,hy as o,pi as oa,md as oi,hh as on,pn as oo,hp as or,ht as os,h_ as ot,ty as p,$r as pa,ed as pi,th as pn,Qt as po,tp as pr,Ie as ps,t_ as pt,V_ as q,zn as qa,So as qi,Vp as qn,dt as qo,Bd as qr,T as qs,Vh as qt,xy as r,Ii as ra,p as rc,bd as ri,xh as rn,yn as ro,xp as rr,ot as rs,x_ as rt,py as s,di as sa,fd as si,ph as sn,dn as so,pp as sr,ct as ss,p_ as st,Ty as t,aa as ta,h as tc,wd as ti,Th as tn,Cn as to,Tp as tr,Ue as ts,T_ as tt,sy as u,ai as ua,od as ui,sh as un,an as uo,sp as ur,W as us,s_ as ut,Gv as v,Ur as va,Iu as vi,Gm as vn,Ht as vo,Gf as vr,je as vs,Gg as vt,Nv as w,jr as wa,Vl as wi,Nm as wn,Nt as wo,Nf as wr,Te as ws,Ng as wt,zv as x,Lr as xa,ou as xi,zm as xn,Lt as xo,zf as xr,V as xs,zg as xt,Uv as y,Vr as ya,wu as yi,Um as yn,Bt as yo,Uf as yr,Ae as ys,Ug as yt,rv as z,tr as za,Bs as zi,rm as zn,nt as zo,nf as zr,M as zs,rg as zt};