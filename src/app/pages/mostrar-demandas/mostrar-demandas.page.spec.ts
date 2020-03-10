import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarDemandasPage } from './mostrar-demandas.page';

describe('MostrarDemandasPage', () => {
  let component: MostrarDemandasPage;
  let fixture: ComponentFixture<MostrarDemandasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarDemandasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarDemandasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
