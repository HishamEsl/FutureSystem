import { TestBed } from '@angular/core/testing';

import { FutureSystemService } from './future-system.service';

describe('FutureSystemService', () => {
  let service: FutureSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FutureSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
