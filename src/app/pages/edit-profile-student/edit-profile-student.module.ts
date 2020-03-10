import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProfileStudentPageRoutingModule } from './edit-profile-student-routing.module';

import { EditProfileStudentPage } from './edit-profile-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProfileStudentPageRoutingModule
  ],
  declarations: [EditProfileStudentPage]
})
export class EditProfileStudentPageModule {}
