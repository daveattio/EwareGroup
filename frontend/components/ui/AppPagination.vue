<script setup lang="ts">
interface Props {
  currentPage: number
  totalItems: number
  pageSize?: number
}

const props = withDefaults(defineProps<Props>(), {
  pageSize: 6
})

const emit = defineEmits<{
  (e: 'update:currentPage', page: number): void
  (e: 'page-change', page: number): void
}>()

const totalPages = computed(() => Math.ceil(props.totalItems / props.pageSize) || 1)

const goToPage = (page: number) => {
  if (page < 1 || page > totalPages.value || page === props.currentPage) return
  emit('update:currentPage', page)
  emit('page-change', page)
}

// Calcul des pages visibles avec ellipses (...)
const visiblePages = computed(() => {
  const current = props.currentPage
  const total = totalPages.value
  const delta = 1
  const range: (number | string)[] = []

  for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
    range.push(i)
  }

  if (current - delta > 2) {
    range.unshift('...')
  }
  if (current + delta < total - 1) {
    range.push('...')
  }

  range.unshift(1)
  if (total > 1) {
    range.push(total)
  }

  return range
})
</script>

<template>
  <nav v-if="totalPages > 1" class="flex items-center justify-center space-x-1.5 py-8" aria-label="Pagination">
    <!-- Bouton Précédent -->
    <button
      @click="goToPage(currentPage - 1)"
      :disabled="currentPage === 1"
      type="button"
      class="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-brand-green-300 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-xs"
      aria-label="Page précédente"
    >
      <Icon name="lucide:chevron-left" class="w-4 h-4" />
    </button>

    <!-- Numéros de Page -->
    <template v-for="(pageItem, index) in visiblePages" :key="index">
      <span
        v-if="pageItem === '...'"
        class="w-10 h-10 flex items-center justify-center text-xs font-bold text-slate-400 select-none"
      >
        •••
      </span>
      <button
        v-else
        @click="goToPage(Number(pageItem))"
        type="button"
        class="w-10 h-10 rounded-xl text-xs font-bold transition shadow-xs"
        :class="[
          currentPage === pageItem
            ? 'bg-brand-green-600 text-white shadow-soft border border-brand-green-600'
            : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-brand-green-300'
        ]"
      >
        {{ pageItem }}
      </button>
    </template>

    <!-- Bouton Suivant -->
    <button
      @click="goToPage(currentPage + 1)"
      :disabled="currentPage === totalPages"
      type="button"
      class="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-brand-green-300 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-xs"
      aria-label="Page suivante"
    >
      <Icon name="lucide:chevron-right" class="w-4 h-4" />
    </button>
  </nav>
</template>
