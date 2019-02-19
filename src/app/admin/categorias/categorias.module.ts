import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { 
  CategoriasFormComponent, 
  CategoriasListComponent,
  AdmHeaderComponent
} from './';

@NgModule({
  declarations: [
    CategoriasFormComponent, 
    CategoriasListComponent, 
    AdmHeaderComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule
  ]
})
export class CategoriasModule { }
