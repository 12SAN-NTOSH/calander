/*! For license information please see 225.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_openmrs_esm_form_engine_lib=globalThis.webpackChunk_openmrs_esm_form_engine_lib||[]).push([[225],{1063:(e,n,t)=>{var r=t(6072),i="function"==typeof Object.is?Object.is:function(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n},s=r.useState,a=r.useEffect,u=r.useLayoutEffect,d=r.useDebugValue;function o(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!i(e,t)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,n){return n()}:function(e,n){var t=n(),r=s({inst:{value:t,getSnapshot:n}}),i=r[0].inst,c=r[1];return u((function(){i.value=t,i.getSnapshot=n,o(i)&&c({inst:i})}),[e,t,n]),a((function(){return o(i)&&c({inst:i}),e((function(){o(i)&&c({inst:i})}))}),[e]),d(t),t};n.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},9888:(e,n,t)=>{e.exports=t(1063)},4225:(e,n,t)=>{t.r(n),t.d(n,{default:()=>c,immutable:()=>o});var r=t(6072),i=t(9888),s=t(8465);const a=r.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;throw"rejected"===e.status?e.reason:(e.status="pending",e.then((n=>{e.status="fulfilled",e.value=n}),(n=>{e.status="rejected",e.reason=n})),e)}),u={dedupe:!0};s.OBJECT.defineProperty(s.SWRConfig,"defaultValue",{value:s.defaultConfig});const d=(0,s.withArgs)(((e,n,t)=>{const{cache:d,compare:o,suspense:c,fallbackData:l,revalidateOnMount:f,revalidateIfStale:E,refreshInterval:g,refreshWhenHidden:v,refreshWhenOffline:h,keepPreviousData:R}=t,[S,p,m,b]=s.SWRGlobalState.get(d),[U,_]=(0,s.serialize)(e),T=(0,r.useRef)(!1),V=(0,r.useRef)(!1),w=(0,r.useRef)(U),C=(0,r.useRef)(n),O=(0,r.useRef)(t),y=()=>O.current,L=()=>y().isVisible()&&y().isOnline(),[I,k,D,A]=(0,s.createCacheHelper)(d,U),N=(0,r.useRef)({}).current,F=(0,s.isUndefined)(l)?t.fallback[U]:l,P=(e,n)=>{for(const t in N){const r=t;if("data"===r){if(!o(e[r],n[r])){if(!(0,s.isUndefined)(e[r]))return!1;if(!o(z,n[r]))return!1}}else if(n[r]!==e[r])return!1}return!0},j=(0,r.useMemo)((()=>{const e=!!U&&!!n&&((0,s.isUndefined)(f)?!y().isPaused()&&!c&&(!!(0,s.isUndefined)(E)||E):f),t=n=>{const t=(0,s.mergeObjects)(n);return delete t._k,e?{isValidating:!0,isLoading:!0,...t}:t},r=I(),i=A(),a=t(r),u=r===i?a:t(i);let d=a;return[()=>{const e=t(I());return P(e,d)?(d.data=e.data,d.isLoading=e.isLoading,d.isValidating=e.isValidating,d.error=e.error,d):(d=e,e)},()=>u]}),[d,U]),x=(0,i.useSyncExternalStore)((0,r.useCallback)((e=>D(U,((n,t)=>{P(t,n)||e()}))),[d,U]),j[0],j[1]),M=!T.current,W=S[U]&&S[U].length>0,G=x.data,H=(0,s.isUndefined)(G)?F:G,Y=x.error,q=(0,r.useRef)(H),z=R?(0,s.isUndefined)(G)?q.current:G:H,B=!(W&&!(0,s.isUndefined)(Y))&&(M&&!(0,s.isUndefined)(f)?f:!y().isPaused()&&(c?!(0,s.isUndefined)(H)&&E:(0,s.isUndefined)(H)||E)),J=!!(U&&n&&M&&B),K=(0,s.isUndefined)(x.isValidating)?J:x.isValidating,Q=(0,s.isUndefined)(x.isLoading)?J:x.isLoading,X=(0,r.useCallback)((async e=>{const n=C.current;if(!U||!n||V.current||y().isPaused())return!1;let r,i,a=!0;const u=e||{},d=!m[U]||!u.dedupe,c=()=>s.IS_REACT_LEGACY?!V.current&&U===w.current&&T.current:U===w.current,l={isValidating:!1,isLoading:!1},f=()=>{k(l)},E=()=>{const e=m[U];e&&e[1]===i&&delete m[U]},g={isValidating:!0};(0,s.isUndefined)(I().data)&&(g.isLoading=!0);try{if(d&&(k(g),t.loadingTimeout&&(0,s.isUndefined)(I().data)&&setTimeout((()=>{a&&c()&&y().onLoadingSlow(U,t)}),t.loadingTimeout),m[U]=[n(_),(0,s.getTimestamp)()]),[r,i]=m[U],r=await r,d&&setTimeout(E,t.dedupingInterval),!m[U]||m[U][1]!==i)return d&&c()&&y().onDiscarded(U),!1;l.error=s.UNDEFINED;const e=p[U];if(!(0,s.isUndefined)(e)&&(i<=e[0]||i<=e[1]||0===e[1]))return f(),d&&c()&&y().onDiscarded(U),!1;const u=I().data;l.data=o(u,r)?u:r,d&&c()&&y().onSuccess(r,U,t)}catch(e){E();const n=y(),{shouldRetryOnError:t}=n;n.isPaused()||(l.error=e,d&&c()&&(n.onError(e,U,n),(!0===t||(0,s.isFunction)(t)&&t(e))&&(y().revalidateOnFocus&&y().revalidateOnReconnect&&!L()||n.onErrorRetry(e,U,n,(e=>{const n=S[U];n&&n[0]&&n[0](s.revalidateEvents.ERROR_REVALIDATE_EVENT,e)}),{retryCount:(u.retryCount||0)+1,dedupe:!0}))))}return a=!1,f(),!0}),[U,d]),Z=(0,r.useCallback)(((...e)=>(0,s.internalMutate)(d,w.current,...e)),[]);if((0,s.useIsomorphicLayoutEffect)((()=>{C.current=n,O.current=t,(0,s.isUndefined)(G)||(q.current=G)})),(0,s.useIsomorphicLayoutEffect)((()=>{if(!U)return;const e=X.bind(s.UNDEFINED,u);let n=0;const t=(0,s.subscribeCallback)(U,S,((t,r={})=>{if(t==s.revalidateEvents.FOCUS_EVENT){const t=Date.now();y().revalidateOnFocus&&t>n&&L()&&(n=t+y().focusThrottleInterval,e())}else if(t==s.revalidateEvents.RECONNECT_EVENT)y().revalidateOnReconnect&&L()&&e();else{if(t==s.revalidateEvents.MUTATE_EVENT)return X();if(t==s.revalidateEvents.ERROR_REVALIDATE_EVENT)return X(r)}}));return V.current=!1,w.current=U,T.current=!0,k({_k:_}),B&&((0,s.isUndefined)(H)||s.IS_SERVER?e():(0,s.rAF)(e)),()=>{V.current=!0,t()}}),[U]),(0,s.useIsomorphicLayoutEffect)((()=>{let e;function n(){const n=(0,s.isFunction)(g)?g(I().data):g;n&&-1!==e&&(e=setTimeout(t,n))}function t(){I().error||!v&&!y().isVisible()||!h&&!y().isOnline()?n():X(u).then(n)}return n(),()=>{e&&(clearTimeout(e),e=-1)}}),[g,v,h,U]),(0,r.useDebugValue)(z),c&&(0,s.isUndefined)(H)&&U){if(!s.IS_REACT_LEGACY&&s.IS_SERVER)throw new Error("Fallback data is required when using suspense in SSR.");C.current=n,O.current=t,V.current=!1;const e=b[U];if(!(0,s.isUndefined)(e)){const n=Z(e);a(n)}if(!(0,s.isUndefined)(Y))throw Y;{const e=X(u);(0,s.isUndefined)(z)||(e.status="fulfilled",e.value=!0),a(e)}}return{mutate:Z,get data(){return N.data=!0,z},get error(){return N.error=!0,Y},get isValidating(){return N.isValidating=!0,K},get isLoading(){return N.isLoading=!0,Q}}})),o=e=>(n,t,r)=>(r.revalidateOnFocus=!1,r.revalidateIfStale=!1,r.revalidateOnReconnect=!1,e(n,t,r)),c=(0,s.withMiddleware)(d,o)}}]);