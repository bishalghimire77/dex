<script setup>
import { computed, ref, watch } from "vue";
import {isAmountEntered} from '~/utils/helper'

const toast = useToast();
const openTokenDrawer = ref(false);
/* =========================
   SINGLE TOKEN
========================= */
const currentPool = useState("currentPool");



const route = useRoute();
const liquiditySlippage = ref("0.5%");
const singleTokenMode = ref(false);
const slippageOptions = ["0.1%", "0.5%", "1%", "Custom"];

const token0Amount = ref(0);
const token1Amount = ref(0);

const token0Price = 0.06954;
const token1Price = 0.06193;

const totalDeposits = computed(() => {
  return (
    token0Amount.value * token0Price +
    token1Amount.value * token1Price
  ).toFixed(5);
});

const hasEnoughBalance = computed(() => {
  return false;
});

watch(token0Amount, (val) => {
  token1Amount.value = (Number(val) * 33.9149).toFixed(4);
});

watch(token1Amount, (val) => {
  token0Amount.value = (Number(val) / 33.9149).toFixed(4);
});

const rangeOptions = [
  {
    id: "full",
    title: "Full",
    range: "0 / ∞",
  },
  {
    id: "steady",
    title: "Steady",
    range: "-30% +50%",
  },
  {
    id: "dynamic",
    title: "Dynamic",
    range: "-10% +25%",
  },
  {
    id: "wild",
    title: "Wild",
    range: "-30% +10%",
  },
];

const step = ref(1);

const selectingSide = ref("token0");

const selectedToken0 = ref(null);
const selectedToken1 = ref(null);

const selectedPoolType = ref("V3");
const selectedFeeTier = ref("0.3%");
const selectedRange = ref("Steady");

const wcroAmount = ref(1);
const lionAmount = ref(33.9149);

const minPrice = ref(26.95);
const maxPrice = ref(57.73);

const tokenList = [
  {
    symbol: "CRO",
    name: "CRO Token",
    apr: "<0.0001%",
    balance: "3.01",
    usd: "$0.21",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9YKr4syBOjEY2jQ9fhTHtD46r3EpDspGyg&s",
  },
  {
    symbol: "WCRO",
    name: "WCRO Token",
    apr: "65.68%",
    balance: "0",
    usd: "$0.00",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9YKr4syBOjEY2jQ9fhTHtD46r3EpDspGyg&s",
  },
  {
    symbol: "VIES",
    name: "Vies Token",
    apr: "65.68%",
    balance: "0",
    usd: "$0.00",
    icon: "https://cryptologos.cc/logos/uniswap-uni-logo.png",
  },
  {
    symbol: "V3S",
    name: "V3S Token",
    apr: "53.84%",
    balance: "0",
    usd: "$0.00",
    icon: "https://cryptologos.cc/logos/uniswap-uni-logo.png",
  },
  {
    symbol: "LION",
    name: "Loaded Lions",
    apr: "32.04%",
    balance: "0",
    usd: "$0.00",
    icon: "https://cryptologos.cc/logos/uniswap-uni-logo.png",
  },
];


const singleSelectedToken = ref(tokenList[0]);

const poolTypes = [
  {
    id: "V3",
    title: "Concentrated Liquidity",
    apr: "32.04%",
    desc: "A focused range with higher earnings",
  },
  {
    id: "V2",
    title: "Standard Pool",
    apr: "1.47%",
    desc: "A simpler setup that covers all prices",
  },
];

const feeTiers = [
  {
    id: "0.3%",
    title: "Most pairs",
    tvl: "$1,271.86 TVL",
    
  },
  {
    id: "0.05%",
    title: "Stable pairs",
    tvl: "$0.00 TVL",
  },
  {
    id: "1%",
    title: "Volatile pairs",
    tvl: "$603.38 TVL",
    common: true,
  },
  {
    id: "0.01%",
    title: "Highly stable pairs",
    tvl: "$0.00 TVL",
  },
];

const selectToken = (token) => {
  if (selectingSide.value === "token0") {
    selectedToken0.value = token;
    selectingSide.value = "token1";
  } else {
    selectedToken1.value = token;
  }
};

/* =========================
   SELECT SINGLE TOKEN
========================= */

const selectSingleToken = (token) => {
  // V2 + SINGLE TOKEN MODE
  if (selectedPoolType.value === "V2" && singleTokenMode.value) {
    singleSelectedToken.value = token;

    openTokenDrawer.value = false;

    return;
  }

  // NORMAL FLOW
  selectToken(token);

  openTokenDrawer.value = false;
};

const removeToken = (side) => {
  if (side === "token0") {
    selectedToken0.value = null;
    selectingSide.value = "token0";
  } else {
    selectedToken1.value = null;
    selectingSide.value = "token1";
  }
};

const canContinuePair = computed(() => {
  return selectedToken0.value && selectedToken1.value;
});

const nextStep = () => {
  // STEP 1
  if (step.value === 1) {
    step.value = 2;
    return;
  }

  // STEP 2
  if (step.value === 2) {
    // V2 GOES DIRECTLY TO AMOUNT SCREEN
    if (selectedPoolType.value === "V2") {
      step.value = 5;
      return;
    }

    // V3 CONTINUES NORMAL FLOW
    step.value = 3;
    return;
  }

  // V3
  if (step.value === 3) {
    step.value = 4;
    return;
  }

  if (step.value === 4) {
    step.value = 5;
    return;
  }
};

