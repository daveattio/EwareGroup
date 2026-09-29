<script setup lang="ts">
import IconWhatsApp from '~/components/icons/social/IconWhatsApp.vue'
import IconLinkedIn from '~/components/icons/social/IconLinkedIn.vue'

const { t } = useI18n()
const route = useRoute()
const localePath = useLocalePath()
const slug = computed(() => route.params.slug as string)

const { fetchArticleBySlug } = useArticles()

// Récupération de l'article par son slug
const { data: article, pending } = await useAsyncData(
  `article-${slug.value}`,
  () => fetchArticleBySlug(slug.value)
)

// Métadonnées SEO dynamiques
useHead(() => ({
  title: article.value ? `${article.value.title} | Eware Group` : `${t('news.badge')} | Eware Group`,
  meta: [
    {
      name: 'description',
      content: article.value?.summary || t('news.subtitle')
    },
    { property: 'og:title', content: article.value?.title || 'Eware Group' },
    { property: 'og:description', content: article.value?.summary || '' },
    ...(article.value?.coverUrl ? [{ property: 'og:image', content: article.value.coverUrl }] : [])
  ]
}))

// Rendu des blocs de contenu Strapi (Blocks / Paragraphs / Headings)
const renderBlocks = (blocks: any) => {
  if (!blocks) return []
  if (typeof blocks === 'string') return [{ type: 'paragraph', text: blocks }]
  if (Array.isArray(blocks)) {
    return blocks.map((b: any) => {
      if (b.type === 'paragraph') {
        const text = b.children?.map((c: any) => c.text).join('') || ''
        return { type: 'paragraph', text }
      }
      if (b.type === 'heading') {
        const text = b.children?.map((c: any) => c.text).join('') || ''
        return { type: `h${b.level || 2}`, text }
      }
      if (b.type === 'list') {
        const items = b.children?.map((li: any) => li.children?.map((c: any) => c.text).join('')).filter(Boolean) || []
        return { type: 'list', items }
      }
      return { type: 'paragraph', text: '' }
    })
  }
  return []
}

const blocksContent = computed(() => {
  return renderBlocks(article.value?.content)
})

