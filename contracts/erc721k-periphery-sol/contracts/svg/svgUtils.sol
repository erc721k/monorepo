//SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;
import "@openzeppelin/contracts/utils/Strings.sol";
/**
  * @title  SVG Utilities
  * @author Kames Geraghty
  * @notice The SVG Utilities Library provides functions for constructing SVG; format CSS and numbers.
  * @dev Original code from w1nt3r-eth/hot-chain-svg (https://github.com/w1nt3r-eth/hot-chain-svg)
*/
library svgUtils {
    using Strings for uint256;
    using Strings for uint8;
    
    /// @notice Empty SVG element
    string internal constant NULL = "";

    /**
     * @notice Formats a CSS variable line. Includes a semicolon for formatting.
     * @param _key User for which to calculate prize amount.
     * @param _val User for which to calculate prize amount.
     * @return string Generated CSS variable.
    */
    function setCssVar(string memory _key, string memory _val)
        internal
        pure
        returns (string memory)
    {
        return string.concat("--", _key, ":", _val, ";");
    }

    /**
     * @notice Formats getting a css variable
     * @param _key User for which to calculate prize amount.
     * @return string Generated CSS variable.
    */
    function getCssVar(string memory _key)
        internal
        pure
        returns (string memory)
    {
        return string.concat("var(--", _key, ")");
    }

    // formats getting a def URL
    function getDefURL(string memory _id)
        internal
        pure
        returns (string memory)
    {
        return string.concat("url(#", _id, ")");
    }

    // checks if two strings are equal
    function stringsEqual(string memory _a, string memory _b)
        internal
        pure
        returns (bool)
    {
        return
            keccak256(abi.encodePacked(_a)) == keccak256(abi.encodePacked(_b));
    }

    // returns the length of a string in characters
    function utfStringLength(string memory _str)
        internal
        pure
        returns (uint256 length)
    {
        uint256 i = 0;
        bytes memory string_rep = bytes(_str);

        while (i < string_rep.length) {
            if (string_rep[i] >> 7 == 0) i += 1;
            else if (string_rep[i] >> 5 == bytes1(uint8(0x6))) i += 2;
            else if (string_rep[i] >> 4 == bytes1(uint8(0xE))) i += 3;
            else if (string_rep[i] >> 3 == bytes1(uint8(0x1E)))
                i += 4;
                //For safety
            else i += 1;

            length++;
        }
    }

    function round2Txt(
        uint256 _value,
        uint8 _decimals,
        uint8 _prec
    ) internal pure returns (bytes memory) {
        return abi.encodePacked(
            (_value / 10 ** _decimals).toString(), 
            ".",
            ( _value / 10 ** (_decimals - _prec) -
                _value / 10 ** (_decimals ) * 10 ** _prec
            ).toString()
        );
    }

     // converts an unsigned integer to a string
     function uint2str(uint256 _i)
     internal
     pure
     returns (string memory _uintAsString)
 {
     if (_i == 0) {
         return "0";
     }
     uint256 j = _i;
     uint256 len;
     while (j != 0) {
         len++;
         j /= 10;
     }
     bytes memory bstr = new bytes(len);
     uint256 k = len;
     while (_i != 0) {
         k = k - 1;
         uint8 temp = (48 + uint8(_i - (_i / 10) * 10));
         bytes1 b1 = bytes1(temp);
         bstr[k] = b1;
         _i /= 10;
     }
     return string(bstr);
 }
}
