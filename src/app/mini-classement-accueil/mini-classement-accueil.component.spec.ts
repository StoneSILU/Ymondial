import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniClassementAccueilComponent } from './mini-classement-accueil.component';

describe('MiniClassementAccueilComponent', () => {
  let component: MiniClassementAccueilComponent;
  let fixture: ComponentFixture<MiniClassementAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniClassementAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniClassementAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
