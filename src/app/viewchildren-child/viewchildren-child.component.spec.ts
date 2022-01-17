import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildrenChildComponent } from './viewchildren-child.component';

describe('ViewchildrenChildComponent', () => {
  let component: ViewchildrenChildComponent;
  let fixture: ComponentFixture<ViewchildrenChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewchildrenChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchildrenChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
