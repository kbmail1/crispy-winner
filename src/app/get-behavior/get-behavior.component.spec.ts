import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBehaviorComponent } from './get-behavior.component';

describe('GetBehaviorComponent', () => {
  let component: GetBehaviorComponent;
  let fixture: ComponentFixture<GetBehaviorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetBehaviorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
