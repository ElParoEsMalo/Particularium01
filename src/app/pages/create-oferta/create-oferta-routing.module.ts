import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateOfertaPage } from './create-oferta.page';

const routes: Routes = [
  {
    path: '',
    component: CreateOfertaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateOfertaPageRoutingModule {}
