/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITraitsFetch, ITraitsFetchInterface } from "../ITraitsFetch";

const _abi = [
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
];

export class ITraitsFetch__factory {
  static readonly abi = _abi;
  static createInterface(): ITraitsFetchInterface {
    return new utils.Interface(_abi) as ITraitsFetchInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITraitsFetch {
    return new Contract(address, _abi, signerOrProvider) as ITraitsFetch;
  }
}
