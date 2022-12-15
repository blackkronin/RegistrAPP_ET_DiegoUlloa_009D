import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnviarmsjPageRoutingModule } from './enviarmsj-routing.module';

import { EnviarmsjPage } from './enviarmsj.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnviarmsjPageRoutingModule
  ],
  declarations: [EnviarmsjPage]
})
export class EnviarmsjPageModule {}
