import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarOfertasPage } from './mostrar-ofertas.page';

describe('MostrarOfertasPage', () => {
  let component: MostrarOfertasPage;
  let fixture: ComponentFixture<MostrarOfertasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarOfertasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarOfertasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
