export const usePools = () => {
  return {
    pools: [
      {
        id: 1,
        slug: "wcro-usdc",
        name: "WCRO-USDC",
        type: "liquidity",
        apr: "42.16%",
        tvl: "$4.82M",
        volume: "$921K",

        token0: "0x4F8a1cD9A9dB5D2c9f6B2d7a2fA8c6d3b8f1A234",
        token1: "0x7E2f5bA6c3D9E8f2A1b4c5D6e7F8a9B1c2D3e4F5",

        icons: [
          "https://cryptologos.cc/logos/cronos-cro-logo.png?v=040",
          "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=040",
        ],
        items: [
          {
            poolAddress: "0x11fA82bA3c9E4d7A1e2b3D4c5F6a7B8c9D0e1F22",
            version: "V3",

            token0: {
              name: "WCRO",
              total: "234M",
            },

            token1: {
              name: "USDC",
              total: "238M",
            },

            tvl: "$4.82M",
            volume: "$921K",
            apr: "42.16%",
            slug: "wcro-usdc-v3-1",
            feeTier: "0.05%",
            transactions: [
              {
                from: "0x4fd2...a921",
                type: "SWAP",
                wcro: "-124.82",
                vies: "129.22",
                time: "5/11/2026, 4:22:13 PM",
              },

              {
                from: "0x71ca...9de1",
                type: "ADD",
                wcro: "882.14",
                vies: "-901.51",
                time: "5/11/2026, 2:41:28 PM",
              },

              {
                from: "0xa11e...76bc",
                type: "REMOVE",
                wcro: "-441.27",
                vies: "438.99",
                time: "5/10/2026, 10:17:44 PM",
              },
            ],
          },

          {
            poolAddress: "0x88cD92fA2b4E6d8C1a9F7e3B2d1C5f6A8e9B7d11",
            version: "V3",

            token0: {
              name: "WCRO",
              total: "34M",
            },

            token1: {
              name: "USDC",
              total: "38M",
            },

            tvl: "$1.94M",
            volume: "$388K",
            apr: "31.42%",
            slug: "wcro-usdc-v3-2",
            feeTier: "0.3%",
            transactions: [
              {
                from: "0x82de...11af",
                type: "SWAP",
                wcro: "-52.31",
                vies: "51.90",
                time: "5/11/2026, 9:15:09 AM",
              },

              {
                from: "0x17bc...4da2",
                type: "ADD",
                wcro: "1431.82",
                vies: "-1422.66",
                time: "5/10/2026, 6:02:55 PM",
              },

              {
                from: "0x93fa...be01",
                type: "REMOVE",
                wcro: "-320.44",
                vies: "318.12",
                time: "5/9/2026, 8:31:16 PM",
              },
            ],
          },

          {
            poolAddress: "0x7aB4e6D8c1F9a2B3d4E5c6F7a8B9d0E1f2C3d4A5",
            version: "V2",

            token0: {
              name: "WCRO",
              total: "24K",
            },

            token1: {
              name: "USDC",
              total: "23K",
            },

            tvl: "$823K",
            volume: "$104K",
            apr: "19.87%",
            slug: "wcro-usdc-v2-1",
            feeTier: "1%",
            transactions: [
              {
                from: "0x55cd...7af2",
                type: "SWAP",
                wcro: "-18.22",
                vies: "17.98",
                time: "5/8/2026, 3:11:08 PM",
              },

              {
                from: "0x11ab...dd91",
                type: "ADD",
                wcro: "512.12",
                vies: "-498.91",
                time: "5/8/2026, 1:27:45 PM",
              },

              {
                from: "0x7cc1...1b92",
                type: "REMOVE",
                wcro: "-121.88",
                vies: "118.44",
                time: "5/7/2026, 11:05:52 PM",
              },
            ],
          },

          {
            poolAddress: "0x5C6d7E8f9A0b1C2d3E4f5A6b7C8d9E0f1A2b3C4d",
            version: "V3",

            token0: {
              name: "WCRO",
              total: "234B",
            },

            token1: {
              name: "USDC",
              total: "238B",
            },

            tvl: "$6.21M",
            volume: "$1.42M",
            apr: "55.72%",
            slug: "wcro-usdc-v3-3",
            feeTier: "0.01%",
            transactions: [
              {
                from: "0x6af2...8d11",
                type: "SWAP",
                wcro: "-2104.82",
                vies: "2091.66",
                time: "5/11/2026, 5:48:12 PM",
              },

              {
                from: "0x90bc...f772",
                type: "ADD",
                wcro: "8421.99",
                vies: "-8392.11",
                time: "5/11/2026, 12:19:44 PM",
              },

              {
                from: "0xe21f...cc82",
                type: "REMOVE",
                wcro: "-3121.17",
                vies: "3092.77",
                time: "5/10/2026, 7:54:31 PM",
              },
            ],
          },

          {
            poolAddress: "0x9E8f7D6c5B4a39281716151413121110FfEeDdCc",
            version: "V2",

            token0: {
              name: "WCRO",
              total: "4M",
            },

            token1: {
              name: "USDC",
              total: "5M",
            },

            tvl: "$2.13M",
            volume: "$512K",
            apr: "27.13%",
            slug: "wcro-usdc-v2-2",
            feeTier: "0.5%",
            transactions: [
              {
                from: "0x1aa4...92ff",
                type: "SWAP",
                wcro: "-612.88",
                vies: "603.41",
                time: "5/11/2026, 6:11:08 PM",
              },

              {
                from: "0x73bc...e7a1",
                type: "ADD",
                wcro: "1822.11",
                vies: "-1801.76",
                time: "5/10/2026, 5:08:52 PM",
              },

              {
                from: "0xcc81...4d21",
                type: "REMOVE",
                wcro: "-722.33",
                vies: "710.42",
                time: "5/10/2026, 1:11:29 PM",
              },
            ],
          },

          {
            poolAddress: "0x1D2c3B4a5E6f7D8c9B0a1F2e3D4c5B6a7E8f9D0c",
            version: "V3",

            token0: {
              name: "WCRO",
              total: "2M",
            },

            token1: {
              name: "USDC",
              total: "3M",
            },

            tvl: "$9.41M",
            volume: "$2.88M",
            apr: "61.44%",
            slug: "wcro-usdc-v3-4",
            feeTier: "0.05%",
            transactions: [
              {
                from: "0x44ad...99bc",
                type: "SWAP",
                wcro: "-0.18 BTC",
                vies: "4.91 ETH",
                time: "5/11/2026, 8:42:11 PM",
              },

              {
                from: "0x7ef2...3ab1",
                type: "ADD",
                wcro: "1.12 BTC",
                vies: "-31.42 ETH",
                time: "5/11/2026, 1:11:53 PM",
              },

              {
                from: "0xa91d...72ce",
                type: "REMOVE",
                wcro: "-0.41 BTC",
                vies: "11.09 ETH",
                time: "5/10/2026, 10:27:44 AM",
              },
            ],
          },
        ],
      },

      {
        id: 2,
        slug: "btc-eth",
        name: "WBTC-ETH",
        type: "liquidity",
        apr: "18.74%",
        tvl: "$12.4M",
        volume: "$2.8M",

        token0: "0x9A1b2C3d4E5f6A7b8C9d0E1f2A3b4C5d6E7f8A9B",
        token1: "0x2B3c4D5e6F7a8B9c0D1e2F3a4B5c6D7e8F9a0B1C",

        icons: [
          "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=040",
          "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=040",
        ],
        items: [
          {
            poolAddress: "0x7fA2e4D5c6B8a9E1f2C3d4B5a6E7f8D9c0A1b2C3",
            version: "V3",

            token0: {
              name: "WBTC",
              total: "7B",
            },

            token1: {
              name: "ETH",
              total: "7B",
            },

            tvl: "$12.4M",
            volume: "$2.8M",
            apr: "18.74%",
            slug: "wbtc-eth-v3-1",
            feeTier: "1%",
            transactions: [
              {
                from: "0x2aa1...c7d2",
                type: "SWAP",
                wcro: "-0.08 BTC",
                vies: "2.11 ETH",
                time: "5/10/2026, 11:38:15 PM",
              },

              {
                from: "0x6bc2...991f",
                type: "ADD",
                wcro: "0.92 BTC",
                vies: "-24.18 ETH",
                time: "5/10/2026, 7:42:58 PM",
              },

              {
                from: "0x1de8...fa31",
                type: "REMOVE",
                wcro: "-0.33 BTC",
                vies: "8.84 ETH",
                time: "5/9/2026, 9:16:27 PM",
              },
            ],
          },

          {
            poolAddress: "0x2E3f4A5b6C7d8E9f0A1b2C3d4E5f6A7b8C9d0E1f",
            version: "V2",

            token0: {
              name: "WBTC",
              total: "23B",
            },

            token1: {
              name: "ETH",
              total: "26B",
            },

            tvl: "$8.91M",
            volume: "$1.9M",
            apr: "14.21%",
            slug: "wbtc-eth-v2-1",
            feeTier: "0.3%",
            transactions: [
              {
                from: "0x1875...7629",
                type: "SWAP",
                wcro: "-10.18",
                vies: "5,475.99",
                time: "5/8/2026, 1:36:53 PM",
              },

              {
                from: "0x0e64...c7c8",
                type: "ADD",
                wcro: "1.77",
                vies: "-933.88",
                time: "5/7/2026, 11:24:29 PM",
              },

              {
                from: "0x19dd...2f7d",
                type: "REMOVE",
                wcro: "2.46",
                vies: "-1,296.61",
                time: "5/7/2026, 11:24:27 PM",
              },
            ],
          },

          {
            poolAddress: "0x6B7c8D9e0F1a2B3c4D5e6F7a8B9c0D1e2F3a4B5c",
            version: "V3",

            token0: {
              name: "WBTC",
              total: "2B",
            },

            token1: {
              name: "ETH",
              total: "3B",
            },

            tvl: "$18.2M",
            volume: "$4.2M",
            apr: "23.89%",
            slug: "wbtc-eth-v3-2",
            feeTier: "0.05%",
            transactions: [
              {
                from: "0x1875...7629",
                type: "SWAP",
                wcro: "-10.18",
                vies: "5,475.99",
                time: "5/8/2026, 1:36:53 PM",
              },

              {
                from: "0x0e64...c7c8",
                type: "ADD",
                wcro: "1.77",
                vies: "-933.88",
                time: "5/7/2026, 11:24:29 PM",
              },

              {
                from: "0x19dd...2f7d",
                type: "REMOVE",
                wcro: "2.46",
                vies: "-1,296.61",
                time: "5/7/2026, 11:24:27 PM",
              },
            ],
          },

          {
            poolAddress: "0x0F1e2D3c4B5a697887766554433221100FFEEDDC",
            version: "V3",

            token0: {
              name: "WBTC",
              total: "234M",
            },

            token1: {
              name: "ETH",
              total: "238M",
            },

            tvl: "$5.1M",
            volume: "$782K",
            apr: "11.92%",
            slug: "wbtc-eth-v3-3",
            feeTier: "0.01%",
            transactions: [
              {
                from: "0x1875...7629",
                type: "SWAP",
                wcro: "-10.18",
                vies: "5,475.99",
                time: "5/8/2026, 1:36:53 PM",
              },

              {
                from: "0x0e64...c7c8",
                type: "ADD",
                wcro: "1.77",
                vies: "-933.88",
                time: "5/7/2026, 11:24:29 PM",
              },

              {
                from: "0x19dd...2f7d",
                type: "REMOVE",
                wcro: "2.46",
                vies: "-1,296.61",
                time: "5/7/2026, 11:24:27 PM",
              },
            ],
          },
        ],
      },

      {
        id: 3,
        slug: "vvs-cro",
        name: "VVS-WCRO",
        type: "farm",
        apr: "87.91%",
        tvl: "$824K",
        volume: "$142K",

        token0: "0xA1b2c3D4e5F6a7B8c9D0E1f2A3b4C5d6E7f8A9b0",
        token1: "0xB2c3D4e5F6a7B8c9D0E1f2A3b4C5d6E7f8A9b0C1",

        icons: [
          "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=040",
          "https://cryptologos.cc/logos/cronos-cro-logo.png?v=040",
        ],

        items: [
          {
            poolAddress: "0x6D7e8F9a0B1c2D3e4F5a6B7c8D9e0F1a2B3c4D5e",
            version: "V2",

            token0: {
              name: "VVS",
              total: "11K",
            },

            token1: {
              name: "WCRO",
              total: "13K",
            },

            tvl: "$824K",
            volume: "$142K",
            apr: "87.91%",
            slug: "vvs-cro-v2-1",
            feeTier: "0.3%",
            transactions: [
              {
                from: "0x1875...7629",
                type: "SWAP",
                wcro: "-10.18",
                vies: "5,475.99",
                time: "5/8/2026, 1:36:53 PM",
              },

              {
                from: "0x0e64...c7c8",
                type: "ADD",
                wcro: "1.77",
                vies: "-933.88",
                time: "5/7/2026, 11:24:29 PM",
              },

              {
                from: "0x19dd...2f7d",
                type: "REMOVE",
                wcro: "2.46",
                vies: "-1,296.61",
                time: "5/7/2026, 11:24:27 PM",
              },
            ],
          },
        ],
      },

      {
        id: 4,
        slug: "lion-usdt",
        name: "LION-USDT",

        type: "farm",
        apr: "124.21%",
        tvl: "$612K",
        volume: "$81K",

        token0: "0xF1e2D3c4B5a697887766554433221100FFEEDDCC",
        token1: "0xCCBBAA99887766554433221100FFEEDDCCBBAA99",

        icons: [
          "https://cryptologos.cc/logos/polygon-matic-logo.png?v=040",
          "https://cryptologos.cc/logos/tether-usdt-logo.png?v=040",
        ],
        items: [
          {
            poolAddress: "0x0a1B2c3D4e5F6a7B8c9D0e1F2A3b4C5D6E7F8a9B",
            version: "V3",

            token0: {
              name: "LION",
              total: "44K",
            },

            token1: {
              name: "USDT",
              total: "47K",
            },

            tvl: "$612K",
            volume: "$81K",
            apr: "124.21%",
            slug: "lion-usdt-v3-1",
            feeTier: "0.01%",
            transactions: [
              {
                from: "0x1875...7629",
                type: "SWAP",
                wcro: "-10.18",
                vies: "5,475.99",
                time: "5/8/2026, 1:36:53 PM",
              },

              {
                from: "0x0e64...c7c8",
                type: "ADD",
                wcro: "1.77",
                vies: "-933.88",
                time: "5/7/2026, 11:24:29 PM",
              },

              {
                from: "0x19dd...2f7d",
                type: "REMOVE",
                wcro: "2.46",
                vies: "-1,296.61",
                time: "5/7/2026, 11:24:27 PM",
              },
            ],
          },
        ],
      },

      {
        id: 5,
        slug: "sol-usdc",
        name: "SOL-USDC",
        type: "liquidity",
        apr: "26.48%",
        tvl: "$7.9M",
        volume: "$1.4M",
        token0: "0x99887766554433221100FFEEDDCCBBAA11223344",
        token1: "0x5566778899AABBCCDDEEFF001122334455667788",

        icons: [
          "https://cryptologos.cc/logos/solana-sol-logo.png?v=040",
          "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=040",
        ],
        items: [
          {
            poolAddress: "0x2A3b4C5d6E7f8A9b0C1d2E3f4A5b6C7d8E9f0A1B",
            version: "V3",

            token0: {
              name: "SOL",
              total: "99K",
            },

            token1: {
              name: "USDC",
              total: "1M",
            },

            tvl: "$7.9M",
            volume: "$1.4M",
            apr: "26.48%",
            slug: "sol-usdc-v3-1",
            feeTier: "0.05%",
            transactions: [
              {
                from: "0x1875...7629",
                type: "SWAP",
                wcro: "-10.18",
                vies: "5,475.99",
                time: "5/8/2026, 1:36:53 PM",
              },

              {
                from: "0x0e64...c7c8",
                type: "ADD",
                wcro: "1.77",
                vies: "-933.88",
                time: "5/7/2026, 11:24:29 PM",
              },

              {
                from: "0x19dd...2f7d",
                type: "REMOVE",
                wcro: "2.46",
                vies: "-1,296.61",
                time: "5/7/2026, 11:24:27 PM",
              },
            ],
          },
        ],
      },
    ],
  };
};

