<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

useHead({
  title: computed(() => t('solutions_page.informatique_meta_title')),
  meta: [
    {
      name: 'description',
      content: computed(() => t('solutions_page.informatique_meta_desc'))
    }
  ]
})
</script>

<template>
  <div class="py-16 bg-surface-50 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Breadcrumb -->
      <div class="flex items-center space-x-2 text-xs text-slate-500 mb-6">
        <NuxtLink :to="localePath('/')" class="hover:text-brand-green-600">{{ $t('nav.home') }}</NuxtLink>
        <Icon name="lucide:chevron-right" class="w-3.5 h-3.5" />
        <span>{{ $t('nav.solutions') }}</span>
        <Icon name="lucide:chevron-right" class="w-3.5 h-3.5" />
        <span class="text-slate-900 font-semibold">{{ $t('nav.solutions_informatique_title') }}</span>
      </div>

      <!-- Header Centré (Identique aux pages Solaire / Réseaux / Industrie) -->
      <div class="text-center max-w-3xl mx-auto">
        <span class="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-brand-green-700 bg-brand-green-50 px-3.5 py-1 rounded-full border border-brand-green-200">
          <Icon name="lucide:laptop" class="w-3.5 h-3.5 text-brand-green-600" />
          <span>{{ $t('solutions_page.informatique_badge') }}</span>
        </span>
        <h1 class="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          {{ $t('solutions_page.informatique_title') }}
        </h1>
        <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
          {{ $t('solutions_page.informatique_subtitle') }}
        </p>
      </div>

      <!-- Solutions Grid (Strictement 3 Cartes épurées, même ergonomie que Solaire / Réseaux / Industrie) -->
      <div class="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Carte 1 : Fourniture & Matériels IT -->
        <div class="clean-card p-8 flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
              <Icon name="lucide:server" class="w-6 h-6" />
            </div>
            <h3 class="mt-6 text-xl font-bold text-slate-900">
              {{ $t('solutions_page.informatique_card1_title') }}
            </h3>
            <p class="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
              {{ $t('solutions_page.informatique_card1_desc') }}
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-100 flex items-center space-x-2 text-xs font-semibold text-indigo-700">
            <Icon name="lucide:check-circle-2" class="w-4 h-4 text-indigo-600 shrink-0" />
            <span>Serveurs, parcs informatiques & onduleurs UPS</span>
          </div>
        </div>

        <!-- Carte 2 : Édition Logicielle & Apps (SolSizer & Eware E-mobility) -->
        <div class="clean-card p-8 flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-brand-gold-600">
              <Icon name="lucide:code-2" class="w-6 h-6" />
            </div>
            <h3 class="mt-6 text-xl font-bold text-slate-900">
              {{ $t('solutions_page.informatique_card2_title') }}
            </h3>
            <p class="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
              {{ $t('solutions_page.informatique_card2_desc') }}
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <a
              href="https://solsizer.app"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-bold border border-amber-200 transition-colors"
            >
              <span>SolSizer.app</span>
              <Icon name="lucide:external-link" class="w-3.5 h-3.5 text-amber-600" />
            </a>
            <a
              href="https://eware-mobility.ewaregroup.org"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200 transition-colors"
            >
              <span>Eware Mobility</span>
              <Icon name="lucide:external-link" class="w-3.5 h-3.5 text-emerald-600" />
            </a>
          </div>
        </div>

        <!-- Carte 3 : Réseaux, Fibre & Maintenance -->
        <div class="clean-card p-8 flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-brand-green-600">
              <Icon name="lucide:network" class="w-6 h-6" />
            </div>
            <h3 class="mt-6 text-xl font-bold text-slate-900">
              {{ $t('solutions_page.informatique_card3_title') }}
            </h3>
            <p class="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
              {{ $t('solutions_page.informatique_card3_desc') }}
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-100 flex items-center space-x-2 text-xs font-semibold text-brand-green-700">
            <Icon name="lucide:check-circle-2" class="w-4 h-4 text-brand-green-600 shrink-0" />
            <span>Fibre optique, câblage Cat 6A & infogérance</span>
          </div>
        </div>

      </div>

      <!-- CTA (Bannière verte classique identique aux pages Solaire et Industrie) -->
      <div class="mt-14 p-8 rounded-3xl bg-brand-green-600 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card">
        <div>
          <h2 class="text-xl sm:text-2xl font-bold">{{ $t('solutions_page.informatique_title') }}</h2>
          <p class="mt-1 text-xs sm:text-sm text-brand-green-100 max-w-xl">
            {{ $t('solutions_page.informatique_subtitle') }}
          </p>
        </div>
        <NuxtLink
          :to="localePath('/contact')"
          class="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-brand-gold-400 hover:bg-brand-gold-500 text-slate-950 font-bold text-xs shadow-soft transition-all shrink-0"
        >
          <span>{{ $t('hero.cta_audit') }}</span>
          <Icon name="lucide:arrow-right" class="w-4 h-4" />
        </NuxtLink>
      </div>

    </div>
  </div>
</template>
