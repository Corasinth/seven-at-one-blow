import { gql } from '@apollo/client';

export const STORY_INFO = gql`
query getStoryInfo {
  getStoryInfo {
    story {
      textMatrix
      _id
    }
    items {
      _id
      name
      relevantStages
      scriptCoordinates
      requiredInInventoryStages
      inventoryScriptCoordinates
    }
  }
}
`;