const editStep = (s) => {
  step.value = s;
};

const pairName = computed(() => {
  if (!selectedToken0.value || !selectedToken1.value) {
    return "-";
  }

  return `${selectedToken0.value.symbol}/${selectedToken1.value.symbol}`;
});

const summaryAPR = computed(() => {
  return selectedPoolType.value === "V3" ? "32.04%" : "1.47%";
});

const summaryPool = computed(() => {
  if (!selectedToken0.value || !selectedToken1.value) {
    return "-";
  }

  if (step.value >= 2) {
    return `${pairName.value} ${selectedPoolType.value}`;
  }

  return pairName.value;
});

const summaryFeeTier = computed(() => {
  if (step.value >= 3) {
    return selectedFeeTier.value;
  }

  return "-";
});

const summaryPriceRange = computed(() => {
  if (step.value >= 4) {
    return `${minPrice.value} - ${maxPrice.value} ${pairName.value}`;
  }

  return "-";
});

const summaryDeposits = computed(() => {
  if (step.value >= 4) {
    return `${wcroAmount.value} ${selectedToken0.value?.symbol} + ${lionAmount.value} ${selectedToken1.value?.symbol}`;
  }

  return "-";
});

const summaryPoolRatio = computed(() => {
  if (!selectedToken0.value || !selectedToken1.value) {
    return "N/A";
  }

  return `${selectedToken0.value.symbol} (56%) + ${selectedToken1.value.symbol} (44%)`;
});

const summaryShare = computed(() => {
  if (step.value >= 4) {
    return "0.01%";
  }

  return "N/A";
});

const addLiquidity = () => {
 toast.add({
    title: "Liquidity Added",
    description: `You have added liquidity to the ${pairName.value} pool!`,
    color: "success"
  })
}

/* =========================
   PREFILL FROM QUERY
========================= */

onMounted(() => {
  console.log("query is", currentPool.value)
  // const token0 = route.query.token0;
  // const token1 = route.query.token1;

  // const version = route.query.version;
  // const fee = route.query.fee;

  // const icon0 = route.query.icon0;
  // const icon1 = route.query.icon1;

  const token0 = currentPool?.value?.token0?.name
  const token1 = currentPool?.value?.token1?.name
  const version = currentPool?.value?.version
  const fee = currentPool?.value?.feeTier
  const icon0 = currentPool?.value?.icons[0]
  const icon1 = currentPool?.value?.icons[1]

  if (token0) {
    const found0 = tokenList.find((t) => t.symbol === token0);

    if (found0) {
      selectedToken0.value = found0;
    } else {
      selectedToken0.value = {
        symbol: token0,
        icon: icon0,
      };
    }
  }

  if (token1) {
    const found1 = tokenList.find((t) => t.symbol === token1);

    if (found1) {
      selectedToken1.value = found1;
    } else {
      selectedToken1.value = {
        symbol: token1,
        icon: icon1,
      };
    }
  }

  if (version) {
    selectedPoolType.value = version;
  }

  if (fee) {
    selectedFeeTier.value = fee;
  }

  /* =========================
   AUTO SKIP STEPS
========================= */

  if (selectedToken0.value && selectedToken1.value) {
    // PAIR SELECTED
    step.value = 2;

    // POOL TYPE SELECTED
    if (version) {
      // SET POOL TYPE
      selectedPoolType.value = version;

      // ================= V2 =================
      if (version === "V2") {
        // DIRECTLY GO TO AMOUNT
        step.value = 5;
      }

      // ================= V3 =================
      else {
        // GO TO FEE STEP
        step.value = 3;

        // FEE EXISTS
        if (fee) {
          selectedFeeTier.value = fee;

          // GO TO RANGE STEP
          step.value = 4;
        }
      }
    }
  }
});
</script>

