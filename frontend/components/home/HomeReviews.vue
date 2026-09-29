<script setup lang="ts">
interface Review {
  id: string | number
  author: string
  role: string
  company: string
  city: string
  rating: number // 1 to 5
  comment: string
  date: string
  avatarBg: string
}

// Avis clients et partenaires (Notes variées réalistes : moyenne ~ 4.8 / 5)
const initialReviews: Review[] = [
  {
    id: 1,
    author: 'Koffi Mensah',
    role: 'Directeur d\'Usine Agro-alimentaire',
    company: 'AgroTogo Industries',
    city: 'Lomé, Togo',
    rating: 5,
    comment: 'L\'installation de notre centrale solaire toiture de 150 kWc a permis de réduire notre facture électrique de plus de 45%. Le monitoring SolSizer nous donne une visibilité en temps réel exemplaire.',
    date: 'Il y a 2 semaines',
    avatarBg: 'bg-brand-green-600'
  },
  {
    id: 2,
    author: 'Fatoumata Traoré',
    role: 'Responsable Infrastructure & Énergie',
    company: 'Société Générale de Logistique',
    city: 'Cotonou / Porto-Novo',
    rating: 5,
    comment: 'Une équipe d\'ingénieurs extrêmement rigoureuse sur la conformité HT/BT de nos transformateurs. Le chantier a été livré dans les délais avec un grand professionnalisme.',
    date: 'Il y a 1 mois',
    avatarBg: 'bg-brand-gold-500'
  },
  {
    id: 3,
    author: 'Dr. Emmanuel Lawson',
    role: 'Gérant de Clinique Médicale',
    company: 'Polyclinique Saint-Joseph',
    city: 'Baguida / Lomé',
    rating: 4,
    comment: 'La continuité d\'alimentation est une question vitale pour notre bloc opératoire. Le système hybride solaire avec secours instantané conçu par Eware Group fonctionne très bien. Quelques ajustements au début mais le support a été très réactif.',
    date: 'Il y a 1 mois',
    avatarBg: 'bg-slate-800'
  },
  {
    id: 4,
    author: 'Kokou Mawena',
    role: 'Installateur Solaire & Chef d\'Entreprise',
    company: 'Solaire Tech Togo',
    city: 'Lomé, Togo',
    rating: 5,
    comment: 'EIMAT Africa est notre fournisseur de confiance pour tous nos composants et câblages spécifiques. Disponibilité immédiate des stocks à Lomé, matériel certifié et service irréprochable.',
    date: 'Il y a 2 mois',
    avatarBg: 'bg-emerald-600'
  },
  {
    id: 5,
    author: 'Serge Agbokou',
    role: 'Directeur d\'Exploitation Logistique',
    company: 'West Africa Transit & Port',
    city: 'Lomé Port, Togo',
    rating: 5,
    comment: 'Le dimensionnement et la mise aux normes de notre poste de transformation électrique par Eware Group a sécurisé nos opérations 24h/24 sans aucun décrochage.',
    date: 'Il y a 3 mois',
    avatarBg: 'bg-brand-green-700'
  },
  {
    id: 6,
    author: 'Rodrigue Dossou',
    role: 'Directeur d\'Hôtel & Éco-Resort',
    company: 'Résidence Océan',
    city: 'Aného, Togo',
    rating: 4,
    comment: 'Excellente transition vers le solaire pour réduire notre dépendance au réseau public. Les économies sont visibles dès les premiers mois et l\'installation est très soignée.',
    date: 'Il y a 3 mois',
    avatarBg: 'bg-amber-600'
  }
]

const reviews = ref<Review[]>([...initialReviews])

// Persistance locale via localStorage (permet à l'utilisateur de tester immédiatement)
onMounted(() => {
  try {
    const saved = localStorage.getItem('eware_user_reviews')
    if (saved) {
      const parsed = JSON.parse(saved)
      if (Array.isArray(parsed) && parsed.length > 0) {
        reviews.value = [...parsed, ...initialReviews]
      }
    }
  } catch (e) {
    console.error('Erreur lecture reviews local', e)
  }
})

