<script setup>
import { set } from "@nuxt/ui/runtime/utils/index.js";

const { pools } = usePools();
const currentPool = useState("currentPool", () => null);
const expandedPool = ref(null);

const selectedVersion = ref("All");
const selectedToken = ref("All");
const selectedCategory = ref("All");

const showSearch = ref(false);
const search = ref("");

/* ================= DROPDOWNS ================= */

const versions = ["All", "V2", "V3"];

const tokens = computed(() => {
  const allTokens = pools.flatMap((pool) => {
    return pool.name.split("-");
  });

  return ["All", ...new Set(allTokens)];
});

const categories = ["All", "DeFi", "Game", "Meme", "Stable"];

/* ================= FILTER ================= */

const filteredPools = computed(() => {
  return pools.filter((pool) => {
    /* VERSION */
    const versionMatch =
      selectedVersion.value === "All" ||
      pool.items?.some((item) =>
        item.version.toUpperCase().includes(selectedVersion.value)
      );

    /* TOKEN */
    const tokenMatch =
      selectedToken.value === "All" || pool.name.includes(selectedToken.value);

    /* CATEGORY */
    const categoryMatch =
      selectedCategory.value === "All" ||
      pool.category === selectedCategory.value;

    /* SEARCH */
    const searchMatch = pool.name
      .toLowerCase()
      .includes(search.value.toLowerCase());

    return versionMatch && tokenMatch && categoryMatch && searchMatch;
  });
});

onMounted(() => {
  console.log("current pol is", currentPool.value);
});
</script>

