import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmatchPageComponent } from './newmatch-page.component';

describe('NewmatchPageComponent', () => {
  let component: NewmatchPageComponent;
  let fixture: ComponentFixture<NewmatchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewmatchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmatchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
