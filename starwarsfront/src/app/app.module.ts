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

import { AppRoutingModule } from './app-routing/app-routing.module';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
