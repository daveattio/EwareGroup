<script setup lang="ts">
import IconLinkedIn from '~/components/icons/social/IconLinkedIn.vue'
import IconWhatsApp from '~/components/icons/social/IconWhatsApp.vue'
import IconFacebook from '~/components/icons/social/IconFacebook.vue'
import IconInstagram from '~/components/icons/social/IconInstagram.vue'
import IconTwitter from '~/components/icons/social/IconTwitter.vue'
import IconTikTok from '~/components/icons/social/IconTikTok.vue'

const localePath = useLocalePath()
const currentYear = new Date().getFullYear()

// Liens des Réseaux Sociaux Officiels d'Eware Group avec leurs vraies couleurs & vrais logos
const socialNetworks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/ewaregroup',
    component: IconLinkedIn,
    colorClass: 'bg-[#0A66C2] hover:bg-[#004182]',
    iconColor: 'text-white',
    iconSize: 'w-4 h-4'
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/22892405748',
    component: IconWhatsApp,
    colorClass: 'bg-[#25D366] hover:bg-[#1DA851]',
    iconColor: 'text-white',
    iconSize: 'w-4 h-4'
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/ewaregroup',
    component: IconFacebook,
    colorClass: 'bg-[#1877F2] hover:bg-[#0d65d9]',
    iconColor: 'text-white',
    iconSize: 'w-4 h-4'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/ewaregroup',
    component: IconInstagram,
    colorClass: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90',
    iconColor: 'text-white',
    iconSize: 'w-4 h-4'
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/ewaregroup',
    component: IconTwitter,
    colorClass: 'bg-[#000000] hover:bg-slate-800',
    iconColor: 'text-white',
    iconSize: 'w-3.5 h-3.5'
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@ewaregroup',
    component: IconTikTok,
    colorClass: 'bg-[#000000] hover:bg-slate-800',
    iconColor: 'text-white',
    iconSize: 'w-4 h-4'
  }
]
</script>

