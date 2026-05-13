<script setup>

import { ref } from "vue";
import {formatAddress, copyToClipboard} from '~/utils/helper'
import {Eye} from '@lucide/vue'

const {balance} = useWallet();
const {address} = useWallet();
const showBalance = ref(true);
const mainTab = ref("overview");
const overviewTab = ref("assets");
const earningsFilter = ref("ALL");
const openSetting = ref(false);

const copied = ref(false)
const copy = (addr) =>{
  copyToClipboard(addr);
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 5000);
}


const { data, pending, error } = await useFetch(
  'https://api.coingecko.com/api/v3/simple/price',
  {
    query: {
      ids: 'crypto-com-chain',
      vs_currencies: 'usd'
    },
    lazy: false,
    server: false
  }
)

const croPrice = computed(() => {
  return  data.value?.['crypto-com-chain']?.usd || 0
});


const assets = [
  {
    token: "CRO",
    amount: "3.01",
    value: "$0",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9YKr4syBOjEY2jQ9fhTHtD46r3EpDspGyg&s",
  },
];

onMounted(() => {
  console.log(croPrice.value);
})

</script>

<template>
  <div class="dashboard">
        <div>
      <USlideover v-model:open="openSetting">
        <template #content>
          <SettingsDrawer v-model:open="openSetting" />
        </template>
      </USlideover>
    </div>
    <!-- AMBIENT -->
    <div class="ambient ambient-1"></div>
    <div class="ambient ambient-2"></div>

    <div class="container">
      <!-- TOPBAR -->
      <div class="topbar">
        <div class="left-side">
          <div class="avatar"></div>

          <div class="wallet-row">
            <div class="wallet">
              {{ formatAddress(address) }}
            </div>

            <UTooltip
            :text="copied ? 'Copied' : 'Copy'"
            :content="{

            }"
            >
              <button @click="copy(address)" class="icon-btn cyan cursor-pointer hover:scale-[1.2] transition-all">⧉</button>
            </UTooltip>

            <button class="icon-btn cyan cursor-pointer">↗</button>
          </div>
        </div>

        <div class="right-side">
          <div class="chain-pill">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9YKr4syBOjEY2jQ9fhTHtD46r3EpDspGyg&s"
              class="chain-icon rounded-full"
            />

            <span>⌄</span>
          </div>

          <button class="top-icon text-4xl cursor-pointer hover:scale-[1.2] transition-all" @click="openSetting = true">⚙</button>

          <button class="top-icon">⤴</button>
        </div>
      </div>

      <!-- MAIN TABS -->
      <div class="main-tabs">
        <button
          @click="mainTab = 'overview'"
          class="tab cursor-pointer hover:text-cyan-400 transition-all"
          :class="{ active: mainTab === 'overview' }"
        >
          Overview
        </button>

        <button
          @click="mainTab = 'earnings'"
          class="tab cursor-pointer hover:text-cyan-400 transition-all "
          :class="{ active: mainTab === 'earnings' }"
        >
          Earnings
        </button>
      </div>

      <!-- OVERVIEW -->
      <div v-if="mainTab === 'overview'" class="overview-grid">
        <!-- LEFT -->
        <div class="panel">
          <!-- WALLET CARD -->
          <div class="wallet-card">
            <div class="wallet-blur"></div>

            <div class="wallet-title">My Wallet</div>

            <div class="wallet-sub">Total Balance</div>

            <div class="wallet-balance flex items-center gap-2">
              {{ showBalance ? `$${croPrice}` : '******' }}
              <span @click="showBalance = !showBalance" class="eye cursor-pointer hover:text-cyan-400 transition-all"><Eye /></span>
            </div>

            <!-- SHAPES -->
            <div class="shape s1"></div>
            <div class="shape s2"></div>
            <div class="shape s3"></div>
          </div>

          <!-- TABS -->
          <div class="inner-tabs">
            <button
              @click="overviewTab = 'assets'"
              class="inner-tab cursor-pointer hover: text-cyan-400 transition-all"
              :class="{ active: overviewTab === 'assets' }"
            >
              Assets
            </button>

            <button
              @click="overviewTab = 'activities'"
              class="inner-tab cursor-pointer "
              :class="{ active: overviewTab === 'activities' }"
            >
              Activities
            </button>
          </div>

          <!-- ASSETS -->
          <div v-if="overviewTab === 'assets'" class="asset-row">
            <div class="asset-left">
              <img :src="assets[0].icon" class="asset-icon" />

              <div class="asset-name">{{ balance }} CRO</div>
            </div>

            <div class="asset-value">${{croPrice}}</div>
          </div>

          <!-- ACTIVITIES -->
          <div v-if="overviewTab === 'activities'" class="empty-state">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png"
              class="empty-img"
            />

            <div class="empty-text !text-xs">
              Looks like your wallet is fresh
            </div>

            <button class="primary-btn text-sm my-8 py-2 px-4 rounded-xl">
              Start recurring buys ↗
            </button>
          </div>
        </div>

        <!-- RIGHT -->
        <div class="right-stack">
          <!-- AGENT -->
          <div class="agent-card">
            <div class="agent-top">
              <div class="agent-title text-md">Agent Wallet</div>

              <div class="agent-link text-xs">What’s an Agent Wallet? ⓘ</div>
            </div>

            <div class="agent-sub text-xs">You don’t have an Agent Wallet</div>

            <button class="primary-btn rounded-xl px-4 py-2 text-xs">
              Connect Agent Wallet
            </button>
          </div>

          <!-- INFO -->
          <div class="info-card">
            <div class="info-title text-md">✦ What’s an Agent Wallet?</div>

            <div class="info-desc text-xs">
              This very, very smart wallet helps you run your orders. Fund it
              once and VVS does the rest:
            </div>

            <div class="info-links text-sm">
              <div>• Smart Recurring →</div>

              <div class="text-md">
                • Auto Invest
                <span class="soon"> soon </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- EARNINGS -->
      <div v-if="mainTab === 'earnings'" class="earnings">
        <!-- SUB -->
        <div class="earnings-tabs">
          <button class="tab active">Pools</button>

          <button class="tab muted">Mines ↗</button>
        </div>

        <!-- FILTERS -->
        <div class="filters">
          <button class="filter active">ALL</button>

          <button class="filter">V2</button>

          <button class="filter">V3</button>
        </div>

        <!-- EMPTY -->
        <div class="earnings-empty">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png"
            class="earnings-img"
          />

          <div class="earnings-text">You haven’t added any liquidity yet</div>

          <NuxtLink class="cursor-pointer"
            to="/liquidity"
          >
            <button class="primary-btn text-sm my-2 px-4 py-2 rounded-xl cursor-pointer">
              Add Liquidity ↗
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  /* background:
    radial-gradient(circle at top left, rgba(0,255,255,.08), transparent 25%),
    radial-gradient(circle at top right, rgba(114,92,255,.10), transparent 30%),
    linear-gradient(180deg,#08111c 0%,#09131f 100%); */
  color: white;
  font-family: Inter, sans-serif;
}

