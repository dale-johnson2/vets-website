import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import React from 'react';

import { API_ROUTES, FIELD_NAMES, FIELD_TITLES } from '@@vap-svc/constants';
import ContactInformationField from '~/applications/personalization/profile/components/personal-information/ContactInformationField';
import {
  emailUiSchema,
  emailFormSchema,
  emailConvertDataToPayload,
} from '~/applications/personalization/profile/util/emailUtils';
import { signInServiceName as signInServiceNameSelector } from 'platform/user/authentication/selectors';

import ProfileInfoTable from '../../ProfileInfoTable';

const EmailInformationSection = ({ className, signInServiceName }) => {
  let link;
  let buttonText;

  if (signInServiceName === 'idme') {
    link = 'https://wallet.id.me/settings';
    buttonText = 'ID.me';
  }

  if (signInServiceName === 'dslogon') {
    link = 'https://myaccess.dmdc.osd.mil/identitymanagement';
    buttonText = 'DS Logon';
  }

  if (signInServiceName === 'mhv' || signInServiceName === 'myhealthevet') {
    link = 'https://www.myhealth.va.gov';
    buttonText = 'My HealtheVet';
  }

  return (
    <div className={className}>
      <ProfileInfoTable
        title="Contact email address"
        fieldName="emailAddress"
        data={[
          {
            value: (
              <>
                <p className="vads-u-margin-top--0">
                  This is the email we’ll use to contact you.
                </p>
                <p>
                  Your contact email may be different than the email you use to
                  sign in. To view or update your sign-in email, go to the
                  website where you manage your account information.
                </p>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Update sign-in email address on {buttonText}
                </a>
              </>
            ),
          },
          {
            title: 'Contact email address',
            value: (
              <ContactInformationField
                title={FIELD_TITLES[FIELD_NAMES.EMAIL]}
                fieldName={FIELD_NAMES.EMAIL}
                apiRoute={API_ROUTES.EMAILS}
                convertCleanDataToPayload={emailConvertDataToPayload}
                type="email"
              />
            ),
          },
        ]}
        list
        className="vads-u-margin-y--4"
      />
    </div>
  );
};

EmailInformationSection.propTypes = {
  className: PropTypes.string,
  signInServiceName: PropTypes.string.isRequired,
};

export const mapStateToProps = state => ({
  signInServiceName: signInServiceNameSelector(state),
});

export default connect(mapStateToProps)(EmailInformationSection);
