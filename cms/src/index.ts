import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   * Configure automatiquement les permissions publiques de lecture (find / findOne)
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    try {
      // Autoriser l'accès public en lecture (find / findOne) sur les articles
      const publicRole = await strapi
        .query('plugin::users-permissions.role')
        .findOne({ where: { type: 'public' } });

      if (publicRole) {
        const articlePermissions = ['api::article.article.find', 'api::article.article.findOne'];
        for (const action of articlePermissions) {
          const existingPermission = await strapi
            .query('plugin::users-permissions.permission')
            .findOne({
              where: {
                role: publicRole.id,
                action
              }
            });

          if (!existingPermission) {
            await strapi.query('plugin::users-permissions.permission').create({
              data: {
                action,
                role: publicRole.id
              }
            });
            strapi.log.info(`[Permissions] Permission publique accordée: ${action}`);
          }
        }
      }
    } catch (error) {
      strapi.log.error('[Bootstrap] Erreur lors de la configuration des permissions:', error);
    }
  },
};
