import { TestBed } from '@angular/core/testing';

import { MessageStorageService } from './message-storage.service';

describe('MessageStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageStorageService = TestBed.get(MessageStorageService);
    expect(service).toBeTruthy();
  });
});
