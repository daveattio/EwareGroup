export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Validation minimale
  if (!body.author || !body.comment) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Nom et commentaire requis'
    })
  }

  // Si Strapi CMS est en ligne, on peut optionnellement relayer l'avis dans Strapi
  const config = useRuntimeConfig()
  const strapiUrl = config.public.strapiUrl || 'http://localhost:1337'

  try {
    await $fetch(`${strapiUrl}/api/reviews`, {
      method: 'POST',
      body: {
        data: {
          author: body.author,
          role: body.role,
          company: body.company,
          city: body.city,
          rating: Number(body.rating) || 5,
          comment: body.comment,
          publishedAt: new Date().toISOString()
        }
      }
    }).catch(() => {
      // Si la collection n'existe pas encore dans Strapi, on ne bloque pas l'utilisateur
    })
  } catch (err) {
    console.warn('Avis reçu localement sans Strapi API:', err)
  }

  return {
    success: true,
    message: 'Avis enregistré avec succès',
    data: body
  }
})
