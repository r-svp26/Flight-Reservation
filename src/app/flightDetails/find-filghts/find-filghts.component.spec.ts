import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindFilghtsComponent } from './find-filghts.component';

describe('FindFilghtsComponent', () => {
  let component: FindFilghtsComponent;
  let fixture: ComponentFixture<FindFilghtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindFilghtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindFilghtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
