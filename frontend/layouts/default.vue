<script setup lang="ts">
import AppTopBar from '~/components/layout/AppTopBar.vue'
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-surface-50 font-sans text-slate-800 antialiased selection:bg-brand-gold-100 selection:text-brand-green-950">
    <AppTopBar />
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
