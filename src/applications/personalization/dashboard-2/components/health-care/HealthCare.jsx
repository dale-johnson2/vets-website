import React from 'react';

const renderSections = props => {
  let cardTitle;
  let line1;
  let line2;
  let line3;
  let extraMargin = false;
  let sectionTitle;
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
    sectionTitle = 'Prescriptions';
    blueInfoBox.icon = 'prescriptions';
    blueInfoBox.text = '3 prescription updates';
    blueInfoBox.href = 'www.google.com';
    blueInfoBox.ariaLabel = 'View prescription updates';
  }

  const wrapperClass = extraMargin
    ? 'medium-screen:vads-u-flex--1 medium-screen:vads-u-margin-x--2p5'
    : 'medium-screen:vads-u-flex--1';

  const Contents = (
    <div
      className="vads-u-display--flex vads-u-flex-direction--column"
      key={`${sectionTitle}-contents`}
    >
      <div className={wrapperClass}>
        <div className="medium-screen:vads-u-flex--1 vads-u-background-color--gray-lightest vads-u-padding-y--2p5 vads-u-padding-x--2 vads-u-height--full">
          <h4 className="vads-u-margin-top--0">
            <strong>{cardTitle}</strong>
          </h4>
          <p>{line1}</p>
          <p>{line2}</p>
          <p className="vads-u-margin-bottom--0">{line3}</p>
        </div>
      </div>
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
      <h2>Health care</h2>

      <div className="vads-l-row vads-u-justify-content--space-between">
        {types.map(type => renderSections(type).SectionTitles)}
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
