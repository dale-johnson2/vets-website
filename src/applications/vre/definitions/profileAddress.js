/**
 * This uiSchema is modeled after how addresses are handled in the Profile application, and makes the same pattern
 * available for use inside forms generated by the platform's form system.
 */

import React from 'react';
import AdditionalInfo from '@department-of-veterans-affairs/formation-react/AdditionalInfo';
import get from 'platform/utilities/data/get';
import {
  countries,
  states50AndDC,
  militaryCities,
  militaryStates,
} from 'vets-json-schema/dist/constants.json';

/**
 * PATTERNS
 * STREET_PATTERN - rejects white space only
 * US_POSTAL_CODE_PATTERN - Matches 5 digit zipcodes and zip+4 patterns: 12345, 12345-1234
 */
const STREET_PATTERN = '^.*\\S.*';
const US_POSTAL_CODE_PATTERN = '^\\d{5}(?:-\\d{4})?$';

/**
 Available at https://github.com/department-of-veterans-affairs/vets-json-schema/blob/8337b2878b524867ef2b6d8600b134c682c7ac8a/src/common/definitions.js#L161
 addressSchema = {
   type: 'object',
   properties: {
     isMilitary: {
       type: 'boolean',
     },
     'view:militaryBaseDescription': {
       type: 'object',
       properties: {},
     },
     country: {
       type: 'string',
       enum: countries.map(country => country.value),
       enumNames: countries.map(country => country.label),
     },
     street: {
       type: 'string',
       minLength: 1,
       maxLength: 100,
       pattern: STREET_PATTERN,
     },
     street2: {
       type: 'string',
       minLength: 1,
       maxLength: 100,
       pattern: STREET_PATTERN,
     },
     street3: {
       type: 'string',
       minLength: 1,
       maxLength: 100,
       pattern: STREET_PATTERN,
     },
     city: {
       type: 'string',
     },
     state: {
       type: 'string',
     },
     postalCode: {
       type: 'string',
     },
   },
 };
 */

/**
 * CONSTANTS:
 * 2. USA - references USA value and label
 * 3. MilitaryBaseInfo - React component. Wrapped in AdditionalInfo component and used as description
 */

const USA = {
  value: 'USA',
  label: 'United States',
};

const MilitaryBaseInfo = () => (
  <div className="vads-u-padding-x--2p5">
    <AdditionalInfo
      status="info"
      triggerText="Learn more about military base addresses"
    >
      <span>
        The United States is automatically chosen as your country if you live on
        a military base outside of the country.
      </span>
    </AdditionalInfo>
  </div>
);

/**
 * @param {string} path - path to the address in formData, may contain [INDEX] as part of it, which needs to be handled using insertArrayIndex
 * @param {string} checkBoxTitle - Visual label for the military base checkbox. Ex: "I live on a United States military base outside of the U.S."
 * @param {function} uiRequiredCallback - slots into ui:required for the necessary fields
 *
 * Conventions:
 * 1. formDataPath - path to entire address property in formData, after accounting for potential array nesting. Derived from the path parameter
 * 2. get(formDataPath, formData) - returns the address property, often destructured with const {country, isMilitary} = get(formDataPath, formData)
 *
 * Examples:
 * 1. Path to Address nested in array - childrenToAdd[INDEX].childAddressInfo.address
 */

