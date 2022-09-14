"use strict";(self.webpackChunkgds_bootcamp=self.webpackChunkgds_bootcamp||[]).push([[5878],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},a="3.2 Deploying the Frontend with IaC",l={unversionedId:"ci-cd/Deploy-Frontend-IaC",id:"ci-cd/Deploy-Frontend-IaC",title:"3.2 Deploying the Frontend with IaC",description:"Introduction",source:"@site/docs/ci-cd/32-Deploy-Frontend-IaC.md",sourceDirName:"ci-cd",slug:"/ci-cd/Deploy-Frontend-IaC",permalink:"/docs/ci-cd/Deploy-Frontend-IaC",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ci-cd/32-Deploy-Frontend-IaC.md",tags:[],version:"current",sidebarPosition:32,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"3.1 Docker Images",permalink:"/docs/ci-cd/Docker-Images"},next:{title:"3.3 Deploying the Backend with IaC",permalink:"/docs/ci-cd/Deploy-Backend-IaC"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Setting Up The CI/CD Pipeline",id:"setting-up-the-cicd-pipeline",level:2},{value:"Create AWS Access Keys",id:"create-aws-access-keys",level:3},{value:"Pre-Requisites",id:"pre-requisites",level:4},{value:"Instructions",id:"instructions",level:4},{value:"Setup GitHub Secrets",id:"setup-github-secrets",level:3},{value:"Instructions",id:"instructions-1",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"32-deploying-the-frontend-with-iac"},"3.2 Deploying the Frontend with IaC"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In this exercise, we will be setting up the Continuous Integration, Continuous Delivery (CI/CD) pipeline."),(0,o.kt)("p",null,'According to Redhat, "A CI/CD pipeline is a series of steps that must be performed in order to deliver a new version of software."'),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"setting-up-the-cicd-pipeline"},"Setting Up The CI/CD Pipeline"),(0,o.kt)("h3",{id:"create-aws-access-keys"},"Create AWS Access Keys"),(0,o.kt)("h4",{id:"pre-requisites"},"Pre-Requisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"20-DevOps is complete")),(0,o.kt)("h4",{id:"instructions"},"Instructions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Sign in to the AWS Console: ",(0,o.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com"},"https://console.aws.amazon.com")),(0,o.kt)("li",{parentName:"ol"},'Click on your account name in the navigation bar, and then choose "My Security Credentials"'),(0,o.kt)("li",{parentName:"ol"},'Expand the "Access keys" section'),(0,o.kt)("li",{parentName:"ol"},"Create New Access Key"),(0,o.kt)("li",{parentName:"ol"},"Save the Access Key ID and Secret Access Key somewhere safe"),(0,o.kt)("li",{parentName:"ol"},"All done!")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WARNING: Treat both the Access Key ID and Secret Access Key with the respect that you'd give to any other password. Leaking these credentials may result in heavy credit card bills.\n")),(0,o.kt)("h3",{id:"setup-github-secrets"},"Setup GitHub Secrets"),(0,o.kt)("p",null,"In this section, you will set the secrets obtained from the previous section in your Gitlab repository. The CI/CD pipeline will make use of the secrets to interact with your AWS environment."),(0,o.kt)("h4",{id:"instructions-1"},"Instructions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Store your AWS secrets in your Github Repository",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Navigate to your repository page"),(0,o.kt)("li",{parentName:"ol"},'Go to the repository "Settings"'),(0,o.kt)("li",{parentName:"ol"},'Go to the "Secrets" section on the left panel'),(0,o.kt)("li",{parentName:"ol"},"Create two new repository secrets: <AWS_ACCESS_KEY_ID>, <AWS_SECRET_ACCESS_KEY>, from the secrets obtained in the previous section"))),(0,o.kt)("li",{parentName:"ol"},"Uncomment L3 in the ",(0,o.kt)("strong",{parentName:"li"},"deploy-to-aws")," Github Workflow and push"),(0,o.kt)("li",{parentName:"ol"},"Observe the deployment in the GitHub Actions"),(0,o.kt)("li",{parentName:"ol"},"Check your AWS Console, you should see that:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"A VPC is created"),(0,o.kt)("li",{parentName:"ol"},"4 Subnets are created"),(0,o.kt)("li",{parentName:"ol"},"An internet gateway is created"),(0,o.kt)("li",{parentName:"ol"},"An S3 Bucket is created"),(0,o.kt)("li",{parentName:"ol"},"Your React Application is stored in the S3 Bucket"))),(0,o.kt)("li",{parentName:"ol"},"Review the Github Actions logs to see the steps that were carried out",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},'Note that under the Deploy-With-TF job, the step "Plan Deployment" describes the resources that will be deployed into the cloud'),(0,o.kt)("li",{parentName:"ol"},'A URL to access your deployed React Application can be found in the step "Apply Deployment"'),(0,o.kt)("li",{parentName:"ol"},"The URL should look something like this: ",(0,o.kt)("inlineCode",{parentName:"li"},"gds-react-bucket-abcd1234def.s3-website-ap-southeast-1.amazonaws.com")))),(0,o.kt)("li",{parentName:"ol"},"You should be able to access your React Application from the URL"),(0,o.kt)("li",{parentName:"ol"},"All done!")),(0,o.kt)("hr",null))}u.isMDXComponent=!0}}]);