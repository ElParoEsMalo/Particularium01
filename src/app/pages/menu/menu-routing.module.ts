
import { CreateOfertaPageModule } from './../create-oferta/create-oferta.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';
import { MostrarOfertasPageModule } from '../mostrar-ofertas/mostrar-ofertas.module';

import { EditProfileTeacherPageRoutingModule } from '../edit-profile-teacher/edit-profile-teacher-routing.module';
import { EditProfileTeacherPageModule } from '../edit-profile-teacher/edit-profile-teacher.module';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'create',
        loadChildren:  () => CreateOfertaPageModule
      },
      {
        path: 'editprofile',
        loadChildren: () => EditProfileTeacherPageModule
      },
      {
        path: 'mostrar-ofertas',
        loadChildren: () => MostrarOfertasPageModule
      },
      {
        path: '',
        redirectTo: 'mostrar-ofertas',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
