import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscadorOfertaPage } from './buscador-oferta.page';

const routes: Routes = [
  {
    path: '',
    component: BuscadorOfertaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscadorOfertaPageRoutingModule {}
