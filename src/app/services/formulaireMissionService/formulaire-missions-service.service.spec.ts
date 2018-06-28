import { TestBed, inject } from '@angular/core/testing';

import  FormulaireMissionsServiceService  from './formulaire-missions.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FormulaireMissionsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormulaireMissionsServiceService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([FormulaireMissionsServiceService], (service: FormulaireMissionsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
