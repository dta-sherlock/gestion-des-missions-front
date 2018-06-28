import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Nature } from '../entity/Nature';
import { PATH_MISSIONS } from '../constantes';
import { Mission, Transport, Statut } from '../entity/Mission';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import FormulaireMissionsServiceService from '../services/formulaireMissionService/formulaire-missions.service';
import { isGoodDateDebutValidator, isGoodDateFinValidator, isEmptyValidator } from '../Validator/Mission/MissionValidator';
import { RecupNatureService } from '../services/recupNatureService/recup-nature.service';

@Component({
  selector: 'app-formulaire-missions',
  templateUrl: './formulaire-missions.component.html',
  styleUrls: ['./formulaire-missions.component.css'],
  providers: [
    Document,
    RecupNatureService
  ]
})
export class FormulaireMissionsComponent implements OnInit {
  private listeNatures: Array<Nature> = new Array<Nature>();
  natureInitiale: Nature = new Nature("tst", null, null, null, null, null, null, null, null);
  mission: Mission = new Mission(new Date(), new Date(), this.natureInitiale, "", "", Transport.VOITURE_DE_SERVICE, 0, Statut.INITIAL);
  
  dateDebutCtrl: FormControl;
  dateFinCtrl: FormControl;
  natureCtrl: FormControl;
  villeDeDepartCtrl: FormControl;
  villeDArriveeCtrl: FormControl;
  transportCtrl: FormControl;
  primeCtrl: FormControl;

  missionForm: FormGroup;

  constructor(private natureService: RecupNatureService, private document: Document, fb: FormBuilder, private router: Router, private route: ActivatedRoute, private missionService: FormulaireMissionsServiceService) {

    this.dateDebutCtrl = fb.control('', [Validators.required, isGoodDateDebutValidator]),
      this.dateFinCtrl = fb.control('', [Validators.required, isGoodDateFinValidator])
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

  navigateToMissions() {
    this.router.navigate([PATH_MISSIONS])
  }

  //TODO importer liste des noms des natures 

  //recupere les valeurs des enums
  transports = Object.keys(Transport).map(k => Transport[k]);

  handleSubmit() {

    let i = 0;
    while (this.listeNatures[i].nom != this.missionForm.value.nature) {
      i = i + 1;
    }
    this.mission.nature=this.listeNatures[i];
    this.missionService.postMission(new Mission(this.mission.dateDebut, this.mission.dateFin, this.mission.nature, this.mission.villeDeDepart, this.mission.villeDArrivee, this.mission.transport, 0, Statut.INITIAL)).subscribe();
    setTimeout(() => {
      this.router.navigate([PATH_MISSIONS]);
    }, 100);
  }

  ngOnInit() {

    this.natureInitiale = new Nature("", false, false, 2, 100, true, new Date(), 15, new Date());
    this.natureService.getNature().toPromise().then(ln => {
      ln.forEach(n => this.listeNatures.push(n));
    });
    let today = new Date();
    let now = new Date();
    now.setDate(today.getDate() + 1);
    let tomorrow = now;
    today.setDate(today.getDate() + 8);
    let plusUneSemaine = today;
    this.mission.dateDebut = tomorrow;
    this.mission.dateFin = plusUneSemaine;
  }
}
