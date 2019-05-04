import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  imports: [
    MatGridListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatGridListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
})
export class MaterialModule { }
