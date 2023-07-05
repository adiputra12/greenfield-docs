"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[7408],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return t?a.createElement(h,i(i({ref:n},d),{},{components:t})):a.createElement(h,i({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},41242:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const o={title:"Primitive Interfaces",order:3},i="Primitive Interfaces",c={unversionedId:"guide/dapp/primitive-interface",id:"guide/dapp/primitive-interface",title:"Primitive Interfaces",description:"This document give a detailed introduction of cross-chain primitives that have been defined on BSC to enable developers to",source:"@site/docs/guide/dapp/primitive-interface.md",sourceDirName:"guide/dapp",slug:"/guide/dapp/primitive-interface",permalink:"/greenfield-docs/docs/guide/dapp/primitive-interface",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/dapp/primitive-interface.md",tags:[],version:"current",frontMatter:{title:"Primitive Interfaces",order:3},sidebar:"guideSidebar",previous:{title:"Quick Start",permalink:"/greenfield-docs/docs/guide/dapp/quick-start"},next:{title:"Contract SDK",permalink:"/greenfield-docs/docs/guide/dapp/dapp-integration"}},l={},s=[{value:"CallBack Handling",id:"callback-handling",level:2}],d={toc:s},u="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"primitive-interfaces"},"Primitive Interfaces"),(0,r.kt)("p",null,"This document give a detailed introduction of cross-chain primitives that have been defined on BSC to enable developers to\nmanage greenfield resources on the BSC directly."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-contracts"},"Greenfield-Contracts Repo")," is the underlying backbone of the\ncross chain communication protocol. It is responsible for implementing the core cross-chain communication functionality that\nenables seamless interaction between Greenfield and BSC networks. The library handles the complexities of\ncross-chain operations, ensuring secure and efficient communication."),(0,r.kt)("p",null,"During the development process, developers are most likely to interact with the following contracts: ",(0,r.kt)("inlineCode",{parentName:"p"},"CrossChain"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"BucketHub"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ObjectHub")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"GroupHub"),".\nThey provide the following interfaces respectively:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ICrossChain")),(0,r.kt)("p",null,"Additional fees need to be paid to the relayer during the cross-chain process, and the latest value can be obtained through the ",(0,r.kt)("inlineCode",{parentName:"p"},"CrossChain")," contract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"interface ICrossChain {\n    /** @dev Query relayFee and minAckRelayFee. \n     * @return relayFee, the fee required for the relayer to relay the package to GNFD.\n     * @return minAckRelayFee, the minimum fee required for the relayer to circulate the ACK package to BSC.\n     * The caller will need to pay no less than this [relayFee+minAckRelayFee] to send the cross-chain request.\n     */\n    function getRelayFees() external returns (uint256 relayFee, uint256 minAckRelayFee);\n\n    /** @dev Query the latest callback gas price.\n     * @return If the dapp contract has a callback function, the caller will need to pay extra [gas price * callback gas limit] fee \n     * when the caller send the initial cross-chain request.\n     */\n    function callbackGasPrice() external returns (uint256);\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IGroupHub")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"GroupHub")," contract provides the following interfaces to manage Group on BSC directly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"interface IGroupHub {\n    /** \n     * @dev  Query the contract address of group NFT\n     * @return The contract address of group token\n     * Each group will be mapped as a NFT on BSC. \n     * Group ID and NFT token ID are the same.\n     */\n    function ERC721Token() external view returns (address);\n   /** \n     * @dev  Query the contract address of member NFT\n     * @return The contract address of member token\n     * The member inside a group  will be mapped as a ERC1155 token on BSC. \n     * The ID of the ERC1155 token is same with the group ID.\n     */\n    function ERC1155Token() external view returns (address);\n\n   /**\n     * @dev create a group and send cross-chain request from BSC to GNFD\n     *\n     * @param creator The group's owner\n     * @param name The group's name\n     */\n    function createGroup(address creator, string memory name) external payable returns (bool);\n\n   /**\n     * @dev create a group and send cross-chain request from BSC to GNFD.\n     * Callback function will be called when the request is processed.\n     *\n     * @param creator The group's owner\n     * @param name The group's name\n     * @param callbackGasLimit The gas limit for callback function\n     * @param extraData Extra data for callback function. The `appAddress` in `extraData` will be ignored.\n     * It will be reset as the `msg.sender` all the time.\n     */\n    function createGroup(\n        address creator,\n        string memory name,\n        uint256 callbackGasLimit,\n        CmnStorage.ExtraData memory extraData\n    ) external payable returns (bool);\n\n    /**\n     * @dev delete a group and send cross-chain request from BSC to GNFD\n     *\n     * @param id The group's id\n     */\n    function deleteGroup(uint256 id) external payable returns (bool);\n\n    /**\n     * @dev delete a group and send cross-chain request from BSC to GNFD\n     * Callback function will be called when the request is processed.\n     *\n     * @param id The group's id\n     * @param callbackGasLimit The gas limit for callback function\n     * @param extraData Extra data for callback function. The `appAddress` in `extraData` will be ignored.\n     * It will be reset as the `msg.sender` all the time.\n     */\n    function deleteGroup(uint256 id, uint256 callbackGasLimit, CmnStorage.ExtraData memory extraData) external payable returns (bool);\n\n    /**\n     * @dev update a group's member and send cross-chain request from BSC to GNFD\n     *\n     * @param synPkg Package containing information of the group to be updated\n     */\n    function updateGroup(GroupStorage.UpdateGroupSynPackage memory synPkg) external payable returns (bool);\n\n    /**\n     * @dev update a group's member and send cross-chain request from BSC to GNFD\n     * Callback function will be called when the request is processed.\n     *\n     * @param synPkg Package containing information of the group to be updated\n     * @param callbackGasLimit The gas limit for callback function\n     * @param extraData Extra data for callback function. The `appAddress` in `extraData` will be ignored.\n     * It will be reset as the `msg.sender` all the time.\n     */\n    function updateGroup(\n        GroupStorage.UpdateGroupSynPackage memory synPkg,\n        uint256 callbackGasLimit,\n        CmnStorage.ExtraData memory extraData\n    ) external payable returns (bool);\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IBucketHub")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"BucketHub")," contract provides the following interfaces to manage bucket on BSC directly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"interface IBucketHub {\n   /** \n     * @dev  Query the contract address of bucket NFT\n     * @return The contract address of bucket token\n     * Each bucket will be mapped as a NFT on BSC. \n     * Bucket ID and NFT token ID are the same.\n     */\n    function ERC721Token() external view returns (address);\n\n    /**\n     * @dev create a bucket and send cross-chain request from BSC to GNFD\n     *\n     * @param synPkg Package containing information of the bucket to be created\n     */\n    function createBucket(BucketStorage.CreateBucketSynPackage memory synPkg) external payable returns (bool);\n\n     /**\n     * @dev create a bucket and send cross-chain request from BSC to GNFD.\n     * Callback function will be called when the request is processed.\n     *\n     * @param synPkg Package containing information of the bucket to be created\n     * @param callbackGasLimit The gas limit for callback function\n     * @param extraData Extra data for callback function. The `appAddress` in `extraData` will be ignored.\n     * It will be reset as the `msg.sender` all the time.\n     */\n    function createBucket(\n        BucketStorage.CreateBucketSynPackage memory synPkg,\n        uint256 callbackGasLimit,\n        CmnStorage.ExtraData memory extraData\n    ) external payable returns (bool);\n\n   /**\n     * @dev delete a bucket and send cross-chain request from BSC to GNFD\n     *\n     * @param id The bucket's id\n     */\n    function deleteBucket(uint256 id) external payable returns (bool);\n\n   /**\n     * @dev delete a bucket and send cross-chain request from BSC to GNFD.\n     * Callback function will be called when the request is processed.\n     *\n     * @param id The bucket's id\n     * @param callbackGasLimit The gas limit for callback function\n     * @param extraData Extra data for callback function. The `appAddress` in `extraData` will be ignored.\n     * It will be reset as the `msg.sender` all the time.\n     */\n    function deleteBucket(uint256 id, uint256 callbackGasLimit, CmnStorage.ExtraData memory extraData) external payable returns (bool);\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IObjectHub")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ObjectHub")," contract provides the following interfaces to manage object on BSC directly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"interface IObjectHub {\n    /** \n     * @dev  Query the contract address of object NFT\n     * @return The contract address of object token\n     * Each object will be mapped as a NFT on BSC. \n     * Object ID and NFT token ID are the same.\n     */\n    function ERC721Token() external view returns (address);\n\n   /**\n    * @dev delete a object and send cross-chain request from BSC to GNFD\n    *\n    * @param id, the Id of the object\n    */\n    function deleteObject(uint256 id) external payable returns (bool);\n   /**\n    * @dev delete a object and send cross-chain request from BSC to GNFD\n    * Callback function will be called when the request is processed\n    *\n    * @param id, the Id of the object\n    * @param callbackGasLimit The gas limit for callback function\n    * @param extraData Extra data for callback function. The `appAddress` in `extraData` will be ignored.\n    * It will be reset as the `msg.sender` all the time\n    */\n    function deleteObject(uint256 id, uint256 callbackGasLimit, CmnStorage.ExtraData memory extraData) external payable returns (bool);\n}\n")),(0,r.kt)("h2",{id:"callback-handling"},"CallBack Handling"),(0,r.kt)("p",null,"BSC dApps, i.e. smart contracts on BSC, are allowed to implement their own logic to handle ACK and FAIL_ACK packages.\nThe smart contracts can register callback functions to handle the ACK packages.\nTo avoid consuming too much gas in callbacks, a gas limitation estimation should be done by the smart contracts that register\nthe callbacks."),(0,r.kt)("p",null,"Errors and failures can occur during cross-chain communication. BSC dApps can handle these by retrying the package with\na higher gas limit, skipping the package to tolerate failure, or upgrading their contract to handle corner cases."),(0,r.kt)("p",null,"The following are the interfaces for dapps to handle failures:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"}," // retry the first failed package in the queue\n function retryPackage() external;\n // skip the first failed package in the queue\n function skipPackage() external;\n")))}p.isMDXComponent=!0}}]);