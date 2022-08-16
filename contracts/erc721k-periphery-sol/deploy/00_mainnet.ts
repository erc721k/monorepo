import { HardhatRuntimeEnvironment } from "hardhat/types";

export default async function deploy(hardhat: HardhatRuntimeEnvironment) {
  if (process.env.DEPLOY == "mainnet") {
    const { deployments, getNamedAccounts } = hardhat;

    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    const nounsDescriptor = '0x0Cfdb3Ba1694c2bb2CFACB0339ad7b1Ae5932B63'
    const ensReverseRecord = '0x3671aE578E63FdF66ad4F3E12CC0c0d71Ac7510C'

    const ENounsRender = await deploy("ENounsRender", {
      contract: "ENounsRender",
      from: deployer,
      args: [nounsDescriptor, ensReverseRecord],
      skipIfAlreadyDeployed: true,
      log: true,
    });
    
    const StreamENS = await deploy("StreamENS", {
      contract: "StreamENS",
      from: deployer,
      args: [],
      skipIfAlreadyDeployed: true,
      log: true,
    });
    const ENounsTraits = await deploy("ENounsTraits", {
      contract: "ENounsTraits",
      from: deployer,
      args: [StreamENS.address],
      skipIfAlreadyDeployed: true,
      log: true,
    });

    const contactInformation = {
      name: "eNouns",
      description: "PoolyDefender.",
      image: "https://ipfs.io/ipfs/QmR5suybqBDHkMB7fiXCjKuXEXwRPmJ8ExsRbPasxu36rm",
      externalLink: "https://enouns.art",
      sellerFeeBasisPoints: "0",
      feeRecipient: "0x0000000000000000000000000000000000000000",
    };

    const ENounsStorage = await deploy("ENounsStorage", {
      contract: "ENounsStorage",
      from: deployer,
      args: [ENounsRender.address, ENounsTraits.address, contactInformation],
      skipIfAlreadyDeployed: true,
      log: true,
    });

    await deploy("ENouns", {
      contract: "ENouns",
      from: deployer,
      args: ["Ethereum Nouns System", "eNouns", ENounsStorage.address, ensReverseRecord],
      skipIfAlreadyDeployed: false,
      log: true,
    });
  }
}
