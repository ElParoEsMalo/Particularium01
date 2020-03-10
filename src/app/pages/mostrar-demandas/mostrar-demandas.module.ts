import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarDemandasPageRoutingModule } from './mostrar-demandas-routing.module';

import { MostrarDemandasPage } from './mostrar-demandas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarDemandasPageRoutingModule
  ],
  declarations: [MostrarDemandasPage]
})
export class MostrarDemandasPageModule {}
