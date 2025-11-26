import { createFeatureSelector } from '@ngrx/store';

// todo.selectors.ts  import { Todo } from './todo.reducer';
//



export const selectTodos = createFeatureSelector<number>('counter');


