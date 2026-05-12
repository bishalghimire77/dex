<script setup>
const theme = ref(true);
const expertMode = ref(false);

const swapOptions = ['auto', '0.1', '0.5', '1', 'custom']
const liquidityOptions = ['0.1', '0.5', '1', 'custom']
const swapSlippage = ref("auto");
const liquiditySlippage = ref("0.5");
const gasOptions = ["Auto By Wallet", "Standard", "Fast", "Instant"];

const selectedGas = ref("Auto By Wallet");
</script>

<template>
  <div class="h-full bg-[#121528] text-white p-6">
    <!-- HEADER -->
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-md font-light">Settings</h2>

      <button class="text-3xl text-gray-300 hover:text-white">×</button>
    </div>

    <!-- THEME -->
    <div class="flex justify-between items-center mb-8">
      <div>
        <div class="text-sm font-semibold">Theme</div>
      </div>

      <USwitch
        v-model="theme"
        size="md"
        :ui="{
          base: 'data-[state=checked]:bg-cyan-400 ',
        }"
      />
    </div>

    <!-- EXPERT MODE -->
    <div class="flex justify-between items-start mb-8">
      <div>
        <div class="text-sm font-semibold">Expert Mode</div>

        <div class="text-gray-400 text-xs mt-1 max-w-[240px]">
          Expert Mode skips confirmations, with higher slippage risk
        </div>
      </div>

      <USwitch v-model="expertMode" size="sm" />
    </div>

    <!-- TRANSACTION DEADLINE -->
    <div class="flex justify-between items-center mb-6">
      <div class="text-sm font-semibold max-w-[200px] leading-tight">
        Transaction deadline
      </div>

      <div class="flex items-center gap-3">
        <UInput
          value="12"
          class="w-24"
          :ui="{
            base: 'bg-[#1b2035] border-white/10 text-center text-md',
          }"
        />

        <span class="text-gray-300 text-xs"> Minutes </span>
      </div>
    </div>

    <!-- GAS -->
    <div class="flex justify-between items-start mb-8">
      <div class="text-sm font-semibold max-w-[230px] leading-tight">
        Default Transaction Speed (GWEI)
      </div>

      <USelectMenu
        v-model="selectedGas"
        :items="gasOptions"
        class="w-52"
        :ui="{
          base: 'bg-[#2a3047] border-none text-xs',
        }"
      />
    </div>

    <!-- DIVIDER -->
    <div class="border-t border-white/10 my-6"></div>

    <!-- SWAP SLIPPAGE -->
    <div class="mb-8">
      <div class="flex items-center gap-2 mb-4">
        <span class="text-sm font-semibold text-gray-300"> Swap Slippage Tolerance </span>

        <span class="text-gray-500"> ⓘ </span>
      </div>

<div class="bg-[#2a3047] rounded-xl p-1 flex">
  <button
    v-for="option in swapOptions"
    :key="option"
    @click="swapSlippage = option"
    class="flex-1 py-1 rounded-md text-xs font-semibold transition-all duration-200"
    :class="
      swapSlippage === option
        ? 'bg-cyan-400 text-black'
        : 'text-gray-400 hover:text-white'
    "
  >
    {{ option === 'auto' ? 'Auto' : option === 'custom' ? 'Custom' : `${option}%` }}
  </button>
</div>
    </div>

    <!-- LIQUIDITY SLIPPAGE -->
    <div>
      <div class="flex items-center gap-2 mb-4">
        <span class="text-sm font-semibold text-gray-300">
          Liquidity Slippage Tolerance
        </span>

        <span class="text-gray-500"> ⓘ </span>
      </div>

  <div class="bg-[#2a3047] rounded-xl p-1 flex">
  <button
    v-for="option in liquidityOptions"
    :key="option"
    @click="liquiditySlippage = option"
    class="flex-1 py-1 rounded-md text-xs font-semibold transition-all duration-200"
    :class="
      liquiditySlippage === option
        ? 'bg-cyan-400 text-black'
        : 'text-gray-400 hover:text-white'
    "
  >
    {{ option === 'custom' ? 'Custom' : `${option}%` }}
  </button>
</div>
    </div>
  </div>
</template>
