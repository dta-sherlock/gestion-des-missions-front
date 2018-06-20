import { Component, OnInit } from '@angular/core';
import { RecupMissionsService } from '../services/recupMissionService/recup-missions.service';
import { Mission } from '../entity/Mission';
import { PATH_AJOUT_MISSIONS, PATH_MISSIONS } from '../constantes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-mission',
  templateUrl: './tab-mission.component.html',
  styleUrls: ['./tab-mission.component.css']
})
export class TabMissionComponent implements OnInit {

  private listeMissions: Array<Mission>;

  constructor(private router: Router, private missionService: RecupMissionsService) { }

  // Si l'utilisateur clique sur le bouton d'ajout
  // il est renvoyé vers le formulaire d'ajout de mission
  goToAjout(){
    this.router.navigate([PATH_AJOUT_MISSIONS]);
  }

  // Supprimer une mission
  suppressionMission(mission: Mission){
    //TODO Suppression via http.delete
    let index = this.listeMissions.indexOf(mission);
    this.listeMissions.splice(index, 1);
    this.router.navigate([PATH_MISSIONS]);
  }

  // Renvoie l'utilisateur sur la page de modification
  // de cette mission
  modifierMission(mission: Mission){
    this.router.navigate([PATH_AJOUT_MISSIONS, mission.id]);
  }

  // Si l'utilisateur choisit d'afficher une absence
  goToAbsence(mission: Mission){
    //TODO Renvoi vers l'application Gestion-des-absences
  }

  ngOnInit() {
    this.listeMissions = this.missionService.getMissionsPourCollab();
  }

}
