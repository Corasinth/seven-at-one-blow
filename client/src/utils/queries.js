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

export const ITEMS = gql`
  query loadItems {
    _id
    name
    interactions
  }
`;
