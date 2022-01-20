import { useQuery, gql } from '@apollo/client';

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      location {
        id
        name
      }
      image
      episode {
        id
        name
        air_date
      }
    }
  }
`;

export const useCharacter = (id: number) => {
  const { error, loading, data } = useQuery(GET_CHARACTER, { variables: { id } });
  return { error, loading, data };
};
