// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

interface IERC721KTraits {
  function fetch(bytes memory input) external view returns (string memory);
}
