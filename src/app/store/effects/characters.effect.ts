import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CharactersService } from 'src/app/services/characters.service';
import * as fromActions from '../actions';

@Injectable()
export class CharactersEffect {
  constructor(
    private charctersService: CharactersService,
    private actions$: Actions
  ) {}

  loadCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadCharacters),
      switchMap(() =>
        this.charctersService.get().pipe(
          map((characters) => fromActions.loadCharactersSuccess(characters)),
          catchError((error) => of(fromActions.loadCharactersFail(error)))
        )
      )
    )
  );
}
