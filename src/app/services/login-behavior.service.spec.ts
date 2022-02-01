import { TestBed } from '@angular/core/testing';

import { LoginBehaviorService } from './login-behavior.service';

describe('LoginBehaviorService', () => {
  let service: LoginBehaviorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginBehaviorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
