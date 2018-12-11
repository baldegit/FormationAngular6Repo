import { TestBed } from '@angular/core/testing';

import { StorageInterceptorService } from './storage-interceptor.service';

describe('StorageInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorageInterceptorService = TestBed.get(StorageInterceptorService);
    expect(service).toBeTruthy();
  });
});
