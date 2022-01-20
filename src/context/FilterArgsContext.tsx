import { createContext, useReducer } from 'react';
import { FilterCharacter, PaginationInfo } from '../interfaces/FilterCharacter.interface';
import { FilterArgsReducer, FilterArgsState } from './FilterArgsReducer';

type FilterArgsContextProps = {
  page: number | null;
  paginationInfo: PaginationInfo;
  filters: FilterCharacter;
  filter: ({ name, status, gender }: FilterCharacter) => void;
  resetFilters: () => void;
  updatePage: (page: number) => void;
  updatePaginationInfo: ({ count, next, prev, pages }: PaginationInfo) => void;
};

const FilterArgsContextInitialState: FilterArgsState = {
  page: 1,
  paginationInfo: {
    count: null,
    next: null,
    prev: null,
    pages: null,
  },
  filters: {
    name: '',
    status: '',
    gender: '',
  },
};

export const FilterArgsContext = createContext({} as FilterArgsContextProps);

export const FilterArgsContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(FilterArgsReducer, FilterArgsContextInitialState);

  const filter = ({ name, status, gender }: FilterCharacter) => {
    updatePage(1);
    dispatch({ type: 'filter', payload: { filters: { name, status, gender } } });
  };

  const resetFilters = () => {
    updatePage(1);
    dispatch({ type: 'resetFilters' });
  };

  const updatePage = (page: number) => {
    dispatch({ type: 'updatePage', payload: { page } });
  };

  const updatePaginationInfo = ({ count, next, prev, pages }: PaginationInfo) => {
    dispatch({
      type: 'updatePaginationInfo',
      payload: { paginationInfo: { count, next, prev, pages } },
    });
  };

  return (
    <FilterArgsContext.Provider
      value={{ ...state, filter, resetFilters, updatePage, updatePaginationInfo }}
    >
      {children}
    </FilterArgsContext.Provider>
  );
};
