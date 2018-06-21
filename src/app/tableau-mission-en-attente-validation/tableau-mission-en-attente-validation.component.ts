import { Component, OnInit } from '@angular/core';
import { RecupMissionsService } from '../services/recup-missions.service';
import { Mission, Transport, Statut } from '../entity/Mission';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tableau-mission-en-attente-validation',
  templateUrl: './tableau-mission-en-attente-validation.component.html',
  styleUrls: ['./tableau-mission-en-attente-validation.component.css']
})
export class TableauMissionEnAttenteValidationComponent implements OnInit {

  listeMissions:Array<Mission>

  constructor(private missionService:RecupMissionsService, private cookie:CookieService) { }

  isAcceptMission(accept:Boolean, mission:Mission):Mission{
    console.log("accept =",accept);
    console.log(Number.parseInt(this.cookie.get('test')));
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
    this.listeMissions = this.missionService.getMissionsPourCollab();
  }

}
