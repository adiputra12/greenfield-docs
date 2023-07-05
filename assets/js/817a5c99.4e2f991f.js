"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[835],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(r),y=o,g=p["".concat(c,".").concat(y)]||p[y]||u[y]||a;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},40814:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const a={title:"Uploader",order:7},i="Uploader",s={unversionedId:"guide/storage-provider/services/uploader",id:"guide/storage-provider/services/uploader",title:"Uploader",description:"Uploader is responsible for receiving and cutting the object payload data into segments, then storing it in the piece",source:"@site/docs/guide/storage-provider/services/uploader.md",sourceDirName:"guide/storage-provider/services",slug:"/guide/storage-provider/services/uploader",permalink:"/greenfield-docs/docs/guide/storage-provider/services/uploader",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/storage-provider/services/uploader.md",tags:[],version:"current",frontMatter:{title:"Uploader",order:7},sidebar:"guideSidebar",previous:{title:"Gateway",permalink:"/greenfield-docs/docs/guide/storage-provider/services/gateway"},next:{title:"Receiver",permalink:"/greenfield-docs/docs/guide/storage-provider/services/receiver"}},c={},d=[{value:"Key Workflow",id:"key-workflow",level:2},{value:"Receive and cutting object payload data",id:"receive-and-cutting-object-payload-data",level:3},{value:"Asynchronously store to piece store",id:"asynchronously-store-to-piece-store",level:3},{value:"Message",id:"message",level:2}],l={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"uploader"},"Uploader"),(0,o.kt)("p",null,"Uploader is responsible for receiving and cutting the object payload data into segments, then storing it in the piece\nstore, and notifying the downstream service to asynchronously replicate the object payload data that processed by EC\nto the secondary SP."),(0,o.kt)("h2",{id:"key-workflow"},"Key Workflow"),(0,o.kt)("h3",{id:"receive-and-cutting-object-payload-data"},"Receive and cutting object payload data"),(0,o.kt)("p",null,"Uploader receives the PutObjectRequest from Gateway that has been authenticated. The request is a streaming interface\nthat saves system memory resources to the greatest extent. Implemented PayloadStream for customized dynamic cutting\nsegments, it will return the segment's data and segment metadata for storing the piece store."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// PayloadStream implement a one-way data flow, writes bytes of any size\n// read the fixed data size with payload metadata\ntype PayloadStream struct {\n    objectID       uint64\n    replicaIdx     uint32\n    segmentSize    uint64\n    redundancyType storagetypes.RedundancyType\n    entryCh        chan *SegmentEntry\n    init           atomic.Value\n    close          atomic.Value\n\n    pRead  *io.PipeReader\n    pWrite *io.PipeWriter\n}\n")),(0,o.kt)("h3",{id:"asynchronously-store-to-piece-store"},"Asynchronously store to piece store"),(0,o.kt)("p",null,"The background will start multiple goroutines to process the segment entry processed by PayloadStream and store it in\nthe piece store."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type SegmentEntry struct {\n    objectID       uint64\n    replicaIdx     uint32\n    segmentIdx     uint32\n    redundancyType storagetypes.RedundancyType\n    segmentData    []byte\n    err            error\n}\n")),(0,o.kt)("h2",{id:"message"},"Message"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// PutObjectRequest is request type for the UploadObject RPC method.\nmessage PutObjectRequest {\n  // object_info defines the information of the object.\n  bnbchain.greenfield.storage.ObjectInfo object_info = 1;\n  // payload defines the data of the object.\n  bytes payload = 2;\n}\n")))}u.isMDXComponent=!0}}]);