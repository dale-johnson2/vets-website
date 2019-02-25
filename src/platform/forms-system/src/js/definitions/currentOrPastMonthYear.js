import _ from 'lodash/fp'; // eslint-disable-line no-restricted-imports
import { validateCurrentOrPastMonthYear } from '../validation';
import monthYearUI from './monthYear';

export default function uiSchema(title = 'Date') {
  return _.assign(monthYearUI(title), {
    'ui:validations': [validateCurrentOrPastMonthYear],
    'ui:errorMessages': {
      pattern: 'Please provide a valid current or past date',
    },
  });
}
