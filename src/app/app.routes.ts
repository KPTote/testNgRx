import { Routes } from '@angular/router';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { TableTesterComponent } from './table-tester/table-tester.component';

export const routes: Routes = [
  {
    path: 'counter',
    component: MyCounterComponent
  },
  {
    path: 'table',
    component: TableTesterComponent
  }
];
