import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroAppTwoComponent } from './micro-app-two.component';

describe('MicroAppTwoComponent', () => {
  let component: MicroAppTwoComponent;
  let fixture: ComponentFixture<MicroAppTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroAppTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroAppTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