export const addressUiSchema = (path, checkBoxTitle, uiRequiredCallback) => {
  /**
   * insertArrayIndex - Used when addresses are nested in an array and need to be accessible.
   * There's no good way to handle pathing to a schema when it lives in an array with multiple entries.
   * Example: childrenToAdd[INDEX].childAddressInfo.address. Hardcoding an index value in place of INDEX
   * would just result in the same array entry being mutated over and over, instead of the correct entry.
   */
  const insertArrayIndex = (key, index) => key.replace('[INDEX]', `[${index}]`);
  /**
   * getPath
   * @param {string} pathToData takes the path argument passed to addressUiSchema.
   * @param {number} index the array index included in updateSchema if the schema is inside an array
   * if index is undefined, just return the original path, otherwise, use insertArrayIndex to handle correct index injection
   */
  const getPath = (pathToData, index) =>
    typeof index === 'number'
      ? insertArrayIndex(pathToData, index)
      : pathToData;

  return {
    isMilitary: {
      'ui:title': checkBoxTitle,
    },
    'view:militaryBaseDescription': {
      'ui:description': MilitaryBaseInfo,
    },
    country: {
      'ui:required': uiRequiredCallback,
      'ui:title': 'Country',
      'ui:options': {
        /**
         * This is needed because the country dropdown needs to be set to USA and disabled if a
         * user selects that they live on a military base outside the US.
         */
        updateSchema: (formData, schema, uiSchema, index) => {
          const formDataPath = getPath(path, index);
          const countryUI = uiSchema;
          const addressFormData = get(formDataPath, formData) ?? {};
          const { isMilitary } = addressFormData;
          // if isMilitary === true, auto select United States and disable the field
          if (isMilitary) {
            countryUI['ui:disabled'] = true;
            addressFormData.country = USA.value;
            return {
              enum: [USA.value],
              enumNames: [USA.label],
              default: USA.value,
            };
          }
          // default to regular country select dropdown
          countryUI['ui:disabled'] = false;
          return {
            type: 'string',
            enum: countries.map(country => country.value),
            enumNames: countries.map(country => country.label),
          };
        },
      },
    },
    street: {
      'ui:required': uiRequiredCallback,
      'ui:title': 'Street',
      'ui:errorMessages': {
        required: 'Street address is required',
        pattern: 'Please fill in a valid street address',
      },
    },
    street2: {
      'ui:title': 'Line 2',
    },
    street3: {
      'ui:title': 'Line 3',
    },
    city: {
      'ui:required': uiRequiredCallback,
      'ui:errorMessages': {
        required: 'City is required',
      },
      'ui:options': {
        /**
         * replaceSchema:
         * Necessary because military addresses require strict options.
         * If the isMilitary checkbox is selected, replace the city schema with a
         * select dropdown containing the values for military cities. Otherwise,
         * just return the regular string schema.
         */
        replaceSchema: (formData, schema, uiSchema, index) => {
          const formDataPath = getPath(path, index);
          const { isMilitary } = get(formDataPath, formData) ?? {};
          if (isMilitary) {
            return {
              type: 'string',
              title: 'APO/FPO/DPO',
              enum: militaryCities.map(city => city.value),
              enumNames: militaryCities.map(city => city.label),
            };
          }
          return {
            type: 'string',
            title: 'City',
            minLength: 1,
            maxLength: 100,
            pattern: STREET_PATTERN,
          };
        },
      },
    },
    state: {
      'ui:required': (formData, index) => {
        // Only required if the country is the United States;
        const formDataPath = getPath(path, index);
        const { country } = get(formDataPath, formData) ?? {};
        return country && country === USA.value;
      },
      'ui:errorMessages': {
        required: 'Please enter a valid State, Province, or Region',
      },
      'ui:options': {
        /**
         * replaceSchema:
         * Necessary because military addresses require strict options.
         * If the isMilitary checkbox is selected, replace the state schema with a
         * select dropdown containing the values for military states.
         *
         * If the country value is USA and the military base checkbox is de-selected,
         * use the States dropdown.
         *
         * If the country value is anything other than USA, change the title and default to string.
         */
        replaceSchema: (formData, schema, uiSchema, index) => {
          const formDataPath = getPath(path, index);
          const { country, isMilitary } = get(formDataPath, formData) ?? {};
          if (isMilitary) {
            return {
              type: 'string',
              title: 'State',
              enum: militaryStates.map(state => state.value),
              enumNames: militaryStates.map(state => state.label),
            };
          } else if (!isMilitary && country === 'USA') {
            return {
              type: 'string',
              title: 'State',
              enum: states50AndDC.map(state => state.value),
              enumNames: states50AndDC.map(state => state.label),
            };
          } else {
            return {
              type: 'string',
              title: 'State/Province/Region',
            };
          }
        },
      },
    },
    postalCode: {
      'ui:required': uiRequiredCallback,
      'ui:title': 'Postal Code',
      'ui:errorMessages': {
        required: 'Postal code is required',
        pattern: 'Please enter a valid US zip code',
      },
      'ui:options': {
        widgetClassNames: 'usa-input-medium',
        replaceSchema: (formData, schema, uiSchema, index) => {
          const formDataPath = getPath(path, index);
          const { country, isMilitary } = get(formDataPath, formData) ?? {};
          if (isMilitary || country === 'USA') {
            return {
              type: 'string',
              pattern: US_POSTAL_CODE_PATTERN,
            };
          } else {
            return {
              type: 'string',
            };
          }
        },
      },
    },
  };
};
