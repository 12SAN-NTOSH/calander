"use strict";(globalThis.webpackChunk_openmrs_esm_form_engine_app=globalThis.webpackChunk_openmrs_esm_form_engine_app||[]).push([[444],{444:(n,e,t)=>{t.r(e),t.d(e,{ProgramEnrollmentSubmissionAction:()=>f,default:()=>h});var r=t(3565),o=t.n(r),i=t(9781),l=t(8253),a=t(7753),u=t(2214);function s(n,e,t,r,o,i,l){try{var a=n[i](l),u=a.value}catch(n){return void t(n)}a.done?e(u):Promise.resolve(u).then(r,o)}var d,c,f={applyAction:(d=function(n,e){var t,r,s,d,c,f,h,b,w,v,g,y,k,C,E,D,P;return function(n,e){var t,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((o=(o=l.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=e.call(n,l)}catch(n){i=[6,n],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,(function(_){switch(_.label){case 0:if(t=n.patient,r=n.encounters,s=n.sessionMode,b=r[0],w=b.location.uuid,v=function(n,e){return(0,i.translateFrom)(a.e,n,e)},g=e.programUuid,"view"===s)return[2];if(!g)throw new Error("Program UUID not configured");return y=null===(c=b.obs)||void 0===c||null===(d=c.find((function(n){return n.formFieldPath.includes(e.enrollmentDate||null)})))||void 0===d?void 0:d.value,k=null===(h=b.obs)||void 0===h||null===(f=h.find((function(n){return n.formFieldPath.includes(e.completionDate||null)})))||void 0===f?void 0:f.value,C=new AbortController,E={patient:t.id,program:g,dateEnrolled:null!=y?y:o()().format(),location:w},[4,(0,l.getPatientEnrolledPrograms)(t.id)];case 1:if(D=_.sent(),P=null==D?void 0:D.results.find((function(n){return n.program.uuid===g&&!n.dateCompleted})),e.completionDate){if(!k)throw new Error("Completion date was not found in the encounter");if(!P)return(0,i.showSnackbar)({title:v("enrollmentDiscontinuationNotAllowed","Enrollment discontinuation not allowed"),subtitle:v("cannotDiscontinueEnrollment","Cannot discontinue an enrollment that does not exist"),kind:"error",isLowContrast:!1}),[2];E={uuid:P.uuid,dateCompleted:p(k)}}if(P){if(!P.dateCompleted&&!k)return"enter"===s&&(0,i.showSnackbar)({title:v("enrollmentNotAllowed","Enrollment not allowed"),subtitle:v("alreadyEnrolledDescription","This patient is already enrolled in the selected program and cannot be enrolled again."),kind:"error",isLowContrast:!1}),[2];if(P.dateCompleted)return"enter"===s&&(0,i.showSnackbar)({title:v("enrollmentAlreadyDiscontinued","Enrollment already discontinued"),subtitle:v("alreadyDiscontinuedDescription","This patient is already enrolled in the selected program and has already been discontinued."),kind:"error",isLowContrast:!1}),[2]}return(0,l.saveProgramEnrollment)(E,C).then((function(n){(0,i.showSnackbar)({kind:"success",title:m(v,n),isLowContrast:!0})}),(function(n){(0,i.showSnackbar)({title:v("errorSavingEnrollment","Error saving enrollment"),subtitle:(0,u.c)(n).join(", "),kind:"error",isLowContrast:!1})})),[2]}}))},c=function(){var n=this,e=arguments;return new Promise((function(t,r){var o=d.apply(n,e);function i(n){s(o,t,r,i,l,"next",n)}function l(n){s(o,t,r,i,l,"throw",n)}i(void 0)}))},function(n,e){return c.apply(this,arguments)})};function m(n,e){return e.data.dateCompleted?n("enrollmentDiscontinued","The patient's program enrollment has been successfully discontinued."):n("enrolledToProgram","The patient has been successfully enrolled in the program.")}function p(n){if(!n.endsWith("T00:00:00.000+0000"))return n;var e=o()();return o()(n).hour(e.hour()).minute(e.minute()).second(e.second()).millisecond(e.millisecond()).format()}const h=f}}]);