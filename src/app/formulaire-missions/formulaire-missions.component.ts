import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Nature } from '../entity/Nature';
import { PATH_MISSIONS } from '../constantes';
import { Mission, Transport, Statut } from '../entity/Mission';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import  FormulaireMissionsServiceService  from '../services/formulaireMissionService/formulaire-missions-service.service';
import { isGoodDateDebutValidator } from '../Validator/Mission/MissionValidator';

@Component({
  selector: 'app-formulaire-missions',
  templateUrl: './formulaire-missions.component.html',
  styleUrls: ['./formulaire-missions.component.css']
})
export class FormulaireMissionsComponent implements OnInit {

  mission: Mission;

  dateDebutCtrl: FormControl;
  dateFinCtrl: FormControl;
  natureCtrl: FormControl;
  villeDeDepartCtrl: FormControl;
  villeDArriveeCtrl: FormControl;
  transportCtrl: FormControl;
  primeCtrl: FormControl;

  missionForm: FormGroup;

  constructor(fb: FormBuilder, private router: Router, private route: ActivatedRoute, private missionService:FormulaireMissionsServiceService) {

      this.dateDebutCtrl=fb.control('',[Validators.required, isGoodDateDebutValidator]);
      this.dateFinCtrl=fb.control('',[Validators.required]);
      this.natureCtrl=fb.control('',[Validators.required]);
      this.villeDArriveeCtrl=fb.control('',[Validators.required]);
      this.villeDeDepartCtrl=fb.control('',[Validators.required]);
      this.transportCtrl=fb.control('',[Validators.required]);
      this.primeCtrl=fb.control('');

    this.missionForm = fb.group({
      dateDebut: this.dateDebutCtrl,
      dateFin: this.dateFinCtrl,
      nature: this.natureCtrl,
      villeDArrivee: this.villeDArriveeCtrl,
      villeDeDepart: this.villeDeDepartCtrl,
      transport: this.transportCtrl,
      prime: this.primeCtrl
    });
  }

  navigateToMissions() {
    this.router.navigate([PATH_MISSIONS])
  }

  //TODO importer liste des noms des natures 

  //recupere les valeurs des enums
   transports=Object.keys(Transport).map(k=>Transport[k]);

  handleSubmit() {
    console.log('SUBMIT', this.missionForm.value);
    this.missionService.postMission(new Mission(this.mission.dateDebut,this.mission.dateFin,this.mission.nature,this.mission.villeDeDepart,this.mission.villeDArrivee,this.mission.transport,this.mission.prime, Statut.INITIAL)).subscribe();
  }


  ngOnInit() {
    let today = new Date();
    let now= new Date();
    now.setDate(today.getDate() +1);
    let tomorrow=now; 
    today.setDate(today.getDate() + 8);
    let plusUneSemaine = today;
    this.mission = new Mission(tomorrow, plusUneSemaine, null,"Ville de Depart", "Ville d'arrivée", Transport.VOITURE_DE_SERVICE, 0, Statut.INITIAL);
  }

}
