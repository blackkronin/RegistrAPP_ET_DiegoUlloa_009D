import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteGuard implements CanActivate {
  
  constructor(private toastCtrl: ToastController){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem('rol')=="estudiante"){
      return true;
    }
    else{
      this.alertaError();
      return false;
    }
  }
  async alertaError(){
    const alert = await this.toastCtrl.create({
      message:'No tiene permitido ingresar aqui, no es Alumno.',
      duration:3000,
      color:'danger',
      position:'bottom'
    })
    await alert.present();
    return;
  }
}
