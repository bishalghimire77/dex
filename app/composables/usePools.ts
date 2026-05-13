export const usePools = () => {
  return {
    pools: [
      {
        id: 1,
        slug: 'wcro-vies',
        type: 'liquidity',
        name: 'WCRO-VIES',

        icons: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9YKr4syBOjEY2jQ9fhTHtD46r3EpDspGyg&s',
          'https://cryptologos.cc/logos/uniswap-uni-logo.png'
        ],

        apr: '65.68%',
        tvl: '$7,579.65',
        volume: '$31.82',
        pools: 5,

        category: 'V3',
        token: 'WCRO',

        items: [
          {
            version: 'V3 · 1%',
            tvl: '$203.44',
            volume: '$0.00',
            apr: '65.68%',
            slug: 'wcro-vies-v3-1'
          },

          {
            version: 'V2 · 0.3%',
            tvl: '$7,164.75',
            volume: '$31.82',
            apr: '4.16%',
            slug: 'wcro-vies-v2-03'
          },

          {
            version: 'V3 · 0.3%',
            tvl: '$211.45',
            volume: '$0.00',
            apr: '< 0.0001%',
            slug: 'wcro-vies-v3-03'
          }
        ]
      },

      {
        id: 2,
        slug: 'wcro-xtc',

        name: 'WCRO-$XTC',
        type: 'liquidity',

        icons: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9YKr4syBOjEY2jQ9fhTHtD46r3EpDspGyg&s',
          'https://inoai.org/wp-content/uploads/2025/05/transparent-logo.png'
        ],

        apr: '54.66%',
        tvl: '$6,322.34',
        volume: '$0.00',
        pools: 4,

        category: 'V2',
        token: 'WCRO',

        items: [
          {
            version: 'V3 · 1%',
            tvl: '$400.00',
            volume: '$10.00',
            apr: '20.12%',
            slug: 'wcro-v3s-v3-1'
          }
        ]
      },

      {
        id: 3,
        slug: 'v3s-$XTC',

        name: 'V3S-$XTC',
        type: 'liquidity',

        icons: [
          'https://cryptologos.cc/logos/uniswap-uni-logo.png',
          'https://inoai.org/wp-content/uploads/2025/05/transparent-logo.png'
        ],

        apr: '36.94%',
        tvl: '$2,147.16',
        volume: '$0.00',
        pools: 2,

        category: 'Stable',
        token: 'VVS',

        items: []
      }
    ]
  }
}