<template>
  <footer class="bg-white border-t border-slate-200 text-slate-600 text-sm">
    
    <!-- Corps Principal du Footer -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        
        <!-- Brand & Description (4 cols) -->
        <div class="lg:col-span-4 space-y-4">
          <NuxtLink :to="localePath('/')" class="inline-flex items-center group">
            <img
              src="/logo-eware.png"
              alt="Eware Group"
              class="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </NuxtLink>

          <p class="text-xs text-slate-500 leading-relaxed max-w-sm">
            {{ $t('footer.desc') }}
          </p>
        </div>

        <!-- Solutions & Métiers (3 cols) -->
        <div class="lg:col-span-3 space-y-3">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900">{{ $t('footer.col_solutions') }}</h4>
          <ul class="space-y-2.5 text-xs text-slate-500">
            <li><NuxtLink :to="localePath('/solutions/solaire')" class="hover:text-brand-green-600 transition-colors">{{ $t('footer.sol_solar') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/solutions/reseaux-ht-bt')" class="hover:text-brand-green-600 transition-colors">{{ $t('footer.sol_reseaux') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/solutions/industrie')" class="hover:text-brand-green-600 transition-colors">{{ $t('footer.sol_industrie') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/realisations')" class="hover:text-brand-green-600 transition-colors">{{ $t('footer.sol_realizations') }}</NuxtLink></li>
          </ul>
        </div>

        <!-- Écosystème & Apps (2 cols) -->
        <div class="lg:col-span-2 space-y-3">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900">{{ $t('footer.col_ecosystem') }}</h4>
          <ul class="space-y-2.5 text-xs text-slate-500">
            <li>
              <a href="https://solsizer.app" target="_blank" rel="noopener" class="hover:text-brand-gold-600 transition-colors flex items-center gap-1.5 font-medium">
                <span class="w-1.5 h-1.5 rounded-full bg-brand-gold-500"></span>
                <span>SolSizer</span>
                <Icon name="lucide:external-link" class="w-3 h-3 text-slate-400" />
              </a>
            </li>
            <li>
              <a href="https://eware-mobility.ewaregroup.org" target="_blank" rel="noopener" class="hover:text-brand-green-600 transition-colors flex items-center gap-1.5 font-medium">
                <span class="w-1.5 h-1.5 rounded-full bg-brand-green-600"></span>
                <span>Eware Mobility</span>
                <Icon name="lucide:external-link" class="w-3 h-3 text-slate-400" />
              </a>
            </li>
            <li>
              <a href="https://eimatafrica.com" target="_blank" rel="noopener" class="hover:text-slate-800 transition-colors flex items-center gap-1.5 font-medium">
                <span class="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                <span>EIMAT Africa</span>
                <Icon name="lucide:external-link" class="w-3 h-3 text-slate-400" />
              </a>
            </li>
            <li>
              <NuxtLink :to="localePath('/actualites')" class="hover:text-brand-green-600 transition-colors">
                {{ $t('footer.eco_news') }}
              </NuxtLink>
            </li>
            <li>
              <a href="#avis" class="hover:text-brand-green-600 transition-colors">
                {{ $t('footer.eco_reviews') }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact & Coordonnées (3 cols) -->
        <div class="lg:col-span-3 space-y-3">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900">{{ $t('footer.col_contact') }}</h4>
          <ul class="space-y-2.5 text-xs text-slate-600">
            <li class="flex items-start space-x-2.5">
              <Icon name="lucide:map-pin" class="w-4 h-4 text-brand-green-600 shrink-0 mt-0.5" />
              <span class="leading-snug">13 BP 93, Derrière le CEG Baguida centre, Lomé, Togo</span>
            </li>
            <li class="flex items-center space-x-2.5">
              <Icon name="lucide:phone" class="w-4 h-4 text-brand-green-600 shrink-0" />
              <a href="tel:+22892405748" class="hover:text-brand-green-600 font-semibold transition-colors">+228 92 40 57 48</a>
            </li>
            <li class="flex items-center space-x-2.5">
              <Icon name="lucide:mail" class="w-4 h-4 text-brand-green-600 shrink-0" />
              <a href="mailto:info@ewaregroup.org" class="hover:text-brand-green-600 font-semibold transition-colors">info@ewaregroup.org</a>
            </li>
            <li class="pt-2">
              <NuxtLink
                :to="localePath('/contact')"
                class="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-brand-green-50 text-brand-green-700 hover:bg-brand-green-100 font-bold transition-colors"
              >
                <span>{{ $t('footer.map_directions') }}</span>
                <Icon name="lucide:arrow-right" class="w-3.5 h-3.5" />
              </NuxtLink>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bandeau Réseaux Sociaux Officiels TOUT EN BAS du footer -->
      <div class="mt-12 pt-8 border-t border-slate-200">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="flex items-center space-x-2.5">
            <span class="w-2.5 h-2.5 rounded-full bg-brand-green-600 animate-pulse"></span>
            <span class="text-xs font-bold text-slate-800 uppercase tracking-wider">{{ $t('footer.follow_us') }}</span>
          </div>

          <!-- Pastilles Réseaux Sociaux avec Vrais Logos & Vraies Couleurs -->
          <div class="flex flex-wrap items-center gap-2.5">
            <a
              v-for="social in socialNetworks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="group inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs hover:shadow-soft transition-all duration-300 hover:-translate-y-0.5"
              :title="`Rejoignez Eware Group sur ${social.name}`"
            >
              <span
                class="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 shadow-xs transition-transform group-hover:scale-110"
                :class="social.colorClass"
              >
                <component :is="social.component" :class="[social.iconSize, social.iconColor]" />
              </span>
              <span class="text-xs font-bold text-slate-700 group-hover:text-slate-950">
                {{ social.name }}
              </span>
            </a>
          </div>
        </div>
      </div>

      <!-- Bas de Page (Copyright, Villes d'Implantation & Mentions) -->
      <div class="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
        <p>&copy; {{ currentYear }} Eware Group. {{ $t('footer.rights') }}</p>
        <div class="flex items-center space-x-6">
          <span class="font-medium text-slate-500">{{ $t('footer.locations_line') }}</span>
          <NuxtLink :to="localePath('/mentions-legales')" class="hover:text-slate-600 transition-colors">{{ $t('footer.legal_notice') }}</NuxtLink>
        </div>
      </div>

    </div>
  </footer>
</template>
