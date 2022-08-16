// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

interface IDataStream {
  function get(address[] calldata targets, bytes[] calldata data)
    external
    view
    returns (bytes memory value);
}
