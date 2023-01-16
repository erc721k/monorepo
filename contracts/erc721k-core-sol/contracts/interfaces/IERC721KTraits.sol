// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

interface IERC721KTraits {
  enum DisplayType {
    Base,
    Generic,
    BoostNumber,
    BoostPercent,
    Number,
    Date
  }

  function fetch(bytes memory input) external view returns (string memory);
}
