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
  content?: any
}

export const useArticles = () => {
  const config = useRuntimeConfig()
  const strapiUrl = config.public?.strapiUrl || 'http://localhost:1337'

  // Liste vide par défaut : seuls les vrais articles créés dans Strapi seront affichés
  const defaultArticles: ArticleItem[] = []

  // Fonction de récupération réactive depuis l'API Strapi
  const fetchArticles = async (): Promise<ArticleItem[]> => {
    try {
      const response: any = await $fetch(`${strapiUrl}/api/articles?populate=*`, {
        timeout: 4000
      })
      if (response && response.data && response.data.length > 0) {
        return response.data.map((item: any) => {
          // Extraction robuste de l'image de couverture (Strapi 5 & Strapi 4)
          let coverPath = ''
          if (Array.isArray(item.cover) && item.cover.length > 0) {
            coverPath = item.cover[0]?.url || ''
          } else if (item.cover?.url) {
            coverPath = item.cover.url
          } else if (item.attributes?.cover?.data?.attributes?.url) {
            coverPath = item.attributes.cover.data.attributes.url
          }

          const publishedDate = item.publishedAt || item.attributes?.publishedAt || item.createdAt

          return {
            id: item.documentId || item.id,
            title: item.title || item.attributes?.title || 'Sans titre',
            slug: item.slug || item.attributes?.slug || 'article',
            category: item.category || item.attributes?.category || 'global',
            tag: item.tag || item.attributes?.tag || 'Actualité',
            date: publishedDate ? new Date(publishedDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Récemment',
            readTime: item.readTime || item.attributes?.readTime || '3 min',
            summary: item.summary || item.attributes?.summary || '',
            imageIcon: item.imageIcon || 'lucide:newspaper',
            coverUrl: coverPath ? (coverPath.startsWith('http') ? coverPath : `${strapiUrl}${coverPath}`) : undefined
          }
        })
      }
    } catch (err) {
      console.warn('[useArticles] Impossible de joindre le CMS Strapi ou aucun article:', err)
    }
    return []
  }

  // Récupérer un article unique par son slug
  const fetchArticleBySlug = async (slug: string): Promise<ArticleItem | null> => {
    try {
      const response: any = await $fetch(`${strapiUrl}/api/articles?filters[slug][$eq]=${slug}&populate=*`, {
        timeout: 4000
      })
      if (response && response.data && response.data.length > 0) {
        const item = response.data[0]
        let coverPath = ''
        if (Array.isArray(item.cover) && item.cover.length > 0) {
          coverPath = item.cover[0]?.url || ''
        } else if (item.cover?.url) {
          coverPath = item.cover.url
        } else if (item.attributes?.cover?.data?.attributes?.url) {
          coverPath = item.attributes.cover.data.attributes.url
        }

        const publishedDate = item.publishedAt || item.attributes?.publishedAt || item.createdAt

        return {
          id: item.documentId || item.id,
          title: item.title || item.attributes?.title || 'Sans titre',
          slug: item.slug || item.attributes?.slug || slug,
          category: item.category || item.attributes?.category || 'global',
          tag: item.tag || item.attributes?.tag || 'Actualité',
          date: publishedDate ? new Date(publishedDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Récemment',
          readTime: item.readTime || item.attributes?.readTime || '3 min',
          summary: item.summary || item.attributes?.summary || '',
          content: item.content || item.attributes?.content || null,
          imageIcon: item.imageIcon || 'lucide:newspaper',
          coverUrl: coverPath ? (coverPath.startsWith('http') ? coverPath : `${strapiUrl}${coverPath}`) : undefined
        }
      }
    } catch (err) {
      console.warn('[useArticles] Erreur récupération article par slug:', err)
    }
    return null
  }

  return {
    defaultArticles,
    fetchArticles,
    fetchArticleBySlug
  }
}
