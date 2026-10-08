import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personaje, RespuestaPersonajes } from '../interfaces/personaje';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private url = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }


  getPersonajes(pagina: number = 1, nombre: string = ''): Observable<RespuestaPersonajes> {
    return this.http.get<RespuestaPersonajes>(`${this.url}?page=${pagina}&name=${nombre}`);
  }


  getPersonaje(id: number): Observable<Personaje> {
    return this.http.get<Personaje>(`${this.url}/${id}`);
  }
}
