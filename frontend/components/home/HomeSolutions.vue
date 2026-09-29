<script setup lang="ts">
const localePath = useLocalePath()

const solutions = [
  {
    id: 'solaire',
    icon: 'lucide:sun',
    color: 'amber',
    tag: 'Énergie Propre & Autonomie',
    title: 'Solaire Photovoltaïque & Systèmes Hybrides',
    desc: 'Conception, fourniture et installation de centrales solaires pour industries, commerces et résidences. Optimisation de l\'autoconsommation et stockage par batteries.',
    highlights: ['Études d\'ensoleillement certifiées', 'Réduction immédiate de la facture CIE/CEET', 'Monitoring en temps réel']
  },
  {
    id: 'reseaux',
    icon: 'lucide:zap',
    color: 'emerald',
    tag: 'Infrastructures & Haute Tension',
    title: 'Réseaux Électriques HT / BT & Postes',
    desc: 'Ingénierie complète de réseaux de distribution, postes de transformation moyenne/haute tension, et raccordements industriels fiables aux normes CEI.',
    highlights: ['Postes transformateurs HT/BT', 'Lignes aériennes et souterraines', 'Sécurité et conformité réglementaire']
  },
  {
    id: 'industrie',
    icon: 'lucide:settings-2',
    color: 'blue',
    tag: 'Performance & Continuité',
    title: 'Génie Climatique & Maintenance Industrielle',
    desc: 'Audit énergétique complet, installations de climatisation industrielle, froid commercial et contrats de maintenance préventive pour pérenniser vos actifs.',
    highlights: ['Audit d\'efficacité énergétique', 'Systèmes CVC & froid industriel', 'Support technique et maintenance 24/7']
  }
]
</script>

<template>
  <section class="py-20 bg-white border-b border-slate-200/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-3xl">
        <div>
          <span class="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-brand-green-700 bg-brand-green-50 px-3 py-1 rounded-full border border-brand-green-200">
            <Icon name="lucide:layers" class="w-3.5 h-3.5" />
            <span>Domaines d'Intervention</span>
          </span>
          <h2 class="mt-4 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Des expertises intégrées pour vos défis énergétiques
          </h2>
        </div>
        <p class="text-sm text-slate-500 max-w-md">
          Un interlocuteur unique de l'audit initial jusqu'à la mise en service et au suivi opérationnel de vos installations au Togo et dans la sous-région.
        </p>
      </div>

      <!-- Solutions 3-Cards Grid -->
      <div class="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="sol in solutions"
          :key="sol.id"
          class="clean-card clean-card-hover p-8 flex flex-col justify-between"
        >
          <div>
            <!-- Icon & Tag -->
            <div class="flex items-center justify-between">
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center"
                :class="{
                  'bg-amber-50 text-brand-gold-600 border border-amber-200': sol.color === 'amber',
                  'bg-emerald-50 text-brand-green-600 border border-emerald-200': sol.color === 'emerald',
                  'bg-blue-50 text-blue-600 border border-blue-200': sol.color === 'blue'
                }"
              >
                <Icon :name="sol.icon" class="w-6 h-6" />
              </div>
              <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">{{ sol.tag }}</span>
            </div>

            <!-- Title & Description -->
            <h3 class="mt-6 text-xl font-bold text-slate-900 leading-tight">
              {{ sol.title }}
            </h3>
            <p class="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
              {{ sol.desc }}
            </p>

            <!-- Key Points -->
            <ul class="mt-6 space-y-2 border-t border-slate-100 pt-5 text-xs text-slate-700 font-medium">
              <li v-for="(item, idx) in sol.highlights" :key="idx" class="flex items-center space-x-2">
                <Icon name="lucide:check-circle-2" class="w-4 h-4 text-brand-green-600 shrink-0" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Bottom Action -->
          <div class="mt-8 pt-4 border-t border-slate-100">
            <NuxtLink
              :to="localePath('/contact')"
              class="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-green-700 hover:text-brand-green-800 transition-colors"
            >
              <span>Demander une étude technique</span>
              <Icon name="lucide:arrow-right" class="w-3.5 h-3.5" />
            </NuxtLink>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
