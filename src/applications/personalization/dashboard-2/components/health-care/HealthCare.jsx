import React from 'react';

const HealthCare = () => {
  return (
    <>
      <h2>Health care</h2>

      <div className="vads-l-row vads-u-justify-content--space-between">
        {/* Messages */}
        <div className="medium-screen:vads-u-flex--1">
          <h3>Messages</h3>
          <div className="vads-u-background-color--gray-lightest vads-u-padding-y--2p5 vads-u-padding-x--2">
            <h4 className="vads-u-margin-top--0">
              <strong>Latest Message</strong>
            </h4>
            <p>From: Dr. Susan Smith</p>
            <p>Date: January 22nd, 2021</p>
            <p className="vads-u-margin-bottom--0">
              Subject: We received your most recent lab results ...
            </p>
          </div>
          <span>Blue info box</span>
        </div>
        {/* Appointments */}
        <div className="medium-screen:vads-u-flex--1 medium-screen:vads-u-margin-x--2p5">
          <h3>Appointments</h3>
          <div className="vads-u-background-color--gray-lightest vads-u-padding-y--2p5 vads-u-padding-x--2">
            <h4 className="vads-u-margin-top--0">
              <strong>Next Appointment</strong>
            </h4>
          </div>
          <span>Blue info box</span>
        </div>
        {/* Prescriptions */}
        <div className="medium-screen:vads-u-flex--1">
          <h3>Prescriptions</h3>
          <div className="vads-u-background-color--gray-lightest vads-u-padding-y--2p5 vads-u-padding-x--2">
            <h4 className="vads-u-margin-top--0">
              <strong>Prescription Refills</strong>
            </h4>
          </div>
          <span>Blue info box</span>
        </div>
      </div>
    </>
  );
};

export default HealthCare;
