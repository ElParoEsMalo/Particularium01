import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuscadorOfertaPage } from './buscador-oferta.page';

describe('BuscadorOfertaPage', () => {
  let component: BuscadorOfertaPage;
  let fixture: ComponentFixture<BuscadorOfertaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorOfertaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuscadorOfertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
