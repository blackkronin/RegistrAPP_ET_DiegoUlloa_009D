import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListclasesPage } from './listclases.page';

const routes: Routes = [
  {
    path: '',
    component: ListclasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListclasesPageRoutingModule {}
