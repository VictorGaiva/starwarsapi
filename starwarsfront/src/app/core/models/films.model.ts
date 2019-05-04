import { FilmsService } from '../services';

export interface Film {
  title: string;
  episodeId: number;
  openingCrawl: string;
  director: string;
  producer: string;
  releaseDate: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}
export interface SimpleFilm {
  title: string;
  episodeId: number;
  url: string;

}

export function SimpleFilmeFromRequest(data: any): SimpleFilm {
  return {
    title: data.title,
    episodeId: data.episode_id,
    url: data.url
  };
}

export function FilmFromRequest(data: any): Film {
  return {
    title: data.title,
    episodeId: data.episode_id,
    openingCrawl: data.opening_crawl,
    director: data.director,
    producer: data.producer,
    releaseDate: data.release_date,
    characters: data.characters,
    planets: data.planets,
    starships: data.starships,
    vehicles: data.vehicles,
    species: data.species,
    created: data.created,
    edited: data.edited,
    url: data.url
  };
}
