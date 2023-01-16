//SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import { ERC721 } from "@turbo-eth/solbase-sol/src/tokens/ERC721/ERC721.sol";
import { OwnedRoles } from "@turbo-eth/solbase-sol/src/auth/OwnedRoles.sol";
import { ERC721Storage } from "./ERC721Storage.sol";

/**
 * @title ERC721K
 * @author Kames Geraghty
 */
abstract contract ERC721K is ERC721, OwnedRoles {
  /// @notice ID counter for ERC721 tokens
  uint256 internal _idCounter;

  /// @notice ENSReverseRecords instance
  address internal _erc721Storage;

  event ERC721StorageUpdated(address erc721Storage);

  /**
   * @notice ERC721K Construction
   * @param name_ string - Name of ERC721 token
   * @param symbol_ string - Symbol of ERC721 token
   * @param _erc721Storage_ address - Metadata instance
   */
  constructor(
    string memory name_,
    string memory symbol_,
    address _erc721Storage_
  ) ERC721(name_, symbol_) {
    _erc721Storage = _erc721Storage_;
    _initializeOwner(msg.sender);
  }

  /* ===================================================================================== */
  /* EIP Functions                                                                     */
  /* ===================================================================================== */
  function supportsInterface(bytes4 interfaceId)
    public
    view
    virtual
    override(ERC721)
    returns (bool)
  {
    return super.supportsInterface(interfaceId);
  }

  /* ===================================================================================== */
  /* Virtual Functions                                                                     */
  /* ===================================================================================== */
  function _tokenData(uint256 tokenId)
    internal
    view
    virtual
    returns (bytes memory imageBytes, bytes memory traitsBytes);

  /* ===================================================================================== */
  /* External Functions                                                                    */
  /* ===================================================================================== */

  function contractURI() external view returns (string memory) {
    return ERC721Storage(_erc721Storage).constructContractURI();
  }

  function totalSupply() external view returns (uint256) {
    return _idCounter;
  }

  function getERC721Storage() external view returns (address) {
    return _erc721Storage;
  }

  function tokenURI(uint256 tokenId) public view override returns (string memory) {
    (bytes memory imageBytes, bytes memory traitsBytes) = _tokenData(tokenId);
    return ERC721Storage(_erc721Storage).constructTokenURI(tokenId, imageBytes, traitsBytes);
  }

  /* ====================================== */
  /* Writes
  /* ====================================== */

  function setStorage(address erc721Storage) external onlyOwner {
    _erc721Storage = erc721Storage;
    emit ERC721StorageUpdated(erc721Storage);
  }
}
