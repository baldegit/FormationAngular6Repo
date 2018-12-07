import { TestBed } from '@angular/core/testing';

import { MessageManagerService } from './message-manager.service';

describe('MessageManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageManagerService = TestBed.get(MessageManagerService);
    expect(service).toBeTruthy();
  });
});
