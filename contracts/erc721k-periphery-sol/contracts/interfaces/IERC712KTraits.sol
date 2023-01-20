// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

interface IERC712KTraits {
  function generate(bytes memory input) external view returns (string memory);
}
