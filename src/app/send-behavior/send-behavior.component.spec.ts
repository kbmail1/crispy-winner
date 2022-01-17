import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendBehaviorComponent } from './send-behavior.component';

describe('SendBehaviorComponent', () => {
  let component: SendBehaviorComponent;
  let fixture: ComponentFixture<SendBehaviorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendBehaviorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendBehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
