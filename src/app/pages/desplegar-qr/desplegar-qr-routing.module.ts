import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesplegarQrPage } from './desplegar-qr.page';

const routes: Routes = [
  {
    path: '',
    component: DesplegarQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesplegarQrPageRoutingModule {}
