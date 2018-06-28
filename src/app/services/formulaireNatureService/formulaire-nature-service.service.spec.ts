import { TestBed, inject } from '@angular/core/testing';

import { FormulaireNatureServiceService } from './formulaire-nature.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FormulaireNatureServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormulaireNatureServiceService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([FormulaireNatureServiceService], (service: FormulaireNatureServiceService) => {
    expect(service).toBeTruthy();
  }));
});
