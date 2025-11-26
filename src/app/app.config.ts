import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { counterReducer } from './store/counter.reducer';
import { PlaylistEffects } from './store/playlist.effects';
import { playList } from './store/playlist.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    // provideStore(),
    provideStore({
      counter: counterReducer,
      // song: songReducer,
      playlist: playList
    }),
    provideEffects([PlaylistEffects]),

    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, // If set to true, will include stack trace for every dispatched action, so you can see where the action was dispatched from
      traceLimit: 75, // The maximum number of stack trace frames to be stored (not applicable for Firefox)
    }),
    provideHttpClient()


  ]
};