// Modal de dépôt d'avis
const showModal = ref(false)
const hoverRating = ref(0)
const newReview = reactive({
  author: '',
  role: '',
  company: '',
  city: 'Lomé, Togo',
  rating: 5,
  comment: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)

const averageRating = computed(() => {
  const sum = reviews.value.reduce((acc, r) => acc + r.rating, 0)
  return (sum / reviews.value.length).toFixed(1)
})

const totalReviews = computed(() => reviews.value.length)

// Soumission d'un nouvel avis
const submitReview = async () => {
  if (!newReview.author || !newReview.comment) return
  isSubmitting.value = true

  const createdReview: Review = {
    id: Date.now(),
    author: newReview.author,
    role: newReview.role || 'Partenaire Industriel',
    company: newReview.company || 'Entreprise Partenaire',
    city: newReview.city || 'Togo',
    rating: newReview.rating,
    comment: newReview.comment,
    date: 'À l\'instant',
    avatarBg: 'bg-brand-green-600'
  }

  // 1. Sauvegarde locale immédiate
  try {
    const saved = localStorage.getItem('eware_user_reviews')
    const existing = saved ? JSON.parse(saved) : []
    localStorage.setItem('eware_user_reviews', JSON.stringify([createdReview, ...existing]))
  } catch (e) {}

  // 2. Appel asynchrone vers l'API de contact / avis
  try {
    await $fetch('/api/reviews', {
      method: 'POST',
      body: createdReview
    }).catch(() => {
      // Tolérant si l'API backend n'est pas encore branchée
    })
  } catch (e) {}

  reviews.value.unshift(createdReview)
  isSubmitting.value = false
  submitSuccess.value = true

  setTimeout(() => {
    submitSuccess.value = false
    showModal.value = false
    newReview.author = ''
    newReview.role = ''
    newReview.company = ''
    newReview.comment = ''
    newReview.rating = 5
  }, 1200)
}
</script>

<template>
  <section id="avis" class="py-20 bg-white border-b border-slate-200/80 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- En-tête Centré : Note Globale & Bouton "Donner mon avis" (Style SyndicTG) -->
      <div class="text-center max-w-3xl mx-auto pb-10 border-b border-slate-200">
        <span class="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-brand-green-700 bg-brand-green-50 px-3.5 py-1 rounded-full border border-brand-green-200">
          <Icon name="lucide:message-square-heart" class="w-3.5 h-3.5 text-brand-green-600" />
          <span>{{ $t('reviews.badge') }}</span>
        </span>
        <h2 class="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {{ $t('reviews.title') }}
        </h2>
        <p class="mt-2 text-sm text-slate-500 max-w-xl mx-auto">
          {{ $t('reviews.subtitle') }}
        </p>

        <!-- Note moyenne + CTA donner un avis (Centré) -->
        <div class="mt-8 inline-flex flex-col sm:flex-row items-center gap-6 bg-surface-50 px-6 py-4 rounded-2xl border border-slate-200 shadow-xs">
          <div class="flex items-center space-x-3">
            <div class="text-4xl font-extrabold text-slate-900 tracking-tight">
              {{ averageRating }}
            </div>
            <div class="text-left">
              <div class="flex items-center space-x-1">
                <!-- Étoiles Or Solaire pleines colorées en interne -->
                <svg v-for="i in 5" :key="i" viewBox="0 0 24 24" class="w-4 h-4 fill-[#ffa50d] text-[#ffa50d]">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div class="text-[11px] text-slate-500 font-medium mt-1">
                {{ $t('reviews.based_on', { count: totalReviews }) }}
              </div>
            </div>
          </div>

          <div class="h-8 w-px bg-slate-200 hidden sm:block"></div>

          <button
            @click="showModal = true"
            type="button"
            class="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-brand-green-600 hover:bg-brand-green-700 text-white font-bold text-xs shadow-soft transition-all shrink-0 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Icon name="lucide:message-square-plus" class="w-4 h-4" />
            <span>{{ $t('reviews.leave_review') }}</span>
          </button>
        </div>
      </div>

    </div>

    <!-- CARROUSEL EN MOUVEMENT PERPÉTUEL FLUIDE (Style Ticker SyndicTG) -->
    <div class="relative w-full mt-10 overflow-hidden py-4">
      
      <!-- Dégradés de fondu gauche et droite pour un effet infini élégant -->
      <div class="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
      <div class="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>

      <!-- Ticker défilant (dupliqué x2 pour une boucle infinie continue) -->
      <div class="animate-ticker space-x-6 px-6">
        
        <!-- Première boucle d'avis -->
        <div
          v-for="review in reviews"
          :key="'a-' + review.id"
          class="w-[310px] sm:w-[370px] shrink-0 flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200/90 shadow-card hover:border-brand-green-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-hover select-none"
        >
          <div>
            <!-- Étoiles -->
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-1">
                <!-- Étoile vectorielle SVG avec remplissage intérieur Or Solaire officiel -->
                <svg
                  v-for="star in 5"
                  :key="star"
                  viewBox="0 0 24 24"
                  class="w-4 h-4"
                  :class="star <= review.rating ? 'fill-[#ffa50d] text-[#ffa50d]' : 'fill-slate-100 text-slate-200'"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <span class="text-[11px] font-medium text-slate-400">
                {{ review.date }}
              </span>
            </div>

            <!-- Commentaire -->
            <p class="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed italic line-clamp-4">
              "{{ review.comment }}"
            </p>
          </div>

          <!-- Auteur & Entreprise -->
          <div class="mt-6 pt-4 border-t border-slate-100 flex items-center space-x-3">
            <div
              class="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-extrabold shrink-0 shadow-xs"
              :class="review.avatarBg"
            >
              {{ review.author.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() }}
            </div>
            <div class="min-w-0">
              <h4 class="text-xs font-bold text-slate-900 truncate">
                {{ review.author }}
              </h4>
              <p class="text-[11px] text-slate-500 truncate">
                {{ review.role }}
              </p>
              <p class="text-[10px] text-slate-400 font-medium truncate">
                {{ review.company }} • {{ review.city }}
              </p>
            </div>
          </div>
        </div>

        <!-- Seconde boucle d'avis (Identique pour continuité infinie sans saut) -->
        <div
          v-for="review in reviews"
          :key="'b-' + review.id"
          class="w-[310px] sm:w-[370px] shrink-0 flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200/90 shadow-card hover:border-brand-green-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-hover select-none"
        >
          <div>
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-1">
                <svg
                  v-for="star in 5"
                  :key="star"
                  viewBox="0 0 24 24"
                  class="w-4 h-4"
                  :class="star <= review.rating ? 'fill-[#ffa50d] text-[#ffa50d]' : 'fill-slate-100 text-slate-200'"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <span class="text-[11px] font-medium text-slate-400">
                {{ review.date }}
              </span>
            </div>

            <p class="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed italic line-clamp-4">
              "{{ review.comment }}"
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-slate-100 flex items-center space-x-3">
            <div
              class="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-extrabold shrink-0 shadow-xs"
              :class="review.avatarBg"
            >
              {{ review.author.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() }}
            </div>
            <div class="min-w-0">
              <h4 class="text-xs font-bold text-slate-900 truncate">
                {{ review.author }}
              </h4>
              <p class="text-[11px] text-slate-500 truncate">
                {{ review.role }}
              </p>
              <p class="text-[10px] text-slate-400 font-medium truncate">
                {{ review.company }} • {{ review.city }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Modal Dépôt d'Avis (Inspiration SyndicTG) -->
    <Teleport to="body">
      <div
        v-if="showModal"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs transition-opacity"
      >
        <div
          class="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
        >
          <!-- Bouton fermer -->
          <button
            @click="showModal = false"
            type="button"
            class="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition cursor-pointer"
          >
            <Icon name="lucide:x" class="w-5 h-5" />
          </button>

          <!-- Titre Modal -->
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-10 h-10 rounded-xl bg-brand-gold-50 border border-brand-gold-200 flex items-center justify-center">
              <svg viewBox="0 0 24 24" class="w-5 h-5 fill-[#ffa50d] text-[#ffa50d]">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-slate-900">{{ $t('reviews.modal_title') }}</h3>
              <p class="text-xs text-slate-500">{{ $t('reviews.modal_subtitle') }}</p>
            </div>
          </div>

          <!-- Formulaire -->
          <form @submit.prevent="submitReview" class="space-y-4">
            
            <!-- Évaluation par étoiles interactive avec remplissage interne Or Solaire -->
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-2">{{ $t('reviews.overall_rating') }}</label>
              <div class="flex items-center space-x-2">
                <button
                  v-for="star in 5"
                  :key="star"
                  type="button"
                  @click="newReview.rating = star"
                  @mouseenter="hoverRating = star"
                  @mouseleave="hoverRating = 0"
                  class="p-1 hover:scale-110 transition-transform focus:outline-hidden cursor-pointer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    class="w-7 h-7 transition-colors"
                    :class="(hoverRating || newReview.rating) >= star ? 'fill-[#ffa50d] text-[#ffa50d]' : 'fill-slate-100 text-slate-300'"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </button>
                <span class="text-xs font-bold text-slate-700 ml-2">
                  {{ $t('reviews.stars_count', { rating: hoverRating || newReview.rating }) }}
                </span>
              </div>
            </div>

            <!-- Nom & Prénom -->
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">{{ $t('reviews.full_name') }}</label>
              <input
                v-model="newReview.author"
                type="text"
                required
                :placeholder="$t('reviews.full_name_placeholder')"
                class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-green-500 focus:border-brand-green-500 transition"
              />
            </div>

            <!-- Rôle & Entreprise -->
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">{{ $t('reviews.role') }}</label>
                <input
                  v-model="newReview.role"
                  type="text"
                  :placeholder="$t('reviews.role_placeholder')"
                  class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-green-500 focus:border-brand-green-500 transition"
                />
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">{{ $t('reviews.company') }}</label>
                <input
                  v-model="newReview.company"
                  type="text"
                  :placeholder="$t('reviews.company_placeholder')"
                  class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-green-500 focus:border-brand-green-500 transition"
                />
              </div>
            </div>

            <!-- Ville / Pays -->
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">{{ $t('reviews.city') }}</label>
              <input
                v-model="newReview.city"
                type="text"
                :placeholder="$t('reviews.city_placeholder')"
                class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-green-500 focus:border-brand-green-500 transition"
              />
            </div>

            <!-- Témoignage -->
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">{{ $t('reviews.comment') }}</label>
              <textarea
                v-model="newReview.comment"
                required
                rows="4"
                :placeholder="$t('reviews.comment_placeholder')"
                class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-green-500 focus:border-brand-green-500 transition"
              ></textarea>
            </div>

            <!-- Boutons d'action -->
            <div class="pt-2 flex items-center justify-end space-x-3">
              <button
                @click="showModal = false"
                type="button"
                class="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-bold transition cursor-pointer"
              >
                {{ $t('reviews.cancel') }}
              </button>
              <button
                type="submit"
                :disabled="isSubmitting"
                class="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-brand-green-600 hover:bg-brand-green-700 disabled:opacity-50 text-white text-xs font-bold shadow-soft transition cursor-pointer"
              >
                <Icon v-if="isSubmitting" name="lucide:loader-2" class="w-4 h-4 animate-spin" />
                <span>{{ isSubmitting ? $t('reviews.submitting') : $t('reviews.submit') }}</span>
              </button>
            </div>

            <!-- Message de succès -->
            <div
              v-if="submitSuccess"
              class="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold flex items-center space-x-2 animate-in fade-in"
            >
              <Icon name="lucide:check-circle-2" class="w-4 h-4 text-emerald-600" />
              <span>{{ $t('reviews.success') }}</span>
            </div>

          </form>
        </div>
      </div>
    </Teleport>
  </section>
</template>
