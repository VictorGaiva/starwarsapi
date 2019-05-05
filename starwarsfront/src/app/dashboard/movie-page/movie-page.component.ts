import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/core/models/films.model';
import { FilmsService } from '../../core/services/films.service';


@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  constructor(private FilmAPI: FilmsService) { }
  MovieInformation: Film;

  ngOnInit() {
    this.FilmAPI.getMovieInformation('https://swapi.co/api/films/2/')
      .subscribe((data: Film) => {
        console.log(data);
        this.MovieInformation = data;
      });
  }
}
