import React from 'react';

import {
  getAppointTypeFromAppointment,
  getClinicFromAppointment,
} from '../../../../questionnaire/utils';
import { getAppointmentStatus, isAppointmentCancelled } from '../../../utils';

import Status from '../Shared/Labels/Status';

const index = props => {
  const { data, DueDate, Actions } = props;
  const { appointment } = data;
  const appointmentType = getAppointTypeFromAppointment(appointment, {
    titleCase: true,
  });
  const appointmentStatus = getAppointmentStatus(appointment);
  const isCancelled = isAppointmentCancelled(appointmentStatus);

  const clinic = getClinicFromAppointment(appointment);
  return (
    <li data-request-id={appointment.id} className="card">
      <Status data={data} />
      <header data-testid="appointment-type-header">
        {appointmentType} questionnaire
      </header>
      <p className="appointment-location">
        for your {isCancelled ? 'canceled of rescheduled ' : ''}
        appointment at {clinic.friendlyName}, {clinic.facility.displayName}
      </p>
      <section className="due-details">{DueDate && <DueDate />}</section>

      {Actions && <Actions />}
    </li>
  );
};

export default index;
