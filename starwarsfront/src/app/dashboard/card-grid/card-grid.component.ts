import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../core/services/films.service';
import { Film, SimpleFilm } from 'src/app/core/models/films.model';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.css'],

})

export class CardGridComponent implements OnInit {
  Cards: SimpleFilm[];
  LoadingState = true;
  constructor(private FilmAPI: FilmsService) { }

  ngOnInit() {
    // 1: Async request data for the movie specified from the URI.
    this.FilmAPI.getMovieList()
      .subscribe((data: SimpleFilm[]) => {
        this.Cards = data;
      });
  }

}

