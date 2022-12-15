import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  desplegarMenu(){
    this.menu.open('first');
  }

}
