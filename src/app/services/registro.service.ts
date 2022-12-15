import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Usuario{
  nomUser: string;
  correoUser: string;
  passUser: string;
  repassUser: string;
  run: string;
  rol: string;
}

const USERS_KEY=  'my-users';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private _storage : Storage;

  constructor(private storage: Storage) {
    this.init();
   }

  async init(){
    const storage= await this.storage.create();
    this._storage=storage;
  }

  async agregarUsuario(user: Usuario):Promise<any>{
    return this.storage.get(USERS_KEY).then((datos: Usuario[])=>{ 
      if(datos){
        datos.push(user);
        return this.storage.set(USERS_KEY,datos);
      }
      else{
        return this.storage.set(USERS_KEY, [user]);
      }
    })
  }

  async getUsers():Promise<Usuario[]>{
    return this.storage.get(USERS_KEY);
  }

}
