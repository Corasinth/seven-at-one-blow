import { gql } from '@apollo/client';

export const LOGIN = gql`
 mutation Mutation($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    player {
      _id
      username
      password
      playerSave
      inventory
    }
    token
  }
}
`;
