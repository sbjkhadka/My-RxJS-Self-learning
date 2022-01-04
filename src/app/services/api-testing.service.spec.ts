import { TestBed } from '@angular/core/testing';

import { ApiTestingService } from './api-testing.service';

describe('ApiTestingService', () => {
  let service: ApiTestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTestingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
