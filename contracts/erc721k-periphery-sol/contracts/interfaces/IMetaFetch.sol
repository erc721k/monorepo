// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

interface IMetaFetch {
  struct Metadata {
    string name;
    string description;
    string image;
    string image_data;
    string background_color;
    string animation_url;
    string external_url;
    string youtube_url;
    Trait[] attributes;
  }

  struct Core {
    string name;
    string description;
    string background_color;
    string animation_url;
    string external_url;
    string youtube_url;
  }

  struct Image {
    string image;
    string image_data;
  }

  struct Trait {
    string display_type;
    string trait_type;
    string value;
  }

  function get(uint256 tokenId) external view returns (Metadata memory meta);

  function data(uint256 tokenId) external view returns (Core memory core);

  function image(uint256 tokenId) external view returns (Image memory image);

  function traits(uint256 tokenId) external view returns (Trait[] memory traits);
}
