'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('field-populate')
      .service('myService')
      .getWelcomeMessage();
  },
});
