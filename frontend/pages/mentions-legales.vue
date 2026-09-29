<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

useHead({
  title: computed(() => t('legal_page.meta_title')),
  meta: [
    {
      name: 'description',
      content: computed(() => t('legal_page.meta_desc'))
    }
  ]
})
</script>

<template>
  <div class="py-16 bg-surface-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Breadcrumb -->
      <div class="flex items-center space-x-2 text-xs text-slate-500 mb-6">
        <NuxtLink :to="localePath('/')" class="hover:text-brand-green-600">{{ $t('nav.home') }}</NuxtLink>
        <Icon name="lucide:chevron-right" class="w-3.5 h-3.5" />
        <span class="text-slate-900 font-semibold">{{ $t('legal_page.title') }}</span>
      </div>

      <div class="clean-card p-8 sm:p-12 space-y-6 text-sm text-slate-600 leading-relaxed whitespace-pre-line">
        <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900">{{ $t('legal_page.title') }}</h1>
        
        <div>
          <h2 class="text-base font-bold text-slate-900 mb-2">{{ $t('legal_page.sec1_title') }}</h2>
          <p>{{ $t('legal_page.sec1_content') }}</p>
        </div>

        <div>
          <h2 class="text-base font-bold text-slate-900 mb-2">{{ $t('legal_page.sec2_title') }}</h2>
          <p>{{ $t('legal_page.sec2_content') }}</p>
        </div>

        <div>
          <h2 class="text-base font-bold text-slate-900 mb-2">{{ $t('legal_page.sec3_title') }}</h2>
          <p>{{ $t('legal_page.sec3_content') }}</p>
        </div>
      </div>

    </div>
  </div>
</template>
