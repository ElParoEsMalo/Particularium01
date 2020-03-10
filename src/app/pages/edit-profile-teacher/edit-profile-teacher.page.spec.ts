import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditProfileTeacherPage } from './edit-profile-teacher.page';

describe('EditProfileTeacherPage', () => {
  let component: EditProfileTeacherPage;
  let fixture: ComponentFixture<EditProfileTeacherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfileTeacherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditProfileTeacherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
