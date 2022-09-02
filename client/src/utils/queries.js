import { gql } from '@apollo/client';

export const PLAYER = gql`
  query newPlayer {
    _id
    username
    password
    name
    playerSave
  }
`;

export const SAVE = gql`
  query loadSave {
    loadSave {
      _id
      username
      password
      name
      playerSave
    }
  }
`;

export const ITEMS = gql`
  query items {
    default
    name
    interactions
  }
`;