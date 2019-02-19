import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  CategoriasListComponent,
  CategoriasFormComponent
} from './';

const routes: Routes = [
  { path: '', component: CategoriasListComponent },
  { path: 'add', component: CategoriasFormComponent },
  { path: ':id/edit', component: CategoriasFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
