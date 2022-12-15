import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-justificar',
  templateUrl: './justificar.page.html',
  styleUrls: ['./justificar.page.scss'],
})
export class JustificarPage implements OnInit {

  constructor(private menu: MenuController,
              private msj : ToastController) { }

  ngOnInit() {
  }

  desplegarMenu(){
    this.menu.open('first');
  }

  async xde(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.msj.create({
      message: 'Se ha subido su justificativo',
      duration: 1000,
      position: position,
      color:"success"
    });

    await toast.present();
  }

}
