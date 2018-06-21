import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Nature } from '../entity/Nature';
import { PATH_NATURE, PATH_MISSIONS } from '../constantes';
import { RecupNatureService } from '../services/recupNatureService/recup-nature.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormulaireNatureServiceService } from '../services/formulaireNatureService/formulaire-nature-service.service';

@Component({
  selector: 'app-nature-tableau',
  templateUrl: './nature-tableau.component.html',
  styleUrls: ['./nature-tableau.component.css']
})
export class NatureTableauComponent implements OnInit {

  private listeNatures: Array<Nature>;
  nature: Nature;

  nomCtrl: FormControl;
  factureeCtrl: FormControl;
  versementPrimeCtrl: FormControl;

  natureForm: FormGroup;
  constructor(fb: FormBuilder, private router: Router, private route: ActivatedRoute, private natureService: RecupNatureService, private formulaireNatureService: FormulaireNatureServiceService) {

    this.nomCtrl = fb.control('', [Validators.required]);
    this.factureeCtrl = fb.control('', [Validators.required]);
    this.versementPrimeCtrl = fb.control('', [Validators.required]);

    this.natureForm = fb.group({
      nom: this.nomCtrl,
      facturee: this.factureeCtrl,
      versementPrime: this.versementPrimeCtrl
    });
  }
  navigateToMissions() {
    this.router.navigate([PATH_MISSIONS])
  }

  handleSubmit() {
    console.log('SUBMIT', this.natureForm.value);
    //this.formulaireNatureService.postNature(new Nature(this.nature.nom, this.nature.facturee, this.nature.versementPrime, null, null, null, null)).subscribe();
  }


  ajoutNature() {

  }

  // Supprimer une nature
  suppressionNature(nature: Nature) {

  }


  modifierNature(nature: Nature) {

  }

  ngOnInit() {
    //this.nature = new Nature("", false, false, 0, 0,160,false);
    //this.listeNatures = this.natureService.getNature();
  }


}
