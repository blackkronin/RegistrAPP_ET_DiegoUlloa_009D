import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-asig-alumno',
  templateUrl: './asig-alumno.page.html',
  styleUrls: ['./asig-alumno.page.scss'],
})
export class AsigAlumnoPage implements OnInit {

  constructor(private menu:MenuController) { }

  ngOnInit() {
  }

  desplegarMenu(){
    this.menu.open('first');
  }

}
