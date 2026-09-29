<script setup lang="ts">
const localePath = useLocalePath()

useHead({
  title: 'Réseaux Électriques HT/BT & Postes | Eware Group',
  meta: [
    {
      name: 'description',
      content: 'Ingénierie de réseaux électriques moyenne et haute tension, postes de transformation et raccordements industriels au Togo.'
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
        <span class="text-slate-900 font-semibold">Réseaux HT / BT</span>
      </div>

      <!-- Header -->
      <div class="max-w-3xl">
        <span class="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-brand-green-700 bg-brand-green-50 px-3 py-1 rounded-full border border-brand-green-200">
          <Icon name="lucide:zap" class="w-3.5 h-3.5" />
          <span>Infrastructures Électriques</span>
        </span>
        <h1 class="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Réseaux Haute / Basse Tension & Postes
        </h1>
        <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          Conception, déploiement et réhabilitation de réseaux de distribution électrique, postes de transformation industriels et équipements de protection.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="clean-card p-8">
          <div class="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-brand-green-600">
            <Icon name="lucide:shield-check" class="w-6 h-6" />
          </div>
          <h3 class="mt-6 text-xl font-bold text-slate-900">Postes de Transformation</h3>
          <p class="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
            Fourniture et installation de postes de transformation HT/BT préfabriqués ou maçonnés conformes aux normes de distribution nationales.
          </p>
        </div>

        <div class="clean-card p-8">
          <div class="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-brand-gold-600">
            <Icon name="lucide:git-commit" class="w-6 h-6" />
          </div>
          <h3 class="mt-6 text-xl font-bold text-slate-900">Lignes Aériennes & Souterraines</h3>
          <p class="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
            Tirage de câbles, pose de supports et réalisation de tranchées pour les extensions de réseaux urbains et interurbains.
          </p>
        </div>

        <div class="clean-card p-8">
          <div class="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
            <Icon name="lucide:activity" class="w-6 h-6" />
          </div>
          <h3 class="mt-6 text-xl font-bold text-slate-900">Audit & Mise en Conformité</h3>
          <p class="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
            Mesures de terre, bilans de puissance, équilibrage des phases et rénovation de tableaux généraux basse tension (TGBT).
          </p>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-14 p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card">
        <div>
          <h2 class="text-xl sm:text-2xl font-bold">Besoin d'un raccordement ou d'un poste HT/BT ?</h2>
          <p class="mt-1 text-xs sm:text-sm text-slate-400 max-w-xl">
            Nos équipes techniques étudient vos contraintes de réseau et vous fournissent un devis normé.
          </p>
        </div>
        <NuxtLink
          :to="localePath('/contact')"
          class="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-brand-gold-400 hover:bg-brand-gold-500 text-slate-950 font-bold text-xs shadow-soft transition-all shrink-0"
        >
          <span>Consulter nos ingénieurs</span>
          <Icon name="lucide:arrow-right" class="w-4 h-4" />
        </NuxtLink>
      </div>

    </div>
  </div>
</template>
