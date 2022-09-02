import { gql } from '@apollo/client';

export const PLAYER = gql`
  query loadPlayer {
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
  query loadItems {
    _id
    name
    interactions
  }
`;

export const MONSTERS = `gql 
  query loadMonsters {
    _id
    name
    strength
    health
  }
`;

export const NPC = `gqp 
  query loadNPC {
    _id
    name
    dialouge
  }
`;