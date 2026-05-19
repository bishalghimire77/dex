<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-6"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-6"
  >
    <div
      v-if="open"
      class="fixed bottom-4 left-4 z-[9999] w-[420px] max-w-[calc(100vw-32px)] rounded-xl border border-cyan-400/70 bg-[#0b1020]/95 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,255,255,0.15)] overflow-hidden"
    >
      <!-- GRID -->
      <div
        class="absolute inset-0 opacity-20"
        style="
          background-image: linear-gradient(
              rgba(0, 140, 255, 0.12) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(0, 140, 255, 0.12) 1px, transparent 1px);
          background-size: 60px 60px;
        "
      />

      <!-- CONTENT -->
      <div class="relative z-10 p-6">
        <!-- CLOSE -->
        <button
          @click="open = false"
          class="absolute top-4 right-4 text-white/70 hover:text-cyan-400 transition-all"
        >
          <X class="w-5 h-5 cursor-pointer" />
        </button>

        <!-- HEADER -->
        <div class="mb-8">
          <div class="flex items-center gap-4">
            <!-- ICON -->
            <img :src="icon" class="w-8 h-8 rounded-full" />

            <!-- INFO -->
            <div>
              <div class="flex items-center gap-2 mb-1">
                <div class="text-sm font-semibold text-white">
                  {{ symbol }}
                </div>

                <div
                  class="px-2 py-1 rounded-lg bg-cyan-400 text-black text-xs font-bold"
                >
                  Beta
                </div>
              </div>

              <div class="flex items-center gap-2 text-white/60 text-xs">
                <span>
                  {{ name }}
                </span>

                <span>|</span>

                <span>
                  {{ shortAddress }}
                </span>

                <button @click="copyAddress" class="text-cyan-400">
                  <Copy class="w-4 h-4" />
                </button>

                <a
                  :href="`https://explorer.cronos.org/token/${props.address}`"
                  target="_blank"
                  class="text-white hover:text-cyan-400"
                >
                  <ExternalLink class="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- STATS -->
        <div class="grid grid-cols-4 gap-5 mb-2">
          <!-- PRICE -->
          <div class="mb-1">
            <div class="text-white/60 text-xs mb-2">Price</div>

            <div class="text-sm font-semibold text-white">
              {{ price }}
            </div>
          </div>

          <div>
            <div class="text-white/50 text-xs mb-1">1h</div>

            <div
              class="text-sm font-semibold"
              :class="
                hour1.startsWith('-') ? 'text-pink-500' : 'text-[#00f38d]'
              "
            >
              {{ hour1.startsWith("-") ? "↓" : "↑" }}
              {{ hour1 }}
            </div>
          </div>

          <div>
            <div class="text-white/50 text-xs mb-1">24h</div>

            <div
              class="text-sm font-semibold"
              :class="
                hour24.startsWith('-') ? 'text-pink-500' : 'text-[#00f38d]'
              "
            >
              {{ hour24.startsWith("-") ? "↓" : "↑" }}
              {{ hour24 }}
            </div>
          </div>

          <div>
            <div class="text-white/50 text-xs mb-1">7d</div>

            <div
              class="text-sm font-semibold"
              :class="day7.startsWith('-') ? 'text-pink-500' : 'text-[#00f38d]'"
            >
              {{ day7.startsWith("-") ? "↓" : "↑" }}
              {{ day7 }}
            </div>
          </div>
        </div>

        <!-- LINE -->
        <div class="border-t border-white/10 mb-6" />

        <!-- DETAILS -->
        <div class="space-y-4 grid grid-cols-4 gap-5">
          <div class="flex flex-col justify-between items-center">
            <span class="text-white/50 text-xs"> Market Cap </span>

            <span class="text-white font-semibold text-xs">
              {{ marketCap }}
            </span>
          </div>

          <div class="flex flex-col justify-between items-center">
            <span class="text-white/50 text-xs"> Volume </span>

            <span class="text-white font-semibold text-xs">
              {{ volume }}
            </span>
          </div>

          <div class="flex flex-col justify-between items-center">
            <span class="text-white/50 text-xs"> Liquidity </span>

            <span class="text-white font-semibold text-xs">
              {{ liquidity }}
            </span>
          </div>

          <div class="flex flex-col justify-between items-center">
            <span class="text-white/50 text-xs"> Supply </span>

            <span class="text-white font-semibold text-xs">
              {{ supply }}
            </span>
          </div>

          <div class="flex flex-col justify-between items-center text-xs">
            <span class="text-white/50 text-xs"> Holders </span>

            <span class="text-white font-semibold text-xs">
              {{ holders }}
            </span>
          </div>
        </div>

        <div class="border-t border-white/10 mb-6" />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { Copy, ExternalLink, X } from "lucide-vue-next";

const open = defineModel<boolean>("open");

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },

  symbol: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  explorer: {
    type: String,
    default: "#",
  },

  price: {
    type: String,
    required: true,
  },

  hour1: {
    type: String,
    required: true,
  },

  hour24: {
    type: String,
    required: true,
  },

  day7: {
    type: String,
    required: true,
  },

  marketCap: {
    type: String,
    required: true,
  },

  volume: {
    type: String,
    required: true,
  },

  liquidity: {
    type: String,
    required: true,
  },

  supply: {
    type: String,
    required: true,
  },

  holders: {
    type: String,
    default: "-",
  },
});

const shortAddress = computed(() => {
  return props.address.slice(0, 6) + "..." + props.address.slice(-4);
});

const copyAddress = async () => {
  await navigator.clipboard.writeText(props.address);
};
</script>
