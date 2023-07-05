"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[6358],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=r,f=u["".concat(s,".").concat(h)]||u[h]||p[h]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},78417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={title:"Release Notes",icon:"proposal",dir:{order:7},order:7},o="Release Notes",l={permalink:"/greenfield-docs/blog/releaseNotes",editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/blog/releaseNotes.md",source:"@site/blog/releaseNotes.md",title:"Release Notes",description:"Greenfield v0.2.1 - Mekong Testnet reset.",date:"2023-07-05T13:16:04.000Z",formattedDate:"July 5, 2023",tags:[],readingTime:5.5,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Release Notes",icon:"proposal",dir:{order:7},order:7}},s={authorsImageUrls:[]},d=[{value:"Greenfield v0.2.1 - Mekong Testnet reset.",id:"greenfield-v021---mekong-testnet-reset",level:2},{value:"Enhancement and Feature List \ud83d\udcdd",id:"enhancement-and-feature-list-",level:3},{value:"Greenfield v0.1.2 - The maintenance testnet release.",id:"greenfield-v012---the-maintenance-testnet-release",level:2},{value:"Bugfix List",id:"bugfix-list",level:3},{value:"Feature List",id:"feature-list",level:3},{value:"Greenfield v0.1.0 - The initial testnet release.",id:"greenfield-v010---the-initial-testnet-release",level:2},{value:"Features List",id:"features-list",level:3},{value:"Account &amp;&amp; Balance &amp;&amp; Transaction",id:"account--balance--transaction",level:4},{value:"Storage",id:"storage",level:4},{value:"Native Cross Chain Communication",id:"native-cross-chain-communication",level:4},{value:"Storage Provider",id:"storage-provider",level:4},{value:"Validator and Staking",id:"validator-and-staking",level:4}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"greenfield-v021---mekong-testnet-reset"},"Greenfield v0.2.1 - Mekong Testnet reset."),(0,r.kt)("p",null,"On May 25th, we reset the Greenfield Testnet and upgrade the Greenfield version to v0.2.1. We're excited to introduce this as the Mekong Testnet. Here are key changes to note."),(0,r.kt)("p",null,"\ud83d\udd38The Greenfield BSC Testnet (Chain ID: 5601) will be discontinued. Instead, we'll deploy the Greenfield Cross-Chain contracts on the BSC Chapel Testnet (Chain ID: 97).  This means you can fully utilize all the infrastructure of the current BSC Chapel Testnet, such as bscscan, tenderly, theGraph, and so on. BNB and Greenfield resources can still flow freely between Greenfield testnet and BSC testnet."),(0,r.kt)("p",null,"\ud83d\udd38The Greenfield Blockchain gRPC Endpoint will no longer be provided. The ETH-API endpoint has now been integrated with the Tendermint endpoint. All you need is the Tendermint endpoint for the Greenfield Blockchain. Please use ",(0,r.kt)("a",{parentName:"p",href:"https://www.bnbchainlist.org/"},"Chainlist")," to quickly add BSC Testnet and Greenfield Mekong Testnet."),(0,r.kt)("p",null,"\ud83d\udd38All buckets/objects previously stored on Greenfield Testnet will be cleared and won't be available for query anymore. Friendly reminder: Please do not save important data on the testnet. The team will periodically delete outdated data."),(0,r.kt)("p",null,"\ud83d\udd38All account balances will also be reset. However, accounts with a balance under 10 tBNBs can look forward to an airdrop after the reset. For new users, Greenfield will not provide redundant faucets any longer, please get the test BNB from the official faucet ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/bnbchain"},"discord channel")," and use ",(0,r.kt)("a",{parentName:"p",href:"https://dcellar.io/"},"Dcellar")," to convert it to the BNB on Greenfield."),(0,r.kt)("p",null,"\ud83d\udd38As this is a breaking upgrade, the team will update the document as soon as possible the maintenance is done."),(0,r.kt)("p",null,"Greenfield v0.2.1 - Release for Mekong Testnet \ud83c\udf89"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield/releases/tag/v0.2.0"},"Greenfield Blockchain v0.2.1")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-storage-provider/releases/tag/v0.2.1"},"Storage Provider v0.2.1")," introduces several enhancement exciting features. Let's take a look at these:"),(0,r.kt)("h3",{id:"enhancement-and-feature-list-"},"Enhancement and Feature List \ud83d\udcdd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bump cosmos-sdk core to version v0.47.2. Cosmos-sdk v0.47.x and v0.46.x have significant differences in consensus engine, ABCI, encoding, dependency injection, and other aspects. Greenfield hopes to update to this version this morning to avoid future upgrade difficulties."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://greenfield.bnbchain.org/docs/guide/introduction/ecosystem.html#challenge-verifier"},"Challenge Verifier")," is introduced in  Mekong Testnet. By using Challenge Verifier, the network can ensure that only reliable and trustworthy storage providers are allowed to participate, protecting the network from any potential data loss, corruption, or low-quality service."),(0,r.kt)("li",{parentName:"ul"},"Discontinue object and stale permission GC is introduced in v0.2.1. These two features allow for a lighter blockchain state and allow SPs on the testnet to periodically clean up data to maintain long-term operation even without incentives."),(0,r.kt)("li",{parentName:"ul"},"Support for more diverse methods of file searches, such as listing objects by prefix or by folder."),(0,r.kt)("li",{parentName:"ul"},"Implemented a garbage collection module for the storage provider, reducing the operating costs of the storage provider.")),(0,r.kt)("h2",{id:"greenfield-v012---the-maintenance-testnet-release"},"Greenfield v0.1.2 - The maintenance testnet release."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield/releases/tag/v0.1.2"},"Greenfield Blockchain v0.1.2")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-storage-provider/releases/tag/v0.1.2"},"Storage Provider v0.1.2"),"\nwas a regular maintenance testnet version of BNB Greenfield. This version fixed several bugs from the\nprevious version and introduced some features."),(0,r.kt)("h3",{id:"bugfix-list"},"Bugfix List"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Modification of Storage Fee Destination: Previously, storage fees were directed to the SP operator address.\nThis has been adjusted to the funding address, ensuring smoother transactions and fee collection."),(0,r.kt)("li",{parentName:"ul"},"Default SP Price Adjustment: To better reflect actual prices, the default prices in create_sp.json and payment.\nParam have been modified to align more closely with the current market rates."),(0,r.kt)("li",{parentName:"ul"},"Fixing List Group Error: A crucial fix has been made to the listGroup function to adapt it to the new indexing\nstructure of the group, which uses two levels of indexing."),(0,r.kt)("li",{parentName:"ul"},"Fixing CLI Bugs: We have addressed some command usage issues, such as those relating to update-group-member and\nput-policy, and improved the description of some commands.")),(0,r.kt)("h3",{id:"feature-list"},"Feature List"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Off-Chain-Auth Solution:  Implementing an off-chain-auth solution, which includes APIs for "request nonce",\n"update user key", and "verify off chain auth sig". This will greatly improve the user experience for Dapp users,\neliminating the need for repetitive wallet popups for signatures.'),(0,r.kt)("li",{parentName:"ul"},"Path-style API and Upload Progress API: Introducing support for the path-style API and a new query upload progress API."),(0,r.kt)("li",{parentName:"ul"},"Seal Object Metrics and Code Refinement: The TaskNode service now includes seal object metrics. We have also refined\nthe replicate task and added some DB logs."),(0,r.kt)("li",{parentName:"ul"},"Verify Permission API: The new verify permission API replaces the current chain interface, improving overall\nperformance and reducing latency."),(0,r.kt)("li",{parentName:"ul"},'Block Syncer TXHash & Juno Version Update: Updating the block syncer to add txhash info when exporting events.\nAdditionally, updating the Juno version to support the new "stop serving" feature and included the SP module and GC function.'),(0,r.kt)("li",{parentName:"ul"},"Metadata Block Syncer Schema Update & ListExpiredBucketsBySp: Updating the block syncer schema according to changes\non the chain and events. Also introducing a new method, ListExpiredBucketsBySp, to support GC operations within SP.")),(0,r.kt)("h2",{id:"greenfield-v010---the-initial-testnet-release"},"Greenfield v0.1.0 - The initial testnet release."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield/releases/tag/v0.1.0"},"Greenfield Blockchain v0.1.0")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-storage-provider/releases/tag/v0.1.0"},"Storage Provider v0.1.0"),"\nwas the first testnet version of BNB Greenfield. It represented a fundamental implementation of the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-whitepaper"},"Greenfield Whitepaper"),". "),(0,r.kt)("p",null,"This version contained a variety of functions, including payment, storage, storage provider,\ncross-chain, challenge, staking, and governance. It is an important milestone for BNB Greenfield,\nimplementing many core functions and laying the foundation for future development and improvement."),(0,r.kt)("h3",{id:"features-list"},"Features List"),(0,r.kt)("h4",{id:"account--balance--transaction"},"Account && Balance && Transaction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Users can create accounts and transfer BNB through Metamask or other EVM compatible wallets."),(0,r.kt)("li",{parentName:"ul"},"Users can grant permission to other users to spend their BNB as transaction fees.")),(0,r.kt)("h4",{id:"storage"},"Storage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Users can create and manage group, bucket, and object on Greenfield."),(0,r.kt)("li",{parentName:"ul"},"Users can upload files onto Greenfield in a decentralized way and download them anytime."),(0,r.kt)("li",{parentName:"ul"},"Users can upload private files onto Greenfield safely."),(0,r.kt)("li",{parentName:"ul"},"Users can grant permission to other users to access their files."),(0,r.kt)("li",{parentName:"ul"},"Users can grant permission to other users to manage their resources, including group, bucket, and object."),(0,r.kt)("li",{parentName:"ul"},"Users can pay for storage fees using BNB in a streaming manner."),(0,r.kt)("li",{parentName:"ul"},"If the storage provider provides poor service, users can challenge them.")),(0,r.kt)("h4",{id:"native-cross-chain-communication"},"Native Cross Chain Communication"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User can transfer BNB between BSC and Greenfield."),(0,r.kt)("li",{parentName:"ul"},"User can mirror Group, Bucket, Object to BSC as NFT."),(0,r.kt)("li",{parentName:"ul"},"User can manage Group, Bucket, Object on BSC through smart contract directly."),(0,r.kt)("li",{parentName:"ul"},"BSC developer can easily integrate Greenfield into their dApp through ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-contracts-sdk"},"SDK"),". ")),(0,r.kt)("h4",{id:"storage-provider"},"Storage Provider"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Storage Provider can register and update their information."),(0,r.kt)("li",{parentName:"ul"},"Storage Provider can update the storage price."),(0,r.kt)("li",{parentName:"ul"},"Storage Provider can garbage collect stale storage data on Testnet.")),(0,r.kt)("h4",{id:"validator-and-staking"},"Validator and Staking"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User can stake BNB to become a validator."),(0,r.kt)("li",{parentName:"ul"},"Validator update their information."),(0,r.kt)("li",{parentName:"ul"},"Validator can get part of revenue from storage fees."),(0,r.kt)("li",{parentName:"ul"},"Validator can take part in the governance of Greenfield.")))}p.isMDXComponent=!0}}]);