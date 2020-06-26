const { media } = require('../helpers');

module.exports = {
  type: 'object',
  properties: {
    contentModelType: { enum: ['paragraph-downloadable_file'] },
    entity: {
      type: 'object',
      properties: {
        entityType: { enum: ['paragraph'] },
        entityBundle: { enum: ['downloadable_file'] },
        fieldMarkup: { type: ['string', 'null'] },
        fieldMedia: media(),
        fieldTitle: { type: 'string' },
      },
      required: ['fieldMarkup', 'fieldMedia', 'fieldTitle'],
    },
  },
  required: ['entity'],
};
