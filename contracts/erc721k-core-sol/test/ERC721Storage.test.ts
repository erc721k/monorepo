import { expect } from 'chai';
import { artifacts, ethers } from 'hardhat';
import { deployMockContract, MockContract } from 'ethereum-waffle';
import { constants, Contract, ContractFactory } from 'ethers';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';

const { getSigners, utils } = ethers;

describe('ERC721Storage', () => {
  let wallet0: SignerWithAddress;
  let wallet1: SignerWithAddress;
  let wallet2: SignerWithAddress;
  // ========================================================
  let SvgRenderMock: MockContract;
  let TraitsFetchMock: MockContract;
  // ========================================================
  let ERC721K: Contract;
  let ERC721KFactory: ContractFactory;
  let ERC721Storage: Contract;
  let ERC721StorageFactory: ContractFactory;
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
    ERC721StorageFactory = await ethers.getContractFactory('MockERC721Storage');
    let SvgRenderMockArtifact = await artifacts.readArtifact('IERC721KImage');
    let ITraitsMockArtifact = await artifacts.readArtifact('IERC721KTraits');
    SvgRenderMock = await deployMockContract(wallet1, SvgRenderMockArtifact.abi);
    TraitsFetchMock = await deployMockContract(wallet1, ITraitsMockArtifact.abi);
    await SvgRenderMock.mock.render.returns('image');
    await TraitsFetchMock.mock.fetch.returns('traits');
  });

  beforeEach(async () => {
    ERC721Storage = await ERC721StorageFactory.deploy(
        SvgRenderMock.address,
        TraitsFetchMock.address,
        contactInformation,
    );
    ERC721K = await ERC721KFactory.deploy("Collectable", "NFT", ERC721Storage.address);
});

  describe('constructTokenURI(uint256,bytes,bytes)', () => {
    it('should SUCCEED', async () => {});
    it('should FAIL', async () => {});
  });
});
