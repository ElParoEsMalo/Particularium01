import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateDemandaPage } from './create-demanda.page';

const routes: Routes = [
  {
    path: '',
    component: CreateDemandaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateDemandaPageRoutingModule {}
