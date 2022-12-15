import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AlertController, MenuController, ToastController } from '@ionic/angular';
import { IClase,IClaseActual } from '../../interfaces/interfaces';
import { ClasesService } from '../../services/clases.service';

@Component({
  selector: 'app-leer-qr',
  templateUrl: './leer-qr.page.html',
  styleUrls: ['./leer-qr.page.scss'],
})

export class LeerQRPage implements OnInit {
  
  rut = localStorage.getItem('rut')
  myTiempoActual = new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds()
  myFecha = new Date().getDate()+'/'+(new Date().getMonth()+1)+'/'+new Date().getFullYear();
  
  constructor(private menu: MenuController,
              private msj : ToastController,
              private alert: AlertController,
              private classServ: ClasesService
              ) { }

  ngOnInit() {
    this.MensajeAdvertencia();
  }
  nuevaClase: IClaseActual = {
    nom_asig:"",
    modulo_seccion:"",
    fecha_clase:this.myFecha
  }
  qrCodeString = 'null';
  async MensajeAdvertencia(){
    const alert = await this.alert.create({
      header:'Permisos Requeridos',
      message: 'Hola! te recordamos que para utilizar de manera eficiente la aplicación, debes habilitar los permisos de cámara de tu dispositivo.',
      buttons:['Aceptar'],
    })
    await alert.present();
  }

  desplegarMenu(){
    this.menu.open('first');
  }
  generaScan(){
    this.qrCodeString = this.nuevaClase.nom_asig+' '+this.nuevaClase.modulo_seccion+' '+this.nuevaClase.fecha_clase;
    localStorage.setItem('asignatura',this.nuevaClase.nom_asig)
    localStorage.setItem('seccion',this.nuevaClase.modulo_seccion)
    console.log(this.qrCodeString)
  }
  asignatura = localStorage.getItem('asignatura')
  seccion = localStorage.getItem('seccion')
  claseActual : IClase = 
  {
    nom_asig:this.asignatura,
    modulo_seccion:this.seccion,
    fecha_clase:this.nuevaClase.fecha_clase,
    rut_estudiante: this.rut,
  }
  async MensajeListo(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.msj.create({
      message: 'Gracias '+localStorage.getItem('nombre')+' has quedado Presente!',
      duration: 1000,
      position: position,
      color:"success"
    });
    await toast.present();
    this.classServ.agregarClase(this.claseActual).subscribe();
  }

}
