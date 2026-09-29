<script setup lang="ts">
const localePath = useLocalePath()

useHead({
  title: 'Génie Industriel & Climatisation | Eware Group',
  meta: [
    {
      name: 'description',
      content: 'Climatisation industrielle, froid commercial, efficacité énergétique et maintenance des installations techniques.'
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
        <span class="text-slate-900 font-semibold">Génie Industriel</span>
      </div>

      <!-- Header -->
      <div class="max-w-3xl">
        <span class="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          <Icon name="lucide:settings-2" class="w-3.5 h-3.5" />
          <span>Performance & Froid Industriel</span>
        </span>
        <h1 class="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Génie Climatique & Maintenance Industrielle
        </h1>
        <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          Garantissez la fiabilité opérationnelle de vos équipements grâce à nos services d'ingénierie CVC, de froid commercial et de contrats de maintenance préventive.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="clean-card p-8">
          <div class="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
            <Icon name="lucide:wind" class="w-6 h-6" />
          </div>
          <h3 class="mt-6 text-xl font-bold text-slate-900">Systèmes CVC & Climatisation</h3>
          <p class="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
            Installation et optimisation de systèmes de climatisation centrale, VRV/DRV pour immeubles de bureaux, banques et usines.
          </p>
        </div>

        <div class="clean-card p-8">
          <div class="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600">
            <Icon name="lucide:snowflake" class="w-6 h-6" />
          </div>
          <h3 class="mt-6 text-xl font-bold text-slate-900">Froid Commercial & Agroalimentaire</h3>
          <p class="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
            Chambres froides positives et négatives, centrales frigorifiques et tunnels de congélation répondant aux normes sanitaires strictes.
          </p>
        </div>

        <div class="clean-card p-8">
          <div class="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-brand-green-600">
            <Icon name="lucide:wrench" class="w-6 h-6" />
          </div>
          <h3 class="mt-6 text-xl font-bold text-slate-900">Contrats de Maintenance 24/7</h3>
          <p class="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
            Intervention rapide, maintenance préventive planifiée et pièces de rechange d'origine pour éviter les arrêts de production.
          </p>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-14 p-8 rounded-3xl bg-brand-green-600 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card">
        <div>
          <h2 class="text-xl sm:text-2xl font-bold">Un audit de vos installations industrielles ?</h2>
          <p class="mt-1 text-xs sm:text-sm text-brand-green-100 max-w-xl">
            Nos techniciens certifiés interviennent sur vos sites pour évaluer vos rendements énergétiques.
          </p>
        </div>
        <NuxtLink
          :to="localePath('/contact')"
          class="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-brand-gold-400 hover:bg-brand-gold-500 text-slate-950 font-bold text-xs shadow-soft transition-all shrink-0"
        >
          <span>Prendre contact</span>
          <Icon name="lucide:arrow-right" class="w-4 h-4" />
        </NuxtLink>
      </div>

    </div>
  </div>
</template>
