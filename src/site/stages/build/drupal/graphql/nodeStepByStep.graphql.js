const entityElementsFromPages = require('./entityElementsForPages.graphql');

const fragment = `
fragment nodeStepByStep on NodeStepByStep {
  ${entityElementsFromPages}
  entityBundle

  changed
  title
  fieldIntroTextLimitedHtml {
    processed
  }
  fieldAlertSingle {
    entity {
      ... alertSingle
    }
  }
  fieldButtons {
    entity {
      ... button
    }
  }
  fieldButtonsRepeat
  fieldSteps {
    entity {
      ... on ParagraphStepByStep {
        fieldSectionHeader
        fieldStep {
          entity {
            ... on ParagraphStep {
              fieldWysiwyg {
                processed
              }
              fieldAlert {
                entity {
                  ... alertSingle
                }
              }
              fieldMedia {
                entity {
                  ... on Media {
                    thumbnail {
                      alt
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  fieldRelatedBenefitHubs {
    entity {
      ... on NodeLandingPage {
        fieldSupportServices {
          entity {
            ... supportService
          }
        }
      }
    }
  }
  fieldRelatedInformation {
    entity {
      ... linkTeaser
    }
  }
  fieldPrimaryCategory {
    entity {
      ... taxonomyTermLcCategories
    }
  }
  fieldOtherCategories {
    entity {
      ... taxonomyTermLcCategories
    }
  }
  fieldTags {
    entity {
      ... audienceTopics
    }
  }
}
`;

module.exports = fragment;
