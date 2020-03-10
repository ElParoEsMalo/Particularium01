import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateOfertaPage } from './create-oferta.page';

describe('CreateOfertaPage', () => {
  let component: CreateOfertaPage;
  let fixture: ComponentFixture<CreateOfertaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOfertaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateOfertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