export const earnTokens = () => {
  return {
    earnTok: [
      {
        name: "WCRO-USDC",
        type: "liquidity",

        tokenAdd0: "0x4F8a1cD9A9dB5D2c9f6B2d7a2fA8c6d3b8f1A234",
        tokenAdd1: "0x7E2f5bA6c3D9E8f2A1b4c5D6e7F8a9B1c2D3e4F5",

        icons: [
          "https://cryptologos.cc/logos/cronos-cro-logo.png?v=040",
          "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=040",
        ],
        poolAddress: "0x11fA82bA3c9E4d7A1e2b3D4c5F6a7B8c9D0e1F22",
        version: "V3",

        token0: {
          name: "WCRO",
          total: "234M",
        },

        token1: {
          name: "USDC",
          total: "238M",
        },

        tvl: "$4.82M",
        volume: "$921K",
        apr: "42.16%",
        slug: "wcro-usdc-v3-1",
        feeTier: "0.05%",
        transactions: [
          {
            from: "0x4fd2...a921",
            type: "SWAP",
            wcro: "-124.82",
            vies: "129.22",
            time: "5/11/2026, 4:22:13 PM",
          },

          {
            from: "0x71ca...9de1",
            type: "ADD",
            wcro: "882.14",
            vies: "-901.51",
            time: "5/11/2026, 2:41:28 PM",
          },

          {
            from: "0xa11e...76bc",
            type: "REMOVE",
            wcro: "-441.27",
            vies: "438.99",
            time: "5/10/2026, 10:17:44 PM",
          },
        ],
      },

      {
        name: "WBTC-ETH",
        type: "liquidity",

        tokenAdd0: "0x4F8a1cD9A9dB5D2c9f6B2d7a2fA8c6d3b8f1A234",
        tokenAdd1: "0x7E2f5bA6c3D9E8f2A1b4c5D6e7F8a9B1c2D3e4F5",

        icons: [
          "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=040",
          "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=040",
        ],
        poolAddress: "0x88cD92fA2b4E6d8C1a9F7e3B2d1C5f6A8e9B7d11",
        version: "V3",

        token0: {
          name: "WBTC",
          total: "34M",
        },

        token1: {
          name: "ETH",
          total: "38M",
        },

        tvl: "$1.94M",
        volume: "$388K",
        apr: "31.42%",
        slug: "wbc-eth",
        feeTier: "0.3%",
        transactions: [
          {
            from: "0x82de...11af",
            type: "SWAP",
            wcro: "-52.31",
            vies: "51.90",
            time: "5/11/2026, 9:15:09 AM",
            hash: "0xc730fca515b67b4ffaeeedce5d077435cba1cc39aaf16fdd392fd70b8903a3a7"
          },

          {
            from: "0x17bc...4da2",
            type: "ADD",
            wcro: "1431.82",
            vies: "-1422.66",
            time: "5/10/2026, 6:02:55 PM",
            hash: "0xc730fca515b67b4ffaeeedce5d077435cba1cc39aaf16fdd392fd70b8903a3a7"
          },

          {
            from: "0x93fa...be01",
            type: "REMOVE",
            wcro: "-320.44",
            vies: "318.12",
            time: "5/9/2026, 8:31:16 PM",
            hash: "0xc730fca515b67b4ffaeeedce5d077435cba1cc39aaf16fdd392fd70b8903a3a7"
          },
        ],
      },

      {
        poolAddress: "0x7aB4e6D8c1F9a2B3d4E5c6F7a8B9d0E1f2C3d4A5",
        version: "V2",

        name: "ETH-WCRO",
        type: "liquidity",

        tokenAdd0: "0x4F8a1cD9A9dB5D2c9f6B2d7a2fA8c6d3b8f1A234",
        tokenAdd1: "0x7E2f5bA6c3D9E8f2A1b4c5D6e7F8a9B1c2D3e4F5",

        icons: [
          "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=040",
          "https://cryptologos.cc/logos/cronos-cro-logo.png?v=040",
        ],

        token0: {
          name: "ETH",
          total: "24K",
        },

        token1: {
          name: "WCRO",
          total: "23K",
        },

        tvl: "$823K",
        volume: "$104K",
        apr: "19.87%",
        slug: "wcro-usdc-v2-1",
        feeTier: "1%",
        transactions: [
          {
            from: "0x55cd...7af2",
            type: "SWAP",
            wcro: "-18.22",
            vies: "17.98",
            time: "5/8/2026, 3:11:08 PM",
          },

          {
            from: "0x11ab...dd91",
            type: "ADD",
            wcro: "512.12",
            vies: "-498.91",
            time: "5/8/2026, 1:27:45 PM",
          },

          {
            from: "0x7cc1...1b92",
            type: "REMOVE",
            wcro: "-121.88",
            vies: "118.44",
            time: "5/7/2026, 11:05:52 PM",
          },
        ],
      },

      {
        poolAddress: "0x5C6d7E8f9A0b1C2d3E4f5A6b7C8d9E0f1A2b3C4d",
        version: "V3",

        name: "MATIC-USDT",
        type: "liquidity",

        tokenAdd0: "0x4F8a1cD9A9dB5D2c9f6B2d7a2fA8c6d3b8f1A234",
        tokenAdd1: "0x7E2f5bA6c3D9E8f2A1b4c5D6e7F8a9B1c2D3e4F5",

        icons: [
          "https://cryptologos.cc/logos/polygon-matic-logo.png?v=040",
          "https://cryptologos.cc/logos/tether-usdt-logo.png?v=040",
        ],
        token0: {
          name: "MATIC",
          total: "234B",
        },

        token1: {
          name: "USDT",
          total: "238B",
        },

        tvl: "$6.21M",
        volume: "$1.42M",
        apr: "55.72%",
        slug: "matic-usdc",
        feeTier: "0.01%",
        transactions: [
          {
            from: "0x6af2...8d11",
            type: "SWAP",
            wcro: "-2104.82",
            vies: "2091.66",
            time: "5/11/2026, 5:48:12 PM",
            hash: "0xc730fca515b67b4ffaeeedce5d077435cba1cc39aaf16fdd392fd70b8903a3a7"
          },

          {
            from: "0x90bc...f772",
            type: "ADD",
            wcro: "8421.99",
            vies: "-8392.11",
            time: "5/11/2026, 12:19:44 PM",
            hash: "0xc730fca515b67b4ffaeeedce5d077435cba1cc39aaf16fdd392fd70b8903a3a7"
          },

          {
            from: "0xe21f...cc82",
            type: "REMOVE",
            wcro: "-3121.17",
            vies: "3092.77",
            time: "5/10/2026, 7:54:31 PM",
            hash: "0xc730fca515b67b4ffaeeedce5d077435cba1cc39aaf16fdd392fd70b8903a3a7"
          },
        ],
      },

      {
        poolAddress: "0x9E8f7D6c5B4a39281716151413121110FfEeDdCc",
        version: "V2",

        name: "SOL-USDC",
        type: "liquidity",

        tokenAdd0: "0x4F8a1cD9A9dB5D2c9f6B2d7a2fA8c6d3b8f1A234",
        tokenAdd1: "0x7E2f5bA6c3D9E8f2A1b4c5D6e7F8a9B1c2D3e4F5",

        icons: [
          "https://cryptologos.cc/logos/solana-sol-logo.png?v=040",
          "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=040",
        ],

        token0: {
          name: "SOL",
          total: "4M",
        },

        token1: {
          name: "USDC",
          total: "5M",
        },

        tvl: "$2.13M",
        volume: "$512K",
        apr: "27.13%",
        slug: "wcro-usdc-v2-2",
        feeTier: "0.5%",
        transactions: [
          {
            from: "0x1aa4...92ff",
            type: "SWAP",
            wcro: "-612.88",
            vies: "603.41",
            time: "5/11/2026, 6:11:08 PM",
            hash: "0xc730fca515b67b4ffaeeedce5d077435cba1cc39aaf16fdd392fd70b8903a3a7"
          },

          {
            from: "0x73bc...e7a1",
            type: "ADD",
            wcro: "1822.11",
            vies: "-1801.76",
            time: "5/10/2026, 5:08:52 PM",
            hash: "0xc730fca515b67b4ffaeeedce5d077435cba1cc39aaf16fdd392fd70b8903a3a7"
          },

          {
            from: "0xcc81...4d21",
            type: "REMOVE",
            wcro: "-722.33",
            vies: "710.42",
            time: "5/10/2026, 1:11:29 PM",
            hash: "0xc730fca515b67b4ffaeeedce5d077435cba1cc39aaf16fdd392fd70b8903a3a7"
          },
        ],
      },

      {
        poolAddress: "0x1D2c3B4a5E6f7D8c9B0a1F2e3D4c5B6a7E8f9D0c",
        version: "V3",

        name: "WCRO-USDC",
        type: "liquidity",

        tokenAdd0: "0x4F8a1cD9A9dB5D2c9f6B2d7a2fA8c6d3b8f1A234",
        tokenAdd1: "0x7E2f5bA6c3D9E8f2A1b4c5D6e7F8a9B1c2D3e4F5",

        icons: [
          "https://cryptologos.cc/logos/cronos-cro-logo.png?v=040",
          "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=040",
        ],

        token0: {
          name: "WCRO",
          total: "2M",
        },

        token1: {
          name: "USDC",
          total: "3M",
        },

        tvl: "$9.41M",
        volume: "$2.88M",
        apr: "61.44%",
        slug: "wcro-usdc-v3-4",
        feeTier: "0.05%",
        transactions: [
          {
            from: "0x44ad...99bc",
            type: "SWAP",
            wcro: "-0.18 BTC",
            vies: "4.91 ETH",
            time: "5/11/2026, 8:42:11 PM",
            hash: "0xc730fca515b67b4ffaeeedce5d077435cba1cc39aaf16fdd392fd70b8903a3a7"
          },

          {
            from: "0x7ef2...3ab1",
            type: "ADD",
            wcro: "1.12 BTC",
            vies: "-31.42 ETH",
            time: "5/11/2026, 1:11:53 PM",
            hash: "0xc730fca515b67b4ffaeeedce5d077435cba1cc39aaf16fdd392fd70b8903a3a7"
          },

          {
            from: "0xa91d...72ce",
            type: "REMOVE",
            wcro: "-0.41 BTC",
            vies: "11.09 ETH",
            time: "5/10/2026, 10:27:44 AM",
            hash: "0xc730fca515b67b4ffaeeedce5d077435cba1cc39aaf16fdd392fd70b8903a3a7"
          },
        ],
      },
    ],
  };
};
