<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
  <section class="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-white via-surface-50 to-surface-100 border-b border-slate-200/80">
    <!-- Subtle Background Glows (Vert Eware & Or Solaire) -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div class="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-brand-green-100/40 blur-3xl"></div>
      <div class="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-brand-gold-100/50 blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Main Pitch Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left Column: Value Proposition & CTAs (7 cols) -->
        <div class="lg:col-span-7 flex flex-col items-start">
          
          <!-- Kicker Tag -->
          <div class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-brand-green-50 border border-brand-green-200/80 text-brand-green-700 text-xs font-bold tracking-wide uppercase">
            <span class="w-2 h-2 rounded-full bg-brand-green-600 animate-pulse"></span>
            <span>{{ $t('hero.kicker') }}</span>
          </div>

          <!-- Main Headline -->
          <h1 class="mt-6 text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            {{ $t('hero.title_start') }}
            <span class="text-brand-green-600">{{ $t('hero.title_highlight') }}</span>
            {{ $t('hero.title_end') }}
          </h1>

          <!-- Subtitle -->
          <p class="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
            {{ $t('hero.subtitle') }}
          </p>

          <!-- CTAs -->
          <div class="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
            <NuxtLink
              :to="localePath('/solutions/solaire')"
              class="inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl bg-brand-green-600 hover:bg-brand-green-700 text-white font-bold text-sm shadow-card transition-all hover:scale-105 active:scale-95"
            >
              <span>{{ $t('hero.cta_solutions') }}</span>
              <Icon name="lucide:arrow-right" class="w-4 h-4" />
            </NuxtLink>

            <NuxtLink
              :to="localePath('/contact')"
              class="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-200 shadow-soft transition-all"
            >
              <Icon name="lucide:phone-call" class="w-4 h-4 text-brand-green-600" />
              <span>{{ $t('hero.cta_contact') }}</span>
            </NuxtLink>
          </div>

          <!-- Trust Badges (Togo & Bénin) -->
          <div class="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
            <div class="flex items-center space-x-1.5">
              <Icon name="lucide:shield-check" class="w-4 h-4 text-brand-green-600" />
              <span>Normes & Sécurité Industrielle</span>
            </div>
            <div class="flex items-center space-x-1.5">
              <Icon name="lucide:cpu" class="w-4 h-4 text-brand-gold-500" />
              <span>Technologies Propriétaires</span>
            </div>
            <div class="flex items-center space-x-1.5">
              <Icon name="lucide:globe" class="w-4 h-4 text-slate-400" />
              <span>Pôle Togo & Expansion Bénin</span>
            </div>
          </div>

        </div>

        <!-- Right Column: Interactive Ecosystem Highlight Cards (5 cols) -->
        <div class="lg:col-span-5 flex flex-col gap-4">
          
          <!-- Card 1: SolSizer (Gold accent) -->
          <a
            href="https://solsizer.app"
            target="_blank"
            rel="noopener"
            class="clean-card clean-card-hover p-5 flex items-start space-x-4 group"
          >
            <div class="w-12 h-12 rounded-xl bg-brand-gold-100 border border-brand-gold-300 flex items-center justify-center shrink-0">
              <Icon name="lucide:calculator" class="w-6 h-6 text-brand-gold-600" />
            </div>
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold uppercase tracking-wider text-brand-gold-700">Tech Solaire</span>
                <span class="text-[11px] font-semibold text-slate-400 group-hover:text-brand-gold-600 flex items-center gap-1">
                  solsizer.app <Icon name="lucide:arrow-up-right" class="w-3.5 h-3.5" />
                </span>
              </div>
              <h3 class="text-base font-bold text-slate-900 mt-1">SolSizer Africa</h3>
              <p class="text-xs text-slate-500 mt-1 leading-snug">
                Logiciel de dimensionnement photovoltaïque et annuaire certifié des installateurs solaires.
              </p>
            </div>
          </a>

          <!-- Card 2: Eware Mobility (Green accent) -->
          <a
            href="https://eware-mobility.ewaregroup.org"
            target="_blank"
            rel="noopener"
            class="clean-card clean-card-hover p-5 flex items-start space-x-4 group"
          >
            <div class="w-12 h-12 rounded-xl bg-brand-green-100 border border-brand-green-300 flex items-center justify-center shrink-0">
              <Icon name="lucide:car" class="w-6 h-6 text-brand-green-700" />
            </div>
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold uppercase tracking-wider text-brand-green-700">Mobilité & Smart City</span>
                <span class="text-[11px] font-semibold text-slate-400 group-hover:text-brand-green-700 flex items-center gap-1">
                  Lomé & Bénin <Icon name="lucide:arrow-up-right" class="w-3.5 h-3.5" />
                </span>
              </div>
              <h3 class="text-base font-bold text-slate-900 mt-1">Eware Mobility</h3>
              <p class="text-xs text-slate-500 mt-1 leading-snug">
                Super-app urbaine : VTC, Moto-taxi Zémidjan et immobilier certifié sans surprise tarifaire.
              </p>
            </div>
          </a>

          <!-- Card 3: EIMAT Africa (Institutional Slate accent) -->
          <a
            href="https://eimatafrica.com"
            target="_blank"
            rel="noopener"
            class="clean-card clean-card-hover p-5 flex items-start space-x-4 group"
          >
            <div class="w-12 h-12 rounded-xl bg-slate-100 border border-slate-300 flex items-center justify-center shrink-0">
              <Icon name="lucide:graduation-cap" class="w-6 h-6 text-slate-700" />
            </div>
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold uppercase tracking-wider text-slate-600">Formation & Talents</span>
                <span class="text-[11px] font-semibold text-slate-400 group-hover:text-slate-800 flex items-center gap-1">
                  eimatafrica.com <Icon name="lucide:arrow-up-right" class="w-3.5 h-3.5" />
                </span>
              </div>
              <h3 class="text-base font-bold text-slate-900 mt-1">EIMAT Africa</h3>
              <p class="text-xs text-slate-500 mt-1 leading-snug">
                Institut d'excellence formant les futurs ingénieurs et techniciens aux métiers de l'énergie.
              </p>
            </div>
          </a>

        </div>

      </div>

      <!-- Impact Metrics Banner (Inspiration SyndicTG - Chiffres Clés Aérés) -->
      <div class="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6">
        
        <div class="clean-card p-5 text-center">
          <div class="text-2xl sm:text-3xl font-extrabold text-brand-green-700 leading-none">+12 MWc</div>
          <div class="text-xs font-semibold text-slate-500 mt-2">{{ $t('hero.stat_solar') }}</div>
        </div>

        <div class="clean-card p-5 text-center">
          <div class="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-none">Togo & Bénin</div>
          <div class="text-xs font-semibold text-slate-500 mt-2">{{ $t('hero.stat_presence') }}</div>
        </div>

        <div class="clean-card p-5 text-center">
          <div class="text-2xl sm:text-3xl font-extrabold text-brand-gold-500 leading-none">+1 200</div>
          <div class="text-xs font-semibold text-slate-500 mt-2">{{ $t('hero.stat_talents') }}</div>
        </div>

        <div class="clean-card p-5 text-center">
          <div class="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-none">02 Apps Tech</div>
          <div class="text-xs font-semibold text-slate-500 mt-2">{{ $t('hero.stat_apps') }}</div>
        </div>

      </div>

    </div>
  </section>
</template>
