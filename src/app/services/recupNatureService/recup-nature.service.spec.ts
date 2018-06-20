import { TestBed, inject } from '@angular/core/testing';

import { RecupNatureService } from './recup-nature.service';

describe('RecupNatureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecupNatureService]
    });
  });

  it('should be created', inject([RecupNatureService], (service: RecupNatureService) => {
    expect(service).toBeTruthy();
  }));
});
