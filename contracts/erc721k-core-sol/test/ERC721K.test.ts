import { expect } from 'chai';
import { artifacts, ethers } from 'hardhat';
import { constants, Contract, ContractFactory } from 'ethers';
import { deployMockContract, MockContract } from 'ethereum-waffle';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';

const { getSigners, utils } = ethers;

describe('ERC721K', () => {
  let wallet0: SignerWithAddress;
  let wallet1: SignerWithAddress;
  let wallet2: SignerWithAddress;
  // ========================================================
  let MockERC721Storage: MockContract;
  // ========================================================
  let ERC721K: Contract;
  let ERC721KFactory: ContractFactory;
  // ========================================================
  const contactInformation = {
    name: 'ERC721Storage',
    description: 'ERC721Storage',
    image: 'image',
    externalLink: 'link',
    sellerFeeBasisPoints: '0',
    feeRecipient: '0x0000000000000000000000000000000000000000',
  };

  before(async () => {
    [wallet0, wallet1, wallet2] = await getSigners();
    ERC721KFactory = await ethers.getContractFactory('MockERC721K');
    let ERC721StorageArtifact = await artifacts.readArtifact('MockERC721Storage');
    MockERC721Storage = await deployMockContract(wallet1, ERC721StorageArtifact.abi);
    await MockERC721Storage.mock.constructContractURI.returns(contactInformation);
  });

  beforeEach(async () => {
    ERC721K = await ERC721KFactory.deploy("Collectable", "NFT", MockERC721Storage.address);
  });

  describe('tokenURI(uint256 tokenId)', () => {
    it('should SUCCEED', async () => {});
    it('should FAIL', async () => {});
  });
});
