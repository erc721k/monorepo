// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.15;

import "hardhat/console.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { svg } from "@erc721k/periphery-sol/contracts/svg/svg.sol";
import { SVGLibrary } from "@erc721k/periphery-sol/contracts/svg/SVGLibrary.sol";
import { SVGRegistry } from "@erc721k/periphery-sol/contracts/svg/SVGRegistry.sol";
import { Base64 } from "base64-sol/base64.sol";

contract ExampleRender is Ownable {
  address internal _svgRegistry;
  string private constant ENCODING = "data:image/svg+xml;base64,";
  bytes32 private constant EXAMPLE_SVG_MODULE =
    0x464f554e44455200000000000000000000000000000000000000000000000000;

  constructor(address _svgRegistry_) {
    _svgRegistry = _svgRegistry_;
  }

  /* ===================================================================================== */
  /* External Functions                                                                    */
  /* ===================================================================================== */

  function render(bytes memory input) external view returns (string memory) {
    return encodeSvgToDataURI(_render(input));
  }

  /* ===================================================================================== */
  /* Internal Functions                                                                    */
  /* ===================================================================================== */
  function encodeSvgToDataURI(string memory data) internal view returns (string memory) {
    return string(abi.encodePacked("data:image/svg+xml;base64,", Base64.encode(bytes(data))));
  }

  function _render(bytes memory input) internal view returns (string memory) {
    (uint8 pos1, uint8 pos2, uint8 pos3, uint8 pos4) = abi.decode(
      input,
      (uint8, uint8, uint8, uint8)
    );
    return
      string(
        abi.encodePacked(
          svg.start(),
          svg.text(
            string.concat(svg.prop("x", "30%"), svg.prop("y", "50%")),
            _registry(EXAMPLE_SVG_MODULE, abi.encode(pos1))
          ),
          svg.text(
            string.concat(svg.prop("x", "45%"), svg.prop("y", "50%")),
            _registry(EXAMPLE_SVG_MODULE, abi.encode(pos2))
          ),
          svg.text(
            string.concat(svg.prop("x", "55%"), svg.prop("y", "50%")),
            _registry(EXAMPLE_SVG_MODULE, abi.encode(pos3))
          ),
          svg.text(
            string.concat(svg.prop("x", "75%"), svg.prop("y", "50%")),
            _registry(EXAMPLE_SVG_MODULE, abi.encode(pos4))
          ),
          svg.end()
        )
      );
  }

  function _registry(bytes32 _key, bytes memory _value) internal view returns (string memory) {
    return SVGRegistry(_svgRegistry).fetch(_key, _value);
  }
}