<template>
  <div class="min-h-screen text-white overflow-hidden">
    <!-- HEADER -->
    <div class="border-b border-white/5 bg-[#0f1725]/90 backdrop-blur-xl">
      <div
        class="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center"
      >
        <div class="flex gap-8 text-md">
          <button
            class="text-white border-b-2 border-cyan-400 pb-2 font-semibold"
          >
            Pools
          </button>

          <!-- <button class="text-gray-400 hover:text-white transition">
            Mines ↗
          </button> -->
        </div>

        <!-- <USelect :items="['LP101']" class="w-24" /> -->
      </div>
    </div>

    <!-- HELP SECTION -->
    <div
      class="bg-gradient-to-r from-cyan-500/20 to-white/10 border-b border-white/5"
    >
      <div class="max-w-7xl mx-auto px-6 py-6">
        <h2 class="text-xl font-bold mb-6">Need a hand?</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="card in 4"
            :key="card"
            class="bg-[#111827] rounded-2xl p-5 border border-white/5"
          >
            <div class="w-10 h-10 rounded-full bg-cyan-400 mb-4"></div>

            <div class="text-md font-semibold mb-4 leading-tight">
              How to earn from liquidity?
            </div>

            <div
              class="inline-flex px-3 py-1 rounded-full border border-white/20 text-xs text-gray-300"
            >
              3min
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- MAIN -->
    <div class="max-w-7xl mx-auto px-6 py-10">
      <!-- STATS -->
      <div class="grid grid-cols-2 gap-20 mb-14 max-w-3xl">
        <div>
          <div class="text-gray-400 mb-2 text-sm">Liquidity</div>

          <div class="text-xl font-bold">$118.18M</div>

          <div class="text-pink-500 text-sm font-semibold mt-2">↓ -2.17%</div>
        </div>

        <div>
          <div class="text-gray-400 text-sm mb-2">24H Volume</div>

          <div class="text-xl font-bold">$453.46K</div>

          <div class="text-pink-500 text-sm font-semibold mt-2">↓ -35.11%</div>
        </div>
      </div>

      <!-- ================= TAILORED ================= -->
      <div class="mb-16">
        <h2 class="text-xl font-bold mb-8">Tailored for You</h2>

        <div class="flex gap-6 overflow-x-auto pb-2 scrollbar-hide">
          <div
            v-for="pool in pools.slice(0, 5)"
            :key="pool.id"
            class="min-w-[420px] rounded-[28px] bg-[#0e1425]/90 border border-white/5 px-8 py-7 hover:border-cyan-400/30 transition cursor-pointer"
          >
            <!-- TOP -->
            <div class="flex items-center gap-3 mb-6">
              <div class="flex -space-x-2">
                <img
                  :src="pool.icons[0]"
                  class="w-7 h-7 rounded-full border-2 border-[#0b1220]"
                />

                <img
                  :src="pool.icons[1]"
                  class="w-7 h-7 rounded-full border-2 border-[#0b1220]"
                />
              </div>

              <div class="text-md font-bold tracking-tight">
                {{ pool.name }}
              </div>
            </div>

            <!-- APR -->
            <div class="text-[#00E889] text-xs font-bold">
              Earn {{ pool.apr }} APR
            </div>
          </div>
        </div>
      </div>

      <!-- ================= POOLS ================= -->
      <div>
        <!-- TITLE -->
        <div class="mb-8">
          <h2 class="text-xl font-bold mb-8">Pools (2503)</h2>

          <!-- FILTERS -->
          <!-- FILTERS -->
          <div class="flex items-center gap-5 flex-wrap">
            <!-- VERSION -->
            <select
              v-model="selectedVersion"
              class="py-2 px-7 rounded-full border border-white/30 bg-[#111827] text-sm text-gray-300 outline-none cursor-pointer"
            >
              <option
                v-for="version in versions"
                :key="version"
                :value="version"
              >
                {{ version }}
              </option>
            </select>

            <!-- TOKENS -->
            <select
              v-model="selectedToken"
              class="py-2 px-7 rounded-full border border-white/30 bg-[#111827] text-sm text-gray-300 outline-none cursor-pointer"
            >
              <option v-for="token in tokens" :key="token" :value="token">
                {{ token }}
              </option>
            </select>

            <!-- CATEGORIES -->
            <select
              v-model="selectedCategory"
              class="py-2 px-7 rounded-full border border-white/30 bg-[#111827] text-sm text-gray-300 outline-none cursor-pointer"
            >
              <option
                v-for="category in categories"
                :key="category"
                :value="category"
              >
                {{ category }}
              </option>
            </select>

            <!-- SEARCH ICON -->
            <button
              class="text-4xl text-white/90 ml-1 cursor-pointer hover:scale-[1.06]"
              @click="showSearch = !showSearch"
            >
              ⌕
            </button>

            <!-- SEARCH BAR -->
            <transition
              enter-active-class="transition duration-200"
              enter-from-class="opacity-0 scale-95"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition duration-150"
              leave-from-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-95"
            >
              <input
                v-if="showSearch"
                v-model="search"
                type="text"
                placeholder="Search pools..."
                class="h-11 w-[240px] px-5 rounded-full border border-cyan-400/40 bg-[#111827] text-white outline-none placeholder:text-gray-500"
              />
            </transition>
          </div>
        </div>

        <!-- TABLE -->
        <div>
          <!-- HEADER -->
          <div
            class="grid grid-cols-[2fr_1fr_1fr_1fr_80px] px-4 py-6 text-gray-400 text-sm"
          >
            <div>Pool</div>

            <div class="flex items-center gap-2">
              TVL

              <span class="text-sm opacity-60">▲</span>
            </div>

            <div class="flex items-center gap-2">
              Vol

              <span class="text-sm opacity-60">▲</span>
            </div>

            <div class="flex items-center gap-2 text-cyan-400">
              APR

              <span class="text-sm">▼</span>
            </div>

            <div></div>
          </div>

          <!-- ROWS -->
          <div
            v-for="pool in filteredPools"
            :key="pool.id"
            class="border-b border-white/10"
          >
            <!-- MAIN -->
            <div
              class="grid grid-cols-[2fr_1fr_1fr_1fr_80px] items-center px-4 py-4 hover:bg-white/[0.02] transition cursor-pointer"
              @click="expandedPool = expandedPool === pool.id ? null : pool.id"
            >
              <!-- POOL -->
              <div class="flex items-center gap-5">
                <div class="flex -space-x-2">
                  <img
                    :src="pool.icons[0]"
                    class="w-8 h-8 rounded-full border-2 border-[#09111f]"
                  />

                  <img
                    :src="pool.icons[1]"
                    class="w-8 h-8 rounded-full border-2 border-[#09111f]"
                  />
                </div>

                <div>
                  <div class="text-md font-bold mb-1">
                    {{ pool.name }}
                  </div>

                  <div class="text-gray-300 text-xs font-semibold">
                    {{ pool.items.length }} pools
                  </div>
                </div>
              </div>

              <!-- TVL -->
              <div class="text-sm">
                {{ pool.tvl }}
              </div>

              <!-- VOL -->
              <div class="text-sm">
                {{ pool.volume }}
              </div>

              <!-- APR -->
              <div class="text-sm">
                {{ pool.apr }}
              </div>

              <!-- ARROW -->
              <div class="text-right text-2xl text-white/90">›</div>
            </div>

            <!-- EXPANDED -->
            <div v-if="expandedPool === pool.id" class="pb-5">
              <NuxtLink
                v-for="item in pool.items"
                :key="item.poolAddress"
                :to="`/pools/${item.poolAddress}`"
                @click="
                  currentPool = {
                    ...item,
                    name: pool.name,
                    addressToken0: pool.token0,
                    addressToken1: pool.token1,
                    icons: pool.icons,
                    versions: [...new Set(pool.items.map((i) => i.version))],
                    feeTiersByVersion: pool.items.reduce((acc, curr) => {
                      if (!acc[curr.version]) {
                        acc[curr.version] = [];
                      }

                      if (!acc[curr.version].includes(curr.feeTier)) {
                        acc[curr.version].push(curr.feeTier);
                      }

                      return acc;
                    }, {}),
                  }
                "
                class="grid grid-cols-[2fr_1fr_1fr_1fr_80px] items-center px-4 py-5 hover:bg-white/[0.03] transition"
              >
                <div
                  class="flex justify-start gap-4 w-fit px-2 py-1 rounded-full border border-white/20 text-xs"
                >
                  <span>
                    {{ item.version }}
                  </span>
                  <span>
                    {{ item.feeTier }}
                  </span>
                </div>

                <div class="text-sm">
                  {{ item.tvl }}
                </div>

                <div class="text-sm">
                  {{ item.volume }}
                </div>

                <div class="text-sm">
                  {{ item.apr }}
                </div>

                <div class="text-right text-3xl">›</div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