.container {
  max-width: 1400px;
  margin: auto;
  padding: 24px 42px 50px;
  position: relative;
  z-index: 2;
}

.ambient {
  position: absolute;
  border-radius: 999px;
  filter: blur(120px);
}

.ambient-1 {
  width: 400px;
  height: 400px;
  /* background:rgba(0,255,255,.08); */
  top: -120px;
  left: -100px;
}

.ambient-2 {
  width: 400px;
  height: 400px;
  background: rgba(129, 92, 255, 0.08);
  top: -100px;
  right: -100px;
}

.topbar {
  height: 72px;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 26px;
}

.left-side,
.right-side,
.wallet-row {
  display: flex;
  align-items: center;
}

.left-side {
  gap: 14px;
}

.right-side {
  gap: 26px;
}

.avatar {
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background: linear-gradient(135deg, #ff8a8a, #ffb36a, #38e8ff);
}

.wallet {
  font-size: 14px;
  font-weight: 700;
  color: #f2f6ff;
}

.icon-btn {
  background: none;
  border: none;
  color: #1de7ff;
  font-size: 18px;
  cursor: pointer;
}

.wallet-row {
  gap: 10px;
}

.chain-pill {
  height: 42px;
  padding: 0 14px;
  border-radius: 999px;
  background: #111827;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.chain-icon {
  width: 22px;
  height: 22px;
}

.top-icon {
  background: none;
  border: none;
  color: white;
  /* font-size: 21px; */
}

.main-tabs,
.earnings-tabs {
  display: flex;
  gap: 28px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  margin-top: 38px;
}

.tab {
  position: relative;
  padding-bottom: 16px;
  color: rgba(255, 255, 255, 0.55);
  font-size: 14px;
  font-weight: 600;
  background: none;
  border: none;
}

.tab.active {
  color: white;
}

.tab.active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #16e7ff;
  border-radius: 999px;
}

