<script setup>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { formatAddress } from "~/utils/helper";

import { Bar } from "vue-chartjs";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
const activeTab = ref("overview");

/* =========================
   ROUTE
========================= */

const route = useRoute();
const slug = route.params.slug;
const currentPool = useState("currentPool");
/* =========================
   GET POOLS
========================= */

const { pools } = usePools();

/* =========================
   FIND CURRENT POOL
========================= */

// const currentPool = computed(() => {
//   return pools.find((pool) => pool.items?.some((item) => item.slug === slug));
// });

/* =========================
   FIND CURRENT ITEM
========================= */

const activeVersion = ref(currentPool?.value?.version || "V3");
const activeFee = ref(currentPool?.value?.feeTier);

const currentPoolItem = computed(() => {
  const selectedPool = pools.find(
    (pool) => pool.name === currentPool.value?.name
  );

  if (!selectedPool) return null;
  console.log("selected poool is", selectedPool);
  const data = selectedPool.items.find(
    (item) =>
      item.version === activeVersion.value && item.feeTier === activeFee.value
  );

  console.log("data is ", data);
  return {
    ...data,
    name: selectedPool.name,
    addressToken0: selectedPool.token0,
    addressToken1: selectedPool.token1,
    icons: selectedPool.icons,
    versions: [...new Set(selectedPool.items.map((i) => i.version))],
    feeTiersByVersion: selectedPool.items.reduce((acc, curr) => {
      if (!acc[curr.version]) {
        acc[curr.version] = [];
      }

      if (!acc[curr.version].includes(curr.feeTier)) {
        acc[curr.version].push(curr.feeTier);
      }

      return acc;
    }, {}),
  };
});

/* =========================
   DYNAMIC DATA
========================= */

const poolName = computed(() => {
  return currentPool.value?.name || slug;
});

const poolIcon = computed(() => {
  return (
    currentPool.value?.icons ||
    "https://cryptologos.cc/logos/crypto-com-coin-cro-logo.png"
  );
});

/* =========================
   ACTIVE STATES
========================= */

const activeChart = ref("Volume");
const activeRange = ref("7D");
const activeTx = ref("All");

/* =========================
   FILTER OPTIONS
========================= */

const versions = ref(currentPool?.value?.versions);

// const feeOptions = currentPool.value.feeTiersByVersion[currentPool.value.version];
const feeOptions = computed(() => {
  return currentPool.value?.feeTiersByVersion?.[activeVersion.value] || [];
});

/* =========================
   POOL DATA
========================= */

const poolData = {
  V3: {
    "1%": {
      liquidity: "$427.98",
      apr: "65.68%",

      chart: {
        Volume: {
          "7D": {
            value: "$0.083",

            labels: [
              "01 May",
              "02 May",
              "03 May",
              "04 May",
              "05 May",
              "06 May",
              "07 May",
              "08 May",
            ],

            data: [0, 26, 0, 2, 78, 10, 6, 3],
          },

          "30D": {
            value: "$0.312",
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],

            data: [45, 70, 32, 80],
          },

          "90D": {
            value: "$0.981",
            labels: ["Jan", "Feb", "Mar"],
            data: [55, 35, 90],
          },
        },
      },
    },
  },
};

/* =========================
   CURRENT DATA
========================= */

const currentData = computed(() => {
  return (
    poolData?.[activeVersion.value]?.[activeFee.value] || poolData.V3["1%"]
  );
});

const currentChart = computed(() => {
  return (
    currentData.value.chart?.[activeChart.value]?.[activeRange.value] || {
      value: "$0",
      labels: [],
      data: [],
    }
  );
});

/* =========================
   CHART DATA
========================= */

const chartData = computed(() => ({
  labels: currentChart.value.labels,

  datasets: [
    {
      data: currentChart.value.data,
      backgroundColor: "#22d3ee",
      borderRadius: 2,
      borderSkipped: false,
      barPercentage: 0.45,
      categoryPercentage: 0.7,
    },
  ],
}));

/* =========================
   CHART OPTIONS
========================= */

const chartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: false,
    },

    tooltip: {
      backgroundColor: "#111827",
      borderColor: "rgba(255,255,255,0.08)",
      borderWidth: 1,
      titleColor: "#fff",
      bodyColor: "#fff",
    },
  },

  scales: {
    x: {
      grid: {
        display: false,
      },

      ticks: {
        color: "#9ca3af",
      },

      border: {
        display: false,
      },
    },

    y: {
      position: "right",

      ticks: {
        color: "#9ca3af",
      },

      grid: {
        color: "rgba(255,255,255,0.03)",
      },

      border: {
        display: false,
      },
    },
  },
}));

