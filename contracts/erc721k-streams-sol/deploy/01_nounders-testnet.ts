import { HardhatRuntimeEnvironment } from "hardhat/types";

export default async function deploy(hardhat: HardhatRuntimeEnvironment) {
  if (process.env.DEPLOY == "nounders:testnet") {
    const { deployments, getNamedAccounts } = hardhat;

    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    const owner = '0x9342d17D9161d642F73aE9Feebb627F46F1029C5'
    const name = 'enoeno'
    const symbol = 'ENO'
    const imageUrl = 'https://gateway.pinata.cloud/ipfs/QmcsfEQmRCg5bPVuYoSpGxjfQfn3iDxpg3eZLc1j3n5oTS'

    const contactInformation = {
        name: "enoeno",
        description: "enoeno.",
        image: "",
        externalLink: "https://kames.me",
        sellerFeeBasisPoints: "0",
        feeRecipient: "0x0000000000000000000000000000000000000000",
      };

    const ENounsRender = await deploy("ENounders", {
      contract: "ENounders",
      from: deployer,
      args: [name, symbol, contactInformation, imageUrl, owner],
      skipIfAlreadyDeployed: false,
      log: true,
    });
    
  }
}
