import React from 'react';
import AlertBox, {
  ALERT_TYPE,
} from '@department-of-veterans-affairs/component-library/AlertBox';
import Telephone, {
  CONTACTS,
  PATTERNS,
} from '@department-of-veterans-affairs/component-library/Telephone';

const FraudVictimAlert = ({ status = ALERT_TYPE.CONTINUE }) => (
  <AlertBox
    className="vads-u-margin-y--2 medium-screen:vads-u-margin-y--4"
    backgroundOnly
    status={status}
  >
    <strong>Note:</strong> If you think you’ve been the victim of bank fraud,
    please call us at{' '}
    <a
      href="tel:1-800-827-1000"
      aria-label="800. 8 2 7. 1000."
      title="Dial the telephone number 800-827-1000"
      className="no-wrap"
    >
      800-827-1000
    </a>{' '}
    (TTY: <Telephone contact={CONTACTS['711']} pattern={PATTERNS['911']} />
    ). We’re here Monday through Friday, 8:00 a.m. to 9:00 p.m. ET.
  </AlertBox>
);

export default FraudVictimAlert;
