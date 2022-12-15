import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesplegarQrPageRoutingModule } from './desplegar-qr-routing.module';

import { DesplegarQrPage } from './desplegar-qr.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesplegarQrPageRoutingModule,
    QRCodeModule
  ],
  declarations: [DesplegarQrPage]
})
export class DesplegarQrPageModule {}
