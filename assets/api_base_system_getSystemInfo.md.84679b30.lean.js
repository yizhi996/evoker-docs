import{r as a,o as i,c as d,d as e,b as t,e as s,a as o}from"./app.f4d26b80.js";const h=e("h1",{id:"ek-getsysteminfo",tabindex:"-1"},[s("ek.getSystemInfo "),e("a",{class:"header-anchor",href:"#ek-getsysteminfo","aria-hidden":"true"},"#")],-1),u=s(" \u652F\u6301 Promise"),m=o("",3),y=e("h3",{id:"\u8FD4\u56DE",tabindex:"-1"},[s("\u8FD4\u56DE "),e("a",{class:"header-anchor",href:"#\u8FD4\u56DE","aria-hidden":"true"},"#")],-1),A=e("h3",{id:"safearea-\u8BF4\u660E",tabindex:"-1"},[s("SafeArea \u8BF4\u660E "),e("a",{class:"header-anchor",href:"#safearea-\u8BF4\u660E","aria-hidden":"true"},"#")],-1),g=o("",5),C=JSON.parse('{"title":"ek.getSystemInfo","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u8FD4\u56DE","slug":"\u8FD4\u56DE","link":"#\u8FD4\u56DE","children":[]},{"level":3,"title":"SafeArea \u8BF4\u660E","slug":"safearea-\u8BF4\u660E","link":"#safearea-\u8BF4\u660E","children":[]},{"level":3,"title":"AuthorizedStatus \u8BF4\u660E","slug":"authorizedstatus-\u8BF4\u660E","link":"#authorizedstatus-\u8BF4\u660E","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"api/base/system/getSystemInfo.md","lastUpdated":1663688878000}'),_={name:"api/base/system/getSystemInfo.md"},F=Object.assign(_,{setup(D){const l=[{name:"SDKVersion",type:"string",desc:"\u5BA2\u6237\u7AEFJS\u57FA\u7840\u5E93\u7248\u672C"},{name:"nativeSDKVersion",type:"string",desc:"\u539F\u751F\u5BA2\u6237\u7AEF\u57FA\u7840\u5E93\u7248\u672C"},{name:"version",type:"string",desc:"\u5BBF\u4E3B\u7248\u672C\u53F7"},{name:"language",type:"string",desc:"\u7CFB\u7EDF\u8BED\u8A00"},{name:"theme",type:"string",desc:"\u7CFB\u7EDF\u5F53\u524D\u4E3B\u9898",types:[{type:"light",desc:"\u6D45\u8272\u4E3B\u9898"},{type:"dark",desc:"\u6DF1\u8272\u4E3B\u9898"}]},{name:"brand",type:"string",desc:"\u8BBE\u5907\u54C1\u724C"},{name:"model",type:"string",desc:"\u8BBE\u5907\u578B\u53F7"},{name:"system",type:"string",desc:"\u64CD\u4F5C\u7CFB\u7EDF\u53CA\u7248\u672C"},{name:"platform",type:"string",desc:"\u5BA2\u6237\u7AEF\u5E73\u53F0"},{name:"bluetoothEnabled",type:"boolean",desc:"\u84DD\u7259\u7684\u7CFB\u7EDF\u5F00\u5173"},{name:"locationEnabled",type:"boolean",desc:"\u5730\u7406\u4F4D\u7F6E\u7684\u7CFB\u7EDF\u5F00\u5173"},{name:"wifiEnabled",type:"boolean",desc:"Wi-Fi \u7684\u7CFB\u7EDF\u5F00\u5173"},{name:"deviceOrientation",type:"string",desc:"\u8BBE\u5907\u65B9\u5411",values:[{value:"portrait",desc:"\u7AD6\u5C4F"},{value:"landscape",desc:"\u6A2A\u5C4F"}]},{name:"pixelRatio",type:"number",desc:"\u8BBE\u5907\u50CF\u7D20\u6BD4"},{name:"screenWidth",type:"number",desc:"\u5C4F\u5E55\u5BBD\u5EA6\uFF0C\u5355\u4F4Dpx"},{name:"screenHeight",type:"number",desc:"\u5C4F\u5E55\u9AD8\u5EA6\uFF0C\u5355\u4F4Dpx"},{name:"windowWidth",type:"number",desc:"\u53EF\u4F7F\u7528\u7A97\u53E3\u5BBD\u5EA6\uFF0C\u5355\u4F4Dpx"},{name:"windowHeight",type:"number",desc:"\u53EF\u4F7F\u7528\u7A97\u53E3\u9AD8\u5EA6\uFF0C\u5355\u4F4Dpx"},{name:"statusBarHeight",type:"number",desc:"\u72B6\u6001\u680F\u7684\u9AD8\u5EA6\uFF0C\u5355\u4F4Dpx"},{name:"safeArea",type:"SafeArea",desc:"\u5B89\u5168\u533A\u57DF"},{name:"screenTop",type:"number",desc:"\u7A97\u53E3\u4E0A\u8FB9\u7F18\u7684 y \u503C\uFF0C\u5355\u4F4Dpx"},{name:"albumAuthorized",type:"AuthorizedStatus",desc:"\u5141\u8BB8\u5BBF\u4E3B\u4F7F\u7528\u76F8\u518C\u7684\u5F00\u5173"},{name:"bluetoothAuthorized",type:"AuthorizedStatus",desc:"\u5141\u8BB8\u5BBF\u4E3B\u4F7F\u7528\u84DD\u7259\u7684\u5F00\u5173"},{name:"cameraAuthorized",type:"AuthorizedStatus",desc:"\u5141\u8BB8\u5BBF\u4E3B\u4F7F\u7528\u6444\u50CF\u5934\u7684\u5F00\u5173"},{name:"locationAuthorized",type:"AuthorizedStatus",desc:"\u5141\u8BB8\u5BBF\u4E3B\u4F7F\u7528\u5B9A\u4F4D\u7684\u5F00\u5173"},{name:"locationReducedAccuracy",type:"boolean",desc:"\u662F\u5426\u662F\u6A21\u7CCA\u5B9A\u4F4D"},{name:"microphoneAuthorized",type:"AuthorizedStatus",desc:"\u5141\u8BB8\u5BBF\u4E3B\u4F7F\u7528\u9EA6\u514B\u98CE\u7684\u5F00\u5173"},{name:"notificationAuthorized",type:"AuthorizedStatus",desc:"\u5141\u8BB8\u5BBF\u4E3B\u901A\u77E5\u7684\u5F00\u5173"},{name:"notificationAlertAuthorized",type:"AuthorizedStatus",desc:"\u5141\u8BB8\u5BBF\u4E3B\u901A\u77E5\u5E26\u6709\u63D0\u9192\u7684\u5F00\u5173"},{name:"notificationBadgeAuthorized",type:"AuthorizeStatus",desc:"\u5141\u8BB8\u5BBF\u4E3B\u901A\u77E5\u5E26\u6709\u6807\u8BB0\u7684\u5F00\u5173"},{name:"notificationSoundAuthorized",type:"AuthorizedStatus",desc:"\u5141\u8BB8\u5BBF\u4E3B\u901A\u77E5\u5E26\u6709\u58F0\u97F3\u7684\u5F00\u5173"}],r=[{name:"left",type:"number",desc:"\u5B89\u5168\u533A\u57DF\u5DE6\u4E0A\u89D2\u6A2A\u5750\u6807"},{name:"right",type:"number",desc:"\u5B89\u5168\u533A\u57DF\u53F3\u4E0B\u89D2\u6A2A\u5750\u6807"},{name:"top",type:"number",desc:"\u5B89\u5168\u533A\u57DF\u5DE6\u4E0A\u89D2\u7EB5\u5750\u6807"},{name:"bottom",type:"number",desc:"\u5B89\u5168\u533A\u57DF\u53F3\u4E0B\u89D2\u7EB5\u5750\u6807"},{name:"width",type:"number",desc:"\u5B89\u5168\u533A\u57DF\u7684\u5BBD\u5EA6"},{name:"height",type:"number",desc:"\u5B89\u5168\u533A\u57DF\u7684\u9AD8\u5EA6"}];return(f,b)=>{const p=a("Icon"),c=a("Props"),n=a("Results");return i(),d("div",null,[h,e("blockquote",null,[t(p,{type:"success"}),u]),m,t(c,{options:""}),y,t(n,{data:l}),A,t(n,{data:r}),g])}}});export{C as __pageData,F as default};