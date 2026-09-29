<script setup lang="ts">
const localePath = useLocalePath()

useHead({
  title: 'Mentions Légales | Eware Group',
  meta: [
    {
      name: 'description',
      content: 'Mentions légales et informations juridiques concernant Eware Group.'
    }
  ]
})
</script>

<template>
  <div class="py-16 bg-surface-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Breadcrumb -->
      <div class="flex items-center space-x-2 text-xs text-slate-500 mb-6">
        <NuxtLink :to="localePath('/')" class="hover:text-brand-green-600">Accueil</NuxtLink>
        <Icon name="lucide:chevron-right" class="w-3.5 h-3.5" />
        <span class="text-slate-900 font-semibold">Mentions Légales</span>
      </div>

      <div class="clean-card p-8 sm:p-12 space-y-6 text-sm text-slate-600 leading-relaxed">
        <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900">Mentions Légales</h1>
        
        <div>
          <h2 class="text-base font-bold text-slate-900 mb-2">1. Éditeur de la Plateforme</h2>
          <p>
            Le site officiel <strong>ewaregroup.org</strong> est édité par la société <strong>EWARE GROUP</strong>, société par actions simplifiée de droit togolais.<br>
            <strong>Siège social :</strong> 13 BP 93, Derrière le CEG Baguida centre, Lomé, Togo.<br>
            <strong>Téléphone :</strong> +228 92 40 57 48<br>
            <strong>Email :</strong> info@ewaregroup.org
          </p>
        </div>

        <div>
          <h2 class="text-base font-bold text-slate-900 mb-2">2. Écosystème & Marques Déposées</h2>
          <p>
            Eware Group est propriétaire et éditrice des marques et solutions associées :<br>
            • <strong>SolSizer</strong> (Plateforme SaaS de dimensionnement solaire photovoltaïque - solsizer.app)<br>
            • <strong>Eware Mobility</strong> (Super-application de mobilité urbaine & immobilier au Togo)<br>
            • <strong>EIMAT Africa</strong> (École Internationale des Métiers d'Avenir et des Technologies)
          </p>
        </div>

        <div>
          <h2 class="text-base font-bold text-slate-900 mb-2">3. Propriété Intellectuelle & Données Personnelles</h2>
          <p>
            L'ensemble des contenus, graphismes, logos, codes sources et architectures logicielles présents sur ce portail sont la propriété exclusive d'Eware Group.<br>
            Conformément aux réglementations de protection des données, les informations recueillies via nos formulaires sont exclusivement destinées au traitement technique et commercial de vos demandes et ne sont jamais cédées à des tiers sans votre consentement explicite.
          </p>
        </div>
      </div>

    </div>
  </div>
</template>
