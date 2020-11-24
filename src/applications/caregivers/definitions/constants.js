export const vetFields = {
  address: 'veteranAddress',
  alternativePhoneNumber: 'veteranAlternativePhoneNumber',
  dateOfBirth: 'veteranDateOfBirth',
  email: 'veteranEmail',
  facilityType: 'veteranFacilityType',
  fullName: 'veteranFullName',
  gender: 'veteranGender',
  plannedClinic: 'plannedClinic',
  preferredFacilityInfoView: 'view:preferredFacilityInfo',
  preferredFacilityStateView: 'veteranFacilityState',
  preferredFacilityView: 'veteranPreferredFacility',
  previousTreatmentFacility: 'veteranLastTreatmentFacility',
  primaryPhoneNumber: 'veteranPrimaryPhoneNumber',
  ssn: 'veteranSsnOrTin',
  verifyEmail: 'view:veteranEmail',
};

export const primaryCaregiverFields = {
  address: 'primaryAddress',
  alternativePhoneNumber: 'primaryAlternativePhoneNumber',
  dateOfBirth: 'primaryDateOfBirth',
  email: 'primaryEmail',
  fullName: 'primaryFullName',
  gender: 'primaryGender',
  primaryPhoneNumber: 'primaryPrimaryPhoneNumber',
  ssn: 'primarySsnOrTin',
  verifyEmail: 'view:primaryEmail',
  vetRelationship: 'primaryVetRelationship',
  hasHealthInsurance: 'primaryHasHealthInsurance',
  hasPrimaryCaregiver: 'view:hasPrimaryCaregiver',
};

export const secondaryCaregiverFields = {
  secondaryOne: {
    hasSecondaryCaregiverOne: 'view:hasSecondaryCaregiverOne',
    address: 'secondaryOneAddress',
    alternativePhoneNumber: 'secondaryOneAlternativePhoneNumber',
    dateOfBirth: 'secondaryOneDateOfBirth',
    email: 'secondaryOneEmail',
    fullName: 'secondaryOneFullName',
    gender: 'secondaryOneGender',
    primaryPhoneNumber: 'secondaryOnePrimaryPhoneNumber',
    ssn: 'secondaryOneSsnOrTin',
    verifyEmail: 'view:secondaryOneEmail',
    vetRelationship: 'secondaryOneVetRelationship',
  },
  secondaryTwo: {
    hasSecondaryCaregiverTwo: 'view:hasSecondaryCaregiverTwo',
    address: 'secondaryTwoAddress',
    alternativePhoneNumber: 'secondaryTwoAlternativePhoneNumber',
    dateOfBirth: 'secondaryTwoDateOfBirth',
    email: 'secondaryTwoEmail',
    fullName: 'secondaryTwoFullName',
    gender: 'secondaryTwoGender',
    primaryPhoneNumber: 'secondaryTwoPrimaryPhoneNumber',
    ssn: 'secondaryTwoSsnOrTin',
    verifyEmail: 'view:secondaryTwoEmail',
    vetRelationship: 'secondaryTwoVetRelationship',
  },
};
