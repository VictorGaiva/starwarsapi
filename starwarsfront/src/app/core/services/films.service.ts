import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Film, SimpleFilm, FilmFromRequest, SimpleFilmeFromRequest } from '../models/films.model';

@Injectable({
  providedIn: 'root'
})

export class FilmsService {
  constructor(private http: HttpClient) { }
  ApiPATH = 'https://swapi.co/api';
  FilmList: {}[] =
    [{
      title: 'A New Hope',
      episodeId: 4,
      openingCrawl: 'There is unrest in the Galactic\r\n\
      Senate. Several thousand solar\r\n\
      systems have declared their\r\n\
      intentions to leave the Republic.\r\n\
      \r\n\
      This separatist movement,\r\n\
      under the leadership of the\r\n\
      mysterious Count Dooku, has\r\n\
      made it difficult for the limited\r\n\
      number of Jedi Knights to maintain \r\n\
      peace and order in the galaxy.\r\n\
      \r\n\
      Senator Amidala, the former\r\n\
      Queen of Naboo, is returning\r\n\
      to the Galactic Senate to vote\r\n\
      on the critical issue of creating\r\n\
      an ARMY OF THE REPUBLIC\r\n\
      to assist the overwhelmed\r\n\
      Jedi....',
      director: 'George Lucas',
      producer: 'Gary Kurtz, Rick McCallum',
      releaseDate: '1977-05-25',
      characters: [
        'https://swapi.co/api/people/1/',
        'https://swapi.co/api/people/2/',
        'https://swapi.co/api/people/3/',
        'https://swapi.co/api/people/4/',
        'https://swapi.co/api/people/5/',
        'https://swapi.co/api/people/6/',
        'https://swapi.co/api/people/7/',
        'https://swapi.co/api/people/8/',
        'https://swapi.co/api/people/9/',
        'https://swapi.co/api/people/10/',
        'https://swapi.co/api/people/12/',
        'https://swapi.co/api/people/13/',
        'https://swapi.co/api/people/14/',
        'https://swapi.co/api/people/15/',
        'https://swapi.co/api/people/16/',
        'https://swapi.co/api/people/18/',
        'https://swapi.co/api/people/19/',
        'https://swapi.co/api/people/81/'
      ],
      planets: [
        'https://swapi.co/api/planets/2/',
        'https://swapi.co/api/planets/3/',
        'https://swapi.co/api/planets/1/'
      ],
      starships: [
        'https://swapi.co/api/starships/2/',
        'https://swapi.co/api/starships/3/',
        'https://swapi.co/api/starships/5/',
        'https://swapi.co/api/starships/9/',
        'https://swapi.co/api/starships/10/',
        'https://swapi.co/api/starships/11/',
        'https://swapi.co/api/starships/12/',
        'https://swapi.co/api/starships/13/'
      ],
      vehicles: [
        'https://swapi.co/api/vehicles/4/',
        'https://swapi.co/api/vehicles/6/',
        'https://swapi.co/api/vehicles/7/',
        'https://swapi.co/api/vehicles/8/'
      ],
      species: [
        'https://swapi.co/api/species/5/',
        'https://swapi.co/api/species/3/',
        'https://swapi.co/api/species/2/',
        'https://swapi.co/api/species/1/',
        'https://swapi.co/api/species/4/'
      ],
      created: '2014-12-10T14:23:31.880000Z',
      edited: '2015-04-11T09:46:52.774897Z',
      url: 'https://swapi.co/api/films/1/'
    },
    {
      title: 'Attack of the Clones',
      episodeId: 2,
      openingCrawl: 'It is a period of civil war.\r\n\
      Rebel spaceships, striking\r\n\
      from a hidden base, have won\r\n\
      their first victory against\r\n\
      the evil Galactic Empire.\r\n\
      \r\n\
      During the battle, Rebel\r\n\
      spies managed to steal secret\r\n\
      plans to the Empire\'s\r\n\
      ultimate weapon, the DEATH\r\n\
      STAR, an armored space\r\n\
      station with enough power\r\n\
      to destroy an entire planet.\r\n\
      \r\n\
      Pursued by the Empire\'s\r\n\
      sinister agents, Princess\r\n\
      Leia races home aboard her\r\n\
      starship, custodian of the\r\n\
      stolen plans that can save her\r\n\
      people and restore\r\n\
      freedom to the galaxy....',
      director: 'George Lucas',
      producer: 'Rick McCallum',
      releaseDate: '2002-05-16',
      characters: [
        'https://swapi.co/api/people/2/',
        'https://swapi.co/api/people/3/',
        'https://swapi.co/api/people/6/',
        'https://swapi.co/api/people/7/',
        'https://swapi.co/api/people/10/',
        'https://swapi.co/api/people/11/',
        'https://swapi.co/api/people/20/',
        'https://swapi.co/api/people/21/',
        'https://swapi.co/api/people/22/',
        'https://swapi.co/api/people/33/',
        'https://swapi.co/api/people/36/',
        'https://swapi.co/api/people/40/',
        'https://swapi.co/api/people/43/',
        'https://swapi.co/api/people/46/',
        'https://swapi.co/api/people/51/',
        'https://swapi.co/api/people/52/',
        'https://swapi.co/api/people/53/',
        'https://swapi.co/api/people/58/',
        'https://swapi.co/api/people/59/',
        'https://swapi.co/api/people/60/',
        'https://swapi.co/api/people/61/',
        'https://swapi.co/api/people/62/',
        'https://swapi.co/api/people/63/',
        'https://swapi.co/api/people/64/',
        'https://swapi.co/api/people/65/',
        'https://swapi.co/api/people/66/',
        'https://swapi.co/api/people/67/',
        'https://swapi.co/api/people/68/',
        'https://swapi.co/api/people/69/',
        'https://swapi.co/api/people/70/',
        'https://swapi.co/api/people/71/',
        'https://swapi.co/api/people/72/',
        'https://swapi.co/api/people/73/',
        'https://swapi.co/api/people/74/',
        'https://swapi.co/api/people/75/',
        'https://swapi.co/api/people/76/',
        'https://swapi.co/api/people/77/',
        'https://swapi.co/api/people/78/',
        'https://swapi.co/api/people/82/',
        'https://swapi.co/api/people/35/'
      ],
      planets: [
        'https://swapi.co/api/planets/8/',
        'https://swapi.co/api/planets/9/',
        'https://swapi.co/api/planets/10/',
        'https://swapi.co/api/planets/11/',
        'https://swapi.co/api/planets/1/'
      ],
      starships: [
        'https://swapi.co/api/starships/21/',
        'https://swapi.co/api/starships/39/',
        'https://swapi.co/api/starships/43/',
        'https://swapi.co/api/starships/47/',
        'https://swapi.co/api/starships/48/',
        'https://swapi.co/api/starships/49/',
        'https://swapi.co/api/starships/32/',
        'https://swapi.co/api/starships/52/',
        'https://swapi.co/api/starships/58/'
      ],
      vehicles: [
        'https://swapi.co/api/vehicles/4/',
        'https://swapi.co/api/vehicles/44/',
        'https://swapi.co/api/vehicles/45/',
        'https://swapi.co/api/vehicles/46/',
        'https://swapi.co/api/vehicles/50/',
        'https://swapi.co/api/vehicles/51/',
        'https://swapi.co/api/vehicles/53/',
        'https://swapi.co/api/vehicles/54/',
        'https://swapi.co/api/vehicles/55/',
        'https://swapi.co/api/vehicles/56/',
        'https://swapi.co/api/vehicles/57/'
      ],
      species: [
        'https://swapi.co/api/species/32/',
        'https://swapi.co/api/species/33/',
        'https://swapi.co/api/species/2/',
        'https://swapi.co/api/species/35/',
        'https://swapi.co/api/species/6/',
        'https://swapi.co/api/species/1/',
        'https://swapi.co/api/species/12/',
        'https://swapi.co/api/species/34/',
        'https://swapi.co/api/species/13/',
        'https://swapi.co/api/species/15/',
        'https://swapi.co/api/species/28/',
        'https://swapi.co/api/species/29/',
        'https://swapi.co/api/species/30/',
        'https://swapi.co/api/species/31/'
      ],
      created: '2014-12-20T10:57:57.886000Z',
      edited: '2015-04-11T09:45:01.623982Z',
      url: 'https://swapi.co/api/films/5/'
    }];

  Delay = 0;

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
