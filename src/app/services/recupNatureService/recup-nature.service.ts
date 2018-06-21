import { Injectable } from '@angular/core';
import { Nature } from '../../entity/Nature';

Injectable()
export class RecupNatureService {

  constructor() { }

  getNature(){
    // Création jeu de données pour test
    /*let listeTest = new Array<Nature>();
    let natureTest: Nature = new Nature("test", false, false, 0, 0,160,false);
    let natureTest2: Nature = new Nature("test2", true, false, 5, 586,1500,true);
    let natureTest3: Nature = new Nature("test4", false, true, 18, 1000,150,true);
    let natureTest4: Nature = new Nature("test3", true, true, 0, 100,11000,false);
 
    

    listeTest.push(natureTest);
    listeTest.push(natureTest2);
    listeTest.push(natureTest3);
    listeTest.push(natureTest4);
    

    return listeTest;*/
  }
}
