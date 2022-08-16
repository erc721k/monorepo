// @ts-nocheck
// import { ethers } from "hardhat";
// import { task } from "hardhat/config";
import terminalImage from 'terminal-image';

task('balance', "Prints an account's balance")
  .addParam('account', "The account's address")
  .setAction(async (taskArguments) => {
    const balance = await ethers.provider.getBalance(taskArguments.account);
    console.log(ethers.utils.formatEther(balance), 'ETH');
  });

task('preview', 'Preview')
  .addParam('name', 'ENS domain')
  .setAction(async (taskArguments, { deployments }, runSuper) => {
    const EthereumNounSystem = await deployments.get('EthereumNounSystem');
    const ens = await ethers.getContract('EthereumNounSystem', EthereumNounSystem.address);
    const preview = await ens.previewUsingName(taskArguments.name);
    console.log(preview);
  });
