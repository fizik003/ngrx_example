import { createAction } from '@ngrx/store';
import { Character } from 'src/app/models/character.model';

const NAMESPACE = '[APP]';
export const loadCharacters = createAction(`${NAMESPACE} Load Chracters`);

export const loadCharactersSuccess = createAction(
  `${NAMESPACE} Load Projects SUCCESS`,
  (payload: Character[]) => ({ payload })
);

export const loadCharactersFail = createAction(
  `${NAMESPACE} Load Projects FAIL`,
  (payload: any) => ({ payload })
);
