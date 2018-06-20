import { Injectable } from '@angular/core';
import { Mission, Transport, Statut } from '../../entity/Mission';
import { Nature } from '../../entity/Nature';

@Injectable()
export class RecupMissionsService {


  constructor() { }

  getMissionsPourCollab(){
    // Création jeu de données pour test
    let listeTest = new Array<Mission>();
    let natureTest: Nature = new Nature("test", false, false, 0, 0,160,false);
    let natureTest2: Nature = new Nature("test2", true, false, 5, 586,1500,true);
    let natureTest3: Nature = new Nature("test3", true, true, 0, 100,700,true);
    let absence: Nature = new Nature("Absence", true, false, 0, 0,50, false);

    let mission: Mission = new Mission(new Date(), new Date(), natureTest2, "Nantes", "Lille", Transport.COVOITURAGE, 100, Statut.INITIAL);
    mission.id=1;

    listeTest.push(new Mission(new Date(), new Date(), natureTest, "Nantes", "Orléans", Transport.TRAIN, 0, Statut.EN_ATTENTE_VALIDATION));
    listeTest.push(mission);
    listeTest.push(new Mission(new Date(), new Date(), natureTest3, "Nantes", "Paris", Transport.AVION, 100, Statut.VALIDEE));
    listeTest.push(new Mission(new Date(), new Date(), absence, "", "", Transport.VOITURE_DE_SERVICE, 0, Statut.VALIDEE));

    return listeTest;
  }

}
