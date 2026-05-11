<script setup>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "vue-chartjs";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

/* =========================
   ROUTE
========================= */

const route = useRoute();
const slug = route.params.slug;

/* =========================
   GET POOLS
========================= */

const { pools } = usePools();

/* =========================
   FIND CURRENT POOL
========================= */

const currentPool = computed(() => {
  return pools.find((pool) => pool.items?.some((item) => item.slug === slug));
});

/* =========================
   FIND CURRENT ITEM
========================= */

const currentPoolItem = computed(() => {
  return currentPool.value?.items?.find((item) => item.slug === slug);
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

const activeVersion = ref(currentPoolItem.value?.version || "V3");

const activeFee = ref("1%");

/* =========================
   FILTER OPTIONS
========================= */

const versions = ["V2", "V3"];

const feeOptions = ["0.3%", "0.01%", "1%", "0.05%"];

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

const transactions = [
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
];

const filteredTransactions = computed(() => {
  if (activeTx.value === "All") {
    return transactions;
  }

  return transactions.filter((tx) => tx.type === activeTx.value.toUpperCase());
});
</script>

<template>
  <div class="min-h-screen text-white">
    <div class="max-w-7xl mx-auto px-8 py-8">
      <!-- BACK -->
      <NuxtLink
        to="/pools"
        class="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8"
      >
        ← Liquidity Pools
      </NuxtLink>

      <!-- TOP -->
      <div class="flex flex-col lg:flex-row justify-between gap-10 mb-10">
        <!-- LEFT -->
        <div>
          <!-- TITLE -->
          <div class="flex items-center gap-4 mb-5">
            <div class="flex -space-x-2">
              <img
                :src="poolIcon[0]"
                class="w-12 h-12 rounded-full border-2 border-[#09111f]"
              />

              <img
                :src="poolIcon[1]"
                class="w-12 h-12 rounded-full border-2 border-[#09111f]"
              />
            </div>

            <div>
              <h1 class="text-[28px] font-bold uppercase">
                {{ poolName }}
              </h1>

              <div class="text-cyan-400 text-sm mt-1">
                {{ currentPoolItem?.version }}
              </div>
            </div>
          </div>

          <!-- TABS -->
          <div class="flex gap-8 mb-5">
            <button
              class="border-b-2 border-cyan-400 pb-2 text-md font-semibold"
            >
              Overview
            </button>

            <button class="text-gray-400 text-md">My Positions</button>
          </div>

          <!-- FILTERS -->
          <div class="flex gap-2 flex-wrap">
            <!-- VERSIONS -->
            <button
              v-for="version in versions"
              :key="version"
              @click="activeVersion = version"
              class="px-4 py-2 rounded-xl transition text-xs cursor-pointer hover:scale-[1.06]"
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
              class="px-4 py-2 rounded-xl transition text-xs cursor-pointer hover:scale-[1.06]"
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
      </div>

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
          <div class="flex flex-col md:flex-row justify-between gap-5 mb-12">
            <!-- LEFT -->
            <div class="flex gap-2 flex-wrap">
              <button
                v-for="item in ['Volume', 'Liquidity', 'Fees']"
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
            <div class="flex flex-col md:flex-row justify-between gap-5 mb-6">
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
                <div>WCRO</div>
                <div>VIES</div>
                <div>Time</div>
              </div>

              <!-- ROWS -->
              <div
                v-for="tx in filteredTransactions"
                :key="tx.time"
                class="grid md:grid-cols-5 gap-4 items-center border-b border-white/5 pb-5 text-xs"
              >
                <div>{{ tx.from }}</div>
                <div>{{ tx.type }}</div>
                <div>{{ tx.wcro }}</div>
                <div>{{ tx.vies }}</div>
                <div>{{ tx.time }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT -->
        <div class="space-y-5">
          <!-- LIQUIDITY -->
          <div class="bg-[#111827] rounded-3xl p-6 border border-white/5">
            <div class="text-gray-400 text-xs">Pool Liquidity</div>

            <div class="text-xl font-bold mb-6">
              {{ currentData.liquidity }}
            </div>

            <div class="flex justify-between text-sm mb-3">
              <span>WCRO</span>
              <span>VIES</span>
            </div>

            <div class="h-2 rounded-full bg-white/10 overflow-hidden mb-4">
              <div class="h-full w-1/3 bg-gray-300"></div>
            </div>

            <div class="flex justify-between text-xs">
              <div>
                <div>1,467.84</div>

                <div class="text-gray-400">$101.75</div>
              </div>

              <div class="text-right">
                <div>2.53M</div>

                <div class="text-gray-400">$326.23</div>
              </div>
            </div>
          </div>

          <!-- APR -->
          <div class="bg-[#111827] rounded-3xl p-6 border border-white/5">
            <div class="text-gray-400 text-xs mb-2">APR</div>

            <div class="text-xl font-bold">
              {{ currentData.apr }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
