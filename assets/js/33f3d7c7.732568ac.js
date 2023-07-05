"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[8137],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),o=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=o(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=o(r),m=n,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||s;return r?a.createElement(k,l(l({ref:t},u),{},{components:r})):a.createElement(k,l({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,l=new Array(s);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:n,l[1]=p;for(var o=2;o<s;o++)l[o]=r[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37427:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>o});var a=r(87462),n=(r(67294),r(3905));const s={title:"Get User Buckets"},l="GetUserBuckets",p={unversionedId:"api-sdk/storgae-provider-rest/get_user_buckets",id:"api-sdk/storgae-provider-rest/get_user_buckets",title:"Get User Buckets",description:"RESTful API Description",source:"@site/docs/api-sdk/storgae-provider-rest/get_user_buckets.md",sourceDirName:"api-sdk/storgae-provider-rest",slug:"/api-sdk/storgae-provider-rest/get_user_buckets",permalink:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/get_user_buckets",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/api-sdk/storgae-provider-rest/get_user_buckets.md",tags:[],version:"current",frontMatter:{title:"Get User Buckets"},sidebar:"apiReferenceSidebar",previous:{title:"List Bucket Read Records",permalink:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/list_bucket_read_records"},next:{title:"List Objects By Bucket",permalink:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/list_objects_by_bucket"}},i={},o=[{value:"RESTful API Description",id:"restful-api-description",level:2},{value:"HTTP Request Format",id:"http-request-format",level:2},{value:"HTTP Request Header",id:"http-request-header",level:2},{value:"HTTP Request Parameter",id:"http-request-parameter",level:2},{value:"Path Parameter",id:"path-parameter",level:3},{value:"Query Parameter",id:"query-parameter",level:3},{value:"Request Body",id:"request-body",level:3},{value:"Request Syntax",id:"request-syntax",level:2},{value:"HTTP Response Header",id:"http-response-header",level:2},{value:"HTTP Response Parameter",id:"http-response-parameter",level:2},{value:"Response Body",id:"response-body",level:3},{value:"Response Syntax",id:"response-syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Query a user&#39;s buckets",id:"example-1-query-a-users-buckets",level:3},{value:"Sample Response: Query a user&#39;s buckets successfully",id:"sample-response-query-a-users-buckets-successfully",level:3}],u={toc:o},d="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getuserbuckets"},"GetUserBuckets"),(0,n.kt)("h2",{id:"restful-api-description"},"RESTful API Description"),(0,n.kt)("p",null,"This API is used to query a user's own buckets metadata info. This API only supports ",(0,n.kt)("inlineCode",{parentName:"p"},"path-style")," requests."),(0,n.kt)("h2",{id:"http-request-format"},"HTTP Request Format"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Host(path-style)"),(0,n.kt)("td",{parentName:"tr",align:null},"gnfd-testnet-sp-*.bnbchain.org")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Path(path-style)"),(0,n.kt)("td",{parentName:"tr",align:null},"/")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Method"),(0,n.kt)("td",{parentName:"tr",align:null},"GET")))),(0,n.kt)("h2",{id:"http-request-header"},"HTTP Request Header"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/referenece/gnfd_headers#authorization-header"},"Authorization")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"The authorization string of the HTTP request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"X-Gnfd-User-Address"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"The address of user")))),(0,n.kt)("h2",{id:"http-request-parameter"},"HTTP Request Parameter"),(0,n.kt)("h3",{id:"path-parameter"},"Path Parameter"),(0,n.kt)("p",null,"The request does not have a path parameter."),(0,n.kt)("h3",{id:"query-parameter"},"Query Parameter"),(0,n.kt)("p",null,"The request does not have a query parameter."),(0,n.kt)("h3",{id:"request-body"},"Request Body"),(0,n.kt)("p",null,"The request does not have a request body."),(0,n.kt)("h2",{id:"request-syntax"},"Request Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET / HTTP/1.1\nHost: gnfd-testnet-sp-*.bnbchain.org\nAuthorization: Authorization\nX-Gnfd-User-Address: Address\n")),(0,n.kt)("h2",{id:"http-response-header"},"HTTP Response Header"),(0,n.kt)("p",null,"The response returns the following HTTP headers."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"value is ",(0,n.kt)("inlineCode",{parentName:"td"},"application/json"))))),(0,n.kt)("h2",{id:"http-response-parameter"},"HTTP Response Parameter"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"buckets"),(0,n.kt)("td",{parentName:"tr",align:null},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"buckets defines the information of the bucket list")))),(0,n.kt)("h3",{id:"response-body"},"Response Body"),(0,n.kt)("p",null,"If the request is successful, the service sends back an HTTP 200 response."),(0,n.kt)("p",null,"If you failed to send request, you will get error response body in ",(0,n.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/sp_response#sp-error-response"},"XML"),"."),(0,n.kt)("h2",{id:"response-syntax"},"Response Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"HTTP/1.1 200\n\nJSON Body\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"The examples given all use path-style."),(0,n.kt)("h3",{id:"example-1-query-a-users-buckets"},"Example 1: Query a user's buckets"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET / HTTP/1.1\nHost: gnfd-testnet-sp-*.bnbchain.org\nDate: Fri, 31 March 2023 17:32:00 GMT\nAuthorization: authorization string\nX-Gnfd-User-Address: user address string\n")),(0,n.kt)("h3",{id:"sample-response-query-a-users-buckets-successfully"},"Sample Response: Query a user's buckets successfully"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},'HTTP/1.1 200 OK\nDate: Fri, 31 March 2023 17:32:10 GMT\n\n{\n    "buckets": [\n        {\n            "bucket_info": {\n                "owner": "0x0E25AF015EA1Be52e36ce5Ebc4E1558dfcC8eBD0",\n                "bucket_name": "rbna62ktkrwm",\n                "visibility": 2,\n                "id": "3",\n                "source_type": 0,\n                "create_at": "1681900505",\n                "payment_address": "0x0E25AF015EA1Be52e36ce5Ebc4E1558dfcC8eBD0",\n                "primary_sp_address": "0x3c5D5A4f6E3EF9c4b7AE4bA5E782D11B16bD1eAD",\n                "charged_read_quota": "0",\n                "billing_info": {\n                    "price_time": "0",\n                    "total_charge_size": "0",\n                    "secondary_sp_objects_size": []\n                },\n                "bucket_status": 1\n            },\n            "removed": true,\n            "delete_at": "1681900525",\n            "delete_reason": "test",\n            "operator": "0x3c5D5A4f6E3EF9c4b7AE4bA5E782D11B16bD1eAD",\n            "create_tx_hash": "0x5961fe5ee9be7ecf4817fe3488bebb882e282d2c45ea4228961a83bf660f5489",\n            "update_tx_hash": "0xb694ef890d6259767295098c43cdd881570316f3e887658dd9d8f7046424d8cc",\n            "update_at": "1172",\n            "update_time": "1681900525"\n        }\n    ]\n}\n')))}c.isMDXComponent=!0}}]);