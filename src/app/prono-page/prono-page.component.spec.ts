import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronoPageComponent } from './prono-page.component';

describe('PronoPageComponent', () => {
  let component: PronoPageComponent;
  let fixture: ComponentFixture<PronoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
