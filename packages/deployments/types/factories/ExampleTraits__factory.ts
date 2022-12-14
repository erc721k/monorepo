/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ExampleTraits, ExampleTraitsInterface } from "../ExampleTraits";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
    inputs: [
      {
        internalType: "bytes",
        name: "input",
        type: "bytes",
      },
    ],
    name: "fetch",
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
    inputs: [],
    name: "renounceOwnership",
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
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6104b28061007e6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063715018a6146100515780638da5cb5b1461005b578063f2fde38b1461007b578063f6559a6b1461008e575b600080fd5b6100596100ae565b005b6000546040516001600160a01b0390911681526020015b60405180910390f35b610059610089366004610283565b6100c2565b6100a161009c3660046102c9565b610140565b60405161007291906103aa565b6100b66101ad565b6100c06000610207565b565b6100ca6101ad565b6001600160a01b0381166101345760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61013d81610207565b50565b6060610187604051806040016040528060078152602001664552434b37323160c81b815250604051806040016040528060048152602001637472756560e01b815250610257565b60405160200161019791906103dd565b6040516020818303038152906040529050919050565b6000546001600160a01b031633146100c05760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161012b565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6060828260405160200161026c9291906103f9565b604051602081830303815290604052905092915050565b60006020828403121561029557600080fd5b81356001600160a01b03811681146102ac57600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b6000602082840312156102db57600080fd5b813567ffffffffffffffff808211156102f357600080fd5b818401915084601f83011261030757600080fd5b813581811115610319576103196102b3565b604051601f8201601f19908116603f01168101908382118183101715610341576103416102b3565b8160405282815287602084870101111561035a57600080fd5b826020860160208301376000928101602001929092525095945050505050565b60005b8381101561039557818101518382015260200161037d565b838111156103a4576000848401525b50505050565b60208152600082518060208401526103c981604085016020870161037a565b601f01601f19169190910160400192915050565b600082516103ef81846020870161037a565b9190910192915050565b6e3d913a3930b4ba2fba3cb832911d1160891b8152825160009061042481600f85016020880161037a565b61088b60f21b600f9184019182015267113b30b63ab2911d60c11b6011820152601160f91b6019820152835161046181601a84016020880161037a565b61227d60f01b601a9290910191820152601c0194935050505056fea264697066735822122054e637fdc6d4059965e11efb089a704c2c52343e120a8a2edf70aa07afa4d45f64736f6c634300080f0033";

type ExampleTraitsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExampleTraitsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ExampleTraits__factory extends ContractFactory {
  constructor(...args: ExampleTraitsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ExampleTraits";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ExampleTraits> {
    return super.deploy(overrides || {}) as Promise<ExampleTraits>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ExampleTraits {
    return super.attach(address) as ExampleTraits;
  }
  connect(signer: Signer): ExampleTraits__factory {
    return super.connect(signer) as ExampleTraits__factory;
  }
  static readonly contractName: "ExampleTraits";
  public readonly contractName: "ExampleTraits";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExampleTraitsInterface {
    return new utils.Interface(_abi) as ExampleTraitsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExampleTraits {
    return new Contract(address, _abi, signerOrProvider) as ExampleTraits;
  }
}
