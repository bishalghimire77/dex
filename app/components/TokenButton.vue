<script setup>
defineProps({
  token: Object
})
</script>

<template>
  <button
    class="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-xl hover:bg-white/10 w-[50%] cursor-pointer transition-colors"
  >
    <img
      v-if="token?.icon"
      :src="token.icon"
      class="w-6 h-6 rounded-full"
    />
    <div v-else class="w-6 h-6 bg-cyan-500 rounded-full"></div>

    <span class="text-sm font-medium">
      {{ token?.name || 'Select' }}
    </span>

    <span class="text-gray-400">▾</span>
  </button>
</template>