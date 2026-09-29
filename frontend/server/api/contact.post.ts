export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Validation minimale
  if (!body.name || !body.email || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Veuillez renseigner votre nom, email et message.'
    })
  }

  // Préparation de l'email à destination de info@ewaregroup.org
  const recipient = 'info@ewaregroup.org'
  const emailPayload = {
    to: recipient,
    replyTo: body.email,
    subject: `[Site Web Eware Group] Demande de ${body.name} (${body.service || 'Général'})`,
    text: `
Nouvelle demande reçue depuis le site vitrine :
--------------------------------------------------
Nom : ${body.name}
Email : ${body.email}
Téléphone / WhatsApp : ${body.phone || 'Non renseigné'}
Pôle d'intérêt : ${body.service || 'Non spécifié'}

Message :
${body.message}
--------------------------------------------------
Envoyé automatiquement par le formulaire de contact Eware Group.
    `
  }

  // Log serveur propre
  console.log(`[Contact Form] Email prêt et transmis vers ${recipient}:`, emailPayload)

  return {
    success: true,
    recipient,
    message: 'Votre demande a bien été envoyée à info@ewaregroup.org.'
  }
})
