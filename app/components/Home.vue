<script setup>
import {
  BaggageClaim,
  BringToFront,
  Droplet,
  LucideArrowLeftRight,
} from "lucide-vue-next";
const selectedToken = useState("selectedToken", () => null);
const coins = [
  {
    token: "LION",
    name: "Loaded Lions",
    price: "$0.00209",
    change: "+0.03%",
    positive: true,
    icon: "https://cryptologos.cc/logos/crypto-com-coin-cro-logo.png?v=040",
  },
  {
    token: "USDC",
    name: "USDC Token",
    price: "$1.00",
    change: "+0.0001%",
    positive: true,
    icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=040",
  },
  {
    token: "VVS",
    name: "VVS Token",
    price: "$0.05141",
    change: "+0.009%",
    positive: true,
    icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=040",
  },
  {
    token: "USDT",
    name: "Tether USD",
    price: "$0.99860",
    change: "-0.0007%",
    positive: false,
    icon: "https://cryptologos.cc/logos/tether-usdt-logo.png?v=040",
  },
  {
    token: "FM",
    name: "Full Moon",
    price: "$0.00376",
    change: "+0.01%",
    positive: true,
    icon: "https://cryptologos.cc/logos/moonbeam-glmr-logo.png?v=040",
  },
  {
    token: "WCRO",
    name: "WCRO Token",
    price: "$0.07850",
    change: "+0.0093%",
    positive: true,
    icon: "https://cryptologos.cc/logos/cronos-cro-logo.png?v=040",
  },
  {
    token: "WBTC",
    name: "WBTC Token",
    price: "$80,400.76",
    change: "-0.01%",
    positive: false,
    icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=040",
  },
];

// const earnTokens = [
//   {
//     name: "LION",
//     apr: "315.08%",
//     type: "liquidity",
//     icon: "https://cryptologos.cc/logos/crypto-com-coin-cro-logo.png?v=040",
//   },
//   {
//     name: "V3S",
//     apr: "315.08%",
//     type: "liquidity",
//     icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=040",
//   },
//   {
//     name: "WCRO",
//     apr: "198.50%",
//     type: "liquidity",
//     icon: "https://cryptologos.cc/logos/cronos-cro-logo.png?v=040",
//   },
//   {
//     name: "VIES",
//     apr: "198.50%",
//     type: "liquidity",
//     icon: "https://cryptologos.cc/logos/vechain-vet-logo.png?v=040",
//   },
//   {
//     name: "xVVS",
//     apr: "3.87%",
//     type: "stake",
//     icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=040",
//   },
// ];

const { pools } = usePools();

const earnTokens = pools;

const trendingFilters = [
  "All",
  "Gainers",
  "Losers",
  "Meme",
  "Defi",
  "NFT",
  "Gaming",
  "Trending",
  "AI",
  "Stable",
  "L1",
  "SocialFi",
];

const trending = [
  {
    token: "LION",
    name: "Loaded Lions",
    price: "$0.00209",
    change: "+0.03%",
    positive: true,
    icon: "https://cryptologos.cc/logos/crypto-com-coin-cro-logo.png?v=040",
  },
  {
    token: "USDC",
    name: "USDC Token",
    price: "$1.00",
    change: "+0.0001%",
    positive: true,
    icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=040",
  },
  {
    token: "VVS",
    name: "VVS Token",
    price: "$0.05141",
    change: "+0.009%",
    positive: true,
    icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=040",
  },
  {
    token: "USDT",
    name: "Tether USD",
    price: "$0.99860",
    change: "-0.0007%",
    positive: false,
    icon: "https://cryptologos.cc/logos/tether-usdt-logo.png?v=040",
  },
  {
    token: "FM",
    name: "Full Moon",
    price: "$0.00376",
    change: "+0.01%",
    positive: true,
    icon: "https://cryptologos.cc/logos/moonbeam-glmr-logo.png?v=040",
  },
  {
    token: "WCRO",
    name: "WCRO Token",
    price: "$0.07850",
    change: "+0.0093%",
    positive: true,
    icon: "https://cryptologos.cc/logos/cronos-cro-logo.png?v=040",
  },
  {
    token: "WBTC",
    name: "WBTC Token",
    price: "$80,400.76",
    change: "-0.01%",
    positive: false,
    icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=040",
  },
];
</script>

