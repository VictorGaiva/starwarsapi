import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material';

import { AppComponent } from './app.component';
import { MovieCardComponent } from './dashboard/movie-card/movie-card.component';
import { CardGridComponent } from './dashboard/card-grid/card-grid.component';
import { MoviePageComponent } from './dashboard/movie-page/movie-page.component';

const appRoutes: Routes = [
  {
    path: 'movies/:id',
    component: MoviePageComponent
  },
  {
    path: 'movies',
    component: AppComponent
  },
  {
    path: '**',
    component: AppComponent
  },
  {
    path: '',
    component: AppComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    CardGridComponent,
    MoviePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
