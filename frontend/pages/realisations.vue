<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

useHead({
  title: computed(() => t('realizations_page.meta_title')),
  meta: [
    {
      name: 'description',
      content: computed(() => t('realizations_page.meta_desc'))
    }
  ]
})

const projects = computed(() => [
  {
    title: t('realizations_page.project1_title'),
    client: t('realizations_page.project1_client'),
    type: t('realizations_page.project1_type'),
    kpi: t('realizations_page.project1_kpi'),
    desc: t('realizations_page.project1_desc')
  },
  {
    title: t('realizations_page.project2_title'),
    client: t('realizations_page.project2_client'),
    type: t('realizations_page.project2_type'),
    kpi: t('realizations_page.project2_kpi'),
    desc: t('realizations_page.project2_desc')
  },
  {
    title: t('realizations_page.project3_title'),
    client: t('realizations_page.project3_client'),
    type: t('realizations_page.project3_type'),
    kpi: t('realizations_page.project3_kpi'),
    desc: t('realizations_page.project3_desc')
  },
  {
    title: t('realizations_page.project4_title'),
    client: t('realizations_page.project4_client'),
    type: t('realizations_page.project4_type'),
    kpi: t('realizations_page.project4_kpi'),
    desc: t('realizations_page.project4_desc')
  }
])
</script>

<template>
  <div class="py-16 bg-surface-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Breadcrumb -->
      <div class="flex items-center space-x-2 text-xs text-slate-500 mb-6">
        <NuxtLink :to="localePath('/')" class="hover:text-brand-green-600">{{ $t('nav.home') }}</NuxtLink>
        <Icon name="lucide:chevron-right" class="w-3.5 h-3.5" />
        <span class="text-slate-900 font-semibold">{{ $t('nav.realizations') }}</span>
      </div>

      <!-- Header Centré -->
      <div class="text-center max-w-3xl mx-auto">
        <span class="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-brand-green-700 bg-brand-green-50 px-3.5 py-1 rounded-full border border-brand-green-200">
          <Icon name="lucide:check-check" class="w-3.5 h-3.5 text-brand-green-600" />
          <span>{{ $t('realizations_page.badge') }}</span>
        </span>
        <h1 class="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          {{ $t('realizations_page.title') }}
        </h1>
        <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
          {{ $t('realizations_page.subtitle') }}
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
            <span class="inline-flex items-center space-x-1.5 text-xs font-extrabold text-brand-gold-800 bg-brand-gold-50 px-3 py-1.5 rounded-lg border border-brand-gold-200">
              <Icon name="lucide:trending-up" class="w-4 h-4 text-brand-gold-600" />
              <span>{{ proj.kpi }}</span>
            </span>

            <NuxtLink
              :to="localePath('/contact')"
              class="text-xs font-bold text-brand-green-700 hover:text-brand-green-800 transition-colors flex items-center gap-1"
            >
              <span>{{ $t('common.learn_more') }}</span>
              <Icon name="lucide:arrow-right" class="w-3.5 h-3.5" />
            </NuxtLink>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
