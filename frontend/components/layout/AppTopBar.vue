<script setup lang="ts">
import FlagTogo from '~/components/icons/FlagTogo.vue'
import FlagBenin from '~/components/icons/FlagBenin.vue'

const { locale, setLocale } = useI18n()

// Gestion du sélecteur de filiale
const currentBranch = ref<'togo' | 'benin'>('togo')
const showBeninModal = ref(false)
const countryDropdownOpen = ref(false)

const selectBranch = (branch: 'togo' | 'benin') => {
  if (branch === 'benin') {
    // Mode read-only / informationnel pour le Bénin comme demandé
    showBeninModal.value = true
    countryDropdownOpen.value = false
    return
  }
  currentBranch.value = branch
  countryDropdownOpen.value = false
}

// Fermeture du dropdown au clic extérieur
const dropdownRef = ref<HTMLElement | null>(null)
onClickOutside(dropdownRef, () => {
  countryDropdownOpen.value = false
})

const route = useRoute()
const isHomePage = computed(() => {
  const p = route.path.replace(/\/+$/, '')
  return p === '' || p === '/en' || p === '/fr'
})
</script>

<template>
  <div
    class="text-xs transition-colors z-50 relative"
    :class="[
      isHomePage
        ? 'bg-slate-950/20 backdrop-blur-xs border-b border-white/10 text-slate-300'
        : 'bg-surface-100 border-b border-slate-200/80 text-slate-600'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-9">
        
        <!-- Gauche : Sélecteur de filiale / Pays (Togo par défaut, Bénin read-only) -->
        <div class="flex items-center space-x-3">
          <div ref="dropdownRef" class="relative">
            <button
              @click="countryDropdownOpen = !countryDropdownOpen"
              type="button"
              class="inline-flex items-center space-x-2 py-1 px-2.5 rounded-lg border transition-all font-medium shadow-xs"
              :class="[
                isHomePage
                  ? 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                  : 'bg-white border-slate-200 hover:border-brand-green-400 hover:bg-slate-50 text-slate-800'
              ]"
              aria-label="Sélectionner la filiale"
            >
              <template v-if="currentBranch === 'togo'">
                <FlagTogo class="w-4 h-2.5" />
                <span class="text-xs font-semibold">Togo</span>
                <span
                  class="text-[10px] px-1.5 py-0.5 rounded-full font-semibold border hidden sm:inline-block"
                  :class="[
                    isHomePage
                      ? 'bg-brand-green-500/20 text-emerald-300 border-brand-green-400/30'
                      : 'bg-brand-green-50 text-brand-green-700 border-brand-green-200'
                  ]"
                >
                  Siège
                </span>
              </template>
              <Icon
                name="lucide:chevron-down"
                class="w-3.5 h-3.5 transition-transform duration-200"
                :class="[
                  isHomePage ? 'text-slate-300' : 'text-slate-400',
                  { 'rotate-180': countryDropdownOpen }
                ]"
              />
            </button>

            <!-- Dropdown Menu Pays -->
            <div
              v-if="countryDropdownOpen"
              class="absolute left-0 mt-1.5 w-64 bg-white rounded-xl shadow-card border border-slate-200 p-1.5 z-50 text-xs"
            >
              <div class="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                {{ $t('topbar.country_label') }}
              </div>
              
              <!-- Option Togo (Actif) -->
              <button
                @click="selectBranch('togo')"
                type="button"
                class="w-full flex items-center justify-between p-2 rounded-lg transition-colors text-left"
                :class="currentBranch === 'togo' ? 'bg-brand-green-50 text-brand-green-800 font-semibold' : 'hover:bg-slate-50 text-slate-700'"
              >
                <div class="flex items-center space-x-2.5">
                  <FlagTogo class="w-5 h-3" />
                  <div>
                    <div class="text-xs font-semibold">Eware Togo</div>
                    <div class="text-[11px] text-slate-400">Siège de Lomé / Baguida</div>
                  </div>
                </div>
                <Icon v-if="currentBranch === 'togo'" name="lucide:check" class="w-4 h-4 text-brand-green-600" />
              </button>

              <!-- Option Bénin (Read-only / Bientôt disponible) -->
              <button
                @click="selectBranch('benin')"
                type="button"
                class="w-full flex items-center justify-between p-2 rounded-lg hover:bg-amber-50/50 transition-colors text-left group"
              >
                <div class="flex items-center space-x-2.5 opacity-80 group-hover:opacity-100">
                  <FlagBenin class="w-5 h-3" />
                  <div>
                    <div class="text-xs font-semibold text-slate-700">Eware Bénin</div>
                    <div class="text-[11px] text-slate-400">Cotonou & Porto-Novo</div>
                  </div>
                </div>
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-brand-gold-100 text-brand-gold-800 border border-brand-gold-300">
                  {{ $t('topbar.soon_badge') }}
                </span>
              </button>
            </div>
          </div>

          <!-- Apps direct access badges (desktop) -->
          <div class="hidden md:flex items-center space-x-2 pl-2 border-l border-slate-200">
            <span class="text-[11px] text-slate-400 font-medium">Écosystème :</span>
            <a
              href="https://solsizer.app"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded-md hover:bg-brand-gold-50 text-slate-700 hover:text-brand-gold-700 transition-colors"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-brand-gold-400 animate-pulse"></span>
              <span class="font-semibold text-[11px]">SolSizer</span>
            </a>
            <a
              href="https://eware-mobility.ewaregroup.org"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded-md hover:bg-brand-green-50 text-slate-700 hover:text-brand-green-700 transition-colors"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-brand-green-500"></span>
              <span class="font-semibold text-[11px]">Eware Mobility</span>
            </a>
            <a
              href="https://eimatafrica.com"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded-md hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-colors"
            >
              <span class="font-semibold text-[11px]">EIMAT</span>
            </a>
          </div>
        </div>

        <!-- Droite : Téléphone, Email et Commutateur de Langue FR / EN -->
        <div class="flex items-center space-x-4">
          <!-- Coordonnées directes Lomé (Desktop) -->
          <div class="hidden lg:flex items-center space-x-4 text-xs">
            <a
              href="tel:+22892405748"
              class="inline-flex items-center space-x-1 transition-colors"
              :class="isHomePage ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-brand-green-600'"
            >
              <Icon name="lucide:phone" class="w-3.5 h-3.5" :class="isHomePage ? 'text-emerald-400' : 'text-brand-green-600'" />
              <span>+228 92 40 57 48</span>
            </a>
            <a
              href="mailto:info@ewaregroup.org"
              class="inline-flex items-center space-x-1 transition-colors"
              :class="isHomePage ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-brand-green-600'"
            >
              <Icon name="lucide:mail" class="w-3.5 h-3.5" :class="isHomePage ? 'text-emerald-400' : 'text-brand-green-600'" />
              <span>info@ewaregroup.org</span>
            </a>
          </div>

          <!-- Sélecteur de Langue SVG & Textuel (FR | EN) -->
          <div
            class="flex items-center rounded-lg p-0.5 shadow-xs border transition-colors"
            :class="isHomePage ? 'bg-white/10 border-white/20' : 'bg-white border-slate-200'"
          >
            <button
              @click="setLocale('fr')"
              type="button"
              class="px-2 py-0.5 rounded text-[11px] font-bold transition-colors cursor-pointer"
              :class="[
                locale === 'fr'
                  ? 'bg-brand-green-600 text-white shadow-xs'
                  : isHomePage ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              ]"
              aria-label="Français"
            >
              FR
            </button>
            <button
              @click="setLocale('en')"
              type="button"
              class="px-2 py-0.5 rounded text-[11px] font-bold transition-colors cursor-pointer"
              :class="[
                locale === 'en'
                  ? 'bg-brand-green-600 text-white shadow-xs'
                  : isHomePage ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              ]"
              aria-label="English"
            >
              EN
            </button>
          </div>
        </div>

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
            class="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100"
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
            class="px-4 py-2 rounded-xl bg-brand-green-600 hover:bg-brand-green-700 text-white text-xs font-semibold transition-colors shadow-xs"
          >
            {{ $t('branches.close') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
