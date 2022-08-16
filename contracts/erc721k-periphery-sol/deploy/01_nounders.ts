import { HardhatRuntimeEnvironment } from "hardhat/types";

export default async function deploy(hardhat: HardhatRuntimeEnvironment) {
  if (process.env.DEPLOY == "nounders") {
    const { deployments, getNamedAccounts } = hardhat;

    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    const owner = '0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31'
    const name = 'Founding eNouners'
    const symbol = 'eNounders'
    const imageUrl = 'https://ipfs.io/ipfs/QmZutNBNqkK4sss3uqCpManf4R1ZKr2XJXJVca5UNxUdNn'

    const contactInformation = {
        name: "The Early Nounders",
        description: "Limited Edition 1/1 Founding eNouners Collectable.",
        image: "https://ipfs.io/ipfs/QmcFLwidGpXh2vX5d4Vr59wQfJqhj5iwR1icxV6q9m2ZJ1",
        externalLink: "https://enouns.art",
        sellerFeeBasisPoints: "0",
        feeRecipient: "0x0000000000000000000000000000000000000000",
      };

    await deploy("ENounders", {
      contract: "ENounders",
      from: deployer,
      args: [name, symbol, contactInformation, imageUrl, owner],
      skipIfAlreadyDeployed: true,
      log: true,
    });
    
  }
}
