<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-1 flex justify-center items-center p-4">
      <slot />
    </main>
    <Footer />
  </div>
</template>