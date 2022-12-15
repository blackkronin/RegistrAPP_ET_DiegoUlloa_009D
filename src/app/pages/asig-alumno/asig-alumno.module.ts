import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsigAlumnoPageRoutingModule } from './asig-alumno-routing.module';

import { AsigAlumnoPage } from './asig-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsigAlumnoPageRoutingModule
  ],
  declarations: [AsigAlumnoPage]
})
export class AsigAlumnoPageModule {}
