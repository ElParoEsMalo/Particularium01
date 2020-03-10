import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarDemandasPage } from './mostrar-demandas.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarDemandasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarDemandasPageRoutingModule {}
