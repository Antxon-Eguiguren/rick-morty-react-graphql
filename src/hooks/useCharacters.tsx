import { useQuery, gql } from '@apollo/client';
import { APIArgs } from '../interfaces/FilterCharacter.interface';

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $filters: FilterCharacter) {
    characters(page: $page, filter: $filters) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
      }
    }
  }
`;

export const useCharacters = ({ page, filters }: APIArgs) => {
  const { error, loading, data } = useQuery(GET_CHARACTERS, { variables: { page, filters } });
  return { error, loading, data };
};
