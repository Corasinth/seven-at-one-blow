import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login ($email: String!, $password: String!) {
        login (email: $email, password: $password) {
          token
          player {            
            _id
            username
            storySave
            inventory
          }
        }
    }
`;
