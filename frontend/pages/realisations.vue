<script setup lang="ts">
const localePath = useLocalePath()

useHead({
  title: 'Nos Réalisations & Projets | Eware Group',
  meta: [
    {
      name: 'description',
      content: 'Découvrez nos réalisations en énergie solaire, réseaux électriques et génie industriel au Togo et en Afrique.'
    }
  ]
})

const projects = [
  {
    title: 'Centrale solaire hybride 350 kWc',
    client: 'Industrie Agroalimentaire Lomé',
    type: 'Solaire & Batteries',
    kpi: '-45% sur la facture énergétique',
    desc: 'Installation en toiture avec système de couplage réseau et groupe électrogène pour sécuriser la chaîne du froid.'
  },
  {
    title: 'Poste de transformation 630 kVA HT/BT',
    client: 'Zone Portuaire de Lomé',
    type: 'Réseaux HT/BT',
    kpi: 'Alimentation continue 99.9%',
    desc: 'Fourniture, génie civil, pose et raccordement au réseau national CEET avec cellules de protection intégrées.'
  },
  {
    title: 'Installation photovoltaïque 120 kWc',
    client: 'Complexe Hôtelier & Tertiaire',
    type: 'Autoconsommation',
    kpi: 'Retour sur investissement en 3.8 ans',
    desc: 'Système solaire connecté avec onduleurs intelligents et monitoring distant via application mobile.'
  },
  {
    title: 'Climatisation centrale VRV 250 kW',
    client: 'Immeuble de Siège Social',
    type: 'Génie Climatique',
    kpi: '+30% de rendement énergétique',
    desc: 'Remplacement d\'un ancien groupe de production d\'eau glacée par une solution VRV à haute efficacité énergétique.'
  }
]
</script>

<template>
  <div class="py-16 bg-surface-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Breadcrumb -->
      <div class="flex items-center space-x-2 text-xs text-slate-500 mb-6">
        <NuxtLink :to="localePath('/')" class="hover:text-brand-green-600">Accueil</NuxtLink>
        <Icon name="lucide:chevron-right" class="w-3.5 h-3.5" />
        <span class="text-slate-900 font-semibold">Réalisations</span>
      </div>

      <!-- Header -->
      <div class="max-w-3xl">
        <span class="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-brand-green-700 bg-brand-green-50 px-3 py-1 rounded-full border border-brand-green-200">
          <Icon name="lucide:check-check" class="w-3.5 h-3.5" />
          <span>Chantiers & Études de Cas</span>
        </span>
        <h1 class="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Nos Réalisations sur le Terrain
        </h1>
        <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          Des résultats mesurables, des puissances installées conformes aux normes et des économies immédiates pour nos partenaires industriels et tertiaires.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="(proj, idx) in projects"
          :key="idx"
          class="clean-card p-8 flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold uppercase tracking-wider text-brand-green-700 bg-brand-green-50 px-2.5 py-1 rounded-md border border-brand-green-200">
                {{ proj.type }}
              </span>
              <span class="text-xs font-semibold text-slate-400">{{ proj.client }}</span>
            </div>

            <h3 class="mt-5 text-xl font-bold text-slate-900 leading-tight">
              {{ proj.title }}
            </h3>
            <p class="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
              {{ proj.desc }}
            </p>
          </div>

          <div class="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span class="inline-flex items-center space-x-1.5 text-xs font-extrabold text-brand-gold-600 bg-brand-gold-50 px-3 py-1.5 rounded-lg border border-brand-gold-200">
              <Icon name="lucide:trending-up" class="w-4 h-4" />
              <span>{{ proj.kpi }}</span>
            </span>

            <NuxtLink
              :to="localePath('/contact')"
              class="text-xs font-bold text-brand-green-700 hover:text-brand-green-800 transition-colors flex items-center gap-1"
            >
              <span>Étudier un projet similaire</span>
              <Icon name="lucide:arrow-right" class="w-3.5 h-3.5" />
            </NuxtLink>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
