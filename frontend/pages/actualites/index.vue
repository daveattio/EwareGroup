<script setup lang="ts">
import AppPagination from '~/components/ui/AppPagination.vue'

const { t } = useI18n()
const localePath = useLocalePath()
const { defaultArticles, fetchArticles } = useArticles()

const activeFilter = ref<string>('all')
const currentPage = ref(1)
const pageSize = 6

// Récupération des articles via Nuxt useAsyncData
const { data: articlesList } = await useAsyncData('actualites-full-list', () => fetchArticles(), {
  default: () => defaultArticles
})

const articles = computed(() => articlesList.value || defaultArticles)

// Filtrage par entité (Togo, Bénin, SolSizer, Mobility)
const filteredArticles = computed(() => {
  if (activeFilter.value === 'all') return articles.value
  return articles.value.filter(a => a.category === activeFilter.value)
})

// Réinitialiser la page à 1 lors du changement de filtre
watch(activeFilter, () => {
  currentPage.value = 1
})

// Découpage paginé
const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filteredArticles.value.slice(start, start + pageSize)
})

useHead(() => ({
  title: `${t('news.page_title')} | Eware Group`,
  meta: [
    {
      name: 'description',
      content: t('news.page_subtitle')
    }
  ]
}))
</script>

<template>
  <div class="py-12 bg-surface-50 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Fil d'Ariane -->
      <nav class="flex items-center space-x-2 text-xs text-slate-500 mb-8" aria-label="Breadcrumb">
        <NuxtLink :to="localePath('/')" class="hover:text-brand-green-600 transition-colors">{{ $t('nav.home') }}</NuxtLink>
        <Icon name="lucide:chevron-right" class="w-3.5 h-3.5" />
        <span class="text-slate-900 font-semibold">{{ $t('news.badge') }}</span>
      </nav>

      <!-- En-tête de Section Centré & Filtres -->
      <div class="text-center max-w-3xl mx-auto pb-10 border-b border-slate-200">
        <span class="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-brand-green-700 bg-brand-green-50 px-3.5 py-1 rounded-full border border-brand-green-200">
          <Icon name="lucide:newspaper" class="w-3.5 h-3.5 text-brand-green-600" />
          <span>{{ $t('news.magazine_badge') }}</span>
        </span>
        <h1 class="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          {{ $t('news.page_title') }}
        </h1>
        <p class="mt-2 text-sm text-slate-500 max-w-xl mx-auto">
          {{ $t('news.page_subtitle') }}
        </p>

        <!-- Onglets Filtres (Centrés - Sans drapeaux) -->
        <div class="mt-8 inline-flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-xl bg-white border border-slate-200 shadow-xs">
          <button
            @click="activeFilter = 'all'"
            type="button"
            class="px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all"
            :class="activeFilter === 'all' ? 'bg-brand-green-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'"
          >
            {{ $t('news.filter_all') }} ({{ articles.length }})
          </button>
          <button
            @click="activeFilter = 'togo'"
            type="button"
            class="px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all"
            :class="activeFilter === 'togo' ? 'bg-brand-green-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'"
          >
            {{ $t('news.filter_togo') }}
          </button>
          <button
            @click="activeFilter = 'benin'"
            type="button"
            class="px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all"
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
            {{ $t('news.filter_solsizer') }}
          </button>
          <button
            @click="activeFilter = 'mobility'"
            type="button"
            class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
            :class="activeFilter === 'mobility' ? 'bg-brand-green-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'"
          >
            {{ $t('news.filter_mobility') }}
          </button>
        </div>
      </div>

      <!-- Grille des Articles Paginés -->
      <div v-if="paginatedArticles.length > 0" class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="post in paginatedArticles"
          :key="post.id"
          class="clean-card clean-card-hover p-6 flex flex-col justify-between overflow-hidden group"
        >
          <div>
            <!-- Image de couverture Strapi si disponible -->
            <div v-if="post.coverUrl" class="mb-5 -mx-6 -mt-6 h-48 overflow-hidden bg-slate-100 border-b border-slate-100">
              <img
                :src="post.coverUrl"
                :alt="post.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <!-- Tag & Date -->
            <div class="flex items-center justify-between text-slate-400 text-[11px]">
              <span class="font-bold uppercase tracking-wider text-brand-green-700 bg-brand-green-50 px-2 py-0.5 rounded border border-brand-green-200">
                {{ post.tag }}
              </span>
              <span>{{ post.readTime }}</span>
            </div>

            <!-- Titre -->
            <h2 class="mt-4 text-lg font-bold text-slate-900 leading-snug">
              <NuxtLink :to="localePath(`/actualites/${post.slug}`)" class="hover:text-brand-green-600 transition-colors">
                {{ post.title }}
              </NuxtLink>
            </h2>

            <!-- Résumé -->
            <p class="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3">
              {{ post.summary }}
            </p>
          </div>

          <!-- Bottom Meta & Bouton Lire -->
          <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
            <span class="text-slate-400 text-[11px]">{{ post.date }}</span>
            <NuxtLink
              :to="localePath(`/actualites/${post.slug}`)"
              class="font-bold text-brand-green-600 hover:text-brand-green-700 flex items-center space-x-1 group-hover:translate-x-1 transition-transform"
            >
              <span>{{ $t('news.read_more') }}</span>
              <Icon name="lucide:arrow-right" class="w-3.5 h-3.5" />
            </NuxtLink>
          </div>
        </article>
      </div>

      <!-- État vide -->
      <div v-else class="clean-card p-16 text-center text-slate-500 mt-12 space-y-3">
        <Icon name="lucide:inbox" class="w-12 h-12 text-slate-300 mx-auto" />
        <h3 class="text-base font-bold text-slate-800">{{ $t('news.empty_category_title') }}</h3>
        <p class="text-xs text-slate-400">{{ $t('news.empty_category_desc') }}</p>
      </div>

      <!-- Composant de Pagination Réutilisable -->
      <div class="mt-12">
        <AppPagination
          v-model:currentPage="currentPage"
          :totalItems="filteredArticles.length"
          :pageSize="pageSize"
        />
      </div>

    </div>
  </div>
</template>
