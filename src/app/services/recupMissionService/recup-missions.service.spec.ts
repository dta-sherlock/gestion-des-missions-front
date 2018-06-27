import { TestBed, inject } from '@angular/core/testing';

import { RecupMissionsService } from './recup-missions.service';
import { Mission, Transport, Statut } from '../../entity/Mission';
import { Nature } from '../../entity/Nature';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('RecupMissionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [RecupMissionsService]
    });
  });

  it('should be created', inject([RecupMissionsService], (service: RecupMissionsService) => {
    expect(service).toBeTruthy();
  }));

  it('should be a mission with 100€ as prime', function(){
    let natureToTest: Nature = new Nature("Test", false, false, 2, 0, false, new Date(), 0,new Date());
    let missionToTest: Mission = new Mission(new Date(), new Date(), natureToTest, "Paris", "Strasbourg", Transport.TRAIN, 100, Statut.REJETEE);

    expect(missionToTest.prime===100);
  });

  it('should be a mission of one week', function(){
    let natureToTest: Nature = new Nature("Test", false, false, 2, 0, false, new Date(), 0,new Date());
    let missionToTest: Mission = new Mission(new Date("12/12/12"), new Date("19/12/12"), natureToTest, "Paris", "Strasbourg", Transport.TRAIN, 100, Statut.REJETEE);

    expect((missionToTest.dateFin.getDate()-missionToTest.dateDebut.getDate())===7);
  });
});
