import { Component, OnInit } from '@angular/core';

import { Mission, Statut } from '../entity/Mission';
import { RecupMissionsService } from '../services/recupMissionService/recup-missions.service';

@Component({
  selector: 'app-tableau-mission-en-attente-validation',
  templateUrl: './tableau-mission-en-attente-validation.component.html',
  styleUrls: ['./tableau-mission-en-attente-validation.component.css']
})
export class TableauMissionEnAttenteValidationComponent implements OnInit {

  listeMissions:Array<Mission>

  constructor(private missionService:RecupMissionsService) { }

  isAcceptMission(accept:Boolean, mission:Mission):Mission{
    if(accept){
      this.listeMissions.indexOf
      mission.statut = Statut.VALIDEE;
    }
    else{
      mission.statut = Statut.REJETEE
    }

    console.log(mission.statut);

    return mission;

  }

  ngOnInit() {
    this.missionService.getMissionsPourCollab().subscribe((value)=>{
      this.listeMissions = value;
    });
  }

}
