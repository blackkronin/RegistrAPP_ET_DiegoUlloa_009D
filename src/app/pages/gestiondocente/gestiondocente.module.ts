import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestiondocentePageRoutingModule } from './gestiondocente-routing.module';

import { GestiondocentePage } from './gestiondocente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestiondocentePageRoutingModule
  ],
  declarations: [GestiondocentePage]
})
export class GestiondocentePageModule {}
