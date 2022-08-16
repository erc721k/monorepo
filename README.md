# ERC721K - Dynamic Token Images and Metadata

![TS](https://badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555)
[![GPLv3 license](https://img.shields.io/badge/License-MIT-blue.svg)](http://perso.crans.org/besson/LICENSE.html)

# Overview

ERC721K is an ERC721 implementation with zero dependencies for off-chain data.

Both the token image and token traits are generated entirely on-chain.

However, instead of the smart contract logic deployed in a specific NFT instance, the underlying system has been modularized, to enable composition of `SVGModules` across many different instances. NFTs can share `SVGModules` which encapsulate both rendering and data fetching logic.

### How It Works

Image and Metadata (traits) are dynamically generated using the `SVGRegistry` and `DataStreamRegistry` smart contracts.

### SVGRegistry

The `SVGRegistry` manages `SVGModules` and provides a unified interface for rendering dynamic SVGs.

### DataStreamRegistry

The `DataStreamRegistry` manages `StreamModules` and provides a unified interface for fetching dynamic on-chain data.

## Installation & Usage

```sh
git clone git@github.com:turbo-eth/turbo-eth.git
```

**Installation**

[`pnpm`](https://pnpm.io/) is the **recommended** package manager.

```sh
pnpm install
```

**Local Development**

```sh
pnpm lab
```

**Local Development w/ Blockchain Fork**

```sh
pnpm lab:fork
```

**Build**

```sh
pnpm build
```

**Tests**

```sh
pnpm test
```

## Modules

The monorepo includes 3 primary folders.

- [apps](https://github.com/turbo-eth/turbo-eth/tree/main/apps)
- [contracts](https://github.com/turbo-eth/turbo-eth/tree/main/contracts)
- [packages](https://github.com/turbo-eth/turbo-eth/tree/main/packages)

Each folder contains similar `modules` i.e. frontend applications go in the `apps` folder and the smart contracts go in the `contracts` folder; very straight-forward.

### Environment Variables

Each module requires unique environment variables. Specifically the `apps` and `contracts` modules when preparing for deployment or forking a blockchain network.

The `.env.example` can be copied/pasted and updated to include the required variables deployment.

## Task Pipelines

Builds, tests and deployments are handled via tasks pipelines. Task pipelines orchestrate build and dependency requirements between mono-repo packages.

Edit the `turbo.json` file in the root directory to add new [pipelines](https://turborepo.org/docs/core-concepts/pipelines) and custom workflows.

## Developer Experience

The TurboETH build system uses [Turborepo](https://turborepo.org/) and pNPM; a high-performance build system and a fast, disk space efficient package manager. Giving developers the best experience possible while minimizing demand on local compute resources.

#### Core Technologies

- [Turborepo](https://turborepo.org/docs)
- [pNPM](https://pnpm.io/)
- [TSDX](https://tsdx.io/)
- [RainbowKit](https://www.rainbowkit.com/)
- [Tailwind](https://tailwindui.com/)
- [Next](https://nextjs.org/)

<hr />

Copyright 2022 [Kames Geraghty](https://kames.me)
