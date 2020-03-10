
import { MostrarDemandasPageModule } from './../mostrar-demandas/mostrar-demandas.module';
import { CreateDemandaPageModule } from './../create-demanda/create-demanda.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuDemandaPage } from './menu-demanda.page';
import { ProfileStudentPageModule } from '../profileStudent/profileStudent.module';
import { EditProfileStudentPage } from '../edit-profile-student/edit-profile-student.page';
import { EditProfileStudentPageRoutingModule } from '../edit-profile-student/edit-profile-student-routing.module';
import { EditProfileStudentPageModule } from '../edit-profile-student/edit-profile-student.module';

const routes: Routes = [
  {
    path: '',
    component: MenuDemandaPage,
    children: [
      {
        path: 'create',
        loadChildren:  () => CreateDemandaPageModule
      },
      {
        path: 'editprofile',
        loadChildren: () => EditProfileStudentPageModule
      },
      {
        path: 'mostrar-demandas',
        loadChildren: () => MostrarDemandasPageModule
      },
      {
        path: '',
        redirectTo: 'mostrar-demandas',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuDemandaPageRoutingModule {}
