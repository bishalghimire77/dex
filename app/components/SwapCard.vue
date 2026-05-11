<script setup>
import { isAmountEntered } from '~/utils/helper'
const {isConnected} = useWallet();
const toast = useToast();


const openSetting = ref(false);
const openTokenDrawer = ref(false);
const sellAmount = ref(0);
const buyAmount = computed(() => sellAmount.value * 2);

const activeField = ref("sell"); // 'sell' or 'buy'

const sellToken = ref({
  name: "PAWSFLOW",
  icon: null,
});

const buyToken = ref({
  name: "CRO",
  icon: null,
});

const swap = async () => {
  if (!isConnected.value) {
    alert("Please connect your wallet first!");
    return;
  }


  toast.add({
    title: "Swap Executed",
    description: `Swapped ${sellAmount.value} ${sellToken.value.name} for ${buyAmount.value} ${buyToken.value.name}`,
    color: "success"
  })
}

</script>

<template>
  <div class="w-full max-w-md">
    <!-- Tabs -->
    <div class="flex justify-between items-center mb-4">
      <div class="flex gap-6 text-sm">
        <span class="text-cyan-400 border-b-2 border-cyan-400 pb-1">Swap</span>
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
            placeholder="0.00",
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
    @click = "isConnected ? swap() : alert('Please connect your wallet first!')"
      class="w-full mt-4 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300"
      :disabled="!isConnected"
      :class = "isConnected ? 'cursor-pointer' : 'cursor-not-allowed opacity-50', isConnected && isAmountEntered(sellAmount) ? 'hover:bg-cyan-300' : 'cursor-not-allowed opacity-50'"

    >
      {{ isConnected && isAmountEntered(sellAmount) ? 'Swap'   : 'Enter Amount'  ,!isConnected ? 'Connect Wallet' : '' }}
    </button>

    <!-- PRICE -->
    <div class="mt-3 text-sm text-gray-400">
      1 {{ sellToken.name }} ≈ 0.00031 {{ buyToken.name }}
    </div>

    <!-- INFO CARDS -->
    <div class="grid grid-cols-2 gap-3 mt-4">
      <InfoCard
        :title="sellToken.name"
        :icon="sellToken.icon"
        price="$0.06972"
        change="-1.18%"
      />

      <InfoCard
        :title="buyToken.name"
        :icon="buyToken.icon"
        price="$0.05126"
        change="-1.27%"
      />
    </div>

    <!-- HISTORY -->
    <div class="mt-6">
      <div class="flex justify-between items-center mb-2">
        <span class="text-lg font-semibold">History</span>
        <span class="text-gray-400">Current Token</span>
      </div>

      <div class="bg-[#0b1220] p-4 rounded-xl text-center text-gray-500">
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
</template>
