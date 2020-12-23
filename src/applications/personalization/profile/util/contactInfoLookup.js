import { API_ROUTES, FIELD_TITLES, FIELD_NAMES } from '@@vap-svc/constants';

import { emailConvertCleanDataToPayload } from '~/applications/personalization/profile/util/emailUtils';
import { phoneConvertCleanDataToPayload } from '~/applications/personalization/profile/util/phoneUtils';
import { addressConvertCleanDataToPayload } from '~/applications/personalization/profile/util/addressUtils';

const phoneNumbers = [
  FIELD_NAMES.HOME_PHONE,
  FIELD_NAMES.WORK_PHONE,
  FIELD_NAMES.MOBOLE_PHONE,
  FIELD_NAMES.FAX_NUMBER,
];

const addresses = [
  FIELD_NAMES.MAILING_ADDRESS,
  FIELD_NAMES.RESIDENTIAL_ADDRESS,
];

export const contactInfoLookup = fieldName => {
  let apiRoute;
  let convertCleanDataToPayload;
  let title;
  let type;

  if (fieldName === FIELD_NAMES.EMAIL) {
    title = FIELD_TITLES[FIELD_NAMES].EMAIL;
    apiRoute = API_ROUTES.EMAILS;
    convertCleanDataToPayload = emailConvertCleanDataToPayload;
    type = 'email';
  }

  if (phoneNumbers.includes(fieldName)) {
    apiRoute = API_ROUTES.TELEPHONES;
    convertCleanDataToPayload = phoneConvertCleanDataToPayload;
    type = 'phone';

    if (fieldName === FIELD_NAMES.HOME_PHONE) {
      title = FIELD_TITLES[FIELD_NAMES.HOME_PHONE];
    }

    if (fieldName === FIELD_NAMES.WORK_PHONE) {
      title = FIELD_TITLES[FIELD_NAMES.WORK_PHONE];
    }

    if (fieldName === FIELD_NAMES.MOBILE_PHONE) {
      title = FIELD_TITLES[FIELD_NAMES.MOBILE_PHONE];
    }

    if (fieldName === FIELD_NAMES.FAX_NUMBER) {
      title = FIELD_TITLES[FIELD_NAMES.FAX_NUMBER];
    }
  }

  if (addresses.includes(fieldName)) {
    apiRoute = API_ROUTES.ADDRESSES;
    convertCleanDataToPayload = addressConvertCleanDataToPayload;
    type = 'address';

    if (fieldName === FIELD_NAMES[FIELD_NAMES.MAILING_ADDRESS]) {
      title = FIELD_TITLES[FIELD_NAMES.MAILING_ADDRESS];
    }

    if (fieldName === FIELD_NAMES[FIELD_NAMES.RESIDENTIAL_ADDRESS]) {
      title = FIELD_TITLES[FIELD_NAMES.RESIDENTIAL_ADDRESS];
    }
  }

  return { apiRoute, convertCleanDataToPayload, title, type };
};

export default contactInfoLookup;
