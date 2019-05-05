/**
 * TODO:
 * - Error handling for missing object fields.
 *
 */

const PosterURLs = [
  // tslint:disable-next-line:max-line-length
  'https://imgix.ranker.com/user_node_img/50048/1000953195/original/the-phantom-menace-teaser-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22',
  // tslint:disable-next-line:max-line-length
  'https://imgix.ranker.com/user_node_img/50048/1000953198/original/attack-of-the-clones-theatrical-poster-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22',
  // tslint:disable-next-line:max-line-length
  'https://imgix.ranker.com/user_node_img/50048/1000953204/original/revenge-of-the-sith-theatrical-poster-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces',
  // tslint:disable-next-line:max-line-length
  'https://imgix.ranker.com/user_node_img/50048/1000953139/original/a-new-hope-style-c-theatrical-poster-photo-u2?w=650&q=50&fm=pjpg&fit=crop&crop=faces',
  // tslint:disable-next-line:max-line-length
  'https://imgix.ranker.com/user_node_img/50048/1000953183/original/the-empire-strikes-back-special-edition-poster-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces',
  // tslint:disable-next-line:max-line-length
  'https://imgix.ranker.com/user_node_img/50048/1000953163/original/return-of-the-jedi-style-b-theatrical-poster-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces',
  // tslint:disable-next-line:max-line-length
  'https://imgix.ranker.com/user_node_img/50048/1000953208/original/the-force-awakens-theatrical-poster-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22',
];


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
  posterUrl: string;
  remoteId: number;
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
    url: data.url,
    posterUrl: PosterURLs[data.episode_id],
    remoteId: (data.url).split('/').reverse()[1]
  };
}

