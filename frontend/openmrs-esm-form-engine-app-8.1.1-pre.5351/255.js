/*! For license information please see 255.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_openmrs_esm_form_engine_app=globalThis.webpackChunk_openmrs_esm_form_engine_app||[]).push([[255],{452:(e,n,t)=>{var r=t(268),i="function"==typeof Object.is?Object.is:function(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n},s=r.useState,a=r.useEffect,u=r.useLayoutEffect,d=r.useDebugValue;function o(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!i(e,t)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,n){return n()}:function(e,n){var t=n(),r=s({inst:{value:t,getSnapshot:n}}),i=r[0].inst,c=r[1];return u((function(){i.value=t,i.getSnapshot=n,o(i)&&c({inst:i})}),[e,t,n]),a((function(){return o(i)&&c({inst:i}),e((function(){o(i)&&c({inst:i})}))}),[e]),d(t),t};n.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},3100:(e,n,t)=>{e.exports=t(452)},3255:(e,n,t)=>{t.d(n,{ZP:()=>d,kY:()=>s.useSWRConfig});var r=t(268),i=t(3100),s=t(3325);const a=r.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;throw"rejected"===e.status?e.reason:(e.status="pending",e.then((n=>{e.status="fulfilled",e.value=n}),(n=>{e.status="rejected",e.reason=n})),e)}),u={dedupe:!0},d=(s.OBJECT.defineProperty(s.SWRConfig,"defaultValue",{value:s.defaultConfig}),(0,s.withArgs)(((e,n,t)=>{const{cache:d,compare:o,suspense:c,fallbackData:f,revalidateOnMount:l,revalidateIfStale:E,refreshInterval:g,refreshWhenHidden:v,refreshWhenOffline:h,keepPreviousData:p}=t,[R,S,U,_]=s.SWRGlobalState.get(d),[m,T]=(0,s.serialize)(e),V=(0,r.useRef)(!1),b=(0,r.useRef)(!1),C=(0,r.useRef)(m),w=(0,r.useRef)(n),y=(0,r.useRef)(t),L=()=>y.current,k=()=>L().isVisible()&&L().isOnline(),[I,O,D,A]=(0,s.createCacheHelper)(d,m),N=(0,r.useRef)({}).current,F=(0,s.isUndefined)(f)?t.fallback[m]:f,P=(e,n)=>{for(const t in N){const r=t;if("data"===r){if(!o(e[r],n[r])){if(!(0,s.isUndefined)(e[r]))return!1;if(!o(z,n[r]))return!1}}else if(n[r]!==e[r])return!1}return!0},j=(0,r.useMemo)((()=>{const e=!!m&&!!n&&((0,s.isUndefined)(l)?!L().isPaused()&&!c&&(!!(0,s.isUndefined)(E)||E):l),t=n=>{const t=(0,s.mergeObjects)(n);return delete t._k,e?{isValidating:!0,isLoading:!0,...t}:t},r=I(),i=A(),a=t(r),u=r===i?a:t(i);let d=a;return[()=>{const e=t(I());return P(e,d)?(d.data=e.data,d.isLoading=e.isLoading,d.isValidating=e.isValidating,d.error=e.error,d):(d=e,e)},()=>u]}),[d,m]),x=(0,i.useSyncExternalStore)((0,r.useCallback)((e=>D(m,((n,t)=>{P(t,n)||e()}))),[d,m]),j[0],j[1]),W=!V.current,M=R[m]&&R[m].length>0,G=x.data,Y=(0,s.isUndefined)(G)?F:G,H=x.error,q=(0,r.useRef)(Y),z=p?(0,s.isUndefined)(G)?q.current:G:Y,B=!(M&&!(0,s.isUndefined)(H))&&(W&&!(0,s.isUndefined)(l)?l:!L().isPaused()&&(c?!(0,s.isUndefined)(Y)&&E:(0,s.isUndefined)(Y)||E)),J=!!(m&&n&&W&&B),Z=(0,s.isUndefined)(x.isValidating)?J:x.isValidating,K=(0,s.isUndefined)(x.isLoading)?J:x.isLoading,Q=(0,r.useCallback)((async e=>{const n=w.current;if(!m||!n||b.current||L().isPaused())return!1;let r,i,a=!0;const u=e||{},d=!U[m]||!u.dedupe,c=()=>s.IS_REACT_LEGACY?!b.current&&m===C.current&&V.current:m===C.current,f={isValidating:!1,isLoading:!1},l=()=>{O(f)},E=()=>{const e=U[m];e&&e[1]===i&&delete U[m]},g={isValidating:!0};(0,s.isUndefined)(I().data)&&(g.isLoading=!0);try{if(d&&(O(g),t.loadingTimeout&&(0,s.isUndefined)(I().data)&&setTimeout((()=>{a&&c()&&L().onLoadingSlow(m,t)}),t.loadingTimeout),U[m]=[n(T),(0,s.getTimestamp)()]),[r,i]=U[m],r=await r,d&&setTimeout(E,t.dedupingInterval),!U[m]||U[m][1]!==i)return d&&c()&&L().onDiscarded(m),!1;f.error=s.UNDEFINED;const e=S[m];if(!(0,s.isUndefined)(e)&&(i<=e[0]||i<=e[1]||0===e[1]))return l(),d&&c()&&L().onDiscarded(m),!1;const u=I().data;f.data=o(u,r)?u:r,d&&c()&&L().onSuccess(r,m,t)}catch(e){E();const n=L(),{shouldRetryOnError:t}=n;n.isPaused()||(f.error=e,d&&c()&&(n.onError(e,m,n),(!0===t||(0,s.isFunction)(t)&&t(e))&&k()&&n.onErrorRetry(e,m,n,(e=>{const n=R[m];n&&n[0]&&n[0](s.revalidateEvents.ERROR_REVALIDATE_EVENT,e)}),{retryCount:(u.retryCount||0)+1,dedupe:!0})))}return a=!1,l(),!0}),[m,d]),X=(0,r.useCallback)(((...e)=>(0,s.internalMutate)(d,C.current,...e)),[]);if((0,s.useIsomorphicLayoutEffect)((()=>{w.current=n,y.current=t,(0,s.isUndefined)(G)||(q.current=G)})),(0,s.useIsomorphicLayoutEffect)((()=>{if(!m)return;const e=Q.bind(s.UNDEFINED,u);let n=0;const t=(0,s.subscribeCallback)(m,R,((t,r={})=>{if(t==s.revalidateEvents.FOCUS_EVENT){const t=Date.now();L().revalidateOnFocus&&t>n&&k()&&(n=t+L().focusThrottleInterval,e())}else if(t==s.revalidateEvents.RECONNECT_EVENT)L().revalidateOnReconnect&&k()&&e();else{if(t==s.revalidateEvents.MUTATE_EVENT)return Q();if(t==s.revalidateEvents.ERROR_REVALIDATE_EVENT)return Q(r)}}));return b.current=!1,C.current=m,V.current=!0,O({_k:T}),B&&((0,s.isUndefined)(Y)||s.IS_SERVER?e():(0,s.rAF)(e)),()=>{b.current=!0,t()}}),[m]),(0,s.useIsomorphicLayoutEffect)((()=>{let e;function n(){const n=(0,s.isFunction)(g)?g(I().data):g;n&&-1!==e&&(e=setTimeout(t,n))}function t(){I().error||!v&&!L().isVisible()||!h&&!L().isOnline()?n():Q(u).then(n)}return n(),()=>{e&&(clearTimeout(e),e=-1)}}),[g,v,h,m]),(0,r.useDebugValue)(z),c&&(0,s.isUndefined)(Y)&&m){if(!s.IS_REACT_LEGACY&&s.IS_SERVER)throw new Error("Fallback data is required when using suspense in SSR.");w.current=n,y.current=t,b.current=!1;const e=_[m];if(!(0,s.isUndefined)(e)){const n=X(e);a(n)}if(!(0,s.isUndefined)(H))throw H;{const e=Q(u);(0,s.isUndefined)(z)||(e.status="fulfilled",e.value=!0),a(e)}}return{mutate:X,get data(){return N.data=!0,z},get error(){return N.error=!0,H},get isValidating(){return N.isValidating=!0,Z},get isLoading(){return N.isLoading=!0,K}}})))}}]);