/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PoolyChibiStorage,
  PoolyChibiStorageInterface,
  ERC721Storage,
} from "../PoolyChibiStorage";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_svgRender_",
        type: "address",
      },
      {
        internalType: "address",
        name: "_traitsFetch_",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "image",
            type: "string",
          },
          {
            internalType: "string",
            name: "externalLink",
            type: "string",
          },
          {
            internalType: "string",
            name: "sellerFeeBasisPoints",
            type: "string",
          },
          {
            internalType: "string",
            name: "feeRecipient",
            type: "string",
          },
        ],
        internalType: "struct ERC721Storage.ContractURI",
        name: "_contractURI_",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "image",
            type: "string",
          },
          {
            internalType: "string",
            name: "externalLink",
            type: "string",
          },
          {
            internalType: "string",
            name: "sellerFeeBasisPoints",
            type: "string",
          },
          {
            internalType: "string",
            name: "feeRecipient",
            type: "string",
          },
        ],
        indexed: false,
        internalType: "struct ERC721Storage.ContractURI",
        name: "contractURI",
        type: "tuple",
      },
    ],
    name: "ContractURIUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "svgRender",
        type: "address",
      },
    ],
    name: "SvgRenderUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "traitsFetch",
        type: "address",
      },
    ],
    name: "TraitsFetchUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "constructContractURI",
    outputs: [
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "input0",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "input1",
        type: "bytes",
      },
    ],
    name: "constructTokenURI",
    outputs: [
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getContractDescription",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "image",
            type: "string",
          },
          {
            internalType: "string",
            name: "externalLink",
            type: "string",
          },
          {
            internalType: "string",
            name: "sellerFeeBasisPoints",
            type: "string",
          },
          {
            internalType: "string",
            name: "feeRecipient",
            type: "string",
          },
        ],
        internalType: "struct ERC721Storage.ContractURI",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSvgRender",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTraitsFetch",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "input",
        type: "bytes",
      },
    ],
    name: "preview",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "image",
            type: "string",
          },
          {
            internalType: "string",
            name: "externalLink",
            type: "string",
          },
          {
            internalType: "string",
            name: "sellerFeeBasisPoints",
            type: "string",
          },
          {
            internalType: "string",
            name: "feeRecipient",
            type: "string",
          },
        ],
        internalType: "struct ERC721Storage.ContractURI",
        name: "contractURI",
        type: "tuple",
      },
    ],
    name: "setContractURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "svgRender",
        type: "address",
      },
    ],
    name: "setSvgRender",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "traitsFetch",
        type: "address",
      },
    ],
    name: "setTraitsFetch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001cea38038062001cea833981016040819052620000349162000280565b82828262000042336200010a565b600180546001600160a01b038086166001600160a01b03199283161790925560028054928516929091169190911790558051819060039081906200008790826200046e565b50602082015160018201906200009e90826200046e565b5060408201516002820190620000b590826200046e565b5060608201516003820190620000cc90826200046e565b5060808201516004820190620000e390826200046e565b5060a08201516005820190620000fa90826200046e565b509050505050505050506200053a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146200017257600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b0381118282101715620001b257620001b262000177565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620001e357620001e362000177565b604052919050565b600082601f830112620001fd57600080fd5b81516001600160401b0381111562000219576200021962000177565b60206200022f601f8301601f19168201620001b8565b82815285828487010111156200024457600080fd5b60005b838110156200026457858101830151828201840152820162000247565b83811115620002765760008385840101525b5095945050505050565b6000806000606084860312156200029657600080fd5b620002a1846200015a565b9250620002b1602085016200015a565b60408501519092506001600160401b0380821115620002cf57600080fd5b9085019060c08288031215620002e457600080fd5b620002ee6200018d565b825182811115620002fe57600080fd5b6200030c89828601620001eb565b8252506020830151828111156200032257600080fd5b6200033089828601620001eb565b6020830152506040830151828111156200034957600080fd5b6200035789828601620001eb565b6040830152506060830151828111156200037057600080fd5b6200037e89828601620001eb565b6060830152506080830151828111156200039757600080fd5b620003a589828601620001eb565b60808301525060a083015182811115620003be57600080fd5b620003cc89828601620001eb565b60a0830152508093505050509250925092565b600181811c90821680620003f457607f821691505b6020821081036200041557634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200046957600081815260208120601f850160051c81016020861015620004445750805b601f850160051c820191505b81811015620004655782815560010162000450565b5050505b505050565b81516001600160401b038111156200048a576200048a62000177565b620004a2816200049b8454620003df565b846200041b565b602080601f831160018114620004da5760008415620004c15750858301515b600019600386901b1c1916600185901b17855562000465565b600085815260208120601f198616915b828110156200050b57888601518255948401946001909101908401620004ea565b50858210156200052a5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6117a0806200054a6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063a3f22a2011610071578063a3f22a201461013d578063ae70ed131461014e578063b351735014610161578063d12bcb1214610174578063f067961614610189578063f2fde38b1461019c57600080fd5b80633ee6fa92146100b957806357e30f44146100ce578063715018a6146100e1578063725fa09c146100e95780638da5cb5b146101075780639a17092a1461012c575b600080fd5b6100cc6100c7366004610cee565b6101af565b005b6100cc6100dc366004610e0c565b61020c565b6100cc6102c3565b6100f16102d7565b6040516100fe9190610f89565b60405180910390f35b6000546001600160a01b03165b6040516001600160a01b0390911681526020016100fe565b6001546001600160a01b0316610114565b6002546001600160a01b0316610114565b6100cc61015c366004610cee565b610337565b6100f161016f366004610f9c565b61038d565b61017c610409565b6040516100fe9190610fd1565b6100f1610197366004611089565b6107c0565b6100cc6101aa366004610cee565b61090c565b6101b761098a565b600280546001600160a01b0319166001600160a01b0383169081179091556040519081527f10c0817f42b2182992d55b707430b153f12e59d7e54a975bfec790497dd7f63f906020015b60405180910390a150565b61021461098a565b805181906003908190610227908261117f565b506020820151600182019061023c908261117f565b5060408201516002820190610251908261117f565b5060608201516003820190610266908261117f565b506080820151600482019061027b908261117f565b5060a08201516005820190610290908261117f565b509050507f03a10335d532669eac03b3b7e4ce44aff7f8cb14b7aa397c653fdcb40ae06bec816040516102019190610fd1565b6102cb61098a565b6102d560006109e4565b565b604051606090610313906102ff906003906004906005906006906007906008906020016112b2565b604051602081830303815290604052610a34565b6040516020016103239190611438565b604051602081830303815290604052905090565b61033f61098a565b600180546001600160a01b0319166001600160a01b0383169081179091556040519081527f3c2715cb5e4b39dd4af38ac12bb292a030fb6a063dbd5467ed49da665bcaa97390602001610201565b6001546040516318b6fb0f60e11b81526060916001600160a01b03169063316df61e906103be908590600401610f89565b600060405180830381865afa1580156103db573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610403919081019061147d565b92915050565b6104426040518060c001604052806060815260200160608152602001606081526020016060815260200160608152602001606081525090565b60036040518060c001604052908160008201805461045f906110f6565b80601f016020809104026020016040519081016040528092919081815260200182805461048b906110f6565b80156104d85780601f106104ad576101008083540402835291602001916104d8565b820191906000526020600020905b8154815290600101906020018083116104bb57829003601f168201915b505050505081526020016001820180546104f1906110f6565b80601f016020809104026020016040519081016040528092919081815260200182805461051d906110f6565b801561056a5780601f1061053f5761010080835404028352916020019161056a565b820191906000526020600020905b81548152906001019060200180831161054d57829003601f168201915b50505050508152602001600282018054610583906110f6565b80601f01602080910402602001604051908101604052809291908181526020018280546105af906110f6565b80156105fc5780601f106105d1576101008083540402835291602001916105fc565b820191906000526020600020905b8154815290600101906020018083116105df57829003601f168201915b50505050508152602001600382018054610615906110f6565b80601f0160208091040260200160405190810160405280929190818152602001828054610641906110f6565b801561068e5780601f106106635761010080835404028352916020019161068e565b820191906000526020600020905b81548152906001019060200180831161067157829003601f168201915b505050505081526020016004820180546106a7906110f6565b80601f01602080910402602001604051908101604052809291908181526020018280546106d3906110f6565b80156107205780601f106106f557610100808354040283529160200191610720565b820191906000526020600020905b81548152906001019060200180831161070357829003601f168201915b50505050508152602001600582018054610739906110f6565b80601f0160208091040260200160405190810160405280929190818152602001828054610765906110f6565b80156107b25780601f10610787576101008083540402835291602001916107b2565b820191906000526020600020905b81548152906001019060200180831161079557829003601f168201915b505050505081525050905090565b6001546040516318b6fb0f60e11b81526060916000916001600160a01b039091169063316df61e906107f6908790600401610f89565b600060405180830381865afa158015610813573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261083b919081019061147d565b60025460405163f6559a6b60e01b81529192506000916001600160a01b039091169063f6559a6b90610871908790600401610f89565b600060405180830381865afa15801561088e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526108b6919081019061147d565b90506108e26108c487610b99565b6108cd88610bca565b84846040516020016102ff94939291906114eb565b6040516020016108f29190611438565b604051602081830303815290604052925050509392505050565b61091461098a565b6001600160a01b03811661097e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b610987816109e4565b50565b6000546001600160a01b031633146102d55760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610975565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60608151600003610a5357505060408051602081019091526000815290565b600060405180606001604052806040815260200161172b6040913990506000600384516002610a8291906115f2565b610a8c9190611620565b610a97906004611634565b90506000610aa68260206115f2565b67ffffffffffffffff811115610abe57610abe610d1e565b6040519080825280601f01601f191660200182016040528015610ae8576020820181803683370190505b509050818152600183018586518101602084015b81831015610b54576003830192508251603f8160121c168501518253600182019150603f81600c1c168501518253600182019150603f8160061c168501518253600182019150603f8116850151825350600101610afc565b600389510660018114610b6e5760028114610b7f57610b8b565b613d3d60f01b600119830152610b8b565b603d60f81b6000198301525b509398975050505050505050565b6060610ba482610be5565b604051602001610bb49190611653565b6040516020818303038152906040529050919050565b6060610bd582610be5565b604051602001610bb49190611687565b606081600003610c0c5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610c365780610c20816116d0565b9150610c2f9050600a83611620565b9150610c10565b60008167ffffffffffffffff811115610c5157610c51610d1e565b6040519080825280601f01601f191660200182016040528015610c7b576020820181803683370190505b5090505b8415610ce657610c906001836116e9565b9150610c9d600a86611700565b610ca89060306115f2565b60f81b818381518110610cbd57610cbd611714565b60200101906001600160f81b031916908160001a905350610cdf600a86611620565b9450610c7f565b949350505050565b600060208284031215610d0057600080fd5b81356001600160a01b0381168114610d1757600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff81118282101715610d5757610d57610d1e565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610d8657610d86610d1e565b604052919050565b600067ffffffffffffffff821115610da857610da8610d1e565b50601f01601f191660200190565b600082601f830112610dc757600080fd5b8135610dda610dd582610d8e565b610d5d565b818152846020838601011115610def57600080fd5b816020850160208301376000918101602001919091529392505050565b600060208284031215610e1e57600080fd5b813567ffffffffffffffff80821115610e3657600080fd5b9083019060c08286031215610e4a57600080fd5b610e52610d34565b823582811115610e6157600080fd5b610e6d87828601610db6565b825250602083013582811115610e8257600080fd5b610e8e87828601610db6565b602083015250604083013582811115610ea657600080fd5b610eb287828601610db6565b604083015250606083013582811115610eca57600080fd5b610ed687828601610db6565b606083015250608083013582811115610eee57600080fd5b610efa87828601610db6565b60808301525060a083013582811115610f1257600080fd5b610f1e87828601610db6565b60a08301525095945050505050565b60005b83811015610f48578181015183820152602001610f30565b83811115610f57576000848401525b50505050565b60008151808452610f75816020860160208601610f2d565b601f01601f19169290920160200192915050565b602081526000610d176020830184610f5d565b600060208284031215610fae57600080fd5b813567ffffffffffffffff811115610fc557600080fd5b610ce684828501610db6565b602081526000825160c06020840152610fed60e0840182610f5d565b90506020840151601f198085840301604086015261100b8383610f5d565b925060408601519150808584030160608601526110288383610f5d565b925060608601519150808584030160808601526110458383610f5d565b925060808601519150808584030160a08601526110628383610f5d565b925060a08601519150808584030160c0860152506110808282610f5d565b95945050505050565b60008060006060848603121561109e57600080fd5b83359250602084013567ffffffffffffffff808211156110bd57600080fd5b6110c987838801610db6565b935060408601359150808211156110df57600080fd5b506110ec86828701610db6565b9150509250925092565b600181811c9082168061110a57607f821691505b60208210810361112a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561117a57600081815260208120601f850160051c810160208610156111575750805b601f850160051c820191505b8181101561117657828155600101611163565b5050505b505050565b815167ffffffffffffffff81111561119957611199610d1e565b6111ad816111a784546110f6565b84611130565b602080601f8311600181146111e257600084156111ca5750858301515b600019600386901b1c1916600185901b178555611176565b600085815260208120601f198616915b82811015611211578886015182559484019460019091019084016111f2565b508582101561122f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000815461124c816110f6565b600182811680156112645760018114611279576112a8565b60ff19841687528215158302870194506112a8565b8560005260208060002060005b8581101561129f5781548a820152908401908201611286565b50505082870194505b5050505092915050565b673d913730b6b2911d60c11b8152601160f91b600882015260006112d9600983018961123f565b61088b60f21b815260026112ff8183016d113232b9b1b934b83a34b7b7111d60911b9052565b601160f91b6010830152611316601183018a61123f565b61088b60f21b81529150671134b6b0b3b2911d60c11b82820152601160f91b600a830152611347600b83018961123f565b61088b60f21b815291506e1132bc3a32b93730b62634b735911d60891b82820152601160f91b601183015261137f601283018861123f565b61088b60f21b815291507f2273656c6c65724665654261736973506f696e7473223a00000000000000000082820152601160f91b60198301526113c5601a83018761123f565b61088b60f21b815291506e113332b2a932b1b4b834b2b73a111d60891b82820152601160f91b60118301526113fd601283018661123f565b601160f91b8152607d60f81b6001820152019998505050505050505050565b6000815161142e818560208601610f2d565b9290920192915050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c00000081526000825161147081601d850160208701610f2d565b91909101601d0192915050565b60006020828403121561148f57600080fd5b815167ffffffffffffffff8111156114a657600080fd5b8201601f810184136114b757600080fd5b80516114c5610dd582610d8e565b8181528560208385010111156114da57600080fd5b611080826020830160208601610f2d565b673d913730b6b2911d60c11b8152601160f91b60088201528451600090611519816009850160208a01610f2d565b61088b60f21b6009918401918201526d113232b9b1b934b83a34b7b7111d60911b600b82015261154f60198201601160f91b9052565b61155c601a82018761141c565b61088b60f21b81529050671134b6b0b3b2911d60c11b6002820152601160f91b600a82015261158e600b82018661141c565b61088b60f21b815290506e2261747472696275746573223a205b60881b60028201526115bd601182018561141c565b605d60f81b8152607d60f81b6001820152600201979650505050505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611605576116056115dc565b500190565b634e487b7160e01b600052601260045260246000fd5b60008261162f5761162f61160a565b500490565b600081600019048311821515161561164e5761164e6115dc565b500290565b6b506f6f6c794368696269202360a01b81526000825161167a81600c850160208701610f2d565b91909101600c0192915050565b674d656d626572202360c01b8152600082516116aa816008850160208701610f2d565b6e1037b3102837b7b63ca1b434b1349760891b6008939091019283015250601701919050565b6000600182016116e2576116e26115dc565b5060010190565b6000828210156116fb576116fb6115dc565b500390565b60008261170f5761170f61160a565b500690565b634e487b7160e01b600052603260045260246000fdfe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa26469706673582212201a3ad947f26b2b354aab715928a9767d4a7bf1864ad1d73aa1209111c804d9ec64736f6c634300080f0033";

type PoolyChibiStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PoolyChibiStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PoolyChibiStorage__factory extends ContractFactory {
  constructor(...args: PoolyChibiStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "PoolyChibiStorage";
  }

  deploy(
    _svgRender_: string,
    _traitsFetch_: string,
    _contractURI_: ERC721Storage.ContractURIStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PoolyChibiStorage> {
    return super.deploy(
      _svgRender_,
      _traitsFetch_,
      _contractURI_,
      overrides || {}
    ) as Promise<PoolyChibiStorage>;
  }
  getDeployTransaction(
    _svgRender_: string,
    _traitsFetch_: string,
    _contractURI_: ERC721Storage.ContractURIStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _svgRender_,
      _traitsFetch_,
      _contractURI_,
      overrides || {}
    );
  }
  attach(address: string): PoolyChibiStorage {
    return super.attach(address) as PoolyChibiStorage;
  }
  connect(signer: Signer): PoolyChibiStorage__factory {
    return super.connect(signer) as PoolyChibiStorage__factory;
  }
  static readonly contractName: "PoolyChibiStorage";
  public readonly contractName: "PoolyChibiStorage";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PoolyChibiStorageInterface {
    return new utils.Interface(_abi) as PoolyChibiStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoolyChibiStorage {
    return new Contract(address, _abi, signerOrProvider) as PoolyChibiStorage;
  }
}