/* =========================
   TRANSACTIONS
========================= */

const transactions = currentPoolItem?.value?.transactions;

const filteredTransactions = computed(() => {
  if (activeTx.value === "All") {
    return transactions;
  }

  return transactions.filter((tx) => tx.type === activeTx.value.toUpperCase());
});

watch(activeVersion, () => {
  const fees =
    currentPool.value?.feeTiersByVersion?.[activeVersion.value] || [];

  activeFee.value = fees[0];
});

onMounted(() => {
  console.log("current pool is", currentPool.value);
});
</script>

<template>
  <div class="min-h-screen text-white">
    <div class="max-w-7xl mx-auto px-8 py-8">
      <!-- BACK -->
      <NuxtLink
        to="/pools"
        class="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 text-sm"
      >
        ← Liquidity Pools
      </NuxtLink>

      <!-- TOP -->
      <div class="flex flex-col lg:flex-row justify-between gap-10 mb-10">
        <!-- LEFT -->
        <div>
          <!-- TITLE -->
          <div class="flex items-center gap-2 mb-5">
            <div class="flex -space-x-2">
              <img
                :src="poolIcon[0]"
                class="w-8 h-8 rounded-full border-2 border-[#09111f]"
              />

              <img
                :src="poolIcon[1]"
                class="w-8 h-8 rounded-full border-2 border-[#09111f]"
              />
            </div>

            <div>
              <h1 class="text-md font-bold uppercase">
                {{ poolName }}
              </h1>

              <div class="text-cyan-400 text-xs mt-1">
                {{ currentPoolItem?.version }}
              </div>
            </div>
          </div>

          <!-- TABS -->
          <div class="flex gap-8 mb-5">
            <button
              @click="activeTab = 'overview'"
              class="pb-2 text-sm cursor-pointer"
              :class="
                activeTab == 'overview'
                  ? 'border-b-2 border-cyan-400 '
                  : 'text-gray-400'
              "
            >
              Overview
            </button>

            <button
              @click="activeTab = 'position'"
              class="text-sm cursor-pointer"
              :class="
                activeTab == 'position'
                  ? 'border-b-2 border-cyan-400 '
                  : 'text-gray-400'
              "
            >
              My Positions
            </button>
          </div>

          <div>
            <div
              v-if="activeTab == 'overview'"
              class="flex justify-between gap-2 flex-wrap"
            >
              <div class="flex gap-2 flex-wrap">
                <!-- FILTERS -->
                <div class="flex gap-2 flex-wrap">
                  <!-- VERSIONS -->
                  <button
                    v-for="version in versions"
                    :key="version"
                    @click="activeVersion = version"
                    class="px-2 py-2 rounded-xl transition text-xs cursor-pointer hover:scale-[1.06]"
                    :class="
                      activeVersion === version
                        ? 'bg-cyan-400 text-black font-bold'
                        : 'bg-[#1a2233] text-gray-400'
                    "
                  >
                    {{ version }}
                  </button>

                  <!-- FEES -->
                  <button
                    v-for="fee in feeOptions"
                    :key="fee"
                    @click="activeFee = fee"
                    class="px-2 py-2 rounded-xl transition text-xs cursor-pointer hover:scale-[1.06]"
                    :class="
                      activeFee === fee
                        ? 'bg-cyan-400 text-black font-bold'
                        : 'bg-[#1a2233] text-gray-400'
                    "
                  >
                    {{ fee }}
                  </button>
                </div>
              </div>

              <!-- RIGHT -->
              <NuxtLink
                :to="{
                  path: '/liquidity',
                  query: {
                    token0: currentPool?.name?.split('-')[0],
                    token1: currentPool?.name?.split('-')[1],
                    version: currentPoolItem?.version?.split('·')[0]?.trim(),
                    fee: currentPoolItem?.version?.split('·')[1]?.trim(),
                    icon0: currentPool?.icons?.[0],
                    icon1: currentPool?.icons?.[1],
                  },
                }"
                class="cursor-pointer"
              >
                <button
                  class="bg-cyan-400 hover:bg-cyan-300 transition text-black px-5 py-3 rounded-2xl font-bold text-md cursor-pointer hover:scale-[1.02]"
                >
                  + Add Liquidity
                </button>
              </NuxtLink>
              <!-- MAIN -->
              <div class="grid grid-cols-1 xl:grid-cols-[1fr_370px] gap-10">
                <!-- LEFT -->
                <div>
                  <!-- CHART -->
                  <div class="relative h-[520px] mb-10">
                    <!-- VALUE -->
                    <div class="absolute left-0 top-0 z-10">
                      <div class="text-xl font-bold">
                        {{ currentChart.value }}
                      </div>

                      <div class="text-gray-300 text-xs">
                        {{ activeChart }} {{ activeRange }}
                      </div>
                    </div>

                    <!-- CHART -->
                    <div class="absolute inset-0 pt-24">
                      <Bar :data="chartData" :options="chartOptions" />
                    </div>
                  </div>

                  <!-- FILTER -->
                  <div
                    class="flex flex-col md:flex-row justify-between gap-5 mb-12"
                  >
                    <!-- LEFT -->
                    <div class="flex gap-2 flex-wrap">
                      <button
                        v-for="item in ['Volume', 'Liquidity']"
                        :key="item"
                        @click="activeChart = item"
                        class="px-4 py-2 rounded-xl transition text-xs cursor-pointer hover:scale-[1.06]"
                        :class="
                          activeChart === item
                            ? 'bg-cyan-400 text-black font-semibold'
                            : 'bg-[#1a2233] text-gray-400'
                        "
                      >
                        {{ item }}
                      </button>
                    </div>

                    <!-- RIGHT -->
                    <div class="flex gap-2">
                      <button
                        v-for="range in ['7D', '30D', '90D']"
                        :key="range"
                        @click="activeRange = range"
                        class="px-4 py-2 rounded-xl transition text-xs cursor-pointer hover:scale-[1.06]"
                        :class="
                          activeRange === range
                            ? 'bg-cyan-400 text-black font-semibold'
                            : 'bg-[#1a2233] text-gray-300'
                        "
                      >
                        {{ range }}
                      </button>
                    </div>
                  </div>

                  <!-- TRANSACTIONS -->
                  <div>
                    <div
                      class="flex flex-col md:flex-row justify-between gap-5 mb-6"
                    >
                      <h2 class="text-xl font-bold">Transactions</h2>

                      <div class="flex gap-2 flex-wrap">
                        <button
                          v-for="item in ['All', 'Swap', 'Add', 'Remove']"
                          :key="item"
                          @click="activeTx = item"
                          class="px-4 py-2 rounded-xl transition text-xs cursor-pointer hover:scale-[1.06]"
                          :class="
                            activeTx === item
                              ? 'bg-cyan-400 text-black font-semibold'
                              : 'bg-[#1a2233] text-gray-400'
                          "
                        >
                          {{ item }}
                        </button>
                      </div>
                    </div>

                    <!-- TABLE -->
                    <div class="space-y-6">
                      <!-- HEAD -->
                      <div
                        class="hidden md:grid grid-cols-5 text-gray-400 text-sm pb-2"
                      >
                        <div>From</div>
                        <div>Type</div>
                        <div>{{ currentPoolItem?.token0?.name }}</div>
                        <div>{{ currentPoolItem?.token1?.name }}</div>
                        <div>Time</div>
                      </div>

                      <!-- ROWS -->
                      <NuxtLink
                        v-for="tx in filteredTransactions"
                        :key="tx.time"
                        :to="`https://explorer.cronos.org/tx/${tx.hash}`"
                      >
                        <div
                          class="grid md:grid-cols-5 gap-4 items-center border-b border-white/5 pb-5 text-xs"
                        >
                          <div>{{ tx.from }}</div>
                          <div>{{ tx.type }}</div>
                          <div>{{ tx.wcro }}</div>
                          <div>{{ tx.vies }}</div>
                          <div>{{ tx.time }}</div>
                        </div>
                      </NuxtLink>
                    </div>
                  </div>
                </div>

                <!-- RIGHT -->
                <div class="space-y-5">
                  <!-- LIQUIDITY -->
                  <div
                    class="bg-[#111827] rounded-3xl p-6 border border-white/5"
                  >
                    <div class="text-gray-400 text-xs">Pool Liquidity</div>

                    <div class="text-sm font-bold mb-6">
                      {{ currentPoolItem?.volume }}
                    </div>

                    <div class="flex justify-between">
                      <div
                        class="flex justify-start gap-1 items-center text-xs mb-3"
                      >
                        <img
                          :src="currentPoolItem?.icons[0]"
                          alt=""
                          srcset=""
                          class="h-4 w-4"
                        />
                        <span>{{ currentPoolItem?.token0?.name }}</span>
                      </div>
                      <div
                        class="flex justify-start gap-1 items-center text-xs mb-3"
                      >
                        <img
                          :src="currentPoolItem?.icons[1]"
                          alt=""
                          srcset=""
                          class="h-4 w-4"
                        />
                        <span>{{ currentPoolItem?.token1?.name }}</span>
                      </div>
                    </div>

                    <div
                      class="h-2 rounded-full bg-white/10 overflow-hidden mb-4"
                    >
                      <div class="h-full w-1/3 bg-gray-300"></div>
                    </div>

                    <div class="flex justify-between text-xs">
                      <div>
                        <div>{{ currentPoolItem?.token0?.total }}</div>

                        <div class="text-gray-400">$101.75</div>
                      </div>

                      <div class="text-right">
                        <div>{{ currentPoolItem?.token1?.total }}</div>

                        <div class="text-gray-400">$326.23</div>
                      </div>
                    </div>
                  </div>

                  <!-- APR -->
                  <div
                    class="bg-[#111827] rounded-3xl p-6 border border-white/5"
                  >
                    <div class="text-gray-400 text-xs mb-2">APR</div>

                    <div class="text-sm font-bold">
                      {{ currentPoolItem?.apr }}
                    </div>
                  </div>

                  <div
                    class="bg-[#0f1725]/95 rounded-[30px] p-7 border border-white/10 backdrop-blur-xl"
                  >
                    <!-- ROW -->
                    <div class="flex items-center justify-between py-2">
                      <!-- LEFT -->
                      <div class="flex items-center gap-3">
                        <span class="text-xs font-bold text-white">
                          Pool Address
                        </span>
                      </div>

                      <!-- RIGHT -->
                      <div class="flex items-center gap-4">
                        <span class="text-xs font-medium text-white/90">
                          {{ formatAddress(currentPoolItem?.poolAddress) }}
                        </span>

                        <!-- COPY -->
                        <button
                          class="text-white/90 hover:text-cyan-400 transition-all cursor-pointer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <rect x="9" y="9" width="13" height="13" rx="2" />
                            <path
                              d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                            />
                          </svg>
                        </button>

                        <!-- EXTERNAL -->
                        <button
                          class="text-white/90 hover:text-cyan-400 transition-all cursor-pointer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                            />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div class="flex items-center justify-between py-2">
                      <!-- LEFT -->
                      <div class="flex items-center gap-1">
                        <img
                          :src="currentPoolItem?.icons[0]"
                          class="w-4 h-4 rounded-full"
                        />

                        <span class="text-xs font-bold text-white">
                          {{ currentPoolItem?.token0?.name }}
                        </span>
                      </div>

                      <!-- RIGHT -->
                      <div class="flex items-center gap-4">
                        <span class="text-xs font-medium text-white/90">
                          {{ formatAddress(currentPoolItem?.addressToken0) }}
                        </span>

                        <!-- COPY -->
                        <button
                          class="text-white/90 hover:text-cyan-400 transition-all cursor-pointer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <rect x="9" y="9" width="13" height="13" rx="2" />
                            <path
                              d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                            />
                          </svg>
                        </button>

                        <!-- EXTERNAL -->
                        <button
                          class="text-white/90 hover:text-cyan-400 transition-all cursor-pointer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                            />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <!-- ROW -->
                    <div class="flex items-center justify-between py-2">
                      <!-- LEFT -->
                      <div class="flex items-center gap-1">
                        <img
                          :src="currentPoolItem?.icons[1]"
                          class="w-4 h-4 rounded-full"
                        />

                        <span class="text-xs font-bold text-white">
                          {{ currentPoolItem?.token1?.name }}
                        </span>
                      </div>

                      <!-- RIGHT -->
                      <div class="flex items-center gap-4">
                        <span class="text-xs font-medium text-white/90">
                          {{ formatAddress(currentPoolItem?.addressToken1) }}
                        </span>

                        <!-- COPY -->
                        <button
                          class="text-white/90 hover:text-cyan-400 transition-all cursor-pointer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <rect x="9" y="9" width="13" height="13" rx="2" />
                            <path
                              d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                            />
                          </svg>
                        </button>

                        <!-- EXTERNAL -->
                        <button
                          class="text-white/90 hover:text-cyan-400 transition-all cursor-pointer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                            />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="md:w-[80rem]" v-if="activeTab == 'position'">
              <MyPosition />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
