import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditindividuelComponent } from './editindividuel.component';

describe('EditindividuelComponent', () => {
  let component: EditindividuelComponent;
  let fixture: ComponentFixture<EditindividuelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditindividuelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditindividuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
