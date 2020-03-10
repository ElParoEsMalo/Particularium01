import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuDemandaPage } from './menu-demanda.page';

describe('MenuDemandaPage', () => {
  let component: MenuDemandaPage;
  let fixture: ComponentFixture<MenuDemandaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDemandaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuDemandaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
