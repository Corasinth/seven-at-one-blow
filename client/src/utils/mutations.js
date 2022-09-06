import { gql } from '@apollo/client';

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