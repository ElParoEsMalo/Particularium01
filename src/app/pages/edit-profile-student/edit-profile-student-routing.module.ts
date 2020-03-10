import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditProfileStudentPage } from './edit-profile-student.page';

const routes: Routes = [
  {
    path: '',
    component: EditProfileStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProfileStudentPageRoutingModule {}
