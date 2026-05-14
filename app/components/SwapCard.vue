<script setup>
import { isAmountEntered } from "~/utils/helper";

const token = {
  icon: "/tokens/wcro.png",
  symbol: "WCRO",
  name: "WCRO Token",

  address: "0x5C7F1234567890ABCDEFAE23",

  explorer: "https://cronoscan.com/token/0x5C7F1234567890ABCDEFAE23",

  price: "$0.07596",

  hour1: "0.42%",
  hour24: "-2.22%",
  day7: "6.93%",

  marketCap: "$3.41B",
  volume: "$37.68M",
  liquidity: "$65.62M",

  supply: "43.59B",
  holders: "-",
};

const openInsights = ref(false);
const selectedInsightToken = ref(null);

const { isConnected } = useWallet();
const toast = useToast();
const selectedToken = useState("selectedToken", () => null);
const chartOpen = ref(true);

const openSetting = ref(false);
const openTokenDrawer = ref(false);
const sellAmount = ref(0);
const buyAmount = computed(() => sellAmount.value * 2);

const activeField = ref("sell"); // 'sell' or 'buy'

const sellToken = ref(
  selectedToken.value || {
    name: "PAWSFLOW",
    icon: null,
  }
);

const buyToken = ref({
  name: "CRO",
  icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9YKr4syBOjEY2jQ9fhTHtD46r3EpDspGyg&s",
});

const swap = async () => {
  if (!isConnected.value) {
    alert("Please connect your wallet first!");
    return;
  }

  toast.add({
    title: "Swap Executed",
    description: `Swapped ${sellAmount.value} ${sellToken.value.name} for ${buyAmount.value} ${buyToken.value.name}`,
    color: "success",
  });
};

const showTokenDetails = (token) => {
  selectedInsightToken.value = {
    icon: token.icon,

    symbol: token.name,
    name: token.name + " Token",

    address: token.address || "0x5C7F1234567890ABCDEFAE23",

    explorer: token.explorer || "https://cronoscan.com",

    price: token.price || "$0.07596",

    hour1: token.hour1 || "0.42%",

    hour24: token.hour24 || "-2.22%",

    day7: token.day7 || "6.93%",

    marketCap: token.marketCap || "$3.41B",

    volume: token.volume || "$37.68M",

    liquidity: token.liquidity || "$65.62M",

    supply: token.supply || "43.59B",

    holders: token.holders || "-",
  };

  openInsights.value = true;
};
onMounted(() => {});
</script>

