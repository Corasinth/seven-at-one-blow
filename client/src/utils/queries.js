import { gql } from '@apollo/client';

// export const PLAYER = gql`
//   query player {
//     player {
//       _id
//       username
//     }
//   }
// `;

export const STORY_INFO = gql`
query Query {
  getStoryInfo {
    story {
      _id
      discoveringGreateness {
        chapterNumber
        numberOfStages
      }
      giantTrials {
        chapterNumber
        numberOfStages
      }
      royalTrifle {
        numberOfStages
        chapterNumber
      }
      NarrowEscape {
        chapterNumber
        numberOfStages
      }
      RegalResolve {
        numberOfStages
        chapterNumber
      }
      textMatrix
    }
    items {
      _id
      name
      scriptCoordinates
      relevantStages
      requiredInInventoryStages
      inventoryScriptCoordinates
    }
  }
}
`;

export const ITEMS = gql`
  query loadItems {
    _id
    name
    interactions
  }
`;
