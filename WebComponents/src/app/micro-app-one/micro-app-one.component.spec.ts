import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroAppOneComponent } from './micro-app-one.component';

describe('MicroAppOneComponent', () => {
  let component: MicroAppOneComponent;
  let fixture: ComponentFixture<MicroAppOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroAppOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroAppOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
