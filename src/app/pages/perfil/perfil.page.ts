import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Usuario } from '../../services/registro.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  user = <Usuario>{};

  constructor(private menu: MenuController,
              private navCtrl: NavController
              ) { }

  ngOnInit() {
    this.userLogged();
  }

  desplegarMenu(){
    this.menu.open('first');
  }

  userLogged(){
    if(localStorage.getItem('ingresado')){
      
    }
  }

  cerrarSesion(){
    // localStorage.removeItem('ingresado');
    // localStorage.removeItem('nombre');
    // localStorage.removeItem('rol');
    localStorage.clear();
    this.navCtrl.navigateRoot('login');
  }


}
