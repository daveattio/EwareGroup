<script setup lang="ts">
import HomeHero from '~/components/home/HomeHero.vue'
import HomeSolutions from '~/components/home/HomeSolutions.vue'
import HomeEcosystem from '~/components/home/HomeEcosystem.vue'
import HomePartners from '~/components/home/HomePartners.vue'
import HomeReviews from '~/components/home/HomeReviews.vue'
import HomeNews from '~/components/home/HomeNews.vue'
import HomeMapContact from '~/components/home/HomeMapContact.vue'

const { t } = useI18n()

// SEO Head métadonnées pour la page d'accueil
useHead(() => ({
  title: t('meta.home_title'),
  meta: [
    {
      name: 'description',
      content: t('meta.home_desc')
    }
  ]
}))
</script>

<template>
  <div>
    <HomeHero />
    <HomePartners />
    <HomeSolutions />
    <HomeEcosystem />
    <HomeReviews />
    <HomeNews />
    <HomeMapContact />
  </div>
</template>
