<script setup lang="ts">
import FlagTogo from '~/components/icons/FlagTogo.vue'
import FlagBenin from '~/components/icons/FlagBenin.vue'

const { locale, setLocale } = useI18n()
const localePath = useLocalePath()

const mobileMenuOpen = ref(false)
const solutionsMenuOpen = ref(false)
const ecosystemMenuOpen = ref(false)

// Fermer le menu mobile lors des changements de page
const route = useRoute()
watch(() => route.fullPath, () => {
  mobileMenuOpen.value = false
})
</script>

<template>
  <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        
        <!-- Logo Eware Group -->
        <NuxtLink :to="localePath('/')" class="flex items-center space-x-3 shrink-0 group">
          <div class="w-11 h-11 rounded-xl bg-brand-green-600 flex items-center justify-center shadow-card group-hover:scale-105 transition-transform">
            <!-- Emblème Énergie Eware en SVG pur -->
            <svg viewBox="0 0 24 24" fill="none" class="w-6 h-6 text-white stroke-current stroke-2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div class="flex flex-col">
            <span class="text-xl font-extrabold tracking-tight text-slate-900 leading-none">
              EWARE <span class="text-brand-green-600">GROUP</span>
            </span>
            <span class="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mt-1">
              Transition & Ingénierie
            </span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation Links (Inter / Plus Jakarta Sans) -->
        <nav class="hidden lg:flex items-center space-x-8 text-sm font-semibold text-slate-700">
          
          <NuxtLink
            :to="localePath('/')"
            class="hover:text-brand-green-600 transition-colors py-2"
            active-class="text-brand-green-600 font-bold"
          >
            Accueil
          </NuxtLink>

          <!-- Dropdown Solutions -->
          <div
            class="relative"
            @mouseenter="solutionsMenuOpen = true"
            @mouseleave="solutionsMenuOpen = false"
          >
            <button
              type="button"
              class="inline-flex items-center space-x-1 hover:text-brand-green-600 transition-colors py-2 outline-hidden"
            >
              <span>{{ $t('nav.solutions') }}</span>
              <Icon name="lucide:chevron-down" class="w-4 h-4 text-slate-400 transition-transform duration-200" :class="{ 'rotate-180': solutionsMenuOpen }" />
            </button>

            <div
              v-show="solutionsMenuOpen"
              class="absolute left-0 mt-1 w-72 bg-white rounded-2xl shadow-hover border border-slate-200/80 p-2 z-50 transition-all duration-200"
            >
              <NuxtLink
                :to="localePath('/solutions/solaire')"
                class="flex items-start space-x-3 p-3 rounded-xl hover:bg-brand-green-50/60 transition-colors group"
              >
                <div class="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 group-hover:bg-amber-100">
                  <Icon name="lucide:sun" class="w-5 h-5 text-brand-gold-500" />
                </div>
                <div>
                  <div class="text-xs font-bold text-slate-900">Solaire & Photovoltaïque</div>
                  <div class="text-[11px] text-slate-500 mt-0.5">Centrales industrielles et toitures solaires</div>
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
                  <div class="text-xs font-bold text-slate-900">Réseaux Électriques HT/BT</div>
                  <div class="text-[11px] text-slate-500 mt-0.5">Postes de transformation & distribution</div>
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
                  <div class="text-xs font-bold text-slate-900">Génie Industriel & Froid</div>
                  <div class="text-[11px] text-slate-500 mt-0.5">Maintenance, climatisation et audit</div>
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
              class="inline-flex items-center space-x-1 hover:text-brand-green-600 transition-colors py-2 outline-hidden"
            >
              <span>{{ $t('nav.ecosystem') }}</span>
              <Icon name="lucide:chevron-down" class="w-4 h-4 text-slate-400 transition-transform duration-200" :class="{ 'rotate-180': ecosystemMenuOpen }" />
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
                  <div class="text-[11px] text-slate-500 mt-0.5">Dimensionnement solaire & annuaire installateurs</div>
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
                  <div class="text-[11px] text-slate-500 mt-0.5">Super-App : VTC, Zémidjan & Immobilier à Lomé</div>
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
                  <Icon name="lucide:graduation-cap" class="w-5 h-5 text-slate-700" />
                </div>
                <div class="flex-1">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-slate-900">EIMAT Africa</span>
                    <Icon name="lucide:external-link" class="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700" />
                  </div>
                  <div class="text-[11px] text-slate-500 mt-0.5">École d'ingénierie & formations certifiées</div>
                </div>
              </a>
            </div>
          </div>

          <NuxtLink
            :to="localePath('/realisations')"
            class="hover:text-brand-green-600 transition-colors py-2"
            active-class="text-brand-green-600 font-bold"
          >
            {{ $t('nav.realizations') }}
          </NuxtLink>

          <NuxtLink
            :to="localePath('/actualites')"
            class="hover:text-brand-green-600 transition-colors py-2"
            active-class="text-brand-green-600 font-bold"
          >
            {{ $t('nav.news') }}
          </NuxtLink>

          <NuxtLink
            :to="localePath('/contact')"
            class="hover:text-brand-green-600 transition-colors py-2"
            active-class="text-brand-green-600 font-bold"
          >
            {{ $t('nav.contact') }}
          </NuxtLink>
        </nav>

        <!-- Right Side: CTA Button (Or Solaire / Vert Eware) -->
        <div class="hidden lg:flex items-center space-x-4">
          <NuxtLink
            :to="localePath('/contact')"
            class="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-brand-gold-400 hover:bg-brand-gold-500 text-slate-950 font-bold text-xs shadow-soft transition-all hover:scale-105 active:scale-95"
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
            class="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 focus:outline-hidden"
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
          <span class="text-xs font-bold text-slate-800">Eware Togo (Siège)</span>
        </div>
        <div class="flex items-center space-x-1 text-xs">
          <button
            @click="setLocale('fr')"
            class="px-2 py-1 rounded font-bold"
            :class="locale === 'fr' ? 'bg-brand-green-600 text-white' : 'text-slate-600'"
          >
            FR
          </button>
          <button
            @click="setLocale('en')"
            class="px-2 py-1 rounded font-bold"
            :class="locale === 'en' ? 'bg-brand-green-600 text-white' : 'text-slate-600'"
          >
            EN
          </button>
        </div>
      </div>

      <!-- Links List -->
      <div class="flex flex-col space-y-2 text-sm font-semibold text-slate-800">
        <NuxtLink :to="localePath('/')" class="p-2.5 rounded-xl hover:bg-slate-50">Accueil</NuxtLink>
        <NuxtLink :to="localePath('/solutions/solaire')" class="p-2.5 rounded-xl hover:bg-slate-50 flex items-center justify-between">
          <span>Solutions Solaires & HT/BT</span>
          <Icon name="lucide:chevron-right" class="w-4 h-4 text-slate-400" />
        </NuxtLink>
        <NuxtLink :to="localePath('/realisations')" class="p-2.5 rounded-xl hover:bg-slate-50">{{ $t('nav.realizations') }}</NuxtLink>
        <NuxtLink :to="localePath('/actualites')" class="p-2.5 rounded-xl hover:bg-slate-50">{{ $t('nav.news') }}</NuxtLink>
        <NuxtLink :to="localePath('/contact')" class="p-2.5 rounded-xl hover:bg-slate-50">{{ $t('nav.contact') }}</NuxtLink>
      </div>

      <!-- Ecosystem Apps in Mobile -->
      <div class="pt-3 border-t border-slate-200 space-y-2">
        <div class="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2">Apps & Partenaires</div>
        <div class="grid grid-cols-2 gap-2">
          <a
            href="https://solsizer.app"
            target="_blank"
            rel="noopener"
            class="flex items-center space-x-2 p-2.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs font-bold text-slate-900"
          >
            <span class="w-2 h-2 rounded-full bg-brand-gold-500"></span>
            <span>SolSizer</span>
          </a>
          <a
            href="https://eware-mobility.ewaregroup.org"
            target="_blank"
            rel="noopener"
            class="flex items-center space-x-2 p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs font-bold text-slate-900"
          >
            <span class="w-2 h-2 rounded-full bg-brand-green-600"></span>
            <span>Mobility</span>
          </a>
        </div>
      </div>

      <!-- Mobile CTA -->
      <div class="pt-2">
        <NuxtLink
          :to="localePath('/contact')"
          class="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-brand-gold-400 text-slate-950 font-bold text-sm shadow-soft"
        >
          <Icon name="lucide:clipboard-check" class="w-4 h-4" />
          <span>{{ $t('nav.request_audit') }}</span>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
