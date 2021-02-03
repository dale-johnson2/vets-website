import React from 'react';

const renderSections = props => {
  let cardTitle;
  let line1;
  let line2;
  let line3;
  const blueInfoBox = {};

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
    extraMargin = true;
    sectionTitle = 'Appointments';
    blueInfoBox.icon = 'calendar';
    blueInfoBox.text = '6 upcoming appointments';
    blueInfoBox.href = 'www.google.com';
    blueInfoBox.ariaLabel = 'View upcoming appointments';
  }

  if (props.type === 'prescriptions') {
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
    <div
      className="vads-u-display--flex vads-u-flex-direction--column vads-u-margin-right--2 vads-l-col--12 medium-screen:vads-l-col--4 large-screen:vads-l-col--3"
      style={{
        overflow: 'hidden',
      }}
    >
      {/* Title */}
      <h3 className="vads-u-font-size--h4">{sectionTitle}</h3>

      {/* Content */}
      <div className="vads-u-background-color--gray-lightest vads-u-padding-y--2p5 vads-u-padding-x--2 vads-u-flex--fill">
        <h4 className="vads-u-margin-top--0 vads-u-font-size--h3">
          {cardTitle}
        </h4>
        <p>{line1}</p>
        <p>{line2}</p>
        <p className="vads-u-margin-bottom--0">{line3}</p>
      </div>

      {/* CTA */}
      <a
        className="vads-u-font-weight--bold vads-u-background-color--primary-alt-lightest vads-u-padding--1 vads-u-margin-top--2"
        href=""
        rel="noreferrer noopener"
        style={{
          fontSize: '1.4rem',
        }}
        target="_blank"
        aria-label={`${blueInfoBox.ariaLabel} (opens in new tab)`}
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

  const SectionTitles = (
    <div className={wrapperClass} key={`${sectionTitle}-title`}>
      <h3>{sectionTitle}</h3>
    </div>
  );

  const BlueInfoBox = (
    <div className={wrapperClass} key={`${sectionTitle}-infoBox`}>
      <span>{blueInfoBox.ariaLabel}</span>
    </div>
  );

  return { SectionTitles, Contents, BlueInfoBox };
};

const HealthCare = () => {
  const types = ['messages', 'appointments', 'prescriptions'];

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

      <div className="vads-l-row vads-u-justify-content--space-between">
        {types.map(type => renderSections(type).Contents)}
      </div>

      <div className="vads-l-row vads-u-justify-content--space-between">
        {types.map(type => renderSections(type).BlueInfoBox)}
      </div>
    </>
  );
};

export default HealthCare;
