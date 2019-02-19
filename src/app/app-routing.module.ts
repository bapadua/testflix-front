import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'filmes', pathMatch: 'full'},
  {path: 'adm/cat', loadChildren: './admin/categorias/categorias.module#CategoriasModule'},
  {path: 'filmes', loadChildren: './pages/pages.module#PagesModule'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
