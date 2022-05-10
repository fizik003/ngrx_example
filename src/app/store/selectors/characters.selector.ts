import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CharactersState } from '../reducers/characters.reducer';

const charactersState = createFeatureSelector<CharactersState>('characters');

export const selectCharacters = createSelector(
  charactersState,
  (state) => state.items
);

export const selectCharactersLoading = createSelector(
  charactersState,
  (state) => state.loading
);
