/**
 * TODO:
 * - Error handling for failed http requests.
 *
 */

import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Film, SimpleFilm, FilmFromRequest, SimpleFilmeFromRequest } from '../models/films.model';

@Injectable({
  providedIn: 'root'
})

export class FilmsService {
  constructor(private http: HttpClient) { }
  ApiPATH = 'https://swapi.co/api';

  getMovieList() {
    return this.http.get(this.ApiPATH + '/films').pipe(map(data => {
      // tslint:disable-next-line:no-string-literal
      return (data['results']).map(element => {
        return SimpleFilmeFromRequest(element);
      });
    }));

  }
  getMovieInformation(searchUrl: string) {
    return this.http.get(searchUrl).pipe(map(data => {
      return FilmFromRequest(data);
    }));
  }
}
