import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieRowComponent } from './movie-row/movie-row.component';

const routes: Routes = [
  { path: '', component: MovieRowComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
