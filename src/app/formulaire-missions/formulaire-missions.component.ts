import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PATH_MISSIONS } from '../constantes';
import { Mission, Transport, Statut } from '../Entity/Mission';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Nature } from '../Entity/Nature';

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

  constructor(fb: FormBuilder, private router: Router, private route: ActivatedRoute) {

      this.dateDebutCtrl=fb.control('');
      this.dateFinCtrl=fb.control('');
      this.natureCtrl=fb.control('');
      this.villeDArriveeCtrl=fb.control('');
      this.villeDeDepartCtrl=fb.control('');
      this.transportCtrl=fb.control('');
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
  }

  ngOnInit() {
    let today = new Date();
    today.setDate(today.getDate() + 7);
    let nature = new Nature("Conseil", false, false, 0, 0)
    let plusUneSemaine = today;
    this.mission = new Mission(new Date(), plusUneSemaine, nature,"Ville de Depart", "Ville d'arrivée", Transport.VOITURE_DE_SERVICE, 0, Statut.INITIAL);
  }

}
