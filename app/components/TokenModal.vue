<script setup>
const open = defineModel()
</script>

<template>
  <UModal v-model="open">
    <div class="p-4 space-y-4">
      <UInput placeholder="Search token..." />

      <div class="space-y-2">
        <div class="flex justify-between p-2 hover:bg-white/5 rounded">
          <span>CRO</span>
          <span>3.01</span>
        </div>
        <div class="flex justify-between p-2 hover:bg-white/5 rounded">
          <span>ALGO</span>
          <span>0.00</span>
        </div>
      </div>
    </div>
  </UModal>
</template>