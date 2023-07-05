"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[2584],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),h=o,m=c["".concat(d,".").concat(h)]||c[h]||u[h]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},49727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={title:"Interact with Greenfield",order:4},i="Interact with Greenfield",l={unversionedId:"guide/getting-started/interact-with-greenfield",id:"guide/getting-started/interact-with-greenfield",title:"Interact with Greenfield",description:"With tBNBs on Greenfield Testnet, you can interact with Greenfield, and start your decentralized data journey.",source:"@site/docs/guide/getting-started/interact-with-greenfield.md",sourceDirName:"guide/getting-started",slug:"/guide/getting-started/interact-with-greenfield",permalink:"/greenfield-docs/docs/guide/getting-started/interact-with-greenfield",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/getting-started/interact-with-greenfield.md",tags:[],version:"current",frontMatter:{title:"Interact with Greenfield",order:4},sidebar:"guideSidebar",previous:{title:"Getting Test BNB",permalink:"/greenfield-docs/docs/guide/getting-started/get-test-bnb"},next:{title:"Accounts",permalink:"/greenfield-docs/docs/guide/concept/accounts"}},d={},s=[{value:"DCellar",id:"dcellar",level:2},{value:"Greenfield Command",id:"greenfield-command",level:2},{value:"Command Tool Guide",id:"command-tool-guide",level:3},{value:"Basic Operations",id:"basic-operations",level:3},{value:"Keystore Operations",id:"keystore-operations",level:3},{value:"SP Operations",id:"sp-operations",level:4},{value:"Bucket Operation",id:"bucket-operation",level:4},{value:"Upload/Download Files",id:"uploaddownload-files",level:4},{value:"Group Operation",id:"group-operation",level:4},{value:"Policy Operation",id:"policy-operation",level:4},{value:"SDK",id:"sdk",level:2}],p={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interact-with-greenfield"},"Interact with Greenfield"),(0,o.kt)("p",null,"With tBNBs on Greenfield Testnet, you can interact with Greenfield, and start your decentralized data journey."),(0,o.kt)("h2",{id:"dcellar"},"DCellar"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://dcellar.io"},"DCellar")," is a file management tool and an ultimate client for Greenfield, which is developed by\nour community member ",(0,o.kt)("a",{parentName:"p",href:"https://nodereal.io/"},"Nodereal"),". With DCellar, you can store and manage your files in a\ndecentralized way, fully control your data, and even make profits out of them. Meanwhile, you can also use DCellar to\nmanage your account, balance and billings."),(0,o.kt)("h2",{id:"greenfield-command"},"Greenfield Command"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-cmd"},"Greenfield Command")," is a powerful command line to interact with Greenfield,\nby which you can manage your resources on Greenfield."),(0,o.kt)("h3",{id:"command-tool-guide"},"Command Tool Guide"),(0,o.kt)("p",null,"This command tool supports basic storage functions, including creating buckets, uploading and downloading files, and deleting resources.\nIt also supports related operations such as groups, policy, banks, and so on. To make the command display clearer, commands of different categories are implemented as subcommands of different categories. You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"gnfd-cmd -h")," to view the supported command categories."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'cd greenfield-cmd/build\n# show cmd help info\n./gnfd-cmd -h\n\nNAME:\n   gnfd-cmd - cmd tool for supporting making request to greenfield\n\nUSAGE:\n   gnfd-cmd [global options] command [command options] [arguments...]\n\nCOMMANDS:\n   bucket           support the bucket operation functions, including create/update/delete/head/list and so on\n   object           support the object operation functions, including put/get/update/delete/head/list and so on\n   group            support the group operation functions, including create/update/delete/head/head-member/mirror\n   bank             support the bank functions, including transfer in greenfield and query balance\n   policy           support object,bucket and group policy operation functions\n   payment-account  support the payment account operation functions\n   sp               support the storage provider operation functions\n   keystore         support the keystore operation functions\n   help, h          Shows a list of commands or help for one command\n\nGLOBAL OPTIONS:\n   --chainId value                 greenfield chainId\n   --config FILE, -c FILE          Load configuration from FILE\n   --help, -h                      show help (default: false)\n   --home value                    directory for config and keystore (default: "/Users/zhaoyu/.gnfd-cmd")\n   --host value                    host name of request\n   --keystore value, -k value      keystore file path\n   --passwordfile value, -p value  password file for encrypting and decoding the private key\n   --rpcAddr value                 greenfield chain client rpc address\n')),(0,o.kt)("p",null,"The command tool supports the ",(0,o.kt)("inlineCode",{parentName:"p"},"--home")," option to specify the path of the config file and the keystore, the default path is a directory called ",(0,o.kt)("inlineCode",{parentName:"p"},".gnfd-cmd")," under the home directory of the system.\nWhen running commands that interact with the greenfield, if there is no config/config.toml file under the path and the commands runs without ",(0,o.kt)("inlineCode",{parentName:"p"},"--config")," flag, the tool will generate the config/config.toml file automatically which is consistent with the testnet configuration under the path."),(0,o.kt)("p",null,"Below is an example of the config file. The rpcAddr and chainId should be consistent with the Greenfield network.\nFor Greenfield Testnet, you can refer to ",(0,o.kt)("a",{parentName:"p",href:"https://greenfield.bnbchain.org/docs/guide/resources.html#rpc-endpoints"},"Greenfield Testnet RPC Endpoints"),".\nThe rpcAddr indicates the Tendermint RPC address with the port info."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'rpcAddr = "https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443"\nchainId = "greenfield_5600-1"\n')),(0,o.kt)("p",null,"The command has the ability to intelligently select the correct storage provider to respond to the request. The user only needs to set the storage provider operator-address if they want to create a bucket on a specific SP. For example, the user can run ",(0,o.kt)("inlineCode",{parentName:"p"},"gnfd-cmd storage put test gnfd://bucket1/object1")," to upload a file to bucket1 and then run ",(0,o.kt)("inlineCode",{parentName:"p"},"gnfd-cmd storage put test gnfd://bucket2/object")," to upload a file to bucket2, which is stored on another SP without changing the config."),(0,o.kt)("h3",{id:"basic-operations"},"Basic Operations"),(0,o.kt)("h3",{id:"keystore-operations"},"Keystore Operations"),(0,o.kt)("p",null,"Before using the rich features of the command tool, you need to generate a keystore file by following the steps below. All the other commands need to load the keystore content before running."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Export your private key from MetaMask and write it into a local file as plaintext (You can select "Account Details" from the dropdown menu of MetaMask. Click on the ',(0,o.kt)("inlineCode",{parentName:"li"},"Export Private Key")," button at the bottom of the page.)"),(0,o.kt)("li",{parentName:"ol"},'Generate a keystore by the "keystore generate" command. The ',(0,o.kt)("inlineCode",{parentName:"li"},"--privKeyFile")," flag is used to set the private key file path, which is created by step 1."),(0,o.kt)("li",{parentName:"ol"},"The terminal will prompt user to enter the password information. After the terminal obtains user's password information, the password file will store in the path ",(0,o.kt)("inlineCode",{parentName:"li"},"keystore/password/password.txt"),' under the home directory of the system or the directory set by "-home". Users can also specify the password file path by using the ',(0,o.kt)("inlineCode",{parentName:"li"},"--passwordfile"),".")),(0,o.kt)("p",null,"The following command can be used to generate a keystore file :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gnfd-cmd keystore generate --privKeyFile key.txt\n")),(0,o.kt)("p",null,"The keystore will be generated in the path ",(0,o.kt)("inlineCode",{parentName:"p"},"keystore/key.json")," under the home directory of the system or the directory set by ",(0,o.kt)("inlineCode",{parentName:"p"},"--home"),".\nAnd it is also the path to load keystore when running other commands."),(0,o.kt)("p",null,"Users can use ",(0,o.kt)("inlineCode",{parentName:"p"},"keystore inspect")," to display the keystore information include publicKey, address and privateKey."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# display the keystore info\ngnfd-cmd keystore inspect --privateKey true\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Delete the private key file which is created in step 1. It is not needed after the keystore has been generated.")),(0,o.kt)("h4",{id:"sp-operations"},"SP Operations"),(0,o.kt)("p",null,"Before making a bucket and uploading files, we need to select a storage provider to store the files in the bucket. By executing the following command, we can obtain a list of storage providers on Greenfield."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gnfd-cmd sp ls\n\nSP list:\nsp[0]: operator-address: 0x22804504786F44289D4156E7317142e25B92c00e, endpoint: https://gnfd-testnet-sp-2.bnbchain.org, Status: STATUS_IN_SERVICE\nsp[1]: operator-address: 0x3CFC8b2095DA8F0722412Dc16f8A067942d2c697, endpoint: https://gnfd-testnet-sp-6.bnbchain.org, Status: STATUS_IN_SERVICE\nsp[2]: operator-address: 0x5E340C0721bD5f49627e7E34eb94bedfA575E993, endpoint: https://gnfd-testnet-sp-4.bnbchain.org, Status: STATUS_IN_SERVICE\nsp[3]: operator-address: 0x7715d0680fE84cA6d7eaEF6e8A7CAcE29a4C0064, endpoint: https://gnfd-testnet-sp-1.bnbchain.org, Status: STATUS_IN_SERVICE\nsp[4]: operator-address: 0xa3ac8c0999b73f028122CE609e318c7da09cb752, endpoint: https://gnfd-testnet-sp-1.nodereal.io,  Status: STATUS_IN_SERVICE\nsp[5]: operator-address: 0xB573F5c174f33aF0CA033c8A287061C1538fb130, endpoint: https://gnfd-testnet-sp-7.bnbchain.org, Status: STATUS_IN_SERVICE\nsp[6]: operator-address: 0xC6fA3F3640e3b594335efAb349abdD4A82C83736, endpoint: https://gnfd-testnet-sp-5.bnbchain.org, Status: STATUS_IN_SERVICE\nsp[7]: operator-address: 0xE42B5AD90AfF1e8Ad90F76e02541A71Ca9D41A11, endpoint: https://gnfd-testnet-sp-3.bnbchain.org, Status: STATUS_IN_SERVICE\n")),(0,o.kt)("p",null,"And the Users can obtain detailed information about a certain SP by ",(0,o.kt)("inlineCode",{parentName:"p"},"sp head")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"sp get-price")," commands.\nHere is an example of obtaining information about an SP with endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"https://gnfd-testnet-sp-1.nodereal.io"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# get storage provider info\ngnfd-cmd sp head https://gnfd-testnet-sp-1.nodereal.io\n\n# get quota and storage price of storage provider:\ngnfd-cmd sp get-price https://gnfd-testnet-sp-1.nodereal.io\n")),(0,o.kt)("p",null,"You can take note of the operator-address information for the storage provider to which is intended to be uploaded. This parameter will be required for making the bucket in the next step."),(0,o.kt)("h4",{id:"bucket-operation"},"Bucket Operation"),(0,o.kt)("p",null,"You can run ",(0,o.kt)("inlineCode",{parentName:"p"},"./gnfd-cmd bucket -h")," to get help of the bucket operations."),(0,o.kt)("p",null,"The below command can be used to create a new bucket called testbucket:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gnfd-cmd bucket create gnfd://testbucket\n")),(0,o.kt)("p",null,"The command supports ",(0,o.kt)("inlineCode",{parentName:"p"},"--primarySP")," flag to select the storage provider on which you want to create a bucket. The content of the flag should be the operator address of the storage provider. If this value is not set, the first SP in the storage provider list will be selected as the upload target by default."),(0,o.kt)("p",null,"The user can update the bucket meta by the ",(0,o.kt)("inlineCode",{parentName:"p"},"bucket update")," command. It supports updating bucket visibility, charged quota, or payment address."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# update bucket charged quota \ngnfd-cmd bucket update --chargedQuota 50000 gnfd://testbucket\n# update bucket visibility\ngnfd-cmd bucket update --visibility=public-read gnfd://testbucket\n")),(0,o.kt)("p",null,"The user can use list the buckets which belong to him with ",(0,o.kt)("inlineCode",{parentName:"p"},"bucket ls")," commands."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gnfd-cmd bucket ls\n")),(0,o.kt)("h4",{id:"uploaddownload-files"},"Upload/Download Files"),(0,o.kt)("p",null,"(1) Put Object"),(0,o.kt)("p",null,"The user can upload the local file to the bucket by the ",(0,o.kt)("inlineCode",{parentName:"p"},"object put")," command. The following command example uploads an object named ",(0,o.kt)("inlineCode",{parentName:"p"},"testobject")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"testbucket")," bucket. The file payload for the upload is read from the local file indicated by ",(0,o.kt)("inlineCode",{parentName:"p"},"file-path"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'gnfd-cmd object put --contentType "text/xml" file-path gnfd://testbucket/testobject\n')),(0,o.kt)("p",null,"If the object name has not been set, the command will use the file name as object name. After the command is executed, it will send createObject txn to the chain and uploads the payload of the object to the storage provider.\nThe command will return the uploading info after the object have been sealed."),(0,o.kt)("p",null,"(2) Download Object"),(0,o.kt)("p",null,"The user can download the object into the local file by the ",(0,o.kt)("inlineCode",{parentName:"p"},"object get")," command. The following command example downloads ",(0,o.kt)("inlineCode",{parentName:"p"},"testobject")," from 'testbucket' to the local ",(0,o.kt)("inlineCode",{parentName:"p"},"file-path")," and prints the length of the downloaded file.\nThe filepath can be a specific file path, a directory path, or not set at all. If the file-path is not set, the command will download the content to a file with the same name as the object name in the current directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gnfd-cmd object get gnfd://testbucket/testobject file-path\n")),(0,o.kt)("p",null,"After the command is executed, it will send a download request to the storage provider and download the object."),(0,o.kt)("p",null,"(3) List Object & Delete Object"),(0,o.kt)("p",null,"The user can use list the objects of the specific bucket with ",(0,o.kt)("inlineCode",{parentName:"p"},"object ls")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gnfd-cmd object ls gnfd://testbucket\n")),(0,o.kt)("p",null,'The user can delete the object with "object delete" command:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gnfd-cmd object delete gnfd://testbucket/testobject\n")),(0,o.kt)("h4",{id:"group-operation"},"Group Operation"),(0,o.kt)("p",null,"Users can run ",(0,o.kt)("inlineCode",{parentName:"p"},"./gnfd-cmd group -h")," to get help of group operations."),(0,o.kt)("p",null,"The user can create a new group by the ",(0,o.kt)("inlineCode",{parentName:"p"},"group create")," command. Note that this command can set the initialized group member through the ",(0,o.kt)("inlineCode",{parentName:"p"},"--initMembers")," parameter. After the command executes successfully, the group ID and transaction hash information will be returned."),(0,o.kt)("p",null,"You can add or remove members from a group using the ",(0,o.kt)("inlineCode",{parentName:"p"},"group update")," command. The user can use ",(0,o.kt)("inlineCode",{parentName:"p"},"--addMembers")," to specify the addresses of the members to be added or ",(0,o.kt)("inlineCode",{parentName:"p"},"--removeMembers")," to specify the addresses of the members to be removed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# create group\ngnfd-cmd group create gnfd://testGroup\n# update member\ngnfd-cmd group update --groupOwner 0x.. --addMembers 0x.. gnfd://testGroup\n")),(0,o.kt)("h4",{id:"policy-operation"},"Policy Operation"),(0,o.kt)("p",null,"Users can run ",(0,o.kt)("inlineCode",{parentName:"p"},"./gnfd-cmd policy -h")," to get help of permission operations."),(0,o.kt)("p",null,"Users can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"put")," command to assign resource permissions to other accounts or groups (called principal), such as the permission to delete objects. After the command executes successfully, the object policy information of the principal will be returned. The principal is set by ",(0,o.kt)("inlineCode",{parentName:"p"},"--groupId")," which indicates the group or ",(0,o.kt)("inlineCode",{parentName:"p"},"--grantee")," which indicates the account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# put object policy\ngnfd-cmd policy put --groupId 11 --actions get,delete grn:o::gnfd-bucket/gnfd-object\n\n# put bucket policy\ngnfd-cmd policy put --grantee 0x.. --actions delete  grn:b::gnfd-bucket\n")),(0,o.kt)("p",null,"In addition to the basic commands mentioned above, the Greenfield Command also supports functions such as transferring tokens and payment account operations. You can find more examples in the readme file of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-cmd"},"Greenfield Command"),"."),(0,o.kt)("h2",{id:"sdk"},"SDK"),(0,o.kt)("p",null,"If you are a developer, you can build your projects and interact with Greenfield base on SDK, here are several resources you can refer to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-go-sdk"},"Greenfield Go SDK")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-js-sdk"},"Greenfield JS SDK")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/dapp/overview"},"Build dApps"))))}u.isMDXComponent=!0}}]);