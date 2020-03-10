import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarOfertasPage } from './mostrar-ofertas.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarOfertasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarOfertasPageRoutingModule {}
