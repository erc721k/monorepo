// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { ISVGModule } from "../interfaces/ISVGModule.sol";

contract SVGRegistry is Ownable {
  mapping(bytes32 => address) private _modules;

  constructor() {}

  function fetch(bytes32 widgetId, bytes memory input) external view returns (string memory) {
    if (_modules[widgetId] != address(0)) {
      return ISVGModule(_modules[widgetId]).decode(input);
    } else {
      return "";
    }
  }

  function getWidget(bytes32 widgetId) external view returns (address widget) {
    return _modules[widgetId];
  }

  function setWidget(bytes32 widgetId, address widget) external onlyOwner {
    _modules[widgetId] = widget;
  }
}
