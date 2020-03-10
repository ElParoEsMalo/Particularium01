import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateDemandaPageRoutingModule } from './create-demanda-routing.module';

import { CreateDemandaPage } from './create-demanda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateDemandaPageRoutingModule
  ],
  declarations: [CreateDemandaPage]
})
export class CreateDemandaPageModule {}
