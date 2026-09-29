<script setup lang="ts">
import FlagTogo from '~/components/icons/FlagTogo.vue'
import FlagBenin from '~/components/icons/FlagBenin.vue'
</script>

<template>
  <section class="py-20 bg-surface-50 border-b border-slate-200/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header Centré -->
      <div class="text-center max-w-3xl mx-auto">
        <span class="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-brand-green-700 bg-brand-green-50 px-3.5 py-1 rounded-full border border-brand-green-200">
          <Icon name="lucide:sparkles" class="w-3.5 h-3.5 text-brand-green-600" />
          <span>{{ $t('ecosystem.badge') }}</span>
        </span>
        <h2 class="mt-4 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {{ $t('ecosystem.title') }}
        </h2>
        <p class="mt-3 text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto">
          {{ $t('ecosystem.subtitle') }}
        </p>
      </div>

      <!-- 3 Ecosystem Pillars Detailed -->
      <div class="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Pillar 1: SolSizer (Or Solaire) -->
        <div class="clean-card p-8 flex flex-col justify-between border-t-4 border-t-brand-gold-400">
          <div>
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold uppercase tracking-wider text-brand-gold-800 bg-brand-gold-50 px-2.5 py-1 rounded-md border border-brand-gold-200">
                {{ $t('ecosystem.tag_saas') }}
              </span>
              <Icon name="lucide:calculator" class="w-6 h-6 text-brand-gold-500" />
            </div>

            <h3 class="mt-6 text-xl font-bold text-slate-900">{{ $t('ecosystem.solsizer_title') }}</h3>
            <p class="mt-2 text-xs text-slate-500 leading-relaxed">
              {{ $t('ecosystem.solsizer_desc') }}
            </p>

            <div class="mt-6 p-4 rounded-xl bg-surface-100 border border-slate-200/80 space-y-2 text-xs text-slate-700 font-medium">
              <div class="flex items-center space-x-2">
                <Icon name="lucide:check" class="w-4 h-4 text-brand-gold-600" />
                <span>{{ $t('ecosystem.solsizer_feat1') }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <Icon name="lucide:check" class="w-4 h-4 text-brand-gold-600" />
                <span>{{ $t('ecosystem.solsizer_feat2') }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <Icon name="lucide:check" class="w-4 h-4 text-brand-gold-600" />
                <span>{{ $t('ecosystem.solsizer_feat3') }}</span>
              </div>
            </div>
          </div>

          <div class="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
            <a
              href="https://solsizer.app"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-brand-gold-400 hover:bg-brand-gold-500 text-slate-950 font-bold text-xs shadow-soft transition-all"
            >
              <span>{{ $t('ecosystem.access_solsizer') }}</span>
              <Icon name="lucide:arrow-up-right" class="w-4 h-4" />
            </a>
            <span class="text-[11px] font-semibold text-slate-400">solsizer.app</span>
          </div>
        </div>

        <!-- Pillar 2: Eware Mobility -->
        <div class="clean-card p-8 flex flex-col justify-between border-t-4 border-t-brand-green-600">
          <div>
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold uppercase tracking-wider text-brand-green-700 bg-brand-green-50 px-2.5 py-1 rounded-md border border-brand-green-200">
                {{ $t('ecosystem.tag_mobility') }}
              </span>
              <Icon name="lucide:car" class="w-6 h-6 text-brand-green-600" />
            </div>

            <h3 class="mt-6 text-xl font-bold text-slate-900">{{ $t('ecosystem.mobility_title') }}</h3>
            <p class="mt-2 text-xs text-slate-500 leading-relaxed">
              {{ $t('ecosystem.mobility_desc') }}
            </p>

            <div class="mt-6 p-4 rounded-xl bg-surface-100 border border-slate-200/80 space-y-2 text-xs text-slate-700 font-medium">
              <div class="flex items-center space-x-2">
                <Icon name="lucide:check" class="w-4 h-4 text-brand-green-600" />
                <span>{{ $t('ecosystem.mobility_feat1') }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <Icon name="lucide:check" class="w-4 h-4 text-brand-green-600" />
                <span>{{ $t('ecosystem.mobility_feat2') }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <Icon name="lucide:check" class="w-4 h-4 text-brand-green-600" />
                <span>{{ $t('ecosystem.mobility_feat3') }}</span>
              </div>
            </div>

            <div class="mt-4 flex items-center space-x-2 text-xs font-semibold text-slate-600">
              <span class="text-[11px] text-slate-400">{{ $t('ecosystem.zones_covered') }}</span>
              <span class="inline-flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-slate-200">
                <FlagTogo class="w-3.5 h-2" /> Lomé
              </span>
              <span class="inline-flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-slate-200">
                <FlagBenin class="w-3.5 h-2" /> Porto-Novo
              </span>
            </div>
          </div>

          <div class="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
            <a
              href="https://eware-mobility.ewaregroup.org"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-brand-green-600 hover:bg-brand-green-700 text-white font-bold text-xs shadow-card transition-all"
            >
              <span>{{ $t('ecosystem.discover_app') }}</span>
              <Icon name="lucide:arrow-up-right" class="w-4 h-4" />
            </a>
            <span class="text-[11px] font-semibold text-slate-400">ewaregroup.org</span>
          </div>
        </div>

        <!-- Pillar 3: EIMAT Africa -->
        <div class="clean-card p-8 flex flex-col justify-between border-t-4 border-t-slate-800">
          <div>
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                {{ $t('ecosystem.tag_supply') }}
              </span>
              <Icon name="lucide:store" class="w-6 h-6 text-slate-800" />
            </div>

            <h3 class="mt-6 text-xl font-bold text-slate-900">{{ $t('ecosystem.eimat_title') }}</h3>
            <p class="mt-2 text-xs text-slate-500 leading-relaxed">
              {{ $t('ecosystem.eimat_desc') }}
            </p>

            <div class="mt-6 p-4 rounded-xl bg-surface-100 border border-slate-200/80 space-y-2 text-xs text-slate-700 font-medium">
              <div class="flex items-center space-x-2">
                <Icon name="lucide:check" class="w-4 h-4 text-slate-800" />
                <span>{{ $t('ecosystem.eimat_feat1') }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <Icon name="lucide:check" class="w-4 h-4 text-slate-800" />
                <span>{{ $t('ecosystem.eimat_feat2') }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <Icon name="lucide:check" class="w-4 h-4 text-slate-800" />
                <span>{{ $t('ecosystem.eimat_feat3') }}</span>
              </div>
            </div>
          </div>

          <div class="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
            <a
              href="https://eimatafrica.com"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-soft transition-all"
            >
              <span>{{ $t('ecosystem.explore') }}</span>
              <Icon name="lucide:arrow-up-right" class="w-4 h-4" />
            </a>
            <span class="text-[11px] font-semibold text-slate-400">eimatafrica.com</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
