// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.6;

abstract contract IENSReverseRecords {
    function getNames(address[] calldata addresses) external view virtual returns (string[] memory r);
}