<template>
  <div class="min-h-screen text-white md:px-14 py-8">
    <!-- HEADER -->
    <div class="flex items-center gap-4 mb-10">
      <button class="text-xl opacity-80 hover:opacity-100">‹</button>

      <h1 class="text-xl font-bold">Add Liquidity</h1>
    </div>

    <div>
      <TokenDrawer v-model:open="openTokenDrawer" @select="selectSingleToken" />
    </div>

    <div class="flex flex-col md:flex-row gap-16">
      <!-- LEFT -->
      <div class="space-y-6">
        <!-- ================= STEP 1 ================= -->
        <!-- STEP 1 -->
        <div
          class="rounded-xl border border-white/15 bg-[#0d1325]/95 overflow-hidden"
        >
          <!-- ACTIVE -->
          <div v-if="step === 1" class="p-8 ">
            <h2 class="text-xl font-bold mb-6 mx-4 p-2">Select pair</h2>

            <!-- SELECTED PAIR -->
            <div class="bg-[#2a3044] rounded-xl p-5 mb-6 mx-4">
              <div class="grid grid-cols-[1fr_60px_1fr] gap-4">
                <!-- TOKEN 0 -->
                <div
                  @click="selectingSide = 'token0'"
                  class="h-[120px] rounded-xl bg-[#111629] flex flex-col items-center justify-center relative cursor-pointer border-2"
                  :class="
                    selectingSide === 'token0'
                      ? 'border-cyan-400'
                      : 'border-transparent'
                  "
                >
                  <template v-if="selectedToken0">
                    <!-- MINUS ICON -->
                    <button
                      @click.stop="removeToken('token0')"
                      class="absolute -top-2 -right-2 w-7 h-7 rounded-full border-2 border-cyan-400 bg-[#0d1325] flex items-center justify-center z-20"
                    >
                      <div class="w-3 h-[2px] bg-cyan-400 rounded-full"></div>
                    </button>

                    <img
                      :src="selectedToken0.icon"
                      class="w-8 h-8 rounded-full mb-3"
                    />

                    <div class="text-md font-bold">
                      {{ selectedToken0.symbol }}
                    </div>
                  </template>

                  <template v-else>
                    <div class="w-8 h-8 rounded-full bg-white/20 mb-3"></div>

                    <div class="text-sm text-gray-400">Select Token</div>
                  </template>
                </div>

                <!-- PLUS -->
                <div
                  class="flex items-center justify-center text-xl text-gray-400"
                >
                  +
                </div>

                <!-- TOKEN 1 -->
                <div
                  @click="selectingSide = 'token1'"
                  class="h-[120px] rounded-xl bg-[#111629] flex flex-col items-center justify-center relative cursor-pointer border-2"
                  :class="
                    selectingSide === 'token1'
                      ? 'border-cyan-400'
                      : 'border-transparent'
                  "
                >
                  <template v-if="selectedToken1">
                    <!-- MINUS ICON -->
                    <button
                      @click.stop="removeToken('token1')"
                      class="absolute -top-2 -right-2 w-7 h-7 rounded-full border-2 border-cyan-400 bg-[#0d1325] flex items-center justify-center z-20"
                    >
                      <div class="w-3 h-[2px] bg-cyan-400 rounded-full"></div>
                    </button>

                    <img
                      :src="selectedToken1.icon"
                      class="w-8 h-8 rounded-full mb-3"
                    />

                    <div class="text-md font-bold">
                      {{ selectedToken1.symbol }}
                    </div>
                  </template>

                  <template v-else>
                    <div class="w-8 h-8 rounded-full bg-white/20 mb-3"></div>

                    <div class="text-sm text-gray-400">Select Token</div>
                  </template>
                </div>
              </div>
            </div>

            <!-- SEARCH -->
            <div
              class="h-16 rounded-sm border border-white/10 bg-[#111629] px-5 flex items-center justify-between mb-5"
            >
              <span class="text-gray-400 text-sm"> Token symbol or address </span>

              <span class="text-2xl">⌕</span>
            </div>

            <!-- TRENDING -->
            <div class="grid grid-cols-4 gap-4 mb-5">
              <div
                v-for="item in tokenList.slice(0, 4)"
                :key="item.symbol"
                @click="selectToken(item)"
                class="rounded-xl border border-white/10 bg-[#111629] p-5 text-center cursor-pointer hover:border-cyan-400"
              >
                <img
                  :src="item.icon"
                  class="w-8 h-8 rounded-full mx-auto mb-3"
                />

                <div class="text-sm font-bold">
                  {{ item.symbol }}
                </div>

                <div class="text-xs text-gray-400">
                  {{ item.apr }}
                </div>
              </div>
            </div>

            <!-- TABS -->
            <div class="flex gap-6 text-xs mb-5">
              <span class="font-bold hover:text-cyan-400 cursor-pointer">All</span>
              <span class="text-gray-400 hover:text-cyan-400 cursor-pointer">Trending</span>
              <span class="text-gray-400 hover:text-cyan-400 cursor-pointer">Holdings</span>
              <span class="text-gray-400 hover:text-cyan-400 cursor-pointer">New</span>
              <span class="text-gray-400 hover:text-cyan-400 cursor-pointer">Meme</span>
              <span class="text-gray-400 hover:text-cyan-400 cursor-pointer">Imported</span>
            </div>

            <!-- TOKEN LIST -->
            <div class="space-y-1 mb-8">
              <div
                v-for="token in tokenList"
                :key="token.symbol"
                @click="selectToken(token)"
                class="h-24 px-5 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-between cursor-pointer"
              >
                <div class="flex items-center gap-5">
                  <img :src="token.icon" class="w-8 h-8 rounded-full" />

                  <div>
                    <div class="text-md font-bold">
                      {{ token.symbol }}
                    </div>

                    <div class="text-gray-400 text-xs">
                      {{ token.name }}
                    </div>
                  </div>
                </div>

                <div class="text-right">
                  <div class="text-md font-bold">
                    {{ token.balance }}
                  </div>

                  <div class="text-gray-400 text-xs">
                    {{ token.usd }}
                  </div>
                </div>
              </div>
            </div>

            <!-- NEXT -->
            <button
              :disabled="!canContinuePair"
              @click="nextStep"
              class="rounded-xl text-md font-bold ml-auto flex items-center justify-center transition py-2 px-8"
              :class="
                canContinuePair
                  ? 'bg-cyan-400 text-black'
                  : 'bg-white/20 text-white/40 cursor-not-allowed'
              "
            >
              Next
            </button>
          </div>

          <!-- COLLAPSED -->
          <div v-if="step > 1" class="p-8 py-3 flex justify-between items-center">
            <div>
              <div class="text-sm font-bold mb-1">Select pair</div>

              <div class="text-xs text-gray-300">
                {{ selectedToken0.symbol }} / {{ selectedToken1.symbol }}
              </div>
            </div>

            <button
              @click="editStep(1)"
              class="px-4 py-2 rounded-xl border border-cyan-400/50 text-cyan-400 text-xs font-bold hover:scale-[1.04] cursor-pointer"
            >
              Edit
            </button>
          </div>
        </div>

        <!-- ================= STEP 2 ================= -->
        <div
          v-if="step >= 2"
          class="rounded-xl border border-white/15 bg-[#0d1325]/95 overflow-hidden"
        >
          <!-- ACTIVE -->
          <div v-if="step === 2" class="p-8">
            <div class="text-xl font-bold">Select pool type</div>

            <div class="text-xs text-gray-400 mb-8">
              Choose how to provide your liquidity
            </div>

            <div class="grid grid-cols-2 gap-5 mb-8">
              <div
                v-for="pool in poolTypes"
                :key="pool.id"
                @click="selectedPoolType = pool.id"
                class="relative rounded-xl border p-6 cursor-pointer transition"
                :class="
                  selectedPoolType === pool.id
                    ? 'border-white bg-white/5'
                    : 'border-white/10'
                "
              >
                <div
                  v-if="pool.id === 'V3'"
                  class="absolute top-0 right-5 -translate-y-1/2 bg-cyan-400 text-black px-3 py-1 rounded-full text-xs font-bold"
                >
                  Most Common
                </div>

                <div class="text-xl font-bold mb-2">
                  {{ pool.id }}
                </div>

                <div class="text-sm font-bold mb-1">
                  {{ pool.title }}
                </div>

                <div class="text-gray-400 text-xs leading-relaxed mb-4">
                  {{ pool.desc }}
                </div>

                <div class="flex justify-between items-end">
                  <span class="text-gray-400 text-sm"> up to </span>

                  <span class="text-green-400 text-md font-bold">
                    {{ pool.apr }}
                  </span>
                </div>
              </div>
            </div>

            <button
              @click="nextStep"
              class="px-8 py-2 rounded-xl bg-cyan-400 text-black text-md font-bold ml-auto flex items-center justify-center"
            >
              Next
            </button>
          </div>

          <!-- COLLAPSED -->
          <div v-if="step > 2" class="p-8 py-3 flex justify-between items-center">
            <div>
              <div class="text-sm font-bold mb-1">Select pool type</div>

              <div class="text-xs text-gray-300">
                {{ selectedPoolType }} - Concentrated Liquidity
              </div>
            </div>

            <button
              @click="editStep(2)"
              class="px-4 py-2 rounded-xl border border-cyan-400/50 text-cyan-400 text-xs font-bold hover:scale-[1.04] cursor-pointer"
            >
              Edit
            </button>
          </div>
        </div>

        <!-- ================= STEP 3 ================= -->
        <div
          v-if="step >= 3 && selectedPoolType === 'V3'"
          class="rounded-xl border border-white/15 bg-[#0d1325]/95 overflow-hidden"
        >
          <!-- ACTIVE -->
          <div v-if="step === 3" class="p-8">
            <div class="text-xl font-bold mb-2">Select fee tier</div>

            <div class="text-sm text-gray-400 mb-8">
              The % you will earn for providing liquidity
            </div>

            <div class="grid grid-cols-2 md:grid-cols-3 gap-5 mb-8">
              <div
                v-for="fee in feeTiers"
                :key="fee.id"
                @click="selectedFeeTier = fee.id"
                class="relative rounded-xl border py-4 p-6 cursor-pointer transition hover:border-cyan-400/50"
                :class="
                  selectedFeeTier === fee.id
                    ? 'border-cyan-400/50 bg-white/5'
                    : 'border-white/10'
                "
              >
                <div
                  v-if="fee.common"
                  class="absolute top-0 right-5 -translate-y-1/2 bg-cyan-400 text-black px-3 py-1 rounded-full text-xs font-bold"
                >
                  Most Common
                </div>

                <div class="text-md font-bold mb-2">
                  {{ fee.id }}
                </div>

                <div class="text-xs mb-1">
                  {{ fee.title }}
                </div>

                <div class="text-xs text-gray-400">
                  {{ fee.tvl }}
                </div>
              </div>
            </div>

            <button
              @click="nextStep"
              class="py-2 px-8 rounded-xl bg-cyan-400 text-black text-md font-bold ml-auto flex items-center justify-center cursor-pointer hover:scale-[1.04] transition-all"
            >
              Next
            </button>
          </div>

          <!-- COLLAPSED -->
          <div v-if="step > 3" class="p-8 py-3 flex justify-between items-center">
            <div>
              <div class="text-sm font-bold mb-1">Select fee tier</div>

              <div class="text-xs text-gray-300">
                {{ selectedFeeTier }}
              </div>
            </div>

            <button
              @click="editStep(3)"
              class="py-2 px-4 rounded-xl border border-cyan-400/50 text-cyan-400 text-xs font-bold hover:scale-[1.04] cursor-pointer"
            >
              Edit
            </button>
          </div>
        </div>

        <!-- STEP 4 -->
        <!-- ================= STEP 4 ================= -->
        <div
          v-if="step >= 4 && selectedPoolType === 'V3'"
          class="rounded-xl border border-white/10 bg-[#0d1224]/95 overflow-hidden"
        >
          <!-- ACTIVE -->
          <div v-if="step === 4" class="p-8">
            <!-- HEADER -->
            <div class="mb-8">
              <div class="text-xl font-bold mb-2">Set price range</div>

              <div class="text-gray-400 text-xs">
                Set a price range for your liquidity. You'll only earn fees
                while the market stays within it.
              </div>
            </div>

            <!-- PRICE RANGE -->
            <div class="mb-10">
              <div class="text-md font-bold mb-6">Price Range</div>

              <div class="text-md font-bold mb-10">
                1 {{ selectedToken0.symbol }} = 38.42
                {{ selectedToken1.symbol }} ⇆
              </div>

              <!-- CHART -->
              <div
                class="relative h-[520px] rounded-xl overflow-hidden bg-[#122638] border border-white/10"
              >
                <!-- TOP -->
                <div
                  class="absolute left-4 top-4 z-10 bg-white text-black text-sm px-3 py-1 rounded-full"
                >
                  50%
                </div>

                <!-- BOTTOM -->
                <div
                  class="absolute left-4 bottom-28 z-10 bg-white text-black text-sm px-3 py-1 rounded-full"
                >
                  -30%
                </div>

                <!-- GRAPH -->
                <svg
                  viewBox="0 0 1000 400"
                  class="absolute inset-0 w-full h-full"
                >
                  <path
                    d="M0 320
               C80 320,120 322,180 318
               C250 315,300 320,340 280
               C420 260,460 220,520 215
               C620 210,700 225,760 220
               C820 230,870 210,930 220
               L930 400
               L0 400 Z"
                    fill="#173748"
                  />

                  <path
                    d="M0 320
               C80 320,120 322,180 318
               C250 315,300 320,340 280
               C420 260,460 220,520 215
               C620 210,700 225,760 220
               C820 230,870 210,930 220"
                    fill="none"
                    stroke="#19e3ff"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                </svg>

                <!-- RIGHT VALUES -->
                <div
                  class="absolute right-0 top-0 h-full flex flex-col justify-between py-3"
                >
                  <div
                    class="bg-white text-black px-2 py-1 rounded-l-xl text-sm font-semibold"
                  >
                    {{ maxPrice }}
                  </div>

                  <div
                    class="bg-cyan-400 text-black px-2 py-1 rounded-l-xl text-sm font-semibold"
                  >
                    38.42
                  </div>

                  <div
                    class="bg-white text-black px-2 py-1 rounded-l-xl text-sm font-semibold"
                  >
                    {{ minPrice }}
                  </div>
                </div>
              </div>
            </div>

            <!-- RANGE OPTIONS -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
              <button
                v-for="range in rangeOptions"
                :key="range.id"
                @click="selectedRange = range.id"
                class="relative border rounded-xl p-6 text-left transition-all"
                :class="
                  selectedRange === range.id
                    ? 'border-white bg-[#12182d]'
                    : 'border-white/10 bg-[#0d1224]'
                "
              >
                <div
                  v-if="range.id === 'steady'"
                  class="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-400 text-black text-xs font-bold px-4 py-1 rounded-full"
                >
                  common
                </div>

                <div class="text-md font-bold mb-3">
                  {{ range.title }}
                </div>

                <div class="text-sm text-white">
                  {{ range.range }}
                </div>
              </button>
            </div>

            <!-- MIN MAX -->
            <div class="grid grid-cols-2 gap-6 mb-10">
              <!-- MIN -->
              <div class="rounded-xl border border-white/10 p-8">
                <div class="text-gray-400 text-sm mb-6">Min price</div>

                <div class="flex items-center justify-between">
                  <button @click="minPrice -= 1" class="text-cyan-400 text-2xl">
                    −
                  </button>

                  <div class="text-center">
                    <div class="text-md font-bold">
                      {{ minPrice }}
                    </div>

                    <div class="text-gray-400 text-md mt-3">
                      {{ selectedToken1.symbol }} = 1
                      {{ selectedToken0.symbol }}
                    </div>
                  </div>

                  <button @click="minPrice += 1" class="text-cyan-400 text-2xl">
                    +
                  </button>
                </div>
              </div>

              <!-- MAX -->
              <div class="rounded-xl border border-white/10 p-8">
                <div class="text-gray-400 text-sm mb-6">Max price</div>

                <div class="flex items-center justify-between">
                  <button @click="maxPrice -= 1" class="text-cyan-400 text-2xl">
                    −
                  </button>

                  <div class="text-center">
                    <div class="text-md font-bold">
                      {{ maxPrice }}
                    </div>

                    <div class="text-gray-400 text-md mt-3">
                      {{ selectedToken1.symbol }} = 1
                      {{ selectedToken0.symbol }}
                    </div>
                  </div>

                  <button @click="maxPrice += 1" class="text-cyan-400 text-2xl">
                    +
                  </button>
                </div>
              </div>
            </div>

            <!-- NEXT -->
            <button
              @click="nextStep"
              class="w-full py-2 rounded-xl bg-cyan-400 text-black text-md font-bold flex items-center justify-center gap-4"
            >
              Next

              <span class="text-xs"> 1 more step </span>
            </button>
          </div>

          <!-- COLLAPSED -->
          <div v-if="step > 4" class="p-8 py-3 flex justify-between items-center">
            <div>
              <div class="text-sm font-bold mb-2">Set price range</div>

              <div class="text-xs text-gray-300">
                {{ minPrice }} - {{ maxPrice }} {{ selectedToken0.symbol }}/{{
                  selectedToken1.symbol
                }}
              </div>
            </div>

            <button
              @click="editStep(4)"
              class="py-2 px-4 rounded-xl border border-cyan-400/50 text-cyan-400 text-xs font-bold hover:scale-[1.04] cursor-pointer"
            >
              Edit
            </button>
          </div>
        </div>
        <!-- STEP 5 -->
        <div v-if="step === 5">
          <!-- ================= V2 UI ================= -->
          <template v-if="selectedPoolType === 'V2'">
            <!-- HEADER -->
            <div class="flex items-center justify-between mb-8">
              <div class="text-xl font-bold">Set amount</div>

              <button
                class="py-0 px-4 h-11 rounded-xl bg-cyan-500/20 text-cyan-400 text-xs font-bold flex items-center gap-2"
              >
                0.5%

                <span class="text-lg">☰</span>
              </button>
            </div>

            <!-- SLIPPAGE -->
            <div class="mb-8">
              <div class="flex items-center gap-2 text-md mb-5">
                <span>Liquidity Slippage Tolerance</span>

                <span class="text-gray-400">ⓘ</span>
              </div>

              <div class="bg-[#2a3044] rounded-xl p-2 grid grid-cols-4 gap-2">
                <button
                  v-for="item in slippageOptions"
                  :key="item"
                  @click="liquiditySlippage = item"
                  class="py-2 rounded-xl text-xs font-bold transition-all"
                  :class="
                    liquiditySlippage === item
                      ? 'bg-cyan-400 text-black'
                      : 'text-gray-400'
                  "
                >
                  {{ item }}
                </button>
              </div>
            </div>

            <!-- SUPPLY WITH 1 TOKEN -->
            <div class="flex items-center justify-between mb-5">
              <div class="flex items-center gap-2">
                <span class="text-md font-bold">Supply with 1 token</span>

                <span class="text-gray-400">ⓘ</span>
              </div>

              <button
                @click="singleTokenMode = !singleTokenMode"
                class="w-16 h-7 rounded-full relative transition-all"
                :class="singleTokenMode ? 'bg-cyan-400' : 'bg-white/10'"
              >
                <div
                  class="absolute top-2 w-7 h-3 rounded-full bg-white transition-all"
                  :class="singleTokenMode ? 'right-1' : 'left-1'"
                ></div>
              </button>
            </div>

            <!-- ================= SINGLE TOKEN ON ================= -->
            <template v-if="singleTokenMode">
              <div
                class="rounded-xl border border-white/10 overflow-hidden mb-6"
              >
                <div class="p-8 relative min-h-[220px]">
                  <div class="text-gray-400 text-sm font-bold mb-8">
                    Deposit
                  </div>

                  <input
                    v-model="token0Amount"
                    type="number"
                    class="bg-transparent outline-none text-2xl font-light w-full"
                  />

                  <!-- RIGHT -->
                  <div
                    class="absolute right-8 top-1/2 -translate-y-1/2 text-right"
                  >
                    <div
                      @click="openTokenDrawer = true"
                      class="flex items-center gap-4 mb-6 cursor-pointer"
                    >
                      <img
                        :src="singleSelectedToken.icon"
                        class="w-8 h-8 rounded-full"
                      />

                      <div class="text-md font-bold">
                        {{ singleSelectedToken.symbol }}
                      </div>

                      <span class="text-cyan-400 text-2xl"> ⌄ </span>
                    </div>

                    <div
                      class="flex items-center justify-end gap-3 text-gray-400 text-sm"
                    >
                      <span>💼</span>

                      <span>0</span>
                    </div>
                  </div>
                </div>
              </div>
            </template>

            <!-- ================= NORMAL V2 ================= -->
            <template v-else>
              <div
                class="rounded-xl border border-white/10 overflow-hidden mb-6 relative"
              >
                <!-- TOKEN 0 -->
                <div class="p-8 relative min-h-[220px]">
                  <div class="text-gray-400 text-sm font-bold mb-8">
                    Deposit
                  </div>

                  <input
                    v-model="token0Amount"
                    type="number"
                    class="bg-transparent outline-none text-2xl font-light w-full"
                  />

                  <!-- RIGHT -->
                  <div
                    class="absolute right-8 top-1/2 -translate-y-1/2 text-right"
                  >
                    <div class="flex items-center gap-4 mb-6">
                      <img
                        :src="selectedToken0.icon"
                        class="w-8 h-8 rounded-full"
                      />

                      <div class="text-xl font-bold">
                        {{ selectedToken0.symbol }}
                      </div>
                    </div>

                    <div
                      class="flex items-center justify-end gap-3 text-gray-400 text-sm"
                    >
                      <span>💼</span>

                      <span>0</span>
                    </div>
                  </div>
                </div>

                <!-- PLUS -->
                <div
                  class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <button
                    class="w-8 h-8 rounded-xl bg-[#2a3044] text-xl text-gray-300"
                  >
                    +
                  </button>
                </div>

                <!-- DIVIDER -->
                <div class="border-t border-white/10"></div>

                <!-- TOKEN 1 -->
                <div class="p-8 relative min-h-[220px]">
                  <div class="text-gray-400 text-sm font-bold mb-8">
                    Deposit
                  </div>

                  <input
                    v-model="token1Amount"
                    type="number"
                    class="bg-transparent outline-none text-2xl font-light w-full"
                  />

                  <!-- RIGHT -->
                  <div
                    class="absolute right-8 top-1/2 -translate-y-1/2 text-right"
                  >
                    <div class="flex items-center gap-4 mb-6">
                      <img
                        :src="selectedToken1.icon"
                        class="w-8 h-8 rounded-full"
                      />

                      <div class="text-xl font-bold">
                        {{ selectedToken1.symbol }}
                      </div>
                    </div>

                    <div
                      class="flex items-center justify-end gap-3 text-gray-400 text-sm"
                    >
                      <span>💼</span>

                      <span>0</span>
                    </div>
                  </div>
                </div>
              </div>
            </template>

            <!-- TOTAL -->
            <div class="flex justify-between items-center text-xs mb-6">
              <span>Total deposits</span>

              <span class="font-bold">N/A</span>
            </div>

            <div class="border-t border-white/10 mb-8"></div>

            <!-- POSITION SUMMARY -->
            <div class="text-xl font-bold mb-10">Position Summary</div>

            <!-- BUTTON -->
            <button
            @click="addLiquidity"
              class="w-full py-5 rounded-xl  text-black text-md font-bold cursor-not-allowed"
              :class="isAmountEntered(token0Amount) ? 'bg-cyan-400 text-black cursor-pointer' : 'bg-cyan-500/20 text-cyan-400 cursor-not-allowed'"
            >
             {{ isAmountEntered(token0Amount) ? "Add Liquidity" : "Enter an amount" }}
            </button>
          </template>

          <!-- ================= ORIGINAL V3 UI ================= -->
          <template v-else>
            <div
              v-if="step >= 5"
              class="rounded-xl border border-white/10 bg-[#0d1224]/95 p-8"
            >
              <!-- ACTIVE -->
              <div v-if="step === 5">
                <!-- HEADER -->
                <div class="flex items-center justify-between mb-8">
                  <div class="text-xl font-bold">Set amount</div>

                  <button
                    class="py-0 px-4 rounded-xl bg-cyan-500/20 text-cyan-400 text-xs font-bold flex items-center gap-2"
                  >
                    0.5%

                    <span class="text-xl"> ☰ </span>
                  </button>
                </div>

                <!-- SLIPPAGE -->
                <div class="mb-8">
                  <div class="flex items-center gap-2 text-md mb-5">
                    <span> Liquidity Slippage Tolerance </span>

                    <span class="text-gray-400"> ⓘ </span>
                  </div>

                  <div
                    class="bg-[#2a3044] rounded-xl p-2 grid grid-cols-4 gap-2"
                  >
                    <button
                      v-for="item in slippageOptions"
                      :key="item"
                      @click="liquiditySlippage = item"
                      class="py-2 rounded-xl text-sm font-bold transition-all"
                      :class="
                        liquiditySlippage === item
                          ? 'bg-cyan-400 text-black'
                          : 'text-gray-400'
                      "
                    >
                      {{ item }}
                    </button>
                  </div>
                </div>

                <!-- DEPOSIT BOX -->
                <div
                  class="rounded-xl border border-white/10 overflow-hidden mb-8 relative"
                >
                  <!-- TOKEN 0 -->
                  <div class="flex items-center p-8 relative">
                    <div>
                      <div class="text-gray-400 text-sm font-bold mb-4">
                        Deposit
                      </div>

                      <input
                        v-model="token0Amount"
                        type="number"
                        class="bg-transparent outline-none text-2xl font-light w-full"
                      />

                      <div class="text-gray-400 text-xs mt-2">
                        $ {{ (token0Amount * token0Price).toFixed(5) }} ⇅
                      </div>
                    </div>

                    <!-- RIGHT -->
                    <div
                      class="absolute right-8 top-1/2 -translate-y-1/2 text-right"
                    >
                      <div class="flex items-center gap-4 mb-5">
                        <img
                          :src="selectedToken0.icon"
                          class="w-8 h-8 rounded-full"
                        />

                        <div class="text-md font-bold">
                          {{ selectedToken0.symbol }}
                        </div>
                      </div>

                      <div
                        class="flex items-center justify-end gap-3 text-gray-400 text-sm"
                      >
                        <span> 💼 </span>

                        <span> 0 </span>
                      </div>
                    </div>
                  </div>

                  <!-- PLUS -->
                  <div
                    class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                  >
                    <button class="w-8 h-8 rounded-xl bg-[#2a3044] text-xl">
                      +
                    </button>
                  </div>

                  <!-- DIVIDER -->
                  <div class="border-t border-white/10"></div>

                  <!-- TOKEN 1 -->
                  <div class="flex items-center p-8 relative">
                    <div>
                      <div class="text-gray-400 text-sm font-bold mb-4">
                        Deposit
                      </div>

                      <input
                        v-model="token1Amount"
                        type="number"
                        class="bg-transparent outline-none text-2xl font-light w-full"
                      />

                      <div class="text-gray-400 text-xs mt-1">
                        $ {{ (token1Amount * token1Price).toFixed(5) }} ⇅
                      </div>
                    </div>

                    <!-- RIGHT -->
                    <div
                      class="absolute right-8 top-1/2 -translate-y-1/2 text-right"
                    >
                      <div class="flex items-center gap-4 mb-5">
                        <img
                          :src="selectedToken1.icon"
                          class="w-8 h-8 rounded-full"
                        />

                        <div class="text-md font-bold">
                          {{ selectedToken1.symbol }}
                        </div>
                      </div>

                      <div
                        class="flex items-center justify-end gap-3 text-gray-400 text-sm"
                      >
                        <span> 💼 </span>

                        <span> 0 </span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- TOTAL -->
                <div class="flex justify-between items-center text-xs mb-8">
                  <span> Total deposits </span>

                  <span class="font-bold"> ${{ totalDeposits }} </span>
                </div>

                <div class="border-t border-white/10 mb-8"></div>

                <!-- POSITION SUMMARY -->
                <div class="text-xl font-bold mb-10">Position Summary</div>

                <!-- BUTTON -->
                <button
                  :disabled="!hasEnoughBalance"
                  class="py-2 px-8 w-full rounded-xl text-md font-bold ml-auto flex items-center justify-center transition"
                  :class="
                    hasEnoughBalance
                      ? 'bg-cyan-400 text-black'
                      : 'bg-white/90 text-gray-400 cursor-not-allowed'
                  "
                >
                  {{
                    hasEnoughBalance
                      ? "Add Liquidity"
                      : `Insufficient ${selectedToken1.symbol} balance`
                  }}
                </button>
              </div>

              <!-- COLLAPSED -->
              <div
                v-if="step > 5"
                class="p-8 py-3 flex justify-between items-center"
              >
                <div>
                  <div class="text-4xl font-bold mb-2">Set amount</div>

                  <div class="text-2xl text-gray-300">
                    {{ token0Amount }} {{ selectedToken0.symbol }}
                    +
                    {{ token1Amount }} {{ selectedToken1.symbol }}
                  </div>
                </div>

                <button
                  @click="editStep(5)"
                  class="h-16 px-4 rounded-xl border-2 border-cyan-400/50 text-cyan-400 text-xs font-bold cursor-pointer hover:scale-[1.04]"
                >
                  Edit
                </button>
              </div>
            </div>
          </template>
        </div>
      </div>

      <!-- RIGHT -->
      <!-- RIGHT -->
      <div class="sticky top-8 mx-8">
        <div class="text-md font-bold mb-8">Position Summary</div>

        <!-- PAIR -->
        <div class="flex flex-col gap-2 items-start justify-start mb-10">
          <div class="flex items-center gap-4">
            <div class="flex -space-x-3">
              <template v-if="selectedToken0">
                <img
                  :src="selectedToken0.icon"
                  class="w-8 h-8 rounded-full border-4 border-[#09111f]"
                />
              </template>

              <template v-if="selectedToken1">
                <img
                  :src="selectedToken1.icon"
                  class="w-8 h-8 rounded-full border-4 border-[#09111f]"
                />
              </template>
            </div>

            <div class="text-sm font-bold">
              {{ pairName }}
            </div>
          </div>

          <div class="flex justify-between text-xs text-xs  w-[100%]">
            <span class = "flex justify-between w-[100%]">
              <p class="text-gray-400">Est Apr</p>
            <p class = "font-bold">{{ summaryAPR }}</p>
            </span>
          </div>
        </div>

        <!-- SUMMARY -->
        <div class="space-y-3 text-xs">
          <div class="flex justify-between">
            <span class="text-gray-400">Pool</span>

            <span class="font-bold">
              {{ summaryPool }}
            </span>
          </div>

          <div class="border-t border-white/10"></div>

          <div class="flex justify-between text-xs">
            <span class="text-gray-400">Fee tier</span>

            <span class="font-bold">
              {{ summaryFeeTier }}
            </span>
          </div>

          <div class="flex justify-between text-xs">
            <span class="text-gray-400">Price range</span>

            <span class="font-bold text-right">
              {{ summaryPriceRange }}
            </span>
          </div>

          <div class="flex justify-between text-xs">
            <span class="text-gray-400">Deposits</span>

            <div class="flex flex-col gap-1 font-bold text-right max-w-[260px]">
              <!-- {{ summaryDeposits }} -->
                <span class="flex gap-1 text-xs"><img :src="selectedToken0?.icon" class = "h-4 w-4 rounded-full" alt="" srcset=""><p>{{ token0Amount }}</p></span>
                <span class="flex gap-1 text-xs"><img :src="selectedToken1?.icon" class = "h-4 w-4 rounded-full" alt=""><p>{{ token1Amount }}</p></span>
            </div>
          </div>

          <div class="flex justify-between text-xs">
            <span class="text-gray-400">Pool ratio</span>

            <span class="font-bold text-right max-w-[260px]">
              {{ summaryPoolRatio }}
            </span>
          </div>

          <div class="flex justify-between text-xs">
            <span class="text-gray-400">Share of pool</span>

            <span class="font-bold">
              {{ summaryShare }}
            </span>
          </div>
        </div>

        <!-- INFO BOX -->
        <div
          class="mt-10 rounded-xl bg-gradient-to-r from-cyan-300 to-cyan-100 text-black p-6"
        >
          <div class="text-md font-bold mb-3">What’s the best price range?</div>

          <div class="text-xs leading-relaxed">
            Narrower ranges boost fees but carry more risk.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
