<script setup lang="ts">
import FlagTogo from '~/components/icons/FlagTogo.vue'
import FlagBenin from '~/components/icons/FlagBenin.vue'

const localePath = useLocalePath()
const { defaultArticles, fetchArticles } = useArticles()

const activeFilter = ref<string>('all')
const articles = ref(defaultArticles)

onMounted(async () => {
  articles.value = await fetchArticles()
})


const filteredArticles = computed(() => {
  if (activeFilter.value === 'all') return articles
  return articles.filter(a => a.category === activeFilter.value)
})
</script>

<template>
  <section class="py-20 bg-surface-50 border-b border-slate-200/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header & Filter Tabs -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span class="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-brand-green-700 bg-brand-green-50 px-3 py-1 rounded-full border border-brand-green-200">
            <Icon name="lucide:newspaper" class="w-3.5 h-3.5" />
            <span>Actualités & Blog</span>
          </span>
          <h2 class="mt-4 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Les dernières actualités du Groupe
          </h2>
        </div>

        <!-- Filter Buttons (SyndicTG Style) -->
        <div class="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white border border-slate-200 shadow-xs">
          <button
            @click="activeFilter = 'all'"
            type="button"
            class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
            :class="activeFilter === 'all' ? 'bg-brand-green-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'"
          >
            Toutes
          </button>
          <button
            @click="activeFilter = 'togo'"
            type="button"
            class="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
            :class="activeFilter === 'togo' ? 'bg-brand-green-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'"
          >
            <FlagTogo class="w-3.5 h-2" />
            <span>Togo</span>
          </button>
          <button
            @click="activeFilter = 'benin'"
            type="button"
            class="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
            :class="activeFilter === 'benin' ? 'bg-brand-green-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'"
          >
            <FlagBenin class="w-3.5 h-2" />
            <span>Bénin</span>
          </button>
          <button
            @click="activeFilter = 'solsizer'"
            type="button"
            class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
            :class="activeFilter === 'solsizer' ? 'bg-brand-gold-400 text-slate-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'"
          >
            SolSizer
          </button>
          <button
            @click="activeFilter = 'mobility'"
            type="button"
            class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
            :class="activeFilter === 'mobility' ? 'bg-brand-green-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'"
          >
            Mobility
          </button>
        </div>
      </div>

      <!-- Articles Grid -->
      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <article
          v-for="post in filteredArticles"
          :key="post.id"
          class="clean-card clean-card-hover p-6 flex flex-col justify-between"
        >
          <div>
            <!-- Header Tag & Date -->
            <div class="flex items-center justify-between text-slate-400 text-[11px]">
              <span class="font-bold uppercase tracking-wider text-brand-green-700 bg-brand-green-50 px-2 py-0.5 rounded border border-brand-green-200">
                {{ post.tag }}
              </span>
              <span>{{ post.readTime }}</span>
            </div>

            <!-- Title -->
            <h3 class="mt-4 text-base font-bold text-slate-900 leading-snug">
              {{ post.title }}
            </h3>

            <!-- Summary -->
            <p class="mt-2.5 text-xs text-slate-500 leading-relaxed">
              {{ post.summary }}
            </p>
          </div>

          <!-- Bottom meta -->
          <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
            <span class="text-slate-400 text-[11px]">{{ post.date }}</span>
            <span class="font-bold text-brand-green-600 flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
              <span>Lire</span>
              <Icon name="lucide:arrow-right" class="w-3.5 h-3.5" />
            </span>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>