<template>
  <div class="flex gap-8">
    <div v-if="chartOpen" class="w-[55rem]">
      <iframe
        title="advanced chart TradingView widget"
        lang="en"
        id="tradingview_a9ce3"
        frameborder="0"
        allowtransparency="true"
        scrolling="no"
        allowfullscreen="true"
        src="https://s.tradingview.com/widgetembed/?hideideas=1&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en#%7B%22symbol%22%3A%221%2F(VVSFINANCE%3AVVSWCRO_BF62C6)%22%2C%22frameElementId%22%3A%22tradingview_a9ce3%22%2C%22interval%22%3A%221%22%2C%22hide_side_toolbar%22%3A%221%22%2C%22allow_symbol_change%22%3A%220%22%2C%22save_image%22%3A%221%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22Dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22vvs.finance%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%221%2F(VVSFINANCE%3AVVSWCRO_BF62C6)%22%2C%22page-uri%22%3A%22vvs.finance%2Ftrade%2Fswap%22%7D"
        style="
          width: 100%;
          height: 100%;
          margin: 0px !important;
          padding: 0px !important;
        "
      ></iframe>
    </div>
    <div class="w-full max-w-md">
      <!-- Tabs -->
      <div class="flex justify-between items-center mb-4">
        <div class="flex gap-6 text-sm">
          <span class="text-cyan-400 border-b-2 border-cyan-400 pb-1"
            >Swap</span
          >
          <span class="text-gray-400">Recurring</span>
          <span class="text-gray-400">Cross-Chain</span>
        </div>

        <UButton
          size="xs"
          class="bg-cyan-500/20 text-cyan-400 rounded-full px-3 cursor-pointer hover:bg-cyan-500/30"
          @click="openSetting = true"
        >
          Auto
        </UButton>
      </div>

      <!-- MAIN CARD -->
      <div
        class="rounded-2xl border border-white/10 bg-[#0f172a]/80 backdrop-blur-xl"
      >
        <!-- SELL -->
        <div class="p-4">
          <div class="flex justify-between text-sm text-gray-400 mb-2">
            <span>Sell</span>
            <span class="text-cyan-400 text-xs">25% 50% 75% MAX</span>
          </div>

          <div class="flex justify-between items-center">
            <input
              v-model="sellAmount"
              placeholder="0.00"
              class="bg-transparent text-3xl font-light outline-none w-full text-white"
            />

            <TokenButton
              :token="sellToken"
              @click="
                () => {
                  activeField = 'sell';
                  openTokenDrawer = true;
                }
              "
            />
          </div>
        </div>

        <!-- DIVIDER -->
        <div class="relative border-t border-white/10">
          <div class="absolute left-1/2 -translate-x-1/2 -top-4">
            <button
              class="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center hover:bg-cyan-500/30"
            >
              <span class="text-cyan-400 text-lg">↓</span>
            </button>
          </div>
        </div>

        <!-- BUY -->
        <div class="p-4 pt-6">
          <div class="text-sm text-gray-400 mb-2">Buy</div>

          <div class="flex justify-between items-center">
            <input
              v-model="buyAmount"
              placeholder="0.00"
              ,
              disabled
              class="bg-transparent text-3xl font-light outline-none w-full text-white"
            />

            <TokenButton
              :token="buyToken"
              @click="
                () => {
                  activeField = 'buy';
                  openTokenDrawer = true;
                }
              "
            />
          </div>
        </div>
      </div>

      <!-- CTA -->
      <button
        @click="
          isConnected ? swap() : alert('Please connect your wallet first!')
        "
        class="w-full mt-4 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300"
        :disabled="!isConnected"
        :class="
          (isConnected ? 'cursor-pointer' : 'cursor-not-allowed opacity-50',
          isConnected && isAmountEntered(sellAmount)
            ? 'hover:bg-cyan-300'
            : 'cursor-not-allowed opacity-50')
        "
      >
{{
  !isConnected
    ? "Connect Wallet"
    : isAmountEntered(sellAmount)
      ? "Swap"
      : "Enter Amount"
}}
      </button>

      <!-- PRICE -->
      <div
        class="mt-3 text-sm text-gray-400 flex justify-between border border-cyan-400/30 rounded-xl p-3"
      >
        <span>1 {{ sellToken.name }} ≈ 0.00031 {{ buyToken.name }}</span>
        <span
          @click="chartOpen = !chartOpen"
          class="border border-cyan-400 rounded-xl px-2 py-2 cursor-pointer hover:scale-[1.04]"
          >Chart</span
        >
      </div>

      <!-- INFO CARDS -->
      <div class="grid grid-cols-2 gap-3 mt-4">
        <InfoCard
          @click="showTokenDetails(sellToken)"
          :title="sellToken.name"
          :icon="sellToken.icon"
          price="$0.06972"
          change="-1.18%"
        />

        <InfoCard
          @click="showTokenDetails(buyToken)"
          :title="buyToken.name"
          :icon="buyToken.icon"
          price="$0.05126"
          change="-1.27%"
        />
      </div>

      <!-- HISTORY -->
      <div class="mt-6">
        <div class="flex justify-between items-center mb-2">
          <span class="text-sm font-semibold">History</span>
          <span class="text-gray-400 text-sm">Current Token</span>
        </div>

        <div
          class="bg-[#0b1220] p-4 rounded-xl text-center text-gray-500 text-sm"
        >
          No trade yet, start trading now!
        </div>
      </div>
      <div>
        <TokenDrawer
          v-model:open="openTokenDrawer"
          @select="
            (token) => {
              if (activeField === 'sell') {
                sellToken = token;
              } else {
                buyToken = token;
              }
            }
          "
        />
      </div>

      <div>
        <USlideover v-model:open="openSetting">
          <template #content>
            <SettingsDrawer v-model:open="openSetting" />
          </template>
        </USlideover>
      </div>
    </div>

    <div>
      <!-- MODAL -->
      <TokenDetail
        v-if="selectedInsightToken"
        v-model:open="openInsights"
        :icon="selectedInsightToken.icon"
        :symbol="selectedInsightToken.symbol"
        :name="selectedInsightToken.name"
        :address="selectedInsightToken.address"
        :explorer="selectedInsightToken.explorer"
        :price="selectedInsightToken.price"
        :hour1="selectedInsightToken.hour1"
        :hour24="selectedInsightToken.hour24"
        :day7="selectedInsightToken.day7"
        :market-cap="selectedInsightToken.marketCap"
        :volume="selectedInsightToken.volume"
        :liquidity="selectedInsightToken.liquidity"
        :supply="selectedInsightToken.supply"
        :holders="selectedInsightToken.holders"
      />
    </div>
  </div>
</template>
