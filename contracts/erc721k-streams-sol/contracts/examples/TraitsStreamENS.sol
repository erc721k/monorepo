// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.15;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { Strings } from "@openzeppelin/contracts/utils/Strings.sol";
import { IERC721 } from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import { IStream } from "../interfaces/IStream.sol";
import { IERC721KTraits } from "../interfaces/IERC721KTraits.sol";
import { StreamENS } from "../StreamENS.sol";

/**
 * @title TraitsStreamENS
 * @author Kames Geraghty
 */
contract TraitsStreamENS is IERC721KTraits, Ownable {
  address private _streamEns;

  /* ===================================================================================== */
  /* External Functions                                                                    */
  /* ===================================================================================== */

  constructor(address streamEns) {
    _streamEns = streamEns;
  }

  function fetch(bytes memory input) external view returns (string memory) {
    address user_ = abi.decode(input, (address));
    return string.concat(_getUnwrappedTraits(user_), _generateTrait("ensTraits", "true"));
  }

  /* ===================================================================================== */
  /* Internal Functions                                                                    */
  /* ===================================================================================== */

  function _generateTrait(string memory _key, string memory _value)
    internal
    pure
    returns (string memory __traits)
  {
    return string.concat('{"trait_type":' '"', _key, '",', '"value":', '"', _value, '"}');
  }

  function _generateTraits(string[] memory _keys, string[] memory _values)
    internal
    pure
    returns (string memory __traits)
  {
    string memory _traits = "";
    for (uint256 i = 0; i < _keys.length; i++) {
      if (bytes(_values[i]).length > 0) {
        _traits = string.concat(_traits, _generateTrait(_keys[i], _values[i]), ",");
      }
    }
    return _traits;
  }

  function _getUnwrappedTraits(address user) internal view returns (string memory) {
    (string[] memory keys_, string[] memory values_) = _getEnsTextFields(user);
    return _generateTraits(keys_, values_);
  }

  function _getEnsTextFields(address _user)
    internal
    view
    returns (string[] memory, string[] memory)
  {
    IStream _source = IStream(_streamEns);
    uint256 count = _source.count(_user);

    string[] memory keys_ = new string[](count);
    string[] memory values_ = new string[](count);

    (string[] memory keys__, string[] memory values__) = _source.getData(_user);

    for (uint256 k = 0; k < count; k++) {
      keys_[k] = (keys__[k]);
      values_[k] = values__[k];
    }

    return (keys_, values_);
  }
}
