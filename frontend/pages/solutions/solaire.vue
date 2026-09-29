<script setup lang="ts">
const localePath = useLocalePath()

useHead({
  title: 'Solaire & Photovoltaïque | Eware Group',
  meta: [
    {
      name: 'description',
      content: 'Centrales solaires industrielles, toitures photovoltaïques et systèmes hybrides avec stockage batterie au Togo et en Afrique de l\'Ouest.'
    }
  ]
})
</script>

<template>
  <div class="py-16 bg-surface-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Breadcrumb -->
      <div class="flex items-center space-x-2 text-xs text-slate-500 mb-6">
        <NuxtLink :to="localePath('/')" class="hover:text-brand-green-600">Accueil</NuxtLink>
        <Icon name="lucide:chevron-right" class="w-3.5 h-3.5" />
        <span>Solutions</span>
        <Icon name="lucide:chevron-right" class="w-3.5 h-3.5" />
        <span class="text-slate-900 font-semibold">Solaire Photovoltaïque</span>
      </div>

      <!-- Header -->
      <div class="max-w-3xl">
        <span class="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold-800 bg-brand-gold-50 px-3 py-1 rounded-full border border-brand-gold-300">
          <Icon name="lucide:sun" class="w-3.5 h-3.5 text-brand-gold-600" />
          <span>Énergie Solaire & Autonomie</span>
        </span>
        <h1 class="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Ingénierie Solaire Photovoltaïque & Hybride
        </h1>
        <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          Nous accompagnons les industries, institutions et entreprises dans leur indépendance énergétique grâce à des centrales solaires fiables, dimensionnées avec notre technologie propriétaire SolSizer.
        </p>
      </div>

      <!-- Solutions Grid -->
      <div class="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="clean-card p-8">
          <div class="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-brand-gold-600">
            <Icon name="lucide:building-2" class="w-6 h-6" />
          </div>
          <h3 class="mt-6 text-xl font-bold text-slate-900">Autoconsommation Industrielle</h3>
          <p class="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
            Réduisez jusqu'à 60% votre facture d'électricité grâce à des installations en toiture ou au sol adaptées à vos cycles de production.
          </p>
        </div>

        <div class="clean-card p-8">
          <div class="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-brand-green-600">
            <Icon name="lucide:battery-charging" class="w-6 h-6" />
          </div>
          <h3 class="mt-6 text-xl font-bold text-slate-900">Systèmes Hybrides & Stockage</h3>
          <p class="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
            Combinaison solaire + groupe électrogène + batteries lithium pour garantir la continuité de service en cas de coupure réseau.
          </p>
        </div>

        <div class="clean-card p-8">
          <div class="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
            <Icon name="lucide:line-chart" class="w-6 h-6" />
          </div>
          <h3 class="mt-6 text-xl font-bold text-slate-900">Supervision & Monitoring IoT</h3>
          <p class="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
            Suivi en temps réel de votre production et consommation avec alertes préventives pour maximiser le retour sur investissement.
          </p>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-14 p-8 rounded-3xl bg-brand-green-600 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card">
        <div>
          <h2 class="text-xl sm:text-2xl font-bold">Un projet solaire pour votre entreprise ?</h2>
          <p class="mt-1 text-xs sm:text-sm text-brand-green-100 max-w-xl">
            Nos ingénieurs réalisent une simulation complète de puissance et de rentabilité.
          </p>
        </div>
        <NuxtLink
          :to="localePath('/contact')"
          class="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-brand-gold-400 hover:bg-brand-gold-500 text-slate-950 font-bold text-xs shadow-soft transition-all shrink-0"
        >
          <span>Demander une étude solaire</span>
          <Icon name="lucide:arrow-right" class="w-4 h-4" />
        </NuxtLink>
      </div>

    </div>
  </div>
</template>
