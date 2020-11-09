import React from 'react';
import FacilityDirectionsLink from '../components/FacilityDirectionsLink';
import Telephone from '@department-of-veterans-affairs/formation-react/Telephone';

export default function FacilityAddress({
  name,
  facility,
  showDirectionsLink,
}) {
  const address = facility?.address;
  const phone = facility?.telecom?.find(tele => tele.system === 'phone')?.value;

  return (
    <>
      {!!name && (
        <>
          <strong>{name}</strong>
          <br />
        </>
      )}
      {!!address && (
        <>
          {address?.line?.map(line => (
            <React.Fragment key={line}>
              {line}
              <br />
            </React.Fragment>
          ))}
          {address.city}, {address.state} {address.postalCode}
          <br />
        </>
      )}
      {showDirectionsLink && (
        <>
          <FacilityDirectionsLink location={facility} />
          <br />
        </>
      )}
      {!!phone && (
        <dl className="vads-u-margin-y--0">
          <dt className="vads-u-display--inline">
            <strong>Main phone:</strong>
          </dt>{' '}
          <dd className="vads-u-display--inline">
            <br />
            <Telephone contact={phone} />
          </dd>
        </dl>
      )}
    </>
  );
}
