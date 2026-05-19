<script setup>
defineProps({
  title: String,
  price: String,
  change: String,
  icon: String,
  address: String
})
</script>

<template>
  <div
    class="border border-cyan-400/30 rounded-xl p-3 bg-[#0b1220]/80"
  >
    <!-- Header -->
    <div class="flex items-center justify-between">

      <div class="flex items-center gap-2">
        <img
          v-if="icon"
          :src="icon"
          class="w-6 h-6 rounded-full"
        />

        <div
          v-else
          class="w-6 h-6 rounded-full bg-cyan-500"
        />

        <span class="text-sm">
          {{ title }}
        </span>
      </div>

      <a :href="`https://explorer.cronos.org/token/${address}`"><span class="text-cyan-400 text-md">↗</span></a>
    </div>

    <!-- Price -->
    <div class="mt-2 text-sm">
      {{ price }}
    </div>

    <!-- Change -->
    <div
      class="text-xs"
      :class="change?.includes('-') ? 'text-red-400' : 'text-green-400'"
    >
      {{ change }}
    </div>

    <!-- Extra -->
    <div class="mt-2 text-xs text-gray-400">
      Volume (24H)
    </div>
  </div>
</template>