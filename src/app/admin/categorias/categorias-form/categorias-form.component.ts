import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import toastr from 'toastr';

import { CategoriaService } from '../service';
import { Categoria } from '../model/categoria.model';

@Component({
  selector: 'app-categorias-form',
  templateUrl: './categorias-form.component.html',
  styleUrls: ['./categorias-form.component.css']
})
export class CategoriasFormComponent implements OnInit, AfterContentChecked {

  currentAction: string;
  categoriaForm: FormGroup;
  pageTitle: string;
  serverErrorMessages: string[] = null;
  submitForm: boolean = false;
  categoria: Categoria = new Categoria();


  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.setCurrentAction();
    this.buildCategoriaForm();
    this.loadCategoria();
  }

  private loadCategoria(): any {
    throw new Error("Method not implemented.");
  }
  private buildCategoriaForm(): any {
    throw new Error("Method not implemented.");
  }
  private setCurrentAction(): any {
    throw new Error("Method not implemented.");
  }

  ngAfterContentChecked(): void {
    throw new Error("Method not implemented.");
  }


}
