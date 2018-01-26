import { TestBed, inject } from '@angular/core/testing';

import { FinalizeService } from './finalize.service';

describe('FinalizeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinalizeService]
    });
  });

  it('should be created', inject([FinalizeService], (service: FinalizeService) => {
    expect(service).toBeTruthy();
  }));
});
