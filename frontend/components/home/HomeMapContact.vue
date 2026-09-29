<script setup lang="ts">
import FlagTogo from '~/components/icons/FlagTogo.vue'
import FlagBenin from '~/components/icons/FlagBenin.vue'

// Données GPS et adresses officielles
const locations = {
  togo: {
    name: 'Eware Group — Siège Social Togo',
    country: 'Togo',
    address: '13 BP 93, Derrière le CEG Baguida centre, Lomé',
    phone: '+228 92 40 57 48',
    email: 'info@ewaregroup.org',
    lat: 6.1685,
    lng: 1.3284,
    // Google Maps Embed dynamique avec coordonnées exactes
    mapEmbedUrl: 'https://maps.google.com/maps?q=6.1685,1.3284&hl=fr&z=16&output=embed'
  },
  benin: {
    name: 'Eware Group — Antenne Bénin',
    country: 'Bénin',
    address: 'Zone d\'expansion Porto-Novo / Cotonou',
    phone: '+228 92 40 57 48',
    email: 'benin@ewaregroup.org',
    lat: 6.4969,
    lng: 2.6289,
    mapEmbedUrl: 'https://maps.google.com/maps?q=6.4969,2.6289&hl=fr&z=14&output=embed'
  }
}

const activeLocation = ref<'togo' | 'benin'>('togo')

// Formulaire de contact
const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: 'solaire',
  message: ''
})

const isSubmitting = ref(false)
const submitted = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  // Simulation de l'envoi vers l'API Nuxt / Strapi
  setTimeout(() => {
    isSubmitting.value = false
    submitted.value = true
  }, 1000)
}
</script>

<template>
  <section id="contact" class="py-20 bg-white border-b border-slate-200/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Title -->
      <div class="max-w-3xl">
        <span class="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-brand-green-700 bg-brand-green-50 px-3 py-1 rounded-full border border-brand-green-200">
          <Icon name="lucide:map-pin" class="w-3.5 h-3.5" />
          <span>Localisation & Contact</span>
        </span>
        <h2 class="mt-4 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Venez nous rencontrer ou échangeons sur votre projet
        </h2>
        <p class="mt-3 text-sm text-slate-500 leading-relaxed">
          Nos équipes d'ingénieurs et techniciens vous accueillent au siège de Lomé et préparent le déploiement de vos chantiers.
        </p>
      </div>

      <!-- Main 2-Columns Grid -->
      <div class="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        <!-- Left Column: Google Maps & Coordonnées GPS (6 cols) -->
        <div class="lg:col-span-6 flex flex-col space-y-6">
          
          <!-- Location Switcher (Togo actif, Bénin prévisualisation) -->
          <div class="flex items-center space-x-3 p-1.5 rounded-xl bg-surface-100 border border-slate-200 w-fit">
            <button
              @click="activeLocation = 'togo'"
              type="button"
              class="flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
              :class="activeLocation === 'togo' ? 'bg-white text-slate-900 shadow-xs border border-slate-200' : 'text-slate-500 hover:text-slate-800'"
            >
              <FlagTogo class="w-4 h-2.5" />
              <span>Lomé, Togo (Siège)</span>
            </button>
            <button
              @click="activeLocation = 'benin'"
              type="button"
              class="flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
              :class="activeLocation === 'benin' ? 'bg-white text-slate-900 shadow-xs border border-slate-200' : 'text-slate-500 hover:text-slate-800'"
            >
              <FlagBenin class="w-4 h-2.5" />
              <span>Bénin (Expansion)</span>
            </button>
          </div>

          <!-- Carte Google Maps Interactive basée sur Lat/Lng exactes -->
          <div class="clean-card overflow-hidden h-[340px] relative border border-slate-200 shadow-soft">
            <iframe
              :src="locations[activeLocation].mapEmbedUrl"
              class="w-full h-full border-0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>

          <!-- Fiche Coordonnées Détail -->
          <div class="clean-card p-6 border border-slate-200/80">
            <h4 class="text-sm font-bold text-slate-900">{{ locations[activeLocation].name }}</h4>
            <div class="mt-4 space-y-3 text-xs text-slate-600">
              <div class="flex items-start space-x-3">
                <Icon name="lucide:map-pin" class="w-4 h-4 text-brand-green-600 shrink-0 mt-0.5" />
                <span>{{ locations[activeLocation].address }}</span>
              </div>
              <div class="flex items-center space-x-3">
                <Icon name="lucide:navigation" class="w-4 h-4 text-brand-gold-500 shrink-0" />
                <span class="font-mono text-[11px] text-slate-500">
                  Lat: {{ locations[activeLocation].lat }}° N, Lng: {{ locations[activeLocation].lng }}° E
                </span>
              </div>
              <div class="flex items-center space-x-3">
                <Icon name="lucide:phone" class="w-4 h-4 text-brand-green-600 shrink-0" />
                <a :href="`tel:${locations[activeLocation].phone}`" class="hover:text-brand-green-600 font-semibold transition-colors">
                  {{ locations[activeLocation].phone }}
                </a>
              </div>
              <div class="flex items-center space-x-3">
                <Icon name="lucide:mail" class="w-4 h-4 text-brand-green-600 shrink-0" />
                <a :href="`mailto:${locations[activeLocation].email}`" class="hover:text-brand-green-600 font-semibold transition-colors">
                  {{ locations[activeLocation].email }}
                </a>
              </div>
            </div>

            <div class="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
              <a
                :href="`https://www.google.com/maps/search/?api=1&query=${locations[activeLocation].lat},${locations[activeLocation].lng}`"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-green-700 hover:text-brand-green-800"
              >
                <span>Ouvrir dans Google Maps</span>
                <Icon name="lucide:external-link" class="w-3.5 h-3.5" />
              </a>
              <span class="text-[11px] text-slate-400">Prise de RDV sur place</span>
            </div>
          </div>

        </div>

        <!-- Right Column: Formulaire de Devis & Contact B2B (6 cols) -->
        <div class="lg:col-span-6 clean-card p-8 border border-slate-200">
          <h3 class="text-xl font-bold text-slate-900">Demande d'Étude ou de Renseignement</h3>
          <p class="mt-1 text-xs text-slate-500">
            Remplissez ce formulaire et notre équipe technique vous recontactera sous 24h ouvrées.
          </p>

          <form v-if="!submitted" @submit.prevent="submitForm" class="mt-6 space-y-4">
            
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Nom complet ou Entreprise *
              </label>
              <input
                v-model="form.name"
                type="text"
                required
                placeholder="Ex: Entreprise Solaire SA / M. Koffi"
                class="w-full h-11 px-3.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-brand-green-600/20 focus:border-brand-green-600 transition"
              >
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Email professionnel *
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="contact@entreprise.tg"
                  class="w-full h-11 px-3.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-brand-green-600/20 focus:border-brand-green-600 transition"
                >
              </div>

              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Téléphone / WhatsApp *
                </label>
                <input
                  v-model="form.phone"
                  type="tel"
                  required
                  placeholder="+228 90 00 00 00"
                  class="w-full h-11 px-3.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-brand-green-600/20 focus:border-brand-green-600 transition"
                >
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Sujet de votre demande *
              </label>
              <select
                v-model="form.service"
                class="w-full h-11 px-3 rounded-xl border border-slate-200 bg-white text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-brand-green-600/20 focus:border-brand-green-600 transition"
              >
                <option value="solaire">Projet Solaire Photovoltaïque & Hybride</option>
                <option value="reseaux">Réseaux Électriques HT/BT & Postes</option>
                <option value="industrie">Climatisation & Maintenance Industrielle</option>
                <option value="eimat">Formation Technique (EIMAT Africa)</option>
                <option value="solsizer">Logiciel SolSizer / Partenariat Installateur</option>
                <option value="autre">Autre demande / Recrutement</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Description de votre besoin *
              </label>
              <textarea
                v-model="form.message"
                rows="4"
                required
                placeholder="Précisez votre localisation (Lomé, intérieur du pays, Bénin...), la puissance souhaitée ou vos contraintes..."
                class="w-full p-3.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-brand-green-600/20 focus:border-brand-green-600 transition"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full py-3.5 px-6 rounded-xl bg-brand-green-600 hover:bg-brand-green-700 text-white font-bold text-xs uppercase tracking-wider shadow-card transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              <Icon v-if="isSubmitting" name="lucide:loader-2" class="w-4 h-4 animate-spin" />
              <Icon v-else name="lucide:send" class="w-4 h-4" />
              <span>{{ isSubmitting ? 'Transmission en cours...' : 'Envoyer ma demande' }}</span>
            </button>
          </form>

          <!-- Success Message -->
          <div v-else class="p-8 text-center space-y-4">
            <div class="w-14 h-14 rounded-full bg-brand-green-100 text-brand-green-700 mx-auto flex items-center justify-center">
              <Icon name="lucide:check-circle" class="w-8 h-8" />
            </div>
            <h4 class="text-base font-bold text-slate-900">Demande transmise avec succès !</h4>
            <p class="text-xs text-slate-500 max-w-sm mx-auto">
              Merci pour votre message. Nos ingénieurs au siège de Lomé prendront contact avec vous sous 24h.
            </p>
            <button
              @click="submitted = false"
              type="button"
              class="text-xs font-bold text-brand-green-600 hover:underline pt-2"
            >
              Envoyer un autre message
            </button>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>
