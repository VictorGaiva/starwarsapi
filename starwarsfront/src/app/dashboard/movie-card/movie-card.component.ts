import { Component, OnInit, Input } from '@angular/core';
import { FilmsService } from '../../core/services/films.service';
import { Film, SimpleFilm } from 'src/app/core/models/films.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})

export class MovieCardComponent implements OnInit {
  @Input() MovieID: number;
  @Input() MovieTitle: string;
  MovieInformation: Film;

  constructor(private FilmAPI: FilmsService) { }

  ngOnInit() {
    // 1: Async request data for the movie from the specified ID

    this.FilmAPI.getMovieInformation(this.MovieID)
      .then((data: Film) => {
        this.MovieInformation = data;
      });
  }
}
