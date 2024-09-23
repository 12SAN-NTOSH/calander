"use strict";(globalThis.webpackChunk_openmrs_esm_patient_chart_app=globalThis.webpackChunk_openmrs_esm_patient_chart_app||[]).push([[7402],{7402:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d});var i=a(268),n=a.n(i),o=a(4924),s=a(4350),c=a(414),r=a(2870),l=a(9069);const d=function(t){var e=t.patientUuid,a=t.closeModal,d=t.visitType,p=t.launchPatientChart,u=(0,o.useTranslation)().t,h=(0,r.useFeatureFlag)("rde"),v=(0,i.useCallback)((function(){p?(0,c.launchPatientChartWithWorkspaceOpen)({patientUuid:e,workspaceName:"past-visits-overview"}):(0,c.launchPatientWorkspace)("past-visits-overview"),a()}),[a,e,p]),m=(0,i.useCallback)((function(){p?(0,c.launchPatientChartWithWorkspaceOpen)({patientUuid:e,workspaceName:"start-visit-workspace-form"}):(0,c.launchPatientWorkspace)("start-visit-workspace-form"),a()}),[a,e,p]),k=h&&"past"===d?u("addAPastVisit","Add a past visit"):u("noActiveVisit","No active visit"),w=h?"past"===d?u("addPastVisitText","You can add a new past visit or update an old one. Choose from one of the options below to continue."):u("noActiveVisitText","You can't add data to the patient chart without an active visit. Choose from one of the options below to continue."):u("noActiveVisitNoRDEText","You can't add data to the patient chart without an active visit. Would you like to start a new visit?");return n().createElement("div",null,n().createElement(s.ModalHeader,{closeModal:a},n().createElement("span",{className:l.Z.header},k)),n().createElement(s.ModalBody,null,n().createElement("p",{className:l.Z.body},w)),n().createElement(s.ModalFooter,null,n().createElement(s.Button,{kind:"secondary",onClick:a},u("cancel","Cancel")),h&&n().createElement(s.Button,{kind:"secondary",onClick:v},u("editPastVisit","Edit past visit")),n().createElement(s.Button,{kind:"primary",onClick:m},u("startNewVisit","Start new visit"))))}}}]);