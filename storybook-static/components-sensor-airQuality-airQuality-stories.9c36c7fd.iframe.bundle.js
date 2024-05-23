"use strict";(self.webpackChunkha_dash=self.webpackChunkha_dash||[]).push([[1148],{"./src/components/sensor/airQuality/airQuality.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _AirQuality_parameters,_AirQuality_parameters_docs,_AirQuality_parameters1,_Poor_parameters,_Poor_parameters_docs,_Poor_parameters1,_VeryBad_parameters,_VeryBad_parameters_docs,_VeryBad_parameters1;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AirQuality:()=>AirQuality,Poor:()=>Poor,VeryBad:()=>VeryBad,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./src/components/sensor/airQuality/index.tsx").g},AirQuality={args:{value:91}},Poor={args:{value:910}},VeryBad={args:{value:1498}};AirQuality.parameters={...AirQuality.parameters,docs:{...null===(_AirQuality_parameters=AirQuality.parameters)||void 0===_AirQuality_parameters?void 0:_AirQuality_parameters.docs,source:{originalSource:"{\n  args: {\n    value: 91\n  }\n}",...null===(_AirQuality_parameters1=AirQuality.parameters)||void 0===_AirQuality_parameters1||null===(_AirQuality_parameters_docs=_AirQuality_parameters1.docs)||void 0===_AirQuality_parameters_docs?void 0:_AirQuality_parameters_docs.source}}},Poor.parameters={...Poor.parameters,docs:{...null===(_Poor_parameters=Poor.parameters)||void 0===_Poor_parameters?void 0:_Poor_parameters.docs,source:{originalSource:"{\n  args: {\n    value: 910\n  }\n}",...null===(_Poor_parameters1=Poor.parameters)||void 0===_Poor_parameters1||null===(_Poor_parameters_docs=_Poor_parameters1.docs)||void 0===_Poor_parameters_docs?void 0:_Poor_parameters_docs.source}}},VeryBad.parameters={...VeryBad.parameters,docs:{...null===(_VeryBad_parameters=VeryBad.parameters)||void 0===_VeryBad_parameters?void 0:_VeryBad_parameters.docs,source:{originalSource:"{\n  args: {\n    value: 1498\n  }\n}",...null===(_VeryBad_parameters1=VeryBad.parameters)||void 0===_VeryBad_parameters1||null===(_VeryBad_parameters_docs=_VeryBad_parameters1.docs)||void 0===_VeryBad_parameters_docs?void 0:_VeryBad_parameters_docs.source}}};const __namedExportsOrder=["AirQuality","Poor","VeryBad"]},"./src/components/sensor/airQuality/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>AirQualitySensor});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),_components_sensor_card__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/sensor/card.tsx");const AirQualitySensor=param=>{let{value}=param,type="default",text="".concat(value," ppm");return value>900&&(type="warning",text="".concat(value," ppm - poor")),value>1200&&(type="error",text="".concat(value," ppm - very bad")),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_sensor_card__WEBPACK_IMPORTED_MODULE_2__.u,{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.G,{icon:["fas","leaf"]}),name:"air quality",type,children:text})};AirQualitySensor.__docgenInfo={description:"",methods:[],displayName:"AirQualitySensor",props:{value:{required:!0,tsType:{name:"number"},description:""}}}}}]);