import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IClase, IClases } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  constructor(private http: HttpClient) { }


  listarClases():Observable<IClases>{
    return this.http.get<IClases>(`${environment.apiURL}/clases`)
  }
  agregarClase(newClase : IClase):Observable<IClase>{
    return this.http.post<IClase>(`${environment.apiURL}/clases`,newClase)
  }
}
