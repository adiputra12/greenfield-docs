"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[2127],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>f});var o=n(67294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,o,t=function(e,r){if(null==e)return{};var n,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=o.createContext({}),p=function(e){var r=o.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=p(e.components);return o.createElement(l.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=t,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return n?o.createElement(f,i(i({ref:r},d),{},{components:n})):o.createElement(f,i({ref:r},d))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[c]="string"==typeof e?e:t,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48120:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),t=(n(67294),n(3905));const a={title:"Permission Control",order:4},i="Permission Control",s={unversionedId:"guide/dapp/permisson-control",id:"guide/dapp/permisson-control",title:"Permission Control",description:"General Permission Control",source:"@site/docs/guide/dapp/permisson-control.md",sourceDirName:"guide/dapp",slug:"/guide/dapp/permisson-control",permalink:"/greenfield-docs/docs/guide/dapp/permisson-control",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/dapp/permisson-control.md",tags:[],version:"current",frontMatter:{title:"Permission Control",order:4},sidebar:"guideSidebar",previous:{title:"Contract SDK",permalink:"/greenfield-docs/docs/guide/dapp/dapp-integration"},next:{title:"Contract Entrypoint",permalink:"/greenfield-docs/docs/guide/dapp/contract-list"}},l={},p=[{value:"General Permission Control",id:"general-permission-control",level:2},{value:"Role based Permission Control",id:"role-based-permission-control",level:2}],d={toc:p},c="wrapper";function u(e){let{components:r,...n}=e;return(0,t.kt)(c,(0,o.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"permission-control"},"Permission Control"),(0,t.kt)("h2",{id:"general-permission-control"},"General Permission Control"),(0,t.kt)("p",null,"As all GNFD resources are mapped as ERC721 tokens, we fully reuse the ERC721 interface\nfor general permission management without introducing any additional complexity.\nFirst, let's understand the ERC721 interface for permission management:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-solidity"},'interface ERC721 {\n   /// @notice Change or reaffirm the approved address for an NFT\n   /// @dev The zero address indicates there is no approved address.\n   ///  Throws unless `msg.sender` is the current NFT owner, or an authorized\n   ///  operator of the current owner.\n   /// @param _approved The new approved NFT controller\n   /// @param _tokenId The NFT to approve\n   function approve(address _approved, uint256 _tokenId) external payable;\n\n   /// @notice Enable or disable approval for a third party ("operator") to manage\n   ///  all of `msg.sender`\'s assets\n   /// @dev Emits the ApprovalForAll event. The contract MUST allow\n   ///  multiple operators per owner.\n   /// @param _operator Address to add to the set of authorized operators\n   /// @param _approved True if the operator is approved, false to revoke approval\n   function setApprovalForAll(address _operator, bool _approved) external;\n\n   /// @notice Get the approved address for a single NFT\n   /// @dev Throws if `_tokenId` is not a valid NFT.\n   /// @param _tokenId The NFT to find the approved address for\n   /// @return The approved address for this NFT, or the zero address if there is none\n   function getApproved(uint256 _tokenId) external view returns (address);\n\n   /// @notice Query if an address is an authorized operator for another address\n   /// @param _owner The address that owns the NFTs\n   /// @param _operator The address that acts on behalf of the owner\n   /// @return True if `_operator` is an approved operator for `_owner`, false otherwise\n   function isApprovedForAll(address _owner, address _operator) external view returns (bool);\n   ...\n}\n')),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"ERC721")," provides two levels of permission control:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"TokenID")," level: ",(0,t.kt)("inlineCode",{parentName:"li"},"approve"),", ",(0,t.kt)("inlineCode",{parentName:"li"},"getApproved")," are used to control the permission of a specific token."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Owner")," level: ",(0,t.kt)("inlineCode",{parentName:"li"},"setApprovalForAll"),", ",(0,t.kt)("inlineCode",{parentName:"li"},"isApprovedForAll")," are used to control the permission of all tokens owned by an address.")),(0,t.kt)("p",null,"So is the permission control of GNFD resources. For example, if you want to grant the permission of a bucket to another account,\nyou can call ",(0,t.kt)("inlineCode",{parentName:"p"},"approve")," function of the ",(0,t.kt)("inlineCode",{parentName:"p"},"BucketHub")," contract. If you want to grant the permission of all buckets to an address,\nyou can call ",(0,t.kt)("inlineCode",{parentName:"p"},"setApprovalForAll")," function of the ",(0,t.kt)("inlineCode",{parentName:"p"},"BucketHub")," contract."),(0,t.kt)("h2",{id:"role-based-permission-control"},"Role based Permission Control"),(0,t.kt)("p",null,"As different operations can be performed on GNFD resources, some applications require permission control on the\ngranularity of operations, like grant other accounts to create bucket but not allow to delete bucket. This cannot\nbe achieved through the ERC721 token standard. Therefore,\nwe introduce the following interface for implementing permission control for each resource contract:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-solidity"},"\n/**\n * @dev Returns `true` if `account` has been granted `role` from `granter`.\n */\n function hasRole(bytes32 roleCode, address granter, address account) external view returns (bool);\n\n/**\n * @dev grant some authorization to an account\n *\n * @param account The address of the account to be granted\n * @param roleCode, the operation code, like create, update, delete, etc.\n * @param expireTime The expiration time of the authorization\n */\n function grant(address account, uint32 roleCode, uint256 expireTime) external;\n\n/**\n * @dev revoke some authorization from an account\n *\n * @param account The address of the account to be revoked\n * @param roleCode The authorization code\n */\n function revoke(address account, uint32 roleCode) external;\n")))}u.isMDXComponent=!0}}]);