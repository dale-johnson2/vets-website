import React from 'react';
import { connect } from 'react-redux';
import pickBy from 'lodash/pickBy';
import ADDRESS_DATA from '~/platform/forms/address/data';
import { focusElement } from '~/platform/utilities/ui';

import { ADDRESS_POU, USA } from '@@vap-svc/constants';
import ContactInformationEditView from '../ContactInformationEditView';

import getInitialFormValues from 'applications/personalization/profile/util/getInitialFormValues';

class AddressEditView extends React.Component {
  componentWillUnmount() {
    focusElement(`#${this.props.fieldName}-edit-link`);
  }

  onInput = (value, schema, uiSchema) => {
    const newFieldValue = {
      ...value,
    };
    if (newFieldValue['view:livesOnMilitaryBase']) {
      newFieldValue.countryCodeIso3 = USA.COUNTRY_ISO3_CODE;
    }
    this.props.onChangeFormDataAndSchemas(newFieldValue, schema, uiSchema);
  };

  /**
   * Returns a copy of the input object with an added `view:livesOnMilitaryBase`
   * value if the address is a overseas military mailing address
   *
   */
  livesOnMilitaryBase = data => {
    if (
      data?.addressPou === ADDRESS_POU.CORRESPONDENCE &&
      ADDRESS_DATA.militaryStates.includes(data?.stateCode) &&
      ADDRESS_DATA.militaryCities.includes(data?.city)
    ) {
      return true;
    }
    return false;
  };

  /**
   * Helper function that calls other helpers to:
   * - totally remove data fields that are not set
   * - set the form data's `view:livesOnMilitaryBase` prop to `true` if this is
   *   an overseas military mailing address
   *
   * If the argument is not an object this function will simply return whatever
   * was passed to it.
   */
  transformInitialFormValues = initialFormValues => {
    if (!(initialFormValues instanceof Object)) {
      return initialFormValues;
    }
    // totally removes data fields with falsey values from initialFormValues
    // to prevent form validation errors.
    const transformedData = pickBy(initialFormValues);
    if (this.livesOnMilitaryBase(transformedData)) {
      transformedData['view:livesOnMilitaryBase'] = true;
    }
    return transformedData;
  };

  copyMailingAddress = mailingAddress => {
    const newAddressValue = { ...this.props.field.value, ...mailingAddress };
    this.props.onChangeFormDataAndSchemas(
      this.transformInitialFormValues(newAddressValue),
      this.props.field.formSchema,
      this.props.field.uiSchema,
    );
  };

  render() {
    return (
      <ContactInformationEditView
        analyticsSectionName={this.props.analyticsSectionName}
        clearErrors={this.props.clearErrors}
        deleteDisabled={this.props.deleteDisabled}
        field={this.props.field}
        formSchema={this.props.formSchema}
        getInitialFormValues={getInitialFormValues({
          type: 'address',
          modalData: this.props.modalData,
          data: this.props.data,
        })}
        hasValidationError={this.props.hasValidationError}
        isEmpty={this.props.isEmpty}
        onCancel={this.props.onCancel}
        onChangeFormDataAndSchemas={this.props.onChangeFormDataAndSchemas}
        onDelete={this.props.onDelete}
        onSubmit={this.props.onSubmit}
        refreshTransaction={this.props.refreshTransaction}
        title={this.props.title}
        transaction={this.props.transaction}
        transactionRequest={this.props.transactionRequest}
        uiSchema={this.props.uiSchema}
        type="address"
      />
    );
  }
}

const mapStateToProps = state => ({
  modalData: state.vapService?.modalData,
});

export default connect(mapStateToProps)(AddressEditView);
