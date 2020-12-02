// Remove eslint-disable when transformer is complete
/* eslint-disable no-unused-vars */
const { getDrupalValue } = require('./helpers');

const transform = entity => {
  return {
    entityType: 'paragraph',
    entityBundle: 'contact_information',
    fieldAdditionalContact: entity.fieldAdditionalContact[0] || null,
    fieldBenefitHubContacts: entity.fieldBenefitHubContacts,
    fieldContactDefault: entity.fieldContactDefault[0] || null,
  };
};

module.exports = {
  filter: [
    'field_additional_contact',
    'field_benefit_hub_contacts',
    'field_contact_default',
    'field_contact_info_switch',
  ],
  transform,
};
