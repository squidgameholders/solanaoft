// Get the environment configuration from .env file
//
// To make use of automatic environment setup:
// - Duplicate .env.example file and name it .env
// - Fill in the environment variables
import 'dotenv/config'

import 'hardhat-deploy'
import 'hardhat-contract-sizer'
import '@nomiclabs/hardhat-ethers'
import '@layerzerolabs/toolbox-hardhat'

import { HardhatUserConfig, HttpNetworkAccountsUserConfig } from 'hardhat/types'

import { EndpointId } from '@layerzerolabs/lz-definitions'

import './tasks/index'

// Set your preferred authentication method
//
const { TESTNET_PRIVATE_KEY, PRIVATE_KEY, INFURA_API_KEY, LINEASCAN_API_KEY } = process.env

// If you prefer using a mnemonic, set a MNEMONIC environment variable
// to a valid mnemonic
const MNEMONIC = process.env.MNEMONIC

// If you prefer to be authenticated using a private key, set a PRIVATE_KEY environment variable
// const PRIVATE_KEY = process.env.PRIVATE_KEY

const accounts: HttpNetworkAccountsUserConfig | undefined = MNEMONIC
    ? { mnemonic: MNEMONIC }
    : PRIVATE_KEY
      ? [PRIVATE_KEY]
      : undefined

if (accounts == null) {
    console.warn(
        'Could not find MNEMONIC or PRIVATE_KEY environment variables. It will not be possible to execute transactions in your example.'
    )
}

const config: HardhatUserConfig = {
    paths: {
        cache: 'cache/hardhat',
        tests: 'test/hardhat',
    },
    solidity: {
        compilers: [
            {
                version: '0.8.22',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        ],
    },
    networks: {
        solanamainnet: {
            eid: EndpointId.SOLANA_V2_MAINNET,
            // url: `https://rpc.sepolia.linea.build/`,
            url: `https://api.mainnet-beta.solana.com`,
            chainId: 101,
            accounts,
            // accounts: [process.env.TESTNET_PRIVATE_KEY],
        },

        'base-mainnet': {
            eid: EndpointId.BASE_V2_MAINNET,
            url: 'https://mainnet.base.org',
            chainId: 8453,
            // accounts: [process.env.WALLET_KEY as string],
            accounts,
            // verify: {
            //     etherscan: {
            //         apiUrl: 'https://api-sepolia.basescan.org',
            //         apiKey: process.env.ETHERSCAN_API_KEY,
            //     },
            // },
        },
        bsc: {
            eid: EndpointId.BSC_V2_MAINNET,
            url: 'https://bsc-dataseed.binance.org/',
            chainId: 56,
            accounts,
            // verify: {
            //     etherscan: {
            //         apiUrl: 'https://api-testnet.bscscan.com',
            //         apiKey: 'PP2XZC913DGW8PS2A1VHXA3ISC8K43FJFB',
            //     },
            // },
        },
        linea_mainnet: {
            eid: EndpointId.ZKCONSENSYS_V2_MAINNET,
            url: `https://linea-mainnet.infura.io/v3/${INFURA_API_KEY}`,
            chainId: 59144,
            accounts,
            verify: {
                etherscan: {
                    apiUrl: 'https://api.lineascan.build/',
                    apiKey: LINEASCAN_API_KEY,
                },
            },
        },
    },
    namedAccounts: {
        deployer: {
            default: 0, // wallet address of index[0], of the mnemonic in .env
        },
    },
    etherscan: {
        apiKey: {
            // Uncomment for Blockscout
            // No api key is needed for Basescan
            // Blockscout
            // 'PP2XZC913DGW8PS2A1VHXA3ISC8K43FJFB',
            bscTestnet: 'PP2XZC913DGW8PS2A1VHXA3ISC8K43FJFB',
            bsc: 'PP2XZC913DGW8PS2A1VHXA3ISC8K43FJFB',
            'base-mainnet': 'EJ3G9T1IJGDHCHC4YVHQ2PR74YZKCVC5R2',
            'base-sepolia': 'EJ3G9T1IJGDHCHC4YVHQ2PR74YZKCVC5R2',
            baseSepolia: 'EJ3G9T1IJGDHCHC4YVHQ2PR74YZKCVC5R2',
            mainnet: 'IVK9B74WIPQKFSQY2RDXNIY3AG35YPZ1XD',
            linea_sepolia: LINEASCAN_API_KEY,
            linea_mainnet: LINEASCAN_API_KEY,
            // mainnet is ethereum
        },
        customChains: [
            {
                network: 'base-mainnet',
                // network: 'sepolia',
                chainId: 8453,
                urls: {
                    apiURL: 'https://api.basescan.org/api',
                    browserURL: 'https://basescan.org',
                },
            },

            {
                network: 'linea_sepolia',
                chainId: 59141,
                urls: {
                    apiURL: 'https://api-sepolia.lineascan.build',
                    browserURL: 'https://sepolia.lineascan.build/address',
                },
            },
            {
                network: 'linea_mainnet',
                chainId: 59144,
                urls: {
                    apiURL: 'https://api.lineascan.build/api',
                    browserURL: 'https://lineascan.build/',
                },
            },
        ],
    },
    sourcify: {
        // Disabled by default
        // Doesn't need an API key
        enabled: false,
    },
}

export default config
