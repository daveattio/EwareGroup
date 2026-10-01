<script setup lang="ts">
import FlagTogo from '~/components/icons/FlagTogo.vue'
import FlagBenin from '~/components/icons/FlagBenin.vue'

const { locale, setLocale } = useI18n()
const localePath = useLocalePath()

const mobileMenuOpen = ref(false)
const solutionsMenuOpen = ref(false)
const mobileSolutionsOpen = ref(false)
const ecosystemMenuOpen = ref(false)
const mobileEcosystemOpen = ref(false)

// Gestion du sélecteur de filiale
const currentBranch = ref<'togo' | 'benin'>('togo')
const showBeninModal = ref(false)
const countryDropdownOpen = ref(false)
const countryDropdownRef = ref<HTMLElement | null>(null)

onClickOutside(countryDropdownRef, () => {
  countryDropdownOpen.value = false
})

const selectBranch = (branch: 'togo' | 'benin') => {
  if (branch === 'benin') {
    showBeninModal.value = true
    countryDropdownOpen.value = false
    return
  }
  currentBranch.value = branch
  countryDropdownOpen.value = false
}

// Fermer le menu mobile lors des changements de page
const route = useRoute()
watch(() => route.fullPath, () => {
  mobileMenuOpen.value = false
})

const isHomePage = computed(() => {
  const p = route.path.replace(/\/+$/, '')
  return p === '' || p === '/en' || p === '/fr'
})
</script>

