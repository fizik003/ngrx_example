import { createReducer, on } from '@ngrx/store';
import * as fromAction from '../actions';

import { Character } from 'src/app/models/character.model';

export interface CharactersState {
  items: Character[];
  loading: boolean;
}

const INITIAL_STATE: CharactersState = {
  items: [],
  loading: true,
};

export const charactersReducer = createReducer(
  INITIAL_STATE,

  on(fromAction.loadCharacters, (state) => ({
    ...state,
    loading: true,
    items: [],
  })),

  on(fromAction.loadCharactersSuccess, (state, { payload }) => ({
    ...state,
    loading: false,
    items: payload,
  })),

  on(fromAction.loadCharactersFail, (state) => ({
    ...state,
    loading: false,
    items: [],
  }))
);
