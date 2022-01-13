import { TestBed } from '@angular/core/testing';

import { ToremoteService } from './toremote.service';

describe('ToremoteService', () => {
  let service: ToremoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToremoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
