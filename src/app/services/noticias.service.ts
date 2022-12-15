import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaFeriados } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getFeriadosChile(){
    return (this.http.get<RespuestaFeriados>('https://api.victorsanmartin.com/feriados/en.json'));
  }
}
