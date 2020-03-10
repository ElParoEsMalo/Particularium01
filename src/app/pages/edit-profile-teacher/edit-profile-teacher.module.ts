import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProfileTeacherPageRoutingModule } from './edit-profile-teacher-routing.module';

import { EditProfileTeacherPage } from './edit-profile-teacher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProfileTeacherPageRoutingModule
  ],
  declarations: [EditProfileTeacherPage]
})
export class EditProfileTeacherPageModule {}
