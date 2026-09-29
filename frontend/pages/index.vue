<script setup lang="ts">
import HomeHero from '~/components/home/HomeHero.vue'
import HomeSolutions from '~/components/home/HomeSolutions.vue'
import HomeEcosystem from '~/components/home/HomeEcosystem.vue'
import HomeNews from '~/components/home/HomeNews.vue'
import HomeMapContact from '~/components/home/HomeMapContact.vue'

// SEO Head métadonnées pour la page d'accueil
useHead({
  title: 'Eware Group | Transition Énergétique, Réseaux HT/BT & Super-Apps',
  meta: [
    {
      name: 'description',
      content: 'Eware Group : Société panafricaine d\'ingénierie énergétique solaire et réseaux HT/BT, éditrice de SolSizer, Eware Mobility et formatrice via l\'institut EIMAT au Togo.'
    }
  ]
})
</script>

<template>
  <div>
    <HomeHero />
    <HomeSolutions />
    <HomeEcosystem />
    <HomeNews />
    <HomeMapContact />
  </div>
</template>
