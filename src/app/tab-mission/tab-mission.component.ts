import { Component, OnInit } from '@angular/core';
import { RecupMissionsService } from '../services/recupMissionService/recup-missions.service';
import { Mission, Transport, Statut } from '../entity/Mission';
import { PATH_AJOUT_MISSIONS, PATH_MISSIONS, PATH_MODIFIER_MISSION } from '../constantes';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Nature } from '../entity/Nature';

@Component({
  selector: 'app-tab-mission',
  templateUrl: './tab-mission.component.html',
  styleUrls: ['./tab-mission.component.css']
})
export class TabMissionComponent implements OnInit {

  private listeMissions: Observable<Array<Mission>>;
  private mission: Mission;

  constructor(private router: Router, private missionService: RecupMissionsService) { }

  // Si l'utilisateur clique sur le bouton d'ajout
  // il est renvoyé vers le formulaire d'ajout de mission
  goToAjout(){
    this.router.navigate([PATH_AJOUT_MISSIONS]);
  }

  // Supprimer une mission
  suppressionMission(mission: Mission){
    this.missionService.supprimerMission(mission).subscribe();
    this.listeMissions.subscribe(val => {
      let index = val.indexOf(mission);
      val.splice(index, 1);
    });
    this.listeMissions = this.missionService.getMissionsPourCollab();
  }

  // Renvoie l'utilisateur sur la page de modification
  // de cette mission
  modifierMission(mission: Mission){
    this.router.navigate([PATH_MODIFIER_MISSION, mission.id]);
  }

  // Si l'utilisateur choisit d'afficher une absence
  goToAbsence(mission: Mission){
    //TODO Renvoi vers l'application Gestion-des-absences
  }

  recup(index:number){
    this.mission = this.listeMissions[index];
  }

  ngOnInit() {
    this.listeMissions = this.missionService.getMissionsPourCollab();
    let nature: Nature = new Nature("", false, false, 0, 0, false, new Date(), 0, new Date());
    this.mission = new Mission(new Date(), new Date(), nature, "", "", Transport.AVION, 0, Statut.REJETEE);
  }

}
