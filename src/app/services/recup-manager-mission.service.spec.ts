import { TestBed, inject } from '@angular/core/testing';

import { RecupManagerMissionService } from './recup-manager-mission.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RecupManagerMissionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecupManagerMissionService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([RecupManagerMissionService], (service: RecupManagerMissionService) => {
    expect(service).toBeTruthy();
  }));
});
