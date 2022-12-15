import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestiondocentePage } from './gestiondocente.page';

const routes: Routes = [
  {
    path: '',
    component: GestiondocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestiondocentePageRoutingModule {}
