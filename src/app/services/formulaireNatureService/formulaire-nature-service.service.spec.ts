import { TestBed, inject } from '@angular/core/testing';

import { FormulaireNatureServiceService } from './formulaire-nature-service.service';

describe('FormulaireNatureServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormulaireNatureServiceService]
    });
  });

  it('should be created', inject([FormulaireNatureServiceService], (service: FormulaireNatureServiceService) => {
    expect(service).toBeTruthy();
  }));
});
