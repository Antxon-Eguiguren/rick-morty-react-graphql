export interface APIArgs {
  page?: number | null;
  filters?: FilterCharacter;
}

export interface FilterCharacter {
  name?: string;
  status?: string;
  gender?: string;
}

export interface PaginationInfo {
  count?: number | null;
  next?: number | null;
  prev?: number | null;
  pages?: number | null;
}
