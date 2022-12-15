import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-ver-horario',
  templateUrl: './ver-horario.page.html',
  styleUrls: ['./ver-horario.page.scss'],
})
export class VerHorarioPage implements OnInit {

  constructor(private menu : MenuController) { }

  ngOnInit() {
  }

  desplegarMenu(){
    this.menu.open('first');
  }

}
