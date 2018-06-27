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
  natureModif: Nature = new Nature(this.nature.nom, this.nature.facturation, this.nature.prime, this.nature.pourcentage, this.nature.plafond, this.nature.plafondDepassable, this.nature.debutValidite, this.nature.tjm, this.nature.finValidite)

  nomCtrl: FormControl;
  facturationCtrl: FormControl;
  pourcentageCtrl: FormControl;
  idCtrl: FormControl;
  tjmCtrl: FormControl;
  primeCtrl: FormControl;

  natureForm: FormGroup;
  modifForm: FormGroup;
  constructor(fb: FormBuilder, private router: Router, private route: ActivatedRoute, private natureService: RecupNatureService, private formulaireNatureService: FormulaireNatureServiceService) {

    this.nomCtrl = fb.control('', [Validators.required]);
    this.facturationCtrl = fb.control('', [Validators.required]);
    this.pourcentageCtrl = fb.control('', [Validators.required]);
    this.tjmCtrl = fb.control('', [Validators.required]);
    this.primeCtrl = fb.control('', [Validators.required]);

    this.natureForm = fb.group({
      id: this.idCtrl,
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
    console.log('Post: ', this.nature);
    this.listeNatures.push(this.nature)
    this.formulaireNatureService.postNature(new Nature(this.nature.nom, this.nature.facturation, this.nature.prime, this.nature.pourcentage, this.nature.plafond, this.nature.plafondDepassable, this.nature.debutValidite, this.nature.tjm, this.nature.finValidite)).subscribe();
  }

  // Supprimer une nature
  suppressionNature(nature: Nature) {
    console.log('Delete', nature);
    this.listeNatures.splice(this.listeNatures.indexOf(nature), 1)
    this.formulaireNatureService.delete(nature).subscribe();
  }

  editerNature(nature: Nature, ancienneNature: Nature) {
    
    nature.id = ancienneNature.id;
    console.log('Update', nature);
    this.formulaireNatureService.put(new Nature(nature.nom, nature.facturation, nature.prime, nature.pourcentage, nature.plafond, nature.plafondDepassable, nature.debutValidite, nature.tjm, nature.finValidite), nature.id).subscribe()
    console.log(nature.facturation, nature.prime)
    this.listeNatures[this.listeNatures.indexOf(ancienneNature)] = nature;

  }

  setFacturation(value: boolean) {
    this.nature.facturation = value;
  }

  ngOnInit() {

    this.natureService.getNature().toPromise().then(ln => {
      ln.forEach(n => this.listeNatures.push(n));

    });
  }

  recup(index: number) {
    this.nature = this.listeNatures[index];
    this.natureModif = new Nature(this.nature.nom, this.nature.facturation, this.nature.prime, this.nature.pourcentage, this.nature.plafond, this.nature.plafondDepassable, this.nature.debutValidite, this.nature.tjm, this.nature.finValidite);
  }

}
