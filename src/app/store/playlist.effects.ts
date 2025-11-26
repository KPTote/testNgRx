import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from "rxjs";
import { addSong, addSongError, addSongSuccess, getPlaylist, getPlaylistError, getPlaylistSuccess } from "./api.actions";


@Injectable()
export class PlaylistEffects {


  private actions = inject(Actions)
  private http = inject(HttpClient)

  addSong = createEffect(() =>
    this.actions.pipe(
      ofType(addSong),
      mergeMap(({ userName, songName, artistName, numberOnList }) =>
        this.http.post('http://localhost:3000/api/add-song', {
          userName,
          songName,
          artistName,
          numberOnList
        })
          .pipe(
            map((song: any) => addSongSuccess({ song })),
            catchError(error => of(addSongError({ error })))
          )
      )
    )
  )

  getPlaylist = createEffect(() =>
    this.actions.pipe(
      ofType(getPlaylist),
      mergeMap(() =>
        this.http.get<any[]>('http://localhost:3000/api/playlist')
          .pipe(
            map((playlist: any[]) => getPlaylistSuccess({ playlist })),
            catchError(error => of(getPlaylistError({ error })))
          ))
    )
  )

};
