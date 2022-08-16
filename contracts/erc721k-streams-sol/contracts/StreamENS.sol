// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.15;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { NameEncoder } from "./libraries/NameEncoder.sol";
import { IStream } from "./interfaces/IStream.sol";
import { IReverseRegistrar } from "./interfaces/ENS/IReverseRegistrar.sol";
import { ITextResolver } from "./interfaces/ENS/ITextResolver.sol";
import { IDefaultReverseResolver } from "./interfaces/ENS/IDefaultReverseResolver.sol";

contract StreamENS is IStream, Ownable {
  using NameEncoder for string;

  string[] private _keys;
  address private constant RESOLVER = 0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41;
  address private constant REVERSE_REGISTRAR = 0x084b1c3C81545d370f3634392De611CaaBFf8148;
  address private constant DEFAULT_REVERSE_RESOLVER = 0xA2C122BE93b0074270ebeE7f6b7292C7deB45047;

  constructor() {
    _keys.push("url");
    _keys.push("avatar");
    _keys.push("description");
    _keys.push("com.discord");
    _keys.push("com.github");
    _keys.push("com.twitter");
    _keys.push("eth.ens.delegate");
  }

  /* ===================================================================================== */
  /* External Functions                                                                    */
  /* ===================================================================================== */

  /**
   * @notice Get Keys
   * @return keys string[]
   */
  function getKeys() external view returns (string[] memory keys) {
    return _keys;
  }

  /**
   * @notice Get data fields count for user
   * @return count uint256
   */
  function count(address user) external view returns (uint256 count) {
    (, bytes32 node_, ITextResolver res_) = _resolveOwner(user);
    (string[] memory keys_, ) = _fetchNodeTextFields(_keys, node_, res_);
    return keys_.length;
  }

  /**
   * @notice Get all available data for user
   * @param user address
   * @return keys string[]
   * @return values string[]
   */
  function getData(address user)
    external
    view
    returns (string[] memory keys, string[] memory values)
  {
    (, bytes32 node_, ITextResolver res_) = _resolveOwner(user);
    (string[] memory keys_, string[] memory values_) = _fetchNodeTextFields(_keys, node_, res_);
    return (keys_, values_);
  }

  function getMetadata(address _address)
    external
    view
    returns (
      bytes32 node,
      string memory name,
      address resolver
    )
  {
    (string memory name, bytes32 node, ITextResolver resolver) = _resolveOwner(_address);
    return (node, name, address(resolver));
  }

  /**
   * @notice Get data value for user
   * @param user address
   * @param key string
   * @return value string
   */
  function getValue(address user, string memory key) external view returns (string memory) {
    (, bytes32 node_, ITextResolver res_) = _resolveOwner(user);
    return res_.text(node_, key);
  }

  /**
   * @notice Append Key
   * @param key string
   */
  function appendKey(string calldata key) external onlyOwner {
    _keys.push(key);
  }

  /**
   * @notice Set Key
   * @param idx uint256
   * @param key string
   */
  function updateKey(uint256 idx, string calldata key) external onlyOwner {
    _keys[idx] = key;
  }

  /* ===================================================================================== */
  /* Internal Functions                                                                    */
  /* ===================================================================================== */

  function _resolveOwner(address owner_)
    internal
    view
    returns (
      string memory,
      bytes32,
      ITextResolver
    )
  {
    bytes32 node_ = IReverseRegistrar(REVERSE_REGISTRAR).node(owner_);
    string memory _name = IDefaultReverseResolver(DEFAULT_REVERSE_RESOLVER).name(node_);
    (, bytes32 _node) = _name.dnsEncodeName();
    ITextResolver _resolver = ITextResolver(RESOLVER);
    return (_name, _node, _resolver);
  }

  function _fetchNodeTextFields(
    string[] memory _traits,
    bytes32 _node,
    ITextResolver _resolver
  ) internal view returns (string[] memory keys_, string[] memory values_) {
    string[] memory __keys = new string[](_traits.length);
    string[] memory __values = new string[](_traits.length);
    for (uint256 i = 0; i < _traits.length; i++) {
      __keys[i] = _traits[i];
      __values[i] = _resolver.text(_node, _traits[i]);
    }
    return (__keys, __values);
  }
}