.overview-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  margin-top: 42px;
}

.panel {
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 30px;
  background: rgba(11, 19, 32, 0.7);
  overflow: hidden;
  backdrop-filter: blur(16px);
  min-height: 520px;
}

.wallet-card {
  height: 145px;
  margin: 16px;
  border-radius: 24px;
  padding: 22px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    90deg,
    rgba(0, 204, 255, 0.45),
    rgba(135, 110, 255, 0.25)
  );
}

.wallet-title {
  font-size: 16px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
}

.wallet-sub {
  margin-top: 16px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 15px;
}

.wallet-balance {
  margin-top: 2px;
  font-size: 28px;
  line-height: 1;
  font-weight: 700;
}

.eye {
  font-size: 15px;
  opacity: 0.6;
}

.shape {
  position: absolute;
  border-radius: 999px;
  /* background:rgba(255,255,255,.12); */
}

.s1 {
  width: 100px;
  height: 100px;
  right: 42px;
  top: -18px;
}

.s2 {
  width: 100px;
  height: 100px;
  right: -20px;
  top: -10px;
}

.s3 {
  width: 120px;
  height: 60px;
  right: -10px;
  bottom: -10px;
  border-radius: 999px 999px 0 0;
}

.inner-tabs {
  display: flex;
  gap: 32px;
  padding: 0 30px;
  margin-top: 8px;
}

.inner-tab {
  position: relative;
  padding-bottom: 12px;
  background: none;
  border: none;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
}

.inner-tab.active {
  color: white;
  font-weight: 700;
}

.inner-tab.active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #19e7ff;
}

.asset-row {
  padding: 22px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.asset-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.asset-icon {
  width: 34px;
  height: 34px;
  border-radius: 999px;
}

.asset-name {
  font-size: 14px;
  font-weight: 700;
}

.asset-value {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.45);
  font-weight: 700;
}

.empty-state,
.earnings-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.empty-state {
  padding-top: 56px;
}

.empty-img,
.earnings-img {
  width: 72px;
  opacity: 0.9;
}

.empty-text,
.earnings-text {
  margin-top: 18px;
  color: rgba(255, 255, 255, 0.68);
  /* font-size:18px; */
}

.primary-btn {
  /* margin-top:18px; */
  /* height:52px; */
  /* padding:0 26px; */
  border: none;
  /* border-radius:14px; */
  background: #14e7ff;
  color: black;
  /* font-size:17px; */
  font-weight: 800;
}

.right-stack {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.agent-card {
  border-radius: 28px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(
    90deg,
    rgba(0, 204, 255, 0.38),
    rgba(134, 107, 255, 0.25)
  );
}

.agent-top {
  display: flex;
  justify-content: space-between;
}

.agent-title {
  /* font-size:16px; */
  font-weight: 700;
}

.agent-link {
  color: #17e6ff;

  font-weight: 700;
}

.agent-sub {
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.75);
  /* font-size:16px; */
  margin-bottom: 8px;
}

.connect-btn {
  margin-top: 26px;
}

.info-card {
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #0c1220;
  padding: 24px;
}

.info-title {
  /* font-size:18px; */
  font-weight: 800;
}

.info-desc {
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.75);
  /* font-size:6px; */
  line-height: 1.6;
}

.info-links {
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  color: #16e7ff;
  /* font-size:17px; */
  font-weight: 700;
}

.soon {
  margin-left: 8px;
  padding: 2px 8px;
  border-radius: 999px;
  border: 1px solid #16e7ff;
  font-size: 10px;
}

.earnings {
  margin-top: 40px;
}

.filters {
  display: inline-flex;
  margin-top: 24px;
  padding: 5px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.06);
  gap: 6px;
}

.filter {
  font-size: 10px;
  height: 28px;
  min-width: 52px;
  border: none;
  border-radius: 10px;
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 700;
}

.filter.active {
  background: #16e7ff;
  color: black;
}

.earnings-empty {
  height: 520px;
}

@media (max-width: 1100px) {
  .overview-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 20px;
  }

  .topbar {
    padding: 0 16px;
  }

  .wallet-balance {
    font-size: 42px;
  }
}
</style>
