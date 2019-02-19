import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MovieRowComponent } from './movie-row/movie-row.component';
import { DestaqueComponent } from './destaque/destaque.component';

@NgModule({
  declarations: [MovieRowComponent, DestaqueComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