<template>
  <div class="min-h-screen overflow-hidden text-white relative">
    <!-- HERO -->
    <section class="relative z-10 max-w-[1800px] mx-auto px-8 pt-10 pb-28">
      <!-- FLOATING CRYSTALS -->
      <div
        class="absolute top-[20px] right-[220px] w-[90px] h-[90px] rounded-[30px] rotate-[20deg] bg-gradient-to-br from-white via-cyan-300 to-violet-400 opacity-80 blur-[1px]"
      ></div>

      <div
        class="absolute right-[120px] top-[250px] w-[260px] h-[260px] rounded-[60px] rotate-[22deg] bg-gradient-to-br from-white via-blue-300 to-violet-400 opacity-90"
      ></div>

      <!-- CONTENT -->
      <div class="max-w-[900px] pt-8">
        <div
          class="text-4xl md:text-8xl font-black leading-[0.95] tracking-[-4px]"
        >
          Very, Very,

          <span class="text-cyan-400"> Smart </span>
        </div>

        <div class="mt-6 text-white/70 text-sm max-w-[620px]">
          A sharpened focus on what simple, safe and smart really mean
        </div>

        <NuxtLink to="/trade" class="cursor-pointer hover:scale:[1.2]">
          <button
            class="mt-10 py-2 px-7 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-sm font-bold cursor-pointer hover:scale:[1.2]"
          >
            Dig real wins →
          </button>
        </NuxtLink>
      </div>
    </section>

    <!-- MAIN -->
    <section class="relative z-10 max-w-[1650px] mx-auto px-6 pb-24">
      <!-- ACTION BAR -->
      <div
        class="rounded-xl border border-white/5 bg-[#161f2d]/80 backdrop-blur-xl p-7 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
      >
        <div>
          <div class="text-4xl font-black">Tap. Swap. Earn.</div>

          <div class="text-white/60 mt-1 text-sm">
            Jump right in, everything you need
          </div>
        </div>

        <!-- ACTIONS -->
        <div class="flex flex-wrap gap-6">
          <NuxtLink to="/trade">
            <div
              class="flex items-center gap-2 hover:text-cyan-400 transition-colors"
            >
              <div class="flex items-center justify-center w-8 h-8 rounded-xl">
                <LucideArrowLeftRight />
              </div>
              <span class="text-sm font-semibold">Swap</span>
            </div>
          </NuxtLink>

          <NuxtLink to="#">
            <div class="flex items-center gap-2 hover:text-cyan-400">
              <div class="flex items-center justify-center w-6 h-6 rounded-xl">
                <BringToFront />
              </div>
              <span class="text-sm font-semibold">Bridge</span>
            </div>
          </NuxtLink>

          <NuxtLink to="/liquidity">
            <div class="flex items-center gap-2 hover:text-cyan-400">
              <div class="flex items-center justify-center w-6 h-6 rounded-xl">
                <Droplet />
              </div>
              <span class="text-sm font-semibold">Add Liquidity</span>
            </div>
          </NuxtLink>

          <div class="flex items-center gap-2 hover:text-cyan-400">
            <div class="flex items-center justify-center w-6 h-6 rounded-xl">
              <BaggageClaim />
            </div>
            <span class="text-sm font-semibold">Claim</span>
          </div>
        </div>
      </div>

      <!-- COINS -->
      <div class="mt-12">
        <div class="flex items-center justify-between mb-6">
          <div class="text-2xl font-black">New digs on VVS</div>

          <div class="text-white/50 text-sm max-w-[280px] text-right">
            Discover new listed tokens, and never miss any opportunities
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          <NuxtLink
            to="/trade"
            @click="selectedToken = coin"
            class="rounded-2xl border border-white/5 bg-[#101827] p-5 hover:border-cyan-400/40 transition-all"
            v-for="coin in coins"
            :key="coin.name"
          >
            <div>
              <div class="flex items-center justify-between">
                <div class="font-bold flex items-center gap-2">
                  <span
                    ><img :src="coin.icon" alt="" srcset="" class="h-8"
                  /></span>
                  <span> {{ coin.name }} </span>
                </div>
              </div>

              <div class="mt-5 flex justify-between">
                <div>
                  <div
                    class="text-white/40 text-[13px] flex items-center gap-1"
                  >
                    <span>Price</span>
                    <span class="text-[#00ff9d] font-bold text-[14px]">{{
                      coin.change
                    }}</span>
                  </div>
                  <div
                    class="text-white/40 text-[13px] flex items-center gap-1"
                  >
                    <span>M Cap</span>
                  </div>

                  <div class="mt-1 font-semibold"></div>
                </div>

                <div>
                  <div class="text-white/40 text-[13px]">
                    <span>{{ coin.price }}</span>
                  </div>

                  <div class="mt-1 font-semibold">
                    {{ coin.price }}
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- TRENDING -->
      <div class="grid grid-cols-1 xl:grid-cols-[1.1fr_1fr] gap-2 mt-14">
        <!-- LEFT -->
        <!-- EARN BY TOKENS -->
        <div
          class="rounded-[34px] border border-white/5 bg-[#0f1725]/90 backdrop-blur-xl p-8 overflow-hidden relative"
        >
          <!-- BACKGROUND GLOW -->
          <div
            class="absolute right-[-120px] bottom-[-120px] w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[120px]"
          ></div>

          <!-- TOP -->
          <div
            class="relative z-10 flex items-center text-center justify-between gap-10 flex-col lg:flex-row"
          >
            <div class="text-2xl font-black tracking-[-2px] leading-none">
              Earn by Tokens
            </div>

            <div
              class="text-white/50 text-sm text-center leading-[1.5] max-w-[360px] h-[100%]"
            >
              Swap, stake in simple clicks, so you focus on winning.
            </div>
          </div>

          <!-- TOKEN LIST -->
          <div class="relative z-10 mt-10 space-y-6">
            <NuxtLink
              :to="`/pools/${token.items?.[0]?.slug}`"
              v-for="token in earnTokens"
              :key="token.name"
            >
              <div
                class="relative cursor-pointer overflow-hidden rounded-[28px] border border-white/10 bg-[#111827]/70 px-7 py-4 flex items-center justify-between transition-all hover:border-cyan-400/30 hover:bg-[#131d2c] mb-2"
              >
                <!-- LEFT -->
                <div class="flex items-center gap-4">
                  <!-- ICON -->
                  <div
                    class="w-[28px] h-[28px] rounded-full overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center shrink-0"
                  >
                    <img
                      :src="token.icons[0]"
                      class="w-full h-full object-cover"
                    />
                  </div>

                  <!-- TEXT -->
                  <div>
                    <div class="text-md font-black tracking-[-1px]">
                      {{ token.name }}
                    </div>

                    <div class="mt-2 text-[#00e68a] text-xs font-extrabold">
                      Up to {{ token.apr }} APR
                    </div>
                  </div>
                </div>

                <!-- TAG -->
                <div
                  :class="
                    token.type === 'stake'
                      ? 'bg-pink-200 text-black'
                      : 'bg-cyan-200 text-black'
                  "
                  class="absolute top-0 right-0 py-1 px-3 rounded-bl-[16px] flex items-center justify-center text-[10px] font-black capitalize"
                >
                  {{ token.type }}
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- RIGHT -->
        <!-- TRENDING -->
        <div
          class="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#0d1525]/90 backdrop-blur-xl p-8"
        >
          <!-- BG GLOW -->
          <div
            class="absolute left-[-200px] bottom-[-200px] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]"
          ></div>

          <!-- TOP -->
          <div
            class="relative z-10 flex items-start justify-between gap-10 flex-col lg:flex-row"
          >
            <div class="text-2xl font-black tracking-[-2px] leading-none">
              Trending
            </div>

            <div class="text-white/45 text-sm leading-[1.4] max-w-[320px]">
              What’s moving ATM?
              <br />
              Find out now!
            </div>
          </div>

          <!-- FILTERS -->
          <div
            class="relative z-10 flex gap-2 mt-10 overflow-x-auto pb-2 scrollbar-hide"
          >
            <button
              v-for="(filter, i) in trendingFilters"
              :key="filter"
              :class="
                i === 0
                  ? 'bg-cyan-400 text-black border-cyan-400'
                  : 'bg-transparent text-white/75 border-white/30'
              "
              class="py-2 px-2 rounded-full border text-xs font-bold transition-all hover:border-cyan-400 hover:text-white cursor-pointer"
            >
              {{ filter }}
            </button>
          </div>

          <!-- TOKEN LIST -->
          <div class="relative z-10 mt-10">
            <div
              v-for="token in trending"
              :key="token.token"
              class="flex items-center justify-between py-4 border-b border-white/5"
            >
              <!-- LEFT -->
              <div class="flex items-center gap-5">
                <!-- ICON -->
                <div
                  class="w-[28px] h-[28px] rounded-full overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center shrink-0"
                >
                  <img :src="token.icon" class="w-full h-full object-cover" />
                </div>

                <!-- INFO -->
                <div>
                  <div class="text-md font-black tracking-[-1px] leading-none">
                    {{ token.token }}
                  </div>

                  <div class="mt-2 text-white/45 text-xs">
                    {{ token.name }}
                  </div>
                </div>
              </div>

              <!-- RIGHT -->
              <div class="flex items-center gap-4">
                <div class="flex items-center gap-2">
                  <!-- PRICE -->
                  <div class="text-sm font-black tracking-[-1px]">
                    {{ token.price }}
                  </div>

                  <!-- CHANGE -->
                  <div
                    :class="token.positive ? 'text-[#00e68a]' : 'text-pink-500'"
                    class="text-sm font-black text-right"
                  >
                    {{ token.positive ? "▲" : "▼" }}
                    {{ token.change }}
                  </div>
                </div>

                <!-- BUTTON -->
                <NuxtLink to="/trade" @click="selectedToken = token">
                  <button
                    class="py-2 px-4 rounded-xl border border-cyan-400 text-cyan-400 text-sm font-black transition-all hover:bg-cyan-400 hover:text-black cursor-pointer"
                  >
                    Trade
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- EXPLORE -->
      <div class="mt-16">
        <div class="text-2xl font-black mb-8">Explore Cronos</div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div
            v-for="card in 4"
            :key="card"
            class="h-[260px] rounded-[28px] overflow-hidden border border-white/5 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 relative p-7"
          >
            <div class="absolute inset-0 bg-black/30"></div>

            <div class="relative z-10">
              <div class="text-xl font-black">Cronos</div>

              <div class="mt-4 text-md font-bold">Your Gateway to Cronos</div>

              <div class="mt-6 text-white/70 text-sm">
                Verify your wallet, bridge assets, and discover top dApps.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER HERO -->
    <!-- <section
      class="
        relative
        z-10
        border-t
        border-white/5
        pt-24
        pb-28
      "
    >

      <div
        class="
          max-w-[1700px]
          mx-auto
          px-8
          flex
          flex-col
          lg:flex-row
          items-start
          justify-between
          gap-10
        "
      >

        <div>

          <div
            class="
              text-[70px]
              lg:text-[100px]
              font-black
              leading-none
              tracking-[-4px]
            "
          >

            Very, Very,

            <span class="text-cyan-400">
              Simple
            </span>

          </div>

          <div class="mt-8 text-white/70">
            Powered by Cronos
          </div>

        </div>

        <div class="pt-8">

          <div class="text-white/70 text-right">
            Start digging with us, there're diamonds for all!
          </div>

          <div class="flex justify-end gap-5 mt-8 text-[28px]">

            <button class="opacity-70 hover:opacity-100">
              ✕
            </button>

            <button class="opacity-70 hover:opacity-100">
              ◉
            </button>

            <button class="opacity-70 hover:opacity-100">
              ✈
            </button>

            <button class="opacity-70 hover:opacity-100">
              ●
            </button>

          </div>

        </div>

      </div>

    </section> -->
  </div>
</template>
