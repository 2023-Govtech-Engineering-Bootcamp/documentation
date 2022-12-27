"use strict";(self.webpackChunkgds_bootcamp=self.webpackChunkgds_bootcamp||[]).push([[8472],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1181:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={},i="4.4 Clean Up",l={unversionedId:"infrastructure/CleanUp",id:"infrastructure/CleanUp",title:"4.4 Clean Up",description:"WARNING: Remember to clean up all AWS resources to ensure that you do not get a surprise charge 12 months from today.",source:"@site/docs/infrastructure/44-CleanUp.md",sourceDirName:"infrastructure",slug:"/infrastructure/CleanUp",permalink:"/docs/infrastructure/CleanUp",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/infrastructure/44-CleanUp.md",tags:[],version:"current",sidebarPosition:44,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"4.3 ECS Task Definitions",permalink:"/docs/infrastructure/ECS-Task"}},c={},u=[{value:"Background",id:"background",level:2},{value:"Removing Your Resources",id:"removing-your-resources",level:4},{value:"Removing Web Identity and Role",id:"removing-web-identity-and-role",level:4},{value:"Definition of Done",id:"definition-of-done",level:4},{value:"Optional - Deleting AWS Account",id:"optional---deleting-aws-account",level:3}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"44-clean-up"},"4.4 Clean Up"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"WARNING: Remember to clean up all AWS resources to ensure that you do not get a surprise charge 12 months from today.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"One of the reasons we deploy our resources using Infrastructure-as-Code (IaC) is because of the ease of representing all resources that are deployed."),(0,o.kt)("p",null,"If the resource exists in code, it exists in the cloud. Similarly, if the resource ceases to exist within the code, it would cease to exist in the cloud as well (which is exactly what we want at this moment)."),(0,o.kt)("h4",{id:"removing-your-resources"},"Removing Your Resources"),(0,o.kt)("p",null,"Access your Cloudformation console on AWS. Remove your stacks by selecting and deleting it in the following order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"ecs-container "),(0,o.kt)("li",{parentName:"ol"},"ecs-cluster"),(0,o.kt)("li",{parentName:"ol"},"vpc-subnet"),(0,o.kt)("li",{parentName:"ol"},"role-policy")),(0,o.kt)("h4",{id:"removing-web-identity-and-role"},"Removing Web Identity and Role"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to IAM > Roles"),(0,o.kt)("li",{parentName:"ol"},"Look for the role that you have created during the ",(0,o.kt)("a",{parentName:"li",href:"/docs/ci-cd/DevOps-Setup"},"Web Identity Setup")),(0,o.kt)("li",{parentName:"ol"},"Delete the role"),(0,o.kt)("li",{parentName:"ol"},"Go to IAM > Identity Providers "),(0,o.kt)("li",{parentName:"ol"},"Select your provider and delete the identity ")),(0,o.kt)("h4",{id:"definition-of-done"},"Definition of Done"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"All resources in AWS are deleted")),(0,o.kt)("h3",{id:"optional---deleting-aws-account"},"Optional - Deleting AWS Account"),(0,o.kt)("p",null,"If you no longer want to keep your AWS Account for whatever reasons (e.g. fear of unauthorised usage charges appearing on your credit card), you may choose to delete your AWS Account by following the instructions here: ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/premiumsupport/knowledge-center/close-aws-account/"},"https://aws.amazon.com/premiumsupport/knowledge-center/close-aws-account/")),(0,o.kt)("hr",null))}p.isMDXComponent=!0}}]);