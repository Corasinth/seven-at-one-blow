import {gql} from '@apollo/client';

export const STORY_INFO = gql`
query Query {
  getStoryInfo {
    story {
      chapters {
        chapterName
        chapterNumber
        numberOfStages
      }
      textMatrix
    }
    items {
      name
      relevantStages
      scriptCoordinates
      requiredInInventoryStages
      inventoryScriptCoordinates
    }
  }
}
`;