import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-enviarmsj',
  templateUrl: './enviarmsj.page.html',
  styleUrls: ['./enviarmsj.page.scss'],
})
export class EnviarmsjPage implements OnInit {

  constructor(private menu:MenuController,
              private msj:ToastController) { }

  ngOnInit() {
  }

  desplegarMenu(){
    this.menu.open('first');
  }

  async MensajeEnviado(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.msj.create({
      message: 'Se ha enviado el mensaje a él(los) Alumnos',
      duration: 1000,
      position: position,
      color:"success"
    });

    await toast.present();
  }

}
