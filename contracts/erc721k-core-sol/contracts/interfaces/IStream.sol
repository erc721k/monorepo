//SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

interface IStream {
  function count(address _address) external view returns (uint256);

  function getData(address _address)
    external
    view
    returns (string[] memory keys, string[] memory values);

  function getValue(address _address, string memory _key) external view returns (string memory);
}
