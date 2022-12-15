import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
import { IClaseActual } from '../../interfaces/interfaces';

@Component({
  selector: 'app-desplegar-qr',
  templateUrl: './desplegar-qr.page.html',
  styleUrls: ['./desplegar-qr.page.scss'],
})


export class DesplegarQrPage implements OnInit {

  myTiempoActual = new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds()
  myFecha = new Date().getDate()+'/'+(new Date().getMonth()+1)+'/'+new Date().getFullYear();

  nuevaClase: IClaseActual = {
    nom_asig:"",
    modulo_seccion:"",
    fecha_clase:this.myFecha
  }

  qrCodeString = 'null';
  constructor(private menu:MenuController) { }
  
  
  ngOnInit() {
  }

  desplegarMenu(){
    this.menu.open('first');
  }

  generaScan(){
    this.qrCodeString = this.nuevaClase.nom_asig+' '+this.nuevaClase.modulo_seccion+' '+this.nuevaClase.fecha_clase;
    console.log(this.qrCodeString)
  }
  
}
