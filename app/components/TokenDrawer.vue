<script setup>
const open = defineModel("open");
const emit = defineEmits(["select"]);

const selectToken = (token) => {
  emit("select", token);
  open.value = false;
};

const tokens = [
  {
    name: "CRO",
    symbol: "CRO Token",
    address:'0x4F8a1cD9A9dB5D2c9f6B2d7a2fA8c6d3b8f1A234',
    price: "$0.00",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9YKr4syBOjEY2jQ9fhTHtD46r3EpDspGyg&s",
    p: {
      "1h": "2",
      "24h": "-1",
      "7d": "3",
    },
    marketCap: "1m",
    volume: "1m",
    liquidity: "2m",
    supply: "4M",
    holders: "588",
  },
  {
    name: "USDT",
    symbol: "Tether USD",
    price: "$0.00",
    address: "0xCCBBAA99887766554433221100FFEEDDCCBBAA99",
    icon: "https://cryptologos.cc/logos/tether-usdt-logo.png",
    p: {
      "1h": "2",
      "24h": "-1",
      "7d": "3",
    },
    marketCap: "1m",
    volume: "1m",
    liquidity: "2m",
    supply: "4M",
    holders: "588",
  },
  {
    name: "WBTC",
    symbol: "WBTC Token",
    address: "0xCCBBAA99887766554433221100FFEEDDCCBBAA99",
    price: "$0.00",
    icon: "https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.png",
    p: {
      "1h": "2",
      "24h": "-1",
      "7d": "3",
    },
    marketCap: "1m",
    volume: "1m",
    liquidity: "2m",
    supply: "4M",
    holders: "588",
  },
];

const trending = [
  { name: "CRO", change: "+1.83%" },
  { name: "VVS", change: "-1.68%" },
  { name: "USDC", change: "+0.16%" },
  { name: "CORGIAI", change: "-1.97%" },
];
</script>

<template>
  <USlideover
    v-model:open="open"
    side="right"
    :ui="{
      content: 'bg-[#0b1220] border-l border-white/10 w-[420px]',
    }"
  >
    <template #content>
      <div class="p-5 space-y-4 text-sm">
        <!-- Header -->
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-semibold">Select a token</h2>
          <UButton
            icon="i-heroicons-x-mark"
            variant="ghost"
            @click="open = false"
          />
        </div>

        <!-- Search -->
        <div class="flex items-center gap-2">
          <UInput placeholder="Search by name or symbol" class="flex-1" />
          <UButton icon="i-heroicons-clipboard" variant="ghost" />
          <UButton icon="i-heroicons-pencil-square" variant="ghost" />
        </div>

        <!-- Trending Row -->
        <div class="flex gap-2 overflow-x-auto pb-2">
          <div
            v-for="t in trending"
            :key="t.name"
            class="px-3 py-2 rounded-lg border border-white/10 bg-black/30 whitespace-nowrap"
          >
            <div class="text-xs font-semibold">{{ t.name }}</div>
            <div
              class="text-xs"
              :class="
                t.change.includes('+') ? 'text-green-400' : 'text-red-400'
              "
            >
              {{ t.change }}
            </div>
          </div>
        </div>

        <!-- Tabs -->
        <div class="flex gap-4 text-sm border-b border-white/10 pb-2">
          <span class="text-white border-b-2 border-cyan-400 pb-1">All</span>
          <span class="opacity-60">Trending</span>
          <span class="opacity-60">Holdings</span>
          <span class="opacity-60">New</span>
          <span class="opacity-60">Meme</span>
          <span class="opacity-60">Stables</span>
        </div>

        <!-- Token List -->
        <div class="space-y-2 max-h-[60vh] overflow-y-auto">
          <div
            v-for="t in tokens"
            @click="selectToken(t)"
            :key="t.name"
            class="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 cursor-pointer"
          >
            <!-- Left -->
            <div class="flex items-center gap-3">
              <img :src="t.icon" class="w-8 h-8 rounded-full" />

              <div>
                <div class="font-medium">{{ t.name }}</div>
                <div class="text-xs opacity-60">{{ t.symbol }}</div>
              </div>
            </div>

            <!-- Right -->
            <div class="text-sm opacity-60">
              {{ t.price }}
            </div>
          </div>
        </div>
      </div>
    </template>
  </USlideover>
</template>
