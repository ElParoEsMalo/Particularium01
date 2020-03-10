import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateDemandaPage } from './create-demanda.page';

describe('CreateDemandaPage', () => {
  let component: CreateDemandaPage;
  let fixture: ComponentFixture<CreateDemandaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDemandaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateDemandaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
