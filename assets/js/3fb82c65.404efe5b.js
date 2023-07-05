"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[1887],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"Cross Chain",order:5},o=void 0,l={unversionedId:"guide/greenfield-blockchain/modules/cross-chain",id:"guide/greenfield-blockchain/modules/cross-chain",title:"Cross Chain",description:"Pre-requisite Readings",source:"@site/docs/guide/greenfield-blockchain/modules/cross-chain.md",sourceDirName:"guide/greenfield-blockchain/modules",slug:"/guide/greenfield-blockchain/modules/cross-chain",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/modules/cross-chain",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/greenfield-blockchain/modules/cross-chain.md",tags:[],version:"current",frontMatter:{title:"Cross Chain",order:5},sidebar:"guideSidebar",previous:{title:"Permission",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/modules/permission"},next:{title:"Consensus and Staking",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/modules/consensus-and-staking"}},s={},c=[{value:"Communication Layer",id:"communication-layer",level:2},{value:"Vote Poll",id:"vote-poll",level:3},{value:"Channel and Sequence",id:"channel-and-sequence",level:3},{value:"Reliability Protocol",id:"reliability-protocol",level:3},{value:"Validator Update",id:"validator-update",level:3},{value:"Economic",id:"economic",level:3},{value:"Fee and Reward of Cross-Chain Packages",id:"fee-and-reward-of-cross-chain-packages",level:4},{value:"Race to Deliver Cross-Chain Packages",id:"race-to-deliver-cross-chain-packages",level:4},{value:"Callbacks and Limited Gas",id:"callbacks-and-limited-gas",level:4},{value:"Resource Mirror Layer",id:"resource-mirror-layer",level:2},{value:"Resource Entity Mirror",id:"resource-entity-mirror",level:3},{value:"Cross-Chain Operating Primitives",id:"cross-chain-operating-primitives",level:3}],p={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("h4",{parentName:"admonition",id:"pre-requisite-readings"},"Pre-requisite Readings"),(0,r.kt)("p",{parentName:"admonition"},"The Greenfield ecosystem consists of three distinct layers. To have more information about them\nwe invite you to read ",(0,r.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/concept/programmability#framework"},"this page"),".")),(0,r.kt)("h2",{id:"communication-layer"},"Communication Layer"),(0,r.kt)("p",null,"The communication layer is composed of a set of ",(0,r.kt)("strong",{parentName:"p"},"Greenfield Relayers"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Each validator should run a relayer. Each relayer possesses a BLS\nprivate key, with the address of the key stored on-chain as part\nof the validator's mandatory information.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'The relayer watches all cross-chain events happen on BSC and the\nGreenfield blockchain independently. Once a sufficient number of blocks\nhave been confirmed to reach finality, the relayer will sign a message\nusing the BLS key to confirm the events. This signed message is called the "vote".\nThe relayer will then broadcast the vote through a p2p network to other relayers.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Once enough votes from the relayer are collected, the relayer will\nassemble a cross-chain package transaction and submit it to BSC or\nGreenfield network."))),(0,r.kt)("p",null,"Here more details about the communication layer and economics will be explained."),(0,r.kt)("h3",{id:"vote-poll"},"Vote Poll"),(0,r.kt)("p",null,"A new p2p communication across the cross-chain relayers is\nintroduced, called ",(0,r.kt)("inlineCode",{parentName:"p"},"Vote Poll"),". This ",(0,r.kt)("inlineCode",{parentName:"p"},"Vote Poll")," will gossip about the\nsigned votes within the network. To avoid message flooding, all the\nsigned votes will expire after a fixed time. The Greenfield relayers can\neither put votes to or fetch votes from the poll and assemble it as\ncross-chain package transactions."),(0,r.kt)("h3",{id:"channel-and-sequence"},"Channel and Sequence"),(0,r.kt)("p",null,'To allow multiplexing and replay attack resistance, "Channel" and\n"Sequence" concepts are introduced to manage any type of communication.\nThe following type is an example of a definition:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Package struct {\n    PackType     uint8 // SYN, ACK or FAIL_ACK\n    SrcChainId   uint16\n    DstChainId   uint16\n    Sequence     int64\n    ChannelId    uint16\n    Payload      []byte\n    BLSSignature sdk.Sig\n    BLSBits      sdk.Bits // indicate the signer of the package\n}\n")),(0,r.kt)("p",null,"The packages in the same channel must be processed in sequence, while\nthey can be processed in parallel if they belong to different channels."),(0,r.kt)("p",null,"The operation messages on different Greenfield resources are mapped to\ndifferent channels. For example, buckets and storage objects belong to\ndifferent channels."),(0,r.kt)("h3",{id:"reliability-protocol"},"Reliability Protocol"),(0,r.kt)("p",null,"A protocol is defined to ensure reliable stream delivery of data\nbetween BSC and Greenfield."),(0,r.kt)("p",null,"The protocol must recover the scenarios when the cross-chain data is\ndamaged, duplicated, or delivered out of order by the relayers. It\nassigns a sequence number to each package and requires a positive\nacknowledgment (",(0,r.kt)("inlineCode",{parentName:"p"},"ACK"),") from the target chain. Here there are three kinds\nof packages:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"SYN"),": the initial cross-chain packages started by either users or dApps.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ACK"),": the positive acknowledgment sent by the resource layer of the\ntarget chain.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"FAIL_ACK"),": the negative acknowledgment sent by the communication\nlayer of the target chain, usually caused by damaged data or\nprotocol inconsistency triggered by the edge case."))),(0,r.kt)("p",null,"Each communication package must start with ",(0,r.kt)("inlineCode",{parentName:"p"},"SYN")," and end with ",(0,r.kt)("inlineCode",{parentName:"p"},"ACK")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"FAIL_ACK"),"."),(0,r.kt)("h3",{id:"validator-update"},"Validator Update"),(0,r.kt)("p",null,"With an aggregatable multi-signature scheme, e.g. BLS, the cross-chain\ncan be quite light-weighted. However, sufficient data must be appended\nonto the package to indicate the validators who sign the events, this\ncan be achieved by combining a bitmap and a validator set on-chain.\nHowever, the Greenfield validator set is volatile, Greenfield validators\nhave to sync the information to BSC once there is an update about the\nGreenfield validator set. This is implemented by building a Greenfield\nlight client on BSC, which is similar to the light client implemented\nfor BNB Beacon Chain on BSC."),(0,r.kt)("h3",{id:"economic"},"Economic"),(0,r.kt)("p",null,"The Greenfield relayers play an important role in relaying inter-chain\npackages. A proper incentive is introduced to keep relayers making their\nlong-term contribution."),(0,r.kt)("h4",{id:"fee-and-reward-of-cross-chain-packages"},"Fee and Reward of Cross-Chain Packages"),(0,r.kt)("p",null,"Both ",(0,r.kt)("inlineCode",{parentName:"p"},"SYN")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ACK"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"FAIL_ACK")," packages cost gas to relay, the users (or\nsmart contracts) will need to pay the fee to cover both of them when\nthey start the ",(0,r.kt)("inlineCode",{parentName:"p"},"SYN")," cross-chain packages."),(0,r.kt)("p",null,"To encourage Greenfield relayers to sign cross-chain packages:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The package deliverer will get a fixed ratio of the relay fee as a reward.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The rest relay fee will be distributed equally among those who sign the vote."))),(0,r.kt)("h4",{id:"race-to-deliver-cross-chain-packages"},"Race to Deliver Cross-Chain Packages"),(0,r.kt)("p",null,"There are multiple Greenfield relayers, and they may compete to submit\nthe aggregated multi-signed packages onto the Greenfield blockchain and\nBSC. To avoid racing transactions caused by the competition, which\nwastes gas, the relayers are rotated to relay transactions, e.g. taking\nshifts every 10 minutes. Each cross-chain package gets a timestamp, if\nit is not relayed within a limited delay when the designated relayer\ndoesn't perform the duty, any other Greenfield relayers are allowed to\nrelay such a package."),(0,r.kt)("h4",{id:"callbacks-and-limited-gas"},"Callbacks and Limited Gas"),(0,r.kt)("p",null,"BSC dApps, i.e. smart contracts on BSC, are allowed to implement their\nown logic to handle ",(0,r.kt)("inlineCode",{parentName:"p"},"ACK")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"FAIL_ACK")," packages. The smart contracts can\nregister callback functions to handle the ",(0,r.kt)("inlineCode",{parentName:"p"},"ACK")," packages. As it is\nimpossible for the cross-chain infrastructure to predict the gas\nconsumption of the callback, a gas limitation estimate should be defined\nfrom the smart contracts that register the callbacks."),(0,r.kt)("p",null,"For any cross-chain packages that start from BSC, the smart contract\nneeds to specify the gas limitation for the ",(0,r.kt)("inlineCode",{parentName:"p"},"ACK")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"FAIL_ACK")," package, the\nrelayer fee is prepaid accordingly on BSC. Relayers may refund the\nexcessive fees later."),(0,r.kt)("h2",{id:"resource-mirror-layer"},"Resource Mirror Layer"),(0,r.kt)("h3",{id:"resource-entity-mirror"},"Resource Entity Mirror"),(0,r.kt)("p",null,"The purposes of almost all the cross-chain packages are to change the\nstate of the resource entities on the Greenfield blockchain. Thus, the\nbelow resource entities should be able to be mirrored on BSC: Account, BNB, Bucket, Object and Group."),(0,r.kt)("p",null,"The account mapping is natural as BSC and Greenfield use the same\naddress scheme. The same address values on both sides mean that it is the same\naccount. They do not require an actual mirror."),(0,r.kt)("p",null,"BNB is a natively pegged token from the genesis of Greenfield. The\n",(0,r.kt)("inlineCode",{parentName:"p"},"Token Hub")," contract is a smart contract built on BSC to ensure\nthat Greenfield cannot inflate BNB and secure the total circulation of\nBNB."),(0,r.kt)("p",null,"Bucket, Object, and Group are mirrored onto BSC as NFTs of a new BEP\nrevised from the ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-721"},"ERC-721")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1155"},"ERC-1155")," standard.\nThese NFTs have corresponding metadata information for the resources.\nThe ownerships of the NFTs on BSC stand for the ownerships of these\nresources on Greenfield. As these ownerships are not transferable on\nGreenfield, these NFTs are not transferable on BSC."),(0,r.kt)("p",null,"To avoid state racing, the following rules are introduced:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Any resources that are initiated to create by BSC can only be controlled by BSC;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Any resources that are controlled by BSC can not transfer control rights to Greenfield;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Any resources that are controlled by Greenfield can transfer control rights to BSC."))),(0,r.kt)("h3",{id:"cross-chain-operating-primitives"},"Cross-Chain Operating Primitives"),(0,r.kt)("p",null,"A few series of cross-chain primitives are defined for dApps to call to\noperate on these resource entities."),(0,r.kt)("p",null,"It is worth highlighting that smart contracts can call these primitives\nin a similar way as EOAs."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Accounts"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"create payment accounts on BSC")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BNB"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"transfer BNB bidirectionally between BSC and Greenfield")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Bucket"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"create a bucket on BSC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"mirror bucket from Greenfield to BSC"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Object"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"mirror object from Greenfield to BSC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"create an object on BSC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"grant/revoke permissions of objects on BSC to accounts/groups")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"copy objects on BSC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Kick off the execution of an object on BSC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"associate buckets to payment accounts on BSC"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Group"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"mirror group from Greenfield to BSC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"create a group on BSC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"change group members on BSC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"leave a group on BSC"))),(0,r.kt)("p",null,"Once these primitives are called by an EOA or smart contracts, the\npredefined events will be emitted. Greenfield Relayers should pick up\nthese events and relay them over to Greenfield. As the change\nwill happen asynchronously, there will be specific cross-chain packages\nfor acknowledgments or errors, which can trigger a callback. The caller\nof the primitives should pay the fees upfront for cross-chain operations\nand also for the potential callback."))}h.isMDXComponent=!0}}]);