import { createAction, props } from "@ngrx/store";


//Para añadir una canción con un post, en props tengo que enviar el request del endpoint
export const addSong = createAction(
  '[Song] Add song',
  props<{
    userName: string;
    songName: string;
    artistName: string;
    numberOnList: number;
  }>()
);

//Manejar cuando el endpoint responda exitosamente
export const addSongSuccess = createAction(
  '[Song] Add Song Success',
  props<{ song: any }>()
)


//Cuando el endpoint responde error
export const addSongError = createAction(
  '[Song] Add song error',
  props<{ error: any }>()
)


export const getPlaylist = createAction(
  '[Song] Get playlist'
);

export const getPlaylistSuccess = createAction(
  '[Song] Get playlist Success',
  props<{playlist: any[]}>()
)

export const getPlaylistError = createAction(
  '[Song] Get playlist Error',
  props<{ error: any }>()
)
