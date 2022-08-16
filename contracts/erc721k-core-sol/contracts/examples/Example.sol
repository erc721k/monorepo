//SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.15;

import "hardhat/console.sol";
import { ERC721K } from "../ERC721K.sol";
import { ERC721Storage } from "../ERC721Storage.sol";
import { ExampleRender } from "./ExampleRender.sol";

/**
 * @title Example
 * @author Kames Geraghty
 */
contract Example is ERC721K {
  /**
   * @notice Example Construction
   * @param name string - Name of ERC721 token
   * @param symbol string - Symbol of ERC721 token
   * @param erc721Storage address - ERC721Storage instance
   */
  constructor(
    string memory name,
    string memory symbol,
    address erc721Storage
  ) ERC721K(name, symbol, erc721Storage) {}

  mapping(address => uint256) _userToTokenId;

  /* ===================================================================================== */
  /* External Functions                                                                    */
  /* ===================================================================================== */

  function isOwner(address user) external view returns (bool) {
    return _userToTokenId[user] > 0 ? true : false;
  }

  function preview(bytes memory input) external view returns (string memory) {
    return ExampleRender(ERC721Storage(_erc721Storage).getSvgRender()).render(input);
  }

  function transferFrom(
    address from,
    address to,
    uint256 tokenId
  ) public virtual override {
    if (from == address(0)) {
      _issue(to, ++_idCounter);
    } else {
      require(balanceOf(to) == 0, "Example:current-holder");
    }
  }

  /* ===================================================================================== */
  /* Internal Functions                                                                    */
  /* ===================================================================================== */

  function _checkAndIssue(address _sender) internal {
    if (balanceOf(_sender) == 0) {
      unchecked {
        _issue(_sender, ++_idCounter); /// @dev 🤯
      }
    } else {
      revert("Example:prev-issued");
    }
  }

  function _tokenData(uint256 tokenId)
    internal
    view
    virtual
    override
    returns (bytes memory, bytes memory)
  {
    bytes memory ensNode = bytes(abi.encode("0x0"));
    bytes memory ownerEncoded_ = bytes(abi.encode(ownerOf(tokenId)));
    return (ensNode, ownerEncoded_);
  }

  function _issue(address _to, uint256 _tokenId) internal returns (uint256) {
    _mint(_to, _tokenId);
    _userToTokenId[_to] = _tokenId;
    return _tokenId;
  }
}
