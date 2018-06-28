import { TestBed, inject } from '@angular/core/testing';

import { RecupNatureService } from './recup-nature.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RecupNatureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecupNatureService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([RecupNatureService], (service: RecupNatureService) => {
    expect(service).toBeTruthy();
  }));
});