<template>
  <header
    class="z-40 transition-all duration-300"
    :class="[
      isHomePage
        ? 'relative -mb-20 bg-slate-950/20 backdrop-blur-xs border-b border-white/10'
        : 'sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        
        <!-- Logo Eware Group Officiel (S'adapte dynamiquement à l'arrière-plan sans boîte artificielle) -->
        <NuxtLink :to="localePath('/')" class="flex items-center shrink-0 group py-1 mr-4 lg:mr-8">
          <img
            :src="isHomePage ? '/logo-eware-dark.png' : '/logo-eware.png'"
            alt="Eware Group - Transition & Ingénierie"
            class="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </NuxtLink>

        <!-- Desktop Navigation Links (Inter / Plus Jakarta Sans) -->
        <nav
          class="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm font-semibold transition-colors"
          :class="isHomePage ? 'text-slate-200' : 'text-slate-700'"
        >
          
          <NuxtLink
            :to="localePath('/')"
            class="py-2 transition-colors"
            :class="isHomePage ? 'hover:text-white' : 'hover:text-brand-green-600'"
            active-class="text-brand-green-400 font-bold"
          >
            {{ $t('nav.home') }}
          </NuxtLink>

          <!-- Dropdown Solutions -->
          <div
            class="relative"
            @mouseenter="solutionsMenuOpen = true"
            @mouseleave="solutionsMenuOpen = false"
          >
            <button
              type="button"
              class="inline-flex items-center space-x-1 py-2 outline-hidden transition-colors"
              :class="isHomePage ? 'hover:text-white' : 'hover:text-brand-green-600'"
            >
              <span>{{ $t('nav.solutions') }}</span>
              <Icon
                name="lucide:chevron-down"
                class="w-4 h-4 transition-transform duration-200"
                :class="[
                  isHomePage ? 'text-slate-400' : 'text-slate-400',
                  { 'rotate-180': solutionsMenuOpen }
                ]"
              />
            </button>

            <div
              v-show="solutionsMenuOpen"
              class="absolute left-0 mt-1 w-80 bg-white rounded-2xl shadow-hover border border-slate-200/80 p-2 z-50 transition-all duration-200"
            >
              <NuxtLink
                :to="localePath('/solutions/solaire')"
                class="flex items-start space-x-3 p-3 rounded-xl hover:bg-brand-green-50/60 transition-colors group"
              >
                <div class="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 group-hover:bg-amber-100">
                  <Icon name="lucide:sun" class="w-5 h-5 text-brand-gold-500" />
                </div>
                <div>
                  <div class="text-xs font-bold text-slate-900">{{ $t('nav.solutions_solar_title') }}</div>
                  <div class="text-[11px] text-slate-500 mt-0.5">{{ $t('nav.solutions_solar_desc') }}</div>
                </div>
              </NuxtLink>

              <NuxtLink
                :to="localePath('/solutions/reseaux-ht-bt')"
                class="flex items-start space-x-3 p-3 rounded-xl hover:bg-brand-green-50/60 transition-colors group"
              >
                <div class="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 group-hover:bg-emerald-100">
                  <Icon name="lucide:zap" class="w-5 h-5 text-brand-green-600" />
                </div>
                <div>
                  <div class="text-xs font-bold text-slate-900">{{ $t('nav.solutions_reseaux_title') }}</div>
                  <div class="text-[11px] text-slate-500 mt-0.5">{{ $t('nav.solutions_reseaux_desc') }}</div>
                </div>
              </NuxtLink>

              <NuxtLink
                :to="localePath('/solutions/industrie')"
                class="flex items-start space-x-3 p-3 rounded-xl hover:bg-brand-green-50/60 transition-colors group"
              >
                <div class="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 group-hover:bg-blue-100">
                  <Icon name="lucide:settings" class="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div class="text-xs font-bold text-slate-900">{{ $t('nav.solutions_industrie_title') }}</div>
                  <div class="text-[11px] text-slate-500 mt-0.5">{{ $t('nav.solutions_industrie_desc') }}</div>
                </div>
              </NuxtLink>

              <NuxtLink
                :to="localePath('/solutions/informatique')"
                class="flex items-start space-x-3 p-3 rounded-xl hover:bg-brand-green-50/60 transition-colors group"
              >
                <div class="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center shrink-0 group-hover:bg-indigo-100">
                  <Icon name="lucide:laptop" class="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <div class="text-xs font-bold text-slate-900">{{ $t('nav.solutions_informatique_title') }}</div>
                  <div class="text-[11px] text-slate-500 mt-0.5">{{ $t('nav.solutions_informatique_desc') }}</div>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!-- Dropdown Écosystème (SolSizer, EIMAT, Mobility) -->
          <div
            class="relative"
            @mouseenter="ecosystemMenuOpen = true"
            @mouseleave="ecosystemMenuOpen = false"
          >
            <button
              type="button"
              class="inline-flex items-center space-x-1 py-2 outline-hidden transition-colors"
              :class="isHomePage ? 'hover:text-white' : 'hover:text-brand-green-600'"
            >
              <span>{{ $t('nav.ecosystem') }}</span>
              <Icon
                name="lucide:chevron-down"
                class="w-4 h-4 transition-transform duration-200"
                :class="[
                  isHomePage ? 'text-slate-400' : 'text-slate-400',
                  { 'rotate-180': ecosystemMenuOpen }
                ]"
              />
            </button>

            <div
              v-show="ecosystemMenuOpen"
              class="absolute left-0 mt-1 w-80 bg-white rounded-2xl shadow-hover border border-slate-200/80 p-2 z-50 transition-all duration-200"
            >
              <!-- SolSizer -->
              <a
                href="https://solsizer.app"
                target="_blank"
                rel="noopener"
                class="flex items-start space-x-3 p-3 rounded-xl hover:bg-brand-gold-50/60 transition-colors group"
              >
                <div class="w-9 h-9 rounded-lg bg-brand-gold-100/70 border border-brand-gold-300 flex items-center justify-center shrink-0">
                  <Icon name="lucide:calculator" class="w-5 h-5 text-brand-gold-600" />
                </div>
                <div class="flex-1">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-slate-900">SolSizer</span>
                    <Icon name="lucide:external-link" class="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-gold-600" />
                  </div>
                  <div class="text-[11px] text-slate-500 mt-0.5">{{ $t('nav.ecosystem_solsizer_desc') }}</div>
                </div>
              </a>

              <!-- Eware Mobility -->
              <a
                href="https://eware-mobility.ewaregroup.org"
                target="_blank"
                rel="noopener"
                class="flex items-start space-x-3 p-3 rounded-xl hover:bg-brand-green-50/60 transition-colors group"
              >
                <div class="w-9 h-9 rounded-lg bg-brand-green-100/70 border border-brand-green-300 flex items-center justify-center shrink-0">
                  <Icon name="lucide:car" class="w-5 h-5 text-brand-green-700" />
                </div>
                <div class="flex-1">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-slate-900">Eware Mobility</span>
                    <Icon name="lucide:external-link" class="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-green-700" />
                  </div>
                  <div class="text-[11px] text-slate-500 mt-0.5">{{ $t('nav.ecosystem_mobility_desc') }}</div>
                </div>
              </a>

              <!-- EIMAT -->
              <a
                href="https://eimatafrica.com"
                target="_blank"
                rel="noopener"
                class="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-100 transition-colors group"
              >
                <div class="w-9 h-9 rounded-lg bg-slate-100 border border-slate-300 flex items-center justify-center shrink-0">
                  <Icon name="lucide:store" class="w-5 h-5 text-slate-700" />
                </div>
                <div class="flex-1">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-slate-900">EIMAT Africa</span>
                    <Icon name="lucide:external-link" class="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700" />
                  </div>
                  <div class="text-[11px] text-slate-500 mt-0.5">{{ $t('nav.ecosystem_eimat_desc') }}</div>
                </div>
              </a>
            </div>
          </div>

          <NuxtLink
            :to="localePath('/realisations')"
            class="py-2 transition-colors"
            :class="isHomePage ? 'hover:text-white' : 'hover:text-brand-green-600'"
            active-class="text-brand-green-400 font-bold"
          >
            {{ $t('nav.realizations') }}
          </NuxtLink>

          <NuxtLink
            :to="localePath('/actualites')"
            class="py-2 transition-colors"
            :class="isHomePage ? 'hover:text-white' : 'hover:text-brand-green-600'"
            active-class="text-brand-green-400 font-bold"
          >
            {{ $t('nav.news') }}
          </NuxtLink>

          <NuxtLink
            :to="localePath('/contact')"
            class="py-2 transition-colors"
            :class="isHomePage ? 'hover:text-white' : 'hover:text-brand-green-600'"
            active-class="text-brand-green-400 font-bold"
          >
            {{ $t('nav.contact') }}
          </NuxtLink>
        </nav>

        <!-- Right Side: Filiale Selector, Language Switcher, and CTA Button -->
        <div class="hidden lg:flex items-center space-x-3">
          
          <!-- Sélecteur de Filiale (Togo / Bénin) -->
          <div ref="countryDropdownRef" class="relative">
            <button
              @click="countryDropdownOpen = !countryDropdownOpen"
              type="button"
              class="inline-flex items-center space-x-2 py-2 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer shadow-2xs"
              :class="[
                isHomePage
                  ? 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                  : 'bg-surface-50 border-slate-200 text-slate-700 hover:border-brand-green-500 hover:bg-white'
              ]"
              aria-label="Sélectionner la filiale"
            >
              <FlagTogo v-if="currentBranch === 'togo'" class="w-4 h-2.5" />
              <FlagBenin v-else class="w-4 h-2.5" />
              <span>{{ currentBranch === 'togo' ? 'Togo' : 'Bénin' }}</span>
              <Icon
                name="lucide:chevron-down"
                class="w-3.5 h-3.5 transition-transform duration-200"
                :class="[
                  isHomePage ? 'text-slate-300' : 'text-slate-400',
                  { 'rotate-180': countryDropdownOpen }
                ]"
              />
            </button>

            <!-- Dropdown Menu Filiales -->
            <div
              v-show="countryDropdownOpen"
              class="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-hover border border-slate-200/90 p-2 z-50 text-xs"
            >
              <div class="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                {{ $t('topbar.country_label') }}
              </div>
              <button
                @click="selectBranch('togo')"
                type="button"
                class="w-full flex items-center justify-between p-2 rounded-xl transition-colors text-left cursor-pointer"
                :class="currentBranch === 'togo' ? 'bg-brand-green-50 text-brand-green-800 font-semibold' : 'hover:bg-slate-50 text-slate-700'"
              >
                <div class="flex items-center space-x-2.5">
                  <FlagTogo class="w-5 h-3" />
                  <div>
                    <div class="text-xs font-semibold">Eware Togo</div>
                    <div class="text-[11px] text-slate-400">{{ $t('nav.togo_branch_sub') }}</div>
                  </div>
                </div>
                <Icon v-if="currentBranch === 'togo'" name="lucide:check" class="w-4 h-4 text-brand-green-600" />
              </button>

              <button
                @click="selectBranch('benin')"
                type="button"
                class="w-full flex items-center justify-between p-2 rounded-xl hover:bg-amber-50/60 transition-colors text-left group cursor-pointer"
              >
                <div class="flex items-center space-x-2.5 opacity-85 group-hover:opacity-100">
                  <FlagBenin class="w-5 h-3" />
                  <div>
                    <div class="text-xs font-semibold text-slate-700">Eware Bénin</div>
                    <div class="text-[11px] text-slate-400">{{ $t('nav.benin_branch_sub') }}</div>
                  </div>
                </div>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-gold-100 text-brand-gold-800 border border-brand-gold-300">
                  {{ $t('topbar.soon_badge') }}
                </span>
              </button>
            </div>
          </div>

          <!-- Sélecteur de Langue (FR | EN) -->
          <div
            class="flex items-center rounded-xl p-0.5 border text-xs font-bold transition-colors"
            :class="isHomePage ? 'bg-white/10 border-white/20' : 'bg-surface-100 border-slate-200'"
          >
            <button
              @click="setLocale('fr')"
              type="button"
              class="px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer text-xs"
              :class="[
                locale === 'fr'
                  ? 'bg-brand-green-600 text-white shadow-xs font-bold'
                  : isHomePage ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              ]"
              aria-label="Français"
            >
              FR
            </button>
            <button
              @click="setLocale('en')"
              type="button"
              class="px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer text-xs"
              :class="[
                locale === 'en'
                  ? 'bg-brand-green-600 text-white shadow-xs font-bold'
                  : isHomePage ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              ]"
              aria-label="English"
            >
              EN
            </button>
          </div>

          <!-- CTA Audit Button (Or Solaire) -->
          <NuxtLink
            :to="localePath('/contact')"
            class="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-brand-gold-400 hover:bg-brand-gold-500 text-slate-950 font-bold text-xs shadow-soft transition-all hover:scale-105 active:scale-95"
          >
            <Icon name="lucide:clipboard-check" class="w-4 h-4 text-slate-950" />
            <span>{{ $t('nav.request_audit') }}</span>
          </NuxtLink>
        </div>

        <!-- Mobile Menu Toggle Button (SyndicTG Style) -->
        <div class="lg:hidden flex items-center">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            type="button"
            class="p-2.5 rounded-xl border transition-colors focus:outline-hidden cursor-pointer"
            :class="[
              isHomePage
                ? 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            ]"
            aria-label="Ouvrir le menu mobile"
          >
            <Icon v-if="!mobileMenuOpen" name="lucide:menu" class="w-6 h-6" />
            <Icon v-else name="lucide:x" class="w-6 h-6" />
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile Drawer (Tactile & Clean inspiration SyndicTG) -->
    <div
      v-if="mobileMenuOpen"
      class="lg:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-8 space-y-4 shadow-xl"
    >
      <!-- Country & Lang Context Reminder -->
      <div class="flex items-center justify-between p-3 rounded-xl bg-surface-100 border border-slate-200">
        <div class="flex items-center space-x-2">
          <FlagTogo class="w-5 h-3" />
          <span class="text-xs font-bold text-slate-800">Eware Togo</span>
        </div>
        <div class="flex items-center space-x-1 text-xs">
          <button
            @click="setLocale('fr')"
            class="px-2.5 py-1 rounded font-bold transition-colors"
            :class="locale === 'fr' ? 'bg-brand-green-600 text-white' : 'text-slate-600'"
          >
            FR
          </button>
          <button
            @click="setLocale('en')"
            class="px-2.5 py-1 rounded font-bold transition-colors"
            :class="locale === 'en' ? 'bg-brand-green-600 text-white' : 'text-slate-600'"
          >
            EN
          </button>
        </div>
      </div>

      <!-- Links List -->
      <div class="flex flex-col space-y-2 text-sm font-semibold text-slate-800">
        <NuxtLink :to="localePath('/')" class="p-2.5 rounded-xl hover:bg-slate-50">{{ $t('nav.home') }}</NuxtLink>
        <!-- Solutions Accordion -->
        <div>
          <button
            @click="mobileSolutionsOpen = !mobileSolutionsOpen"
            type="button"
            class="w-full p-2.5 rounded-xl hover:bg-slate-50 flex items-center justify-between cursor-pointer"
          >
            <span>{{ $t('nav.solutions') }}</span>
            <Icon
              name="lucide:chevron-down"
              class="w-4 h-4 text-slate-400 transition-transform duration-200"
              :class="{ 'rotate-180': mobileSolutionsOpen }"
            />
          </button>
          <div v-show="mobileSolutionsOpen" class="pl-3 pr-1 py-1 space-y-1 bg-surface-50 rounded-xl my-1 border border-slate-100 text-xs">
            <NuxtLink :to="localePath('/solutions/solaire')" class="flex items-center space-x-2.5 p-2 rounded-lg hover:bg-white text-slate-700 font-medium">
              <Icon name="lucide:sun" class="w-4 h-4 text-brand-gold-500 shrink-0" />
              <span>{{ $t('nav.solutions_solar_title') }}</span>
            </NuxtLink>
            <NuxtLink :to="localePath('/solutions/reseaux-ht-bt')" class="flex items-center space-x-2.5 p-2 rounded-lg hover:bg-white text-slate-700 font-medium">
              <Icon name="lucide:zap" class="w-4 h-4 text-brand-green-600 shrink-0" />
              <span>{{ $t('nav.solutions_reseaux_title') }}</span>
            </NuxtLink>
            <NuxtLink :to="localePath('/solutions/industrie')" class="flex items-center space-x-2.5 p-2 rounded-lg hover:bg-white text-slate-700 font-medium">
              <Icon name="lucide:settings" class="w-4 h-4 text-blue-600 shrink-0" />
              <span>{{ $t('nav.solutions_industrie_title') }}</span>
            </NuxtLink>
            <NuxtLink :to="localePath('/solutions/informatique')" class="flex items-center space-x-2.5 p-2 rounded-lg hover:bg-white text-slate-700 font-medium">
              <Icon name="lucide:laptop" class="w-4 h-4 text-indigo-600 shrink-0" />
              <span>{{ $t('nav.solutions_informatique_title') }}</span>
            </NuxtLink>
          </div>
        </div>

        <!-- Écosystème Accordion -->
        <div>
          <button
            @click="mobileEcosystemOpen = !mobileEcosystemOpen"
            type="button"
            class="w-full p-2.5 rounded-xl hover:bg-slate-50 flex items-center justify-between cursor-pointer"
          >
            <span>{{ $t('nav.ecosystem') }}</span>
            <Icon
              name="lucide:chevron-down"
              class="w-4 h-4 text-slate-400 transition-transform duration-200"
              :class="{ 'rotate-180': mobileEcosystemOpen }"
            />
          </button>
          <div v-show="mobileEcosystemOpen" class="pl-3 pr-1 py-1 space-y-1 bg-surface-50 rounded-xl my-1 border border-slate-100 text-xs">
            <a
              href="https://solsizer.app"
              target="_blank"
              rel="noopener"
              class="flex items-center justify-between p-2 rounded-lg hover:bg-white text-slate-700 font-medium"
            >
              <div class="flex items-center space-x-2.5">
                <Icon name="lucide:calculator" class="w-4 h-4 text-brand-gold-500 shrink-0" />
                <span>SolSizer</span>
              </div>
              <Icon name="lucide:external-link" class="w-3.5 h-3.5 text-slate-400" />
            </a>
            <a
              href="https://eware-mobility.ewaregroup.org"
              target="_blank"
              rel="noopener"
              class="flex items-center justify-between p-2 rounded-lg hover:bg-white text-slate-700 font-medium"
            >
              <div class="flex items-center space-x-2.5">
                <Icon name="lucide:car" class="w-4 h-4 text-brand-green-600 shrink-0" />
                <span>Eware Mobility</span>
              </div>
              <Icon name="lucide:external-link" class="w-3.5 h-3.5 text-slate-400" />
            </a>
            <a
              href="https://eimatafrica.com"
              target="_blank"
              rel="noopener"
              class="flex items-center justify-between p-2 rounded-lg hover:bg-white text-slate-700 font-medium"
            >
              <div class="flex items-center space-x-2.5">
                <Icon name="lucide:store" class="w-4 h-4 text-slate-600 shrink-0" />
                <span>EIMAT Africa</span>
              </div>
              <Icon name="lucide:external-link" class="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>

        <NuxtLink :to="localePath('/realisations')" class="p-2.5 rounded-xl hover:bg-slate-50">{{ $t('nav.realizations') }}</NuxtLink>
        <NuxtLink :to="localePath('/actualites')" class="p-2.5 rounded-xl hover:bg-slate-50">{{ $t('nav.news') }}</NuxtLink>
        <NuxtLink :to="localePath('/contact')" class="p-2.5 rounded-xl hover:bg-slate-50">{{ $t('nav.contact') }}</NuxtLink>
      </div>

      <!-- Coordonnées rapides (Mobile) -->
      <div class="pt-3 border-t border-slate-200 grid grid-cols-2 gap-2 text-xs">
        <a
          href="tel:+22892405748"
          class="flex items-center justify-center space-x-1.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 font-semibold"
        >
          <Icon name="lucide:phone" class="w-3.5 h-3.5 text-brand-green-600" />
          <span>{{ $t('nav.call') }}</span>
        </a>
        <a
          href="mailto:info@ewaregroup.org"
          class="flex items-center justify-center space-x-1.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 font-semibold"
        >
          <Icon name="lucide:mail" class="w-3.5 h-3.5 text-brand-green-600" />
          <span>{{ $t('nav.email') }}</span>
        </a>
      </div>

      <!-- Ecosystem Apps in Mobile (avec icônes calculatrice & voiture) -->
      <div class="pt-2 border-t border-slate-200 space-y-2">
        <div class="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2">{{ $t('nav.apps_partners') }}</div>
        <div class="grid grid-cols-2 gap-2">
          <a
            href="https://solsizer.app"
            target="_blank"
            rel="noopener"
            class="flex items-center space-x-2.5 p-2.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs font-bold text-slate-900 hover:bg-amber-100/80 transition-colors"
          >
            <div class="w-6 h-6 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
              <Icon name="lucide:calculator" class="w-3.5 h-3.5 text-amber-700" />
            </div>
            <span>SolSizer</span>
          </a>
          <a
            href="https://eware-mobility.ewaregroup.org"
            target="_blank"
            rel="noopener"
            class="flex items-center space-x-2.5 p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs font-bold text-slate-900 hover:bg-emerald-100/80 transition-colors"
          >
            <div class="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
              <Icon name="lucide:car" class="w-3.5 h-3.5 text-emerald-700" />
            </div>
            <span>Mobility</span>
          </a>
        </div>
      </div>

      <!-- Mobile CTA (Or Solaire) -->
      <div class="pt-2">
        <NuxtLink
          :to="localePath('/contact')"
          class="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-brand-gold-400 hover:bg-brand-gold-500 text-slate-950 font-bold text-sm shadow-soft"
        >
          <Icon name="lucide:clipboard-check" class="w-4 h-4 text-slate-950" />
          <span>{{ $t('nav.request_audit') }}</span>
        </NuxtLink>
      </div>
    </div>

    <!-- Modale Informationnelle pour le Bénin (Read-only sans fausse promesse) -->
    <div
      v-if="showBeninModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
      @click.self="showBeninModal = false"
    >
      <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
        <div class="flex items-start justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center">
              <FlagBenin class="w-6 h-4" />
            </div>
            <div>
              <h3 class="text-base font-bold text-slate-900">{{ $t('branches.benin_modal_title') }}</h3>
              <p class="text-xs text-amber-700 font-semibold">{{ $t('branches.benin_status') }}</p>
            </div>
          </div>
          <button
            @click="showBeninModal = false"
            type="button"
            class="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            <Icon name="lucide:x" class="w-5 h-5" />
          </button>
        </div>

        <div class="mt-4 text-xs text-slate-600 leading-relaxed">
          {{ $t('branches.benin_modal_desc') }}
        </div>

        <div class="mt-6 flex items-center justify-end space-x-3">
          <button
            @click="showBeninModal = false"
            type="button"
            class="px-4 py-2 rounded-xl bg-brand-green-600 hover:bg-brand-green-700 text-white text-xs font-semibold transition-colors shadow-xs cursor-pointer"
          >
            {{ $t('branches.close') }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
