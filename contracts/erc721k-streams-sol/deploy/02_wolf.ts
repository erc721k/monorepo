import { HardhatRuntimeEnvironment } from "hardhat/types";

export default async function deploy(hardhat: HardhatRuntimeEnvironment) {
  if (process.env.DEPLOY == "wolf") {
    const { deployments, getNamedAccounts } = hardhat;

    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    const owner = '0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31'
    
    const name = 'Wolf'
    const symbol = 'WOLF'
    const imageUrl = 'https://gateway.pinata.cloud/ipfs/QmPeCqsL9EpXCRGZqffLYio5uG8SvdEvAhAGgUk2R9gwBq'

    const contactInformation = {
        name: "Wolf Pack",
        description: "Unleash your inner chaos.",
        image: "https://gateway.pinata.cloud/ipfs/QmZ877R7oqj2sC8pvEgmBQzH7PFDcm91NQZuTyoF3XyXQ9",
        externalLink: "https://kames.me",
        sellerFeeBasisPoints: "0",
        feeRecipient: "0x0000000000000000000000000000000000000000",
      };

    await deploy("ChaosWolf", {
      contract: "ChaosWolf",
      from: deployer,
      args: [name, symbol, contactInformation, imageUrl, owner],
      skipIfAlreadyDeployed: true,
      log: true,
    });
    
  }
}
