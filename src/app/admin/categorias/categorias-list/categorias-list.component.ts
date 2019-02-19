import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../service';
import { Categoria } from '../model/categoria.model';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.css']
})
export class CategoriasListComponent implements OnInit {

  categorias: Categoria[] = [];
  
  constructor(
    private categoriaService: CategoriaService,

  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.categoriaService.getAll().subscribe(categorias => this.categorias = categorias,
      error => alert('Erro ao recuperar a lista'))
  }

  delete(categoria){
    const confirmDelete = confirm('Deseja excluir essa categoria?');
    if(confirmDelete){
      this.categoriaService.delete(categoria.id).subscribe(() => {
        this.categorias = this.categorias.filter(element => element != categoria, () => alert('Erro ao tentar excluir'));
      })
    }
  }

}
