import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/core/models/films.model';
import { FilmsService } from '../../core/services/films.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  constructor(
    private FilmAPI: FilmsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }
  MovieInformation: Film;

  ngOnInit() {

    // tslint:disable-next-line:no-string-literal
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.FilmAPI.getMovieInformation(`https://swapi.co/api/films/${params.movieId}/`)
        .subscribe((data: Film) => {
          console.log(data);
          this.MovieInformation = data;
        });
    });
  }
}
