//SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.15;

import { ERC721K } from "../ERC721K.sol";

contract MockERC721K is ERC721K {
  constructor(
    string memory name,
    string memory symbol,
    address erc721Storage
  ) ERC721K(name, symbol, erc721Storage) {}

  function _tokenData(uint256) internal view virtual override returns (bytes memory, bytes memory) {
    bytes memory imageBytes;
    bytes memory traitsBytes;
    return (imageBytes, traitsBytes);
  }
}
