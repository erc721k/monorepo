// @ts-nocheck

import ExampleMainnet from '../deployments/localhost/Example.json';
import ExampleTestnet from '../deployments/localhost/Example.json';
import ExampleLocalhost from '../deployments/localhost/Example.json';

function useNetworkContract(network: string, contract: string) {

    switch (network) {
        case 'mainnet':
            switch (contract) {
                case 'Example':
                    return ExampleMainnet
                default:
                    throw new Error(`Unknown contract ${contract}`);
            }
        case 'testnet':
            switch (contract) {
                case 'Example':
                    return ExampleTestnet
                default:
                    throw new Error(`Unknown contract ${contract}`);
            }
        case 'localhost':
            switch (contract) {
                case 'Example':
                    return ExampleLocalhost
                default:
                    throw new Error(`Unknown contract ${contract}`);
            }
        default:
            break;
    }

}

export { useNetworkContract }