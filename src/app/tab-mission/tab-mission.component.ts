import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router'
import { PATH_AJOUT_MISSION } from '../constantes';
import { RecupMissionsService } from '../services/recup-missions.service';
import { Mission } from '../entity/Mission';

@Component({
  selector: 'app-tab-mission',
  templateUrl: './tab-mission.component.html',
  styleUrls: ['./tab-mission.component.css']
})
export class TabMissionComponent implements OnInit {

  private listeMissions: Array<Mission>;

  constructor(/*private router: Router,*/ private missionService: RecupMissionsService) { }

  // Si l'utilisateur clique sur le bouton d'ajout
  // il est renvoyé vers le formulaire d'ajout de mission
  goToAjout(){
    //this.router.navigate([PATH_AJOUT_MISSION]);
    
  }

  // Supprimer une mission
  suppressionMission(mission: Mission){
    //TODO Suppression via http.delete
    let index = this.listeMissions.indexOf(mission);
    this.listeMissions.splice(index, 1);
  }

  // Renvoie l'utilisateur sur la page de modification
  // de cette mission
  modifierMission(mission: Mission){
    //this.router.navigate([PATH_AJOUT_MISSION], mission.id);
  }

  ngOnInit() {
    this.listeMissions = this.missionService.getMissionsPourCollab();
  }

}
