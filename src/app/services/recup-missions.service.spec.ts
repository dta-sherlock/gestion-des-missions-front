import { TestBed, inject } from '@angular/core/testing';

import { RecupMissionsService } from './recup-missions.service';

describe('RecupMissionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecupMissionsService]
    });
  });

  it('should be created', inject([RecupMissionsService], (service: RecupMissionsService) => {
    expect(service).toBeTruthy();
  }));
});
