import React from 'react';

import PhoneField from './VAPPhoneField';

import { FIELD_NAMES, FIELD_TITLES } from '@@vet360/constants';

export default function HomePhone() {
  return (
    <PhoneField
      title={FIELD_TITLES[FIELD_NAMES.HOME_PHONE]}
      fieldName={FIELD_NAMES.HOME_PHONE}
    />
  );
}
