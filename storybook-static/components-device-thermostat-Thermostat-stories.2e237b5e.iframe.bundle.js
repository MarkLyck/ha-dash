"use strict";(self.webpackChunkha_dash=self.webpackChunkha_dash||[]).push([[998],{"./src/components/device/thermostat/Thermostat.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Cooling_parameters,_Cooling_parameters_docs,_Cooling_parameters1,_Heating_parameters,_Heating_parameters_docs,_Heating_parameters1;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Cooling:()=>Cooling,Heating:()=>Heating,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./src/components/device/thermostat/index.tsx").m},defaultProps={name:"Thermostat",currentTemperature:76,targetTemperature:72,setState:()=>{}},Cooling={args:{...defaultProps,mode:"cooling",icon:["far","air-conditioner"]}},Heating={args:{...defaultProps,mode:"heating",currentTemperature:69,targetTemperature:74,icon:["far","air-conditioner"]}};Cooling.parameters={...Cooling.parameters,docs:{...null===(_Cooling_parameters=Cooling.parameters)||void 0===_Cooling_parameters?void 0:_Cooling_parameters.docs,source:{originalSource:"{\n  args: {\n    ...defaultProps,\n    mode: 'cooling',\n    icon: ['far', 'air-conditioner']\n  }\n}",...null===(_Cooling_parameters1=Cooling.parameters)||void 0===_Cooling_parameters1||null===(_Cooling_parameters_docs=_Cooling_parameters1.docs)||void 0===_Cooling_parameters_docs?void 0:_Cooling_parameters_docs.source}}},Heating.parameters={...Heating.parameters,docs:{...null===(_Heating_parameters=Heating.parameters)||void 0===_Heating_parameters?void 0:_Heating_parameters.docs,source:{originalSource:"{\n  args: {\n    ...defaultProps,\n    mode: 'heating',\n    currentTemperature: 69,\n    targetTemperature: 74,\n    icon: ['far', 'air-conditioner']\n  }\n}",...null===(_Heating_parameters1=Heating.parameters)||void 0===_Heating_parameters1||null===(_Heating_parameters_docs=_Heating_parameters1.docs)||void 0===_Heating_parameters_docs?void 0:_Heating_parameters_docs.source}}};const __namedExportsOrder=["Cooling","Heating"]},"./src/components/device/thermostat/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Thermostat});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),index_es=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),deviceCard=__webpack_require__("./src/components/ui/deviceCard.tsx"),dist=__webpack_require__("./node_modules/@radix-ui/react-slider/dist/index.mjs"),class_variance_authority_dist=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),utils=__webpack_require__("./src/lib/utils.ts");const currentTempStyle=(0,class_variance_authority_dist.j)("-translate-y-1/2 absolute top-1/2 h-1 w-1 rounded opacity-25",{variants:{isHigher:{true:"bg-slate-500 dark:bg-slate-400",false:"bg-slate-400 dark:bg-slate-500"}}}),TemperatureSlider=react.forwardRef(((param,ref)=>{let{className,currentValue,...props}=param;const value=Number(props.value),percentageOffset=(currentValue-Number(null==props?void 0:props.min))/(Number(null==props?void 0:props.max)-Number(null==props?void 0:props.min))*100,showCurrentValue=currentValue!==value,isCooling=value<currentValue,isHeating=value>currentValue,showCoolHotIcon=value>10;return(0,jsx_runtime.jsxs)(dist.fC,{ref,className:(0,utils.cn)("relative flex w-full touch-none select-none items-center overflow-hidden",className),...props,children:[(0,jsx_runtime.jsx)(dist.fQ,{className:"relative h-6 w-full grow overflow-hidden rounded border border-slate-200 bg-slate-100 hover:cursor-pointer dark:border-none dark:bg-slate-1000",children:(0,jsx_runtime.jsx)(dist.e6,{className:"absolute h-full bg-slate-500 dark:bg-slate-200"})}),showCurrentValue?(0,jsx_runtime.jsx)("div",{className:currentTempStyle({isHigher:currentValue>value}),style:{left:"calc(".concat(percentageOffset,"% - 1px)")}}):null,showCoolHotIcon&&(isCooling||isHeating)?(0,jsx_runtime.jsx)(index_es.G,{icon:["far",isCooling?"snowflake":"heat"],className:"absolute left-2 text-[12px] text-slate-400 dark:text-slate-500"}):null,(0,jsx_runtime.jsx)(dist.bU,{className:"relative mr-2 block h-[14px] w-[2px] rounded border border-none bg-slate-100 transition dark:bg-slate-800 focus:outline-none",style:value<10?{opacity:0}:{opacity:1}})]})}));TemperatureSlider.displayName=dist.fC.displayName,TemperatureSlider.__docgenInfo={description:"",methods:[]};const ThermostatCard=param=>{let{name,icon,mode,currentTemperature,targetTemperature,setState}=param;const isActive="off"!==mode;return(0,jsx_runtime.jsx)(deviceCard.pJ,{isActive,name,status:(0,jsx_runtime.jsxs)("div",{className:"flex w-full items-center justify-between",children:[(0,jsx_runtime.jsx)("span",{className:"first-letter:capitalize",children:mode}),isActive?(0,jsx_runtime.jsxs)("span",{className:"ml-auto",children:[(0,jsx_runtime.jsx)(index_es.G,{className:"mr-1 text-[12px]",icon:["far","temperature-half"]}),targetTemperature,"°"]}):null]}),icon,setIsActive:setState,children:isActive?(0,jsx_runtime.jsx)("div",{className:"flex w-full gap-2",children:(0,jsx_runtime.jsx)(TemperatureSlider,{value:[targetTemperature],currentValue:currentTemperature,min:50,max:90,onChange:()=>{}})}):null})};ThermostatCard.__docgenInfo={description:"",methods:[],displayName:"ThermostatCard",props:{name:{required:!0,tsType:{name:"string"},description:""},mode:{required:!0,tsType:{name:"union",raw:"'heating' | 'cooling' | 'auto' | 'off'",elements:[{name:"literal",value:"'heating'"},{name:"literal",value:"'cooling'"},{name:"literal",value:"'auto'"},{name:"literal",value:"'off'"}]},description:""},currentTemperature:{required:!0,tsType:{name:"number"},description:""},targetTemperature:{required:!0,tsType:{name:"number"},description:""},icon:{required:!0,tsType:{name:"IconProp"},description:""},setState:{required:!0,tsType:{name:"signature",type:"function",raw:"(state: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"state"}],return:{name:"void"}}},description:""}}};const Thermostat=props=>(0,jsx_runtime.jsx)(ThermostatCard,{...props});Thermostat.__docgenInfo={description:"",methods:[],displayName:"Thermostat",props:{name:{required:!0,tsType:{name:"string"},description:""},mode:{required:!0,tsType:{name:"union",raw:"'heating' | 'cooling' | 'auto' | 'off'",elements:[{name:"literal",value:"'heating'"},{name:"literal",value:"'cooling'"},{name:"literal",value:"'auto'"},{name:"literal",value:"'off'"}]},description:""},currentTemperature:{required:!0,tsType:{name:"number"},description:""},targetTemperature:{required:!0,tsType:{name:"number"},description:""},icon:{required:!0,tsType:{name:"IconProp"},description:""},setState:{required:!0,tsType:{name:"signature",type:"function",raw:"(state: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"state"}],return:{name:"void"}}},description:""}}}}}]);