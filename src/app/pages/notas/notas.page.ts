import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

desplegarMenu(){
  this.menu.open('first');
}

}
