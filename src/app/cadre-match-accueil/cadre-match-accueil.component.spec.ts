import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadreMatchAccueilComponent } from './cadre-match-accueil.component';

describe('CadreMatchAccueilComponent', () => {
  let component: CadreMatchAccueilComponent;
  let fixture: ComponentFixture<CadreMatchAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadreMatchAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadreMatchAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
