<script setup lang="ts">
const { t } = useI18n()

// Partenaires et institutions de référence (PNUD, BOAD, CIMTOGO, LCT, Access Mali, Égnon Consulting)
const partners = computed(() => [
  {
    name: 'PNUD',
    description: t('partners.pnud_desc'),
    logo: '/partners/pnud.svg',
    url: 'https://www.undp.org/togo'
  },
  {
    name: 'BOAD',
    description: t('partners.boad_desc'),
    logo: '/partners/boad_bank.svg',
    url: 'https://www.boad.org'
  },
  {
    name: 'CIMTOGO',
    description: t('partners.cimtogo_desc'),
    logo: '/partners/cimtogo.svg',
    url: 'https://www.heidelbergcement.tg/fr/cimtogo'
  },
  {
    name: 'LCT',
    description: t('partners.lct_desc'),
    logo: '/partners/lct.svg',
    url: 'https://www.lct-togo.com'
  },
  {
    name: 'ACCESS MALI',
    description: t('partners.access_desc'),
    logo: '/partners/access.png',
    url: '#'
  },
  {
    name: 'ÉGNON CONSULTING',
    description: t('partners.egnon_desc'),
    logo: '/partners/egnon.png',
    url: '#'
  }
])
</script>

<template>
  <section class="py-16 sm:py-20 bg-surface-50 border-b border-slate-200/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- En-tête de section Partenaires -->
      <div class="text-center max-w-3xl mx-auto">
        <span class="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-brand-green-700 bg-brand-green-50 px-3 py-1 rounded-full border border-brand-green-200">
          <Icon name="lucide:handshake" class="w-3.5 h-3.5" />
          <span>{{ $t('partners.badge') }}</span>
        </span>
        <h2 class="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          {{ $t('partners.title') }}
        </h2>
        <p class="mt-2 text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
          {{ $t('partners.subtitle') }}
        </p>
      </div>

      <!-- Grille des Partenaires (6 Partenaires : PNUD, BOAD, CIMTOGO, LCT, ACCESS, ÉGNON) -->
      <div class="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
        <div
          v-for="partner in partners"
          :key="partner.name"
          class="group flex flex-col items-center justify-between p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-card hover:border-brand-green-300 transition-all duration-300 hover:-translate-y-1 text-center"
        >
          <!-- Conteneur Logo avec filtre propre et dimensions homogènes -->
          <div class="h-16 w-full flex items-center justify-center">
            <img
              :src="partner.logo"
              :alt="partner.name"
              class="max-h-12 max-w-[120px] object-contain transition-all duration-300 group-hover:scale-105"
            />
          </div>

          <div class="mt-3">
            <span class="text-xs font-bold text-slate-800 block group-hover:text-brand-green-600 transition-colors">
              {{ partner.name }}
            </span>
            <span class="text-[10px] text-slate-400 mt-1 line-clamp-2 leading-tight">
              {{ partner.description }}
            </span>
          </div>
        </div>
      </div>

      <!-- Bandeau de réassurance bas -->
      <div class="mt-10 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-slate-500 font-medium">
        <div class="flex items-center space-x-2">
          <Icon name="lucide:shield-check" class="w-4 h-4 text-brand-green-600" />
          <span>{{ $t('partners.trust_iec') }}</span>
        </div>
        <div class="flex items-center space-x-2">
          <Icon name="lucide:award" class="w-4 h-4 text-brand-gold-500" />
          <span>{{ $t('partners.trust_engineers') }}</span>
        </div>
        <div class="flex items-center space-x-2">
          <Icon name="lucide:check-circle-2" class="w-4 h-4 text-brand-green-600" />
          <span>{{ $t('partners.trust_support') }}</span>
        </div>
      </div>

    </div>
  </section>
</template>
