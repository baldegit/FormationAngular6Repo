import { TestBed } from '@angular/core/testing';

import { ContactManagerService } from './contact-manager.service';

describe('ContactManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactManagerService = TestBed.get(ContactManagerService);
    expect(service).toBeTruthy();
  });
});
