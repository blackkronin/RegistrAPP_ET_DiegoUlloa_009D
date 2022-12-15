import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-gestiondocente',
  templateUrl: './gestiondocente.page.html',
  styleUrls: ['./gestiondocente.page.scss'],
})
export class GestiondocentePage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  desplegarMenu(){
    this.menu.open('first');
  }

}
