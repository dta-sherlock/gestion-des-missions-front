import { TestBed, inject } from '@angular/core/testing';

import { RecupManagerMissionService } from './recup-manager-mission.service';

describe('RecupManagerMissionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecupManagerMissionService]
    });
  });

  it('should be created', inject([RecupManagerMissionService], (service: RecupManagerMissionService) => {
    expect(service).toBeTruthy();
  }));
});
