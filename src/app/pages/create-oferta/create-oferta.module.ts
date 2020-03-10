import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateOfertaPageRoutingModule } from './create-oferta-routing.module';

import { CreateOfertaPage } from './create-oferta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateOfertaPageRoutingModule
  ],
  declarations: [CreateOfertaPage]
})
export class CreateOfertaPageModule {}
