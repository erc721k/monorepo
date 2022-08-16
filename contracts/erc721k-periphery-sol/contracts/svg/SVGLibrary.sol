// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { svg } from "./svg.sol";
import { svgUtils } from "./svgUtils.sol";
import { SVGColor } from "./SVGColor.sol";

contract SVGLibrary {
  address private _colors;

  bytes32 private immutable BUILD = keccak256("BUILD");
  bytes32 private immutable COLOR = keccak256("COLOR");
  bytes32 private immutable UTILS = keccak256("UTILS");

  mapping(bytes32 => address) _modules;

  constructor(address _colors_) {
    _colors = _colors_;
  }

  function execute(bytes32 package, bytes calldata input)
    external
    view
    returns (string memory data)
  {
    if (_modules[package] != 0x0000000000000000000000000000000000000000) {
      (bool success, bytes memory data) = address(_modules[package]).staticcall(input);
      return string(data);
    } else if (package == BUILD) {
      (bool success, bytes memory data) = address(svg).staticcall(input);
      return string(data);
    } else if (package == COLOR) {
      (bool success, bytes memory data) = _colors.staticcall(input);
      return string(data);
    } else if (package == UTILS) {
      (bool success, bytes memory data) = address(svgUtils).staticcall(input);
      return string(data);
    } else {
      return string(data);
      revert("SVGLibrary:invalid-operation");
    }
  }
}
