"use strict";(self.webpackChunkha_dash=self.webpackChunkha_dash||[]).push([[8911],{"./src/components/sensor/humidity/humidity.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Humidity_parameters,_Humidity_parameters_docs,_Humidity_parameters1,_HighHumidity_parameters,_HighHumidity_parameters_docs,_HighHumidity_parameters1,_ExtremeHumidity_parameters,_ExtremeHumidity_parameters_docs,_ExtremeHumidity_parameters1;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ExtremeHumidity:()=>ExtremeHumidity,HighHumidity:()=>HighHumidity,Humidity:()=>Humidity,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./src/components/sensor/humidity/index.tsx").V},Humidity={args:{value:59}},HighHumidity={args:{value:74}},ExtremeHumidity={args:{value:98}};Humidity.parameters={...Humidity.parameters,docs:{...null===(_Humidity_parameters=Humidity.parameters)||void 0===_Humidity_parameters?void 0:_Humidity_parameters.docs,source:{originalSource:"{\n  args: {\n    value: 59\n  }\n}",...null===(_Humidity_parameters1=Humidity.parameters)||void 0===_Humidity_parameters1||null===(_Humidity_parameters_docs=_Humidity_parameters1.docs)||void 0===_Humidity_parameters_docs?void 0:_Humidity_parameters_docs.source}}},HighHumidity.parameters={...HighHumidity.parameters,docs:{...null===(_HighHumidity_parameters=HighHumidity.parameters)||void 0===_HighHumidity_parameters?void 0:_HighHumidity_parameters.docs,source:{originalSource:"{\n  args: {\n    value: 74\n  }\n}",...null===(_HighHumidity_parameters1=HighHumidity.parameters)||void 0===_HighHumidity_parameters1||null===(_HighHumidity_parameters_docs=_HighHumidity_parameters1.docs)||void 0===_HighHumidity_parameters_docs?void 0:_HighHumidity_parameters_docs.source}}},ExtremeHumidity.parameters={...ExtremeHumidity.parameters,docs:{...null===(_ExtremeHumidity_parameters=ExtremeHumidity.parameters)||void 0===_ExtremeHumidity_parameters?void 0:_ExtremeHumidity_parameters.docs,source:{originalSource:"{\n  args: {\n    value: 98\n  }\n}",...null===(_ExtremeHumidity_parameters1=ExtremeHumidity.parameters)||void 0===_ExtremeHumidity_parameters1||null===(_ExtremeHumidity_parameters_docs=_ExtremeHumidity_parameters1.docs)||void 0===_ExtremeHumidity_parameters_docs?void 0:_ExtremeHumidity_parameters_docs.source}}};const __namedExportsOrder=["Humidity","HighHumidity","ExtremeHumidity"]},"./src/components/sensor/humidity/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>HumiditySensor});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),_components_sensor_card__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/sensor/card.tsx");const HumiditySensor=param=>{let{value}=param,type="default",text="".concat(value,"%");return value>70&&(type="warning",text="".concat(value,"% - high")),value>90&&(type="error",text="".concat(value,"% - extreme")),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_sensor_card__WEBPACK_IMPORTED_MODULE_2__.u,{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.G,{icon:["fas","humidity"]}),name:"humidity",type,children:text})};HumiditySensor.__docgenInfo={description:"",methods:[],displayName:"HumiditySensor",props:{value:{required:!0,tsType:{name:"number"},description:""}}}}}]);