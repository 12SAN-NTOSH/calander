(globalThis.webpackChunk_openmrs_esm_openconceptlab_app=globalThis.webpackChunk_openmrs_esm_openconceptlab_app||[]).push([[336],{9002:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},6336:(e,n,t)=>{"use strict";t.r(n),t.d(n,{I18nContext:()=>z,I18nextProvider:()=>M,Trans:()=>U,TransWithoutContext:()=>P,Translation:()=>W,composeInitialProps:()=>B,date:()=>J,getDefaults:()=>I,getI18n:()=>j,getInitialProps:()=>F,initReactI18next:()=>V,number:()=>G,plural:()=>X,select:()=>Q,selectOrdinal:()=>ee,setDefaults:()=>w,setI18n:()=>S,time:()=>Z,useSSR:()=>q,useTranslation:()=>D,withSSR:()=>Y,withTranslation:()=>H});var s=t(1343),i=t(9002),r=t.n(i),o=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function a(e){var n={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},t=e.match(/<\/?([^\s]+?)[/\s>]/);if(t&&(n.name=t[1],(r()[t[1]]||"/"===e.charAt(e.length-2))&&(n.voidElement=!0),n.name.startsWith("!--"))){var s=e.indexOf("--\x3e");return{type:"comment",comment:-1!==s?e.slice(4,s):""}}for(var i=new RegExp(o),a=null;null!==(a=i.exec(e));)if(a[0].trim())if(a[1]){var c=a[1].trim(),l=[c,""];c.indexOf("=")>-1&&(l=c.split("=")),n.attrs[l[0]]=l[1],i.lastIndex--}else a[2]&&(n.attrs[a[2]]=a[3].trim().substring(1,a[3].length-1));return n}var c=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,l=/^\s*$/,u=Object.create(null);function p(e,n){switch(n.type){case"text":return e+n.content;case"tag":return e+="<"+n.name+(n.attrs?function(e){var n=[];for(var t in e)n.push(t+'="'+e[t]+'"');return n.length?" "+n.join(" "):""}(n.attrs):"")+(n.voidElement?"/>":">"),n.voidElement?e:e+n.children.reduce(p,"")+"</"+n.name+">";case"comment":return e+"\x3c!--"+n.comment+"--\x3e"}}var d={parse:function(e,n){n||(n={}),n.components||(n.components=u);var t,s=[],i=[],r=-1,o=!1;if(0!==e.indexOf("<")){var p=e.indexOf("<");s.push({type:"text",content:-1===p?e:e.substring(0,p)})}return e.replace(c,(function(c,u){if(o){if(c!=="</"+t.name+">")return;o=!1}var p,d="/"!==c.charAt(1),f=c.startsWith("\x3c!--"),g=u+c.length,m=e.charAt(g);if(f){var h=a(c);return r<0?(s.push(h),s):((p=i[r]).children.push(h),s)}if(d&&(r++,"tag"===(t=a(c)).type&&n.components[t.name]&&(t.type="component",o=!0),t.voidElement||o||!m||"<"===m||t.children.push({type:"text",content:e.slice(g,e.indexOf("<",g))}),0===r&&s.push(t),(p=i[r-1])&&p.children.push(t),i[r]=t),(!d||t.voidElement)&&(r>-1&&(t.voidElement||t.name===c.slice(2,-1))&&(r--,t=-1===r?s:i[r]),!o&&"<"!==m&&m)){p=-1===r?s:i[r].children;var y=e.indexOf("<",g),b=e.slice(g,-1===y?void 0:y);l.test(b)&&(b=" "),(y>-1&&r+p.length>=0||" "!==b)&&p.push({type:"text",content:b})}})),s},stringify:function(e){return e.reduce((function(e,n){return e+p("",n)}),"")}};const f=d;function g(){if(console&&console.warn){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&(n[0]=`react-i18next:: ${n[0]}`),console.warn(...n)}}const m={};function h(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&m[n[0]]||("string"==typeof n[0]&&(m[n[0]]=new Date),g(...n))}const y=(e,n)=>()=>{if(e.isInitialized)n();else{const t=()=>{setTimeout((()=>{e.off("initialized",t)}),0),n()};e.on("initialized",t)}};function b(e,n,t){e.loadNamespaces(n,y(e,t))}function v(e,n,t,s){"string"==typeof t&&(t=[t]),t.forEach((n=>{e.options.ns.indexOf(n)<0&&e.options.ns.push(n)})),e.loadLanguages(n,y(e,s))}function x(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")}const E=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,N={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},O=e=>N[e];let $,k={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:e=>e.replace(E,O)};function w(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};k={...k,...e}}function I(){return k}function S(e){$=e}function j(){return $}function C(e,n){if(!e)return!1;const t=e.props?e.props.children:e.children;return n?t.length>0:!!t}function R(e){if(!e)return[];const n=e.props?e.props.children:e.children;return e.props&&e.props.i18nIsDynamicList?T(n):n}function T(e){return Array.isArray(e)?e:[e]}function L(e,n){if(!e)return"";let t="";const i=T(e),r=n.transSupportBasicHtmlNodes&&n.transKeepBasicHtmlNodesFor?n.transKeepBasicHtmlNodesFor:[];return i.forEach(((e,i)=>{if("string"==typeof e)t+=`${e}`;else if((0,s.isValidElement)(e)){const s=Object.keys(e.props).length,o=r.indexOf(e.type)>-1,a=e.props.children;if(!a&&o&&0===s)t+=`<${e.type}/>`;else if(a||o&&0===s)if(e.props.i18nIsDynamicList)t+=`<${i}></${i}>`;else if(o&&1===s&&"string"==typeof a)t+=`<${e.type}>${a}</${e.type}>`;else{const e=L(a,n);t+=`<${i}>${e}</${i}>`}else t+=`<${i}></${i}>`}else if(null===e)g("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"==typeof e){const{format:n,...s}=e,i=Object.keys(s);if(1===i.length){const e=n?`${i[0]}, ${n}`:i[0];t+=`{{${e}}}`}else g("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else g("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),t}function P(e){let{children:n,count:t,parent:i,i18nKey:r,context:o,tOptions:a={},values:c,defaults:l,components:u,ns:p,i18n:d,t:g,shouldUnescape:m,...y}=e;const b=d||j();if(!b)return h("You will need to pass in an i18next instance by using i18nextReactModule"),n;const v=g||b.t.bind(b)||(e=>e);o&&(a.context=o);const x={...I(),...b.options&&b.options.react};let E=p||v.ns||b.options&&b.options.defaultNS;E="string"==typeof E?[E]:E||["translation"];const N=L(n,x),O=l||N||x.transEmptyNodeValue||r,{hashTransKey:$}=x,k=r||($?$(N||O):N||O);b.options&&b.options.interpolation&&b.options.interpolation.defaultVariables&&(c=c&&Object.keys(c).length>0?{...c,...b.options.interpolation.defaultVariables}:{...b.options.interpolation.defaultVariables});const w=c||void 0!==t?a.interpolation:{interpolation:{...a.interpolation,prefix:"#$?",suffix:"?$#"}},S={...a,count:t,...c,...w,defaultValue:O,ns:E},P=k?v(k,S):O;u&&Object.keys(u).forEach((e=>{const n=u[e];"function"==typeof n.type||!n.props||!n.props.children||P.indexOf(`${e}/>`)<0&&P.indexOf(`${e} />`)<0||(u[e]=(0,s.createElement)((function(){return(0,s.createElement)(s.Fragment,null,n)})))}));const V=function(e,n,t,i,r,o){if(""===n)return[];const a=i.transKeepBasicHtmlNodesFor||[],c=n&&new RegExp(a.map((e=>`<${e}`)).join("|")).test(n);if(!e&&!c&&!o)return[n];const l={};!function e(n){T(n).forEach((n=>{"string"!=typeof n&&(C(n)?e(R(n)):"object"!=typeof n||(0,s.isValidElement)(n)||Object.assign(l,n))}))}(e);const u=f.parse(`<0>${n}</0>`),p={...l,...r};function d(e,n,t){const i=R(e),r=m(i,n.children,t);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((e=>(0,s.isValidElement)(e)))}(i)&&0===r.length||e.props&&e.props.i18nIsDynamicList?i:r}function g(e,n,t,i,r){e.dummy?(e.children=n,t.push((0,s.cloneElement)(e,{key:i},r?void 0:n))):t.push(...s.Children.map([e],(e=>{const t={...e.props};return delete t.i18nIsDynamicList,(0,s.createElement)(e.type,{...t,key:i,ref:e.ref},r?null:n)})))}function m(n,r,l){const u=T(n);return T(r).reduce(((n,r,f)=>{const h=r.children&&r.children[0]&&r.children[0].content&&t.services.interpolator.interpolate(r.children[0].content,p,t.language);if("tag"===r.type){let o=u[parseInt(r.name,10)];1!==l.length||o||(o=l[0][r.name]),o||(o={});const y=0!==Object.keys(r.attrs).length?function(e,n){const t={...n};return t.props=Object.assign(e.props,n.props),t}({props:r.attrs},o):o,b=(0,s.isValidElement)(y),v=b&&C(r,!0)&&!r.voidElement,x=c&&"object"==typeof y&&y.dummy&&!b,E="object"==typeof e&&null!==e&&Object.hasOwnProperty.call(e,r.name);if("string"==typeof y){const e=t.services.interpolator.interpolate(y,p,t.language);n.push(e)}else if(C(y)||v)g(y,d(y,r,l),n,f);else if(x)g(y,m(u,r.children,l),n,f);else if(Number.isNaN(parseFloat(r.name)))if(E)g(y,d(y,r,l),n,f,r.voidElement);else if(i.transSupportBasicHtmlNodes&&a.indexOf(r.name)>-1)if(r.voidElement)n.push((0,s.createElement)(r.name,{key:`${r.name}-${f}`}));else{const e=m(u,r.children,l);n.push((0,s.createElement)(r.name,{key:`${r.name}-${f}`},e))}else if(r.voidElement)n.push(`<${r.name} />`);else{const e=m(u,r.children,l);n.push(`<${r.name}>${e}</${r.name}>`)}else if("object"!=typeof y||b)g(y,h,n,f,1!==r.children.length||!h);else{const e=r.children[0]?h:null;e&&n.push(e)}}else if("text"===r.type){const e=i.transWrapTextNodes,a=o?i.unescape(t.services.interpolator.interpolate(r.content,p,t.language)):t.services.interpolator.interpolate(r.content,p,t.language);e?n.push((0,s.createElement)(e,{key:`${r.name}-${f}`},a)):n.push(a)}return n}),[])}return R(m([{dummy:!0,children:e||[]}],u,T(e||[]))[0])}(u||n,P,b,x,S,m),z=void 0!==i?i:x.defaultTransParent;return z?(0,s.createElement)(z,y,V):V}const V={type:"3rdParty",init(e){w(e.options.react),S(e)}},z=(0,s.createContext)();class A{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach((e=>{this.usedNamespaces[e]||(this.usedNamespaces[e]=!0)}))}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}function B(e){return n=>new Promise((t=>{const s=F();e.getInitialProps?e.getInitialProps(n).then((e=>{t({...e,...s})})):t(s)}))}function F(){const e=j(),n=e.reportNamespaces?e.reportNamespaces.getUsedNamespaces():[],t={},s={};return e.languages.forEach((t=>{s[t]={},n.forEach((n=>{s[t][n]=e.getResourceBundle(t,n)||{}}))})),t.initialI18nStore=s,t.initialLanguage=e.language,t}function U(e){let{children:n,count:t,parent:i,i18nKey:r,context:o,tOptions:a={},values:c,defaults:l,components:u,ns:p,i18n:d,t:f,shouldUnescape:g,...m}=e;const{i18n:h,defaultNS:y}=(0,s.useContext)(z)||{},b=d||h||j(),v=f||b&&b.t.bind(b);return P({children:n,count:t,parent:i,i18nKey:r,context:o,tOptions:a,values:c,defaults:l,components:u,ns:p||v&&v.ns||y||b&&b.options&&b.options.defaultNS,i18n:b,t:f,shouldUnescape:g,...m})}const K=(e,n)=>{const t=(0,s.useRef)();return(0,s.useEffect)((()=>{t.current=n?t.current:e}),[e,n]),t.current};function _(e,n,t,s){return e.getFixedT(n,t,s)}function D(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{i18n:t}=n,{i18n:i,defaultNS:r}=(0,s.useContext)(z)||{},o=t||i||j();if(o&&!o.reportNamespaces&&(o.reportNamespaces=new A),!o){h("You will need to pass in an i18next instance by using initReactI18next");const e=(e,n)=>"string"==typeof n?n:n&&"object"==typeof n&&"string"==typeof n.defaultValue?n.defaultValue:Array.isArray(e)?e[e.length-1]:e,n=[e,{},!1];return n.t=e,n.i18n={},n.ready=!1,n}o.options.react&&void 0!==o.options.react.wait&&h("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const a={...I(),...o.options.react,...n},{useSuspense:c,keyPrefix:l}=a;let u=e||r||o.options&&o.options.defaultNS;u="string"==typeof u?[u]:u||["translation"],o.reportNamespaces.addUsedNamespaces&&o.reportNamespaces.addUsedNamespaces(u);const p=(o.isInitialized||o.initializedStoreOnce)&&u.every((e=>function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.languages&&n.languages.length?void 0!==n.options.ignoreJSONStructure?n.hasLoadedNamespace(e,{lng:t.lng,precheck:(n,s)=>{if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!s(n.isLanguageChangingTo,e))return!1}}):function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const s=n.languages[0],i=!!n.options&&n.options.fallbackLng,r=n.languages[n.languages.length-1];if("cimode"===s.toLowerCase())return!0;const o=(e,t)=>{const s=n.services.backendConnector.state[`${e}|${t}`];return-1===s||2===s};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!o(n.isLanguageChangingTo,e)||!n.hasResourceBundle(s,e)&&n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages)&&(!o(s,e)||i&&!o(r,e)))}(e,n,t):(h("i18n.languages were undefined or empty",n.languages),!0)}(e,o,a))),d=function(e,n,t,i){return(0,s.useCallback)(_(e,n,t,i),[e,n,t,i])}(o,n.lng||null,"fallback"===a.nsMode?u:u[0],l),f=()=>d,g=()=>_(o,n.lng||null,"fallback"===a.nsMode?u:u[0],l),[m,y]=(0,s.useState)(f);let x=u.join();n.lng&&(x=`${n.lng}${x}`);const E=K(x),N=(0,s.useRef)(!0);(0,s.useEffect)((()=>{const{bindI18n:e,bindI18nStore:t}=a;function s(){N.current&&y(g)}return N.current=!0,p||c||(n.lng?v(o,n.lng,u,(()=>{N.current&&y(g)})):b(o,u,(()=>{N.current&&y(g)}))),p&&E&&E!==x&&N.current&&y(g),e&&o&&o.on(e,s),t&&o&&o.store.on(t,s),()=>{N.current=!1,e&&o&&e.split(" ").forEach((e=>o.off(e,s))),t&&o&&t.split(" ").forEach((e=>o.store.off(e,s)))}}),[o,x]);const O=(0,s.useRef)(!0);(0,s.useEffect)((()=>{N.current&&!O.current&&y(f),O.current=!1}),[o,l]);const $=[m,o,p];if($.t=m,$.i18n=o,$.ready=p,p)return $;if(!p&&!c)return $;throw new Promise((e=>{n.lng?v(o,n.lng,u,(()=>e())):b(o,u,(()=>e()))}))}function H(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(t){function i(i){let{forwardedRef:r,...o}=i;const[a,c,l]=D(e,{...o,keyPrefix:n.keyPrefix}),u={...o,t:a,i18n:c,tReady:l};return n.withRef&&r?u.ref=r:!n.withRef&&r&&(u.forwardedRef=r),(0,s.createElement)(t,u)}return i.displayName=`withI18nextTranslation(${x(t)})`,i.WrappedComponent=t,n.withRef?(0,s.forwardRef)(((e,n)=>(0,s.createElement)(i,Object.assign({},e,{forwardedRef:n})))):i}}function W(e){const{ns:n,children:t,...s}=e,[i,r,o]=D(n,s);return t(i,{i18n:r,lng:r.language},o)}function M(e){let{i18n:n,defaultNS:t,children:i}=e;const r=(0,s.useMemo)((()=>({i18n:n,defaultNS:t})),[n,t]);return(0,s.createElement)(z.Provider,{value:r},i)}function q(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{i18n:i}=t,{i18n:r}=(0,s.useContext)(z)||{},o=i||r||j();o.options&&o.options.isClone||(e&&!o.initializedStoreOnce&&(o.services.resourceStore.data=e,o.options.ns=Object.values(e).reduce(((e,n)=>(Object.keys(n).forEach((n=>{e.indexOf(n)<0&&e.push(n)})),e)),o.options.ns),o.initializedStoreOnce=!0,o.isInitialized=!0),n&&!o.initializedLanguageOnce&&(o.changeLanguage(n),o.initializedLanguageOnce=!0))}function Y(){return function(e){function n(n){let{initialI18nStore:t,initialLanguage:i,...r}=n;return q(t,i),(0,s.createElement)(e,{...r})}return n.getInitialProps=B(e),n.displayName=`withI18nextSSR(${x(e)})`,n.WrappedComponent=e,n}}const J=()=>"",Z=()=>"",G=()=>"",Q=()=>"",X=()=>"",ee=()=>""}}]);