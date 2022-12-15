import { Component, OnInit } from '@angular/core';
import { ClasesService } from '../../services/clases.service';
import { InfiniteScrollCustomEvent,LoadingController, MenuController } from '@ionic/angular'

@Component({
  selector: 'app-listclases',
  templateUrl: './listclases.page.html',
  styleUrls: ['./listclases.page.scss'],
})
export class ListclasesPage implements OnInit {

  clases=[]
  constructor(private clasesServ: ClasesService,private loadCtrl: LoadingController,private menu: MenuController) { }

  ngOnInit() {
    this.cargarClases();
  }

  desplegarMenu(){
    this.menu.open('first');
  }

  async cargarClases(event?: InfiniteScrollCustomEvent){
    const cargando = await this.loadCtrl.create({
      message: "Cargando Clases...",
      spinner: "bubbles",
    });
    await cargando.present();
    this.clasesServ.listarClases().subscribe(
      (resp)=>{
        cargando.dismiss();
        console.log(resp);
        let listString = JSON.stringify(resp);
        this.clases = JSON.parse(listString);
        event?.target.complete();
      },
      (err)=>{
        console.log(err.message);
        cargando.dismiss();
      }
    )
  }
}
