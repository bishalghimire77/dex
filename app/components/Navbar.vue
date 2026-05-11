<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { Menu, X, ChevronDown, Icon } from "lucide-vue-next";
import { useWallet } from "~/composables/useWallet";
import { formatAddress } from "~/utils/helper";



const {getWalletClient, address, onAccountsChanged, fetchAddress} = useWallet()

const mobileMenu = ref(false);
const menu = [{
  label: 'Home',
  // icon: 'i-simple-icons-github',
  to: '/'
},
{
  label: 'Earn',
  // icon: 'i-simple-icons-github',
  to: '/swap'
},
{
  label: 'Portfolio',
  // icon: 'i-simple-icons-github',
  to: '/portfolio'
},
{
  label: 'Trade',
  // icon: 'i-simple-icons-github',
  to: '/trade'
}]


const route = useRoute();

const isActive = (path) => {
  return route.path === path;
};


onMounted(async () => {

  onAccountsChanged(async() => {
      await fetchAddress();
  });

  await fetchAddress();
  console.log(address.value);
});


</script>

<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-white/5 backdrop-blur-xl"
  >
    <!-- BACKGROUND -->
    <div
      class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,255,0.03),rgba(124,92,255,0.05))] pointer-events-none"
    ></div>

    <!-- NAVBAR -->
    <div
      class="relative h-[74px] px-4 lg:px-8 flex items-center justify-between"
    >
      <!-- LEFT -->
      <div class="flex items-center gap-10">
        <!-- LOGO -->
        <NuxtLink to="/" class="flex items-center gap-3">
          <!-- ICON -->
          <div
            class="relative w-9 h-9 rounded-full border border-white/20 flex items-center justify-center"
          >
<img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698e699074f154c27031d1f3/689338d2d_inoswap-icon.png" alt="" srcset="">
          </div>

          <!-- TEXT -->
          <div class="text-md font-extrabold tracking-tight text-white">
            InoDex
          </div>
        </NuxtLink>

        <!-- DESKTOP NAV -->
        <nav class="hidden md:flex items-center gap-10">
          <!-- TRADE -->
          <NuxtLink
            to="/trade"
            class="text-sm font-medium transition-all hover:text-white"
            :class="isActive('/trade') ? 'text-cyan-400 font-bold' : 'text-white/55'"
          >
            Trade
          </NuxtLink>

          <!-- EARN -->
          <NuxtLink
            to="/pools"
            class="text-sm font-medium transition-all hover:text-white"
            :class="isActive('/pools') ? 'text-cyan-400 font-bold' : 'text-white/55'"
          >
            Earn
          </NuxtLink>

          <!-- PORTFOLIO -->
          <NuxtLink
            to="/portfolio"
            class="text-sm font-medium transition-all hover:text-white"
            :class="isActive('/portfolio') ? 'text-cyan-400 font-bold' : 'text-white/55'"
          >
            Portfolio
          </NuxtLink>

          <!-- MORE -->
          <UDropdownMenu :items="menu"
          
          >
                      <button
            class="flex items-center gap-1 text-sm font-medium text-white/55 hover:text-white transition-all"
          >
            More

            <ChevronDown :size="16" class="mt-[2px]" />
          </button>
          </UDropdownMenu>
        </nav>
      </div>

      <!-- RIGHT -->
      <div class="flex items-center gap-3">
        <!-- WALLET -->
        <button
          class="hidden sm:flex items-center gap-3 h-[42px] px-4 rounded-[14px] border border-white/5 bg-[#0f1725] hover:bg-[#121d2d] transition-all"
        >
          <!-- TOKEN -->
          <div
            class="w-6 h-6 rounded-full bg-[#172338] border border-white/10 flex items-center justify-center"
          >
            <div
              class="w-3 h-3 rotate-45 border border-cyan-400 rounded-[2px]"
            ></div>
          </div>

          <span class="text-sm font-bold tracking-wide text-white">
            {{ formatAddress(address) }}
          </span>
        </button>


        <!-- MOBILE BUTTON -->
        <button
          @click="mobileMenu = !mobileMenu"
          class="md:hidden w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white"
        >
          <Menu v-if="!mobileMenu" :size="20" />

          <X v-else :size="20" />
        </button>
      </div>
    </div>

    <!-- MOBILE MENU -->
    <div
      v-if="mobileMenu"
      class="md:hidden border-t border-white/5 bg-[#111927]"
    >
      <div class="px-5 py-5 flex flex-col gap-5">
        <!-- TRADE -->
        <NuxtLink
          to="/trade"
          @click="mobileMenu = false"
          class="text-left text-[16px] font-medium"
          :class="isActive('/trade') ? 'text-cyan-400' : 'text-white/65'"
        >
          Trade
        </NuxtLink>

        <!-- EARN -->
        <NuxtLink
          to="/liquidity"
          @click="mobileMenu = false"
          class="text-left text-[16px] font-medium"
          :class="isActive('/liquidity') ? 'text-cyan-400' : 'text-white/65'"
        >
          Earn
        </NuxtLink>

        <!-- PORTFOLIO -->
        <NuxtLink
          to="/portfolio"
          @click="mobileMenu = false"
          class="text-left text-[16px] font-medium"
          :class="isActive('/portfolio') ? 'text-cyan-400' : 'text-white/65'"
        >
          Portfolio
        </NuxtLink>

        <!-- MORE -->
        <button
          class="flex items-center gap-1 text-left text-[16px] font-medium text-white/65"
        >
          More

          <ChevronDown :size="16" />
        </button>

        <!-- MOBILE WALLET -->
        <button
          class="mt-2 h-[48px] rounded-xl border border-white/5 bg-[#0f1725] flex items-center justify-center text-white font-bold"
        >
          0xc8F4...4591
        </button>
      </div>
    </div>
  </header>
</template>
