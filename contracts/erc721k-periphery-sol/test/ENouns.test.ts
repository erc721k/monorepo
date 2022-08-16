import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { constants, Contract, ContractFactory } from 'ethers';
import { ethers } from 'hardhat';
const helpers = require("@nomicfoundation/hardhat-network-helpers");

const { getSigners, utils } = ethers;
const { parseEther: toWei } = utils;

const contactInformation = {
    name: "SVGRender",
    description: "SVGRender",
    image: "https://raw.githubusercontent.com/SVGRender/SVGRender/master/logo.png",
    external_link: "https://svgrender.com",
    seller_fee_basis_points: "0",
    fee_recipient: "0x0000000000000000000000000000000000000000",
  };

describe('ENouns', () => {
  let wallet0: SignerWithAddress;
  let wallet1: SignerWithAddress;
  let wallet2: SignerWithAddress;
  // ========================================================
  let ENouns: Contract;
  let ENounsFactory: ContractFactory;
  // ========================================================
  let ENounsRender: Contract;
  let ENounsRenderFactory: ContractFactory;
  let ERC721Storage: Contract;
  let ERC721StorageFactory: ContractFactory;

  before(async () => {
    [wallet0, wallet1, wallet2] = await getSigners();
    ENounsFactory = await ethers.getContractFactory('ENouns');
    ENounsRenderFactory = await ethers.getContractFactory('ENounsRender');
    ERC721StorageFactory = await ethers.getContractFactory('ERC721Storage');
  });

  beforeEach(async () => {
    ENounsRender = await ENounsRenderFactory.deploy();
    ERC721Storage = await ERC721StorageFactory.deploy(ENounsRender.address, constants.AddressZero, contactInformation);
    ENouns = await ENounsFactory.deploy('Ethereum Nouns System', 'eNouns', ERC721Storage.address);
  });

  describe('CLAIMING', () => {
    describe('transferFrom(address from, address to, uint256 amount)', () => {
      it('should FAIL to MINT an eNouns NFT due to non-registered reverseLookup ENS account', async () => {
        expect(ENouns.transferFrom(constants.AddressZero, 'nooooogooooood.eth', 0)).to.be.revertedWith("no")
      });

      it('should SUCCEED to MINT an eNouns NFT due to a valid registered reverseLookup ENS account', async () => {
        await ENouns.transferFrom(constants.AddressZero, 'kames.eth', 0);
        expect(await ENouns.balanceOf('kames.eth')).to.be.equal(1);
      });
      
      it('should SUCCEED to MINT an eNouns NFT using the fallback function', async () => {
        const address = "0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31";
        await helpers.impersonateAccount(address);
        const impersonatedSigner = await ethers.getSigner(address);
        await impersonatedSigner.sendTransaction({ to: ENouns.address, value: toWei('0') });
        expect(await ENouns.balanceOf('kames.eth')).to.be.equal(1);
      });

    });
  });
  
  describe.skip('Metadata', () => {
    describe('tokenURI(uint256 tokenId)', () => {
      it('should FAIL to READ eNouns NFT metadata due to non-existent token', async () => {
        expect(ENouns.tokenURI(0)).to.be.revertedWith("no")
      });

      it('should SUCCEED to READ eNouns NFT metadata', async () => {
        const firstTokenMetadata = {
            name: 'eNouns',
            symbol: 'eNouns',
            uri: 'https://enouns.eth/enouns/1',
        }

        await ENouns.transferFrom(constants.AddressZero, 'kames.eth', 0);
        console.log(await ENouns.tokenURI(0))
        expect(await ENouns.tokenURI(0)).to.be.equal(firstTokenMetadata);
      });
    });
  });
});
