import { TestBed, inject } from '@angular/core/testing';

import { EnsureAuthenticatedAdminService } from './ensure-authenticated-admin.service';

describe('EnsureAuthenticatedAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnsureAuthenticatedAdminService]
    });
  });

  it('should be created', inject([EnsureAuthenticatedAdminService], (service: EnsureAuthenticatedAdminService) => {
    expect(service).toBeTruthy();
  }));
});
