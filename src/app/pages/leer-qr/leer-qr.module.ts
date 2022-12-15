import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeerQRPageRoutingModule } from './leer-qr-routing.module';

import { LeerQRPage } from './leer-qr.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeerQRPageRoutingModule,
    QRCodeModule
  ],
  declarations: [LeerQRPage]
})
export class LeerQRPageModule {}
