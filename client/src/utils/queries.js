import { gql } from '@apollo/client';

export const LOGIN = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      password
`;

export const PLAYER = gql`
  query player {
      _id
      username
      password
      name
      health
      strength
    }
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

export const MONSTERS = gql` 
  query loadMonsters {
    _id
    name
    strength
    health
  }
`;

export const NPC = gql` 
  query loadNPC {
    _id
    name
    dialouge
  }
`;