import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditProfileTeacherPage } from './edit-profile-teacher.page';

const routes: Routes = [
  {
    path: '',
    component: EditProfileTeacherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProfileTeacherPageRoutingModule {}
