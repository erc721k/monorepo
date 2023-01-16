// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.15;

import { Base64 } from "@turbo-eth/solbase-sol/src/utils/Base64.sol";
import { OwnedRoles } from "@turbo-eth/solbase-sol/src/auth/OwnedRoles.sol";
import { IERC721KImage } from "./interfaces/IERC721KImage.sol";
import { IERC721KTraits } from "./interfaces/IERC721KTraits.sol";

/**
 * @title ERC721Storage
 * @author Kames Geraghty
 */
abstract contract ERC721Storage is OwnedRoles {
  address internal svgRenderInstance;
  address internal traitsFetchInstance;
  ContractURI internal _contractURI;

  struct ContractURI {
    string name;
    string description;
    string image;
    string externalLink;
    string sellerFeeBasisPoints;
    string feeRecipient;
  }

  event SvgRenderUpdated(address svgRender);

  event TraitsFetchUpdated(address traitsFetch);

  event ContractURIUpdated(ContractURI contractURI);

  constructor(
    address svgRender_Instance,
    address traitsFetchInstance_,
    ContractURI memory _contractURI_
  ) OwnedRoles() {
    svgRenderInstance = svgRender_Instance;
    traitsFetchInstance = traitsFetchInstance_;
    _contractURI = _contractURI_;
    _initializeOwner(msg.sender);
  }

  /* ===================================================================================== */
  /* Virtual Functions                                                                     */
  /* ===================================================================================== */

  function _parseName(uint256 _tokenId) internal view virtual returns (string memory);

  function _parseDescription(uint256 _tokenId) internal view virtual returns (string memory);

  /* ===================================================================================== */
  /* External Functions                                                                    */
  /* ===================================================================================== */
  function getERC721KRender() external view returns (address) {
    return svgRenderInstance;
  }

  function getERC72KTraits() external view returns (address) {
    return traitsFetchInstance;
  }

  function getContractDescription() external view returns (ContractURI memory) {
    return _contractURI;
  }

  function render(bytes memory input) external view returns (string memory) {
    return IERC721KImage(svgRenderInstance).render(input);
  }

  function constructTokenURI(
    uint256 tokenId,
    bytes memory input0,
    bytes memory input1
  ) external view virtual returns (string memory uri) {
    string memory image_ = IERC721KImage(svgRenderInstance).render(input0);
    string memory traits_ = IERC721KTraits(traitsFetchInstance).fetch(input1);
    return
      string(
        abi.encodePacked(
          "data:application/json;base64,",
          Base64.encode(
            bytes(
              string.concat(
                '{"name":',
                '"',
                _parseName(tokenId),
                '",',
                '"description":',
                '"',
                _parseDescription(tokenId),
                '",',
                '"image":',
                '"',
                image_,
                '",',
                '"attributes": [',
                traits_,
                "]",
                "}"
              )
            )
          )
        )
      );
  }

  function constructContractURI() external view virtual returns (string memory uri) {
    return
      string(
        abi.encodePacked(
          "data:application/json;base64,",
          Base64.encode(
            bytes(
              string.concat(
                '{"name":',
                '"',
                _contractURI.name,
                '",',
                '"description":',
                '"',
                _contractURI.description,
                '",',
                '"image":',
                '"',
                _contractURI.image,
                '",',
                '"externalLink":',
                '"',
                _contractURI.externalLink,
                '",',
                '"sellerFeeBasisPoints":',
                '"',
                _contractURI.sellerFeeBasisPoints,
                '",',
                '"feeRecipient":',
                '"',
                _contractURI.feeRecipient,
                '"',
                "}"
              )
            )
          )
        )
      );
  }

  function setSvgRender(address svgRender) external onlyOwner {
    svgRenderInstance = svgRender;
    emit SvgRenderUpdated(svgRender);
  }

  function setTraitsFetch(address traitsFetch) external onlyOwner {
    traitsFetchInstance = traitsFetch;
    emit TraitsFetchUpdated(traitsFetch);
  }

  function setContractURI(ContractURI memory contractURI) external onlyOwner {
    _contractURI = contractURI;
    emit ContractURIUpdated(contractURI);
  }
}
