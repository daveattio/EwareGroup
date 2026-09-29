<script setup lang="ts">
import HomeMapContact from '~/components/home/HomeMapContact.vue'

const localePath = useLocalePath()

useHead({
  title: 'Contactez-nous & Localisation | Eware Group',
  meta: [
    {
      name: 'description',
      content: 'Contactez Eware Group au siège de Baguida Lomé (Togo) pour vos projets d\'ingénierie énergétique, solaire et industrielle.'
    }
  ]
})
</script>

<template>
  <div class="py-12 bg-surface-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
      <div class="flex items-center space-x-2 text-xs text-slate-500">
        <NuxtLink :to="localePath('/')" class="hover:text-brand-green-600">Accueil</NuxtLink>
        <Icon name="lucide:chevron-right" class="w-3.5 h-3.5" />
        <span class="text-slate-900 font-semibold">Contact & Localisation</span>
      </div>
    </div>
    <HomeMapContact />
  </div>
</template>
