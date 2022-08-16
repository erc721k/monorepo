import { utils } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import svg from '../svg/svg_0'
export default async function deploy(hardhat: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts, ethers } = hardhat;

    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    const SVGRegistry = await deployments.get("SVGRegistry");
    const SVGLibrary = await deployments.get("SVGLibrary");

    const svgRegistry = await ethers.getContractAt("SVGRegistry", SVGRegistry.address);

    const svg_keys = [0,1,2,3,4]
    const svg_values = ["🐺", "🦜", "🦊", "🐙"]
    
    const ExampleSvgModule = await deploy("ExampleSvgModule", {
      contract: "ExampleSvgModule",
      from: deployer,
      args: [svg_keys, svg_values],
      skipIfAlreadyDeployed: false,
      log: true,
    });

    await svgRegistry.setWidget("0x464f554e44455200000000000000000000000000000000000000000000000000", ExampleSvgModule.address);

    const ExampleRender = await deploy("ExampleRender", {
        contract: "ExampleRender",
        from: deployer,
        args: [SVGRegistry.address],
        skipIfAlreadyDeployed: false,
        log: true,
      });
      
      const ExampleTraits = await deploy("ExampleTraits", {
        contract: "ExampleTraits",
        from: deployer,
        args: [],
        skipIfAlreadyDeployed: false,
        log: true,
      });
  
      const contactInformation = {
        name: "Example",
        description: "Example.",
        image: "https://ipfs.io/ipfs/QmR5suybqBDHkMB7fiXCjKuXEXwRPmJ8ExsRbPasxu36rm",
        externalLink: "https://Example.art",
        sellerFeeBasisPoints: "0",
        feeRecipient: "0x0000000000000000000000000000000000000000",
      };
  
      const ExampleStorage = await deploy("ExampleStorage", {
        contract: "ExampleStorage",
        from: deployer,
        args: [ExampleRender.address, ExampleTraits.address, contactInformation],
        skipIfAlreadyDeployed: false,
        log: true,
      });
  
      await deploy("Example", {
        contract: "Example",
        from: deployer,
        args: ["Pooly Chibi", "BIRBI", ExampleStorage.address],
        skipIfAlreadyDeployed: false,
        log: true,
      });

}
