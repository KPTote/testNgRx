import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../store/counter.actions';
import { selectTodos } from '../store/counter.selector';
import { selectLoading, selectPlaylist } from '../store/playlist.selector';

@Component({
  selector: 'app-my-counter',
  standalone: true,
  imports: [AsyncPipe, CommonModule, RouterLink],
  templateUrl: './my-counter.component.html',
  styleUrl: './my-counter.component.css'
})
export class MyCounterComponent {
  private store = inject(Store);
  count$: Observable<number> = this.store.select(selectTodos);
  loading$ = this.store.select(selectLoading);
  public playlist : Observable<any> = this.store.select(selectPlaylist);


  increment() {
    this.store.dispatch(increment());

    // this.store.dispatch(addSong({
    //   userName: 'Fernando Posadas',
    //   songName: 'El himno',
    //   artistName: 'El himno',
    //   numberOnList: 15
    // }))

  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
