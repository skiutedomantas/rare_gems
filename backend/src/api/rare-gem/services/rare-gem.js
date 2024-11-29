'use strict';

/**
 * rare-gem service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rare-gem.rare-gem');
