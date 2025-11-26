import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPlaylist } from '../store/api.actions';
import { decrement, increment, reset } from '../store/counter.actions';
import { selectTodos } from '../store/counter.selector';
import { selectPlaylist } from '../store/playlist.selector';

@Component({
  selector: 'app-table-tester',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, RouterLink],
  templateUrl: './table-tester.component.html',
  styleUrl: './table-tester.component.css'
})
export class TableTesterComponent implements OnInit {

  private store = inject(Store);
  public hola: Observable<number> = this.store.select(selectTodos)

  public playlist: Observable<any> = this.store.select(selectPlaylist);
  ngOnInit() {
    console.log('Store instance in TABLE:', this.store);

    this.store.dispatch(getPlaylist())
  }

    increment() {
      this.store.dispatch(increment());
    }

    decrement() {
      this.store.dispatch(decrement());
    }

    reset() {
      this.store.dispatch(reset());
    }

}
