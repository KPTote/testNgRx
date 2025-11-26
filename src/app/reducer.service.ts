import { Injectable } from '@angular/core';
import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './store/counter.actions';


@Injectable({
  providedIn: 'root'
})
export class ReducerService {

  initialState = 0;

  constructor() { }

  tester(){
  return createReducer(
    0,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(reset, (state) => 0)
  );
  }



}
