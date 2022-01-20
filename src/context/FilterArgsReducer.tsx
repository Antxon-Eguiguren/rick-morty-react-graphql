import { FilterCharacter, PaginationInfo } from '../interfaces/FilterCharacter.interface';

export interface FilterArgsState {
  page: number | null;
  paginationInfo: PaginationInfo;
  filters: FilterCharacter;
}

type FilterArgsAction =
  | { type: 'filter'; payload: { filters: FilterCharacter } }
  | { type: 'resetFilters' }
  | { type: 'updatePage'; payload: { page: number } }
  | { type: 'updatePaginationInfo'; payload: { paginationInfo: PaginationInfo } };

export const FilterArgsReducer = (
  state: FilterArgsState,
  action: FilterArgsAction
): FilterArgsState => {
  switch (action.type) {
    case 'filter':
      return { ...state, filters: action.payload.filters };

    case 'resetFilters':
      return { ...state, filters: { name: '', status: '', gender: '' } };

    case 'updatePage':
      return { ...state, page: action.payload.page };

    case 'updatePaginationInfo':
      return { ...state, paginationInfo: action.payload.paginationInfo };

    default:
      return state;
  }
};
