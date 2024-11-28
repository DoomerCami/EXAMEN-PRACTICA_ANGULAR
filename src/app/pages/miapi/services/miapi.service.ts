import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listaRanma, RanmaInterface } from '../interfaces/ranma';


@Injectable({
  providedIn: 'root'
})
export class RanmaService {

  private urlBase: string = 'http://localhost:3333/api/ranma';  // Cambia esto con la URL de tu API

  constructor(private http: HttpClient) { }

  // Obtener todos los personajes de Ranma
  getAllRanma(url: string = this.urlBase): Observable<listaRanma> {
    return this.http.get<listaRanma>(url);
  }

  // Obtener un personaje específico por ID
  getRanma(id: any): Observable<RanmaInterface> {
    return this.http.get<RanmaInterface>(`${this.urlBase}/${id}`);
  }

  // Actualizar un personaje (editar)
  putRanma(form: any): Observable<RanmaInterface> {
    return this.http.put<RanmaInterface>(`${this.urlBase}/${form._id}`, form);
  }

  // Eliminar un personaje
  deleteRanma(form: any): Observable<RanmaInterface> {
    return this.http.delete<RanmaInterface>(`${this.urlBase}/${form._id}`);
  }

  // Agregar un nuevo personaje
  postRanma(form: any): Observable<RanmaInterface> {
    return this.http.post<RanmaInterface>(`${this.urlBase}`, form);
  }
}