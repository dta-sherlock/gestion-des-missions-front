import { TestBed, inject } from '@angular/core/testing';

import { RecupMissionsService } from './recup-missions.service';
import { Mission, Transport, Statut } from '../../entity/Mission';
import { Nature } from '../../entity/Nature';

describe('RecupMissionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecupMissionsService]
    });
  });

  it('should be created', inject([RecupMissionsService], (service: RecupMissionsService) => {
    expect(service).toBeTruthy();
  }));

  it('should be a validated mission from Nantes to Paris in plane', function(){
    let natureToTest: Nature = new Nature("Test", true, false, 0, 100, 0, false);
    let missionToTest: Mission = new Mission(new Date(), new Date(), natureToTest, "Nantes", "Paris", Transport.AVION, 100, Statut.VALIDEE);

    expect(missionToTest.statut===Statut.VALIDEE);
    expect(missionToTest.villeDeDepart==="Nantes");
    expect(missionToTest.villeDArrivee==="Paris");
    expect(missionToTest.transport===Transport.AVION);
  });

  it('should be a rejected mission from Paris to Strasbourg in train', function(){
    let natureToTest: Nature = new Nature("Test", true, false, 0, 100, 0, false);
    let missionToTest: Mission = new Mission(new Date(), new Date(), natureToTest, "Paris", "Strasbourg", Transport.TRAIN, 100, Statut.REJETEE);

    expect(missionToTest.statut===Statut.REJETEE);
    expect(missionToTest.villeDeDepart==="Paris");
    expect(missionToTest.villeDArrivee==="Strasbourg");
    expect(missionToTest.transport===Transport.TRAIN);
  });

  it('should be a mission with 100€ as prime', function(){
    let natureToTest: Nature = new Nature("Test", true, false, 0, 100, 0, false);
    let missionToTest: Mission = new Mission(new Date(), new Date(), natureToTest, "Paris", "Strasbourg", Transport.TRAIN, 100, Statut.REJETEE);

    expect(missionToTest.prime===100);
  });

  it('should be a mission of one week', function(){
    let natureToTest: Nature = new Nature("Test", true, false, 0, 100, 0, false);
    let missionToTest: Mission = new Mission(new Date("12/12/12"), new Date("19/12/12"), natureToTest, "Paris", "Strasbourg", Transport.TRAIN, 100, Statut.REJETEE);

    expect((missionToTest.dateFin.getDate()-missionToTest.dateDebut.getDate())===7);
  });
});
