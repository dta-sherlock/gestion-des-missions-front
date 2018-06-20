import { TestBed, inject } from '@angular/core/testing';

import  FormulaireMissionsServiceService  from './formulaire-missions-service.service';

describe('FormulaireMissionsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormulaireMissionsServiceService]
    });
  });

  it('should be created', inject([FormulaireMissionsServiceService], (service: FormulaireMissionsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
