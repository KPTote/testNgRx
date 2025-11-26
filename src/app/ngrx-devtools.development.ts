import { provideStoreDevtools } from "@ngrx/store-devtools";

export const ngrxDevTools = provideStoreDevtools({
  maxAge: 25, // Retains last 25 states
  logOnly: false, // Restrict extension to log-only mode
  autoPause: true, // Pauses recording actions and state changes when the extension window is not open
  trace: false, // If set to true, will include stack trace for every dispatched action, so you can see where the action was dispatched from
  traceLimit: 75, // The maximum number of stack trace frames to be stored (not applicable for Firefox)
})
