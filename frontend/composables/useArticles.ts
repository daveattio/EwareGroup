export interface ArticleItem {
  id: number | string
  title: string
  slug: string
  category: 'togo' | 'benin' | 'solsizer' | 'mobility' | 'eimat' | 'global'
  tag: string
  date: string
  readTime: string
  summary: string
  imageIcon: string
  coverUrl?: string
}

export const useArticles = () => {
  const config = useRuntimeConfig()
  const strapiUrl = config.public?.strapiUrl || 'http://localhost:1337'

  // Articles par défaut (Fallback élégant si Strapi est hors-ligne)
  const defaultArticles: ArticleItem[] = [
    {
      id: 1,
      title: "Déploiement d'une centrale solaire hybride industrielle au Togo",
      slug: 'centrale-solaire-hybride-togo',
      category: 'togo',
      tag: 'Togo • Énergie',
      date: '15 Septembre 2026',
      readTime: '4 min',
      summary: "Eware Group finalise la mise en service d'une toiture photovoltaïque de 350 kWc connectée au réseau avec stockage intelligent à Lomé.",
      imageIcon: 'lucide:sun'
    },
    {
      id: 2,
      title: "SolSizer franchit le cap des 1 500 études solaires générées en Afrique",
      slug: 'solsizer-milestone-1500-etudes',
      category: 'solsizer',
      tag: 'Tech Solaire',
      date: '02 Septembre 2026',
      readTime: '3 min',
      summary: "L'outil propriétaire de dimensionnement d'Eware Group accélère son adoption auprès des bureaux d'études et installateurs agréés.",
      imageIcon: 'lucide:calculator'
    },
    {
      id: 3,
      title: "Eware Mobility : Lancement de la fonctionnalité 'Mes Routines' à Lomé",
      slug: 'eware-mobility-routines-lome',
      category: 'mobility',
      tag: 'Mobilité Urbaine',
      date: '20 Août 2026',
      readTime: '5 min',
      summary: "Planifier ses trajets quotidiens en moto-taxi Zémidjan ou VTC comme une sonnerie de réveil : l'innovation signée Eware Mobility séduit la capitale.",
      imageIcon: 'lucide:car'
    },
    {
      id: 4,
      title: "Expansion régionale : Eware Group pose les jalons de sa filiale au Bénin",
      slug: 'expansion-eware-benin',
      category: 'benin',
      tag: 'Bénin • Expansion',
      date: '10 Août 2026',
      readTime: '4 min',
      summary: "Préparation active de l'implantation de l'antenne béninoise entre Cotonou et Porto-Novo pour répondre aux demandes industrielles croissantes.",
      imageIcon: 'lucide:building-2'
    }
  ]

  // Fonction de récupération réactive
  const fetchArticles = async (): Promise<ArticleItem[]> => {
    try {
      const response: any = await $fetch(`${strapiUrl}/api/articles?populate=*`, {
        timeout: 2500
      })
      if (response && response.data && response.data.length > 0) {
        return response.data.map((item: any) => ({
          id: item.id,
          title: item.attributes?.title || item.title,
          slug: item.attributes?.slug || item.slug,
          category: item.attributes?.category || item.category || 'global',
          tag: item.attributes?.tag || item.tag || 'Actualité',
          date: item.attributes?.publishedAt ? new Date(item.attributes.publishedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Récemment',
          readTime: item.attributes?.readTime || '3 min',
          summary: item.attributes?.summary || item.summary,
          imageIcon: item.attributes?.imageIcon || 'lucide:newspaper',
          coverUrl: item.attributes?.cover?.data?.attributes?.url ? `${strapiUrl}${item.attributes.cover.data.attributes.url}` : undefined
        }))
      }
    } catch {
      // Si Strapi n'est pas encore démarré en dev, on utilise les données de fallback
    }
    return defaultArticles
  }

  return {
    defaultArticles,
    fetchArticles
  }
}
