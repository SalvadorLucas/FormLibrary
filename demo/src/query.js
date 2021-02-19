import { gql } from "@apollo/client";
export const USER_LIST = gql`
  {
    findUserList(page: { number: 1, size: 3 }) {
      content {
        userName
        id
      }
    }
  }
`;
