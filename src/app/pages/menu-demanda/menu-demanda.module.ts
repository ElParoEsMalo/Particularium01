import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuDemandaPageRoutingModule } from './menu-demanda-routing.module';

import { MenuDemandaPage } from './menu-demanda.page';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuDemandaPageRoutingModule,
  
   
  ],
  declarations: [MenuDemandaPage]
})
export class MenuDemandaPageModule {
 
}
