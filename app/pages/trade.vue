<script setup>
const openSettings = ref(false)
const openToken = ref(false)
</script>

<template>
  <div class="flex flex-col items-center gap-6">
    <SwapCard
      @open-settings="openSettings = true"
      @open-token="openToken = true"
    />

    <!-- <SettingsDrawer v-model="openSettings" />
    <TokenDrawer v-model="openToken" /> -->
  </div>
</template>