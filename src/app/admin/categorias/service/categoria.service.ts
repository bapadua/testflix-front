import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { Categoria } from '../model/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiPATH: string = 'api/categorias'

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Categoria[]> {
    return this.http.get(this.apiPATH).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategorias)
    )
  }

  getById(id: number): Observable<Categoria> {
    const url = `${this.apiPATH}/${id}`;
    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategoria)
    )
  }

  create(categoria: Categoria): Observable<Categoria> {
    return this.http.post(this.apiPATH, categoria).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategoria)
    )
  }

  update(categoria: Categoria): Observable<Categoria> {
    const url = `${this.apiPATH}/${categoria.id}`;

    return this.http.put(url, categoria).pipe(
      catchError(this.handleError),
      map(() => categoria)
    )
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiPATH}/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map(() => null))
  }

  private jsonDataToCategoria(json: any): Categoria {
    return json as Categoria;
  }

  private jsonDataToCategorias(json: any[]): Categoria[] {
    const categorias: Categoria[] = [];
    json.forEach(element =>
      categorias.push(element as Categoria));
    return categorias;
  }

  private handleError(error: any): Observable<any> {
    console.error('Erro na requisicao =>', error);
    return throwError(error);
  }
}
