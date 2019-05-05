import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardGridComponent } from '../dashboard/card-grid/card-grid.component';
import { MoviePageComponent } from '../dashboard/movie-page/movie-page.component';


const routes: Routes = [
  {
    path: '',
    component: CardGridComponent,
  },
  {
    path: 'movies/:id',
    component: MoviePageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
