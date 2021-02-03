import React from 'react';

const HealthCareCard = props => {
  let cardTitle;
  let line1;
  let line2;
  let line3;
  const blueInfoBox = {};
  let sectionTitle;

  if (props.type === 'messages') {
    cardTitle = 'Latest Message';
    line1 = 'From: Dr. Susan Smith';
    line2 = 'Date: January 22nd, 2021';
    line3 = 'Subject: We received your most recent lab results ...';
    sectionTitle = 'Messages';
    blueInfoBox.icon = 'envelope';
    blueInfoBox.text = 'You have 2 unread messages';
    blueInfoBox.href = 'www.google.com';
    blueInfoBox.ariaLabel = 'View your unread messages';
  }

  if (props.type === 'appointments') {
    cardTitle = 'Next Appointment';
    line1 = 'Monday, November 12th, 2020';
    line2 = 'Time: 9:00 a.m. ET';
    line3 = 'VA Video Connect';
    sectionTitle = 'Appointments';
    blueInfoBox.icon = 'calendar';
    blueInfoBox.text = '6 upcoming appointments';
    blueInfoBox.href = 'www.google.com';
    blueInfoBox.ariaLabel = 'View upcoming appointments';
  }

  if (props.type === 'prescriptions') {
    sectionTitle = 'Prescriptions';
    cardTitle = 'Prescription refills';
    line1 = 'Metformin, 500 mg';
    line2 = 'Status: submitted on Monday, March 11th, 2021';
    line3 = '';
    blueInfoBox.icon = 'prescription-bottle';
    blueInfoBox.text = '3 prescription updates';
    blueInfoBox.href = 'www.google.com';
    blueInfoBox.ariaLabel = 'View prescription updates';
  }

  return (
    <div className="vads-u-display--flex vads-u-flex-direction--column vads-l-col--12 medium-screen:vads-l-col--6 large-screen:vads-l-col--4 vads-u-padding-right--2">
      {/* Title */}
      <h3 className="vads-u-font-size--h4">{sectionTitle}</h3>

      {/* Content */}
      <div className="vads-u-background-color--gray-lightest vads-u-padding-y--2p5 vads-u-padding-x--2p5 vads-u-flex--fill">
        <h4 className="vads-u-margin-top--0 vads-u-font-size--h3">
          {cardTitle}
        </h4>
        <p>{line1}</p>
        <p>{line2}</p>
        <p className="vads-u-margin-bottom--0">{line3}</p>
      </div>

      {/* CTA */}
      <a
        aria-label={`${blueInfoBox.ariaLabel} (opens in new tab)`}
        className="vads-u-font-weight--bold vads-u-background-color--primary-alt-lightest vads-u-padding--1 vads-u-margin-top--2"
        href=""
        rel="noreferrer noopener"
        style={{ fontSize: '1.4rem' }}
        target="_blank"
      >
        <i
          aria-hidden="true"
          className={`fas fa-${blueInfoBox.icon} vads-u-margin-x--1`}
        />
        {blueInfoBox.text}
        <i
          aria-hidden="true"
          className="fas fa-chevron-right vads-u-margin-x--1"
        />
      </a>
    </div>
  );
};

const HealthCare = () => {
  return (
    <>
      <h2 className="vads-u-margin-y--0">Health care</h2>

      <div className="vads-u-display--flex vads-u-flex-wrap--wrap">
        {/* Messages */}
        <HealthCareCard type="messages" />
        {/* Appointments */}
        <HealthCareCard type="appointments" />
        {/* Prescriptions */}
        <HealthCareCard type="prescriptions" />
      </div>
    </>
  );
};

export default HealthCare;
