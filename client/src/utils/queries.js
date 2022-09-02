import { gql } from '@apollo/client';

export const PLAYER = gql`
  query newPlayer {
    _id
    username
    password
    name
    strength
    health
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
    name
    interactions
  }
`;

export const MONSTERS = `gql 
  query monsters {
    name
    strength
    health
  }
`;