<template>
  <div>
    <footer class="py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div class="max-w-7xl mx-auto">
        <div
          class="border-t border-white/10 pt-8 text-center text-sm text-muted-foreground"
        >
          <div class="mb-8 flex flex-wrap justify-center gap-4">
            <button @click="open('terms')" class="hover:text-primary cursor-pointer">
              Terms & Conditions
            </button>
            <button @click="open('privacy')" class="hover:text-primary cursor-pointer">
              Privacy Policy
            </button>
            <button @click="open('cookies')" class="hover:text-primary cursor-pointer">
              Cookies
            </button>
            <button @click="open('disclaimer')" class="hover:text-primary cursor-pointer">
              Risk Warning
            </button>
          </div>

          <p>
            © {{ new Date().getFullYear() }} InoPlay — Powered by Kcalb Ltd.
          </p>
        </div>
        <UModal v-model:open="isOpen"
        :ui="{
          body: '!bg-red',
          content:'bg-[hsl(var(--card))]',
          overlay:'bg-[hsl(var(--card)/0.8)]',

        }"
        >
          <template #content>
            <div class="p-6 max-w-3xl w-full">

              <div class="flex justify-between items-center mb-4">
                <h3 class="text-lg font-semibold">{{ modalTitle }}</h3>
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
      </div>
    </footer>
  </div>
</template>

<script setup>
// import Terms from "~/components/policies/Terms.vue";
// import Privacy from "~/components/policies/Privacy.vue";
// import Cookies from "~/components/policies/Cookies.vue";
// import Disclaimer from "~/components/policies/Disclaimer.vue";

const isOpen = ref(false);
const currentComponent = shallowRef(null);
const modalTitle = ref("");

const open = (type) => {
  switch (type) {
    case "terms":
      currentComponent.value = Terms
      modalTitle.value = "InoPlay Terms and Conditions"
      break
    case "privacy":
      currentComponent.value = Privacy
      modalTitle.value = "InoPlay Privacy Policy"
      break
    case "cookies":
      currentComponent.value = Cookies
      modalTitle.value = "InoPlay Cookie Policy"
      break
    case "disclaimer":
      currentComponent.value = Disclaimer
      modalTitle.value = "InoPlay Disclaimer and Risk Warning"
      break
  }

  isOpen.value = true
}

</script>
