import { TestBed, inject } from '@angular/core/testing';

import { RegistrationServiceService } from './registration-service.service';

describe('RegistrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistrationServiceService]
    });
  });

  it('should be created', inject([RegistrationServiceService], (service: RegistrationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
