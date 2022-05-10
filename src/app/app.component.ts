import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from './models/character.model';
import { selectCharacters, selectCharactersLoading } from './store/selectors';
import { loadCharacters } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  characters$: Observable<Character[]>;
  isLoading$: Observable<boolean>;
  constructor(private store: Store) {
    this.characters$ = this.store.select(selectCharacters);
    this.isLoading$ = this.store.select(selectCharactersLoading);
  }
  ngOnInit(): void {
    this.store.dispatch(loadCharacters());
  }
}
