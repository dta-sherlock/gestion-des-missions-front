import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Nature } from '../entity/Nature';
import { PATH_MISSIONS } from '../constantes';
import { Mission, Transport, Statut } from '../entity/Mission';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormulaireMissionsServiceService } from '../services/formulaireMissionService/formulaire-missions.service';
import { isGoodDateDebutValidator, isGoodDateFinValidator, isEmptyValidator } from '../Validator/Mission/MissionValidator';
import { RecupNatureService } from '../services/recupNatureService/recup-nature.service';

@Component({
  selector: 'app-modifier-mission',
  templateUrl: './modifier-mission.component.html',
  styleUrls: ['./modifier-mission.component.css'],
  providers: [
    RecupNatureService, FormulaireMissionsServiceService
  ]
})
export class ModifierMissionComponent implements OnInit {

  listeNatures: Array<Nature> = new Array<Nature>();
  natureInitiale: Nature = new Nature("tst", null, null, null, null, null, null, null, null);
  mission: Mission = new Mission(new Date(), new Date(), this.natureInitiale, "", "", Transport.VOITURE_DE_SERVICE, 0, Statut.INITIAL);
  newMission: Mission = new Mission(new Date(), new Date(), this.natureInitiale, "", "", Transport.VOITURE_DE_SERVICE, 0, Statut.INITIAL);


  dateDebutCtrl: FormControl;
  dateFinCtrl: FormControl;
  natureCtrl: FormControl;
  villeDeDepartCtrl: FormControl;
  villeDArriveeCtrl: FormControl;
  transportCtrl: FormControl;
  primeCtrl: FormControl;

  missionForm: FormGroup;

  constructor(private natureService: RecupNatureService, fb: FormBuilder, private router: Router, private route: ActivatedRoute, private missionService: FormulaireMissionsServiceService) {

    this.dateDebutCtrl = fb.control('', [Validators.required, isGoodDateDebutValidator]);
    this.dateFinCtrl = fb.control('', [Validators.required, isGoodDateFinValidator]);
    this.natureCtrl = fb.control('', [Validators.required, isEmptyValidator]);
    this.villeDArriveeCtrl = fb.control('', [Validators.required]);
    this.villeDeDepartCtrl = fb.control('', [Validators.required]);
    this.transportCtrl = fb.control('', [Validators.required]);
    this.primeCtrl = fb.control('');

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

  //recupere les valeurs des enums
  transports = Object.keys(Transport).map(k => Transport[k]);

  handleSubmit() {
    setTimeout(() => {
      this.router.navigate([PATH_MISSIONS]);
    }, 100);
  }

  modifierMission(mission: Mission) {
    let i = 0;
    while (this.listeNatures[i].nom != this.missionForm.value.nature) {
      i = i + 1;
    }
    mission.nature = this.listeNatures[i];
    console.log('Update', mission);
    this.missionService.put(new Mission(mission.dateDebut, mission.dateFin, mission.nature, mission.villeDeDepart, mission.villeDArrivee, mission.transport, mission.prime, mission.statut), this.mission.id).subscribe()
  }

  ngOnInit() {

    this.natureInitiale = new Nature("", false, false, 2, 100, true, new Date(), 15, new Date());
    this.natureService.getNature().toPromise().then(ln => {
      ln.forEach(n => this.listeNatures.push(n));
    });
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.mission.id = +params.get('idMission');
    });
    this.missionService.getMissionById(this.mission.id).toPromise().then(m => this.mission = m);
    this.missionService.getMissionById(this.mission.id).toPromise().then(m => this.newMission = m);
    console.log(this.mission)
  }

}
