import { createReducer, on } from "@ngrx/store";
import { addSong, addSongError, addSongSuccess, getPlaylist, getPlaylistError, getPlaylistSuccess } from "./api.actions";

export interface SongState {
  songs: any[];
  loading: boolean;
  error: any;
}

export const initialState: SongState = {
  songs: [],
  loading: false,
  error: undefined
}
export const songReducer = createReducer(
  initialState,
  on(addSong, state => ({
    ...state,
    loading: true,
    error: null
  })),

    on(addSongSuccess, (state, { song }) => ({
    ...state,
    loading: false,
    songs: [...state.songs, song],
    error: null
  })),

  // Cuando hubo error en el POST
  on(addSongError, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
)

export const playList = createReducer(
  initialState,
  on(getPlaylist, state => ({
    ...state,
    prueba: 'hola mundo',
    loading: true,
    error: null
  })),

    on(getPlaylistSuccess, (state, {playlist})=> ({
    ...state,
    loading: false,
    songs: playlist,
    error: null
  })),

     on(getPlaylistError, (state, {error})=> ({
    ...state,
    loading: false,
    error: error
  }))
)
