import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsigAlumnoPage } from './asig-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: AsigAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsigAlumnoPageRoutingModule {}
