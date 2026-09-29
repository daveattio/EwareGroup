<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const solutions = computed(() => [
  {
    id: 'solaire',
    link: '/solutions/solaire',
    image: '/images/hero/solar-panels-roof.jpg',
    badge: t('solutions.solar_badge'),
    icon: 'lucide:sun',
    color: 'amber',
    tag: t('solutions.solar_tag'),
    title: t('solutions.solar_title'),
    desc: t('solutions.solar_desc'),
    highlights: [
      t('solutions.solar_h1'),
      t('solutions.solar_h2'),
      t('solutions.solar_h3')
    ]
  },
  {
    id: 'reseaux',
    link: '/solutions/reseaux-ht-bt',
    image: '/images/hero/substation.jpg',
    badge: t('solutions.reseaux_badge'),
    icon: 'lucide:zap',
    color: 'emerald',
    tag: t('solutions.reseaux_tag'),
    title: t('solutions.reseaux_title'),
    desc: t('solutions.reseaux_desc'),
    highlights: [
      t('solutions.reseaux_h1'),
      t('solutions.reseaux_h2'),
      t('solutions.reseaux_h3')
    ]
  },
  {
    id: 'batteries',
    link: '/solutions/industrie',
    image: '/images/hero/battery-bess.jpg',
    badge: t('solutions.batteries_badge'),
    icon: 'lucide:battery-charging',
    color: 'blue',
    tag: t('solutions.batteries_tag'),
    title: t('solutions.batteries_title'),
    desc: t('solutions.batteries_desc'),
    highlights: [
      t('solutions.batteries_h1'),
      t('solutions.batteries_h2'),
      t('solutions.batteries_h3')
    ]
  }
])
</script>

<template>
  <section class="py-20 sm:py-24 bg-white border-b border-slate-200/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header Centré -->
      <div class="text-center max-w-3xl mx-auto pb-12 border-b border-slate-200/80">
        <span class="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-brand-green-700 bg-brand-green-50 px-3.5 py-1 rounded-full border border-brand-green-200">
          <Icon name="lucide:layers" class="w-3.5 h-3.5 text-brand-green-600" />
          <span>{{ $t('solutions.badge') }}</span>
        </span>
        <h2 class="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {{ $t('solutions.title') }}
        </h2>
        <p class="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
          {{ $t('solutions.subtitle') }}
        </p>
      </div>

      <!-- Solutions 3-Cards Grid avec Photos Industrielles Immenses -->
      <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="sol in solutions"
          :key="sol.id"
          class="group rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-card hover:shadow-hover hover:border-brand-green-300 transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5"
        >
          <div>
            <!-- Image Header Réelle avec Effet Zoom et Badge Flottant -->
            <div class="relative h-60 w-full overflow-hidden bg-slate-900">
              <img
                :src="sol.image"
                :alt="sol.title"
                class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-[0.95]"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>

              <!-- Badge Spécification Flottant Glassmorphism -->
              <div class="absolute top-4 left-4 glass-card px-3 py-1.5 rounded-xl text-[11px] font-bold text-slate-900 shadow-md">
                {{ sol.badge }}
              </div>

              <!-- Pastille Icône Ronde Flottante Droite -->
              <div
                class="absolute top-4 right-4 w-10 h-10 rounded-xl glass-card flex items-center justify-center shadow-md group-hover:scale-110 transition-transform"
                :class="{
                  'text-brand-gold-600': sol.color === 'amber',
                  'text-brand-green-600': sol.color === 'emerald',
                  'text-blue-600': sol.color === 'blue'
                }"
              >
                <Icon :name="sol.icon" class="w-5 h-5" />
              </div>

              <!-- Tag de domaine en bas d'image -->
              <div class="absolute bottom-3 left-4 text-xs font-extrabold uppercase tracking-wider text-white/90 drop-shadow-sm">
                {{ sol.tag }}
              </div>
            </div>

            <!-- Corps du Contenu -->
            <div class="p-6 sm:p-7">
              <h3 class="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-brand-green-700 transition-colors leading-snug">
                {{ sol.title }}
              </h3>
              <p class="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
                {{ sol.desc }}
              </p>

              <!-- Points Clés Techniques -->
              <ul class="mt-5 space-y-2.5 border-t border-slate-100 pt-5 text-xs text-slate-700 font-medium">
                <li v-for="(item, idx) in sol.highlights" :key="idx" class="flex items-start space-x-2">
                  <Icon name="lucide:check-circle-2" class="w-4 h-4 text-brand-green-600 shrink-0 mt-0.5" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Action Bas de Carte -->
          <div class="p-6 pt-0">
            <NuxtLink
              :to="localePath(sol.link)"
              class="w-full inline-flex items-center justify-center space-x-2 py-3 rounded-xl bg-surface-100 hover:bg-brand-green-600 text-slate-700 hover:text-white font-bold text-xs transition-all duration-300 group/btn"
            >
              <span>{{ $t('solutions.card_cta') }}</span>
              <Icon name="lucide:arrow-right" class="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Centered Bottom Link -->
      <div class="mt-12 text-center">
        <NuxtLink
          :to="localePath('/realisations')"
          class="inline-flex items-center space-x-2 text-xs font-bold text-brand-green-700 hover:text-white bg-brand-green-50 hover:bg-brand-green-600 px-6 py-3.5 rounded-xl border border-brand-green-200 transition-all shadow-xs group"
        >
          <span>{{ $t('solutions.view_all_realizations') }}</span>
          <Icon name="lucide:arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </NuxtLink>
      </div>

    </div>
  </section>
</template>
