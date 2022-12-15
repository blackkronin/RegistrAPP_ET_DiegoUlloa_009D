import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListclasesPageRoutingModule } from './listclases-routing.module';

import { ListclasesPage } from './listclases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListclasesPageRoutingModule
  ],
  declarations: [ListclasesPage]
})
export class ListclasesPageModule {}
