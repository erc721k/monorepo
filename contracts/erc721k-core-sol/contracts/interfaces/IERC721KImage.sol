// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

interface IERC721KImage {
  function render(bytes memory input) external view returns (string memory);
}
