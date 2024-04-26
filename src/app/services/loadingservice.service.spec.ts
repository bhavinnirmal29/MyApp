import { TestBed } from '@angular/core/testing';

import { LoadingserviceService } from './loadingservice.service';

describe('LoadingserviceService', () => {
  let service: LoadingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
