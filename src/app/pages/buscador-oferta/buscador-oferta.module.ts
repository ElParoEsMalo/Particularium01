import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscadorOfertaPageRoutingModule } from './buscador-oferta-routing.module';

import { BuscadorOfertaPage } from './buscador-oferta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscadorOfertaPageRoutingModule
  ],
  declarations: [BuscadorOfertaPage]
})
export class BuscadorOfertaPageModule {}
