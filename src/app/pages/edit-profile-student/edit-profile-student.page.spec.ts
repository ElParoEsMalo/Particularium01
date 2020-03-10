import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditProfileStudentPage } from './edit-profile-student.page';

describe('EditProfileStudentPage', () => {
  let component: EditProfileStudentPage;
  let fixture: ComponentFixture<EditProfileStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfileStudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditProfileStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
