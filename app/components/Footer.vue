<template>
  <footer class="relative mt-24 overflow-hidden">
    
    <!-- BACKGROUND -->
    <div
      class="relative   border-white/10 bg-[#0b1020]"
    >

      <!-- GRID -->
      <div
        class="absolute inset-0 opacity-60"
        style="
          background-image:
            linear-gradient(rgba(0,140,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,140,255,0.12) 1px, transparent 1px);
          background-size: 80px 80px;
        "
      />

      <!-- GLOW -->
      <div
        class="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.06),transparent_30%)]"
      />

      <!-- BLUR CRYSTALS -->
      <div
        class="absolute top-[-50px] left-[35%] w-[180px] h-[180px] rotate-12 rounded-[40px] bg-cyan-300/30 blur-2xl"
      />

      <div
        class="absolute bottom-[-60px] left-[35%] w-[140px] h-[140px] -rotate-12 rounded-[30px] bg-cyan-200/30 blur-2xl"
      />

      <div
        class="absolute right-[-60px] top-[40%] w-[180px] h-[180px] rotate-12 rounded-[40px] bg-cyan-100/40 blur-2xl"
      />

      <!-- CONTENT -->
      <div
        class="relative z-10 px-6 sm:px-10 lg:px-16 py-10 lg:py-14"
      >

        <div
          class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10"
        >

          <!-- LEFT -->
          <div>

            <!-- TITLE -->
            <h2
              class="text-4xl sm:text-[72px] lg:text-[92px] leading-[0.9] font-black tracking-[-4px]"
            >
              <span class="text-white">
                Very, Very,
              </span>

              <span class="text-cyan-400">
                Simple
              </span>
            </h2>

            <!-- CRONOS -->
            <div class="mt-8 flex items-center gap-3">
              
              <div
                class="w-12 h-12 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center"
              >
                <img
                  src="https://cryptologos.cc/logos/cronos-cro-logo.png?v=040"
                  class="w-8 h-8 object-contain"
                />
              </div>

              <div>
                <div class="text-xs text-white/60 font-medium">
                  Powered by
                </div>

                <div class="text-xl font-black text-white">
                  cronos
                </div>
              </div>
            </div>
          </div>

          <!-- RIGHT -->
          <div
            class="flex flex-col items-start lg:items-end justify-between gap-8"
          >

            <!-- TEXT -->
            <div
              class="text-white text-lg sm:text-sm font-bold text-left lg:text-right max-w-[420px]"
            >
              Start digging with us, there’re diamonds for all!
            </div>

            <!-- SOCIALS -->
            <div
              class="flex items-center gap-4 sm:gap-6"
            >

              <!-- X -->
              <a
                href="#"
                class="text-white hover:text-cyan-400 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18.901 1.153h3.68l-8.04 9.19 9.458 12.504h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932z"
                  />
                </svg>
              </a>

              <!-- DISCORD -->
              <a
                href="#"
                class="text-white hover:text-cyan-400 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20.317 4.369A19.791 19.791 0 0 0 15.885 3c-.191.328-.403.769-.552 1.117a18.27 18.27 0 0 0-5.334 0A12.64 12.64 0 0 0 9.447 3a19.736 19.736 0 0 0-4.433 1.369C2.22 8.412 1.467 12.36 1.84 16.258a19.9 19.9 0 0 0 5.993 3.026c.484-.665.915-1.37 1.291-2.11-.71-.268-1.387-.598-2.028-.984.17-.124.336-.252.497-.385 3.917 1.84 8.18 1.84 12.05 0 .163.133.328.261.498.385-.642.386-1.32.716-2.03.984.377.74.808 1.445 1.292 2.11a19.868 19.868 0 0 0 5.995-3.026c.437-4.52-.747-8.432-3.046-11.889ZM9.955 13.86c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.094 2.156 2.418 0 1.334-.955 2.419-2.156 2.419Zm4.09 0c-1.184 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.094 2.156 2.418 0 1.334-.946 2.419-2.156 2.419Z"
                  />
                </svg>
              </a>

              <!-- TELEGRAM -->
              <a
                href="#"
                class="text-white hover:text-cyan-400 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21.944 2.506a1.5 1.5 0 0 0-1.58-.242L2.457 9.17a1.5 1.5 0 0 0 .103 2.823l4.93 1.64 1.64 4.93a1.5 1.5 0 0 0 2.823.103l6.906-17.907a1.5 1.5 0 0 0-.915-1.915ZM9.96 12.626l-.733 3.09-.977-2.936 8.94-6.96-7.23 6.806Z"
                  />
                </svg>
              </a>

              <!-- BUTTON -->
              <NuxtLink
                to="/liquidity"
                class="w-20 h-20 rounded-[24px] bg-cyan-400 text-black flex flex-col items-center justify-center font-black hover:scale-105 transition-all"
              >
                <div class="text-4xl leading-none">
                  +
                </div>

                <div class="text-sm">
                  Liquidity
                </div>
              </NuxtLink>

            </div>
          </div>
        </div>

        <!-- BOTTOM -->
        <div
          class="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50"
        >
          <div>
            © {{ new Date().getFullYear() }} InoPlay
          </div>

          <div class="flex flex-wrap items-center gap-5">
            <button
              @click="open('terms')"
              class="hover:text-cyan-400 transition-all cursor-pointer"
            >
              Terms
            </button>

            <button
              @click="open('privacy')"
              class="hover:text-cyan-400 transition-all cursor-pointer"
            >
              Privacy
            </button>

            <button
              @click="open('cookies')"
              class="hover:text-cyan-400 transition-all cursor-pointer"
            >
              Cookies
            </button>

            <button
              @click="open('disclaimer')"
              class="hover:text-cyan-400 transition-all cursor-pointer"
            >
              Risk Warning
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL -->
    <UModal
      v-model:open="isOpen"
      :ui="{
        body: '!bg-red',
        content:'bg-[hsl(var(--card))]',
        overlay:'bg-[hsl(var(--card)/0.8)]',
      }"
    >
      <template #content>
        <div class="p-6 max-w-3xl w-full">

          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold">
              {{ modalTitle }}
            </h3>

            <UButton
              icon="i-heroicons-x-mark"
              variant="ghost"
              @click="isOpen = false"
            />
          </div>

          <div class="max-h-[70vh] overflow-y-auto">
            <component :is="currentComponent" />
          </div>
        </div>
      </template>
    </UModal>
  </footer>
</template>

<script setup>
// import Terms from "~/components/policies/Terms.vue";
// import Privacy from "~/components/policies/Privacy.vue";
// import Cookies from "~/components/policies/Cookies.vue";
// import Disclaimer from "~/components/policies/Disclaimer.vue";

const isOpen = ref(false)
const currentComponent = shallowRef(null)
const modalTitle = ref("")

const open = (type) => {

  switch (type) {

    case "terms":
      currentComponent.value = Terms
      modalTitle.value =
        "InoPlay Terms and Conditions"
      break

    case "privacy":
      currentComponent.value = Privacy
      modalTitle.value =
        "InoPlay Privacy Policy"
      break

    case "cookies":
      currentComponent.value = Cookies
      modalTitle.value =
        "InoPlay Cookie Policy"
      break

    case "disclaimer":
      currentComponent.value = Disclaimer
      modalTitle.value =
        "InoPlay Disclaimer and Risk Warning"
      break
  }

  isOpen.value = true
}
</script>