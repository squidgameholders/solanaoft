import { EndpointId } from '@layerzerolabs/lz-definitions'

import { ExecutorOptionType } from '@layerzerolabs/lz-v2-utilities'

import type { OAppOmniGraphHardhat, OmniPointHardhat } from '@layerzerolabs/toolbox-hardhat'

// address can also be specified for deployed contracts.
// const squidOFTV2BaseSepoliaAddress = '0x0E4e352E0d46955b4C37f24759d6080b25ab7710'

const base_sepoliaContract: OmniPointHardhat = {
    eid: EndpointId.BASESEP_V2_TESTNET,
    contractName: 'SquidTokenV2',
    // address: '0x0E4e352E0d46955b4C37f24759d6080b25ab7710',
}
const bscTestnetContract: OmniPointHardhat = {
    eid: EndpointId.BSC_V2_TESTNET,
    contractName: 'SquidTokenV2',
    // address: '0x1Ae0be39B1FbbCe868d634D3762c96Aa12d02E06',
}
const linea_sepoliaContract: OmniPointHardhat = {
    eid: EndpointId.LINEASEP_V2_TESTNET,
    contractName: 'SquidTokenV2',
    // address: '0xC269b9E0897ea8CAb1F72404ba39f2aDD3E8f635',
}
const solanadevnetContract: OmniPointHardhat = {
    eid: EndpointId.SOLANA_V2_TESTNET,
    address: '5bWhzK46CnyQVoyJQFVG1EYXveJMTK2mkbVEGEWSLzMG',
}
// Endpoint Name: SOLANA_V2_TESTNET, EndpointId: 40168, ChainType: solana //devnet in SOLANA
const config: OAppOmniGraphHardhat = {
    contracts: [
        { contract: base_sepoliaContract },
        { contract: bscTestnetContract },
        { contract: linea_sepoliaContract },
        { contract: solanadevnetContract },
    ],
    connections: [
        {
            from: base_sepoliaContract,
            to: bscTestnetContract,
            config: {
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 80000,
                        value: 0,
                    },
                ],
            },
        },
        {
            from: base_sepoliaContract,
            to: linea_sepoliaContract,
            config: {
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 80000,
                        value: 0,
                    },
                ],
            },
        },
        {
            from: base_sepoliaContract,
            to: solanadevnetContract,
            config: {
                // receiveConfig: {
                //     ulnConfig: {
                //         confirmations: BigInt(1),
                //         requiredDVNs: ['4VDjp6XQaxoZf5RGwiPU9NR1EXSZn2TP4ATMmiSzLfhb'],
                //         optionalDVNs: [],
                //         optionalDVNThreshold: 0,
                //     },
                // },
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 200000,
                        value: 250000,
                    },
                    {
                        msgType: 2,
                        optionType: ExecutorOptionType.COMPOSE,
                        index: 0,
                        gas: 200000,
                        value: 0,
                    },
                ],
            },
        },
        {
            from: bscTestnetContract,
            to: base_sepoliaContract,
            config: {
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 80000,
                        value: 0,
                    },
                ],
            },
        },
        {
            from: bscTestnetContract,
            to: linea_sepoliaContract,
            config: {
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 80000,
                        value: 0,
                    },
                ],
            },
        },
        {
            from: bscTestnetContract,
            to: solanadevnetContract,
            config: {
                // receiveConfig: {
                //     ulnConfig: {
                //         confirmations: BigInt(1),
                //         requiredDVNs: ['4VDjp6XQaxoZf5RGwiPU9NR1EXSZn2TP4ATMmiSzLfhb'],
                //         optionalDVNs: [],
                //         optionalDVNThreshold: 0,
                //     },
                // },
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 200000,
                        value: 250000,
                    },
                    {
                        msgType: 2,
                        optionType: ExecutorOptionType.COMPOSE,
                        index: 0,
                        gas: 200000,
                        value: 0,
                    },
                ],
            },
        },
        {
            from: linea_sepoliaContract,
            to: base_sepoliaContract,
            config: {
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 80000,
                        value: 0,
                    },
                ],
            },
        },
        {
            from: linea_sepoliaContract,
            to: bscTestnetContract,
            config: {
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 80000,
                        value: 0,
                    },
                ],
            },
        },
        {
            from: linea_sepoliaContract,
            to: solanadevnetContract,
            config: {
                // receiveConfig: {
                //     ulnConfig: {
                //         confirmations: BigInt(1),
                //         requiredDVNs: ['4VDjp6XQaxoZf5RGwiPU9NR1EXSZn2TP4ATMmiSzLfhb'],
                //         optionalDVNs: [],
                //         optionalDVNThreshold: 0,
                //     },
                // },
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 200000,
                        value: 250000,
                    },
                    {
                        msgType: 2,
                        optionType: ExecutorOptionType.COMPOSE,
                        index: 0,
                        gas: 200000,
                        value: 0,
                    },
                ],
            },
        },
    ],
}
export default config
