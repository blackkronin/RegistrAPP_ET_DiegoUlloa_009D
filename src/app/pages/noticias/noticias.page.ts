import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';
import { Feriado } from '../../interfaces/interfaces';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  offdays: Feriado[] = [];

  constructor(private menu: MenuController,
              private noticiasServ: NoticiasService) { }

  ngOnInit() {
    this.noticiasServ.getFeriadosChile().subscribe(resp =>{
      console.log('feriados',resp);
      this.offdays.push(...resp.data);
    });
  }

  desplegarMenu(){
    this.menu.open('first');
  }



}
