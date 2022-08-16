// @ts-nocheck
import 'dotenv/config'
import '@nomiclabs/hardhat-etherscan';
import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import 'hardhat-dependency-compiler';
import 'hardhat-abi-exporter';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import 'hardhat-gas-reporter';
import 'solidity-coverage';
import { HardhatUserConfig } from 'hardhat/config';
import networks from './hardhat.network';

const config: HardhatUserConfig = {
  abiExporter: {
    path: './abis',
    runOnCompile: true,
    clear: true,
    flat: false,
    except: [
      './abis/ERC20.sol',
      './abis/ERC721.sol'
    ],
  },
  typechain: {
    outDir: 'types',
    target: 'ethers-v5',
  },
  external: {
    contracts: [
      {
        artifacts: '@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol:IERC721Enumerable',
      },
    ],
  },
  dependencyCompiler: {
    paths: [
    ],
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 100,
    enabled: process.env.REPORT_GAS ? true : false,
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    maxMethodDiff: 10,
  },
  mocha: {
    timeout: 30000,
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  networks,
  solidity: {
    version: '0.8.15',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: 'istanbul',
    },
  },
  dependencyCompiler: {
    paths: [
          '@erc721k/core-sol/contracts/ERC721K.sol',
          '@erc721k/core-sol/contracts/ERC721Storage.sol',
          '@erc721k/core-sol/contracts/examples/Example.sol',
          '@erc721k/core-sol/contracts/examples/ExampleSvgModule.sol',
          '@erc721k/core-sol/contracts/examples/ExampleStorage.sol',
          '@erc721k/core-sol/contracts/examples/ExampleSvgModule.sol',
          '@erc721k/core-sol/contracts/examples/ExampleTraits.sol',
          '@erc721k/periphery-sol/contracts/svg/svg.sol',
          '@erc721k/periphery-sol/contracts/svg/svgUtils.sol',
          '@erc721k/periphery-sol/contracts/svg/SVGColor.sol',
          '@erc721k/periphery-sol/contracts/svg/SVGLibrary.sol',
          '@erc721k/periphery-sol/contracts/svg/SVGRegistry.sol',
      ],
  },
};

export default config;
