import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildrenParentComponent } from './viewchildren-parent.component';

describe('ViewchildrenParentComponent', () => {
  let component: ViewchildrenParentComponent;
  let fixture: ComponentFixture<ViewchildrenParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewchildrenParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchildrenParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
