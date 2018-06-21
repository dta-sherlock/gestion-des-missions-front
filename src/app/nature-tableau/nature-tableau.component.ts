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
  tjmCtrl: FormControl;
  primeCtrl: FormControl;

  natureForm: FormGroup;
  constructor(fb: FormBuilder, private router: Router, private route: ActivatedRoute, private natureService: RecupNatureService, private formulaireNatureService: FormulaireNatureServiceService) {

    this.nomCtrl = fb.control('', [Validators.required]);
    this.factureeCtrl = fb.control('', [Validators.required]);
    this.versementPrimeCtrl = fb.control('', [Validators.required]);
    this.tjmCtrl = fb.control('', [Validators.required]);
    this.primeCtrl = fb.control('', [Validators.required]);

    this.natureForm = fb.group({
      nom: this.nomCtrl,
      facturee: this.factureeCtrl,
      versementPrime: this.versementPrimeCtrl,
      tjm: this.tjmCtrl,
      prime: this.primeCtrl
    });
  }
  navigateToMissions() {
    this.router.navigate([PATH_MISSIONS])
  }

  handleSubmit() {
    console.log('SUBMIT', this.natureForm.value);
    this.formulaireNatureService.postNature(new Nature(this.nature.nom, this.nature.facturee, this.nature.versementPrime, null, null, null, null)).subscribe();
  }


  ajouterNature() {
    console.log('nature : ', this.nature);
    this.formulaireNatureService.post(new Nature(this.nature.nom, this.nature.facturee, this.nature.versementPrime, this.nature.tjm, this.nature.prime, this.nature.plafond, this.nature.depassementFrais)).subscribe();
  }

  // Supprimer une nature
  suppressionNature(nature: Nature) {
    console.log('Delete', nature);
    this.formulaireNatureService.delete(nature).subscribe();
  }

  editerNature(nature: Nature) {
  console.log('Update', nature);
    this.formulaireNatureService.put(new Nature(nature.nom, nature.facturee, nature.versementPrime,nature.tjm, nature.prime, nature.plafond, nature.depassementFrais),nature.id).subscribe()
  }

  ngOnInit() {
    this.nature = new Nature("", false, false, 0, 0, 0,false);
    this.listeNatures = this.natureService.getNature();
  }

  recup(index:number){
    this.nature = this.listeNatures[index];
  }

}
