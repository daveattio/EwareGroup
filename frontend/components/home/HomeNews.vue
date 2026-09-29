<script setup lang="ts">
const localePath = useLocalePath()
const { defaultArticles, fetchArticles } = useArticles()

const activeFilter = ref<string>('all')

// Récupération instantanée SSR + Client via Nuxt useAsyncData
const { data: articlesList } = await useAsyncData('home-articles', () => fetchArticles(), {
  default: () => defaultArticles
})

const articles = computed(() => articlesList.value || defaultArticles)

const filteredArticles = computed(() => {
  if (activeFilter.value === 'all') return articles.value
  return articles.value.filter(a => a.category === activeFilter.value)
})
</script>

<template>
  <section class="py-20 bg-surface-50 border-b border-slate-200/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header Centré & Filter Tabs -->
      <div class="text-center max-w-3xl mx-auto">
        <span class="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-brand-green-700 bg-brand-green-50 px-3.5 py-1 rounded-full border border-brand-green-200">
          <Icon name="lucide:newspaper" class="w-3.5 h-3.5 text-brand-green-600" />
          <span>{{ $t('news.badge') }}</span>
        </span>
        <h2 class="mt-4 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {{ $t('news.title') }}
        </h2>
        <p class="mt-2 text-sm text-slate-500 max-w-xl mx-auto">
          {{ $t('news.subtitle') }}
        </p>

        <!-- Filter Buttons (Centrés - Sans drapeaux) -->
        <div class="mt-8 inline-flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-xl bg-white border border-slate-200 shadow-xs">
          <button
            @click="activeFilter = 'all'"
            type="button"
            class="px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer"
            :class="activeFilter === 'all' ? 'bg-brand-green-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'"
          >
            {{ $t('news.filter_all') }}
          </button>
          <button
            @click="activeFilter = 'togo'"
            type="button"
            class="px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer"
            :class="activeFilter === 'togo' ? 'bg-brand-green-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'"
          >
            {{ $t('news.filter_togo') }}
          </button>
          <button
            @click="activeFilter = 'benin'"
            type="button"
            class="px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer"
            :class="activeFilter === 'benin' ? 'bg-brand-green-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'"
          >
            {{ $t('news.filter_benin') }}
          </button>
          <button
            @click="activeFilter = 'solsizer'"
            type="button"
            class="px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer"
            :class="activeFilter === 'solsizer' ? 'bg-brand-gold-400 text-slate-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'"
          >
            SolSizer
          </button>
          <button
            @click="activeFilter = 'mobility'"
            type="button"
            class="px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer"
            :class="activeFilter === 'mobility' ? 'bg-brand-green-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'"
          >
            Mobility
          </button>
        </div>
      </div>

      <!-- Articles Grid Re-stylé avec incrustation d'image parfaite -->
      <div v-if="filteredArticles.length > 0" class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <article
          v-for="post in filteredArticles"
          :key="post.id"
          class="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-card hover:border-slate-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
        >
          <div>
            <!-- Image de couverture élégante avec ratio fixe et badge incrusté -->
            <div class="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
              <img
                :src="post.coverUrl || '/images/hero/solar-farm-hero.jpg'"
                :alt="post.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
              
              <!-- Badge Tag incrusté -->
              <div class="absolute top-3 left-3">
                <span class="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-brand-green-700 shadow-xs border border-white/60">
                  {{ post.tag }}
                </span>
              </div>
            </div>

            <!-- Contenu Texte -->
            <div class="p-5">
              <div class="flex items-center justify-between text-slate-400 text-[11px] mb-2">
                <span>{{ post.date }}</span>
                <span>{{ post.readTime }}</span>
              </div>

              <!-- Title -->
              <h3 class="text-sm sm:text-base font-bold text-slate-900 leading-snug line-clamp-2">
                <NuxtLink :to="localePath(`/actualites/${post.slug}`)" class="hover:text-brand-green-600 transition-colors">
                  {{ post.title }}
                </NuxtLink>
              </h3>

              <!-- Summary -->
              <p class="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-3">
                {{ post.summary }}
              </p>
            </div>
          </div>

          <!-- Bottom meta / Call to action -->
          <div class="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-end text-xs">
            <NuxtLink
              :to="localePath(`/actualites/${post.slug}`)"
              class="font-bold text-xs text-brand-green-600 hover:text-brand-green-700 flex items-center space-x-1 group-hover:translate-x-0.5 transition-transform"
            >
              <span>{{ $t('news.read_more') }}</span>
              <Icon name="lucide:arrow-right" class="w-3.5 h-3.5" />
            </NuxtLink>
          </div>
        </article>
      </div>

      <!-- État vide élégant quand aucun article n'est encore publié sur Strapi -->
      <div v-else class="mt-12 p-12 text-center rounded-2xl bg-white border border-slate-200/80 shadow-xs max-w-xl mx-auto space-y-3">
        <div class="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
          <Icon name="lucide:newspaper" class="w-6 h-6" />
        </div>
        <h3 class="text-sm font-bold text-slate-800">{{ $t('news.empty_title') }}</h3>
        <p class="text-xs text-slate-400">
          {{ $t('news.empty_desc') }}
        </p>
      </div>

    </div>
  </section>
</template>
