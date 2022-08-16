// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.15;

import { Strings } from "@openzeppelin/contracts/utils/Strings.sol";
import { ERC721Storage } from "../ERC721Storage.sol";

/**
 * @title ExampleStorage
 * @author Kames Geraghty
 */
contract ExampleStorage is ERC721Storage {
  constructor(
    address _svgRender_,
    address _traitsFetch_,
    ContractURI memory _contractURI_
  ) ERC721Storage(_svgRender_, _traitsFetch_, _contractURI_) {}

  function _parseName(uint256 _tokenId) internal view override returns (string memory) {
    return string.concat("Example #", Strings.toString(_tokenId));
  }

  function _parseDescription(uint256 _tokenId) internal view override returns (string memory) {
    return string.concat("Member #", Strings.toString(_tokenId), " of Example.");
  }
}
