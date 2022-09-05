import { gql } from '@apollo/client';

export const PLAYER = gql`
  query player {
    player {
      _id
      username
    }
  }
`;

export const STORY_INFO = gql`
  query storyInfo {
    storyInfo {
    
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
