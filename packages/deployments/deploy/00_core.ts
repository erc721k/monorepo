import { HardhatRuntimeEnvironment } from "hardhat/types";

export default async function deploy(hardhat: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hardhat;

    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    const svg = await deploy("svg", {
      contract: "svg",
      from: deployer,
      args: [],
      skipIfAlreadyDeployed: true,
      log: true,
    });
    
    const svgUtils = await deploy("svgUtils", {
      contract: "svgUtils",
      from: deployer,
      args: [],
      skipIfAlreadyDeployed: true,
      log: true,
    });

    const SVGColor = await deploy("SVGColor", {
      contract: "SVGColor",
      from: deployer,
      args: [],
      skipIfAlreadyDeployed: true,
      log: true,
    });
    
    const SVGLibrary = await deploy("SVGLibrary", {
      contract: "SVGLibrary",
      from: deployer,
      libraries: {
        svg: svg.address,
        svgUtils: svgUtils.address
    },
      args: [SVGColor.address],
      skipIfAlreadyDeployed: true,
      log: true,
    });

    await deploy("SVGRegistry", {
      contract: "SVGRegistry",
      from: deployer,
      args: [],
      skipIfAlreadyDeployed: true,
      log: true,
    });
}
