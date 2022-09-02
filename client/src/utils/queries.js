import { gql } from '@apollo/client';


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
