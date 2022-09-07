import {gql} from '@apollo/client';

export const NEW_PLAYER = gql`
mutation Mutation($username: String!, $password: String!) {
  newPlayer(username: $username, password: $password) {
    token
    player {
      username
      storySave
      inventory
    }
  }
}
`;

export const LOGIN = gql`
mutation Mutation($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    player {
      username
      storySave
      inventory
    }
  }
}
`;

export const SAVE_PLAYER = gql`
mutation Mutation($username: String!, $storySave: [Int]!, $inventory: [String]!) {
  savePlayer(username: $username, storySave: $storySave, inventory: $inventory) {
    _id
    username
    storySave
    inventory
  }
}
`;

export const LOAD_SAVE = gql`
mutation Mutation($username: String!) {
  loadSave(username: $username) {
    username
    storySave
    inventory
    _id
  }
}
`;