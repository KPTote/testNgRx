import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SongState } from "./playlist.reducer";


export const selectSongState = createFeatureSelector<SongState>('song');
export const selectPlaylist = createFeatureSelector<SongState>('playlist');

export const selectLoading = createSelector(
  selectSongState,
  (state) => state.loading
);
