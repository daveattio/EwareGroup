<script setup lang="ts">
import FlagTogo from '~/components/icons/FlagTogo.vue'
import FlagBenin from '~/components/icons/FlagBenin.vue'

const localePath = useLocalePath()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-white border-t border-slate-200 text-slate-600 text-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        
        <!-- Brand & Description (4 cols) -->
        <div class="lg:col-span-4 space-y-4">
          <NuxtLink :to="localePath('/')" class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-brand-green-600 flex items-center justify-center text-white shadow-soft">
              <svg viewBox="0 0 24 24" fill="none" class="w-5 h-5 text-white stroke-current stroke-2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <span class="text-xl font-extrabold text-slate-900 tracking-tight">
              EWARE <span class="text-brand-green-600">GROUP</span>
            </span>
          </NuxtLink>

          <p class="text-xs text-slate-500 leading-relaxed max-w-sm">
            Groupe panafricain de référence spécialisé en ingénierie énergétique, installations solaires, réseaux électriques HT/BT, formation professionnelle et technologies de mobilité.
          </p>

          <div class="flex items-center space-x-3 pt-2">
            <div class="flex items-center space-x-2 text-xs font-semibold text-slate-700 bg-surface-100 px-3 py-1.5 rounded-lg border border-slate-200">
              <FlagTogo class="w-4 h-2.5" />
              <span>Togo (Siège)</span>
            </div>
            <div class="flex items-center space-x-2 text-xs font-semibold text-slate-500 bg-surface-100 px-3 py-1.5 rounded-lg border border-slate-200">
              <FlagBenin class="w-4 h-2.5" />
              <span>Bénin (Expansion)</span>
            </div>
          </div>
        </div>

        <!-- Solutions & Métiers (3 cols) -->
        <div class="lg:col-span-3 space-y-3">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900">Solutions & Métiers</h4>
          <ul class="space-y-2 text-xs text-slate-500">
            <li><NuxtLink :to="localePath('/solutions/solaire')" class="hover:text-brand-green-600 transition-colors">Solaire Photovoltaïque & Hybride</NuxtLink></li>
            <li><NuxtLink :to="localePath('/solutions/reseaux-ht-bt')" class="hover:text-brand-green-600 transition-colors">Réseaux Électriques HT/BT & Postes</NuxtLink></li>
            <li><NuxtLink :to="localePath('/solutions/industrie')" class="hover:text-brand-green-600 transition-colors">Génie Climatique & Maintenance Industrielle</NuxtLink></li>
            <li><NuxtLink :to="localePath('/realisations')" class="hover:text-brand-green-600 transition-colors">Études de Cas & Chantiers</NuxtLink></li>
          </ul>
        </div>

        <!-- Écosystème & Apps (2 cols) -->
        <div class="lg:col-span-2 space-y-3">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900">Écosystème</h4>
          <ul class="space-y-2 text-xs text-slate-500">
            <li><a href="https://solsizer.app" target="_blank" rel="noopener" class="hover:text-brand-gold-600 transition-colors flex items-center gap-1.5">SolSizer <Icon name="lucide:external-link" class="w-3 h-3 text-slate-400" /></a></li>
            <li><a href="https://eware-mobility.ewaregroup.org" target="_blank" rel="noopener" class="hover:text-brand-green-600 transition-colors flex items-center gap-1.5">Eware Mobility <Icon name="lucide:external-link" class="w-3 h-3 text-slate-400" /></a></li>
            <li><a href="https://eimatafrica.com" target="_blank" rel="noopener" class="hover:text-slate-800 transition-colors flex items-center gap-1.5">EIMAT Africa <Icon name="lucide:external-link" class="w-3 h-3 text-slate-400" /></a></li>
            <li><NuxtLink :to="localePath('/actualites')" class="hover:text-brand-green-600 transition-colors">Actualités & Blog</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact & Coordonnées Togo (3 cols) -->
        <div class="lg:col-span-3 space-y-3">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900">Siège Social Togo</h4>
          <ul class="space-y-2.5 text-xs text-slate-600">
            <li class="flex items-start space-x-2">
              <Icon name="lucide:map-pin" class="w-4 h-4 text-brand-green-600 shrink-0 mt-0.5" />
              <span>13 BP 93, Derrière le CEG Baguida centre, Lomé, Togo</span>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="lucide:phone" class="w-4 h-4 text-brand-green-600 shrink-0" />
              <a href="tel:+22892405748" class="hover:text-brand-green-600 transition-colors">+228 92 40 57 48</a>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="lucide:mail" class="w-4 h-4 text-brand-green-600 shrink-0" />
              <a href="mailto:info@ewaregroup.org" class="hover:text-brand-green-600 transition-colors">info@ewaregroup.org</a>
            </li>
            <li class="pt-2">
              <NuxtLink
                :to="localePath('/contact')"
                class="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-green-700 hover:text-brand-green-800"
              >
                <span>Localisation Google Maps & Devis</span>
                <Icon name="lucide:arrow-right" class="w-3.5 h-3.5" />
              </NuxtLink>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom Bar with Copyright -->
      <div class="mt-14 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
        <p>&copy; {{ currentYear }} Eware Group. Tous droits réservés.</p>
        <div class="flex items-center space-x-6">
          <span>Lomé • Porto-Novo • Cotonou</span>
          <NuxtLink :to="localePath('/mentions-legales')" class="hover:text-slate-600 transition-colors">Mentions légales</NuxtLink>
        </div>
      </div>

    </div>
  </footer>
</template>
