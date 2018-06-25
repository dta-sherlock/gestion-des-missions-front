import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Nature } from '../entity/Nature';
import { PATH_MISSIONS } from '../constantes';
import { Mission, Transport, Statut } from '../entity/Mission';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import FormulaireMissionsServiceService from '../services/formulaireMissionService/formulaire-missions.service';
import { isGoodDateDebutValidator } from '../Validator/Mission/MissionValidator';
import { RecupNatureService } from '../services/recupNatureService/recup-nature.service';

@Component({
  selector: 'app-formulaire-missions',
  templateUrl: './formulaire-missions.component.html',
  styleUrls: ['./formulaire-missions.component.css'],
  providers: [
    Document,
  ]
})
export class FormulaireMissionsComponent implements OnInit {
  private listeNatures: Array<Nature> = new Array<Nature>();
  mission: Mission = new Mission(new Date(), new Date(), null, "", "", Transport.VOITURE_DE_SERVICE, 0, Statut.INITIAL);;
  natureInitiale: Nature = new Nature("", false, false, 2, 100, true, new Date(), 15, new Date());
  
  dateDebutCtrl: FormControl;
  dateFinCtrl: FormControl;
  natureCtrl: FormControl;
  villeDeDepartCtrl: FormControl;
  villeDArriveeCtrl: FormControl;
  transportCtrl: FormControl;
  primeCtrl: FormControl;

  missionForm: FormGroup;

  constructor(private natureService: RecupNatureService, private document: Document, fb: FormBuilder, private router: Router, private route: ActivatedRoute, private missionService: FormulaireMissionsServiceService) {

    this.dateDebutCtrl = fb.control('', [Validators.required, isGoodDateDebutValidator]);
    this.dateFinCtrl = fb.control('', [Validators.required]);
    this.natureCtrl = fb.control('', [Validators.required]);
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
    console.log("la mission est nature", this.natureInitiale);
    this.missionService.postMission(new Mission(this.mission.dateDebut, this.mission.dateFin, this.natureInitiale, this.mission.villeDeDepart, this.mission.villeDArrivee, this.mission.transport, 0, Statut.INITIAL)).subscribe();
    //console.log('SUBMIT', this.mission.dateDebut, this.mission.dateFin, this.natureInitiale, this.mission.villeDeDepart, this.mission.villeDArrivee, this.mission.transport, 0, Statut.INITIAL);
    this.router.navigate([PATH_MISSIONS])
  }


  setDateDebutFormated(value: string) {
    this.mission.dateDebut = new Date(value);
  }

  setDateFinFormated(value: string) {
    this.mission.dateFin = new Date(value);
  }

  ngOnInit() {

    this.natureService.getNature().toPromise().then(ln => {
      ln.forEach(n => this.listeNatures.push(n));});

      if (this.mission.id != null) {
        this.route.paramMap.subscribe((params: ParamMap) => {
          this.mission.id = +params.get('idMission');
        });
        this.missionService.getMissionById(this.mission.id).toPromise().then(m => this.mission = m);
      } else {
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
}
