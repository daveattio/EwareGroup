<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

// Données des réalisations & métriques clés
const stats = computed(() => [
  { value: '+12 MWc', label: t('hero.stat_solar_label') },
  { value: '45%', label: t('hero.stat_savings_label') },
  { value: '100%', label: t('hero.stat_continuity_label') },
  { value: '24/7', label: t('hero.stat_monitoring_label') }
])

// Équipementiers & Fournisseurs Tier-1
const suppliers = [
  { name: 'Jinko Solar', logo: '/images/suppliers/jinko.png', type: 'Panneaux PV Tier-1' },
  { name: 'Victron Energy', logo: '/images/suppliers/victron.png', type: 'Systèmes Hybrides' },
  { name: 'Huawei Solar', logo: '/images/suppliers/huawei.png', type: 'Onduleurs Réseau' },
  { name: 'BYD Energy', logo: '/images/suppliers/byd.png', type: 'Stockage Lithium BESS' }
]
</script>

<template>
  <section class="relative w-full min-h-[92vh] flex flex-col justify-between overflow-hidden bg-slate-950 text-white">
    
    <!-- IMAGE EN PLEIN ÉCRAN EN ARRIÈRE-PLAN (Centrale solaire industrielle et ciel) -->
    <div class="absolute inset-0 z-0">
      <img
        src="/images/hero/solar-farm-hero.jpg"
        alt="Centrale solaire et ingénierie Eware Group"
        class="w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.08] scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
      />
      <!-- Double dégradé cinématique pour lisibilité optimale du texte et transition douce -->
      <div class="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/40"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"></div>
    </div>

    <!-- CONTENU PRINCIPAL DU HERO (Centré avec haute visibilité & compensation du navbar transparent) -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-16 w-full my-auto">
      <div class="max-w-3xl">
        
        <!-- Grand Titre Puissant et Immersif -->
        <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] drop-shadow-md">
          {{ $t('hero.title_start') }}
          <span class="text-brand-gold-400 block sm:inline">
            {{ $t('hero.title_highlight') }}
          </span>
        </h1>

        <!-- Descriptif clair & engageant -->
        <p class="mt-6 text-base sm:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-sm">
          {{ $t('hero.subtitle') }}
        </p>

        <!-- Boutons d'Action (Or Solaire Lumineux & Contour Verre) -->
        <div class="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <NuxtLink
            :to="localePath('/contact')"
            class="inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-xl bg-brand-gold-400 hover:bg-brand-gold-500 text-slate-950 font-extrabold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
          >
            <span>{{ $t('hero.cta_audit') }}</span>
            <Icon name="lucide:arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </NuxtLink>

          <NuxtLink
            :to="localePath('/solutions/solaire')"
            class="inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-sm border border-white/25 transition-all duration-300 group cursor-pointer"
          >
            <span>{{ $t('hero.cta_solutions') }}</span>
            <Icon name="lucide:chevron-right" class="w-4 h-4 text-slate-300 group-hover:translate-x-0.5 transition-transform" />
          </NuxtLink>
        </div>

        <!-- Badges Flottants de Réassurance Technique -->
        <div class="mt-10 pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs text-slate-300 font-medium">
          <div class="flex items-center space-x-2">
            <Icon name="lucide:shield-check" class="w-4 h-4 text-brand-green-400" />
            <span>{{ $t('hero.badge_iec') }}</span>
          </div>
          <div class="flex items-center space-x-2">
            <Icon name="lucide:cpu" class="w-4 h-4 text-brand-gold-400" />
            <span>{{ $t('hero.badge_solsizer') }}</span>
          </div>
          <div class="flex items-center space-x-2">
            <Icon name="lucide:map-pin" class="w-4 h-4 text-emerald-400" />
            <span>{{ $t('hero.badge_locations') }}</span>
          </div>
        </div>

      </div>
    </div>

    <!-- BANDEAU BAS EN PLEIN ÉCRAN : STATS & LOGOS ÉQUIPEMENTIERS TIER-1 -->
    <div class="relative z-10 w-full bg-slate-950/80 backdrop-blur-md border-t border-white/10 py-5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Grille Chiffres Clés en Plein Écran -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 pb-4 border-b border-white/10">
          <div v-for="stat in stats" :key="stat.label" class="flex flex-col">
            <span class="text-2xl sm:text-3xl font-black text-brand-gold-400 tracking-tight">{{ stat.value }}</span>
            <span class="text-[11px] text-slate-300 font-medium mt-0.5">{{ stat.label }}</span>
          </div>
        </div>

        <!-- Rangée des Partenaires Matériels -->
        <div class="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span class="text-[11px] font-bold uppercase tracking-widest text-slate-400">
            {{ $t('hero.certified_tier1') }}
          </span>

          <div class="flex flex-wrap items-center gap-5 sm:gap-8">
            <div
              v-for="sup in suppliers"
              :key="sup.name"
              class="flex items-center space-x-2 opacity-80 hover:opacity-100 transition-opacity"
              :title="`${sup.name} - ${sup.type}`"
            >
              <img
                :src="sup.logo"
                :alt="sup.name"
                class="h-6 sm:h-7 w-auto object-contain filter brightness-0 invert"
              />
            </div>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>
