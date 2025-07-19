import { EndpointId } from '@layerzerolabs/lz-definitions'

import { ExecutorOptionType } from '@layerzerolabs/lz-v2-utilities'

import type { OAppOmniGraphHardhat, OmniPointHardhat } from '@layerzerolabs/toolbox-hardhat'

const base_mainnetContract = {
    eid: EndpointId.BASE_V2_MAINNET,
    contractName: 'SquidTokenV2',
}
const bscContract = {
    eid: EndpointId.BSC_V2_MAINNET,
    contractName: 'SquidTokenV2',
}
const linea_mainnetContract = {
    eid: EndpointId.ZKCONSENSYS_V2_MAINNET,
    contractName: 'SquidTokenV2',
}
const solanamainnetContract: OmniPointHardhat = {
    eid: EndpointId.SOLANA_V2_MAINNET,
    address: '4rHbsW4K1kWgct4YQHJcxqbterCKma5qUW1rynEpPXuD',
    //change above for mainnet
}

export default {
    contracts: [
        { contract: base_mainnetContract },
        { contract: bscContract },
        { contract: linea_mainnetContract },
        { contract: solanamainnetContract },
    ],
    connections: [
        {
            from: base_mainnetContract,
            to: bscContract,
            config: {
                sendLibrary: '0xB5320B0B3a13cC860893E2Bd79FCd7e13484Dda2',
                receiveLibraryConfig: { receiveLibrary: '0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2CCA08ae69E0C44b18a57Ab2A87644234dAebaE4' },
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43B055483E78FAac25',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43B055483E78FAac25',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
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
            from: base_mainnetContract,
            to: linea_mainnetContract,
            config: {
                sendLibrary: '0xB5320B0B3a13cC860893E2Bd79FCd7e13484Dda2',
                receiveLibraryConfig: { receiveLibrary: '0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2CCA08ae69E0C44b18a57Ab2A87644234dAebaE4' },
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43B055483E78FAac25',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43B055483E78FAac25',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
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
            from: base_mainnetContract,
            to: solanamainnetContract,
            config: {
                sendLibrary: '0xB5320B0B3a13cC860893E2Bd79FCd7e13484Dda2',
                receiveLibraryConfig: { receiveLibrary: '0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2CCA08ae69E0C44b18a57Ab2A87644234dAebaE4' },
                    ulnConfig: {
                        confirmations: 32,
                        requiredDVNs: ['0x9e059a54699a285714207b43B055483E78FAac25'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 32,
                        requiredDVNs: ['0x9e059a54699a285714207b43B055483E78FAac25'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
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
                        gas: 100000,
                        value: 0,
                    },
                ],
            },
        },

        {
            from: bscContract,
            to: base_mainnetContract,
            config: {
                sendLibrary: '0x9F8C645f2D0b2159767Bd6E0839DE4BE49e823DE',
                receiveLibraryConfig: { receiveLibrary: '0xB217266c3A98C8B2709Ee26836C98cf12f6cCEC1', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x3ebD570ed38B1b3b4BC886999fcF507e9D584859' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                            '0xfD6865c841c2d64565562fCc7e05e619A30615f0',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                            '0xfD6865c841c2d64565562fCc7e05e619A30615f0',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: bscContract,
            to: linea_mainnetContract,
            config: {
                sendLibrary: '0x9F8C645f2D0b2159767Bd6E0839DE4BE49e823DE',
                receiveLibraryConfig: { receiveLibrary: '0xB217266c3A98C8B2709Ee26836C98cf12f6cCEC1', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x3ebD570ed38B1b3b4BC886999fcF507e9D584859' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                            '0xfD6865c841c2d64565562fCc7e05e619A30615f0',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                            '0xfD6865c841c2d64565562fCc7e05e619A30615f0',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: bscContract,
            to: solanamainnetContract,
            config: {
                sendLibrary: '0x9F8C645f2D0b2159767Bd6E0839DE4BE49e823DE',
                receiveLibraryConfig: { receiveLibrary: '0xB217266c3A98C8B2709Ee26836C98cf12f6cCEC1', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x3ebD570ed38B1b3b4BC886999fcF507e9D584859' },
                    ulnConfig: {
                        confirmations: 32,
                        requiredDVNs: ['0xfD6865c841c2d64565562fCc7e05e619A30615f0'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 32,
                        requiredDVNs: ['0xfD6865c841c2d64565562fCc7e05e619A30615f0'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 100000,
                        value: 500000,
                    },
                    {
                        msgType: 2,
                        optionType: ExecutorOptionType.COMPOSE,
                        index: 0,
                        gas: 100000,
                        value: 0,
                    },
                ],
            },
        },
        {
            from: linea_mainnetContract,
            to: base_mainnetContract,
            config: {
                sendLibrary: '0x32042142DD551b4EbE17B6FEd53131dd4b4eEa06',
                receiveLibraryConfig: { receiveLibrary: '0xE22ED54177CE1148C557de74E4873619e6c6b205', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x0408804C5dcD9796F22558464E6fE5bDdF16A7c7' },
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0x129Ee430Cb2Ff2708CCADDBDb408a88Fe4FFd480',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0x129Ee430Cb2Ff2708CCADDBDb408a88Fe4FFd480',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: linea_mainnetContract,
            to: bscContract,
            config: {
                sendLibrary: '0x32042142DD551b4EbE17B6FEd53131dd4b4eEa06',
                receiveLibraryConfig: { receiveLibrary: '0xE22ED54177CE1148C557de74E4873619e6c6b205', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x0408804C5dcD9796F22558464E6fE5bDdF16A7c7' },
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0x129Ee430Cb2Ff2708CCADDBDb408a88Fe4FFd480',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x129Ee430Cb2Ff2708CCADDBDb408a88Fe4FFd480',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        // {
        //     from: linea_mainnetContract,
        //     to: solanamainnetContract,
        //     config: {
        //         sendLibrary: '0x32042142DD551b4EbE17B6FEd53131dd4b4eEa06',
        //         receiveLibraryConfig: { receiveLibrary: '0xE22ED54177CE1148C557de74E4873619e6c6b205', gracePeriod: 0 },
        //         sendConfig: {
        //             executorConfig: { maxMessageSize: 10000, executor: '0x0408804C5dcD9796F22558464E6fE5bDdF16A7c7' },
        //             ulnConfig: {
        //                 confirmations: 32,
        //                 requiredDVNs: ['0x129Ee430Cb2Ff2708CCADDBDb408a88Fe4FFd480'],
        //                 optionalDVNs: [],
        //                 optionalDVNThreshold: 0,
        //             },
        //         },
        //         receiveConfig: {
        //             ulnConfig: {
        //                 confirmations: 32,
        //                 requiredDVNs: ['0x129Ee430Cb2Ff2708CCADDBDb408a88Fe4FFd480'],
        //                 optionalDVNs: [],
        //                 optionalDVNThreshold: 0,
        //             },
        //         },
        //         enforcedOptions: [
        //             {
        //                 msgType: 1,
        //                 optionType: ExecutorOptionType.LZ_RECEIVE,
        //                 gas: 100000,
        //                 value: 500000,
        //             },
        //             {
        //                 msgType: 2,
        //                 optionType: ExecutorOptionType.COMPOSE,
        //                 index: 0,
        //                 gas: 100000,
        //                 value: 0,
        //             },
        //         ],
        //     },
        // },
        {
            from: solanamainnetContract,
            to: base_mainnetContract,
            config: {
                sendLibrary: '7a4WjyR8VZ7yZz5XJAKm39BUGn5iT9CKcv2pmG9tdXVH',
                receiveLibraryConfig: {
                    receiveLibrary: '7a4WjyR8VZ7yZz5XJAKm39BUGn5iT9CKcv2pmG9tdXVH',
                    gracePeriod: 0,
                },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '6doghB248px58JSSwG4qejQ46kFMW4AMj7vzJnWZHNZn' },
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: ['4VDjp6XQaxoZf5RGwiPU9NR1EXSZn2TP4ATMmiSzLfhb'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: ['4VDjp6XQaxoZf5RGwiPU9NR1EXSZn2TP4ATMmiSzLfhb'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
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
                        gas: 100000,
                        value: 0,
                    },
                ],
            },
        },
        {
            from: solanamainnetContract,
            to: bscContract,
            config: {
                sendLibrary: '7a4WjyR8VZ7yZz5XJAKm39BUGn5iT9CKcv2pmG9tdXVH',
                receiveLibraryConfig: {
                    receiveLibrary: '7a4WjyR8VZ7yZz5XJAKm39BUGn5iT9CKcv2pmG9tdXVH',
                    gracePeriod: 0,
                },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '6doghB248px58JSSwG4qejQ46kFMW4AMj7vzJnWZHNZn' },
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: ['4VDjp6XQaxoZf5RGwiPU9NR1EXSZn2TP4ATMmiSzLfhb'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: ['4VDjp6XQaxoZf5RGwiPU9NR1EXSZn2TP4ATMmiSzLfhb'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
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
                        gas: 100000,
                        value: 0,
                    },
                ],
            },
        },
        // {
        //     from: solanamainnetContract,
        //     to: linea_mainnetContract,
        //     config: {
        //         sendLibrary: '7a4WjyR8VZ7yZz5XJAKm39BUGn5iT9CKcv2pmG9tdXVH',
        //         receiveLibraryConfig: {
        //             receiveLibrary: '7a4WjyR8VZ7yZz5XJAKm39BUGn5iT9CKcv2pmG9tdXVH',
        //             gracePeriod: 0,
        //         },
        //         sendConfig: {
        //             executorConfig: { maxMessageSize: 10000, executor: '6doghB248px58JSSwG4qejQ46kFMW4AMj7vzJnWZHNZn' },
        //             ulnConfig: {
        //                 confirmations: 10,
        //                 requiredDVNs: ['4VDjp6XQaxoZf5RGwiPU9NR1EXSZn2TP4ATMmiSzLfhb'],
        //                 optionalDVNs: [],
        //                 optionalDVNThreshold: 0,
        //             },
        //         },
        //         receiveConfig: {
        //             ulnConfig: {
        //                 confirmations: 10,
        //                 requiredDVNs: ['4VDjp6XQaxoZf5RGwiPU9NR1EXSZn2TP4ATMmiSzLfhb'],
        //                 optionalDVNs: [],
        //                 optionalDVNThreshold: 0,
        //             },
        //         },
        //         enforcedOptions: [
        //             {
        //                 msgType: 1,
        //                 optionType: ExecutorOptionType.LZ_RECEIVE,
        //                 gas: 200000,
        //                 value: 250000,
        //             },
        //             {
        //                 msgType: 2,
        //                 optionType: ExecutorOptionType.COMPOSE,
        //                 index: 0,
        //                 gas: 100000,
        //                 value: 0,
        //             },
        //         ],
        //     },
        // },
    ],
}
