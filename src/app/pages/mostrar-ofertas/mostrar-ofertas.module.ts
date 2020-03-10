import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarOfertasPageRoutingModule } from './mostrar-ofertas-routing.module';

import { MostrarOfertasPage } from './mostrar-ofertas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarOfertasPageRoutingModule
  ],
  declarations: [MostrarOfertasPage]
})
export class MostrarOfertasPageModule {}
