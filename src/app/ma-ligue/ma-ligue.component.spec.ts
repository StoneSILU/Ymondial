import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaLigueComponent } from './ma-ligue.component';

describe('MaLigueComponent', () => {
  let component: MaLigueComponent;
  let fixture: ComponentFixture<MaLigueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaLigueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaLigueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
