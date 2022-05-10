import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { Character } from '../models/character.model';

interface ICharactersResponse {
  info: Object;
  results: Character[];
}

@Injectable({ providedIn: 'root' })
export class CharactersService {
  mainApiLink = 'https://rickandmortyapi.com/api/';
  constructor(private http: HttpClient) {}

  get() {
    const link = `${this.mainApiLink}character`;

    return this.http.get<ICharactersResponse>(link).pipe(
      map((res) => res.results),
      delay(1000)
    );
  }
}
