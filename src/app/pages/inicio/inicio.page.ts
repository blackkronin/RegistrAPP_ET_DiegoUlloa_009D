import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private menu : MenuController,
              private bienvenida : AlertController) { }

  ngOnInit() {
    this.mensajeBienvenida();
  }
  
  desplegarMenu(){
    this.menu.open('first');
  }

  async mensajeBienvenida(){
    const bienvenida = await this.bienvenida.create({
      header:'Bienvenido!',
      message: 'Qué gusto verte de vuelta '+localStorage.getItem('nombre'),
      buttons:['Aceptar'],
    })
    await bienvenida.present();
  }
}
