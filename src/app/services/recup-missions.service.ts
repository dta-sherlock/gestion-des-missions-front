import { Injectable } from '@angular/core';
import { Mission, Transport, Statut } from '../entity/Mission';
import { Nature } from '../entity/Nature';

@Injectable()
export class RecupMissionsService {


  constructor() { }

  getMissionsPourCollab(){
    // Création jeu de données pour test
    let listeTest = new Array<Mission>();
    let natureTest: Nature = new Nature("test", false, false, 0, 0);
    let natureTest2: Nature = new Nature("test2", true, false, 5, 586);
    let natureTest3: Nature = new Nature("test3", true, true, 0, 100);

    listeTest.push(new Mission(0,new Date(), new Date(), natureTest, "Nantes", "Orléans", Transport.TRAIN, 0, Statut.EN_ATTENTE_VALIDATION));
    listeTest.push(new Mission(1,new Date(), new Date(), natureTest2, "Nantes", "Lille", Transport.COVOITURAGE, 100, Statut.EN_ATTENTE_VALIDATION));
    listeTest.push(new Mission(2,new Date(), new Date(), natureTest3, "Nantes", "Paris", Transport.AVION, 100, Statut.VALIDEE));

    return listeTest;
  }

}
