import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Nature } from '../entity/Nature';
import { PATH_NATURE, PATH_MISSIONS } from '../constantes';
import { RecupNatureService } from '../services/recupNatureService/recup-nature.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormulaireNatureServiceService } from '../services/formulaireNatureService/formulaire-nature.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nature-tableau',
  templateUrl: './nature-tableau.component.html',
  styleUrls: ['./nature-tableau.component.css']
})
export class NatureTableauComponent implements OnInit {

  private listeNatures: Array<Nature> = new Array<Nature>();
  nature: Nature = new Nature('', true, true, 0, 0, false, new Date(), 0);
  nomCtrl: FormControl;
  facturationCtrl: FormControl;
  pourcentageCtrl: FormControl;
  tjmCtrl: FormControl;
  primeCtrl: FormControl;

  natureForm: FormGroup;
  constructor(fb: FormBuilder, private router: Router, private route: ActivatedRoute, private natureService: RecupNatureService, private formulaireNatureService: FormulaireNatureServiceService) {

    this.nomCtrl = fb.control('', [Validators.required]);
    this.facturationCtrl = fb.control('', [Validators.required]);
    this.pourcentageCtrl = fb.control('', [Validators.required]);
    this.tjmCtrl = fb.control('', [Validators.required]);
    this.primeCtrl = fb.control('', [Validators.required]);

    this.natureForm = fb.group({
      nom: this.nomCtrl,
      facturation: this.facturationCtrl,
      pourcentage: this.pourcentageCtrl,
      tjm: this.tjmCtrl,
      prime: this.primeCtrl
    });
  }
  
  navigateToMissions() {
    this.router.navigate([PATH_MISSIONS])
  }

  handleSubmit() {
    console.log('SUBMIT', this.natureForm.value);
  }


  ajouterNature() {
    console.log('nature : ', this.nature);
    this.formulaireNatureService.postNature(new Nature(this.nature.nom, this.nature.facturation, this.nature.prime, this.nature.pourcentage, this.nature.plafond, this.nature.plafondDepassable, this.nature.debutValidite,this.nature.tjm,this.nature.finValidite)).subscribe();
  }

  // Supprimer une nature
  suppressionNature(nature: Nature) {
    console.log('Delete', nature);
    this.formulaireNatureService.delete(nature).subscribe();
  }

  editerNature(nature: Nature) {
  console.log('Update', nature);
    this.formulaireNatureService.put(new Nature(this.nature.nom, this.nature.facturation, this.nature.prime, this.nature.pourcentage, this.nature.plafond, this.nature.plafondDepassable, this.nature.debutValidite,this.nature.tjm,this.nature.finValidite),nature.id).subscribe()
  }

  setFacturation(value: boolean) {
    this.nature.facturation = value;
  }

  ngOnInit() {
 
   this.natureService.getNature().toPromise().then(ln => {
     ln.forEach(n => this.listeNatures.push(n));

   });
}

  recup(index:number){
    this.nature = this.listeNatures[index];
  }

}
