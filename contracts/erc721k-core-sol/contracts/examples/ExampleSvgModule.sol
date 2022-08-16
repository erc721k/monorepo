// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "hardhat/console.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { svg } from "@erc721k/periphery-sol/contracts/svg/svg.sol";
import { svgUtils } from "@erc721k/periphery-sol/contracts/svg/svgUtils.sol";
import { SVGLibrary } from "@erc721k/periphery-sol/contracts/svg/SVGLibrary.sol";
import { IERC721KImage } from "../interfaces/IERC721KImage.sol";

contract ExampleSvgModule is IERC721KImage, Ownable {
  string private constant ENCODING = "(uint8)";
  mapping(uint8 => string) private _elements;

  constructor(uint8[] memory keys, string[] memory elements) {
    for (uint256 i = 0; i < elements.length; i++) {
      _elements[keys[i]] = elements[i];
    }
  }

  function getEncoding() external view returns (string memory) {
    return ENCODING;
  }

  function getElement(uint8 element) external view returns (string memory) {
    return _elements[element];
  }

  function render(bytes calldata input) external view override returns (string memory) {
    uint8 _position = abi.decode(input, (uint8));
    return _elements[_position];
  }

  function setElement(uint8 key, string memory svg) external onlyOwner {
    _elements[key] = svg;
  }
}
