import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnviarmsjPage } from './enviarmsj.page';

const routes: Routes = [
  {
    path: '',
    component: EnviarmsjPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnviarmsjPageRoutingModule {}
