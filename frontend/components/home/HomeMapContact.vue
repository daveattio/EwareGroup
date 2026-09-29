<script setup lang="ts">
// Coordonnées officielles du siège Togo (Baguida Lomé)
const togoLocation = {
  name: 'Eware Group — Togo',
  country: 'Togo',
  address: '13 BP 93, Derrière le CEG Baguida centre, Lomé',
  phone: '+228 92 40 57 48',
  email: 'info@ewaregroup.org',
  lat: 6.1685,
  lng: 1.3284,
  mapEmbedUrl: 'https://maps.google.com/maps?q=6.1685,1.3284&hl=fr&z=16&output=embed'
}

// Formulaire de contact
const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: 'solaire',
  message: ''
})

const isSubmitting = ref(false)
const showToast = ref(false)
const toastTimeout = ref<any>(null)

const submitForm = async () => {
  isSubmitting.value = true
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: { ...form }
    })
    
    // Réinitialisation du formulaire
    form.name = ''
    form.email = ''
    form.phone = ''
    form.service = 'solaire'
    form.message = ''
    
    // Déclenchement du Toast interactif
    showToast.value = true
    if (toastTimeout.value) clearTimeout(toastTimeout.value)
    toastTimeout.value = setTimeout(() => {
      showToast.value = false
    }, 6000)
  } catch (error) {
    console.error('Erreur lors de l\'envoi du formulaire:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="py-20 bg-white border-b border-slate-200/80 relative">
    
    <!-- Toast Notification de Succès Interactive -->
    <Transition
      enter-active-class="transform ease-out duration-300 transition"
      enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="showToast"
        class="fixed bottom-6 right-6 z-50 max-w-md w-full bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-slate-700/80 flex items-start space-x-3"
      >
        <div class="w-8 h-8 rounded-full bg-brand-green-500/20 text-brand-green-400 flex items-center justify-center shrink-0 mt-0.5">
          <Icon name="lucide:check-circle-2" class="w-5 h-5" />
        </div>
        <div class="flex-1">
          <h4 class="text-sm font-bold text-white">{{ $t('contact.toast_title') }}</h4>
          <p class="mt-1 text-xs text-slate-300 leading-relaxed">
            {{ $t('contact.toast_desc', { email: 'info@ewaregroup.org' }) }}
          </p>
        </div>
        <button
          @click="showToast = false"
          type="button"
          class="text-slate-400 hover:text-white p-1 transition-colors"
          aria-label="Fermer"
        >
          <Icon name="lucide:x" class="w-4 h-4" />
        </button>
      </div>
    </Transition>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Title Centré -->
      <div class="text-center max-w-3xl mx-auto">
        <span class="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-brand-green-700 bg-brand-green-50 px-3.5 py-1 rounded-full border border-brand-green-200">
          <Icon name="lucide:map-pin" class="w-3.5 h-3.5 text-brand-green-600" />
          <span>{{ $t('contact.badge') }}</span>
        </span>
        <h2 class="mt-4 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {{ $t('contact.title') }}
        </h2>
        <p class="mt-3 text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto">
          {{ $t('contact.subtitle') }}
        </p>
      </div>

      <!-- Main 2-Columns Grid -->
      <div class="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        <!-- Left Column: Google Maps & Coordonnées Togo (6 cols) -->
        <div class="lg:col-span-6 flex flex-col space-y-6">
          
          <!-- Location Switcher (Togo actif, Bénin grisé sans fausse adresse) -->
          <div class="flex items-center space-x-2 p-1.5 rounded-xl bg-surface-100 border border-slate-200 w-fit">
            <button
              type="button"
              class="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-white text-slate-900 shadow-xs border border-slate-200 cursor-default"
            >
              Togo
            </button>
            <button
              type="button"
              disabled
              title="Adresse physique en cours de formalisation"
              class="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-400 bg-slate-100/70 border border-transparent cursor-not-allowed flex items-center space-x-1.5"
            >
              <span>Bénin</span>
              <span class="text-[10px] text-slate-400 font-normal">{{ $t('contact.branch_benin_soon') }}</span>
            </button>
          </div>

          <!-- Carte Google Maps Interactive basée sur coordonnées Togo -->
          <div class="clean-card overflow-hidden h-[340px] relative border border-slate-200 shadow-soft">
            <iframe
              :src="togoLocation.mapEmbedUrl"
              class="w-full h-full border-0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Google Maps Location - Togo"
            ></iframe>
          </div>

          <!-- Fiche Coordonnées Détail Togo -->
          <div class="clean-card p-6 border border-slate-200/80">
            <h4 class="text-sm font-bold text-slate-900">{{ togoLocation.name }}</h4>
            <div class="mt-4 space-y-3 text-xs text-slate-600">
              <div class="flex items-start space-x-3">
                <Icon name="lucide:map-pin" class="w-4 h-4 text-brand-green-600 shrink-0 mt-0.5" />
                <span>{{ togoLocation.address }}</span>
              </div>
              <div class="flex items-center space-x-3">
                <Icon name="lucide:navigation" class="w-4 h-4 text-brand-gold-500 shrink-0" />
                <span class="font-mono text-[11px] text-slate-500">
                  Lat: {{ togoLocation.lat }}° N, Lng: {{ togoLocation.lng }}° E
                </span>
              </div>
              <div class="flex items-center space-x-3">
                <Icon name="lucide:phone" class="w-4 h-4 text-brand-green-600 shrink-0" />
                <a :href="`tel:${togoLocation.phone}`" class="hover:text-brand-green-600 font-semibold transition-colors">
                  {{ togoLocation.phone }}
                </a>
              </div>
              <div class="flex items-center space-x-3">
                <Icon name="lucide:mail" class="w-4 h-4 text-brand-green-600 shrink-0" />
                <a :href="`mailto:${togoLocation.email}`" class="hover:text-brand-green-600 font-semibold transition-colors">
                  {{ togoLocation.email }}
                </a>
              </div>
            </div>

            <div class="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
              <a
                :href="`https://www.google.com/maps/search/?api=1&query=${togoLocation.lat},${togoLocation.lng}`"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-green-700 hover:text-brand-green-800"
              >
                <span>{{ $t('contact.open_maps') }}</span>
                <Icon name="lucide:external-link" class="w-3.5 h-3.5" />
              </a>
              <span class="text-[11px] text-slate-400">{{ $t('contact.booking_notice') }}</span>
            </div>
          </div>

        </div>

        <!-- Right Column: Formulaire de Devis & Contact B2B (6 cols) -->
        <div class="lg:col-span-6 clean-card p-8 border border-slate-200">
          <h3 class="text-xl font-bold text-slate-900">{{ $t('contact.form_title') }}</h3>
          <p class="mt-1 text-xs text-slate-500">
            {{ $t('contact.form_subtitle', { email: 'info@ewaregroup.org' }) }}
          </p>

          <form @submit.prevent="submitForm" class="mt-6 space-y-4">
            
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                {{ $t('contact.name_label') }}
              </label>
              <input
                v-model="form.name"
                type="text"
                required
                :placeholder="$t('contact.name_placeholder')"
                class="w-full h-11 px-3.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-brand-green-600/20 focus:border-brand-green-600 transition"
              >
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  {{ $t('contact.email_label') }}
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  :placeholder="$t('contact.email_placeholder')"
                  class="w-full h-11 px-3.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-brand-green-600/20 focus:border-brand-green-600 transition"
                >
              </div>

              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  {{ $t('contact.phone_label') }}
                </label>
                <input
                  v-model="form.phone"
                  type="tel"
                  required
                  :placeholder="$t('contact.phone_placeholder')"
                  class="w-full h-11 px-3.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-brand-green-600/20 focus:border-brand-green-600 transition"
                >
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                {{ $t('contact.subject_label') }}
              </label>
              <select
                v-model="form.service"
                class="w-full h-11 px-3 rounded-xl border border-slate-200 bg-white text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-brand-green-600/20 focus:border-brand-green-600 transition"
              >
                <option value="solaire">{{ $t('contact.opt_solar') }}</option>
                <option value="reseaux">{{ $t('contact.opt_reseaux') }}</option>
                <option value="industrie">{{ $t('contact.opt_industrie') }}</option>
                <option value="eimat">{{ $t('contact.opt_eimat') }}</option>
                <option value="solsizer">{{ $t('contact.opt_solsizer') }}</option>
                <option value="autre">{{ $t('contact.opt_other') }}</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                {{ $t('contact.message_label') }}
              </label>
              <textarea
                v-model="form.message"
                rows="4"
                required
                :placeholder="$t('contact.message_placeholder')"
                class="w-full p-3.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-brand-green-600/20 focus:border-brand-green-600 transition"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full py-3.5 px-6 rounded-xl bg-brand-green-600 hover:bg-brand-green-700 text-white font-bold text-xs uppercase tracking-wider shadow-card transition-all flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer"
            >
              <Icon v-if="isSubmitting" name="lucide:loader-2" class="w-4 h-4 animate-spin" />
              <Icon v-else name="lucide:send" class="w-4 h-4" />
              <span>{{ isSubmitting ? $t('contact.btn_sending') : $t('contact.btn_submit') }}</span>
            </button>
          </form>

        </div>

      </div>

    </div>
  </section>
</template>
