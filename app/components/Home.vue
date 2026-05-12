<script setup>
const trending = [
  {
    token: 'DAI',
    price: '$1.01',
    change: '+0.005%',
  },
  {
    token: 'XLM',
    price: '$0.16104',
    change: '-0.0001%',
  },
  {
    token: 'QNT',
    price: '$72.11',
    change: '+0.02%',
  },
  {
    token: 'VERSA',
    price: '$0.00232',
    change: '-0.03%',
  },
  {
    token: 'USDC.e',
    price: '$1.00',
    change: '-0.001%',
  },
]

const coins = [
  {
    name: 'PAWSFLOW',
    change: '+0.12%',
    price: '$0.000021',
    cap: '$21.42K',
  },
  {
    name: 'PEET',
    change: '+0.08%',
    price: '$0.000012',
    cap: '$11.2K',
  },
  {
    name: 'PACK',
    change: '+0.05%',
    price: '$0.00013',
    cap: '$1.43M',
  },
  {
    name: 'PUMP',
    change: '+0.05%',
    price: '$0.0020',
    cap: '$161K',
  },
]
</script>

<template>
  <div
    class="
      min-h-screen
      overflow-hidden

      text-white
      relative
    "
  >



   


    <!-- HERO -->
    <section
      class="
        relative
        z-10
        max-w-[1800px]
        mx-auto
        px-8
        pt-10
        pb-28
      "
    >

      <!-- FLOATING CRYSTALS -->
      <div
        class="
          absolute
          top-[20px]
          right-[220px]
          w-[90px]
          h-[90px]
          rounded-[30px]
          rotate-[20deg]
          bg-gradient-to-br
          from-white
          via-cyan-300
          to-violet-400
          opacity-80
          blur-[1px]
        "
      ></div>

      <div
        class="
          absolute
          right-[120px]
          top-[250px]
          w-[260px]
          h-[260px]
          rounded-[60px]
          rotate-[22deg]
          bg-gradient-to-br
          from-white
          via-blue-300
          to-violet-400
          opacity-90
        "
      ></div>

      <!-- CONTENT -->
      <div class="max-w-[900px] pt-8">

        <div
          class="
            text-4xl
            md:text-8xl
            font-black
            leading-[0.95]
            tracking-[-4px]
          "
        >
          Very, Very,

          <span class="text-cyan-400">
            Smart
          </span>

        </div>

        <div
          class="
            mt-6
            text-white/70
            text-sm
            max-w-[620px]
          "
        >
          A sharpened focus on what simple, safe and smart really mean
        </div>

        <button
          class="
            mt-10
            py-2
            px-7
            rounded-xl
            border
            border-white/20
            bg-white/5
            hover:bg-white/10
            transition-all
            text-sm
            font-bold
          "
        >
          Dig real wins →
        </button>

      </div>

    </section>

    <!-- MAIN -->
    <section
      class="
        relative
        z-10
        max-w-[1650px]
        mx-auto
        px-6
        pb-24
      "
    >

      <!-- ACTION BAR -->
      <div
        class="
          rounded-xl
          border
          border-white/5
          bg-[#161f2d]/80
          backdrop-blur-xl
          p-7
          flex
          flex-col
          lg:flex-row
          items-start
          lg:items-center
          justify-between
          gap-8
        "
      >

        <div>

          <div class="text-4xl font-black">
            Tap. Swap. Earn.
          </div>

          <div class="text-white/60 mt-1 text-sm">
            Jump right in, everything you need
          </div>

        </div>

        <!-- ACTIONS -->
        <div class="flex flex-wrap gap-6">

          <div class="flex items-center gap-2">
            <div class="w-11 h-11 rounded-xl bg-cyan-400/20"></div>
            <span class="text-sm font-semibold">Swap</span>
          </div>

          <div class="flex items-center gap-2">
            <div class="w-11 h-11 rounded-xl bg-cyan-400/20"></div>
            <span class="text-sm font-semibold">Bridge</span>
          </div>

          <div class="flex items-center gap-2">
            <div class="w-11 h-11 rounded-xl bg-cyan-400/20"></div>
            <span class="text-sm font-semibold">Add Liquidity</span>
          </div>

          <div class="flex items-center gap-2">
            <div class="w-11 h-11 rounded-xl bg-cyan-400/20"></div>
            <span class="text-sm font-semibold">Claim</span>
          </div>

        </div>

      </div>

      <!-- COINS -->
      <div class="mt-12">

        <div class="flex items-center justify-between mb-6">

          <div class="text-2xl font-black">
            New digs on VVS
          </div>

          <div class="text-white/50 text-sm max-w-[280px] text-right">
            Discover new listed tokens, and never miss any opportunities
          </div>

        </div>

        <div
          class="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-5
          "
        >

          <div
            v-for="coin in coins"
            :key="coin.name"
            class="
              rounded-2xl
              border
              border-white/5
              bg-[#101827]
              p-5
              hover:border-cyan-400/40
              transition-all
            "
          >

            <div class="flex items-center justify-between">

              <div class="font-bold">
                {{ coin.name }}
              </div>

              <div class="text-[#00ff9d] font-bold text-[14px]">
                {{ coin.change }}
              </div>

            </div>

            <div class="mt-5 flex justify-between">

              <div>

                <div class="text-white/40 text-[13px]">
                  Price
                </div>

                <div class="mt-1 font-semibold">
                  {{ coin.price }}
                </div>

              </div>

              <div>

                <div class="text-white/40 text-[13px]">
                  M Cap
                </div>

                <div class="mt-1 font-semibold">
                  {{ coin.cap }}
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <!-- TRENDING -->
      <div
        class="
          grid
          grid-cols-1
          xl:grid-cols-[1.1fr_1fr]
          gap-8
          mt-14
        "
      >

        <!-- LEFT -->
        <div
          class="
            rounded-[28px]
            border
            border-white/5
            bg-[#101827]/80
            p-7
          "
        >

          <div class="flex items-center justify-between">

            <div class="text-2xl font-black">
              Earn by Tokens
            </div>

            <div class="text-white/40 text-sm">
              Swap, stake in simple clicks
            </div>

          </div>

          <div class="mt-8 space-y-4">

            <div
              v-for="item in ['WCRO','VIES','V3S','VVS','xVVS']"
              :key="item"
              class="
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-white/5
                bg-white/[0.02]
                px-5
                py-5
              "
            >

              <div>

                <div class="font-bold">
                  {{ item }}
                </div>

                <div class="mt-1 text-[#00ff9d] text-[14px] font-bold">
                  Up to 54.43% APR
                </div>

              </div>

              <button
                class="
                  h-[38px]
                  px-4
                  rounded-xl
                  bg-cyan-400/15
                  text-cyan-400
                  text-[14px]
                  font-bold
                "
              >
                Liquidity
              </button>

            </div>

          </div>

        </div>

        <!-- RIGHT -->
        <div
          class="
            rounded-[28px]
            border
            border-white/5
            bg-[#101827]/80
            p-7
          "
        >

          <div class="flex items-center justify-between">

            <div class="text-2xl font-black">
              Trending
            </div>

            <div class="text-white/40 text-sm">
              What's moving ATM?
            </div>

          </div>

          <!-- FILTERS -->
          <div class="flex flex-wrap gap-2 mt-6">

            <button
              class="
                h-[34px]
                px-4
                rounded-full
                bg-cyan-400
                text-black
                text-[13px]
                font-bold
              "
            >
              All
            </button>

            <button
              class="
                h-[34px]
                px-4
                rounded-full
                border
                border-white/10
                text-white/60
                text-[13px]
              "
            >
              Gainers
            </button>

            <button
              class="
                h-[34px]
                px-4
                rounded-full
                border
                border-white/10
                text-white/60
                text-[13px]
              "
            >
              Losers
            </button>

          </div>

          <!-- TOKENS -->
          <div class="mt-7 space-y-5">

            <div
              v-for="token in trending"
              :key="token.token"
              class="flex items-center justify-between"
            >

              <div>

                <div class="font-bold">
                  {{ token.token }}
                </div>

                <div class="text-white/40 text-[13px]">
                  Token
                </div>

              </div>

              <div class="text-right">

                <div class="font-bold">
                  {{ token.price }}
                </div>

                <div class="text-[#00ff9d] text-[13px]">
                  {{ token.change }}
                </div>

              </div>

              <button
                class="
                  h-[38px]
                  px-4
                  rounded-xl
                  border
                  border-cyan-400/30
                  text-cyan-400
                  text-[14px]
                  font-bold
                "
              >
                Trade
              </button>

            </div>

          </div>

        </div>

      </div>

      <!-- EXPLORE -->
      <div class="mt-16">

        <div class="text-2xl font-black mb-8">
          Explore Cronos
        </div>

        <div
          class="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-6
          "
        >

          <div
            v-for="card in 4"
            :key="card"
            class="
              h-[260px]
              rounded-[28px]
              overflow-hidden
              border
              border-white/5
              bg-gradient-to-br
              from-cyan-500/20
              to-violet-500/20
              relative
              p-7
            "
          >

            <div
              class="
                absolute
                inset-0
                bg-black/30
              "
            ></div>

            <div class="relative z-10">

              <div class="text-2xl font-black">
                Cronos
              </div>

              <div class="mt-4 text-xl font-bold">
                Your Gateway to Cronos
              </div>

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