// Partage WhatsApp / LinkedIn
const shareOnWhatsApp = () => {
  if (process.client) {
    const url = window.location.href
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(article.value?.title + ' ' + url)}`, '_blank')
  }
}

const shareOnLinkedIn = () => {
  if (process.client) {
    const url = window.location.href
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
  }
}
</script>

<template>
  <div class="py-12 bg-surface-50 min-h-screen">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Fil d'Ariane (Breadcrumb) -->
      <nav class="flex items-center space-x-2 text-xs text-slate-500 mb-8" aria-label="Breadcrumb">
        <NuxtLink :to="localePath('/')" class="hover:text-brand-green-600 transition-colors">{{ $t('nav.home') }}</NuxtLink>
        <Icon name="lucide:chevron-right" class="w-3.5 h-3.5" />
        <NuxtLink :to="localePath('/actualites')" class="hover:text-brand-green-600 transition-colors">{{ $t('nav.news') }}</NuxtLink>
        <Icon name="lucide:chevron-right" class="w-3.5 h-3.5" />
        <span class="text-slate-900 font-semibold truncate max-w-xs sm:max-w-md">{{ article?.title || $t('news.badge') }}</span>
      </nav>

      <!-- Chargement ou Article non trouvé -->
      <div v-if="pending" class="clean-card p-12 text-center text-slate-500">
        <Icon name="lucide:loader-2" class="w-8 h-8 animate-spin mx-auto text-brand-green-600 mb-3" />
        <p class="text-xs font-semibold">{{ $t('news.loading') }}</p>
      </div>

      <div v-else-if="!article" class="clean-card p-12 text-center space-y-4">
        <Icon name="lucide:file-question" class="w-12 h-12 text-slate-400 mx-auto" />
        <h2 class="text-lg font-bold text-slate-900">{{ $t('news.article_not_found') }}</h2>
        <p class="text-xs text-slate-500">{{ $t('news.article_not_found_desc') }}</p>
        <NuxtLink
          :to="localePath('/actualites')"
          class="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-brand-green-600 text-white text-xs font-bold shadow-soft"
        >
          <Icon name="lucide:arrow-left" class="w-4 h-4" />
          <span>{{ $t('news.back_to_news') }}</span>
        </NuxtLink>
      </div>

      <!-- Contenu Complet de l'Article -->
      <article v-else class="space-y-8">
        
        <!-- En-tête Article -->
        <header class="space-y-4">
          <div class="flex flex-wrap items-center gap-3">
            <span class="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-brand-green-700 bg-brand-green-50 px-3 py-1 rounded-full border border-brand-green-200">
              <Icon name="lucide:tag" class="w-3 h-3" />
              <span>{{ article.tag }}</span>
            </span>

            <span class="inline-flex items-center space-x-1.5 text-xs text-slate-500 font-medium">
              <Icon name="lucide:calendar" class="w-3.5 h-3.5 text-slate-400" />
              <span>{{ article.date }}</span>
            </span>

            <span class="inline-flex items-center space-x-1.5 text-xs text-slate-500 font-medium">
              <Icon name="lucide:clock" class="w-3.5 h-3.5 text-slate-400" />
              <span>{{ $t('news.reading_time', { time: article.readTime }) }}</span>
            </span>

            <span v-if="article.category === 'togo'" class="inline-flex items-center text-xs font-semibold text-slate-700 bg-white px-2.5 py-0.5 rounded-md border border-slate-200">
              Togo
            </span>
            <span v-else-if="article.category === 'benin'" class="inline-flex items-center text-xs font-semibold text-slate-700 bg-white px-2.5 py-0.5 rounded-md border border-slate-200">
              Bénin
            </span>
          </div>

          <h1 class="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {{ article.title }}
          </h1>

          <!-- Résumé / Lead paragraph -->
          <p v-if="article.summary" class="text-base sm:text-lg text-slate-600 leading-relaxed font-normal pt-2 border-l-4 border-brand-gold-400 pl-4 bg-brand-gold-50/30 py-2 rounded-r-xl">
            {{ article.summary }}
          </p>
        </header>

        <!-- Image de Couverture principale -->
        <figure v-if="article.coverUrl" class="clean-card overflow-hidden border border-slate-200 shadow-card">
          <img
            :src="article.coverUrl"
            :alt="article.title"
            class="w-full max-h-[460px] object-cover"
          />
        </figure>

        <!-- Corps de l'Article (Rendu des blocs Strapi) -->
        <div class="clean-card p-8 sm:p-12 space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base border border-slate-200">
          <div v-for="(block, idx) in blocksContent" :key="idx" class="space-y-4">
            <h2 v-if="block.type === 'h2'" class="text-xl sm:text-2xl font-bold text-slate-900 pt-4">
              {{ block.text }}
            </h2>
            <h3 v-else-if="block.type === 'h3'" class="text-lg sm:text-xl font-bold text-slate-900 pt-2">
              {{ block.text }}
            </h3>
            <p v-else-if="block.type === 'paragraph'" class="text-slate-600 leading-relaxed">
              {{ block.text }}
            </p>
            <ul v-else-if="block.type === 'list'" class="list-disc pl-5 space-y-2 text-slate-600">
              <li v-for="(item, i) in block.items" :key="i">{{ item }}</li>
            </ul>
          </div>
        </div>

        <!-- Boutons de Partage & Navigation -->
        <div class="clean-card p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center space-x-2 text-xs font-bold text-slate-700">
            <Icon name="lucide:share-2" class="w-4 h-4 text-brand-green-600" />
            <span>{{ $t('news.share_label') }}</span>
          </div>

          <div class="flex items-center space-x-3">
            <button
              @click="shareOnWhatsApp"
              type="button"
              class="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-[#25D366]/10 text-[#1DA851] hover:bg-[#25D366]/20 border border-[#25D366]/30 text-xs font-bold transition-colors"
            >
              <IconWhatsApp class="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp</span>
            </button>
            <button
              @click="shareOnLinkedIn"
              type="button"
              class="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2]/20 border border-[#0A66C2]/30 text-xs font-bold transition-colors"
            >
              <IconLinkedIn class="w-4 h-4 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </button>
          </div>
        </div>

        <!-- Bannière CTA de fin d'article -->
        <div class="p-8 rounded-3xl bg-brand-green-600 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card">
          <div>
            <h3 class="text-xl font-bold">{{ $t('news.cta_box_title') }}</h3>
            <p class="mt-1 text-xs sm:text-sm text-brand-green-100 max-w-lg">
              {{ $t('news.cta_box_desc') }}
            </p>
          </div>
          <NuxtLink
            :to="localePath('/contact')"
            class="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-brand-gold-400 hover:bg-brand-gold-500 text-slate-950 font-bold text-xs shadow-soft transition-all shrink-0"
          >
            <span>{{ $t('news.cta_box_button') }}</span>
            <Icon name="lucide:arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>

      </article>

    </div>
  </div>
</template>
